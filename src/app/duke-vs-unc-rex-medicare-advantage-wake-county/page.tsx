import { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import MarketingOptimizer from '@/components/MarketingOptimizer'
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs'
import { PrimaryLinksSection, ContextualLinksSection, CrossSellSection } from '@/components/InternalLinksSection'

export const metadata: Metadata = {
  title: 'Duke vs UNC REX Medicare Advantage Wake County | Compare Top Healthcare Networks 2025',
  description: 'Compare Duke Health and UNC REX Medicare Advantage plans in Wake County, NC. Find the best hospital network, doctor access, and Medicare benefits for Raleigh-Durham residents.',
  keywords: 'Duke Health Medicare Advantage Wake County, UNC REX Medicare Advantage Raleigh, Medicare Advantage Wake County NC, Duke vs UNC REX Medicare, Raleigh Medicare Advantage plans, Durham Medicare Advantage, Wake County Medicare benefits, Duke Health Network Medicare, UNC REX Healthcare Medicare, Medicare Advantage North Carolina, Wake County hospital networks, Duke University Hospital Medicare, REX Hospital Medicare Advantage',
  openGraph: {
    title: 'Duke vs UNC REX Medicare Advantage Wake County | Compare Healthcare Networks 2025',
    description: 'Compare Duke Health and UNC REX Medicare Advantage plans in Wake County, NC. Find the best coverage for Raleigh-Durham residents.',
    type: 'website',
  },
}

const wakeCountyData = {
  totalResidents: 1142000,
  seniors65Plus: 142000,
  medicareAdvantageEnrollment: 87000,
  dukeNetworkProviders: 850,
  uncRexProviders: 920,
  averagePremiumSavings: 1850,
  qualityRating: 4.5,
  preventiveCareUtilization: 82
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Duke vs UNC REX Medicare Advantage Wake County Comparison",
  "description": "Compare Duke Health and UNC REX Medicare Advantage plans in Wake County, NC including Raleigh, Durham, Cary, and surrounding areas.",
  "serviceType": "Medicare Advantage Plan Comparison",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Wake County, North Carolina"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wake County Medicare Advantage Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Duke Health Medicare Advantage Plans",
          "description": "Medicare Advantage plans with access to Duke University Hospital and Duke Health network"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UNC REX Medicare Advantage Plans",
          "description": "Medicare Advantage plans with access to UNC REX Hospital and UNC Health network"
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
      "name": "What's the difference between Duke Health and UNC REX Medicare Advantage plans in Wake County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Duke Health Medicare Advantage plans provide access to Duke University Hospital, Duke Regional Hospital, and the entire Duke Health network with 850+ providers. UNC REX plans offer access to UNC REX Hospital, UNC Health network, and 920+ providers. Both offer comprehensive coverage but with different hospital networks and specialist access."
      }
    },
    {
      "@type": "Question",
      "name": "Which hospitals are covered by Duke vs UNC REX Medicare Advantage plans in Wake County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Duke Health plans cover Duke University Hospital, Duke Regional Hospital, Duke Raleigh Hospital, and Duke Health network facilities. UNC REX plans cover UNC REX Hospital, REX Hospital Raleigh, REX Hospital Cary, UNC Hospitals, and UNC Health network facilities throughout Wake County."
      }
    },
    {
      "@type": "Question",
      "name": "How do I choose between Duke and UNC REX Medicare Advantage plans in Wake County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consider your current doctors and preferred hospitals, prescription drug needs, premium costs, and additional benefits. If you prefer Duke University Hospital and specialists, choose Duke Health plans. If you prefer UNC REX Hospital network, choose UNC REX plans. Both offer quality care with 4.5+ star ratings."
      }
    }
  ]
}

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Medicare Advantage", url: "/medicare-advantage" },
  { label: "Wake County", url: "/medicare-advantage/wake-county" },
  { label: "Duke vs UNC REX", url: "/duke-vs-unc-rex-medicare-advantage-wake-county" }
]

