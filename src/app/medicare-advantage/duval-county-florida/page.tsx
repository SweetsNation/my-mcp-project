import { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import MarketingOptimizer from '@/components/MarketingOptimizer'
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs'
import { PrimaryLinksSection, ContextualLinksSection, CrossSellSection } from '@/components/InternalLinksSection'

export const metadata: Metadata = {
  title: 'Duval County Florida Medicare Advantage Plans 2025 | Jacksonville Mayo Clinic | Baptist Health Networks',
  description: 'Find the best Medicare Advantage plans in Duval County, Florida for 2025. Comprehensive Jacksonville healthcare networks including Mayo Clinic, Baptist Health, and UF Health with diverse community focus and no state income tax benefits.',
  keywords: 'Duval County Florida Medicare Advantage 2025, Jacksonville Medicare plans, Mayo Clinic Medicare Advantage, Baptist Health Medicare, UF Health Jacksonville, Florida Medicare enrollment, Jacksonville healthcare networks, Duval County Medicare brokers, Florida Medicare no state tax, Jacksonville diverse community Medicare, Baptist Medical Center Medicare, Mayo Clinic One Jacksonville, Memorial Hospital Medicare, St. Vincents HealthCare Medicare, Florida Blue Medicare Advantage Duval',
  openGraph: {
    title: 'Duval County Florida Medicare Advantage Plans 2025 | Jacksonville Networks',
    description: 'Comprehensive Medicare Advantage coverage in Duval County with Mayo Clinic, Baptist Health, and UF Health networks serving Jacksonville\'s diverse community.',
    type: 'website',
  ,
      images: [
        {
          url: 'https://www.elmaginsurance.com/images/og-medicare-advantage.jpg',
          width: 1200,
          height: 630,
          alt: 'Medicare Advantage Plans - El-Mag Insurance',
        },
      ],
    },
}

const duvalCountyData = {
  totalBeneficiaries: 195000,
  planCount: 26,
  zeroPremiumPlans: 19,
  averagePremium: 22,
  topRatedPlans: 10,
  maPenetration: 44,
  counties: ['Duval County'],
  majorCities: ['Jacksonville', 'Neptune Beach', 'Jacksonville Beach', 'Atlantic Beach'],
  demographics: {
    avgAge: 69,
    totalPopulation: 995567,
    hispanic: 9.7,
    black: 30.2,
    white: 55.1,
    militaryRetirees: 18.5,
    medianIncome: 54701
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Duval County Florida Medicare Advantage Plans",
  "description": "Comprehensive Medicare Advantage coverage in Duval County with Mayo Clinic, Baptist Health, and UF Health networks serving Jacksonville's diverse community.",
  "serviceType": "Medicare Advantage Plans",
  "areaServed": {
    "@type": "Place",
    "name": "Duval County, Florida"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What Medicare Advantage plans are available in Duval County, Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Duval County offers 26 Medicare Advantage plans for 2025, including 19 zero-premium options. Top providers include Florida Blue, Humana, UnitedHealthcare, and Aetna with networks including Mayo Clinic, Baptist Health, UF Health Jacksonville, and Memorial Hospital."
      }
    },
    {
      "@type": "Question",
      "name": "Does Florida's no state income tax benefit Medicare beneficiaries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Florida has no state income tax, which means Medicare beneficiaries keep more of their retirement income. This makes Florida particularly attractive for retirees, and Medicare Advantage plans often reflect this with competitive benefits and pricing."
      }
    }
  ]
}

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Medicare Advantage", url: "/medicare-advantage" },
  { label: "Florida", url: "/medicare-advantage/florida" },
  { label: "Duval County", url: "/medicare-advantage/duval-county-florida" }
]

