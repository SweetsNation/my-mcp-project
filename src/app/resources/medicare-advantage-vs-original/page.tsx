import type { Metadata } from 'next';
import Link from 'next/link';
import ResourceLinking from '@/components/ResourceLinking';

export const metadata: Metadata = {
  title: 'Medicare Advantage vs Original Medicare: Complete Comparison - El-Mag Insurance',
  description: 'Detailed comparison of Medicare Advantage vs Original Medicare. Learn the differences in costs, benefits, provider networks, and which option might be right for you.',
  keywords: 'Medicare Advantage vs Original Medicare, Medicare Part C, Medicare comparison, Medicare benefits, Medicare costs',
};

export default function MedicareAdvantageVsOriginalPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link href="/resources" className="text-blue-200 hover:text-white mr-2">
              Resources
            </Link>
            <span className="text-blue-200 mr-2">›</span>
            <span className="text-white">Medicare Comparison</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Medicare Advantage vs Original Medicare | Complete Comparison Guide</h1>
          <p className="text-xl text-blue-100">Understanding the key differences to make the right choice for your healthcare needs</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Choosing between Medicare Advantage and Original Medicare is one of the most important decisions 
              you'll make when becoming Medicare-eligible. Both options provide essential healthcare coverage, 
              but they work very differently and offer distinct advantages and limitations.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Overview</h3>
              <p className="text-blue-800 mb-4">
                <strong>Original Medicare</strong> is the traditional government-run program with Parts A and B. 
                <strong>Medicare Advantage</strong> is private insurance that replaces Original Medicare and often includes extra benefits.
              </p>
            </div>
          </section>

          {/* Side by Side Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Side-by-Side Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Feature</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold bg-blue-50">Original Medicare</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold bg-green-50">Medicare Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Provider Network</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">Any Medicare provider nationwide</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">Limited to plan's network</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Prescription Drugs</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">Separate Part D plan needed</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">Usually included</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Extra Benefits</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">None (need separate policies)</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">Often includes dental, vision, hearing</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Out-of-Pocket Maximum</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">No limit (unless you buy Medigap)</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">Annual maximum limit</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Referrals</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">Not required</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">May be required (HMO plans)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Travel Coverage</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">Coverage anywhere in US</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">Emergency/urgent care only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Original Medicare Deep Dive */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Original Medicare (Parts A & B)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">✓ Advantages</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Freedom to see any Medicare provider
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No referrals needed for specialists
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Standardized benefits nationwide
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Predictable coverage rules
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Can add Medigap for extra protection
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">✗ Disadvantages</h3>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    No out-of-pocket maximum
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    No prescription drug coverage
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    No extra benefits (dental, vision, etc.)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Potentially unlimited costs
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Need multiple policies for complete coverage
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">What Original Medicare Covers:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Part A (Hospital Insurance)</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Inpatient hospital care</li>
                  <li>• Skilled nursing facility care</li>
                  <li>• Home healthcare</li>
                  <li>• Hospice care</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Part B (Medical Insurance)</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Doctor visits and outpatient care</li>
                  <li>• Preventive services</li>
                  <li>• Durable medical equipment</li>
                  <li>• Some mental health services</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2024 Original Medicare Costs:</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong>Part A:</strong> $0 premium (for most people)<br/>
                  <strong>Deductible:</strong> $1,632 per benefit period
                </div>
                <div>
                  <strong>Part B:</strong> $174.70 standard premium<br/>
                  <strong>Deductible:</strong> $240 annually
                </div>
              </div>
            </div>
          </section>

          {/* Medicare Advantage Deep Dive */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Medicare Advantage (Part C)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">✓ Advantages</h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Annual out-of-pocket maximum
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Often includes prescription drugs
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Extra benefits (dental, vision, hearing)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Many $0 premium plans available
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Coordinated care and case management
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">✗ Disadvantages</h3>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Limited provider networks
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    May require referrals for specialists
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Plans can change annually
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Prior authorization requirements
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Limited coverage when traveling
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Medicare Advantage Plans:</h3>
            <div className="space-y-4 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">HMO (Health Maintenance Organization)</h4>
                <p className="text-gray-700 text-sm">Lower costs, referrals required, must stay in network except for emergencies</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">PPO (Preferred Provider Organization)</h4>
                <p className="text-gray-700 text-sm">Higher costs, no referrals needed, can use out-of-network providers at higher cost</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Special Needs Plans (SNPs)</h4>
                <p className="text-gray-700 text-sm">Designed for people with chronic conditions, dual eligibility, or institutional care needs</p>
              </div>
            </div>
          </section>

          {/* Cost Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Comparison Examples</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Note:</strong> Costs vary significantly by location, plan, and individual health needs. 
                These are examples for illustration purposes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Original Medicare + Supplements</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Part B Premium:</span>
                    <span>$174.70/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part D Premium:</span>
                    <span>$30-80/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medigap Premium:</span>
                    <span>$150-300/month</span>
                  </div>
                  <hr className="my-2"/>
                  <div className="flex justify-between font-semibold">
                    <span>Total Monthly:</span>
                    <span>$355-555/month</span>
                  </div>
                  <div className="text-green-600 text-xs mt-2">
                    + Predictable costs, minimal surprises
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-600 mb-4">Medicare Advantage</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Part B Premium:</span>
                    <span>$174.70/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Plan Premium:</span>
                    <span>$0-150/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Copays/Coinsurance:</span>
                    <span>Variable</span>
                  </div>
                  <hr className="my-2"/>
                  <div className="flex justify-between font-semibold">
                    <span>Total Monthly:</span>
                    <span>$175-325/month</span>
                  </div>
                  <div className="text-blue-600 text-xs mt-2">
                    + Lower monthly costs, but variable usage costs
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Decision Framework */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Which Option Is Right for You?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Consider Original Medicare If:</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    You want freedom to see any Medicare provider
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    You travel frequently or live in multiple locations
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    You prefer predictable, comprehensive coverage
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    You have complex medical conditions requiring specialists
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    You can afford higher premiums for peace of mind
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Consider Medicare Advantage If:</h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    You want lower monthly premiums
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    You prefer all-in-one coverage with extras
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    You want coordinated care and case management
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Your doctors are in the plan's network
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    You want an annual out-of-pocket maximum
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Questions to Ask */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Questions to Ask Yourself</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Healthcare Needs</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>□ Do I have ongoing health conditions?</li>
                    <li>□ Do I see specialists regularly?</li>
                    <li>□ What medications do I take?</li>
                    <li>□ How often do I use healthcare services?</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Financial Considerations</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>□ What can I afford for monthly premiums?</li>
                    <li>□ How much can I budget for unexpected costs?</li>
                    <li>□ Do I prefer predictable or variable costs?</li>
                    <li>□ What's my annual healthcare spending?</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Lifestyle Factors</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>□ Do I travel frequently?</li>
                    <li>□ Do I live in multiple states seasonally?</li>
                    <li>□ How important is provider choice?</li>
                    <li>□ Do I mind getting referrals?</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Current Providers</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>□ Do I want to keep my current doctors?</li>
                    <li>□ Are they in Medicare Advantage networks?</li>
                    <li>□ What about my preferred hospital?</li>
                    <li>□ Which pharmacy do I use?</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Making the Switch */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Can I Switch Between the Two?</h2>
            
            <p className="text-gray-700 mb-6">
              Yes, you can switch between Original Medicare and Medicare Advantage, but there are important timing 
              and eligibility considerations:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">From Medicare Advantage to Original Medicare</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Switch during Annual Open Enrollment (Oct 15 - Dec 7)</li>
                  <li>• Switch during MA Open Enrollment (Jan 1 - Mar 31)</li>
                  <li>• May face medical underwriting for Medigap</li>
                  <li>• Will need to enroll in Part D separately</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">From Original Medicare to Medicare Advantage</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Switch during Annual Open Enrollment (Oct 15 - Dec 7)</li>
                  <li>• No medical underwriting required</li>
                  <li>• Can drop standalone Part D plan</li>
                  <li>• May lose Medigap coverage rights</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-800">
                <strong>Important:</strong> If you switch from Original Medicare + Medigap to Medicare Advantage, 
                you may not be able to get Medigap coverage again without medical underwriting (except in certain states).
              </p>
            </div>
          </section>

          {/* Resource Linking */}
          <ResourceLinking 
            currentResource="medicare-advantage-vs-original"
            currentCategory="Comparison"
            userContext="general"
            showTools={true}
            maxResources={4}
            maxTools={3}
          />

          {/* Call to Action */}
          <section className="bg-gray-900 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Choosing Between Medicare Options?</h2>
            <p className="text-gray-300 mb-6">
              Our licensed Medicare experts can help you compare your options and find the coverage that best 
              fits your health needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center inline-block">
                Compare Your Options
              </Link>
              <a href="tel:331-343-2584" className="border border-gray-400 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center inline-block">
                Call 331-343-2584
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}