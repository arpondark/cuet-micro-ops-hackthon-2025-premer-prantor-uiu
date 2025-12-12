# Challenge 2: Architecture Design - COMPLETED ✅

## CUET Micro-Ops Hackathon 2025 - Premer Prantor UIU

**Status**: ✅ COMPLETED  
**Points**: 15 (Maximum)  
**Date**: December 12, 2025

---

## 📊 Download Processing Time Scenario

The hackathon challenge presents a real-world file download system with variable processing times:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        Download Processing Time                         │
├─────────────────────────────────────────────────────────────────────────┤
│  🟢 Fast Downloads    ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ~10-15s   │
│  🟡 Medium Downloads  ████████████████████░░░░░░░░░░░░░░░░░░  ~30-60s   │
│  🔴 Slow Downloads    ████████████████████████████████████░░  ~60-120s  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Why This Matters

When deployed behind reverse proxies (Cloudflare, nginx, AWS ALB):

| Problem                 | Impact                                        |
| ----------------------- | --------------------------------------------- |
| **Connection Timeouts** | Cloudflare's 100s timeout kills long requests |
| **Gateway Errors**      | Users see 504 errors for slow downloads       |
| **Poor UX**             | No progress feedback during long waits        |
| **Resource Waste**      | Open connections consume server memory        |

---

## 🏗️ Architecture Solution Implemented

### Pattern: Asynchronous Job Queue (BullMQ) + SSE

We implemented a robust **Export System** that decouples the HTTP request from the file processing.

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                        ARCHITECTURE OVERVIEW                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│   ┌─────────────┐                                                                    │
│   │   Client    │──────────────────────────────────────────┐                        │
│   │  (Browser)  │                                          │                        │
│   └──────┬──────┘                                          │                        │
│          │                                                 │                        │
│          ▼                                                 ▼                        │
│   ┌─────────────────────────────────────────────────────────────────────────────┐  │
│   │                         Docker Network                                       │  │
│   │  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐   │  │
│   │  │  Hono API   │    │    Redis    │    │   MinIO     │    │  Grafana    │   │  │
│   │  │  :3000      │◀──▶│   :6379     │    │  :9000/9001 │    │   :3001     │   │  │
│   │  └──────┬──────┘    └──────┬──────┘    └─────────────┘    └──────┬──────┘   │  │
│   │         │                  │                                     │          │  │
│   │         │ /metrics         ▼                                     │          │  │
│   │         ▼           ┌─────────────┐                              ▼          │  │
│   │  ┌─────────────┐    │   Worker    │    ┌─────────────┐                      │  │
│   │  │ Prometheus  │◀───│   (Node)    │    │    Loki     │                      │  │
│   │  │   :9090     │    └─────────────┘    │   :3100     │                      │  │
│   │  └─────────────┘                       └─────────────┘                      │  │
│   └─────────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 🛡️ Resilience: Handling Browser Disconnects

One of the key requirements is handling users closing their browser during a long download. Our architecture handles this natively:

1.  **Decoupling**: When a user initiates a download (`POST /v1/export`), the API adds a job to the Redis queue and immediately returns a `jobId`.
2.  **Background Processing**: The **Worker** process picks up the job from Redis. It runs independently of the API and the user's browser connection.
3.  **Persistence**: If the user closes the browser, the Worker **continues processing** the file (generating, uploading to S3).
4.  **Reconnection**: When the user returns and checks the status (`GET /v1/export/:jobId`), they will see the job as `completed` (or `processing`) and can download the file.

**Scenario:**

1. User starts export (Job ID: `abc-123`).
2. User closes browser tab at 50% progress.
3. Worker continues processing to 100% and uploads to MinIO.
4. User comes back 5 minutes later, enters Job ID.
5. System returns "Completed" and provides the download URL.

---

## 📁 Files Created/Modified

### Core Implementation Files

| File                                             | Purpose                              |
| ------------------------------------------------ | ------------------------------------ |
| [src/index.ts](src/index.ts)                     | Main API (Job Creation, Status, SSE) |
| [src/worker.ts](src/worker.ts)                   | Background Worker (File Processing)  |
| [src/queue.ts](src/queue.ts)                     | Shared BullMQ Queue Configuration    |
| [docker/compose.dev.yml](docker/compose.dev.yml) | Full Docker stack (API + Worker)     |

### Documentation Files

| File                               | Purpose                               |
| ---------------------------------- | ------------------------------------- |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Complete architecture design document |
| [QUICKSTART.md](QUICKSTART.md)     | Quick start guide                     |
| [MAKE.md](MAKE.md)                 | Makefile commands documentation       |

### Observability Configuration

| File                                                                                                                                         | Purpose                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [docker/config/prometheus/prometheus.yml](docker/config/prometheus/prometheus.yml)                                                           | Prometheus scrape config (API + Worker) |
| [docker/config/grafana/provisioning/dashboards/json/api-overview.json](docker/config/grafana/provisioning/dashboards/json/api-overview.json) | Grafana dashboard                       |

---

## 📊 Prometheus Metrics Implemented

### HTTP Metrics

```typescript
// Total HTTP requests counter
http_requests_total{method, path, status}

// HTTP request duration histogram
http_request_duration_seconds_bucket{method, path, status, le}
```

### Export Job Metrics (Worker)

```typescript
// Active export jobs gauge
export_jobs_active

// Total export jobs counter
export_jobs_total{status}  // status: "completed" | "failed"

// Job processing time histogram
export_job_duration_seconds_bucket{status, le}
// Buckets: [5, 10, 15, 30, 60, 90, 120] seconds
```

---

## 🌐 API Endpoints

### Export API

| Method | Endpoint                     | Description               |
| ------ | ---------------------------- | ------------------------- |
| `POST` | `/v1/export`                 | Initiate batch export job |
| `GET`  | `/v1/export/:jobId`          | Poll job status           |
| `GET`  | `/v1/export/:jobId/progress` | Real-time progress (SSE)  |
| `GET`  | `/v1/export/:jobId/download` | Get final download URL    |

---

## 🧪 Testing the Scenario

### 1. Start the Stack

```bash
make dev
```

### 2. Generate Export Job

```bash
# Start an export job
curl -X POST http://localhost:3000/v1/export \
  -H "Content-Type: application/json" \
  -d '{"file_ids": [10000, 20000]}'
```

### 3. View Metrics

```bash
# Check Prometheus metrics
curl http://localhost:3000/metrics | grep -E "export|http_requests"
```

### 4. View Grafana Dashboard

Open http://localhost:3001 → Login (admin/admin) → Dashboards → **Delineate API Overview**

---

## ✅ Challenge 2 Complete!

All architecture design requirements have been implemented:

1. ✅ Complete architecture document with diagrams
2. ✅ Docker Compose stack (no Kubernetes)
3. ✅ **Resilient Background Processing** (BullMQ + Worker)
4. ✅ Prometheus metrics for Export Jobs and HTTP
5. ✅ Grafana dashboard matching the scenario
6. ✅ Real-time monitoring capabilities (SSE)
7. ✅ Full observability stack (Prometheus, Loki, Jaeger, Grafana)
