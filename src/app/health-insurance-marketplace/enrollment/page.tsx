import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Health Insurance Marketplace Enrollment Guide 2025',
  description: 'Step-by-step guide to enrolling in Health Insurance Marketplace coverage.',
  keywords: 'Health Insurance Marketplace enrollment, ACA enrollment guide',
  openGraph: {
    title: 'Health Insurance Marketplace Enrollment Guide 2025',
    description: 'Step-by-step guide to enrolling in affordable health insurance.',
    type: 'website',
  },
}

export default function MarketplaceEnrollmentPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Health Insurance Marketplace Enrollment Guide
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Step-by-step guide to enrolling in affordable health insurance
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
              🎯 GET HELP ENROLLING
            </Link>
          </div>
        </section>

        {/* Enrollment Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Enrollment Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">1. Gather Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Social Security numbers</li>
                <li>• Income information</li>
                <li>• Current coverage details</li>
                <li>• Immigration documents</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">2. Create Account</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Visit HealthCare.gov</li>
                <li>• Enter email and password</li>
                <li>• Verify email address</li>
                <li>• Set security questions</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">3. Complete Application</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Personal information</li>
                <li>• Household details</li>
                <li>• Income information</li>
                <li>• Current coverage</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">4. Choose Plan</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Compare available plans</li>
                <li>• Check provider networks</li>
                <li>• Review costs and benefits</li>
                <li>• Select best option</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help with Enrollment?</h2>
            <p className="text-xl mb-6">
              Our licensed agents can help you navigate the enrollment process.
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
                🎯 GET ENROLLMENT HELP
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
