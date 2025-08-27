import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import SocialProofSection from '@/components/SocialProofSection'
import MobileContactBar from '@/components/MobileContactBar'
import ClientOnly from '@/components/ClientOnly'

export const metadata: Metadata = {
  title: 'Health Insurance Enrollment Timeline 2025 | Marketplace Open Enrollment Dates | El-Mag Insurance',
  description: 'Complete guide to Health Insurance Marketplace enrollment periods, deadlines, and timelines. Learn when to enroll in ACA plans and avoid coverage gaps.',
  keywords: 'health insurance enrollment timeline, marketplace open enrollment dates 2025, ACA enrollment periods, special enrollment periods, healthcare.gov deadlines',
  openGraph: {
    title: 'Health Insurance Enrollment Timeline 2025 | Marketplace Dates & Deadlines',
    description: 'Never miss a Health Insurance Marketplace enrollment deadline. Complete guide to ACA enrollment periods and when to apply for coverage.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://el-mag.com/enrollment-timeline'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Health Insurance Enrollment Timeline 2025',
  description: 'Comprehensive guide to Health Insurance Marketplace enrollment periods, deadlines, and important dates for ACA coverage',
  author: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://el-mag.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    logo: {
      '@type': 'ImageObject',
      url: 'https://el-mag.com/logo.png'
    }
  },
  datePublished: '2025-01-15T00:00:00.000Z',
  dateModified: '2025-01-15T00:00:00.000Z'
}

export default function HealthInsuranceEnrollmentTimelinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ClientOnly>
        <MobileContactBar county="National" />
      </ClientOnly>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Health Insurance Enrollment Timeline 2025
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
              Complete guide to Health Insurance Marketplace enrollment periods and deadlines. Secure your ACA coverage today.
            </p>
            
            {/* Current Status Alert */}
            <div className="space-y-4 mb-8">
              <div className="bg-yellow-500 text-yellow-900 rounded-lg p-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">2025 Open Enrollment: November 1, 2024 - January 15, 2025</span>
                </div>
              </div>
              
              <div className="bg-green-500 text-green-100 rounded-lg p-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Special Enrollment: Year-Round for Qualifying Life Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        
        {/* Timeline Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              2025 Marketplace Enrollment Calendar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding Health Insurance Marketplace enrollment periods is crucial to maintaining continuous coverage and accessing premium subsidies.
            </p>
          </div>

          {/* Visual Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            
            <div className="space-y-12">
              {/* Open Enrollment Period */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-600 mb-2">Open Enrollment Period</h3>
                    <p className="text-lg font-semibold text-gray-800 mb-2">November 1, 2024 - January 15, 2025</p>
                    <p className="text-gray-600">
                      Annual period when anyone can enroll, switch, or cancel their health insurance plan. 
                      Coverage begins January 1, 2025 if enrolled by December 15, 2024.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Special Enrollment Periods */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">Special Enrollment Periods</h3>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Year-Round (Qualifying Events)</p>
                    <p className="text-gray-600">
                      Available when you experience qualifying life events like job loss, marriage, 
                      moving, or losing other coverage. Usually 60 days to enroll after the event.
                    </p>
                  </div>
                </div>
              </div>

              {/* Coverage Start Dates */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-600 mb-2">Coverage Start Dates</h3>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Plan Effective Dates</p>
                    <p className="text-gray-600">
                      January 1st coverage if enrolled by December 15th. 
                      February 1st coverage if enrolled December 16 - January 15.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Penalty Information */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                    <h3 className="text-xl font-bold text-orange-600 mb-2">No Federal Penalty</h3>
                    <p className="text-lg font-semibold text-gray-800 mb-2">ACA Individual Mandate Removed</p>
                    <p className="text-gray-600">
                      No federal tax penalty for not having health insurance, but some states 
                      have their own individual mandates and penalties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Enrollment Periods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Detailed Enrollment Guide
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Open Enrollment */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Open Enrollment Period</h3>
                <p className="text-green-100">Annual enrollment window for everyone</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Dates</h4>
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="font-semibold">November 1, 2024 - January 15, 2025</span>
                      </div>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>• Enroll by Dec 15 for Jan 1 coverage</p>
                        <p>• Enroll Dec 16 - Jan 15 for Feb 1 coverage</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">What You Can Do</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Enroll in a new health insurance plan</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Switch to a different plan</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Update your existing plan</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Cancel your current coverage</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Apply for premium subsidies and cost-sharing reductions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Enrollment */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Special Enrollment Periods</h3>
                <p className="text-blue-100">Qualify for year-round enrollment</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Qualifying Life Events</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Lost job-based health coverage</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Changes in household (marriage, divorce, new baby)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Moving to a new area</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Changes in income affecting eligibility</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Gaining citizenship or lawful presence</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="font-semibold">60-Day Enrollment Window</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      You typically have 60 days before or after a qualifying life event to enroll in coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subsidies and Financial Help */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Premium Subsidies & Financial Assistance</h3>
              <p className="text-purple-100">Get help paying for your health insurance</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Premium Tax Credits</h4>
                  <div className="bg-purple-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                      <span className="font-semibold">Income: 100% - 400% of Federal Poverty Level</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Reduces your monthly premium costs. Available for Silver, Gold, Bronze, and Catastrophic plans purchased through the Marketplace.
                    </p>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Cost-Sharing Reductions</h4>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                      <span className="font-semibold">Income: 100% - 250% of Federal Poverty Level</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Reduces your deductibles, copayments, and out-of-pocket maximums. Only available with Silver plans.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">2025 Income Limits (Family of 4)</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 border-l-4 border-green-400 p-3">
                      <div className="font-semibold text-sm text-green-800">Premium Tax Credits</div>
                      <div className="text-xs text-green-600">$31,200 - $124,800 annually</div>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                      <div className="font-semibold text-sm text-blue-800">Cost-Sharing Reductions</div>
                      <div className="text-xs text-blue-600">$31,200 - $78,000 annually</div>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                      <div className="font-semibold text-sm text-yellow-800">Medicaid Eligibility</div>
                      <div className="text-xs text-yellow-600">Up to $41,400 annually (varies by state)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Dates Calendar */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Important Marketplace Dates 2025
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Q4 2024 */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-green-600 mb-3">Q4 2024</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Nov 1 - Jan 15</div>
                    <div className="text-xs text-gray-600">Open Enrollment Period</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Dec 15</div>
                    <div className="text-xs text-gray-600">Deadline for Jan 1 coverage</div>
                  </div>
                </div>
              </div>

              {/* Q1 2025 */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Q1 2025</h3>
                <div className="space-y-3">
                  <div className="bg-red-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Jan 1</div>
                    <div className="text-xs text-gray-600">New coverage begins</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Jan 15</div>
                    <div className="text-xs text-gray-600">Open Enrollment ends</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Feb 1</div>
                    <div className="text-xs text-gray-600">Late enrollment coverage starts</div>
                  </div>
                </div>
              </div>

              {/* Q2-Q3 2025 */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-purple-600 mb-3">Q2-Q3 2025</h3>
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Year-Round</div>
                    <div className="text-xs text-gray-600">Special Enrollment Periods</div>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">April 15</div>
                    <div className="text-xs text-gray-600">Tax filing deadline</div>
                  </div>
                </div>
              </div>

              {/* Q4 2025 */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-orange-600 mb-3">Q4 2025</h3>
                <div className="space-y-3">
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Nov 1</div>
                    <div className="text-xs text-gray-600">2026 Open Enrollment begins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Marketplace Enrollment Success Tips
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">✅ Do This</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Apply for premium subsidies to reduce your monthly costs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Compare total costs, not just premiums (deductibles, copays, out-of-pocket maximums)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Check if your doctors and hospitals are in the plan's network</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Report income and household changes during the year</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Work with a licensed navigator or agent for free help</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-4">❌ Avoid This</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Missing the December 15th deadline for January 1st coverage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Auto-renewing without reviewing plan changes and pricing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Choosing the cheapest plan without considering your health needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Not reporting income changes that affect your subsidy eligibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Buying health insurance outside the Marketplace without comparing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Special Enrollment Scenarios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Special Enrollment Scenarios
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Job & Income Changes</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-green-300 pl-4">
                  <h4 className="font-semibold text-gray-700">Lost Job-Based Coverage</h4>
                  <p className="text-gray-600 text-sm">You have 60 days from losing coverage to enroll. COBRA may be available but compare Marketplace options first.</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-4">
                  <h4 className="font-semibold text-gray-700">Income Changes</h4>
                  <p className="text-gray-600 text-sm">Significant income changes may qualify you for Special Enrollment and affect your subsidy eligibility.</p>
                </div>
                <div className="border-l-4 border-purple-300 pl-4">
                  <h4 className="font-semibold text-gray-700">New Job Without Benefits</h4>
                  <p className="text-gray-600 text-sm">If your new job doesn't offer insurance or you're not eligible yet, you can enroll in a Marketplace plan.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Family & Life Changes</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-300 pl-4">
                  <h4 className="font-semibold text-gray-700">Marriage or Divorce</h4>
                  <p className="text-gray-600 text-sm">You can add or remove family members from your plan, or switch to a different plan that better fits your new situation.</p>
                </div>
                <div className="border-l-4 border-yellow-300 pl-4">
                  <h4 className="font-semibold text-gray-700">New Baby or Adoption</h4>
                  <p className="text-gray-600 text-sm">You have 60 days to add your new family member and can change to a different plan if needed.</p>
                </div>
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-semibold text-gray-700">Permanent Move</h4>
                  <p className="text-gray-600 text-sm">Moving to an area with different plan options allows you to enroll in a new plan available in your new ZIP code.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm 
            title="Need Help with Marketplace Enrollment?"
            subtitle="Our licensed agents can help you navigate the Health Insurance Marketplace and find the best plan for your budget and needs"
          />
        </div>

        {/* Social Proof */}
        <SocialProofSection 
          county="National" 
          state="Nationwide"
          demographic="general"
        />

      </main>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Insurance Plan?</h2>
          <p className="text-xl text-green-100 mb-8">
            Don't miss your enrollment deadline. Our experienced team can help you navigate the Health Insurance Marketplace 
            with personalized guidance and expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors text-center inline-block hover:bg-green-50">
              Get Free Marketplace Consultation
            </a>
            <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center inline-block hover:bg-white hover:text-green-600">
              331-E-HEALTH
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}