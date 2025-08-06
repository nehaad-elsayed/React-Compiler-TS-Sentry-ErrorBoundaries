import React from "react";
import { ErrorBoundary as SentryErrorBoundary } from "@sentry/react";

function ErrorFallback({
  error,
  componentStack,
  eventId,
  resetError,
}: {
  error: unknown;
  componentStack: string;
  eventId: string;
  resetError: () => void;
}) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ff6b6b",
        borderRadius: "8px",
        backgroundColor: "#fff5f5",
        margin: "10px",
      }}
    >
      <h2 style={{ color: "#d63031", marginBottom: "10px" }}>
        Something went wrong!
      </h2>
      <p style={{ color: "#2d3436", marginBottom: "10px" }}>
        An error occurred in this component. Our team has been notified.
      </p>
      {eventId && (
        <p style={{ fontSize: "12px", color: "#636e72" }}>
          Event ID: {eventId}
        </p>
      )}
      <button
        onClick={resetError}
        style={{
          backgroundColor: "#00b894",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Try again
      </button>
      {import.meta.env.DEV && (
        <details style={{ marginTop: "10px" }}>
          <summary style={{ cursor: "pointer", color: "#636e72" }}>
            Error Details
          </summary>
          <pre
            style={{
              backgroundColor: "#f8f9fa",
              padding: "10px",
              borderRadius: "4px",
              fontSize: "12px",
              overflow: "auto",
            }}
          >
            {error instanceof Error ? error.toString() : String(error)}
            {componentStack}
          </pre>
        </details>
      )}
    </div>
  );
}

interface CustomErrorBoundaryProps {
  children: React.ReactNode;
}

export function CustomErrorBoundary({ children }: CustomErrorBoundaryProps) {
  return (
    <SentryErrorBoundary fallback={ErrorFallback}>
      {children}
    </SentryErrorBoundary>
  );
}

export default CustomErrorBoundary;
