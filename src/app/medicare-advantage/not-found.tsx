import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medicare Plan Not Found | El-Mag Insurance',
  description: 'The Medicare Advantage plan or location you are looking for could not be found. Browse available plans or contact our experts.',
};

export default function MedicareAdvantageNotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-blue-600 mb-6">
            <svg className="w-32 h-32 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Medicare Plan Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            We couldn't find the Medicare Advantage plan or location you're looking for. It may have been moved or is no longer available.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Find Medicare Plans Near You</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-left">
              <h3 className="font-semibold text-gray-800 mb-3">Popular Locations</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/medicare-advantage/davidson-county-tennessee" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    📍 Davidson County, Tennessee
                  </Link>
                </li>
                <li>
                  <Link href="/medicare-advantage/wake-county-north-carolina" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    📍 Wake County, North Carolina
                  </Link>
                </li>
                <li>
                  <Link href="/medicare-advantage/fairfax-county-virginia" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    📍 Fairfax County, Virginia
                  </Link>
                </li>
                <li>
                  <Link href="/medicare-advantage/fulton-county-georgia" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    📍 Fulton County, Georgia
                  </Link>
                </li>
                <li>
                  <Link href="/medicare-advantage/jefferson-county-alabama" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    📍 Jefferson County, Alabama
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="text-left">
              <h3 className="font-semibold text-gray-800 mb-3">Get Personalized Help</h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Our licensed Medicare specialists can help you find available plans in your area.
                </p>
                <div className="space-y-2">
                  <Link 
                    href="tel:331-343-2584" 
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    📞 Call: 331-343-2584
                  </Link>
                  <p className="text-xs text-gray-500">Available 8 AM - 8 PM ET</p>
                  <Link 
                    href="/contact" 
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    ✉️ Request plan information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-blue-800 mb-3">What you can do:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-left">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Browse plans by entering your ZIP code
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Contact us for personalized plan recommendations
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Use our plan comparison tools
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Learn about Medicare Advantage benefits
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Check enrollment periods and deadlines
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Get help understanding your options
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/medicare-advantage" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse All Plans
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Get Help Finding Plans
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Need help finding Medicare plans in your area? Our licensed agents are here to help at no cost to you.
          </p>
        </div>
      </div>
    </main>
  );
}