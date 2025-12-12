import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import App from "./App";
import "./index.css";
import "./instrumentation";

console.log("[Delineate] Starting React app...");

// Error Boundary Fallback Component
function ErrorFallback({ error, resetError }: { error: any; resetError: any }) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8">
      <div className="bg-slate-800 p-8 rounded-lg shadow-xl max-w-lg w-full text-center border border-slate-700">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Something went wrong
        </h1>
        <p className="text-slate-400 mb-6 font-mono text-sm bg-slate-900 p-3 rounded text-left overflow-auto max-h-32">
          {error.message}
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={resetError}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            Try again
          </button>
          <button
            onClick={() =>
              Sentry.showReportDialog({ eventId: Sentry.lastEventId() })
            }
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium"
          >
            Report feedback
          </button>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("[Delineate] Root element not found!");
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Sentry.ErrorBoundary
        fallback={({ error, resetError }) => (
          <ErrorFallback error={error} resetError={resetError} />
        )}
        onError={(error) => {
          console.error("[Delineate] Caught error in ErrorBoundary:", error);
        }}
      >
        <App />
      </Sentry.ErrorBoundary>
    </React.StrictMode>,
  );
  console.log("[Delineate] React app mounted");
}
