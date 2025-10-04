import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import {
  trackMedicareAdvancedPageView,
  trackMedicareAdvancedCTA,
  setupMedicareAdvancedScrollTracking
} from '@/lib/analytics/medicareAdvancedTracking'

export const metadata: Metadata = {
  title: 'Tarrant County Medicare Supplement Plans 2025 - Fort Worth Medigap Coverage | El-Mag Insurance',
  description: 'Tarrant County Medicare Supplement guide: Navigate Fort Worth & Arlington healthcare with Medigap plans for 339,000+ beneficiaries. Texas Health Resources & JPS Health network access.',
  keywords: 'Tarrant County Medicare Supplement, Fort Worth Medigap, Arlington Medicare Supplement, Texas Medicare Supplement plans, Fort Worth Medigap rates, Texas Health Resources Medicare, JPS Health Medicare Supplement',
  openGraph: {
    title: 'Tarrant County Medicare Supplement - Fort Worth Medigap Coverage',
    description: 'Comprehensive Medicare Supplement coverage for Tarrant County\'s 339,000+ beneficiaries with Fort Worth healthcare expertise.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-supplement-tarrant-county',
  },
}

const tarrantCountyData = {
  totalBeneficiaries: 339374,
  maPenetration: 55.83,
  averageAge: 72,
  medigapOpportunity: 150000,
  averagePlanGPremium: 142,
  hispanicPopulation: 28,
  bilingualNeed: true
}

const tarrantStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    // WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.elmaginsurance.com/medicare-supplement-tarrant-county',
      url: 'https://www.elmaginsurance.com/medicare-supplement-tarrant-county',
      name: 'Tarrant County Medicare Supplement Plans 2025 - Fort Worth Medigap Coverage',
      description: 'Tarrant County Medicare Supplement guide: Navigate Fort Worth & Arlington healthcare with Medigap plans for 339,000+ beneficiaries. Texas Health Resources & JPS Health network access.',
      inLanguage: 'en-US',
      breadcrumb: {
        '@id': 'https://www.elmaginsurance.com/medicare-supplement-tarrant-county#breadcrumb'
      }
    },
    // BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.elmaginsurance.com/medicare-supplement-tarrant-county#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.elmaginsurance.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Medicare Supplement',
          item: 'https://www.elmaginsurance.com/medicare-supplement'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Tarrant County Texas',
          item: 'https://www.elmaginsurance.com/medicare-supplement-tarrant-county'
        }
      ]
    },
    // FinancialProduct Schema for Medicare Supplement Plans
    {
      '@type': 'FinancialProduct',
      '@id': 'https://www.elmaginsurance.com/medicare-supplement-tarrant-county#product',
      name: 'Medicare Supplement Plans - Tarrant County, Texas',
      description: 'Medicare Supplement (Medigap) insurance plans for Tarrant County seniors, including Fort Worth and Arlington coverage with Texas Health Resources and JPS Health network access.',
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        url: 'https://www.elmaginsurance.com'
      },
      category: 'Medicare Supplement Insurance',
      areaServed: {
        '@type': 'Place',
        name: 'Tarrant County, Texas',
        geo: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 32.7555,
            longitude: -97.3308
          },
          geoRadius: '60000'
        },
        containedInPlace: [
          {
            '@type': 'City',
            name: 'Fort Worth'
          },
          {
            '@type': 'City',
            name: 'Arlington'
          }
        ]
      }
    },
    // InsuranceAgency Schema for Service Area
    {
      '@type': 'InsuranceAgency',
      '@id': 'https://www.elmaginsurance.com/medicare-supplement-tarrant-county#business',
      name: 'El-Mag Insurance - Tarrant County Medicare Supplement',
      description: 'Medicare Supplement (Medigap) insurance specialists serving Tarrant County, Texas, including Fort Worth and Arlington with bilingual support.',
      url: 'https://www.elmaginsurance.com/medicare-supplement-tarrant-county',
      telephone: '+1-331-343-2584',
      areaServed: {
        '@type': 'Place',
        name: 'Tarrant County, Texas'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Medicare Supplement Plans',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'FinancialProduct',
              name: 'Medicare Supplement Plan G',
              description: 'Comprehensive Medicare Supplement coverage for Tarrant County seniors with access to Texas Health Resources and JPS Health networks.'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'FinancialProduct',
              name: 'Medicare Supplement Plan N',
              description: 'Cost-effective Medicare Supplement with small copays for Fort Worth and Arlington beneficiaries.'
            }
          }
        ]
      }
    }
  ]
}

