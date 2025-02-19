import { Component, ErrorInfo, ReactNode } from 'react';

// Define the types for props and state
interface ErrorBoundaryProps {
  children: ReactNode; // Components wrapped by the ErrorBoundary
  fallback?: ReactNode; // Optional fallback UI
}

interface ErrorBoundaryState {
  hasError: boolean; // Track whether an error has been caught
  error?: Error; // Store the error object (optional)
}

// Create the ErrorBoundary class component
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state to show fallback UI when an error is caught
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  // Log error details for debugging
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error);
    console.error('Error details:', errorInfo.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Render fallback UI if an error occurred
      return (
        this.props.fallback || (
          <div>
            <h1>Something went wrong.</h1>
            {this.state.error && (
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error.toString()}
              </details>
            )}
          </div>
        )
      );
    }

    // Render children if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
