# Architecture Design Document

## CUET Micro-Ops Hackathon 2025 - File Download Service

**Version**: 1.0  
**Date**: December 12, 2025  
**Author**: Hackathon Team

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [System Overview](#system-overview)
3. [Architecture Diagram](#architecture-diagram)
4. [Component Details](#component-details)
5. [Long-Running Download Solution](#long-running-download-solution)
6. [Observability Stack](#observability-stack)
7. [Data Flow](#data-flow)
8. [API Design](#api-design)
9. [Proxy Configuration](#proxy-configuration)
10. [Frontend Integration](#frontend-integration)
11. [Deployment Strategy](#deployment-strategy)
12. [Security Considerations](#security-considerations)

---

## Executive Summary

This document outlines the architecture for a **long-running file download microservice** that handles variable processing times (10s-120s+) while providing excellent user experience through asynchronous processing, real-time progress updates, and comprehensive observability.

### Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Architecture Pattern** | Hybrid (Polling + SSE) | Best of both worlds - simple polling for basic clients, SSE for real-time UX |
| **Storage** | MinIO (S3-compatible) | Self-hosted, production-ready, no vendor lock-in |
| **Job Queue** | Redis + BullMQ | In-memory speed, persistence, battle-tested |
| **Logging** | Loki | Integrates seamlessly with Grafana, log aggregation |
| **Metrics** | Prometheus | Industry standard, powerful querying |
| **Visualization** | Grafana | Unified dashboards for metrics and logs |
| **Tracing** | Jaeger + OpenTelemetry | Distributed tracing standard |
| **Orchestration** | Docker Compose | No Kubernetes - simpler, faster for this scale |

---

## System Overview

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              ARCHITECTURE OVERVIEW                                   │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│   ┌─────────────┐     ┌──────────────────────────────────────────────────────────┐  │
│   │   Client    │     │                    Docker Network                         │  │
│   │  (Browser)  │     │  ┌────────────────────────────────────────────────────┐  │  │
│   └──────┬──────┘     │  │              Application Layer                      │  │  │
│          │            │  │  ┌─────────────┐    ┌─────────────┐                 │  │  │
│          ▼            │  │  │   Nginx     │───▶│  Hono API   │                 │  │  │
│   ┌─────────────┐     │  │  │  (Reverse   │    │  (Node.js)  │                 │  │  │
│   │   Nginx     │◀────┼──┼──│   Proxy)    │    │   :3000     │                 │  │  │
│   │   :80/443   │     │  │  └─────────────┘    └──────┬──────┘                 │  │  │
│   └─────────────┘     │  │                           │                         │  │  │
│                       │  └───────────────────────────┼─────────────────────────┘  │  │
│                       │                              │                            │  │
│                       │  ┌───────────────────────────┼─────────────────────────┐  │  │
│                       │  │              Data Layer   │                         │  │  │
│                       │  │  ┌─────────────┐    ┌─────┴─────┐    ┌───────────┐  │  │  │
│                       │  │  │   Redis     │◀───│  BullMQ   │    │   MinIO   │  │  │  │
│                       │  │  │   :6379     │    │  Workers  │───▶│   :9000   │  │  │  │
│                       │  │  └─────────────┘    └───────────┘    └───────────┘  │  │  │
│                       │  └──────────────────────────────────────────────────────┘  │  │
│                       │                                                            │  │
│                       │  ┌──────────────────────────────────────────────────────┐  │  │
│                       │  │              Observability Layer                     │  │  │
│                       │  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐ │  │  │
│                       │  │  │ Prometheus  │ │    Loki     │ │     Jaeger      │ │  │  │
│                       │  │  │   :9090     │ │   :3100     │ │     :16686      │ │  │  │
│                       │  │  └──────┬──────┘ └──────┬──────┘ └────────┬────────┘ │  │  │
│                       │  │         │               │                 │          │  │  │
│                       │  │         └───────────────┼─────────────────┘          │  │  │
│                       │  │                         ▼                            │  │  │
│                       │  │                 ┌─────────────┐                      │  │  │
│                       │  │                 │   Grafana   │                      │  │  │
│                       │  │                 │   :3001     │                      │  │  │
│                       │  │                 └─────────────┘                      │  │  │
│                       │  └──────────────────────────────────────────────────────┘  │  │
│                       └────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Architecture Diagram

### Detailed Component Interaction

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                        DOWNLOAD REQUEST FLOW                                         │
└─────────────────────────────────────────────────────────────────────────────────────┘

  ┌──────────┐                                                              
  │  Client  │                                                              
  └────┬─────┘                                                              
       │                                                                    
       │ 1. POST /v1/download/initiate                                      
       │    { file_ids: [70000, 70001] }                                    
       ▼                                                                    
  ┌──────────┐     ┌───────────────┐     ┌───────────────┐                 
  │  Nginx   │────▶│   Hono API    │────▶│    Redis      │                 
  │  Proxy   │     │   (Node.js)   │     │   (BullMQ)    │                 
  └──────────┘     └───────┬───────┘     └───────┬───────┘                 
                           │                     │                         
       │ 2. Response:      │                     │                         
       │    { jobId: "abc" │                     │                         
       │      status: "queued" }                 │                         
       ▼                   │                     │                         
  ┌──────────┐             │                     ▼                         
  │  Client  │             │             ┌───────────────┐                 
  └────┬─────┘             │             │    Worker     │                 
       │                   │             │   (BullMQ)    │                 
       │ 3. GET /v1/download/status/:jobId              │                  
       │    OR                           │               │                 
       │    GET /v1/download/subscribe/:jobId (SSE)     │                  
       ▼                   │             │               │                 
  ┌──────────┐             │             │  4. Process   │                 
  │  Nginx   │────▶────────┘             │     Download  │                 
  │  Proxy   │                           │               │                 
  └────┬─────┘                           │               ▼                 
       │                                 │       ┌───────────────┐         
       │ 5. Poll Response:               │       │     MinIO     │         
       │    { status: "processing",      │       │   (S3 Store)  │         
       │      progress: 45% }            │       └───────────────┘         
       │                                 │                                 
       │ 6. Final Response:              │                                 
       │    { status: "completed",       │                                 
       │      downloadUrl: "presigned"   │                                 
       │    }                            │                                 
       ▼                                 │                                 
  ┌──────────┐                           │                                 
  │  Client  │◀──────────────────────────┘                                 
  └──────────┘                                                             


┌─────────────────────────────────────────────────────────────────────────────────────┐
│                        OBSERVABILITY DATA FLOW                                       │
└─────────────────────────────────────────────────────────────────────────────────────┘

  ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
  │   Hono API    │     │    Worker     │     │     Nginx     │
  │   (Metrics)   │     │   (Metrics)   │     │   (Metrics)   │
  └───────┬───────┘     └───────┬───────┘     └───────┬───────┘
          │                     │                     │
          │  /metrics           │  /metrics           │  /metrics
          │                     │                     │
          └──────────────┬──────┴──────────────┬──────┘
                         │                     │
                         ▼                     │
                 ┌───────────────┐             │
                 │  Prometheus   │◀────────────┘
                 │   (Scrape)    │
                 └───────┬───────┘
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
  ┌───────────────┐     │      ┌───────────────┐
  │     Loki      │     │      │    Jaeger     │
  │    (Logs)     │     │      │   (Traces)    │
  └───────┬───────┘     │      └───────┬───────┘
          │             │              │
          └─────────────┼──────────────┘
                        │
                        ▼
                ┌───────────────┐
                │    Grafana    │
                │  (Dashboard)  │
                └───────────────┘
```

---

## Component Details

### 1. Application Layer

#### Hono API Server (Node.js)

| Property | Value |
|----------|-------|
| **Framework** | Hono (ultra-fast web framework) |
| **Runtime** | Node.js 24 with native TypeScript |
| **Port** | 3000 |
| **Features** | OpenAPI docs, rate limiting, security headers |

```typescript
// Key responsibilities:
- Accept download requests
- Queue jobs to Redis/BullMQ
- Serve status endpoints (polling + SSE)
- Expose Prometheus metrics
- Send logs to Loki via stdout
- Emit OpenTelemetry traces
```

#### Nginx Reverse Proxy

| Property | Value |
|----------|-------|
| **Port** | 80 (HTTP), 443 (HTTPS) |
| **Timeout** | 300s for long-polling |
| **Features** | Load balancing, SSL termination, buffering |

### 2. Data Layer

#### Redis (Job Queue & Cache)

| Property | Value |
|----------|-------|
| **Port** | 6379 |
| **Purpose** | BullMQ job queue, session cache |
| **Persistence** | RDB snapshots + AOF |

#### MinIO (S3-Compatible Storage)

| Property | Value |
|----------|-------|
| **API Port** | 9000 |
| **Console Port** | 9001 |
| **Bucket** | `downloads` |
| **Features** | Presigned URLs, lifecycle policies |

### 3. Observability Layer

#### Prometheus (Metrics)

| Property | Value |
|----------|-------|
| **Port** | 9090 |
| **Scrape Interval** | 15s |
| **Retention** | 15 days |
| **Targets** | API, Workers, Nginx, MinIO |

#### Loki (Logs)

| Property | Value |
|----------|-------|
| **Port** | 3100 |
| **Retention** | 7 days |
| **Sources** | All containers via Docker driver |

#### Grafana (Visualization)

| Property | Value |
|----------|-------|
| **Port** | 3001 |
| **Data Sources** | Prometheus, Loki, Jaeger |
| **Features** | Pre-configured dashboards |

#### Jaeger (Distributed Tracing)

| Property | Value |
|----------|-------|
| **UI Port** | 16686 |
| **OTLP Port** | 4318 |
| **Features** | OpenTelemetry collector built-in |

---

## Long-Running Download Solution

### Chosen Pattern: **Hybrid Approach (Polling + SSE)**

We implement **Option D: Hybrid Approach** combining the best aspects of polling and Server-Sent Events.

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                        HYBRID PATTERN IMPLEMENTATION                                 │
└─────────────────────────────────────────────────────────────────────────────────────┘

                    ┌─────────────────────────────────────────┐
                    │            CLIENT DECISION              │
                    │                                         │
                    │   Browser supports SSE?                 │
                    │         │                               │
                    │    ┌────┴────┐                          │
                    │    │         │                          │
                    │   YES       NO                          │
                    │    │         │                          │
                    │    ▼         ▼                          │
                    │  ┌────┐   ┌──────┐                      │
                    │  │SSE │   │Polling                      │
                    │  └────┘   └──────┘                      │
                    └─────────────────────────────────────────┘

POLLING PATH:                          SSE PATH:
─────────────                          ─────────
1. POST /v1/download/initiate          1. POST /v1/download/initiate
2. Returns: { jobId: "abc" }           2. Returns: { jobId: "abc" }
3. GET /v1/download/status/abc         3. GET /v1/download/subscribe/abc
   (every 2-5 seconds)                    (single connection)
4. Response: {                         4. Server pushes events:
     status: "processing",                event: progress
     progress: 45                         data: { progress: 45 }
   }                                      
5. When completed:                     5. event: completed
   { status: "completed",                 data: { downloadUrl: "..." }
     downloadUrl: "..." }
```

### Why Hybrid?

| Requirement | Polling | SSE | Hybrid |
|-------------|---------|-----|--------|
| Simple clients | ✅ | ❌ | ✅ |
| Real-time UX | ❌ | ✅ | ✅ |
| Proxy compatibility | ✅ | ⚠️ | ✅ |
| Connection efficiency | ❌ | ✅ | ✅ |
| Graceful degradation | ❌ | ❌ | ✅ |

### Job Processing Flow

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          JOB STATE MACHINE                                           │
└─────────────────────────────────────────────────────────────────────────────────────┘

   ┌──────────┐     ┌──────────────┐     ┌───────────┐     ┌───────────────┐
   │  queued  │────▶│  processing  │────▶│ completed │     │    failed     │
   └──────────┘     └──────────────┘     └───────────┘     └───────────────┘
                           │                                       ▲
                           │                                       │
                           └───────────────────────────────────────┘
                                      (on error, after retries)

Job States:
───────────
• queued      - Job accepted, waiting in queue
• processing  - Worker actively processing
• completed   - Successfully finished, URL ready
• failed      - All retry attempts exhausted
```

### Database/Cache Schema (Redis)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          REDIS KEY STRUCTURE                                         │
└─────────────────────────────────────────────────────────────────────────────────────┘

# Job Data (Hash)
job:{jobId}
├── status      : "queued" | "processing" | "completed" | "failed"
├── progress    : 0-100
├── fileId      : number
├── createdAt   : ISO timestamp
├── updatedAt   : ISO timestamp
├── downloadUrl : presigned URL (when completed)
├── error       : error message (when failed)
└── attempts    : retry count

# User Sessions (Set)
user:{userId}:jobs → Set of jobIds

# Job Queue (BullMQ managed)
bull:downloads:wait    → List of waiting jobs
bull:downloads:active  → List of active jobs
bull:downloads:failed  → List of failed jobs

# TTL Settings
───────────────
job:{jobId}          → 24 hours
user:{userId}:jobs   → 7 days
```

### Background Job Processing (BullMQ)

```typescript
// Worker Configuration
const downloadQueue = new Queue('downloads', {
  connection: redis,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5000,  // Start with 5s, then 10s, 20s
    },
    removeOnComplete: {
      age: 86400,   // Keep completed jobs for 24h
      count: 1000,  // Keep last 1000 jobs
    },
    removeOnFail: {
      age: 604800,  // Keep failed jobs for 7 days
    },
  },
});

// Worker Process
const worker = new Worker('downloads', async (job) => {
  const { fileId } = job.data;
  
  // Update progress during processing
  await job.updateProgress(10);
  
  // Simulate/perform download processing
  const result = await processDownload(fileId, (progress) => {
    job.updateProgress(progress);
  });
  
  return result;
}, {
  connection: redis,
  concurrency: 5,  // Process 5 jobs simultaneously
});
```

### Error Handling & Retry Logic

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          ERROR HANDLING STRATEGY                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

Retry Configuration:
────────────────────
• Max attempts: 3
• Backoff: Exponential (5s → 10s → 20s)
• Retry on: Network errors, S3 timeouts
• No retry on: Invalid file_id, Permission denied

Error Categories:
─────────────────
┌────────────────┬─────────────┬────────────────┬─────────────────┐
│ Error Type     │ HTTP Status │ Retry?         │ Action          │
├────────────────┼─────────────┼────────────────┼─────────────────┤
│ Validation     │ 400         │ No             │ Return error    │
│ Not Found      │ 404         │ No             │ Return error    │
│ S3 Timeout     │ 504         │ Yes (3x)       │ Exponential BO  │
│ Network Error  │ 503         │ Yes (3x)       │ Exponential BO  │
│ Internal Error │ 500         │ Yes (1x)       │ Log + Alert     │
└────────────────┴─────────────┴────────────────┴─────────────────┘
```

### Timeout Configuration

```yaml
# Timeout at Each Layer
┌────────────────────────────────────────────────────────────────────┐
│ Layer            │ Timeout    │ Reason                             │
├──────────────────┼────────────┼────────────────────────────────────┤
│ Nginx Proxy      │ 300s       │ Allow SSE/long-polling             │
│ API Request      │ 30s        │ Quick response for job initiation  │
│ SSE Connection   │ 600s       │ Keep-alive for progress updates    │
│ Worker Job       │ 180s       │ Max processing time + buffer       │
│ S3 Operations    │ 60s        │ Upload/download timeout            │
│ Redis Operations │ 5s         │ Fast cache operations              │
└──────────────────┴────────────┴────────────────────────────────────┘
```

---

## Observability Stack

### Metrics (Prometheus)

```yaml
# Key Metrics to Track
┌────────────────────────────────────────────────────────────────────┐
│ Metric Name                      │ Type      │ Description         │
├──────────────────────────────────┼───────────┼─────────────────────┤
│ http_requests_total              │ Counter   │ Total HTTP requests │
│ http_request_duration_seconds    │ Histogram │ Request latency     │
│ download_jobs_total              │ Counter   │ Jobs by status      │
│ download_job_duration_seconds    │ Histogram │ Job processing time │
│ download_queue_size              │ Gauge     │ Queue depth         │
│ s3_operations_total              │ Counter   │ S3 ops by type      │
│ s3_operation_duration_seconds    │ Histogram │ S3 latency          │
│ active_sse_connections           │ Gauge     │ SSE client count    │
└──────────────────────────────────┴───────────┴─────────────────────┘
```

### Logging (Loki)

```json
// Structured Log Format
{
  "level": "info",
  "timestamp": "2025-12-12T10:30:00Z",
  "service": "delineate-api",
  "traceId": "abc123",
  "spanId": "def456",
  "requestId": "req-789",
  "message": "Download job started",
  "context": {
    "jobId": "job-123",
    "fileId": 70000,
    "userId": "user-456"
  }
}
```

### Dashboards (Grafana)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          GRAFANA DASHBOARDS                                          │
└─────────────────────────────────────────────────────────────────────────────────────┘

Dashboard 1: API Overview
─────────────────────────
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Request Rate    │ │ Error Rate      │ │ P99 Latency     │
│ 1.2K req/min    │ │ 0.02%           │ │ 245ms           │
└─────────────────┘ └─────────────────┘ └─────────────────┘
┌─────────────────────────────────────────────────────────┐
│           Request Duration Distribution                  │
│  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄   │
└─────────────────────────────────────────────────────────┘

Dashboard 2: Download Jobs
──────────────────────────
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Queue Depth     │ │ Processing      │ │ Success Rate    │
│ 42 jobs         │ │ 5 active        │ │ 99.8%           │
└─────────────────┘ └─────────────────┘ └─────────────────┘
┌─────────────────────────────────────────────────────────┐
│           Job Processing Time by File Size               │
│  ████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░   │
└─────────────────────────────────────────────────────────┘

Dashboard 3: Infrastructure
───────────────────────────
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ CPU Usage       │ │ Memory Usage    │ │ Disk I/O        │
│ 23%             │ │ 1.2GB/4GB       │ │ 45MB/s          │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

---

## Data Flow

### Complete Request Lifecycle

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          COMPLETE DATA FLOW                                          │
└─────────────────────────────────────────────────────────────────────────────────────┘

PHASE 1: Job Initiation
───────────────────────
User                 Nginx               API                  Redis
 │                    │                   │                     │
 │  POST /download/   │                   │                     │
 │  initiate          │                   │                     │
 │───────────────────▶│                   │                     │
 │                    │──────────────────▶│                     │
 │                    │                   │  LPUSH job queue    │
 │                    │                   │────────────────────▶│
 │                    │                   │                     │
 │                    │                   │  SET job:{id}       │
 │                    │                   │────────────────────▶│
 │                    │                   │                     │
 │                    │◀──────────────────│                     │
 │◀───────────────────│                   │                     │
 │  { jobId, status } │                   │                     │


PHASE 2: Background Processing
──────────────────────────────
Redis               Worker              MinIO               Loki
 │                    │                   │                   │
 │  BRPOP job queue   │                   │                   │
 │◀───────────────────│                   │                   │
 │                    │                   │                   │
 │                    │  Process file     │                   │
 │                    │──────────────────▶│                   │
 │                    │                   │                   │
 │                    │  Log progress     │                   │
 │                    │──────────────────────────────────────▶│
 │                    │                   │                   │
 │                    │  GET presigned URL│                   │
 │                    │◀──────────────────│                   │
 │                    │                   │                   │
 │  UPDATE job:{id}   │                   │                   │
 │◀───────────────────│                   │                   │


PHASE 3: Status Updates (Polling)
─────────────────────────────────
User                 Nginx               API                  Redis
 │                    │                   │                     │
 │  GET /status/:id   │                   │                     │
 │───────────────────▶│                   │                     │
 │                    │──────────────────▶│                     │
 │                    │                   │  GET job:{id}       │
 │                    │                   │────────────────────▶│
 │                    │                   │◀────────────────────│
 │                    │◀──────────────────│                     │
 │◀───────────────────│                   │                     │
 │  { progress: 75 }  │                   │                     │


PHASE 3 (ALT): Status Updates (SSE)
───────────────────────────────────
User                 Nginx               API                  Redis
 │                    │                   │                     │
 │  GET /subscribe/id │                   │                     │
 │───────────────────▶│                   │                     │
 │                    │──────────────────▶│                     │
 │                    │                   │  SUBSCRIBE job:{id} │
 │                    │                   │────────────────────▶│
 │                    │                   │                     │
 │◀─ SSE: progress ───│◀──────────────────│◀────────────────────│
 │                    │                   │                     │
 │◀─ SSE: completed ──│◀──────────────────│◀────────────────────│
```

---

## API Design

### New Endpoints Required

```yaml
# Existing Endpoints (Modified)
POST /v1/download/initiate
  - Now returns jobId immediately
  - Job queued for background processing

# New Endpoints
GET /v1/download/status/:jobId
  - Poll for job status
  - Returns: { status, progress, downloadUrl?, error? }

GET /v1/download/subscribe/:jobId
  - SSE endpoint for real-time updates
  - Events: progress, completed, failed

GET /v1/download/:jobId
  - Get final download details
  - Returns presigned URL when ready

DELETE /v1/download/:jobId
  - Cancel a pending/processing job
  - Returns: { cancelled: boolean }

# Health & Metrics
GET /metrics
  - Prometheus metrics endpoint
```

### API Contract

```typescript
// POST /v1/download/initiate
// Request
{
  "file_ids": [70000, 70001, 70002]
}

// Response (200 OK)
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "status": "queued",
  "totalFiles": 3,
  "createdAt": "2025-12-12T10:30:00Z"
}

// GET /v1/download/status/:jobId
// Response (200 OK)
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "status": "processing",  // queued | processing | completed | failed
  "progress": 45,
  "currentFile": 2,
  "totalFiles": 3,
  "updatedAt": "2025-12-12T10:31:00Z"
}

// GET /v1/download/status/:jobId (completed)
// Response (200 OK)
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "status": "completed",
  "progress": 100,
  "downloadUrl": "https://minio:9000/downloads/archive.zip?X-Amz-...",
  "expiresAt": "2025-12-12T11:30:00Z",
  "completedAt": "2025-12-12T10:32:00Z"
}

// GET /v1/download/subscribe/:jobId (SSE)
// Response (200 OK, text/event-stream)
event: progress
data: {"progress": 10, "currentFile": 1}

event: progress
data: {"progress": 45, "currentFile": 2}

event: completed
data: {"downloadUrl": "https://...", "expiresAt": "..."}
```

---

## Proxy Configuration

### Nginx Configuration

```nginx
# /etc/nginx/conf.d/delineate.conf

upstream api {
    server delineate-app:3000;
    keepalive 32;
}

server {
    listen 80;
    server_name localhost;

    # Gzip compression
    gzip on;
    gzip_types application/json text/event-stream;

    # Standard API requests
    location /v1/ {
        proxy_pass http://api;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Request-ID $request_id;
        
        # Standard timeout
        proxy_read_timeout 30s;
        proxy_connect_timeout 10s;
    }

    # SSE endpoint (long-running)
    location /v1/download/subscribe/ {
        proxy_pass http://api;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Connection '';
        
        # SSE specific settings
        proxy_buffering off;
        proxy_cache off;
        proxy_read_timeout 600s;  # 10 minutes
        
        # Chunked encoding for SSE
        chunked_transfer_encoding on;
    }

    # Status polling (moderate timeout)
    location /v1/download/status/ {
        proxy_pass http://api;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        
        proxy_read_timeout 60s;
    }

    # Health check
    location /health {
        proxy_pass http://api;
        proxy_read_timeout 5s;
    }

    # Prometheus metrics
    location /metrics {
        proxy_pass http://api;
        proxy_read_timeout 5s;
    }
}
```

### Cloudflare Configuration

```yaml
# Cloudflare Page Rules / Configuration

# Rule 1: SSE Endpoints
URL Pattern: */v1/download/subscribe/*
Settings:
  - Disable Performance (caching)
  - WebSockets: On (enables long connections)
  - Rocket Loader: Off
  - Browser Integrity Check: Off

# Rule 2: API Endpoints
URL Pattern: */v1/*
Settings:
  - Cache Level: Bypass
  - Security Level: High

# Timeout Note:
# Cloudflare Enterprise: Can increase to 600s
# Cloudflare Pro/Free: 100s limit - use polling pattern
```

---

## Frontend Integration

### React/Next.js Implementation

```typescript
// hooks/useDownload.ts
import { useState, useEffect, useCallback } from 'react';

interface DownloadJob {
  jobId: string;
  status: 'queued' | 'processing' | 'completed' | 'failed';
  progress: number;
  downloadUrl?: string;
  error?: string;
}

export function useDownload() {
  const [job, setJob] = useState<DownloadJob | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Initiate download
  const initiateDownload = useCallback(async (fileIds: number[]) => {
    setIsLoading(true);
    
    const response = await fetch('/v1/download/initiate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ file_ids: fileIds }),
    });
    
    const data = await response.json();
    setJob({ ...data, progress: 0 });
    setIsLoading(false);
    
    // Start SSE subscription
    subscribeToUpdates(data.jobId);
    
    return data;
  }, []);

  // SSE subscription with fallback to polling
  const subscribeToUpdates = useCallback((jobId: string) => {
    // Try SSE first
    if (typeof EventSource !== 'undefined') {
      const eventSource = new EventSource(`/v1/download/subscribe/${jobId}`);
      
      eventSource.addEventListener('progress', (e) => {
        const data = JSON.parse(e.data);
        setJob(prev => prev ? { ...prev, ...data } : null);
      });
      
      eventSource.addEventListener('completed', (e) => {
        const data = JSON.parse(e.data);
        setJob(prev => prev ? { 
          ...prev, 
          status: 'completed',
          progress: 100,
          downloadUrl: data.downloadUrl 
        } : null);
        eventSource.close();
      });
      
      eventSource.addEventListener('failed', (e) => {
        const data = JSON.parse(e.data);
        setJob(prev => prev ? { 
          ...prev, 
          status: 'failed',
          error: data.error 
        } : null);
        eventSource.close();
      });
      
      eventSource.onerror = () => {
        eventSource.close();
        // Fallback to polling
        pollForUpdates(jobId);
      };
    } else {
      // Browser doesn't support SSE
      pollForUpdates(jobId);
    }
  }, []);

  // Polling fallback
  const pollForUpdates = useCallback(async (jobId: string) => {
    const poll = async () => {
      const response = await fetch(`/v1/download/status/${jobId}`);
      const data = await response.json();
      
      setJob(data);
      
      if (data.status === 'queued' || data.status === 'processing') {
        setTimeout(poll, 2000);  // Poll every 2 seconds
      }
    };
    
    poll();
  }, []);

  // Cancel download
  const cancelDownload = useCallback(async () => {
    if (!job?.jobId) return;
    
    await fetch(`/v1/download/${job.jobId}`, {
      method: 'DELETE',
    });
    
    setJob(null);
  }, [job?.jobId]);

  return {
    job,
    isLoading,
    initiateDownload,
    cancelDownload,
  };
}
```

### UI Component

```tsx
// components/DownloadProgress.tsx
import { useDownload } from '../hooks/useDownload';

export function DownloadProgress() {
  const { job, isLoading, initiateDownload, cancelDownload } = useDownload();

  return (
    <div className="download-container">
      {!job && (
        <button 
          onClick={() => initiateDownload([70000, 70001])}
          disabled={isLoading}
        >
          {isLoading ? 'Starting...' : 'Start Download'}
        </button>
      )}
      
      {job && (
        <div className="progress-card">
          <div className="status-badge" data-status={job.status}>
            {job.status.toUpperCase()}
          </div>
          
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${job.progress}%` }}
            />
          </div>
          
          <span className="progress-text">{job.progress}%</span>
          
          {job.status === 'completed' && job.downloadUrl && (
            <a 
              href={job.downloadUrl} 
              className="download-button"
              download
            >
              Download File
            </a>
          )}
          
          {job.status === 'failed' && (
            <div className="error-message">
              Error: {job.error}
              <button onClick={() => initiateDownload([70000])}>
                Retry
              </button>
            </div>
          )}
          
          {(job.status === 'queued' || job.status === 'processing') && (
            <button onClick={cancelDownload} className="cancel-button">
              Cancel
            </button>
          )}
        </div>
      )}
    </div>
  );
}
```

### Handling Edge Cases

```typescript
// utils/downloadManager.ts

class DownloadManager {
  private activeJobs = new Map<string, EventSource>();

  // Handle browser close during download
  setupUnloadHandler() {
    window.addEventListener('beforeunload', (e) => {
      if (this.activeJobs.size > 0) {
        e.preventDefault();
        e.returnValue = 'Downloads in progress. Are you sure you want to leave?';
      }
    });
  }

  // Handle network reconnection
  setupNetworkHandler(jobId: string) {
    window.addEventListener('online', () => {
      console.log('Network restored, resuming job status...');
      this.resubscribe(jobId);
    });

    window.addEventListener('offline', () => {
      console.log('Network lost, pausing updates...');
      this.closeConnection(jobId);
    });
  }

  // Handle concurrent downloads
  async initiateMultiple(fileIdGroups: number[][]) {
    const jobs = await Promise.all(
      fileIdGroups.map(fileIds => 
        fetch('/v1/download/initiate', {
          method: 'POST',
          body: JSON.stringify({ file_ids: fileIds }),
        }).then(r => r.json())
      )
    );

    return jobs;
  }
}
```

---

## Deployment Strategy

### Docker Compose Architecture (No Kubernetes)

```yaml
# Service Dependencies
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          SERVICE STARTUP ORDER                                       │
└─────────────────────────────────────────────────────────────────────────────────────┘

Level 1 (No dependencies):
├── redis
├── minio
├── loki
└── jaeger

Level 2 (Depends on Level 1):
├── prometheus (depends: minio, api)
└── grafana (depends: prometheus, loki, jaeger)

Level 3 (Depends on Level 1 & 2):
├── delineate-app (depends: redis, minio, jaeger)
└── delineate-worker (depends: redis, minio)

Level 4 (Depends on all):
└── nginx (depends: delineate-app)
```

### Environment-Specific Configs

```
Development:
───────────
• Hot reload enabled
• Verbose logging
• All ports exposed
• Mock data available
• Quick timeouts (5-15s delays)

Production:
───────────
• Multi-replica support
• Secrets from environment
• Limited port exposure
• Resource limits
• Full timeouts (10-120s delays)
```

---

## Security Considerations

### Security Checklist

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          SECURITY MEASURES                                           │
└─────────────────────────────────────────────────────────────────────────────────────┘

✅ Input Validation
   • Zod schemas for all inputs
   • File ID range validation (10K-100M)
   • Path traversal prevention

✅ Rate Limiting
   • 100 requests/minute default
   • Per-IP tracking
   • Configurable limits

✅ Security Headers
   • HSTS enabled
   • X-Frame-Options: DENY
   • X-Content-Type-Options: nosniff
   • CSP headers

✅ Secrets Management
   • No secrets in code
   • Environment variables
   • .env files (gitignored)

✅ S3 Security
   • Presigned URLs (expire in 1h)
   • No public bucket access
   • IAM-style credentials

✅ Network Security
   • Internal Docker network
   • Only Nginx exposed
   • No direct DB access

✅ Observability Security
   • Grafana auth enabled
   • Prometheus behind proxy
   • No PII in logs
```

---

## Service Port Summary

| Service | Internal Port | External Port | Purpose |
|---------|---------------|---------------|---------|
| **Nginx** | 80 | 80 | HTTP Reverse Proxy |
| **Hono API** | 3000 | 3000 (dev only) | Application Server |
| **MinIO API** | 9000 | 9000 | S3-Compatible Storage |
| **MinIO Console** | 9001 | 9001 | Storage Admin UI |
| **Redis** | 6379 | 6379 (dev only) | Job Queue & Cache |
| **Prometheus** | 9090 | 9090 | Metrics Collection |
| **Loki** | 3100 | 3100 | Log Aggregation |
| **Grafana** | 3000 | 3001 | Dashboards |
| **Jaeger** | 16686 | 16686 | Tracing UI |
| **Jaeger OTLP** | 4318 | 4318 | Trace Collection |

---

## Quick Start

```bash
# Development
docker compose -f docker/compose.dev.yml up --build

# Production
docker compose -f docker/compose.prod.yml up --build -d

# Access Points
- API Docs:     http://localhost:3000/docs
- Grafana:      http://localhost:3001 (admin/admin)
- MinIO:        http://localhost:9001 (minioadmin/minioadmin)
- Jaeger:       http://localhost:16686
- Prometheus:   http://localhost:9090
```

---

## Appendix

### A. Technology Decision Matrix

| Category | Options Considered | Selected | Rationale |
|----------|-------------------|----------|-----------|
| **Web Framework** | Express, Fastify, Hono | Hono | Ultra-fast, native TS, modern API |
| **Job Queue** | BullMQ, Agenda, Bee | BullMQ | Redis-backed, reliable, feature-rich |
| **S3 Storage** | MinIO, SeaweedFS, LocalStack | MinIO | Production-ready, S3 compatible |
| **Metrics** | Prometheus, InfluxDB, Graphite | Prometheus | Industry standard, PromQL power |
| **Logging** | Loki, ELK, Graylog | Loki | Grafana native, lightweight |
| **Tracing** | Jaeger, Zipkin, Tempo | Jaeger | Mature, great UI, OTLP support |
| **Orchestration** | Kubernetes, Docker Compose, Nomad | Docker Compose | Simple, sufficient for scale |

### B. Glossary

| Term | Definition |
|------|------------|
| **SSE** | Server-Sent Events - unidirectional server-to-client streaming |
| **BullMQ** | Node.js message queue library built on Redis |
| **Presigned URL** | Time-limited URL granting temporary access to S3 objects |
| **OTLP** | OpenTelemetry Protocol for transmitting telemetry data |
| **PromQL** | Prometheus Query Language for metric analysis |

---

*Document Version: 1.0 | Last Updated: December 12, 2025*
