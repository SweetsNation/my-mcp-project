import { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import MarketingOptimizer from '@/components/MarketingOptimizer'
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs'
import { PrimaryLinksSection, ContextualLinksSection, CrossSellSection } from '@/components/InternalLinksSection'

export const metadata: Metadata = {
  title: 'Medicare Advantage Broward County Florida | Fort Lauderdale Medicare Plans 2025',
  description: 'Find the best Medicare Advantage plans in Broward County, Florida. Compare coverage options for Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding areas.',
  keywords: 'Medicare Advantage Broward County FL, Fort Lauderdale Medicare plans, Hollywood Medicare Advantage, Pembroke Pines Medicare, Broward County Medicare benefits, South Florida Medicare, Medicare Advantage Florida, Fort Lauderdale healthcare plans, Broward Medicare enrollment, South Florida Medicare Advantage',
  openGraph: {
    title: 'Medicare Advantage Broward County Florida | Fort Lauderdale Plans 2025',
    description: 'Compare Medicare Advantage plans in Broward County, FL. Find coverage for Fort Lauderdale, Hollywood, and Pembroke Pines.',
    type: 'website',
  },
}

const browardCountyData = {
  totalBeneficiaries: 89000,
  planCount: 32,
  zeroPremiumPlans: 18,
  averagePremium: 42,
  maPenetration: 67,
  demographics: {
    avgAge: 73,
    hispanicPopulation: 31.8,
    retireeInflux: 38.2,
    affordableHousing: 22.5
  },
  topNetworks: [
    'Humana',
    'UnitedHealthcare',
    'Aetna Better Health',
    'Simply Healthcare',
    'Florida Blue'
  ],
  qualityRating: 4.3,
  averageSavings: 2280
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Medicare Advantage Plans Broward County Florida",
  "description": "Medicare Advantage plan comparison and enrollment services for Broward County, Florida including Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding communities.",
  "serviceType": "Medicare Advantage Insurance",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Broward County, Florida"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Broward County Medicare Advantage Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Humana Medicare Advantage Plans",
          "description": "Comprehensive Medicare Advantage plans with extensive provider networks in South Florida"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UnitedHealthcare Medicare Advantage",
          "description": "Medicare Advantage plans with nationwide coverage and local Florida providers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Florida Blue Medicare Advantage",
          "description": "Local Florida Medicare Advantage plans with strong regional network"
        }
      }
    ]
  }
}

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Medicare Advantage", url: "/medicare-advantage" },
  { label: "Florida", url: "/medicare-advantage/florida" },
  { label: "Broward County", url: "/medicare-advantage/broward-county-florida" }
]

