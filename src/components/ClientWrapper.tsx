'use client';

import React, { Suspense } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';

interface ClientWrapperProps {
  children: React.ReactNode;
}

/**
 * Client Wrapper Component
 * 
 * This component wraps the app content with client-side providers
 * to prevent hydration issues during server-side rendering.
 * Includes error boundaries and loading states.
 */

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Portfolio Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ClientWrapper;