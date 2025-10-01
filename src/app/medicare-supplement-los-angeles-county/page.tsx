import type { Metadata } from 'next';
import GeographicGrouping from '@/components/GeographicGrouping';
import ToolLinking from '@/components/ToolLinking';
import ResourceLinking from '@/components/ResourceLinking';
import LACountyMedigapAnalytics from '@/components/LACountyMedigapAnalytics';

export const metadata: Metadata = {
  title: 'Los Angeles County Medicare Supplement Insurance | Medigap Plans 2025 | El-Mag Insurance',
  description: 'Expert Medicare Supplement (Medigap) guidance for Los Angeles County. Compare plans, save on premiums with California community rating, and get personalized help navigating LA healthcare networks. Serving 1.8M+ Medicare beneficiaries across LA County.',
  keywords: 'Los Angeles Medicare Supplement, LA County Medigap, Medicare Supplement Los Angeles, Medigap LA County, Medicare Supplement insurance California, Los Angeles Medicare plans, LA Medicare coverage, community rating California, Medicare Supplement Plan G Los Angeles',
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-supplement-los-angeles-county',
  },
};

export default function LACountyMedicareSupplementPage() {
  return (
    <div className="bg-white">
      <LACountyMedigapAnalytics />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🌴</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Los Angeles County Medicare Supplement Insurance | Medigap Plans 2025</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Navigate LA County's complex healthcare landscape with expert Medicare Supplement guidance.
              Serving 1.8 million Medicare beneficiaries across Los Angeles with personalized Medigap solutions,
              bilingual support, and California's unique community rating advantage.
            </p>
          </div>
        </div>
      </section>

      {/* LA County Market Overview */}
      <section id="market-overview" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Los Angeles County Medicare Supplement Market Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Los Angeles County is California's largest Medicare market with over 1.8 million beneficiaries,
                yet only 25% have Medicare Supplement coverage—leaving 1.35 million residents without comprehensive
                gap coverage. This represents a $15.78 billion opportunity for beneficiaries to protect themselves
                from out-of-pocket healthcare costs.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">1.8M</div>
                  <div className="text-sm text-gray-600">Medicare Beneficiaries</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">25%</div>
                  <div className="text-sm text-gray-600">Medigap Penetration Rate</div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">1.35M</div>
                  <div className="text-sm text-gray-600">Underserved Beneficiaries</div>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">67+</div>
                  <div className="text-sm text-gray-600">Medicare Plans Available</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Los Angeles County Medicare Supplement Advantages:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    <a href="/medicare-supplement" className="text-blue-600 hover:underline">California community rating</a>: Same price regardless of age
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Access to UCLA Health, Cedars-Sinai, Kaiser, USC without network restrictions
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Nationwide coverage for travel and snowbird residents
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    Bilingual support for LA's diverse Hispanic and Asian communities
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    No prior authorization or referrals needed for specialists
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">LA County Medicare Supplement Healthcare Network Highlights</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                    🏥
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">World-Class LA Medicare Medical Centers</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Access UCLA Health, Cedars-Sinai Medical Center, USC Keck Medicine, City of Hope,
                      Providence Health, and Kaiser Permanente facilities without network restrictions.
                      Medicare Supplement gives you freedom to choose any doctor.
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
                    <h4 className="font-semibold text-gray-900 mb-1">Bilingual Medicare Support</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Spanish, Mandarin, Korean, Armenian, and Vietnamese-speaking agents available.
                      Culturally competent guidance for LA County's diverse communities—48% Hispanic,
                      15% Asian population.
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
                    <h4 className="font-semibold text-gray-900 mb-1">California Medicare Supplement Community Rating Advantage</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      California's unique community rating means Medicare Supplement premiums don't
                      increase with age. Lock in your rate now regardless of whether you're 65 or 85—
                      a major advantage over other states.
                    </p>
                    <div className="flex flex-col gap-1">
                      <a href="/medicare-cost-calculator" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        Calculate Your Savings →
                      </a>
                      <a href="/regions/southwest" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        Compare CA vs Other States →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* California Medigap Opportunity */}
      <section id="medigap-opportunity" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Why 75% of LA County Beneficiaries Miss Medicare Supplement</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Despite having access to world-class healthcare, three-quarters of Los Angeles County
              Medicare beneficiaries lack comprehensive gap coverage, leaving them vulnerable to
              unexpected medical costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Low California Medigap Penetration</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">Only 25% enrolled:</strong> California has one of
                  the lowest Medigap rates in the nation (vs 20.5% national average)
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">1.35M gap:</strong> Over 1.35 million LA County
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
                <a href="/regions/mid-atlantic" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Low Penetration Markets →
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">💵</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Original Medicare Gaps Cost Thousands</h3>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">LA's Premium Healthcare Requires Protection</h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-sm">
                  <strong className="text-gray-900">High-cost market:</strong> UCLA, Cedars-Sinai, USC
                  among nation's most expensive facilities
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">Specialist access:</strong> 20% coinsurance on
                  $500+ specialist visits adds up fast
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Protect yourself from LA's premium healthcare costs
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

          {/* Spotlight: Community Rating */}
          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-xl border-2 border-yellow-200">
            <div className="flex items-start space-x-4">
              <div className="text-5xl">⭐</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">California's Community Rating: A Unique Advantage</h3>
                <p className="text-gray-700 mb-4">
                  Unlike 47 other states that use attained-age or issue-age rating, California requires
                  community rating for Medicare Supplement plans. This means:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-gray-900">Same Premium at Any Age:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      A 65-year-old pays the same as an 85-year-old for the same plan. Your premium
                      doesn't increase as you age.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-gray-900">Enroll Anytime During Medigap OEP:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      No medical questions during your 6-month Medigap Open Enrollment Period (starts
                      when you turn 65 and enroll in Part B).
                    </p>
                  </div>
                </div>
                <a href="/medicare-supplement" className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More About CA Community Rating
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Grouping */}
      <GeographicGrouping
        serviceType="medicare-supplement"
        currentRegion="california"
        showMarketData={true}
        layout="hierarchical"
        maxItems={20}
      />

      {/* Popular LA County Medigap Plans */}
      <section id="popular-plans" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">💎 Most Popular Medicare Supplement Plans in Los Angeles County</h2>
            <p className="text-lg text-gray-600">
              11 Medigap plan types available in LA County—here are the top choices for comprehensive coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
              <div className="text-3xl mb-3">🥇</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Medicare Supplement Plan G</h3>
              <div className="text-sm text-gray-600 mb-4">Most Popular Choice</div>
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
                  Compare All LA Plans →
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
              <strong>Not sure which plan is right for you?</strong> Our Los Angeles Medicare experts
              will compare all 11 Medigap plans available in LA County and recommend the best fit
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

      {/* LA County Subregion Coverage */}
      <section id="subregion-coverage" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🗺️ Medicare Supplement Coverage Across Los Angeles County</h2>
            <p className="text-lg text-gray-600">
              Expert Medigap guidance in all LA County communities—from Downtown LA to Pasadena,
              Santa Monica to Long Beach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Central Los Angeles Medicare Supplement Coverage</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Downtown LA</li>
                <li>• Hollywood</li>
                <li>• Koreatown</li>
                <li>• Silver Lake</li>
                <li>• Echo Park</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Get Local Support →
                </a>
                <a href="/medicare-plan-finder" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Find Your Plan →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">San Fernando Valley Medicare Supplement Plans</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Van Nuys</li>
                <li>• Burbank</li>
                <li>• Glendale</li>
                <li>• Sherman Oaks</li>
                <li>• Northridge</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Valley Medicare Help →
                </a>
                <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Valley Medigap Plans →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">West LA & Beach Cities Medigap Coverage</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Santa Monica</li>
                <li>• Beverly Hills</li>
                <li>• Culver City</li>
                <li>• Marina del Rey</li>
                <li>• Malibu</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Westside Specialists →
                </a>
                <a href="/medicare-comparison-tool" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Compare Westside Plans →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">South Bay & Long Beach Medicare Supplement Options</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Long Beach</li>
                <li>• Torrance</li>
                <li>• Redondo Beach</li>
                <li>• Carson</li>
                <li>• Lakewood</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  South Bay Support →
                </a>
                <a href="/medicare-plan-finder" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Long Beach Plans →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">San Gabriel Valley Medicare Supplement Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Pasadena</li>
                <li>• Alhambra</li>
                <li>• Arcadia</li>
                <li>• Monterey Park</li>
                <li>• Pomona</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  SGV Medicare Experts →
                </a>
                <a href="/medicare-supplement-hispanic-latino-community" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Asian/Hispanic Resources →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Antelope Valley Medigap Plans</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Lancaster</li>
                <li>• Palmdale</li>
                <li>• Quartz Hill</li>
                <li>• Littlerock</li>
                <li>• Acton</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  AV Medicare Help →
                </a>
                <a href="/medicare-cost-calculator" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Calculate AV Savings →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Santa Clarita Valley Medicare Supplement Coverage</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Santa Clarita</li>
                <li>• Valencia</li>
                <li>• Newhall</li>
                <li>• Canyon Country</li>
                <li>• Castaic</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  SCV Specialists →
                </a>
                <a href="/medicare-supplement" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  SCV Medigap Options →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">East LA & Whittier Medicare Supplement Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• East Los Angeles</li>
                <li>• Whittier</li>
                <li>• Montebello</li>
                <li>• Pico Rivera</li>
                <li>• La Habra Heights</li>
              </ul>
              <div className="flex flex-col gap-1 mt-3">
                <a href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  East LA Support →
                </a>
                <a href="/medicare-supplement-hispanic-latino-community" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Recursos en Español →
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

      {/* Why Choose El-Mag for LA County */}
      <section id="why-el-mag" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Why Choose El-Mag Insurance for Los Angeles County Medicare Supplement</h2>
            <p className="text-lg text-gray-600">
              Local expertise, bilingual support, and personalized guidance for LA's diverse Medicare community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">LA Medicare Supplement Healthcare Network Expertise</h3>
              <p className="text-sm text-gray-600 mb-3">
                Deep knowledge of UCLA Health, Cedars-Sinai, USC Keck Medicine, Kaiser, Providence,
                and all major LA County healthcare systems. Navigate complex hospital networks with confidence.
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">Multilingual Medicare Specialists</h3>
              <p className="text-sm text-gray-600 mb-3">
                Spanish, Mandarin, Korean, Armenian, and Vietnamese-speaking agents. Culturally
                competent support for LA's Hispanic (48%), Asian (15%), and diverse communities.
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">California Community Rating Experts</h3>
              <p className="text-sm text-gray-600 mb-3">
                Maximize California's unique community rating advantage. We help you understand
                why CA Medigap premiums work differently than other states and how to lock in
                age-independent rates.
              </p>
              <div className="flex flex-col gap-1">
                <a href="/medicare-cost-calculator" className="text-indigo-600 hover:text-indigo-700 text-xs font-medium">
                  Calculate CA Savings →
                </a>
                <a href="/medicare-comparison-tool" className="text-indigo-600 hover:text-indigo-700 text-xs font-medium">
                  Compare Community Rates →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">All LA County Medicare Supplement Communities Served</h3>
              <p className="text-sm text-gray-600 mb-3">
                From Downtown to Malibu, Pasadena to Long Beach—local support across all 88
                incorporated cities in Los Angeles County. Virtual and in-person consultations available.
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
                No pressure, education-focused approach. We explain all 11 Medigap plan types,
                community rating, and help you make informed decisions about your healthcare coverage.
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Expert Los Angeles County Medicare Supplement Guidance Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 1.8 million LA County Medicare beneficiaries who deserve comprehensive coverage.
            Free consultation, bilingual support (English/Spanish/Mandarin/Korean/Armenian/Vietnamese),
            and no-pressure guidance from local LA Medicare experts.
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
            Serving all 88 cities in Los Angeles County | Se Habla Español | 我們說中文 | 한국어 가능 | Խոսում ենք հայերեն | Chúng tôi nói tiếng Việt
          </p>
        </div>
      </section>
    </div>
  );
}
