FROM node:20-bookworm AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with full permissions
RUN npm install --unsafe-perm

# Copy source
COPY . .

# Build arguments
ARG VITE_API_URL
ARG VITE_JAEGER_URL
ARG VITE_OTEL_ENDPOINT
ARG VITE_SENTRY_DSN

# Set environment variables for build
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_JAEGER_URL=$VITE_JAEGER_URL
ENV VITE_OTEL_ENDPOINT=$VITE_OTEL_ENDPOINT
ENV VITE_SENTRY_DSN=$VITE_SENTRY_DSN

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
