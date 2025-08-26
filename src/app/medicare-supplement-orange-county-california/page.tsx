import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Orange County Medicare Supplement Plans 2025 - Premium SoCal Medigap Coverage | El-Mag Insurance',
  description: 'Orange County Medicare Supplement guide: Navigate Southern California\'s premium healthcare market with world-class medical facilities and Medicare coverage for 500,000+ beneficiaries.',
  keywords: 'Orange County Medicare Supplement, SoCal Medigap, Anaheim Medicare plans, Irvine Medicare insurance, Newport Beach Medicare Supplement, Orange County seniors',
  openGraph: {
    title: 'Orange County Medicare Supplement - Premium SoCal Coverage',
    description: 'Comprehensive Medicare Supplement coverage for Orange County\'s 500,000+ beneficiaries with Southern California healthcare expertise.',
    type: 'article',
    locale: 'en_US',
  },
}

const orangeCountyStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://el-mag.com/medicare-supplement-orange-county-california',
  name: 'Orange County California Medicare Supplement Plans',
  description: 'Comprehensive Medicare Supplement insurance guide for Orange County, California residents',
  url: 'https://el-mag.com/medicare-supplement-orange-county-california',
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
    name: 'Orange County, California',
    containedInPlace: {
      '@type': 'State',
      name: 'California'
    }
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Orange County Medicare beneficiaries'
  }
}

