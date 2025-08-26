import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const MedicareGuideDownload = dynamic(() => import('../../components/MedicareGuideDownload'), {
  ssr: false
})

export const metadata: Metadata = {
  title: 'Medicare Cost Calculator 2025 - Compare Supplement vs Advantage Plans | El-Mag Insurance',
  description: 'Calculate your real Medicare costs with our interactive calculator. Compare Medicare Supplement vs Medicare Advantage total costs including premiums, deductibles, and out-of-pocket expenses.',
  keywords: 'Medicare cost calculator, Medicare Supplement calculator, Medigap cost estimator, Medicare Advantage cost comparison, Medicare out-of-pocket calculator',
  openGraph: {
    title: 'Medicare Cost Calculator - Compare Your Real Medicare Costs',
    description: 'Interactive calculator compares Medicare Supplement vs Medicare Advantage total costs. Get personalized cost estimates.',
    type: 'article',
  },
}

const calculatorStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Medicare Cost Calculator',
  description: 'Interactive tool to calculate and compare Medicare Supplement and Medicare Advantage costs',
  url: 'https://el-mag.com/medicare-cost-calculator',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'Medicare Supplement cost calculation',
    'Medicare Advantage cost comparison', 
    'State-specific premium data',
    'Health status considerations',
    'Total annual cost projections'
  ]
}

export default function MedicareCostCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calculatorStructuredData)
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">💰 FREE MEDICARE COST CALCULATOR</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Medicare Cost Calculator: Know Your Real Costs Before You Choose
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Get personalized Medicare cost estimates for both Medicare Supplement and Medicare Advantage plans. 
            Compare total annual costs including premiums, deductibles, and potential out-of-pocket expenses.
          </p>
        </div>

        {/* Calculator Benefits */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧮</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Calculations</h3>
              <p className="text-gray-600 text-sm">
                Get estimates based on your age, state, health status, and expected healthcare usage
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Side-by-Side Comparison</h3>
              <p className="text-gray-600 text-sm">
                Compare Medicare Supplement vs Medicare Advantage costs across different health scenarios
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">State-Specific Data</h3>
              <p className="text-gray-600 text-sm">
                Accurate premium data for Hawaii, New York, California, Florida, and Texas markets
              </p>
            </div>
          </div>
        </section>

        {/* Lead Magnet - Cost Calculator Guide */}
        <section className="mb-12">
          <MedicareGuideDownload
            guideTopic="medicare-cost-calculator"
            guideTitle="Complete Medicare Cost Calculator Guide"
            guideDescription="Get instant access to our interactive Medicare cost calculator plus a comprehensive 18-page guide explaining how to interpret your results and make the best Medicare decision for your situation."
            downloadUrl="/downloads/medicare-cost-calculator-guide-2025.pdf"
          />
        </section>

        {/* Calculator Preview */}
        <section className="mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Calculator Preview</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">What You'll Calculate</h3>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Monthly premiums</strong> for both Medicare Supplement and Medicare Advantage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Annual deductibles</strong> and out-of-pocket maximums</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Expected healthcare costs</strong> based on your health status</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Total annual costs</strong> across different usage scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Potential savings</strong> with each coverage option</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Scenarios We Calculate</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">📊</span>
                    <span><strong>Light Healthcare Year:</strong> Routine visits and preventive care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">📊</span>
                    <span><strong>Moderate Healthcare Year:</strong> Some specialists and procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">📊</span>
                    <span><strong>Heavy Healthcare Year:</strong> Major illness or surgery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">📊</span>
                    <span><strong>Chronic Condition:</strong> Ongoing specialist care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">📊</span>
                    <span><strong>Travel Needs:</strong> Out-of-area healthcare access</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Sample Calculation */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Sample Calculation Results</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-green-800 mb-2">Light Use Year</h5>
                  <div className="text-sm text-gray-600 mb-2">Texas, Age 68, Good Health</div>
                  <div className="space-y-1 text-sm">
                    <div>Medicare Advantage: <span className="font-semibold">$1,200</span></div>
                    <div>Medicare Supplement: <span className="font-semibold">$1,680</span></div>
                    <div className="text-orange-600 font-semibold">MA Saves: $480</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-yellow-800 mb-2">Moderate Use Year</h5>
                  <div className="text-sm text-gray-600 mb-2">California, Age 72, Fair Health</div>
                  <div className="space-y-1 text-sm">
                    <div>Medicare Advantage: <span className="font-semibold">$6,800</span></div>
                    <div>Medicare Supplement: <span className="font-semibold">$2,460</span></div>
                    <div className="text-green-600 font-semibold">Medigap Saves: $4,340</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-red-800 mb-2">Heavy Use Year</h5>
                  <div className="text-sm text-gray-600 mb-2">New York, Age 75, Poor Health</div>
                  <div className="space-y-1 text-sm">
                    <div>Medicare Advantage: <span className="font-semibold">$13,200</span></div>
                    <div>Medicare Supplement: <span className="font-semibold">$3,900</span></div>
                    <div className="text-green-600 font-semibold">Medigap Saves: $9,300</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Download The Guide */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Download Our Complete Calculator Guide?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">📊 Advanced Calculation Methods</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• How to factor in prescription drug costs</li>
                  <li>• Calculating travel and transportation expenses</li>
                  <li>• Adjusting for inflation and premium increases</li>
                  <li>• Special considerations for chronic conditions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">🎯 Decision Framework</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• When lower premiums actually cost more</li>
                  <li>• How to evaluate network restrictions</li>
                  <li>• Understanding true out-of-pocket exposure</li>
                  <li>• Timing considerations for enrollment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* State-Specific Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">State-Specific Cost Insights</h2>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { state: 'Hawaii', premium: 95, penetration: 9, highlight: 'Lowest cost, highest opportunity' },
              { state: 'Texas', premium: 120, penetration: 30, highlight: 'Best value nationwide' },
              { state: 'Florida', premium: 150, penetration: 28, highlight: 'Growing retiree market' },
              { state: 'California', premium: 185, penetration: 25, highlight: 'Community rating advantage' },
              { state: 'New York', premium: 304, penetration: 21, highlight: 'Premium market, high need' }
            ].map(data => (
              <div key={data.state} className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{data.state}</h3>
                <div className="text-xl font-bold text-blue-600 mb-1">${data.premium}/mo</div>
                <div className="text-sm text-gray-600 mb-2">{data.penetration}% penetration</div>
                <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {data.highlight}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="text-center">
          <div className="bg-gray-100 rounded-xl p-6">
            <div className="flex justify-center items-center space-x-8 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">18+</div>
                <div className="text-xs text-gray-600">Page Guide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Interactive</div>
                <div className="text-xs text-gray-600">Calculator</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">5 States</div>
                <div className="text-xs text-gray-600">Data Included</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">2025</div>
                <div className="text-xs text-gray-600">Current Rates</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Free interactive calculator • Comprehensive guide • Licensed agent support • 
              Updated for 2025 rates
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}