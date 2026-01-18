// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { ErrorBoundary, FallbackProps } from "react-error-boundary";

const BuggyComponent = () => {
  throw new Error("This is a test error!"); // Simulate an error
};

// Fallback UI rendered when an error is caught
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <h1>Something went wrong.</h1>
      <details style={{ whiteSpace: 'pre-wrap' }}>
        {error instanceof Error ? error.toString() : String(error)}
      </details>
      <button style={{ marginTop: '1rem' }} onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const FCErrorBoundaryExample = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback} // Fallback component rendered when an error is caught
      onReset={() => {
        // Optional hook to reset application state
        console.log("Error boundary reset");
      }}
    >
      <BuggyComponent />
    </ErrorBoundary>
  );
};

export default FCErrorBoundaryExample;
