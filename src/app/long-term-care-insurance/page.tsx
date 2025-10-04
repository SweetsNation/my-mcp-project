import { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import InsurancePageAnalytics from '@/components/InsurancePageAnalytics'
import InsuranceMarketingStrategy from '@/components/InsuranceMarketingStrategy'
import KeywordOptimizedContent from '@/components/KeywordOptimizedContent'
import MarketingOptimizer from '@/components/MarketingOptimizer'
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs'
import { PrimaryLinksSection, ContextualLinksSection, CrossSellSection } from '@/components/InternalLinksSection'

export const metadata: Metadata = {
  title: 'Long-Term Care Insurance 2025 | Nursing Home Coverage | Home Care Protection | Elder Care Planning',
  description: 'Protect your retirement savings with comprehensive long-term care insurance. Coverage for nursing homes, assisted living, and in-home care. Compare top LTC insurance plans with benefits starting at $150/month.',
  keywords: 'long term care insurance 2025, nursing home insurance, assisted living coverage, home care insurance, elder care planning, LTC insurance quotes, long-term care benefits, nursing home costs, Medicaid planning, retirement care insurance, senior care coverage, long term care premium, custodial care insurance, memory care coverage, respite care benefits, long term care policy, elder law planning, care coordination benefits, aging in place insurance, long term care riders',
  openGraph: {
    title: 'Long-Term Care Insurance 2025 | Nursing Home Coverage | Home Care Protection',
    description: 'Protect your retirement savings with comprehensive long-term care insurance. Coverage for nursing homes, assisted living, and in-home care starting at $150/month.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://www.elmaginsurance.com/long-term-care-insurance',
    images: [
      {
        url: 'https://www.elmaginsurance.com/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'El-Mag Insurance - Medicare and Health Insurance Solutions',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/long-term-care-insurance',
  },
}

const ltcData = {
  averagePremium: 2800,
  averageNursingHomeCost: 108405,
  averageHomeCare: 61776,
  averageAssistedLiving: 54000,
  benefitTrigger: 2,
  eliminationPeriod: 90,
  benefitPeriod: 3,
  inflationProtection: 5
}

const analyticsData = {
  pageType: 'long-term-care-insurance',
  location: 'Nationwide',
  averageCost: ltcData.averagePremium,
  focusArea: 'elder-care-planning',
  planTypes: ['Traditional LTC', 'Hybrid Life-LTC', 'Annuity-LTC', 'Short-term care'],
  targetAudience: ['Ages 50-65', 'Pre-retirees', 'Retirees', 'Adult children planning'],
  majorProviders: ['Genworth', 'Mutual of Omaha', 'Northwestern Mutual', 'New York Life', 'MassMutual']
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Long-Term Care Insurance Specialists",
  "description": "Comprehensive long-term care insurance coverage for nursing homes, assisted living, and in-home care with benefits starting at $150/month.",
  "serviceType": "Long-Term Care Insurance",
  "areaServed": "United States",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Long-Term Care Insurance Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Traditional Long-Term Care Insurance",
          "description": "Comprehensive LTC coverage for nursing home, assisted living, and home care services"
        },
        "price": "150-500",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "billingIncrement": 1,
          "unitCode": "MON"
        }
      }
    ]
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is long-term care insurance and what does it cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Long-term care insurance covers the costs of extended care services including nursing homes, assisted living facilities, adult day care, and in-home care. It helps protect your retirement savings from the high costs of long-term care, which average $108,405 annually for nursing home care."
      }
    },
    {
      "@type": "Question",
      "name": "When should I buy long-term care insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ideal time to purchase long-term care insurance is between ages 50-65 when you're healthy and premiums are most affordable. Waiting until you're older or have health issues can result in higher premiums or denial of coverage."
      }
    },
    {
      "@type": "Question",
      "name": "How much does long-term care insurance cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Long-term care insurance premiums vary based on age, health, coverage amount, and benefit period. Annual premiums typically range from $1,500-$5,000, with an average of $2,800 for comprehensive coverage purchased in your 50s."
      }
    }
  ]
}

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Insurance", url: "/insurance" },
  { label: "Long-Term Care Insurance", url: "/long-term-care-insurance" }
]

