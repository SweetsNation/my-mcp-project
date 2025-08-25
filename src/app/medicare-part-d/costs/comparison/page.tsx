import { Metadata } from 'next';
import Link from 'next/link';
import ClientOnly from '@/components/ClientOnly';

export const metadata: Metadata = {
  title: 'Medicare Part D Cost Comparison 2025 - Compare Prescription Drug Plan Costs',
  description: 'Compare Medicare Part D plan costs side-by-side. See premium differences, deductibles, copays, and total costs to find the cheapest Part D plan for your medications.',
  keywords: 'Medicare Part D cost comparison, compare Part D plans, cheapest Part D plan, Medicare prescription drug plan comparison, Part D plan costs side by side',
  openGraph: {
    title: 'Medicare Part D Cost Comparison 2025 - Find the Cheapest Plan',
    description: 'Compare Medicare Part D prescription drug plan costs side-by-side. Find the cheapest plan for your specific medications and save thousands.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-part-d/costs/comparison'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://elmaginsurance.com/medicare-part-d/costs/comparison",
  "name": "Medicare Part D Cost Comparison Guide",
  "description": "Comprehensive guide to comparing Medicare Part D prescription drug plan costs, including side-by-side comparisons and cost analysis tools.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://elmaginsurance.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Medicare Part D",
        "item": "https://elmaginsurance.com/medicare-part-d"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Costs",
        "item": "https://elmaginsurance.com/medicare-part-d/costs"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Comparison",
        "item": "https://elmaginsurance.com/medicare-part-d/costs/comparison"
      }
    ]
  }
};

