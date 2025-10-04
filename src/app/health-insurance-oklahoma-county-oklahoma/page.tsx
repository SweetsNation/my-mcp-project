import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Oklahoma County Health Insurance Marketplace 2025 - Oklahoma City ACA Plans | El-Mag Insurance',
  description: 'Oklahoma County Health Insurance Marketplace guide: Navigate Oklahoma City healthcare with affordable ACA plans for 110,000+ uninsured residents. Coverage gap specialists.',
  keywords: 'Oklahoma County health insurance, Oklahoma City ACA plans, Oklahoma marketplace insurance, OKC subsidies, Oklahoma affordable health coverage, Oklahoma health insurance agent',
  openGraph: {
    title: 'Oklahoma County Health Insurance Marketplace - Oklahoma City ACA Coverage',
    description: 'Affordable Health Insurance Marketplace plans for Oklahoma County\'s 110,000+ uninsured residents with Oklahoma City healthcare expertise.',
    type: 'article',
    locale: 'en_US',
  ,
      images: [
        {
          url: 'https://www.elmaginsurance.com/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'El-Mag Insurance - Medicare and Health Insurance Solutions',
        },
      ],
    },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/health-insurance-oklahoma-county-oklahoma',
  },
}

const oklahomaCountyStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://el-mag.com/health-insurance-oklahoma-county-oklahoma',
  name: 'Oklahoma County Oklahoma Health Insurance Marketplace',
  description: 'Comprehensive Health Insurance Marketplace guide for Oklahoma County, Oklahoma residents',
  url: 'https://el-mag.com/health-insurance-oklahoma-county-oklahoma',
  about: {
    '@type': 'FinancialProduct',
    name: 'Health Insurance Marketplace Plans',
    category: 'Health Insurance',
    provider: {
      '@type': 'Organization',
      name: 'El-Mag Insurance'
    }
  },
  geo: {
    '@type': 'AdministrativeArea',
    name: 'Oklahoma County, Oklahoma',
    containedInPlace: {
      '@type': 'State',
      name: 'Oklahoma'
    }
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Oklahoma County uninsured residents'
  }
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much can Oklahoma County residents save with Health Insurance Marketplace subsidies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oklahoma County residents can save an average of $705 per year with enhanced tax credits. 80% of customers can find coverage for $10 or less per month after subsidies.'
      }
    },
    {
      '@type': 'Question',
      name: 'What health insurance options exist for Native American families in Oklahoma County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide culturally competent enrollment assistance for Oklahoma County\'s Native American population, understanding tribal healthcare considerations and IHS coordination options.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can oil and gas workers in Oklahoma County get individual health insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! The Health Insurance Marketplace offers comprehensive plans for Oklahoma\'s energy sector workers, including contractors and those affected by industry volatility.'
      }
    }
  ]
}

