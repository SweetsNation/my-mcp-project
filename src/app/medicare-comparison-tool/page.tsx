import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Dynamically import the comparison tool to avoid SSR issues
const MedicareComparisonTool = dynamic(() => import('../../components/MedicareComparisonTool'), {
  ssr: false,
  loading: () => (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading Medicare Comparison Tool...</p>
      </div>
    </div>
  )
})

export const metadata: Metadata = {
  title: 'Medicare Advantage vs Medicare Supplement Comparison Tool | Free Analysis | El-Mag Insurance',
  description: 'Compare Medicare Advantage vs Medicare Supplement plans with our interactive tool. Get personalized recommendations based on your location, health, and budget. Free analysis in minutes.',
  keywords: 'Medicare comparison tool, Medicare Advantage vs Medigap, Medicare plan comparison, Medicare Supplement calculator, Medicare decision tool, compare Medicare plans',
  openGraph: {
    title: 'Medicare Comparison Tool - Find Your Best Medicare Option',
    description: 'Interactive tool compares Medicare Advantage vs Medicare Supplement plans. Get personalized recommendations in minutes.',
    type: 'article',
  },
}

const comparisonStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Medicare Advantage vs Supplement Comparison Tool',
  description: 'Interactive tool to compare Medicare Advantage and Medicare Supplement plans based on individual needs',
  url: 'https://el-mag.com/medicare-comparison-tool',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'Personalized Medicare plan recommendations',
    'Cost comparison analysis',
    'State-specific pricing data',
    'Travel and health status considerations',
    'Expert guidance connection'
  ],
  provider: {
    '@type': 'Organization',
    name: 'El-Mag Insurance'
  }
}

const howToStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Choose Between Medicare Advantage and Medicare Supplement',
  description: 'Step-by-step guide to comparing Medicare Advantage and Medicare Supplement plans',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Assess Your Health Status',
      text: 'Evaluate your current health conditions, frequency of doctor visits, and anticipated medical needs'
    },
    {
      '@type': 'HowToStep', 
      name: 'Determine Your Budget',
      text: 'Consider both monthly premiums and potential out-of-pocket costs for medical services'
    },
    {
      '@type': 'HowToStep',
      name: 'Evaluate Travel Needs',
      text: 'Consider if you travel frequently, have multiple residences, or need nationwide coverage'
    },
    {
      '@type': 'HowToStep',
      name: 'Review Doctor Preferences',
      text: 'Determine if you want to keep current doctors or are comfortable with network restrictions'
    },
    {
      '@type': 'HowToStep',
      name: 'Compare Total Costs',
      text: 'Calculate annual costs including premiums, deductibles, copays, and potential out-of-pocket maximums'
    }
  ]
}

export default function MedicareComparisonToolPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(comparisonStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData)
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🔍 FREE Medicare Comparison Tool</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Medicare Advantage vs. Medicare Supplement: Find Your Perfect Match
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get personalized Medicare recommendations in minutes. Our interactive tool analyzes your needs, 
            location, and budget to recommend the best Medicare coverage option for your situation.
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Analysis</h3>
              <p className="text-gray-600 text-sm">
                Tailored recommendations based on your age, health status, budget, and location
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Comparison</h3>
              <p className="text-gray-600 text-sm">
                Compare real costs including premiums, out-of-pocket maximums, and total annual expenses
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">State-Specific Data</h3>
              <p className="text-gray-600 text-sm">
                Pricing and penetration data for Hawaii, New York, California, Florida, and Texas
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Tool */}
        <section className="mb-12">
          <MedicareComparisonTool />
        </section>

        {/* Educational Content */}
        <section className="mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding Your Medicare Options</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Medicare Advantage (Part C)</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span className="text-sm">Lower monthly premiums (often $0-50/month)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span className="text-sm">Often includes extras like dental, vision, hearing aids</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span className="text-sm">Prescription drug coverage usually included</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span className="text-sm">Network restrictions - limited doctor and hospital choices</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span className="text-sm">Geographic limitations for non-emergency care</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span className="text-sm">Plan benefits can change annually</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Medicare Supplement (Medigap)</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span className="text-sm">Nationwide coverage - any Medicare doctor or hospital</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span className="text-sm">Predictable costs with comprehensive coverage</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span className="text-sm">No referrals needed for specialists</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span className="text-sm">Plan benefits guaranteed renewable</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span className="text-sm">Higher monthly premiums (varies by state)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span className="text-sm">No prescription drug coverage (need separate Part D)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* State Comparison */}
        <section className="mb-12">
          <div className="bg-gray-100 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Medicare Supplement Costs by State</h2>
            
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { state: 'Hawaii', premium: 102, penetration: 9, highlight: 'Lowest penetration' },
                { state: 'Texas', premium: 120, penetration: 30, highlight: 'Best value' },
                { state: 'Florida', premium: 150, penetration: 28, highlight: 'Growing market' },
                { state: 'California', premium: 200, penetration: 25, highlight: 'Largest market' },
                { state: 'New York', premium: 304, penetration: 21, highlight: 'Highest cost' }
              ].map(data => (
                <div key={data.state} className="bg-white p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{data.state}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-1">${data.premium}/mo</div>
                  <div className="text-sm text-gray-600 mb-2">{data.penetration}% penetration</div>
                  <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {data.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Make Your Medicare Decision?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get personalized guidance from licensed Medicare experts who understand your state's unique market and regulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              🎯 Get Expert Consultation
            </a>
            <a
              href="tel:331-343-2584"
              className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              📞 Call Medicare Specialist
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Free consultation • Licensed agents • No pressure recommendations
          </p>
        </section>
      </div>
    </main>
  )
}