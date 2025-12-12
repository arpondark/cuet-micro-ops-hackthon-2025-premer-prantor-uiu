# 🚀 Quick Start Guide - CUET Micro-Ops Hackathon 2025

## Hackathon Challenge Status

| Challenge                              | Status                      | Points    |
| -------------------------------------- | --------------------------- | --------- |
| ✅ Challenge 1: S3 Storage Integration | **Complete**                | 15/15     |
| ✅ Challenge 2: Architecture Design    | **Complete**                | 15/15     |
| ✅ Challenge 3: CI/CD Pipeline         | **Complete**                | 10/10     |
| ✅ Challenge 4: Observability (Bonus)  | **Complete**                | 10/10     |
| **Total**                              | **All Challenges Complete** | **50/50** |

---

## 📦 Prerequisites

- **Docker** >= 24.x
- **Docker Compose** >= 2.x
- **Node.js** >= 24.10.0 (for local development)
- **npm** >= 10.x

---

## 🐳 Running with Docker (Recommended)

### Step 1: Clone the Repository

```bash
git clone https://github.com/bongodev/cuet-micro-ops-hackthon-2025.git
cd cuet-micro-ops-hackthon-2025
```

### Step 2: Start All Services

```bash
# Development mode (with hot-reload, quick delays 5-15s)
npm run docker:dev

# OR Production mode (full delays 10-120s)
npm run docker:prod
```

### Step 3: Wait for Services to Start

Wait ~30-60 seconds for all services to be healthy. You can check status with:

```bash
docker ps
```

All containers should show `healthy` status.

---

## 🌐 Access Points

Once started, access these URLs in your browser:

| Service               | URL                          | Credentials             |
| --------------------- | ---------------------------- | ----------------------- |
| **API Documentation** | http://localhost:3000/docs   | -                       |
| **API Health**        | http://localhost:3000/health | -                       |
| **Grafana Dashboard** | http://localhost:3001        | admin / admin           |
| **MinIO Console**     | http://localhost:9001        | minioadmin / minioadmin |
| **Prometheus**        | http://localhost:9090        | -                       |
| **Jaeger Tracing**    | http://localhost:16686       | -                       |
| **Loki Logs**         | http://localhost:3100        | -                       |

---

## ✅ Verify Everything Works

### 1. Check Health Endpoint

```bash
curl http://localhost:3000/health
```

Expected response:

```json
{ "status": "healthy", "checks": { "storage": "ok" } }
```

### 2. Run E2E Tests

```bash
npm run test:e2e
```

Expected: All 29 tests should pass.

### 3. Test Export API

```bash
# Create an export job
curl -X POST http://localhost:3000/v1/export/create \
  -H "Content-Type: application/json" \
  -d '{"file_ids": [70000, 70001], "user_id": "test"}'

# Response contains jobId, sseUrl, and statusUrl
# Check status:
# curl http://localhost:3000/v1/export/status/<jobId>

# Track progress via SSE:
# curl http://localhost:3000/v1/export/progress/<jobId>

# Get download URL when completed:
# curl http://localhost:3000/v1/export/download/<jobId>
```

---

## 📊 Observability Stack

### Grafana Dashboards

1. Open http://localhost:3001
2. Login with `admin` / `admin`
3. Navigate to **Dashboards** → **Delineate** folder
4. View the **API Overview** dashboard

### Pre-configured Data Sources

- **Prometheus** - Metrics
- **Loki** - Logs
- **Jaeger** - Distributed tracing

### View Logs

In Grafana:

1. Go to **Explore**
2. Select **Loki** data source
3. Query: `{container=~"delineate.*"}`

### View Traces

1. Open Jaeger: http://localhost:16686
2. Select service: `delineate-hackathon-challenge`
3. Click **Find Traces**

---

## 🏗️ Architecture

See [ARCHITECTURE.md](ARCHITECTURE.md) for the complete system design including:

- Architecture diagrams
- Hybrid polling + SSE pattern for long-running downloads
- Component interactions
- API design
- Proxy configurations
- Frontend integration examples

---

## 🛠️ Services Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Docker Network                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Application Layer:                                      │
│  ├── Hono API Server (port 3000)                        │
│                                                          │
│  Data Layer:                                             │
│  ├── MinIO S3 Storage (port 9000/9001)                  │
│  ├── Redis Cache/Queue (port 6379)                      │
│                                                          │
│  Observability Layer:                                    │
│  ├── Prometheus Metrics (port 9090)                     │
│  ├── Loki Log Aggregation (port 3100)                   │
│  ├── Grafana Dashboards (port 3001)                     │
│  ├── Jaeger Tracing (port 16686)                        │
│  └── Promtail Log Shipper                               │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
.
├── ARCHITECTURE.md          # Complete architecture design
├── QUICKSTART.md            # This file
├── .env                     # Environment configuration
├── docker/
│   ├── compose.dev.yml      # Development Docker Compose
│   ├── compose.prod.yml     # Production Docker Compose
│   ├── Dockerfile.dev       # Dev container
│   ├── Dockerfile.prod      # Prod container
│   └── config/
│       ├── prometheus/      # Prometheus config
│       ├── loki/            # Loki config
│       ├── promtail/        # Promtail config
│       └── grafana/         # Grafana provisioning
├── .github/
│   └── workflows/
│       └── ci.yml           # CI/CD Pipeline
└── src/
    └── index.ts             # Main application
```

---

## 🔧 Troubleshooting

### Services not starting?

```bash
# Check container logs
docker logs delineate-delineate-app-1
docker logs delineate-minio
docker logs delineate-redis

# Restart all services
docker compose -f docker/compose.dev.yml down
docker compose -f docker/compose.dev.yml up -d
```

### Port conflicts?

If ports are already in use, modify `docker/compose.dev.yml` to use different ports.

### Storage not connecting?

Ensure MinIO is healthy:

```bash
docker logs delineate-minio-init
```

Should show: `Bucket downloads created successfully`

---

## 🛑 Stopping Services

```bash
# Stop and remove containers
docker compose -f docker/compose.dev.yml down

# Stop and remove containers + volumes (clean reset)
docker compose -f docker/compose.dev.yml down -v
```

---

## 🧪 Local Development (Without Docker)

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev

# Run linting
npm run lint

# Run E2E tests
npm run test:e2e
```

---

## 📚 Additional Resources

- [Hono Documentation](https://hono.dev)
- [MinIO Documentation](https://min.io/docs)
- [Grafana Documentation](https://grafana.com/docs)
- [Prometheus Documentation](https://prometheus.io/docs)
- [Loki Documentation](https://grafana.com/docs/loki)
