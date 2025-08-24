'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <main className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong</h2>
              <p className="text-xl text-gray-600 mb-8">
                We encountered an unexpected error. Our team has been notified and is working to fix this issue.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What happened?</h3>
              <div className="text-left bg-gray-50 p-4 rounded border mb-6">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Error Details:</strong>
                </p>
                <code className="text-xs text-red-600 break-all">
                  {error.message || 'An unexpected error occurred'}
                </code>
                {error.digest && (
                  <p className="text-xs text-gray-500 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 mb-3">Try These Options</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Refresh the page</li>
                    <li>• Clear your browser cache</li>
                    <li>• Try again in a few minutes</li>
                    <li>• Contact our support team</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 mb-3">Need Immediate Help?</h4>
                  <div className="space-y-2 text-sm">
                    <p>Call our licensed agents:</p>
                    <Link 
                      href="tel:331-343-2584" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      📞 331-343-2584
                    </Link>
                    <p className="text-gray-500">Available 8 AM - 8 PM ET</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={reset}
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
              <Link 
                href="/" 
                className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
              >
                Go to Homepage
              </Link>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                If this problem persists, please contact our technical support team with the error ID above.
              </p>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}