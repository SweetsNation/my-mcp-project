import { Metadata } from 'next';
import Link from 'next/link';
import PartDCostCalculator from '@/components/PartDCostCalculator';

export const metadata: Metadata = {
  title: 'Medicare Part D Costs 2025 - Complete Guide to Prescription Drug Plan Costs',
  description: 'Understand Medicare Part D costs for 2025. Calculate your prescription drug plan expenses, compare costs, and find the cheapest Part D plans. Free cost calculator and savings guide.',
  keywords: 'Medicare Part D costs 2025, Medicare prescription drug costs, Part D monthly premium, Medicare Part D deductible, cheapest Medicare Part D plans, Medicare Part D cost comparison, out of pocket maximum',
  openGraph: {
    title: 'Medicare Part D Costs 2025 - Complete Cost Guide & Calculator',
    description: 'Calculate your Medicare Part D costs for 2025. Compare plans, understand all expenses, and find ways to save on prescription drug coverage.',
    type: 'website',
  ,
      images: [
        {
          url: 'https://www.elmaginsurance.com/images/og-medicare-part-d.jpg',
          width: 1200,
          height: 630,
          alt: 'Medicare Part D Plans - El-Mag Insurance',
        },
      ],
    },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-part-d/costs'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.elmaginsurance.com/medicare-part-d/costs",
      "name": "Medicare Part D Costs 2025 - Complete Guide",
      "description": "Comprehensive guide to Medicare Part D costs for 2025 including premiums, deductibles, copays, and cost-saving strategies.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.elmaginsurance.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Medicare Part D",
            "item": "https://www.elmaginsurance.com/medicare-part-d"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Part D Costs",
            "item": "https://www.elmaginsurance.com/medicare-part-d/costs"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does Medicare Part D cost in 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Medicare Part D costs vary by plan but include monthly premiums ($0-$200+), annual deductible (up to $590), and prescription copays. The average monthly premium is around $45, with total annual costs ranging from $500-$5,000 depending on medications and plan choice."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Medicare Part D deductible for 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The maximum Medicare Part D deductible for 2025 is $590. However, many plans have lower deductibles or no deductible at all. Plans with $0 deductibles typically have higher monthly premiums."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Medicare Part D out-of-pocket maximum for 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Medicare Part D out-of-pocket maximum for 2025 is $2,000. This is a significant change from previous years and means you'll pay no more than $2,000 total for covered prescription drugs in 2025."
          }
        },
        {
          "@type": "Question",
          "name": "How can I reduce my Medicare Part D costs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reduce Medicare Part D costs by: choosing generic drugs when available, using preferred pharmacies, comparing plans annually, applying for Extra Help if eligible, using mail-order pharmacies, and selecting plans that cover your specific medications on lower tiers."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to Calculate Your Medicare Part D Costs",
      "description": "Step-by-step guide to calculate your total Medicare Part D prescription drug plan costs for 2025.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Identify Your Medications",
          "text": "List all prescription medications you take regularly, including dosages and quantities."
        },
        {
          "@type": "HowToStep",
          "name": "Compare Plan Premiums",
          "text": "Review monthly premiums for plans in your area, ranging from $0 to $200+ per month."
        },
        {
          "@type": "HowToStep",
          "name": "Check Formulary Coverage",
          "text": "Verify that your medications are covered and determine which tier they're on."
        },
        {
          "@type": "HowToStep",
          "name": "Calculate Copays and Coinsurance",
          "text": "Estimate your monthly out-of-pocket costs based on your medication tiers and usage."
        },
        {
          "@type": "HowToStep",
          "name": "Add All Costs Together",
          "text": "Combine premium + deductible + medication costs to get your total annual expense."
        }
      ]
    }
  ]
};

