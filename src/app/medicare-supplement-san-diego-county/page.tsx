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
      '@id': 'https://elmaginsurance.com/medicare-supplement-san-diego-county',
      url: 'https://elmaginsurance.com/medicare-supplement-san-diego-county',
      name: 'Medicare Supplement Plans San Diego County CA 2025 | Medigap Coverage San Diego, La Jolla, Carlsbad',
      description: 'Compare Medicare Supplement (Medigap) plans in San Diego County, California. Plans F, G, N coverage for San Diego, La Jolla, Carlsbad seniors. Free quotes, expert guidance for 625,000+ beneficiaries.',
      inLanguage: 'en-US',
      breadcrumb: {
        '@id': 'https://elmaginsurance.com/medicare-supplement-san-diego-county#breadcrumb'
      }
    },
    // BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://elmaginsurance.com/medicare-supplement-san-diego-county#breadcrumb',
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
          name: 'San Diego County California',
          item: 'https://elmaginsurance.com/medicare-supplement-san-diego-county'
        }
      ]
    },
    // FinancialProduct Schema for Medicare Supplement Plans
    {
      '@type': 'FinancialProduct',
      '@id': 'https://elmaginsurance.com/medicare-supplement-san-diego-county#product',
      name: 'Medicare Supplement Plans - San Diego County, California',
      description: 'Medicare Supplement (Medigap) insurance plans for San Diego County seniors, including San Diego, La Jolla, Carlsbad, Chula Vista with UC San Diego Health and Sharp HealthCare network access.',
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        url: 'https://elmaginsurance.com'
      },
      category: 'Medicare Supplement Insurance',
      areaServed: {
        '@type': 'Place',
        name: 'San Diego County, California',
        geo: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 32.7157,
            longitude: -117.1611
          },
          geoRadius: '70000'
        },
        containedInPlace: [
          {
            '@type': 'City',
            name: 'San Diego'
          },
          {
            '@type': 'City',
            name: 'La Jolla'
          },
          {
            '@type': 'City',
            name: 'Carlsbad'
          },
          {
            '@type': 'City',
            name: 'Chula Vista'
          }
        ]
      }
    },
    // FAQPage Schema
    {
      '@type': 'FAQPage',
      '@id': 'https://elmaginsurance.com/medicare-supplement-san-diego-county#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: "What's the average cost of Plan G in San Diego County?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a 65-year-old non-smoker, Plan G premiums in San Diego County typically range from $145-$190/month. California has community-rated Medigap premiums, meaning rates don\'t increase with age after purchase. This makes California one of the most predictable states for long-term Medigap costs.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can I use my Medigap plan at UC San Diego Health and Sharp HealthCare?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Medicare Supplement works with any doctor or hospital that accepts Medicare, including UC San Diego Health, Sharp HealthCare, Scripps Health, Kaiser Permanente San Diego, and all other Medicare-accepting providers in San Diego County. You don\'t need network restrictions or referrals.'
          }
        },
        {
          '@type': 'Question',
          name: 'Does Medigap cover me when I travel to Mexico from San Diego?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plans G and N include foreign travel emergency coverage (80% after a $250 deductible) for unexpected medical emergencies in Mexico, including Tijuana and other international destinations. This is ideal for San Diego seniors who frequently cross the border or travel internationally.'
          }
        },
        {
          '@type': 'Question',
          name: 'What\'s the difference between Plan G and Plan N in San Diego County?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plan G offers comprehensive coverage with no copays for doctor visits or emergency room trips. You only pay the Part B deductible ($240/year). Monthly premiums are $145-$190. Plan N has lower monthly premiums ($105-$135) but includes small copays: up to $20 for doctor visits and up to $50 for ER visits (waived if admitted).'
          }
        },
        {
          '@type': 'Question',
          name: 'How does California\'s Birthday Rule work for Medicare Supplement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'California\'s Birthday Rule allows you to change to another Medigap plan with the same or lesser benefits within 60 days of your birthday each year, without medical underwriting. This unique California benefit lets you shop for better rates annually without health questions.'
          }
        },
        {
          '@type': 'Question',
          name: 'I\'m a military retiree at Naval Base San Diego. Should I choose Medigap or Medicare Advantage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many military retirees in San Diego choose Medigap because it works seamlessly with TRICARE for Life (TFL). If you have TFL, you don\'t need Medicare Advantage. Medigap Plan G or N combined with TRICARE for Life provides comprehensive coverage with minimal out-of-pocket costs.'
          }
        }
      ]
    },
    // InsuranceAgency Schema for Service Area
    {
      '@type': 'InsuranceAgency',
      '@id': 'https://elmaginsurance.com/medicare-supplement-san-diego-county#business',
      name: 'El-Mag Insurance - San Diego County Medicare Supplement',
      description: 'Medicare Supplement (Medigap) insurance specialists serving San Diego County, California, including San Diego, La Jolla, Carlsbad, Chula Vista, and all Southern California communities.',
      url: 'https://elmaginsurance.com/medicare-supplement-san-diego-county',
      telephone: '+1-331-343-2584',
      areaServed: {
        '@type': 'Place',
        name: 'San Diego County, California'
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
              description: 'Comprehensive Medicare Supplement coverage with access to UC San Diego Health, Sharp HealthCare, Scripps Health, and all Medicare providers in San Diego County.'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'FinancialProduct',
              name: 'Medicare Supplement Plan N',
              description: 'Cost-effective Medicare Supplement with small copays for San Diego County beneficiaries.'
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
  title: 'Medicare Supplement Plans San Diego County CA 2025 | Medigap Coverage San Diego, La Jolla, Carlsbad',
  description: 'Compare Medicare Supplement (Medigap) plans in San Diego County, California. Plans F, G, N coverage for San Diego, La Jolla, Carlsbad seniors. Free quotes, expert guidance for 625,000+ beneficiaries.',
  keywords: 'Medicare Supplement San Diego County, Medigap plans San Diego CA, La Jolla Medicare Supplement, San Diego Medigap rates, Plan G San Diego, Medicare Supplement Carlsbad, Chula Vista Medigap, California Medicare Supplement, UC San Diego Health Medicare, Sharp HealthCare Medigap',
  openGraph: {
    title: 'Medicare Supplement Plans San Diego County CA | Medigap Coverage',
    description: 'Find the best Medicare Supplement plans in San Diego County. Compare Plan F, G, N options for San Diego, La Jolla, and Carlsbad seniors with access to UC San Diego Health and Sharp HealthCare.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-supplement-san-diego-county',
  },
}

export default function SanDiegoCountyMedicareSupplementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Analytics Tracking */}
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Supplement San Diego County"
        county="San Diego County"
        state="California"
        demographics={{
          maPenetrationRate: 58
        }}
        keyMetrics={{
          total_beneficiaries: 625000,
          available_ma_plans: 72,
          average_premium: 0,
          zero_premium_plans: 38,
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
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medicare Supplement Plans in San Diego County, California
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Compare Medigap Plans F, G, and N for San Diego, La Jolla, Carlsbad & Chula Vista Seniors
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
                className="bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-800 transition-colors text-center text-lg"
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
              🏥 San Diego County Medicare Supplement Market Overview
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why San Diego County Seniors Choose Medicare Supplement</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Provider Freedom Benefits:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Access to <strong>UC San Diego Health</strong> (top-ranked research hospital)</li>
                    <li>✓ Access to <strong>Sharp HealthCare</strong> (5 hospitals, 22,000 physicians)</li>
                    <li>✓ <strong>Scripps Health</strong> system (5 hospitals in San Diego)</li>
                    <li>✓ <strong>Kaiser Permanente San Diego</strong> facilities</li>
                    <li>✓ <strong>No referrals</strong> needed for specialists</li>
                    <li>✓ Coverage across Mexico border for emergencies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">California Unique Benefits:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>625,000+</strong> Medicare beneficiaries (largest CA county)</li>
                    <li>✓ <strong>Community-rated premiums</strong> (no age increases)</li>
                    <li>✓ <strong>California Birthday Rule</strong> (annual plan changes)</li>
                    <li>✓ Predictable long-term costs</li>
                    <li>✓ Military retiree friendly (works with TRICARE)</li>
                    <li>✓ Foreign travel emergency coverage (Mexico)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>San Diego County is California's second-largest Medicare market</strong> with 625,000+ beneficiaries.
                  California's unique <strong>community-rated Medigap pricing</strong> means your premium never increases due to
                  age—only general rate increases affect all policyholders equally. Combined with the <strong>Birthday Rule</strong>
                  that allows annual plan changes, San Diego seniors enjoy exceptional flexibility and predictability with Medicare
                  Supplement insurance.
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
              ⭐ Most Popular Medigap Plans in San Diego County
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
                    ~$145-$190
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
                    💡 Best for: UC San Diego/Sharp frequent users, Mexico travelers, military retirees
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
                    ~$105-$135
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
                    💡 Best for: Healthy seniors, infrequent doctor visits, budget-conscious San Diego residents
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
                    ~$165-$215
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
              <h4 className="font-semibold text-blue-900 mb-3">💡 California Community-Rated Pricing Advantage</h4>
              <p className="text-gray-700">
                Unlike most states, California uses <strong>community rating</strong> for Medicare Supplement plans. This means
                your premium is based on where you live, NOT your age. A 65-year-old and an 85-year-old pay the same rate for
                the same plan. This makes California one of the <strong>most predictable and affordable states</strong> for
                long-term Medigap coverage, especially in San Diego County's competitive market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* California Birthday Rule */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🎂 California Birthday Rule: Unique San Diego Benefit
            </h2>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">What Is the California Birthday Rule?</h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                California is one of only a few states with a <strong>Birthday Rule</strong> for Medicare Supplement plans.
                This unique benefit allows San Diego County seniors to <strong>change Medigap plans every year</strong> without
                medical underwriting during a special 60-day window.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-purple-900 mb-3">How It Works:</h4>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Annual Window:</strong> Within 60 days following your birthday each year</li>
                  <li><strong>2. No Health Questions:</strong> Insurance companies cannot use medical underwriting</li>
                  <li><strong>3. Same or Lesser Benefits:</strong> You can switch to a plan with equal or fewer benefits</li>
                  <li><strong>4. Same Carrier or Different:</strong> Switch within your current company or to a new one</li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-green-900 mb-3">✓ What You CAN Do:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Switch from Plan F to Plan G (lesser benefits)</li>
                    <li>✓ Switch from Plan G to Plan N (lesser benefits)</li>
                    <li>✓ Shop for lower rates on same plan</li>
                    <li>✓ Change carriers for better service</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-semibold text-red-900 mb-3">✗ What You CANNOT Do:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✗ Switch from Plan N to Plan G (more benefits)</li>
                    <li>✗ Switch from Plan G to Plan F (more benefits)</li>
                    <li>✗ Use Birthday Rule to get MORE coverage</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Example:</strong> If your birthday is June 15th, you can change your Medigap plan between June 15 and
                  August 13 each year without health questions. This is perfect for San Diego seniors who want to shop for better
                  rates annually while keeping the same coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medigap vs Medicare Advantage */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🔍 Why Choose Medicare Supplement vs. Medicare Advantage in San Diego County?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">✓ Medicare Supplement (Medigap)</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span><strong>Any doctor/hospital</strong> that accepts Medicare (UC San Diego, Sharp, Scripps, Kaiser)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span><strong>No referrals</strong> needed for specialists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span><strong>Nationwide coverage</strong> (perfect for travel, visiting family)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span><strong>Foreign travel emergency</strong> (Mexico, international trips)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span><strong>Community-rated pricing</strong> (age doesn't increase premium)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span><strong>California Birthday Rule</strong> (annual plan changes)</span>
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
                    <span><strong>County-restricted</strong> (limited coverage outside San Diego)</span>
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

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border-l-4 border-cyan-600">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">🌊 Perfect for San Diego's Active Lifestyle</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cyan-800 mb-2">Mexico Border Crossings:</h4>
                  <p className="text-gray-700">
                    San Diego seniors who frequently visit <strong>Tijuana for dental care, prescriptions, or family visits</strong>
                    benefit from Medigap's foreign travel emergency coverage. Plans G and N cover <strong>80% of emergency care
                    costs in Mexico</strong> after a $250 deductible.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-cyan-800 mb-2">Military Retirees (TRICARE for Life):</h4>
                  <p className="text-gray-700">
                    With <strong>Naval Base San Diego, Camp Pendleton, and MCAS Miramar</strong>, San Diego has a large military
                    retiree population. If you have <strong>TRICARE for Life</strong>, Medigap works seamlessly as secondary
                    insurance. Medicare Advantage can interfere with TFL benefits.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-cyan-800 mb-2">Snowbirds & Travelers:</h4>
                  <p className="text-gray-700">
                    Many San Diego seniors split time with other states or travel frequently. Medigap provides <strong>nationwide
                    coverage</strong> without network restrictions, perfect for visiting family or spending summers elsewhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment & Eligibility */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              📅 San Diego County Medicare Supplement Enrollment & Eligibility
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
                      If you turn 65 on <strong>March 20, 2025</strong>, and enroll in Part B starting March 1, 2025, your
                      Medigap Open Enrollment runs from <strong>March 1 - August 31, 2025</strong>. Apply during this window
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
                      Once your Medigap Open Enrollment ends, insurance companies in California can use <strong>medical
                      underwriting</strong>. This means they may ask about your health history and potentially deny coverage
                      or charge higher premiums based on pre-existing conditions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">California Exceptions:</h4>
                    <p className="text-gray-700 mb-2">
                      California law provides <strong>guaranteed issue rights</strong> in certain situations:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Within 63 days of losing employer coverage</li>
                      <li>Trial right for Medicare Advantage (within first 12 months)</li>
                      <li><strong>California Birthday Rule</strong> (annual 60-day window following birthday)</li>
                      <li>Medicare SELECT plan discontinued in your area</li>
                      <li>Moving out of your plan's service area</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-red-900 mb-4">🚨 Common San Diego County Enrollment Mistakes</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">DON'T:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>❌ Wait until after your 6-month window</li>
                      <li>❌ Assume you can switch from MA to Medigap anytime</li>
                      <li>❌ Forget about the California Birthday Rule</li>
                      <li>❌ Choose MA just for zero premium</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">DO:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Enroll during your 6-month open enrollment</li>
                      <li>✓ Use Birthday Rule annually to shop rates</li>
                      <li>✓ Consider Mexico travel needs</li>
                      <li>✓ Consult with a California Medicare specialist</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Resources */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🏘️ San Diego County Medicare Resources by Community
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">San Diego (City)</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Population:</strong> ~400,000 Medicare beneficiaries (64% of San Diego County)</p>
                  <p><strong>Major Healthcare Facilities:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>UC San Diego Health</strong> - Top-ranked research hospital (Jacobs Medical Center, Hillcrest, La Jolla)</li>
                    <li><strong>Sharp Memorial Hospital</strong> - Level II Trauma Center</li>
                    <li><strong>Sharp Grossmont Hospital</strong> - Cardiovascular excellence</li>
                    <li><strong>Scripps Mercy Hospital</strong> - Downtown emergency care</li>
                    <li><strong>VA San Diego Healthcare System</strong> - Veterans services</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Why Medigap?</strong> With world-class healthcare systems and proximity to Mexico, San Diego city
                    residents benefit from Medigap's nationwide coverage, foreign travel emergency benefits, and direct access
                    to any specialist without referrals.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-900 mb-4">La Jolla</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Population:</strong> ~8,000 Medicare beneficiaries (upscale coastal community)</p>
                  <p><strong>Major Healthcare Facilities:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>UC San Diego Health La Jolla</strong> - Cancer center, specialty care</li>
                    <li><strong>Scripps La Jolla</strong> - Green Hospital, Prebys Cardiovascular Institute</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Why Medigap?</strong> La Jolla seniors value premium healthcare access. Medigap allows seamless
                    access to both UC San Diego Health and Scripps La Jolla without network restrictions, plus coverage for
                    international travel and Mexico visits.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">Carlsbad</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Population:</strong> ~25,000 Medicare beneficiaries (North County coastal)</p>
                  <p><strong>Major Healthcare Facilities:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Tri-City Medical Center</strong> - Emergency and surgical services</li>
                    <li>Proximity to Sharp HealthCare and Scripps systems (15-20 min)</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Why Medigap?</strong> Carlsbad seniors often travel to San Diego proper for specialized care.
                    Medigap eliminates network concerns and provides seamless coverage across all San Diego County facilities
                    plus anywhere in California or the U.S.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-4">Chula Vista</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Population:</strong> ~45,000 Medicare beneficiaries (South Bay, border region)</p>
                  <p><strong>Major Healthcare Facilities:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Sharp Chula Vista Medical Center</strong> - Bariatric surgery excellence</li>
                    <li><strong>Scripps Chula Vista</strong> - Emergency and outpatient care</li>
                    <li>Proximity to Tijuana, Mexico (10 min)</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Why Medigap?</strong> Chula Vista's proximity to Mexico makes <strong>foreign travel emergency
                    coverage</strong> especially valuable. Many seniors cross the border for dental care, prescriptions, or
                    family visits. Medigap Plans G and N cover emergency medical care in Mexico.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h4 className="font-semibold text-blue-900 mb-3">🏥 UC San Diego Health & Sharp HealthCare Network Access</h4>
              <p className="text-gray-700 mb-3">
                With Medicare Supplement, you have <strong>automatic access to UC San Diego Health, Sharp HealthCare, Scripps
                Health, Kaiser Permanente San Diego, and every other Medicare-accepting provider</strong> in San Diego County
                and nationwide. No need to choose between hospital systems—see any doctor, any specialist, any time.
              </p>
              <p className="text-gray-700">
                <strong>Local Medicare Specialist Available:</strong> Our San Diego County team understands the unique healthcare
                landscape of Southern California and can help you navigate plan options based on your preferred providers,
                Mexico travel needs, and military benefits. Call <strong>(331) 343-2584</strong> for personalized guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ❓ Frequently Asked Questions: San Diego County Medicare Supplement
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's the average cost of Plan G in San Diego County?
                </h3>
                <p className="text-gray-700">
                  For a 65-year-old non-smoker, Plan G premiums in San Diego County typically range from <strong>$145-$190/month</strong>.
                  California has <strong>community-rated Medigap premiums</strong>, meaning rates don't increase with age after
                  purchase. This makes California one of the most predictable states for long-term Medigap costs. The exact price
                  depends on your location and carrier, which is why we compare quotes from 15+ carriers to find you the best rate.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I use my Medigap plan at UC San Diego Health and Sharp HealthCare?
                </h3>
                <p className="text-gray-700">
                  Yes! Medicare Supplement works with <strong>any doctor or hospital that accepts Medicare</strong>, including
                  UC San Diego Health, Sharp HealthCare, Scripps Health, Kaiser Permanente San Diego, and all other Medicare-accepting
                  providers in San Diego County. You don't need network restrictions or referrals.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Does Medigap cover me when I travel to Mexico from San Diego?
                </h3>
                <p className="text-gray-700">
                  Plans G and N include <strong>foreign travel emergency coverage</strong> (80% after a $250 deductible) for
                  unexpected medical emergencies in Mexico, including Tijuana and other international destinations. This is ideal
                  for San Diego seniors who frequently cross the border for dental care, prescriptions, or family visits. Note:
                  This is for <em>emergency</em> care only, not routine medical care.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's the difference between Plan G and Plan N in San Diego County?
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Plan G</strong> offers comprehensive coverage with no copays for doctor visits or emergency room trips.
                  You only pay the Part B deductible ($240/year) and then Plan G covers everything else. Monthly premiums are
                  $145-$190.
                </p>
                <p className="text-gray-700">
                  <strong>Plan N</strong> has lower monthly premiums ($105-$135) but includes small copays: up to $20 for doctor
                  visits and up to $50 for ER visits (waived if admitted). Plan N is ideal for healthy seniors who don't go to
                  the doctor frequently.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How does California's Birthday Rule work for Medicare Supplement?
                </h3>
                <p className="text-gray-700">
                  California's <strong>Birthday Rule</strong> allows you to change to another Medigap plan with the same or lesser
                  benefits within <strong>60 days of your birthday each year</strong>, without medical underwriting. This unique
                  California benefit lets you shop for better rates annually without health questions. For example, you can switch
                  from Plan G with one carrier to Plan G with a different carrier for a lower rate, or from Plan G to Plan N.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  I'm a military retiree at Naval Base San Diego. Should I choose Medigap or Medicare Advantage?
                </h3>
                <p className="text-gray-700">
                  Many military retirees in San Diego choose <strong>Medigap because it works seamlessly with TRICARE for Life
                  (TFL)</strong>. If you have TFL, you don't need Medicare Advantage. Medigap Plan G or N combined with TRICARE
                  for Life provides comprehensive coverage with minimal out-of-pocket costs. Medicare Advantage can interfere
                  with TFL benefits and create network restrictions that limit your access to military treatment facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Compare San Diego County Medicare Supplement Plans?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get personalized quotes from 15+ carriers. Free consultation with a California Medicare specialist.
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
                className="bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-800 transition-colors text-center text-lg"
              >
                Call Now: (331) 343-2584
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-gray-50">
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
                    <Link href="/medicare-supplement-orange-county-california" className="text-blue-600 hover:underline">
                      Orange County Medicare Supplement
                    </Link>
                  </li>
                  <li>
                    <Link href="/medicare-supplement-riverside-county-california" className="text-blue-600 hover:underline">
                      Riverside County Medicare Supplement
                    </Link>
                  </li>
                  <li>
                    <Link href="/medicare-supplement-imperial-county-california" className="text-blue-600 hover:underline">
                      Imperial County Medicare Supplement
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-900 mb-4">
                  📘 California Medicare Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/medicare-supplement-california" className="text-blue-600 hover:underline">
                      California Medicare Supplement Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/medicare-advantage/san-diego-county" className="text-blue-600 hover:underline">
                      San Diego County Medicare Advantage Plans
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
                    <Link href="/resources/california-birthday-rule" className="text-blue-600 hover:underline">
                      California Birthday Rule Explained
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
