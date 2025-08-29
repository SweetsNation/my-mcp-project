import type { Metadata } from 'next'
import Link from 'next/link'
import CrossServiceRecommendations from '@/components/CrossServiceRecommendations'
import StateCountyLinking from '@/components/StateCountyLinking'

export const metadata: Metadata = {
  title: 'Fulton County Health Insurance Marketplace 2025 - Atlanta ACA Plans | El-Mag Insurance',
  description: 'Fulton County Health Insurance Marketplace guide: Navigate Atlanta\'s diverse healthcare market with affordable ACA plans for 180,000+ uninsured residents. Enhanced subsidies available.',
  keywords: 'Fulton County health insurance, Atlanta ACA plans, Georgia marketplace insurance, Atlanta subsidies, Fulton County affordable health coverage, Georgia health insurance agent',
  openGraph: {
    title: 'Fulton County Health Insurance Marketplace - Atlanta ACA Coverage',
    description: 'Affordable Health Insurance Marketplace plans for Fulton County\'s 180,000+ uninsured residents with Atlanta healthcare expertise.',
    type: 'article',
    locale: 'en_US',
  },
}

const fultonCountyStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://el-mag.com/health-insurance-fulton-county-georgia',
  name: 'Fulton County Georgia Health Insurance Marketplace',
  description: 'Comprehensive Health Insurance Marketplace guide for Fulton County, Georgia residents',
  url: 'https://el-mag.com/health-insurance-fulton-county-georgia',
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
    name: 'Fulton County, Georgia',
    containedInPlace: {
      '@type': 'State',
      name: 'Georgia'
    }
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Fulton County uninsured residents'
  }
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much can I save with Health Insurance Marketplace subsidies in Fulton County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fulton County residents can save an average of $705 per year with enhanced tax credits. 80% of customers can find coverage for $10 or less per month after subsidies.'
      }
    },
    {
      '@type': 'Question',
      name: 'What health insurance options are available for Atlanta\'s Black community?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide culturally competent enrollment assistance for Fulton County\'s diverse African American community, with focus on affordability and access to Atlanta\'s premier healthcare facilities.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can small business owners in Fulton County get individual health insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Health Insurance Marketplace offers comprehensive individual and family plans for Atlanta\'s entrepreneurs and small business owners who don\'t qualify for or can\'t afford group coverage.'
      }
    }
  ]
}