export default function PartDCostsPage() {
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
            <li className="text-gray-900">Costs</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Medicare Part D Costs 2025
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Understand all Medicare Part D prescription drug plan costs. Calculate your expenses, 
                compare plans, and discover ways to save thousands on your medications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:331-343-2584" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Call 331-E-HEALTH
                </a>
                <Link href="#calculator" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Calculate My Costs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Cost Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2025 Medicare Part D Cost Overview</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the complete cost structure helps you make informed decisions and budget effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="text-blue-600 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Monthly Premium</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$0 - $200+</div>
                <p className="text-sm text-gray-600">Average: ~$45/month</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <div className="text-green-600 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Annual Deductible</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">Up to $590</div>
                <p className="text-sm text-gray-600">Many plans: $0 deductible</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <div className="text-purple-600 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Prescription Copays</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">$3 - $150+</div>
                <p className="text-sm text-gray-600">Varies by tier & plan</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <div className="text-orange-600 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Out-of-Pocket Max</h3>
                <div className="text-2xl font-bold text-orange-600 mb-2">$2,000</div>
                <p className="text-sm text-gray-600">New 2025 limit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Calculator */}
        <section id="calculator" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Medicare Part D Cost Calculator</h2>
              <p className="text-lg text-gray-600">
                Get personalized cost estimates based on your medications and plan preferences
              </p>
            </div>
            <PartDCostCalculator />
          </div>
        </section>

        {/* Cost Breakdown Guide */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Cost Breakdown</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding each cost component helps you budget and compare plans effectively
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">1</span>
                    Monthly Premium
                  </h3>
                  <div className="pl-11">
                    <p className="text-gray-600 mb-4">
                      The monthly amount you pay for your Part D plan, whether you use it or not.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">2025 Premium Range:</h4>
                      <ul className="space-y-1 text-sm text-blue-800">
                        <li>• Basic plans: $7 - $40/month</li>
                        <li>• Enhanced plans: $20 - $80/month</li>
                        <li>• Premium plans: $50 - $200+/month</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-3">2</span>
                    Annual Deductible
                  </h3>
                  <div className="pl-11">
                    <p className="text-gray-600 mb-4">
                      Amount you pay out-of-pocket before your plan starts paying for covered drugs.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">2025 Deductible Options:</h4>
                      <ul className="space-y-1 text-sm text-green-800">
                        <li>• $0 deductible (higher premiums)</li>
                        <li>• $250 - $350 partial deductible</li>
                        <li>• Up to $590 maximum deductible</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-3">3</span>
                    Prescription Costs
                  </h3>
                  <div className="pl-11">
                    <p className="text-gray-600 mb-4">
                      Copays or coinsurance you pay for each prescription, varying by drug tier.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Typical Cost Structure:</h4>
                      <ul className="space-y-1 text-sm text-purple-800">
                        <li>• Tier 1 (Generic): $3 - $15</li>
                        <li>• Tier 2 (Preferred Brand): $20 - $50</li>
                        <li>• Tier 3 (Non-Preferred): $50 - $100</li>
                        <li>• Tier 4 (Specialty): 25% - 50% coinsurance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">2025 Major Change: $2,000 Cap</h3>
                  <p className="text-blue-100 mb-4">
                    Starting in 2025, you'll never pay more than $2,000 out-of-pocket for covered prescription drugs in a calendar year.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">No more coverage gap ("donut hole")</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Predictable maximum costs</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Significant savings for high drug costs</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Hidden Costs to Watch</h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Late Enrollment Penalty</h4>
                        <p className="text-sm text-gray-600">1% of national base premium for each month without coverage</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Non-Formulary Drugs</h4>
                        <p className="text-sm text-gray-600">Full cost if your medication isn't covered</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Out-of-Network Pharmacy</h4>
                        <p className="text-sm text-gray-600">Higher costs at non-preferred locations</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">💡 Money-Saving Tips</h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• Choose generic drugs when available (60-80% savings)</li>
                    <li>• Use preferred pharmacies for lower costs</li>
                    <li>• Consider mail-order for maintenance medications</li>
                    <li>• Apply for Extra Help if income-eligible</li>
                    <li>• Compare plans annually during Open Enrollment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Examples */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-World Cost Examples</h2>
              <p className="text-lg text-gray-600">
                See how different scenarios affect your total Medicare Part D costs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Low Medication Use</h3>
                  <p className="text-gray-600">2-3 generic medications</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Premium:</span>
                    <span className="font-semibold">$25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Deductible:</span>
                    <span className="font-semibold">$250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Rx Costs:</span>
                    <span className="font-semibold">$30</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="text-lg font-semibold">Annual Total:</span>
                    <span className="text-lg font-bold text-blue-600">$910</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Moderate Medication Use</h3>
                  <p className="text-gray-600">4-6 medications, mix of generic/brand</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Premium:</span>
                    <span className="font-semibold">$45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Deductible:</span>
                    <span className="font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Rx Costs:</span>
                    <span className="font-semibold">$125</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="text-lg font-semibold">Annual Total:</span>
                    <span className="text-lg font-bold text-green-600">$2,040</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">High Medication Use</h3>
                  <p className="text-gray-600">Expensive specialty drugs</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Premium:</span>
                    <span className="font-semibold">$85</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Deductible:</span>
                    <span className="font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rx Costs (hits cap):</span>
                    <span className="font-semibold">$2,000</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="text-lg font-semibold">Annual Total:</span>
                    <span className="text-lg font-bold text-purple-600">$3,020</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <p className="text-xs text-purple-800">
                    <strong>Note:</strong> Without Part D, specialty drugs could cost $15,000+ annually
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Save */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5 Ways to Reduce Your Part D Costs</h2>
              <p className="text-lg text-gray-600">
                Proven strategies to save hundreds or thousands on prescription drug costs
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Generic Drugs</h3>
                  <p className="text-gray-600">
                    Generic medications are typically 60-80% cheaper than brand names with identical effectiveness.
                  </p>
                </div>
                <div className="lg:w-2/3 bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-2">Example Savings:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Brand Name Lipitor</p>
                      <p className="text-blue-800">$175/month</p>
                    </div>
                    <div>
                      <p className="font-semibold">Generic Atorvastatin</p>
                      <p className="text-green-600">$15/month</p>
                    </div>
                  </div>
                  <p className="text-blue-800 font-semibold mt-2">Annual Savings: $1,920</p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Use Preferred Pharmacies</h3>
                  <p className="text-gray-600">
                    Many plans offer lower copays at preferred network pharmacies.
                  </p>
                </div>
                <div className="lg:w-2/3 bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-900 mb-2">Preferred vs Standard Pharmacy:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Standard Pharmacy</p>
                      <p className="text-gray-700">$45 copay</p>
                    </div>
                    <div>
                      <p className="font-semibold">Preferred Pharmacy</p>
                      <p className="text-green-600">$25 copay</p>
                    </div>
                  </div>
                  <p className="text-green-800 font-semibold mt-2">Monthly Savings: $20 per prescription</p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Consider Mail-Order</h3>
                  <p className="text-gray-600">
                    90-day supplies via mail-order often cost less than three 30-day fills.
                  </p>
                </div>
                <div className="lg:w-2/3 bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-purple-900 mb-2">Cost Comparison:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">3 Monthly Fills</p>
                      <p className="text-gray-700">$30 × 3 = $90</p>
                    </div>
                    <div>
                      <p className="font-semibold">90-Day Mail Order</p>
                      <p className="text-purple-600">$60</p>
                    </div>
                  </div>
                  <p className="text-purple-800 font-semibold mt-2">Quarterly Savings: $30 per medication</p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply for Extra Help</h3>
                  <p className="text-gray-600">
                    Income-eligible beneficiaries can get prescription copays as low as $1.55 per medication.
                  </p>
                </div>
                <div className="lg:w-2/3 bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-orange-900 mb-2">2025 Income Limits:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Individual:</span>
                      <span className="font-semibold">$23,895/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Married Couple:</span>
                      <span className="font-semibold">$32,335/year</span>
                    </div>
                  </div>
                  <Link href="/medicare-extra-help" className="inline-block mt-3 text-orange-600 font-semibold hover:text-orange-800">
                    Check Your Eligibility →
                  </Link>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    5
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Compare Plans Annually</h3>
                  <p className="text-gray-600">
                    Plans change formularies and costs each year. Annual reviews can save significant money.
                  </p>
                </div>
                <div className="lg:w-2/3 bg-red-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-red-900 mb-2">What Changes Each Year:</h4>
                  <ul className="space-y-1 text-sm text-red-800">
                    <li>• Premium amounts</li>
                    <li>• Deductible levels</li>
                    <li>• Formulary coverage</li>
                    <li>• Pharmacy networks</li>
                    <li>• Copay amounts</li>
                  </ul>
                  <p className="text-red-800 font-semibold mt-2">Open Enrollment: Oct 15 - Dec 7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Free Help Finding the Lowest-Cost Part D Plan</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our Medicare experts will compare all available plans in your area and find the one that minimizes your total costs based on your specific medications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:331-343-2584" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Call 331-E-HEALTH Now
              </a>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Get Free Quote
              </Link>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Licensed agents • Free consultation • No obligation
            </p>
          </div>
        </section>
      </div>
    </>
  );
}