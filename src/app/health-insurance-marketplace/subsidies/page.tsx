import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Health Insurance Marketplace Subsidies 2025',
  description: 'Check your eligibility for Health Insurance Marketplace subsidies.',
  keywords: 'Health Insurance Marketplace subsidies, premium tax credits, cost-sharing reductions',
  openGraph: {
    title: 'Health Insurance Marketplace Subsidies 2025',
    description: 'Check your eligibility for subsidies to lower your health insurance costs.',
    type: 'website',
  },
}

export default function MarketplaceSubsidiesPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Health Insurance Marketplace Subsidies
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Check your eligibility for financial help to lower your health insurance costs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:331-343-2584"
              className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
            >
              📞 CALL NOW: 331-E-HEALTH
            </a>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
            >
              🎯 CHECK ELIGIBILITY
            </Link>
          </div>
        </section>

        {/* Types of Subsidies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Financial Help</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">💰 Premium Tax Credits</h3>
              <p className="text-green-700 mb-4">
                Monthly payments that lower your health insurance premium costs.
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• Income: 100% - 400% of poverty level</li>
                <li>• Premiums capped at 8.5% of income</li>
                <li>• Available for all metal tier plans</li>
                <li>• Applied directly to monthly premium</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">💵 Cost-Sharing Reductions</h3>
              <p className="text-blue-700 mb-4">
                Additional savings on deductibles, copayments, and coinsurance.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• Income up to 250% of poverty level</li>
                <li>• Must choose Silver plan</li>
                <li>• Reduces out-of-pocket costs</li>
                <li>• Automatically applied if eligible</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Income Guidelines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Income Guidelines for 2025</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Tax Credits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 1 person: $14,580 - $58,320</li>
                <li>• 2 people: $19,720 - $78,880</li>
                <li>• 3 people: $24,860 - $99,440</li>
                <li>• 4 people: $30,000 - $120,000</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cost-Sharing Reductions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 1 person: Up to $36,450</li>
                <li>• 2 people: Up to $49,300</li>
                <li>• 3 people: Up to $62,150</li>
                <li>• 4 people: Up to $75,000</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Check Your Subsidy Eligibility</h2>
            <p className="text-xl mb-6">
              Find out how much you could save on your health insurance premiums.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 CALL NOW: 331-E-HEALTH
              </a>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
              >
                🎯 CHECK ELIGIBILITY
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
