import {
  S3Client,
  PutObjectCommand,
  HeadObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { serve } from "@hono/node-server";
import { Worker } from "bullmq";
import type { Job } from "bullmq";
import { Hono } from "hono";
import Redis from "ioredis";
import client from "prom-client";
import { z } from "zod";

// Environment schema
const EnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  REDIS_HOST: z.string().default("localhost"),
  REDIS_PORT: z.coerce.number().int().min(1).max(65535).default(6379),
  S3_REGION: z.string().min(1).default("us-east-1"),
  S3_ACCESS_KEY_ID: z.string().optional(),
  S3_SECRET_ACCESS_KEY: z.string().optional(),
  S3_ENDPOINT: z.string().optional(),
  S3_BUCKET_NAME: z.string().default("downloads"),
  S3_FORCE_PATH_STYLE: z.coerce.boolean().default(true),
  WORKER_CONCURRENCY: z.coerce.number().int().min(1).default(5),
  PRESIGNED_URL_EXPIRY_SECONDS: z.coerce.number().int().min(60).default(3600),
  // Download delay simulation (in milliseconds)
  DOWNLOAD_DELAY_MIN_MS: z.coerce.number().int().min(0).default(10000),
  DOWNLOAD_DELAY_MAX_MS: z.coerce.number().int().min(0).default(120000),
  DOWNLOAD_DELAY_ENABLED: z.coerce.boolean().default(true),
});

const env = EnvSchema.parse(process.env);

// Prometheus metrics for worker
const register = new client.Registry();
client.collectDefaultMetrics({ register });

const workerJobsProcessed = new client.Counter({
  name: "worker_jobs_processed_total",
  help: "Total number of jobs processed by worker",
  labelNames: ["status"],
  registers: [register],
});

const workerJobDuration = new client.Histogram({
  name: "worker_job_duration_seconds",
  help: "Job processing duration in seconds",
  labelNames: ["status"],
  buckets: [5, 10, 15, 30, 60, 90, 120, 180, 300],
  registers: [register],
});

const workerActiveJobs = new client.Gauge({
  name: "worker_active_jobs",
  help: "Number of currently active jobs",
  registers: [register],
});

// Redis connection for BullMQ
const redisConnection = new Redis.default({
  host: env.REDIS_HOST,
  port: env.REDIS_PORT,
  maxRetriesPerRequest: null,
});

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

// Job interfaces
interface ExportJobData {
  jobId: string;
  userId: string;
  fileIds: number[];
  createdAt: string;
}

interface ExportJobResult {
  s3Key: string;
  downloadUrl: string;
  fileSize: number;
  processedFiles: number;
  totalFiles: number;
}

interface ExportJobProgress {
  percent: number;
  currentFile: number;
  totalFiles: number;
  stage: "queued" | "processing" | "uploading" | "completed" | "failed";
  message: string;
}

// Random delay helper for simulating long-running processing
const getRandomDelay = (): number => {
  if (!env.DOWNLOAD_DELAY_ENABLED) return 0;
  const min = env.DOWNLOAD_DELAY_MIN_MS;
  const max = env.DOWNLOAD_DELAY_MAX_MS;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Generate presigned URL for download
async function generatePresignedUrl(s3Key: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: env.S3_BUCKET_NAME,
    Key: s3Key,
  });

  const presignedUrl = await getSignedUrl(s3Client, command, {
    expiresIn: env.PRESIGNED_URL_EXPIRY_SECONDS,
  });

  return presignedUrl;
}

