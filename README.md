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

## API Documentation

API docs available at `http://localhost:3000/docs` when running in development mode.

## Deployment

Use Docker Compose for deployment:

- Development: `docker-compose -f docker/compose.dev.yml up`
- Production: `docker-compose -f docker/compose.prod.yml up`
