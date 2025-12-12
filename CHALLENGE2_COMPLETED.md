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

### Pattern: Hybrid Polling + Async Processing

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
│   │  └──────┬──────┘    └─────────────┘    └─────────────┘    └──────┬──────┘   │  │
│   │         │                                                        │          │  │
│   │         │ /metrics                                               │          │  │
│   │         ▼                                                        ▼          │  │
│   │  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                      │  │
│   │  │ Prometheus  │───▶│    Loki     │    │   Jaeger    │                      │  │
│   │  │   :9090     │    │   :3100     │    │  :16686     │                      │  │
│   │  └─────────────┘    └─────────────┘    └─────────────┘                      │  │
│   └─────────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 Files Created/Modified

### Core Implementation Files

| File | Purpose |
|------|---------|
| [src/index.ts](src/index.ts) | Main API with Prometheus metrics |
| [docker/compose.dev.yml](docker/compose.dev.yml) | Full Docker stack configuration |
| [docker/Dockerfile.dev](docker/Dockerfile.dev) | Development container |
| [.env](.env) | Environment configuration |

### Documentation Files

| File | Purpose |
|------|---------|
| [ARCHITECTURE.md](ARCHITECTURE.md) | Complete architecture design document |
| [QUICKSTART.md](QUICKSTART.md) | Quick start guide |
| [STACK.md](STACK.md) | Technology stack documentation |
| [MAKE.md](MAKE.md) | Makefile commands documentation |
| [Makefile](Makefile) | Docker and dev commands |

### Observability Configuration

| File | Purpose |
|------|---------|
| [docker/config/prometheus/prometheus.yml](docker/config/prometheus/prometheus.yml) | Prometheus scrape config |
| [docker/config/grafana/provisioning/dashboards/json/api-overview.json](docker/config/grafana/provisioning/dashboards/json/api-overview.json) | Grafana dashboard |
| [docker/config/grafana/provisioning/datasources/datasources.yml](docker/config/grafana/provisioning/datasources/datasources.yml) | Grafana data sources |
| [docker/config/loki/loki-config.yml](docker/config/loki/loki-config.yml) | Loki logging config |
| [docker/config/promtail/promtail-config.yml](docker/config/promtail/promtail-config.yml) | Promtail log collector |

### API Testing

| File | Purpose |
|------|---------|
| [postman/Delineate-API.postman_collection.json](postman/Delineate-API.postman_collection.json) | Postman collection |
| [postman/Delineate-Local.postman_environment.json](postman/Delineate-Local.postman_environment.json) | Postman environment |

---

## 📊 Prometheus Metrics Implemented

### HTTP Metrics

```typescript
// Total HTTP requests counter
http_requests_total{method, path, status}

// HTTP request duration histogram
http_request_duration_seconds_bucket{method, path, status, le}
```

### Download Metrics

```typescript
// Active downloads gauge
downloads_active

// Total downloads counter
downloads_total{status}  // status: "completed" | "failed"

// Download processing time histogram
download_processing_seconds_bucket{file_id, status, le}
// Buckets: [5, 10, 15, 30, 60, 90, 120] seconds
```

### Default Node.js Metrics

```typescript
// CPU, Memory, Event Loop, GC metrics
process_cpu_seconds_total
process_resident_memory_bytes
nodejs_heap_size_total_bytes
nodejs_eventloop_lag_seconds
// ... and more
```

---

## 📈 Grafana Dashboard Panels

The "Delineate API Overview" dashboard includes:

### Download Processing Time Scenario Section
- 🔄 **Active Downloads** - Gauge showing current processing count
- ✅ **Completed** - Counter of successful downloads
- ❌ **Failed** - Counter of failed downloads
- ⏱️ **Avg Processing Time** - Average time in seconds
- 📊 **Processing Time Distribution** - Bar chart showing Fast/Medium/Slow
- ⏳ **Download Progress (P95)** - Gauge with color thresholds
- 📥 **Download Rate** - Downloads per minute

### HTTP API Metrics Section
- 📈 **Request Rate** - Requests per second
- 🚨 **Error Rate** - Percentage of 5xx errors
- ⚡ **P99 Latency** - 99th percentile response time
- 📡 **Request Rate by Endpoint** - Breakdown by method/path
- ⚡ **Response Time Percentiles** - P50, P95, P99

### Application Logs Section
- 📋 **Download Logs** - Real-time logs from Loki

---

## 🌐 API Endpoints

