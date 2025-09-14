import { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import MarketingOptimizer from '@/components/MarketingOptimizer'
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs'
import { PrimaryLinksSection, ContextualLinksSection, CrossSellSection } from '@/components/InternalLinksSection'

export const metadata: Metadata = {
  title: 'Disability Insurance Coverage | Protect Your Income & Financial Security 2025',
  description: 'Secure your financial future with comprehensive disability insurance. Compare short-term and long-term disability coverage options to protect your income when you cannot work.',
  keywords: 'disability insurance, income protection insurance, short term disability, long term disability, disability coverage, financial protection, income replacement insurance, disability benefits, workers compensation, personal disability insurance, employer disability insurance',
  openGraph: {
    title: 'Disability Insurance Coverage | Protect Your Income & Financial Security 2025',
    description: 'Comprehensive disability insurance to protect your income and financial security when you cannot work.',
    type: 'website',
  },
}

const disabilityData = {
  workforceProtectionRate: 31,
  averageClaimDuration: 34.6,
  incomeReplacementRate: 60,
  probabilityByAge50: 24,
  averagePremium: 2850,
  benefitWaitingPeriod: 90,
  maxBenefitPeriod: 24,
  socialSecurityApprovalRate: 34
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Disability Insurance Coverage Services",
  "description": "Comprehensive disability insurance solutions including short-term and long-term disability coverage to protect your income and financial security.",
  "serviceType": "Disability Insurance",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Disability Insurance Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Short-Term Disability Insurance",
          "description": "Income protection for temporary disabilities lasting 3-12 months"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Long-Term Disability Insurance",
          "description": "Extended income protection for disabilities lasting years or until retirement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Group Disability Insurance",
          "description": "Employer-sponsored disability coverage for employees"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Individual Disability Insurance",
          "description": "Personal disability coverage for self-employed and supplemental protection"
        }
      }
    ]
  }
}

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Insurance Services", url: "/insurance" },
  { label: "Disability Insurance", url: "/disability-insurance" }
]

