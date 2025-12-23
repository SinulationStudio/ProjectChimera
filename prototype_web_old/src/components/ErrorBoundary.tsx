/**
 * Error Boundary Component
 * 
 * React error boundary to catch and display application errors gracefully.
 * Provides user-friendly error messages and technical details for debugging.
 */

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

/**
 * Serialize error for display
 */
const serializeError = (error: any): string => {
  if (error instanceof Error) {
    return `${error.name}: ${error.message}\n\nStack Trace:\n${error.stack || 'No stack trace available'}`;
  }
  return JSON.stringify(error, null, 2);
};

/**
 * Error Boundary Class Component
 * 
 * Catches JavaScript errors in child components and displays a fallback UI
 * instead of crashing the entire application.
 */
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { 
      hasError: true,
      error 
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    
    // Log error to console for debugging
    console.error('Game Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-red-500 rounded-lg p-6 max-w-2xl w-full">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
              <h2 className="text-red-400 text-xl font-bold">Game Error Detected</h2>
            </div>
            
            <div className="text-gray-300 mb-4">
              <p className="mb-2">
                ProjectChimera encountered an unexpected error. This usually indicates a programming issue
                or compatibility problem with your browser.
              </p>
              <p className="text-sm text-gray-400">
                Please try refreshing the page. If the problem persists, try using a different browser.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
              <div className="bg-black p-3 rounded border border-gray-700 overflow-auto max-h-40">
                <pre className="text-red-300 text-xs whitespace-pre-wrap">
                  {serializeError(this.state.error)}
                </pre>
              </div>
            </div>

            {this.state.errorInfo && (
              <div className="mb-4">
                <h3 className="text-yellow-400 font-semibold mb-2">Component Stack:</h3>
                <div className="bg-black p-3 rounded border border-gray-700 overflow-auto max-h-32">
                  <pre className="text-yellow-300 text-xs whitespace-pre-wrap">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
              >
                Refresh Page
              </button>
              
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null, errorInfo: null });
                }}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded font-medium transition-colors"
              >
                Try Again
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <h3 className="text-gray-400 text-sm font-semibold mb-2">Troubleshooting Steps:</h3>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Refresh the browser page (Ctrl+F5 or Cmd+Shift+R)</li>
                <li>• Try using Chrome, Firefox, or Safari</li>
                <li>• Clear browser cache and cookies</li>
                <li>• Disable browser extensions temporarily</li>
                <li>• Check if JavaScript is enabled</li>
                <li>• Try incognito/private browsing mode</li>
              </ul>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-500 text-xs">
                ProjectChimera v1.0 | Error ID: {Date.now().toString(36)}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;