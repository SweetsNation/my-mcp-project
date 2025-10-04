import type { Metadata } from 'next';
import GeographicGrouping from '@/components/GeographicGrouping';
import ToolLinking from '@/components/ToolLinking';
import ResourceLinking from '@/components/ResourceLinking';
import DallasCountyMedigapAnalytics from '@/components/DallasCountyMedigapAnalytics';

export const metadata: Metadata = {
  title: 'Dallas County Texas Medicare Supplement Insurance | Medigap Plans 2025 | El-Mag Insurance',
  description: 'Expert Medicare Supplement (Medigap) guidance for Dallas County, Texas. Compare plans, save on premiums, and get personalized help navigating DFW healthcare networks. Serving 2.6M+ residents with 300K+ Medicare beneficiaries across Dallas County.',
  keywords: 'Dallas Medicare Supplement, Dallas County Medigap, Medicare Supplement Dallas Texas, Medigap Dallas County, Medicare Supplement insurance Texas, Dallas Medicare plans, DFW Medicare coverage, Medicare Supplement Plan G Dallas, Dallas County Medicare help',
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-supplement-dallas-county-texas',
  },
};

export default function DallasCountyMedicareSupplementPage() {
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.elmaginsurance.com/medicare-supplement-dallas-county-texas',
        url: 'https://www.elmaginsurance.com/medicare-supplement-dallas-county-texas',
        name: 'Dallas County Texas Medicare Supplement Insurance | Medigap Plans 2025',
        description: 'Expert Medicare Supplement (Medigap) guidance for Dallas County, Texas. Compare plans, save on premiums, and get personalized help navigating DFW healthcare networks.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': 'https://www.elmaginsurance.com/#website'
        },
        breadcrumb: {
          '@id': 'https://www.elmaginsurance.com/medicare-supplement-dallas-county-texas#breadcrumb'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.elmaginsurance.com/medicare-supplement-dallas-county-texas#breadcrumb',
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
            name: 'Dallas County, Texas',
            item: 'https://www.elmaginsurance.com/medicare-supplement-dallas-county-texas'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://www.elmaginsurance.com/medicare-supplement-dallas-county-texas#service',
        name: 'Dallas County Texas Medicare Supplement Insurance',
        description: 'Medicare Supplement (Medigap) insurance services for Dallas County residents with affordable Texas pricing and comprehensive DFW healthcare network access.',
        provider: {
          '@type': 'Organization',
          name: 'El-Mag Insurance',
          url: 'https://www.elmaginsurance.com'
        },
        areaServed: {
          '@type': 'County',
          name: 'Dallas County, Texas',
          containsPlace: [
            {
              '@type': 'City',
              name: 'Dallas'
            },
            {
              '@type': 'City',
              name: 'Plano'
            },
            {
              '@type': 'City',
              name: 'Richardson'
            },
            {
              '@type': 'City',
              name: 'Irving'
            },
            {
              '@type': 'City',
              name: 'Garland'
            },
            {
              '@type': 'City',
              name: 'Mesquite'
            },
            {
              '@type': 'City',
              name: 'Carrollton'
            },
            {
              '@type': 'City',
              name: 'Grand Prairie'
            }
          ]
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Dallas County Medicare Supplement Plans',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Medicare Supplement Plan G',
                description: 'Most comprehensive Dallas County Medigap plan with predictable costs and access to UT Southwestern, Baylor Scott & White, and Methodist hospitals'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Medicare Supplement Plan N',
                description: 'Budget-friendly Dallas County option with lower premiums and modest copayments for DFW healthcare'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'High-Deductible Plan G',
                description: 'Ultra-affordable Dallas County Medigap with $50-70/month premiums and higher deductible'
              }
            }
          ]
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.elmaginsurance.com/medicare-supplement-dallas-county-texas#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does Medicare Supplement cost in Dallas County?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Medicare Supplement premiums in Dallas County, Texas are very competitive. Plan G typically ranges from $120-$200/month, Plan N from $90-$150/month, and High-Deductible Plan G from $50-$70/month. Texas has some of the nation\'s most affordable Medigap rates, making Dallas County an excellent market for comprehensive Medicare Supplement coverage. Premiums vary by carrier, age, tobacco use, and zip code within Dallas County.'
            }
          },
          {
            '@type': 'Question',
            name: 'Which hospitals accept Medicare Supplement in Dallas?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Medicare Supplement plans work at all Medicare-participating hospitals in Dallas County, including UT Southwestern Medical Center (ranked #1 in DFW for multiple specialties), Baylor University Medical Center, Medical City Dallas, Methodist Dallas Medical Center, Texas Health Presbyterian Dallas, Parkland Health, Children\'s Medical Center Dallas, and all other facilities accepting Original Medicare. Medigap has no network restrictions, giving you unlimited access to DFW\'s world-class healthcare.'
            }
          },
          {
            '@type': 'Question',
            name: 'Why is Medicare Supplement penetration low in Dallas County?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Only 20% of Dallas County\'s 300,000+ Medicare beneficiaries have Medigap coverage, leaving approximately 240,000 without comprehensive gap protection. Contributing factors include heavy Medicare Advantage marketing, lack of awareness about Texas\' affordable Medigap rates, confusion between MA and Medigap, and the region\'s robust MA provider networks. However, Medicare Supplement often provides superior long-term value with predictable costs, no network restrictions, and guaranteed renewability.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I use my Dallas Medicare Supplement plan in other states?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Medicare Supplement plans purchased in Dallas County work anywhere in the United States that accepts Original Medicare. There are no network restrictions, so you can see any doctor or visit any hospital nationwide that accepts Medicare patients. This makes Dallas County Medigap plans ideal for snowbirds, travelers, and those with family in other states. Most plans also include foreign travel emergency coverage (up to $50,000 lifetime after a $250 deductible).'
            }
          },
          {
            '@type': 'Question',
            name: 'When should I enroll in Medicare Supplement in Dallas?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The best time to enroll in Medicare Supplement in Dallas County is during your 6-month Medigap Open Enrollment Period, which begins the month you turn 65 and are enrolled in Part B. During this guaranteed issue period, insurance companies cannot deny you coverage or charge higher premiums based on health conditions. You can also enroll year-round in Dallas, but outside this period you may face medical underwriting. Texas offers some of the nation\'s most competitive Medigap rates, making enrollment particularly attractive for Dallas County residents.'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <DallasCountyMedigapAnalytics />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🤠</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dallas County Texas Medicare Supplement Insurance | Medigap Plans 2025</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Navigate Dallas County's world-class healthcare landscape with expert Medicare Supplement guidance.
              Serving 300,000+ Medicare beneficiaries across Dallas, Plano, Richardson, Irving, and surrounding
              communities with personalized Medigap solutions and Texas-friendly pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Dallas County Market Overview */}
      <section id="market-overview" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dallas County Texas Medicare Supplement Market Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Dallas County is North Texas's largest Medicare market with over 300,000 Medicare beneficiaries,
                yet only 19.5% have Medicare Supplement coverage—leaving approximately 240,000 residents without
                comprehensive gap coverage. This represents a significant opportunity for beneficiaries to protect
                themselves from out-of-pocket healthcare costs while enjoying access to world-class DFW medical facilities.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">300K+</div>
                  <div className="text-sm text-gray-600">Medicare Beneficiaries</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">19.5%</div>
                  <div className="text-sm text-gray-600">Medigap Penetration Rate</div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">240K+</div>
                  <div className="text-sm text-gray-600">Underserved Beneficiaries</div>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Medicare Plans Available</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Dallas County Medicare Supplement Advantages:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    <a href="/medicare-supplement" className="text-blue-600 hover:underline">Texas Medicare Supplement</a>: Lower premiums than most states
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Access to UT Southwestern, Baylor University Medical Center, Medical City, Texas Health without network restrictions
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Nationwide coverage for travel and snowbird residents
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Bilingual support for Dallas's diverse Hispanic community (41.4%)
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    No prior authorization or referrals needed for specialists
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dallas County Medicare Supplement Healthcare Network Highlights</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                    🏥
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">World-Class DFW Medicare Supplement Medical Centers</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Access UT Southwestern Medical Center (#1 in DFW for 9 years), Baylor University Medical
                      Center (#2 in DFW), Medical City Healthcare, Texas Health Presbyterian, Parkland Memorial
                      Hospital, and Children's Medical Center without network restrictions. Medicare Supplement
                      gives you freedom to choose any doctor.
                    </p>
                    <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Learn About Medigap Network Freedom →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
                    🗣️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Bilingual Dallas Medicare Supplement Support</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Spanish and English-speaking agents available. Culturally competent guidance for
                      Dallas County's diverse communities—41.4% Hispanic population.
                    </p>
                    <div className="flex flex-col gap-1">
                      <a href="/medicare-supplement-hispanic-latino-community" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Recursos en Español →
                      </a>
                      <a href="/contact" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Hable con un Experto →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl">
                    💰
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Texas Medicare Supplement Cost Advantage</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Texas Medicare Supplement premiums average significantly less than high-cost states
                      like New York or California. Get comprehensive nationwide coverage for a fraction
                      of the cost while living in Dallas County.
                    </p>
                    <div className="flex flex-col gap-1">
                      <a href="/medicare-cost-calculator" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        Calculate Your Savings →
                      </a>
                      <a href="/regions/southwest" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        Compare TX vs Other States →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texas Medigap Opportunity */}
      <section id="medigap-opportunity" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Why 80% of Dallas County Beneficiaries Miss Medicare Supplement</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Despite having access to world-class DFW healthcare, 80% of Dallas County Medicare
              beneficiaries lack comprehensive gap coverage, leaving them vulnerable to unexpected
              medical costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Low Texas Medigap Penetration in Dallas County</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">Only 19.5% enrolled:</strong> Texas has one of
                  the lowest Medigap rates in the nation (vs 20.5% national average)
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">240K+ gap:</strong> Over 240,000 Dallas County
                  beneficiaries without comprehensive coverage
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Massive opportunity for cost protection
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Why Choose Medigap? →
                </a>
                <a href="/medicare-comparison-tool" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Compare Your Options →
                </a>
                <a href="/regions/southwest" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Low Penetration Markets →
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">💵</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Original Medicare Gaps Cost Dallas Residents Thousands</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">20% coinsurance:</strong> Original Medicare only
                  covers 80% of Part B services
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">No out-of-pocket max:</strong> Unlimited exposure
                  to hospital and specialist costs
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Average annual out-of-pocket: $5,460
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a href="/medicare-cost-calculator" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Calculate Your Risk →
                </a>
                <a href="/medicare-supplement-plan-g" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  See Plan G Coverage →
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">DFW's Premium Healthcare Requires Medicare Supplement Protection</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">World-class facilities:</strong> UT Southwestern,
                  Baylor, Medical City among nation's top-ranked hospitals
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">Specialist access:</strong> 20% coinsurance on
                  specialist visits adds up fast
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Protect yourself from DFW's premium healthcare costs
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Get Free Consultation →
                </a>
                <a href="/medicare-plan-finder" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Find Your Plan →
                </a>
              </div>
            </div>
          </div>

          {/* Spotlight: Texas Advantage */}
          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-xl border-2 border-yellow-200">
            <div className="flex items-start space-x-4">
              <div className="text-5xl">⭐</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Texas Medicare Supplement: Big Coverage, Small Premiums</h3>
                <p className="text-gray-700 mb-4">
                  Texas offers some of the most competitive Medicare Supplement premiums in the nation while
                  providing access to world-class healthcare facilities. This unique combination means:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-gray-900">Lower Premiums Than Most States:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Average Texas Medigap Plan G premium: $120-150/month vs. $300+ in New York.
                      Same nationwide coverage, better value.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-gray-900">Top-Ranked DFW Healthcare:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Access UT Southwestern (#1 in DFW), Baylor University Medical Center (#2),
                      and 12+ nationally-ranked specialties—all without network restrictions.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/medicare-supplement" className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors text-center">
                    Learn More About Texas Medigap Advantage
                  </a>
                  <a href="/medicare-cost-calculator" className="inline-block bg-white text-blue-600 border-2 border-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors text-center">
                    Calculate TX Savings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Grouping */}
      <GeographicGrouping
        serviceType="medicare-supplement"
        currentRegion="texas"
        showMarketData={true}
        layout="hierarchical"
        maxItems={20}
      />

      {/* Popular Dallas County Medigap Plans */}
      <section id="popular-plans" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">💎 Most Popular Medicare Supplement Plans in Dallas County</h2>
            <p className="text-lg text-gray-600">
              10 Medigap plan types available in Dallas County—here are the top choices for comprehensive coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
              <div className="text-3xl mb-3">🥇</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Medicare Supplement Plan G</h3>
              <div className="text-sm text-gray-600 mb-4">Most Popular Choice (54% of Texas enrollees)</div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Covers all Medicare gaps except Part B deductible ($257)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">No copays for doctors or hospitals</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Foreign travel emergency coverage</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Best value for comprehensive coverage</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <a href="/medicare-supplement-plan-g" className="block text-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                  Compare Plan G Rates
                </a>
                <a href="/medicare-comparison-tool" className="block text-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Compare All Dallas Plans →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-200">
              <div className="text-3xl mb-3">🥈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Medicare Supplement Plan N</h3>
              <div className="text-sm text-gray-600 mb-4">Budget-Friendly Option</div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-sm">Lower premiums than Plan G</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-sm">Small copays: $20 office, $50 ER</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-sm">Part B excess charges apply</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-sm">Good for healthy, budget-conscious seniors</span>
                </div>
              </div>
              <a href="/medicare-supplement" className="block text-center bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                Explore Plan N Details
              </a>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl border-2 border-indigo-200">
              <div className="text-3xl mb-3">🥉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Medicare Supplement High-Deductible Plan G</h3>
              <div className="text-sm text-gray-600 mb-4">Lowest Premium Option</div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Very low monthly premium ($30-50/month)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">$2,800 annual deductible (2025)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Full Plan G coverage after deductible</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Best for minimal healthcare users</span>
                </div>
              </div>
              <a href="/medicare-supplement" className="block text-center bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
                See HD Plan G Rates
              </a>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <p className="text-gray-700 mb-4">
              <strong>Not sure which plan is right for you?</strong> Our Dallas Medicare experts
              will compare all 10 Medigap plans available in Dallas County and recommend the best fit
              for your healthcare needs and budget.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
              Get Free Plan Comparison
            </a>
          </div>
        </div>
      </section>

      {/* Regional Tools */}
      <ToolLinking
        currentTool=""
        userContext="medicare-supplement"
        showRelatedTools={true}
        maxTools={6}
        showFeatures={true}
        layout="grid"
      />

      {/* Dallas County Subregion Coverage */}
      <section id="subregion-coverage" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🗺️ Medicare Supplement Coverage Across Dallas County Texas</h2>
            <p className="text-lg text-gray-600">
              Expert Medigap guidance in all Dallas County communities—from Downtown Dallas to Plano,
              Richardson to Irving, and everywhere in between
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Dallas Medicare Supplement Coverage</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Downtown Dallas</li>
                <li>• Uptown</li>
                <li>• Oak Cliff</li>
                <li>• Lake Highlands</li>
                <li>• Far North Dallas</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Get Dallas Support →
                </a>
                <a href="/medicare-plan-finder" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Find Your Plan →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Plano Medicare Supplement Plans</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• West Plano</li>
                <li>• East Plano</li>
                <li>• Legacy West</li>
                <li>• Willow Bend</li>
                <li>• Parker Road</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Plano Medicare Help →
                </a>
                <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Plano Medigap Plans →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Richardson Medigap Coverage</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Central Richardson</li>
                <li>• Canyon Creek</li>
                <li>• Buckingham</li>
                <li>• Breckinridge Point</li>
                <li>• Cottonwood Creek</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Richardson Specialists →
                </a>
                <a href="/medicare-comparison-tool" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Compare Richardson Plans →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Irving Medicare Supplement Options</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Las Colinas</li>
                <li>• Valley Ranch</li>
                <li>• North Irving</li>
                <li>• Central Irving</li>
                <li>• South Irving</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Irving Support →
                </a>
                <a href="/medicare-plan-finder" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Irving Plans →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Garland Medicare Supplement Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Downtown Garland</li>
                <li>• North Garland</li>
                <li>• South Garland</li>
                <li>• Firewheel</li>
                <li>• Lake Hubbard</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Garland Medicare Experts →
                </a>
                <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Garland Medigap Options →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mesquite Medigap Plans</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Central Mesquite</li>
                <li>• North Mesquite</li>
                <li>• South Mesquite</li>
                <li>• Town East</li>
                <li>• Galloway</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Mesquite Medicare Help →
                </a>
                <a href="/medicare-cost-calculator" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Calculate Mesquite Savings →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Carrollton Medicare Supplement Coverage</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Old Carrollton</li>
                <li>• Furneaux Creek</li>
                <li>• Hebron</li>
                <li>• Indian Creek</li>
                <li>• Valwood</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Carrollton Specialists →
                </a>
                <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Carrollton Medigap Options →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Grand Prairie Medicare Supplement Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• North Grand Prairie</li>
                <li>• South Grand Prairie</li>
                <li>• Westchester</li>
                <li>• Dalworth</li>
                <li>• Great Southwest</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Grand Prairie Support →
                </a>
                <a href="/medicare-supplement-hispanic-latino-community" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Recursos en Espa��ol →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Resources */}
      <ResourceLinking
        currentResource=""
        currentCategory=""
        userContext="medicare-supplement"
        showTools={true}
        maxResources={6}
        maxTools={4}
      />

      {/* Why Choose El-Mag for Dallas County */}
      <section id="why-el-mag" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Why Choose El-Mag Insurance for Dallas County Medicare Supplement</h2>
            <p className="text-lg text-gray-600">
              Local DFW expertise, bilingual support, and personalized guidance for Dallas's diverse Medicare community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">DFW Medicare Supplement Healthcare Network Expertise</h3>
              <p className="text-sm text-gray-600 mb-3">
                Deep knowledge of UT Southwestern, Baylor University Medical Center, Medical City Healthcare,
                Texas Health Resources, Parkland, and all major Dallas County healthcare systems. Navigate
                complex hospital networks with confidence.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                  Network Freedom Benefits →
                </a>
                <a href="/medicare-plan-finder" className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                  Find Your Doctor →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🗣️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bilingual Dallas Medicare Supplement Specialists</h3>
              <p className="text-sm text-gray-600 mb-3">
                Spanish and English-speaking agents. Culturally competent support for Dallas County's
                diverse communities including 41.4% Hispanic population and growing multicultural neighborhoods.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/contact" className="text-purple-600 hover:text-purple-700 text-xs font-medium">
                  Hable con un Experto →
                </a>
                <a href="/medicare-supplement-hispanic-latino-community" className="text-purple-600 hover:text-purple-700 text-xs font-medium">
                  Recursos Bilingües →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dallas County Texas Medigap Value Experts</h3>
              <p className="text-sm text-gray-600 mb-3">
                Maximize Texas's competitive Medicare Supplement pricing advantage. We help you understand
                why Texas Medigap premiums offer exceptional value compared to high-cost states while
                providing the same nationwide coverage.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-cost-calculator" className="text-indigo-600 hover:text-indigo-700 text-xs font-medium">
                  Calculate TX Savings →
                </a>
                <a href="/medicare-comparison-tool" className="text-indigo-600 hover:text-indigo-700 text-xs font-medium">
                  Compare Texas Rates →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">All Dallas County Medicare Supplement Communities Served</h3>
              <p className="text-sm text-gray-600 mb-3">
                From Downtown Dallas to Plano, Irving to Richardson, Garland to Mesquite—local support
                across all Dallas County communities. Virtual and in-person consultations available.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/contact" className="text-green-600 hover:text-green-700 text-xs font-medium">
                  Find Local Agent →
                </a>
                <a href="/medicare-supplement" className="text-green-600 hover:text-green-700 text-xs font-medium">
                  Schedule Consultation →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Medicare Supplement Education First</h3>
              <p className="text-sm text-gray-600 mb-3">
                No pressure, education-focused approach. We explain all 10 Medigap plan types available
                in Texas, cost comparisons, and help you make informed decisions about your healthcare coverage.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-supplement" className="text-yellow-600 hover:text-yellow-700 text-xs font-medium">
                  Medigap Education →
                </a>
                <a href="/medicare-supplement-plan-g" className="text-yellow-600 hover:text-yellow-700 text-xs font-medium">
                  Plan G Guide →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Medicare Supplement Open Enrollment Period Specialists</h3>
              <p className="text-sm text-gray-600 mb-3">
                Expert timing guidance for your 6-month Medigap Open Enrollment Period. Enroll
                without medical underwriting when you turn 65 and sign up for Part B.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/contact" className="text-red-600 hover:text-red-700 text-xs font-medium">
                  Check Your Enrollment Window →
                </a>
                <a href="/medicare-supplement" className="text-red-600 hover:text-red-700 text-xs font-medium">
                  OEP Guidelines →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Expert Dallas County Medicare Supplement Guidance Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 300,000+ Dallas County Medicare beneficiaries who deserve comprehensive coverage.
            Free consultation, bilingual support (English/Spanish), and no-pressure guidance from
            local Dallas Medicare experts who understand DFW healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors text-center inline-block"
            >
              Get Free Medigap Comparison
            </a>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-center inline-block"
            >
              Call 331-343-2584
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            Serving all Dallas County communities | Se Habla Español
          </p>
        </div>
      </section>
    </div>
  );
}
