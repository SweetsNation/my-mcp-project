import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Retirement Planning Services 2025 | Medicare Transition | Healthcare Cost Planning | Income Strategy',
  description: 'Expert retirement planning services 2025. Medicare transition at 65, healthcare cost planning, annuity income strategies. Avoid Medicare penalties, plan retirement healthcare costs.',
  keywords: 'retirement planning services 2025, Medicare transition planning 65, retirement healthcare cost planning, Medicare enrollment at 65, retirement income planning strategies, annuity retirement planning, 65th birthday Medicare enrollment, employer coverage to Medicare transition, retirement healthcare costs, Medicare supplement retirement planning, early retirement healthcare planning, retirement insurance planning services, pre-retirement Medicare planning, retirement financial planning advisor, Medicare penalty avoidance planning, retirement income replacement planning, healthcare inflation retirement planning, long term care retirement planning, retirement benefits optimization, Medicare vs employer coverage planning, retirement health insurance planning, annuity income retirement planning, Social Security retirement planning, retirement tax planning strategies, 401k to Medicare planning, COBRA to Medicare retirement transition, retirement planning consultants, retirement healthcare budgeting, Medicare Advantage retirement planning, retirement income diversification',
  openGraph: {
    title: 'Retirement Planning Services 2025 | Medicare & Financial Planning',
    description: 'Complete retirement planning services including Medicare guidance, annuities, and financial planning for a secure retirement.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Retirement Planning Specialists',
    images: [
      {
        url: '/images/retirement-planning-services-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Retirement Planning Services Medicare and Financial Planning 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Retirement Planning Services 2025',
    description: 'Comprehensive retirement planning with Medicare guidance, annuities, and financial planning services.',
    images: ['/images/retirement-planning-services-2025.jpg']
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/retirement-planning',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const planningServices = [
  {
    service: 'Medicare Transition Planning',
    description: 'Expert guidance transitioning from employer coverage to Medicare at 65',
    features: ['Medicare enrollment timing', 'Supplement vs. Advantage comparison', 'Coverage gap analysis'],
    icon: '🏥',
    timeline: '6 months before 65th birthday'
  },
  {
    service: 'Annuity Planning',
    description: 'Secure guaranteed income for retirement with fixed and variable annuities',
    features: ['Immediate vs. deferred annuities', 'Income planning', 'Tax-advantaged growth'],
    icon: '💰',
    timeline: 'Pre-retirement through retirement'
  },
  {
    service: 'Healthcare Cost Planning',
    description: 'Plan for rising healthcare costs in retirement with appropriate coverage',
    features: ['Long-term care insurance', 'Health savings account optimization', 'Medicare supplement planning'],
    icon: '📊',
    timeline: '10-15 years before retirement'
  },
  {
    service: 'Income Replacement Planning',
    description: 'Ensure adequate income replacement in retirement from multiple sources',
    features: ['Social Security optimization', 'Pension planning', 'Investment income planning'],
    icon: '📈',
    timeline: '5-10 years before retirement'
  }
];

const retirementMilestones = [
  {
    age: '50-55',
    milestone: 'Early Planning Phase',
    actions: [
      'Assess retirement savings goals',
      'Consider long-term care insurance',
      'Review employer benefits',
      'Begin healthcare cost planning'
    ],
    priority: 'Foundation Building'
  },
  {
    age: '60-62',
    milestone: 'Pre-Retirement Planning',
    actions: [
      'Detailed Medicare research begins',
      'Annuity evaluation for income needs',
      'Social Security claiming strategy',
      'Healthcare transition planning'
    ],
    priority: 'Strategic Planning'
  },
  {
    age: '63-64',
    milestone: 'Medicare Transition Preparation',
    actions: [
      'Medicare enrollment preparation',
      'Supplement vs. Advantage decision',
      'COBRA vs. Medicare timing',
      'Prescription drug plan analysis'
    ],
    priority: 'Medicare Focus'
  },
  {
    age: '65+',
    milestone: 'Medicare Enrollment & Beyond',
    actions: [
      'Medicare enrollment execution',
      'Annual plan reviews',
      'Healthcare cost monitoring',
      'Income planning adjustments'
    ],
    priority: 'Implementation & Maintenance'
  }
];

const commonRetirementConcerns = [
  {
    concern: 'Healthcare Costs in Retirement',
    impact: 'Healthcare costs can consume 15-20% of retirement income',
    solutions: [
      'Comprehensive Medicare supplement planning',
      'Health Savings Account maximization',
      'Long-term care insurance consideration',
      'Healthcare inflation planning'
    ]
  },
  {
    concern: 'Medicare Enrollment Timing',
    impact: 'Late enrollment can result in permanent penalties',
    solutions: [
      '6-month planning window before 65th birthday',
      'Special enrollment period understanding',
      'COBRA vs. Medicare decision timing',
      'Employer coverage coordination'
    ]
  },
  {
    concern: 'Income Replacement in Retirement',
    impact: 'Most retirees need 70-90% of pre-retirement income',
    solutions: [
      'Annuity income planning',
      'Social Security optimization',
      'Investment withdrawal strategies',
      'Tax-efficient income planning'
    ]
  },
  {
    concern: 'Inflation Protection',
    impact: 'Inflation erodes purchasing power over long retirements',
    solutions: [
      'Inflation-adjusted annuities',
      'Healthcare cost escalation planning',
      'Medicare plan annual reviews',
      'Income adjustment strategies'
    ]
  }
];

export default function RetirementPlanningPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Retirement Planning', href: '/retirement-planning' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Local Business Schema for Retirement Planning Services
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Retirement Planning Services | Medicare Transition Specialists",
    "description": "Expert retirement planning services including Medicare transition at 65, healthcare cost planning, annuity income strategies, and comprehensive retirement financial planning.",
    "url": "https://elmag-insurance.com/retirement-planning",
    "telephone": "331-343-2584",
    "serviceType": "Retirement Planning Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Retirement Planning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medicare Transition Planning at 65",
            "description": "Expert guidance transitioning from employer coverage to Medicare with enrollment timing and penalty avoidance"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Retirement Healthcare Cost Planning",
            "description": "Comprehensive planning for healthcare costs in retirement including Medicare supplements and long-term care"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Annuity Income Planning",
            "description": "Guaranteed income strategies for retirement using fixed and variable annuities for income replacement"
          }
        }
      ]
    }
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When should I start planning for Medicare transition at 65?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should start Medicare transition planning 6 months before your 65th birthday to avoid late enrollment penalties and ensure seamless transition from employer coverage to Medicare."
        }
      },
      {
        "@type": "Question",
        "name": "How much should I plan for healthcare costs in retirement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare costs typically consume 15-20% of retirement income. A comprehensive retirement healthcare cost plan should include Medicare premiums, supplements, prescription drugs, and potential long-term care needs."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between Medicare Advantage and Medicare supplements for retirement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medicare Advantage plans are all-in-one alternatives to Original Medicare, while Medicare supplements work alongside Original Medicare to fill coverage gaps. The choice depends on your healthcare needs, budget, and preferred providers in retirement."
        }
      },
      {
        "@type": "Question",
        "name": "How do annuities fit into retirement income planning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Annuities provide guaranteed income in retirement and can replace a portion of your pre-retirement salary. They offer protection against market volatility and longevity risk, ensuring you don't outlive your retirement income."
        }
      }
    ]
  };

  return (
    <>
      <LandingPageAnalytics
        pageType="service"
        pageTitle="Retirement Planning Services"
        county=""
        state=""
        demographics={{}}
        keyMetrics={{
          pageType: 'retirement_planning'
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        <main>
          <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Retirement Planning Services 2025 | Medicare Transition Specialists
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  <strong>Expert retirement planning with Medicare transition at 65.</strong> Avoid Medicare penalties, 
                  plan healthcare costs, and secure retirement income with <strong>comprehensive Medicare enrollment guidance,</strong> 
                  <strong>annuity income planning,</strong> and <strong>healthcare cost management strategies</strong> for your golden years.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  >
                    Get Retirement Planning Help
                  </Link>
                  <a 
                    href="tel:331-343-2584" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                  >
                    Call 331-E-HEALTH
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Expert Retirement Planning Services 2025 | Medicare Transition Specialists
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">🏥</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">Medicare Planning</div>
                  <div className="text-sm text-gray-600 mt-1">65th Birthday Transition</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">💰</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">Annuity Planning</div>
                  <div className="text-sm text-gray-600 mt-1">Guaranteed Income</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">📊</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">Healthcare Costs</div>
                  <div className="text-sm text-gray-600 mt-1">Cost Planning & Coverage</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">📈</div>
                  <div className="text-lg font-semibold text-gray-900 mt-2">Income Planning</div>
                  <div className="text-sm text-gray-600 mt-1">Replacement Strategy</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  <strong>Retirement planning services</strong> require expert coordination of <strong>Medicare transition at 65,</strong> 
                  income replacement, and healthcare cost management. Our <strong>retirement planning specialists</strong> 
                  help you navigate the complex transition from employer coverage to Medicare while ensuring adequate 
                  <strong>retirement income and healthcare cost protection</strong> against inflation throughout your golden years.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Why Comprehensive Retirement Planning Matters</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>Medicare transition at 65</strong> - avoid costly enrollment penalties</li>
                    <li>• <strong>Healthcare cost planning</strong> - plan for 15-20% of retirement income</li>
                    <li>• <strong>Income replacement strategy</strong> - maintain 70-90% of pre-retirement income</li>
                    <li>• <strong>Inflation protection</strong> - preserve purchasing power over long retirements</li>
                    <li>• <strong>Tax-efficient planning</strong> - minimize tax burden in retirement</li>
                    <li>• <strong>Long-term care preparation</strong> - protect against catastrophic costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Our Retirement Planning Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {planningServices.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-center mb-4">
                      <span className="text-4xl mb-3 block">{service.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{service.service}</h3>
                    </div>
                    <p className="text-gray-600 text-sm text-center mb-4">{service.description}</p>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <p className="text-sm text-primary-600 font-semibold">
                        <span className="font-semibold">Timeline:</span> {service.timeline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Retirement Planning Timeline by Age
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {retirementMilestones.map((milestone, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">Age {milestone.age}</h3>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-semibold">
                        {milestone.priority}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">{milestone.milestone}</h4>
                    <div className="mb-4">
                      <h5 className="text-md font-semibold text-gray-800 mb-2">Key Actions:</h5>
                      <ul className="text-sm text-gray-600">
                        {milestone.actions.map((action, idx) => (
                          <li key={idx}>• {action}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SEO-Optimized Marketing Section */}
          <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Our Retirement Planning Services?
                </h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
                  <strong>Retirement planning specialists</strong> recommend comprehensive planning because 
                  <strong>Medicare transition at 65</strong> and <strong>healthcare cost management</strong> 
                  are too complex to navigate alone. Our <strong>expert retirement planning services</strong> 
                  ensure you avoid costly mistakes and secure your financial future.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    🏥 Medicare Transition Expertise
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our <strong>Medicare transition specialists</strong> help you avoid permanent 
                    penalties and ensure seamless coverage from employer plans to Medicare.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 6-month pre-65 planning window</li>
                    <li>• Avoid Medicare penalty mistakes</li>
                    <li>• Supplement vs. Advantage guidance</li>
                    <li>• COBRA transition timing</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    💰 Healthcare Cost Planning
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Retirement healthcare costs</strong> average 15-20% of income. 
                    Our specialists help you plan and protect against inflation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Healthcare inflation protection</li>
                    <li>• Medicare supplement planning</li>
                    <li>• Long-term care preparation</li>
                    <li>• HSA optimization strategies</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    📈 Income Replacement Strategy
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Retirement income planning</strong> ensures 70-90% income replacement 
                    through strategic annuities and Social Security optimization.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Guaranteed income annuities</li>
                    <li>• Social Security optimization</li>
                    <li>• Tax-efficient withdrawal strategies</li>
                    <li>• Inflation-adjusted income planning</li>
                  </ul>
                </div>
              </div>
              
              {/* Call-to-Action with Retirement Keywords */}
              <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Get Free Retirement Planning Consultation
                </h3>
                <p className="text-lg mb-6">
                  <strong>Expert retirement planning specialists</strong> help you navigate Medicare transition, 
                  plan healthcare costs, and secure retirement income. Free consultation, personalized strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Schedule Retirement Consultation
                  </Link>
                  <a 
                    href="tel:331-343-2584" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Call Retirement Specialists
                  </a>
                </div>
                <p className="text-sm text-blue-200 mt-4">
                  Medicare Transition • Healthcare Cost Planning • Income Replacement • Annuity Planning
                </p>
                <p className="text-xs text-blue-300 mt-2">
                  Expert Retirement Planning Services | Avoid Medicare Penalties | Secure Your Future
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section for SEO */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Retirement Planning FAQ | Medicare Transition & Healthcare Cost Questions
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      When should I start planning for Medicare transition at 65?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      You should start <strong>Medicare transition planning 6 months before your 65th birthday</strong> 
                      to avoid late enrollment penalties and ensure seamless transition from employer coverage 
                      to Medicare. This planning window is critical for penalty avoidance.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      How much should I plan for healthcare costs in retirement?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Healthcare costs typically consume 15-20% of retirement income.</strong> A comprehensive 
                      retirement healthcare cost plan should include Medicare premiums, supplements, prescription 
                      drugs, and potential long-term care needs with inflation protection.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What's the difference between Medicare Advantage and Medicare supplements?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Medicare Advantage plans are all-in-one alternatives to Original Medicare,</strong> 
                      while Medicare supplements work alongside Original Medicare to fill coverage gaps. 
                      The choice depends on your healthcare needs, budget, and preferred providers in retirement.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      How do annuities fit into retirement income planning?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Annuities provide guaranteed income in retirement</strong> and can replace a portion 
                      of your pre-retirement salary. They offer protection against market volatility and longevity 
                      risk, ensuring you don't outlive your retirement income.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What are the biggest retirement planning mistakes to avoid?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Common mistakes include <strong>late Medicare enrollment causing permanent penalties,</strong> 
                      underestimating healthcare costs, insufficient income replacement planning, and failing 
                      to plan for inflation in long-term retirement needs.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      When should I consider long-term care insurance in retirement planning?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Long-term care insurance should be considered 10-15 years before retirement</strong> 
                      when you're still healthy and premiums are more affordable. It protects against 
                      catastrophic care costs that can devastate retirement savings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Common Retirement Planning Concerns
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {commonRetirementConcerns.map((concern, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{concern.concern}</h3>
                    <p className="text-red-600 text-sm mb-4 font-semibold">{concern.impact}</p>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Solutions:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {concern.solutions.map((solution, idx) => (
                          <li key={idx}>• {solution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Related Planning Resources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">Medicare Planning:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage" className="hover:underline">Medicare Advantage Plans</Link></li>
                      <li>• <Link href="/supplemental-insurance" className="hover:underline">Medicare Supplement Plans</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">Insurance Planning:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/annuities" className="hover:underline">Annuity Options</Link></li>
                      <li>• <Link href="/short-term-health-insurance" className="hover:underline">Short-Term Health Insurance</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Start Your Retirement Planning Today
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Don't leave your retirement to chance. Get expert guidance on Medicare transition, 
                income planning, and healthcare cost management. Our comprehensive retirement planning 
                services help you navigate the complexities and secure your financial future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                >
                  Schedule Planning Consultation
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                >
                  331-E-HEALTH
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}