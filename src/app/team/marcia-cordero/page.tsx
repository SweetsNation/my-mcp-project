import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SocialProofSection from '@/components/SocialProofSection'
import TeamPageAnalytics from '@/components/TeamPageAnalytics'
import { generateTeamMemberSchema } from '@/lib/schema/team-member-schema'

export const metadata: Metadata = {
  title: 'Marcia Cordero - Health Insurance Marketplace Expert Florida | Life Insurance Specialist | ACA Plans & Term Life Insurance',
  description: 'Marcia Cordero: Health Insurance Marketplace & Life Insurance expert. 1+ years helping Florida families get affordable health insurance, life insurance quotes, ACA plans. Bilingual service - Free consultations - 786-569-7713.',
  keywords: 'Health Insurance Marketplace Florida, life insurance agent, ACA plans, affordable health insurance, term life insurance, life insurance quotes, premium tax credits, health insurance subsidies, bilingual insurance agent, final expense insurance',
  openGraph: {
    title: 'Health Insurance Marketplace Expert | Life Insurance Specialist | Marcia Cordero',
    description: 'Get affordable health insurance & life insurance with Marcia Cordero. Expert Health Insurance Marketplace guidance, ACA plan optimization, life insurance quotes. Bilingual service.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/marcia-cordero',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Health Insurance Marketplace Expert | Life Insurance Specialist',
    description: 'Expert Health Insurance Marketplace & Life Insurance guidance. Affordable health insurance, ACA plans, term life insurance. Bilingual service.',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/team/marcia-cordero',
  },
}

const structuredData = generateTeamMemberSchema({
  name: 'Marcia Zulema Cordero Rizo',
  jobTitle: 'Health Insurance Marketplace Expert & Life Insurance Specialist',
  slug: 'marcia-cordero',
  description: 'Bilingual Health Insurance Marketplace & Life Insurance expert with 1+ years experience serving Florida families. Specializes in ACA plans, premium tax credits, and life insurance solutions.',
  specialties: [
    'Health Insurance Marketplace',
    'Life Insurance',
    'Premium Tax Credits',
    'Final Expense Insurance',
    'Medicare Advantage Plans',
    'ACA Plans'
  ],
  experience: '1+ years',
  location: 'Florida',
  languages: ['Spanish', 'English'],
  email: 'marcia@elmag-insurance.com',
  phone: '+1-786-569-7713'
});

