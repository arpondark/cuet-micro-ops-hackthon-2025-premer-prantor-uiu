# ============================================
# CUET Micro-Ops Hackathon 2025 - Makefile
# Premer Prantor UIU
# ============================================

.PHONY: help build dev prod stop delete restart logs status test clean

# Default target
help:
	@echo "============================================"
	@echo "  CUET Micro-Ops Hackathon 2025 - Commands"
	@echo "============================================"
	@echo ""
	@echo "Development:"
	@echo "  make build      - Build Docker images"
	@echo "  make dev        - Start development environment"
	@echo "  make prod       - Start production environment"
	@echo ""
	@echo "Services:"
	@echo "  make api        - Start API server only"
	@echo "  make worker     - Start worker process only"
	@echo "  make all        - Start all services (API + Worker + Infra)"
	@echo ""
	@echo "Management:"
	@echo "  make stop       - Stop all containers"
	@echo "  make delete     - Stop and remove all containers + volumes"
	@echo "  make restart    - Restart all services"
	@echo "  make reboot     - Full reboot (delete + build + start)"
	@echo ""
	@echo "Monitoring:"
	@echo "  make logs       - View all container logs"
	@echo "  make logs-api   - View API server logs"
	@echo "  make logs-worker- View Worker logs"
	@echo "  make status     - Show container status"
	@echo ""
	@echo "Testing:"
	@echo "  make test       - Run E2E tests"
	@echo "  make health     - Check API health"
	@echo ""
	@echo "Cleanup:"
	@echo "  make clean      - Remove all containers, volumes, and images"
	@echo ""
	@echo "============================================"
	@echo "  Access URLs (after starting):"
	@echo "============================================"
	@echo "  API Docs:    http://localhost:3000/docs"
	@echo "  Health:      http://localhost:3000/health"
	@echo "  Worker Metrics: http://localhost:3002/metrics"
	@echo "  Grafana:     http://localhost:3001 (admin/admin)"
	@echo "  MinIO:       http://localhost:9001 (minioadmin/minioadmin)"
	@echo "  Jaeger:      http://localhost:16686"
	@echo ""

# ============================================
# BUILD COMMANDS
# ============================================

build:
	@echo "🔨 Building Docker images..."
	docker compose -f docker/compose.dev.yml build
	@echo "✅ Build complete!"

build-prod:
	@echo "🔨 Building production Docker images..."
	docker compose -f docker/compose.prod.yml build
	@echo "✅ Production build complete!"

# ============================================
# START COMMANDS
# ============================================

dev:
	@echo "🚀 Starting development environment (API + Worker + Infra)..."
	docker compose -f docker/compose.dev.yml up -d --build
	@echo ""
	@echo "✅ Development environment started!"
	@echo ""
	@echo "📊 Access URLs:"
	@echo "   API Docs:    http://localhost:3000/docs"
	@echo "   Health:      http://localhost:3000/health"
	@echo "   Worker:      http://localhost:3002/metrics"
	@echo "   MinIO:       http://localhost:9001"
	@echo "   Jaeger:      http://localhost:16686"

all: dev

api:
	@echo "🚀 Starting API server only..."
	docker compose -f docker/compose.dev.yml up -d delineate-app
	@echo "✅ API server started at http://localhost:3000"

worker:
	@echo "🚀 Starting worker process only..."
	docker compose -f docker/compose.dev.yml up -d delineate-worker
	@echo "✅ Worker started at http://localhost:3002/metrics"

infra:
	@echo "🚀 Starting infrastructure (Redis, MinIO, etc.)..."
	docker compose -f docker/compose.dev.yml up -d minio minio-init redis delineate-jaeger
	@echo "✅ Infrastructure started!"

prod:
	@echo "🚀 Starting production environment..."
	docker compose -f docker/compose.prod.yml up -d --build
	@echo ""
	@echo "✅ Production environment started!"
	@echo ""
	@echo "📊 Access URLs:"
	@echo "   API Docs:    http://localhost:3000/docs"
	@echo "   Health:      http://localhost:3000/health"
	@echo "   MinIO:       http://localhost:9001"
	@echo "   Jaeger:      http://localhost:16686"

# ============================================
# STOP/DELETE COMMANDS
# ============================================

