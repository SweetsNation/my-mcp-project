import type { Metadata } from 'next';
import Link from 'next/link';
import ResourceLinking from '@/components/ResourceLinking';

export const metadata: Metadata = {
  title: 'Medicare Enrollment Periods Explained - El-Mag Insurance',
  description: 'Complete guide to Medicare enrollment periods including Annual Open Enrollment, Special Enrollment Periods, and when you can make changes to your coverage.',
  keywords: 'Medicare enrollment periods, Annual Open Enrollment, Special Enrollment Period, Medicare deadlines, when to enroll',
  alternates: {
    canonical: 'https://elmaginsurance.com/resources/enrollment-periods-explained',
  },
};

export default function EnrollmentPeriodsExplainedPage() {
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
            <span className="text-white">Enrollment Periods</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Medicare Enrollment Periods | Never Miss Critical Deadlines</h1>
          <p className="text-xl text-blue-100">Understanding when you can enroll, change, or switch your Medicare coverage</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Understanding Medicare enrollment periods is crucial for getting the coverage you need when you need it. 
              Missing enrollment deadlines can result in coverage gaps, late enrollment penalties, or having to wait 
              months before you can make changes to your plan.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Summary</h3>
              <p className="text-blue-800">
                There are several different enrollment periods for Medicare, each with specific rules about when you 
                can enroll, what changes you can make, and which plans are available to you.
              </p>
            </div>
          </section>

          {/* Initial Enrollment Period */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Initial Enrollment Period (IEP)</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">When: 7-month period around your 65th birthday</h3>
                  <p className="text-gray-600">3 months before, your birthday month, and 3 months after</p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">What You Can Do:</h4>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Enroll in Original Medicare (Parts A and B)</li>
              <li>Choose a Medicare Advantage plan (Part C)</li>
              <li>Add prescription drug coverage (Part D)</li>
              <li>Purchase a Medicare Supplement (Medigap) policy</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Important Notes:</h4>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>This is usually your only chance to buy any Medigap policy without medical underwriting</li>
              <li>If you delay enrollment without creditable coverage, you may face late enrollment penalties</li>
              <li>Coverage typically starts the first day of the month you turn 65 (or the month after if you enroll in months 4-7)</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Special Consideration:</strong> If you're still working and have employer health insurance, 
                you may be able to delay Medicare enrollment without penalties. Consult with HR or a Medicare advisor.
              </p>
            </div>
          </section>

          {/* Annual Open Enrollment */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Annual Open Enrollment Period (AEP)</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">When: October 15 - December 7, every year</h3>
                  <p className="text-gray-600">Changes take effect January 1st of the following year</p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">What You Can Do:</h4>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Switch from Original Medicare to Medicare Advantage (or vice versa)</li>
              <li>Switch from one Medicare Advantage plan to another</li>
              <li>Add, drop, or switch Medicare Part D prescription drug plans</li>
              <li>Add, drop, or switch Medicare Supplement insurance policies (with medical underwriting in most states)</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-900 mb-2">✓ Popular Changes</h5>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Switch MA plans for better benefits</li>
                  <li>• Add prescription drug coverage</li>
                  <li>• Change from HMO to PPO</li>
                  <li>• Find plans with lower costs</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h5 className="font-semibold text-red-900 mb-2">✗ Common Mistakes</h5>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Waiting until the last minute</li>
                  <li>• Not checking if doctors are in network</li>
                  <li>• Ignoring prescription drug coverage</li>
                  <li>• Focusing only on premium costs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Medicare Advantage Open Enrollment */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Medicare Advantage Open Enrollment Period</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">When: January 1 - March 31, every year</h3>
                  <p className="text-gray-600">Only available if you're already in a Medicare Advantage plan</p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">What You Can Do:</h4>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Switch from your current Medicare Advantage plan to another Medicare Advantage plan</li>
              <li>Drop your Medicare Advantage plan and return to Original Medicare</li>
              <li>Add a Part D prescription drug plan if you return to Original Medicare</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Note:</strong> You can only make <em>one</em> change during this period. Choose carefully, 
                as you'll need to wait until the next Annual Open Enrollment Period to make additional changes.
              </p>
            </div>
          </section>

          {/* Special Enrollment Periods */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Enrollment Periods (SEP)</h2>
            
            <p className="text-gray-700 mb-6">
              Special Enrollment Periods allow you to make changes to your Medicare coverage outside of the 
              regular enrollment periods when certain qualifying life events occur.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-4">Common Qualifying Events:</h4>
            
            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Moving to a New Area</h5>
                <p className="text-gray-600 text-sm">If you move outside your plan's service area or to an area where your plan offers different benefits</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Loss of Other Coverage</h5>
                <p className="text-gray-600 text-sm">Losing employer-sponsored health insurance, COBRA, or other creditable coverage</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Qualifying for Extra Help</h5>
                <p className="text-gray-600 text-sm">Becoming eligible for Medicare Extra Help (Low-Income Subsidy) or other assistance programs</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Plan Changes by Your Insurer</h5>
                <p className="text-gray-600 text-sm">Your plan is discontinued, reduces its service area, or violates its contract with Medicare</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Chronic Care Special Needs Plan (C-SNP) Eligibility</h5>
                <p className="text-gray-600 text-sm">Being diagnosed with a qualifying chronic condition</p>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">How SEPs Work:</h4>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Usually last 2-3 months from the qualifying event date</li>
              <li>You must provide documentation proving the qualifying event</li>
              <li>Changes typically take effect the first of the month after you enroll</li>
              <li>Some SEPs are ongoing (like Extra Help eligibility)</li>
            </ul>
          </section>

          {/* General Enrollment Period */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">General Enrollment Period</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">When: January 1 - March 31, every year</h3>
                  <p className="text-gray-600">For people who missed their Initial Enrollment Period</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-red-800">
                <strong>Warning:</strong> If you enroll during this period, you may have to pay late enrollment 
                penalties that last as long as you have Medicare coverage. Coverage starts July 1st.
              </p>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">What You Can Do:</h4>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Enroll in Medicare Part B (if you don't already have it)</li>
              <li>Enroll in a Medicare Part D prescription drug plan</li>
            </ul>
          </section>

          {/* Planning Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Medicare Enrollment Timeline</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Medicare Year at a Glance</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-20 text-sm font-medium text-gray-600">Jan-Mar</div>
                  <div className="flex-1 bg-purple-200 h-2 rounded mr-4"></div>
                  <div className="text-sm">MA Open Enrollment & General Enrollment</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-20 text-sm font-medium text-gray-600">Apr-Sep</div>
                  <div className="flex-1 bg-gray-200 h-2 rounded mr-4"></div>
                  <div className="text-sm">SEPs only (qualifying events)</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-20 text-sm font-medium text-gray-600">Oct-Dec</div>
                  <div className="flex-1 bg-blue-200 h-2 rounded mr-4"></div>
                  <div className="text-sm">Annual Open Enrollment Period</div>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Best Practices for Enrollment Planning:</h4>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Start Early:</strong> Begin researching plans 4-6 weeks before enrollment periods</li>
              <li><strong>Compare Annually:</strong> Review your coverage every year during AEP</li>
              <li><strong>Check Networks:</strong> Verify your doctors and pharmacies are still in-network</li>
              <li><strong>Review Medications:</strong> Make sure your prescriptions are covered</li>
              <li><strong>Consider Total Costs:</strong> Look beyond premiums to deductibles, copays, and out-of-pocket maximums</li>
            </ul>
          </section>

          {/* Getting Help */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Help with Enrollment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Free Resources</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Medicare.gov plan finder
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    1-800-MEDICARE helpline
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    State Health Insurance Programs (SHIP)
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Professional Help</h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Licensed insurance agents
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Medicare brokers
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Insurance company representatives
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Resource Linking */}
          <ResourceLinking 
            currentResource="enrollment-periods-explained"
            currentCategory="Enrollment"
            userContext="general"
            showTools={true}
            maxResources={4}
            maxTools={3}
          />

          {/* Call to Action */}
          <section className="bg-gray-900 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Understanding Your Enrollment Options?</h2>
            <p className="text-gray-300 mb-6">
              Our licensed Medicare experts can help you understand which enrollment period applies to your 
              situation and guide you through the enrollment process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center inline-block">
                Get Free Consultation
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