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
          "description": "Medicare Advantage plans with access to REX Hospital and UNC Health network"
        }
      }
    ]
  }
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
          maPenetrationRate: Math.round((wakeCountyData.medicareAdvantageEnrollment / wakeCountyData.seniors65Plus) * 100),
        }}
        keyMetrics={{
          totalBeneficiaries: wakeCountyData.medicareAdvantageEnrollment,
          pageType: 'provider_comparison'
        }}
      />

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbStructuredData(breadcrumbItems)) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <Breadcrumbs items={breadcrumbItems} />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Duke vs UNC REX Medicare Advantage
              <span className="block text-blue-200">Wake County 2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Compare top Medicare Advantage plans from Duke Health and UNC REX networks serving {wakeCountyData.seniors65Plus.toLocaleString()}+ seniors in Raleigh, Durham, Cary, and Wake County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Compare Plans Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors">
                Check Provider Networks
              </button>
            </div>
          </section>

          {/* Wake County Statistics */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Wake County Medicare Advantage Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </section>

          {/* Provider Comparison */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Duke Health */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Duke Health Network</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <span className="text-blue-200 mr-3">🏥</span>
                  <span><strong>Network Size:</strong> {wakeCountyData.dukeNetworkProviders}+ providers</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-200 mr-3">⭐</span>
                  <span><strong>Quality Rating:</strong> {wakeCountyData.qualityRating} stars</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-200 mr-3">💰</span>
                  <span><strong>Average Savings:</strong> ${wakeCountyData.averagePremiumSavings}/year</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li>• Duke University Hospital access</li>
                <li>• Comprehensive cancer care</li>
                <li>• Advanced cardiac services</li>
                <li>• Nationally ranked specialists</li>
              </ul>
            </div>

            {/* UNC REX */}
            <div className="bg-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">UNC REX Healthcare</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <span className="text-teal-200 mr-3">🏥</span>
                  <span><strong>Network Size:</strong> {wakeCountyData.uncRexProviders}+ providers</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-200 mr-3">⭐</span>
                  <span><strong>Quality Rating:</strong> {wakeCountyData.qualityRating} stars</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-200 mr-3">💰</span>
                  <span><strong>Average Savings:</strong> ${wakeCountyData.averagePremiumSavings}/year</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li>• REX Hospital network</li>
                <li>• UNC Health specialists</li>
                <li>• Primary care focus</li>
                <li>• Community-based care</li>
              </ul>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="bg-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6">Feature</th>
                    <th className="text-center py-4 px-6 text-blue-700">Duke Health</th>
                    <th className="text-center py-4 px-6 text-teal-700">UNC REX</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Network Providers</td>
                    <td className="px-6 py-4 text-center text-blue-700">{wakeCountyData.dukeNetworkProviders}+</td>
                    <td className="px-6 py-4 text-center text-teal-700">{wakeCountyData.uncRexProviders}+</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Quality Rating</td>
                    <td className="px-6 py-4 text-center text-blue-700">{wakeCountyData.qualityRating} ⭐</td>
                    <td className="px-6 py-4 text-center text-teal-700">{wakeCountyData.qualityRating} ⭐</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Annual Savings</td>
                    <td className="px-6 py-4 text-center text-blue-700">${wakeCountyData.averagePremiumSavings}</td>
                    <td className="px-6 py-4 text-center text-teal-700">${wakeCountyData.averagePremiumSavings}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 mb-16">
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

          {/* Internal Links */}
          <PrimaryLinksSection
            currentPageKey="duke-vs-unc-rex-medicare-advantage-wake-county"
          />

          <ContextualLinksSection
            currentPageKey="duke-vs-unc-rex-medicare-advantage-wake-county"
          />

          <CrossSellSection
            currentPageKey="duke-vs-unc-rex-medicare-advantage-wake-county"
          />
        </main>
      </div>
    </>
  )
}