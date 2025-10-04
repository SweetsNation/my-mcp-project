import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'

// Structured Data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    // WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.elmaginsurance.com/medicare-supplement-hernando-county-florida',
      url: 'https://www.elmaginsurance.com/medicare-supplement-hernando-county-florida',
      name: 'Medicare Supplement Plans Hernando County FL 2025 | Medigap Coverage Spring Hill, Brooksville',
      description: 'Compare Medicare Supplement (Medigap) plans in Hernando County, Florida. Plans F, G, N coverage for Spring Hill, Brooksville, Weeki Wachee seniors. Free quotes, expert guidance.',
      inLanguage: 'en-US',
      breadcrumb: {
        '@id': 'https://www.elmaginsurance.com/medicare-supplement-hernando-county-florida#breadcrumb'
      }
    },
    // BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.elmaginsurance.com/medicare-supplement-hernando-county-florida#breadcrumb',
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
          name: 'Hernando County Florida',
          item: 'https://www.elmaginsurance.com/medicare-supplement-hernando-county-florida'
        }
      ]
    },
    // FinancialProduct Schema for Medicare Supplement Plans
    {
      '@type': 'FinancialProduct',
      '@id': 'https://www.elmaginsurance.com/medicare-supplement-hernando-county-florida#product',
      name: 'Medicare Supplement Plans - Hernando County, Florida',
      description: 'Medicare Supplement (Medigap) insurance plans for Hernando County seniors, including Plans G, N, and F coverage options.',
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        url: 'https://www.elmaginsurance.com'
      },
      category: 'Medicare Supplement Insurance',
      areaServed: {
        '@type': 'Place',
        name: 'Hernando County, Florida',
        geo: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 28.5355,
            longitude: -82.4726
          },
          geoRadius: '40000'
        },
        containedInPlace: [
          {
            '@type': 'City',
            name: 'Spring Hill'
          },
          {
            '@type': 'City',
            name: 'Brooksville'
          },
          {
            '@type': 'City',
            name: 'Weeki Wachee'
          }
        ]
      }
    },
    // FAQPage Schema
    {
      '@type': 'FAQPage',
      '@id': 'https://www.elmaginsurance.com/medicare-supplement-hernando-county-florida#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: "What's the average cost of Plan G in Hernando County?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a 65-year-old non-smoker, Plan G premiums in Hernando County typically range from $140-$180/month. Rates vary by insurance carrier, age, gender, and tobacco use. The exact price depends on your specific situation, which is why we compare quotes from 15+ carriers to find you the best rate.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can I use my Medigap plan when I visit family up north or travel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! This is one of the biggest advantages of Medicare Supplement for Hernando County snowbirds and travelers. Your Medigap plan works with any doctor or hospital in the United States that accepts Medicare. Plans G and N also include foreign travel emergency coverage (80% after a $250 deductible) for trips outside the U.S.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do I need a referral to see a specialist with a Medigap plan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No referrals required! With Medicare Supplement, you can see any specialist in Florida (or anywhere in the U.S.) that accepts Medicare without getting approval from a primary care doctor first. This is a major difference from Medicare Advantage plans, which often require referrals.'
          }
        },
        {
          '@type': 'Question',
          name: "What's the difference between Plan G and Plan N?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plan G offers more comprehensive coverage with no copays for doctor visits or emergency room trips. You only pay the Part B deductible ($240/year) and then Plan G covers everything else. Monthly premiums are higher (~$140-$180). Plan N has lower monthly premiums (~$100-$130) but includes small copays: up to $20 for doctor visits and up to $50 for ER visits (waived if admitted). Plan N is ideal for healthy seniors who don\'t go to the doctor frequently.'
          }
        },
        {
          '@type': 'Question',
          name: "I'm currently on a Medicare Advantage plan. Can I switch to a Medigap plan?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, but timing matters. If you\'re within your first 12 months on a Medicare Advantage plan and this was your first time choosing MA (when you first became eligible for Medicare), you have guaranteed issue rights to buy a Medigap plan. Outside this window, insurance companies can use medical underwriting and may deny coverage based on your health.'
          }
        },
        {
          '@type': 'Question',
          name: 'Does Medicare Supplement cover prescription drugs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, Medigap plans do not include prescription drug coverage. You\'ll need to enroll in a separate Medicare Part D prescription drug plan. We can help you find a Part D plan that covers your medications at the best price in Hernando County.'
          }
        }
      ]
    },
    // LocalBusiness Schema for Service Area
    {
      '@type': 'InsuranceAgency',
      '@id': 'https://www.elmaginsurance.com/medicare-supplement-hernando-county-florida#business',
      name: 'El-Mag Insurance - Hernando County Medicare Supplement',
      description: 'Medicare Supplement (Medigap) insurance specialists serving Hernando County, Florida, including Spring Hill, Brooksville, and Weeki Wachee.',
      url: 'https://www.elmaginsurance.com/medicare-supplement-hernando-county-florida',
      telephone: '+1-331-343-2584',
      areaServed: {
        '@type': 'Place',
        name: 'Hernando County, Florida'
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
              description: 'Comprehensive Medicare Supplement coverage with Part A and B cost-sharing, except Part B deductible.'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'FinancialProduct',
              name: 'Medicare Supplement Plan N',
              description: 'Cost-effective Medicare Supplement with small copays for doctor visits and emergency room.'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'FinancialProduct',
              name: 'Medicare Supplement Plan F',
              description: 'Most comprehensive Medicare Supplement (grandfathered for those eligible before 1/1/2020).'
            }
          }
        ]
      }
    }
  ]
};

