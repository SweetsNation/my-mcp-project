import type { Metadata } from 'next';
import GeographicGrouping from '@/components/GeographicGrouping';
import ToolLinking from '@/components/ToolLinking';
import ResourceLinking from '@/components/ResourceLinking';
import NewYorkMedigapAnalytics from '@/components/NewYorkMedigapAnalytics';

export const metadata: Metadata = {
  title: 'New York Medicare Supplement Insurance | Medigap Plans 2025 | El-Mag Insurance',
  description: 'Expert Medicare Supplement (Medigap) guidance for New York. Navigate NY\'s unique standardized plans, compare options, and protect yourself from high healthcare costs. Serving 3.5M+ NY Medicare beneficiaries with personalized Medigap solutions.',
  keywords: 'New York Medicare Supplement, NY Medigap, Medicare Supplement New York State, Medigap NY, New York Medicare plans, NYC Medicare coverage, New York Medicare Supplement Plan F, New York Medigap rates, Medicare Supplement insurance New York',
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-supplement-new-york',
  },
};

export default function NewYorkMedicareSupplementPage() {
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.elmaginsurance.com/medicare-supplement-new-york',
        url: 'https://www.elmaginsurance.com/medicare-supplement-new-york',
        name: 'New York Medicare Supplement Insurance | Medigap Plans 2025',
        description: 'Expert Medicare Supplement (Medigap) guidance for New York. Navigate NY\'s unique standardized plans, compare options, and protect yourself from high healthcare costs.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': 'https://www.elmaginsurance.com/#website'
        },
        breadcrumb: {
          '@id': 'https://www.elmaginsurance.com/medicare-supplement-new-york#breadcrumb'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.elmaginsurance.com/medicare-supplement-new-york#breadcrumb',
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
            name: 'New York',
            item: 'https://www.elmaginsurance.com/medicare-supplement-new-york'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://www.elmaginsurance.com/medicare-supplement-new-york#service',
        name: 'New York Medicare Supplement Insurance',
        description: 'Medicare Supplement (Medigap) insurance services for New York residents, including NY-specific standardized plans and expert guidance.',
        provider: {
          '@type': 'Organization',
          name: 'El-Mag Insurance',
          url: 'https://www.elmaginsurance.com'
        },
        areaServed: {
          '@type': 'State',
          name: 'New York',
          containsPlace: [
            {
              '@type': 'City',
              name: 'New York City'
            },
            {
              '@type': 'City',
              name: 'Buffalo'
            },
            {
              '@type': 'City',
              name: 'Rochester'
            },
            {
              '@type': 'City',
              name: 'Syracuse'
            },
            {
              '@type': 'City',
              name: 'Albany'
            }
          ]
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'New York Medicare Supplement Plans',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'New York Medicare Supplement Plan F',
                description: 'Most comprehensive NY standardized Medigap plan with full Part B deductible coverage'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'New York Medicare Supplement Plan N',
                description: 'Affordable NY Medigap option with moderate cost-sharing'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'New York Plan G Equivalent',
                description: 'Comprehensive NY standardized plan similar to federal Plan G'
              }
            }
          ]
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.elmaginsurance.com/medicare-supplement-new-york#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What makes New York Medicare Supplement plans different from other states?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'New York is one of only 3 states (along with Massachusetts and Minnesota) that doesn\'t use the standard federal lettered plans (A-G). Instead, NY offers 12 unique standardized benefit packages. All NY Medigap plans are community-rated, meaning premiums don\'t increase based on age, and guaranteed issue rights are more expansive than federal requirements.'
            }
          },
          {
            '@type': 'Question',
            name: 'How many Medicare Supplement plans are available in New York?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'New York offers 12 standardized Medicare Supplement benefit packages. The most popular are Plan F (chosen by 42% of NY Medigap enrollees), Plan N (29%), and the Plan G equivalent (18%). Each plan provides the same benefits regardless of which insurance carrier offers it.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the average cost of Medicare Supplement insurance in New York?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The average Medicare Supplement premium in New York is approximately $304 per month, which is among the highest in the nation. However, NY uses community rating, so premiums are the same regardless of age. Costs vary by carrier, location (NYC vs Upstate), and which of the 12 standardized plans you choose.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I use my New York Medigap plan anywhere in the United States?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. New York Medicare Supplement plans work anywhere in the United States that accepts Original Medicare. There are no network restrictions, so you can see any doctor or specialist nationwide who accepts Medicare patients. This makes NY Medigap plans ideal for snowbirds and travelers.'
            }
          },
          {
            '@type': 'Question',
            name: 'When can I enroll in Medicare Supplement in New York?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'New York offers more generous enrollment rights than federal law requires. You have guaranteed issue rights during your 6-month Medigap Open Enrollment Period (starting when you turn 65 and enroll in Part B). NY also provides a 12-month open enrollment period for those under 65 on Medicare due to disability. Additionally, you can switch between NY Medigap plans during an annual 30-day birthday period.'
            }
          },
          {
            '@type': 'Question',
            name: 'Why is Medicare Supplement penetration so low in New York?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Only 12-21% of NY Medicare beneficiaries have Medigap coverage, leaving 2.8+ million New Yorkers underserved. Contributing factors include high premiums ($304/month average), strong Medicare Advantage marketing, lack of awareness about NY\'s unique standardized plans, and confusion about the differences from federal plans used in 47 other states.'
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

      <NewYorkMedigapAnalytics />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🗽</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">New York Medicare Supplement Insurance | Medigap Plans 2025</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Navigate New York's unique Medicare Supplement landscape with expert guidance. Serving 3.5M+
              NY Medicare beneficiaries across NYC, Long Island, Upstate, and the Hudson Valley with
              personalized Medigap solutions and NY-specific regulatory expertise.
            </p>
          </div>
        </div>
      </section>

      {/* New York Market Overview */}
      <section id="market-overview" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">New York Medicare Supplement Insurance Market Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                New York is home to 3.5+ million Medicare beneficiaries, yet only 12-21% have Medicare Supplement
                coverage—leaving approximately 2.8+ million New Yorkers without comprehensive gap coverage. This
                represents one of the nation's largest underserved Medicare Supplement markets, creating significant
                opportunity for beneficiaries to protect themselves from New York's high healthcare costs.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">3.5M+</div>
                  <div className="text-sm text-gray-600">Medicare Beneficiaries</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">12-21%</div>
                  <div className="text-sm text-gray-600">Medigap Penetration Rate</div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">2.8M+</div>
                  <div className="text-sm text-gray-600">Underserved Beneficiaries</div>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">12</div>
                  <div className="text-sm text-gray-600">Standardized NY Plans</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key New York Medicare Supplement Insurance Advantages:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    <a href="/medicare-supplement" className="text-blue-600 hover:underline">Unique NY standardized plans</a>: Simplified comparisons, standardized benefits
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Access to world-class NYC hospitals: NYU Langone, Mount Sinai, NewYork-Presbyterian, Memorial Sloan Kettering
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Guaranteed issue rights during Open Enrollment Period (no medical underwriting)
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    <a href="/medicare-supplement-hispanic-latino-community" className="text-blue-600 hover:underline">Multilingual support</a> for NY's diverse communities (Spanish, Chinese, Russian, more)
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Nationwide coverage for snowbirds spending winters in Florida
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">New York Medicare Supplement Insurance Unique Regulations</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                    📋
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">NY-Specific Standardized Plans</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      New York uses its own unique standardized Medigap plan structure, different from
                      the federal lettered plans (A, B, C, etc.). NY residents can choose from 12
                      standardized benefit packages, making plan comparison straightforward and transparent.
                    </p>
                    <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Learn About NY Medigap Plans →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
                    🏥
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">World-Class New York Healthcare Access</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Medicare Supplement provides unrestricted access to NYU Langone (ranked #3 nationally),
                      Mount Sinai, NewYork-Presbyterian/Columbia, Memorial Sloan Kettering Cancer Center,
                      and all top-ranked NYC and Upstate medical facilities.
                    </p>
                    <a href="/medicare-plan-finder" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      Find Your NY Provider →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl">
                    💰
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Protection Against NY's High Healthcare Costs</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      New York healthcare costs are among the nation's highest. Medicare Supplement plans
                      protect you from expensive 20% coinsurance, hospital deductibles, and unlimited
                      out-of-pocket exposure at premium NYC and Upstate facilities.
                    </p>
                    <div className="flex flex-col gap-1">
                      <a href="/medicare-cost-calculator" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        Calculate Your Risk →
                      </a>
                      <a href="/contact" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        Get Free NY Quote →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NY Medigap Opportunity */}
      <section id="medigap-opportunity" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Why 79-88% of New York Beneficiaries Miss Medicare Supplement Insurance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Despite having access to world-class healthcare from NYU Langone to Memorial Sloan Kettering,
              the vast majority of New York Medicare beneficiaries lack comprehensive gap coverage, leaving
              them vulnerable to unexpected medical costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">New York: Lowest Medigap Penetration in Northeast</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">12-21% penetration:</strong> New York ranks among the
                  5 lowest Medigap penetration states despite 3.5M+ Medicare beneficiaries
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">2.8M+ gap:</strong> Over 2.8 million New Yorkers
                  without comprehensive Medicare Supplement coverage vs 20.5% national average
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Massive market opportunity for cost protection
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Why Choose Medigap in NY? →
                </a>
                <a href="/medicare-comparison-tool" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Compare NY Plans →
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">💵</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Original Medicare Gaps Cost New Yorkers Thousands Annually</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">20% coinsurance:</strong> Original Medicare only
                  covers 80% of Part B services—extremely expensive in high-cost New York healthcare market
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">No out-of-pocket max:</strong> Unlimited exposure
                  to hospital and specialist costs at NYU Langone, Mount Sinai, Memorial Sloan Kettering
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Average annual out-of-pocket: $7,000-10,000+ in NY
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a href="/medicare-cost-calculator" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Calculate Your Risk →
                </a>
                <a href="/medicare-supplement-plan-g" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  See Comprehensive Coverage →
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">New York's Premium Healthcare Requires Medigap Protection</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">High-cost market:</strong> NYU Langone, Mount Sinai,
                  NewYork-Presbyterian among nation's most expensive and prestigious facilities
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">Specialist access:</strong> 20% coinsurance on
                  $800-1,500+ specialist visits adds up fast in NYC metro area
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Protect yourself from premium New York healthcare costs
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

          {/* Spotlight: NY Unique Standardized Plans */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="text-5xl">⭐</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">New York's Unique Standardized Medicare Supplement Plans</h3>
                <p className="text-gray-700 mb-4">
                  Unlike 47 other states that use federal lettered plans (A, B, C, D, F, G, etc.),
                  New York has its own unique standardized Medigap plan structure. This NY-specific
                  system offers 12 standardized benefit packages designed for easy comparison:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-gray-900">Simplified Plan Shopping:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      All insurers offer identical benefits for each standardized plan—only premiums
                      differ. This makes comparing New York Medigap options straightforward and transparent.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-gray-900">Most Popular NY Plans:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      42% choose Plan F (most comprehensive), 29% choose Plan N (budget-friendly with copays),
                      18% choose Plan G equivalent. We'll help you find the right NY plan for your needs.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/medicare-comparison-tool" className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors text-center">
                    Compare NY Plans
                  </a>
                  <a href="/medicare-cost-calculator" className="inline-block bg-white text-blue-600 border-2 border-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors text-center">
                    Calculate NY Savings
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
        currentRegion="new-york"
        showMarketData={true}
        layout="hierarchical"
        maxItems={20}
      />

      {/* Popular New York Medigap Plans */}
      <section id="popular-plans" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">💎 Most Popular Medigap Plans in New York</h2>
            <p className="text-lg text-gray-600">
              12 NY-standardized Medigap plans available—here are the top choices among New York beneficiaries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
              <div className="text-3xl mb-3">🥇</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">New York Medicare Supplement Plan F</h3>
              <div className="text-sm text-gray-600 mb-4">Most Comprehensive (42% of NY enrollees)</div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Covers all Medicare gaps (most comprehensive NY plan)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">No copays or deductibles after Medicare Part B deductible</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Foreign travel emergency coverage</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-sm">Best value for frequent NYC healthcare users</span>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-xs text-yellow-800">
                  <strong>Note:</strong> Plan F only available if Medicare-eligible before 1/1/2020
                </p>
              </div>
              <a href="/medicare-comparison-tool" className="block text-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Compare NY Plan F Rates
              </a>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl border-2 border-teal-200">
              <div className="text-3xl mb-3">🥈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">New York Medicare Supplement Plan N</h3>
              <div className="text-sm text-gray-600 mb-4">Budget-Friendly (29% of NY enrollees)</div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-sm">Lower premiums than comprehensive plans</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-sm">Small copays: up to $20 office, $50 ER</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-sm">Part B excess charges apply (rare in NY)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-sm">Good for healthy, cost-conscious New Yorkers</span>
                </div>
              </div>
              <a href="/medicare-supplement" className="block text-center bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors">
                Explore NY Plan N Details
              </a>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl border-2 border-indigo-200">
              <div className="text-3xl mb-3">🥉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">New York Plan G Equivalent</h3>
              <div className="text-sm text-gray-600 mb-4">Comprehensive for New Enrollees (18% of NY enrollees)</div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Nearly identical coverage to Plan F</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Only difference: you pay Part B deductible ($257/year)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Often lower premiums than Plan F</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span className="text-sm">Best option for those new to Medicare</span>
                </div>
              </div>
              <a href="/medicare-supplement" className="block text-center bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
                See NY Plan G Equivalent
              </a>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <p className="text-gray-700 mb-4">
              <strong>Not sure which NY plan is right for you?</strong> Our New York Medicare Supplement
              experts will compare all 12 NY-standardized Medigap plans and recommend the best fit for
              your healthcare needs, budget, and preferred providers.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
              Get Free NY Plan Comparison
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

      {/* New York Regional Coverage */}
      <section id="regional-coverage" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🗺️ Medicare Supplement Insurance Coverage Across New York State</h2>
            <p className="text-lg text-gray-600">
              Expert Medigap guidance from NYC to Buffalo, Long Island to the Adirondacks—serving all
              New York regions with specialized local knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">🏙️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">New York City & Metro Medicare Supplement</h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Manhattan (250K+ beneficiaries)</li>
                <li>• Brooklyn (400K+ beneficiaries)</li>
                <li>• Queens (350K+ beneficiaries)</li>
                <li>• Bronx (220K+ beneficiaries)</li>
                <li>• Staten Island (90K+ beneficiaries)</li>
                <li>• Westchester County (180K+)</li>
              </ul>
              <div className="flex flex-col gap-1">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  NYC Medicare Help →
                </a>
                <a href="/medicare-comparison-tool" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Compare NYC Plans →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">🏝️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Long Island Medicare Supplement</h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Nassau County (280K+ beneficiaries)</li>
                <li>• Suffolk County (340K+ beneficiaries)</li>
                <li>• Hamptons communities</li>
                <li>• North Shore, South Shore</li>
                <li>• Access to top NYC hospitals</li>
              </ul>
              <div className="flex flex-col gap-1">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Long Island Medicare Help →
                </a>
                <a href="/medicare-plan-finder" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Find Long Island Plans →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">🏔️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Upstate New York Medicare Supplement</h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Buffalo/Erie County (220K+ beneficiaries)</li>
                <li>• Rochester/Monroe County (160K+)</li>
                <li>• Syracuse/Onondaga County (95K+)</li>
                <li>• Albany/Capital Region (150K+)</li>
                <li>• Hudson Valley, Adirondacks, Southern Tier</li>
              </ul>
              <div className="flex flex-col gap-1">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Upstate NY Medicare Help →
                </a>
                <a href="/medicare-comparison-tool" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Compare Upstate Plans →
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

      {/* Why Choose El-Mag for New York */}
      <section id="why-el-mag" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Why Choose El-Mag Insurance for New York Medicare Supplement Insurance</h2>
            <p className="text-lg text-gray-600">
              NY-specific expertise, low-penetration market specialists, and personalized guidance for 3.5M+ New York Medicare beneficiaries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🗽</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">New York Standardized Plan Experts</h3>
              <p className="text-sm text-gray-600 mb-3">
                Deep understanding of NY's unique standardized Medigap plan structure. We navigate
                the 12 NY-specific benefit packages and explain how they differ from federal plans
                used in other states.
              </p>
              <a href="/medicare-comparison-tool" className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                Compare NY Plans →
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">New York Low-Penetration Market Specialists</h3>
              <p className="text-sm text-gray-600 mb-3">
                Expert knowledge of NY's 12-21% Medigap penetration rate (one of the nation's lowest).
                We understand why 2.8M+ New York beneficiaries lack coverage and how to fill that gap
                with appropriate Medicare Supplement protection.
              </p>
              <a href="/medicare-supplement" className="text-purple-600 hover:text-purple-700 text-xs font-medium">
                Learn About NY Market Opportunity →
              </a>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">New York Healthcare Network Knowledge</h3>
              <p className="text-sm text-gray-600 mb-3">
                Expertise with NYU Langone, Mount Sinai, NewYork-Presbyterian/Columbia, Memorial Sloan
                Kettering, and all major NYC and Upstate healthcare systems. Navigate premium New York
                networks with confidence.
              </p>
              <a href="/medicare-plan-finder" className="text-indigo-600 hover:text-indigo-700 text-xs font-medium">
                Find Your NY Provider →
              </a>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🗣️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Multilingual New York Medicare Support</h3>
              <p className="text-sm text-gray-600 mb-3">
                Spanish, Chinese (Mandarin/Cantonese), Russian, Korean, and other language support
                for diverse NYC and NY communities. Culturally competent Medicare Supplement guidance
                for all New Yorkers.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-supplement-hispanic-latino-community" className="text-teal-600 hover:text-teal-700 text-xs font-medium">
                  Recursos en Español →
                </a>
                <a href="/contact" className="text-teal-600 hover:text-teal-700 text-xs font-medium">
                  Multilingual Support →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Medicare Supplement Education First</h3>
              <p className="text-sm text-gray-600 mb-3">
                No-pressure, education-focused approach. We explain NY's unique standardized plans,
                why New York penetration is so low, the value of Medigap coverage, and help you make
                informed decisions about your healthcare security.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-supplement" className="text-yellow-600 hover:text-yellow-700 text-xs font-medium">
                  NY Medigap Education →
                </a>
                <a href="/medicare-comparison-tool" className="text-yellow-600 hover:text-yellow-700 text-xs font-medium">
                  Compare All NY Plans →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">New York Open Enrollment Period Specialists</h3>
              <p className="text-sm text-gray-600 mb-3">
                Expert timing guidance for your 6-month Medigap Open Enrollment Period. NY guarantees
                issue rights during OEP—enroll without medical underwriting. We ensure you don't miss
                this critical enrollment window.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/contact" className="text-red-600 hover:text-red-700 text-xs font-medium">
                  Check Your NY Enrollment Window →
                </a>
                <a href="/medicare-supplement" className="text-red-600 hover:text-red-700 text-xs font-medium">
                  OEP Guidelines →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NY Plans Comparison Table */}
      <section id="plan-comparison" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📊 Compare New York's 12 Standardized Medicare Supplement Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlike the 47 states using federal lettered plans (A-G), New York offers 12 unique standardized
              benefit packages. Compare coverage levels to find your ideal NY Medigap plan.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Benefit</th>
                  <th className="px-4 py-4 text-center font-semibold">Plan F<br/><span className="text-xs font-normal">(42%)</span></th>
                  <th className="px-4 py-4 text-center font-semibold">Plan N<br/><span className="text-xs font-normal">(29%)</span></th>
                  <th className="px-4 py-4 text-center font-semibold">Plan G<br/><span className="text-xs font-normal">Equiv (18%)</span></th>
                  <th className="px-4 py-4 text-center font-semibold">Other Plans<br/><span className="text-xs font-normal">(9 more)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-blue-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Part A Coinsurance & Hospital Costs</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center text-gray-500">Varies</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-blue-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Part B Coinsurance/Copayment</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center">⚠️ Copays Apply</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center text-gray-500">Varies</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-blue-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Blood (First 3 Pints)</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center text-gray-500">Varies</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-blue-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Part A Hospice Coinsurance/Copayment</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center text-gray-500">Varies</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-blue-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Skilled Nursing Facility Coinsurance</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center">✅ 100%</td>
                  <td className="px-4 py-4 text-center text-gray-500">Varies</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-blue-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Part A Deductible ($1,676 in 2025)</td>
                  <td className="px-4 py-4 text-center">✅ Covered</td>
                  <td className="px-4 py-4 text-center">✅ Covered</td>
                  <td className="px-4 py-4 text-center">✅ Covered</td>
                  <td className="px-4 py-4 text-center text-gray-500">Varies</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-blue-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Part B Deductible ($257 in 2025)</td>
                  <td className="px-4 py-4 text-center">✅ Covered</td>
                  <td className="px-4 py-4 text-center">❌ Not Covered</td>
                  <td className="px-4 py-4 text-center">❌ Not Covered</td>
                  <td className="px-4 py-4 text-center text-gray-500">Varies</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-blue-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Part B Excess Charges</td>
                  <td className="px-4 py-4 text-center">✅ Covered</td>
                  <td className="px-4 py-4 text-center">❌ Not Covered</td>
                  <td className="px-4 py-4 text-center">✅ Covered</td>
                  <td className="px-4 py-4 text-center text-gray-500">Varies</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-blue-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Foreign Travel Emergency (Up to Plan Limits)</td>
                  <td className="px-4 py-4 text-center">✅ 80%</td>
                  <td className="px-4 py-4 text-center">✅ 80%</td>
                  <td className="px-4 py-4 text-center">✅ 80%</td>
                  <td className="px-4 py-4 text-center text-gray-500">Varies</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-blue-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Typical Monthly Premium (NYC)</td>
                  <td className="px-4 py-4 text-center font-bold text-blue-600">$325-$380</td>
                  <td className="px-4 py-4 text-center font-bold text-green-600">$240-$290</td>
                  <td className="px-4 py-4 text-center font-bold text-blue-600">$300-$350</td>
                  <td className="px-4 py-4 text-center text-gray-500">$180-$420</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                  <td className="px-4 py-4 text-center text-sm">Maximum coverage, predictable costs</td>
                  <td className="px-4 py-4 text-center text-sm">Lower premiums, modest cost-sharing</td>
                  <td className="px-4 py-4 text-center text-sm">Balance of coverage & affordability</td>
                  <td className="px-4 py-4 text-center text-sm">Specialized needs</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {/* Plan F Card */}
            <div className="bg-white border-2 border-blue-500 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Plan F</h3>
                  <p className="text-sm text-gray-600">Most Popular (42% of enrollees)</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">$325-$380</div>
                  <div className="text-xs text-gray-600">per month (NYC)</div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Part A & B Coinsurance: 100%</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Part A Deductible: Covered</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Part B Deductible: Covered</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Part B Excess Charges: Covered</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Foreign Travel: 80% coverage</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Best for:</strong> Maximum coverage with fully predictable costs
              </p>
              <a href="/contact" className="block text-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
                Get Plan F Quote
              </a>
            </div>

            {/* Plan N Card */}
            <div className="bg-white border-2 border-green-500 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Plan N</h3>
                  <p className="text-sm text-gray-600">Second Most Popular (29%)</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">$240-$290</div>
                  <div className="text-xs text-gray-600">per month (NYC)</div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Part A Coinsurance: 100%</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-yellow-500 mr-2">⚠️</span>
                  <span>Part B: Copays apply ($20 office, $50 ER)</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Part A Deductible: Covered</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-red-500 mr-2">❌</span>
                  <span>Part B Deductible: Not covered</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Foreign Travel: 80% coverage</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Best for:</strong> Lower premiums with modest, manageable cost-sharing
              </p>
              <a href="/contact" className="block text-center bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700">
                Get Plan N Quote
              </a>
            </div>

            {/* Plan G Equivalent Card */}
            <div className="bg-white border-2 border-purple-500 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Plan G Equiv</h3>
                  <p className="text-sm text-gray-600">Growing Choice (18%)</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">$300-$350</div>
                  <div className="text-xs text-gray-600">per month (NYC)</div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Part A & B Coinsurance: 100%</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Part A Deductible: Covered</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-red-500 mr-2">❌</span>
                  <span>Part B Deductible: Not covered ($257)</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Part B Excess Charges: Covered</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Foreign Travel: 80% coverage</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Best for:</strong> Balance of comprehensive coverage and affordability
              </p>
              <a href="/contact" className="block text-center bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700">
                Get Plan G Quote
              </a>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <span className="text-2xl mr-3">💡</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Important NY Medigap Notes:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Community Rating:</strong> NY premiums don't increase with age (same rate for all ages)</li>
                  <li>• <strong>12 Plans Available:</strong> Beyond F, N, and G equivalent, NY offers 9 additional standardized plans</li>
                  <li>• <strong>Carrier Variations:</strong> Each carrier charges different premiums for the same plan benefits</li>
                  <li>• <strong>Geographic Differences:</strong> NYC premiums typically 15-25% higher than Upstate NY</li>
                  <li>• <strong>Compare Multiple Carriers:</strong> Same plan benefits, but premiums can vary $100+/month</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">❓ New York Medicare Supplement FAQs</h2>
            <p className="text-lg text-gray-600">
              Common questions about NY's unique Medicare Supplement landscape
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="bg-white rounded-lg shadow-md overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-blue-50 transition-colors list-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What makes New York Medicare Supplement plans different from other states?
                  </h3>
                  <span className="text-blue-600 text-xl group-open:rotate-180 transition-transform">▼</span>
                </div>
              </summary>
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-700 leading-relaxed">
                  New York is one of only 3 states (along with Massachusetts and Minnesota) that doesn't use the
                  standard federal lettered plans (A-G). Instead, NY offers <strong>12 unique standardized benefit
                  packages</strong>. All NY Medigap plans are <strong>community-rated</strong>, meaning premiums don't
                  increase based on age, and guaranteed issue rights are more expansive than federal requirements.
                  NY also mandates a 30-day birthday period each year when beneficiaries can switch plans without
                  medical underwriting.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white rounded-lg shadow-md overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-blue-50 transition-colors list-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How many Medicare Supplement plans are available in New York?
                  </h3>
                  <span className="text-blue-600 text-xl group-open:rotate-180 transition-transform">▼</span>
                </div>
              </summary>
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-700 leading-relaxed">
                  New York offers <strong>12 standardized Medicare Supplement benefit packages</strong>. The most
                  popular are <strong>Plan F</strong> (chosen by 42% of NY Medigap enrollees), <strong>Plan N</strong>
                  (29%), and the <strong>Plan G equivalent</strong> (18%). Each plan provides the same benefits
                  regardless of which insurance carrier offers it, but premiums vary by carrier. This standardization
                  makes it easier to compare carriers and find the best rate for your chosen coverage level.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white rounded-lg shadow-md overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-blue-50 transition-colors list-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What is the average cost of Medicare Supplement insurance in New York?
                  </h3>
                  <span className="text-blue-600 text-xl group-open:rotate-180 transition-transform">▼</span>
                </div>
              </summary>
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-700 leading-relaxed mb-3">
                  The average Medicare Supplement premium in New York is approximately <strong>$304 per month</strong>,
                  which is among the highest in the nation. However, NY uses <strong>community rating</strong>, so
                  premiums are the same regardless of age. Costs vary by:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li><strong>Carrier:</strong> Same plan can vary $100+/month between carriers</li>
                  <li><strong>Location:</strong> NYC typically 15-25% higher than Upstate NY</li>
                  <li><strong>Plan Choice:</strong> Plan F ($325-$380) vs Plan N ($240-$290) in NYC</li>
                  <li><strong>Tobacco Use:</strong> Some carriers charge tobacco surcharges</li>
                </ul>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white rounded-lg shadow-md overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-blue-50 transition-colors list-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Can I use my New York Medigap plan anywhere in the United States?
                  </h3>
                  <span className="text-blue-600 text-xl group-open:rotate-180 transition-transform">▼</span>
                </div>
              </summary>
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Yes</strong>. New York Medicare Supplement plans work <strong>anywhere in the United States</strong>
                  that accepts Original Medicare. There are no network restrictions, so you can see any doctor or
                  specialist nationwide who accepts Medicare patients. This makes NY Medigap plans ideal for snowbirds,
                  travelers, and those with family in other states. Most plans also provide foreign travel emergency
                  coverage (80% after a $250 deductible, up to $50,000 lifetime).
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white rounded-lg shadow-md overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-blue-50 transition-colors list-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    When can I enroll in Medicare Supplement in New York?
                  </h3>
                  <span className="text-blue-600 text-xl group-open:rotate-180 transition-transform">▼</span>
                </div>
              </summary>
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-700 leading-relaxed mb-3">
                  New York offers <strong>more generous enrollment rights</strong> than federal law requires:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>6-Month Open Enrollment Period:</strong> Starting when you turn 65 and enroll in Part B
                    (guaranteed issue, no medical underwriting)</li>
                  <li><strong>Under-65 Disability:</strong> NY provides a 12-month open enrollment period for those
                    under 65 on Medicare due to disability</li>
                  <li><strong>30-Day Birthday Period:</strong> Each year within 30 days of your birthday, you can
                    switch to any NY Medigap plan without medical underwriting</li>
                  <li><strong>Year-Round Enrollment:</strong> You can apply anytime, but outside guaranteed issue
                    periods you may face medical underwriting</li>
                </ul>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white rounded-lg shadow-md overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-blue-50 transition-colors list-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Why is Medicare Supplement penetration so low in New York?
                  </h3>
                  <span className="text-blue-600 text-xl group-open:rotate-180 transition-transform">▼</span>
                </div>
              </summary>
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Only <strong>12-21% of NY Medicare beneficiaries</strong> have Medigap coverage, leaving 2.8+ million
                  New Yorkers underserved. Contributing factors include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li><strong>High Premiums:</strong> $304/month average (among nation's highest)</li>
                  <li><strong>MA Marketing:</strong> Heavy Medicare Advantage advertising emphasizes "$0 premium" plans</li>
                  <li><strong>Awareness Gap:</strong> Many don't know about NY's unique standardized plans</li>
                  <li><strong>Confusion:</strong> NY's system differs from federal plans used in 47 other states</li>
                  <li><strong>Urban Density:</strong> NYC/Long Island have extensive MA networks, reducing Medigap appeal</li>
                  <li><strong>Income-Based Programs:</strong> Some qualify for Medicaid or MSP programs instead</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Despite high premiums, <strong>Medigap provides superior value</strong> for those who can afford it,
                  especially given NY's world-class but expensive healthcare system.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="bg-white rounded-lg shadow-md overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-blue-50 transition-colors list-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Should I choose Medicare Supplement or Medicare Advantage in New York?
                  </h3>
                  <span className="text-blue-600 text-xl group-open:rotate-180 transition-transform">▼</span>
                </div>
              </summary>
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-700 leading-relaxed mb-3">
                  The choice depends on your healthcare needs, budget, and priorities:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Choose Medicare Supplement if:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ You want access to any doctor/hospital nationwide</li>
                      <li>✓ You prefer predictable, capped costs</li>
                      <li>✓ You see specialists frequently</li>
                      <li>✓ You travel or split time between states</li>
                      <li>✓ You can afford $240-$380/month premium</li>
                      <li>✓ You want comprehensive coverage</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Choose Medicare Advantage if:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ You want lower/zero monthly premiums</li>
                      <li>✓ You're comfortable with network restrictions</li>
                      <li>✓ You value extra benefits (dental, vision, hearing)</li>
                      <li>✓ You primarily stay in your local area</li>
                      <li>✓ You're generally healthy with minimal care needs</li>
                      <li>✓ You want prescription drug coverage included</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>For most NY seniors:</strong> Medigap offers superior protection given high NYC healthcare
                  costs and access to world-class facilities like NYU Langone, Mount Sinai, and Memorial Sloan Kettering.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Still have questions about New York Medicare Supplement?</p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Speak with a NY Medigap Expert
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Expert New York Medicare Supplement Guidance Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the 3.5 million+ New York Medicare beneficiaries who deserve comprehensive coverage.
            Free consultation, multilingual support, NY standardized plan expertise, and no-pressure
            guidance from local New York Medicare Supplement specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors text-center inline-block"
            >
              Get Free NY Medigap Comparison
            </a>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-center inline-block"
            >
              Call 331-343-2584
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            Serving New York City, Long Island, Upstate NY, Hudson Valley | Multilingual Support Available
          </p>
        </div>
      </section>
    </div>
  );
}
