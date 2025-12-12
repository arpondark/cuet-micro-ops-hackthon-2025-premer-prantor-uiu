import { HeadObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { serve } from "@hono/node-server";
import type { ServerType } from "@hono/node-server";
import { sentry } from "@hono/sentry";
import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { cors } from "hono/cors";
import { secureHeaders } from "hono/secure-headers";
import { streamSSE } from "hono/streaming";
import { timeout } from "hono/timeout";
import { rateLimiter } from "hono-rate-limiter";
import client from "prom-client";
import { addExportJob, getJobStatus } from "./queue.ts";
import type { ExportJobProgress, ExportJobResult } from "./queue.ts";

// Helper for optional URL that treats empty string as undefined
const optionalUrl = z
  .string()
  .optional()
  .transform((val) => (val === "" ? undefined : val))
  .pipe(z.url().optional());

// Environment schema
const EnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  S3_REGION: z.string().min(1).default("us-east-1"),
  S3_ACCESS_KEY_ID: z.string().optional(),
  S3_SECRET_ACCESS_KEY: z.string().optional(),
  S3_ENDPOINT: optionalUrl,
  S3_BUCKET_NAME: z.string().default(""),
  S3_FORCE_PATH_STYLE: z.coerce.boolean().default(false),
  SENTRY_DSN: optionalUrl,
  REQUEST_TIMEOUT_MS: z.coerce.number().int().min(1000).default(30000),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().int().min(1000).default(60000),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().int().min(1).default(100),
  CORS_ORIGINS: z
    .string()
    .default("*")
    .transform((val) => (val === "*" ? "*" : val.split(","))),
  // Download delay simulation (in milliseconds)
  DOWNLOAD_DELAY_MIN_MS: z.coerce.number().int().min(0).default(10000), // 10 seconds
  DOWNLOAD_DELAY_MAX_MS: z.coerce.number().int().min(0).default(200000), // 200 seconds
  DOWNLOAD_DELAY_ENABLED: z.coerce.boolean().default(true),
});

// Parse and validate environment
const env = EnvSchema.parse(process.env);

// S3 Client
const s3Client = new S3Client({
  region: env.S3_REGION,
  ...(env.S3_ENDPOINT && { endpoint: env.S3_ENDPOINT }),
  ...(env.S3_ACCESS_KEY_ID &&
    env.S3_SECRET_ACCESS_KEY && {
      credentials: {
        accessKeyId: env.S3_ACCESS_KEY_ID,
        secretAccessKey: env.S3_SECRET_ACCESS_KEY,
      },
    }),
  forcePathStyle: env.S3_FORCE_PATH_STYLE,
});

// Initialize Prometheus metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Custom HTTP metrics for Grafana dashboard
const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "path", "status"],
  registers: [register],
});

const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "HTTP request duration in seconds",
  labelNames: ["method", "path", "status"],
  buckets: [0.01, 0.05, 0.1, 0.5, 1, 2, 5, 10, 30, 60, 120],
  registers: [register],
});

// Unused metrics removed

const app = new OpenAPIHono();

// Request ID middleware - adds unique ID to each request
app.use(async (c, next) => {
  const requestId = c.req.header("x-request-id") ?? crypto.randomUUID();
  c.set("requestId", requestId);
  c.header("x-request-id", requestId);
  await next();
});

// Security headers middleware (helmet-like)
app.use(secureHeaders());

// Prometheus HTTP metrics middleware
app.use(async (c, next) => {
  const start = Date.now();
  await next();
  const duration = (Date.now() - start) / 1000;
  const path = c.req.path;
  const method = c.req.method;
  const status = String(c.res.status);

  // Skip metrics endpoint to avoid recursion
  if (path !== "/metrics") {
    httpRequestsTotal.inc({ method, path, status });
    httpRequestDuration.observe({ method, path, status }, duration);
  }
});

// CORS middleware
app.use(
  cors({
    origin: env.CORS_ORIGINS,
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: [
      "Content-Type",
      "Authorization",
      "X-Request-ID",
      "traceparent",
      "baggage",
    ],
    exposeHeaders: [
      "X-Request-ID",
      "X-RateLimit-Limit",
      "X-RateLimit-Remaining",
    ],
    maxAge: 86400,
  }),
);

