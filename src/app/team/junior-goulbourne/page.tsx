import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SocialProofSection from '@/components/SocialProofSection'
import TeamPageAnalytics from '@/components/TeamPageAnalytics'

export const metadata: Metadata = {
  title: 'Junior Goulbourne - Medicare Advantage Expert | Life Insurance Specialist Florida | Final Expense Insurance & Employee Benefits',
  description: 'Junior Goulbourne: Medicare Advantage & Life Insurance expert. 11+ years helping clients with Medicare plans, term life insurance, final expense coverage, employee benefits. Florida licensed - Free consultations - 786-515-3808.',
  keywords: 'Medicare Advantage Florida, life insurance agent, final expense insurance, term life insurance, Medicare plans, employee benefits, group health insurance, whole life insurance, Medicare Advantage plans, life insurance quotes',
  openGraph: {
    title: 'Medicare Advantage Expert | Life Insurance Specialist | Junior Goulbourne',
    description: 'Get the best Medicare Advantage plans & Life Insurance coverage with Junior Goulbourne. Expert guidance on Medicare plans, term life, final expense, employee benefits. 11+ years experience.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com/team/junior-goulbourne',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Expert | Life Insurance Specialist',
    description: 'Expert Medicare Advantage & Life Insurance guidance. Medicare plans, term life, final expense, employee benefits. 11+ years experience. Free consultation.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/team/junior-goulbourne',
  },
}

const juniorStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://elmag-insurance.com/team/junior-goulbourne#person',
    name: 'Junior Goulbourne',
    givenName: 'Junior',
    familyName: 'Goulbourne',
    jobTitle: 'Medicare Advantage Expert & Life Insurance Specialist',
    description: 'Insurance specialist with over 11 years of experience and law enforcement background. Specializes in Medicare Advantage plans, Life Insurance solutions, Final Expense coverage, and comprehensive Employee Benefits packages serving Florida families and businesses.',
    url: 'https://elmag-insurance.com/team/junior-goulbourne',
    sameAs: [
      'https://elmag-insurance.com/team/junior-goulbourne',
      'https://www.linkedin.com/in/junior-goulbourne-insurance'
    ],
    email: 'junior@elmag-insurance.com',
    telephone: '+1-786-515-3808',
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://elmag-insurance.com#organization',
      name: 'El-Mag Insurance',
      url: 'https://elmag-insurance.com',
      telephone: '786-515-3808',
      email: 'info@elmag-insurance.com'
    },
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'Medicare Advantage Plans',
        description: 'HMO and PPO Medicare Advantage plan selection with additional benefits'
      },
      {
        '@type': 'Thing', 
        name: 'Life Insurance',
        description: 'Term life, whole life, and universal life insurance solutions'
      },
      {
        '@type': 'Thing',
        name: 'Final Expense Insurance',
        description: 'Burial and funeral expense coverage with guaranteed acceptance options'
      },
      {
        '@type': 'Thing',
        name: 'Health Insurance Marketplace',
        description: 'ACA marketplace plans with premium tax credits and subsidy optimization'
      },
      {
        '@type': 'Thing',
        name: 'Employee Benefits',
        description: 'Group health insurance and employee benefit packages for businesses'
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
      },
      {
        '@type': 'City',
        name: 'Jacksonville',
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
        name: 'Licensed Insurance Agent - Florida and 40+ States',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Florida Department of Financial Services'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential', 
        credentialCategory: 'Certification',
        name: 'Certified Insurance Specialist',
        recognizedBy: {
          '@type': 'Organization',
          name: 'National Association of Insurance Commissioners'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential', 
        credentialCategory: 'Professional Experience',
        name: 'Former Police Official',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Law Enforcement Agency'
        }
      }
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'English'
      }
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Insurance Agent & Benefits Specialist',
      occupationLocation: {
        '@type': 'State',
        name: 'Florida'
      },
      skills: [
        'Medicare Advantage Plans',
        'Life Insurance Solutions',
        'Final Expense Insurance',
        'Employee Benefits Administration',
        'Group Health Insurance',
        'Risk Assessment',
        'Client Protection Planning',
        'Multi-line Insurance Coordination'
      ]
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://elmag-insurance.com/team/junior-goulbourne#services',
    name: 'Medicare Advantage & Life Insurance Specialist Services',
    description: 'Comprehensive insurance services in Florida including Medicare Advantage plans, Life Insurance solutions, Final Expense coverage, Health Insurance Marketplace enrollment, and Employee Benefits packages for individuals, families, and businesses.',
    provider: {
      '@id': 'https://elmag-insurance.com/team/junior-goulbourne#person'
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida'
    },
    serviceType: [
      'Medicare Advantage Plans',
      'Life Insurance Quotes',
      'Final Expense Insurance',
      'Health Insurance Marketplace Enrollment',
      'Employee Benefits Administration',
      'Group Health Insurance',
      'Individual Health Plans',
      'Business Insurance Solutions'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Comprehensive Insurance Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medicare Advantage Consultation',
            description: 'Complete Medicare Advantage plan comparison and enrollment assistance'
          },
          price: '0',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service', 
            name: 'Life Insurance Analysis',
            description: 'Comprehensive life insurance needs analysis and policy recommendations'
          },
          price: '0',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Employee Benefits Consultation',
            description: 'Group insurance and employee benefits package design for businesses'
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
      description: 'Free insurance consultation and quotes'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    '@id': 'https://elmag-insurance.com/team/junior-goulbourne#contact',
    contactType: 'customer service',
    telephone: '+1-786-515-3808',
    email: 'junior@elmag-insurance.com',
    availableLanguage: ['English'],
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

