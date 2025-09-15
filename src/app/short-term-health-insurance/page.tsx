import { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Short-Term Health Insurance 2025 | Instant Approval Temporary Coverage | COBRA Alternative $150/Month',
  description: 'Get affordable short-term health insurance with same-day approval starting at $150/month. Perfect COBRA alternative for job transitions, early retirement, and college graduates. Coverage in all 50 states with flexible 30-364 day terms.',
  keywords: 'short term health insurance 2025, temporary health coverage same day approval, COBRA alternative $150, gap insurance job transition, bridge health insurance early retirement, temporary medical plans college graduates, instant approval health insurance, emergency health coverage, freelancer health insurance, between jobs health insurance, temporary health insurance under 65, short term medical coverage unemployed, affordable temporary health plans, quick health insurance approval, interim health coverage, gap health insurance plans, temporary insurance bridge coverage, short term health plans healthy individuals',
  openGraph: {
    title: 'Short-Term Health Insurance 2025 | Temporary Coverage Plans',
    description: 'Affordable short-term health insurance for coverage gaps. Compare temporary medical plans with instant approval and flexible terms.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/short-term-health-insurance',
  },
}

const analyticsData = {
  pageType: 'short-term-health-insurance',
  location: 'Nationwide',
  focusArea: 'temporary-coverage',
  planTypes: ['Short-term medical', 'Bridge insurance', 'Gap coverage', 'Temporary plans'],
  coverageDuration: ['30-364 days', 'Renewable options', 'Flexible terms'],
  targetAudience: ['Job transitions', 'COBRA alternatives', 'Early retirees', 'Students', 'Freelancers'],
  averageCost: 150,
  approvalTime: 'same-day',
  preexistingConditions: 'limited',
  majorProviders: ['UnitedHealthcare', 'Anthem', 'Everest', 'National General', 'Pivot Health']
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Short-Term Health Insurance Specialists",
  "description": "Get affordable short-term health insurance with same-day approval starting at $150/month. Perfect COBRA alternative for job transitions, early retirement, and college graduates.",
  "serviceType": "Short-Term Health Insurance",
  "areaServed": "United States",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Short-Term Health Insurance Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Basic Short-Term Health Insurance",
          "description": "Emergency services, hospitalization, urgent care, and diagnostic tests"
        },
        "price": "75-150",
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
      "name": "What is short-term health insurance and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Short-term health insurance provides temporary medical coverage for 30-364 days with same-day approval. It's designed for healthy individuals experiencing coverage gaps due to job transitions, early retirement, or college graduation. Plans start at $150/month and offer emergency, hospitalization, and urgent care benefits."
      }
    },
    {
      "@type": "Question", 
      "name": "Is short-term health insurance a good COBRA alternative?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Short-term health insurance can be an affordable COBRA alternative, costing 50-70% less than COBRA premiums. However, it doesn't cover pre-existing conditions and offers limited benefits compared to COBRA's comprehensive coverage. It's best for healthy individuals needing temporary emergency protection."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get same-day approval for short-term health insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most short-term health insurance applications are approved within hours or same-day. Coverage can typically start as soon as the next day after approval and payment. This makes it ideal for immediate coverage needs during job transitions or other life changes."
      }
    }
  ]
}

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Health Insurance", url: "/health-insurance" },
  { label: "Short-Term Coverage", url: "/short-term-health-insurance" }
]