export default function TarrantCountyMedicareSupplementPage() {
  React.useEffect(() => {
    // Track advanced page view for Medicare Supplement
    trackMedicareAdvancedPageView(
      'Medicare Supplement Tarrant County Texas',
      {
        pageType: 'county_market',
        totalBeneficiaries: tarrantCountyData.totalBeneficiaries,
        availablePlans: 0, // Medigap is standardized
        specialMetrics: {
          maPenetrationRate: tarrantCountyData.maPenetration,
          hispanicPopulation: tarrantCountyData.hispanicPopulation,
          bilingualSupport: tarrantCountyData.bilingualNeed
        }
      },
      {
        city: 'Fort Worth',
        state: 'Texas',
        county: 'Tarrant County',
        region: 'Dallas-Fort Worth Metroplex'
      }
    )

    // Set up advanced scroll tracking
    const cleanup = setupMedicareAdvancedScrollTracking('county_market', [
      { percentage: 25, milestone: 'healthcare_network_viewed' },
      { percentage: 50, milestone: 'cost_comparison_reviewed' },
      { percentage: 75, milestone: 'plan_options_explored' },
      { percentage: 90, milestone: 'resources_section_viewed' }
    ])

    return cleanup
  }, [])

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Supplement Tarrant County Texas"
        county="Tarrant County"
        state="Texas"
        demographics={{
          avgAge: tarrantCountyData.averageAge,
          hispanicPopulation: tarrantCountyData.hispanicPopulation,
          maPenetrationRate: tarrantCountyData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: tarrantCountyData.totalBeneficiaries,
          medigapOpportunity: tarrantCountyData.medigapOpportunity,
          averagePremium: tarrantCountyData.averagePlanGPremium,
          pageType: 'dfw_medigap',
          productType: 'medicare_supplement'
        }}
      />
      <main className="min-h-screen">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(tarrantStructuredData)
          }}
        />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🤠 TARRANT COUNTY: Dallas-Fort Worth Metroplex Healthcare Coverage</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Tarrant County Medicare Supplement Plans: Fort Worth & Arlington Medigap Coverage
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">🏥</span>
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold text-blue-800 mb-2">
                  Tarrant County: DFW Metroplex Medicare Hub
                </p>
                <p className="text-blue-700">
                  With <strong>339,000+ Medicare beneficiaries</strong> across Fort Worth, Arlington, and surrounding communities,
                  Tarrant County represents Texas's premier Medicare market. Access world-class healthcare through
                  <strong> Texas Health Resources, JPS Health Network, Baylor Scott & White, and Medical City Healthcare</strong>,
                  with <Link href="/medicare-supplement" className="text-blue-900 underline hover:text-blue-600">Medigap plans</Link> that
                  provide unrestricted access to DFW's extensive medical network and specialist care.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">339K+</div>
              <div className="text-blue-800 font-semibold">Medicare beneficiaries</div>
              <div className="text-blue-600 text-sm mt-1">DFW's largest county</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">44%</div>
              <div className="text-green-800 font-semibold">Medigap opportunity</div>
              <div className="text-green-600 text-sm mt-1">150K potential enrollees</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$142</div>
              <div className="text-purple-800 font-semibold">Avg monthly premium</div>
              <div className="text-purple-600 text-sm mt-1">Texas Plan G rates</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">28%</div>
              <div className="text-orange-800 font-semibold">Hispanic population</div>
              <div className="text-orange-600 text-sm mt-1">Bilingual services</div>
            </div>
          </div>
        </div>

        {/* DFW Healthcare Network */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Tarrant County Healthcare Excellence</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🌟 Premier Healthcare Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Texas Health Resources:</strong> 15 hospitals, comprehensive network across DFW</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>JPS Health Network:</strong> Safety net hospital, Level I trauma center</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Baylor Scott & White Health:</strong> Academic medical center, specialty care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Medical City Healthcare:</strong> HCA network, advanced treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Cook Children's Medical Center:</strong> Pediatric excellence (senior family care)</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">🎯 Medigap Advantages in DFW</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🤠</span>
                  <span><strong>No Network Restrictions:</strong> Access all Medicare providers in DFW</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏥</span>
                  <span><strong>Multi-System Access:</strong> Freedom to choose between hospital systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">👨‍⚕️</span>
                  <span><strong>Specialist Freedom:</strong> See any Medicare specialist without referrals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💰</span>
                  <span><strong>Predictable Costs:</strong> Lower rates than coastal states</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🌐</span>
                  <span><strong>Nationwide Coverage:</strong> Travel protection across all 50 states</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">🤠 Why Medigap Works in Tarrant County:</h4>
            <p className="text-blue-700 mb-4">
              Tarrant County's competitive healthcare market features multiple world-class hospital systems.
              Medicare Supplement plans eliminate network restrictions, allowing you to access
              <strong> Texas Health Resources, JPS, Baylor Scott & White, and Medical City</strong> without
              prior authorization. This flexibility is crucial in DFW's diverse medical landscape.
            </p>
            <div className="border-t border-blue-200 pt-3">
              <p className="text-sm text-blue-700 font-semibold mb-2">Compare Texas Medicare Options:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/medicare-supplement-texas" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Texas Medicare Supplement Guide</Link>
                <Link href="/medicare-supplement-dallas-county-texas" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Dallas County Medigap</Link>
                <Link href="/medicare-supplement-harris-county-texas" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Harris County Medigap</Link>
                <Link href="/medicare-advantage/tarrant-county-texas" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Tarrant County Medicare Advantage</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏙️ Tarrant County Medicare Coverage by City</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Fort Worth</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Medicare Pop:</strong> 140,000+ beneficiaries</div>
                <div><strong>Healthcare Hub:</strong> Texas Health, JPS, Medical City</div>
                <div><strong>Advantage:</strong> Multiple hospital systems</div>
                <div><strong>Medigap Benefit:</strong> Unrestricted system access</div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Arlington</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Medicare Pop:</strong> 85,000+ beneficiaries</div>
                <div><strong>Healthcare Hub:</strong> Texas Health Arlington Memorial</div>
                <div><strong>Advantage:</strong> Central DFW location</div>
                <div><strong>Medigap Benefit:</strong> Dallas-Fort Worth access</div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">North Richland Hills & Suburbs</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Medicare Pop:</strong> 114,000+ beneficiaries</div>
                <div><strong>Healthcare Hub:</strong> Regional medical centers</div>
                <div><strong>Advantage:</strong> Suburban healthcare access</div>
                <div><strong>Medigap Benefit:</strong> Multi-county flexibility</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
            <h4 className="font-semibold text-purple-800 mb-3">Explore Other DFW & Texas County Medicare Options:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-purple-700 font-semibold mb-2">Texas Medicare Supplement:</p>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <Link href="/medicare-supplement-texas" className="underline hover:text-purple-900">Texas Medicare Supplement Guide</Link></li>
                  <li>• <Link href="/medicare-supplement-dallas-county-texas" className="underline hover:text-purple-900">Dallas County Medigap</Link></li>
                  <li>• <Link href="/medicare-supplement-harris-county-texas" className="underline hover:text-purple-900">Harris County (Houston)</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-purple-700 font-semibold mb-2">Medicare Advantage Options:</p>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <Link href="/medicare-advantage/tarrant-county-texas" className="underline hover:text-purple-900">Tarrant County MA Plans</Link></li>
                  <li>• <Link href="/medicare-advantage/dallas-county-texas" className="underline hover:text-purple-900">Dallas County MA</Link></li>
                  <li>• <Link href="/medicare-advantage/collin-county-texas" className="underline hover:text-purple-900">Collin County Plans</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-purple-700 font-semibold mb-2">Compare Other States:</p>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <Link href="/medicare-supplement-florida" className="underline hover:text-purple-900">Florida Medigap Rates</Link></li>
                  <li>• <Link href="/medicare-supplement-new-york" className="underline hover:text-purple-900">New York Medigap Rates</Link></li>
                  <li>• <Link href="/medicare-supplement" className="underline hover:text-purple-900">All States Overview</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cost-Benefit Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Tarrant County Medicare Supplement Value Analysis</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">Light Healthcare Year</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Medicare Advantage</span>
                  <span className="font-semibold">$1,200/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Texas Medigap Plan G</span>
                  <span className="font-semibold">$1,704/year</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-green-800 font-semibold">
                    <span>MA Advantage:</span>
                    <span>$504</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-4">Moderate Care Year</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Medicare Advantage</span>
                  <span className="font-semibold">$5,500/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Texas Medigap Plan G</span>
                  <span className="font-semibold">$1,944/year</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-yellow-800 font-semibold">
                    <span>Medigap Saves:</span>
                    <span>$3,556</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-4">Serious Illness Year</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Medicare Advantage</span>
                  <span className="font-semibold">$11,700/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Texas Medigap Plan G</span>
                  <span className="font-semibold">$1,944/year</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-red-800 font-semibold">
                    <span>Medigap Saves:</span>
                    <span>$9,756</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded">
            <h4 className="font-semibold text-orange-800 mb-2">🤠 Texas Medicare Supplement Advantage:</h4>
            <p className="text-orange-700 mb-3">
              Texas Medicare Supplement rates are among the most competitive in the nation:
            </p>
            <ul className="space-y-2 text-orange-700 text-sm">
              <li>• <strong>Lower Premiums:</strong> Texas Plan G averages $142/month vs <Link href="/medicare-supplement-new-york" className="underline hover:text-orange-900">$280/month in New York</Link></li>
              <li>• <strong>Multiple Systems:</strong> Access Texas Health, JPS, Baylor, and Medical City without restrictions</li>
              <li>• <strong>No Referrals:</strong> See DFW specialists directly without prior authorization</li>
              <li>• <strong>Predictable Budgeting:</strong> Fixed monthly premium eliminates surprise bills</li>
              <li>• <strong>Nationwide Travel:</strong> Coverage across all 50 states for snowbirds and travelers</li>
            </ul>
            <div className="border-t border-orange-200 pt-3 mt-3">
              <p className="text-sm text-orange-700 font-semibold mb-2">Compare Texas Rates:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/medicare-supplement-texas" className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded hover:bg-orange-200">Texas State Guide</Link>
                <Link href="/medicare-supplement-dallas-county-texas" className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded hover:bg-orange-200">Dallas County Rates</Link>
                <Link href="/medicare-supplement-harris-county-texas" className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded hover:bg-orange-200">Houston Rates</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Best Plans Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 Best Medicare Supplement Plans for Tarrant County</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-green-300 rounded-xl p-6">
              <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-3">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plan G</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$142<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Comprehensive coverage</li>
                <li>✓ Part B deductible only gap</li>
                <li>✓ Best value for DFW living</li>
                <li>✓ All specialist visits covered</li>
                <li>✓ No network restrictions</li>
                <li>✓ Nationwide travel protection</li>
              </ul>
              <div className="bg-green-50 p-3 rounded text-sm text-green-800">
                <strong>Perfect for:</strong> Active seniors needing healthcare flexibility
              </div>
            </div>

            <div className="bg-white border-2 border-blue-300 rounded-xl p-6">
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-3">
                BUDGET OPTION
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plan N</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$108<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Lower monthly premium</li>
                <li>✓ Small copays per visit ($20)</li>
                <li>✓ Excellent DFW coverage</li>
                <li>✓ All hospitals accessible</li>
                <li>✓ No network limitations</li>
                <li>✓ Predictable cost-sharing</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded text-sm text-blue-800">
                <strong>Perfect for:</strong> Budget-conscious Texas residents
              </div>
            </div>

            <div className="bg-white border-2 border-purple-300 rounded-xl p-6">
              <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-3">
                HIGH DEDUCTIBLE
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plan G HD</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$38<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Lowest premium option</li>
                <li>✓ $2,800 annual deductible</li>
                <li>✓ Catastrophic protection</li>
                <li>✓ Full coverage after deductible</li>
                <li>✓ Any provider access</li>
                <li>✓ Emergency coverage backup</li>
              </ul>
              <div className="bg-purple-50 p-3 rounded text-sm text-purple-800">
                <strong>Perfect for:</strong> Healthy seniors wanting protection
              </div>
            </div>
          </div>
        </section>

        {/* Bilingual Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🌐 Servicios Bilingües / Bilingual Services</h2>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Medicare Supplement en Español</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Servicios en Español:</h4>
                <ul className="space-y-2 text-purple-600 text-sm">
                  <li>• Consultas bilingües certificadas</li>
                  <li>• Materiales en español disponibles</li>
                  <li>• Agentes que hablan español</li>
                  <li>• Soporte continuo en su idioma</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">English Services:</h4>
                <ul className="space-y-2 text-purple-600 text-sm">
                  <li>• Certified bilingual consultations</li>
                  <li>• Spanish materials available</li>
                  <li>• Spanish-speaking agents</li>
                  <li>• Ongoing support in your language</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-purple-200 pt-4">
              <p className="text-sm text-purple-700 font-semibold mb-2">Serving Tarrant County's Diverse Communities:</p>
              <p className="text-sm text-purple-600 mb-3">
                With 28% Hispanic population, we proudly serve Fort Worth, Arlington, and surrounding communities
                with bilingual Medicare Supplement guidance and enrollment assistance.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/team" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Meet Our Bilingual Team</Link>
                <Link href="/resources/enrollment-periods-explained" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Enrollment Periods</Link>
                <Link href="/contact" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Solicitar Consulta</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🤠 Get Expert Tarrant County Medicare Supplement Guidance</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Navigate Tarrant County's premier healthcare systems with comprehensive Medicare Supplement coverage.
              Get personalized DFW Medicare expertise from licensed Texas specialists who understand Fort Worth,
              Arlington, and regional healthcare options. Bilingual services available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                onClick={() => trackMedicareAdvancedCTA('contact_form', 'content', 'county_market', '/contact')}
              >
                🤠 Get Tarrant County Quote
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                onClick={() => trackMedicareAdvancedCTA('phone_call', 'content', 'county_market', 'tel:331-343-2584')}
              >
                📞 Call DFW Expert
              </a>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Tarrant County Medicare Supplement Resources</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Medicare Supplement Resources</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• <Link href="/medicare-supplement" className="underline hover:text-blue-900">Medicare Supplement Plans Overview</Link></li>
                <li>• <Link href="/medicare-supplement-texas" className="underline hover:text-blue-900">Texas Medicare Supplement Guide</Link></li>
                <li>• <Link href="/medicare-part-d-formulary-lookup" className="underline hover:text-blue-900">Part D Prescription Drug Coverage</Link></li>
                <li>• <Link href="/resources/prescription-drug-coverage" className="underline hover:text-blue-900">Prescription Drug Resources</Link></li>
                <li>• <Link href="/resources/understanding-costs" className="underline hover:text-blue-900">Understanding Medicare Costs</Link></li>
                <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-blue-900">Enrollment Periods Guide</Link></li>
                <li>• <Link href="/resources/medicare-advantage-vs-original" className="underline hover:text-blue-900">Medicare Advantage vs Medigap</Link></li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Local DFW & Texas Resources</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• <strong>Tarrant County Agency on Aging:</strong> 817-258-8026</li>
                <li>• <strong>Texas SHIP Program:</strong> 1-800-252-9240</li>
                <li>• <strong>Senior Source (DFW):</strong> 214-823-5700</li>
                <li>• <Link href="/medicare-supplement-dallas-county-texas" className="underline hover:text-green-900">Dallas County Medigap</Link></li>
                <li>• <Link href="/medicare-supplement-harris-county-texas" className="underline hover:text-green-900">Houston Medigap Options</Link></li>
                <li>• <Link href="/supplemental-insurance" className="underline hover:text-green-900">Supplemental Insurance</Link></li>
                <li>• <Link href="/final-expense" className="underline hover:text-green-900">Final Expense Planning</Link></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compare Medicare Options Across Texas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">DFW County Options:</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <Link href="/medicare-advantage/tarrant-county-texas" className="underline hover:text-blue-900">Tarrant MA Plans</Link></li>
                  <li>• <Link href="/medicare-advantage/dallas-county-texas" className="underline hover:text-blue-900">Dallas MA Plans</Link></li>
                  <li>• <Link href="/medicare-advantage/collin-county-texas" className="underline hover:text-blue-900">Collin County Plans</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Additional Coverage:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <Link href="/supplemental-insurance" className="underline hover:text-green-900">Supplemental Insurance</Link></li>
                  <li>• <Link href="/whole-life-insurance" className="underline hover:text-green-900">Whole Life Insurance</Link></li>
                  <li>• <Link href="/term-life-insurance" className="underline hover:text-green-900">Term Life Insurance</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Planning Resources:</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <Link href="/benefits-analysis" className="underline hover:text-purple-900">Benefits Analysis</Link></li>
                  <li>• <Link href="/social-security-analysis" className="underline hover:text-purple-900">Social Security Planning</Link></li>
                  <li>• <Link href="/annuities" className="underline hover:text-purple-900">Retirement Annuities</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      </main>
    </>
  )
}
