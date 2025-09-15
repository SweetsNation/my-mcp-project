import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Clark County Health Insurance Marketplace 2025 - Las Vegas ACA Plans | El-Mag Insurance',
  description: 'Clark County Health Insurance Marketplace guide: Navigate Las Vegas healthcare market with affordable ACA plans for 280,000+ uninsured residents. Tourism worker coverage specialists.',
  keywords: 'Clark County health insurance, Las Vegas ACA plans, Nevada marketplace insurance, Las Vegas subsidies, Nevada affordable health coverage, Nevada health insurance agent',
  openGraph: {
    title: 'Clark County Health Insurance Marketplace - Las Vegas ACA Coverage',
    description: 'Affordable Health Insurance Marketplace plans for Clark County\'s 280,000+ uninsured residents with Las Vegas healthcare expertise.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/health-insurance-clark-county-nevada',
  },
}

const clarkCountyStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://el-mag.com/health-insurance-clark-county-nevada',
  name: 'Clark County Nevada Health Insurance Marketplace',
  description: 'Comprehensive Health Insurance Marketplace guide for Clark County, Nevada residents',
  url: 'https://el-mag.com/health-insurance-clark-county-nevada',
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
    name: 'Clark County, Nevada',
    containedInPlace: {
      '@type': 'State',
      name: 'Nevada'
    }
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Clark County uninsured residents'
  }
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much can Las Vegas tourism workers save with Marketplace subsidies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clark County tourism and hospitality workers can save an average of $705 per year with enhanced tax credits. 80% can find coverage for $10 or less per month, perfect for variable income from tips and seasonal work.'
      }
    },
    {
      '@type': 'Question',
      name: 'What health insurance options are available for Nevada Hispanic families?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide bilingual enrollment assistance for Clark County\'s 30% Hispanic population, with culturally appropriate plan selection and understanding of immigration concerns affecting healthcare access.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can casino workers and gig economy employees get individual health insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! The Health Insurance Marketplace offers flexible individual and family plans perfect for Las Vegas casino workers, rideshare drivers, and other gig economy workers who need coverage outside traditional employment.'
      }
    }
  ]
}

