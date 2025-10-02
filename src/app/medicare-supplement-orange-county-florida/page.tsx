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
      '@id': 'https://elmaginsurance.com/medicare-supplement-orange-county-florida',
      url: 'https://elmaginsurance.com/medicare-supplement-orange-county-florida',
      name: 'Medicare Supplement Plans Orange County FL 2025 | Medigap Coverage Orlando, Winter Park',
      description: 'Compare Medicare Supplement (Medigap) plans in Orange County, Florida. Plans F, G, N coverage for Orlando, Winter Park, Apopka seniors. Free quotes, expert guidance for 265,000+ beneficiaries.',
      inLanguage: 'en-US',
      breadcrumb: {
        '@id': 'https://elmaginsurance.com/medicare-supplement-orange-county-florida#breadcrumb'
      }
    },
    // BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://elmaginsurance.com/medicare-supplement-orange-county-florida#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://elmaginsurance.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Medicare Supplement',
          item: 'https://elmaginsurance.com/medicare-supplement'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Orange County Florida',
          item: 'https://elmaginsurance.com/medicare-supplement-orange-county-florida'
        }
      ]
    },
    // FinancialProduct Schema for Medicare Supplement Plans
    {
      '@type': 'FinancialProduct',
      '@id': 'https://elmaginsurance.com/medicare-supplement-orange-county-florida#product',
      name: 'Medicare Supplement Plans - Orange County, Florida',
      description: 'Medicare Supplement (Medigap) insurance plans for Orange County seniors, including Orlando, Winter Park, and Apopka with AdventHealth and Orlando Health network access.',
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        url: 'https://elmaginsurance.com'
      },
      category: 'Medicare Supplement Insurance',
      areaServed: {
        '@type': 'Place',
        name: 'Orange County, Florida',
        geo: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 28.5383,
            longitude: -81.3792
          },
          geoRadius: '50000'
        },
        containedInPlace: [
          {
            '@type': 'City',
            name: 'Orlando'
          },
          {
            '@type': 'City',
            name: 'Winter Park'
          },
          {
            '@type': 'City',
            name: 'Apopka'
          }
        ]
      }
    },
    // FAQPage Schema
    {
      '@type': 'FAQPage',
      '@id': 'https://elmaginsurance.com/medicare-supplement-orange-county-florida#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: "What's the average cost of Plan G in Orange County, Florida?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a 65-year-old non-smoker, Plan G premiums in Orange County typically range from $135-$175/month. Rates vary by insurance carrier, age, gender, and tobacco use. Florida has some of the most competitive Medigap rates in the nation due to high market penetration.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can I use my Medigap plan at AdventHealth and Orlando Health?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Medicare Supplement works with any doctor or hospital that accepts Medicare, including AdventHealth Orlando, Orlando Health/Orlando Regional Medical Center, Nemours Children\'s Hospital, and all other Medicare-accepting providers in Central Florida. You don\'t need network restrictions or referrals.'
          }
        },
        {
          '@type': 'Question',
          name: 'What\'s the best Medicare Supplement plan for Orlando theme park visitors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plan G is ideal for retirees visiting grandchildren at theme parks or traveling frequently. It provides comprehensive coverage anywhere in the U.S. and includes foreign travel emergency coverage (80% after $250 deductible) for cruises and international travel from Port Canaveral.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do I need a referral to see specialists at Orlando Health or AdventHealth with Medigap?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No referrals required! With Medicare Supplement, you can see any specialist in Orange County or anywhere in Florida that accepts Medicare without getting approval from a primary care doctor first. This includes direct access to specialists at AdventHealth, Orlando Health, and all other Medicare providers.'
          }
        },
        {
          '@type': 'Question',
          name: 'What\'s the difference between Plan G and Plan N in Orange County?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plan G offers comprehensive coverage with no copays for doctor visits or emergency room trips. You only pay the Part B deductible ($240/year). Monthly premiums are $135-$175. Plan N has lower monthly premiums ($95-$125) but includes small copays: up to $20 for doctor visits and up to $50 for ER visits (waived if admitted).'
          }
        },
        {
          '@type': 'Question',
          name: 'I\'m moving to The Villages from Orange County. Can I keep my Medigap plan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Medicare Supplement plans work anywhere in the United States. Your Orange County Medigap plan will continue to provide coverage if you move to The Villages, Ocala, or anywhere else. Unlike Medicare Advantage, Medigap has no network restrictions.'
          }
        }
      ]
    },
    // InsuranceAgency Schema for Service Area
    {
      '@type': 'InsuranceAgency',
      '@id': 'https://elmaginsurance.com/medicare-supplement-orange-county-florida#business',
      name: 'El-Mag Insurance - Orange County Medicare Supplement',
      description: 'Medicare Supplement (Medigap) insurance specialists serving Orange County, Florida, including Orlando, Winter Park, Apopka, and Central Florida communities.',
      url: 'https://elmaginsurance.com/medicare-supplement-orange-county-florida',
      telephone: '+1-331-343-2584',
      areaServed: {
        '@type': 'Place',
        name: 'Orange County, Florida'
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
              description: 'Comprehensive Medicare Supplement coverage with access to AdventHealth, Orlando Health, and all Medicare providers in Central Florida.'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'FinancialProduct',
              name: 'Medicare Supplement Plan N',
              description: 'Cost-effective Medicare Supplement with small copays for Orange County beneficiaries.'
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
  title: 'Medicare Supplement Plans Orange County FL 2025 | Medigap Coverage Orlando, Winter Park',
  description: 'Compare Medicare Supplement (Medigap) plans in Orange County, Florida. Plans F, G, N coverage for Orlando, Winter Park, Apopka seniors. Free quotes, expert guidance for 265,000+ beneficiaries.',
  keywords: 'Medicare Supplement Orange County Florida, Medigap plans Orlando FL, Winter Park Medicare Supplement, Orange County Medigap rates, Plan G Orlando, Medicare Supplement Orlando, Apopka Medigap, Florida Medicare Supplement, AdventHealth Medicare Supplement, Orlando Health Medigap',
  openGraph: {
    title: 'Medicare Supplement Plans Orange County FL | Medigap Coverage',
    description: 'Find the best Medicare Supplement plans in Orange County. Compare Plan F, G, N options for Orlando and Winter Park seniors with access to AdventHealth and Orlando Health.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-supplement-orange-county-florida',
  },
}

export default function OrangeCountyFloridaMedicareSupplementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Analytics Tracking */}
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Supplement Orange County Florida"
        county="Orange County"
        state="Florida"
        demographics={{
          maPenetrationRate: 52
        }}
        keyMetrics={{
          total_beneficiaries: 265000,
          available_ma_plans: 58,
          average_premium: 0,
          zero_premium_plans: 32,
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
              Medicare Supplement Plans in Orange County, Florida
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Compare Medigap Plans F, G, and N for Orlando, Winter Park, and Apopka Seniors
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
                      'hero_section',
                      'tel:331-343-2584'
                    );
                  }
                }}
                className="bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-800 transition-colors text-center text-lg"
              >
                Call Now: (331) 343-2584
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🏥 Orange County Medicare Supplement Market Overview
            </h2>

            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Orange County Seniors Choose Medicare Supplement</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">Provider Freedom Benefits:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Access to <strong>AdventHealth Orlando</strong> (top-ranked hospital)</li>
                    <li>✓ Access to <strong>Orlando Health/ORMC</strong> (Level I Trauma Center)</li>
                    <li>✓ <strong>Nemours Children's Hospital</strong> for grandchildren</li>
                    <li>✓ <strong>No referrals</strong> needed for specialists</li>
                    <li>✓ Coverage nationwide for theme park visitors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">Financial Protection:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>265,000+</strong> Medicare beneficiaries in Orange County</li>
                    <li>✓ <strong>48% choose Medigap</strong> (high Florida penetration)</li>
                    <li>✓ Predictable monthly premiums</li>
                    <li>✓ No prior authorization delays</li>
                    <li>✓ Foreign travel emergency coverage (cruises)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Orange County is home to 265,000+ Medicare beneficiaries</strong>, making it one of Florida's largest
                  Medicare markets. With world-class healthcare systems like <strong>AdventHealth Orlando</strong> and <strong>Orlando
                  Health</strong>, plus the unique needs of theme park visitors and cruise travelers, <strong>Medicare Supplement
                  provides the freedom and flexibility</strong> that many Orange County seniors prefer over network-restricted
                  Medicare Advantage plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Plans Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ⭐ Most Popular Medigap Plans in Orange County
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Plan G */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Plan G</h3>
                  <p className="text-blue-100">Most Comprehensive Coverage</p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    ~$135-$175
                    <span className="text-lg text-gray-600 font-normal">/month</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">What's Covered:</h4>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li>✓ Part A deductible ($1,632 in 2024)</li>
                    <li>✓ Part B copays & coinsurance (100%)</li>
                    <li>✓ Part B excess charges (100%)</li>
                    <li>✓ Foreign travel emergency (80%)</li>
                    <li>✗ Part B deductible ($240 - you pay)</li>
                  </ul>
                  <p className="text-sm text-blue-600 font-semibold mb-4">
                    💡 Best for: Frequent AdventHealth/Orlando Health users, theme park visitors, cruise travelers
                  </p>
                </div>
              </div>

              {/* Plan N */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Plan N</h3>
                  <p className="text-green-100">Budget-Friendly Option</p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    ~$95-$125
                    <span className="text-lg text-gray-600 font-normal">/month</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">What's Covered:</h4>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li>✓ Part A deductible ($1,632 in 2024)</li>
                    <li>✓ Part B coinsurance (100%)</li>
                    <li>✓ Foreign travel emergency (80%)</li>
                    <li>⚠️ Part B deductible ($240 - you pay)</li>
                    <li>⚠️ Doctor visit copay (up to $20)</li>
                    <li>⚠️ ER copay (up to $50, waived if admitted)</li>
                  </ul>
                  <p className="text-sm text-green-600 font-semibold mb-4">
                    💡 Best for: Healthy seniors, infrequent doctor visits, budget-conscious Orlando residents
                  </p>
                </div>
              </div>

              {/* Plan F */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-purple-200">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Plan F</h3>
                  <p className="text-purple-100">Grandfathered Only</p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    ~$155-$200
                    <span className="text-lg text-gray-600 font-normal">/month</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">What's Covered:</h4>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li>✓ Part A deductible ($1,632 in 2024)</li>
                    <li>✓ Part B deductible ($240 in 2024)</li>
                    <li>✓ Part B copays & coinsurance (100%)</li>
                    <li>✓ Part B excess charges (100%)</li>
                    <li>✓ Foreign travel emergency (80%)</li>
                  </ul>
                  <p className="text-sm text-purple-600 font-semibold mb-4">
                    ⚠️ Only available if you were eligible for Medicare before 1/1/2020
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h4 className="font-semibold text-blue-900 mb-3">💡 Orange County Pricing Insight</h4>
              <p className="text-gray-700">
                Florida has some of the <strong>most competitive Medicare Supplement rates</strong> in the nation due to high
                market penetration (48% Medigap vs. 52% Medicare Advantage). With <strong>265,000+ beneficiaries</strong> in
                Orange County, carriers compete aggressively for market share. We compare quotes from <strong>15+ carriers</strong>
                including UnitedHealthcare, Humana, Aetna, Mutual of Omaha, and Cigna to find you the best rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medigap vs Medicare Advantage */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🔍 Why Choose Medicare Supplement vs. Medicare Advantage in Orange County?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">✓ Medicare Supplement (Medigap)</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span><strong>Any doctor/hospital</strong> that accepts Medicare (AdventHealth, Orlando Health, Mayo Clinic)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span><strong>No referrals</strong> needed for specialists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span><strong>Nationwide coverage</strong> (perfect for theme park visitors, grandchildren visits)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span><strong>Foreign travel emergency</strong> (cruises from Port Canaveral, international trips)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span><strong>Predictable costs</strong> (fixed monthly premium)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span><strong>No prior authorization</strong> delays</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-orange-900 mb-6">~ Medicare Advantage (MA Plans)</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">✗</span>
                    <span><strong>Network restrictions</strong> (must use plan's network)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">✗</span>
                    <span><strong>Referrals required</strong> for specialists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">✗</span>
                    <span><strong>County-restricted</strong> (limited coverage outside Orange County)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">✗</span>
                    <span><strong>No foreign travel</strong> emergency coverage (except emergencies)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">✗</span>
                    <span><strong>Unpredictable costs</strong> (copays, coinsurance, out-of-pocket max)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">✗</span>
                    <span><strong>Prior authorization</strong> required for many services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">+</span>
                    <span><strong>Extra benefits</strong> (dental, vision, gym) but with trade-offs</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">🏥 Perfect for Orange County Theme Park & Travel Lifestyle</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Frequent Visitors & Grandchildren:</h4>
                  <p className="text-gray-700">
                    If your grandchildren visit <strong>Disney World, Universal Studios, or SeaWorld</strong>, Medigap provides
                    coverage anywhere in the U.S. No need to worry about network restrictions when you travel to visit family
                    or when family visits you in Orlando.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Cruise Travelers from Port Canaveral:</h4>
                  <p className="text-gray-700">
                    Plans G and N include <strong>foreign travel emergency coverage</strong> (80% after $250 deductible) for
                    cruises departing from Port Canaveral or international trips. Medicare Advantage plans typically do NOT
                    cover medical emergencies outside the U.S. except for true emergencies.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Snowbirds & Seasonal Residents:</h4>
                  <p className="text-gray-700">
                    If you split time between Orlando and another state, Medigap works anywhere in the U.S. Medicare Advantage
                    plans are county-specific and may not provide adequate coverage when you're away from Orange County.
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              📅 Orange County Medicare Supplement Enrollment & Eligibility
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-green-700 mb-6">✓ Best Time to Enroll: Medigap Open Enrollment</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">6-Month Window</h4>
                    <p className="text-gray-700">
                      Your <strong>Medigap Open Enrollment Period</strong> starts the month you turn 65 AND are enrolled in
                      Medicare Part B. During this 6-month window, insurance companies <strong>cannot deny you coverage or
                      charge higher rates</strong> based on pre-existing conditions.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-800 font-semibold mb-2">Example:</p>
                    <p className="text-gray-700">
                      If you turn 65 on <strong>June 15, 2025</strong>, and enroll in Part B starting June 1, 2025, your
                      Medigap Open Enrollment runs from <strong>June 1 - November 30, 2025</strong>. Apply during this window
                      for guaranteed acceptance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-600">
                <h3 className="text-2xl font-bold text-yellow-700 mb-6">⚠️ Enrolling Outside Open Enrollment</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">After Your 6-Month Window</h4>
                    <p className="text-gray-700">
                      Once your Medigap Open Enrollment ends, insurance companies in Florida can use <strong>medical
                      underwriting</strong>. This means they may:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>Ask about your health history</li>
                      <li>Charge higher premiums based on health conditions</li>
                      <li>Deny coverage altogether</li>
                      <li>Impose waiting periods for pre-existing conditions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">Florida Exceptions:</h4>
                    <p className="text-gray-700">
                      Florida law provides <strong>guaranteed issue rights</strong> in certain situations:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>Within 63 days of losing employer coverage</li>
                      <li>Trial right for Medicare Advantage (within first 12 months of MA enrollment if it was your first MA plan)</li>
                      <li>Medicare SELECT plan discontinued in your area</li>
                      <li>Moving out of your plan's service area</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-red-900 mb-4">🚨 Common Orange County Enrollment Mistakes</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">DON'T:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>❌ Wait until after your 6-month window</li>
                      <li>❌ Assume you can switch from MA to Medigap anytime</li>
                      <li>❌ Delay because you're "healthy now"</li>
                      <li>❌ Enroll in MA just for gym membership</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">DO:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Enroll during your 6-month open enrollment</li>
                      <li>✓ Compare quotes from 15+ carriers</li>
                      <li>✓ Consider your travel and lifestyle needs</li>
                      <li>✓ Consult with a Florida Medicare specialist</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🏘️ Orange County Medicare Resources by Community
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Orlando</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Population:</strong> ~180,000 Medicare beneficiaries (68% of Orange County)</p>
                  <p><strong>Major Healthcare Facilities:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>AdventHealth Orlando</strong> - Florida's largest hospital, top-ranked in multiple specialties</li>
                    <li><strong>Orlando Health/Orlando Regional Medical Center</strong> - Level I Trauma Center</li>
                    <li><strong>Nemours Children's Hospital</strong> - Pediatric care for grandchildren</li>
                    <li><strong>VA Medical Center Orlando</strong> - Veterans healthcare</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Why Medigap?</strong> With world-class healthcare systems and frequent out-of-area visitors,
                    Orlando seniors benefit from Medigap's nationwide coverage and direct access to specialists without
                    referral delays.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">Winter Park</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Population:</strong> ~8,000 Medicare beneficiaries (upscale community)</p>
                  <p><strong>Major Healthcare Facilities:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>AdventHealth Winter Park</strong> - Boutique hospital with personalized care</li>
                    <li><strong>Winter Park Neurology</strong> - Specialist practices</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Why Medigap?</strong> Winter Park seniors value choice and quality. Medigap allows access to
                    top specialists throughout Central Florida without network restrictions, fitting the community's
                    preference for premium healthcare options.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-4">Apopka</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Population:</strong> ~12,000 Medicare beneficiaries (growing community)</p>
                  <p><strong>Major Healthcare Facilities:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>AdventHealth Apopka</strong> - Emergency and outpatient services</li>
                    <li>Proximity to Orlando Health and AdventHealth Orlando (20 min)</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Why Medigap?</strong> Apopka seniors often need to travel to Orlando for specialized care.
                    Medigap eliminates network concerns and provides seamless coverage across all Orange County facilities
                    plus anywhere in Florida or the U.S.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h4 className="font-semibold text-blue-900 mb-3">🏥 AdventHealth & Orlando Health Network Access</h4>
              <p className="text-gray-700 mb-3">
                With Medicare Supplement, you have <strong>automatic access to both AdventHealth and Orlando Health networks</strong>,
                plus every other Medicare-accepting provider in Orange County and nationwide. No need to choose between hospital
                systems—see any doctor, any specialist, any time.
              </p>
              <p className="text-gray-700">
                <strong>Local Medicare Specialist Available:</strong> Our Orange County team understands the unique healthcare
                landscape of Central Florida and can help you navigate plan options based on your preferred providers and lifestyle.
                Call <strong>(331) 343-2584</strong> for personalized guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ❓ Frequently Asked Questions: Orange County Medicare Supplement
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's the average cost of Plan G in Orange County, Florida?
                </h3>
                <p className="text-gray-700">
                  For a 65-year-old non-smoker, Plan G premiums in Orange County typically range from <strong>$135-$175/month</strong>.
                  Rates vary by insurance carrier, age, gender, and tobacco use. Florida has some of the most competitive Medigap
                  rates in the nation due to high market penetration. The exact price depends on your specific situation, which
                  is why we compare quotes from 15+ carriers to find you the best rate.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I use my Medigap plan at AdventHealth and Orlando Health?
                </h3>
                <p className="text-gray-700">
                  Yes! Medicare Supplement works with <strong>any doctor or hospital that accepts Medicare</strong>, including
                  AdventHealth Orlando, Orlando Health/Orlando Regional Medical Center, Nemours Children's Hospital, and all
                  other Medicare-accepting providers in Central Florida. You don't need network restrictions or referrals.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's the best Medicare Supplement plan for Orlando theme park visitors?
                </h3>
                <p className="text-gray-700">
                  <strong>Plan G is ideal</strong> for retirees visiting grandchildren at theme parks or traveling frequently.
                  It provides comprehensive coverage anywhere in the U.S. and includes <strong>foreign travel emergency coverage</strong>
                  (80% after a $250 deductible) for cruises and international travel from Port Canaveral. Medicare Advantage
                  plans typically restrict coverage to Orange County.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do I need a referral to see specialists at Orlando Health or AdventHealth with Medigap?
                </h3>
                <p className="text-gray-700">
                  No referrals required! With Medicare Supplement, you can see <strong>any specialist in Orange County or anywhere
                  in Florida</strong> that accepts Medicare without getting approval from a primary care doctor first. This includes
                  direct access to specialists at AdventHealth, Orlando Health, and all other Medicare providers.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's the difference between Plan G and Plan N in Orange County?
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Plan G</strong> offers more comprehensive coverage with no copays for doctor visits or emergency
                  room trips. You only pay the Part B deductible ($240/year) and then Plan G covers everything else.
                  Monthly premiums are higher (~$135-$175).
                </p>
                <p className="text-gray-700">
                  <strong>Plan N</strong> has lower monthly premiums (~$95-$125) but includes small copays: up to $20
                  for doctor visits and up to $50 for ER visits (waived if admitted). Plan N is ideal for healthy seniors
                  who don't go to the doctor frequently.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  I'm moving to The Villages from Orange County. Can I keep my Medigap plan?
                </h3>
                <p className="text-gray-700">
                  Yes! Medicare Supplement plans work <strong>anywhere in the United States</strong>. Your Orange County
                  Medigap plan will continue to provide coverage if you move to The Villages, Ocala, or anywhere else.
                  Unlike Medicare Advantage, Medigap has no network restrictions. You may want to shop for new rates in
                  your new location, but your current plan will continue to work.
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
              Ready to Compare Orange County Medicare Supplement Plans?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get personalized quotes from 15+ carriers. Free consultation with a Central Florida Medicare specialist.
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
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              📚 Related Medicare Supplement Resources
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  📍 Nearby Counties
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/medicare-supplement-osceola-county-florida" className="text-blue-600 hover:underline">
                      Osceola County Medicare Supplement
                    </Link>
                  </li>
                  <li>
                    <Link href="/medicare-supplement-seminole-county-florida" className="text-blue-600 hover:underline">
                      Seminole County Medicare Supplement
                    </Link>
                  </li>
                  <li>
                    <Link href="/medicare-supplement-lake-county-florida" className="text-blue-600 hover:underline">
                      Lake County Medicare Supplement
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-900 mb-4">
                  📘 Florida Medicare Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/medicare-supplement-florida" className="text-blue-600 hover:underline">
                      Florida Medicare Supplement Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/medicare-advantage/orange-county-florida" className="text-blue-600 hover:underline">
                      Orange County Medicare Advantage Plans
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/medigap-vs-medicare-advantage" className="text-blue-600 hover:underline">
                      Medigap vs Medicare Advantage
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-900 mb-4">
                  📗 Plan Guides
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/resources/medicare-supplement-plan-g" className="text-blue-600 hover:underline">
                      Plan G Complete Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/medicare-supplement-plan-n" className="text-blue-600 hover:underline">
                      Plan N Complete Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/medigap-open-enrollment" className="text-blue-600 hover:underline">
                      Medigap Open Enrollment Period
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
