'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: '404 - Page Not Found | El-Mag Insurance',
  description: 'The page you are looking for could not be found. Return to El-Mag Insurance homepage or browse our Medicare resources.',
};

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    } else {
      router.back();
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            We couldn't find the page you're looking for. It may have been moved, deleted, or the URL was entered incorrectly.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">What can you do?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-left">
              <h4 className="font-semibold text-gray-800 mb-3">Popular Pages</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
                    🏠 Homepage
                  </Link>
                </li>
                <li>
                  <Link href="/medicare-advantage" className="text-blue-600 hover:text-blue-800 hover:underline">
                    📋 Medicare Advantage Plans
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-blue-600 hover:text-blue-800 hover:underline">
                    📚 Medicare Resources
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline">
                    ℹ️ About El-Mag Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                    📞 Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="text-left">
              <h4 className="font-semibold text-gray-800 mb-3">Need Help?</h4>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Our licensed Medicare agents are here to help you find the right plan.
                </p>
                <div className="space-y-2">
                  <Link 
                    href="tel:331-343-2584" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    📞 Call: 331-343-2584
                  </Link>
                  <br />
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    ✉️ Send us a message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go to Homepage
          </Link>
          <button 
            onClick={handleGoBack} 
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Go Back
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            If you believe this is an error, please contact our support team.
          </p>
        </div>
      </div>
    </main>
  );
}