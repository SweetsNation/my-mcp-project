import { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import MarketingOptimizer from '@/components/MarketingOptimizer'
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs'
import { PrimaryLinksSection, ContextualLinksSection, CrossSellSection } from '@/components/InternalLinksSection'

export const metadata: Metadata = {
  title: 'Cobb County Georgia Medicare Advantage Plans 2025 | Marietta Atlanta Suburbs | Wellstar Northside Networks',
  description: 'Find the best Medicare Advantage plans in Cobb County, Georgia for 2025. Comprehensive Atlanta suburb healthcare with Wellstar, Northside, and Emory networks serving Marietta, Kennesaw, Smyrna, and Powder Springs with suburban family care.',
  keywords: 'Cobb County Georgia Medicare Advantage 2025, Medicare plans Marietta GA, Kennesaw Medicare Advantage, Smyrna Medicare plans Georgia, Medicare Advantage Atlanta suburbs, Wellstar Medicare Advantage Cobb, Northside Medicare plans Marietta, Cobb County Medicare brokers, Georgia Medicare enrollment 2025, Atlanta metro healthcare plans, Medicare plans Powder Springs GA, Acworth Medicare Georgia, suburban Atlanta Medicare',
  openGraph: {
    title: 'Cobb County Georgia Medicare Advantage Plans 2025 | Atlanta Suburbs Networks',
    description: 'Premium Medicare Advantage plans in Cobb County with Wellstar, Northside, and Emory networks serving Atlanta\'s northwestern suburbs.',
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

const cobbCountyData = {
  totalBeneficiaries: 125000,
  planCount: 24,
  zeroPremiumPlans: 16,
  averagePremium: 35,
  topRatedPlans: 11,
  maPenetration: 42,
  counties: ['Cobb County'],
  majorCities: ['Marietta', 'Kennesaw', 'Smyrna', 'Powder Springs', 'Acworth'],
  demographics: {
    avgAge: 67,
    totalPopulation: 766149,
    white: 59.2,
    black: 28.1,
    hispanic: 12.8,
    asian: 5.9,
    affluent: 31.2,
    medianIncome: 67645
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cobb County Georgia Medicare Advantage Plans",
  "description": "Comprehensive Medicare Advantage coverage in Cobb County with Wellstar, Northside, and Emory networks serving Atlanta's northwestern suburbs.",
  "serviceType": "Medicare Advantage Plans",
  "areaServed": {
    "@type": "Place",
    "name": "Cobb County, Georgia"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medicare Advantage Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Atlanta Suburb Medicare Advantage Plans",
          "description": "Medicare coverage designed for Atlanta's affluent northwestern suburbs"
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
      "name": "What Medicare Advantage plans are available in Cobb County, Georgia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cobb County offers 24 Medicare Advantage plans for 2025, including 16 zero-premium options. Top providers include Wellstar, Northside Hospital, Emory Healthcare, and Anthem Blue Cross with comprehensive Atlanta suburban networks."
      }
    },
    {
      "@type": "Question",
      "name": "Which hospitals are covered by Cobb County Medicare Advantage plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Major hospitals include WellStar Kennestone Hospital, WellStar Cobb Hospital, Northside Hospital Cherokee, Emory University Hospital, and numerous specialty centers throughout Atlanta's northwestern suburbs."
      }
    }
  ]
}

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Medicare Advantage", url: "/medicare-advantage" },
  { label: "Georgia", url: "/medicare-advantage/georgia" },
  { label: "Cobb County", url: "/medicare-advantage/cobb-county-georgia" }
]

