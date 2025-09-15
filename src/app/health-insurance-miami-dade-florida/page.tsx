import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Miami-Dade Health Insurance Marketplace 2025 - Florida ACA Plans | El-Mag Insurance',
  description: 'Miami-Dade Health Insurance Marketplace guide: Navigate South Florida\'s diverse healthcare market with affordable ACA plans for 400,000+ uninsured residents. Bilingual enrollment assistance.',
  keywords: 'Miami-Dade health insurance, Florida ACA plans, Miami marketplace insurance, South Florida subsidies, Miami affordable health coverage, Florida health insurance agent',
  openGraph: {
    title: 'Miami-Dade Health Insurance Marketplace - South Florida ACA Coverage',
    description: 'Affordable Health Insurance Marketplace plans for Miami-Dade\'s 400,000+ uninsured residents with bilingual South Florida expertise.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/miami-dade-florida',
  },
}

const miamiDadeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://el-mag.com/health-insurance-miami-dade-florida',
  name: 'Miami-Dade Florida Health Insurance Marketplace',
  description: 'Comprehensive Health Insurance Marketplace guide for Miami-Dade County, Florida residents',
  url: 'https://el-mag.com/health-insurance-miami-dade-florida',
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
    name: 'Miami-Dade County, Florida',
    containedInPlace: {
      '@type': 'State',
      name: 'Florida'
    }
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Miami-Dade uninsured residents'
  }
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto puedo ahorrar con los subsidios del Mercado de Seguros en Miami-Dade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los residentes de Miami-Dade pueden ahorrar un promedio de $705 por año con los créditos fiscales mejorados. El 80% de los clientes pueden encontrar cobertura por $10 o menos por mes después de los subsidios.'
      }
    },
    {
      '@type': 'Question',
      name: 'What health insurance options are available for Miami\'s tourism and hospitality workers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Health Insurance Marketplace offers comprehensive individual and family plans specifically designed for Miami-Dade\'s 300,000+ hospitality workers who often lack employer coverage.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can snowbirds and seasonal residents get health insurance in Miami-Dade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Marketplace plans provide nationwide coverage, making them ideal for snowbirds who split time between Florida and northern states. Coverage travels with you.'
      }
    }
  ]
}

