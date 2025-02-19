import { StrictMode, ErrorInfo } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

function onCaughtError(error: any, errorInfo: ErrorInfo) {
  console.error('In onCaughtError', error, errorInfo.componentStack);
}

function onUncaughtError(error: any, errorInfo: ErrorInfo) {
  console.error('In onUncaughtError', error, errorInfo.componentStack);
}

function onRecoverableError(error: any, errorInfo: ErrorInfo) {
  console.error('In onRecoverableError', error, errorInfo.componentStack);
}

createRoot(document.getElementById('root')!, {
  onCaughtError,
  onUncaughtError,
  onRecoverableError,
}).render(
  <StrictMode>
    <App />
  </StrictMode>
);
