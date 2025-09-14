import { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import MarketingOptimizer from '@/components/MarketingOptimizer'
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs'
import { PrimaryLinksSection, ContextualLinksSection, CrossSellSection } from '@/components/InternalLinksSection'

export const metadata: Metadata = {
  title: 'Fresno County California Medicare Advantage Plans 2025 | Central Valley Healthcare | Kaiser Permanente Anthem',
  description: 'Find the best Medicare Advantage plans in Fresno County, California for 2025. Comprehensive Central Valley healthcare with Kaiser Permanente, Anthem, and Health Net serving Fresno, Clovis, and agricultural communities with bilingual services.',
  keywords: 'Fresno County California Medicare Advantage 2025, Medicare plans Fresno CA, Clovis Medicare Advantage, Central Valley Medicare plans, Kaiser Permanente Fresno, Anthem Blue Cross Fresno, Health Net Medicare Fresno, Fresno Medicare brokers, California Medicare enrollment, agricultural community Medicare, Spanish Medicare services Fresno, bilingual Medicare Fresno County',
  openGraph: {
    title: 'Fresno County California Medicare Advantage Plans 2025 | Central Valley Healthcare',
    description: 'Comprehensive Medicare Advantage coverage in Fresno County with Central Valley healthcare networks and bilingual services.',
    type: 'website',
  },
}

const fresnoCountyData = {
  totalBeneficiaries: 152000,
  planCount: 18,
  zeroPremiumPlans: 11,
  averagePremium: 31,
  topRatedPlans: 8,
  maPenetration: 49,
  counties: ['Fresno County'],
  majorCities: ['Fresno', 'Clovis', 'Selma', 'Reedley', 'Sanger'],
  demographics: {
    avgAge: 69,
    totalPopulation: 1008654,
    hispanic: 53.8,
    white: 29.1,
    asian: 11.2,
    black: 4.1,
    agricultural: 28.5,
    medianIncome: 52564
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Fresno County California Medicare Advantage Plans",
  "description": "Comprehensive Medicare Advantage coverage in Fresno County with Central Valley healthcare networks and bilingual services for agricultural communities.",
  "serviceType": "Medicare Advantage Plans",
  "areaServed": {
    "@type": "Place",
    "name": "Fresno County, California"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medicare Advantage Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Central Valley Medicare Advantage Plans",
          "description": "Medicare coverage designed for Central Valley agricultural communities with bilingual services"
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
      "name": "What Medicare Advantage plans are available in Fresno County, California?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fresno County offers 18 Medicare Advantage plans for 2025, including 11 zero-premium options. Top providers include Kaiser Permanente, Anthem Blue Cross, Health Net, and Central Health Plan with comprehensive Central Valley networks."
      }
    },
    {
      "@type": "Question",
      "name": "Do Fresno County Medicare plans offer Spanish-speaking services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most Fresno County Medicare Advantage plans offer comprehensive Spanish-language services including bilingual customer service, Spanish-speaking providers, and culturally appropriate care for the county's large Hispanic population."
      }
    }
  ]
}

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Medicare Advantage", url: "/medicare-advantage" },
  { label: "California", url: "/medicare-advantage/california" },
  { label: "Fresno County", url: "/medicare-advantage/fresno-county-california" }
]

