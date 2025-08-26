import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Health Insurance Marketplace 2025 - Affordable Care Act Plans & Enrollment',
  description: 'Get affordable health insurance through the Health Insurance Marketplace. Compare plans, check eligibility, and enroll in ACA coverage with subsidies.',
  keywords: 'Health Insurance Marketplace, Affordable Care Act, ACA plans, Obamacare, health insurance enrollment',
  openGraph: {
    title: 'Health Insurance Marketplace 2025 - Affordable Coverage Options',
    description: 'Find affordable health insurance through the Marketplace. Compare plans, check subsidies, and enroll in ACA coverage.',
    type: 'website',
  },
}

export default function HealthInsuranceMarketplacePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Health Insurance Marketplace 2025
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Get affordable health insurance through the Health Insurance Marketplace. 
            Compare plans, check eligibility for subsidies, and enroll in ACA coverage.
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
              🎯 START ENROLLMENT
            </Link>
          </div>
        </section>

        {/* What is the Marketplace */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Health Insurance Marketplace?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Government-Run Exchange</h3>
              <p className="text-gray-700 mb-4">
                The Health Insurance Marketplace is a government-run exchange created by the Affordable Care Act (ACA) 
                where individuals and families can shop for health insurance plans.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Compare plans side-by-side</li>
                <li>• Check eligibility for subsidies</li>
                <li>• Enroll in coverage online</li>
                <li>• Get help with the process</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💰 Financial Assistance</h3>
              <p className="text-gray-700 mb-4">
                Most people qualify for financial help to lower their monthly premiums and out-of-pocket costs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Premium tax credits</li>
                <li>• Cost-sharing reductions</li>
                <li>• Medicaid expansion</li>
                <li>• CHIP for children</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enrollment Periods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Enrollment Periods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Open Enrollment</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">Nov 1 - Jan 15</div>
              <p className="text-blue-700">Annual enrollment period for everyone</p>
            </div>
            
            <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-green-800 mb-3">Special Enrollment</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">60 Days</div>
              <p className="text-green-700">After qualifying life events</p>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Medicaid/CHIP</h3>
              <div className="text-2xl font-bold text-purple-600 mb-2">Year-Round</div>
              <p className="text-purple-700">Enrollment anytime for eligible</p>
            </div>
          </div>
        </section>

        {/* Plan Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Marketplace Plan Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-orange-50 border-2 border-orange-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-orange-800 mb-3">Bronze</h3>
              <div className="text-2xl font-bold text-orange-600 mb-2">60%</div>
              <p className="text-orange-700 text-sm">Low premiums, high deductibles</p>
            </div>
            
            <div className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Silver</h3>
              <div className="text-2xl font-bold text-gray-600 mb-2">70%</div>
              <p className="text-gray-700 text-sm">Most popular, good balance</p>
            </div>
            
            <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Gold</h3>
              <div className="text-2xl font-bold text-yellow-600 mb-2">80%</div>
              <p className="text-yellow-700 text-sm">Higher premiums, lower costs</p>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Platinum</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">90%</div>
              <p className="text-blue-700 text-sm">Highest premiums, lowest costs</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Marketplace Coverage?</h2>
            <p className="text-xl mb-6">
              Get help enrolling in affordable health insurance through the Health Insurance Marketplace.
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
                🎯 START ENROLLMENT
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