export default function BrowardCountyMedicareAdvantage() {
  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Broward County Florida"
        county="Broward County"
        state="Florida"
        demographics={{
          avgAge: browardCountyData.demographics.avgAge,
          maPenetrationRate: browardCountyData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: browardCountyData.totalBeneficiaries,
          planCount: browardCountyData.planCount,
          zeroPremiumPlans: browardCountyData.zeroPremiumPlans
        }}
      />

      <MarketingOptimizer
        pageKey="medicare-advantage-broward-county-florida"
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

      <div className="min-h-screen bg-gradient-to-br from-teal-900 via-blue-800 to-teal-900">
        <Breadcrumbs items={breadcrumbItems} />

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Medicare Advantage Plans
              <span className="block text-teal-200">Broward County, Florida</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover {browardCountyData.planCount}+ Medicare Advantage options serving {browardCountyData.totalBeneficiaries.toLocaleString()}+ beneficiaries in Fort Lauderdale, Hollywood, Pembroke Pines, and throughout Broward County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors">
                Compare Plans
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-700 transition-colors">
                Check Eligibility
              </button>
            </div>
          </section>

          {/* Key Statistics */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Broward County Medicare Advantage Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">{browardCountyData.totalBeneficiaries.toLocaleString()}</div>
                <div className="text-sm">Medicare Advantage Beneficiaries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">{browardCountyData.planCount}</div>
                <div className="text-sm">Available Plans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">{browardCountyData.zeroPremiumPlans}</div>
                <div className="text-sm">$0 Premium Plans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-300">{browardCountyData.maPenetration}%</div>
                <div className="text-sm">Medicare Advantage Penetration</div>
              </div>
            </div>
          </section>

          {/* South Florida Healthcare Focus */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                South Florida Healthcare Excellence
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <span className="text-teal-600 mr-3">🏥</span>
                  <span><strong>Major Health Systems:</strong> Broward Health, Memorial Healthcare, Holy Cross Health</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-600 mr-3">⭐</span>
                  <span><strong>Quality Rating:</strong> {browardCountyData.qualityRating} stars average</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-600 mr-3">💰</span>
                  <span><strong>Annual Savings:</strong> ${browardCountyData.averageSavings.toLocaleString()}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-600 mr-3">🌴</span>
                  <span><strong>Retiree Destination:</strong> {browardCountyData.demographics.retireeInflux}% new retirees annually</span>
                </div>
              </div>
              <p className="text-gray-700">
                Broward County offers world-class healthcare with specialized services for seniors,
                extensive rehabilitation facilities, and comprehensive wellness programs tailored
                to South Florida's active retirement lifestyle.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Top Medicare Advantage Networks</h2>
              <div className="space-y-4">
                {browardCountyData.topNetworks.map((network, index) => (
                  <div key={index} className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                    <span className="font-semibold">{network}</span>
                    <span className="text-teal-200">Multiple Plans Available</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-500/30 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Network Advantage</h3>
                <p className="text-blue-100">
                  Access to South Florida's premier hospitals, specialists, and outpatient facilities
                  with many offering bilingual services and culturally competent care.
                </p>
              </div>
            </div>
          </section>

          {/* City-Specific Coverage */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Medicare Advantage Coverage by Broward County Cities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fort Lauderdale</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 28+ Medicare Advantage plans</li>
                  <li>• Broward Health Medical Center access</li>
                  <li>• Port-area specialty services</li>
                  <li>• Beach community wellness programs</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hollywood</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 25+ available plan options</li>
                  <li>• Memorial Healthcare network</li>
                  <li>• Beachfront wellness centers</li>
                  <li>• Multi-cultural healthcare services</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pembroke Pines</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 22+ Medicare plan choices</li>
                  <li>• Memorial Hospital Pembroke</li>
                  <li>• Active senior communities</li>
                  <li>• Suburban healthcare convenience</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Coral Springs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 20+ plan options available</li>
                  <li>• University Hospital Coral Springs</li>
                  <li>• Family-oriented healthcare</li>
                  <li>• Preventive care focus</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Plantation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 24+ Medicare Advantage plans</li>
                  <li>• Westside Regional Medical Center</li>
                  <li>• Corporate healthcare partnerships</li>
                  <li>• Comprehensive outpatient services</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sunrise</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 21+ plan options</li>
                  <li>• Northwest Medical Center access</li>
                  <li>• Sawgrass Mills area services</li>
                  <li>• Growing senior population support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Special Benefits for South Florida */}
          <section className="bg-gradient-to-r from-orange-50 to-teal-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Special Benefits for Broward County Residents
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-teal-700 mb-4">🌴 Florida-Specific Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hurricane and disaster preparedness support</li>
                  <li>• Heat-related health condition management</li>
                  <li>• Beach and water safety programs</li>
                  <li>• Seasonal resident accommodation</li>
                  <li>• UV protection and skin cancer screening</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-700 mb-4">🏖️ Lifestyle Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fitness programs at beach facilities</li>
                  <li>• Water aerobics and swimming programs</li>
                  <li>• Golf and tennis wellness activities</li>
                  <li>• Boating and fishing safety education</li>
                  <li>• Active aging community support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Multilingual Services */}
          <section className="bg-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Multilingual Healthcare Services / Servicios de Salud Multilingües
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">English Services</h3>
                <p className="text-gray-700 mb-4">
                  Broward County Medicare Advantage plans offer comprehensive healthcare services
                  with extensive English-speaking provider networks throughout South Florida.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 24/7 customer service hotlines</li>
                  <li>• Online portal and mobile app access</li>
                  <li>• Educational workshops and seminars</li>
                  <li>• Care coordination services</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-4">Servicios en Español</h3>
                <p className="text-gray-700 mb-4">
                  Los planes Medicare Advantage del Condado de Broward ofrecen servicios médicos
                  completos con redes de proveedores que hablan español en todo el sur de Florida.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Líneas de atención al cliente 24/7 en español</li>
                  <li>• Portal en línea y aplicación móvil en español</li>
                  <li>• Talleres y seminarios educativos</li>
                  <li>• Servicios de coordinación de atención</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Enrollment and Eligibility */}
          <section className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 mb-16 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Enrollment Information for Broward County
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Eligibility Requirements</h3>
                <ul className="space-y-2">
                  <li>• Age 65 or older, OR</li>
                  <li>• Under 65 with qualifying disability</li>
                  <li>• Enrolled in Medicare Part A and Part B</li>
                  <li>• Live in Broward County service area</li>
                  <li>• Not have End-Stage Renal Disease (with exceptions)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Important Enrollment Dates</h3>
                <ul className="space-y-2">
                  <li>• <strong>Annual Open Enrollment:</strong> October 15 - December 7</li>
                  <li>• <strong>Medicare Advantage Open Enrollment:</strong> January 1 - March 31</li>
                  <li>• <strong>Initial Enrollment:</strong> 3 months before turning 65</li>
                  <li>• <strong>Special Enrollment:</strong> Qualifying life events</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-orange-500 to-teal-500 rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Find Your Perfect Medicare Advantage Plan in Broward County
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Get personalized recommendations from our local Florida Medicare experts who understand
              South Florida healthcare and your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors">
                Compare Plans & Costs
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-700 transition-colors">
                Speak with Florida Expert
              </button>
            </div>
          </section>

          {/* Internal Links */}
          <PrimaryLinksSection
            currentPageKey="medicare-advantage-broward-county-florida"
          />

          <ContextualLinksSection
            currentPageKey="medicare-advantage-broward-county-florida"
          />

          <CrossSellSection
            currentPageKey="medicare-advantage-broward-county-florida"
          />
        </main>
      </div>
    </>
  )
}