const marciaStructuredDataOld = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/marcia-cordero#person',
    name: 'Marcia Zulema Cordero Rizo',
    givenName: 'Marcia Zulema',
    familyName: 'Cordero Rizo',
    jobTitle: 'Health Insurance Marketplace Expert & Life Insurance Specialist',
    description: 'Bilingual Health Insurance Marketplace & Life Insurance expert with 1+ years experience serving Florida families. Specializes in ACA plans, premium tax credits, and life insurance solutions.',
    url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/marcia-cordero',
    sameAs: [
      'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/marcia-cordero',
      'https://www.linkedin.com/in/marcia-cordero-insurance'
    ],
    email: 'marcia@elmag-insurance.com',
    telephone: '+1-786-569-7713',
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app#organization',
      name: 'El-Mag Insurance',
      url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app',
      telephone: '786-569-7713',
      email: 'info@elmag-insurance.com'
    },
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'Health Insurance Marketplace',
        description: 'ACA marketplace plans and premium tax credits'
      },
      {
        '@type': 'Thing', 
        name: 'Life Insurance',
        description: 'Term life, whole life, and final expense insurance'
      },
      {
        '@type': 'Thing',
        name: 'Premium Tax Credits',
        description: 'ACA subsidy optimization and cost sharing reductions'
      },
      {
        '@type': 'Thing',
        name: 'Final Expense Insurance',
        description: 'Burial and funeral expense coverage'
      },
      {
        '@type': 'Thing',
        name: 'Medicare Advantage Plans',
        description: 'Medicare HMO and PPO plan selection'
      }
    ],
    areaServed: [
      {
        '@type': 'State',
        name: 'Florida',
        alternateName: 'FL'
      },
      {
        '@type': 'City',
        name: 'Miami',
        containedInPlace: {
          '@type': 'State',
          name: 'Florida'
        }
      },
      {
        '@type': 'City', 
        name: 'Fort Lauderdale',
        containedInPlace: {
          '@type': 'State',
          name: 'Florida'
        }
      },
      {
        '@type': 'City',
        name: 'West Palm Beach', 
        containedInPlace: {
          '@type': 'State',
          name: 'Florida'
        }
      }
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional License',
        name: 'Licensed Insurance Agent - Florida',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Florida Department of Financial Services'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential', 
        credentialCategory: 'Certification',
        name: 'Health Insurance Marketplace Certified Agent',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Centers for Medicare & Medicaid Services'
        }
      }
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'Spanish',
        alternateName: 'Español'
      },
      {
        '@type': 'Language', 
        name: 'English'
      }
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Insurance Agent',
      occupationLocation: {
        '@type': 'State',
        name: 'Florida'
      },
      skills: [
        'Health Insurance Marketplace',
        'Life Insurance',
        'ACA Plans',
        'Premium Tax Credits',
        'Final Expense Insurance',
        'Bilingual Customer Service'
      ]
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/marcia-cordero#services',
    name: 'Health Insurance Marketplace & Life Insurance Services',
    description: 'Professional health insurance marketplace and life insurance services in Florida, including ACA plan enrollment, premium tax credit optimization, and comprehensive life insurance solutions.',
    provider: {
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/marcia-cordero#person'
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida'
    },
    serviceType: [
      'Health Insurance Marketplace Enrollment',
      'ACA Plan Selection',
      'Premium Tax Credit Optimization',
      'Life Insurance Quotes',
      'Final Expense Insurance',
      'Medicare Advantage Enrollment'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Insurance Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Health Insurance Marketplace Consultation',
            description: 'Free consultation for ACA marketplace plans and premium tax credits'
          },
          price: '0',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service', 
            name: 'Life Insurance Quotes',
            description: 'Competitive life insurance quotes for term, whole, and final expense coverage'
          },
          price: '0',
          priceCurrency: 'USD'
        }
      ]
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free consultation and quotes'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/marcia-cordero#contact',
    contactType: 'customer service',
    telephone: '+1-786-569-7713',
    email: 'marcia@elmag-insurance.com',
    availableLanguage: ['Spanish', 'English'],
    areaServed: {
      '@type': 'State', 
      name: 'Florida'
    },
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
      validFrom: '2024-01-01',
      validThrough: '2025-12-31'
    }
  }
];