export default function LongTermCareInsurance() {
  return (
    <InsurancePageAnalytics insuranceType="long_term_care">
      <LandingPageAnalytics
        pageType="regional"
        pageTitle="Long-Term Care Insurance"
        county=""
        state=""
        demographics={{
          avgAge: 58,
        }}
        keyMetrics={{
          averageCost: analyticsData.averageCost,
          pageType: 'long_term_care_insurance'
        }}
      />

      {/* Marketing Strategy Implementation */}
      <MarketingOptimizer
        pageKey="long-term-care-insurance"
        enableDynamicOptimization={true}
        trackKeywordPerformance={true}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbStructuredData(breadcrumbItems)) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white shadow-sm border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <KeywordOptimizedContent
              insuranceType="long_term_care"
              contentType="hero"
            />
            <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white/10 backdrop-blur rounded-lg p-8">
                <h3 className="text-lg font-semibold text-yellow-200 mb-2">Long-Term Care Costs 2025</h3>
                <div className="space-y-3 text-purple-100">
                  <div className="flex justify-between">
                    <span>Nursing Home (Annual):</span>
                    <span className="font-bold text-white">${ltcData.averageNursingHomeCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Home Health Aide:</span>
                    <span className="font-bold text-white">${ltcData.averageHomeCare.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Assisted Living:</span>
                    <span className="font-bold text-white">${ltcData.averageAssistedLiving.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Premium:</span>
                    <span className="font-bold text-white">${(ltcData.averagePremium/12).toFixed(0)}/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Page Title */}
          <section className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Long-Term Care Insurance 2025: Complete Guide to Nursing Home and Home Care Coverage
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Protect your retirement savings from devastating long-term care costs. Learn about comprehensive coverage options,
              costs, and how to choose the right long-term care insurance policy for your needs.
            </p>
          </section>

          {/* Cost Reality Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              2025 Long-Term Care Costs: What You Need to Know
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-red-500">
                <div className="text-4xl font-bold text-red-600 mb-2">${(ltcData.averageNursingHomeCost/1000).toFixed(0)}K</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Nursing Home</div>
                <div className="text-gray-600 text-sm">Annual cost for private room</div>
                <div className="text-red-500 text-sm mt-2">$297 per day average</div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-orange-500">
                <div className="text-4xl font-bold text-orange-600 mb-2">${(ltcData.averageAssistedLiving/1000).toFixed(0)}K</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Assisted Living</div>
                <div className="text-gray-600 text-sm">Annual assisted living costs</div>
                <div className="text-orange-500 text-sm mt-2">$148 per day average</div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center border-l-4 border-yellow-500">
                <div className="text-4xl font-bold text-yellow-600 mb-2">${(ltcData.averageHomeCare/1000).toFixed(0)}K</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Home Health Care</div>
                <div className="text-gray-600 text-sm">Annual home care aide costs</div>
                <div className="text-yellow-500 text-sm mt-2">$169 per day for 8 hours</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                70% of People Over 65 Will Need Long-Term Care
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-gray-700">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">20%</div>
                  <div>Will need care for more than 5 years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">$0</div>
                  <div>
                    <Link href="/medicare-advantage" className="hover:text-orange-800 underline">Medicare</Link> coverage for most long-term care
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">91%</div>
                  <div>Want to remain in their own home</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-gray-700 text-sm">
                  While <Link href="/medicare-advantage" className="text-orange-600 hover:text-orange-800 underline">Medicare Advantage plans</Link> may offer
                  limited long-term care benefits, traditional Medicare provides minimal coverage for custodial care needs.
                  Consider pairing LTC insurance with <Link href="/whole-life-insurance" className="text-purple-600 hover:text-purple-800 underline">whole life insurance</Link>
                  for comprehensive family financial protection.
                </p>
              </div>
            </div>
          </section>

          {/* LTC Insurance Features */}
          <section className="mb-16">
            <KeywordOptimizedContent
              insuranceType="long_term_care"
              contentType="features"
            />
          </section>

          {/* LTC Insurance Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Types of Long-Term Care Insurance Policies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Traditional LTC Insurance
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>" Pure long-term care coverage</div>
                  <div>" Lowest premiums when healthy</div>
                  <div>" Use-it-or-lose-it structure</div>
                  <div>" Comprehensive care benefits</div>
                  <div>" Premium stability concerns</div>
                </div>
                <div className="mt-4 text-purple-600 font-semibold">
                  Starting at $150-400/month
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Hybrid Life-LTC Policies
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>" <Link href="/whole-life-insurance" className="text-green-600 hover:text-green-800 underline">Life insurance</Link> + LTC benefits</div>
                  <div>" Return of premium guarantee</div>
                  <div>" Death benefit if care not needed</div>
                  <div>" Single or flexible premiums</div>
                  <div>" Popular hybrid option</div>
                </div>
                <div className="mt-4 text-green-600 font-semibold">
                  Starting at $300-600/month
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  Combines benefits of <Link href="/whole-life-insurance" className="text-green-600 hover:underline">permanent life insurance</Link> with long-term care coverage
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Annuity-LTC Combinations
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>" Annuity with LTC rider</div>
                  <div>" Guaranteed income stream</div>
                  <div>" Enhanced benefits for care</div>
                  <div>" Asset protection features</div>
                  <div>" Higher contribution limits</div>
                </div>
                <div className="mt-4 text-blue-600 font-semibold">
                  Varies by contribution
                </div>
              </div>
            </div>
          </section>

          {/* Coverage Options */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Understanding Long-Term Care Coverage Options
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Benefit Amount</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">$150/day</span>
                    <span className="text-gray-600">$54,750 annually</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">$200/day</span>
                    <span className="text-gray-600">$73,000 annually</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="font-medium text-purple-700">$300/day</span>
                    <span className="text-purple-600">$109,500 annually</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">$400/day</span>
                    <span className="text-gray-600">$146,000 annually</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Choose a benefit amount that covers 80-100% of care costs in your area.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefit Period Options</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">2 Years</span>
                    <span className="text-gray-600">Short-term protection</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="font-medium text-purple-700">3-4 Years</span>
                    <span className="text-purple-600">Most popular choice</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">6 Years</span>
                    <span className="text-gray-600">Extended protection</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">Lifetime</span>
                    <span className="text-gray-600">Maximum protection</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Average care duration is 3.7 years for women, 2.2 years for men.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Policy Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Inflation Protection</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>" 5% compound annual increase</li>
                    <li>" 3% simple annual increase</li>
                    <li>" Future purchase options</li>
                    <li>" Consumer Price Index adjustments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Elimination Period</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>" 90 days (most common)</li>
                    <li>" 30 days (higher premium)</li>
                    <li>" 180 days (lower premium)</li>
                    <li>" 365 days (significant savings)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Care Settings Covered */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Where You'll Use Your Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">Your Home</h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>" Home health aides</li>
                  <li>" Visiting nurses</li>
                  <li>" Physical therapy</li>
                  <li>" Home modifications</li>
                  <li>" Adult day care</li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-green-50 to-green-100 rounded-lg p-6">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-green-800 mb-2">Assisted Living</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>" Personal care assistance</li>
                  <li>" Meal preparation</li>
                  <li>" Medication management</li>
                  <li>" Transportation services</li>
                  <li>" Social activities</li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-purple-800 mb-2">Memory Care</h3>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>" Alzheimer's care</li>
                  <li>" Dementia support</li>
                  <li>" Secured facilities</li>
                  <li>" Specialized programs</li>
                  <li>" 24-hour supervision</li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-red-50 to-red-100 rounded-lg p-6">
                <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <h3 className="font-semibold text-red-800 mb-2">Nursing Home</h3>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>" Skilled nursing care</li>
                  <li>" 24-hour medical supervision</li>
                  <li>" Rehabilitation services</li>
                  <li>" Custodial care</li>
                  <li>" End-of-life care</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <KeywordOptimizedContent
              insuranceType="long_term_care"
              contentType="faq"
            />
          </section>

          {/* Marketing Strategy Section */}
          <section className="mb-16">
            <InsuranceMarketingStrategy
              insuranceType="long_term_care"
              targetDemographics={{
                primaryAge: "50-70",
                incomeLevel: "middle-to-high",
                lifeStage: "pre-retirement-to-early-retirement"
              }}
            />
          </section>

          {/* Primary Links Section */}
          <PrimaryLinksSection
            currentPageKey="long-term-care-insurance"
            className="py-16"
          />

          {/* Related Topics Section */}
          <ContextualLinksSection
            currentPageKey="long-term-care-insurance"
            className="py-12 bg-white"
          />

          {/* Cross-Sell Section */}
          <CrossSellSection
            currentPageKey="long-term-care-insurance"
            className="py-12 bg-gray-50"
          />

          {/* Comprehensive Planning Section */}
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Complete Your Financial Protection Strategy
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Life Insurance Protection</h3>
                <p className="text-gray-600 mb-4">
                  Protect your family with life insurance that complements your long-term care coverage:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <Link href="/whole-life-insurance" className="text-blue-600 hover:text-blue-800 underline">Whole life insurance</Link> for permanent protection with cash value</li>
                  <li>• <Link href="/term-life-insurance" className="text-blue-600 hover:text-blue-800 underline">Term life insurance</Link> for temporary high-coverage needs</li>
                  <li>• <Link href="/final-expense" className="text-blue-600 hover:text-blue-800 underline">Final expense insurance</Link> to cover burial and funeral costs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Healthcare Coverage</h3>
                <p className="text-gray-600 mb-4">
                  Ensure comprehensive healthcare coverage as you age:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <Link href="/medicare-advantage" className="text-purple-600 hover:text-purple-800 underline">Medicare Advantage plans</Link> for comprehensive health coverage</li>
                  <li>• <Link href="/supplemental-insurance" className="text-purple-600 hover:text-purple-800 underline">Medicare supplement insurance</Link> for gap coverage</li>
                  <li>• <Link href="/social-security-analysis" className="text-purple-600 hover:text-purple-800 underline">Social Security optimization</Link> for retirement income</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-700 text-sm">
                <strong>Expert Tip:</strong> The most comprehensive retirement protection combines
                <Link href="/whole-life-insurance" className="text-blue-600 hover:underline mx-1">permanent life insurance</Link>
                with long-term care insurance to protect both your family and your savings from unexpected care costs.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your Family's Financial Future
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Get personalized long-term care insurance quotes and protect your retirement savings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors">
                Get LTC Insurance Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Calculate Care Costs
              </button>
            </div>
          </section>
        </main>
      </div>
    </InsurancePageAnalytics>
  )
}