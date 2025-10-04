import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SocialProofSection from '@/components/SocialProofSection'
import TeamPageAnalytics from '@/components/TeamPageAnalytics'
import { generateTeamMemberSchema } from '@/lib/schema/team-member-schema'

export const metadata: Metadata = {
  title: 'Yaissa Acosta - Health Insurance Marketplace Expert Florida | ACA Plans Specialist | Premium Tax Credits & Affordable Health Insurance',
  description: 'Yaissa Acosta: Health Insurance Marketplace expert & ACA specialist. 2+ years helping Florida families get affordable health insurance, premium tax credits, subsidy optimization. Bilingual service - Free consultations - 786-378-3921.',
  keywords: 'Health Insurance Marketplace Florida, ACA plans, affordable health insurance, premium tax credits, health insurance subsidies, marketplace navigator, Obamacare plans, health insurance enrollment, subsidy calculator, bilingual health insurance agent',
  openGraph: {
    title: 'Health Insurance Marketplace Expert | ACA Plans Specialist | Yaissa Acosta',
    description: 'Get affordable health insurance & maximize premium tax credits with Yaissa Acosta. Expert Health Insurance Marketplace guidance, ACA plan optimization. Bilingual service.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/yaissa-acosta',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Insurance Marketplace Expert | ACA Specialist',
    description: 'Expert Health Insurance Marketplace & ACA guidance. Affordable health insurance, premium tax credits, subsidy optimization. Bilingual service.',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/team/yaissa-acosta',
  },
}

const structuredData = generateTeamMemberSchema({
  name: 'Yaissa Acosta',
  jobTitle: 'Health Insurance Marketplace Expert & ACA Specialist',
  slug: 'yaissa-acosta',
  description: 'Bilingual Health Insurance Marketplace specialist with over 2 years of experience and healthcare field background. Specializes in ACA plans, premium tax credits, Medicare Advantage enrollment, and comprehensive health insurance solutions for Florida families.',
  specialties: [
    'Health Insurance Marketplace',
    'Premium Tax Credits',
    'ACA Plans',
    'Medicare Advantage Plans',
    'Supplemental Health Insurance',
    'Affordable Health Insurance'
  ],
  experience: '2+ years',
  location: 'Florida',
  languages: ['English', 'Spanish'],
  email: 'yaissa@elmag-insurance.com',
  phone: '+1-786-378-3921'
});

const yaissaStructuredDataOld = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/yaissa-acosta#person',
    name: 'Yaissa Acosta',
    givenName: 'Yaissa',
    familyName: 'Acosta',
    jobTitle: 'Health Insurance Marketplace Expert & ACA Specialist',
    description: 'Bilingual Health Insurance Marketplace specialist with over 2 years of experience and healthcare field background. Specializes in ACA plans, premium tax credits, Medicare Advantage enrollment, and comprehensive health insurance solutions for Florida families.',
    url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/yaissa-acosta',
    sameAs: [
      'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/yaissa-acosta',
      'https://www.linkedin.com/in/yaissa-acosta-insurance'
    ],
    email: 'yaissa@elmag-insurance.com',
    telephone: '+1-786-378-3921',
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app#organization',
      name: 'El-Mag Insurance',
      url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app',
      telephone: '786-378-3921',
      email: 'info@elmag-insurance.com'
    },
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'Health Insurance Marketplace',
        description: 'ACA marketplace plan navigation with premium tax credits and subsidy optimization'
      },
      {
        '@type': 'Thing', 
        name: 'Premium Tax Credits',
        description: 'Advanced Premium Tax Credit calculation and subsidy maximization strategies'
      },
      {
        '@type': 'Thing',
        name: 'ACA Plans',
        description: 'Bronze, Silver, Gold, and Platinum ACA marketplace plan selection'
      },
      {
        '@type': 'Thing',
        name: 'Medicare Advantage Plans',
        description: 'Medicare Advantage plan enrollment and benefits coordination'
      },
      {
        '@type': 'Thing',
        name: 'Supplemental Health Insurance',
        description: 'Gap coverage and supplemental health insurance solutions'
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
        name: 'Orlando',
        containedInPlace: {
          '@type': 'State',
          name: 'Florida'
        }
      },
      {
        '@type': 'City',
        name: 'Tampa',
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
        name: 'Health Insurance Marketplace Certified Navigator',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Centers for Medicare & Medicaid Services'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential', 
        credentialCategory: 'Professional Experience',
        name: 'Healthcare Field Veteran',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Healthcare Industry'
        }
      }
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'English'
      },
      {
        '@type': 'Language', 
        name: 'Spanish',
        alternateName: 'Español'
      }
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Health Insurance Specialist',
      occupationLocation: {
        '@type': 'State',
        name: 'Florida'
      },
      skills: [
        'Health Insurance Marketplace Navigation',
        'Premium Tax Credits Optimization',
        'ACA Plan Selection',
        'Medicare Advantage Enrollment',
        'Healthcare System Knowledge',
        'Bilingual Customer Service',
        'Subsidy Qualification Analysis'
      ]
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/yaissa-acosta#services',
    name: 'Health Insurance Marketplace & ACA Specialist Services',
    description: 'Professional Health Insurance Marketplace and ACA plan services in Florida, including premium tax credits optimization, subsidy analysis, Medicare Advantage enrollment, and comprehensive health insurance solutions.',
    provider: {
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/yaissa-acosta#person'
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida'
    },
    serviceType: [
      'Health Insurance Marketplace Enrollment',
      'Premium Tax Credits Optimization',
      'ACA Plan Selection',
      'Medicare Advantage Plans',
      'Supplemental Health Insurance',
      'Cost-Sharing Reductions',
      'Special Enrollment Periods'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Health Insurance Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Health Insurance Marketplace Consultation',
            description: 'Complete ACA marketplace plan comparison and premium tax credit optimization'
          },
          price: '0',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service', 
            name: 'Subsidy Analysis',
            description: 'Comprehensive subsidy qualification review and cost-sharing reduction analysis'
          },
          price: '0',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medicare Advantage Transition',
            description: 'Assistance with Medicare Advantage plan selection and enrollment'
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
      description: 'Free health insurance consultation and enrollment assistance'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team/yaissa-acosta#contact',
    contactType: 'customer service',
    telephone: '+1-786-378-3921',
    email: 'yaissa@elmag-insurance.com',
    availableLanguage: ['English', 'Spanish'],
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

