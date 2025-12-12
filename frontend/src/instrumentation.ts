import * as Sentry from "@sentry/react";
import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-web";
import { ZoneContextManager } from "@opentelemetry/context-zone";
import { FetchInstrumentation } from "@opentelemetry/instrumentation-fetch";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { Resource } from "@opentelemetry/resources";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

// Initialize Sentry
const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

try {
  if (SENTRY_DSN) {
    Sentry.init({
      dsn: SENTRY_DSN,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
      ],
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      environment: import.meta.env.MODE,
    });
    console.log("[Delineate] Sentry initialized");
  } else {
    console.warn("[Delineate] Sentry DSN not found - error tracking disabled");
  }
} catch (e) {
  console.error("[Delineate] Sentry initialization failed:", e);
}

// Initialize OpenTelemetry
const OTEL_ENDPOINT =
  import.meta.env.VITE_OTEL_ENDPOINT || "http://localhost:4318/v1/traces";

try {
  const resource = new Resource({
    [ATTR_SERVICE_NAME]: "delineate-frontend",
  });

  const provider = new WebTracerProvider({
    resource,
  });

  const exporter = new OTLPTraceExporter({
    url: OTEL_ENDPOINT,
  });

  provider.addSpanProcessor(new BatchSpanProcessor(exporter));

  provider.register({
    contextManager: new ZoneContextManager(),
  });

  // Register instrumentations
  registerInstrumentations({
    instrumentations: [
      new FetchInstrumentation({
        propagateTraceHeaderCorsUrls: [
          /http:\/\/localhost:3000.*/,
          /http:\/\/delineate-app:3000.*/,
        ],
      }),
    ],
  });

  console.log(
    "[Delineate] OpenTelemetry initialized with endpoint:",
    OTEL_ENDPOINT,
  );
} catch (e) {
  console.error("[Delineate] OpenTelemetry initialization failed:", e);
}

export { Sentry };
