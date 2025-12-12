import { useState, useEffect, useCallback } from "react";
import * as Sentry from "@sentry/react";
import { trace } from "@opentelemetry/api";
import {
  Activity,
  AlertCircle,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  FileDown,
  Loader2,
  RefreshCw,
  Server,
  XCircle,
  Zap,
} from "lucide-react";

// API Configuration (Challenge 4: Sentry + OpenTelemetry + Jaeger)
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";
const JAEGER_URL = import.meta.env.VITE_JAEGER_URL || "http://localhost:16686";

// Types
interface HealthStatus {
  status: "healthy" | "unhealthy";
  checks: {
    storage: "ok" | "error";
  };
}

interface ExportJob {
  jobId: string;
  status: string;
  progress: {
    percent: number;
    currentFile: number;
    totalFiles: number;
    stage: string;
    message: string;
  } | null;
  result: {
    s3Key: string;
    downloadUrl: string;
    fileSize: number;
    processedFiles: number;
    totalFiles: number;
  } | null;
  error: string | null;
  createdAt?: string;
}

interface ErrorLog {
  id: string;
  message: string;
  timestamp: string;
  traceId?: string;
}

// Get tracer for custom spans
const tracer = trace.getTracer("delineate-frontend");

function App() {
  // State
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [healthLoading, setHealthLoading] = useState(false);
  const [jobs, setJobs] = useState<ExportJob[]>([]);
  const [errors, setErrors] = useState<ErrorLog[]>([]);
  const [isCreatingJob, setIsCreatingJob] = useState(false);
  const [fileIds, setFileIds] = useState("10000, 20000, 30000");

  // Fetch health status
  const fetchHealth = useCallback(async () => {
    const span = tracer.startSpan("fetchHealth");
    setHealthLoading(true);
    try {
      const response = await fetch(`${API_BASE}/health`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setHealth(data);
      span.setStatus({ code: 1 }); // OK
    } catch (error) {
      console.error("Health check failed:", error);
      // Sentry.captureException(error); // Optional: don't spam Sentry if backend is down
      addError("Health check failed: " + (error as Error).message);
      setHealth(null);
      span.setStatus({ code: 2, message: (error as Error).message }); // ERROR
    } finally {
      setHealthLoading(false);
      span.end();
    }
  }, []);

  // Add error to log
  const addError = (message: string, traceId?: string) => {
    const error: ErrorLog = {
      id: crypto.randomUUID(),
      message,
      timestamp: new Date().toISOString(),
      traceId,
    };
    setErrors((prev) => [error, ...prev].slice(0, 10)); // Keep last 10 errors
  };

  // Create export job
  const createExportJob = async () => {
    const span = tracer.startSpan("createExportJob");
    setIsCreatingJob(true);

    try {
      const ids = fileIds.split(",").map((id) => parseInt(id.trim(), 10));
      const response = await fetch(`${API_BASE}/v1/export/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file_ids: ids, user_id: "dashboard-user" }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      const newJob: ExportJob = {
        jobId: data.jobId,
        status: data.status,
        progress: null,
        result: null,
        error: null,
        createdAt: new Date().toISOString(),
      };
      setJobs((prev) => [newJob, ...prev]);
      span.setStatus({ code: 1 });

      // Start polling for this job
      pollJobStatus(data.jobId);
    } catch (error) {
      console.error("Create job failed:", error);
      Sentry.captureException(error);
      addError(
        "Create job failed: " + (error as Error).message,
        span.spanContext().traceId,
      );
      span.setStatus({ code: 2, message: (error as Error).message });
    } finally {
      setIsCreatingJob(false);
      span.end();
    }
  };

  // Poll job status
  const pollJobStatus = async (jobId: string) => {
    const poll = async () => {
      try {
        const response = await fetch(`${API_BASE}/v1/export/status/${jobId}`);
        if (!response.ok) return; // Stop polling on 404/500? Or retry?

        const data = await response.json();

        setJobs((prev) =>
          prev.map((job) =>
            job.jobId === jobId
              ? {
                  ...job,
                  status: data.status,
                  progress: data.progress,
                  result: data.result,
                  error: data.error,
                }
              : job,
          ),
        );

        // Continue polling if not completed or failed
        if (data.status !== "completed" && data.status !== "failed") {
          setTimeout(poll, 2000);
        }
      } catch (error) {
        console.error("Poll failed:", error);
      }
    };

    poll();
  };

  // Trigger Sentry test error
  const triggerSentryTest = async () => {
    const span = tracer.startSpan("triggerSentryTest");
    try {
      const response = await fetch(
        `${API_BASE}/v1/download/check?sentry_test=true`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ file_id: 70000 }),
        },
      );
      const data = await response.json();
      addError(
        data.message || "Sentry test error triggered",
        span.spanContext().traceId,
      );
      Sentry.captureMessage("Sentry test triggered from dashboard", "info");
    } catch (error) {
      addError(
        "Sentry test failed: " + (error as Error).message,
        span.spanContext().traceId,
      );
      Sentry.captureException(error);
    } finally {
      span.end();
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchHealth();
    // fetchLogs(); // Optional: don't auto-fetch logs if endpoint might be missing
  }, [fetchHealth]);

  // Auto-refresh health every 30 seconds
  useEffect(() => {
    const interval = setInterval(fetchHealth, 30000);
    return () => clearInterval(interval);
  }, [fetchHealth]);

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Zap className="w-8 h-8 text-blue-500" />
                Delineate Observability Dashboard
              </h1>
              <p className="text-slate-400 mt-1">
                Challenge 4: Real-time monitoring with Sentry & OpenTelemetry
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={JAEGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Jaeger UI
              </a>
              <a
                href={`${API_BASE}/docs`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                API Docs
              </a>
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Health Status Card */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Server className="w-5 h-5" />
                API Health
              </h2>
              <button
                onClick={fetchHealth}
                disabled={healthLoading}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <RefreshCw
                  className={`w-4 h-4 ${healthLoading ? "animate-spin" : ""}`}
                />
              </button>
            </div>
            {health ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Status</span>
                  <span
                    className={`flex items-center gap-2 font-medium ${
                      health.status === "healthy"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {health.status === "healthy" ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                    {health.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Storage</span>
                  <span
                    className={`flex items-center gap-2 font-medium ${
                      health.checks?.storage === "ok"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {health.checks?.storage === "ok" ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                    {health.checks?.storage || "unknown"}
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-slate-500 flex items-center gap-2 py-4 justify-center">
                {healthLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <span className="text-red-400">Offline</span>
                )}
              </div>
            )}
          </div>

          {/* Create Export Job Card */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-sm">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <FileDown className="w-5 h-5" />
              Create Export Job
            </h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-slate-400 block mb-1">
                  File IDs (comma-separated)
                </label>
                <input
                  type="text"
                  value={fileIds}
                  onChange={(e) => setFileIds(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="10000, 20000, 30000"
                />
              </div>
              <button
                onClick={createExportJob}
                disabled={isCreatingJob}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCreatingJob ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                {isCreatingJob ? "Creating..." : "Create Job"}
              </button>
            </div>
          </div>

          {/* Sentry Test Card */}
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-sm">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5" />
              Sentry Integration
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              Test Sentry error tracking by triggering an intentional API error.
            </p>
            <button
              onClick={triggerSentryTest}
              className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <AlertCircle className="w-4 h-4" />
              Trigger Test Error
            </button>
          </div>
        </div>

        {/* Jobs Section */}
        <div className="mt-6">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-sm">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5" />
              Export Jobs ({jobs.length})
            </h2>
            {jobs.length > 0 ? (
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {jobs.map((job) => (
                  <div
                    key={job.jobId}
                    className="bg-slate-700/50 rounded-lg p-4 border border-slate-600"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-slate-300">
                        {job.jobId.slice(0, 8)}...
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          job.status === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : job.status === "failed"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {job.status}
                      </span>
                    </div>
                    {job.progress && (
                      <div className="mt-2">
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                          <span>{job.progress.message}</span>
                          <span>{job.progress.percent}%</span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                          <div
                            className="bg-blue-500 rounded-full h-2 transition-all duration-300"
                            style={{ width: `${job.progress.percent}%` }}
                          />
                        </div>
                      </div>
                    )}
                    {job.result && (
                      <div className="mt-2 text-sm text-slate-400 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span>
                          {job.result.processedFiles} files (
                          {Math.round(job.result.fileSize / 1024)} KB)
                        </span>
                        {job.result.downloadUrl && (
                          <a
                            href={job.result.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1"
                          >
                            <Download className="w-3 h-3" />
                            Download
                          </a>
                        )}
                      </div>
                    )}
                    {job.error && (
                      <div className="mt-2 text-sm text-red-400 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Error: {job.error}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 text-center py-8">
                No jobs yet. Create one above to get started.
              </p>
            )}
          </div>
        </div>

        {/* Error Log Section */}
        <div className="mt-6">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-sm">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-red-400" />
              Error Log ({errors.length})
            </h2>
            {errors.length > 0 ? (
              <div className="space-y-2">
                {errors.map((error) => (
                  <div
                    key={error.id}
                    className="bg-red-500/10 border border-red-500/30 rounded-lg p-3"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-red-400 text-sm font-medium">
                        {error.message}
                      </span>
                      <span className="text-slate-500 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(error.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    {error.traceId && (
                      <div className="mt-1">
                        <a
                          href={`${JAEGER_URL}/trace/${error.traceId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-400 hover:underline flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Trace: {error.traceId.slice(0, 8)}...
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 text-center py-4">
                No errors captured.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
