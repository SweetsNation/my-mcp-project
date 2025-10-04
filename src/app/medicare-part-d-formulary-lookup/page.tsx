import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicare Part D Formulary Lookup Guide 2025 | Check Drug Coverage',
  description: 'Learn how to use Medicare Part D formulary lookup tools to check if your medications are covered. Find drug tiers, restrictions, and coverage details for all plans.',
  keywords: 'Medicare Part D formulary lookup, check drug coverage Medicare, Medicare formulary search, Part D drug list, Medicare prescription coverage lookup',
  openGraph: {
    title: 'Medicare Part D Formulary Lookup Guide 2025',
    description: 'Complete guide to checking Medicare Part D drug coverage using formulary lookup tools. Ensure your medications are covered before choosing a plan.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-part-d-formulary-lookup',
  },
}

export default function PartDFormularyLookupPage() {
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://elmaginsurance.com/medicare-part-d-formulary-lookup',
        url: 'https://elmaginsurance.com/medicare-part-d-formulary-lookup',
        name: 'Medicare Part D Formulary Lookup Guide 2025 | Check Drug Coverage',
        description: 'Learn how to use Medicare Part D formulary lookup tools to check if your medications are covered. Find drug tiers, restrictions, and coverage details for all plans.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': 'https://elmaginsurance.com/#website'
        },
        breadcrumb: {
          '@id': 'https://elmaginsurance.com/medicare-part-d-formulary-lookup#breadcrumb'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://elmaginsurance.com/medicare-part-d-formulary-lookup#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://elmaginsurance.com'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Medicare Part D',
            item: 'https://elmaginsurance.com/medicare-part-d'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Formulary Lookup',
            item: 'https://elmaginsurance.com/medicare-part-d-formulary-lookup'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://elmaginsurance.com/medicare-part-d-formulary-lookup#service',
        name: 'Medicare Part D Formulary Lookup Services',
        description: 'Comprehensive guidance for checking Medicare Part D drug coverage using formulary lookup tools. Expert assistance with medication coverage verification.',
        provider: {
          '@type': 'Organization',
          name: 'El-Mag Insurance',
          url: 'https://elmaginsurance.com'
        },
        serviceType: 'Medicare Part D Drug Coverage Verification',
        areaServed: {
          '@type': 'Country',
          name: 'United States'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://elmaginsurance.com/medicare-part-d-formulary-lookup#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I check if my drug is covered by Medicare Part D?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can check if your medication is covered by using Medicare\'s official Plan Finder tool at Medicare.gov or by contacting the specific Part D plan directly. Enter your drug name and dosage to see which plans cover it and at what cost tier. Each Part D plan maintains its own formulary (list of covered drugs), so coverage can vary significantly between plans. It\'s important to check formularies before enrolling to ensure your medications are covered.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are formulary tiers in Medicare Part D?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Formulary tiers are categories that determine your out-of-pocket costs for medications. Most Part D plans use 5-6 tiers: Tier 1 (preferred generic drugs, lowest cost), Tier 2 (generic drugs), Tier 3 (preferred brand drugs), Tier 4 (non-preferred brand drugs), Tier 5 (specialty drugs, highest cost), and sometimes Tier 6 (select care drugs). Lower tiers generally have lower copayments or coinsurance. Your medication\'s tier placement significantly impacts your costs.'
            }
          },
          {
            '@type': 'Question',
            name: 'What if my medication is not on the formulary?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If your medication is not on your Part D plan\'s formulary, you have several options: 1) Ask your doctor about covered alternatives, 2) Request a formulary exception from your plan (requires medical justification from your doctor), 3) Pay full price out-of-pocket, or 4) Switch to a different Part D plan during the next enrollment period that covers your medication. Formulary exceptions and appeals are available if your doctor determines the drug is medically necessary and no covered alternatives are appropriate.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do Medicare Part D formularies change during the year?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Medicare Part D plans can make limited changes to their formularies during the year, but they must provide 60 days advance notice for most changes. If your medication is removed from the formulary or moved to a higher tier mid-year, you have the right to request an exception or appeal the decision. You may also qualify for a Special Enrollment Period to switch plans if your medication is no longer covered. Plans can add drugs to the formulary at any time without notice.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are prior authorization and step therapy requirements?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Prior authorization requires your doctor to get approval from the Part D plan before the drug will be covered, demonstrating medical necessity. Step therapy requires you to try less expensive drugs first before the plan will cover a more costly medication. These utilization management tools help control costs but can delay access to medications. If you and your doctor believe these requirements are inappropriate for your situation, you can request an exception or expedited appeal.'
            }
          },
          {
            '@type': 'Question',
            name: 'How often should I review my Part D formulary?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You should review your Part D plan\'s formulary annually during the October 15 - December 7 Annual Enrollment Period, as formularies can change significantly from year to year. Also review the formulary if you\'re prescribed a new medication, if your existing medications change tiers or coverage status, or if you receive an Annual Notice of Change (ANOC) from your plan indicating formulary modifications. Regular reviews ensure your medications remain covered at the lowest possible cost.'
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medicare Part D Formulary Lookup Guide 2025
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Learn how to check if your medications are covered by Medicare Part D plans using formulary lookup tools. 
            Essential information for choosing the right prescription drug plan.
          </p>
        </div>

        {/* Quick Access Tools */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-blue-800">Official Medicare Tool</h3>
            <p className="text-blue-700 mb-4">Use Medicare&apos;s official Plan Finder to check drug coverage across all available plans</p>
            <a 
              href="https://www.medicare.gov/plan-compare" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Medicare Plan Finder
            </a>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-green-800">Get Expert Help</h3>
            <p className="text-green-700 mb-4">Our Medicare specialists can check drug coverage and find the best plan for your medications</p>
            <Link 
              href="/contact"
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>

        {/* What is a Formulary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Medicare Part D Formulary?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                A formulary is the official list of prescription drugs covered by a Medicare Part D plan. 
                Each plan has its own formulary, which includes both brand-name and generic medications.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Formularies are organized into tiers, with each tier having different cost-sharing amounts. 
                Understanding your plan&apos;s formulary is crucial for managing prescription costs.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-800 font-semibold">Important:</p>
                <p className="text-yellow-700 text-sm">
                  If your medication isn&apos;t on a plan&apos;s formulary, you&apos;ll pay the full cost unless you get an exception.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Formulary Basics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Updated annually:</strong> Formularies can change each year
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Plan-specific:</strong> Each insurer has different drug lists
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Tier system:</strong> Drugs organized by cost levels
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Restrictions may apply:</strong> Some drugs have coverage limitations
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Drug Tier System */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Drug Tiers</h2>
          <p className="text-gray-600 mb-6">
            Medicare Part D plans organize medications into tiers, with each tier having different copay or coinsurance amounts.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Tier 1 - Generic</h3>
              <p className="text-green-700 text-sm mb-3">
                Lowest-cost generic medications
              </p>
              <div className="text-green-600">
                <p className="font-semibold">Typical Copay: $3-$15</p>
                <p className="text-xs">Most affordable option</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Tier 2 - Preferred Brand</h3>
              <p className="text-blue-700 text-sm mb-3">
                Brand-name drugs preferred by the plan
              </p>
              <div className="text-blue-600">
                <p className="font-semibold">Typical Copay: $20-$50</p>
                <p className="text-xs">Lower cost brand options</p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Tier 3 - Non-Preferred Brand</h3>
              <p className="text-purple-700 text-sm mb-3">
                Brand-name drugs not on preferred list
              </p>
              <div className="text-purple-600">
                <p className="font-semibold">Typical Copay: $50-$100</p>
                <p className="text-xs">Higher cost brands</p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Tier 4 - Specialty</h3>
              <p className="text-orange-700 text-sm mb-3">
                High-cost specialty medications
              </p>
              <div className="text-orange-600">
                <p className="font-semibold">Coinsurance: 25%-50%</p>
                <p className="text-xs">Most expensive tier</p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Tier 5 - Premium Specialty</h3>
              <p className="text-red-700 text-sm mb-3">
                Highest-cost specialty drugs
              </p>
              <div className="text-red-600">
                <p className="font-semibold">Coinsurance: 25%-33%</p>
                <p className="text-xs">Very high-cost medications</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Not Covered</h3>
              <p className="text-gray-700 text-sm mb-3">
                Medications not on formulary
              </p>
              <div className="text-gray-600">
                <p className="font-semibold">Cost: 100% (Full Price)</p>
                <p className="text-xs">Unless exception granted</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Formulary Lookup */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use Medicare Part D Formulary Lookup Tools</h2>
          <div className="space-y-8">
            
            {/* Step 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Gather Your Medication Information</h3>
                  <p className="text-gray-700 mb-4">
                    Before starting your formulary search, collect complete information about all medications you take:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        Exact medication names (generic and brand)
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        Dosage strengths (mg, mcg, etc.)
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        Dosage forms (tablet, capsule, liquid)
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        Quantities you need per month
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        Any special formulations
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        Your prescription bottles for reference
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Access the Medicare Plan Finder</h3>
                  <p className="text-gray-700 mb-4">
                    Visit Medicare.gov&apos;s official Plan Finder tool for the most accurate and up-to-date formulary information:
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-green-800 mb-2">What You&apos;ll Need:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Your ZIP code</li>
                      <li>• List of medications</li>
                      <li>• Preferred pharmacies</li>
                      <li>• Medicare number (if available)</li>
                    </ul>
                  </div>
                  <a 
                    href="https://www.medicare.gov/plan-compare" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Go to Medicare Plan Finder
                  </a>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Enter Your Medications</h3>
                  <p className="text-gray-700 mb-4">
                    Use the drug lookup feature to add each of your medications to your profile:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-purple-800 text-sm">Search Tips:</h4>
                      <ul className="text-purple-700 text-xs space-y-1 mt-1">
                        <li>• Type the first few letters and select from the dropdown</li>
                        <li>• Choose the exact strength and form you take</li>
                        <li>• Add all medications, including over-the-counter if prescribed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Review Coverage Details</h3>
                  <p className="text-gray-700 mb-4">
                    For each plan, check the detailed formulary information for your medications:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">Coverage Information:</h4>
                      <ul className="text-orange-700 text-sm space-y-1">
                        <li>• Drug tier level</li>
                        <li>• Estimated copay amount</li>
                        <li>• Coverage restrictions</li>
                        <li>• Quantity limits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">Red Flags to Watch:</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Prior authorization required</li>
                        <li>• Step therapy mandated</li>
                        <li>• Not covered by plan</li>
                        <li>• Quantity restrictions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Coverage Restrictions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Coverage Restrictions</h2>
          <p className="text-gray-600 mb-6">
            Even if your medication is on a formulary, there may be restrictions that affect your access or cost.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Prior Authorization (PA)</h3>
                <p className="text-yellow-700 text-sm mb-3">
                  Your doctor must get plan approval before you can get the medication covered.
                </p>
                <div className="text-yellow-600 text-xs">
                  <p><strong>Timeline:</strong> Usually 1-3 business days</p>
                  <p><strong>Process:</strong> Doctor submits medical justification</p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Step Therapy (ST)</h3>
                <p className="text-red-700 text-sm mb-3">
                  You must try a cheaper, preferred drug first before the plan covers the prescribed medication.
                </p>
                <div className="text-red-600 text-xs">
                  <p><strong>Requirement:</strong> Try lower-cost alternatives first</p>
                  <p><strong>Exception:</strong> If cheaper drugs don&apos;t work or cause side effects</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Quantity Limits (QL)</h3>
                <p className="text-blue-700 text-sm mb-3">
                  The plan limits how much of the medication you can get at one time.
                </p>
                <div className="text-blue-600 text-xs">
                  <p><strong>Example:</strong> 30 pills per month instead of 90</p>
                  <p><strong>Override:</strong> Doctor can request higher quantities</p>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Age/Gender Restrictions</h3>
                <p className="text-purple-700 text-sm mb-3">
                  Some medications are only covered for specific age groups or genders.
                </p>
                <div className="text-purple-600 text-xs">
                  <p><strong>Common:</strong> Pediatric or women&apos;s health medications</p>
                  <p><strong>Alternative:</strong> Generic or different formulation may be covered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Lookup Methods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Alternative Formulary Lookup Methods</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Individual Plan Websites</h3>
              <p className="text-gray-700 mb-4">
                Most Medicare Part D plan sponsors provide formulary lookup tools on their websites:
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <strong>Pros:</strong> Plan-specific details, may be more current
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <div>
                    <strong>Cons:</strong> Must check each plan separately
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-blue-800 mb-2">Common Plan Sponsors:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• AARP Medicare Rx Plans</li>
                  <li>• Humana Prescription Drug Plans</li>
                  <li>• CVS Health Medicare Part D Plans</li>
                  <li>• Cigna Medicare Part D Plans</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Pharmacy Resources</h3>
              <p className="text-gray-700 mb-4">
                Your pharmacist can help check coverage and suggest alternatives:
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <strong>Expert advice:</strong> Pharmacists understand formularies
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <strong>Alternative suggestions:</strong> Generic or therapeutic substitutes
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <strong>Real-time pricing:</strong> Actual costs at that pharmacy
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-green-800 mb-2">When to Ask Your Pharmacist:</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Drug not covered by your plan</li>
                  <li>• High copay for your medication</li>
                  <li>• Prior authorization required</li>
                  <li>• Looking for generic alternatives</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What to Do If Not Covered */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What If Your Medication Isn&apos;t Covered?</h2>
          <div className="space-y-6">
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Options When Drugs Aren&apos;t on Formulary</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-3">Immediate Solutions:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">1.</span>
                      <span>Ask about generic alternatives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">2.</span>
                      <span>Look for therapeutic equivalents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">3.</span>
                      <span>Check manufacturer discount programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">4.</span>
                      <span>Consider different plan during Open Enrollment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">Exception Requests:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">1.</span>
                      <span>Formulary exception (add drug to list)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">2.</span>
                      <span>Tiering exception (lower copay tier)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">3.</span>
                      <span>Medical necessity documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">4.</span>
                      <span>Appeal process if denied</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Exception Request Process</h3>
              <p className="text-yellow-700 mb-4">
                Your doctor can request an exception for non-formulary drugs or lower tier placement:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-800">Step 1: Doctor Submits</h4>
                  <p className="text-yellow-700">Medical justification and alternative drug failures</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800">Step 2: Plan Review</h4>
                  <p className="text-yellow-700">Plan has 72 hours for standard requests</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800">Step 3: Decision</h4>
                  <p className="text-yellow-700">Approved, denied, or additional information needed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Formulary Lookup Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-4">✓ Do This</h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Check all your medications before choosing a plan
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Review formularies annually during Open Enrollment
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Look at both coverage and restrictions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Consider future medication needs
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Compare total costs, not just premiums
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Ask your doctor about generic alternatives
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-4">✗ Avoid This</h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Choosing a plan without checking drug coverage
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Assuming last year&apos;s formulary is the same
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Only looking at Tier 1 generic coverage
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Ignoring coverage restrictions and limits
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Focusing only on monthly premium costs
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Waiting until you need a prescription to check coverage
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Need Help with Medicare Part D Formulary Research?</h2>
          <p className="text-blue-100 mb-6">
            Our Medicare specialists can check drug coverage across all available plans and help you find the plan 
            with the best formulary for your specific medications. This service is completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Get Free Help
            </Link>
            <a
              href="tel:331-343-2584"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Call 331-E-HEALTH
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Licensed Medicare experts • Formulary research • Free consultation
          </p>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/medicare-part-d" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Medicare Part D Guide</h3>
              <p className="text-gray-600 text-sm">
                Complete guide to Medicare Part D prescription drug plans and enrollment
              </p>
            </Link>
            <Link href="/medicare-part-d/costs/comparison" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Part D Cost Comparison</h3>
              <p className="text-gray-600 text-sm">
                Compare Part D plan costs side-by-side to find the best value
              </p>
            </Link>
            <Link href="/medicare-extra-help" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Extra Help Program</h3>
              <p className="text-gray-600 text-sm">
                Learn about prescription drug cost assistance for low-income beneficiaries
              </p>
            </Link>
          </div>
        </section>

        <nav className="text-sm text-gray-600">
          <Link href="/medicare-part-d" className="hover:text-blue-600">
            ← Back to Medicare Part D
          </Link>
        </nav>
      </div>
    </main>
  )
}