export default function MiamiDadeHealthInsurancePage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(miamiDadeStructuredData)
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
            <span className="font-bold">🌴 MIAMI-DADE: South Florida Healthcare Access</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Miami-Dade Health Insurance Marketplace: Affordable Coverage for South Florida's Gateway
          </h1>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">🏖️</span>
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-semibold text-orange-800 mb-2">
                  Miami-Dade's Healthcare Coverage Challenge
                </h2>
                <p className="text-orange-700">
                  As Florida's most populous county with <strong>2.7 million residents</strong>, Miami-Dade has an estimated 
                  <strong>400,000+ uninsured residents</strong>. With Florida's 10.68% uninsured rate and a massive tourism 
                  economy, hundreds of thousands of hospitality workers, seasonal employees, and Hispanic families lack 
                  affordable healthcare coverage. Enhanced Marketplace subsidies can save families <strong>$705 annually</strong>.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">400K+</div>
              <div className="text-red-800 font-semibold">Uninsured residents</div>
              <div className="text-red-600 text-sm mt-1">Miami-Dade County</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">69%</div>
              <div className="text-green-800 font-semibold">Hispanic population</div>
              <div className="text-green-600 text-sm mt-1">1.9M residents</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">300K+</div>
              <div className="text-blue-800 font-semibold">Tourism workers</div>
              <div className="text-blue-600 text-sm mt-1">Often uninsured</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
              <div className="text-purple-800 font-semibold">Find coverage</div>
              <div className="text-purple-600 text-sm mt-1">$10/month or less</div>
            </div>
          </div>
        </div>

        {/* Miami-Dade Demographics & Economy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🌎 Miami-Dade's Unique Healthcare Landscape</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🏖️ Gateway to the Americas</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🌎</span>
                  <span><strong>69% Hispanic population:</strong> Largest Hispanic community in US</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏨</span>
                  <span><strong>Tourism economy:</strong> 300,000+ hospitality workers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚢</span>
                  <span><strong>Cruise capital:</strong> Seasonal employment patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏗️</span>
                  <span><strong>Construction boom:</strong> Independent contractors prevalent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">❄️</span>
                  <span><strong>Snowbird destination:</strong> Seasonal resident healthcare needs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-4">⚠️ Coverage Barriers in Miami-Dade</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">💼</span>
                  <span><strong>Service economy:</strong> Limited employer-sponsored coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🌐</span>
                  <span><strong>Language barriers:</strong> Complex enrollment process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">💰</span>
                  <span><strong>Income volatility:</strong> Tourism seasonality affects eligibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🏠</span>
                  <span><strong>High cost of living:</strong> Healthcare competes with housing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">📋</span>
                  <span><strong>Immigration concerns:</strong> Fear of public charge implications</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">🏥 Miami's Healthcare Excellence:</h4>
            <p className="text-blue-700">
              Miami-Dade is home to world-class medical facilities including Jackson Memorial Hospital, Baptist Health, 
              Mount Sinai Medical Center, and the University of Miami Miller School of Medicine. Health Insurance 
              Marketplace plans ensure access to these premier facilities while providing the financial protection 
              Miami families need in America's gateway city.
            </p>
          </div>
        </section>

        {/* Community-Specific Solutions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💡 Soluciones del Mercado de Seguros para Miami-Dade</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">🎯 Asistencia Bilingüe</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Agentes que hablan español nativo</li>
                <li>• Materiales de inscripción en español</li>
                <li>• Eventos comunitarios en iglesias</li>
                <li>• Comprensión cultural y familiar</li>
                <li>• Soporte durante todo el año</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">🏨 Hospitality Worker Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Individual coverage for service workers</li>
                <li>• Plans for seasonal employment gaps</li>
                <li>• Family coverage for restaurant staff</li>
                <li>• Gig worker and contractor options</li>
                <li>• Special enrollment for job changes</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-4">❄️ Snowbird Coverage</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Nationwide coverage that travels</li>
                <li>• Florida resident plan options</li>
                <li>• Seasonal resident considerations</li>
                <li>• Northern state provider access</li>
                <li>• Emergency coverage anywhere</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Miami-Dade Communities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏘️ Miami-Dade Communities We Serve</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Miami/Downtown</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 120,000+ residents</div>
                <div><strong>Demographics:</strong> Young professionals, service workers</div>
                <div><strong>Industries:</strong> Tourism, finance, tech</div>
                <div><strong>Challenge:</strong> High rent vs. wage gap</div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Hialeah</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 65,000+ residents</div>
                <div><strong>Demographics:</strong> 95% Hispanic, working families</div>
                <div><strong>Industries:</strong> Manufacturing, retail, service</div>
                <div><strong>Need:</strong> Affordable family coverage</div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Kendall/Southwest</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 55,000+ residents</div>
                <div><strong>Demographics:</strong> Middle-income suburban families</div>
                <div><strong>Industries:</strong> Healthcare, education, business</div>
                <div><strong>Opportunity:</strong> Employer gap coverage</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">Homestead/South Dade</h3>
              <div className="space-y-2 text-yellow-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 45,000+ residents</div>
                <div><strong>Demographics:</strong> Agricultural workers, rural families</div>
                <div><strong>Industries:</strong> Agriculture, farming, nurseries</div>
                <div><strong>Challenge:</strong> Rural healthcare access</div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="font-semibent text-indigo-800 mb-3">Miami Beach</h3>
              <div className="space-y-2 text-indigo-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 25,000+ residents</div>
                <div><strong>Demographics:</strong> Tourism workers, young adults</div>
                <div><strong>Industries:</strong> Hospitality, entertainment, retail</div>
                <div><strong>Focus:</strong> Seasonal worker coverage</div>
              </div>
            </div>
            
            <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-3">Doral</h3>
              <div className="space-y-2 text-pink-700 text-sm">
                <div><strong>Uninsured Pop:</strong> 20,000+ residents</div>
                <div><strong>Demographics:</strong> International business community</div>
                <div><strong>Industries:</strong> Import/export, logistics, aviation</div>
                <div><strong>Opportunity:</strong> Small business owners</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Miami-Dade Marketplace Savings Examples</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">Restaurant Server (Age 29)</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Income:</strong> $28,000/year</div>
                <div className="flex justify-between">
                  <span>Bronze Plan Premium</span>
                  <span className="font-semibold">$195/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Credit Subsidy</span>
                  <span className="font-semibold text-green-600">-$185/month</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-green-800 font-semibold">
                    <span>Your Cost:</span>
                    <span>$10/month</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">Familia Hispana (4 personas)</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Ingresos:</strong> $55,000/año</div>
                <div className="flex justify-between">
                  <span>Plan Plata Premium</span>
                  <span className="font-semibold">$1,350/mes</span>
                </div>
                <div className="flex justify-between">
                  <span>Crédito Fiscal</span>
                  <span className="font-semibold text-blue-600">-$1,095/mes</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-blue-800 font-semibold">
                    <span>Su Costo:</span>
                    <span>$255/mes</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-4">Construction Worker</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Income:</strong> $45,000/year</div>
                <div className="flex justify-between">
                  <span>Silver Plan Premium</span>
                  <span className="font-semibold">$420/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Credit Subsidy</span>
                  <span className="font-semibold text-purple-600">-$285/month</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-purple-800 font-semibold">
                    <span>Your Cost:</span>
                    <span>$135/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h4 className="font-semibold text-yellow-800 mb-2">🌴 Miami-Dade Healthcare Value:</h4>
            <p className="text-yellow-700">
              With enhanced tax credits, 80% of Miami-Dade residents can access comprehensive health insurance for $10/month 
              or less. For the 400,000+ uninsured residents working in tourism, hospitality, and service industries, 
              this represents life-changing access to Miami's world-class healthcare system at an affordable price.
            </p>
          </div>
        </section>

        {/* Hurricane Preparedness */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🌀 Hurricane Season Health Insurance Preparedness</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-4">Hurricane Healthcare Risks</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• <strong>Hospital evacuations</strong> and facility closures</li>
                  <li>• <strong>Medication shortages</strong> and pharmacy closures</li>
                  <li>• <strong>Emergency medical needs</strong> during evacuation</li>
                  <li>• <strong>Power outages</strong> affecting medical equipment</li>
                  <li>• <strong>Out-of-area treatment</strong> during evacuation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-4">Marketplace Coverage Benefits</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• <strong>Nationwide coverage</strong> during evacuation</li>
                  <li>• <strong>Emergency room coverage</strong> anywhere in US</li>
                  <li>• <strong>Prescription refills</strong> at out-of-area pharmacies</li>
                  <li>• <strong>Urgent care access</strong> in evacuation destinations</li>
                  <li>• <strong>No network restrictions</strong> during emergencies</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-white rounded-lg p-6">
              <h4 className="font-semibold text-red-800 mb-3">🚨 Don't Wait for Hurricane Season</h4>
              <p className="text-red-700">
                Hurricane season runs June through November in Miami-Dade. Having comprehensive health insurance ensures 
                your family is protected whether you shelter in place or evacuate to other states. Marketplace plans 
                provide the coverage and peace of mind you need when facing South Florida's annual hurricane threat.
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
                ¿Cuánto puedo ahorrar con los subsidios del Mercado de Seguros en Miami-Dade?
              </h3>
              <p className="text-gray-700">
                Los residentes de Miami-Dade pueden ahorrar un promedio de $705 por año con los créditos fiscales mejorados. 
                El 80% de los clientes pueden encontrar cobertura por $10 o menos por mes después de los subsidios. 
                La cantidad exacta depende de sus ingresos, el tamaño de su familia y el plan que elija.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What health insurance options are available for Miami's tourism and hospitality workers?
              </h3>
              <p className="text-gray-700">
                The Health Insurance Marketplace offers comprehensive individual and family plans specifically designed for 
                Miami-Dade's 300,000+ hospitality workers who often lack employer coverage. We understand seasonal employment 
                patterns and can help find coverage that works with variable income from tourism jobs.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can snowbirds and seasonal residents get health insurance in Miami-Dade?
              </h3>
              <p className="text-gray-700">
                Yes! Marketplace plans provide nationwide coverage, making them ideal for snowbirds who split time between 
                Florida and northern states. Your coverage travels with you, providing access to healthcare whether you're 
                in Miami Beach or back home in New York, Michigan, or Canada (for emergencies).
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ¿Puedo usar mi plan del Mercado en los hospitales principales de Miami?
              </h3>
              <p className="text-gray-700">
                ¡Sí! Los planes del Mercado incluyen acceso a las instalaciones médicas de renombre mundial de Miami, 
                incluyendo Jackson Memorial Hospital, Baptist Health South Florida, Mount Sinai Medical Center, y el 
                University of Miami Hospital. La mayoría de los planes tienen redes amplias de proveedores que incluyen 
                las principales instalaciones de atención médica de Miami-Dade.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What if I work multiple part-time jobs in Miami's service industry?
              </h3>
              <p className="text-gray-700">
                Many Miami residents work multiple part-time jobs in restaurants, hotels, and retail without getting benefits 
                from any employer. The Marketplace is perfect for this situation - you can get individual coverage regardless 
                of your employment status, and subsidies help make it affordable even with variable income.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🌴 Obtenga Ayuda con Seguros de Salud en Miami-Dade Hoy</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              No se una a los 400,000+ residentes sin seguro en Miami-Dade. Obtenga orientación personalizada del 
              Mercado de Seguros de Salud de agentes bilingües con licencia de Florida que entienden la diversa 
              comunidad y las necesidades de atención médica del sur de la Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 LLAME AHORA: 331-E-HEALTH
              </a>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
              >
                💻 Cotización Gratis Online
              </Link>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Consulta gratuita • Agentes bilingües • Especialistas del Mercado de Miami-Dade
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}