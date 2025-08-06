import * as Sentry from "@sentry/react";

// Initialize Sentry
Sentry.init({
  dsn: "https://3be0c21a6c642ee4eb113960a25e61c0@o4509792791166976.ingest.us.sentry.io/4509799282245632", // Replace with your actual Sentry DSN
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0,
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

export default Sentry;
