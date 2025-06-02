import { StrictMode, ErrorInfo } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

function onCaughtError(error: any, errorInfo: ErrorInfo) {
  console.error('In onCaughtError', error, errorInfo.componentStack);
}

function onUncaughtError(error: any, errorInfo: ErrorInfo) {
  console.error('In onUncaughtError', error, errorInfo.componentStack);
}

function onRecoverableError(error: any, errorInfo: ErrorInfo) {
  console.error('In onRecoverableError', error, errorInfo.componentStack);
}

// Create a root that defined three error hooks: 
// onCaughtError, onUncaughtError, and onRecoverableError.
createRoot(document.getElementById('root')!, {
  onCaughtError,
  onUncaughtError,
  onRecoverableError,
}).render(
  <StrictMode>
    <App />
  </StrictMode>
);
