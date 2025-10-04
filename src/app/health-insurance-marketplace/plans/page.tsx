import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMarketplaceSchema, plansFAQs, commonMarketplaceFAQs } from '@/lib/schema/marketplace-insurance-schema'

export const metadata: Metadata = {
  title: 'Health Insurance Marketplace Plans Comparison 2025',
  description: 'Compare Bronze, Silver, Gold, and Platinum plans to find the best coverage.',
  keywords: 'Health Insurance Marketplace plans, Bronze plan, Silver plan, Gold plan, Platinum plan',
  openGraph: {
    title: 'Health Insurance Marketplace Plans Comparison 2025',
    description: 'Compare Bronze, Silver, Gold, and Platinum plans.',
    type: 'website',
  },
}

// Structured Data for SEO
const structuredData = generateMarketplaceSchema({
  pagePath: '/health-insurance-marketplace/plans',
  pageTitle: 'Health Insurance Marketplace Plans Comparison 2025',
  pageDescription: 'Compare Bronze, Silver, Gold, and Platinum health insurance plans. Understand metal tiers, network types (HMO, PPO, EPO), and find the best Marketplace coverage for your needs.',
  pageType: 'plans',
  faqs: [...plansFAQs, ...commonMarketplaceFAQs.slice(0, 2)]
})

export default function MarketplacePlansPage() {
  return (
    <main className="min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Health Insurance Marketplace Plans
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Compare Bronze, Silver, Gold, and Platinum plans
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
              🎯 GET PLAN QUOTES
            </Link>
          </div>
        </section>

        {/* Plan Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan Comparison</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-orange-50 border-2 border-orange-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-orange-800 mb-3">Bronze</h3>
              <div className="text-2xl font-bold text-orange-600 mb-2">60%</div>
              <p className="text-orange-700 text-sm">Lowest premium, highest deductible</p>
            </div>
            
            <div className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Silver</h3>
              <div className="text-2xl font-bold text-gray-600 mb-2">70%</div>
              <p className="text-gray-700 text-sm">Most popular, good balance</p>
            </div>
            
            <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Gold</h3>
              <div className="text-2xl font-bold text-yellow-600 mb-2">80%</div>
              <p className="text-yellow-700 text-sm">Higher premium, lower costs</p>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Platinum</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">90%</div>
              <p className="text-blue-700 text-sm">Highest premium, lowest costs</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Compare Plans?</h2>
            <p className="text-xl mb-6">
              Get personalized plan recommendations and quotes.
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
                🎯 GET PLAN QUOTES
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
