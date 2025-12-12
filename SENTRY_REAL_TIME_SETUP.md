# Sentry Real-Time Error Tracking Setup

## What Changed

### ✅ Simplified Setup
- **Removed OpenTelemetry (OTEL)** - Was collecting unnecessary trace data
- **Kept Sentry Only** - Real-time error tracking and monitoring
- **Added Real-Time Sentry Events API** - View all errors/events pushed to Sentry in real-time

### 📊 Real-Time APIs Added

#### 1. **Get All Sentry Events**
```bash
GET /api/sentry/events?limit=50&type=error&level=error
```
Returns list of all captured Sentry events (errors, transactions, replays)

**Response:**
```json
{
  "events": [
    {
      "id": "uuid",
      "timestamp": "2025-12-12T...",
      "type": "error",
      "message": "Database connection failed",
      "level": "error",
      "data": {
        "stack": "...",
        "requestId": "...",
        "path": "/api/export",
        "method": "POST"
      }
    }
  ],
  "total": 5,
  "hasMore": false,
  "lastUpdated": "2025-12-12T..."
}
```

#### 2. **Real-Time Sentry Events Stream (SSE)**
```bash
GET /api/sentry/events/stream
```
Server-Sent Events stream showing **all errors as they happen**

**Event Flow:**
1. Connects to endpoint
2. Receives last 100 events immediately
3. New events appear in real-time every 500ms
4. Perfect for dashboard monitoring

### 🏥 Health Endpoint (Works Now!)
```bash
GET /health
```
Returns:
```json
{
  "status": "healthy|unhealthy",
  "checks": {
    "storage": "ok|error"
  }
}
```

## Frontend Configuration

**File:** `frontend/.env` or `.env.example`

```env
VITE_API_URL=http://localhost:3000
VITE_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
```

### Sentry Features Enabled:
- ✅ Browser tracing (100% sample rate)
- ✅ Session replays (100% capture for debugging)
- ✅ All error replays (100% capture)
- ✅ Debug mode enabled (console logging)

## Backend Configuration

**File:** `.env` or `.env.example`

```env
NODE_ENV=development
PORT=3000
SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
```

### Sentry Features Enabled:
- ✅ Real-time error capture
- ✅ Debug mode enabled (shows Sentry logs in console)
- ✅ Automatic error handler integration

## How It Works Now

### 1. **Error Occurs**
```
App throws error → Sentry catches it → Stored in real-time DB
```

### 2. **Monitor Errors Real-Time**
```
curl http://localhost:3000/api/sentry/events
```
See all errors immediately

### 3. **Live Stream Errors**
```
curl http://localhost:3000/api/sentry/events/stream
```
Watch errors appear as they happen with SSE

### 4. **Check Health**
```
curl http://localhost:3000/health
```
API health shows storage status

## What Gets Captured

✅ **Error Events:**
- Exception messages
- Stack traces
- Request context (method, path, request ID)
- User browser info

✅ **Browser Sessions:**
- User interactions
- Network requests
- Console logs
- Video replay on errors

✅ **Backend Transactions:**
- HTTP request timing
- Database queries
- External API calls

## Testing It

### 1. Start your app
```bash
npm run dev          # Backend
npm run dev          # Frontend (separate terminal)
```

### 2. Trigger an error intentionally
```bash
# Trigger 404 error
curl http://localhost:3000/api/fake-endpoint

# Trigger 500 error (e.g., S3 connection failed)
curl -X POST http://localhost:3000/api/export \
  -H "Content-Type: application/json" \
  -d '{"file_ids": [10000]}'
```

### 3. View real-time events
```bash
# Terminal 1: See all captured errors
curl http://localhost:3000/api/sentry/events

# Terminal 2: Stream errors as they happen
curl http://localhost:3000/api/sentry/events/stream
```

### 4. Check API health
```bash
curl http://localhost:3000/health
```

## Benefits

1. **🚀 Simpler Stack** - No OTEL, Jaeger, or Loki overhead
2. **📊 Real-Time Visibility** - See errors immediately
3. **💾 Persistent** - All events stored in Sentry
4. **📱 Cross-Platform** - Works on browser AND backend
5. **🔍 Deep Insights** - Full context with replays
6. **📈 Production Ready** - Scales with your app

## Removed Components

❌ OpenTelemetry SDK
❌ OTLP Trace Exporter
❌ Jaeger integration
❌ OpenTelemetry instrumentation middleware

These were adding complexity without providing the error visibility you need!
