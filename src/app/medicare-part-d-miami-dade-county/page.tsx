import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { generateCountyMedicareSchema, getMedicarePartDFAQs } from '@/lib/schema/county-medicare-schema'

export const metadata: Metadata = {
  title: 'Miami-Dade County Medicare Part D Plans 2025 - Prescription Drug Coverage Guide | El-Mag Insurance',
  description: 'Miami-Dade County Medicare Part D guide: Compare prescription drug plans for 485,000+ beneficiaries. CVS, Walgreens, Publix pharmacy networks. Formulary lookup tool.',
  keywords: 'Miami-Dade Medicare Part D, Miami prescription drug plans, Hialeah Part D coverage, Miami Beach pharmacy plans, Kendall Medicare drug coverage, bilingual Part D assistance, Spanish Medicare Part D, CVS Caremark Miami, Walgreens pharmacy coverage',
  openGraph: {
    title: 'Miami-Dade County Medicare Part D - Prescription Drug Coverage 2025',
    description: 'Compare Medicare Part D prescription drug plans for Miami-Dade County\'s 485,000+ beneficiaries with bilingual support and major pharmacy networks.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-part-d-miami-dade-county',
  },
}

const miamiDadePartDData = {
  totalBeneficiaries: 485000,
  partDEnrollment: 340000,
  averageMonthlyPremium: 42,
  majorPharmacies: 850,
  bilingualServices: true,
  averagePrescriptions: 8.5
}

const miamiDadePartDStructuredData = generateCountyMedicareSchema({
  pagePath: '/medicare-part-d-miami-dade-county',
  pageTitle: 'Miami-Dade County Medicare Part D Plans 2025 - Prescription Drug Coverage Guide',
  pageDescription: 'Miami-Dade County Medicare Part D guide: Compare prescription drug plans for 485,000+ beneficiaries. CVS, Walgreens, Publix pharmacy networks. Formulary lookup tool.',
  county: 'Miami-Dade County',
  state: 'Florida',
  productType: 'medicare-part-d',
  totalBeneficiaries: 340000,
  averagePremium: 42,
  faqs: getMedicarePartDFAQs('Miami-Dade County', 'Florida', 850)
})