export default function DisabilityInsurancePage() {
  return (
    <>
      <LandingPageAnalytics
        pageType="service"
        pageTitle="Disability Insurance Coverage"
        county=""
        state=""
        demographics={{
          avgAge: 42,
          maPenetrationRate: 0
        }}
        keyMetrics={{
          totalBeneficiaries: 0,
          pageType: 'disability_insurance'
        }}
      />

      <MarketingOptimizer
        pageKey="disability-insurance"
        enableDynamicOptimization={true}
        trackKeywordPerformance={true}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbStructuredData(breadcrumbItems)) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900">
        <Breadcrumbs items={breadcrumbItems} />

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Disability Insurance
              <span className="block text-purple-200">Protect Your Most Valuable Asset</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Your income is your most valuable asset. Protect your financial future with comprehensive
              disability insurance that replaces up to {disabilityData.incomeReplacementRate}% of your income when you can't work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-700 transition-colors">
                Calculate Coverage Need
              </button>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Disability Insurance by the Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">1 in 4</div>
                <div className="text-sm">Workers will become disabled before retirement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">{disabilityData.workforceProtectionRate}%</div>
                <div className="text-sm">Of workforce has disability insurance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">{disabilityData.averageClaimDuration}</div>
                <div className="text-sm">Average months per disability claim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">{disabilityData.socialSecurityApprovalRate}%</div>
                <div className="text-sm">Social Security disability approval rate</div>
              </div>
            </div>
          </section>

          {/* Types of Disability Insurance */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Types of Disability Insurance Coverage
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Short-Term Disability */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Short-Term Disability Insurance</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <span className="text-blue-200 mr-3">⏰</span>
                    <span><strong>Coverage Period:</strong> 3-12 months</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-200 mr-3">💰</span>
                    <span><strong>Benefit Amount:</strong> 40-60% of income</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-200 mr-3">🚀</span>
                    <span><strong>Waiting Period:</strong> 0-14 days</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3">Best For:</h4>
                <ul className="space-y-2">
                  <li>• Pregnancy and childbirth recovery</li>
                  <li>• Surgery and recovery periods</li>
                  <li>• Temporary injuries</li>
                  <li>• Short-term illnesses</li>
                </ul>
              </div>

              {/* Long-Term Disability */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Long-Term Disability Insurance</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <span className="text-purple-200 mr-3">⏰</span>
                    <span><strong>Coverage Period:</strong> Until age 65 or retirement</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-200 mr-3">💰</span>
                    <span><strong>Benefit Amount:</strong> 50-70% of income</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-200 mr-3">🚀</span>
                    <span><strong>Waiting Period:</strong> 90-730 days</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3">Best For:</h4>
                <ul className="space-y-2">
                  <li>• Chronic diseases</li>
                  <li>• Severe injuries</li>
                  <li>• Mental health conditions</li>
                  <li>• Progressive illnesses</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Group vs Individual */}
          <section className="bg-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Group vs Individual Disability Insurance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6">Feature</th>
                    <th className="text-center py-4 px-6 text-blue-700">Group Coverage</th>
                    <th className="text-center py-4 px-6 text-purple-700">Individual Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Cost</td>
                    <td className="px-6 py-4 text-center text-blue-700">Lower (employer subsidized)</td>
                    <td className="px-6 py-4 text-center text-purple-700">Higher (full premium)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Coverage Amount</td>
                    <td className="px-6 py-4 text-center text-blue-700">Limited (often 60% max)</td>
                    <td className="px-6 py-4 text-center text-purple-700">Customizable (up to 80%)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Portability</td>
                    <td className="px-6 py-4 text-center text-blue-700">Lost when leaving job</td>
                    <td className="px-6 py-4 text-center text-purple-700">Stays with you</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Tax Treatment</td>
                    <td className="px-6 py-4 text-center text-blue-700">Benefits taxable</td>
                    <td className="px-6 py-4 text-center text-purple-700">Benefits tax-free</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Definition of Disability</td>
                    <td className="px-6 py-4 text-center text-blue-700">More restrictive</td>
                    <td className="px-6 py-4 text-center text-purple-700">More favorable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Coverage Considerations */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Key Coverage Considerations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Occupation Class</h3>
                <p className="text-gray-700">
                  Your job determines your risk class and premium rates. Office workers typically
                  get better rates than manual laborers or high-risk occupations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Definition of Disability</h3>
                <p className="text-gray-700">
                  "Own occupation" coverage pays if you can't do your specific job.
                  "Any occupation" is more restrictive and pays only if you can't do any job.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⏳</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Elimination Period</h3>
                <p className="text-gray-700">
                  The waiting period before benefits begin. Longer elimination periods
                  reduce premiums but require more savings to bridge the gap.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Benefit Period</h3>
                <p className="text-gray-700">
                  How long benefits last. Options range from 2 years to age 65.
                  Longer benefit periods provide more security but cost more.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Renewability</h3>
                <p className="text-gray-700">
                  Non-cancellable and guaranteed renewable policies protect you from
                  rate increases or cancellation due to health changes.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">➕</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Riders & Options</h3>
                <p className="text-gray-700">
                  Add-ons like cost of living adjustments, residual benefits,
                  and future increase options enhance coverage but increase cost.
                </p>
              </div>
            </div>
          </section>

          {/* Income Protection Calculator */}
          <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How Much Coverage Do You Need?
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-4">Income Protection Formula</h3>
                <div className="bg-white rounded-lg p-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Annual Gross Income</span>
                      <span className="font-semibold">$_______</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">× Maximum Coverage (70%)</span>
                      <span className="font-semibold">0.70</span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold">Maximum Annual Benefit</span>
                      <span className="font-bold text-indigo-700">$_______</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Monthly Benefit</span>
                      <span className="font-semibold text-indigo-700">$_______</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Coverage Recommendations</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">High Earners ($100k+)</h4>
                    <p className="text-gray-700 text-sm">
                      Individual policy essential. Group coverage typically insufficient.
                      Consider "own occupation" definition.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Middle Income ($50k-$100k)</h4>
                    <p className="text-gray-700 text-sm">
                      Supplement group coverage with individual policy.
                      Balance elimination period with premium cost.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Young Professionals</h4>
                    <p className="text-gray-700 text-sm">
                      Start with basic coverage. Add future increase options
                      to grow coverage with income.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Misconceptions */}
          <section className="bg-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common Disability Insurance Myths
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-4">❌ Myths</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-gray-800 font-medium">"Workers' comp covers me"</p>
                    <p className="text-gray-600 text-sm">Only covers work-related injuries, not illness or off-duty injuries</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-gray-800 font-medium">"Social Security is enough"</p>
                    <p className="text-gray-600 text-sm">Strict requirements, low approval rate, limited benefits</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-gray-800 font-medium">"I'm young and healthy"</p>
                    <p className="text-gray-600 text-sm">90% of disabilities are due to illness, not accidents</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-gray-800 font-medium">"Group coverage is sufficient"</p>
                    <p className="text-gray-600 text-sm">Often limited to 60% income with restrictive definitions</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">✅ Facts</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-gray-800 font-medium">Comprehensive protection needed</p>
                    <p className="text-gray-600 text-sm">Individual disability insurance covers any qualifying disability</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-gray-800 font-medium">Multiple income sources important</p>
                    <p className="text-gray-600 text-sm">Disability insurance provides reliable, tax-free income</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-gray-800 font-medium">Early protection is cheaper</p>
                    <p className="text-gray-600 text-sm">Premiums based on age and health at application</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-gray-800 font-medium">Individual policies are portable</p>
                    <p className="text-gray-600 text-sm">Coverage continues regardless of job changes</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Protect Your Financial Future Today
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Don't wait until it's too late. Get a personalized disability insurance quote
              and secure your most valuable asset – your ability to earn income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-700 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </section>

          {/* Internal Links */}
          <PrimaryLinksSection
            currentPageKey="disability-insurance"
          />

          <ContextualLinksSection
            currentPageKey="disability-insurance"
          />

          <CrossSellSection
            currentPageKey="disability-insurance"
          />
        </main>
      </div>
    </>
  )
}