// Process the export job
async function processExportJob(
  job: Job<ExportJobData, ExportJobResult>
): Promise<ExportJobResult> {
  const { jobId, userId, fileIds } = job.data;
  const startTime = Date.now();

  console.log(
    `[Worker] Processing job ${jobId} for user ${userId} with ${String(fileIds.length)} files`
  );

  workerActiveJobs.inc();

  try {
    // Update progress: Starting
    await job.updateProgress({
      percent: 0,
      currentFile: 0,
      totalFiles: fileIds.length,
      stage: "processing",
      message: "Starting export...",
    } as ExportJobProgress);

    // Simulate processing each file with progress updates
    const processedData: string[] = [];

    for (let i = 0; i < fileIds.length; i++) {
      const fileId = fileIds[i];
      const progress = Math.round(((i + 1) / fileIds.length) * 80); // 0-80% for processing

      // Simulate file processing delay
      const delayMs = getRandomDelay() / fileIds.length; // Distribute delay across files
      await sleep(delayMs);

      // Check if file exists in S3 (or simulate)
      const s3Key = `downloads/${String(fileId)}.zip`;
      let fileContent = `File ${String(fileId)} content`;

      try {
        const headCommand = new HeadObjectCommand({
          Bucket: env.S3_BUCKET_NAME,
          Key: s3Key,
        });
        await s3Client.send(headCommand);
        fileContent = `File ${String(fileId)} - exists in S3`;
      } catch {
        fileContent = `File ${String(fileId)} - simulated content`;
      }

      processedData.push(fileContent);

      // Update progress
      await job.updateProgress({
        percent: progress,
        currentFile: i + 1,
        totalFiles: fileIds.length,
        stage: "processing",
        message: `Processing file ${String(i + 1)} of ${String(fileIds.length)} (ID: ${String(fileId)})`,
      } as ExportJobProgress);

      console.log(
        `[Worker] Job ${jobId}: Processed file ${String(i + 1)}/${String(fileIds.length)} (ID: ${String(fileId)})`
      );
    }

    // Update progress: Uploading
    await job.updateProgress({
      percent: 85,
      currentFile: fileIds.length,
      totalFiles: fileIds.length,
      stage: "uploading",
      message: "Uploading export archive to S3...",
    } as ExportJobProgress);

    // Create the export archive content (simulated)
    const archiveContent = JSON.stringify({
      exportId: jobId,
      userId,
      createdAt: job.data.createdAt,
      completedAt: new Date().toISOString(),
      files: processedData,
      fileIds,
    });

    // Upload to S3 with unique key per job
    const exportS3Key = `exports/${userId}/${jobId}.json`;

    const putCommand = new PutObjectCommand({
      Bucket: env.S3_BUCKET_NAME,
      Key: exportS3Key,
      Body: archiveContent,
      ContentType: "application/json",
      Metadata: {
        userId,
        jobId,
        fileCount: String(fileIds.length),
      },
    });

    await s3Client.send(putCommand);

    console.log(`[Worker] Job ${jobId}: Uploaded export to S3 at ${exportS3Key}`);

    // Update progress: Generating URL
    await job.updateProgress({
      percent: 95,
      currentFile: fileIds.length,
      totalFiles: fileIds.length,
      stage: "uploading",
      message: "Generating download URL...",
    } as ExportJobProgress);

    // Generate presigned URL
    const downloadUrl = await generatePresignedUrl(exportS3Key);

    // Final progress update
    await job.updateProgress({
      percent: 100,
      currentFile: fileIds.length,
      totalFiles: fileIds.length,
      stage: "completed",
      message: "Export completed successfully!",
    } as ExportJobProgress);

    const processingTime = (Date.now() - startTime) / 1000;
    console.log(
      `[Worker] Job ${jobId}: Completed in ${processingTime.toFixed(1)}s`
    );

    workerActiveJobs.dec();
    workerJobsProcessed.inc({ status: "completed" });
    workerJobDuration.observe({ status: "completed" }, processingTime);

    return {
      s3Key: exportS3Key,
      downloadUrl,
      fileSize: archiveContent.length,
      processedFiles: fileIds.length,
      totalFiles: fileIds.length,
    };
  } catch (error) {
    const processingTime = (Date.now() - startTime) / 1000;
    workerActiveJobs.dec();
    workerJobsProcessed.inc({ status: "failed" });
    workerJobDuration.observe({ status: "failed" }, processingTime);

    console.error(`[Worker] Job ${jobId}: Failed -`, error);
    throw error;
  }
}

// Create the worker
const worker = new Worker<ExportJobData, ExportJobResult>(
  "file-exports",
  processExportJob,
  {
    connection: redisConnection,
    concurrency: env.WORKER_CONCURRENCY,
  }
);

// Worker event handlers
worker.on("completed", (job, result) => {
  console.log(
    `[Worker] Job ${String(job.id)} completed. Download URL: ${result.downloadUrl.substring(0, 80)}...`
  );
});

worker.on("failed", (job, err) => {
  console.error(`[Worker] Job ${String(job?.id)} failed:`, err.message);
});

worker.on("progress", (job, progress) => {
  const p = progress as ExportJobProgress;
  console.log(
    `[Worker] Job ${String(job.id)}: ${String(p.percent)}% - ${p.message}`
  );
});

worker.on("error", (err) => {
  console.error("[Worker] Error:", err);
});

// Graceful shutdown
const shutdown = async () => {
  console.log("[Worker] Shutting down...");
  await worker.close();
  await redisConnection.quit();
  throw new Error("Worker shutdown complete");
};

process.on("SIGTERM", () => void shutdown());
process.on("SIGINT", () => void shutdown());

console.log(
  `[Worker] Started with concurrency ${String(env.WORKER_CONCURRENCY)}, connected to Redis at ${env.REDIS_HOST}:${String(env.REDIS_PORT)}`
);
console.log(
  `[Worker] Processing delays: ${String(env.DOWNLOAD_DELAY_MIN_MS / 1000)}s - ${String(env.DOWNLOAD_DELAY_MAX_MS / 1000)}s (enabled: ${String(env.DOWNLOAD_DELAY_ENABLED)})`
);

const metricsApp = new Hono();

metricsApp.get("/metrics", async (c) => {
  c.header("Content-Type", register.contentType);
  return c.body(await register.metrics());
});

metricsApp.get("/health", (c) => {
  return c.json({ status: "healthy", worker: "running" });
});

const METRICS_PORT = parseInt(process.env.WORKER_METRICS_PORT ?? "3001", 10);

serve({
  fetch: metricsApp.fetch,
  port: METRICS_PORT,
});

console.log(`[Worker] Metrics server listening on port ${String(METRICS_PORT)}`);
