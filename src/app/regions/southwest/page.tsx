import type { Metadata } from 'next';
import GeographicGrouping from '@/components/GeographicGrouping';
import ToolLinking from '@/components/ToolLinking';
import ResourceLinking from '@/components/ResourceLinking';
import SouthwestAnalytics from '@/components/SouthwestAnalytics';

export const metadata: Metadata = {
  title: 'Southwest Region Medicare & Health Insurance | Arizona, Nevada, New Mexico | El-Mag Insurance',
  description: 'Expert Medicare Advantage and Medicare Supplement guidance in the Southwest. Serving Arizona, Nevada, and New Mexico with specialized desert healthcare networks, competitive rates, and bilingual support.',
  keywords: 'Southwest Medicare, Arizona Medicare, Nevada Medicare, New Mexico Medicare, Phoenix Medicare Advantage, Las Vegas Medicare, Albuquerque Medicare Supplement, desert healthcare, Southwest health insurance, bilingual Medicare support',
  alternates: {
    canonical: 'https://www.elmaginsurance.com/regions/southwest',
  },
};

export default function SouthwestRegionPage() {
  return (
    <div className="bg-white">
      <SouthwestAnalytics />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🌵</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Southwest Region Medicare Advantage & Medicare Supplement Coverage</h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Specialized Medicare Advantage and Medicare Supplement solutions across Arizona, Nevada,
              and New Mexico with expert knowledge of desert healthcare systems, bilingual support,
              and competitive rates tailored to the Southwest lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Region Overview */}
      <section id="region-overview" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Southwest Medicare Market Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Southwest region leads the nation in Medicare Advantage adoption, with Arizona at 54%,
                Nevada at 56%, and New Mexico at 53% penetration—all above the 54% national average.
                This robust competitive market offers beneficiaries extensive plan choices with specialized
                networks designed for the unique healthcare needs of desert communities.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-1">7.2M</div>
                  <div className="text-sm text-gray-600">Total Population</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-1">53-56%</div>
                  <div className="text-sm text-gray-600">Medicare Advantage Penetration</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">States Covered</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">25%+</div>
                  <div className="text-sm text-gray-600">Hispanic/Latino Population</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Southwest Medicare Advantages:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    Arizona: 54% MA adoption with Banner, HonorHealth, Mayo Clinic networks
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    Nevada: 56% penetration - highest in Southwest, strong Las Vegas market
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    New Mexico: 53% adoption with Presbyterian, Lovelace healthcare systems
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    Bilingual support for 25%+ Hispanic/Latino population
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    Desert-specific wellness programs and specialized care
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">State-Specific Medicare Healthcare Highlights</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-state-highlight="AZ">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                    🏜️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Arizona Medicare Options</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      54% MA penetration. Phoenix metro with Banner, HonorHealth, Mayo Clinic Phoenix.
                      Tucson with TMC Healthcare, Banner UMC. Strong snowbird coverage options and
                      bilingual Spanish support.
                    </p>
                    <a href="/medicare-advantage/southwest" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                      Explore AZ Medicare Options →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-state-highlight="NV">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-2xl">
                    🎰
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Nevada Medicare Coverage</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      56% MA penetration - Southwest leader. Las Vegas metro with Valley Health,
                      Dignity Health, UMC. Reno with Renown Health. Extensive $0 premium plan
                      options and 24/7 telemedicine.
                    </p>
                    <a href="/medicare-advantage/southwest" className="text-red-600 hover:text-red-700 text-sm font-medium">
                      Compare NV Medicare Plans →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-state-highlight="NM">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
                    🌄
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">New Mexico Medicare Plans</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      53% MA penetration. Albuquerque with Presbyterian, Lovelace, UNM Health.
                      Santa Fe regional coverage. Strong cultural competency for Native American
                      and Hispanic communities.
                    </p>
                    <a href="/medicare-advantage/southwest" className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                      View NM Medicare Coverage →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medicare Advantage Leadership Section */}
      <section id="ma-leadership" className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🏆 Southwest Medicare Advantage Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Southwest region leads the nation in Medicare Advantage adoption, offering beneficiaries
              unparalleled choice, competitive pricing, and specialized desert healthcare solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nevada Medicare Advantage Market Leadership</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">56% MA penetration:</strong> Tied for highest
                  in Southwest, above national average
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">Las Vegas dominance:</strong> 100+ plan options
                  in Clark County
                </p>
                <p className="text-sm text-orange-600 font-semibold">
                  Most competitive Medicare market in the region
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a href="/medicare-comparison-tool" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                  Compare NV Plans →
                </a>
                <a href="/medicare-advantage/southwest" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                  Nevada Medicare Advantage →
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">$0 Premium Medicare Advantage Plan Abundance</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">Competitive pricing:</strong> 60%+ of plans
                  available at $0 premium
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">Extra benefits:</strong> Dental, vision, hearing,
                  fitness included
                </p>
                <p className="text-sm text-orange-600 font-semibold">
                  Save thousands while gaining comprehensive coverage
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a href="/medicare-cost-calculator" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                  Calculate Your Savings →
                </a>
                <a href="/medicare-advantage/plans" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                  View $0 Premium Plans →
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Desert Medicare Healthcare Networks</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">Specialized care:</strong> Mayo Clinic, Banner,
                  HonorHealth, Valley Health
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">Climate-adapted:</strong> Heat illness prevention,
                  wellness programs
                </p>
                <p className="text-sm text-orange-600 font-semibold">
                  Networks designed for Southwest lifestyle
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <a href="/medicare-advantage/southwest" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                  Explore Desert Networks →
                </a>
                <a href="/medicare-plan-finder" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                  Find Your Network →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Grouping */}
      <GeographicGrouping
        serviceType="all"
        currentRegion="southwest"
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

      {/* State Market Analysis */}
      <section id="state-market-analysis" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📈 Southwest State Medicare Markets</h2>
            <p className="text-lg text-gray-600">
              Comprehensive market analysis across Arizona, Nevada, and New Mexico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Arizona Medicare Market</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Medicare Advantage</span>
                    <span className="text-2xl font-bold text-orange-600">54%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '54%'}}></div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Major Markets:</strong> Phoenix, Tucson, Mesa, Scottsdale</p>
                  <p><strong>Top Networks:</strong> Banner Health, HonorHealth, Mayo Clinic</p>
                  <p><strong>Plan Count:</strong> 80+ in Maricopa County</p>
                  <p><strong>Specialties:</strong> Snowbird coverage, bilingual support</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nevada Medicare Market</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Medicare Advantage</span>
                    <span className="text-2xl font-bold text-red-600">56%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{width: '56%'}}></div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Major Markets:</strong> Las Vegas, Henderson, Reno, Sparks</p>
                  <p><strong>Top Networks:</strong> Valley Health, Dignity Health, Renown</p>
                  <p><strong>Plan Count:</strong> 100+ in Clark County</p>
                  <p><strong>Specialties:</strong> $0 premiums, 24/7 telemedicine</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">New Mexico Medicare Market</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Medicare Advantage</span>
                    <span className="text-2xl font-bold text-amber-600">53%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{width: '53%'}}></div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Major Markets:</strong> Albuquerque, Santa Fe, Las Cruces</p>
                  <p><strong>Top Networks:</strong> Presbyterian, Lovelace, UNM Health</p>
                  <p><strong>Plan Count:</strong> 50+ in Bernalillo County</p>
                  <p><strong>Specialties:</strong> Cultural competency, Native American care</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">54%</div>
              <div className="text-sm text-gray-600 mb-2">National MA Average</div>
              <div className="text-xs text-gray-500">Southwest at or above this benchmark</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">60%+</div>
              <div className="text-sm text-gray-600 mb-2">$0 Premium Plans</div>
              <div className="text-xs text-gray-500">Majority of Southwest plans no monthly cost</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-amber-600 mb-2">100+</div>
              <div className="text-sm text-gray-600 mb-2">Plan Choices</div>
              <div className="text-xs text-gray-500">In major metro areas</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-yellow-600 mb-2">25%</div>
              <div className="text-sm text-gray-600 mb-2">Hispanic Population</div>
              <div className="text-xs text-gray-500">Bilingual support essential</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Why Choose El-Mag for Southwest Medicare Coverage</h2>
            <p className="text-lg text-gray-600">
              Specialized expertise in desert healthcare, bilingual support, and Southwest lifestyle considerations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🏜️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Arizona Medicare Advantage Expertise</h3>
              <p className="text-sm text-gray-600 mb-3">
                Navigate 80+ plan options in Maricopa County with expert guidance on Banner, HonorHealth,
                and Mayo Clinic networks. Specialized snowbird coverage and year-round support.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-advantage/southwest" className="text-orange-600 hover:text-orange-700 text-xs font-medium">
                  Arizona Medicare Plans →
                </a>
                <a href="/medicare-comparison-tool" className="text-orange-600 hover:text-orange-700 text-xs font-medium">
                  Compare AZ Plans →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🎰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nevada Medicare Advantage Plan Navigation</h3>
              <p className="text-sm text-gray-600 mb-3">
                Compare 100+ Las Vegas Medicare Advantage plans to find the perfect match.
                Expert knowledge of Valley Health, Dignity Health, and Renown networks.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-comparison-tool" className="text-red-600 hover:text-red-700 text-xs font-medium">
                  Compare 100+ NV Plans →
                </a>
                <a href="/medicare-plan-finder" className="text-red-600 hover:text-red-700 text-xs font-medium">
                  Find Las Vegas Plans →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🌄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">New Mexico Medicare Coverage Options</h3>
              <p className="text-sm text-gray-600 mb-3">
                Cultural competency for Native American and Hispanic communities. Deep knowledge of
                Presbyterian, Lovelace, and UNM Health systems.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-advantage/southwest" className="text-amber-600 hover:text-amber-700 text-xs font-medium">
                  New Mexico Medicare Plans →
                </a>
                <a href="/medicare-supplement-hispanic-latino-community" className="text-amber-600 hover:text-amber-700 text-xs font-medium">
                  Hispanic/Latino Medicare →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🌡️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Desert Medicare Health Specialization</h3>
              <p className="text-sm text-gray-600 mb-3">
                Plans with heat illness prevention, hydration programs, and climate-adapted wellness.
                Understanding unique Southwest healthcare needs.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-advantage/southwest" className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                  Desert Health Programs →
                </a>
                <a href="/medicare-advantage/plans" className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                  View Wellness Plans →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🗣️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bilingual Medicare Support</h3>
              <p className="text-sm text-gray-600 mb-3">
                Spanish-speaking agents and culturally competent guidance for the 25%+ Hispanic/Latino
                population. Serving diverse Southwest communities.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/contact" className="text-green-600 hover:text-green-700 text-xs font-medium">
                  Hable con un Experto →
                </a>
                <a href="/medicare-supplement-hispanic-latino-community" className="text-green-600 hover:text-green-700 text-xs font-medium">
                  Guía en Español →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🏖️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Snowbird & Retiree Medicare Specialists</h3>
              <p className="text-sm text-gray-600 mb-3">
                Multi-state coverage guidance for part-time residents. Understanding Arizona snowbird
                seasons and flexible coverage needs.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-supplement" className="text-purple-600 hover:text-purple-700 text-xs font-medium">
                  Snowbird Medicare Options →
                </a>
                <a href="/medicare-plan-finder" className="text-purple-600 hover:text-purple-700 text-xs font-medium">
                  Multi-State Coverage →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Expert Southwest Medicare Advantage & Supplement Guidance Today</h2>
          <p className="text-xl text-orange-100 mb-8">
            Personalized Medicare Advantage and Medicare Supplement guidance from Southwest specialists
            who understand desert healthcare, bilingual needs, and regional lifestyle. Free consultation,
            no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-700 font-semibold py-3 px-8 rounded-lg hover:bg-orange-50 transition-colors text-center inline-block"
            >
              Get Free Plan Comparison
            </a>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-orange-700 transition-colors text-center inline-block"
            >
              Call 331-343-2584
            </a>
          </div>
          <p className="text-sm text-orange-200 mt-6">
            Serving Arizona, Nevada, and New Mexico with local Southwest expertise since 2015 | Se Habla Español
          </p>
        </div>
      </section>
    </div>
  );
}
