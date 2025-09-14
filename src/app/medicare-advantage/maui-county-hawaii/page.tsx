import { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import MarketingOptimizer from '@/components/MarketingOptimizer'
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs'
import { PrimaryLinksSection, ContextualLinksSection, CrossSellSection } from '@/components/InternalLinksSection'

export const metadata: Metadata = {
  title: 'Maui County Hawaii Medicare Advantage Plans 2025 | Island Healthcare Networks | Kaiser Permanente HMSA',
  description: 'Find the best Medicare Advantage plans in Maui County, Hawaii for 2025. Comprehensive island healthcare with Kaiser Permanente, HMSA, and island-specific benefits serving Kahului, Wailuku, Kihei, and Hana with tropical healthcare solutions.',
  keywords: 'Maui County Hawaii Medicare Advantage 2025, Medicare plans Hawaii island, Kaiser Permanente Maui, HMSA Medicare Advantage Hawaii, Medicare Advantage Kahului, Wailuku Medicare plans, Kihei Medicare Hawaii, Hawaii Medicare enrollment, island healthcare Medicare, Medicare plans tropical climate, Hawaii Medicare brokers, Medicare Advantage Pacific islands, Maui healthcare networks, Hawaii Medicare specialists',
  openGraph: {
    title: 'Maui County Hawaii Medicare Advantage Plans 2025 | Island Healthcare Networks',
    description: 'Premium Medicare Advantage plans in Maui County with Kaiser Permanente and HMSA networks plus island-specific healthcare benefits.',
    type: 'website',
  },
}

const mauiCountyData = {
  totalBeneficiaries: 38000,
  planCount: 12,
  zeroPremiumPlans: 8,
  averagePremium: 28,
  topRatedPlans: 6,
  maPenetration: 52,
  counties: ['Maui County'],
  majorCities: ['Kahului', 'Wailuku', 'Kihei', 'Lahaina', 'Hana'],
  demographics: {
    avgAge: 71,
    totalPopulation: 164754,
    asian: 28.2,
    white: 34.1,
    nativeHawaiian: 22.8,
    hispanic: 11.2,
    retireeInflux: 24.5,
    medianIncome: 74195
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Maui County Hawaii Medicare Advantage Plans",
  "description": "Comprehensive Medicare Advantage coverage in Maui County with Kaiser Permanente, HMSA, and island-specific healthcare benefits.",
  "serviceType": "Medicare Advantage Plans",
  "areaServed": {
    "@type": "Place",
    "name": "Maui County, Hawaii"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medicare Advantage Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Island Healthcare Medicare Advantage Plans",
          "description": "Medicare coverage designed for island living with tropical healthcare solutions"
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
      "name": "What Medicare Advantage plans are available in Maui County, Hawaii?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Maui County offers 12 Medicare Advantage plans for 2025, including 8 zero-premium options. Top providers include Kaiser Permanente Hawaii, HMSA (Hawaii Medical Service Association), and Humana with comprehensive island healthcare networks."
      }
    },
    {
      "@type": "Question",
      "name": "How does island living affect Medicare coverage in Maui County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Advantage plans in Maui County are designed for island living with special provisions for inter-island travel, emergency evacuation coverage, tropical health considerations, and coordination with mainland specialist care when needed."
      }
    }
  ]
}

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Medicare Advantage", url: "/medicare-advantage" },
  { label: "Hawaii", url: "/medicare-advantage/hawaii" },
  { label: "Maui County", url: "/medicare-advantage/maui-county-hawaii" }
]

