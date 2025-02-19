import ErrorBoundary from '../components/error-boundary/ErrorBoundary';

const BuggyComponent = () => {
  throw new Error('This is a test error!'); // Simulate an error
};

const ErrorBoundaryExample = () => {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
};

export default ErrorBoundaryExample;
