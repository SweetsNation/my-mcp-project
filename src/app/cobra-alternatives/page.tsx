import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'COBRA Alternatives 2025 - Medicare, ACA Plans & Healthcare Options',
  description: 'Discover affordable COBRA alternatives including Medicare Advantage, ACA marketplace plans, and short-term medical insurance. Compare costs, coverage, and find the best health insurance option after job loss.',
  keywords: 'COBRA alternatives, Medicare after job loss, ACA marketplace plans, health insurance alternatives, COBRA replacement, affordable health coverage, Medicare early retirement'
};

export default function COBRAAlternatives() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-8 text-center">
          COBRA Alternatives 2025: Better Health Insurance Options
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Don't get stuck with expensive COBRA coverage. Explore Medicare Advantage, ACA marketplace plans,
            short-term medical insurance, and other affordable health insurance alternatives
            that could save you thousands while providing comprehensive coverage.
          </p>
        </div>

        <section className="mb-16 bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-400">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
            💡 Why Look for COBRA Alternatives?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-yellow-700 mb-3">COBRA Can Be Expensive</h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• Pay 100% of premium + 2% admin fee</li>
                <li>• Average cost: $500-$1,500+ per month</li>
                <li>• No employer contribution</li>
                <li>• Limited to 18-36 months</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-yellow-700 mb-3">Better Options Available</h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• Medicare for those 65+</li>
                <li>• ACA plans with subsidies</li>
                <li>• Short-term coverage options</li>
                <li>• Spouse's employer plan</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
            Top COBRA Alternatives
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
              <h3 className="text-2xl font-medium text-indigo-700 mb-4">Medicare Advantage (65+)</h3>
              <p className="text-gray-700 mb-4">
                If you're 65 or older, Medicare is often the best alternative to COBRA
                with comprehensive coverage and potential cost savings.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium plans available</li>
                <li>• Prescription drug coverage included</li>
                <li>• No waiting periods</li>
                <li>• Nationwide coverage</li>
              </ul>
              <div className="text-xs text-indigo-600 font-medium">
                Best for: Anyone 65+ or disabled
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">ACA Marketplace Plans</h3>
              <p className="text-gray-700 mb-4">
                Healthcare.gov plans with potential subsidies that can significantly
                reduce costs compared to COBRA coverage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Income-based subsidies available</li>
                <li>• Essential health benefits coverage</li>
                <li>• Special enrollment after job loss</li>
                <li>• Multiple plan options</li>
              </ul>
              <div className="text-xs text-green-600 font-medium">
                Best for: Most people under 65
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-2xl font-medium text-orange-700 mb-4">Short-Term Medical</h3>
              <p className="text-gray-700 mb-4">
                Temporary coverage for gaps between jobs or while waiting for
                other insurance to begin.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Lower monthly premiums</li>
                <li>• Quick approval process</li>
                <li>• Coverage up to 364 days</li>
                <li>• Bridge coverage solution</li>
              </ul>
              <div className="text-xs text-orange-600 font-medium">
                Best for: Temporary gaps in coverage
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Spouse's Employer Plan</h3>
              <p className="text-gray-700 mb-4">
                Job loss qualifies as a life event for special enrollment
                in your spouse's workplace health insurance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Employer-subsidized premiums</li>
                <li>• Comprehensive coverage</li>
                <li>• Family plan options</li>
                <li>• Immediate eligibility</li>
              </ul>
              <div className="text-xs text-purple-600 font-medium">
                Best for: Married individuals
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">Healthcare Sharing Plans</h3>
              <p className="text-gray-700 mb-4">
                Faith-based healthcare sharing ministries that provide
                an alternative approach to health coverage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Lower monthly costs</li>
                <li>• Community-based sharing</li>
                <li>• No waiting periods</li>
                <li>• Religious exemption qualified</li>
              </ul>
              <div className="text-xs text-blue-600 font-medium">
                Best for: Faith-based communities
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-500">
              <h3 className="text-2xl font-medium text-teal-700 mb-4">Medicaid</h3>
              <p className="text-gray-700 mb-4">
                State-based healthcare program for qualifying low-income
                individuals and families.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Free or low-cost coverage</li>
                <li>• Comprehensive benefits</li>
                <li>• No premiums for most</li>
                <li>• Year-round enrollment</li>
              </ul>
              <div className="text-xs text-teal-600 font-medium">
                Best for: Low-income individuals/families
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-indigo-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
            COBRA vs. Alternatives Cost Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-indigo-200">
                  <th className="text-left py-3 px-4 font-semibold text-indigo-700">Coverage Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-indigo-700">Average Monthly Cost</th>
                  <th className="text-left py-3 px-4 font-semibold text-indigo-700">Key Benefits</th>
                  <th className="text-left py-3 px-4 font-semibold text-indigo-700">Drawbacks</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">COBRA</td>
                  <td className="py-3 px-4">$500-$1,500+</td>
                  <td className="py-3 px-4">Same coverage as before</td>
                  <td className="py-3 px-4">Very expensive, time-limited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Medicare Advantage</td>
                  <td className="py-3 px-4">$0-$200</td>
                  <td className="py-3 px-4">Low cost, comprehensive</td>
                  <td className="py-3 px-4">Age 65+ requirement</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">ACA Marketplace</td>
                  <td className="py-3 px-4">$200-$800</td>
                  <td className="py-3 px-4">Subsidies available</td>
                  <td className="py-3 px-4">Limited enrollment periods</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Short-Term Medical</td>
                  <td className="py-3 px-4">$100-$400</td>
                  <td className="py-3 px-4">Quick approval, low cost</td>
                  <td className="py-3 px-4">Limited benefits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
            How to Choose the Right COBRA Alternative
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-indigo-700 mb-4">Consider Your Situation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Age (65+ qualifies for Medicare)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Income level (affects ACA subsidies)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Health status and medication needs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Family coverage requirements
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-green-700 mb-4">Important Deadlines</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  COBRA: 60 days to elect coverage
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  ACA: 60 days special enrollment
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Medicare: 3 months before/after 65th birthday
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Spouse's plan: 30 days from job loss
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">
            Special Situations and Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Early Retirement (62-65)</h3>
              <p className="text-sm text-indigo-700">
                Not yet Medicare-eligible? Consider ACA marketplace plans with subsidies
                or bridge insurance until Medicare begins at 65.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">High Medical Needs</h3>
              <p className="text-sm text-green-700">
                If you have ongoing medical care, carefully compare provider networks
                and prescription coverage before leaving COBRA.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Quick Coverage Needed</h3>
              <p className="text-sm text-orange-700">
                Short-term medical insurance can start immediately while you
                explore other long-term coverage options.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Pregnant or Planning Pregnancy</h3>
              <p className="text-sm text-purple-700">
                Ensure your alternative covers maternity care. ACA plans must include
                pregnancy coverage, but short-term plans may not.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Chronic Conditions</h3>
              <p className="text-sm text-blue-700">
                Medicare Advantage or comprehensive ACA plans may provide better
                chronic disease management than short-term alternatives.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">Self-Employment Transition</h3>
              <p className="text-sm text-teal-700">
                Planning to freelance or start a business? Consider health savings
                account eligible plans for tax advantages.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">
            Get Help Choosing Your COBRA Alternative
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3">Medicare Counseling</h3>
              <p className="text-gray-600 mb-4">Free SHIP counseling for Medicare-eligible individuals</p>
              <Link href="/medicare-advantage" className="text-indigo-600 hover:text-indigo-800 underline">
                Find Medicare Help →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-700 mb-3">ACA Navigator</h3>
              <p className="text-gray-600 mb-4">Get assistance with Healthcare.gov enrollment</p>
              <a href="https://www.healthcare.gov/find-assistance/" className="text-green-600 hover:text-green-800 underline">
                Find ACA Help →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Insurance Broker</h3>
              <p className="text-gray-600 mb-4">Professional guidance for all coverage options</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline">
                Contact Broker →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Don't Overpay for COBRA - Explore Better Options
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            Whether you're Medicare-eligible, need marketplace coverage, or temporary insurance,
            there are affordable alternatives to expensive COBRA coverage that could save you thousands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Your Options
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}