export default function FresnoCountyCaliforniaMedicareAdvantage() {
  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Fresno County California Medicare Advantage Plans"
        county="Fresno County"
        state="California"
        demographics={{
          avgAge: fresnoCountyData.demographics.avgAge,
          hispanicPopulation: fresnoCountyData.demographics.hispanic,
          maPenetrationRate: fresnoCountyData.maPenetration,
        }}
        keyMetrics={{
          planCount: fresnoCountyData.planCount,
          zeroPremiumPlans: fresnoCountyData.zeroPremiumPlans,
          maPenetration: fresnoCountyData.maPenetration,
          pageType: 'medicare_advantage_county'
        }}
      />

      <MarketingOptimizer
        pageKey="fresno-county-california"
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

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <nav className="bg-white shadow-sm border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </nav>

        <section className="relative bg-gradient-to-r from-orange-600 to-red-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Fresno County California<br />
                  <span className="text-orange-200">Medicare Advantage Plans 2025</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-orange-100">
                  Central Valley healthcare with Kaiser Permanente, Anthem, and Health Net networks. Bilingual Medicare solutions serving 152,000+ beneficiaries in Fresno, Clovis, and agricultural communities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors">
                    Compare Central Valley Plans
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
                    Obtener Cobertura en Español
                  </button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-8">
                <h3 className="text-lg font-semibold text-yellow-200 mb-2">Fresno County 2025 Medicare Stats</h3>
                <div className="space-y-3 text-orange-100">
                  <div className="flex justify-between">
                    <span>Total Plans Available:</span>
                    <span className="font-bold text-white">{fresnoCountyData.planCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zero Premium Plans:</span>
                    <span className="font-bold text-white">{fresnoCountyData.zeroPremiumPlans}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Premium:</span>
                    <span className="font-bold text-white">${fresnoCountyData.averagePremium}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hispanic Population:</span>
                    <span className="font-bold text-white">{fresnoCountyData.demographics.hispanic}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Central Valley Healthcare Excellence
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">{fresnoCountyData.demographics.hispanic}%</div>
                <div className="text-gray-600">Hispanic Community</div>
                <div className="text-sm text-gray-500 mt-1">Bilingual healthcare focus</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{fresnoCountyData.demographics.agricultural}%</div>
                <div className="text-gray-600">Agricultural Workers</div>
                <div className="text-sm text-gray-500 mt-1">Specialized rural care</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{fresnoCountyData.planCount}</div>
                <div className="text-gray-600">Medicare Plans</div>
                <div className="text-sm text-gray-500 mt-1">Central Valley options</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">${fresnoCountyData.averagePremium}</div>
                <div className="text-gray-600">Avg Premium</div>
                <div className="text-sm text-gray-500 mt-1">Affordable rural healthcare</div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Top Fresno County Medicare Advantage Plans 2025
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Kaiser Permanente Central Valley
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>• Integrated Central Valley healthcare</div>
                  <div>• Kaiser Permanente Fresno Medical Center</div>
                  <div>• Bilingual provider network</div>
                  <div>• Comprehensive wellness programs</div>
                  <div>• Agricultural worker health focus</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Anthem Blue Cross Central Valley
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>• Broad provider network</div>
                  <div>• Community Medical Centers access</div>
                  <div>• Spanish-language services</div>
                  <div>• Rural healthcare specialization</div>
                  <div>• Affordable premium options</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Health Net Central Valley
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div>• Central Health Plan network</div>
                  <div>• Community-focused care</div>
                  <div>• Culturally sensitive healthcare</div>
                  <div>• Agricultural community programs</div>
                  <div>• Value-based care model</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Bilingual Healthcare Services / Servicios de Salud Bilingües
            </h2>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Comprehensive Spanish-Language Healthcare Access
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-orange-800 mb-4">English Services</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span><strong>Bilingual Providers:</strong> Spanish-speaking doctors and specialists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span><strong>Cultural Competency:</strong> Healthcare adapted to Hispanic cultural values</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span><strong>Agricultural Health:</strong> Specialized care for farm workers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span><strong>Community Centers:</strong> Local healthcare access points</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-800 mb-4">Servicios en Español</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Doctores en Español:</strong> Médicos y especialistas que hablan español</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Atención Cultural:</strong> Cuidado de salud adaptado a valores hispanos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Salud Agrícola:</strong> Atención especializada para trabajadores del campo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Centros Comunitarios:</strong> Acceso local a servicios de salud</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Central Valley Communities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-3">Fresno</h3>
                <div className="space-y-2 text-orange-700 text-sm">
                  <div><strong>Medicare Pop:</strong> 85,000+ beneficiaries</div>
                  <div><strong>Demographics:</strong> Diverse urban center</div>
                  <div><strong>Healthcare:</strong> Community Medical Centers</div>
                  <div><strong>Focus:</strong> Comprehensive bilingual care</div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Clovis</h3>
                <div className="space-y-2 text-blue-700 text-sm">
                  <div><strong>Medicare Pop:</strong> 32,000+ beneficiaries</div>
                  <div><strong>Demographics:</strong> Affluent suburban community</div>
                  <div><strong>Healthcare:</strong> Clovis Community Medical Center</div>
                  <div><strong>Focus:</strong> Premium suburban healthcare</div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Agricultural Communities</h3>
                <div className="space-y-2 text-green-700 text-sm">
                  <div><strong>Medicare Pop:</strong> 35,000+ beneficiaries</div>
                  <div><strong>Demographics:</strong> Rural farming communities</div>
                  <div><strong>Healthcare:</strong> Rural health clinics</div>
                  <div><strong>Focus:</strong> Agricultural worker health</div>
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
                  question: "What Medicare Advantage plans are available in Fresno County, California?",
                  answer: "Fresno County offers 18 Medicare Advantage plans for 2025, including 11 zero-premium options. Top providers include Kaiser Permanente, Anthem Blue Cross, Health Net, and Central Health Plan with comprehensive Central Valley networks."
                },
                {
                  question: "Do Fresno County Medicare plans offer Spanish-speaking services?",
                  answer: "Yes, most Fresno County Medicare Advantage plans offer comprehensive Spanish-language services including bilingual customer service, Spanish-speaking providers, and culturally appropriate care for the county's large Hispanic population (53.8%)."
                },
                {
                  question: "How do Medicare plans serve agricultural workers in Fresno County?",
                  answer: "Medicare Advantage plans in Fresno County are designed for agricultural communities with specialized rural health services, occupational health programs, flexible scheduling for seasonal workers, and culturally sensitive care that understands the unique needs of farm workers."
                },
                {
                  question: "What healthcare facilities are available through Fresno County Medicare plans?",
                  answer: "Major facilities include Community Medical Centers, Kaiser Permanente Fresno Medical Center, Clovis Community Medical Center, and numerous rural health clinics throughout the Central Valley, all designed to serve the area's diverse population."
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
            currentPageKey="fresno-county-california"
            className="py-16"
          />

          <ContextualLinksSection
            currentPageKey="fresno-county-california"
            className="py-12 bg-white"
          />

          <CrossSellSection
            currentPageKey="fresno-county-california"
            className="py-12 bg-gray-50"
          />

          <section className="text-center py-16 bg-gradient-to-r from-orange-600 to-red-700 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Explore Fresno County Medicare Advantage Plans?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Get personalized Medicare Advantage plan comparisons for Central Valley healthcare with bilingual support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors">
                Compare Central Valley Plans
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
                Obtener Ayuda en Español
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}