// Request timeout middleware
app.use(timeout(env.REQUEST_TIMEOUT_MS));

// Rate limiting middleware
app.use(
  rateLimiter({
    windowMs: env.RATE_LIMIT_WINDOW_MS,
    limit: env.RATE_LIMIT_MAX_REQUESTS,
    standardHeaders: "draft-6",
    keyGenerator: (c) =>
      c.req.header("x-forwarded-for")?.split(",")[0]?.trim() ??
      c.req.header("x-real-ip") ??
      "anonymous",
  }),
);

// Sentry middleware for real-time error tracking
app.use(
  sentry({
    dsn: env.SENTRY_DSN,
    debug: true, // Enable debug mode for real-time feedback
  }),
);

// Prometheus metrics endpoint
app.get("/metrics", async (c) => {
  c.header("Content-Type", register.contentType);
  return c.body(await register.metrics());
});

// =============================================================================
// IN-MEMORY LOG STORAGE FOR REAL-TIME LOGS (Challenge 4)
// =============================================================================
interface LogEntry {
  id: string;
  timestamp: string;
  level: "info" | "warn" | "error" | "debug";
  message: string;
  service: string;
  traceId?: string;
  spanId?: string;
  metadata?: Record<string, unknown>;
}

// Store last 1000 logs in memory
const MAX_LOGS = 1000;
const logsStore: LogEntry[] = [];

// Helper to add log entry
const addLog = (
  level: LogEntry["level"],
  message: string,
  metadata?: Record<string, unknown>,
  traceId?: string,
) => {
  const entry: LogEntry = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    level,
    message,
    service: "delineate-api",
    traceId,
    metadata,
  };
  logsStore.unshift(entry);
  if (logsStore.length > MAX_LOGS) {
    logsStore.pop();
  }
  return entry;
};

// Log all requests
app.use(async (c, next) => {
  const start = Date.now();
  const traceId = c.req.header("traceparent")?.split("-")[1];

  await next();

  const duration = Date.now() - start;
  const level =
    c.res.status >= 500 ? "error" : c.res.status >= 400 ? "warn" : "info";

  addLog(
    level,
    `${c.req.method} ${c.req.path} - ${String(c.res.status)} (${String(duration)}ms)`,
    {
      method: c.req.method,
      path: c.req.path,
      status: c.res.status,
      duration,
      requestId: c.get("requestId"),
    },
    traceId,
  );
});

// Logs API endpoint
app.get("/api/logs", (c) => {
  const limit = Math.min(Number(c.req.query("limit") ?? 100), MAX_LOGS);
  const level = c.req.query("level");
  const since = c.req.query("since");

  let filteredLogs = logsStore;

  if (level) {
    filteredLogs = filteredLogs.filter((log) => log.level === level);
  }

  if (since) {
    const sinceDate = new Date(since);
    filteredLogs = filteredLogs.filter(
      (log) => new Date(log.timestamp) > sinceDate,
    );
  }

  return c.json({
    logs: filteredLogs.slice(0, limit),
    total: filteredLogs.length,
    hasMore: filteredLogs.length > limit,
  });
});

// SSE endpoint for real-time log streaming
app.get("/api/logs/stream", (c) => {
  let lastLogId = "";

  return streamSSE(c, async (stream) => {
    // Send existing logs first
    for (const log of logsStore.slice(0, 50).reverse()) {
      await stream.writeSSE({
        data: JSON.stringify(log),
        event: "log",
        id: log.id,
      });
      lastLogId = log.id;
    }

    // Then poll for new logs
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while (true) {
      await stream.sleep(1000);

      const newLogs = logsStore.filter((log) => {
        const lastIndex = logsStore.findIndex((l) => l.id === lastLogId);
        const currentIndex = logsStore.indexOf(log);
        return currentIndex < lastIndex;
      });

      for (const log of newLogs.reverse()) {
        await stream.writeSSE({
          data: JSON.stringify(log),
          event: "log",
          id: log.id,
        });
        lastLogId = log.id;
      }
    }
  });
});

// =============================================================================
// SENTRY REAL-TIME EVENTS (Challenge 4 - Error Tracking)
// =============================================================================
interface SentryEvent {
  id: string;
  timestamp: string;
  type: "error" | "transaction" | "replay";
  message: string;
  level: "fatal" | "error" | "warning" | "info" | "debug";
  data?: Record<string, unknown>;
}

