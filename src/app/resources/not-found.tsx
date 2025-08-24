import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resource Not Found | El-Mag Insurance',
  description: 'The Medicare resource you are looking for could not be found. Browse our comprehensive Medicare education resources.',
};

export default function ResourcesNotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-green-600 mb-6">
            <svg className="w-32 h-32 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            We couldn't find the Medicare resource you're looking for. It may have been moved or is no longer available.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Popular Medicare Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-left">
              <h3 className="font-semibold text-gray-800 mb-3">Education Guides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/enrollment-periods-explained" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    📅 Medicare Enrollment Periods
                  </Link>
                </li>
                <li>
                  <Link href="/resources/medicare-advantage-vs-original" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    📊 Medicare Advantage vs Original Medicare
                  </Link>
                </li>
                <li>
                  <Link href="/resources/understanding-costs" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    💰 Understanding Medicare Costs
                  </Link>
                </li>
                <li>
                  <Link href="/resources/prescription-drug-coverage" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    💊 Prescription Drug Coverage
                  </Link>
                </li>
                <li>
                  <Link href="/resources/dental-vision-benefits" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    🦷 Dental & Vision Benefits
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="text-left">
              <h3 className="font-semibold text-gray-800 mb-3">Planning Tools</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/star-ratings-guide" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    ⭐ Medicare Star Ratings Guide
                  </Link>
                </li>
                <li>
                  <Link href="/medicare-advantage" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    🔍 Plan Comparison Tool
                  </Link>
                </li>
                <li>
                  <Link href="/market-intelligence" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    📈 Market Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                    👥 Talk to an Expert
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-green-800 mb-3">Can't find what you need?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-left">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Get Personal Help:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Speak with a licensed Medicare specialist</li>
                <li>• Get personalized plan recommendations</li>
                <li>• Ask questions about your specific situation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Contact Information:</h4>
              <div className="space-y-1 text-gray-600">
                <p>📞 Phone: 331-343-2584</p>
                <p>⏰ Hours: 8 AM - 8 PM ET</p>
                <p>✉️ Email: submissions@elmaginsurance.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/resources" 
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Browse All Resources
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Ask Our Experts
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Our comprehensive Medicare education resources are here to help you make informed decisions about your healthcare coverage.
          </p>
        </div>
      </div>
    </main>
  );
}