export default function FultonCountyHealthInsurancePage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fultonCountyStructuredData)
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
            <span className="font-bold">🍑 FULTON COUNTY: Atlanta Healthcare Marketplace Access</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Health Insurance in Fulton County, Georgia 2025
          </h1>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">🏙️</span>
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-semibold text-orange-800 mb-2">
                  Fulton County's Healthcare Access Crisis
                </h2>
                <p className="text-orange-700">
                  As Georgia's most populous county with <strong>1.1 million residents</strong>, Fulton County has an estimated 
                  <strong>180,000+ uninsured residents</strong>. With Georgia's 11.38% uninsured rate and the state's decision 
                  not to expand Medicaid, many Atlanta area residents fall into the coverage gap. Enhanced Marketplace subsidies 
                  can save families <strong>$705 annually</strong>, yet many remain unaware of their affordable options.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">180K+</div>
              <div className="text-red-800 font-semibold">Uninsured residents</div>
              <div className="text-red-600 text-sm mt-1">Fulton County</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">52%</div>
              <div className="text-green-800 font-semibold">Black population</div>
              <div className="text-green-600 text-sm mt-1">Diverse community</div>
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

        {/* Atlanta Metro Healthcare Landscape */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Atlanta's Healthcare Excellence & Access Challenges</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🌟 World-Class Medical Facilities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Emory Healthcare:</strong> Academic medical center, Winship Cancer Institute</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Grady Memorial Hospital:</strong> Level 1 trauma center, safety net hospital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Children's Healthcare of Atlanta:</strong> Pediatric specialty care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Northside Hospital:</strong> Comprehensive cancer care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Piedmont Healthcare:</strong> Heart and vascular excellence</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-4">⚠️ Coverage Gaps in Fulton County</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🚫</span>
                  <span><strong>No Medicaid expansion:</strong> Coverage gap for low-income adults</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🏢</span>
                  <span><strong>Small business economy:</strong> Limited employer-sponsored coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">💰</span>
                  <span><strong>Income volatility:</strong> Gig economy and contract work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🏙️</span>
                  <span><strong>Urban health disparities:</strong> Racial and economic inequities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">📋</span>
                  <span><strong>Complex enrollment:</strong> Navigation barriers for families</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">🍑 Atlanta's Healthcare Advantage:</h4>
            <p className="text-blue-700">
              Fulton County is the healthcare capital of the Southeast, home to Emory University, the CDC, and some of 
              America's most prestigious medical institutions. Health Insurance Marketplace plans ensure access to these 
              world-class facilities while providing financial protection for Atlanta families. With proper coverage, 
              residents can access everything from routine care to specialized treatment at Emory, Grady, and other premier facilities.
            </p>
          </div>
        </section>

        {/* Demographic-Specific Solutions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💡 Tailored Health Insurance Solutions for Fulton County</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">🤝 Black Community Support</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Culturally competent enrollment assistance</li>
                <li>• Understanding of health disparities</li>
                <li>• Access to community healthcare providers</li>
                <li>• Chronic condition management focus</li>
                <li>• Church and community partnerships</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">🚀 Tech Worker Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Coverage for startup employees</li>
                <li>• Contractor and freelancer plans</li>
                <li>• Young professional options</li>
                <li>• Comprehensive mental health coverage</li>
                <li>• Nationwide provider networks</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-4">🏢 Small Business Owners</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Individual coverage for entrepreneurs</li>
                <li>• Family plans for business owners</li>
                <li>• Coverage gap bridge solutions</li>
                <li>• Health Savings Account compatibility</li>
                <li>• Flexible premium payment options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fulton County Communities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏘️ Fulton County Communities We Serve</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Atlanta (City)</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 85,000+ residents</div>
                <div><strong>Demographics:</strong> Diverse, young professionals</div>
                <div><strong>Industries:</strong> Tech, finance, healthcare, media</div>
                <div><strong>Challenge:</strong> Gig economy, startup workers</div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">South Fulton</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 35,000+ residents</div>
                <div><strong>Demographics:</strong> African American majority</div>
                <div><strong>Industries:</strong> Government, education, service</div>
                <div><strong>Focus:</strong> Affordable family coverage</div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Sandy Springs</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 15,000+ residents</div>
                <div><strong>Demographics:</strong> Affluent suburbs</div>
                <div><strong>Industries:</strong> Corporate headquarters, professional services</div>
                <div><strong>Opportunity:</strong> High-income individuals</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">Alpharetta</h3>
              <div className="space-y-2 text-yellow-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 12,000+ residents</div>
                <div><strong>Demographics:</strong> Tech corridor families</div>
                <div><strong>Industries:</strong> Technology, biotechnology</div>
                <div><strong>Need:</strong> Comprehensive family plans</div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">East Point</h3>
              <div className="space-y-2 text-indigo-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 18,000+ residents</div>
                <div><strong>Demographics:</strong> Working-class families</div>
                <div><strong>Industries:</strong> Transportation, logistics, service</div>
                <div><strong>Challenge:</strong> Airport workers, shift schedules</div>
              </div>
            </div>
            
            <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-3">Roswell</h3>
              <div className="space-y-2 text-pink-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 14,000+ residents</div>
                <div><strong>Demographics:</strong> Suburban professionals</div>
                <div><strong>Industries:</strong> Healthcare, education, business</div>
                <div><strong>Opportunity:</strong> Middle-income families</div>
              </div>
            </div>
          </div>
        </section>

        {/* Georgia Coverage Gap Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🚫 Understanding Georgia's Coverage Gap</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-4">Who Falls in the Coverage Gap?</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• <strong>Adults earning $13,590-$18,754/year</strong> (individual)</li>
                  <li>• <strong>Families earning $27,750-$38,295/year</strong> (family of 4)</li>
                  <li>• <strong>Too much income for Medicaid</strong></li>
                  <li>• <strong>Too little income for Marketplace subsidies</strong></li>
                  <li>• <strong>Estimated 50,000+ Fulton County residents</strong></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-4">Alternative Solutions</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• <strong>Community Health Centers:</strong> Sliding fee scale</li>
                  <li>• <strong>Grady Health System:</strong> Financial assistance programs</li>
                  <li>• <strong>Hospital charity care:</strong> Emergency coverage</li>
                  <li>• <strong>Direct pay arrangements:</strong> With primary care doctors</li>
                  <li>• <strong>Short-term plans:</strong> Temporary coverage solutions</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-white rounded-lg p-6">
              <h4 className="font-semibold text-red-800 mb-3">💡 Hope for Coverage Gap Families</h4>
              <p className="text-red-700">
                While Georgia hasn't expanded Medicaid, we help coverage gap families explore all available options including 
                community health centers, hospital financial assistance programs, and advocacy for future policy changes. 
                We also monitor income changes that might make families eligible for Marketplace subsidies.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Fulton County Marketplace Savings Examples</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">Tech Startup Employee (Age 28)</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Income:</strong> $42,000/year</div>
                <div className="flex justify-between">
                  <span>Silver Plan Premium</span>
                  <span className="font-semibold">$315/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Credit Subsidy</span>
                  <span className="font-semibold text-green-600">-$195/month</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-green-800 font-semibold">
                    <span>Your Cost:</span>
                    <span>$120/month</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">Single Parent (2 children)</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Income:</strong> $38,000/year</div>
                <div className="flex justify-between">
                  <span>Silver Plan Premium</span>
                  <span className="font-semibold">$950/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Credit Subsidy</span>
                  <span className="font-semibold text-blue-600">-$835/month</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-blue-800 font-semibold">
                    <span>Your Cost:</span>
                    <span>$115/month</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-4">Small Business Owner</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Income:</strong> $65,000/year</div>
                <div className="flex justify-between">
                  <span>Gold Plan Premium</span>
                  <span className="font-semibold">$485/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Credit Subsidy</span>
                  <span className="font-semibold text-purple-600">-$145/month</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-purple-800 font-semibold">
                    <span>Your Cost:</span>
                    <span>$340/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h4 className="font-semibold text-yellow-800 mb-2">🍑 Atlanta Healthcare Investment:</h4>
            <p className="text-yellow-700">
              With enhanced tax credits, most Fulton County residents can access comprehensive health insurance for 
              significantly less than the $705 average annual savings. For the 180,000+ uninsured residents in Atlanta's 
              diverse economy, this represents access to world-class healthcare at Emory, Grady, and other premier facilities 
              throughout the metro area.
            </p>
          </div>
        </section>

        {/* Community Partnerships */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🤝 Serving Atlanta's Diverse Communities</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">🏛️ Community Partnerships</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Historic Black Churches:</strong> Sunday health insurance education</li>
                  <li>• <strong>Community Health Centers:</strong> On-site enrollment assistance</li>
                  <li>• <strong>Atlanta Public Library:</strong> Computer access for online enrollment</li>
                  <li>• <strong>Neighborhood Organizations:</strong> Local health fairs</li>
                  <li>• <strong>HBCU Partnerships:</strong> Student and alumni outreach</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">🎯 Targeted Outreach Programs</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Tech meetups:</strong> Startup and freelancer workshops</li>
                  <li>• <strong>Small business chambers:</strong> Entrepreneur health insurance seminars</li>
                  <li>• <strong>Community colleges:</strong> Adult learner coverage options</li>
                  <li>• <strong>Senior centers:</strong> Family member enrollment help</li>
                  <li>• <strong>Housing authorities:</strong> Resident health insurance fairs</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-white rounded-lg p-6">
              <h4 className="font-semibold text-blue-800 mb-3">🍑 "Atlanta Strong: Healthcare for All"</h4>
              <p className="text-blue-700">
                In Fulton County, we understand Atlanta's unique position as the economic engine of the Southeast and 
                the birthplace of the civil rights movement. Our commitment is to ensure every resident - from tech 
                entrepreneurs in Buckhead to families in Southwest Atlanta - has access to quality, affordable health 
                insurance through the Marketplace.
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
                How much can I save with Health Insurance Marketplace subsidies in Fulton County?
              </h3>
              <p className="text-gray-700">
                Fulton County residents can save an average of $705 per year with enhanced tax credits. 80% of customers 
                can find coverage for $10 or less per month after subsidies. The amount varies based on income, family size, 
                and the plan selected, but most Atlanta residents qualify for significant savings.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What health insurance options are available for Atlanta's Black community?
              </h3>
              <p className="text-gray-700">
                We provide culturally competent enrollment assistance for Fulton County's diverse African American community, 
                understanding the unique health challenges and historical healthcare experiences. Our agents work with community 
                organizations and churches to ensure access to affordable coverage and quality care at facilities like Grady 
                Memorial Hospital.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can small business owners in Fulton County get individual health insurance?
              </h3>
              <p className="text-gray-700">
                Yes! The Health Insurance Marketplace offers comprehensive individual and family plans perfect for Atlanta's 
                entrepreneurs and small business owners. Whether you're running a tech startup in Midtown or a family business 
                in East Point, we can help you find affordable coverage that fits your budget and business needs.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I use my Marketplace plan at Emory Healthcare and other Atlanta hospitals?
              </h3>
              <p className="text-gray-700">
                Yes! Most Marketplace plans include access to Atlanta's premier healthcare facilities including Emory Healthcare, 
                Grady Memorial Hospital, Piedmont Healthcare, Northside Hospital, and Children's Healthcare of Atlanta. We help 
                you choose plans that include your preferred doctors and hospitals.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What if I fall into Georgia's Medicaid coverage gap?
              </h3>
              <p className="text-gray-700">
                If your income is too low to qualify for Marketplace subsidies but too high for Georgia Medicaid, we can help 
                you explore alternatives including community health centers with sliding fee scales, hospital financial assistance 
                programs, and advocacy resources. We also monitor your situation for income changes that might make you eligible 
                for subsidies.
              </p>
            </div>
          </div>
        </section>

        {/* State-to-County Linking */}
        <StateCountyLinking 
          serviceType="health-marketplace"
          currentState="Georgia"
          currentCounty="Fulton County"
          showStateLink={true}
          maxCounties={4}
        />

        {/* Cross-Service Recommendations */}
        <CrossServiceRecommendations 
          currentService="health-marketplace"
          location="Fulton County, Georgia"
          showAgeBased={true}
        />

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🍑 Get Atlanta Health Insurance Help Today</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Don't join the 180,000+ uninsured Fulton County residents. Get personalized Health Insurance Marketplace 
              guidance from licensed Georgia agents who understand Atlanta's diverse community and healthcare landscape.
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
                💻 Get Free Atlanta Quote
              </Link>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Free consultation • Licensed Georgia agents • Fulton County healthcare specialists
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}