const sentryEventsStore: SentryEvent[] = [];
const MAX_SENTRY_EVENTS = 500;

// Helper to add Sentry event
const addSentryEvent = (
  type: SentryEvent["type"],
  message: string,
  level: SentryEvent["level"] = "info",
  data?: Record<string, unknown>,
) => {
  const event: SentryEvent = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    type,
    message,
    level,
    data,
  };
  sentryEventsStore.unshift(event);
  if (sentryEventsStore.length > MAX_SENTRY_EVENTS) {
    sentryEventsStore.pop();
  }
  console.log(`[Sentry] ${type.toUpperCase()}: ${message}`);
  return event;
};

// Sentry events API endpoint - Get all captured Sentry events
app.get("/api/sentry/events", (c) => {
  const limit = Math.min(Number(c.req.query("limit") ?? 50), MAX_SENTRY_EVENTS);
  const type = c.req.query("type") as SentryEvent["type"] | undefined;
  const level = c.req.query("level") as SentryEvent["level"] | undefined;

  let filtered = sentryEventsStore;

  if (type) {
    filtered = filtered.filter((e) => e.type === type);
  }

  if (level) {
    filtered = filtered.filter((e) => e.level === level);
  }

  return c.json({
    events: filtered.slice(0, limit),
    total: filtered.length,
    hasMore: filtered.length > limit,
    lastUpdated: new Date().toISOString(),
  });
});

// SSE endpoint for real-time Sentry events
app.get("/api/sentry/events/stream", (c) => {
  let lastEventId = "";

  return streamSSE(c, async (stream) => {
    // Send existing events first
    for (const event of sentryEventsStore.slice(0, 100).reverse()) {
      await stream.writeSSE({
        data: JSON.stringify(event),
        event: "sentry-event",
        id: event.id,
      });
      lastEventId = event.id;
    }

    // Then poll for new events
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while (true) {
      await stream.sleep(500);

      const newEvents = sentryEventsStore.filter((e) => {
        const lastIndex = sentryEventsStore.findIndex(
          (x) => x.id === lastEventId,
        );
        const currentIndex = sentryEventsStore.indexOf(e);
        return currentIndex < lastIndex;
      });

      for (const event of newEvents.reverse()) {
        await stream.writeSSE({
          data: JSON.stringify(event),
          event: "sentry-event",
          id: event.id,
        });
        lastEventId = event.id;
      }
    }
  });
});

// ErrorResponseSchema removed

// Error handler with Sentry
app.onError((err, c) => {
  c.get("sentry").captureException(err);
  const requestId = c.get("requestId") as string | undefined;

  // Add to Sentry events store for real-time tracking
  addSentryEvent("error", err.message, "error", {
    stack: err.stack,
    requestId,
    path: c.req.path,
    method: c.req.method,
  });

  // Log error to our store
  addLog("error", `Error: ${err.message}`, {
    stack: err.stack,
    requestId,
  });

  return c.json(
    {
      error: "Internal Server Error",
      message:
        env.NODE_ENV === "development"
          ? err.message
          : "An unexpected error occurred",
      requestId,
    },
    500,
  );
});

// Schemas
const MessageResponseSchema = z
  .object({
    message: z.string(),
  })
  .openapi("MessageResponse");

const HealthResponseSchema = z
  .object({
    status: z.enum(["healthy", "unhealthy"]),
    checks: z.object({
      storage: z.enum(["ok", "error"]),
    }),
  })
  .openapi("HealthResponse");

// Old Download API Schemas removed

// Old Download Start Response Schema removed

// Export Job Schemas (BullMQ + SSE)
const ExportCreateRequestSchema = z
  .object({
    file_ids: z
      .array(z.number().int().min(10000).max(100000000))
      .min(1)
      .max(1000)
      .openapi({ description: "Array of file IDs to export (10K to 100M)" }),
    user_id: z
      .string()
      .min(1)
      .default("anonymous")
      .openapi({ description: "User ID for tracking exports" }),
  })
  .openapi("ExportCreateRequest");

