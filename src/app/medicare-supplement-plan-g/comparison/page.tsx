import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicare Supplement Plan G vs Other Plans - Complete Comparison Guide 2025',
  description: 'Compare Medicare Supplement Plan G with Plan F, Plan N, and Medicare Advantage. See which plan offers the best value and coverage for your needs.',
  keywords: 'Plan G vs Plan F, Plan G vs Plan N, Plan G vs Medicare Advantage, Medicare Supplement comparison, Medigap comparison',
  openGraph: {
    title: 'Plan G vs Other Medicare Plans - Complete 2025 Comparison',
    description: 'Compare Plan G benefits, costs, and coverage with other Medicare options. Find the best plan for your healthcare needs.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-supplement-plan-g/comparison',
  },
}

export default function PlanGComparisonPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Plan G vs Other Medicare Plans
          </h1>
          <div className="text-2xl font-semibold mb-4">
            Complete 2025 Comparison Guide
          </div>
          <p className="text-xl text-blue-100 mb-6">
            See how Medicare Supplement Plan G compares to Plan F, Plan N, and Medicare Advantage plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:331-343-2584"
              className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
            >
              📞 GET EXPERT ADVICE: 331-E-HEALTH
            </a>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
            >
              📝 FREE PLAN COMPARISON
            </Link>
          </div>
        </section>

        {/* Plan G vs Plan F */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan G vs Plan F: Which is Better?</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Key Differences</h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-red-800 mb-4">Plan F</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Part B Deductible:</span>
                      <span className="font-semibold text-green-600">Covered</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Premium:</span>
                      <span className="font-semibold text-red-600">Higher</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Availability:</span>
                      <span className="font-semibold text-red-600">Limited</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Annual Cost:</span>
                      <span className="font-semibold text-red-600">$240 + Premium</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-red-100 rounded">
                    <p className="text-red-800 text-sm">
                      <strong>Note:</strong> Plan F is only available to those eligible for Medicare before 2020.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">Plan G ⭐ RECOMMENDED</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Part B Deductible:</span>
                      <span className="font-semibold text-blue-600">You pay $240</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Premium:</span>
                      <span className="font-semibold text-green-600">Lower</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Availability:</span>
                      <span className="font-semibold text-green-600">Available to all</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Annual Cost:</span>
                      <span className="font-semibold text-green-600">$240 + Lower Premium</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded">
                    <p className="text-green-800 text-sm">
                      <strong>Winner:</strong> Plan G typically costs less overall due to lower premiums.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-yellow-800 mb-3">💡 Why Plan G is Usually Better</h4>
                <ul className="space-y-2 text-yellow-800">
                  <li>• Lower monthly premiums (often $20-50 less than Plan F)</li>
                  <li>• Available to everyone (Plan F has eligibility restrictions)</li>
                  <li>• Same comprehensive coverage after deductible</li>
                  <li>• Better long-term value for most people</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Plan G vs Plan N */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan G vs Plan N: Cost vs Convenience</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Detailed Comparison</h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">Plan G</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Part B Coinsurance:</span>
                      <span className="font-semibold text-green-600">100% Covered</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Part B Excess Charges:</span>
                      <span className="font-semibold text-green-600">100% Covered</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Office Visit Copays:</span>
                      <span className="font-semibold text-green-600">$0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Premium:</span>
                      <span className="font-semibold text-red-600">Higher</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 rounded">
                    <p className="text-blue-800 text-sm">
                      <strong>Best for:</strong> People who want predictable costs and comprehensive coverage.
                    </p>
                  </div>
                </div>
                
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-green-800 mb-4">Plan N</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Part B Coinsurance:</span>
                      <span className="font-semibold text-green-600">100% Covered</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Part B Excess Charges:</span>
                      <span className="font-semibold text-red-600">Not Covered</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Office Visit Copays:</span>
                      <span className="font-semibold text-red-600">$20-50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Premium:</span>
                      <span className="font-semibold text-green-600">Lower</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded">
                    <p className="text-green-800 text-sm">
                      <strong>Best for:</strong> People who want lower premiums and don't mind copays.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-800 mb-3">🤔 Which Should You Choose?</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">Choose Plan G if:</h5>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• You want predictable costs</li>
                      <li>• You see doctors frequently</li>
                      <li>• You want comprehensive coverage</li>
                      <li>• You can afford higher premiums</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-800 mb-2">Choose Plan N if:</h5>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• You want lower premiums</li>
                      <li>• You don't mind small copays</li>
                      <li>• You're generally healthy</li>
                      <li>• You want to save money</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plan G vs Medicare Advantage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan G vs Medicare Advantage</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Major Differences</h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Feature</th>
                      <th className="border border-gray-300 p-3 text-center bg-blue-100 font-bold">Plan G</th>
                      <th className="border border-gray-300 p-3 text-center">Medicare Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Network Restrictions</td>
                      <td className="border border-gray-300 p-3 text-center bg-blue-50 font-bold text-green-600">No restrictions</td>
                      <td className="border border-gray-300 p-3 text-center text-red-600">Network required</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Referrals Needed</td>
                      <td className="border border-gray-300 p-3 text-center bg-blue-50 font-bold text-green-600">No referrals</td>
                      <td className="border border-gray-300 p-3 text-center text-red-600">May need referrals</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Monthly Premium</td>
                      <td className="border border-gray-300 p-3 text-center bg-blue-50 font-bold text-red-600">Higher</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">Lower</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Out-of-Pocket Maximum</td>
                      <td className="border border-gray-300 p-3 text-center bg-blue-50 font-bold text-green-600">No maximum</td>
                      <td className="border border-gray-300 p-3 text-center text-red-600">$8,850 max (2025)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Prescription Coverage</td>
                      <td className="border border-gray-300 p-3 text-center bg-blue-50 font-bold text-red-600">Separate Part D needed</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">Usually included</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Additional Benefits</td>
                      <td className="border border-gray-300 p-3 text-center bg-blue-50 font-bold text-red-600">Limited</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">Dental, vision, hearing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">Plan G Advantages</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li>• See any doctor that accepts Medicare</li>
                    <li>• No network restrictions</li>
                    <li>• No referrals needed</li>
                    <li>• Predictable costs</li>
                    <li>• No out-of-pocket maximum</li>
                    <li>• Nationwide coverage</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-green-800 mb-4">Medicare Advantage Advantages</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• Lower monthly premiums</li>
                    <li>• Prescription drug coverage included</li>
                    <li>• Additional benefits (dental, vision)</li>
                    <li>• Out-of-pocket maximum protection</li>
                    <li>• Some plans have $0 premiums</li>
                    <li>• Coordinated care</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison Calculator */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Annual Cost Comparison</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Example: 65-year-old in Illinois</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-blue-800 mb-4">Plan G</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monthly Premium:</span>
                    <span className="font-semibold">$180</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Premium:</span>
                    <span className="font-semibold">$2,160</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part B Deductible:</span>
                    <span className="font-semibold">$240</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part D Premium:</span>
                    <span className="font-semibold">$35</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Part D:</span>
                    <span className="font-semibold">$420</span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-lg font-bold text-blue-800">
                    <span>Total Annual:</span>
                    <span>$2,820</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-green-800 mb-4">Plan N</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monthly Premium:</span>
                    <span className="font-semibold">$140</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Premium:</span>
                    <span className="font-semibold">$1,680</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Office Copays:</span>
                    <span className="font-semibold">$200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part D Premium:</span>
                    <span className="font-semibold">$35</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Part D:</span>
                    <span className="font-semibold">$420</span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-lg font-bold text-green-800">
                    <span>Total Annual:</span>
                    <span>$2,300</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-purple-800 mb-4">Medicare Advantage</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monthly Premium:</span>
                    <span className="font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Premium:</span>
                    <span className="font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Copays/Deductibles:</span>
                    <span className="font-semibold">$500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prescription Costs:</span>
                    <span className="font-semibold">$300</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dental/Vision:</span>
                    <span className="font-semibold">$0</span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-lg font-bold text-purple-800">
                    <span>Total Annual:</span>
                    <span>$800</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg">
              <p className="text-yellow-800 text-center">
                <strong>Note:</strong> These are example costs. Your actual costs will vary based on your location, age, health, and specific plan choices.
              </p>
            </div>
          </div>
        </section>

        {/* Recommendation Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Recommendation</h2>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">⭐ Plan G is Our Top Choice for Most People</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Why Plan G?</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Best balance of cost and coverage</li>
                  <li>• No network restrictions</li>
                  <li>• Predictable costs</li>
                  <li>• Available to everyone</li>
                  <li>• Comprehensive coverage</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">When to Consider Alternatives</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• <strong>Plan N:</strong> If you want lower premiums</li>
                  <li>• <strong>Medicare Advantage:</strong> If you want additional benefits</li>
                  <li>• <strong>Plan F:</strong> If you're eligible and want zero deductible</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Get Your Personalized Plan Comparison</h2>
            <p className="text-xl mb-6">
              Our Medicare experts will analyze your specific situation and recommend the best plan for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-green-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 CALL FOR COMPARISON: 331-E-HEALTH
              </a>
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
              >
                📝 GET FREE ANALYSIS
              </Link>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More About Medicare Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/medicare-supplement-plan-g" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-semibold text-blue-600">Plan G Details</h3>
              <p className="text-gray-600 text-sm">Complete Plan G information</p>
            </Link>
            <Link href="/medicare-advantage" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🏥</div>
              <h3 className="font-semibold text-blue-600">Medicare Advantage</h3>
              <p className="text-gray-600 text-sm">All-in-one plans</p>
            </Link>
            <Link href="/medicare-part-d" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">💊</div>
              <h3 className="font-semibold text-blue-600">Part D Plans</h3>
              <p className="text-gray-600 text-sm">Prescription coverage</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
