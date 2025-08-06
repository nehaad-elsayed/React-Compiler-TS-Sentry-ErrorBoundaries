import React from "react";
import { ErrorBoundary as SentryErrorBoundary } from "@sentry/react";

//& function ll error fallback 3shan y3ml display elerror
function ErrorFallback({
  error,
  componentStack,
  eventId,
  resetError,
}: {
  error: unknown; //&unknown 3shan yst2bl ay no3 error
  componentStack: string; //& path elcomponnent elly 7asal feeh elerror
  eventId: string; //& id elerror 3shan yzhar ll team
  resetError: () => void; //& function 3shan y3ml reset elerror
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
      {import.meta.env.DEV && ( //&y3ny da hytnfz  f eldev mode bs // env da variable by2oli ana f ay mode
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

//& interface ll props
interface CustomErrorBoundaryProps {
  children: React.ReactNode;
}

export function CustomErrorBoundary({ children }: CustomErrorBoundaryProps) {
  return (
    //&  by3rdly elfallback lw feeh error
    <SentryErrorBoundary fallback={ErrorFallback}>
      {children}
    </SentryErrorBoundary>
  );
}

export default CustomErrorBoundary; //& w ast5dmo ba2a f ay makan a8lf beeh ay component (nfs elly bemlo m3 elcontext)