export default function MiamiDadeCountyMedicarePartDPage() {
  React.useEffect(() => {
    // Advanced analytics tracking will be added
  }, [])

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Part D Miami-Dade County Florida"
        county="Miami-Dade County"
        state="Florida"
        demographics={{
          avgAge: 72,
          maPenetrationRate: 56,
        }}
        keyMetrics={{
          totalBeneficiaries: miamiDadePartDData.totalBeneficiaries,
          partDEnrollment: miamiDadePartDData.partDEnrollment,
          averagePremium: miamiDadePartDData.averageMonthlyPremium,
          pageType: 'urban_part_d',
          productType: 'medicare_part_d'
        }}
      />
      <main className="min-h-screen">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(miamiDadePartDStructuredData)
          }}
        />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">💊 MIAMI-DADE COUNTY: South Florida's Premier Part D Market</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Miami-Dade County Medicare Part D Plans: Prescription Drug Coverage for South Florida
          </h1>
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">💊</span>
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold text-green-800 mb-2">
                  Miami-Dade: Florida's Largest Part D Market
                </p>
                <p className="text-green-700">
                  Serving <strong>340,000+ Medicare Part D enrollees</strong> across Miami-Dade County's diverse communities.
                  Access <strong>850+ pharmacies</strong> including CVS, Walgreens, Publix, Navarro, Sedano's, and independent pharmacies
                  with <Link href="/medicare-part-d" className="text-green-900 underline hover:text-green-600">Medicare Part D prescription drug plans</Link> that
                  provide comprehensive medication coverage, <Link href="/specialists" className="text-green-900 underline hover:text-green-600">bilingual support</Link> (Spanish/Creole/Portuguese),
                  and convenient <Link href="/medicare-part-d-formulary-lookup" className="text-green-900 underline hover:text-green-600">formulary lookup tools</Link> for South Florida's unique healthcare needs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">340K+</div>
              <div className="text-green-800 font-semibold">Part D enrollees</div>
              <div className="text-green-600 text-sm mt-1">Largest FL county market</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">850+</div>
              <div className="text-blue-800 font-semibold">Pharmacy locations</div>
              <div className="text-blue-600 text-sm mt-1">CVS, Walgreens, Publix</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$42</div>
              <div className="text-purple-800 font-semibold">Avg monthly premium</div>
              <div className="text-purple-600 text-sm mt-1">Competitive rates</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">8.5</div>
              <div className="text-orange-800 font-semibold">Avg prescriptions</div>
              <div className="text-orange-600 text-sm mt-1">Per beneficiary</div>
            </div>
          </div>
        </div>

        {/* Miami-Dade Pharmacy Network */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏪 Miami-Dade County Medicare Part D Pharmacy Network</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">🌟 Major Pharmacy Chains</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💊</span>
                  <span><strong>CVS Pharmacy:</strong> 200+ locations, <Link href="/medicare-part-d" className="text-green-800 underline hover:text-green-600">CVS Caremark Part D plans</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💊</span>
                  <span><strong>Walgreens:</strong> 180+ stores, widespread Miami-Dade coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💊</span>
                  <span><strong>Publix Pharmacy:</strong> 120+ supermarket locations, convenient access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💊</span>
                  <span><strong>Walmart Pharmacy:</strong> 45+ stores, <Link href="/resources/understanding-costs" className="text-green-800 underline hover:text-green-600">low-cost options</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💊</span>
                  <span><strong>Navarro Discount Pharmacy:</strong> 30+ <Link href="/specialists" className="text-green-800 underline hover:text-green-600">Cuban-American community pharmacies</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💊</span>
                  <span><strong>Sedano's Pharmacy:</strong> Hispanic supermarket chain pharmacies</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🎯 Part D Advantages for Miami-Dade</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💊</span>
                  <span><strong>850+ Pharmacy Access:</strong> More locations than <Link href="/medicare-part-d-broward-county" className="text-blue-800 underline hover:text-blue-600">any FL county</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💬</span>
                  <span><strong>Bilingual Pharmacists:</strong> <Link href="/specialists" className="text-blue-800 underline hover:text-blue-600">Spanish, Creole, Portuguese speakers</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚚</span>
                  <span><strong>Mail Order Delivery:</strong> Home delivery to all Miami-Dade addresses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💰</span>
                  <span><strong>Low-Income Subsidy:</strong> <Link href="/resources/understanding-costs" className="text-blue-800 underline hover:text-blue-600">Extra Help available</Link> for qualifying residents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔍</span>
                  <span><strong>Formulary Lookup:</strong> <Link href="/medicare-part-d-formulary-lookup" className="text-blue-800 underline hover:text-blue-600">Check drug coverage</Link> before enrollment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded">
            <h3 className="font-semibold text-green-800 mb-2">🌴 Miami-Dade Part D Value</h3>
            <p className="text-green-700 mb-4">
              Miami-Dade County's extensive pharmacy network makes <Link href="/medicare-part-d" className="text-green-900 underline hover:text-green-600">Medicare Part D</Link> essential for prescription coverage.
              With 850+ pharmacies serving diverse communities from <Link href="/medicare-advantage/miami-beach-florida" className="text-green-900 underline hover:text-green-600">Miami Beach</Link> to Homestead,
              beneficiaries enjoy convenient access to medications with bilingual pharmacy services in Spanish, Creole, and Portuguese.
              <Link href="/medicare-part-d-formulary-lookup" className="text-green-900 underline hover:text-green-600">Use our formulary lookup tool</Link> to verify your medications are covered before enrollment.
            </p>
            <div className="border-t border-green-200 pt-3">
              <p className="text-sm text-green-700 font-semibold mb-2">Compare South Florida Part D Options:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/medicare-part-d" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Florida Part D Overview</Link>
                <Link href="/medicare-advantage/miami-dade-county" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Miami-Dade MA with Part D</Link>
                <Link href="/medicare-part-d-broward-county" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Broward County Part D</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Pharmacy Coverage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏙️ Miami-Dade County Medicare Part D Pharmacy Coverage by Region</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Downtown Miami & Miami Beach</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Pharmacies:</strong> 180+ locations</div>
                <div><strong>Major Chains:</strong> CVS, Walgreens, Publix</div>
                <div><strong>Specialty:</strong> 24-hour pharmacies available</div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Hialeah & North Miami-Dade</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Pharmacies:</strong> 200+ locations</div>
                <div><strong>Major Chains:</strong> Navarro, Sedano's, CVS</div>
                <div><strong>Specialty:</strong> Spanish-speaking pharmacists</div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Kendall & South Miami-Dade</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Pharmacies:</strong> 150+ locations</div>
                <div><strong>Major Chains:</strong> Publix, CVS, Walgreens</div>
                <div><strong>Specialty:</strong> Suburban convenience</div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">West Miami-Dade & Doral</h3>
              <div className="space-y-2 text-orange-700 text-sm">
                <div><strong>Pharmacies:</strong> 140+ locations</div>
                <div><strong>Major Chains:</strong> CVS, Walmart, Publix</div>
                <div><strong>Specialty:</strong> Growing suburban network</div>
              </div>
            </div>

            <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-lg">
              <h3 className="font-semibold text-cyan-800 mb-3">Homestead & South Dade</h3>
              <div className="space-y-2 text-cyan-700 text-sm">
                <div><strong>Pharmacies:</strong> 90+ locations</div>
                <div><strong>Major Chains:</strong> Walmart, CVS, Publix</div>
                <div><strong>Specialty:</strong> Agricultural community access</div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-3">Little Haiti & Little Havana</h3>
              <div className="space-y-2 text-teal-700 text-sm">
                <div><strong>Pharmacies:</strong> 90+ locations</div>
                <div><strong>Major Chains:</strong> Navarro, independent pharmacies</div>
                <div><strong>Specialty:</strong> Multilingual community pharmacies</div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Part D Plans */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 Best Medicare Part D Prescription Drug Plans for Miami-Dade County 2025</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-green-300 rounded-xl p-6">
              <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-3">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aetna Premier Part D (PDP)</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$28<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ $0 deductible</li>
                <li>✓ <Link href="/medicare-part-d-formulary-lookup" className="text-gray-800 underline hover:text-green-600">Broad formulary coverage</Link></li>
                <li>✓ CVS, Walgreens, Publix preferred</li>
                <li>✓ Mail order available</li>
                <li>✓ <Link href="/resources/star-ratings-guide" className="text-gray-800 underline hover:text-green-600">4-star rated plan</Link></li>
                <li>✓ <Link href="/specialists" className="text-gray-800 underline hover:text-green-600">Spanish customer service</Link></li>
              </ul>
              <div className="bg-green-50 p-3 rounded text-sm text-green-800">
                <strong>Perfect for:</strong> Miami-Dade residents with multiple prescriptions needing broad coverage
              </div>
            </div>

            <div className="bg-white border-2 border-blue-300 rounded-xl p-6">
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-3">
                LOW PREMIUM
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SilverScript Choice (PDP)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$22<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Low monthly premium</li>
                <li>✓ $100 deductible</li>
                <li>✓ CVS Caremark network</li>
                <li>✓ 850+ Miami-Dade pharmacies</li>
                <li>✓ Home delivery included</li>
                <li>✓ Extra Help accepted</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded text-sm text-blue-800">
                <strong>Perfect for:</strong> Budget-conscious beneficiaries with generic medications
              </div>
            </div>

            <div className="bg-white border-2 border-purple-300 rounded-xl p-6">
              <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-3">
                COMPREHENSIVE
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Humana Preferred Rx Plan</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$38<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ $0 deductible</li>
                <li>✓ Extensive formulary</li>
                <li>✓ All major Miami pharmacies</li>
                <li>✓ Specialty drug coverage</li>
                <li>✓ Bilingual support</li>
                <li>✓ Diabetes medication focus</li>
              </ul>
              <div className="bg-purple-50 p-3 rounded text-sm text-purple-800">
                <strong>Perfect for:</strong> Chronic condition management with specialty drugs
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="font-semibold text-blue-800 mb-2">💊 Compare All Miami-Dade Part D Plans</h3>
            <p className="text-blue-700 mb-3">
              Use our <Link href="/medicare-part-d-formulary-lookup" className="text-blue-900 underline hover:text-blue-600">formulary lookup tool</Link> to compare plans based on your specific medications.
              Check coverage for your prescriptions, compare copays, and find preferred pharmacies near you.
            </p>
            <div className="flex gap-3 mt-4">
              <Link href="/medicare-part-d-formulary-lookup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Check Drug Coverage
              </Link>
              <Link href="/contact" className="bg-white text-blue-600 border-2 border-blue-600 px-4 py-2 rounded hover:bg-blue-50">
                Get Expert Help
              </Link>
            </div>
          </div>
        </section>

        {/* Understanding Part D Costs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Understanding Miami-Dade Medicare Part D Costs</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">📊 Part D Cost Components</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💵</span>
                  <span><strong>Monthly Premium:</strong> Average $42/month in Miami-Dade (range: $22-$80)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💵</span>
                  <span><strong>Annual Deductible:</strong> $0-$545 depending on plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💵</span>
                  <span><strong>Copays/Coinsurance:</strong> <Link href="/resources/understanding-costs" className="text-green-800 underline hover:text-green-600">Tier-based pricing</Link> for medications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💵</span>
                  <span><strong>Coverage Gap:</strong> <Link href="/resources/prescription-drug-coverage" className="text-green-800 underline hover:text-green-600">"Donut hole"</Link> at $5,030 in drug costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💵</span>
                  <span><strong>Catastrophic Coverage:</strong> $8,000 out-of-pocket maximum</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">💊 Miami-Dade Drug Tier Examples</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">Tier 1:</span>
                  <span><strong>Preferred Generics:</strong> $0-$10 copay (Metformin, Lisinopril)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">Tier 2:</span>
                  <span><strong>Generic Drugs:</strong> $10-$20 copay (Generic statins)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">Tier 3:</span>
                  <span><strong>Preferred Brand:</strong> $40-$50 copay (Common brands)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">Tier 4:</span>
                  <span><strong>Non-Preferred:</strong> 25-40% coinsurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">Tier 5:</span>
                  <span><strong>Specialty Drugs:</strong> 25-33% coinsurance (max $250/month) - <Link href="/medicare-part-d-formulary-lookup" className="text-blue-800 underline hover:text-blue-600">Check coverage</Link></span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bilingual Part D Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💬 Bilingual Medicare Part D Services for Miami-Dade</h2>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Servicio de Medicare Parte D en Español</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Language Support:</h4>
                <ul className="space-y-2 text-purple-600 text-sm">
                  <li>• Spanish-speaking pharmacists</li>
                  <li>• Creole pharmacy services</li>
                  <li>• Portuguese assistance</li>
                  <li>• Translated materials</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Community Pharmacies:</h4>
                <ul className="space-y-2 text-green-600 text-sm">
                  <li>• Navarro (Cuban-American)</li>
                  <li>• Sedano's (Hispanic)</li>
                  <li>• Little Haiti pharmacies</li>
                  <li>• Little Havana locations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Enrollment Help:</h4>
                <ul className="space-y-2 text-blue-600 text-sm">
                  <li>• Bilingual agents</li>
                  <li>• Spanish plan comparisons</li>
                  <li>• Cultural competency</li>
                  <li>• Community outreach</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-purple-200 pt-4">
              <p className="text-sm text-purple-700 font-semibold mb-2">Recursos en Español:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/specialists" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Agentes Bilingües / Bilingual Agents</Link>
                <Link href="/contact" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Contacto / Contact</Link>
                <Link href="/medicare-part-d-formulary-lookup" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Buscar Medicamentos</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Extra Help / Low-Income Subsidy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🆘 Extra Help (Low-Income Subsidy) for Miami-Dade Residents</h2>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">Financial Assistance Available</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Eligibility Requirements:</h4>
                <ul className="space-y-2 text-orange-600 text-sm">
                  <li>• Income: Under $22,590 (individual) or $30,660 (couple)</li>
                  <li>• Resources: Under $17,220 (individual) or $34,360 (couple)</li>
                  <li>• Automatic if receiving <Link href="/social-security-analysis" className="text-orange-800 underline hover:text-orange-600">SSI</Link>, Medicaid, or SNAP</li>
                  <li>• Miami-Dade has high eligible population</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Extra Help Benefits:</h4>
                <ul className="space-y-2 text-green-600 text-sm">
                  <li>✓ <strong>$0 Monthly Premium:</strong> No plan premium</li>
                  <li>✓ <strong>$0 Deductible:</strong> No annual deductible</li>
                  <li>✓ <strong>Low Copays:</strong> $0-$4.50 per prescription</li>
                  <li>✓ <strong>No Coverage Gap:</strong> <Link href="/resources/prescription-drug-coverage" className="text-green-800 underline hover:text-green-600">No donut hole</Link></li>
                  <li>✓ <strong>All Miami Pharmacies:</strong> 850+ locations accepted</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-white p-4 rounded">
              <p className="text-orange-800 font-semibold mb-2">Apply for Extra Help in Miami-Dade:</p>
              <div className="flex gap-3">
                <Link href="/contact" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 text-sm">
                  Get Application Assistance
                </Link>
                <a href="tel:1-800-772-1213" className="bg-white text-orange-600 border-2 border-orange-600 px-4 py-2 rounded hover:bg-orange-50 text-sm">
                  Call Social Security
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Chronic Condition Management */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Medicare Part D Chronic Condition Drug Coverage in Miami-Dade</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">💉 Diabetes Coverage</h3>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• Insulin (all types)</li>
                <li>• Test strips & lancets</li>
                <li>• Glucometers</li>
                <li>• Oral diabetes meds</li>
                <li>• <strong><Link href="/medicare-part-d-formulary-lookup" className="text-red-800 underline hover:text-red-600">Tier 1-2 preferred</Link></strong></li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">❤️ Heart Disease Coverage</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• Statins (cholesterol)</li>
                <li>• Blood pressure meds</li>
                <li>• Blood thinners</li>
                <li>• Beta blockers</li>
                <li>• <strong><Link href="/resources/understanding-costs" className="text-blue-800 underline hover:text-blue-600">Generic options available</Link></strong></li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">🫁 Respiratory Coverage</h3>
              <ul className="space-y-2 text-purple-700 text-sm">
                <li>• Inhalers (COPD/Asthma)</li>
                <li>• Nebulizer medications</li>
                <li>• Respiratory steroids</li>
                <li>• Maintenance drugs</li>
                <li>• <strong><Link href="/medicare-part-d-formulary-lookup" className="text-purple-800 underline hover:text-purple-600">Specialty tier coverage</Link></strong></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-green-50 border-l-4 border-green-400 p-6 rounded">
            <h3 className="font-semibold text-green-800 mb-2">🔍 Check Your Medications</h3>
            <p className="text-green-700 mb-3">
              Use our <Link href="/medicare-part-d-formulary-lookup" className="text-green-900 underline hover:text-green-600">formulary lookup tool</Link> to verify coverage for your chronic condition medications.
              Compare plans based on your specific drug list and find the most cost-effective option for Miami-Dade.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-12" aria-labelledby="cta-heading">
          <div className="text-center">
            <p id="cta-heading" className="text-2xl font-bold mb-4">💊 Get Expert Miami-Dade Medicare Part D Guidance</p>
            <p className="text-green-100 mb-6 max-w-3xl mx-auto">
              Navigate Miami-Dade County's 850+ pharmacy network with expert Medicare Part D assistance.
              Compare plans, check drug coverage, and enroll with bilingual specialists who understand South Florida's diverse community.
              Servicio en español disponible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/medicare-part-d-formulary-lookup"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                🔍 Check Drug Coverage
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📞 Llame Ahora / Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Part D Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Miami-Dade Medicare Part D Resources</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Part D Resources</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• <Link href="/medicare-part-d" className="underline hover:text-green-900">Medicare Part D Overview</Link></li>
                <li>• <Link href="/medicare-part-d-formulary-lookup" className="underline hover:text-green-900">Formulary Lookup Tool</Link></li>
                <li>• <Link href="/resources/prescription-drug-coverage" className="underline hover:text-green-900">Prescription Drug Coverage Guide</Link></li>
                <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-green-900">Part D Enrollment Periods</Link></li>
                <li>• <Link href="/resources/understanding-costs" className="underline hover:text-green-900">Understanding Drug Costs</Link></li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Miami-Dade Specific Services</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• <Link href="/specialists" className="underline hover:text-blue-900">Bilingual Part D Specialists</Link></li>
                <li>• <Link href="/contact" className="underline hover:text-blue-900">Get Enrollment Help</Link></li>
                <li>• <Link href="/medicare-advantage/miami-dade-county" className="underline hover:text-blue-900">MA Plans with Part D (MAPD)</Link></li>
                <li>• <Link href="/resources/medicare-advantage-vs-original" className="underline hover:text-blue-900">Part D vs MA Drug Coverage</Link></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compare Part D Options Across South Florida</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">South Florida Counties:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <Link href="/medicare-part-d-miami-dade-county" className="underline hover:text-green-900">Miami-Dade Part D</Link></li>
                  <li>• <Link href="/medicare-part-d-broward-county" className="underline hover:text-green-900">Broward County Part D</Link></li>
                  <li>• <Link href="/medicare-part-d-palm-beach-county" className="underline hover:text-green-900">Palm Beach Part D</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Coverage Options:</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <Link href="/medicare-advantage/miami-dade-county" className="underline hover:text-blue-900">MA Plans with Drug Coverage</Link></li>
                  <li>• <Link href="/medicare-supplement-miami-dade-county" className="underline hover:text-blue-900">Medigap + Part D</Link></li>
                  <li>• <Link href="/medicare-part-d" className="underline hover:text-blue-900">Standalone Part D Plans</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Planning Resources:</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-purple-900">Enrollment Periods</Link></li>
                  <li>• <Link href="/contact" className="underline hover:text-purple-900">Schedule Consultation</Link></li>
                  <li>• <Link href="/social-security-analysis" className="underline hover:text-purple-900">IRMAA Calculator</Link></li>
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