export default function ShortTermHealthInsurance() {
  return (
    <>
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
      <LandingPageAnalytics
        pageType="regional"
        pageTitle="Short-Term Health Insurance"
        county=""
        state=""
        demographics={{
          avgAge: 35,
        }}
        keyMetrics={{
          averageCost: analyticsData.averageCost,
          approvalTime: analyticsData.approvalTime,
          coverageDuration: analyticsData.coverageDuration[0],
          pageType: 'short_term_health_insurance'
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white shadow-sm border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-green-600">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">/</span><Link href="/health-insurance" className="hover:text-green-600">Health Insurance</Link></li>
              <li className="flex items-center"><span className="mx-2">/</span><span className="text-gray-900">Short-Term Coverage</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-teal-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Short-Term Health Insurance<br />
                <span className="text-green-200">Same-Day Approval Starting $150/Month</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                Perfect COBRA alternative for job transitions, early retirement, and college graduates. Instant temporary medical coverage in all 50 states.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors">
                  Get Same-Day Approval Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors">
                  Compare COBRA Alternatives
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">Same Day</div>
                <div className="text-gray-600">Coverage Approval</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">$150</div>
                <div className="text-gray-600">Average Monthly Cost</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">30-364</div>
                <div className="text-gray-600">Days Coverage</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">50 States</div>
                <div className="text-gray-600">Nationwide Coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Comprehensive Marketing Section */}
          <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Short-Term Health Insurance?
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Get affordable temporary medical coverage with same-day approval starting at just $150/month. Perfect COBRA alternative for freelancers, between jobs coverage, early retirement bridge insurance, and college graduate health plans.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Approval Health Insurance</h3>
                <p className="text-gray-600">Get approved in minutes with same-day coverage activation. No waiting periods or lengthy medical underwriting for healthy individuals under 65.</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Alternative to COBRA</h3>
                <p className="text-gray-600">Save up to 70% compared to expensive COBRA premiums. Flexible temporary health coverage for job transitions, unemployment, and career changes.</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nationwide Emergency Coverage</h3>
                <p className="text-gray-600">Essential emergency medical protection in all 50 states. Perfect bridge insurance for early retirees waiting for <Link href="/medicare-advantage/honolulu-county" className="text-blue-600 hover:underline">Medicare eligibility at 65</Link>.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Perfect for These Life Situations:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-blue-900">Job Transition Coverage</h4>
                    <p className="text-sm text-blue-700">Between jobs health insurance, waiting for employer benefits, layoff protection</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-green-900">College Graduate Plans</h4>
                    <p className="text-sm text-green-700">Aging out at 26, graduation to first job gap, internship coverage</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-purple-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-purple-900">Early Retirement Bridge</h4>
                    <p className="text-sm text-purple-700">Pre-Medicare coverage under 65, retired before employer benefits end</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-orange-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-orange-900">Freelancer Protection</h4>
                    <p className="text-sm text-orange-700">Self-employed health insurance, gig worker coverage, contractor plans</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who Needs Short-Term Insurance */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Who Needs Short-Term Health Insurance?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Transitions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Between jobs with employer coverage</li>
                  <li>• Waiting for new employer benefits to start</li>
                  <li>• Recently laid off or terminated</li>
                  <li>• Starting a new business</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Students & Graduates</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Aging out of parent's plan at 26</li>
                  <li>• Gap between graduation and first job</li>
                  <li>• Study abroad or gap year</li>
                  <li>• Internships without benefits</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Early Retirees</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bridge coverage until Medicare eligible</li>
                  <li>• Too young for Medicare (under 65)</li>
                  <li>• Retired before employer benefits end</li>
                  <li>• COBRA is too expensive</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Plan Options */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Short-Term Plan Options</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Coverage Plans</h3>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-green-600">$75-150/month</div>
                  <div className="text-gray-600">Starting premium range</div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Emergency Services</div>
                      <div className="text-gray-600 text-sm">Hospital emergency room visits</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Hospitalization</div>
                      <div className="text-gray-600 text-sm">Inpatient hospital stays</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Urgent Care</div>
                      <div className="text-gray-600 text-sm">Walk-in clinic visits</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Diagnostic Tests</div>
                      <div className="text-gray-600 text-sm">X-rays, blood tests, imaging</div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Get Basic Plan Quote
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500 relative">
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Coverage Plans</h3>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-600">$150-300/month</div>
                  <div className="text-gray-600">Premium range with extras</div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">All Basic Benefits Plus:</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Doctor Office Visits</div>
                      <div className="text-gray-600 text-sm">Primary care physician visits</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Prescription Drugs</div>
                      <div className="text-gray-600 text-sm">Generic and brand medications</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Specialist Referrals</div>
                      <div className="text-gray-600 text-sm">Access to specialists</div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Enhanced Plan Quote
                </button>
              </div>
            </div>
          </section>

          {/* COBRA vs Short-Term Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Short-Term vs COBRA Comparison</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Short-Term Insurance</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">COBRA</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Monthly Cost</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-green-600 font-semibold">$75-300</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-red-600 font-semibold">$500-1,500</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pre-existing Conditions</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-yellow-600">Limited Coverage</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-green-600">Full Coverage</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Application Process</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-green-600">Same Day Approval</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-yellow-600">60-Day Window</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Coverage Duration</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-blue-600">30-364 Days</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-blue-600">Up to 18 Months</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Important Considerations */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Important Considerations</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    What's NOT Covered
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Pre-existing medical conditions</li>
                    <li>• Preventive care and wellness visits</li>
                    <li>• Maternity and childbirth</li>
                    <li>• Mental health services (typically)</li>
                    <li>• Substance abuse treatment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Best For
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Healthy individuals under 50</li>
                    <li>• Temporary coverage gaps</li>
                    <li>• Budget-conscious consumers</li>
                    <li>• Emergency protection only</li>
                    <li>• Bridge coverage until long-term plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* State Availability */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">State Availability & Regulations</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-600 mb-4">Fully Available States</h4>
                  <p className="text-gray-700 mb-4">Short-term plans available with standard terms (up to 364 days)</p>
                  <div className="text-sm text-gray-600">
                    Texas, <Link href="/medicare-advantage/miami-dade-county" className="text-blue-600 hover:underline">Florida</Link>, Tennessee, Georgia, North Carolina, Virginia, and 35+ other states
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-yellow-600 mb-4">Limited Availability</h4>
                  <p className="text-gray-700 mb-4">Shorter terms or additional restrictions (30-90 days typically)</p>
                  <div className="text-sm text-gray-600">
                    Illinois, Pennsylvania, Maryland, Connecticut, and several others
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-600 mb-4">Not Available</h4>
                  <p className="text-gray-700 mb-4">States that have banned or severely restricted short-term plans</p>
                  <div className="text-sm text-gray-600">
                    <Link href="/medicare-advantage/orange-county" className="text-blue-600 hover:underline">California</Link>, New York, Massachusetts, New Jersey, Vermont, Hawaii
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Compare Related Coverage Options */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Compare Related Coverage Options</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-700 mb-6">
                Explore other coverage options that may better suit your specific needs and circumstances.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 gap-6">
                <Link href="/retirement-planning" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Retirement Planning</h4>
                  <p className="text-gray-600 text-sm">Medicare transition planning and bridge coverage for early retirees</p>
                </Link>
                <Link href="/medicare-advantage/miami-dade-county" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Miami-Dade County Medicare Advantage</h4>
                  <p className="text-gray-600 text-sm">Bilingual Medicare coverage for South Florida's diverse Hispanic community with Spanish services</p>
                </Link>
                <Link href="/medicare-advantage/orange-county" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Orange County Medicare Advantage</h4>
                  <p className="text-gray-600 text-sm">Premium Medicare coverage for affluent California seniors with concierge medicine access</p>
                </Link>
                <Link href="/medicare-advantage/bexar-county-texas" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Bexar County Texas Medicare Advantage</h4>
                  <p className="text-gray-600 text-sm">Bilingual Medicare coverage for San Antonio's Hispanic community with Spanish-language support</p>
                </Link>
                <Link href="/medicare-advantage/hawaii-county" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Hawaii County Medicare Advantage</h4>
                  <p className="text-gray-600 text-sm">Comprehensive Medicare coverage for Big Island seniors with telemedicine benefits</p>
                </Link>
                <Link href="/medicare-advantage/honolulu-county" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Honolulu County Medicare Advantage</h4>
                  <p className="text-gray-600 text-sm">Urban Medicare coverage for Oahu's multicultural community with multilingual support</p>
                </Link>
                <Link href="/hidden-medicare-advantage-benefits-northern-virginia" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Hidden Medicare Benefits Northern Virginia</h4>
                  <p className="text-gray-600 text-sm">Exclusive $10,400+ hidden benefits for federal employees and Northern Virginia seniors</p>
                </Link>
                <Link href="/cobra-alternatives" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">COBRA Alternatives</h4>
                  <p className="text-gray-600 text-sm">Compare all options for continuing health coverage after job loss</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Comprehensive FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions About Short-Term Health Insurance</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What is short-term health insurance and how does it work?</h3>
                <p className="text-gray-700">Short-term health insurance provides temporary medical coverage for 30-364 days with same-day approval. It's designed for healthy individuals experiencing coverage gaps due to job transitions, early retirement, or college graduation. Plans start at $150/month and offer emergency, hospitalization, and urgent care benefits. Perfect as a COBRA alternative for immediate temporary coverage needs.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Is short-term health insurance a good COBRA alternative?</h3>
                <p className="text-gray-700">Short-term health insurance can be an affordable COBRA alternative, costing 50-70% less than COBRA premiums ($150-300 vs $500-1,500 monthly). However, it doesn't cover pre-existing conditions and offers limited benefits compared to COBRA's comprehensive coverage. It's best for healthy individuals needing temporary emergency protection between jobs or during career transitions.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I get same-day approval for short-term health insurance?</h3>
                <p className="text-gray-700">Yes, most short-term health insurance applications are approved within hours or same-day. Coverage can typically start as soon as the next day after approval and payment. This instant approval process makes it ideal for immediate coverage needs during job transitions, layoffs, or other life changes requiring quick health insurance solutions.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What does short-term health insurance cover?</h3>
                <p className="text-gray-700">Short-term health insurance typically covers emergency services, hospitalization, urgent care visits, diagnostic tests, and some doctor office visits. Enhanced plans may include prescription drugs and specialist referrals. However, it generally excludes pre-existing conditions, preventive care, maternity, mental health services, and substance abuse treatment. It's designed for unexpected medical emergencies only.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does short-term health insurance cost?</h3>
                <p className="text-gray-700">Short-term health insurance costs range from $75-300 per month, with an average of $150 monthly. Basic emergency coverage plans start at $75-150/month, while enhanced plans with doctor visits and prescriptions cost $150-300/month. Costs vary by age, location, coverage level, and deductible chosen. Significantly more affordable than COBRA alternatives.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Who is short-term health insurance best for?</h3>
                <p className="text-gray-700">Short-term health insurance is ideal for healthy individuals under 50 experiencing temporary coverage gaps. Perfect for job transitions, between jobs coverage, college graduates aging out at 26, early retirees under 65 waiting for Medicare, freelancers, self-employed individuals, and those needing affordable COBRA alternatives. Best for emergency protection during life transitions.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Is short-term health insurance available in all states?</h3>
                <p className="text-gray-700">Short-term health insurance availability varies by state. Fully available in 35+ states including <Link href="/medicare-advantage/bexar-county-texas" className="text-blue-600 hover:underline">Texas</Link>, Florida, Tennessee, Georgia, North Carolina, and Virginia with standard 364-day terms. Limited availability in states like Illinois, Pennsylvania, Maryland with shorter 30-90 day terms. Not available in California, New York, Massachusetts, New Jersey, Vermont, and Hawaii due to state restrictions.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I renew short-term health insurance plans?</h3>
                <p className="text-gray-700">Many short-term health insurance plans offer renewable options, allowing you to extend coverage for up to 364 days total in most states. However, renewal isn't guaranteed and may require new medical underwriting. Some states limit total coverage duration. It's designed as temporary bridge insurance, not long-term health coverage replacement.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What's not covered by short-term health insurance?</h3>
                <p className="text-gray-700">Short-term health insurance typically excludes pre-existing medical conditions, preventive care, wellness visits, maternity and childbirth, mental health services, substance abuse treatment, prescription drugs (on basic plans), and routine doctor visits. It's emergency-focused coverage, not comprehensive health insurance. Always review plan details for specific exclusions and limitations.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How does short-term insurance work for early retirees?</h3>
                <p className="text-gray-700">Short-term health insurance provides essential bridge coverage for early retirees under 65 who are too young for Medicare. Costs significantly less than expensive COBRA continuation coverage, making it an affordable option for healthy retirees. Offers emergency protection during the gap between employer benefits ending and <Link href="/retirement-planning" className="text-blue-600 hover:underline">Medicare eligibility beginning at age 65</Link>. Ideal temporary solution for early retirement health insurance needs.</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-16 bg-gradient-to-r from-green-600 to-teal-800 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-4">Get Covered in Minutes, Not Months</h2>
            <p className="text-xl mb-8 text-green-100">Same-day approval with coverage starting as soon as tomorrow</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors">
                Get Same-Day Approval Quote - $150/Month
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors">
                Compare COBRA Alternatives Now
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}