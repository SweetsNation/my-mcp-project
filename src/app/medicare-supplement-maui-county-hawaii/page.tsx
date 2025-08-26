import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Maui County Medicare Supplement Plans 2025 - Hawaii Island Medigap Coverage | El-Mag Insurance',
  description: 'Maui County Medicare Supplement guide: Navigate remote island healthcare challenges with nationwide coverage for Maui, Molokai, and Lanai Medicare beneficiaries.',
  keywords: 'Maui Medicare Supplement, Hawaii Medigap, Maui Island Medicare plans, Molokai Medicare insurance, Lanai Medicare Supplement, Hawaii remote coverage',
  openGraph: {
    title: 'Maui County Medicare Supplement - Island Healthcare Freedom',
    description: 'Comprehensive Medicare Supplement coverage for Maui County\'s unique healthcare challenges with mainland access.',
    type: 'article',
    locale: 'en_US',
  },
}

const mauiCountyStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://el-mag.com/medicare-supplement-maui-county-hawaii',
  name: 'Maui County Hawaii Medicare Supplement Plans',
  description: 'Comprehensive Medicare Supplement insurance guide for Maui County, Hawaii residents',
  url: 'https://el-mag.com/medicare-supplement-maui-county-hawaii',
  about: {
    '@type': 'FinancialProduct',
    name: 'Medicare Supplement Insurance',
    category: 'Health Insurance',
    provider: {
      '@type': 'Organization',
      name: 'El-Mag Insurance'
    }
  },
  geo: {
    '@type': 'AdministrativeArea',
    name: 'Maui County, Hawaii',
    containedInPlace: {
      '@type': 'State',
      name: 'Hawaii'
    }
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Maui County Medicare beneficiaries'
  }
}