export default function CobbCountyGeorgiaMedicareAdvantage() {
  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Cobb County Georgia Medicare Advantage Plans"
        county="Cobb County"
        state="Georgia"
        demographics={{
          avgAge: cobbCountyData.demographics.avgAge,
          hispanicPopulation: cobbCountyData.demographics.hispanic,
          maPenetrationRate: cobbCountyData.maPenetration,
        }}
        keyMetrics={{
          planCount: cobbCountyData.planCount,
          zeroPremiumPlans: cobbCountyData.zeroPremiumPlans,
          maPenetration: cobbCountyData.maPenetration,
          pageType: 'medicare_advantage_county'
        }}
      />

      <MarketingOptimizer
        pageKey="cobb-county-georgia"
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

        <section className="relative bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Cobb County Georgia<br />
                  <span className="text-green-200">Medicare Advantage Plans 2025</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-green-100">
                  Premium Atlanta suburb healthcare with Wellstar, Northside, and Emory networks. Comprehensive coverage serving 125,000+ beneficiaries in Marietta, Kennesaw, Smyrna, and throughout Cobb County.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors">
                    Compare Cobb Plans
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors">
                    Get Atlanta Coverage
                  </button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-8">
                <h3 className="text-lg font-semibold text-yellow-200 mb-2">Cobb County 2025 Medicare Stats</h3>
                <div className="space-y-3 text-green-100">
                  <div className="flex justify-between">
                    <span>Total Plans Available:</span>
                    <span className="font-bold text-white">{cobbCountyData.planCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zero Premium Plans:</span>
                    <span className="font-bold text-white">{cobbCountyData.zeroPremiumPlans}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Premium:</span>
                    <span className="font-bold text-white">${cobbCountyData.averagePremium}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Affluent Population:</span>
                    <span className="font-bold text-white">{cobbCountyData.demographics.affluent}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Atlanta Suburb Healthcare Excellence
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{cobbCountyData.demographics.affluent}%</div>
                <div className="text-gray-600">Affluent Community</div>
                <div className="text-sm text-gray-500 mt-1">Premium healthcare access</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{cobbCountyData.planCount}</div>
                <div className="text-gray-600">Medicare Plans</div>
                <div className="text-sm text-gray-500 mt-1">Comprehensive options</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">{cobbCountyData.maPenetration}%</div>
                <div className="text-gray-600">MA Penetration</div>
                <div className="text-sm text-gray-500 mt-1">Strong adoption rate</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">${cobbCountyData.averagePremium}</div>
                <div className="text-gray-600">Avg Premium</div>
                <div className="text-sm text-gray-500 mt-1">Suburban healthcare value</div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Top Cobb County Medicare Advantage Plans 2025
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  WellStar Medicare Advantage
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>• WellStar Kennestone Hospital</div>
                  <div>• WellStar Cobb Hospital</div>
                  <div>• Comprehensive suburban network</div>
                  <div>• Integrated healthcare delivery</div>
                  <div>• Multiple zero-premium options</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Northside Hospital Plans
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>• Northside Hospital Cherokee</div>
                  <div>• Premium healthcare network</div>
                  <div>• Advanced medical technology</div>
                  <div>• Specialty care excellence</div>
                  <div>• Affluent community focus</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Emory Healthcare Plans
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>• Emory University Hospital access</div>
                  <div>• Academic medical excellence</div>
                  <div>• Research-based treatments</div>
                  <div>• Comprehensive specialist network</div>
                  <div>• Atlanta metro connectivity</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Cobb County Communities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Marietta</h3>
                <div className="space-y-2 text-green-700 text-sm">
                  <div><strong>Medicare Pop:</strong> 42,000+ beneficiaries</div>
                  <div><strong>Demographics:</strong> Historic affluent community</div>
                  <div><strong>Healthcare:</strong> WellStar Kennestone Hospital</div>
                  <div><strong>Focus:</strong> Premium suburban healthcare</div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Kennesaw</h3>
                <div className="space-y-2 text-blue-700 text-sm">
                  <div><strong>Medicare Pop:</strong> 28,000+ beneficiaries</div>
                  <div><strong>Demographics:</strong> Growing suburban community</div>
                  <div><strong>Healthcare:</strong> WellStar Cobb Hospital</div>
                  <div><strong>Focus:</strong> Family-oriented care</div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">Smyrna</h3>
                <div className="space-y-2 text-purple-700 text-sm">
                  <div><strong>Medicare Pop:</strong> 22,000+ beneficiaries</div>
                  <div><strong>Demographics:</strong> Diverse suburban hub</div>
                  <div><strong>Healthcare:</strong> Multiple network access</div>
                  <div><strong>Focus:</strong> Comprehensive community care</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Atlanta Suburb Healthcare Networks
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Premium Healthcare Access in Atlanta's Northwestern Suburbs
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Major Healthcare Systems</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span><strong>WellStar Health System:</strong> Comprehensive suburban healthcare network</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span><strong>Northside Hospital:</strong> Premium specialty care and advanced technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span><strong>Emory Healthcare:</strong> Academic medical excellence and research</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span><strong>Specialty Centers:</strong> Comprehensive specialist access</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">Suburban Advantages</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Affluent Community Care:</strong> Healthcare designed for higher-income residents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Atlanta Metro Access:</strong> Easy access to downtown Atlanta specialists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Modern Facilities:</strong> State-of-the-art suburban medical centers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Convenient Locations:</strong> Multiple healthcare options throughout Cobb County</span>
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
                  question: "What Medicare Advantage plans are available in Cobb County, Georgia?",
                  answer: "Cobb County offers 24 Medicare Advantage plans for 2025, including 16 zero-premium options. Top providers include WellStar, Northside Hospital, Emory Healthcare, and Anthem Blue Cross with comprehensive Atlanta suburban networks."
                },
                {
                  question: "Which hospitals are covered by Cobb County Medicare Advantage plans?",
                  answer: "Major hospitals include WellStar Kennestone Hospital, WellStar Cobb Hospital, Northside Hospital Cherokee, Emory University Hospital, and numerous specialty centers throughout Atlanta's northwestern suburbs."
                },
                {
                  question: "How do Cobb County Medicare plans serve affluent suburban communities?",
                  answer: "Cobb County Medicare Advantage plans are designed for affluent suburban communities with premium network access, enhanced benefits, concierge-style services, and comprehensive specialty care options that match the community's expectations for high-quality healthcare."
                },
                {
                  question: "What makes Cobb County Medicare plans different from other Atlanta area options?",
                  answer: "Cobb County plans focus on suburban excellence with premium hospital networks, convenient locations throughout the county, enhanced benefits for affluent communities, and seamless integration with Atlanta's broader healthcare ecosystem."
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
            currentPageKey="cobb-county-georgia"
            className="py-16"
          />

          <ContextualLinksSection
            currentPageKey="cobb-county-georgia"
            className="py-12 bg-white"
          />

          <CrossSellSection
            currentPageKey="cobb-county-georgia"
            className="py-12 bg-gray-50"
          />

          <section className="text-center py-16 bg-gradient-to-r from-green-600 to-blue-700 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Explore Cobb County Medicare Advantage Plans?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Get personalized Medicare Advantage plan comparisons for Cobb County's premier Atlanta suburb healthcare networks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors">
                Compare Cobb Plans
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors">
                Get Atlanta Coverage
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}