export default function ClarkCountyHealthInsurancePage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clarkCountyStructuredData)
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
            <span className="font-bold">🎰 CLARK COUNTY: Las Vegas Healthcare Marketplace</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Health Insurance in Clark County, Nevada 2025
          </h1>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">🎲</span>
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-semibold text-orange-800 mb-2">
                  Clark County's Unique Healthcare Challenge
                </h2>
                <p className="text-orange-700">
                  Home to <strong>2.3 million residents</strong> in the Las Vegas metropolitan area, Clark County has an estimated 
                  <strong>280,000+ uninsured residents</strong>. With Nevada's 10.67% uninsured rate and a massive tourism economy 
                  employing 350,000+ hospitality workers, many Las Vegas families lack employer-sponsored coverage. Enhanced 
                  Marketplace subsidies can save families <strong>$705 annually</strong> - crucial for workers dependent on tips 
                  and seasonal employment.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">280K+</div>
              <div className="text-red-800 font-semibold">Uninsured residents</div>
              <div className="text-red-600 text-sm mt-1">Clark County</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">350K+</div>
              <div className="text-green-800 font-semibold">Tourism workers</div>
              <div className="text-green-600 text-sm mt-1">Often uninsured</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-blue-800 font-semibold">Hispanic population</div>
              <div className="text-blue-600 text-sm mt-1">690K+ residents</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-purple-800 font-semibold">Economy</div>
              <div className="text-purple-600 text-sm mt-1">Round-the-clock city</div>
            </div>
          </div>
        </div>

        {/* Las Vegas Economy & Healthcare */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🎭 Las Vegas Economy & Healthcare Landscape</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🎰 Entertainment Capital Economy</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏨</span>
                  <span><strong>350,000+ tourism workers:</strong> Hotels, casinos, restaurants, entertainment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚗</span>
                  <span><strong>Gig economy hub:</strong> Rideshare, delivery, contract workers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏗️</span>
                  <span><strong>Construction boom:</strong> Independent contractors and seasonal work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🌟</span>
                  <span><strong>Entertainment industry:</strong> Performers, artists, production crews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🛍️</span>
                  <span><strong>Retail and service:</strong> Shopping, dining, personal services</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-4">⚠️ Healthcare Access Barriers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">💰</span>
                  <span><strong>Variable income:</strong> Tips and seasonal work affect subsidy eligibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🌙</span>
                  <span><strong>Non-traditional schedules:</strong> 24/7 economy, shift work challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🏢</span>
                  <span><strong>Small employers:</strong> Many hospitality jobs lack benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🌐</span>
                  <span><strong>Language barriers:</strong> Large Spanish-speaking population</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🏠</span>
                  <span><strong>High cost of living:</strong> Healthcare competes with housing costs</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">🏥 Las Vegas Healthcare Excellence:</h4>
            <p className="text-blue-700">
              Clark County offers world-class healthcare through University Medical Center (Nevada's only Level 1 trauma center), 
              Summerlin Hospital, Sunrise Hospital, and the Cleveland Clinic Lou Ruvo Center for Brain Health. Health Insurance 
              Marketplace plans ensure access to these facilities while providing financial protection for Las Vegas workers 
              in the entertainment and hospitality industries.
            </p>
          </div>
        </section>

        {/* Industry-Specific Solutions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💡 Health Insurance Solutions for Las Vegas Workers</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">🎰 Casino & Hospitality Workers</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Individual coverage for tipped employees</li>
                <li>• Plans accommodating variable income</li>
                <li>• Family coverage for service workers</li>
                <li>• 24/7 customer service availability</li>
                <li>• Flexible premium payment schedules</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">🌮 Hispanic Community Support</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Asistencia de inscripción en español</li>
                <li>• Agentes bilingües nativos</li>
                <li>• Comprensión cultural y familiar</li>
                <li>• Eventos comunitarios y iglesias</li>
                <li>• Materiales educativos en español</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-4">🚗 Gig Economy Workers</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Coverage for rideshare drivers</li>
                <li>• Plans for delivery workers</li>
                <li>• Freelancer and contractor options</li>
                <li>• Variable income consideration</li>
                <li>• Nationwide coverage for travel</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Clark County Communities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏘️ Clark County Communities We Serve</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Las Vegas Strip Area</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 95,000+ residents</div>
                <div><strong>Demographics:</strong> Tourism workers, young adults</div>
                <div><strong>Industries:</strong> Casinos, hotels, entertainment</div>
                <div><strong>Challenge:</strong> Variable income, shift schedules</div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">East Las Vegas</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 65,000+ residents</div>
                <div><strong>Demographics:</strong> 85% Hispanic, working families</div>
                <div><strong>Industries:</strong> Service, construction, retail</div>
                <div><strong>Need:</strong> Spanish-language enrollment support</div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Henderson</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 35,000+ residents</div>
                <div><strong>Demographics:</strong> Suburban families, professionals</div>
                <div><strong>Industries:</strong> Healthcare, business, education</div>
                <div><strong>Opportunity:</strong> Middle-income employer gap</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">North Las Vegas</h3>
              <div className="space-y-2 text-yellow-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 45,000+ residents</div>
                <div><strong>Demographics:</strong> Diverse, working-class</div>
                <div><strong>Industries:</strong> Logistics, manufacturing, service</div>
                <div><strong>Focus:</strong> Affordable family coverage</div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">Summerlin</h3>
              <div className="space-y-2 text-indigo-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 20,000+ residents</div>
                <div><strong>Demographics:</strong> Affluent, professionals</div>
                <div><strong>Industries:</strong> Finance, real estate, healthcare</div>
                <div><strong>Opportunity:</strong> High-income individual plans</div>
              </div>
            </div>
            
            <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-3">Spring Valley</h3>
              <div className="space-y-2 text-pink-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 25,000+ residents</div>
                <div><strong>Demographics:</strong> Mixed income, multicultural</div>
                <div><strong>Industries:</strong> Hospitality, retail, construction</div>
                <div><strong>Challenge:</strong> Language and cultural barriers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tourism Worker Focus */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏨 Health Insurance for Las Vegas Tourism Workers</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">🎯 Tourism Industry Challenges</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Seasonal employment:</strong> Convention peaks and slow seasons</li>
                  <li>• <strong>Tip-based income:</strong> Variable monthly earnings</li>
                  <li>• <strong>Part-time status:</strong> Many workers below benefit thresholds</li>
                  <li>• <strong>High turnover:</strong> Job changes affect coverage continuity</li>
                  <li>• <strong>Shift work:</strong> Difficult to access enrollment assistance</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">💡 Marketplace Solutions</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Income averaging:</strong> Annual income estimates for subsidies</li>
                  <li>• <strong>Special enrollment:</strong> Job changes trigger enrollment periods</li>
                  <li>• <strong>Catastrophic plans:</strong> Low-cost options for young workers</li>
                  <li>• <strong>24/7 enrollment:</strong> Online application anytime</li>
                  <li>• <strong>Year-round support:</strong> Ongoing customer service</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-white rounded-lg p-6">
              <h4 className="font-semibold text-blue-800 mb-3">🎰 "Vegas Strong: Health Coverage That Works"</h4>
              <p className="text-blue-700">
                Las Vegas tourism workers deserve health insurance that understands their unique employment situation. 
                Our Marketplace plans accommodate variable income, provide nationwide coverage for workers who travel, 
                and offer the flexibility needed in America's entertainment capital. From casino dealers to hotel housekeepers, 
                we help Las Vegas workers find affordable coverage that fits their lifestyle.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Clark County Marketplace Savings Examples</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">Casino Dealer (Age 26)</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Income:</strong> $35,000/year (tips included)</div>
                <div className="flex justify-between">
                  <span>Bronze Plan Premium</span>
                  <span className="font-semibold">$245/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Credit Subsidy</span>
                  <span className="font-semibold text-green-600">-$215/month</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-green-800 font-semibold">
                    <span>Your Cost:</span>
                    <span>$30/month</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">Familia Hispana (3 personas)</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Ingresos:</strong> $45,000/año</div>
                <div className="flex justify-between">
                  <span>Plan Plata Premium</span>
                  <span className="font-semibold">$1,125/mes</span>
                </div>
                <div className="flex justify-between">
                  <span>Crédito Fiscal</span>
                  <span className="font-semibold text-blue-600">-$975/mes</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-blue-800 font-semibold">
                    <span>Su Costo:</span>
                    <span>$150/mes</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-4">Rideshare Driver</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Income:</strong> $28,000/year</div>
                <div className="flex justify-between">
                  <span>Silver Plan Premium</span>
                  <span className="font-semibold">$365/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Credit Subsidy</span>
                  <span className="font-semibold text-purple-600">-$355/month</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-purple-800 font-semibold">
                    <span>Your Cost:</span>
                    <span>$10/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h4 className="font-semibold text-yellow-800 mb-2">🎲 Las Vegas Healthcare Investment:</h4>
            <p className="text-yellow-700">
              With enhanced tax credits, 80% of Clark County residents can access comprehensive health insurance for $10/month 
              or less. For the 280,000+ uninsured residents working in tourism, entertainment, and gig economy jobs, 
              this represents life-changing access to Las Vegas's excellent healthcare system at prices that work with 
              variable income from tips and seasonal employment.
            </p>
          </div>
        </section>

        {/* 24/7 City Healthcare */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🌙 24/7 Healthcare for the City That Never Sleeps</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Round-the-Clock Coverage Needs</h3>
                <ul className="space-y-2 text-purple-700">
                  <li>• <strong>Night shift workers:</strong> Healthcare access during off hours</li>
                  <li>• <strong>Weekend schedules:</strong> Saturday/Sunday work patterns</li>
                  <li>• <strong>Emergency coverage:</strong> 24/7 emergency room access</li>
                  <li>• <strong>Urgent care:</strong> After-hours medical needs</li>
                  <li>• <strong>Prescription access:</strong> 24-hour pharmacy coverage</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Marketplace Plan Benefits</h3>
                <ul className="space-y-2 text-purple-700">
                  <li>• <strong>University Medical Center:</strong> 24/7 Level 1 trauma center</li>
                  <li>• <strong>Emergency coverage:</strong> No prior authorization needed</li>
                  <li>• <strong>Urgent care networks:</strong> Extended hour clinics</li>
                  <li>• <strong>Telehealth options:</strong> Virtual care anytime</li>
                  <li>• <strong>Prescription coverage:</strong> 24-hour pharmacy access</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-white rounded-lg p-6">
              <h4 className="font-semibold text-purple-800 mb-3">🎭 Healthcare That Fits Vegas Life</h4>
              <p className="text-purple-700">
                Las Vegas is unique - a city where people work when others sleep, where weekends are the busiest time, 
                and where medical emergencies don't wait for business hours. Our Marketplace plans understand this reality, 
                providing coverage that works with Vegas schedules and access to healthcare facilities equipped to serve 
                the entertainment capital 24 hours a day, 365 days a year.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Preguntas Frecuentes / FAQ</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much can Las Vegas tourism workers save with Marketplace subsidies?
              </h3>
              <p className="text-gray-700">
                Clark County tourism and hospitality workers can save an average of $705 per year with enhanced tax credits. 
                80% can find coverage for $10 or less per month after subsidies. This is especially important for workers 
                with variable income from tips, seasonal employment, and part-time schedules common in the Las Vegas hospitality industry.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Qué opciones de seguro de salud están disponibles para las familias hispanas de Nevada?
              </h3>
              <p className="text-gray-700">
                Proporcionamos asistencia de inscripción bilingüe para la población hispana del 30% del Condado de Clark, 
                con selección de planes culturalmente apropiada y comprensión de las preocupaciones de inmigración que 
                afectan el acceso a la atención médica. Nuestros agentes hablan español nativo y comprenden las 
                necesidades únicas de las familias hispanas en Las Vegas.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can casino workers and gig economy employees get individual health insurance?
              </h3>
              <p className="text-gray-700">
                Yes! The Health Insurance Marketplace offers flexible individual and family plans perfect for Las Vegas 
                casino workers, rideshare drivers, delivery workers, and other gig economy employees who need coverage 
                outside traditional employment. We understand variable income patterns and can help structure coverage 
                that works with your unique employment situation.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What if my income varies significantly due to tips and seasonal work?
              </h3>
              <p className="text-gray-700">
                The Marketplace uses annual income estimates for subsidy calculations, which works well for Las Vegas 
                workers with variable income. We help you estimate your annual income including tips, seasonal variations, 
                and multiple income sources. If your income changes significantly during the year, you can update your 
                application and adjust your subsidies accordingly.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I get coverage if I work night shifts or weekends?
              </h3>
              <p className="text-gray-700">
                Absolutely! Your work schedule doesn't affect your eligibility for Marketplace coverage. Whether you work 
                graveyard shifts at a casino, weekend events, or any non-traditional schedule, you can enroll in comprehensive 
                health insurance. Plus, Las Vegas has 24/7 healthcare facilities and urgent care options that work with your 
                schedule when you need medical care.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🎰 Get Las Vegas Health Insurance Help Today</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Don't join the 280,000+ uninsured Clark County residents. Get personalized Health Insurance Marketplace 
              guidance from licensed Nevada agents who understand Las Vegas's unique economy and 24/7 healthcare needs.
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
                💻 Get Free Vegas Quote
              </Link>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Consulta gratuita • Agentes bilingües • Especialistas del turismo de Las Vegas
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}