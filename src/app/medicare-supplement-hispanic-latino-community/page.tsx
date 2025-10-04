import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicare Supplement para la Comunidad Hispana - Guía Completa 2025 | El-Mag Insurance',
  description: 'Guía completa de Medicare Supplement para hispanos y latinos. Información en español sobre Medigap, costos, beneficios y cómo obtener cobertura médica integral.',
  keywords: 'Medicare Supplement hispanos, Medigap latinos, seguro médico hispanos, Medicare para latinos, seguro complementario Medicare español',
  openGraph: {
    title: 'Medicare Supplement para Hispanos - Guía en Español',
    description: 'Información completa sobre Medicare Supplement para la comunidad hispana con explicaciones claras en español.',
    type: 'article',
    locale: 'es_US',
  ,
      images: [
        {
          url: 'https://www.elmaginsurance.com/images/og-medicare-supplement.jpg',
          width: 1200,
          height: 630,
          alt: 'Medicare Supplement Plans - El-Mag Insurance',
        },
      ],
    },
}

const hispanicStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://el-mag.com/medicare-supplement-hispanic-latino-community',
  name: 'Medicare Supplement para la Comunidad Hispana',
  description: 'Guía completa de Medicare Supplement diseñada específicamente para hispanos y latinos',
  url: 'https://el-mag.com/medicare-supplement-hispanic-latino-community',
  inLanguage: ['en', 'es'],
  about: {
    '@type': 'FinancialProduct',
    name: 'Medicare Supplement Insurance',
    category: 'Health Insurance',
    provider: {
      '@type': 'Organization',
      name: 'El-Mag Insurance'
    }
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Hispanic and Latino Medicare beneficiaries'
  }
}

const hispanicFaqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Por qué los hispanos tienen tasas más bajas de inscripción en Medicare Supplement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los hispanos tienen solo 15% de inscripción en Medigap comparado con 42% de blancos debido a barreras del idioma, menores ingresos promedio, menos conocimiento sobre opciones de Medicare, y preferencia histórica por Medicare Advantage debido a costos iniciales más bajos.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Cómo puede la comunidad hispana obtener ayuda con Medicare Supplement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La comunidad hispana puede obtener ayuda a través de agentes con licencia que hablan español, organizaciones comunitarias hispanas, centros de la tercera edad latinos, programas SHIP en español, y recursos de Medicare.gov en español.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Qué beneficios especiales ofrece Medicare Supplement para familias hispanas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicare Supplement ofrece cobertura nacional (importante para familias con parientes en México/otros países), no requiere referidos para especialistas, costos predecibles, y cobertura de emergencia en el extranjero para viajes familiares.'
      }
    }
  ]
}