export default function OrangeCountyMedicareSupplementPage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orangeCountyStructuredData)
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🏖️ ORANGE COUNTY: Premium SoCal Medicare Coverage</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Orange County Medicare Supplement Plans: Southern California's Premier Healthcare Access
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">🏥</span>
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-semibold text-blue-800 mb-2">
                  Orange County: Southern California Healthcare Excellence
                </h2>
                <p className="text-blue-700">
                  With <strong>500,000+ Medicare beneficiaries</strong> and access to world-renowned healthcare facilities 
                  like UCI Medical Center, Hoag Hospital, and easy access to Cedars-Sinai, Orange County represents 
                  California's premier Medicare market. Despite CA's community rating advantage, only 25% have Medicare 
                  Supplement coverage - leaving 375,000 beneficiaries vulnerable to coverage gaps.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500K+</div>
              <div className="text-blue-800 font-semibold">Medicare beneficiaries</div>
              <div className="text-blue-600 text-sm mt-1">SoCal's largest county</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
              <div className="text-green-800 font-semibold">Medigap penetration</div>
              <div className="text-green-600 text-sm mt-1">75% underserved</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$185</div>
              <div className="text-purple-800 font-semibold">Avg monthly premium</div>
              <div className="text-purple-600 text-sm mt-1">Community rating</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">375K</div>
              <div className="text-orange-800 font-semibold">Unprotected seniors</div>
              <div className="text-orange-600 text-sm mt-1">Massive opportunity</div>
            </div>
          </div>
        </div>

        {/* Orange County Healthcare Excellence */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Orange County Healthcare Excellence</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🌟 World-Class Medical Facilities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>UCI Medical Center:</strong> Level 1 trauma center, academic medical center</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Hoag Hospital Newport Beach:</strong> Magnet-designated, cardiac excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Children's Hospital of Orange County (CHOC):</strong> Pediatric specialty care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Kaiser Permanente Anaheim:</strong> Integrated care model</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>St. Joseph Hospital Orange:</strong> Comprehensive acute care</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">🎯 Orange County Advantages</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🌊</span>
                  <span><strong>Coastal Healthcare Hub:</strong> Premium facilities in beautiful setting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🚗</span>
                  <span><strong>LA Access:</strong> Easy access to Cedars-Sinai, UCLA, USC medical centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💰</span>
                  <span><strong>High Net Worth Demographics:</strong> Can afford premium coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏖️</span>
                  <span><strong>Active Lifestyle:</strong> Health-conscious senior population</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">👨‍⚕️</span>
                  <span><strong>Specialist Concentration:</strong> Highest physician density in CA</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">🏖️ Southern California Healthcare Value:</h4>
            <p className="text-blue-700">
              Orange County combines world-class healthcare with California's community rating advantage, 
              making Medicare Supplement coverage exceptionally valuable. With premium facilities like UCI 
              Medical Center and Hoag Hospital, plus easy access to Los Angeles medical centers, Medigap 
              coverage maximizes your access to Southern California's exceptional healthcare ecosystem.
            </p>
          </div>
        </section>

        {/* Orange County Communities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏙️ Orange County Medicare Communities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Anaheim-Santa Ana-Irvine</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Medicare Pop:</strong> 180,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Diverse, mixed income</div>
                <div><strong>Healthcare:</strong> Multiple health systems</div>
                <div><strong>Opportunity:</strong> Massive underserved market</div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Newport Beach-Irvine</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Medicare Pop:</strong> 85,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> High income, educated</div>
                <div><strong>Healthcare:</strong> Premium facilities</div>
                <div><strong>Opportunity:</strong> Comprehensive plan demand</div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Huntington Beach</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Medicare Pop:</strong> 45,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Middle-upper income</div>
                <div><strong>Healthcare:</strong> Coastal community access</div>
                <div><strong>Opportunity:</strong> Beach community lifestyle</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">Mission Viejo-Laguna Niguel</h3>
              <div className="space-y-2 text-yellow-700 text-sm">
                <div><strong>Medicare Pop:</strong> 55,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Affluent retirees</div>
                <div><strong>Healthcare:</strong> South County medical</div>
                <div><strong>Opportunity:</strong> Premium coverage preference</div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">Fullerton-Brea</h3>
              <div className="space-y-2 text-indigo-700 text-sm">
                <div><strong>Medicare Pop:</strong> 35,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Middle income, suburban</div>
                <div><strong>Healthcare:</strong> North County access</div>
                <div><strong>Opportunity:</strong> Value-conscious market</div>
              </div>
            </div>
            
            <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-3">Costa Mesa-Fountain Valley</h3>
              <div className="space-y-2 text-pink-700 text-sm">
                <div><strong>Medicare Pop:</strong> 30,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Urban professionals</div>
                <div><strong>Healthcare:</strong> Central OC medical hub</div>
                <div><strong>Opportunity:</strong> Professional retirees</div>
              </div>
            </div>
          </div>
        </section>

        {/* California Community Rating Advantage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🎯 California Community Rating Advantage</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">How Community Rating Benefits Orange County Residents</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-green-700 mb-4">🎂 Age-Based Savings</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between bg-white p-3 rounded">
                    <span>Age 65-69:</span>
                    <span className="font-semibold text-green-600">$185/month</span>
                  </div>
                  <div className="flex justify-between bg-white p-3 rounded">
                    <span>Age 70-74:</span>
                    <span className="font-semibold text-green-600">$185/month</span>
                  </div>
                  <div className="flex justify-between bg-white p-3 rounded">
                    <span>Age 75-79:</span>
                    <span className="font-semibold text-green-600">$185/month</span>
                  </div>
                  <div className="flex justify-between bg-white p-3 rounded">
                    <span>Age 80+:</span>
                    <span className="font-semibold text-green-600">$185/month</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 mb-4">💡 Community Rating Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>No age-based premium increases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Predictable lifetime costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Gender equality in pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Health status protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Fair premium distribution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cost-Benefit Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Orange County Medicare Supplement Value</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">Light Healthcare Year</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Medicare Advantage</span>
                  <span className="font-semibold">$1,800/year</span>
                </div>
                <div className="flex justify-between">
                  <span>OC Medigap Plan G</span>
                  <span className="font-semibold">$2,220/year</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-green-800 font-semibold">
                    <span>MA Advantage:</span>
                    <span>$420</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-4">Moderate Care Year</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Medicare Advantage</span>
                  <span className="font-semibold">$7,500/year</span>
                </div>
                <div className="flex justify-between">
                  <span>OC Medigap Plan G</span>
                  <span className="font-semibold">$2,460/year</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-yellow-800 font-semibold">
                    <span>Medigap Saves:</span>
                    <span>$5,040</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-4">Serious Illness Year</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Medicare Advantage</span>
                  <span className="font-semibold">$13,800/year</span>
                </div>
                <div className="flex justify-between">
                  <span>OC Medigap Plan G</span>
                  <span className="font-semibold">$2,460/year</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-red-800 font-semibold">
                    <span>Medigap Saves:</span>
                    <span>$11,340</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🏖️ Get Expert Orange County Medicare Guidance</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Navigate Orange County's premium healthcare market with comprehensive Medicare Supplement coverage. 
              Get personalized Southern California Medicare expertise from licensed California specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                🏖️ Get Orange County Quote
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📞 Call SoCal Expert
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}