const ExportCreateResponseSchema = z
  .object({
    jobId: z.string().openapi({ description: "Unique job identifier" }),
    status: z.enum(["queued", "processing"]),
    totalFiles: z.number().int(),
    message: z.string(),
    sseUrl: z
      .string()
      .openapi({ description: "SSE endpoint URL for progress updates" }),
    statusUrl: z
      .string()
      .openapi({ description: "Status endpoint URL for polling" }),
  })
  .openapi("ExportCreateResponse");

const ExportStatusResponseSchema = z
  .object({
    jobId: z.string(),
    status: z.enum([
      "waiting",
      "active",
      "completed",
      "failed",
      "delayed",
      "not_found",
    ]),
    progress: z
      .object({
        percent: z.number(),
        currentFile: z.number(),
        totalFiles: z.number(),
        stage: z.enum([
          "queued",
          "processing",
          "uploading",
          "completed",
          "failed",
        ]),
        message: z.string(),
      })
      .nullable(),
    result: z
      .object({
        s3Key: z.string(),
        downloadUrl: z.string(),
        fileSize: z.number(),
        processedFiles: z.number(),
        totalFiles: z.number(),
      })
      .nullable(),
    error: z.string().nullable(),
  })
  .openapi("ExportStatusResponse");

const ExportDownloadResponseSchema = z
  .object({
    jobId: z.string(),
    status: z.enum(["ready", "pending", "failed", "not_found"]),
    downloadUrl: z
      .string()
      .nullable()
      .openapi({ description: "Presigned S3 URL (valid for 1 hour)" }),
    expiresIn: z
      .number()
      .nullable()
      .openapi({ description: "URL expiration in seconds" }),
    message: z.string(),
  })
  .openapi("ExportDownloadResponse");

// =============================================================================
// DOWNLOAD API SCHEMAS (Original Challenge - demonstrates timeout problem)
// =============================================================================

const DownloadInitiateRequestSchema = z
  .object({
    file_ids: z
      .array(z.number().int().min(10000).max(100000000))
      .min(1)
      .max(1000)
      .openapi({ description: "Array of file IDs (10K to 100M)" }),
  })
  .openapi("DownloadInitiateRequest");

const DownloadInitiateResponseSchema = z
  .object({
    jobId: z.string().openapi({ description: "Unique job identifier" }),
    status: z.enum(["queued", "processing"]),
    totalFileIds: z.number().int(),
  })
  .openapi("DownloadInitiateResponse");

const DownloadCheckRequestSchema = z
  .object({
    file_id: z
      .number()
      .int()
      .min(10000)
      .max(100000000)
      .openapi({ description: "Single file ID to check (10K to 100M)" }),
  })
  .openapi("DownloadCheckRequest");

const DownloadCheckResponseSchema = z
  .object({
    file_id: z.number().int(),
    available: z.boolean(),
    s3Key: z
      .string()
      .nullable()
      .openapi({ description: "S3 object key if available" }),
    size: z
      .number()
      .int()
      .nullable()
      .openapi({ description: "File size in bytes" }),
  })
  .openapi("DownloadCheckResponse");

const DownloadStartRequestSchema = z
  .object({
    file_id: z
      .number()
      .int()
      .min(10000)
      .max(100000000)
      .openapi({ description: "File ID to download (10K to 100M)" }),
  })
  .openapi("DownloadStartRequest");

const DownloadStartResponseSchema = z
  .object({
    file_id: z.number().int(),
    status: z.enum(["completed", "failed"]),
    downloadUrl: z
      .string()
      .nullable()
      .openapi({ description: "Presigned download URL if successful" }),
    size: z
      .number()
      .int()
      .nullable()
      .openapi({ description: "File size in bytes" }),
    processingTimeMs: z
      .number()
      .int()
      .openapi({ description: "Time taken to process the download in ms" }),
    message: z.string().openapi({ description: "Status message" }),
  })
  .openapi("DownloadStartResponse");

// Input sanitization for S3 keys - prevent path traversal
const sanitizeS3Key = (fileId: number): string => {
  const sanitizedId = Math.floor(Math.abs(fileId));
  return `downloads/${String(sanitizedId)}.zip`;
};

