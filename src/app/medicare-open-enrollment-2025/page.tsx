import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicare Open Enrollment 2025 - Oct 15 to Dec 7 | Don\'t Miss the Deadline',
  description: 'Medicare Open Enrollment 2025 runs October 15 - December 7. Review your coverage, compare plans, and make changes. Get expert help to find the best Medicare plan.',
  keywords: 'Medicare Open Enrollment 2025, Medicare enrollment period, Medicare plan changes, Open Enrollment deadline, Medicare Annual Enrollment Period',
  openGraph: {
    title: 'Medicare Open Enrollment 2025 - Critical Deadline Information',
    description: 'Medicare Open Enrollment period is October 15 - December 7, 2025. Review your coverage and make necessary changes before the deadline.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-open-enrollment-2025',
  },
}

export default function MedicareOpenEnrollment2025Page() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section with Countdown */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-lg mb-8">
          <div className="text-center">
            <div className="bg-yellow-400 text-red-800 px-4 py-2 rounded-full inline-block font-bold text-sm mb-4">
              🚨 URGENT: Open Enrollment is NOW
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Medicare Open Enrollment 2025
            </h1>
            <div className="text-2xl md:text-3xl font-bold mb-4">
              October 15 - December 7, 2025
            </div>
            <p className="text-xl text-red-100 mb-6 max-w-4xl mx-auto">
              This is your ONLY chance to change your Medicare coverage for 2025. 
              Don't wait - plans and costs change every year. Review your options now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-yellow-50 transition-colors text-lg"
              >
                CALL NOW 331-E-HEALTH
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors text-lg"
              >
                Get Free Plan Review
              </Link>
            </div>
          </div>
        </section>

        {/* Critical Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Critical Open Enrollment Timeline</h2>
          <div className="bg-white border-2 border-red-500 rounded-xl p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-lg font-bold text-green-600 mb-2">NOW - November 15</h3>
                <p className="text-gray-700">BEST TIME to review and compare plans. Full selection available.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">!</span>
                </div>
                <h3 className="text-lg font-bold text-yellow-600 mb-2">November 16 - November 30</h3>
                <p className="text-gray-700">GETTING URGENT - Limited time to research and enroll in best plans.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">🚨</span>
                </div>
                <h3 className="text-lg font-bold text-red-600 mb-2">December 1 - 7</h3>
                <p className="text-gray-700">FINAL WEEK - Last chance! Plans may be filled. Don't wait!</p>
              </div>
            </div>
            <div className="text-center mt-6 p-4 bg-red-50 rounded-lg">
              <p className="text-red-800 font-bold">
                ⚠️ After December 7th, you're LOCKED IN to your current plan for all of 2025!
              </p>
            </div>
          </div>
        </section>

        {/* Why Review Your Coverage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why You MUST Review Your Medicare Coverage Now</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Plans Change Every Year</h3>
              <ul className="space-y-2 text-yellow-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Premiums increase or decrease</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Drug formularies are modified</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Deductibles and copays change</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Doctor and hospital networks are updated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Coverage areas may be eliminated</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Cost of Doing Nothing</h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Average premium increases of 6-8% annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Your medications may no longer be covered</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Your doctors may leave the network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Could cost you $2,000-$5,000 extra per year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Stuck with bad plan for entire 2025</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2025 Medicare Changes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Major Medicare Changes for 2025</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">🎉 Part D Out-of-Pocket Cap: $2,000</h3>
              <p className="text-blue-700 mb-3">
                <strong>HUGE CHANGE:</strong> You'll never pay more than $2,000 total for prescription drugs in 2025. 
                This eliminates the coverage gap ("donut hole") entirely.
              </p>
              <div className="bg-blue-100 p-3 rounded">
                <p className="text-blue-800 text-sm">
                  <strong>Impact:</strong> If you had high drug costs in 2024, this could save you thousands in 2025. 
                  But plan costs and formularies are still changing - you need to compare!
                </p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">💊 Part D Smoothing Program</h3>
              <p className="text-green-700 mb-3">
                <strong>NEW OPTION:</strong> Spread your annual drug costs evenly across 12 months instead of paying large amounts upfront.
              </p>
              <div className="bg-green-100 p-3 rounded">
                <p className="text-green-800 text-sm">
                  <strong>Example:</strong> Instead of paying $500 in January for expensive drugs, pay ~$42/month throughout the year.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">📈 Premium Changes</h3>
              <p className="text-purple-700 mb-3">
                Medicare Part B premium increases to <strong>$185/month</strong> for most beneficiaries (up from $174.70 in 2024).
              </p>
              <div className="bg-purple-100 p-3 rounded">
                <p className="text-purple-800 text-sm">
                  <strong>Annual Impact:</strong> Additional $123.60 per year in Part B costs for most Medicare beneficiaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Change */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Can Change During Open Enrollment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Medicare Advantage</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Switch between MA plans</li>
                <li>• Move to Original Medicare</li>
                <li>• Add or drop MA coverage</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">💊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Part D Drug Plans</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Switch Part D plans</li>
                <li>• Add Part D if you have none</li>
                <li>• Drop standalone Part D</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Medigap Policies</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Add Medigap if eligible</li>
                <li>• Switch Medigap plans</li>
                <li>• Change coverage levels</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Coverage Combinations</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Original Medicare + Part D</li>
                <li>• Medicare Advantage with drugs</li>
                <li>• Mix and match coverage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Open Enrollment Action Plan</h2>
          <div className="space-y-6">
            <div className="bg-white border-2 border-blue-500 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Review Your Current Situation (Do This Week)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-1 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Check 2024 plan performance and costs
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        List all current medications and dosages
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Note your preferred doctors and hospitals
                      </li>
                    </ul>
                    <ul className="space-y-1 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Review your 2025 Annual Notice of Change
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Calculate total 2024 healthcare spending
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Identify any coverage gaps or problems
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-green-500 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Compare 2025 Options (Next Week)</h3>
                  <p className="text-gray-700 mb-4">
                    Use Medicare.gov Plan Finder OR get free expert help to compare all available options:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">DIY Comparison:</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Use Medicare Plan Finder tool</li>
                        <li>• Enter all your medications</li>
                        <li>• Compare total annual costs</li>
                        <li>• Check doctor/pharmacy networks</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Expert Assistance:</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Free consultation with licensed agents</li>
                        <li>• Comprehensive plan comparison</li>
                        <li>• Personalized recommendations</li>
                        <li>• Enrollment assistance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-orange-500 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Make Your Decision and Enroll (Don't Wait!)</h3>
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <p className="text-orange-800 font-semibold">⚠️ Don't procrastinate! Plans can reach capacity or be discontinued.</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Choose the plan with the lowest total cost for YOUR situation
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Enroll online, by phone, or with agent assistance
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Get confirmation of enrollment and effective dates
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Mark calendar for next year's Open Enrollment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent CTA */}
        <section className="bg-red-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Risk Your Health and Money in 2025!</h2>
            <div className="bg-yellow-400 text-red-800 px-6 py-3 rounded-lg inline-block font-bold text-lg mb-6">
              📅 DEADLINE: December 7, 2025 - No Exceptions!
            </div>
            <p className="text-xl text-red-100 mb-6">
              Get a FREE Medicare plan review and comparison from our licensed experts. 
              We'll find the plan that saves you the most money for 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <a
                href="tel:331-343-2584"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-yellow-50 transition-colors text-lg"
              >
                📞 CALL NOW 331-E-HEALTH
              </a>
              <Link
                href="/contact"
                className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-lg"
              >
                📝 REQUEST URGENT REVIEW
              </Link>
            </div>
            <div className="space-y-2 text-red-100">
              <p className="text-sm">✅ Licensed Medicare specialists</p>
              <p className="text-sm">✅ Compare ALL available plans</p>
              <p className="text-sm">✅ 100% FREE service - No hidden fees</p>
              <p className="text-sm">✅ Help with enrollment process</p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Don't Make These Costly Open Enrollment Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">❌ "My plan is fine, I don't need to look"</h3>
                <p className="text-red-700 text-sm">
                  Plans change EVERY year. Your "good" 2024 plan might be terrible for 2025.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">❌ "I'll just pick the cheapest premium"</h3>
                <p className="text-red-700 text-sm">
                  Lowest premium often means highest out-of-pocket costs. Total cost is what matters.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">❌ "I have time, I'll do it later"</h3>
                <p className="text-red-700 text-sm">
                  Good plans fill up. Popular doctors reach patient limits. Don't wait until December!
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-green-800 mb-2">✅ Review plans EVERY year</h3>
                <p className="text-green-700 text-sm">
                  Even if you're happy, check for better options and confirm nothing changed.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-green-800 mb-2">✅ Calculate total annual costs</h3>
                <p className="text-green-700 text-sm">
                  Premium + deductible + copays + coinsurance = your real cost comparison.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-green-800 mb-2">✅ Start early, enroll by mid-November</h3>
                <p className="text-green-700 text-sm">
                  Best selection and time for thorough comparison. Avoid the December rush!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Open Enrollment Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/medicare-open-enrollment-checklist" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">📋 Open Enrollment Checklist</h3>
              <p className="text-gray-600 text-sm">
                Step-by-step checklist to ensure you don't miss anything important
              </p>
            </Link>
            <Link href="/medicare-2025-changes" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">📈 2025 Medicare Changes</h3>
              <p className="text-gray-600 text-sm">
                Complete guide to all Medicare changes and updates for 2025
              </p>
            </Link>
            <Link href="/medicare-plan-comparison-tool" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🔍 Plan Comparison Tool</h3>
              <p className="text-gray-600 text-sm">
                Compare Medicare plans side-by-side for your specific needs
              </p>
            </Link>
            <Link href="/medicare-advantage" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🏥 Medicare Advantage Guide</h3>
              <p className="text-gray-600 text-sm">
                Everything you need to know about Medicare Advantage options
              </p>
            </Link>
            <Link href="/medicare-part-d" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">💊 Part D Drug Plans</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive guide to Medicare Part D prescription coverage
              </p>
            </Link>
            <Link href="/medicare-extra-help" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">💰 Extra Help Program</h3>
              <p className="text-gray-600 text-sm">
                Save thousands with Medicare Extra Help prescription assistance
              </p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your Medicare Coverage Affects Your Health and Wallet</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Don't leave thousands of dollars on the table or risk losing access to your doctors and medications. 
              Our Medicare experts are standing by to help you navigate Open Enrollment and find the perfect plan for 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📞 Call 331-E-HEALTH Now
              </a>
              <Link
                href="/contact"
                className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📧 Get Free Consultation
              </Link>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Licensed Medicare specialists • Free service • Available 7 days a week during Open Enrollment
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}