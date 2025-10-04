import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nassau County Medicare Supplement Plans 2025 - Long Island Medigap Coverage | El-Mag Insurance',
  description: 'Nassau County Medicare Supplement guide: Navigate Long Island\'s unique healthcare market with premium medical facilities and Medicare coverage options for 240,000+ beneficiaries.',
  keywords: 'Nassau County Medicare Supplement, Long Island Medigap, Nassau Medicare plans, Hempstead Medicare, Oyster Bay Medicare insurance, North Shore Medicare Supplement',
  openGraph: {
    title: 'Nassau County Medicare Supplement - Long Island Coverage',
    description: 'Comprehensive Medicare Supplement coverage for Nassau County\'s 240,000+ beneficiaries with Long Island healthcare expertise.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-supplement-nassau-county',
  },
}

const nassauStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://el-mag.com/medicare-supplement-nassau-county',
  name: 'Nassau County Medicare Supplement Plans',
  description: 'Comprehensive Medicare Supplement insurance guide for Nassau County, Long Island residents',
  url: 'https://el-mag.com/medicare-supplement-nassau-county',
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
    name: 'Nassau County, New York',
    containedInPlace: {
      '@type': 'State',
      name: 'New York'
    }
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Nassau County Medicare beneficiaries'
  }
}

export default function NassauCountyMedicareSupplementPage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nassauStructuredData)
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🏝️ NASSAU COUNTY: Premium Long Island Medicare Coverage</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Nassau County Medicare Supplement Plans: Long Island's Premier Healthcare Access
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">🏥</span>
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-semibold text-blue-800 mb-2">
                  Nassau County: Long Island's Healthcare Hub
                </h2>
                <p className="text-blue-700">
                  With <strong>240,000+ Medicare beneficiaries</strong> and access to premium healthcare facilities like
                  NYU Langone Hospital—Long Island and North Shore University Hospital, Nassau County offers exceptional
                  Medicare Supplement opportunities. Despite <Link href="/medicare-supplement-new-york" className="text-blue-900 underline hover:text-blue-600">NY's high premiums</Link>, Long Island's healthcare infrastructure
                  justifies comprehensive Medigap coverage.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">240K+</div>
              <div className="text-blue-800 font-semibold">Medicare beneficiaries</div>
              <div className="text-blue-600 text-sm mt-1">Long Island's largest county</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">31%</div>
              <div className="text-green-800 font-semibold">Medicare Advantage rate</div>
              <div className="text-green-600 text-sm mt-1">Lower than NYC metro</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$280</div>
              <div className="text-purple-800 font-semibold">Avg monthly premium</div>
              <div className="text-purple-600 text-sm mt-1">NY state rates</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">165K</div>
              <div className="text-orange-800 font-semibold">Underserved market</div>
              <div className="text-orange-600 text-sm mt-1">Medigap opportunity</div>
            </div>
          </div>
        </div>

        {/* Long Island Healthcare Landscape */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Nassau County Healthcare Excellence</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🌟 Premier Medical Facilities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>NYU Langone Hospital—Long Island:</strong> Level 1 trauma center, comprehensive services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>North Shore University Hospital:</strong> Academic medical center, specialized care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Nassau University Medical Center:</strong> Public hospital, safety net provider</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>St. Francis Hospital:</strong> "Heart Hospital," cardiac specialty center</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Winthrop University Hospital:</strong> Major teaching hospital</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">🎯 Nassau County Advantages</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🌊</span>
                  <span><strong>Suburban Health Hub:</strong> Dense concentration of specialists and services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🚊</span>
                  <span><strong>NYC Access:</strong> Easy transportation to Manhattan medical centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💰</span>
                  <span><strong>Higher Income Demographics:</strong> Can afford comprehensive coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏘️</span>
                  <span><strong>Aging in Place:</strong> Strong preference for remaining in community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">👨‍⚕️</span>
                  <span><strong>Physician Density:</strong> High ratio of specialists to population</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">🏝️ Long Island Healthcare Value:</h4>
            <p className="text-blue-700">
              Nassau County's exceptional healthcare infrastructure, combined with easy NYC access, creates 
              an ideal environment for Medicare Supplement plans. The ability to access any Medicare provider 
              without network restrictions maximizes value from Long Island's premium medical facilities while 
              maintaining flexibility for Manhattan specialist care.
            </p>
          </div>
        </section>

        {/* Nassau County Communities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏘️ Nassau County Medicare Communities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Town of Hempstead</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Medicare Pop:</strong> 95,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Diverse, mixed income</div>
                <div><strong>Healthcare:</strong> Multiple hospital systems</div>
                <div><strong>Opportunity:</strong> Large underserved population</div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Town of Oyster Bay</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Medicare Pop:</strong> 85,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Higher income, suburban</div>
                <div><strong>Healthcare:</strong> Premium facilities nearby</div>
                <div><strong>Opportunity:</strong> Comprehensive plan demand</div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Town of North Hempstead</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Medicare Pop:</strong> 60,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Affluent, educated</div>
                <div><strong>Healthcare:</strong> North Shore access</div>
                <div><strong>Opportunity:</strong> Premium coverage preference</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost-Benefit Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Nassau County Medicare Supplement Value</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">Light Healthcare Year</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Medicare Advantage</span>
                  <span className="font-semibold">$1,200/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Nassau Medigap Plan G</span>
                  <span className="font-semibold">$3,360/year</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-green-800 font-semibold">
                    <span>MA Advantage:</span>
                    <span>$2,160</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-4">Moderate Care Year</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Medicare Advantage</span>
                  <span className="font-semibold">$6,200/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Nassau Medigap Plan G</span>
                  <span className="font-semibold">$3,600/year</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-yellow-800 font-semibold">
                    <span>Medigap Saves:</span>
                    <span>$2,600</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-4">Serious Illness Year</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Medicare Advantage</span>
                  <span className="font-semibold">$12,800/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Nassau Medigap Plan G</span>
                  <span className="font-semibold">$3,600/year</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-red-800 font-semibold">
                    <span>Medigap Saves:</span>
                    <span>$9,200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🏝️ Get Expert Nassau County Medicare Guidance</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Navigate Nassau County's premium healthcare market with comprehensive Medicare Supplement coverage. 
              Get personalized Long Island Medicare expertise from licensed New York specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                🏝️ Get Nassau County Quote
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📞 Call Long Island Expert
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}