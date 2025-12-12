import * as Sentry from "@sentry/react";

// Initialize Sentry for real-time error tracking
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
      replaysSessionSampleRate: 1.0, // Capture all replay sessions for debugging
      replaysOnErrorSampleRate: 1.0,
      environment: import.meta.env.MODE,
      debug: true, // Enable debug mode for real-time logging
    });
    console.log(
      "[Delineate] Sentry initialized - Real-time error tracking active",
    );
  } else {
    console.warn("[Delineate] Sentry DSN not found - error tracking disabled");
  }
} catch (e) {
  console.error("[Delineate] Sentry initialization failed:", e);
}

export { Sentry };
