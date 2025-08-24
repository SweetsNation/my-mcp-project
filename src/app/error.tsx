'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-orange-600 mb-4">
            <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-xl text-gray-600 mb-8">
            We encountered an unexpected error while loading this page. Don't worry, our team has been notified.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What can you do?</h2>
          
          <div className="text-left bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-red-800 mb-2">Error Information</h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Message:</strong> {error.message || 'An unexpected error occurred'}
            </p>
            {error.digest && (
              <p className="text-sm text-gray-500">
                <strong>Error ID:</strong> {error.digest}
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-left">
              <h3 className="font-semibold text-gray-800 mb-3">Quick Fixes</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Try refreshing the page
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Clear your browser cache and cookies
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Try using a different browser
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Wait a few minutes and try again
                </li>
              </ul>
            </div>
            
            <div className="text-left">
              <h3 className="font-semibold text-gray-800 mb-3">Need Help Now?</h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Our licensed Medicare specialists are available to help you:
                </p>
                <div className="space-y-2">
                  <Link 
                    href="tel:331-343-2584" 
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    📞 Call: 331-343-2584
                  </Link>
                  <p className="text-xs text-gray-500">Available 8 AM - 8 PM ET, Mon-Fri</p>
                  <Link 
                    href="/contact" 
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    ✉️ Send us a message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button 
            onClick={reset}
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Try Again
          </button>
          <Link 
            href="/" 
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
          >
            Go to Homepage
          </Link>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">Meanwhile, you can:</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/medicare-advantage" className="text-blue-600 hover:text-blue-800 hover:underline">
              Browse Medicare Plans
            </Link>
            <Link href="/resources" className="text-blue-600 hover:text-blue-800 hover:underline">
              Read Medicare Resources
            </Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline">
              Learn About Us
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
              Contact Support
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            If this error persists, please contact our support team and reference the error ID above.
          </p>
        </div>
      </div>
    </main>
  );
}