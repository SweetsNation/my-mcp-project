import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medicare Cost Calculator 2025 - Compare Medicare Advantage & Supplement Plans',
  description: 'Calculate your Medicare costs with our free 2025 Medicare cost calculator. Compare Medicare Advantage vs Medicare Supplement plans, premiums, deductibles, and out-of-pocket costs to find the best Medicare coverage.',
  keywords: 'Medicare cost calculator, Medicare Advantage cost calculator, Medicare Supplement cost calculator, Medicare plan comparison tool, Medicare premium calculator, Medicare out-of-pocket costs'
};

export default function CostCalculator() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-8 text-center">
          Medicare Cost Calculator 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Calculate your Medicare costs and compare Medicare Advantage vs Medicare Supplement plans.
            Get personalized estimates for premiums, deductibles, co-pays, and total out-of-pocket costs
            to find the best Medicare coverage for your needs and budget.
          </p>
        </div>

        <section className="mb-16 bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            💡 How the Medicare Cost Calculator Works
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-green-700 mb-3">What You'll Calculate</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• Monthly premium costs</li>
                <li>• Annual deductibles</li>
                <li>• Co-pays and coinsurance</li>
                <li>• Out-of-pocket maximums</li>
                <li>• Prescription drug costs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-green-700 mb-3">Information You'll Need</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• Your ZIP code</li>
                <li>• Current medications</li>
                <li>• Preferred doctors/hospitals</li>
                <li>• Annual income (for subsidy eligibility)</li>
                <li>• Health conditions and usage</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Medicare Cost Calculator Tools
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">Medicare Advantage Calculator</h3>
              <p className="text-gray-700 mb-4">
                Calculate costs for Medicare Advantage plans including premiums,
                co-pays, and out-of-pocket maximums.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Compare multiple MA plans</li>
                <li>• Include prescription drug costs</li>
                <li>• Factor in extra benefits</li>
                <li>• Estimate annual total costs</li>
              </ul>
              <Link href="/contact" className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
                Calculate MA Costs
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">Medicare Supplement Calculator</h3>
              <p className="text-gray-700 mb-4">
                Calculate costs for Medicare Supplement (Medigap) plans
                plus Part D prescription drug coverage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Compare Medigap plan types</li>
                <li>• Add Part D drug plan costs</li>
                <li>• Factor in Medicare Part B costs</li>
                <li>• Calculate total monthly premiums</li>
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                Calculate Medigap Costs
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Side-by-Side Comparison</h3>
              <p className="text-gray-700 mb-4">
                Compare Medicare Advantage vs Medicare Supplement
                costs side-by-side for your specific situation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• MA vs Medigap comparison</li>
                <li>• Factor in all costs</li>
                <li>• Include provider access</li>
                <li>• Personalized recommendations</li>
              </ul>
              <Link href="/contact" className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors">
                Compare Options
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            2025 Medicare Cost Basics
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Standard Medicare Costs (2025)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Medicare Part B Premium:</span>
                  <span className="font-semibold">$185/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Medicare Part B Deductible:</span>
                  <span className="font-semibold">$240/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Medicare Part A Deductible:</span>
                  <span className="font-semibold">$1,632/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Medicare Part D Late Penalty:</span>
                  <span className="font-semibold">1% per month</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-medium text-green-700 mb-4">Medicare Advantage Ranges</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monthly Premiums:</span>
                  <span className="font-semibold">$0 - $200+</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Deductibles:</span>
                  <span className="font-semibold">$0 - $500</span>
                </div>
                <div className="flex justify-between">
                  <span>Out-of-Pocket Maximum:</span>
                  <span className="font-semibold">$3,000 - $8,850</span>
                </div>
                <div className="flex justify-between">
                  <span>Primary Care Copay:</span>
                  <span className="font-semibold">$0 - $50</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Cost Factors to Consider
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-green-700 mb-4">Monthly Costs</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Medicare Part B premium ($185/month)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Medicare Advantage plan premium
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Medigap plan premium (if chosen)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Part D prescription drug plan premium
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Usage-Based Costs</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Doctor visit co-pays
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Specialist visit costs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Hospital admission costs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Prescription medication costs
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-yellow-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-yellow-800 mb-6 text-center">
            Cost Calculation Scenarios
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Healthy & Active</h3>
              <p className="text-sm text-gray-700 mb-3">
                Minimal healthcare usage, few medications
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Low premium MA plan ($0-$30/month)</li>
                <li>• Basic prescription coverage</li>
                <li>• Annual costs: $2,000-$4,000</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Moderate Health Needs</h3>
              <p className="text-sm text-gray-700 mb-3">
                Regular doctor visits, some specialist care
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Mid-tier MA plan ($30-$80/month)</li>
                <li>• Enhanced drug coverage</li>
                <li>• Annual costs: $4,000-$7,000</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">High Healthcare Usage</h3>
              <p className="text-sm text-gray-700 mb-3">
                Chronic conditions, multiple medications
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Premium MA or Medigap plan</li>
                <li>• Comprehensive drug coverage</li>
                <li>• Annual costs: $6,000-$10,000+</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Interactive Cost Calculator Features
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-green-700 mb-4">Personalization Options</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Enter your ZIP code for local plans
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Add your current medications
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Select preferred doctors/hospitals
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Estimate your healthcare usage
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-blue-700 mb-4">Comparison Features</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Side-by-side plan comparisons
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Total cost projections
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Savings opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Best value recommendations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
            Get Professional Help with Medicare Costs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Free Medicare Counseling</h3>
              <p className="text-gray-600 mb-4">Local SHIP counselors provide free, unbiased Medicare help</p>
              <Link href="/medicare-advantage" className="text-green-600 hover:text-green-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Licensed Insurance Agent</h3>
              <p className="text-gray-600 mb-4">Get personalized Medicare cost analysis and recommendations</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Speak with Agent →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Medicare.gov Tools</h3>
              <p className="text-gray-600 mb-4">Official Medicare Plan Finder and cost comparison tools</p>
              <a href="https://www.medicare.gov/plan-compare/" className="text-purple-600 hover:text-purple-800 underline">
                Medicare.gov Tools →
              </a>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-green-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Start Calculating Your Medicare Costs Today
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Get personalized Medicare cost estimates and find the most affordable plan
            that meets your healthcare needs and budget requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Get Cost Estimate
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-green-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}