import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { generateCountyMedicareSchema, getMarketplaceFAQs } from '@/lib/schema/county-medicare-schema'

export const metadata: Metadata = {
  title: 'Miami-Dade County Health Insurance Marketplace 2025 - ACA Plans & Subsidies | El-Mag Insurance',
  description: 'Miami-Dade County Health Insurance Marketplace guide: Compare 2025 ACA plans for 485,000+ residents. $0 premium plans, subsidy calculator, bilingual enrollment assistance.',
  keywords: 'Miami-Dade health insurance marketplace, ACA plans Miami, Obamacare Miami-Dade, affordable health insurance Hialeah, Miami Beach marketplace plans, subsidized health insurance Miami, Spanish ACA enrollment, zero premium plans Miami-Dade',
  openGraph: {
    title: 'Miami-Dade County Health Insurance Marketplace 2025 - ACA Plans & Subsidies',
    description: 'Find affordable health insurance in Miami-Dade County with ACA Marketplace plans, subsidies up to 100%, and bilingual enrollment support.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/health-insurance-marketplace-miami-dade-county',
  },
}

const miamiDadeMarketplaceData = {
  totalPopulation: 2716940,
  uninsuredRate: 16.2,
  marketplaceEnrollees: 287000,
  averageSubsidy: 485,
  zeroPremiumEligible: 68,
  bilingualServices: true,
  openEnrollmentStart: 'November 1, 2024',
  openEnrollmentEnd: 'January 15, 2025'
}

const miamiDadeMarketplaceStructuredData = generateCountyMedicareSchema({
  pagePath: '/health-insurance-marketplace-miami-dade-county',
  pageTitle: 'Miami-Dade County Health Insurance Marketplace 2025 - ACA Plans & Subsidies',
  pageDescription: 'Miami-Dade County Health Insurance Marketplace guide: Compare 2025 ACA plans for 485,000+ residents. $0 premium plans, subsidy calculator, bilingual enrollment assistance.',
  county: 'Miami-Dade County',
  state: 'Florida',
  productType: 'health-insurance-marketplace',
  totalBeneficiaries: 287000,
  averagePremium: 425,
  faqs: getMarketplaceFAQs('Miami-Dade County', 'Florida', 68, 485)
})

