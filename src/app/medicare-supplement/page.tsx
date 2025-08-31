import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medicare Supplement Plans | El-Mag Insurance',
  description: 'Compare Medicare Supplement (Medigap) plans to fill gaps in Original Medicare coverage. Get quotes and expert guidance.',
  keywords: 'Medicare Supplement, Medigap, Medicare Gap Insurance, Medicare coverage',
};

export default function MedicareSupplementPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Medicare Supplement Plans
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Fill the gaps in Original Medicare coverage with comprehensive Medigap plans
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="/medicare-supplement-plan-g"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
            >
              Learn About Plan G
            </Link>
          </div>
        </section>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Medicare Supplement?</h2>
            <p className="text-gray-600 mb-4">
              Medicare Supplement (Medigap) plans help pay some of the healthcare costs that Original Medicare doesn't cover, 
              such as copayments, coinsurance, and deductibles.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Standardized benefits across all insurance companies</li>
              <li>Guaranteed renewable coverage</li>
              <li>No network restrictions</li>
              <li>Coverage for foreign travel emergencies</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Plans</h2>
            <div className="space-y-4">
              <Link href="/medicare-supplement-plan-g" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Plan G</h3>
                <p className="text-sm text-gray-600">Most comprehensive coverage with predictable costs</p>
              </Link>
              <Link href="/medicare-supplement-plan-f" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Plan F</h3>
                <p className="text-sm text-gray-600">Covers Medicare Part B deductible (if eligible)</p>
              </Link>
              <Link href="/medicare-supplement-plan-n" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Plan N</h3>
                <p className="text-sm text-gray-600">Lower premiums with some cost-sharing</p>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Our licensed agents can help you compare plans and find the best Medicare Supplement coverage for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact an Agent
            </Link>
            <Link
              href="/medicare-comparison-tool"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Compare Plans
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