export default function HispanicMedicareSupplementPage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hispanicStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hispanicFaqData)
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section - Bilingual */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-red-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🌟 COMUNIDAD HISPANA: Medicare Supplement / Medigap</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Medicare Supplement para la Comunidad Hispana: Cobertura Médica Integral
          </h1>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">📊</span>
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-semibold text-orange-800 mb-2">
                  Brecha de Cobertura en la Comunidad Hispana
                </h2>
                <p className="text-orange-700 mb-3">
                  Solo el <strong>15% de hispanos</strong> tienen Medicare Supplement comparado con <strong>42% de blancos</strong>. 
                  Esta brecha representa una oportunidad perdida de <strong>cobertura médica integral</strong> para familias hispanas 
                  que enfrentan <strong>barreras del idioma y falta de información</strong> sobre opciones de Medicare.
                </p>
                <p className="text-orange-700 text-sm">
                  <em>Only 15% of Hispanics have Medicare Supplement compared to 42% of whites, representing a significant 
                  coverage gap that affects comprehensive healthcare access for Hispanic families.</em>
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">15%</div>
              <div className="text-red-800 font-semibold">Hispanics con Medigap</div>
              <div className="text-red-600 text-sm mt-1">vs 42% blancos</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">62M</div>
              <div className="text-blue-800 font-semibold">Hispanos en EE.UU.</div>
              <div className="text-blue-600 text-sm mt-1">Creciendo rápidamente</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-green-800 font-semibold">Sin Medigap</div>
              <div className="text-green-600 text-sm mt-1">Oportunidad educativa</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$180</div>
              <div className="text-purple-800 font-semibold">Promedio mensual</div>
              <div className="text-purple-600 text-sm mt-1">Varía por estado</div>
            </div>
          </div>
        </div>

        {/* Language Toggle Notice */}
        <section className="mb-12">
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">🗣️ Información Disponible en Español</h3>
                <p className="text-blue-700 text-sm">
                  Esta guía incluye información en español e inglés para servir mejor a nuestra comunidad hispana.
                </p>
                <p className="text-blue-700 text-sm italic">
                  This guide includes information in both Spanish and English to better serve our Hispanic community.
                </p>
              </div>
              <div className="text-4xl">🇺🇸🇲🇽</div>
            </div>
          </div>
        </section>

        {/* Why Hispanic Enrollment is Low */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🔍 ¿Por Qué la Baja Inscripción Hispana en Medicare Supplement?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-4">🚧 Barreras Principales / Main Barriers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🗣️</span>
                  <div>
                    <span><strong>Idioma:</strong> Información limitada en español</span>
                    <p className="text-sm text-gray-600"><em>Language: Limited information available in Spanish</em></p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">💰</span>
                  <div>
                    <span><strong>Ingresos:</strong> Menores ingresos promedio limitan opciones</span>
                    <p className="text-sm text-gray-600"><em>Income: Lower average incomes limit coverage options</em></p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">📚</span>
                  <div>
                    <span><strong>Educación:</strong> Menos conocimiento sobre opciones Medicare</span>
                    <p className="text-sm text-gray-600"><em>Education: Less knowledge about Medicare options</em></p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">🏥</span>
                  <div>
                    <span><strong>Acceso:</strong> Menos acceso a agentes con licencia</span>
                    <p className="text-sm text-gray-600"><em>Access: Less access to licensed insurance agents</em></p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">💡 Soluciones / Solutions</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🗣️</span>
                  <div>
                    <span><strong>Agentes Bilingües:</strong> Expertos que hablan español</span>
                    <p className="text-sm text-gray-600"><em>Bilingual Agents: Spanish-speaking licensed experts</em></p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏘️</span>
                  <div>
                    <span><strong>Alcance Comunitario:</strong> Centros hispanos y iglesias</span>
                    <p className="text-sm text-gray-600"><em>Community Outreach: Hispanic centers and churches</em></p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">📖</span>
                  <div>
                    <span><strong>Educación Culturalmente Apropiada:</strong> Ejemplos familiares</span>
                    <p className="text-sm text-gray-600"><em>Culturally Appropriate Education: Familiar examples and scenarios</em></p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">💵</span>
                  <div>
                    <span><strong>Opciones de Presupuesto:</strong> Planes para diferentes ingresos</span>
                    <p className="text-sm text-gray-600"><em>Budget Options: Plans for different income levels</em></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cultural Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🌟 Beneficios Especiales para Familias Hispanas</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-red-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Por Qué Medicare Supplement Es Ideal para Hispanos / Why Medigap is Ideal for Hispanics
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold text-green-800 mb-4">🌎 Cobertura Nacional / National Coverage</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Viajes familiares a México:</strong> Cobertura de emergencia en el extranjero</li>
                  <li><em>Family trips to Mexico: Foreign emergency coverage included</em></li>
                  <li>• <strong>Familia en otros estados:</strong> Cobertura en todos los EE.UU.</li>
                  <li><em>Family in other states: Coverage throughout the United States</em></li>
                  <li>• <strong>Sin redes restrictivas:</strong> Cualquier doctor que acepte Medicare</li>
                  <li><em>No network restrictions: Any doctor that accepts Medicare</em></li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold text-blue-800 mb-4">👨‍⚕️ Acceso a Especialistas</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Sin referidos necesarios:</strong> Acceso directo a especialistas</li>
                  <li><em>No referrals needed: Direct access to specialists</em></li>
                  <li>• <strong>Doctores que hablan español:</strong> Libertad de elegir</li>
                  <li><em>Spanish-speaking doctors: Freedom to choose</em></li>
                  <li>• <strong>Continuidad de cuidado:</strong> Mantener doctores actuales</li>
                  <li><em>Continuity of care: Keep current doctors</em></li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold text-purple-800 mb-4">💰 Costos Predecibles</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Sin sorpresas:</strong> Costos fijos y predecibles</li>
                  <li><em>No surprises: Fixed and predictable costs</em></li>
                  <li>• <strong>Protección financiera:</strong> Límites claros de gastos</li>
                  <li><em>Financial protection: Clear spending limits</em></li>
                  <li>• <strong>Planificación familiar:</strong> Presupuesto fácil para familias</li>
                  <li><em>Family planning: Easy budgeting for families</em></li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold text-orange-800 mb-4">🏥 Cuidado Cultural</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Hospitales hispanos:</strong> Acceso a centros culturalmente competentes</li>
                  <li><em>Hispanic hospitals: Access to culturally competent centers</em></li>
                  <li>• <strong>Medicina tradicional:</strong> Combinar cuidados tradicionales y modernos</li>
                  <li><em>Traditional medicine: Combine traditional and modern care</em></li>
                  <li>• <strong>Apoyo familiar:</strong> Permite participación familiar en decisiones</li>
                  <li><em>Family support: Allows family participation in decisions</em></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* State-Specific Hispanic Communities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🗺️ Comunidades Hispanas por Estado</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">Texas 🤠</h3>
              <div className="space-y-2 text-orange-700 text-sm">
                <div><strong>Población Hispana:</strong> 40% del estado</div>
                <div><strong>Medicare Supplement:</strong> $120/mes promedio</div>
                <div><strong>Ciudades Principales:</strong> San Antonio, Houston, Dallas</div>
                <div><strong>Oportunidad:</strong> Mejor valor nacional</div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">California 🌟</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Población Hispana:</strong> 39% del estado</div>
                <div><strong>Medicare Supplement:</strong> $200/mes promedio</div>
                <div><strong>Ciudades Principales:</strong> Los Angeles, San Diego</div>
                <div><strong>Oportunidad:</strong> Community rating</div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Florida 🌴</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Población Hispana:</strong> 26% del estado</div>
                <div><strong>Medicare Supplement:</strong> $150/mes promedio</div>
                <div><strong>Ciudades Principales:</strong> Miami, Orlando, Tampa</div>
                <div><strong>Oportunidad:</strong> Crecimiento rápido</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Bilingual */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Preguntas Frecuentes / Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900">
                    ¿Necesito hablar inglés perfecto para obtener Medicare Supplement?
                  </h3>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700">
                  <p className="mb-3">
                    <strong>¡No!</strong> No necesitas hablar inglés perfecto. Tenemos agentes bilingües con licencia 
                    que pueden explicar todas las opciones en español. También ofrecemos:
                  </p>
                  <ul className="space-y-1 text-sm mb-3">
                    <li>• Consultas completamente en español</li>
                    <li>• Documentos traducidos</li>
                    <li>• Explicaciones culturalmente apropiadas</li>
                    <li>• Asistencia con formularios y aplicaciones</li>
                  </ul>
                  <p className="text-sm italic text-gray-600">
                    <strong>No!</strong> You don't need to speak perfect English. We have licensed bilingual agents 
                    who can explain all options in Spanish, with translated documents and cultural explanations.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900">
                    ¿Medicare Supplement cubre viajes a México para visitar familia?
                  </h3>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700">
                  <p className="mb-3">
                    <strong>Sí, con limitaciones.</strong> Los planes Medicare Supplement G y N incluyen cobertura 
                    de emergencia en el extranjero:
                  </p>
                  <ul className="space-y-1 text-sm mb-3">
                    <li>• Emergencias médicas durante viajes</li>
                    <li>• Cobertura hasta $50,000 de por vida</li>
                    <li>• Deducible de $250 por incidente</li>
                    <li>• Solo para cuidado de emergencia, no cuidado rutinario</li>
                  </ul>
                  <p className="text-sm italic text-gray-600">
                    <strong>Yes, with limitations.</strong> Plans G and N include foreign emergency coverage 
                    up to $50,000 lifetime with $250 deductible, for emergency care only.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900">
                    ¿Puedo encontrar doctores que hablen español con Medicare Supplement?
                  </h3>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700">
                  <p className="mb-3">
                    <strong>¡Absolutamente!</strong> Medicare Supplement te da libertad total para elegir doctores:
                  </p>
                  <ul className="space-y-1 text-sm mb-3">
                    <li>• Cualquier doctor que acepte Medicare (la mayoría)</li>
                    <li>• Sin restricciones de red</li>
                    <li>• Puedes cambiar doctores cuando quieras</li>
                    <li>• Acceso a hospitales hispanos y centros culturalmente competentes</li>
                    <li>• No necesitas referidos para ver especialistas</li>
                  </ul>
                  <p className="text-sm italic text-gray-600">
                    <strong>Absolutely!</strong> Medicare Supplement gives you complete freedom to choose any 
                    Medicare doctor, including Spanish-speaking providers and culturally competent centers.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section - Bilingual */}
        <section className="bg-gradient-to-r from-green-600 to-red-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🌟 Obtén Ayuda Experta en Español / Get Expert Help in Spanish</h2>
            <p className="text-green-100 mb-6 max-w-3xl mx-auto">
              No permitas que las barreras del idioma te impidan obtener la cobertura médica que mereces. 
              Nuestros agentes bilingües con licencia están listos para ayudarte en español.
            </p>
            <p className="text-green-100 mb-6 max-w-3xl mx-auto text-sm italic">
              Don't let language barriers prevent you from getting the healthcare coverage you deserve. 
              Our licensed bilingual agents are ready to help you in Spanish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                🌟 Consulta Gratis en Español
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📞 Llama Ahora - Hablamos Español
              </a>
            </div>
            <p className="text-green-200 text-sm mt-4">
              Agentes bilingües • Consulta gratis • Sin presión • Bilingual agents • Free consultation • No pressure
            </p>
          </div>
        </section>

        {/* Community Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔗 Recursos para la Comunidad Hispana</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🏥 Centros de Salud Hispanos</h3>
              <p className="text-gray-600 text-sm">
                Encuentra centros de salud culturalmente competentes que aceptan Medicare y Medicare Supplement
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-2">📚 Educación en Español</h3>
              <p className="text-gray-600 text-sm">
                Recursos educativos sobre Medicare en español para toda la familia
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">👥 Organizaciones Comunitarias</h3>
              <p className="text-gray-600 text-sm">
                Conecta con organizaciones hispanas locales que ofrecen asistencia con Medicare
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}