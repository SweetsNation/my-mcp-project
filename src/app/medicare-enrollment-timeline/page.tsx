import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import SocialProofSection from '@/components/SocialProofSection'
import MobileContactBar from '@/components/MobileContactBar'
import ClientOnly from '@/components/ClientOnly'

export const metadata: Metadata = {
  title: 'Medicare Enrollment Timeline 2025 | Important Dates & Deadlines | El-Mag Insurance',
  description: 'Complete guide to Medicare enrollment periods, deadlines, and timelines. Learn when to enroll in Medicare and avoid late penalties.',
  keywords: 'Medicare enrollment timeline, Medicare enrollment periods, Annual Election Period AEP, Medicare Open Enrollment dates 2025, Initial Enrollment Period',
  openGraph: {
    title: 'Medicare Enrollment Timeline 2025 | Important Dates & Deadlines',
    description: 'Never miss a Medicare enrollment deadline. Complete guide to Medicare enrollment periods and when to apply for coverage.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://el-mag.com/medicare-enrollment-timeline'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Medicare Enrollment Timeline 2025',
  description: 'Comprehensive guide to Medicare enrollment periods, deadlines, and important dates for Medicare coverage',
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

export default function MedicareEnrollmentTimelinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ClientOnly>
        <MobileContactBar county="National" />
      </ClientOnly>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medicare Enrollment Timeline 2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Complete guide to Medicare enrollment periods and deadlines. Avoid late penalties and secure your Medicare coverage.
            </p>
            
            {/* Current Status Alert */}
            <div className="space-y-4 mb-8">
              <div className="bg-purple-500 text-purple-100 rounded-lg p-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Medicare AEP (Annual Election Period): October 15 - December 7, 2024</span>
                </div>
              </div>
              
              <div className="bg-orange-500 text-orange-100 rounded-lg p-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Medicare Advantage OEP: January 1 - March 31, 2025</span>
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
              Medicare Enrollment Calendar at a Glance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding Medicare enrollment periods is crucial to securing coverage and avoiding late enrollment penalties that last a lifetime.
            </p>
          </div>

          {/* Visual Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {/* Initial Enrollment Period */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">Initial Enrollment Period (IEP)</h3>
                    <p className="text-lg font-semibold text-gray-800 mb-2">7-month window around your 65th birthday</p>
                    <p className="text-gray-600">
                      3 months before, the month of, and 3 months after turning 65. 
                      Late enrollment results in lifetime penalties.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Annual Election Period */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-600 mb-2">Annual Election Period (AEP)</h3>
                    <p className="text-lg font-semibold text-gray-800 mb-2">October 15 - December 7, 2024</p>
                    <p className="text-gray-600">
                      Switch Medicare Advantage plans, change Part D prescription drug coverage, 
                      or return to Original Medicare. Changes take effect January 1, 2025.
                    </p>
                  </div>
                </div>
              </div>

              {/* Medicare Advantage Open Enrollment */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                    <h3 className="text-xl font-bold text-orange-600 mb-2">Medicare Advantage Open Enrollment</h3>
                    <p className="text-lg font-semibold text-gray-800 mb-2">January 1 - March 31, 2025</p>
                    <p className="text-gray-600">
                      Medicare Advantage members can switch to a different Medicare Advantage plan 
                      or return to Original Medicare (with or without Part D).
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Special Enrollment Periods */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-600 mb-2">Special Enrollment Periods</h3>
                    <p className="text-lg font-semibold text-gray-800 mb-2">Year-Round (Qualifying Events)</p>
                    <p className="text-gray-600">
                      Available when you experience qualifying life events like moving, 
                      losing other coverage, or qualifying for Extra Help with prescription costs.
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
            Detailed Medicare Enrollment Guide
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Initial Enrollment Period */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Initial Enrollment Period (IEP)</h3>
                <p className="text-blue-100">First-time Medicare enrollment</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">When You're Eligible</h4>
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <span className="font-semibold">3 months before turning 65</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <span className="font-semibold">Your birthday month</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <span className="font-semibold">3 months after turning 65</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">What You Can Enroll In</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Medicare Part A (Hospital Insurance)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Medicare Part B (Medical Insurance)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Medicare Part D (Prescription Drug Coverage)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Medicare Advantage Plans (Part C)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Late Enrollment Penalties</h3>
                        <div className="mt-2 text-sm text-red-700">
                          <p>Missing your IEP can result in lifetime late enrollment penalties for Part B and Part D coverage.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Annual Election Period */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Annual Election Period (AEP)</h3>
                <p className="text-purple-100">Make annual plan changes</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">When It Happens</h4>
                    <div className="bg-purple-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                        <span className="font-semibold">October 15 - December 7, 2024</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Changes take effect January 1, 2025
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">What You Can Do</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Switch from Original Medicare to Medicare Advantage</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Switch from Medicare Advantage back to Original Medicare</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Switch between Medicare Advantage plans</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">Add, drop, or switch Part D prescription drug plans</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medicare Advantage Open Enrollment */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Medicare Advantage Open Enrollment Period</h3>
              <p className="text-orange-100">Additional opportunity for Medicare Advantage members</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">When & Who</h4>
                  <div className="bg-orange-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                      <span className="font-semibold">January 1 - March 31, 2025</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Only available to current Medicare Advantage members
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Your Options</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Switch to a different Medicare Advantage plan</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Return to Original Medicare</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">Add a standalone Part D plan if returning to Original Medicare</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Dates Calendar */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Medicare Calendar 2025
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Q4 2024 */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-purple-600 mb-3">Q4 2024</h3>
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Oct 15 - Dec 7</div>
                    <div className="text-xs text-gray-600">Annual Election Period (AEP)</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Ongoing</div>
                    <div className="text-xs text-gray-600">Initial Enrollment (IEP)</div>
                  </div>
                </div>
              </div>

              {/* Q1 2025 */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-orange-600 mb-3">Q1 2025</h3>
                <div className="space-y-3">
                  <div className="bg-red-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Jan 1</div>
                    <div className="text-xs text-gray-600">AEP changes take effect</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Jan 1 - Mar 31</div>
                    <div className="text-xs text-gray-600">Medicare Advantage OEP</div>
                  </div>
                </div>
              </div>

              {/* Q2-Q3 2025 */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-green-600 mb-3">Q2-Q3 2025</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Year-Round</div>
                    <div className="text-xs text-gray-600">Special Enrollment Periods</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Ongoing</div>
                    <div className="text-xs text-gray-600">Initial Enrollment (IEP)</div>
                  </div>
                </div>
              </div>

              {/* Q4 2025 */}
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-lg font-semibold text-indigo-600 mb-3">Q4 2025</h3>
                <div className="space-y-3">
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <div className="font-semibold text-sm">Oct 15 - Dec 7</div>
                    <div className="text-xs text-gray-600">2026 Annual Election Period</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Situations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Special Medicare Situations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Still Working at 65</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h4 className="font-semibold text-gray-700">Large Employer (20+ employees)</h4>
                  <p className="text-gray-600 text-sm">You can delay Medicare Part B without penalty if you have qualifying employer coverage.</p>
                </div>
                <div className="border-l-4 border-green-300 pl-4">
                  <h4 className="font-semibold text-gray-700">Special Enrollment Period</h4>
                  <p className="text-gray-600 text-sm">You get an 8-month window to enroll after your employer coverage ends or you retire.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Low-Income Assistance</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-300 pl-4">
                  <h4 className="font-semibold text-gray-700">Extra Help Program</h4>
                  <p className="text-gray-600 text-sm">Get help paying for Part D prescription drug costs. Special Enrollment Periods available year-round.</p>
                </div>
                <div className="border-l-4 border-yellow-300 pl-4">
                  <h4 className="font-semibold text-gray-700">Medicare Savings Programs</h4>
                  <p className="text-gray-600 text-sm">State programs that help pay Medicare premiums and other costs for qualifying individuals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Medicare Enrollment Success Tips
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
                    <span className="text-gray-700">Enroll during your Initial Enrollment Period to avoid penalties</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Review your coverage annually during AEP</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Compare plan networks and prescription drug formularies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Work with a licensed Medicare specialist</span>
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
                    <span className="text-gray-700">Missing enrollment deadlines and facing lifetime penalties</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Choosing a plan without checking if your doctors are covered</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Auto-renewing without reviewing annual plan changes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Ignoring prescription drug coverage needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm 
            title="Need Help with Medicare Enrollment?"
            subtitle="Our licensed Medicare specialists can guide you through the enrollment process and help you avoid costly mistakes"
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Medicare Plan?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't miss your Medicare enrollment deadline. Our experienced team can help you navigate your Medicare options 
            with personalized guidance and expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors text-center inline-block hover:bg-blue-50">
              Get Free Medicare Consultation
            </a>
            <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center inline-block hover:bg-white hover:text-blue-600">
              331-E-HEALTH
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}