export default function JuniorGoulbournePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(juniorStructuredData) }}
      />
      
      <TeamPageAnalytics 
        agentName="Junior Goulbourne"
        agentSpecialties={[
          'Medicare Advantage Plans',
          'Final Expense Insurance',
          'Life Insurance',
          'Health Insurance Marketplace',
          'Employee Benefits'
        ]}
        states={['Florida']}
        phoneNumber="786-515-3808"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl font-bold">JG</span>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Junior Goulbourne</h1>
                  <p className="text-xl text-indigo-100">Medicare Advantage Expert & Life Insurance Specialist</p>
                </div>
              </div>
              <p className="text-xl text-indigo-100 mb-6">
                11+ years expertise in Medicare Advantage plans and Life Insurance solutions for Florida families and businesses. 
                Specialized in term life insurance, final expense coverage, and comprehensive employee benefits packages. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:786-515-3808"
                  className="bg-yellow-400 text-indigo-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors text-center"
                >
                  📞 Call Junior: 786-515-3808
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-indigo-50 transition-colors text-center"
                >
                  🛡️ Get Insurance Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-indigo-600">👨‍💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Junior's Expertise</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Medicare Advantage Expert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Final Expense Specialist</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Life Insurance Advisor</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Health Marketplace Navigator</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Employee Benefits Expert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Florida Licensed Agent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* About Junior */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Junior Goulbourne</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Junior Goulbourne is a versatile insurance specialist with over 11 years of experience helping 
                  individuals, families, and businesses in Florida find comprehensive insurance solutions. As a 
                  former police official, Junior brings his lifelong passion for serving the community to the 
                  insurance industry, approaching each client relationship with the same care, dedication, and 
                  commitment to protection that defined his law enforcement career. His expertise spans multiple 
                  insurance sectors, from Medicare Advantage and Final Expense coverage for seniors to Life 
                  Insurance and Employee Benefits for working professionals.
                </p>
                <p className="text-gray-700 mb-4">
                  Junior's background in law enforcement has instilled in him a deep understanding of risk 
                  assessment and the importance of comprehensive protection. This perspective, combined with his 
                  broad insurance knowledge, allows him to serve clients throughout their entire insurance journey 
                  with a protective mindset. Whether they're young professionals seeking life insurance, families 
                  navigating the Health Insurance Marketplace, seniors transitioning to Medicare Advantage, or 
                  planning for final expenses, Junior approaches each situation with the thoroughness and attention 
                  to detail that comes from years of public service.
                </p>
                <p className="text-gray-700">
                  What sets Junior apart is his service-oriented approach rooted in his police background and his 
                  ability to understand the complete insurance picture from a protection standpoint. Just as he 
                  once served and protected the community as a law enforcement officer, he now helps families and 
                  businesses safeguard their financial future through comprehensive insurance planning. He takes 
                  pride in building lasting, trust-based relationships with clients, providing the same level of 
                  dedication and care he brought to public service while helping them navigate complex insurance 
                  decisions with confidence.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-indigo-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-4">Professional Background</h3>
                  <ul className="space-y-2 text-indigo-700">
                    <li>• Former Police Official with public service background</li>
                    <li>• 11+ years comprehensive insurance experience</li>
                    <li>• Licensed in Florida and 40+ states</li>
                    <li>• Certified Insurance Specialist</li>
                    <li>• 2,400+ clients served</li>
                    <li>• Multi-line insurance expertise</li>
                    <li>• Employee Benefits specialist</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Client Results</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• Average savings: $2,100 per year</li>
                    <li>• 94% client satisfaction rate</li>
                    <li>• 87% client retention rate</li>
                    <li>• Service-oriented approach</li>
                    <li>• Comprehensive coverage coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Junior's Specializations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Junior's Insurance Specializations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Medicare Advantage</h3>
              <p className="text-blue-700 text-sm mb-3">
                Comprehensive Medicare Advantage plans with additional benefits beyond Original Medicare.
              </p>
              <ul className="text-xs text-blue-600 space-y-1">
                <li>• Plan comparison & selection</li>
                <li>• Provider network analysis</li>
                <li>• Extra benefits evaluation</li>
                <li>• Annual enrollment guidance</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚰️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Final Expense</h3>
              <p className="text-gray-700 text-sm mb-3">
                Affordable final expense insurance to cover burial costs and end-of-life expenses for families.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Whole life coverage</li>
                <li>• Guaranteed acceptance options</li>
                <li>• Affordable premiums</li>
                <li>• No medical exam plans</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">Life Insurance</h3>
              <p className="text-green-700 text-sm mb-3">
                Term and permanent life insurance solutions to protect families and replace income.
              </p>
              <ul className="text-xs text-green-600 space-y-1">
                <li>• Term life insurance</li>
                <li>• Whole life coverage</li>
                <li>• Universal life plans</li>
                <li>• Family protection planning</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Health Marketplace</h3>
              <p className="text-orange-700 text-sm mb-3">
                ACA Marketplace navigation with premium tax credits and subsidy optimization.
              </p>
              <ul className="text-xs text-orange-600 space-y-1">
                <li>• Marketplace plan selection</li>
                <li>• Premium tax credits</li>
                <li>• Subsidy qualification</li>
                <li>• Special enrollment periods</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Employee Benefits</h3>
              <p className="text-purple-700 text-sm mb-3">
                Group insurance solutions and employee benefit packages for businesses and organizations.
              </p>
              <ul className="text-xs text-purple-600 space-y-1">
                <li>• Group health insurance</li>
                <li>• Group life insurance</li>
                <li>• Voluntary benefits</li>
                <li>• Benefits administration</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-teal-800 mb-3">Comprehensive Planning</h3>
              <p className="text-teal-700 text-sm mb-3">
                Complete insurance portfolio coordination across all life stages and needs.
              </p>
              <ul className="text-xs text-teal-600 space-y-1">
                <li>• Multi-line coordination</li>
                <li>• Coverage gap analysis</li>
                <li>• Life stage planning</li>
                <li>• Annual reviews</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO Content Section - Medicare Advantage & Life Insurance Expertise */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Medicare Advantage Expert & Life Insurance Specialist</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Medicare Advantage Plans</h3>
                  <p className="text-gray-700 mb-4">
                    As a certified <strong>Medicare Advantage expert</strong> in Florida, Junior specializes in comprehensive 
                    <strong> Medicare Advantage plans</strong> that combine Parts A, B, and often D into one convenient plan. His expertise in 
                    <strong> Medicare plans</strong> helps seniors find all-in-one coverage with additional benefits like dental, vision, and wellness programs.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>HMO Medicare Advantage</strong> - Coordinated care with primary care physician</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>PPO Medicare Advantage</strong> - Flexible provider network options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>Special Needs Plans (SNPs)</strong> - Specialized care for chronic conditions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-800 mb-4">Life Insurance Solutions</h3>
                  <div className="bg-white rounded-lg p-6 border border-purple-200">
                    <h4 className="font-bold text-purple-700 mb-3">Life Insurance Options (2025)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span><strong>Term Life Insurance:</strong></span>
                        <span className="font-bold text-purple-600">Affordable Protection</span>
                      </div>
                      <div className="flex justify-between">
                        <span><strong>Whole Life Insurance:</strong></span>
                        <span className="font-bold text-purple-600">Permanent Coverage</span>
                      </div>
                      <div className="flex justify-between">
                        <span><strong>Final Expense Insurance:</strong></span>
                        <span className="font-bold text-purple-600">Burial & End Costs</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-purple-700 font-medium text-center">
                        🎯 Free Life Insurance Quote Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Florida Medicare Advantage & Life Insurance Expert</h4>
                  <p className="text-gray-700 mb-4">
                    <strong>Serving All of Florida:</strong> Miami-Dade • Broward • Palm Beach • Orange • Hillsborough • Pinellas • Duval • All Counties
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-indigo-600 mb-2">$2,100</div>
                      <div className="text-sm text-indigo-700">Average Annual Savings</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600 mb-2">94%</div>
                      <div className="text-sm text-purple-700">Client Satisfaction</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600 mb-2">Free</div>
                      <div className="text-sm text-green-700">Insurance Analysis</div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Link 
                      href="/medicare-cost-calculator"
                      className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors"
                    >
                      Compare Medicare & Life Insurance Options
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
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border-2 border-indigo-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-indigo-800">Complete Family Coverage</h3>
                <p className="text-indigo-600">Family of 4, Orlando, FL</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Health Marketplace:</span>
                  <span className="font-bold text-blue-600">$280/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Life Insurance:</span>
                  <span className="font-bold text-green-600">$500K coverage</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Final Expense:</span>
                  <span className="font-bold text-purple-600">Grandparents covered</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total Monthly Investment:</span>
                  <span className="font-bold text-green-600">$385/month</span>
                </div>
                <div className="text-center text-indigo-800 font-bold text-xl">
                  🎯 Complete multi-generational protection
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-blue-800">Senior Medicare Transition</h3>
                <p className="text-blue-600">Retiree, Age 65, Miami, FL</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Previous COBRA:</span>
                  <span className="font-bold text-red-600">$720/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Medicare Advantage:</span>
                  <span className="font-bold text-green-600">$65/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Extra Benefits:</span>
                  <span className="font-bold text-blue-600">Dental + Vision + Rx</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Annual Savings:</span>
                  <span className="font-bold text-green-600">$7,860</span>
                </div>
                <div className="text-center text-blue-800 font-bold text-xl">
                  💰 Better coverage, huge savings
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Junior's Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-bold">TR</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Thomas R.</h4>
                  <p className="text-sm text-gray-600">Small Business Owner, Tampa, FL</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Junior helped me set up employee benefits for my company and also got me life insurance for my family. 
                His knowledge across different insurance types saved me time and money. One-stop shopping!"
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">LG</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Linda G.</h4>
                  <p className="text-sm text-gray-600">Retiree, Jacksonville, FL</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Junior walked me through my Medicare options and also helped me get final expense coverage for both 
                my husband and me. He made the whole process simple and stress-free."
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </section>

        {/* Free Consultation CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Comprehensive Insurance Guidance with Junior</h2>
            <p className="text-xl text-indigo-100 mb-6">
              Whether you need Medicare Advantage, Final Expense, Life Insurance, Health Marketplace coverage, 
              or Employee Benefits, Junior provides complete insurance solutions tailored to your needs.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">$2,100</div>
                <div className="text-indigo-100">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">5</div>
                <div className="text-indigo-100">Insurance Specialties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Free</div>
                <div className="text-indigo-100">Comprehensive Analysis</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-indigo-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 Call Junior: 331-E-HEALTH
              </a>
              <Link
                href="/medicare-cost-calculator"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-indigo-50 transition-colors"
              >
                🧮 Cost Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm 
            title="Get Your Free Insurance Analysis from Junior"
            subtitle="Discover comprehensive insurance solutions including Medicare Advantage, Final Expense, Life Insurance, Health Marketplace, and Employee Benefits. Junior will analyze your complete insurance needs and find the best coverage options."
          />
        </div>

        {/* Social Proof */}
        <SocialProofSection 
          county="Florida" 
          state="FL"
          demographic="individuals, families, and businesses"
        />

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Insurance Resources</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/medicare-advantage" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">⭐</div>
              <h3 className="font-semibold text-indigo-600">Medicare Advantage</h3>
              <p className="text-gray-600 text-sm">All-in-one plans</p>
            </Link>
            <Link href="/health-insurance-marketplace" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-semibold text-indigo-600">Health Marketplace</h3>
              <p className="text-gray-600 text-sm">ACA plans</p>
            </Link>
            <Link href="/health-insurance-cost-calculator" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🧮</div>
              <h3 className="font-semibold text-indigo-600">Cost Calculator</h3>
              <p className="text-gray-600 text-sm">Estimate savings</p>
            </Link>
            <Link href="/team" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-semibold text-indigo-600">Our Team</h3>
              <p className="text-gray-600 text-sm">Meet our experts</p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  )
}