export default function OklahomaCountyHealthInsurancePage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(oklahomaCountyStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🌪️ OKLAHOMA COUNTY: Sooner State Healthcare Access</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Health Insurance in Oklahoma County, Oklahoma 2025
          </h1>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-semibold text-orange-800 mb-2">
                  Oklahoma County's Healthcare Coverage Challenge
                </h2>
                <p className="text-orange-700">
                  Home to <strong>800,000+ residents</strong> in the Oklahoma City metropolitan area, Oklahoma County has an estimated 
                  <strong>110,000+ uninsured residents</strong>. With Oklahoma's 11.36% uninsured rate and the state's decision 
                  not to expand Medicaid, many working Oklahomans fall into the coverage gap. Enhanced Marketplace subsidies 
                  can save families <strong>$705 annually</strong> - critical support for workers in the energy, agriculture, 
                  and service sectors who often lack employer coverage.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">110K+</div>
              <div className="text-red-800 font-semibold">Uninsured residents</div>
              <div className="text-red-600 text-sm mt-1">Oklahoma County</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15%</div>
              <div className="text-green-800 font-semibold">Native American</div>
              <div className="text-green-600 text-sm mt-1">Population</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">No</div>
              <div className="text-blue-800 font-semibold">Medicaid expansion</div>
              <div className="text-blue-600 text-sm mt-1">Coverage gap exists</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$705</div>
              <div className="text-purple-800 font-semibold">Average savings</div>
              <div className="text-purple-600 text-sm mt-1">With subsidies</div>
            </div>
          </div>
        </div>

        {/* Oklahoma Economy & Healthcare */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏭 Oklahoma's Economy & Healthcare Landscape</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">⛽ Energy & Agriculture Economy</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⛽</span>
                  <span><strong>Oil and gas industry:</strong> High-paying but volatile employment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🌾</span>
                  <span><strong>Agriculture sector:</strong> Farming, ranching, seasonal workers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✈️</span>
                  <span><strong>Aerospace & defense:</strong> Tinker Air Force Base, contractors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏛️</span>
                  <span><strong>Government sector:</strong> State capital employment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🛍️</span>
                  <span><strong>Small business economy:</strong> Local retail and service providers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-4">⚠️ Healthcare Access Barriers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🚫</span>
                  <span><strong>No Medicaid expansion:</strong> Coverage gap for low-income adults</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">📉</span>
                  <span><strong>Economic volatility:</strong> Oil price swings affect employment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🏢</span>
                  <span><strong>Small employers:</strong> Many businesses can't afford group plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🌾</span>
                  <span><strong>Rural challenges:</strong> Limited healthcare provider access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">💰</span>
                  <span><strong>Affordability concerns:</strong> 63% cite cost as main barrier</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">🏥 Oklahoma City Healthcare Excellence:</h4>
            <p className="text-blue-700">
              Oklahoma County is served by premier healthcare facilities including OU Medical Center, Mercy Hospital Oklahoma City, 
              Integris Baptist Medical Center, and the Oklahoma City Veterans Affairs Medical Center. Health Insurance Marketplace 
              plans ensure access to these quality facilities while providing financial protection for Oklahoma families facing 
              the challenges of economic uncertainty and limited employer-sponsored coverage options.
            </p>
          </div>
        </section>

        {/* Industry & Community Specific Solutions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💡 Tailored Health Insurance Solutions for Oklahoma</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">🪶 Native American Community</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Culturally competent enrollment assistance</li>
                <li>• Understanding of tribal healthcare systems</li>
                <li>• IHS coordination and supplemental coverage</li>
                <li>• Urban Native American outreach</li>
                <li>• Tribal community partnerships</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">⛽ Energy Sector Workers</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Coverage for oil and gas contractors</li>
                <li>• Plans for boom and bust cycles</li>
                <li>• Individual coverage during layoffs</li>
                <li>• High-risk occupation considerations</li>
                <li>• Flexible premium payment options</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-4">🌾 Rural & Agriculture</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Coverage for farm families</li>
                <li>• Seasonal worker considerations</li>
                <li>• Rural healthcare access planning</li>
                <li>• Agricultural accident coverage</li>
                <li>• Telehealth and distance care options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Oklahoma County Communities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏘️ Oklahoma County Communities We Serve</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Oklahoma City</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 75,000+ residents</div>
                <div><strong>Demographics:</strong> Diverse, mixed income</div>
                <div><strong>Industries:</strong> Government, energy, healthcare</div>
                <div><strong>Challenge:</strong> Urban health disparities</div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Edmond</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 8,000+ residents</div>
                <div><strong>Demographics:</strong> Affluent suburbs</div>
                <div><strong>Industries:</strong> Professional services, education</div>
                <div><strong>Opportunity:</strong> High-income individual plans</div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Norman</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 12,000+ residents</div>
                <div><strong>Demographics:</strong> College town, young adults</div>
                <div><strong>Industries:</strong> Education, research, student services</div>
                <div><strong>Focus:</strong> Young adult coverage transition</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">Midwest City</h3>
              <div className="space-y-2 text-yellow-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 8,000+ residents</div>
                <div><strong>Demographics:</strong> Military families, working-class</div>
                <div><strong>Industries:</strong> Aerospace, defense contractors</div>
                <div><strong>Need:</strong> Contractor and civilian coverage</div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">Moore</h3>
              <div className="space-y-2 text-indigo-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 6,000+ residents</div>
                <div><strong>Demographics:</strong> Suburban families</div>
                <div><strong>Industries:</strong> Mixed employment sectors</div>
                <div><strong>Challenge:</strong> Tornado recovery considerations</div>
              </div>
            </div>
            
            <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-3">Del City</h3>
              <div className="space-y-2 text-pink-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 3,500+ residents</div>
                <div><strong>Demographics:</strong> Working-class, diverse</div>
                <div><strong>Industries:</strong> Service, retail, small business</div>
                <div><strong>Opportunity:</strong> Affordable family coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Gap Focus */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🚫 Understanding Oklahoma's Coverage Gap</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-4">Who Falls in the Coverage Gap?</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• <strong>Adults earning $13,590-$18,754/year</strong> (individual)</li>
                  <li>• <strong>Families earning $27,750-$38,295/year</strong> (family of 4)</li>
                  <li>• <strong>Too much income for Oklahoma Medicaid</strong></li>
                  <li>• <strong>Too little income for Marketplace subsidies</strong></li>
                  <li>• <strong>Estimated 35,000+ Oklahoma County residents</strong></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-4">Alternative Healthcare Resources</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• <strong>Federally Qualified Health Centers:</strong> Sliding fee scale care</li>
                  <li>• <strong>OU Medical Center:</strong> Charity care programs</li>
                  <li>• <strong>Free and charitable clinics:</strong> Community-based care</li>
                  <li>• <strong>Indian Health Service:</strong> For eligible Native Americans</li>
                  <li>• <strong>Direct primary care:</strong> Affordable monthly memberships</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-white rounded-lg p-6">
              <h4 className="font-semibold text-red-800 mb-3">🌪️ Advocating for Oklahoma Families</h4>
              <p className="text-red-700">
                While Oklahoma hasn't expanded Medicaid, we help coverage gap families explore all available options including 
                community health centers, hospital charity care programs, and direct pay arrangements with healthcare providers. 
                We also monitor policy developments and help families understand when income changes might make them eligible 
                for Marketplace subsidies or other coverage options.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Oklahoma County Marketplace Savings Examples</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">Oil Field Worker (Age 32)</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Income:</strong> $55,000/year</div>
                <div className="flex justify-between">
                  <span>Silver Plan Premium</span>
                  <span className="font-semibold">$385/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Credit Subsidy</span>
                  <span className="font-semibold text-green-600">-$145/month</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-green-800 font-semibold">
                    <span>Your Cost:</span>
                    <span>$240/month</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">Farm Family (4 members)</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Income:</strong> $48,000/year</div>
                <div className="flex justify-between">
                  <span>Silver Plan Premium</span>
                  <span className="font-semibold">$1,285/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Credit Subsidy</span>
                  <span className="font-semibold text-blue-600">-$1,095/month</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-blue-800 font-semibold">
                    <span>Your Cost:</span>
                    <span>$190/month</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-4">Small Business Owner</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Income:</strong> $38,000/year</div>
                <div className="flex justify-between">
                  <span>Bronze Plan Premium</span>
                  <span className="font-semibold">$295/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Credit Subsidy</span>
                  <span className="font-semibold text-purple-600">-$265/month</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-purple-800 font-semibold">
                    <span>Your Cost:</span>
                    <span>$30/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h4 className="font-semibold text-yellow-800 mb-2">🌪️ Oklahoma Healthcare Value:</h4>
            <p className="text-yellow-700">
              With enhanced tax credits, 80% of Oklahoma County residents can access comprehensive health insurance for $10/month 
              or less. For the 110,000+ uninsured residents working in energy, agriculture, and small business sectors, 
              this represents crucial financial protection and access to Oklahoma City's excellent healthcare facilities 
              during economic uncertainty and industry volatility.
            </p>
          </div>
        </section>

        {/* Severe Weather Preparedness */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🌪️ Severe Weather Healthcare Preparedness</h2>
          
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-orange-800 mb-4">Tornado Alley Healthcare Risks</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>• <strong>Severe weather injuries:</strong> Tornado, hail, and wind damage</li>
                  <li>• <strong>Power outages:</strong> Medical equipment and medication storage</li>
                  <li>• <strong>Healthcare facility damage:</strong> Hospital closures and evacuations</li>
                  <li>• <strong>Emergency services strain:</strong> Overwhelmed medical resources</li>
                  <li>• <strong>Prescription access:</strong> Pharmacy closures during emergencies</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-800 mb-4">Marketplace Coverage Benefits</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>• <strong>Emergency room coverage:</strong> No prior authorization needed</li>
                  <li>• <strong>Out-of-area treatment:</strong> Coverage during evacuations</li>
                  <li>• <strong>Prescription refills:</strong> Emergency medication access</li>
                  <li>• <strong>Ambulance coverage:</strong> Emergency transportation included</li>
                  <li>• <strong>Urgent care access:</strong> Alternative to overwhelmed ERs</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-white rounded-lg p-6">
              <h4 className="font-semibold text-orange-800 mb-3">🌪️ "Oklahoma Strong: Weather-Ready Healthcare"</h4>
              <p className="text-orange-700">
                Living in Tornado Alley means being prepared for severe weather emergencies. Having comprehensive health 
                insurance isn't just about routine care - it's about being ready when storms strike. Our Marketplace plans 
                ensure you have coverage for weather-related injuries, emergency room visits, and medication access when 
                local pharmacies may be closed. Don't wait for storm season to think about health coverage.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much can Oklahoma County residents save with Health Insurance Marketplace subsidies?
              </h3>
              <p className="text-gray-700">
                Oklahoma County residents can save an average of $705 per year with enhanced tax credits. 80% of customers 
                can find coverage for $10 or less per month after subsidies. This is especially important for Oklahoma 
                workers facing economic volatility in the energy sector and those working for small employers who can't 
                afford to provide group health benefits.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What health insurance options exist for Native American families in Oklahoma County?
              </h3>
              <p className="text-gray-700">
                We provide culturally competent enrollment assistance for Oklahoma County's Native American population, 
                understanding tribal healthcare systems and how Marketplace coverage can supplement Indian Health Service 
                benefits. Our agents work with tribal communities and understand the unique healthcare needs and cultural 
                considerations of Native American families in urban Oklahoma City.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can oil and gas workers in Oklahoma County get individual health insurance?
              </h3>
              <p className="text-gray-700">
                Yes! The Health Insurance Marketplace offers comprehensive plans perfect for Oklahoma's energy sector workers, 
                including contractors and those affected by industry volatility. Whether you're working in the oil fields, 
                natural gas processing, or energy services, we can help you find coverage that works during boom times and 
                provides security during industry downturns.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What if I fall into Oklahoma's Medicaid coverage gap?
              </h3>
              <p className="text-gray-700">
                If your income is too low to qualify for Marketplace subsidies but too high for Oklahoma Medicaid, we can 
                help you explore alternatives including Federally Qualified Health Centers with sliding fee scales, hospital 
                charity care programs, and direct primary care arrangements. We also monitor your situation for income 
                changes that might make you eligible for subsidies.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does health insurance help during Oklahoma's severe weather season?
              </h3>
              <p className="text-gray-700">
                Marketplace plans provide crucial coverage during Oklahoma's severe weather season, including emergency room 
                visits for weather-related injuries, coverage at any hospital if your usual facility is damaged, ambulance 
                services, and prescription refills at out-of-area pharmacies. Living in Tornado Alley means being prepared 
                for weather emergencies - comprehensive health insurance is part of that preparation.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🌪️ Get Oklahoma County Health Insurance Help Today</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Don't join the 110,000+ uninsured Oklahoma County residents. Get personalized Health Insurance Marketplace 
              guidance from licensed Oklahoma agents who understand the Sooner State's economy and healthcare challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 CALL NOW: 331-E-HEALTH
              </a>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
              >
                💻 Get Free OKC Quote
              </Link>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Free consultation • Licensed Oklahoma agents • Energy sector specialists
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}