import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const MedicareGuideDownload = dynamic(() => import('../../../components/MedicareGuideDownload'), {
  ssr: false
})

export const metadata: Metadata = {
  title: 'Free Hawaii Medicare Supplement Guide 2025 - Island Healthcare Coverage | El-Mag Insurance',
  description: 'Download your free Hawaii Medicare Supplement guide. Navigate unique island healthcare challenges with comprehensive coverage insights for 91% of Hawaii beneficiaries without Medigap.',
  keywords: 'Hawaii Medicare Supplement guide, Medigap Hawaii download, Hawaii Medicare PDF, island healthcare coverage guide, Hawaii Medicare help',
  openGraph: {
    title: 'Free Hawaii Medicare Supplement Guide - Island Healthcare Coverage',
    description: 'Comprehensive guide for Hawaii\'s unique Medicare challenges. Free download with expert insights.',
    type: 'article',
  },
}

const hawaiiStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://el-mag.com/medicare-supplement-guide-hawaii',
  name: 'Hawaii Medicare Supplement Guide',
  description: 'Free comprehensive guide for Hawaii Medicare Supplement coverage',
  url: 'https://el-mag.com/medicare-supplement-guide-hawaii',
  about: {
    '@type': 'FinancialProduct',
    name: 'Medicare Supplement Insurance Guide',
    category: 'Health Insurance Education'
  },
  geo: {
    '@type': 'State',
    name: 'Hawaii'
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  }
}

export default function HawaiiMedicareGuideDownloadPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hawaiiStructuredData)
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🌺 FREE HAWAII MEDICARE GUIDE</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Hawaii Medicare Supplement Complete Guide 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Navigate Hawaii's unique healthcare challenges with our comprehensive Medicare Supplement guide. 
            Designed specifically for island residents facing mainland medical travel and limited local specialists.
          </p>
        </div>

        {/* Guide Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What's Inside Your Free Guide</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏝️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Island Healthcare Challenges</h3>
              <p className="text-gray-600 text-sm">
                Understanding Hawaii's unique healthcare landscape, inter-island travel needs, and mainland medical access requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cost Comparison Analysis</h3>
              <p className="text-gray-600 text-sm">
                Hawaii's lowest-in-nation premiums ($95/month) vs mainland medical travel costs and Medicare Advantage limitations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Provider Access Guide</h3>
              <p className="text-gray-600 text-sm">
                Directory of Hawaii healthcare facilities, when to seek mainland care, and how Medigap ensures access anywhere.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Plan Selection Worksheet</h3>
              <p className="text-gray-600 text-sm">
                Step-by-step decision framework specifically designed for Hawaii residents' unique healthcare needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Preparedness</h3>
              <p className="text-gray-600 text-sm">
                Hurricane and tsunami healthcare preparedness, including medical evacuation coverage and disaster protocols.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Local Resources Directory</h3>
              <p className="text-gray-600 text-sm">
                Hawaii-specific Medicare resources, local insurance agents, and island-by-island healthcare facility guides.
              </p>
            </div>
          </div>
        </section>

        {/* Download Component */}
        <section className="mb-12">
          <MedicareGuideDownload
            guideTopic="hawaii-medicare-supplement"
            guideTitle="Hawaii Medicare Supplement Complete Guide"
            guideDescription="Your comprehensive 25-page guide to navigating Hawaii's unique Medicare landscape, complete with cost calculators, provider directories, and island-specific healthcare insights."
            downloadUrl="/downloads/hawaii-medicare-supplement-guide-2025.pdf"
            state="Hawaii"
          />
        </section>

        {/* Guide Contents Preview */}
        <section className="mb-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Complete Guide Contents</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Section 1: Hawaii Healthcare Landscape</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Why Hawaii has 9% Medicare Supplement penetration</li>
                <li>• Island-by-island healthcare facility overview</li>
                <li>• Specialist availability and mainland referral patterns</li>
                <li>• Inter-island medical transport considerations</li>
                <li>• Emergency medical evacuation protocols</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-blue-600 mb-4 mt-6">Section 2: Medicare Supplement Basics</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Plan A through Plan N comparison chart</li>
                <li>• Hawaii-specific premium ranges by island</li>
                <li>• Enrollment timing and guaranteed issue periods</li>
                <li>• Pre-existing condition considerations</li>
                <li>• How community rating affects Hawaii residents</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Section 3: Cost Analysis & Scenarios</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Medical travel cost calculator</li>
                <li>• Medicare Advantage vs Medigap total cost comparison</li>
                <li>• Real-world scenarios: Oahu vs Neighbor Islands</li>
                <li>• Emergency mainland treatment cost examples</li>
                <li>• Long-term care and assisted living considerations</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-blue-600 mb-4 mt-6">Section 4: Action Steps & Resources</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Personal Medicare planning worksheet</li>
                <li>• Hawaii insurance company contact directory</li>
                <li>• Medicare.gov navigation guide for Hawaii</li>
                <li>• Local SHIP counselor contact information</li>
                <li>• Open enrollment timeline and reminders</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Hawaii Residents Say</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4">👨‍🦳</div>
                  <div>
                    <div className="font-semibold text-gray-900">Robert K., Honolulu</div>
                    <div className="text-sm text-gray-600">Age 68, Retired Teacher</div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">
                  "This guide helped me understand why I needed Medigap before my heart surgery at The Queen's Medical Center. 
                  The mainland referral section was especially valuable when I needed specialized cardiac care in California."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4">👩‍🦳</div>
                  <div>
                    <div className="font-semibold text-gray-900">Patricia L., Maui</div>
                    <div className="text-sm text-gray-600">Age 72, Retired Nurse</div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">
                  "Living on Maui, I was worried about healthcare access. This guide showed me exactly how Medicare Supplement 
                  would cover my trips to Oahu and even mainland specialists. The cost calculator was eye-opening!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="text-center">
          <div className="bg-gray-100 rounded-xl p-6">
            <div className="flex justify-center items-center space-x-8 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-xs text-gray-600">Page Guide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-xs text-gray-600">Free Download</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">2025</div>
                <div className="text-xs text-gray-600">Updated Info</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">Licensed</div>
                <div className="text-xs text-gray-600">HI Agents</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Created by licensed Hawaii insurance professionals • Updated for 2025 • 
              Backed by El-Mag Insurance's Medicare expertise
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}