export default function DuvalCountyFloridaMedicareAdvantage() {
  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Duval County Florida Medicare Advantage Plans"
        county="Duval County"
        state="Florida"
        demographics={{
          avgAge: duvalCountyData.demographics.avgAge,
          hispanicPopulation: duvalCountyData.demographics.hispanic
        }}
        keyMetrics={{
          planCount: duvalCountyData.planCount,
          zeroPremiumPlans: duvalCountyData.zeroPremiumPlans,
          maPenetration: duvalCountyData.maPenetration,
          pageType: 'medicare_advantage_county'
        }}
      />

      {/* Marketing Strategy Implementation */}
      <MarketingOptimizer
        pageKey="duval-county-florida"
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
        <section className="relative bg-gradient-to-r from-blue-600 to-teal-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Duval County Florida<br />
                  <span className="text-blue-200">Medicare Advantage Plans 2025</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Comprehensive Jacksonville healthcare with Mayo Clinic, Baptist Health, and UF Health networks. No state income tax benefits serving 195,000+ beneficiaries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                    Compare Jacksonville Plans
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                    Get Florida Tax Benefits
                  </button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-8">
                <h3 className="text-lg font-semibold text-yellow-200 mb-2">Duval County 2025 Medicare Stats</h3>
                <div className="space-y-3 text-blue-100">
                  <div className="flex justify-between">
                    <span>Total Plans Available:</span>
                    <span className="font-bold text-white">{duvalCountyData.planCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zero Premium Plans:</span>
                    <span className="font-bold text-white">{duvalCountyData.zeroPremiumPlans}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Premium:</span>
                    <span className="font-bold text-white">${duvalCountyData.averagePremium}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Military Retirees:</span>
                    <span className="font-bold text-white">{duvalCountyData.demographics.militaryRetirees}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Available Plans Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Best Duval County Medicare Advantage Plans 2025
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Mayo Clinic Medicare Advantage
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>" Mayo Clinic One Jacksonville</div>
                  <div>" World-renowned medical expertise</div>
                  <div>" Integrated care delivery</div>
                  <div>" Research-based treatments</div>
                  <div>" Premium specialist access</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Baptist Health Medicare Plans
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>" Baptist Medical Center network</div>
                  <div>" Comprehensive community care</div>
                  <div>" Multiple Jacksonville locations</div>
                  <div>" Full-service hospitals</div>
                  <div>" Local provider relationships</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  UF Health Jacksonville Plans
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>" Academic medical center</div>
                  <div>" Teaching hospital excellence</div>
                  <div>" Research and innovation</div>
                  <div>" Specialty care access</div>
                  <div>" University-affiliated quality</div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions - Duval County Medicare Advantage
            </h2>
            <div className="space-y-8">
              {[
                {
                  question: "What Medicare Advantage plans are available in Duval County, Florida?",
                  answer: "Duval County offers 26 Medicare Advantage plans for 2025, including 19 zero-premium options. Top providers include Florida Blue, Humana, UnitedHealthcare, and Aetna with networks including Mayo Clinic, Baptist Health, UF Health Jacksonville, and Memorial Hospital."
                },
                {
                  question: "Does Florida's no state income tax benefit Medicare beneficiaries?",
                  answer: "Yes, Florida has no state income tax, which means Medicare beneficiaries keep more of their retirement income. This makes Florida particularly attractive for retirees, and Medicare Advantage plans often reflect this with competitive benefits and pricing."
                },
                {
                  question: "What healthcare providers are included in Jacksonville Medicare Advantage networks?",
                  answer: "Major providers include Mayo Clinic One Jacksonville, Baptist Health system, UF Health Jacksonville, Memorial Hospital, St. Vincent's HealthCare, and numerous community health centers serving the greater Jacksonville area and Duval County."
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
            currentPageKey="duval-county-florida"
            className="py-16"
          />

          {/* Related Topics Section */}
          <ContextualLinksSection
            currentPageKey="duval-county-florida"
            className="py-12 bg-white"
          />

          {/* Cross-Sell Section */}
          <CrossSellSection
            currentPageKey="duval-county-florida"
            className="py-12 bg-gray-50"
          />

          {/* CTA Section */}
          <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-teal-700 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Explore Duval County Medicare Advantage Plans?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get personalized Medicare Advantage plan comparisons for Jacksonville's premier healthcare networks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Compare Jacksonville Plans
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Get Florida Tax Benefits
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}