### Download API

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/v1/download/initiate` | Initiate batch download job |
| `POST` | `/v1/download/check` | Check single file availability |
| `POST` | `/v1/download/start` | Start download (long-running) |

### System Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Welcome message |
| `GET` | `/health` | Health check |
| `GET` | `/metrics` | Prometheus metrics |
| `GET` | `/docs` | Scalar OpenAPI UI |
| `GET` | `/openapi` | OpenAPI JSON spec |

---

## 🚀 Access URLs

| Service | URL | Credentials |
|---------|-----|-------------|
| **API** | http://localhost:3000 | - |
| **API Docs** | http://localhost:3000/docs | - |
| **Metrics** | http://localhost:3000/metrics | - |
| **Grafana** | http://localhost:3001 | admin/admin |
| **Prometheus** | http://localhost:9090 | - |
| **MinIO Console** | http://localhost:9001 | minioadmin/minioadmin |
| **Jaeger UI** | http://localhost:16686 | - |
| **Loki** | http://localhost:3100 | - |

---

## 🧪 Testing the Scenario

### 1. Start the Stack

```bash
# Using Make
make dev

# Or directly
docker compose -f docker/compose.dev.yml up -d --build
```

### 2. Generate Download Metrics

```bash
# Check file availability
curl -X POST http://localhost:3000/v1/download/check \
  -H "Content-Type: application/json" \
  -d '{"file_id": 10000}'

# Start a download (5-15s processing time in dev)
curl -X POST http://localhost:3000/v1/download/start \
  -H "Content-Type: application/json" \
  -d '{"file_id": 10000}'
```

### 3. View Metrics

```bash
# Check Prometheus metrics
curl http://localhost:3000/metrics | grep -E "download|http_requests"
```

### 4. View Grafana Dashboard

Open http://localhost:3001 → Login (admin/admin) → Dashboards → **Delineate API Overview**

---

## 📋 Requirements Checklist

- [x] Architecture design document (ARCHITECTURE.md)
- [x] Docker Compose configuration (NO Kubernetes)
- [x] Long-running download handling (10-120s)
- [x] Prometheus metrics integration
- [x] Grafana dashboard with download scenario visualization
- [x] Processing time distribution (Fast/Medium/Slow)
- [x] Active downloads tracking
- [x] Request rate and latency metrics
- [x] Error rate monitoring
- [x] Application logs in Grafana (Loki)
- [x] Distributed tracing (Jaeger)
- [x] OpenAPI documentation (Scalar UI)
- [x] Postman collection with scenario documentation

---

## 🔑 Key Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **No Kubernetes** | Docker Compose | Per hackathon rules, simpler for this scale |
| **Metrics** | prom-client | Native Prometheus client for Node.js |
| **Logging** | Loki + Promtail | Integrates with Grafana, efficient |
| **Tracing** | Jaeger + OTEL | Industry standard, visualizes request flow |
| **Storage** | MinIO | S3-compatible, self-hosted |
| **Framework** | Hono | Ultra-fast, OpenAPI support |

---

## 📊 Metric Queries for Grafana

### Download Processing Distribution

```promql
# Fast downloads (10-15s)
sum(increase(download_processing_seconds_bucket{le="15"}[5m]))

# Medium downloads (30-60s)
sum(increase(download_processing_seconds_bucket{le="60"}[5m])) 
- sum(increase(download_processing_seconds_bucket{le="15"}[5m]))

# Slow downloads (60-120s)
sum(increase(download_processing_seconds_bucket{le="120"}[5m])) 
- sum(increase(download_processing_seconds_bucket{le="60"}[5m]))
```

### HTTP Metrics

```promql
# Request rate
sum(rate(http_requests_total[5m]))

# Error rate percentage
sum(rate(http_requests_total{status=~"5.."}[5m])) 
/ sum(rate(http_requests_total[5m])) * 100

# P99 latency
histogram_quantile(0.99, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))
```

---

## ✅ Challenge 2 Complete!

All architecture design requirements have been implemented:

1. ✅ Complete architecture document with diagrams
2. ✅ Docker Compose stack (no Kubernetes)
3. ✅ Prometheus metrics for downloads and HTTP
4. ✅ Grafana dashboard matching the scenario
5. ✅ Processing time visualization (Fast/Medium/Slow)
6. ✅ Real-time monitoring capabilities
7. ✅ Full observability stack (Prometheus, Loki, Jaeger, Grafana)
