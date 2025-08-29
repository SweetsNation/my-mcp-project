import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Medicare Prescription Drug Coverage Guide - El-Mag Insurance',
  description: 'Complete guide to Medicare Part D prescription drug coverage, formularies, and costs. Expert guidance from El-Mag Insurance.',
  keywords: 'Medicare Part D, prescription drug coverage, formulary, drug costs, Medicare Advantage drug benefits',
};

export default function PrescriptionDrugCoveragePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Resources', href: '/resources' },
            { label: 'Prescription Drug Coverage', href: '/resources/prescription-drug-coverage' }
          ]} 
        />
        
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Medicare Prescription Drug Coverage | Save on Medications
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Understanding Medicare Part D prescription drug coverage, including formularies, coverage phases, and how to save on your medications.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Medicare Drug Coverage</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Medicare Advantage with Drug Coverage</h3>
                  <p className="text-gray-700 mb-3">
                    Most Medicare Advantage plans include prescription drug coverage (Part D) built into the plan.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Integrated medical and drug benefits</li>
                    <li>One plan, one card, one premium</li>
                    <li>Often includes additional drug benefits</li>
                    <li>May have preferred pharmacy networks</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Stand-Alone Part D Plans</h3>
                  <p className="text-gray-700 mb-3">
                    Separate prescription drug plans that work alongside Original Medicare.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Add to Original Medicare (Parts A & B)</li>
                    <li>Separate premium and deductible</li>
                    <li>Wide variety of plan options</li>
                    <li>Can be changed annually</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Understanding Drug Formularies</h2>
              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">What is a Formulary?</h3>
                <p className="text-gray-700 mb-4">
                  A formulary is the list of prescription drugs covered by your Medicare plan. Plans organize drugs into different "tiers" with different costs.
                </p>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-800 mb-3">Standard Drug Tiers</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium text-gray-800">Tier 1 - Generic Drugs</span>
                      <span className="text-green-600 font-semibold">Lowest Cost</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium text-gray-800">Tier 2 - Preferred Brand Drugs</span>
                      <span className="text-blue-600 font-semibold">Low Cost</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium text-gray-800">Tier 3 - Non-Preferred Brand Drugs</span>
                      <span className="text-yellow-600 font-semibold">Moderate Cost</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium text-gray-800">Tier 4 - Specialty Drugs</span>
                      <span className="text-orange-600 font-semibold">High Cost</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">Tier 5 - Premium Specialty</span>
                      <span className="text-red-600 font-semibold">Highest Cost</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Important Formulary Facts</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Formularies can change during the year with proper notice</li>
                  <li>Plans must cover at least two drugs in most therapeutic categories</li>
                  <li>Some drugs require prior authorization or step therapy</li>
                  <li>You can request formulary exceptions if your drug isn't covered</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2025 Part D Coverage Phases</h2>
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <h3 className="font-semibold text-green-800 mb-2">Phase 1: Deductible Period</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 text-sm mb-2">
                        You pay the full cost until you reach the plan's deductible.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                        <li>Maximum deductible: $545 in 2025</li>
                        <li>Many plans have $0 deductibles</li>
                        <li>Some drugs may be exempt</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <h4 className="font-medium text-gray-800 text-sm">Typical Costs:</h4>
                      <p className="text-xs text-gray-600">100% of drug cost until deductible is met</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Phase 2: Initial Coverage</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 text-sm mb-2">
                        You pay copays or coinsurance until total drug costs reach $5,030.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                        <li>Plan pays most of the cost</li>
                        <li>Costs vary by drug tier</li>
                        <li>Preferred pharmacies may offer lower costs</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <h4 className="font-medium text-gray-800 text-sm">Typical Costs:</h4>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>Generic: $0-$10</div>
                        <div>Preferred Brand: $20-$50</div>
                        <div>Non-Preferred: $50-$100</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                  <h3 className="font-semibold text-orange-800 mb-2">Phase 3: Coverage Gap (Donut Hole)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 text-sm mb-2">
                        You pay no more than 25% for brand and generic drugs.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                        <li>Applies from $5,030 to $8,000 in out-of-pocket costs</li>
                        <li>Manufacturer discounts count toward your out-of-pocket costs</li>
                        <li>Much improved from previous years</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <h4 className="font-medium text-gray-800 text-sm">Your Costs:</h4>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>Brand Names: 25%</div>
                        <div>Generics: 25%</div>
                        <div>Manufacturer pays 70% on brands</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Phase 4: Catastrophic Coverage</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 text-sm mb-2">
                        After $8,000 in out-of-pocket costs, you pay very little for covered drugs.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                        <li>Applies for the rest of the calendar year</li>
                        <li>Lowest costs of any phase</li>
                        <li>Resets January 1st each year</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <h4 className="font-medium text-gray-800 text-sm">Your Costs:</h4>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>Generic: $4.50 or 5%</div>
                        <div>Brand: $11.20 or 5%</div>
                        <div>Whichever is greater</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pharmacy Networks</h2>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-indigo-800 mb-3">Network Pharmacies</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Plans contract with pharmacies to provide covered drugs at negotiated rates.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>In-network pharmacies offer lower costs</li>
                      <li>Most major chains are included</li>
                      <li>Some independent pharmacies participate</li>
                      <li>Mail-order options often available</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-indigo-800 mb-3">Preferred Pharmacies</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Special partnerships that offer even lower costs for covered drugs.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Additional savings on copays</li>
                      <li>May include major chains like CVS, Walgreens</li>
                      <li>Limited geographic availability</li>
                      <li>Check availability in your area</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Special Drug Coverage Rules</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Prior Authorization</h3>
                  <p className="text-gray-700 text-sm">
                    Some drugs require approval from your plan before they'll be covered. Your doctor must show the drug is medically necessary.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Step Therapy</h3>
                  <p className="text-gray-700 text-sm">
                    You may need to try a lower-cost drug first before the plan will cover a more expensive alternative. If the first drug doesn't work, you can get coverage for the preferred drug.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Quantity Limits</h3>
                  <p className="text-gray-700 text-sm">
                    Plans may limit how much of a drug you can get at one time. This is often used for drugs that can be dangerous in large quantities or are commonly misused.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Save on Prescription Drugs</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Cost-Saving Strategies</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                      <li>Choose generic drugs when available</li>
                      <li>Use preferred pharmacies</li>
                      <li>Consider mail-order for maintenance drugs</li>
                      <li>Ask about 90-day supplies</li>
                      <li>Review your plan annually during Open Enrollment</li>
                      <li>Check for manufacturer coupons or programs</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Extra Help Programs</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                      <li><strong>Low Income Subsidy (LIS):</strong> Reduces premiums, deductibles, and copays</li>
                      <li><strong>State Pharmacy Programs:</strong> Additional assistance in some states</li>
                      <li><strong>Manufacturer Programs:</strong> Patient assistance for specific drugs</li>
                      <li><strong>340B Programs:</strong> Discounts at qualifying health centers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Choosing the Right Drug Coverage</h2>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Key Questions to Ask</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">About Your Medications:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Are my current drugs covered?</li>
                      <li>What tier are they on?</li>
                      <li>Are there restrictions or requirements?</li>
                      <li>What will I pay for each drug?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">About Pharmacies:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Is my pharmacy in the network?</li>
                      <li>Are there preferred pharmacies near me?</li>
                      <li>Does the plan offer mail-order?</li>
                      <li>What are the pharmacy costs differences?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Medicare Drug Coverage Gaps</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <h3 className="font-semibold text-red-800 mb-3">⚠️ What Medicare Doesn't Cover</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Never Covered:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Over-the-counter medications</li>
                      <li>Vitamins and supplements</li>
                      <li>Drugs for weight loss or gain</li>
                      <li>Fertility drugs</li>
                      <li>Cosmetic purposes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Limited Coverage:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Benzodiazepines (anxiety medications)</li>
                      <li>Barbiturates (except for specific conditions)</li>
                      <li>Some cough and cold medications</li>
                      <li>Medical devices and supplies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-blue-600 text-white p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Get Personalized Drug Coverage Help</h2>
              <p className="mb-4">
                Finding the right prescription drug coverage can be complex. Our licensed agents can help you compare plans, check your drug coverage, and estimate your annual costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Get Drug Coverage Analysis
                </Link>
                <Link 
                  href="tel:331-343-2584" 
                  className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Call Now: 331-343-2584
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}