export default function MauiCountyHawaiiMedicareAdvantage() {
  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Maui County Hawaii Medicare Advantage Plans"
        county="Maui County"
        state="Hawaii"
        demographics={{
          avgAge: mauiCountyData.demographics.avgAge,
          hispanicPopulation: mauiCountyData.demographics.hispanic,
          maPenetrationRate: mauiCountyData.maPenetration,
        }}
        keyMetrics={{
          planCount: mauiCountyData.planCount,
          zeroPremiumPlans: mauiCountyData.zeroPremiumPlans,
          maPenetration: mauiCountyData.maPenetration,
          pageType: 'medicare_advantage_county'
        }}
      />

      <MarketingOptimizer
        pageKey="maui-county-hawaii"
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
        <nav className="bg-white shadow-sm border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </nav>

        <section className="relative bg-gradient-to-r from-blue-600 to-teal-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Maui County Hawaii<br />
                  <span className="text-blue-200">Medicare Advantage Plans 2025</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Island healthcare coverage with Kaiser Permanente and HMSA networks. Tropical Medicare solutions serving 38,000+ beneficiaries in Kahului, Wailuku, Kihei, and across beautiful Maui County.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                    Compare Island Plans
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                    Get Hawaii Coverage
                  </button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-8">
                <h3 className="text-lg font-semibold text-yellow-200 mb-2">Maui County 2025 Medicare Stats</h3>
                <div className="space-y-3 text-blue-100">
                  <div className="flex justify-between">
                    <span>Total Plans Available:</span>
                    <span className="font-bold text-white">{mauiCountyData.planCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zero Premium Plans:</span>
                    <span className="font-bold text-white">{mauiCountyData.zeroPremiumPlans}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Premium:</span>
                    <span className="font-bold text-white">${mauiCountyData.averagePremium}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MA Penetration:</span>
                    <span className="font-bold text-white">{mauiCountyData.maPenetration}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Island Healthcare Advantages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">{mauiCountyData.demographics.nativeHawaiian}%</div>
                <div className="text-gray-600">Native Hawaiian</div>
                <div className="text-sm text-gray-500 mt-1">Cultural healthcare focus</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{mauiCountyData.demographics.retireeInflux}%</div>
                <div className="text-gray-600">Mainland Retirees</div>
                <div className="text-sm text-gray-500 mt-1">Specialized transition care</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{mauiCountyData.planCount}</div>
                <div className="text-gray-600">Medicare Plans</div>
                <div className="text-sm text-gray-500 mt-1">Island-optimized options</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">${mauiCountyData.averagePremium}</div>
                <div className="text-gray-600">Avg Premium</div>
                <div className="text-sm text-gray-500 mt-1">Island healthcare value</div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Top Maui County Medicare Advantage Plans 2025
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Kaiser Permanente Hawaii
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>• Integrated island healthcare</div>
                  <div>• Maui Medical Center access</div>
                  <div>• Inter-island coordination</div>
                  <div>• Comprehensive wellness programs</div>
                  <div>• Multiple $0 premium options</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  HMSA Medicare Advantage
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>• Hawaii Medical Service Association</div>
                  <div>• Island-wide provider network</div>
                  <div>• Cultural competency focus</div>
                  <div>• Emergency evacuation benefits</div>
                  <div>• Local healthcare emphasis</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Humana Hawaii Plans
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>• National network support</div>
                  <div>• Mainland specialist coordination</div>
                  <div>• Retiree-focused benefits</div>
                  <div>• Travel coverage options</div>
                  <div>• Flexible plan designs</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Island-Specific Medicare Benefits
            </h2>
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Healthcare Designed for Tropical Island Living
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-teal-800 mb-4">Island Healthcare Features</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span><strong>Inter-Island Travel:</strong> Coverage for medical travel between Hawaiian islands</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span><strong>Emergency Evacuation:</strong> Specialized coverage for urgent mainland transfers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span><strong>Tropical Health:</strong> Coverage for island-specific health considerations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span><strong>Cultural Services:</strong> Native Hawaiian and Pacific Islander healthcare programs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">Mainland Coordination</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Specialist Access:</strong> Coordinated care with mainland specialists when needed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Continuity of Care:</strong> Seamless transitions for snowbirds and travelers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Telehealth Services:</strong> Virtual consultations with mainland providers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Family Coordination:</strong> Healthcare management for families split between islands and mainland</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  question: "What Medicare Advantage plans are available in Maui County, Hawaii?",
                  answer: "Maui County offers 12 Medicare Advantage plans for 2025, including 8 zero-premium options. Top providers include Kaiser Permanente Hawaii, HMSA (Hawaii Medical Service Association), and Humana with comprehensive island healthcare networks."
                },
                {
                  question: "How does island living affect Medicare coverage in Maui County?",
                  answer: "Medicare Advantage plans in Maui County are designed for island living with special provisions for inter-island travel, emergency evacuation coverage, tropical health considerations, and coordination with mainland specialist care when needed."
                },
                {
                  question: "What healthcare providers are available in Maui County?",
                  answer: "Major providers include Maui Memorial Medical Center, Kaiser Permanente Maui Clinic, HMSA network providers, and numerous community health centers. Plans offer access to both local island healthcare and mainland specialist coordination."
                },
                {
                  question: "Do Maui Medicare plans cover travel to the mainland for medical care?",
                  answer: "Many Maui Medicare Advantage plans include coverage for emergency medical evacuation to the mainland and may coordinate non-emergency specialist care when services aren't available locally. Coverage varies by plan."
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

          <PrimaryLinksSection
            currentPageKey="maui-county-hawaii"
            className="py-16"
          />

          <ContextualLinksSection
            currentPageKey="maui-county-hawaii"
            className="py-12 bg-white"
          />

          <CrossSellSection
            currentPageKey="maui-county-hawaii"
            className="py-12 bg-gray-50"
          />

          <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-teal-700 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Explore Maui County Medicare Advantage Plans?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get personalized Medicare Advantage plan comparisons for Maui County's island healthcare networks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Compare Island Plans
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Get Hawaii Coverage
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}