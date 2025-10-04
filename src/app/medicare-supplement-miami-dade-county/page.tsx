import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { generateCountyMedicareSchema, getMedicareSupplementFAQs } from '@/lib/schema/county-medicare-schema'

export const metadata: Metadata = {
  title: 'Miami-Dade County Medicare Supplement Plans 2025 - Florida Medigap Coverage Expert Guide | El-Mag Insurance',
  description: 'Miami-Dade County Medicare Supplement guide: Navigate South Florida\'s largest market with 485,000+ beneficiaries. Expert Medigap coverage for Jackson Health, Baptist Health, and UM Health networks.',
  keywords: 'Miami-Dade Medicare Supplement, Miami Medigap plans, Hialeah Medicare Supplement, Miami Beach Medigap, Kendall Medicare plans, Coral Gables Medicare Supplement, Jackson Health System Medicare, Baptist Health Medicare coverage, University of Miami Health Medicare',
  openGraph: {
    title: 'Miami-Dade County Medicare Supplement - South Florida\'s Largest Medicare Market',
    description: 'Comprehensive Medicare Supplement coverage for Miami-Dade County\'s 485,000+ beneficiaries with specialized expertise in South Florida\'s diverse healthcare landscape.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-supplement-miami-dade-county',
  },
}

const miamiDadeData = {
  totalBeneficiaries: 485000,
  maPenetration: 56,
  averageAge: 72,
  medigapOpportunity: 213000,
  averagePlanGPremium: 158,
  majorHospitalSystems: 5,
  diversePopulation: true,
  bilingualServices: true
}

const miamiDadeStructuredData = generateCountyMedicareSchema({
  pagePath: '/medicare-supplement-miami-dade-county',
  pageTitle: 'Miami-Dade County Medicare Supplement Plans 2025 - Florida Medigap Coverage Expert Guide',
  pageDescription: 'Miami-Dade County Medicare Supplement guide: Navigate South Florida\'s largest market with 485,000+ beneficiaries. Expert Medigap coverage for Jackson Health, Baptist Health, and UM Health networks.',
  county: 'Miami-Dade County',
  state: 'Florida',
  productType: 'medicare-supplement',
  totalBeneficiaries: 485000,
  averagePremium: 158,
  faqs: getMedicareSupplementFAQs('Miami-Dade County', 'Florida', 158)
})

