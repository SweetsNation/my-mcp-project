import type { Metadata } from 'next';
import GeographicGrouping from '@/components/GeographicGrouping';
import ToolLinking from '@/components/ToolLinking';
import ResourceLinking from '@/components/ResourceLinking';
import WestCoastRegionalAnalytics from '@/components/WestCoastRegionalAnalytics';

export const metadata: Metadata = {
  title: 'West Coast Medicare Supplement & Medigap Plans | California, Oregon, Washington | El-Mag Insurance',
  description: 'Expert Medicare Supplement (Medigap) guidance across the West Coast. Serving California, Oregon, and Washington with specialized knowledge of low-penetration markets, community rating advantages, and Pacific Northwest healthcare networks.',
  keywords: 'West Coast Medicare Supplement, California Medigap, Oregon Medicare Supplement, Washington Medigap, California community rating, Pacific Northwest Medicare, West Coast low penetration, Seattle Medicare Supplement, Portland Medigap, San Francisco Medicare',
  alternates: {
    canonical: 'https://elmaginsurance.com/regions/west-coast',
  },
};

export default function WestCoastRegionPage() {
  return (
    <div className="bg-white">
      <WestCoastRegionalAnalytics />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🌊</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">West Coast Medicare Supplement & Medigap Coverage</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Specialized Medicare Supplement solutions across California, Oregon, and Washington with expert
              knowledge of low-penetration markets, California's unique community rating advantage, and Pacific
              Northwest healthcare systems serving 8 million+ Medicare beneficiaries.
            </p>
          </div>
        </div>
      </section>

      {/* Region Overview */}
      <section id="region-overview" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">West Coast Medicare Supplement Market Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                The West Coast represents the nation's largest low-penetration Medicare Supplement opportunity,
                with California at ~9-25% Medigap adoption, Oregon and Washington similarly underserved. This
                massive market gap leaves millions of beneficiaries without comprehensive coverage, creating
                significant opportunity for cost protection and healthcare security.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">8M+</div>
                  <div className="text-sm text-gray-600">Medicare Beneficiaries</div>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-1">~15-25%</div>
                  <div className="text-sm text-gray-600">Medigap Penetration Rate</div>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">6M+</div>
                  <div className="text-sm text-gray-600">Underserved Beneficiaries</div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">States Covered</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key West Coast Medicare Supplement Advantages:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    <a href="/medicare-supplement" className="text-blue-600 hover:underline">California community rating</a>: Age-independent pricing unique among 50 states
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Massive underserved market: <a href="/medicare-supplement" className="text-blue-600 hover:underline">6M+ beneficiaries lack comprehensive gap coverage</a>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    World-class healthcare: Stanford, UCSF, Oregon Health & Science, UW Medicine
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Lower than national penetration: California 9-25%, Oregon/Washington 15-20% vs 20.5% national
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Diverse populations requiring <a href="/medicare-supplement-hispanic-latino-community" className="text-blue-600 hover:underline">multilingual support</a> (Spanish, Asian languages)
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">State-Specific Medicare Supplement Highlights</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                    ☀️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">California Medicare Supplement: Unique Community Rating</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      California's community rating means premiums don't increase with age—a 65-year-old
                      pays the same as an 85-year-old. This unique advantage makes California Medigap
                      exceptionally valuable. 4.7M+ beneficiaries, 9-25% penetration, massive opportunity.
                    </p>
                    <div className="flex flex-col gap-1">
                      <a href="/medicare-supplement-los-angeles-county" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Los Angeles County (1.8M beneficiaries) →
                      </a>
                      <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        California Community Rating Benefits →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                    🌲
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Oregon Medicare Supplement: Fastest Growth</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Oregon led all states with 7.9% Medigap growth in 2024 (14,626 new lives).
                      Portland, Eugene, and Salem markets show strong adoption potential. Oregon Health
                      & Science University (OHSU) and Providence networks require comprehensive coverage.
                    </p>
                    <div className="flex flex-col gap-1">
                      <a href="/medicare-comparison-tool" className="text-green-600 hover:text-green-700 text-sm font-medium">
                        Compare Oregon Medigap Plans →
                      </a>
                      <a href="/contact" className="text-green-600 hover:text-green-700 text-sm font-medium">
                        Oregon Medicare Consultation →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-2xl">
                    🏔️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Washington Medicare Supplement: Pacific Northwest Premium Care</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Washington's UW Medicine, Seattle Cancer Care Alliance, and Swedish Medical Center
                      rank among the nation's best. Low Medigap penetration (~15-20%) creates opportunity
                      for 1M+ beneficiaries in Seattle, Spokane, and Tacoma markets.
                    </p>
                    <div className="flex flex-col gap-1">
                      <a href="/medicare-plan-finder" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                        Find Washington Medicare Plans →
                      </a>
                      <a href="/medicare-supplement" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                        Washington Medigap Options →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* West Coast Medigap Opportunity */}
      <section id="medigap-opportunity" className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Why 75-85% of West Coast Beneficiaries Miss Medicare Supplement</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Despite having access to world-class healthcare from Stanford to UW Medicine, the vast majority
              of West Coast Medicare beneficiaries lack comprehensive gap coverage, leaving them vulnerable
              to unexpected medical costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">West Coast: Lowest Medicare Supplement Penetration in Nation</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">California 9-25%:</strong> Lowest/second-lowest Medigap
                  penetration despite 4.7M+ Medicare beneficiaries
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">6M+ gap:</strong> Over 6 million West Coast beneficiaries
                  without comprehensive coverage vs 20.5% national average
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Massive market opportunity for cost protection
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Why Choose Medigap? →
                </a>
                <a href="/medicare-comparison-tool" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Compare West Coast Plans →
                </a>
                <a href="/regions/southwest" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Compare Other Regional Markets →
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">💵</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Original Medicare Gaps Cost Thousands Annually</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">20% coinsurance:</strong> Original Medicare only
                  covers 80% of Part B services—expensive in high-cost West Coast markets
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">No out-of-pocket max:</strong> Unlimited exposure
                  to hospital and specialist costs at Stanford, UCSF, UW Medicine, OHSU
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Average annual out-of-pocket: $5,460-7,000+
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a href="/medicare-cost-calculator" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Calculate Your Risk →
                </a>
                <a href="/medicare-supplement-plan-g" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  See Plan G Coverage →
                </a>
                <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Understanding Medicare Gaps →
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">West Coast Premium Healthcare Requires Protection</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">High-cost markets:</strong> Stanford, UCSF, UW Medicine,
                  OHSU among nation's most expensive and prestigious facilities
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">Specialist access:</strong> 20% coinsurance on
                  $500-1,000+ specialist visits adds up fast in coastal cities
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Protect yourself from premium West Coast healthcare costs
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Get Free Consultation →
                </a>
                <a href="/medicare-plan-finder" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Find Your Plan →
                </a>
                <a href="/medicare-cost-calculator" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Calculate West Coast Healthcare Costs →
                </a>
              </div>
            </div>
          </div>

          {/* Spotlight: California Community Rating */}
          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-xl border-2 border-yellow-200">
            <div className="flex items-start space-x-4">
              <div className="text-5xl">⭐</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">California's Community Rating: Unique Among 50 States</h3>
                <p className="text-gray-700 mb-4">
                  California is one of only 3 states requiring community rating for Medicare Supplement plans.
                  Unlike 47 other states that use attained-age or issue-age rating, California prohibits
                  age-based premium increases:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-gray-900">Same Premium at Any Age:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      A 65-year-old and 85-year-old pay identical premiums for the same Medigap plan.
                      Your rate doesn't increase as you age—only inflation adjustments apply to all ages equally.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-gray-900">Lifetime Value Protection:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Lock in community rates during your Medigap Open Enrollment Period (6 months after
                      enrolling in Part B at age 65+). No medical underwriting, no age penalties—ever.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/medicare-supplement-los-angeles-county" className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors text-center">
                    California Community Rating Guide
                  </a>
                  <a href="/medicare-cost-calculator" className="inline-block bg-white text-blue-600 border-2 border-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors text-center">
                    Calculate CA Savings
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
        currentRegion="west-coast"
        showMarketData={true}
        layout="hierarchical"
        maxItems={20}
      />

      {/* Popular West Coast Medigap Plans */}
      <section id="popular-plans" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">💎 Most Popular Medicare Supplement Plans on the West Coast</h2>
            <p className="text-lg text-gray-600">
              11 Medigap plan types available across California, Oregon, and Washington—here are the top choices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
              <div className="text-3xl mb-3">🥇</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Medicare Supplement Plan G</h3>
              <div className="text-sm text-gray-600 mb-4">Most Comprehensive Coverage</div>
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
                  <span className="text-sm">Best value for comprehensive West Coast healthcare access</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <a href="/medicare-supplement-plan-g" className="block text-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                  Compare Plan G Rates
                </a>
                <a href="/medicare-comparison-tool" className="block text-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Compare All West Coast Plans →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl border-2 border-teal-200">
              <div className="text-3xl mb-3">🥈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Medicare Supplement Plan N</h3>
              <div className="text-sm text-gray-600 mb-4">Budget-Friendly Option</div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-sm">Lower premiums than Plan G</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-sm">Small copays: $20 office, $50 ER</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-sm">Part B excess charges apply</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span className="text-sm">Good for healthy, cost-conscious West Coast seniors</span>
                </div>
              </div>
              <a href="/medicare-supplement" className="block text-center bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors">
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
                  <span className="text-sm">Very low monthly premium</span>
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
              <strong>Not sure which plan is right for you?</strong> Our West Coast Medicare experts
              will compare all 11 Medigap plans available in California, Oregon, and Washington and
              recommend the best fit for your healthcare needs and budget.
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

      {/* West Coast State Coverage */}
      <section id="state-coverage" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🗺️ Medicare Supplement Coverage Across the West Coast</h2>
            <p className="text-lg text-gray-600">
              Expert Medigap guidance from San Diego to Seattle, Sacramento to Spokane—serving all major
              West Coast markets with specialized local knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">☀️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">California Medicare Supplement Markets</h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• <a href="/medicare-supplement-los-angeles-county" className="text-blue-600 hover:underline">Los Angeles County</a> (1.8M beneficiaries)</li>
                <li>• San Francisco Bay Area (850K)</li>
                <li>• San Diego County (600K)</li>
                <li>• Sacramento Region (420K)</li>
                <li>• Orange County, Riverside, Central Valley</li>
              </ul>
              <div className="flex flex-col gap-1">
                <a href="/medicare-supplement-los-angeles-county" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  LA County Details →
                </a>
                <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  California Community Rating →
                </a>
                <a href="/medicare-cost-calculator" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Calculate CA Savings →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">🌲</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Oregon Medicare Supplement Markets</h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Portland Metro (600K+ beneficiaries)</li>
                <li>• Eugene-Springfield</li>
                <li>• Salem</li>
                <li>• Bend, Medford</li>
                <li>• Coastal communities</li>
              </ul>
              <div className="flex flex-col gap-1">
                <a href="/contact" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Oregon Medicare Help →
                </a>
                <a href="/medicare-comparison-tool" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Compare Oregon Plans →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">🏔️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Washington Medicare Supplement Markets</h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Seattle-Tacoma-Bellevue (800K+ beneficiaries)</li>
                <li>• Spokane</li>
                <li>• Vancouver</li>
                <li>• Everett, Olympia, Bellingham</li>
                <li>• Eastern Washington communities</li>
              </ul>
              <div className="flex flex-col gap-1">
                <a href="/contact" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                  Washington Medicare Help →
                </a>
                <a href="/medicare-plan-finder" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                  Find Washington Plans →
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

      {/* Why Choose El-Mag for West Coast */}
      <section id="why-el-mag" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Why Choose El-Mag Insurance for West Coast Medicare Supplement</h2>
            <p className="text-lg text-gray-600">
              Regional expertise, low-penetration market specialists, and personalized guidance for 8M+ West Coast Medicare beneficiaries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">West Coast Low-Penetration Medicare Supplement Market Specialists</h3>
              <p className="text-sm text-gray-600 mb-3">
                Expert knowledge of California's 9-25%, Oregon's 15-20%, and Washington's underserved
                Medicare Supplement markets. We understand why 6M+ West Coast beneficiaries lack coverage
                and how to fill that gap.
              </p>
              <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                Learn About Market Opportunity →
              </a>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">California Community Rating Experts</h3>
              <p className="text-sm text-gray-600 mb-3">
                Deep understanding of California's unique age-independent Medigap pricing. We help you
                maximize the value of community rating—an advantage available in only 3 states nationwide.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-supplement-los-angeles-county" className="text-yellow-600 hover:text-yellow-700 text-xs font-medium">
                  California Community Rating Guide →
                </a>
                <a href="/medicare-cost-calculator" className="text-yellow-600 hover:text-yellow-700 text-xs font-medium">
                  Calculate CA Savings →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">West Coast Healthcare Network Knowledge</h3>
              <p className="text-sm text-gray-600 mb-3">
                Expertise with Stanford, UCSF, UCLA, Cedars-Sinai, UW Medicine, OHSU, Providence,
                and all major West Coast healthcare systems. Navigate premium networks with confidence.
              </p>
              <a href="/medicare-plan-finder" className="text-green-600 hover:text-green-700 text-xs font-medium">
                Find Your Provider →
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🗣️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Multilingual West Coast Support</h3>
              <p className="text-sm text-gray-600 mb-3">
                Spanish, Mandarin, Korean, Vietnamese, and other Asian language support for diverse
                California, Oregon, and Washington communities. Culturally competent Medicare guidance.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-supplement-hispanic-latino-community" className="text-purple-600 hover:text-purple-700 text-xs font-medium">
                  Recursos en Español →
                </a>
                <a href="/contact" className="text-purple-600 hover:text-purple-700 text-xs font-medium">
                  Multilingual Support →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Medicare Supplement Education First</h3>
              <p className="text-sm text-gray-600 mb-3">
                No-pressure, education-focused approach. We explain why West Coast penetration is so
                low, the value of Medigap coverage, and help you make informed decisions about your
                healthcare security.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-supplement" className="text-indigo-600 hover:text-indigo-700 text-xs font-medium">
                  Medigap Education →
                </a>
                <a href="/medicare-comparison-tool" className="text-indigo-600 hover:text-indigo-700 text-xs font-medium">
                  Compare All Plans →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Medicare Supplement Open Enrollment Period Specialists</h3>
              <p className="text-sm text-gray-600 mb-3">
                Expert timing guidance for your 6-month Medigap Open Enrollment Period. California
                community rating makes OEP especially valuable—enroll at any age without premium penalties.
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Expert West Coast Medicare Supplement Guidance Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the 8 million+ West Coast Medicare beneficiaries who deserve comprehensive coverage.
            Free consultation, multilingual support, California community rating expertise, and
            no-pressure guidance from local Medicare Supplement specialists.
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
            Serving California, Oregon, Washington | Se Habla Español | Multilingual Support Available
          </p>
        </div>
      </section>
    </div>
  );
}