export default function MarciaCorderoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <TeamPageAnalytics 
        agentName="Marcia Zulema Cordero Rizo"
        agentSpecialties={[
          'Health Insurance Marketplace',
          'Life Insurance',
          'Final Expense Insurance',
          'Medicare Advantage Plans',
          'Health Discount Plans'
        ]}
        states={['Florida']}
        phoneNumber="786-569-7713"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl font-bold">MC</span>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Marcia Zulema Cordero Rizo</h1>
                  <p className="text-xl text-teal-100">Especialista en Seguros | Insurance Specialist</p>
                </div>
              </div>
              <p className="text-xl text-teal-100 mb-6">
                Más de 1 año ayudando a la comunidad hispana de Florida con seguros de salud del mercado, 
                seguros de vida, gastos finales, Medicare Advantage y planes de descuento de salud. 
                <strong>¡Servicio completamente en español!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:786-569-7713"
                  className="bg-yellow-400 text-teal-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors text-center"
                >
                  📞 Llame a Marcia: 786-569-7713
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-teal-50 transition-colors text-center"
                >
                  🏥 Cotización Gratuita
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-teal-600">👩‍💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Especialidades de Marcia</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Seguros del Mercado de Salud</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Seguros de Vida</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Seguros de Gastos Finales</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Medicare Advantage</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Planes de Descuento de Salud</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Agente Licenciada en Florida</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Servicio Completo en Español</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* About Marcia */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Acerca de Marcia Zulema Cordero Rizo</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Marcia Zulema Cordero Rizo es una especialista en seguros dedicada y comprometida que se enfoca 
                  exclusivamente en servir a la comunidad hispana de Florida. Como ex-educadora, Marcia trae su 
                  experiencia en la enseñanza y su pasión por ayudar a otros a comprender conceptos complejos al 
                  mundo de los seguros. Con más de un año de experiencia especializada en seguros y años de 
                  experiencia educativa, Marcia se ha convertido en una voz confiable para familias que necesitan 
                  orientación completa en español sobre seguros de salud, vida y planes especializados.
                </p>
                <p className="text-gray-700 mb-4">
                  Su formación como educadora le permite descomponer los conceptos complejos de seguros en 
                  información fácil de entender, utilizando métodos de enseñanza probados para asegurar que cada 
                  cliente comprenda completamente sus opciones. Marcia se especializa en el Mercado de Seguros de 
                  Salud (ACA), seguros de vida, seguros de gastos finales, Medicare Advantage y planes de descuento 
                  de salud. Su enfoque pedagógico está en hacer que los seguros sean accesibles y comprensibles 
                  para la comunidad hispana, proporcionando orientación educativa clara y personalizada 
                  completamente en español.
                </p>
                <p className="text-gray-700">
                  Lo que hace única a Marcia es su combinación de experiencia educativa y especialización en 
                  seguros, lo que le permite enseñar a los miembros de la comunidad no solo qué seguro comprar, 
                  sino también cómo navegar las complejidades del sistema de seguros. Como ex-educadora, ella 
                  comprende que el aprendizaje requiere paciencia, repetición y explicaciones claras. Se toma el 
                  tiempo necesario para educar a cada cliente sobre sus opciones, utilizando ejemplos prácticos 
                  y un lenguaje sencillo para asegurar que se sientan completamente informados y seguros con 
                  sus decisiones de seguros.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-800 mb-4">Antecedentes Profesionales</h3>
                  <ul className="space-y-2 text-teal-700">
                    <li>• Ex-educadora con experiencia en enseñanza</li>
                    <li>• Más de 1 año de experiencia especializada en seguros</li>
                    <li>• Licenciada en Florida y estados adicionales</li>
                    <li>• Especialista Certificada en Seguros</li>
                    <li>• 180+ clientes hispanohablantes atendidos</li>
                    <li>• Métodos de enseñanza aplicados a seguros</li>
                    <li>• Servicio exclusivamente en español</li>
                    <li>• Experta en necesidades de la comunidad hispana</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Resultados para Clientes</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Ahorro promedio: $1,200 por año</li>
                    <li>• 97% tasa de satisfacción del cliente</li>
                    <li>• 93% tasa de referidos de clientes</li>
                    <li>• Enfoque educativo y pedagógico</li>
                    <li>• Servicio culturalmente sensible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marcia's Specializations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Especialidades de Seguros de Marcia</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Mercado de Seguros de Salud</h3>
              <p className="text-blue-700 text-sm mb-3">
                Navegación experta del Mercado ACA con créditos fiscales premium y optimización de subsidios.
              </p>
              <ul className="text-xs text-blue-600 space-y-1">
                <li>• Selección de planes del mercado</li>
                <li>• Análisis de créditos fiscales</li>
                <li>• Revisión de calificación para subsidios</li>
                <li>• Períodos especiales de inscripción</li>
                <li>• Alternativas a COBRA</li>
                <li>• Planificación de cobertura familiar</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">Seguros de Vida</h3>
              <p className="text-green-700 text-sm mb-3">
                Soluciones de seguros de vida temporales y permanentes para proteger a las familias.
              </p>
              <ul className="text-xs text-green-600 space-y-1">
                <li>• Planes de vida temporal</li>
                <li>• Cobertura de vida entera</li>
                <li>• Planificación de protección familiar</li>
                <li>• Orientación sobre beneficiarios</li>
                <li>• Análisis de monto de cobertura</li>
                <li>• Opciones asequibles</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚰️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Seguros de Gastos Finales</h3>
              <p className="text-gray-700 text-sm mb-3">
                Seguros de gastos finales asequibles para cubrir costos de entierro y gastos finales.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Cobertura de vida entera</li>
                <li>• Opciones de aceptación garantizada</li>
                <li>• Primas asequibles</li>
                <li>• Planes sin examen médico</li>
                <li>• Protección para gastos de entierro</li>
                <li>• Apoyo familiar completo</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Medicare Advantage</h3>
              <p className="text-purple-700 text-sm mb-3">
                Planes Medicare Advantage integrales para adultos mayores que buscan cobertura todo-en-uno.
              </p>
              <ul className="text-xs text-purple-600 space-y-1">
                <li>• Comparación de beneficios de planes</li>
                <li>• Análisis de redes de proveedores</li>
                <li>• Cobertura de medicamentos recetados</li>
                <li>• Beneficios extras (dental, visión)</li>
                <li>• Evaluación de calificaciones</li>
                <li>• Asistencia con inscripción anual</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Planes de Descuento de Salud</h3>
              <p className="text-yellow-700 text-sm mb-3">
                Opciones asequibles de descuento de salud para familias que buscan ahorros en atención médica.
              </p>
              <ul className="text-xs text-yellow-600 space-y-1">
                <li>• Planes de membresía de descuento</li>
                <li>• Descuentos en consultas médicas</li>
                <li>• Ahorros en medicamentos recetados</li>
                <li>• Descuentos dentales y de visión</li>
                <li>• Opciones sin período de espera</li>
                <li>• Cobertura familiar asequible</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="text-lg font-semibold text-red-800 mb-3">Servicio en Español</h3>
              <p className="text-red-700 text-sm mb-3">
                Orientación completa sobre seguros exclusivamente en español para la comunidad hispana.
              </p>
              <ul className="text-xs text-red-600 space-y-1">
                <li>• Consultas completamente en español</li>
                <li>• Materiales bilingües</li>
                <li>• Comprensión cultural</li>
                <li>• Educación familiar</li>
                <li>• Apoyo personalizado</li>
                <li>• Servicio culturalmente sensible</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO Content Section - Health Insurance Marketplace & Life Insurance Expertise */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-teal-50 to-pink-50 rounded-xl p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Health Insurance Marketplace Expert & Life Insurance Specialist</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-teal-800 mb-4">Health Insurance Marketplace Plans</h3>
                  <p className="text-gray-700 mb-4">
                    As a dedicated <strong>Health Insurance Marketplace expert</strong> in Florida, Marcia specializes in 
                    <strong> affordable health insurance</strong> through ACA Marketplace plans. Her expertise in <strong>premium tax credits</strong> and 
                    subsidy optimization helps Hispanic and English-speaking families save thousands while getting comprehensive healthcare coverage through <strong>ACA plans</strong>.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>Bronze ACA Plans</strong> - Affordable coverage for basic healthcare needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>Silver Marketplace Plans</strong> - Best value with Cost-Sharing Reductions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>Gold Health Insurance</strong> - Comprehensive coverage with lower deductibles</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-pink-800 mb-4">Life Insurance Solutions</h3>
                  <div className="bg-white rounded-lg p-6 border border-pink-200">
                    <h4 className="font-bold text-pink-700 mb-3">Life Insurance Options (2025)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span><strong>Term Life Insurance:</strong></span>
                        <span className="font-bold text-pink-600">Affordable Protection</span>
                      </div>
                      <div className="flex justify-between">
                        <span><strong>Final Expense Insurance:</strong></span>
                        <span className="font-bold text-pink-600">Burial Costs Coverage</span>
                      </div>
                      <div className="flex justify-between">
                        <span><strong>Whole Life Insurance:</strong></span>
                        <span className="font-bold text-pink-600">Permanent Coverage</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-pink-700 font-medium text-center">
                        🎯 Free Life Insurance Quotes Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Florida Health Insurance Marketplace & Life Insurance Expert</h4>
                  <p className="text-gray-700 mb-4">
                    <strong>Serving All Florida Communities:</strong> Miami-Dade • Broward • Palm Beach • Orange • Hillsborough • Hispanic Communities Statewide
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-teal-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-teal-600 mb-2">$3,800</div>
                      <div className="text-sm text-teal-700">Average Tax Credits</div>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-pink-600 mb-2">95%</div>
                      <div className="text-sm text-pink-700">Client Satisfaction</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600 mb-2">Bilingüe</div>
                      <div className="text-sm text-purple-700">English & Español</div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Link 
                      href="/health-insurance-cost-calculator"
                      className="bg-teal-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-700 transition-colors"
                    >
                      Calculate Health Insurance & Life Insurance Savings
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Historias de Éxito de Clientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-8 border-2 border-teal-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-teal-800">Familia Joven con Cobertura de Salud</h3>
                <p className="text-teal-600">Familia de 4, Miami, FL</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Costo Original COBRA:</span>
                  <span className="font-bold text-red-600">$1,100/mes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Plan del Mercado:</span>
                  <span className="font-bold text-green-600">$320/mes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Crédito Fiscal Premium:</span>
                  <span className="font-bold text-blue-600">$420/mes</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Ahorro Anual:</span>
                  <span className="font-bold text-green-600">$9,360</span>
                </div>
                <div className="text-center text-teal-800 font-bold text-xl">
                  💰 Mejor cobertura, ahorros importantes
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-blue-800">Adultos Mayores Medicare Advantage</h3>
                <p className="text-blue-600">Pareja de 65 años, Orlando, FL</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Medicare Original + Suplemento:</span>
                  <span className="font-bold text-red-600">$580/mes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Medicare Advantage:</span>
                  <span className="font-bold text-green-600">$85/mes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Beneficios Adicionales:</span>
                  <span className="font-bold text-blue-600">Dental + Visión + Rx</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Ahorro Anual:</span>
                  <span className="font-bold text-green-600">$5,940</span>
                </div>
                <div className="text-center text-blue-800 font-bold text-xl">
                  🎯 Más beneficios, menor costo
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lo Que Dicen Los Clientes de Marcia</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-600 font-bold">AR</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ana R.</h4>
                  <p className="text-sm text-gray-600">Madre Trabajadora, Tampa, FL</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Marcia me ayudó a encontrar seguro de salud para mi familia que podíamos pagar. Me explicó todo 
                en español y se aseguró de que entendiera todas nuestras opciones. ¡Muy profesional y amable!"
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">CM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Carlos M.</h4>
                  <p className="text-sm text-gray-600">Jubilado, Miami, FL</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Marcia hizo que mi transición a Medicare fuera muy fácil. Me explicó todo en mi idioma y encontró 
                un plan que cubre todo lo que necesito. Excelente servicio y muy paciente con todas mis preguntas."
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </section>

        {/* Free Consultation CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Obtenga Orientación Experta en Seguros con Marcia</h2>
            <p className="text-xl text-teal-100 mb-6">
              Ya sea que necesite cobertura del Mercado de Salud, Medicare Advantage, Seguros de Vida, 
              Gastos Finales o Planes de Descuento, Marcia proporciona orientación personalizada 
              completamente en español.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">$1,200</div>
                <div className="text-teal-100">Ahorro Anual Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-teal-100">Servicio en Español</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">97%</div>
                <div className="text-teal-100">Satisfacción del Cliente</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-teal-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 Llame a Marcia: 331-E-HEALTH
              </a>
              <Link
                href="/health-insurance-cost-calculator"
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-teal-50 transition-colors"
              >
                💰 Calcule Sus Ahorros
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm 
            title="Obtenga Su Análisis Gratuito de Seguros con Marcia"
            subtitle="Descubra las mejores opciones de cobertura para Seguros del Mercado de Salud, Medicare Advantage, Seguros de Vida, Gastos Finales y Planes de Descuento. Marcia proporciona orientación experta completamente en español para ayudarle a encontrar cobertura asequible y completa."
          />
        </div>

        {/* Social Proof */}
        <SocialProofSection 
          county="Florida" 
          state="FL"
          demographic="familias hispanas"
        />

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recursos Populares de Seguros</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/health-insurance-marketplace" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-semibold text-teal-600">Mercado de Salud</h3>
              <p className="text-gray-600 text-sm">Planes ACA</p>
            </Link>
            <Link href="/medicare-advantage" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">⭐</div>
              <h3 className="font-semibold text-teal-600">Medicare Advantage</h3>
              <p className="text-gray-600 text-sm">Planes todo-en-uno</p>
            </Link>
            <Link href="/health-insurance-cost-calculator" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🧮</div>
              <h3 className="font-semibold text-teal-600">Calculadora de Costos</h3>
              <p className="text-gray-600 text-sm">Estime ahorros</p>
            </Link>
            <Link href="/team" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-semibold text-teal-600">Nuestro Equipo</h3>
              <p className="text-gray-600 text-sm">Conozca a nuestros expertos</p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  )
}