export const metadata: Metadata = {
  title: 'Medicare Supplement Plans Hernando County FL 2025 | Medigap Coverage Spring Hill, Brooksville',
  description: 'Compare Medicare Supplement (Medigap) plans in Hernando County, Florida. Plans F, G, N coverage for Spring Hill, Brooksville, Weeki Wachee seniors. Free quotes, expert guidance.',
  keywords: 'Medicare Supplement Hernando County Florida, Medigap plans Spring Hill FL, Brooksville Medicare Supplement, Hernando County Medigap rates, Plan G Hernando County, Medicare Supplement Spring Hill, Weeki Wachee Medigap, Florida Medicare Supplement',
  openGraph: {
    title: 'Medicare Supplement Plans Hernando County FL | Medigap Coverage',
    description: 'Find the best Medicare Supplement plans in Hernando County. Compare Plan F, G, N options for Spring Hill and Brooksville seniors.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-supplement-hernando-county-florida',
  },
}

export default function HernandoCountyMedicareSupplementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Analytics Tracking */}
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Supplement Hernando County Florida"
        county="Hernando County"
        state="Florida"
        demographics={{
          maPenetrationRate: 55
        }}
        keyMetrics={{
          total_beneficiaries: 85000,
          available_ma_plans: 52,
          average_premium: 0,
          zero_premium_plans: 28,
          content_type: 'landing_page',
          page_category: 'medicare_supplement_county'
        }}
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medicare Supplement Plans in Hernando County, Florida
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Compare Medigap Plans F, G, and N for Spring Hill, Brooksville, and Weeki Wachee Seniors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackLandingPageCTA) {
                    (window as any).trackLandingPageCTA(
                      'consultation_request',
                      'hero_section',
                      '/contact'
                    );
                  }
                }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Get Free Medigap Quote
              </Link>
              <a
                href="tel:331-343-2584"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackLandingPageCTA) {
                    (window as any).trackLandingPageCTA(
                      'phone_call',
                      'hero_section',
                      'tel:331-343-2584'
                    );
                  }
                }}
                className="bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-800 transition-colors text-center"
              >
                Call: (331) 343-2584
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Hernando County Medicare Supplement Market Overview
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">85,000+</div>
                <div className="text-gray-700 font-semibold">Medicare Beneficiaries</div>
                <div className="text-sm text-gray-600 mt-2">One of Florida's fastest-growing senior markets</div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">45%</div>
                <div className="text-gray-700 font-semibold">Choose Medigap Plans</div>
                <div className="text-sm text-gray-600 mt-2">Higher than state average of 38%</div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-700 font-semibold">Insurance Carriers</div>
                <div className="text-sm text-gray-600 mt-2">Competitive pricing and plan options</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Hernando County Seniors Choose Medicare Supplement</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">Provider Freedom Benefits:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>See any doctor in Florida that accepts Medicare</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>No referrals needed for specialists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Coverage nationwide when traveling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Access to Tampa Bay area hospitals without networks</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">Financial Protection:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Predictable monthly premiums (no surprises)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Low or no copays for doctor visits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Coverage for Medicare Part A & B deductibles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Protection from high out-of-pocket costs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Medigap Plans */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Most Popular Medigap Plans in Hernando County
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Plan G */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-200">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Plan G</h3>
                  <p className="text-blue-100">Most Comprehensive Coverage</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      ~$140-$180
                      <span className="text-lg text-gray-600 font-normal">/month</span>
                    </div>
                    <div className="text-sm text-gray-600">Age 65, non-smoker</div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-3">What's Covered:</h4>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Part A deductible ($1,632 in 2024)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Part A copays & coinsurance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Part B copays & coinsurance (100%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Part B excess charges (100%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Foreign travel emergency (80%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Part B deductible ($240 - you pay)</span>
                    </li>
                  </ul>

                  <div className="bg-blue-50 p-4 rounded-lg text-sm">
                    <strong className="text-blue-900">Best for:</strong> Hernando County seniors wanting comprehensive coverage with predictable costs
                  </div>
                </div>
              </div>

              {/* Plan N */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-200">
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Plan N</h3>
                  <p className="text-green-100">Budget-Friendly Option</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      ~$100-$130
                      <span className="text-lg text-gray-600 font-normal">/month</span>
                    </div>
                    <div className="text-sm text-gray-600">Age 65, non-smoker</div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-3">What's Covered:</h4>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Part A deductible ($1,632)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Part A copays & coinsurance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Part B coinsurance (100%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Foreign travel emergency (80%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">~</span>
                      <span>Doctor visits: $20 copay</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">~</span>
                      <span>ER visits: $50 copay</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Part B deductible ($240)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Part B excess charges</span>
                    </li>
                  </ul>

                  <div className="bg-green-50 p-4 rounded-lg text-sm">
                    <strong className="text-green-900">Best for:</strong> Healthy seniors seeking lower premiums with small copays
                  </div>
                </div>
              </div>

              {/* Plan F (for those enrolled before 2020) */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-purple-200">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Plan F</h3>
                  <p className="text-purple-100">Grandfathered Plans Only</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      ~$160-$210
                      <span className="text-lg text-gray-600 font-normal">/month</span>
                    </div>
                    <div className="text-sm text-gray-600">Age 65+ (if enrolled before 1/1/2020)</div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-3">What's Covered:</h4>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Part A deductible ($1,632)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Part B deductible ($240)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Part A & B copays (100%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Part B excess charges (100%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Foreign travel emergency (80%)</span>
                    </li>
                  </ul>

                  <div className="bg-yellow-50 p-4 rounded-lg text-sm border border-yellow-200">
                    <strong className="text-yellow-900">⚠️ Note:</strong> Plan F only available if you were eligible for Medicare before January 1, 2020
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">💡 Hernando County Pricing Insight</h4>
              <p className="text-gray-700 mb-3">
                Medicare Supplement rates in Hernando County vary by age, gender, tobacco use, and insurance carrier.
                The rates above are estimates for a 65-year-old non-smoker. Rates increase with age but provide
                guaranteed coverage renewal.
              </p>
              <p className="text-gray-700">
                <strong>Local carriers serving Hernando County:</strong> UnitedHealthcare, Humana, Aetna, Cigna, Mutual of Omaha,
                Blue Cross Blue Shield Florida, and more. We compare all available options to find your best rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Medigap */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Hernando County Seniors Choose Medicare Supplement Over Medicare Advantage
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">✓ Medicare Supplement (Medigap)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-3">✓</span>
                    <div>
                      <strong className="text-gray-900">Any Doctor, Any Hospital:</strong>
                      <p className="text-gray-700 text-sm">See any provider that accepts Medicare nationwide - no networks, no referrals</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-3">✓</span>
                    <div>
                      <strong className="text-gray-900">Predictable Costs:</strong>
                      <p className="text-gray-700 text-sm">Fixed monthly premium, low or no copays for medical services</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-3">✓</span>
                    <div>
                      <strong className="text-gray-900">Guaranteed Renewable:</strong>
                      <p className="text-gray-700 text-sm">Coverage can't be canceled as long as you pay premiums</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-3">✓</span>
                    <div>
                      <strong className="text-gray-900">Travel Coverage:</strong>
                      <p className="text-gray-700 text-sm">Foreign travel emergency coverage (80% after deductible)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-3">✓</span>
                    <div>
                      <strong className="text-gray-900">Tampa Bay Area Access:</strong>
                      <p className="text-gray-700 text-sm">Full access to top Tampa hospitals without network restrictions</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-orange-900 mb-6">~ Medicare Advantage (MA Plans)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-600 text-xl mr-3">~</span>
                    <div>
                      <strong className="text-gray-900">Network Restrictions:</strong>
                      <p className="text-gray-700 text-sm">Must use in-network doctors and hospitals (except emergencies)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 text-xl mr-3">~</span>
                    <div>
                      <strong className="text-gray-900">Referrals Required:</strong>
                      <p className="text-gray-700 text-sm">Need PCP approval to see specialists in most plans</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 text-xl mr-3">~</span>
                    <div>
                      <strong className="text-gray-900">Variable Copays:</strong>
                      <p className="text-gray-700 text-sm">Copays for each service can add up with frequent care</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 text-xl mr-3">~</span>
                    <div>
                      <strong className="text-gray-900">Annual Changes:</strong>
                      <p className="text-gray-700 text-sm">Benefits, networks, and costs can change yearly</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 text-xl mr-3">✓</span>
                    <div>
                      <strong className="text-gray-900">Dental/Vision/Hearing:</strong>
                      <p className="text-gray-700 text-sm">Many plans include extra benefits Medigap doesn't cover</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">🏥 Perfect for Hernando County Snowbirds & Travelers</h3>
              <p className="text-gray-700 mb-4">
                With many Hernando County seniors splitting time between Florida and northern states, Medicare Supplement
                plans offer unbeatable flexibility. Unlike Medicare Advantage plans with local networks, Medigap provides
                full coverage whether you're in Spring Hill, visiting family up north, or traveling internationally.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Seasonal Residents:</h4>
                  <p className="text-sm text-gray-700">
                    See any Medicare doctor in your northern home state without changing plans or worrying about networks
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Frequent Travelers:</h4>
                  <p className="text-sm text-gray-700">
                    Coverage extends nationwide plus foreign travel emergency coverage for international trips
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment & Eligibility */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Medicare Supplement Enrollment in Hernando County
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-green-700 mb-6">✓ Best Time to Enroll: Medigap Open Enrollment</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">6-Month Window</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Starts the month you turn 65 AND are enrolled in Medicare Part B
                    </p>
                    <p className="text-gray-700 text-sm font-semibold">
                      Guaranteed Issue Rights - No health questions, can't be denied
                    </p>
                  </div>

                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold text-gray-900">During this period:</p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Insurance companies cannot deny you coverage</li>
                      <li>• Cannot charge you more due to health conditions</li>
                      <li>• Cannot impose waiting periods for pre-existing conditions</li>
                      <li>• Must offer you any Medigap plan they sell in Florida</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900">
                      <strong>Example:</strong> If you turn 65 in July and enroll in Part B in July, your Medigap
                      Open Enrollment Period runs from July 1 through December 31.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-yellow-700 mb-6">⚠️ Enrolling Outside Open Enrollment</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                    <h4 className="font-semibold text-yellow-900 mb-2">After Your 6-Month Window</h4>
                    <p className="text-gray-700 text-sm">
                      Insurance companies CAN use medical underwriting (health questions)
                    </p>
                  </div>

                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold text-gray-900">Possible outcomes:</p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• May be denied coverage based on health conditions</li>
                      <li>• Could face higher premiums for pre-existing conditions</li>
                      <li>• Might have waiting periods before coverage begins</li>
                      <li>• Limited plan options (not all plans available)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Florida Exceptions:</h4>
                    <p className="text-sm text-gray-700">
                      • Guaranteed issue rights when leaving Medicare Advantage within first 12 months
                      <br/>
                      • Trial right if you joined MA when first eligible for Medicare
                      <br/>
                      • Moving out of your plan's service area
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-900 mb-4">🚨 Common Hernando County Enrollment Mistakes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-3">DON'T:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✗ Wait until after your 6-month window to apply</li>
                    <li>✗ Drop Medicare Advantage without a Medigap plan in place</li>
                    <li>✗ Assume you can easily switch plans later</li>
                    <li>✗ Choose Plan F if you're new to Medicare (not available)</li>
                    <li>✗ Buy based on price alone without comparing coverage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">DO:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Apply during your 6-month Medigap Open Enrollment</li>
                    <li>✓ Compare Plan G and Plan N options from multiple carriers</li>
                    <li>✓ Understand what each plan covers before enrolling</li>
                    <li>✓ Work with a local Hernando County Medicare specialist</li>
                    <li>✓ Keep your Part D prescription drug plan separate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Hernando County Medicare Resources
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Spring Hill</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Population: ~98,000 (35% over 65)</li>
                  <li>• ZIP Codes: 34606, 34607, 34608, 34609</li>
                  <li>• Major Providers: Oak Hill Hospital, Spring Hill Regional Hospital</li>
                  <li>• Medicare Beneficiaries: ~34,000</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-4">Brooksville</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Population: ~48,000 (county seat)</li>
                  <li>• ZIP Codes: 34601, 34602, 34604, 34613</li>
                  <li>• Major Providers: Bayfront Health Brooksville</li>
                  <li>• Medicare Beneficiaries: ~18,000</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-purple-900 mb-4">Weeki Wachee / Masaryktown</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Population: ~25,000</li>
                  <li>• ZIP Codes: 34607, 34614</li>
                  <li>• Growing retirement community</li>
                  <li>• Medicare Beneficiaries: ~10,000</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border-2 border-teal-200 mb-8">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">🏥 Hernando County Healthcare Access</h3>
              <p className="text-gray-700 mb-4">
                Hernando County seniors have access to quality healthcare facilities, but many prefer the flexibility of
                Medicare Supplement plans to ensure they can see any doctor without network restrictions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-teal-800 mb-2">Local Hospitals:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Oak Hill Hospital (Spring Hill)</li>
                    <li>• Spring Hill Regional Hospital</li>
                    <li>• Bayfront Health Brooksville</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800 mb-2">Tampa Bay Area Access:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Tampa General Hospital (45 min)</li>
                    <li>• Moffitt Cancer Center (50 min)</li>
                    <li>• Morton Plant Hospital (40 min)</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-teal-800 mt-4">
                <strong>Why it matters:</strong> With Medicare Supplement, you can access ALL these facilities without
                worrying about network status. Medicare Advantage plans may limit you to specific hospital networks.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📞 Local Medicare Resources</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">SHINE (Serving Health Insurance Needs of Elders):</h4>
                  <p className="text-gray-700">Free Medicare counseling for Florida seniors</p>
                  <p className="text-blue-600">Phone: 1-800-963-5337</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Hernando County Senior Services:</h4>
                  <p className="text-gray-700">Local assistance and resources</p>
                  <p className="text-blue-600">Phone: (352) 754-4036</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Medicare:</h4>
                  <p className="text-gray-700">Official Medicare information</p>
                  <p className="text-blue-600">Phone: 1-800-MEDICARE (1-800-633-4227)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Social Security Administration:</h4>
                  <p className="text-gray-700">Brooksville SSA Office</p>
                  <p className="text-blue-600">Phone: 1-800-772-1213</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Hernando County Medicare Supplement FAQs
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's the average cost of Plan G in Hernando County?
                </h3>
                <p className="text-gray-700">
                  For a 65-year-old non-smoker, Plan G premiums in Hernando County typically range from $140-$180/month.
                  Rates vary by insurance carrier, age, gender, and tobacco use. The exact price depends on your specific
                  situation, which is why we compare quotes from 15+ carriers to find you the best rate.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I use my Medigap plan when I visit family up north or travel?
                </h3>
                <p className="text-gray-700">
                  Yes! This is one of the biggest advantages of Medicare Supplement for Hernando County snowbirds and
                  travelers. Your Medigap plan works with any doctor or hospital in the United States that accepts
                  Medicare. Plans G and N also include foreign travel emergency coverage (80% after a $250 deductible)
                  for trips outside the U.S.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do I need a referral to see a specialist with a Medigap plan?
                </h3>
                <p className="text-gray-700">
                  No referrals required! With Medicare Supplement, you can see any specialist in Florida (or anywhere
                  in the U.S.) that accepts Medicare without getting approval from a primary care doctor first. This
                  is a major difference from Medicare Advantage plans, which often require referrals.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's the difference between Plan G and Plan N?
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Plan G</strong> offers more comprehensive coverage with no copays for doctor visits or emergency
                  room trips. You only pay the Part B deductible ($240/year) and then Plan G covers everything else.
                  Monthly premiums are higher (~$140-$180).
                </p>
                <p className="text-gray-700">
                  <strong>Plan N</strong> has lower monthly premiums (~$100-$130) but includes small copays: up to $20
                  for doctor visits and up to $50 for ER visits (waived if admitted). Plan N is ideal for healthy seniors
                  who don't go to the doctor frequently.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  I'm currently on a Medicare Advantage plan. Can I switch to a Medigap plan?
                </h3>
                <p className="text-gray-700">
                  Yes, but timing matters. If you're within your first 12 months on a Medicare Advantage plan and this
                  was your first time choosing MA (when you first became eligible for Medicare), you have guaranteed
                  issue rights to buy a Medigap plan. Outside this window, insurance companies can use medical underwriting
                  and may deny coverage based on your health. Contact us to discuss your specific situation.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Does Medicare Supplement cover prescription drugs?
                </h3>
                <p className="text-gray-700">
                  No, Medigap plans do not include prescription drug coverage. You'll need to enroll in a separate
                  Medicare Part D prescription drug plan. We can help you find a Part D plan that covers your medications
                  at the best price in Hernando County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Compare Hernando County Medicare Supplement Plans?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get personalized quotes from 15+ carriers. Free consultation with a local Florida Medicare specialist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackLandingPageCTA) {
                    (window as any).trackLandingPageCTA(
                      'consultation_request',
                      'bottom_cta_section',
                      '/contact'
                    );
                  }
                }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center text-lg"
              >
                Get Free Medigap Quote
              </Link>
              <a
                href="tel:331-343-2584"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackLandingPageCTA) {
                    (window as any).trackLandingPageCTA(
                      'phone_call',
                      'bottom_cta_section',
                      'tel:331-343-2584'
                    );
                  }
                }}
                className="bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-800 transition-colors text-center text-lg"
              >
                Call Now: (331) 343-2584
              </a>
            </div>
            <p className="mt-6 text-blue-100 text-sm">
              Serving Spring Hill, Brooksville, Weeki Wachee, and all of Hernando County, Florida
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Florida Medicare Resources
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Nearby Counties</h3>
                <ul className="space-y-2">
                  <li><Link href="/medicare-supplement-pasco-county-florida" className="text-blue-600 hover:underline">Pasco County Medicare Supplement</Link></li>
                  <li><Link href="/medicare-supplement-citrus-county-florida" className="text-blue-600 hover:underline">Citrus County Medicare Supplement</Link></li>
                  <li><Link href="/medicare-supplement-sumter-county-florida" className="text-blue-600 hover:underline">Sumter County Medicare Supplement</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-4">Florida Medicare Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/medicare-supplement-florida" className="text-blue-600 hover:underline">Florida Medicare Supplement Guide</Link></li>
                  <li><Link href="/medicare-advantage/florida" className="text-blue-600 hover:underline">Florida Medicare Advantage Plans</Link></li>
                  <li><Link href="/resources/medigap-vs-medicare-advantage" className="text-blue-600 hover:underline">Medigap vs Medicare Advantage</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">Plan Guides</h3>
                <ul className="space-y-2">
                  <li><Link href="/resources/medicare-supplement-plan-g" className="text-blue-600 hover:underline">Plan G Complete Guide</Link></li>
                  <li><Link href="/resources/medicare-supplement-plan-n" className="text-blue-600 hover:underline">Plan N Complete Guide</Link></li>
                  <li><Link href="/resources/medigap-open-enrollment" className="text-blue-600 hover:underline">Medigap Open Enrollment Period</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
