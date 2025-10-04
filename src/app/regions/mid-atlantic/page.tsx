import type { Metadata } from 'next';
import GeographicGrouping from '@/components/GeographicGrouping';
import ToolLinking from '@/components/ToolLinking';
import ResourceLinking from '@/components/ResourceLinking';
import MidAtlanticAnalytics from '@/components/MidAtlanticAnalytics';

export const metadata: Metadata = {
  title: 'Mid-Atlantic Region Medicare & Health Insurance | New York, Pennsylvania, Maryland, New Jersey, Delaware | El-Mag Insurance',
  description: 'Expert Medicare Supplement and Medicare Advantage guidance in the Mid-Atlantic region. Serving New York, Pennsylvania, Maryland, New Jersey, and Delaware with specialized market knowledge and competitive rates.',
  keywords: 'Mid-Atlantic Medicare, New York Medicare, Pennsylvania Medicare, Maryland Medicare, New Jersey Medicare, Delaware Medicare, Medicare Supplement New York, Medicare Advantage Pennsylvania, low penetration states, Mid-Atlantic health insurance',
  alternates: {
    canonical: 'https://www.elmaginsurance.com/regions/mid-atlantic',
  },
};

export default function MidAtlanticRegionPage() {
  return (
    <div className="bg-white">
      <MidAtlanticAnalytics />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🗽</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mid-Atlantic Region Medicare Coverage</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Specialized Medicare Supplement and Medicare Advantage solutions across New York, Pennsylvania,
              Maryland, New Jersey, and Delaware with local expertise in navigating regional healthcare systems
              and significant cost-saving opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Region Overview */}
      <section id="region-overview" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mid-Atlantic Market Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Mid-Atlantic region presents exceptional opportunities for Medicare beneficiaries, with some
                of the nation's lowest Medicare Supplement penetration rates. In New York, 79% of Medicare
                beneficiaries lack Medigap coverage, while Maryland has less than 30% Medicare Advantage enrollment,
                creating significant gaps in comprehensive coverage.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">42.8M</div>
                  <div className="text-sm text-gray-600">Total Population</div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">21-82%</div>
                  <div className="text-sm text-gray-600">Medicare Advantage Penetration Range</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">5</div>
                  <div className="text-sm text-gray-600">States Covered</div>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">2.3M+</div>
                  <div className="text-sm text-gray-600">Underserved Beneficiaries</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Market Opportunities:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    New York: 79% lack Medicare Supplement coverage - massive opportunity
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Pennsylvania: 74-82% MA penetration in major counties, yet gaps remain
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Maryland: Under 30% MA enrollment - significant growth potential
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Diverse healthcare systems from NYC to rural Pennsylvania
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Specialized expertise in state-specific regulations and pricing
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">State-Specific Highlights</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-state-highlight="NY">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                    🏙️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">New York</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      21% Medigap penetration means 79% of beneficiaries lack coverage. NYC metro, Long Island,
                      Buffalo, Rochester, and Albany present major opportunities. Higher premiums make expert
                      guidance essential.
                    </p>
                    <a href="/medicare-supplement-new-york" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Explore NY Medicare Supplement →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-state-highlight="PA">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl">
                    🔔
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Pennsylvania</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Allegheny County (Pittsburgh) 74% MA penetration, Monroe County (Rochester) 82%.
                      Wide plan selection with 80+ options in major counties. Urban/rural coverage variations.
                    </p>
                    <a href="/medicare-advantage/mid-atlantic" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                      Compare PA Medicare Advantage Plans →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-state-highlight="MD">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
                    🦀
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Maryland</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Under 30% MA penetration - one of only five states this low. Baltimore metro area
                      with Johns Hopkins, University of Maryland networks. Major growth market.
                    </p>
                    <a href="/medicare-advantage/mid-atlantic" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      Discover MD Medicare Options →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-state-highlight="NJ">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-2xl">
                    🏖️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">New Jersey & Delaware</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      NJ: 33% group plan enrollment. DE: Growing retiree population with proximity to
                      major healthcare systems. Competitive pricing and comprehensive networks.
                    </p>
                    <a href="/medicare-advantage/mid-atlantic" className="text-cyan-600 hover:text-cyan-700 text-sm font-medium">
                      View NJ & DE Medicare Plans →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medicare Supplement Opportunity Section */}
      <section id="medigap-opportunity" className="py-16 bg-gradient-to-br from-amber-50 to-orange-50 medigap-opportunity-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Massive Medicare Supplement Opportunity</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Mid-Atlantic region has the lowest Medigap penetration in the nation, with millions of
              beneficiaries lacking comprehensive supplemental coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">New York Market Gap</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">79% lack coverage:</strong> 1.2M+ NYC metro,
                  410K Long Island, 540K Upstate cities
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">$15.78B opportunity:</strong> Annual premium potential
                  across New York alone
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Premium guidance essential - NY has highest costs
                </p>
              </div>
              <a href="/medicare-supplement-nassau-county" className="inline-block mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
                Nassau County Coverage →
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Navigation Expertise</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">NY premiums:</strong> Can differ 40%+ between Manhattan
                  and Buffalo
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">Location matters:</strong> County-specific pricing requires
                  expert guidance
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Save thousands with the right plan choice
                </p>
              </div>
              <a href="/medicare-cost-calculator" className="inline-block mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
                Calculate Your Costs →
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Coverage Gap Protection</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">Original Medicare:</strong> Only covers 80% of approved costs
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">Medigap fills gaps:</strong> Part A/B deductibles,
                  coinsurance, excess charges
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Comprehensive protection with any doctor
                </p>
              </div>
              <a href="/medicare-supplement" className="inline-block mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
                Learn About Medigap →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Grouping */}
      <GeographicGrouping
        serviceType="all"
        currentRegion="mid-atlantic"
        showMarketData={true}
        layout="hierarchical"
        maxItems={20}
      />

      {/* Regional Tools */}
      <ToolLinking
        currentTool=""
        userContext="general"
        showRelatedTools={true}
        maxTools={6}
        showFeatures={true}
        layout="grid"
      />

      {/* Medicare Advantage Market Analysis */}
      <section id="ma-market-analysis" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📈 Medicare Advantage Market Dynamics</h2>
            <p className="text-lg text-gray-600">
              Strategic opportunities in both high and low penetration markets across the Mid-Atlantic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">High Penetration Markets</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Monroe County, NY (Rochester)</span>
                    <span className="text-2xl font-bold text-green-600">82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '82%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Allegheny County, PA (Pittsburgh)</span>
                    <span className="text-2xl font-bold text-green-600">74%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '74%'}}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Established markets with 80+ plan options require expert navigation to find best fit
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Low Penetration Markets</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Maryland Statewide</span>
                    <span className="text-2xl font-bold text-orange-600">&lt;30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">New York Medigap</span>
                    <span className="text-2xl font-bold text-orange-600">21%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '21%'}}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Massive growth opportunities with millions of underserved beneficiaries
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">54%</div>
              <div className="text-sm text-gray-600 mb-2">National MA Enrollment</div>
              <div className="text-xs text-gray-500">Mid-Atlantic varies widely from this average</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-indigo-600 mb-2">$0</div>
              <div className="text-sm text-gray-600 mb-2">Premium MA Plans</div>
              <div className="text-xs text-gray-500">Available in most metropolitan counties</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">80+</div>
              <div className="text-sm text-gray-600 mb-2">Plan Choices</div>
              <div className="text-xs text-gray-500">In major PA counties</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-cyan-600 mb-2">33%</div>
              <div className="text-sm text-gray-600 mb-2">NJ Group Plans</div>
              <div className="text-xs text-gray-500">Employer-sponsored Medicare Advantage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Resources */}
      <ResourceLinking
        currentResource=""
        currentCategory=""
        userContext="general"
        showTools={true}
        maxResources={6}
        maxTools={4}
      />

      {/* State-Specific Value Propositions */}
      <section id="state-values" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Why Choose El-Mag for Mid-Atlantic Medicare Coverage</h2>
            <p className="text-lg text-gray-600">
              Specialized expertise in navigating complex state regulations and maximizing your coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🗽</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">New York Medicare Supplement Expertise</h3>
              <p className="text-sm text-gray-600 mb-3">
                Navigate NY's highest premiums with county-specific guidance. We show you how to get
                comprehensive coverage without overpaying, whether in Manhattan or Buffalo.
              </p>
              <a href="/medicare-supplement-new-york" className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                NY Medicare Guide →
              </a>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🔔</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pennsylvania Medicare Advantage Navigation</h3>
              <p className="text-sm text-gray-600 mb-3">
                With 80+ plan options in major counties, expert guidance is essential. We help you compare
                across Pittsburgh, Philadelphia, and everywhere in between.
              </p>
              <a href="/medicare-comparison-tool" className="text-indigo-600 hover:text-indigo-700 text-xs font-medium">
                Compare Plans →
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🦀</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Maryland Medicare Plan Opportunities</h3>
              <p className="text-sm text-gray-600 mb-3">
                One of the nation's lowest MA penetration markets means you have choices. We connect you
                to Johns Hopkins, University of Maryland, and regional networks.
              </p>
              <a href="/medicare-advantage/mid-atlantic" className="text-purple-600 hover:text-purple-700 text-xs font-medium">
                MD Medicare Plans →
              </a>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🏖️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">New Jersey & Delaware Medicare Coverage</h3>
              <p className="text-sm text-gray-600">
                Competitive pricing with access to major healthcare systems. We specialize in both
                individual and group Medicare Advantage plans.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Medicare Supplement vs Medicare Advantage</h3>
              <p className="text-sm text-gray-600 mb-3">
                Understand when Medigap makes sense vs Medicare Advantage. We provide unbiased guidance
                based on your health, budget, and preferences.
              </p>
              <a href="/resources/medicare-advantage-vs-original" className="text-green-600 hover:text-green-700 text-xs font-medium">
                Learn the Difference →
              </a>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Medicare Education & Enrollment Support</h3>
              <p className="text-sm text-gray-600 mb-3">
                Free educational resources on state regulations, enrollment periods, and coverage options.
                No pressure, just expertise when you need it.
              </p>
              <a href="/medicare-open-enrollment-2025" className="text-orange-600 hover:text-orange-700 text-xs font-medium">
                Enrollment Guide →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Expert Mid-Atlantic Medicare Guidance Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Personalized Medicare Supplement and Medicare Advantage guidance from experts who understand
            your state's unique market. Free consultation, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors text-center inline-block"
            >
              Get Free Coverage Analysis
            </a>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-center inline-block"
            >
              Call 331-343-2584
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            Serving New York, Pennsylvania, Maryland, New Jersey, and Delaware with local expertise since 2015
          </p>
        </div>
      </section>
    </div>
  );
}