export default function PartDCostComparisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-white">
        {/* Breadcrumb */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
          <ol className="flex space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/medicare-part-d" className="hover:text-blue-600">Medicare Part D</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/medicare-part-d/costs" className="hover:text-blue-600">Costs</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">Comparison</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Medicare Part D Cost Comparison
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mb-8">
                Compare prescription drug plan costs side-by-side to find the cheapest Medicare Part D plan for your specific medications and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:331-343-2584" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Call 331-E-HEALTH
                </a>
                <Link href="#comparison-tool" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Start Comparison
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Compare Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Compare Part D Plan Costs?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Medicare Part D plan costs vary dramatically. Smart comparison shopping can save you thousands of dollars annually.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Variations</h3>
                <ClientOnly>
                  <p className="text-gray-600">
                    The same medications can cost $500/year on one plan and $3,000/year on another.
                  </p>
                </ClientOnly>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Shopping</h3>
                <ClientOnly>
                  <p className="text-gray-600">
                    Compare plans to find the best value for your specific medications.
                  </p>
                </ClientOnly>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Savings Potential</h3>
                <ClientOnly>
                  <p className="text-gray-600">
                    You could save $800-$2,500 annually by choosing the right plan.
                  </p>
                </ClientOnly>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Plan Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Plan Cost Comparison</h2>
              <p className="text-lg text-gray-600">
                Example showing how the same medications cost differently across three common plan types
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Cost Component</th>
                    <th className="px-6 py-4 text-center font-semibold text-blue-600">Basic Plan</th>
                    <th className="px-6 py-4 text-center font-semibold text-green-600">Enhanced Plan</th>
                    <th className="px-6 py-4 text-center font-semibold text-purple-600">Premium Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Monthly Premium</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-semibold">$25</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">$55</td>
                    <td className="px-6 py-4 text-center text-purple-600 font-semibold">$95</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Annual Deductible</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-semibold">$590</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">$250</td>
                    <td className="px-6 py-4 text-center text-purple-600 font-semibold">$0</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-yellow-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Generic Drug Copay</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-semibold">$15</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">$8</td>
                    <td className="px-6 py-4 text-center text-purple-600 font-semibold">$5</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-yellow-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Brand Drug Copay</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-semibold">$75</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">$45</td>
                    <td className="px-6 py-4 text-center text-purple-600 font-semibold">$25</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Specialty Drug Coinsurance</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-semibold">45%</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">35%</td>
                    <td className="px-6 py-4 text-center text-purple-600 font-semibold">25%</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 font-bold">
                    <td className="px-6 py-4 text-gray-900">Sample Annual Total*</td>
                    <td className="px-6 py-4 text-center text-blue-600 text-lg">$2,840</td>
                    <td className="px-6 py-4 text-center text-green-600 text-lg">$1,965</td>
                    <td className="px-6 py-4 text-center text-purple-600 text-lg">$1,680</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                *Sample based on taking 3 generic medications and 1 brand name medication monthly
              </p>
              <p className="text-sm font-semibold text-green-600 mt-2">
                Premium Plan saves $1,160/year vs Basic Plan in this example
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Factors */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Factors to Compare</h2>
              <p className="text-lg text-gray-600">
                Look beyond just the monthly premium. These factors determine your true total cost.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Formulary Coverage</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Ensure all your medications are covered on the plan's formulary (drug list).
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-900 text-sm mb-2">What to Check:</h4>
                    <ul className="text-xs text-blue-800 space-y-1">
                      <li>• Are all your drugs covered?</li>
                      <li>• What tier are they on?</li>
                      <li>• Any quantity limits?</li>
                      <li>• Prior authorization required?</li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Total Annual Cost</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Calculate premium + deductible + estimated drug costs for the year.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-900 text-sm mb-2">Cost Formula:</h4>
                    <p className="text-xs text-green-800">
                      (Premium × 12) + Deductible + (Monthly Rx × 12) = Annual Total
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Pharmacy Network</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Verify your preferred pharmacy is in the plan's network.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-900 text-sm mb-2">Network Types:</h4>
                    <ul className="text-xs text-purple-800 space-y-1">
                      <li>• Preferred: Lowest costs</li>
                      <li>• Standard: Higher costs</li>
                      <li>• Out-of-network: Highest costs</li>
                      <li>• Mail-order: Often cheapest for 90-day supplies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-orange-600 font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Plan Ratings</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Medicare rates plans 1-5 stars based on quality and customer service.
                  </p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-900 text-sm mb-2">Star Ratings:</h4>
                    <ul className="text-xs text-orange-800 space-y-1">
                      <li>• 5 stars: Excellent</li>
                      <li>• 4 stars: Above average</li>
                      <li>• 3 stars: Average</li>
                      <li>• 1-2 stars: Below average</li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold">5</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Coverage Restrictions</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Some medications may have coverage restrictions that affect access.
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-red-900 text-sm mb-2">Common Restrictions:</h4>
                    <ul className="text-xs text-red-800 space-y-1">
                      <li>• Prior authorization required</li>
                      <li>• Step therapy (try cheaper drug first)</li>
                      <li>• Quantity limits</li>
                      <li>• Age or diagnosis requirements</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-3">💡 Pro Comparison Tip</h3>
                  <p className="text-green-100 text-sm mb-3">
                    Don't just compare 2-3 plans. Medicare.gov shows all available plans in your area with your specific medications entered.
                  </p>
                  <p className="text-green-200 text-xs">
                    The lowest premium plan is rarely the lowest total cost plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Tools Section */}
        <section id="comparison-tool" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Plan Comparison Tools</h2>
              <p className="text-lg text-gray-600">
                Use these official tools to compare Medicare Part D plans with your specific medications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Medicare.gov Plan Finder</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Official Medicare tool that shows all plans in your area with your exact medications
                  </p>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Enter all your medications
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Compare total annual costs
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Check pharmacy networks
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    See plan star ratings
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="https://www.medicare.gov/plan-compare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                  >
                    Visit Medicare.gov
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Comparison Service</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our licensed agents compare all plans for you and recommend the lowest-cost option
                  </p>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Personalized analysis
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Consider future needs
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Free consultation
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Help with enrollment
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="tel:331-343-2584"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
                  >
                    Call 331-E-HEALTH
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Avoid These Common Comparison Mistakes</h2>
              <p className="text-lg text-gray-600">
                These errors cost Medicare beneficiaries thousands of dollars each year
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Only Looking at Premium</h3>
                <p className="text-red-700 text-sm">
                  A $15/month plan with high copays often costs more annually than an $85/month plan with low copays.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Not Checking Formularies</h3>
                <p className="text-red-700 text-sm">
                  If your medication isn't covered, you'll pay full price - potentially thousands more per year.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ignoring Pharmacy Networks</h3>
                <p className="text-red-700 text-sm">
                  Using an out-of-network pharmacy can double or triple your prescription costs.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Calculate Total Annual Cost</h3>
                <p className="text-green-700 text-sm">
                  Add premium, deductible, and estimated medication costs for the true comparison.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Consider Future Changes</h3>
                <p className="text-green-700 text-sm">
                  Think about potential new medications or changing health needs when comparing plans.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Review Annually</h3>
                <p className="text-green-700 text-sm">
                  Plans change every year. What's best today may not be best next year during Open Enrollment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get a Free Medicare Part D Cost Comparison</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Skip the confusion and let our experts compare all available plans to find your lowest-cost option. 
              Free service with no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:331-343-2584" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Call 331-E-HEALTH Now
              </a>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Request Comparison
              </Link>
            </div>
            <p className="text-green-200 text-sm mt-4">
              Licensed Medicare experts • Free consultation • Save up to $2,500/year
            </p>
          </div>
        </section>
      </div>
    </>
  );
}