import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicare Open Enrollment Checklist 2025 - Don\'t Miss These Critical Steps',
  description: 'Complete Medicare Open Enrollment checklist for 2025. Step-by-step guide to review your coverage, compare plans, and enroll before the December 7 deadline.',
  keywords: 'Medicare Open Enrollment checklist, Medicare enrollment steps, Open Enrollment guide, Medicare plan review checklist, Medicare enrollment deadline',
  openGraph: {
    title: 'Medicare Open Enrollment Checklist 2025 - Complete Guide',
    description: 'Essential checklist for Medicare Open Enrollment 2025. Don\'t miss these critical steps before the December 7 deadline.',
    type: 'article',
  },
}

export default function MedicareOpenEnrollmentChecklistPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
            <span className="font-bold">🚨 URGENT: Open Enrollment Deadline December 7, 2025</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medicare Open Enrollment Checklist 2025
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Don't leave your Medicare coverage to chance. Follow this comprehensive checklist to ensure 
            you review all options and make the best choice for 2025 before it's too late.
          </p>
        </div>

        {/* Urgency Section */}
        <section className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">⏰ Time-Sensitive Reminders</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">OCT 15 - NOV 15</div>
              <div className="text-green-700 font-semibold">IDEAL TIME</div>
              <div className="text-sm text-gray-700">Full plan selection, plenty of time to compare</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">NOV 16 - NOV 30</div>
              <div className="text-yellow-700 font-semibold">GETTING TIGHT</div>
              <div className="text-sm text-gray-700">Still good options, but don't delay</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">DEC 1 - DEC 7</div>
              <div className="text-red-700 font-semibold">FINAL WEEK</div>
              <div className="text-sm text-gray-700">Last chance! Popular plans may be full</div>
            </div>
          </div>
        </section>

        {/* Pre-Enrollment Preparation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📋 Phase 1: Pre-Enrollment Preparation</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Gather Essential Documents & Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">📄 Documents You'll Need:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Medicare card (Part A & Part B)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Current plan ID cards</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Social Security card</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Driver's license or state ID</span>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">List of current medications</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Preferred pharmacy information</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Doctor and hospital contact info</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Bank account info (for automatic payments)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">💊 Create Your Medication List:</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 mb-2">For each medication, include:</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1 text-blue-700">
                      <p>• Exact medication name (generic & brand)</p>
                      <p>• Dosage strength (mg, mcg, etc.)</p>
                      <p>• Quantity taken per month</p>
                    </div>
                    <div className="space-y-1 text-blue-700">
                      <p>• Dosage form (tablet, capsule, liquid)</p>
                      <p>• Prescribing doctor</p>
                      <p>• Current monthly cost</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🏥 Review Your Healthcare Providers:</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">List primary care physician name and address</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">List all specialists you see regularly</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Note preferred hospitals or medical facilities</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Identify any scheduled procedures or treatments for 2025</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Plan Review */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔍 Phase 2: Review Your Current Coverage</h2>
          <div className="space-y-6">
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">📑 Analyze Your 2024 Plan Performance</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">💰 Cost Analysis:</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                      <span className="text-gray-700">Calculate total 2024 premiums paid</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                      <span className="text-gray-700">Add up all deductibles, copays, and coinsurance</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                      <span className="text-gray-700">Note any out-of-network charges</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                      <span className="text-gray-700">Calculate total healthcare spending for 2024</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📋 Coverage Assessment:</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                      <span className="text-gray-700">Were all your medications covered adequately?</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                      <span className="text-gray-700">Did you have access to preferred doctors?</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                      <span className="text-gray-700">Were you satisfied with customer service?</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                      <span className="text-gray-700">Did you encounter any prior authorization issues?</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-4">📬 Review Your Annual Notice of Change (ANOC)</h3>
              <p className="text-gray-700 mb-4">
                Your current plan mailed you an ANOC in September explaining what's changing for 2025:
              </p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-red-600" />
                  <span className="text-gray-700">Review premium changes for 2025</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-red-600" />
                  <span className="text-gray-700">Check for formulary changes affecting your medications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-red-600" />
                  <span className="text-gray-700">Review deductible and copay adjustments</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-red-600" />
                  <span className="text-gray-700">Note any provider network changes</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-red-600" />
                  <span className="text-gray-700">Check if your plan is being discontinued</span>
                </label>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
                <p className="text-red-800 font-semibold">⚠️ If you lost your ANOC or never received it, call your plan immediately!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">⚖️ Phase 3: Compare All Available Options</h2>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">🔎 Using Medicare.gov Plan Finder</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                The official Medicare Plan Finder tool is the most comprehensive way to compare all available options:
              </p>
              
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-purple-600" />
                  <span className="text-gray-700">Visit Medicare.gov and access Plan Finder</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-purple-600" />
                  <span className="text-gray-700">Enter your ZIP code and confirm Medicare eligibility</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-purple-600" />
                  <span className="text-gray-700">Add ALL your current medications with exact dosages</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-purple-600" />
                  <span className="text-gray-700">Select preferred pharmacies</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-purple-600" />
                  <span className="text-gray-700">Review all plan options (Medicare Advantage and Part D)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-purple-600" />
                  <span className="text-gray-700">Sort by total estimated annual cost</span>
                </label>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">🎯 Key Comparison Points:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-700">
                  <div>
                    <p>• Total annual cost (not just premium)</p>
                    <p>• Drug formulary coverage</p>
                    <p>• Doctor/hospital networks</p>
                  </div>
                  <div>
                    <p>• Pharmacy networks and mail-order</p>
                    <p>• Plan star ratings</p>
                    <p>• Prior authorization requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">📊 Manual Comparison Checklist</h3>
            <p className="text-gray-700 mb-4">For your top 3-5 plan choices, verify:</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">💊 Prescription Drug Coverage:</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">All medications are on formulary</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Drug tiers and associated costs</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Quantity limits or restrictions</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Prior authorization requirements</span>
                  </label>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🏥 Provider Networks:</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Primary care physician is in-network</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">All specialists are in-network</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Preferred hospitals are covered</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Network adequacy in your area</span>
                  </label>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">💰 Cost Comparison:</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Monthly premium amounts</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Annual deductibles</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Estimated annual drug costs</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Out-of-pocket maximums</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Making */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">✅ Phase 4: Make Your Decision</h2>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">🎯 Final Decision Criteria</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">Select the plan with the LOWEST total annual cost for your situation</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">Confirm all your medications will be covered</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">Verify your doctors are in-network</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">Check plan star ratings (aim for 4+ stars)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">Consider potential health changes for 2025</span>
                </label>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Pro Tip:</h4>
                <p className="text-blue-700 text-sm">
                  Don't just pick the lowest premium. The plan with a $30/month premium but $150 drug copays 
                  may cost more than a $80/month premium plan with $20 copays.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-600 mb-4">📝 Ready to Enroll?</h3>
            <p className="text-gray-700 mb-4">Before you finalize your enrollment:</p>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                <span className="text-gray-700">Double-check all plan details one final time</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                <span className="text-gray-700">Have your payment method ready (bank account or credit card)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                <span className="text-gray-700">Set aside 30-45 minutes to complete enrollment</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                <span className="text-gray-700">Ensure you're enrolling before the December 7 deadline</span>
              </label>
            </div>
          </div>
        </section>

        {/* Enrollment Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🚀 Phase 5: Complete Enrollment</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">📞 Enrollment Methods</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-indigo-600 text-xl">🌐</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Online</h4>
                  <p className="text-gray-600 text-sm">Medicare.gov or plan websites 24/7</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-indigo-600 text-xl">📞</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">By Phone</h4>
                  <p className="text-gray-600 text-sm">1-800-MEDICARE or plan directly</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-indigo-600 text-xl">👤</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">With Agent</h4>
                  <p className="text-gray-600 text-sm">Licensed insurance agent assistance</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">✅ Post-Enrollment Checklist</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-yellow-600" />
                  <span className="text-gray-700">Get confirmation number and enrollment effective date</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-yellow-600" />
                  <span className="text-gray-700">Save/print enrollment confirmation for your records</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-yellow-600" />
                  <span className="text-gray-700">Watch for new plan materials in the mail</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-yellow-600" />
                  <span className="text-gray-700">Contact current plan to confirm disenrollment (if changing)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-yellow-600" />
                  <span className="text-gray-700">Update pharmacy with new plan information</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-yellow-600" />
                  <span className="text-gray-700">Inform all doctors of your new plan</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-yellow-600" />
                  <span className="text-gray-700">Mark calendar for next year's Open Enrollment period</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Help CTA */}
        <section className="bg-blue-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Feeling Overwhelmed? We're Here to Help!</h2>
            <p className="text-blue-100 mb-6">
              Our licensed Medicare experts can walk through this entire checklist with you, compare all your options, 
              and help you enroll in the perfect plan. This service is completely FREE with no obligation.
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
                📧 Request Free Help
              </Link>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Licensed Medicare specialists • Free consultation • Available during Open Enrollment
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">❌ Common Open Enrollment Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">Procrastination</h3>
                <p className="text-red-700 text-sm">
                  Waiting until December means limited plan availability and rushed decisions.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">Premium-Only Focus</h3>
                <p className="text-red-700 text-sm">
                  The cheapest premium often has the highest out-of-pocket costs.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">Not Checking Networks</h3>
                <p className="text-red-700 text-sm">
                  Your doctors might not be covered by the new plan you're considering.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">Ignoring Drug Coverage</h3>
                <p className="text-red-700 text-sm">
                  Not verifying your medications are covered can cost thousands.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">Assuming "Same is Fine"</h3>
                <p className="text-red-700 text-sm">
                  Plans change every year - what worked in 2024 may not work in 2025.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">Missing the Deadline</h3>
                <p className="text-red-700 text-sm">
                  No exceptions to December 7 deadline - you'll be stuck for all of 2025.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 Related Open Enrollment Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/medicare-open-enrollment-2025" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Open Enrollment 2025</h3>
              <p className="text-gray-600 text-sm">
                Complete guide to Medicare Open Enrollment with deadlines and key information
              </p>
            </Link>
            <Link href="/medicare-2025-changes" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">2025 Medicare Changes</h3>
              <p className="text-gray-600 text-sm">
                All the important Medicare changes and updates for 2025
              </p>
            </Link>
            <Link href="/medicare-plan-comparison-tool" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Plan Comparison Tool</h3>
              <p className="text-gray-600 text-sm">
                Compare Medicare plans side-by-side to find the best option
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