export default function DukeVsUNCRexMedicareAdvantageWakeCounty() {
  return (
    <>
      <LandingPageAnalytics
        pageType="regional"
        pageTitle="Duke vs UNC REX Medicare Advantage Wake County"
        county="Wake County"
        state="North Carolina"
        demographics={{
          avgAge: 68,
          totalResidents: wakeCountyData.totalResidents,
          seniors65Plus: wakeCountyData.seniors65Plus,
        }}
        keyMetrics={{
          totalBeneficiaries: wakeCountyData.medicareAdvantageEnrollment,
          pageType: 'provider_comparison'
        }}
      />

      {/* Marketing Strategy Implementation */}
      <MarketingOptimizer
        pageKey="duke-vs-unc-rex-medicare-advantage-wake-county"
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

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white shadow-sm border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Duke Health vs UNC REX<br />
                  <span className="text-blue-200">Medicare Advantage</span><br />
                  Wake County
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Compare top Medicare Advantage plans from Duke Health and UNC REX networks serving {wakeCountyData.seniors65Plus.toLocaleString()}+ seniors in Raleigh, Durham, Cary, and Wake County.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                    Compare Plans Now
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors">
                    Find My Doctor
                  </button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-8">
                <h3 className="text-lg font-semibold text-yellow-200 mb-2">Wake County Medicare Advantage</h3>
                <div className="space-y-3 text-blue-100">
                  <div className="flex justify-between">
                    <span>Wake County Seniors:</span>
                    <span className="font-bold text-white">{wakeCountyData.seniors65Plus.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medicare Advantage Enrollment:</span>
                    <span className="font-bold text-white">{wakeCountyData.medicareAdvantageEnrollment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duke Network Providers:</span>
                    <span className="font-bold text-white">{wakeCountyData.dukeNetworkProviders}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>UNC REX Providers:</span>
                    <span className="font-bold text-white">{wakeCountyData.uncRexProviders}+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Quick Comparison Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Duke Health vs UNC REX: Quick Comparison
            </h2>
            <div className="grid md:grid-cols-2 gap-8">

              {/* Duke Health Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Duke Health Network</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-blue-200 mr-3"><�</span>
                    <span><strong>Primary Hospital:</strong> Duke University Hospital</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-200 mr-3">=h
�</span>
                    <span><strong>Network Size:</strong> {wakeCountyData.dukeNetworkProviders}+ providers</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-200 mr-3">P</span>
                    <span><strong>Quality Rating:</strong> {wakeCountyData.qualityRating} stars</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-200 mr-3"><�</span>
                    <span><strong>Specialties:</strong> Cancer, Cardiology, Neurology</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-200 mr-3">=�</span>
                    <span><strong>Locations:</strong> Durham, Raleigh, Wake County</span>
                  </div>
                </div>
              </div>

              {/* UNC REX Card */}
              <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">UNC REX Network</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-teal-200 mr-3"><�</span>
                    <span><strong>Primary Hospital:</strong> UNC REX Hospital</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-200 mr-3">=h
�</span>
                    <span><strong>Network Size:</strong> {wakeCountyData.uncRexProviders}+ providers</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-200 mr-3">P</span>
                    <span><strong>Quality Rating:</strong> {wakeCountyData.qualityRating} stars</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-200 mr-3"><�</span>
                    <span><strong>Specialties:</strong> Heart, Orthopedics, Women's Health</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-200 mr-3">=�</span>
                    <span><strong>Locations:</strong> Raleigh, Cary, Wake County</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Comparison Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Detailed Plan Comparison
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Duke Health Network</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-teal-600">UNC REX Network</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Primary Hospital</td>
                      <td className="px-6 py-4 text-center text-blue-700">Duke University Hospital</td>
                      <td className="px-6 py-4 text-center text-teal-700">UNC REX Hospital</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Network Providers</td>
                      <td className="px-6 py-4 text-center text-blue-700">{wakeCountyData.dukeNetworkProviders}+</td>
                      <td className="px-6 py-4 text-center text-teal-700">{wakeCountyData.uncRexProviders}+</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Quality Rating</td>
                      <td className="px-6 py-4 text-center text-blue-700">{wakeCountyData.qualityRating} P</td>
                      <td className="px-6 py-4 text-center text-teal-700">{wakeCountyData.qualityRating} P</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Average Monthly Premium</td>
                      <td className="px-6 py-4 text-center text-blue-700">$45-85</td>
                      <td className="px-6 py-4 text-center text-teal-700">$35-75</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Emergency Room Coverage</td>
                      <td className="px-6 py-4 text-center text-green-600"> Nationwide</td>
                      <td className="px-6 py-4 text-center text-green-600"> Nationwide</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Prescription Drug Coverage</td>
                      <td className="px-6 py-4 text-center text-green-600"> Comprehensive</td>
                      <td className="px-6 py-4 text-center text-green-600"> Comprehensive</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Wellness Benefits</td>
                      <td className="px-6 py-4 text-center text-green-600"> Fitness, Vision, Dental</td>
                      <td className="px-6 py-4 text-center text-green-600"> Fitness, Vision, Dental</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Hospital Networks Detail */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Hospital Networks in Wake County
            </h2>
            <div className="grid md:grid-cols-2 gap-8">

              {/* Duke Health Facilities */}
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-blue-800 mb-6">Duke Health Facilities</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Duke University Hospital</h4>
                    <p className="text-gray-600 text-sm">2301 Erwin Rd, Durham, NC</p>
                    <p className="text-gray-600 text-sm">Tertiary care, Level I trauma center</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Duke Regional Hospital</h4>
                    <p className="text-gray-600 text-sm">3643 N Roxboro Rd, Durham, NC</p>
                    <p className="text-gray-600 text-sm">Full-service community hospital</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Duke Raleigh Hospital</h4>
                    <p className="text-gray-600 text-sm">3400 Wake Forest Rd, Raleigh, NC</p>
                    <p className="text-gray-600 text-sm">Specialty and surgical services</p>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialty Centers:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>" Duke Cancer Institute</li>
                      <li>" Duke Heart Center</li>
                      <li>" Duke Neurology</li>
                      <li>" Duke Orthopedics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* UNC REX Facilities */}
              <div className="bg-teal-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-teal-800 mb-6">UNC REX Facilities</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-semibold text-gray-900">UNC REX Hospital</h4>
                    <p className="text-gray-600 text-sm">4420 Lake Boone Trail, Raleigh, NC</p>
                    <p className="text-gray-600 text-sm">Full-service medical center</p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-semibold text-gray-900">REX Hospital Cary</h4>
                    <p className="text-gray-600 text-sm">2500 Blue Ridge Rd, Cary, NC</p>
                    <p className="text-gray-600 text-sm">Community hospital and emergency services</p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-semibold text-gray-900">UNC Hospitals Chapel Hill</h4>
                    <p className="text-gray-600 text-sm">101 Manning Dr, Chapel Hill, NC</p>
                    <p className="text-gray-600 text-sm">Academic medical center</p>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialty Centers:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>" REX Cancer Center</li>
                      <li>" REX Heart & Vascular</li>
                      <li>" REX Orthopedics</li>
                      <li>" UNC Women's Health</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Geographic Coverage */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Wake County Coverage Areas
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Northern Wake County</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Cities:</strong> Raleigh (North), Wake Forest, Rolesville</p>
                    <p><strong>Duke Access:</strong> Duke Raleigh Hospital, Primary Care</p>
                    <p><strong>UNC REX Access:</strong> UNC REX Hospital, Multiple Clinics</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Central Wake County</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Cities:</strong> Raleigh (Central), Knightdale</p>
                    <p><strong>Duke Access:</strong> Multiple Clinics, Specialty Centers</p>
                    <p><strong>UNC REX Access:</strong> UNC REX Hospital (Primary)</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Southern Wake County</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Cities:</strong> Cary, Apex, Holly Springs, Fuquay-Varina</p>
                    <p><strong>Duke Access:</strong> Duke Primary Care, Referrals to Durham</p>
                    <p><strong>UNC REX Access:</strong> REX Hospital Cary (Primary)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Duke vs UNC REX Medicare Advantage - Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  question: "What's the difference between Duke Health and UNC REX Medicare Advantage plans in Wake County?",
                  answer: "Duke Health Medicare Advantage plans provide access to Duke University Hospital, Duke Regional Hospital, and the entire Duke Health network with 850+ providers. UNC REX plans offer access to UNC REX Hospital, UNC Health network, and 920+ providers. Both offer comprehensive coverage but with different hospital networks and specialist access."
                },
                {
                  question: "Which hospitals are covered by Duke vs UNC REX Medicare Advantage plans in Wake County?",
                  answer: "Duke Health plans cover Duke University Hospital, Duke Regional Hospital, Duke Raleigh Hospital, and Duke Health network facilities. UNC REX plans cover UNC REX Hospital, REX Hospital Raleigh, REX Hospital Cary, UNC Hospitals, and UNC Health network facilities throughout Wake County."
                },
                {
                  question: "How do I choose between Duke and UNC REX Medicare Advantage plans in Wake County?",
                  answer: "Consider your current doctors and preferred hospitals, prescription drug needs, premium costs, and additional benefits. If you prefer Duke University Hospital and specialists, choose Duke Health plans. If you prefer UNC REX Hospital network, choose UNC REX plans. Both offer quality care with 4.5+ star ratings."
                },
                {
                  question: "Can I use both Duke and UNC REX hospitals with my Medicare Advantage plan?",
                  answer: "Generally, you can only use in-network providers without additional costs. If you choose a Duke Health plan, UNC REX hospitals would be out-of-network (higher costs). If you choose UNC REX plans, Duke hospitals would be out-of-network. However, emergency care is covered at any hospital."
                },
                {
                  question: "Which plan is better for residents of Cary, Apex, and southern Wake County?",
                  answer: "For southern Wake County residents, UNC REX plans may be more convenient due to REX Hospital Cary's location and extensive clinic network in that area. Duke Health has fewer facilities in southern Wake County but offers excellent specialist care in Durham."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Primary Links Section */}
          <PrimaryLinksSection
            currentPageKey="duke-vs-unc-rex-medicare-advantage-wake-county"
            className="py-16"
          />

          {/* Related Topics Section */}
          <ContextualLinksSection
            currentPageKey="duke-vs-unc-rex-medicare-advantage-wake-county"
            className="py-12 bg-white"
          />

          {/* Cross-Sell Section */}
          <CrossSellSection
            currentPageKey="duke-vs-unc-rex-medicare-advantage-wake-county"
            className="py-12 bg-gray-50"
          />

          {/* CTA Section */}
          <section className="text-center py-16 bg-gradient-to-r from-blue-700 to-indigo-900 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-6">
              Find Your Best Medicare Advantage Plan in Wake County
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Compare Duke Health and UNC REX Medicare Advantage plans with personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Compare Plans & Costs
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors">
                Check Provider Networks
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}