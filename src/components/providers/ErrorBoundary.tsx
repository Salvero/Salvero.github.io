"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

// ============================================
// Structured Logging Utility
// ============================================

interface StructuredLogPayload {
    level: "error" | "warn" | "info";
    message: string;
    timestamp: string;
    context: {
        componentStack?: string;
        errorName?: string;
        errorStack?: string;
        url?: string;
        userAgent?: string;
    };
    metadata?: Record<string, unknown>;
}

/**
 * Structured logger for production-grade error tracking
 * Outputs JSON format for log aggregation services
 */
function structuredLog(payload: StructuredLogPayload): void {
    const logEntry = {
        ...payload,
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
        app: "portfolio",
        version: "1.0.0",
    };

    // In production, this would send to a logging service (e.g., Datadog, Sentry)
    // For now, output structured JSON to console
    if (process.env.NODE_ENV === "production") {
        console.error(JSON.stringify(logEntry));
    } else {
        // Development: pretty-print for readability
        console.group("🚨 Error Boundary Caught Error");
        console.error("Message:", payload.message);
        console.error("Timestamp:", logEntry.timestamp);
        console.error("Context:", payload.context);
        if (payload.metadata) {
            console.error("Metadata:", payload.metadata);
        }
        console.groupEnd();
    }
}

// ============================================
// Error Boundary Props & State
// ============================================

interface ErrorBoundaryProps {
    children: ReactNode;
    /** Custom fallback UI component */
    fallback?: ReactNode;
    /** Callback when an error is caught */
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

// ============================================
// ErrorBoundary Component
// ============================================

/**
 * ErrorBoundary Component
 * 
 * Catches JavaScript errors anywhere in the component tree,
 * logs them with structured JSON format, and displays a
 * user-friendly fallback UI.
 * 
 * @example
 * ```tsx
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    /**
     * Update state to show fallback UI on next render
     */
    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
        return { hasError: true, error };
    }

    /**
     * Log error information with structured format
     */
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Update state with error info
        this.setState({ errorInfo });

        // Structured logging
        structuredLog({
            level: "error",
            message: error.message,
            timestamp: new Date().toISOString(),
            context: {
                componentStack: errorInfo.componentStack || undefined,
                errorName: error.name,
                errorStack: error.stack,
                url: typeof window !== "undefined" ? window.location.href : undefined,
                userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
            },
            metadata: {
                errorBoundary: true,
                recoverable: true,
            },
        });

        // Call optional error callback
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
    }

    /**
     * Reset error state to retry rendering
     */
    handleReset = (): void => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    /**
     * Reload the page
     */
    handleReload = (): void => {
        if (typeof window !== "undefined") {
            window.location.reload();
        }
    };

    /**
     * Navigate to home
     */
    handleGoHome = (): void => {
        if (typeof window !== "undefined") {
            window.location.href = "/";
        }
    };

    render(): ReactNode {
        const { hasError, error } = this.state;
        const { children, fallback } = this.props;

        if (hasError) {
            // Use custom fallback if provided
            if (fallback) {
                return fallback;
            }

            // Default fallback UI
            return (
                <div className="min-h-screen flex items-center justify-center bg-background p-4">
                    <div className="max-w-md w-full text-center">
                        {/* Error Icon */}
                        <div className="mb-6 flex justify-center">
                            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                                <AlertTriangle className="w-8 h-8 text-red-500" />
                            </div>
                        </div>

                        {/* Error Message */}
                        <h1 className="text-2xl font-bold text-foreground mb-2">
                            Something went wrong
                        </h1>
                        <p className="text-muted-foreground mb-6">
                            We apologize for the inconvenience. An unexpected error has occurred.
                        </p>

                        {/* Error Details (Development only) */}
                        {process.env.NODE_ENV === "development" && error && (
                            <div className="mb-6 p-4 rounded-lg bg-muted/50 text-left overflow-auto">
                                <p className="text-sm font-mono text-red-400 mb-2">
                                    {error.name}: {error.message}
                                </p>
                                <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap">
                                    {error.stack?.split("\n").slice(0, 5).join("\n")}
                                </pre>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                onClick={this.handleReset}
                                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Try Again
                            </button>
                            <button
                                onClick={this.handleGoHome}
                                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-background hover:bg-muted transition-colors font-medium"
                            >
                                <Home className="w-4 h-4" />
                                Go Home
                            </button>
                        </div>

                        {/* Support Text */}
                        <p className="mt-8 text-sm text-muted-foreground">
                            If this problem persists, please{" "}
                            <a
                                href="#contact"
                                className="text-primary hover:underline"
                                onClick={this.handleGoHome}
                            >
                                contact support
                            </a>
                            .
                        </p>
                    </div>
                </div>
            );
        }

        return children;
    }
}

// ============================================
// Hook for functional components
// ============================================

/**
 * Hook to manually trigger error boundary
 * Useful for catching async errors
 */
export function useErrorHandler(): (error: Error) => void {
    const [, setError] = React.useState<Error | null>(null);

    return React.useCallback((error: Error) => {
        setError(() => {
            throw error;
        });
    }, []);
}

// Export structured logger for use elsewhere
export { structuredLog };
export type { StructuredLogPayload };
