import { Queue } from "bullmq";
import type { Job } from "bullmq";
import Redis from "ioredis";

// Environment configuration
const REDIS_HOST = process.env.REDIS_HOST ?? "localhost";
const REDIS_PORT = parseInt(process.env.REDIS_PORT ?? "6379", 10);

// Redis connection for BullMQ
export const redisConnection = new Redis.default({
  host: REDIS_HOST,
  port: REDIS_PORT,
  maxRetriesPerRequest: null, // Required for BullMQ
});

// Export job data interface
export interface ExportJobData {
  jobId: string;
  userId: string;
  fileIds: number[];
  createdAt: string;
}

// Export job result interface
export interface ExportJobResult {
  s3Key: string;
  downloadUrl: string;
  fileSize: number;
  processedFiles: number;
  totalFiles: number;
}

// Export job progress interface
export interface ExportJobProgress {
  percent: number;
  currentFile: number;
  totalFiles: number;
  stage: "queued" | "processing" | "uploading" | "completed" | "failed";
  message: string;
}

// Queue name
export const EXPORT_QUEUE_NAME = "file-exports";

// Create the export queue
export const exportQueue = new Queue<ExportJobData, ExportJobResult>(
  EXPORT_QUEUE_NAME,
  {
    connection: redisConnection,
    defaultJobOptions: {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 5000, // Start with 5s, then 10s, 20s
      },
      removeOnComplete: {
        age: 86400, // Keep completed jobs for 24 hours
        count: 1000, // Keep last 1000 jobs
      },
      removeOnFail: {
        age: 604800, // Keep failed jobs for 7 days
      },
    },
  }
);

// Add job to queue
export async function addExportJob(
  userId: string,
  fileIds: number[]
): Promise<Job<ExportJobData, ExportJobResult>> {
  const jobId = crypto.randomUUID();
  const jobData: ExportJobData = {
    jobId,
    userId,
    fileIds,
    createdAt: new Date().toISOString(),
  };

  const job = await exportQueue.add(jobId, jobData, {
    jobId, // Use the UUID as the job ID for easy lookup
  });

  console.log(
    `[Queue] Added export job ${jobId} for user ${userId} with ${String(fileIds.length)} files`
  );

  return job;
}

// Get job by ID
export async function getExportJob(
  jobId: string
): Promise<Job<ExportJobData, ExportJobResult> | undefined> {
  return await exportQueue.getJob(jobId);
}

// Get job status
export async function getJobStatus(jobId: string): Promise<{
  status: string;
  progress: ExportJobProgress | null;
  result: ExportJobResult | null;
  error: string | null;
}> {
  const job = await getExportJob(jobId);

  if (!job) {
    return {
      status: "not_found",
      progress: null,
      result: null,
      error: "Job not found",
    };
  }

  const state = await job.getState();
  const progress = job.progress as ExportJobProgress;
  const result = job.returnvalue;
  const error = job.failedReason;

  return {
    status: state,
    progress,
    result,
    error,
  };
}

// Cleanup function
export async function closeQueue(): Promise<void> {
  await exportQueue.close();
  await redisConnection.quit();
}

console.log(`[Queue] Export queue initialized, connecting to Redis at ${REDIS_HOST}:${String(REDIS_PORT)}`);