export default function YaissaAcostaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <TeamPageAnalytics 
        agentName="Yaissa Acosta"
        agentSpecialties={[
          'Health Insurance Marketplace',
          'Medicare Advantage Plans',
          'Life Insurance',
          'Supplemental Health Insurance'
        ]}
        states={['Florida']}
        phoneNumber="786-378-3921"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl font-bold">YA</span>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Yaissa Acosta</h1>
                  <p className="text-xl text-orange-100">Health Insurance Marketplace Expert & ACA Specialist</p>
                </div>
              </div>
              <p className="text-xl text-orange-100 mb-6">
                2+ years helping Florida families and individuals find the right insurance coverage with Health Marketplace, 
                Medicare Advantage, Life Insurance, and Supplemental Health plans. <strong>¡Hablo Español!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:786-378-3921"
                  className="bg-yellow-400 text-orange-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors text-center"
                >
                  📞 Call Yaissa: 786-378-3921
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-orange-50 transition-colors text-center"
                >
                  🏥 Get Your Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-orange-600">👩‍💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Yaissa's Expertise</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Health Marketplace Specialist</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Medicare Advantage Expert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Life Insurance Advisor</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Supplemental Health Plans</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Florida Licensed Agent</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Bilingual (English/Spanish)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* About Yaissa */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Yaissa Acosta</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Yaissa Acosta is a passionate and dedicated insurance specialist who brings fresh energy, 
                  bilingual expertise, and valuable healthcare field experience to help Florida families find 
                  the right insurance coverage. As a healthcare field veteran, Yaissa understands the medical 
                  system from the inside out, which gives her a unique perspective when guiding clients toward 
                  insurance solutions. With over 2 years of focused insurance experience combined with her medical 
                  background, Yaissa has quickly established herself as a trusted advisor for diverse communities 
                  seeking quality coverage that truly meets their health needs.
                </p>
                <p className="text-gray-700 mb-4">
                  Yaissa's healthcare background provides her with invaluable insight into how insurance coverage 
                  translates to real-world medical care and patient experiences. She specializes in Health Insurance 
                  Marketplace navigation, Medicare Advantage plan selection, Life Insurance planning, and Supplemental 
                  Health Insurance to fill coverage gaps. Her combination of medical experience and bilingual 
                  capabilities makes her especially valuable for Spanish-speaking families who need someone who 
                  understands both the healthcare system and the insurance landscape to provide clear guidance 
                  through the selection process.
                </p>
                <p className="text-gray-700">
                  What makes Yaissa special is her unique combination of healthcare field expertise and insurance 
                  knowledge, allowing her to bridge the gap between medical needs and coverage options. Her medical 
                  experience enables her to understand which insurance benefits will be most valuable for different 
                  health conditions and life stages. She takes the time to understand each client's unique health 
                  situation and leverages her medical background to recommend insurance solutions that provide 
                  meaningful protection. Her clear guidance in both English and Spanish (<em>¡Hablo Español!</em>) 
                  ensures clients feel confident that their insurance choices will truly support their health and 
                  wellness goals.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">Professional Background</h3>
                  <ul className="space-y-2 text-orange-700">
                    <li>• Healthcare field veteran with medical experience</li>
                    <li>• 2+ years focused insurance experience</li>
                    <li>• Licensed in Florida and growing states</li>
                    <li>• Certified Insurance Specialist</li>
                    <li>• 450+ clients successfully enrolled</li>
                    <li>• Medical-to-insurance expertise bridge</li>
                    <li>• Fluent in English and Spanish</li>
                    <li>• Health and Medicare specialist</li>
                  </ul>
                </div>
                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-pink-800 mb-4">Client Results</h3>
                  <ul className="space-y-2 text-pink-700">
                    <li>• Average savings: $1,400 per year</li>
                    <li>• 98% client satisfaction rate</li>
                    <li>• 91% client referral rate</li>
                    <li>• Health-focused coverage recommendations</li>
                    <li>• Bilingual service excellence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yaissa's Specializations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Yaissa's Insurance Specializations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Health Insurance Marketplace</h3>
              <p className="text-blue-700 mb-4">
                Expert navigation of the ACA Marketplace with premium tax credits and subsidy optimization for individuals and families.
              </p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Marketplace plan selection</li>
                <li>• Premium tax credit analysis</li>
                <li>• Subsidy qualification review</li>
                <li>• Special enrollment periods</li>
                <li>• COBRA alternatives</li>
                <li>• Family coverage planning</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Medicare Advantage</h3>
              <p className="text-green-700 mb-4">
                Comprehensive Medicare Advantage plan guidance for seniors seeking all-in-one coverage with additional benefits.
              </p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Plan benefit comparison</li>
                <li>• Provider network analysis</li>
                <li>• Prescription drug coverage</li>
                <li>• Extra benefits (dental, vision)</li>
                <li>• Star rating evaluation</li>
                <li>• Annual enrollment assistance</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Life Insurance</h3>
              <p className="text-purple-700 mb-4">
                Term and permanent life insurance solutions to protect families and provide financial security for loved ones.
              </p>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>• Term life insurance plans</li>
                <li>• Whole life coverage</li>
                <li>• Family protection planning</li>
                <li>• Beneficiary guidance</li>
                <li>• Coverage amount analysis</li>
                <li>• Affordable options</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Supplemental Health Insurance</h3>
              <p className="text-teal-700 mb-4">
                Additional coverage to fill gaps in primary health insurance including dental, vision, and critical illness plans.
              </p>
              <ul className="text-sm text-teal-600 space-y-1">
                <li>• Dental insurance plans</li>
                <li>• Vision coverage options</li>
                <li>• Critical illness insurance</li>
                <li>• Hospital indemnity plans</li>
                <li>• Gap coverage analysis</li>
                <li>• Affordable supplemental options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO Content Section - Health Insurance Marketplace & ACA Expertise */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Health Insurance Marketplace Expert & ACA Specialist</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-green-800 mb-4">Health Insurance Marketplace Plans</h3>
                  <p className="text-gray-700 mb-4">
                    As a certified <strong>Health Insurance Marketplace expert</strong> in Florida, Yaissa specializes in 
                    <strong> affordable health insurance</strong> through ACA Marketplace plans. Her expertise in <strong>premium tax credits</strong> and 
                    subsidy optimization helps families save thousands while getting comprehensive healthcare coverage through <strong>ACA plans</strong>.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>Bronze ACA Plans</strong> - Low premium, essential coverage for healthy individuals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>Silver Marketplace Plans</strong> - Best value with Cost-Sharing Reductions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>Gold Health Insurance</strong> - Lower deductibles, comprehensive benefits</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">Premium Tax Credits & Subsidies</h3>
                  <div className="bg-white rounded-lg p-6 border border-blue-200">
                    <h4 className="font-bold text-blue-700 mb-3">Health Insurance Subsidies (2025)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span><strong>Premium Tax Credits:</strong></span>
                        <span className="font-bold text-blue-600">Up to $15,000/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span><strong>Cost-Sharing Reductions:</strong></span>
                        <span className="font-bold text-blue-600">Lower Deductibles</span>
                      </div>
                      <div className="flex justify-between">
                        <span><strong>Income Limits:</strong></span>
                        <span className="font-bold text-blue-600">Up to $125K Family</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-blue-700 font-medium text-center">
                        🎯 Free Subsidy Calculator Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Florida Health Insurance Marketplace Expert</h4>
                  <p className="text-gray-700 mb-4">
                    <strong>Serving All Florida Counties:</strong> Miami-Dade • Broward • Palm Beach • Orange • Hillsborough • Pinellas • Duval • All 67 Counties
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600 mb-2">$4,200</div>
                      <div className="text-sm text-green-700">Average Tax Credits</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600 mb-2">93%</div>
                      <div className="text-sm text-blue-700">Qualify for Subsidies</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600 mb-2">Bilingüe</div>
                      <div className="text-sm text-purple-700">English & Spanish</div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Link 
                      href="/health-insurance-cost-calculator"
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
                    >
                      Calculate Your Health Insurance Savings
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-8 border-2 border-orange-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-orange-800">Young Family Health Coverage</h3>
                <p className="text-orange-600">Family of 3, Tampa, FL</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Original COBRA Cost:</span>
                  <span className="font-bold text-red-600">$950/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Marketplace Plan:</span>
                  <span className="font-bold text-green-600">$285/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Premium Tax Credit:</span>
                  <span className="font-bold text-blue-600">$350/month</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Annual Savings:</span>
                  <span className="font-bold text-green-600">$7,980</span>
                </div>
                <div className="text-center text-orange-800 font-bold text-xl">
                  💰 Better coverage, major savings
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-blue-800">Senior Medicare Transition</h3>
                <p className="text-blue-600">New Medicare Beneficiary, Age 65, Miami, FL</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Previous Employer Plan:</span>
                  <span className="font-bold text-red-600">$420/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Medicare Advantage:</span>
                  <span className="font-bold text-green-600">$45/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Added Benefits:</span>
                  <span className="font-bold text-blue-600">Dental + Vision + Rx</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Annual Savings:</span>
                  <span className="font-bold text-green-600">$4,500</span>
                </div>
                <div className="text-center text-blue-800 font-bold text-xl">
                  🎯 Enhanced benefits, lower cost
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Yaissa's Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold">CM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Carmen M.</h4>
                  <p className="text-sm text-gray-600">Working Mother, Fort Lauderdale, FL</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Yaissa helped me find health insurance for my family that we could actually afford. She explained 
                everything in Spanish for my mom and made sure we understood all our options. ¡Muy profesional!"
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold">RH</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Robert H.</h4>
                  <p className="text-sm text-gray-600">Early Retiree, Orlando, FL</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Yaissa made my transition from employer insurance to Medicare Advantage seamless. She's young but 
                really knows her stuff. Great attention to detail and very patient with all my questions."
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </section>

        {/* Free Consultation CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Expert Insurance Guidance with Yaissa</h2>
            <p className="text-xl text-orange-100 mb-6">
              Whether you need Health Marketplace coverage, Medicare Advantage plans, Life Insurance, or Supplemental 
              Health benefits, Yaissa provides personalized guidance in English and Spanish.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">$1,400</div>
                <div className="text-orange-100">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Bilingüe</div>
                <div className="text-orange-100">English & Spanish</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">98%</div>
                <div className="text-orange-100">Client Satisfaction</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-orange-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 Call Yaissa: 331-E-HEALTH
              </a>
              <Link
                href="/health-insurance-cost-calculator"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-orange-50 transition-colors"
              >
                💰 Calculate Savings
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm 
            title="Get Your Free Insurance Analysis from Yaissa"
            subtitle="Discover the best coverage options for Health Insurance Marketplace, Medicare Advantage, Life Insurance, and Supplemental Health plans. Yaissa provides expert bilingual guidance to help you find affordable, comprehensive coverage."
          />
        </div>

        {/* Social Proof */}
        <SocialProofSection 
          county="Florida" 
          state="FL"
          demographic="individuals and families"
        />

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Insurance Resources</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/health-insurance-marketplace" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-semibold text-orange-600">Health Marketplace</h3>
              <p className="text-gray-600 text-sm">ACA plans</p>
            </Link>
            <Link href="/medicare-advantage" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">⭐</div>
              <h3 className="font-semibold text-orange-600">Medicare Advantage</h3>
              <p className="text-gray-600 text-sm">All-in-one plans</p>
            </Link>
            <Link href="/health-insurance-cost-calculator" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🧮</div>
              <h3 className="font-semibold text-orange-600">Cost Calculator</h3>
              <p className="text-gray-600 text-sm">Estimate savings</p>
            </Link>
            <Link href="/team" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-semibold text-orange-600">Our Team</h3>
              <p className="text-gray-600 text-sm">Meet our experts</p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  )
}