export default function MiamiDadeMarketplacePage() {
  React.useEffect(() => {
    // Advanced analytics tracking will be added
  }, [])

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Health Insurance Marketplace Miami-Dade County Florida"
        county="Miami-Dade County"
        state="Florida"
        demographics={{
          avgAge: 40,
        }}
        keyMetrics={{
          totalBeneficiaries: miamiDadeMarketplaceData.marketplaceEnrollees,
          averagePremium: 425,
          pageType: 'marketplace_county',
          productType: 'health_insurance_marketplace'
        }}
      />
      <main className="min-h-screen">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(miamiDadeMarketplaceStructuredData)
          }}
        />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🏥 MIAMI-DADE COUNTY: Florida's Largest ACA Marketplace</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Miami-Dade County Health Insurance Marketplace 2025: Affordable ACA Plans for South Florida
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">🏥</span>
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold text-blue-800 mb-2">
                  Miami-Dade: 287,000+ Marketplace Enrollees
                </p>
                <p className="text-blue-700">
                  Serving Miami-Dade County's diverse communities from <Link href="/health-insurance-marketplace/plans" className="text-blue-900 underline hover:text-blue-600">Miami Beach to Homestead</Link> with
                  comprehensive <Link href="/health-insurance-marketplace/plans" className="text-blue-900 underline hover:text-blue-600">ACA Marketplace health insurance plans</Link>.
                  Access <strong>$0 premium coverage</strong> for 68% of eligible residents, <Link href="/health-insurance-marketplace/subsidies" className="text-blue-900 underline hover:text-blue-600">subsidies averaging $485/month</Link>,
                  and <Link href="/specialists" className="text-blue-900 underline hover:text-blue-600">bilingual enrollment specialists</Link> (Spanish/Creole/Portuguese) for South Florida's unique healthcare needs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">287K+</div>
              <div className="text-blue-800 font-semibold">Marketplace enrollees</div>
              <div className="text-blue-600 text-sm mt-1">Largest FL county market</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">68%</div>
              <div className="text-green-800 font-semibold">$0 premium eligible</div>
              <div className="text-green-600 text-sm mt-1">With subsidies</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$485</div>
              <div className="text-purple-800 font-semibold">Average subsidy</div>
              <div className="text-purple-600 text-sm mt-1">Per month savings</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">16.2%</div>
              <div className="text-orange-800 font-semibold">Uninsured rate</div>
              <div className="text-orange-600 text-sm mt-1">440K+ eligible</div>
            </div>
          </div>
        </div>

        {/* 2025 Open Enrollment Alert */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg">
            <div className="flex items-start">
              <span className="text-3xl mr-4">⏰</span>
              <div>
                <h2 className="text-2xl font-bold mb-3">2025 Miami-Dade Health Insurance Marketplace Open Enrollment</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-lg font-semibold mb-2">📅 Enrollment Period:</p>
                    <p className="text-white/90">November 1, 2024 - January 15, 2025</p>
                    <p className="text-sm text-white/80 mt-1">Coverage starts: January 1, 2025</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">⚡ Quick Action Required:</p>
                    <p className="text-white/90">Enroll by December 15 for January 1 coverage</p>
                    <p className="text-sm text-white/80 mt-1">After Jan 15: Special Enrollment Period only</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Link href="/contact" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50">
                    📞 Enroll Now
                  </Link>
                  <Link href="/health-insurance-marketplace/subsidies" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30">
                    💰 Check Eligibility
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Miami-Dade Marketplace Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Miami-Dade County ACA Marketplace Health Insurance Plans</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🌟 Available Plan Types</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🥉</span>
                  <span><strong>Bronze Plans:</strong> Low premium, higher deductible ($8,500+ deductible)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🥈</span>
                  <span><strong>Silver Plans:</strong> <Link href="/health-insurance-marketplace/subsidies" className="text-blue-800 underline hover:text-blue-600">Best for subsidies</Link>, moderate costs ($6,000 deductible)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🥇</span>
                  <span><strong>Gold Plans:</strong> <Link href="/resources/understanding-costs" className="text-blue-800 underline hover:text-blue-600">Lower out-of-pocket</Link>, higher premium ($2,500 deductible)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💎</span>
                  <span><strong>Platinum Plans:</strong> Comprehensive coverage, lowest out-of-pocket</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚨</span>
                  <span><strong>Catastrophic Plans:</strong> <Link href="/health-insurance-marketplace/enrollment" className="text-blue-800 underline hover:text-blue-600">Under 30 or hardship exemption</Link> (high deductible)</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🎯 Miami-Dade Marketplace Advantages</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💰</span>
                  <span><strong>Premium Tax Credits:</strong> <Link href="/health-insurance-marketplace/subsidies" className="text-blue-800 underline hover:text-blue-600">Reduce monthly premiums</Link> based on income</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Major Hospital Networks:</strong> Jackson, Baptist, UM Health, <Link href="/resources/medicare-advantage-vs-original" className="text-blue-800 underline hover:text-blue-600">Cleveland Clinic</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💊</span>
                  <span><strong>Prescription Coverage:</strong> All plans include <Link href="/resources/prescription-drug-coverage" className="text-blue-800 underline hover:text-blue-600">drug benefits</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🩺</span>
                  <span><strong>Preventive Care:</strong> <Link href="/resources/understanding-costs" className="text-blue-800 underline hover:text-blue-600">$0 copay</Link> annual checkups, screenings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💬</span>
                  <span><strong>Bilingual Support:</strong> Spanish, Creole, Portuguese enrollment help</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="font-semibold text-blue-800 mb-2">🌴 Why Choose ACA Marketplace in Miami-Dade?</h3>
            <p className="text-blue-700 mb-4">
              Miami-Dade County's <Link href="/health-insurance-marketplace/plans" className="text-blue-900 underline hover:text-blue-600">Health Insurance Marketplace</Link> offers
              comprehensive coverage with <strong>287,000+ enrolled residents</strong>. With <Link href="/health-insurance-marketplace/subsidies" className="text-blue-900 underline hover:text-blue-600">subsidies averaging $485/month</Link>,
              68% of eligible Miami-Dade residents qualify for <strong>$0 premium plans</strong>. Access major South Florida hospital systems including Jackson Health, Baptist Health,
              University of Miami Health, and Cleveland Clinic Florida with <Link href="/specialists" className="text-blue-900 underline hover:text-blue-600">bilingual enrollment specialists</Link> available
              in Spanish, Creole, and Portuguese for our diverse community.
            </p>
            <div className="border-t border-blue-200 pt-3">
              <p className="text-sm text-blue-700 font-semibold mb-2">Compare South Florida Marketplace Options:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/health-insurance-marketplace/plans" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Marketplace Plans</Link>
                <Link href="/health-insurance-marketplace/subsidies" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Subsidy Calculator</Link>
                <Link href="/health-insurance-marketplace/enrollment" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Enrollment Guide</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏙️ Miami-Dade County Health Insurance Marketplace Coverage by Region</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Downtown Miami & Miami Beach</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Population:</strong> 485,000 residents</div>
                <div><strong>Uninsured Rate:</strong> 14.5%</div>
                <div><strong>Major Hospitals:</strong> Jackson Memorial, Mount Sinai</div>
                <div><strong>Average Subsidy:</strong> $520/month</div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Hialeah & North Miami-Dade</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Population:</strong> 620,000 residents</div>
                <div><strong>Uninsured Rate:</strong> 19.8%</div>
                <div><strong>Major Hospitals:</strong> Hialeah Hospital, North Shore</div>
                <div><strong>Average Subsidy:</strong> $495/month</div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Kendall & South Miami-Dade</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Population:</strong> 550,000 residents</div>
                <div><strong>Uninsured Rate:</strong> 15.2%</div>
                <div><strong>Major Hospitals:</strong> Baptist Health, Kendall Regional</div>
                <div><strong>Average Subsidy:</strong> $465/month</div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">West Miami-Dade & Doral</h3>
              <div className="space-y-2 text-orange-700 text-sm">
                <div><strong>Population:</strong> 445,000 residents</div>
                <div><strong>Uninsured Rate:</strong> 17.1%</div>
                <div><strong>Major Hospitals:</strong> Westchester General, Doral Medical</div>
                <div><strong>Average Subsidy:</strong> $475/month</div>
              </div>
            </div>

            <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-lg">
              <h3 className="font-semibold text-cyan-800 mb-3">Homestead & South Dade</h3>
              <div className="space-y-2 text-cyan-700 text-sm">
                <div><strong>Population:</strong> 285,000 residents</div>
                <div><strong>Uninsured Rate:</strong> 22.4%</div>
                <div><strong>Major Hospitals:</strong> Homestead Hospital, South Miami</div>
                <div><strong>Average Subsidy:</strong> $510/month</div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-3">Little Haiti & Little Havana</h3>
              <div className="space-y-2 text-teal-700 text-sm">
                <div><strong>Population:</strong> 332,000 residents</div>
                <div><strong>Uninsured Rate:</strong> 20.5%</div>
                <div><strong>Major Hospitals:</strong> Jackson North, community clinics</div>
                <div><strong>Average Subsidy:</strong> $500/month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Subsidy & Premium Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Miami-Dade Health Insurance Marketplace Subsidies & Costs</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">📊 2025 Subsidy Eligibility (Miami-Dade)</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-800 mb-2">$0 Premium Plans Available:</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• <strong>Individual:</strong> Income $15,060 - $36,450/year</li>
                    <li>• <strong>Family of 2:</strong> Income $20,440 - $49,380/year</li>
                    <li>• <strong>Family of 4:</strong> Income $31,200 - $75,400/year</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">Premium Tax Credits:</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Income 100-150% FPL: <Link href="/health-insurance-marketplace/subsidies" className="text-blue-800 underline hover:text-blue-600">0-2% of income cap</Link></li>
                    <li>• Income 150-200% FPL: 2-4% of income cap</li>
                    <li>• Income 200-250% FPL: 4-6% of income cap</li>
                    <li>• Income 250-400% FPL: 6-8.5% of income cap</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold text-purple-800 mb-2">Cost-Sharing Reductions (Silver Plans):</p>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• 100-150% FPL: <Link href="/resources/understanding-costs" className="text-purple-800 underline hover:text-purple-600">94% actuarial value</Link> (lowest costs)</li>
                    <li>• 150-200% FPL: 87% actuarial value</li>
                    <li>• 200-250% FPL: 73% actuarial value</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">💵 Average Monthly Premiums (Before Subsidies)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700"><strong>Bronze Plans:</strong></span>
                  <span className="text-blue-600 font-semibold">$350-$450/mo</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700"><strong>Silver Plans:</strong></span>
                  <span className="text-blue-600 font-semibold">$450-$550/mo</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700"><strong>Gold Plans:</strong></span>
                  <span className="text-blue-600 font-semibold">$550-$650/mo</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700"><strong>Platinum Plans:</strong></span>
                  <span className="text-blue-600 font-semibold">$650-$800/mo</span>
                </div>

                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-green-800 mb-2">💡 With Average $485/month Subsidy:</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Bronze: <strong>$0-$50/month</strong> (many $0 plans)</li>
                    <li>• Silver: <strong>$0-$65/month</strong> (best value with CSR)</li>
                    <li>• Gold: <strong>$65-$165/month</strong></li>
                    <li>• Platinum: <strong>$165-$315/month</strong></li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>68% of Miami-Dade residents</strong> qualify for $0 premium Bronze or Silver plans with subsidies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🧮 Calculate Your Miami-Dade Marketplace Subsidy</h3>
            <p className="text-gray-700 mb-4">
              Use our <Link href="/health-insurance-marketplace/subsidies" className="text-blue-600 underline hover:text-blue-800">subsidy calculator</Link> to estimate
              your premium tax credits and cost-sharing reductions. Most Miami-Dade families earning under $75,000/year qualify for significant savings.
            </p>
            <div className="flex gap-3">
              <Link href="/health-insurance-marketplace/subsidies" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                💰 Check Eligibility
              </Link>
              <Link href="/contact" className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                📞 Get Expert Help
              </Link>
            </div>
          </div>
        </section>

        {/* Hospital Networks */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Miami-Dade Health Insurance Marketplace Hospital Networks</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Major Hospital Systems in Network</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Jackson Health System:</strong> 5 hospitals, Level I trauma center, comprehensive care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Baptist Health South Florida:</strong> 12 hospitals, cardiac excellence, urgent care network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>University of Miami Health:</strong> Academic medical center, specialty care, research hospital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Cleveland Clinic Florida:</strong> Cardiac center, digestive disease institute, wellness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Mount Sinai Medical Center:</strong> Miami Beach location, emergency services, maternity</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Network Types & Access</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🌐</span>
                  <span><strong>HMO Plans:</strong> Primary care physician referrals required, <Link href="/resources/understanding-costs" className="text-blue-800 underline hover:text-blue-600">lower premiums</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🌐</span>
                  <span><strong>PPO Plans:</strong> <Link href="/resources/medicare-advantage-vs-original" className="text-blue-800 underline hover:text-blue-600">No referrals needed</Link>, out-of-network coverage available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🌐</span>
                  <span><strong>EPO Plans:</strong> No referrals, in-network only, moderate premiums</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Urgent Care:</strong> 100+ locations across Miami-Dade, $50-75 copay</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚑</span>
                  <span><strong>Emergency Care:</strong> All plans cover <Link href="/resources/understanding-costs" className="text-blue-800 underline hover:text-blue-600">emergency services</Link>, $350-500 copay</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bilingual Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💬 Bilingual Marketplace Enrollment for Miami-Dade</h2>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Seguro Médico del Mercado en Español</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Language Support:</h4>
                <ul className="space-y-2 text-purple-600 text-sm">
                  <li>• Spanish-speaking agents</li>
                  <li>• Creole enrollment specialists</li>
                  <li>• Portuguese assistance</li>
                  <li>• Translated plan materials</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Community Support:</h4>
                <ul className="space-y-2 text-green-600 text-sm">
                  <li>• Little Havana enrollment events</li>
                  <li>• Little Haiti community outreach</li>
                  <li>• Hialeah in-person enrollment</li>
                  <li>• Homestead assistance centers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Enrollment Help:</h4>
                <ul className="space-y-2 text-blue-600 text-sm">
                  <li>• Application assistance</li>
                  <li>• Income verification help</li>
                  <li>• Document preparation</li>
                  <li>• Plan comparison guidance</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-purple-200 pt-4">
              <p className="text-sm text-purple-700 font-semibold mb-2">Recursos en Español / Kreyòl:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/specialists" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Agentes Bilingües</Link>
                <Link href="/contact" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Inscripción en Español</Link>
                <Link href="/health-insurance-marketplace/enrollment" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Guía de Inscripción</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Special Enrollment Periods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📅 Miami-Dade Health Insurance Marketplace Special Enrollment Periods</h2>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">Qualify for Enrollment Outside Open Enrollment?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Qualifying Life Events (60-day window):</h4>
                <ul className="space-y-2 text-orange-600 text-sm">
                  <li>• Lost <Link href="/resources/enrollment-periods-explained" className="text-orange-800 underline hover:text-orange-600">job-based health coverage</Link></li>
                  <li>• Marriage, divorce, or legal separation</li>
                  <li>• Birth or adoption of a child</li>
                  <li>• Moved to Miami-Dade County</li>
                  <li>• Loss of Medicaid or CHIP coverage</li>
                  <li>• Became a U.S. citizen or legal resident</li>
                  <li>• Released from incarceration</li>
                  <li>• Income change affecting <Link href="/health-insurance-marketplace/subsidies" className="text-orange-800 underline hover:text-orange-600">subsidy eligibility</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Year-Round Enrollment (Miami-Dade):</h4>
                <ul className="space-y-2 text-green-600 text-sm">
                  <li>✓ <strong>Medicaid:</strong> Enroll anytime if income-eligible</li>
                  <li>✓ <strong>CHIP (Florida KidCare):</strong> Children's coverage anytime</li>
                  <li>✓ <strong>Pregnant Women:</strong> Medicaid pregnancy coverage</li>
                  <li>✓ <strong>Low Income:</strong> Medicaid expansion (adults 138% FPL)</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-white p-4 rounded">
              <p className="text-orange-800 font-semibold mb-2">Need to Check SEP Eligibility?</p>
              <div className="flex gap-3">
                <Link href="/contact" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 text-sm">
                  Verify Eligibility
                </Link>
                <Link href="/health-insurance-marketplace/enrollment" className="bg-white text-orange-600 border-2 border-orange-600 px-4 py-2 rounded hover:bg-orange-50 text-sm">
                  SEP Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Health Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🩺 Essential Health Benefits Covered by All Miami-Dade Marketplace Plans</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">🏥 Medical Services</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• Doctor visits & specialists</li>
                <li>• Emergency services</li>
                <li>• Hospitalization & surgery</li>
                <li>• Ambulatory patient services</li>
                <li>• Lab tests & imaging</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">💊 Pharmacy & Specialty</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• <Link href="/resources/prescription-drug-coverage" className="text-green-800 underline hover:text-green-600">Prescription drug coverage</Link></li>
                <li>• Mental health & substance abuse</li>
                <li>• Rehabilitative & habilitative services</li>
                <li>• Chronic disease management</li>
                <li>• Preventive care ($0 copay)</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">👶 Family Services</h3>
              <ul className="space-y-2 text-purple-700 text-sm">
                <li>• Maternity & newborn care</li>
                <li>• <Link href="/resources/dental-vision-benefits" className="text-purple-800 underline hover:text-purple-600">Pediatric services (dental/vision)</Link></li>
                <li>• Well-baby & well-child visits</li>
                <li>• Immunizations ($0 copay)</li>
                <li>• Breastfeeding support</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-green-50 border-l-4 border-green-400 p-6 rounded">
            <h3 className="font-semibold text-green-800 mb-2">🎯 Preventive Care at $0 Cost</h3>
            <p className="text-green-700 mb-3">
              All Miami-Dade Marketplace plans cover preventive care with <strong>$0 copay</strong>: annual checkups, cancer screenings,
              blood pressure checks, diabetes screenings, immunizations, and well-woman visits. No deductible required.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg mb-12" aria-labelledby="cta-heading">
          <div className="text-center">
            <p id="cta-heading" className="text-2xl font-bold mb-4">🏥 Get Expert Miami-Dade Marketplace Enrollment Help</p>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Navigate Miami-Dade County's Health Insurance Marketplace with expert assistance. Compare plans, calculate subsidies,
              and enroll with bilingual specialists who understand South Florida's diverse community. Servicio en español y kreyòl disponible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/health-insurance-marketplace/subsidies"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                💰 Calculate Subsidy
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

        {/* Marketplace Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Miami-Dade Health Insurance Marketplace Resources</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Marketplace Resources</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• <Link href="/health-insurance-marketplace/plans" className="underline hover:text-blue-900">ACA Marketplace Plans Overview</Link></li>
                <li>• <Link href="/health-insurance-marketplace/subsidies" className="underline hover:text-blue-900">Premium Tax Credit Calculator</Link></li>
                <li>• <Link href="/health-insurance-marketplace/enrollment" className="underline hover:text-blue-900">Enrollment Guide & Deadlines</Link></li>
                <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-blue-900">Open Enrollment Periods</Link></li>
                <li>• <Link href="/resources/understanding-costs" className="underline hover:text-blue-900">Understanding Health Insurance Costs</Link></li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Miami-Dade Specific Services</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• <Link href="/specialists" className="underline hover:text-green-900">Bilingual Enrollment Specialists</Link></li>
                <li>• <Link href="/contact" className="underline hover:text-green-900">Schedule Enrollment Appointment</Link></li>
                <li>• <Link href="/health-insurance-marketplace-harris-county-guide" className="underline hover:text-green-900">Marketplace Comparison Guide</Link></li>
                <li>• <Link href="/resources/dental-vision-benefits" className="underline hover:text-green-900">Dental & Vision Coverage Options</Link></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compare Health Insurance Options Across South Florida</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">South Florida Counties:</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <Link href="/health-insurance-marketplace-miami-dade-county" className="underline hover:text-blue-900">Miami-Dade Marketplace</Link></li>
                  <li>• <Link href="/health-insurance-marketplace-broward-county" className="underline hover:text-blue-900">Broward County Marketplace</Link></li>
                  <li>• <Link href="/health-insurance-marketplace-palm-beach-county" className="underline hover:text-blue-900">Palm Beach Marketplace</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Coverage Types:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <Link href="/health-insurance-marketplace/plans" className="underline hover:text-green-900">ACA Marketplace Plans</Link></li>
                  <li>• <Link href="/medicare-advantage/miami-dade-county" className="underline hover:text-green-900">Medicare Advantage (65+)</Link></li>
                  <li>• <Link href="/supplemental-insurance" className="underline hover:text-green-900">Supplemental Coverage</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Planning Tools:</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <Link href="/health-insurance-marketplace/subsidies" className="underline hover:text-purple-900">Subsidy Calculator</Link></li>
                  <li>• <Link href="/contact" className="underline hover:text-purple-900">Free Consultation</Link></li>
                  <li>• <Link href="/health-insurance-marketplace/enrollment" className="underline hover:text-purple-900">Enrollment Checklist</Link></li>
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
