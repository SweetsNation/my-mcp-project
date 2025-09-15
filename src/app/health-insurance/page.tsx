import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Health Insurance 2025 - Medicare, ACA Plans & Coverage Options Guide',
  description: 'Complete guide to health insurance options in 2025. Compare Medicare Advantage, Medicare Supplement, ACA marketplace plans, and employer coverage to find the best health insurance for your needs.',
  keywords: 'health insurance 2025, Medicare health insurance, ACA health insurance, health insurance plans, health coverage options, Medicare vs ACA plans, health insurance guide'
};

export default function HealthInsurance() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
          Health Insurance Guide 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Navigate your health insurance options with our comprehensive 2025 guide.
            Compare Medicare Advantage, Medicare Supplement, ACA marketplace plans, employer coverage,
            and other health insurance options to find the best coverage for your needs and budget.
          </p>
        </div>

        <section className="mb-16 bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            🏥 Health Insurance by Age Group
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-blue-700 mb-3">Under 65</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• ACA Marketplace plans</li>
                <li>• Employer-sponsored insurance</li>
                <li>• Short-term medical insurance</li>
                <li>• COBRA continuation coverage</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-green-700 mb-3">65+ (Medicare Eligible)</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• Medicare Advantage plans</li>
                <li>• Medicare + Medigap</li>
                <li>• Employer retiree plans</li>
                <li>• Medicare Part D (drug coverage)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium text-purple-700 mb-3">Special Situations</h3>
              <ul className="text-sm text-purple-700 space-y-2">
                <li>• Medicaid (income-qualified)</li>
                <li>• Dual-eligible special needs plans</li>
                <li>• Health sharing ministries</li>
                <li>• Veterans Administration benefits</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-slate-800 mb-8 text-center">
            Medicare Health Insurance Options (65+)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                All-in-one Medicare plans that replace Original Medicare
                and often include prescription drug coverage and extra benefits.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Prescription drug coverage included</li>
                <li>• Extra benefits (dental, vision, hearing)</li>
                <li>• Network-based care</li>
              </ul>
              <Link href="/medicare-advantage" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                Learn More
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">Medicare Supplement</h3>
              <p className="text-gray-700 mb-4">
                Original Medicare plus Medigap insurance to cover
                gaps in Medicare coverage, plus Part D for prescriptions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Works with any Medicare doctor</li>
                <li>• Predictable costs</li>
                <li>• No network restrictions</li>
                <li>• Separate Part D plan needed</li>
              </ul>
              <Link href="/contact" className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
                Compare Plans
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Employer Retiree Plans</h3>
              <p className="text-gray-700 mb-4">
                Health insurance continuation through former employer,
                often working with Medicare as secondary coverage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• May be primary or secondary to Medicare</li>
                <li>• Often includes prescription coverage</li>
                <li>• Check coordination with Medicare</li>
                <li>• Usually more comprehensive</li>
              </ul>
              <Link href="/contact" className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors">
                Get Guidance
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-slate-800 mb-8 text-center">
            Non-Medicare Health Insurance Options (Under 65)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-2xl font-medium text-orange-700 mb-4">ACA Marketplace Plans</h3>
              <p className="text-gray-700 mb-4">
                Health insurance through Healthcare.gov or state exchanges
                with income-based subsidies and essential health benefits.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Bronze, Silver, Gold, Platinum tiers</li>
                <li>• Income-based premium subsidies</li>
                <li>• Essential health benefits covered</li>
                <li>• No pre-existing condition exclusions</li>
              </ul>
              <a href="https://www.healthcare.gov" className="inline-block bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors">
                Healthcare.gov
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-500">
              <h3 className="text-2xl font-medium text-teal-700 mb-4">Employer Insurance</h3>
              <p className="text-gray-700 mb-4">
                Health insurance through your employer, often with
                employer premium contributions and group rates.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Employer premium contributions</li>
                <li>• Group insurance rates</li>
                <li>• Family coverage options</li>
                <li>• Often includes dental/vision</li>
              </ul>
              <Link href="/contact" className="inline-block bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors">
                Compare Options
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <h3 className="text-2xl font-medium text-red-700 mb-4">Short-Term Medical</h3>
              <p className="text-gray-700 mb-4">
                Temporary health insurance for gaps in coverage,
                typically lasting up to 364 days with limited benefits.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Lower premiums than ACA plans</li>
                <li>• Limited benefits and coverage</li>
                <li>• Medical underwriting required</li>
                <li>• Bridge coverage solution</li>
              </ul>
              <Link href="/contact" className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-slate-800 mb-6">
            Health Insurance Cost Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Plan Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Typical Monthly Cost</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Key Features</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Best For</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Medicare Advantage</td>
                  <td className="py-3 px-4">$0 - $200</td>
                  <td className="py-3 px-4">All-in-one coverage, extra benefits</td>
                  <td className="py-3 px-4">Cost-conscious seniors</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Medicare Supplement</td>
                  <td className="py-3 px-4">$100 - $400</td>
                  <td className="py-3 px-4">Any Medicare doctor, predictable costs</td>
                  <td className="py-3 px-4">Frequent healthcare users</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">ACA Marketplace</td>
                  <td className="py-3 px-4">$200 - $800</td>
                  <td className="py-3 px-4">Essential benefits, subsidies available</td>
                  <td className="py-3 px-4">Under 65, no employer plan</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Employer Insurance</td>
                  <td className="py-3 px-4">$100 - $600</td>
                  <td className="py-3 px-4">Employer contributions, group rates</td>
                  <td className="py-3 px-4">Employed individuals</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Short-Term Medical</td>
                  <td className="py-3 px-4">$50 - $300</td>
                  <td className="py-3 px-4">Temporary coverage, limited benefits</td>
                  <td className="py-3 px-4">Temporary coverage gaps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-slate-800 mb-8 text-center">
            How to Choose the Right Health Insurance
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Consider Your Situation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Age (Medicare eligible at 65)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Employment status and benefits
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Income level (for subsidies)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Health status and medical needs
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-green-700 mb-4">Compare Key Factors</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Monthly premiums and deductibles
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Provider networks and doctor access
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Prescription drug coverage
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Out-of-pocket maximums
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-400">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
            💡 Important Health Insurance Deadlines
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-yellow-700 mb-3">Medicare (65+)</h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• Initial enrollment: 3 months before/after 65th birthday</li>
                <li>• Annual Open Enrollment: October 15 - December 7</li>
                <li>• Medicare Advantage Open Enrollment: January 1 - March 31</li>
                <li>• Special Enrollment Periods for life events</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-yellow-700 mb-3">ACA Marketplace (Under 65)</h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• Open Enrollment: November 1 - January 15 (2025)</li>
                <li>• Special Enrollment: 60 days after qualifying event</li>
                <li>• Employer plans: During employer open enrollment</li>
                <li>• Short-term: Available year-round</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-slate-800 mb-6 text-center">
            Get Help Choosing Health Insurance
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Medicare Counseling</h3>
              <p className="text-gray-600 mb-4">Free SHIP counseling for Medicare-eligible individuals</p>
              <Link href="/medicare-advantage" className="text-blue-600 hover:text-blue-800 underline">
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
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Licensed Agent</h3>
              <p className="text-gray-600 mb-4">Professional guidance for all health insurance options</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline">
                Contact Agent →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-slate-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Health Insurance Plan
          </h2>
          <p className="text-xl mb-8 text-slate-100 max-w-3xl mx-auto">
            Whether you need Medicare coverage, ACA marketplace plans, or other health insurance options,
            we'll help you find comprehensive coverage that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Health Insurance Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-slate-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}