stop:
	@echo "🛑 Stopping all containers..."
	docker compose -f docker/compose.dev.yml stop
	@echo "✅ All containers stopped!"

delete:
	@echo "🗑️  Stopping and removing all containers + volumes..."
	docker compose -f docker/compose.dev.yml down -v
	@echo "✅ All containers and volumes removed!"

delete-prod:
	@echo "🗑️  Stopping and removing production containers + volumes..."
	docker compose -f docker/compose.prod.yml down -v
	@echo "✅ Production containers and volumes removed!"

# ============================================
# RESTART COMMANDS
# ============================================

restart:
	@echo "🔄 Restarting all services..."
	docker compose -f docker/compose.dev.yml restart
	@echo "✅ All services restarted!"

reboot:
	@echo "🔄 Full reboot in progress..."
	@echo "   Step 1: Removing containers and volumes..."
	docker compose -f docker/compose.dev.yml down -v
	@echo "   Step 2: Rebuilding images..."
	docker compose -f docker/compose.dev.yml build
	@echo "   Step 3: Starting services..."
	docker compose -f docker/compose.dev.yml up -d
	@echo ""
	@echo "✅ Full reboot complete!"
	@echo ""
	@echo "📊 Access URLs:"
	@echo "   API Docs:    http://localhost:3000/docs"
	@echo "   Health:      http://localhost:3000/health"

reboot-prod:
	@echo "🔄 Full production reboot in progress..."
	docker compose -f docker/compose.prod.yml down -v
	docker compose -f docker/compose.prod.yml build
	docker compose -f docker/compose.prod.yml up -d
	@echo "✅ Production reboot complete!"

# ============================================
# MONITORING COMMANDS
# ============================================

logs:
	@echo "📋 Showing all container logs..."
	docker compose -f docker/compose.dev.yml logs -f

logs-api:
	@echo "📋 Showing API server logs..."
	docker logs -f delineate-delineate-app-1

logs-worker:
	@echo "📋 Showing Worker logs..."
	docker logs -f delineate-delineate-worker-1

logs-worker:
	@echo "📋 Showing Worker logs..."
	docker logs -f delineate-delineate-worker-1

logs-minio:
	@echo "📋 Showing MinIO logs..."
	docker logs -f delineate-minio

status:
	@echo "📊 Container Status:"
	@echo ""
	docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# ============================================
# TESTING COMMANDS
# ============================================

test:
	@echo "🧪 Running E2E tests..."
	npm run test:e2e

health:
	@echo "🏥 Checking API health..."
	@curl -s http://localhost:3000/health | python -m json.tool 2>/dev/null || curl -s http://localhost:3000/health

lint:
	@echo "🔍 Running linter..."
	npm run lint

format:
	@echo "✨ Formatting code..."
	npm run format

# ============================================
# CLEANUP COMMANDS
# ============================================

clean:
	@echo "🧹 Full cleanup in progress..."
	@echo "   Removing dev containers and volumes..."
	-docker compose -f docker/compose.dev.yml down -v --rmi local
	@echo "   Removing prod containers and volumes..."
	-docker compose -f docker/compose.prod.yml down -v --rmi local
	@echo "   Pruning unused Docker resources..."
	-docker system prune -f
	@echo "✅ Cleanup complete!"

# ============================================
# UTILITY COMMANDS
# ============================================

shell-api:
	@echo "🐚 Opening shell in API container..."
	docker exec -it delineate-delineate-app-1 sh

shell-redis:
	@echo "🐚 Opening Redis CLI..."
	docker exec -it delineate-redis redis-cli

shell-minio:
	@echo "🐚 Opening shell in MinIO container..."
	docker exec -it delineate-minio sh

# Open URLs in browser (Windows)
open-docs:
	@echo "🌐 Opening API Docs..."
	start http://localhost:3000/docs

open-docs:
	@echo "🌐 Opening API Docs..."
	start http://localhost:3000/docs

open-minio:
	@echo "🌐 Opening MinIO Console..."
	start http://localhost:9001

open-jaeger:
	@echo "🌐 Opening Jaeger..."
	start http://localhost:16686

open-all:
	@echo "🌐 Opening all dashboards..."
	start http://localhost:3000/docs
	start http://localhost:9001
	start http://localhost:16686