// S3 health check
const checkS3Health = async (): Promise<boolean> => {
  if (!env.S3_BUCKET_NAME) return true; // Mock mode
  try {
    // Use a lightweight HEAD request on a known path
    const command = new HeadObjectCommand({
      Bucket: env.S3_BUCKET_NAME,
      Key: "__health_check_marker__",
    });
    await s3Client.send(command);
    return true;
  } catch (err) {
    // NotFound is fine - bucket is accessible
    if (err instanceof Error && err.name === "NotFound") return true;
    // AccessDenied or other errors indicate connection issues
    return false;
  }
};

// checkS3Availability removed

// getRandomDelay and sleep removed

// Routes
const rootRoute = createRoute({
  method: "get",
  path: "/",
  tags: ["General"],
  summary: "Root endpoint",
  description: "Returns a welcome message",
  responses: {
    200: {
      description: "Successful response",
      content: {
        "application/json": {
          schema: MessageResponseSchema,
        },
      },
    },
  },
});

const healthRoute = createRoute({
  method: "get",
  path: "/health",
  tags: ["Health"],
  summary: "Health check endpoint",
  description: "Returns the health status of the service and its dependencies",
  responses: {
    200: {
      description: "Service is healthy",
      content: {
        "application/json": {
          schema: HealthResponseSchema,
        },
      },
    },
    503: {
      description: "Service is unhealthy",
      content: {
        "application/json": {
          schema: HealthResponseSchema,
        },
      },
    },
  },
});

app.openapi(rootRoute, (c) => {
  return c.json({ message: "Hello Hono!" }, 200);
});

app.openapi(healthRoute, async (c) => {
  const storageHealthy = await checkS3Health();
  const status = storageHealthy ? "healthy" : "unhealthy";
  const httpStatus = storageHealthy ? 200 : 503;
  return c.json(
    {
      status,
      checks: {
        storage: storageHealthy ? "ok" : "error",
      },
    },
    httpStatus,
  );
});

// =============================================================================
// DOWNLOAD API ENDPOINTS (Original - demonstrates timeout problem)
// =============================================================================