export default function MiamiDadeCountyMedicareSupplementPage() {
  React.useEffect(() => {
    // Advanced analytics tracking will be added
  }, [])

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Supplement Miami-Dade County Florida"
        county="Miami-Dade County"
        state="Florida"
        demographics={{
          avgAge: miamiDadeData.averageAge,
          maPenetrationRate: miamiDadeData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: miamiDadeData.totalBeneficiaries,
          medigapOpportunity: miamiDadeData.medigapOpportunity,
          averagePremium: miamiDadeData.averagePlanGPremium,
          pageType: 'urban_medigap',
          productType: 'medicare_supplement'
        }}
      />
      <main className="min-h-screen">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(miamiDadeStructuredData)
          }}
        />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🏙️ MIAMI-DADE COUNTY: South Florida's Premier Medicare Market</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Miami-Dade County Medicare Supplement Plans: Expert Medigap Coverage for South Florida
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">🏥</span>
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold text-blue-800 mb-2">
                  Miami-Dade: Florida's Largest Medicare Market
                </p>
                <p className="text-blue-700">
                  Serving <strong>485,000+ Medicare beneficiaries</strong> across Miami-Dade County's diverse communities,
                  from <Link href="/medicare-advantage/miami-beach-florida" className="text-blue-900 underline hover:text-blue-600">Miami Beach</Link> to Homestead. Access world-class healthcare networks including <strong>Jackson Health System,
                  Baptist Health South Florida, University of Miami Health, Cleveland Clinic Florida, and Mount Sinai Medical Center</strong>
                  with <Link href="/medicare-supplement" className="text-blue-900 underline hover:text-blue-600">Medicare Supplement plans</Link> that
                  provide comprehensive coverage, <Link href="/specialists" className="text-blue-900 underline hover:text-blue-600">bilingual support</Link>, and network flexibility for South Florida's unique healthcare landscape.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">485K+</div>
              <div className="text-blue-800 font-semibold">Medicare beneficiaries</div>
              <div className="text-blue-600 text-sm mt-1">Largest FL county market</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">56%</div>
              <div className="text-green-800 font-semibold">Medicare Advantage rate</div>
              <div className="text-green-600 text-sm mt-1">213K Medigap opportunity</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$158</div>
              <div className="text-purple-800 font-semibold">Avg monthly premium</div>
              <div className="text-purple-600 text-sm mt-1">Plan G competitive rates</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-orange-800 font-semibold">Major health systems</div>
              <div className="text-orange-600 text-sm mt-1">World-class networks</div>
            </div>
          </div>
        </div>

        {/* Miami-Dade Healthcare Landscape */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Miami-Dade County Medicare Supplement Healthcare Network Excellence</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🌟 Major Hospital Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Jackson Health System:</strong> Florida's largest public hospital, <Link href="/resources/understanding-costs" className="text-blue-800 underline hover:text-blue-600">Level I trauma center</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Baptist Health South Florida:</strong> 12 hospitals including Miami Cardiac & Vascular, Baptist Hospital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>University of Miami Health (UM Health):</strong> Academic medical center, Sylvester Cancer Center</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Cleveland Clinic Florida:</strong> Weston campus, cardiac care excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Mount Sinai Medical Center:</strong> <Link href="/medicare-advantage/miami-beach-florida" className="text-blue-800 underline hover:text-blue-600">Miami Beach</Link> premier facility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Nicklaus Children's Hospital:</strong> Pediatric & senior specialty care</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">🎯 Medigap Advantages for Miami-Dade</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🌴</span>
                  <span><strong>No Network Restrictions:</strong> Access all major Miami-Dade hospitals freely with <Link href="/medicare-supplement-plan-g" className="text-green-800 underline hover:text-green-600">Plan G</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🌍</span>
                  <span><strong>International Travel:</strong> Coverage during trips to Latin America, Caribbean</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💬</span>
                  <span><strong>Bilingual Support:</strong> Spanish, Creole, Portuguese <Link href="/specialists" className="text-green-800 underline hover:text-green-600">language services</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏖️</span>
                  <span><strong>Snowbird Flexibility:</strong> Seamless <Link href="/resources/enrollment-periods-explained" className="text-green-800 underline hover:text-green-600">multi-state coverage</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">👨‍⚕️</span>
                  <span><strong>Specialist Freedom:</strong> See top UM Health, Cleveland Clinic doctors without <Link href="/resources/medicare-advantage-vs-original" className="text-green-800 underline hover:text-green-600">referrals</Link></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="font-semibold text-blue-800 mb-2">🌴 Miami-Dade Medigap Value</h3>
            <p className="text-blue-700 mb-4">
              Miami-Dade County's world-class healthcare ecosystem makes <Link href="/medicare-supplement-florida" className="text-blue-900 underline hover:text-blue-600">Florida Medicare Supplement plans</Link> essential.
              With 5 major hospital systems, hundreds of specialist practices, and a diverse population requiring culturally competent care,
              Medigap provides <strong>unrestricted access to any Medicare provider</strong> without network limitations. Perfect for Miami-Dade's
              internationally-connected residents who travel frequently and demand premium healthcare access.
            </p>
            <div className="border-t border-blue-200 pt-3">
              <p className="text-sm text-blue-700 font-semibold mb-2">Compare South Florida Medicare Options:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/medicare-supplement-florida" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Florida Medicare Supplement Overview</Link>
                <Link href="/medicare-advantage/miami-dade-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Miami-Dade Medicare Advantage</Link>
                <Link href="/medicare-supplement-broward-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Broward County Medigap</Link>
                <Link href="/medicare-supplement-palm-beach-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Palm Beach County Plans</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Coverage by Miami-Dade Zones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏙️ Miami-Dade County Medicare Supplement Coverage by Region</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Downtown Miami & Miami Beach</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Medicare Pop:</strong> 95,000+ beneficiaries</div>
                <div><strong>Healthcare Hubs:</strong> Jackson Memorial, Mount Sinai, UM Health</div>
                <div><strong>Key Cities:</strong> Miami, Miami Beach, Coral Gables</div>
                <div><strong>Medigap Benefit:</strong> Premium specialist access without limits</div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">North Miami-Dade & Hialeah</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Medicare Pop:</strong> 125,000+ beneficiaries</div>
                <div><strong>Healthcare Hubs:</strong> North Shore Medical, Hialeah Hospital, Aventura Hospital</div>
                <div><strong>Key Cities:</strong> Hialeah, North Miami, Aventura, Opa-locka</div>
                <div><strong>Medigap Benefit:</strong> Bilingual network flexibility</div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">South Miami-Dade & Homestead</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Medicare Pop:</strong> 78,000+ beneficiaries</div>
                <div><strong>Healthcare Hubs:</strong> South Miami Hospital, Homestead Hospital, Kendall Regional</div>
                <div><strong>Key Cities:</strong> Kendall, Homestead, Cutler Bay, Pinecrest</div>
                <div><strong>Medigap Benefit:</strong> Access to Miami medical centers without restrictions</div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">West Miami-Dade & Doral</h3>
              <div className="space-y-2 text-orange-700 text-sm">
                <div><strong>Medicare Pop:</strong> 88,000+ beneficiaries</div>
                <div><strong>Healthcare Hubs:</strong> Doral Medical Center, Westchester Hospital, Kendall Regional</div>
                <div><strong>Key Cities:</strong> Doral, Sweetwater, Westchester, Tamiami</div>
                <div><strong>Medigap Benefit:</strong> Easy access to specialty care networks</div>
              </div>
            </div>

            <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-lg">
              <h3 className="font-semibold text-cyan-800 mb-3">Central Miami-Dade</h3>
              <div className="space-y-2 text-cyan-700 text-sm">
                <div><strong>Medicare Pop:</strong> 62,000+ beneficiaries</div>
                <div><strong>Healthcare Hubs:</strong> Mercy Hospital, Larkin Hospital</div>
                <div><strong>Key Cities:</strong> Little Havana, Flagami, Allapattah</div>
                <div><strong>Medigap Benefit:</strong> Culturally diverse provider access</div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-3">Beaches & Coastal Communities</h3>
              <div className="space-y-2 text-teal-700 text-sm">
                <div><strong>Medicare Pop:</strong> 37,000+ beneficiaries</div>
                <div><strong>Healthcare Hubs:</strong> Mount Sinai, Aventura Hospital</div>
                <div><strong>Key Cities:</strong> Sunny Isles, Bal Harbour, Key Biscayne</div>
                <div><strong>Medigap Benefit:</strong> Travel coverage, international medical access</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
            <h3 className="font-semibold text-purple-800 mb-3">Explore Other Florida Medicare Markets</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-purple-700 font-semibold mb-2">Nearby County Options:</p>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <Link href="/medicare-advantage/broward-county-florida" className="underline hover:text-purple-900">Broward County Medicare Plans</Link></li>
                  <li>• <Link href="/medicare-advantage/palm-beach-county" className="underline hover:text-purple-900">Palm Beach County Medicare</Link></li>
                  <li>• <Link href="/medicare-supplement-monroe-county" className="underline hover:text-purple-900">Monroe County (Florida Keys)</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-purple-700 font-semibold mb-2">Product Comparisons:</p>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <Link href="/medicare-supplement" className="underline hover:text-purple-900">Medicare Supplement Plans</Link></li>
                  <li>• <Link href="/medicare-supplement-plan-g" className="underline hover:text-purple-900">Plan G Details</Link></li>
                  <li>• <Link href="/medicare-supplement-plan-n" className="underline hover:text-purple-900">Plan N Comparison</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Medigap for Miami-Dade */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🌊 Why Medicare Supplement is Essential for Miami-Dade Residents</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-4">❌ Miami-Dade Healthcare Challenges</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <span><strong>Network Restrictions:</strong> <Link href="/medicare-advantage/miami-dade-county" className="text-red-800 underline hover:text-red-600">MA plans</Link> limit access to top specialists at UM Health, Cleveland Clinic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <span><strong>Prior Authorization Delays:</strong> Emergency care at Jackson requires <Link href="/resources/medicare-advantage-vs-original" className="text-red-800 underline hover:text-red-600">MA approval</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <span><strong>International Travel:</strong> Limited coverage during frequent trips abroad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <span><strong>Specialist Access:</strong> Referral requirements delay care at premier facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <span><strong>High Out-of-Pocket:</strong> MA copays add up with <Link href="/resources/understanding-costs" className="text-red-800 underline hover:text-red-600">frequent healthcare use</Link></span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">✅ Medigap Solutions for Miami-Dade Living</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Any Provider Access:</strong> Visit all 5 major hospital systems without restrictions with <Link href="/medicare-supplement" className="text-green-800 underline hover:text-green-600">Medigap</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>International Coverage:</strong> Emergency care during Caribbean, Latin America <Link href="/trip-cancellation-insurance" className="text-green-800 underline hover:text-green-600">travel</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>No Prior Authorization:</strong> Immediate access to Jackson ER, UM specialists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Predictable Costs:</strong> Low copays, no <Link href="/resources/understanding-costs" className="text-green-800 underline hover:text-green-600">surprise medical bills</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Nationwide Coverage:</strong> Perfect for snowbirds with northern homes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Miami-Dade County Florida Medicare Supplement Cost Comparison</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">Light Healthcare Year</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Medicare Advantage</span>
                  <span className="font-semibold">$960/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Miami-Dade Plan G</span>
                  <span className="font-semibold">$1,896/year</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-green-800 font-semibold">
                    <span>MA Advantage:</span>
                    <span>$936</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-4">Active Medical Care Year</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Medicare Advantage</span>
                  <span className="font-semibold">$5,200/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Miami-Dade Plan G</span>
                  <span className="font-semibold">$2,136/year</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-yellow-800 font-semibold">
                    <span>Medigap Saves:</span>
                    <span>$3,064</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-4">Specialist Care Year</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Medicare Advantage</span>
                  <span className="font-semibold">$8,400/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Miami-Dade Plan G</span>
                  <span className="font-semibold">$2,136/year</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-red-800 font-semibold">
                    <span>Medigap Saves:</span>
                    <span>$6,264</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded">
            <h3 className="font-semibold text-orange-800 mb-2">🌴 Miami-Dade Healthcare Reality</h3>
            <p className="text-orange-700 mb-3">
              Miami-Dade residents face unique <Link href="/resources/understanding-costs" className="text-orange-900 underline hover:text-orange-600">healthcare costs</Link> that make Medigap especially valuable:
            </p>
            <ul className="space-y-2 text-orange-700 text-sm">
              <li>• <strong>Specialist Visits:</strong> Frequent appointments at UM Health, Cleveland Clinic, <Link href="/resources/prescription-drug-coverage" className="text-orange-900 underline hover:text-orange-600">Baptist Health cardiology</Link></li>
              <li>• <strong>International Travel:</strong> Emergency care during trips to Latin America, Caribbean</li>
              <li>• <strong>Premium Networks:</strong> Access to Jackson Health Level I trauma, Sylvester Cancer Center</li>
              <li>• <strong>Snowbird Lifestyle:</strong> Healthcare coverage when traveling to <Link href="/medicare-supplement-new-york" className="text-orange-900 underline hover:text-orange-600">northern homes</Link></li>
              <li>• <strong>Network Limitations:</strong> <Link href="/medicare-advantage/miami-dade-county" className="text-orange-900 underline hover:text-orange-600">MA plans</Link> restrict top-tier specialist access</li>
            </ul>
          </div>
        </section>

        {/* International Travel Coverage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">✈️ International Travel Coverage with Miami-Dade Medicare Supplement Plans</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Why Medigap is Essential for International Travelers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Travel Challenges:</h4>
                <ul className="space-y-2 text-blue-600 text-sm">
                  <li>• Frequent trips to Latin America, Caribbean</li>
                  <li>• Family visits to international destinations</li>
                  <li>• Cruise travel throughout Americas</li>
                  <li>• Extended stays in home countries</li>
                  <li>• Medicare Advantage limited foreign coverage</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Medigap Travel Benefits:</h4>
                <ul className="space-y-2 text-green-600 text-sm">
                  <li>✓ <strong>Foreign Emergency Care:</strong> Up to $50,000 lifetime coverage with <Link href="/medicare-supplement-plan-g" className="text-green-800 underline hover:text-green-600">Plan G</Link></li>
                  <li>✓ <strong>First 60 Days of Trip:</strong> Emergency care covered abroad</li>
                  <li>✓ <strong>80% Coverage After Deductible:</strong> $250 deductible, then 80% paid</li>
                  <li>✓ <strong>Peace of Mind:</strong> Medical emergencies covered during <Link href="/trip-cancellation-insurance" className="text-green-800 underline hover:text-green-600">travel</Link></li>
                  <li>✓ <strong>No Prior Authorization:</strong> Immediate emergency care access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bilingual Medicare Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💬 Bilingual Medicare Supplement Services for Miami-Dade</h2>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Servicio en Español y Otros Idiomas</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Language Support:</h4>
                <ul className="space-y-2 text-purple-600 text-sm">
                  <li>• Spanish / Español</li>
                  <li>• Haitian Creole / Kreyòl</li>
                  <li>• Portuguese / Português</li>
                  <li>• French / Français</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Bilingual Benefits:</h4>
                <ul className="space-y-2 text-green-600 text-sm">
                  <li>✓ Spanish-speaking agents</li>
                  <li>✓ Translated documents</li>
                  <li>✓ Cultural understanding</li>
                  <li>✓ Community-based service</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Miami-Dade Communities:</h4>
                <ul className="space-y-2 text-blue-600 text-sm">
                  <li>• Little Havana</li>
                  <li>• Hialeah</li>
                  <li>• Little Haiti</li>
                  <li>• All county areas</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-purple-200 pt-4">
              <p className="text-sm text-purple-700 font-semibold mb-2">Recursos Adicionales:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/specialists" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Nuestro Equipo / Our Team</Link>
                <Link href="/contact" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Contacto / Contact</Link>
                <Link href="/resources/enrollment-periods-explained" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Períodos de Inscripción</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Medigap Plans */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 Best Medicare Supplement Plans for Miami-Dade County</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-green-300 rounded-xl p-6">
              <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-3">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plan G</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$158<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Comprehensive coverage</li>
                <li>✓ Part B deductible only gap ($240/year)</li>
                <li>✓ All Miami-Dade hospital access</li>
                <li>✓ International travel coverage</li>
                <li>✓ No prior authorization needed</li>
                <li>✓ Predictable healthcare costs</li>
              </ul>
              <div className="bg-green-50 p-3 rounded text-sm text-green-800">
                <strong>Perfect for:</strong> Active Miami-Dade residents using UM Health, Cleveland Clinic, Jackson specialists. <Link href="/medicare-supplement-plan-g" className="text-green-900 underline hover:text-green-600">Learn more</Link>
              </div>
            </div>

            <div className="bg-white border-2 border-blue-300 rounded-xl p-6">
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-3">
                BUDGET OPTION
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plan N</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$118<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Lower monthly premium</li>
                <li>✓ Small copays ($20 office, $50 ER)</li>
                <li>✓ Part B excess charges</li>
                <li>✓ All provider network access</li>
                <li>✓ International emergency coverage</li>
                <li>✓ Great value for healthy seniors</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded text-sm text-blue-800">
                <strong>Perfect for:</strong> Budget-conscious Miami-Dade residents with good health. <Link href="/medicare-supplement-plan-n" className="text-blue-900 underline hover:text-blue-600">Learn more</Link>
              </div>
            </div>

            <div className="bg-white border-2 border-purple-300 rounded-xl p-6">
              <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-3">
                HIGH DEDUCTIBLE
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plan G HD</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$42<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Lowest premium option</li>
                <li>✓ $2,800 annual deductible</li>
                <li>✓ Catastrophic protection</li>
                <li>✓ Full coverage after deductible</li>
                <li>✓ Any provider access</li>
                <li>✓ International travel benefit</li>
              </ul>
              <div className="bg-purple-50 p-3 rounded text-sm text-purple-800">
                <strong>Perfect for:</strong> Healthy Miami-Dade residents wanting low premiums with protection
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg mb-12" aria-labelledby="cta-heading">
          <div className="text-center">
            <p id="cta-heading" className="text-2xl font-bold mb-4">🏙️ Get Expert Miami-Dade Medicare Supplement Guidance</p>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Navigate Miami-Dade County's complex healthcare landscape with comprehensive Medicare Supplement coverage.
              Get personalized Medigap expertise from licensed Florida specialists who understand South Florida's diverse communities,
              bilingual needs, and world-class medical networks. Servicio en español disponible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                🌴 Get Miami-Dade Medigap Quote
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📞 Llame Ahora / Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Miami-Dade Medicare Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏙️ Miami-Dade Medicare Supplement Resources</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Medicare Supplement Resources</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• <Link href="/medicare-supplement" className="underline hover:text-blue-900">Medicare Supplement Plans Overview</Link></li>
                <li>• <Link href="/medicare-supplement-florida" className="underline hover:text-blue-900">Florida Medicare Supplement Guide</Link></li>
                <li>• <Link href="/medicare-part-d-formulary-lookup" className="underline hover:text-blue-900">Part D Prescription Drug Coverage</Link></li>
                <li>• <Link href="/resources/prescription-drug-coverage" className="underline hover:text-blue-900">Prescription Drug Resources</Link></li>
                <li>• <Link href="/resources/understanding-costs" className="underline hover:text-blue-900">Understanding Medicare Costs</Link></li>
                <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-blue-900">Enrollment Periods Explained</Link></li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Miami-Dade Specific Services</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• Bilingual Medicare Counseling (Spanish, Creole, Portuguese)</li>
                <li>• International Travel Coverage Planning</li>
                <li>• Hospital Network Navigation Assistance</li>
                <li>• <Link href="/specialists" className="underline hover:text-green-900">Meet Our Miami-Dade Medicare Specialists</Link></li>
                <li>• <Link href="/supplemental-insurance" className="underline hover:text-green-900">Supplemental Insurance Options</Link></li>
                <li>• <Link href="/resources/medicare-advantage-vs-original" className="underline hover:text-green-900">MA vs Medigap Comparison</Link></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compare Medicare Options Across South Florida</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">South Florida Counties:</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <Link href="/medicare-advantage/miami-dade-county" className="underline hover:text-blue-900">Miami-Dade MA Plans</Link></li>
                  <li>• <Link href="/medicare-supplement-broward-county" className="underline hover:text-blue-900">Broward County Medigap</Link></li>
                  <li>• <Link href="/medicare-supplement-palm-beach-county" className="underline hover:text-blue-900">Palm Beach Medigap</Link></li>
                  <li>• <Link href="/medicare-supplement-monroe-county" className="underline hover:text-blue-900">Monroe County (Keys)</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Additional Coverage:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <Link href="/supplemental-insurance" className="underline hover:text-green-900">Supplemental Insurance</Link></li>
                  <li>• <Link href="/final-expense" className="underline hover:text-green-900">Final Expense Plans</Link></li>
                  <li>• <Link href="/whole-life-insurance" className="underline hover:text-green-900">Whole Life Insurance</Link></li>
                  <li>• <Link href="/resources/dental-vision-benefits" className="underline hover:text-green-900">Dental & Vision Benefits</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Planning Resources:</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-purple-900">Enrollment Periods</Link></li>
                  <li>• <Link href="/resources/star-ratings-guide" className="underline hover:text-purple-900">Star Ratings Guide</Link></li>
                  <li>• <Link href="/social-security-analysis" className="underline hover:text-purple-900">Social Security Planning</Link></li>
                  <li>• <Link href="/contact" className="underline hover:text-purple-900">Contact Our Team</Link></li>
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
