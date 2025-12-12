# CUET Micro Ops Hackathon 2025

## Overview

This project is developed for the CUET Micro Ops Hackathon 2025.

## Features

- Backend API with Hono framework
- Queue processing with Redis
- File upload and processing capabilities
- Real-time monitoring and logging

## Metrics

We use Prometheus for getting metrics. The application exposes metrics endpoints that can be scraped by Prometheus for monitoring and alerting.

## Getting Started

### Prerequisites

- Node.js
- Redis
- Docker (for containerized deployment)

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start Redis server
4. Run the application: `npm run dev`

### Testing

- Run unit tests: `npm test`
- Run e2e tests: `npm run test:e2e`

## Access URLs

After starting the services:

- **Frontend Dashboard**: `http://localhost` (port 80)
- **API Documentation**: `http://localhost:3000/docs`
- **API Health Check**: `http://localhost:3000/health`
- **Grafana**: `http://localhost:3001` (admin/admin)
- **MinIO Console**: `http://localhost:9001` (minioadmin/minioadmin)
- **Jaeger UI**: `http://localhost:16686`

## Deployment

Use Docker Compose for deployment:

- Development: `docker-compose -f docker/compose.dev.yml up`
- Production: `docker-compose -f docker/compose.prod.yml up`

Or use the Makefile commands:

- `make build` - Build Docker images
- `make dev` - Start development environment
- `make prod` - Start production environment