export default function MauiCountyMedicareSupplementPage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mauiCountyStructuredData)
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🌺 MAUI COUNTY: Island Healthcare Freedom</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Maui County Medicare Supplement Plans: Breaking Island Healthcare Barriers
          </h1>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">🏝️</span>
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-semibold text-orange-800 mb-2">
                  Maui County: Unique Healthcare Challenge
                </h2>
                <p className="text-orange-700">
                  With <strong>35,000+ Medicare beneficiaries</strong> spread across Maui, Molokai, and Lanai, 
                  Maui County faces Hawaii's most challenging healthcare access situation. Only 9% statewide 
                  penetration means <strong>32,000+ islanders lack comprehensive coverage</strong> - critical 
                  when specialized care requires expensive mainland travel.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">35K+</div>
              <div className="text-blue-800 font-semibold">Medicare beneficiaries</div>
              <div className="text-blue-600 text-sm mt-1">Multi-island county</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">9%</div>
              <div className="text-orange-800 font-semibold">Hawaii penetration</div>
              <div className="text-orange-600 text-sm mt-1">Lowest in nation</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$95</div>
              <div className="text-purple-800 font-semibold">Avg monthly premium</div>
              <div className="text-purple-600 text-sm mt-1">Best national value</div>
            </div>
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">32K</div>
              <div className="text-red-800 font-semibold">Underserved seniors</div>
              <div className="text-red-600 text-sm mt-1">Critical need</div>
            </div>
          </div>
        </div>

        {/* Maui County Healthcare Reality */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Maui County Healthcare Reality</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🏥 Local Healthcare Infrastructure</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Maui Memorial Medical Center:</strong> County's only full-service hospital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">⚠️</span>
                  <span><strong>Limited Specialists:</strong> Most require Oahu referral</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>No Cardiac Surgery:</strong> Emergency flights to Honolulu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span><strong>No Neurosurgery:</strong> Mainland referrals common</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">📍</span>
                  <span><strong>Molokai & Lanai:</strong> Critical access hospitals only</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-4">⚠️ Healthcare Access Challenges</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✈️</span>
                  <span><strong>Mainland Medical Travel:</strong> $2,000-5,000 per trip</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🌊</span>
                  <span><strong>Inter-Island Transport:</strong> Weather-dependent access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">💰</span>
                  <span><strong>Network Restrictions:</strong> MA plans limit off-island care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⏰</span>
                  <span><strong>Emergency Delays:</strong> Weather can delay critical care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🏨</span>
                  <span><strong>Lodging Costs:</strong> Family accommodation during treatment</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-orange-50 border-l-4 border-orange-400 p-6 rounded">
            <h4 className="font-semibold text-orange-800 mb-2">🌺 Why Medigap is Critical for Maui County:</h4>
            <p className="text-orange-700">
              Maui County's geographic isolation makes Medicare Supplement coverage essential. When local care 
              isn't available, beneficiaries need the freedom to access any Medicare provider nationwide - 
              whether it's The Queen's Medical Center in Honolulu, or specialized treatment at mainland facilities 
              like UCLA or Mayo Clinic. Medicare Advantage network restrictions can be life-threatening when 
              you're 2,400 miles from the nearest advanced medical center.
            </p>
          </div>
        </section>

        {/* Island Community Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏝️ Maui County Island Communities</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">🌺 Island of Maui</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Medicare Pop:</strong> 28,000+ beneficiaries</div>
                <div><strong>Healthcare:</strong> Maui Memorial Medical Center</div>
                <div><strong>Challenge:</strong> Limited specialty care</div>
                <div><strong>Demographics:</strong> Mix of locals and mainland retirees</div>
                <div><strong>Opportunity:</strong> High mainland medical travel needs</div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">🏞️ Molokai</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Medicare Pop:</strong> 2,500+ beneficiaries</div>
                <div><strong>Healthcare:</strong> Molokai General Hospital</div>
                <div><strong>Challenge:</strong> Critical access hospital only</div>
                <div><strong>Demographics:</strong> Native Hawaiian majority</div>
                <div><strong>Opportunity:</strong> Most underserved population</div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">🍍 Lanai</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Medicare Pop:</strong> 800+ beneficiaries</div>
                <div><strong>Healthcare:</strong> Lanai Community Health Center</div>
                <div><strong>Challenge:</strong> No hospital, emergency airlift</div>
                <div><strong>Demographics:</strong> Small, close-knit community</div>
                <div><strong>Opportunity:</strong> Complete mainland dependence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Travel Cost Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">✈️ Medical Travel Cost Reality</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-4">Oahu Medical Trip</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Round-trip flights (2 people)</span>
                  <span className="font-semibold">$800</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel (5 nights)</span>
                  <span className="font-semibold">$750</span>
                </div>
                <div className="flex justify-between">
                  <span>Rental car & meals</span>
                  <span className="font-semibold">$450</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-yellow-800 font-semibold">
                    <span>Total Cost:</span>
                    <span>$2,000</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-4">Mainland Specialist Trip</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Round-trip flights (2 people)</span>
                  <span className="font-semibold">$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel (7 nights)</span>
                  <span className="font-semibold">$1,400</span>
                </div>
                <div className="flex justify-between">
                  <span>Transportation & meals</span>
                  <span className="font-semibold">$800</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-orange-800 font-semibold">
                    <span>Total Cost:</span>
                    <span>$3,400</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-4">Extended Treatment</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Multiple trips (3x/year)</span>
                  <span className="font-semibold">$3,600</span>
                </div>
                <div className="flex justify-between">
                  <span>Extended stay lodging</span>
                  <span className="font-semibold">$2,100</span>
                </div>
                <div className="flex justify-between">
                  <span>Additional expenses</span>
                  <span className="font-semibold">$1,200</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-red-800 font-semibold">
                    <span>Annual Cost:</span>
                    <span>$6,900</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h4 className="font-semibold text-green-800 mb-3">💰 Medicare Supplement Value for Island Residents</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-green-700 mb-2">Annual Costs Without Medigap:</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Medicare Advantage premium: $600</li>
                  <li>• Medical travel costs: $3,400</li>
                  <li>• Out-of-pocket maximums: $8,300</li>
                  <li>• Network restriction delays: Priceless</li>
                  <li className="font-semibold pt-2 border-t">Total Risk: $12,300+</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-2">Annual Costs With Medigap Plan G:</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Medigap premium: $1,140</li>
                  <li>• Medicare Part B deductible: $240</li>
                  <li>• Medical travel costs: Same</li>
                  <li>• Provider freedom: Any Medicare doctor</li>
                  <li className="font-semibold pt-2 border-t text-green-600">Total Cost: $1,380</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Preparedness */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🌪️ Emergency Preparedness & Healthcare Access</h2>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-red-800 mb-3">Natural Disaster Healthcare Considerations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-red-700 mb-2">Hurricane/Tsunami Risks:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Airport closures preventing medical evacuation</li>
                  <li>• Power outages affecting medical equipment</li>
                  <li>• Supply chain disruptions for medications</li>
                  <li>• Damaged healthcare facilities</li>
                  <li>• Limited emergency medical resources</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-red-700 mb-2">Medigap Emergency Benefits:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Coverage anywhere Medicare is accepted</li>
                  <li>• No network restrictions during emergencies</li>
                  <li>• Mainland evacuation coverage</li>
                  <li>• Temporary relocation healthcare access</li>
                  <li>• Unlimited provider choice for ongoing care</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🌺 Get Expert Maui County Medicare Guidance</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Navigate Maui County's unique healthcare challenges with comprehensive Medicare Supplement coverage. 
              Get personalized island Medicare expertise from licensed Hawaii specialists who understand remote healthcare access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                🌺 Get Maui County Quote
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📞 Call Hawaii Expert
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Free consultation • Licensed Hawaii agents • Island healthcare specialists
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}