// Random delay helper for simulating long-running downloads
const getRandomDelay = (): number => {
  if (!env.DOWNLOAD_DELAY_ENABLED) return 0;
  const min = env.DOWNLOAD_DELAY_MIN_MS;
  const max = env.DOWNLOAD_DELAY_MAX_MS;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Check S3 availability for a file
const checkS3Availability = async (
  fileId: number,
): Promise<{
  available: boolean;
  s3Key: string | null;
  size: number | null;
}> => {
  if (!env.S3_BUCKET_NAME) {
    return { available: false, s3Key: null, size: null };
  }

  const s3Key = sanitizeS3Key(fileId);
  try {
    const command = new HeadObjectCommand({
      Bucket: env.S3_BUCKET_NAME,
      Key: s3Key,
    });
    const response = await s3Client.send(command);
    return {
      available: true,
      s3Key,
      size: response.ContentLength ?? null,
    };
  } catch {
    return { available: false, s3Key: null, size: null };
  }
};

// Download Initiate Route
const downloadInitiateRoute = createRoute({
  method: "post",
  path: "/v1/download/initiate",
  tags: ["Download"],
  summary: "Initiate download job",
  description: "Initiates a download job for multiple IDs",
  request: {
    body: {
      content: {
        "application/json": {
          schema: DownloadInitiateRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Download job initiated",
      content: {
        "application/json": {
          schema: DownloadInitiateResponseSchema,
        },
      },
    },
  },
});

app.openapi(downloadInitiateRoute, (c) => {
  const { file_ids } = c.req.valid("json");
  const jobId = crypto.randomUUID();
  return c.json(
    {
      jobId,
      status: "queued" as const,
      totalFileIds: file_ids.length,
    },
    200,
  );
});

// Download Check Route
const downloadCheckRoute = createRoute({
  method: "post",
  path: "/v1/download/check",
  tags: ["Download"],
  summary: "Check download availability",
  description:
    "Checks if a single ID is available for download in S3. Add ?sentry_test=true to trigger an error for Sentry testing.",
  request: {
    query: z.object({
      sentry_test: z.string().optional().openapi({
        description:
          "Set to 'true' to trigger an intentional error for Sentry testing",
      }),
    }),
    body: {
      content: {
        "application/json": {
          schema: DownloadCheckRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Availability check result",
      content: {
        "application/json": {
          schema: DownloadCheckResponseSchema,
        },
      },
    },
  },
});

app.openapi(downloadCheckRoute, async (c) => {
  const { sentry_test } = c.req.valid("query");
  const { file_id } = c.req.valid("json");

  // Intentional error for Sentry testing (hackathon challenge)
  if (sentry_test === "true") {
    throw new Error(
      `Sentry test error triggered for file_id=${String(file_id)} - This should appear in Sentry!`,
    );
  }

  const s3Result = await checkS3Availability(file_id);
  return c.json(
    {
      file_id,
      ...s3Result,
    },
    200,
  );
});

// Download Start Route - simulates long-running download with random delay
const downloadStartRoute = createRoute({
  method: "post",
  path: "/v1/download/start",
  tags: ["Download"],
  summary: "Start file download (long-running)",
  description: `Starts a file download with simulated processing delay.
    Processing time varies randomly between ${String(env.DOWNLOAD_DELAY_MIN_MS / 1000)}s and ${String(env.DOWNLOAD_DELAY_MAX_MS / 1000)}s.
    This endpoint demonstrates long-running operations that may timeout behind proxies.`,
  request: {
    body: {
      content: {
        "application/json": {
          schema: DownloadStartRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Download completed successfully",
      content: {
        "application/json": {
          schema: DownloadStartResponseSchema,
        },
      },
    },
  },
});

app.openapi(downloadStartRoute, async (c) => {
  const { file_id } = c.req.valid("json");
  const startTime = Date.now();

  // Get random delay and log it
  const delayMs = getRandomDelay();
  console.log(
    `[Download] Starting file_id=${String(file_id)} | delay=${(delayMs / 1000).toFixed(1)}s (range: ${String(env.DOWNLOAD_DELAY_MIN_MS / 1000)}s-${String(env.DOWNLOAD_DELAY_MAX_MS / 1000)}s) | enabled=${String(env.DOWNLOAD_DELAY_ENABLED)}`,
  );

  // Simulate long-running processing
  await sleep(delayMs);

  const processingTimeMs = Date.now() - startTime;
  const s3Result = await checkS3Availability(file_id);

  if (s3Result.available) {
    return c.json(
      {
        file_id,
        status: "completed" as const,
        downloadUrl: `https://storage.example.com/${s3Result.s3Key ?? ""}?token=${crypto.randomUUID()}`,
        size: s3Result.size,
        processingTimeMs,
        message: `Download ready after ${(processingTimeMs / 1000).toFixed(1)} seconds`,
      },
      200,
    );
  } else {
    return c.json(
      {
        file_id,
        status: "failed" as const,
        downloadUrl: null,
        size: null,
        processingTimeMs,
        message: `File not found after ${(processingTimeMs / 1000).toFixed(1)} seconds of processing`,
      },
      200,
    );
  }
});

// =============================================================================
// EXPORT JOB ENDPOINTS (Background processing with BullMQ)
// =============================================================================

// POST /v1/export/create - Create a new export job
const exportCreateRoute = createRoute({
  method: "post",
  path: "/v1/export/create",
  tags: ["Export Jobs"],
  summary: "Create a new export job",
  description:
    "Creates a background job to generate and upload a file to S3. Returns a job ID for tracking progress via polling or SSE.",
  request: {
    body: {
      content: {
        "application/json": {
          schema: ExportCreateRequestSchema,
        },
      },
    },
  },
  responses: {
    202: {
      description: "Export job created successfully",
      content: {
        "application/json": {
          schema: ExportCreateResponseSchema,
        },
      },
    },
  },
});

app.openapi(exportCreateRoute, async (c) => {
  const { file_ids, user_id } = c.req.valid("json");

  // Create export job using queue module
  const job = await addExportJob(user_id, file_ids);
  const jobId = job.id ?? crypto.randomUUID();

  // Record metric
  httpRequestsTotal.inc({
    method: "POST",
    path: "/v1/export/create",
    status: "202",
  });

  console.log(
    `[Export] Job created job_id=${jobId}, user_id=${user_id}, files=${String(file_ids.length)}`,
  );

  return c.json(
    {
      jobId,
      status: "queued" as const,
      totalFiles: file_ids.length,
      message: "Export job queued for processing",
      sseUrl: `/v1/export/progress/${jobId}`,
      statusUrl: `/v1/export/status/${jobId}`,
    },
    202,
  );
});

// GET /v1/export/status/:jobId - Get job status (polling)
const exportStatusRoute = createRoute({
  method: "get",
  path: "/v1/export/status/{jobId}",
  tags: ["Export Jobs"],
  summary: "Get export job status",
  description:
    "Returns current status of an export job. Use for polling-based progress tracking.",
  request: {
    params: z.object({
      jobId: z.string().describe("The job ID returned from /v1/export/create"),
    }),
  },
  responses: {
    200: {
      description: "Job status retrieved",
      content: {
        "application/json": {
          schema: ExportStatusResponseSchema,
        },
      },
    },
    404: {
      description: "Job not found",
      content: {
        "application/json": {
          schema: z.object({
            error: z.string(),
            jobId: z.string(),
          }),
        },
      },
    },
  },
});

app.openapi(exportStatusRoute, async (c) => {
  const { jobId } = c.req.valid("param");

  const status = await getJobStatus(jobId);

  if (status.status === "not_found") {
    httpRequestsTotal.inc({
      method: "GET",
      path: "/v1/export/status/:jobId",
      status: "404",
    });
    return c.json({ error: "Job not found", jobId }, 404);
  }

  httpRequestsTotal.inc({
    method: "GET",
    path: "/v1/export/status/:jobId",
    status: "200",
  });

  // Map BullMQ states to our schema
  const mappedStatus = mapBullMQStatus(status.status);

  return c.json(
    {
      jobId,
      status: mappedStatus,
      progress: status.progress,
      result: status.result,
      error: status.error,
    },
    200,
  );
});

// Helper function to map BullMQ status to our schema
function mapBullMQStatus(
  state: string,
): "waiting" | "active" | "completed" | "failed" | "delayed" | "not_found" {
  switch (state) {
    case "waiting":
    case "prioritized":
      return "waiting";
    case "active":
      return "active";
    case "completed":
      return "completed";
    case "failed":
      return "failed";
    case "delayed":
      return "delayed";
    default:
      return "not_found";
  }
}

// GET /v1/export/progress/:jobId - SSE progress stream
const exportProgressRoute = createRoute({
  method: "get",
  path: "/v1/export/progress/{jobId}",
  tags: ["Export Jobs"],
  summary: "Stream export progress via SSE",
  description:
    "Server-Sent Events stream for real-time progress updates. Survives browser disconnects - reconnect with same job ID to resume.",
  request: {
    params: z.object({
      jobId: z.string().describe("The job ID returned from /v1/export/create"),
    }),
  },
  responses: {
    200: {
      description: "SSE stream of progress events",
      content: {
        "text/event-stream": {
          schema: z.string(),
        },
      },
    },
  },
});

// SSE progress event interface for streaming
interface SSEProgressEvent {
  jobId: string;
  status: string;
  progress: ExportJobProgress | null;
  result: ExportJobResult | null;
  error: string | null;
  message: string;
}

app.openapi(exportProgressRoute, (c) => {
  const { jobId } = c.req.valid("param");

  httpRequestsTotal.inc({
    method: "GET",
    path: "/v1/export/progress/:jobId",
    status: "200",
  });

  return streamSSE(c, async (stream) => {
    let lastPercent = -1;
    let completed = false;
    let pollCount = 0;
    const maxPolls = 600; // 10 minutes max at 1s intervals

    while (!completed && pollCount < maxPolls) {
      const status = await getJobStatus(jobId);

      if (status.status === "not_found") {
        await stream.writeSSE({
          event: "error",
          data: JSON.stringify({ error: "Job not found", jobId }),
        });
        break;
      }

      const currentPercent = status.progress?.percent ?? 0;

      // Only send updates when progress changes or status changes
      if (
        currentPercent !== lastPercent ||
        status.status === "completed" ||
        status.status === "failed"
      ) {
        const eventData: SSEProgressEvent = {
          jobId,
          status: status.status,
          progress: status.progress,
          result: status.result,
          error: status.error,
          message: getProgressMessage(status.status, status.progress),
        };

        await stream.writeSSE({
          event: status.status,
          data: JSON.stringify(eventData),
          id: `${jobId}-${String(currentPercent)}`,
        });

        lastPercent = currentPercent;

        if (status.status === "completed" || status.status === "failed") {
          completed = true;
        }
      }

      if (!completed) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Poll every 1s
        pollCount++;
      }
    }

    if (!completed && pollCount >= maxPolls) {
      await stream.writeSSE({
        event: "timeout",
        data: JSON.stringify({ error: "Progress stream timeout", jobId }),
      });
    }
  });
});

// Helper function for progress messages
function getProgressMessage(
  status: string,
  progress: ExportJobProgress | null,
): string {
  if (!progress) {
    switch (status) {
      case "waiting":
        return "Export job is waiting in queue";
      case "active":
        return "Processing export...";
      case "completed":
        return "Export completed! Download is ready";
      case "failed":
        return "Export failed. Please try again";
      default:
        return "Unknown status";
    }
  }

  return progress.message;
}

// GET /v1/export/download/:jobId - Get presigned download URL
const exportDownloadRoute = createRoute({
  method: "get",
  path: "/v1/export/download/{jobId}",
  tags: ["Export Jobs"],
  summary: "Get presigned download URL",
  description:
    "Returns a short-lived presigned S3 URL for direct download. URL expires in 1 hour. Only available after job completes.",
  request: {
    params: z.object({
      jobId: z.string().describe("The job ID returned from /v1/export/create"),
    }),
  },
  responses: {
    200: {
      description: "Download URL retrieved",
      content: {
        "application/json": {
          schema: ExportDownloadResponseSchema,
        },
      },
    },
    404: {
      description: "Job not found",
      content: {
        "application/json": {
          schema: z.object({
            error: z.string(),
            jobId: z.string(),
          }),
        },
      },
    },
    409: {
      description: "Job not yet completed",
      content: {
        "application/json": {
          schema: z.object({
            error: z.string(),
            jobId: z.string(),
            status: z.string(),
          }),
        },
      },
    },
  },
});

app.openapi(exportDownloadRoute, async (c) => {
  const { jobId } = c.req.valid("param");

  const status = await getJobStatus(jobId);

  if (status.status === "not_found") {
    httpRequestsTotal.inc({
      method: "GET",
      path: "/v1/export/download/:jobId",
      status: "404",
    });
    return c.json({ error: "Job not found", jobId }, 404);
  }

  if (status.status !== "completed") {
    httpRequestsTotal.inc({
      method: "GET",
      path: "/v1/export/download/:jobId",
      status: "409",
    });
    return c.json(
      {
        error: "Export not yet completed",
        jobId,
        status: status.status,
      },
      409,
    );
  }

  httpRequestsTotal.inc({
    method: "GET",
    path: "/v1/export/download/:jobId",
    status: "200",
  });

  return c.json(
    {
      jobId,
      status: "ready" as const,
      downloadUrl: status.result?.downloadUrl ?? null,
      expiresIn: 3600, // 1 hour
      message: "Download ready. URL expires in 1 hour.",
    },
    200,
  );
});

// OpenAPI spec endpoint (disabled in production)
if (env.NODE_ENV !== "production") {
  app.doc("/openapi", {
    openapi: "3.0.0",
    info: {
      title: "Delineate Hackathon Challenge API",
      version: "1.0.0",
      description: "API for Delineate Hackathon Challenge",
    },
    servers: [{ url: "http://localhost:3000", description: "Local server" }],
  });

  // Scalar API docs
  app.get("/docs", Scalar({ url: "/openapi" }));
}

// Graceful shutdown handler
const gracefulShutdown = (server: ServerType) => (signal: string) => {
  console.log(`\n${signal} received. Starting graceful shutdown...`);

  // Stop accepting new connections
  server.close(() => {
    console.log("HTTP server closed");

    // Destroy S3 client
    s3Client.destroy();
    console.log("S3 client destroyed");
    console.log("Graceful shutdown completed");
  });
};

// Start server
const server = serve(
  {
    fetch: app.fetch,
    port: env.PORT,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${String(info.port)}`);
    console.log(`Environment: ${env.NODE_ENV}`);
    if (env.NODE_ENV !== "production") {
      console.log(`API docs: http://localhost:${String(info.port)}/docs`);
    }
  },
);

// Register shutdown handlers
const shutdown = gracefulShutdown(server);
process.on("SIGTERM", () => {
  shutdown("SIGTERM");
});
process.on("SIGINT", () => {
  shutdown("SIGINT");
});
