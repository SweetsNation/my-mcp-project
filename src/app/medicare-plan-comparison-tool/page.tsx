import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicare Plan Comparison Tool 2025 | Compare All Plans Side-by-Side',
  description: 'Free Medicare plan comparison tool for 2025 Open Enrollment. Compare Medicare Advantage, Part D, and Medigap plans side-by-side to find the best coverage.',
  keywords: 'Medicare plan comparison tool, compare Medicare plans, Medicare plan finder, Medicare Advantage comparison, Part D plan comparison',
  openGraph: {
    title: 'Medicare Plan Comparison Tool 2025 - Find Your Best Plan',
    description: 'Compare all Medicare plans available in your area. Side-by-side comparison of costs, benefits, and coverage options.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-plan-comparison-tool',
  },
}

export default function MedicarePlanComparisonToolPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <div className="bg-green-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
            <span className="font-bold">🔍 Open Enrollment Tool - Compare 2025 Plans</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medicare Plan Comparison Tool 2025
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Compare all Medicare plans available in your area side-by-side. Find the best combination of 
            coverage and costs for your specific healthcare needs during Open Enrollment.
          </p>
        </div>

        {/* Urgency Banner */}
        <section className="bg-red-50 border-2 border-red-400 p-6 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-2">⏰ Open Enrollment Deadline: December 7, 2025</h2>
            <p className="text-red-700 mb-4">
              This is your ONLY chance to change Medicare coverage for 2025. Don't wait - compare and enroll now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                📞 Get Expert Help Now
              </a>
              <Link
                href="/medicare-open-enrollment-2025"
                className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                📅 Open Enrollment Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Tool Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🛠️ Medicare Plan Comparison Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Official Tool */}
            <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Official Medicare Plan Finder</h3>
                <p className="text-blue-700 text-sm">
                  The government's official tool with all available plans in your area
                </p>
              </div>
              
              <div className="space-y-3 text-sm text-blue-700 mb-6">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All Medicare Advantage plans
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All Part D prescription plans
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Enter your medications for cost estimates
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Check doctor and pharmacy networks
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Enroll directly through the tool
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="https://www.medicare.gov/plan-compare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  🔗 Go to Medicare.gov
                </a>
                <p className="text-xs text-blue-600 mt-2">Opens in new window</p>
              </div>
            </div>

            {/* Expert Help */}
            <div className="bg-green-50 border border-green-200 p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Expert Plan Comparison</h3>
                <p className="text-green-700 text-sm">
                  Licensed Medicare specialists do the comparison work for you
                </p>
              </div>
              
              <div className="space-y-3 text-sm text-green-700 mb-6">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized plan analysis
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Side-by-side cost comparisons
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Network and formulary verification
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Consider future healthcare needs
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free enrollment assistance
                </div>
              </div>
              
              <div className="text-center">
                <Link
                  href="/contact"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
                >
                  📧 Request Free Comparison
                </Link>
                <p className="text-xs text-green-600 mt-2">100% Free Service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Types to Compare */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📋 Types of Medicare Plans to Compare</h2>
          
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-purple-600 mb-6">🏥 Medicare Advantage Plans (Part C)</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What to Compare:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Monthly premium amounts
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Annual deductibles (medical and drug)
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Out-of-pocket maximums
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Doctor and hospital networks
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Prescription drug formularies
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Extra benefits (dental, vision, hearing)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key 2025 Features:</h4>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-purple-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        $2,000 prescription drug cap included
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Access to prescription smoothing program
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Enhanced supplemental benefits
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        Competitive premium pricing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">💊 Medicare Part D Prescription Plans</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What to Compare:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Monthly premium costs
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Annual deductible amounts
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Drug tier copays and coinsurance
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Formulary coverage for your medications
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Pharmacy network options
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Mail-order pharmacy availability
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Revolutionary 2025 Change:</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-center mb-3">
                      <div className="text-3xl font-bold text-blue-600">$2,000</div>
                      <div className="text-blue-700 text-sm font-semibold">Maximum Annual Out-of-Pocket</div>
                    </div>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• No more coverage gap ("donut hole")</li>
                      <li>• Predictable prescription costs</li>
                      <li>• Huge savings for high-cost drugs</li>
                      <li>• Optional monthly smoothing payments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-green-600 mb-6">🛡️ Medigap Supplement Plans</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What to Compare:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Monthly premium rates
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Coverage levels (Plans A, B, C, D, F, G, K, L, M, N)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Deductible coverage
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Coinsurance coverage
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Insurance company ratings
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Rate increase history
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Popular Plan Comparison:</h4>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <div>
                        <h5 className="font-semibold text-green-800">Plan G (Most Popular)</h5>
                        <p className="text-green-700">Covers everything except Part B deductible</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-800">Plan N (Lower Premium)</h5>
                        <p className="text-green-700">Small copays but lower monthly cost</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-800">High Deductible Plan G</h5>
                        <p className="text-green-700">Lowest premium, $2,800 deductible</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Factors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Critical Factors to Compare</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-3">💰 Total Annual Costs</h3>
              <p className="text-red-700 text-sm mb-3">
                Don't just look at premiums - calculate your complete yearly expense.
              </p>
              <div className="space-y-1 text-red-700 text-xs">
                <p>• Monthly premiums × 12</p>
                <p>• Annual deductibles</p>
                <p>• Estimated copays/coinsurance</p>
                <p>• Out-of-network costs</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🏥 Provider Networks</h3>
              <p className="text-blue-700 text-sm mb-3">
                Ensure your doctors and hospitals are in the plan's network.
              </p>
              <div className="space-y-1 text-blue-700 text-xs">
                <p>• Primary care physicians</p>
                <p>• Specialists you see regularly</p>
                <p>• Preferred hospitals</p>
                <p>• Emergency care coverage</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">💊 Prescription Coverage</h3>
              <p className="text-green-700 text-sm mb-3">
                Verify all medications are covered at reasonable costs.
              </p>
              <div className="space-y-1 text-green-700 text-xs">
                <p>• Formulary inclusion</p>
                <p>• Drug tier placement</p>
                <p>• Prior authorization requirements</p>
                <p>• Quantity limits</p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">⭐ Plan Quality Ratings</h3>
              <p className="text-purple-700 text-sm mb-3">
                Medicare rates plans 1-5 stars for quality and customer service.
              </p>
              <div className="space-y-1 text-purple-700 text-xs">
                <p>• Overall star rating</p>
                <p>• Customer service scores</p>
                <p>• Care coordination ratings</p>
                <p>• Member satisfaction</p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">🌐 Coverage Area</h3>
              <p className="text-orange-700 text-sm mb-3">
                Plans vary by county and may not cover travel destinations.
              </p>
              <div className="space-y-1 text-orange-700 text-xs">
                <p>• Service area boundaries</p>
                <p>• Travel coverage options</p>
                <p>• Emergency care while traveling</p>
                <p>• Snowbird considerations</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">🎁 Extra Benefits</h3>
              <p className="text-yellow-700 text-sm mb-3">
                Many Medicare Advantage plans include additional benefits.
              </p>
              <div className="space-y-1 text-yellow-700 text-xs">
                <p>• Dental coverage</p>
                <p>• Vision benefits</p>
                <p>• Hearing aid coverage</p>
                <p>• Wellness programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Comparison Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📈 Step-by-Step Plan Comparison Process</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-2 border-blue-500 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Gather Your Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Healthcare Information:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• List of all medications with dosages</li>
                        <li>• Names and addresses of all doctors</li>
                        <li>• Preferred hospitals and facilities</li>
                        <li>• Current health conditions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Current Coverage Details:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Current plan information</li>
                        <li>• 2024 healthcare spending totals</li>
                        <li>• Satisfaction with current coverage</li>
                        <li>• Problems or limitations experienced</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-green-500 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Use Comparison Tools</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Medicare.gov Plan Finder:</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Enter your ZIP code to see available plans</li>
                        <li>• Add all your medications for accurate cost estimates</li>
                        <li>• Select preferred pharmacies</li>
                        <li>• Review plan details and star ratings</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Alternative: Expert Assistance:</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Licensed agents do the comparison work</li>
                        <li>• Personalized recommendations based on your needs</li>
                        <li>• Explanation of complex plan features</li>
                        <li>• Ongoing support throughout the year</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-purple-500 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Create a Side-by-Side Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-purple-50 border border-purple-200 rounded-lg">
                      <thead className="bg-purple-100">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                            Comparison Factor
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                            Plan Option 1
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                            Plan Option 2
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                            Plan Option 3
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-purple-200">
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-gray-900">Monthly Premium</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$__</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$__</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$__</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-gray-900">Annual Deductible</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$__</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$__</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$__</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-gray-900">Estimated Drug Costs</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$__</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$__</td>
                          <td className="px-4 py-2 text-sm text-gray-700">$__</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm font-medium text-gray-900">Total Annual Cost</td>
                          <td className="px-4 py-2 text-sm font-bold text-purple-600">$__</td>
                          <td className="px-4 py-2 text-sm font-bold text-purple-600">$__</td>
                          <td className="px-4 py-2 text-sm font-bold text-purple-600">$__</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-orange-500 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Make Your Final Decision</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Decision Criteria (in order of importance):</h4>
                      <ol className="text-orange-700 text-sm space-y-1 list-decimal list-inside">
                        <li>All your medications are covered</li>
                        <li>Your doctors are in the network</li>
                        <li>Total annual cost fits your budget</li>
                        <li>Plan has good star ratings (4+ stars preferred)</li>
                        <li>Extra benefits match your needs</li>
                      </ol>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                      <p className="text-red-800 font-semibold">⚠️ Don't Forget:</p>
                      <p className="text-red-700 text-sm">
                        You must enroll by December 7, 2025, or you'll be stuck with your current plan for all of 2025!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Help CTA */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Overwhelmed by Plan Comparison?</h2>
            <div className="bg-yellow-400 text-green-800 px-6 py-2 rounded-lg inline-block font-bold mb-4">
              🕒 FREE Expert Plan Comparison Service
            </div>
            <p className="text-green-100 mb-6 max-w-3xl mx-auto">
              Our licensed Medicare specialists will do all the comparison work for you. We'll analyze your specific 
              situation, compare all available plans, and recommend the best option for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                📞 Call 331-E-HEALTH Now
              </a>
              <Link
                href="/contact"
                className="bg-yellow-400 text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📧 Request Free Comparison
              </Link>
            </div>
            <div className="grid md:grid-cols-4 gap-4 mt-6 text-green-200 text-sm">
              <div>✅ Licensed Medicare experts</div>
              <div>✅ 100% free service</div>
              <div>✅ No obligation consultation</div>
              <div>✅ Enrollment assistance included</div>
            </div>
          </div>
        </section>

        {/* Comparison Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">❌ Common Plan Comparison Mistakes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">Only Comparing Premiums</h3>
                <p className="text-red-700 text-sm">
                  A $20/month plan with high deductibles may cost more than a $60/month plan with low copays.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">Not Checking Networks</h3>
                <p className="text-red-700 text-sm">
                  Your favorite doctor may not be covered, forcing expensive out-of-network costs.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">Ignoring Drug Formularies</h3>
                <p className="text-red-700 text-sm">
                  Your medications might not be covered or could be on expensive tiers.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-green-800 mb-2">✅ Compare Total Annual Costs</h3>
                <p className="text-green-700 text-sm">
                  Add premiums + deductibles + estimated copays for true cost comparison.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-green-800 mb-2">✅ Verify All Your Providers</h3>
                <p className="text-green-700 text-sm">
                  Double-check that your doctors, hospitals, and pharmacies are in-network.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-green-800 mb-2">✅ Consider Future Needs</h3>
                <p className="text-green-700 text-sm">
                  Choose plans that work well even if your health or medication needs change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔗 Related Comparison Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/medicare-open-enrollment-2025" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">📅 Open Enrollment 2025</h3>
              <p className="text-gray-600 text-sm">
                Complete guide to Medicare Open Enrollment deadlines and requirements
              </p>
            </Link>
            <Link href="/medicare-2025-changes" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">📈 2025 Medicare Changes</h3>
              <p className="text-gray-600 text-sm">
                All the important Medicare updates and benefit changes for 2025
              </p>
            </Link>
            <Link href="/medicare-part-d/costs/comparison" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">💊 Part D Comparison</h3>
              <p className="text-gray-600 text-sm">
                Detailed guide to comparing Medicare Part D prescription drug plans
              </p>
            </Link>
            <Link href="/medicare-advantage" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🏥 Medicare Advantage</h3>
              <p className="text-gray-600 text-sm">
                Everything you need to know about Medicare Advantage plan options
              </p>
            </Link>
            <Link href="/medicare-open-enrollment-checklist" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">✅ Enrollment Checklist</h3>
              <p className="text-gray-600 text-sm">
                Step-by-step checklist for Medicare Open Enrollment preparation
              </p>
            </Link>
            <Link href="/medicare-extra-help" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">💰 Extra Help Program</h3>
              <p className="text-gray-600 text-sm">
                Learn about prescription drug cost assistance for qualifying beneficiaries
              </p>
            </Link>
          </div>
        </section>

        <nav className="text-sm text-gray-600">
          <Link href="/medicare-open-enrollment-2025" className="hover:text-blue-600">
            ← Back to Open Enrollment 2025
          </Link>
        </nav>
      </div>
    </main>
  )
}