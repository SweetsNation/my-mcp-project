import type { Metadata } from 'next';
import GeographicGrouping from '@/components/GeographicGrouping';
import ToolLinking from '@/components/ToolLinking';
import ResourceLinking from '@/components/ResourceLinking';

export const metadata: Metadata = {
  title: 'Southeast Region Medicare & Health Insurance | Florida, Georgia, Alabama, South Carolina | El-Mag Insurance',
  description: 'Comprehensive Medicare and health insurance coverage in the Southeast region including Florida, Georgia, Alabama, and South Carolina. Get local market insights and enrollment data.',
  keywords: 'Southeast Medicare, Florida Medicare, Georgia Medicare, Alabama Medicare, South Carolina Medicare, Southeast health insurance, regional coverage',
};

export default function SoutheastRegionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🌴</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Southeast Region Coverage</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Comprehensive Medicare and health insurance solutions across the Southeastern United States, 
              serving Florida, Georgia, Alabama, and South Carolina with local expertise and market insights.
            </p>
          </div>
        </div>
      </section>

      {/* Region Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Southeast Market Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Southeast region represents one of the fastest-growing Medicare markets in the United States, 
                with a diverse population and unique healthcare needs. Our coverage spans from the beaches of 
                Florida to the mountains of Georgia and Alabama.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">45.2M</div>
                  <div className="text-sm text-gray-600">Total Population</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">58.2%</div>
                  <div className="text-sm text-gray-600">Avg Medicare Advantage Penetration</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">4</div>
                  <div className="text-sm text-gray-600">States Covered</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-1">12+</div>
                  <div className="text-sm text-gray-600">Major Counties</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Market Characteristics:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    High retiree population with growing Medicare enrollment
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Diverse healthcare networks and provider options
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Competitive Medicare Advantage market with multiple carriers
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Strong Medicare Supplement market in Texas and other states
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Growing ACA Marketplace enrollment with subsidy opportunities
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Regional Highlights</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                    🌞
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Florida</h4>
                    <p className="text-sm text-gray-600">
                      Highest Medicare Advantage penetration in the region with diverse retiree population 
                      and comprehensive healthcare networks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-2xl">
                    🍑
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Georgia</h4>
                    <p className="text-sm text-gray-600">
                      Atlanta metro area with major healthcare systems and growing Medicare enrollment 
                      in suburban areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                    🏛️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Alabama</h4>
                    <p className="text-sm text-gray-600">
                      Growing Medicare market with opportunities in rural areas and major metro regions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                    🌊
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">South Carolina</h4>
                    <p className="text-sm text-gray-600">
                      Coastal and inland markets with diverse healthcare options and growing retiree population.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Grouping */}
      <GeographicGrouping 
        serviceType="all"
        currentRegion="southeast"
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

      {/* Regional Resources */}
      <ResourceLinking 
        currentResource=""
        currentCategory=""
        userContext="general"
        showTools={true}
        maxResources={6}
        maxTools={4}
      />

      {/* Regional Market Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📊 Southeast Market Analysis</h2>
            <p className="text-lg text-gray-600">
              Detailed insights into Medicare and health insurance trends across the Southeast region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">58.2%</div>
              <div className="text-sm text-gray-600 mb-2">Average Medicare Advantage Penetration</div>
              <div className="text-xs text-gray-500">Above national average of 45.3%</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">$0</div>
              <div className="text-sm text-gray-600 mb-2">Premium Plans Available</div>
              <div className="text-xs text-gray-500">In 85% of counties</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.1</div>
              <div className="text-sm text-gray-600 mb-2">Average Star Rating</div>
              <div className="text-xs text-gray-500">Across all plans</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">42</div>
              <div className="text-sm text-gray-600 mb-2">Average Competitors</div>
              <div className="text-xs text-gray-500">Per county</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Southeast Coverage?</h2>
          <p className="text-xl text-green-100 mb-8">
            Get personalized guidance for Medicare and health insurance options in your specific area of the Southeast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-green-50 transition-colors text-center inline-block"
            >
              Get Southeast Coverage Quote
            </a>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors text-center inline-block"
            >
              Call 331-343-2584
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
