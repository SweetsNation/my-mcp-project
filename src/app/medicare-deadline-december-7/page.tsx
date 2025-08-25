import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicare Deadline December 7, 2025 - URGENT: Don\'t Miss Open Enrollment!',
  description: 'URGENT: Medicare Open Enrollment ends December 7, 2025. This is your LAST CHANCE to change Medicare coverage for 2025. Get help before it\'s too late!',
  keywords: 'Medicare deadline December 7, Medicare enrollment deadline, Open Enrollment deadline, Medicare changes deadline, last chance Medicare',
  openGraph: {
    title: 'Medicare Deadline December 7, 2025 - URGENT ACTION REQUIRED',
    description: 'Final warning: Medicare Open Enrollment deadline is December 7, 2025. Don\'t get locked into bad coverage for 2025!',
    type: 'article',
  },
}

export default function MedicareDeadlineDecember7Page() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Urgent Alert Header */}
        <section className="bg-red-600 text-white p-6 rounded-lg mb-8 text-center">
          <div className="animate-pulse mb-4">
            <span className="text-4xl">🚨</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            URGENT DEADLINE ALERT
          </h1>
          <div className="text-3xl font-bold mb-4">
            Medicare Open Enrollment Ends
          </div>
          <div className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg text-4xl font-bold mb-4">
            December 7, 2025
          </div>
          <p className="text-xl text-red-100 mb-6">
            This is your FINAL CHANCE to change your Medicare coverage for 2025. 
            After December 7th, you're LOCKED IN until next year!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:331-343-2584"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-50 transition-colors"
            >
              📞 EMERGENCY HELP: 331-E-HEALTH
            </a>
            <Link
              href="/contact"
              className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
            >
              🆘 GET URGENT ASSISTANCE
            </Link>
          </div>
        </section>

        {/* Time Remaining Counter */}
        <section className="mb-12">
          <div className="bg-black text-red-500 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">⏰ TIME REMAINING UNTIL DEADLINE</h2>
            <div className="text-6xl font-bold mb-4 animate-pulse">
              FINAL DAYS
            </div>
            <p className="text-red-300 text-lg">
              Once December 7th passes, you CANNOT make changes until next Open Enrollment!
            </p>
          </div>
        </section>

        {/* What Happens After Deadline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">⚠️ What Happens After December 7, 2025?</h2>
          <div className="bg-red-50 border-2 border-red-500 p-8 rounded-lg">
            <div className="text-center mb-6">
              <div className="text-6xl text-red-600 mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-red-800 mb-4">YOU'RE LOCKED IN FOR ALL OF 2025!</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-red-800 mb-3">If You Miss the Deadline:</h4>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span>You're stuck with your current plan for ALL of 2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span>Cannot switch if your plan performs poorly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span>Cannot escape high premiums or copays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span>Cannot add coverage if your needs change</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span>Must wait until October 2025 for next opportunity</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-red-800 mb-3">The Only Exceptions:</h4>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>You move to a different coverage area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>You lose employer/union coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Your plan is discontinued by the insurer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>You qualify for Extra Help/Medicaid</span>
                  </li>
                  <li className="flex items-start">
                    <span class-text-red-500 mr-2">•</span>
                    <span>Other rare qualifying life events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Action Required NOW */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 URGENT ACTIONS REQUIRED NOW</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800 mb-3">🚨 If You Haven't Started Yet</h3>
                  <p className="text-red-700 mb-4">
                    <strong>CRITICAL:</strong> You have VERY limited time. Don't try to do this alone!
                  </p>
                  <div className="bg-red-600 text-white p-4 rounded-lg">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="tel:331-343-2584"
                        className="bg-yellow-400 text-red-800 px-6 py-3 rounded-lg font-bold text-center hover:bg-yellow-300 transition-colors"
                      >
                        📞 CALL EMERGENCY HOTLINE NOW
                      </a>
                      <Link
                        href="/contact"
                        className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold text-center hover:bg-gray-100 transition-colors"
                      >
                        🆘 URGENT ONLINE HELP REQUEST
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-2 border-orange-400 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-800 mb-3">⚡ If You're Still Comparing Plans</h3>
                  <p class="text-orange-700 mb-4">
                    Stop overthinking! Pick the best of your options and ENROLL TODAY.
                  </p>
                  <div class="space-y-2 text-orange-700">
                    <div class="flex items-start">
                      <span class="text-orange-500 mr-2">→</span>
                      <span>Choose the plan with lowest total cost for YOUR medications</span>
                    </div>
                    <div class="flex items-start">
                      <span class="text-orange-500 mr-2">→</span>
                      <span>Verify your doctors are in-network</span>
                    </div>
                    <div class="flex items-start">
                      <span class="text-orange-500 mr-2">→</span>
                      <span>ENROLL immediately - don't wait another day!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-green-50 border-2 border-green-400 p-6 rounded-lg">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-green-800 mb-3">✅ If You've Made Your Choice</h3>
                  <p class="text-green-700 mb-4">
                    <strong>GREAT!</strong> Now complete your enrollment IMMEDIATELY. Don't procrastinate!
                  </p>
                  <div class="bg-green-600 text-white p-4 rounded-lg">
                    <h4 class="font-bold mb-2">Enrollment Options (DO TODAY):</h4>
                    <div class="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p class="font-semibold">Online:</p>
                        <p>Medicare.gov or plan website</p>
                      </div>
                      <div>
                        <p class="font-semibold">Phone:</p>
                        <p>1-800-MEDICARE or plan directly</p>
                      </div>
                      <div>
                        <p class="font-semibold">Agent Help:</p>
                        <p>331-E-HEALTH for assistance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost of Waiting */}
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">💸 The REAL Cost of Missing the Deadline</h2>
          
          <div class="bg-red-50 border border-red-200 p-6 rounded-lg">
            <h3 class="text-2xl font-semibold text-red-800 mb-4">Real Examples of What People Lose:</h3>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h4 class="font-semibold text-red-800 mb-3">Example 1: Sarah, Age 67</h4>
                <div class="bg-white p-4 rounded border-l-4 border-red-500">
                  <p class="text-red-700 text-sm mb-2">
                    <strong>Situation:</strong> Wanted to switch from expensive Medicare Advantage plan
                  </p>
                  <p class="text-red-700 text-sm mb-2">
                    <strong>Missed Deadline:</strong> Stuck paying $1,800 more in 2025
                  </p>
                  <p class="text-red-700 text-sm font-semibold">
                    <strong>Result:</strong> Lost $1,800 + stress from bad coverage
                  </p>
                </div>
              </div>
              
              <div>
                <h4 class="font-semibold text-red-800 mb-3">Example 2: Robert, Age 72</h4>
                <div class="bg-white p-4 rounded border-l-4 border-red-500">
                  <p class="text-red-700 text-sm mb-2">
                    <strong>Situation:</strong> Needed Part D plan, kept procrastinating
                  </p>
                  <p class="text-red-700 text-sm mb-2">
                    <strong>Missed Deadline:</strong> No prescription coverage for 2025
                  </p>
                  <p class="text-red-700 text-sm font-semibold">
                    <strong>Result:</strong> Paid $4,200 out-of-pocket for medications
                  </p>
                </div>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-red-600 text-white rounded-lg text-center">
              <p class="text-xl font-bold">Don't be Sarah or Robert! ACT NOW!</p>
            </div>
          </div>
        </section>

        {/* Emergency Resources */}
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">🆘 Emergency Medicare Help Resources</h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-blue-800 mb-4">📞 Immediate Phone Help</h3>
              <div class="space-y-4">
                <div class="bg-blue-600 text-white p-4 rounded-lg text-center">
                  <p class="text-lg font-bold">El-Mag Insurance Emergency Line</p>
                  <a href="tel:331-343-2584" class="text-2xl font-bold text-yellow-300">
                    331-E-HEALTH
                  </a>
                  <p class="text-sm">Licensed agents standing by</p>
                </div>
                
                <div class="bg-white border border-blue-300 p-4 rounded-lg">
                  <p class="font-semibold text-blue-800">Official Medicare Hotline:</p>
                  <p class="text-blue-700">1-800-MEDICARE (1-800-633-4227)</p>
                  <p class="text-blue-600 text-sm">24/7 government assistance</p>
                </div>
              </div>
            </div>
            
            <div class="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-green-800 mb-4">💻 Online Emergency Help</h3>
              <div class="space-y-4">
                <Link 
                  href="/contact" 
                  class="block bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700 transition-colors"
                >
                  <p class="text-lg font-bold">🚨 URGENT HELP REQUEST</p>
                  <p class="text-sm">Get immediate expert assistance</p>
                </Link>
                
                <a 
                  href="https://www.medicare.gov/plan-compare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="block bg-white border border-green-300 p-4 rounded-lg text-center hover:bg-green-50 transition-colors"
                >
                  <p class="font-semibold text-green-800">Medicare.gov Plan Finder</p>
                  <p class="text-green-600 text-sm">Official government tool</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final Warning */}
        <section class="mb-12">
          <div class="bg-black text-red-500 p-8 rounded-lg text-center">
            <div class="text-6xl mb-4">⚠️</div>
            <h2 class="text-3xl font-bold mb-4 text-white">FINAL WARNING</h2>
            <div class="text-2xl font-bold text-red-400 mb-4">
              DECEMBER 7, 2025 = ABSOLUTE DEADLINE
            </div>
            <div class="text-xl text-red-300 mb-6 space-y-2">
              <p>• NO EXTENSIONS</p>
              <p>• NO EXCEPTIONS (except rare qualifying events)</p>
              <p>• NO SECOND CHANCES until October 2025</p>
            </div>
            <div class="text-3xl font-bold text-yellow-400">
              DON'T WAIT - ACT TODAY!
            </div>
          </div>
        </section>

        {/* Last Chance CTA */}
        <section class="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-lg mb-12">
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-4">🚨 THIS IS YOUR LAST CHANCE! 🚨</h2>
            <p class="text-xl text-red-100 mb-6">
              Don't spend 2025 regretting a missed opportunity. Our Medicare experts are standing by 
              to help you complete your enrollment before the December 7th deadline.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="tel:331-343-2584"
                class="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 CALL NOW: 331-E-HEALTH
              </a>
              <Link
                href="/contact"
                class="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
              >
                🆘 EMERGENCY HELP REQUEST
              </Link>
            </div>
            <div class="bg-red-900 p-4 rounded-lg">
              <p class="text-red-100 text-lg font-bold">
                Available NOW: Emergency Medicare specialists ready to help you enroll before it's too late!
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">⚡ Quick Access Resources</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <Link href="/medicare-open-enrollment-2025" class="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div class="text-2xl mb-2">📅</div>
              <h3 class="font-semibold text-blue-600">Open Enrollment Guide</h3>
              <p class="text-gray-600 text-sm">Complete enrollment information</p>
            </Link>
            <Link href="/medicare-plan-comparison-tool" class="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div class="text-2xl mb-2">🔍</div>
              <h3 class="font-semibold text-blue-600">Plan Comparison Tool</h3>
              <p class="text-gray-600 text-sm">Compare all available plans</p>
            </Link>
            <Link href="/medicare-open-enrollment-checklist" class="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div class="text-2xl mb-2">✅</div>
              <h3 class="font-semibold text-blue-600">Emergency Checklist</h3>
              <p class="text-gray-600 text-sm">Last-minute enrollment steps</p>
            </Link>
          </div>
        </section>

        <div class="text-center text-red-600 font-bold text-lg">
          🚨 REMEMBER: December 7, 2025 - NO EXTENSIONS! 🚨
        </div>
      </div>
    </main>
  )
}