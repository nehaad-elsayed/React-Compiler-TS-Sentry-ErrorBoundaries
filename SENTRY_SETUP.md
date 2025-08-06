# Sentry Error Boundary Setup

This project has been configured with Sentry error boundaries for better error handling and monitoring.

## Setup

1. **Install Sentry React**: Already installed via `npm install @sentry/react`

2. **Configure Sentry DSN**:
   - Open `src/sentry.ts`
   - Replace `"YOUR_SENTRY_DSN_HERE"` with your actual Sentry DSN
   - You can get your DSN from your Sentry project settings

## Components

### CustomErrorBoundary

Located in `src/components/ErrorBoundary.tsx`

This is a custom error boundary component that:

- Catches JavaScript errors in child components
- Displays a user-friendly error message
- Provides error details in development mode
- Includes a "Try again" button to reset the error state
- Reports errors to Sentry automatically

### BuggyComponent

Located in `src/components/BuggyComponent.tsx`

A test component that demonstrates error boundary functionality:

- Throws an error after 5 clicks
- Has a manual error trigger button
- Useful for testing error boundaries

## Usage

Wrap any component that might throw errors with `CustomErrorBoundary`:

```tsx
import CustomErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <CustomErrorBoundary>
      <YourComponent />
    </CustomErrorBoundary>
  );
}
```

## Features

- **Error Catching**: Catches JavaScript errors in component trees
- **User-Friendly UI**: Shows a styled error message instead of crashing
- **Error Recovery**: Provides a "Try again" button to reset the error state
- **Development Details**: Shows detailed error information in development mode
- **Sentry Integration**: Automatically reports errors to Sentry for monitoring
- **Event ID**: Displays Sentry event ID for error tracking

## Testing

You can test the error boundary by:

1. Running the app: `npm run dev`
2. Clicking the "Increment (will crash after 5)" button in the BuggyComponent
3. Clicking the "Trigger Error" button for immediate error
4. Observing how the error boundary handles the errors

## Configuration

The Sentry configuration in `src/sentry.ts` includes:

- Browser tracing integration
- Session replay integration
- Performance monitoring
- Error sampling rates

Adjust these settings based on your needs.
