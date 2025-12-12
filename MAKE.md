# 🛠️ Makefile Commands Guide

## CUET Micro-Ops Hackathon 2025 - Premer Prantor UIU

---

## 📋 Quick Reference

```bash
make help       # Show all available commands
```

---

## 🚀 Development Commands

### Build Docker Images

```bash
make build
```

Builds all Docker images for the development environment.

### Start Development Environment

```bash
make dev
```

Starts all services in development mode with hot-reload enabled.

### Start Production Environment

```bash
make prod
```

Starts all services in production mode with optimized settings.

---

## 🛑 Stop & Delete Commands

### Stop All Containers

```bash
make stop
```

Stops all running containers without removing them.

### Delete All Containers & Volumes

```bash
make delete
```

Stops and removes all containers along with their volumes. Use this to clean up completely.

### Delete Production Environment

```bash
make delete-prod
```

Removes production containers and volumes.

---

## 🔄 Restart Commands

### Restart Services

```bash
make restart
```

Restarts all services without rebuilding.

### Full Reboot (Development)

```bash
make reboot
```

Performs a complete reboot:

1. Removes all containers and volumes
2. Rebuilds all images
3. Starts all services

### Full Reboot (Production)

```bash
make reboot-prod
```

Same as reboot but for production environment.

---

## 📊 Monitoring Commands

### View All Logs

```bash
make logs
```

Shows real-time logs from all containers (follow mode).

### View API Logs Only

```bash
make logs-api
```

Shows logs from the Hono API server only.

### View MinIO Logs

```bash
make logs-minio
```

Shows MinIO storage logs.

### Check Container Status

```bash
make status
```

Displays status of all running containers with ports.

---

## 🧪 Testing Commands

### Run E2E Tests

```bash
make test
```

Executes all end-to-end tests.

### Check API Health

```bash
make health
```

Checks if the API is healthy and responding.

### Run Linter

```bash
make lint
```

Runs ESLint to check code quality.

### Format Code

```bash
make format
```

Formats code using Prettier.

---

## 🧹 Cleanup Commands

### Full Cleanup

```bash
make clean
```

Removes:

- All development containers and volumes
- All production containers and volumes
- All locally built images
- Unused Docker resources

---

## 🐚 Shell Access Commands

### API Container Shell

```bash
make shell-api
```

Opens a shell inside the API container.

### Redis CLI

```bash
make shell-redis
```

Opens the Redis command-line interface.

### MinIO Container Shell

```bash
make shell-minio
```

Opens a shell inside the MinIO container.

---

## 🌐 Open Dashboard Commands (Windows)

### Open API Documentation

```bash
make open-docs
```

Opens Scalar API documentation in browser.

### Open Grafana

```bash
make open-grafana
```

Opens Grafana dashboard in browser.

### Open MinIO Console

```bash
make open-minio
```

Opens MinIO management console in browser.

### Open Jaeger

```bash
make open-jaeger
```

Opens Jaeger tracing UI in browser.

### Open All Dashboards

```bash
make open-all
```

Opens all dashboards at once:

- API Docs
- Grafana
- MinIO Console
- Jaeger

---

## 📌 Common Workflows

### First Time Setup

```bash
make build    # Build images
make dev      # Start services
make health   # Verify everything works
```

### Daily Development

```bash
make dev      # Start if not running
make logs-api # Monitor API logs
make test     # Run tests
```

### After Code Changes

```bash
make restart  # Quick restart
# OR
make reboot   # Full rebuild if needed
```

### Debugging Issues

```bash
make status   # Check container states
make logs     # View all logs
make health   # Test API health
```

### Clean Start

```bash
make clean    # Remove everything
make dev      # Fresh start
```

---

## 🌐 Service URLs

| Service           | URL                             | Port  |
| ----------------- | ------------------------------- | ----- |
| React Dashboard   | <http://localhost:5173>         | 5173  |
| API Documentation | <http://localhost:3000/docs>    | 3000  |
| Health Check      | <http://localhost:3000/health>  | 3000  |
| OpenAPI Spec      | <http://localhost:3000/openapi> | 3000  |
| Jaeger UI         | <http://localhost:16686>        | 16686 |
| MinIO Console     | <http://localhost:9001>         | 9001  |
| MinIO API         | <http://localhost:9000>         | 9000  |
| Redis             | localhost:6379                  | 6379  |

---

## 🔐 Default Credentials

| Service | Username   | Password   |
| ------- | ---------- | ---------- |
| MinIO   | minioadmin | minioadmin |

---

## 🔭 Observability (Challenge 4)

| Tool          | Purpose             | URL                       |
| ------------- | ------------------- | ------------------------- |
| Sentry        | Error tracking      | https://sentry.io (cloud) |
| OpenTelemetry | Distributed tracing | -                         |
| Jaeger        | Trace visualization | <http://localhost:16686>  |

---

## ⚠️ Troubleshooting

### Containers Won't Start

```bash
make clean    # Full cleanup
make dev      # Fresh start
```

### Port Already in Use

```bash
make delete   # Remove existing containers
make dev      # Restart
```

### Health Check Failing

```bash
make logs-api # Check API logs for errors
make status   # Verify all containers are running
```

### Out of Disk Space

```bash
make clean    # Remove unused resources
docker system prune -a  # Deep clean (removes all unused images)
```

---

_Last Updated: December 12, 2025_
