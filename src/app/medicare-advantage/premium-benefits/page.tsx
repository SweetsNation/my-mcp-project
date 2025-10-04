import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';
import {
  trackMedicareAdvancedPageView,
  trackMedicareAdvancedCTA,
  setupMedicareAdvancedScrollTracking
} from '@/lib/analytics/medicareAdvancedTracking';

export const metadata: Metadata = {
  title: 'Medicare Advantage Premium Benefits 2025 | Extra Benefits & Enhanced Coverage | Compare Plans',
  description: 'Discover Medicare Advantage premium benefits 2025. Dental, vision, hearing, fitness, OTC, transportation, meal delivery, in-home support. Compare enhanced coverage options.',
  keywords: 'Medicare Advantage premium benefits, Medicare Advantage extra benefits 2025, Medicare Advantage enhanced benefits, Medicare dental vision hearing benefits, Medicare fitness benefits, Medicare OTC benefits, Medicare transportation benefits, Medicare meal delivery, Medicare in-home support, Medicare advantage additional benefits, Medicare wellness benefits, Medicare preventive care benefits, Medicare chronic care benefits, Medicare telehealth benefits, Medicare advantages over Original Medicare',
  openGraph: {
    title: 'Medicare Advantage Premium Benefits 2025 | Extra Benefits Beyond Original Medicare',
    description: 'Explore premium benefits included in Medicare Advantage plans. Dental, vision, hearing, fitness, OTC allowances, transportation, meal delivery, and more. Compare enhanced coverage.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Medicare Advantage Benefits Guide',
    images: [
      {
        url: '/images/medicare-advantage-premium-benefits-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Medicare Advantage Premium Benefits 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Medicare Advantage Premium Benefits 2025',
    description: 'Discover premium benefits in Medicare Advantage plans. Dental, vision, hearing, fitness, OTC, transportation, meal delivery. Enhanced coverage beyond Original Medicare.',
    images: ['/images/medicare-advantage-premium-benefits-2025.jpg']
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/premium-benefits',
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

const benefitsData = {
  totalBenefitTypes: 15,
  plansWithExtraBenefits: 92,
  avgBenefitValue: 3200,
  topRatedBenefitPlans: 156
};

const premiumBenefits = [
  {
    category: 'Dental Coverage',
    icon: '🦷',
    value: 'Up to $3,000/year',
    coverage: ['Preventive care (cleanings, exams, X-rays)', 'Basic services (fillings, extractions)', 'Major services (crowns, bridges, dentures)', 'Comprehensive care on select plans'],
    notInOriginalMedicare: true,
    popularityRating: 98
  },
  {
    category: 'Vision Coverage',
    icon: '👓',
    value: 'Up to $400/year',
    coverage: ['Annual eye exams', 'Eyeglasses or contact lenses', 'Frames allowance', 'Lens upgrades and coatings'],
    notInOriginalMedicare: true,
    popularityRating: 96
  },
  {
    category: 'Hearing Benefits',
    icon: '👂',
    value: 'Up to $2,500/pair',
    coverage: ['Annual hearing exams', 'Hearing aids (1-2 pairs per year)', 'Batteries and accessories', 'Fitting and follow-up visits'],
    notInOriginalMedicare: true,
    popularityRating: 89
  },
  {
    category: 'Fitness Programs',
    icon: '💪',
    value: 'Free membership',
    coverage: ['SilverSneakers or Renew Active', '15,000+ participating gyms nationwide', 'Fitness classes and online programs', 'At-home fitness kits'],
    notInOriginalMedicare: true,
    popularityRating: 94
  },
  {
    category: 'Over-the-Counter (OTC) Benefits',
    icon: '🧴',
    value: '$125-$200/quarter',
    coverage: ['Health products and vitamins', 'Personal care items', 'First aid supplies', 'Home delivery to your door'],
    notInOriginalMedicare: true,
    popularityRating: 91
  },
  {
    category: 'Transportation Services',
    icon: '🚗',
    value: 'Up to 48 trips/year',
    coverage: ['Rides to doctor appointments', 'Pharmacy pickup trips', 'Preventive care visits', 'Door-to-door service'],
    notInOriginalMedicare: true,
    popularityRating: 87
  },
  {
    category: 'Meal Delivery',
    icon: '🍱',
    value: 'Up to 84 meals',
    coverage: ['Post-hospital discharge meals', 'Nutritionally balanced options', 'Chronic condition meal plans', 'Home delivery included'],
    notInOriginalMedicare: true,
    popularityRating: 82
  },
  {
    category: 'In-Home Support Services',
    icon: '🏠',
    value: 'Up to $50/month',
    coverage: ['Light housekeeping assistance', 'Personal care support', 'Safety modifications', 'Respite care for caregivers'],
    notInOriginalMedicare: true,
    popularityRating: 78
  },
  {
    category: 'Telehealth Services',
    icon: '💻',
    value: '$0 copay',
    coverage: ['24/7 virtual doctor visits', 'Mental health counseling', 'Specialist consultations', 'Prescription management'],
    notInOriginalMedicare: false,
    popularityRating: 93
  },
  {
    category: 'Chronic Condition Programs',
    icon: '❤️',
    value: 'Included',
    coverage: ['Diabetes management programs', 'Heart health monitoring', 'COPD support', 'Care coordination'],
    notInOriginalMedicare: false,
    popularityRating: 85
  },
  {
    category: 'Wellness & Preventive Care',
    icon: '🧘',
    value: 'Included',
    coverage: ['Annual wellness visits', 'Health risk assessments', 'Personalized prevention plans', 'Nutrition counseling'],
    notInOriginalMedicare: false,
    popularityRating: 88
  },
  {
    category: 'Acupuncture Services',
    icon: '💉',
    value: 'Up to 20 visits/year',
    coverage: ['Chronic pain management', 'Licensed acupuncturist network', 'Low or $0 copay', 'Complementary medicine coverage'],
    notInOriginalMedicare: true,
    popularityRating: 64
  }
];

export default function PremiumBenefitsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Premium Benefits', href: '/medicare-advantage/premium-benefits' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Medicare Advantage Premium Benefits",
    "description": "Comprehensive guide to premium benefits included in Medicare Advantage plans including dental, vision, hearing, fitness, OTC, transportation, and enhanced coverage options beyond Original Medicare.",
    "provider": {
      "@type": "Organization",
      "name": "El-Mag Insurance"
    },
    "serviceType": "Medicare Advantage Benefits Information",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What premium benefits are included in Medicare Advantage plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medicare Advantage plans include premium benefits not covered by Original Medicare such as dental coverage (up to $3,000/year), vision coverage (up to $400/year), hearing aids (up to $2,500/pair), fitness memberships (SilverSneakers or Renew Active), OTC benefits ($125-$200/quarter), transportation services, meal delivery, in-home support, and telehealth services."
        }
      },
      {
        "@type": "Question",
        "name": "Does Original Medicare cover dental, vision, and hearing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Original Medicare does not cover routine dental care, vision exams, eyeglasses, or hearing aids. These are considered premium benefits only available through Medicare Advantage plans or purchased separately with supplemental insurance."
        }
      },
      {
        "@type": "Question",
        "name": "What is the SilverSneakers fitness benefit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SilverSneakers is a free fitness program included in many Medicare Advantage plans. It provides access to 15,000+ participating gyms nationwide, fitness classes designed for seniors, online workout programs, and at-home fitness kits. Renew Active is a similar program offered by some carriers."
        }
      },
      {
        "@type": "Question",
        "name": "How do Medicare Advantage OTC benefits work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medicare Advantage OTC (over-the-counter) benefits provide a quarterly allowance ($125-$200) to purchase health products, vitamins, personal care items, and first aid supplies. Items are typically ordered through a catalog or online portal and delivered to your home at no cost."
        }
      },
      {
        "@type": "Question",
        "name": "What are Medicare Advantage transportation benefits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medicare Advantage transportation benefits provide free or low-cost rides to medical appointments, pharmacy pickups, and preventive care visits. Most plans offer 24-48 trips per year with door-to-door service. This benefit helps seniors without reliable transportation access necessary healthcare."
        }
      }
    ]
  };

  React.useEffect(() => {
    trackMedicareAdvancedPageView(
      'Medicare Advantage Premium Benefits',
      {
        pageType: 'benefits',
        totalBenefitTypes: benefitsData.totalBenefitTypes,
        specialMetrics: {
          plansWithExtraBenefits: benefitsData.plansWithExtraBenefits,
          avgBenefitValue: benefitsData.avgBenefitValue
        }
      },
      {
        category: 'Benefits Information'
      }
    );

    const cleanup = setupMedicareAdvancedScrollTracking('benefits', [
      { percentage: 25, milestone: 'dental_vision_benefits_viewed' },
      { percentage: 50, milestone: 'fitness_otc_benefits_viewed' },
      { percentage: 75, milestone: 'wellness_programs_viewed' },
      { percentage: 90, milestone: 'content_completion' }
    ]);

    return cleanup;
  }, []);

  return (
    <>
      <LandingPageAnalytics
        pageType="benefits"
        pageTitle="Medicare Advantage Premium Benefits"
        keyMetrics={{
          totalBenefitTypes: benefitsData.totalBenefitTypes,
          plansWithExtraBenefits: benefitsData.plansWithExtraBenefits,
          pageType: 'benefits'
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
          __html: JSON.stringify(serviceSchema),
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
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Medicare Advantage Premium Benefits 2025: Extra Coverage Beyond Original Medicare
                </h1>
                <p className="text-xl md:text-2xl text-purple-100 mb-8">
                  Discover the <strong>premium benefits included in Medicare Advantage plans</strong> that Original Medicare
                  doesn't cover. Get dental, vision, hearing, fitness memberships, OTC allowances, transportation,
                  meal delivery, and enhanced wellness programs worth an average of <strong>$3,200 annually</strong>.
                </p>
                <div className="bg-purple-900 bg-opacity-50 p-6 rounded-lg mb-8">
                  <h2 className="text-2xl font-bold mb-4">Premium Benefits Not Covered by Original Medicare</h2>
                  <div className="grid md:grid-cols-2 gap-3 text-purple-50">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>Dental Coverage</strong>
                        <p className="text-sm">Up to $3,000/year for cleanings, fillings, dentures</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>Vision & Eyewear</strong>
                        <p className="text-sm">Annual exams, glasses or contacts up to $400</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>Hearing Aids</strong>
                        <p className="text-sm">Up to $2,500/pair, batteries included</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>Fitness Membership</strong>
                        <p className="text-sm">Free SilverSneakers at 15,000+ gyms</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>OTC Benefits</strong>
                        <p className="text-sm">$125-$200/quarter for health products</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong>Transportation</strong>
                        <p className="text-sm">Up to 48 trips/year to appointments</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/medicare-plan-comparison-tool"
                    className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors text-center shadow-lg"
                    onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'hero', 'benefits', '/medicare-plan-comparison-tool')}
                  >
                    Compare Plans with Premium Benefits
                  </Link>
                  <a
                    href="tel:331-343-2584"
                    className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('phone_call', 'hero', 'benefits', 'tel:331-343-2584')}
                  >
                    Call 331-343-2584
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Overview */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Medicare Advantage Premium Benefits Overview
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-purple-600">{benefitsData.totalBenefitTypes}+</div>
                  <div className="text-gray-600 mt-2">Benefit Categories</div>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-indigo-600">{benefitsData.plansWithExtraBenefits}%</div>
                  <div className="text-gray-600 mt-2">Plans with Extra Benefits</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600">${benefitsData.avgBenefitValue.toLocaleString()}</div>
                  <div className="text-gray-600 mt-2">Avg Annual Value</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-green-600">{benefitsData.topRatedBenefitPlans}+</div>
                  <div className="text-gray-600 mt-2">4+ Star Benefit Plans</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Medicare Advantage for Premium Benefits</h3>
                <p className="text-gray-700 mb-4">
                  <strong>92% of Medicare Advantage plans include extra benefits</strong> not covered by Original Medicare.
                  These premium benefits can save you thousands of dollars annually on dental care, vision needs, hearing aids,
                  and wellness services that you'd otherwise pay for out-of-pocket.
                </p>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li>• <strong>$3,200 average annual benefit value</strong> per enrollee</li>
                  <li>• Comprehensive dental coverage (not in Original Medicare)</li>
                  <li>• Vision exams and eyewear (not in Original Medicare)</li>
                  <li>• Hearing aids and exams (not in Original Medicare)</li>
                  <li>• Free gym memberships and fitness classes</li>
                  <li>• OTC health products delivered to your door</li>
                  <li>• Transportation to medical appointments</li>
                  <li>• Meal delivery after hospital stays</li>
                  <li>• In-home support services</li>
                  <li>• 24/7 telehealth with $0 copays</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comprehensive Benefits Grid */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Complete Guide to Medicare Advantage Premium Benefits
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Explore all premium benefits available in Medicare Advantage plans. Benefits vary by plan -
                compare options to find the coverage that best meets your needs.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-purple-400 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-4xl mr-3">{benefit.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{benefit.category}</h3>
                          <p className="text-sm text-purple-600 font-semibold">{benefit.value}</p>
                        </div>
                      </div>
                      {benefit.notInOriginalMedicare && (
                        <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">
                          NOT in Original Medicare
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2 mb-4">
                      {benefit.coverage.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Popularity:</span>
                        <div className="flex items-center">
                          <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                            <div
                              className="h-2 bg-purple-600 rounded-full"
                              style={{ width: `${benefit.popularityRating}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-semibold text-gray-700">{benefit.popularityRating}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Dental Benefits Deep Dive */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-6xl mb-4 block">🦷</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Comprehensive Dental Coverage
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Original Medicare doesn't cover routine dental care, leaving millions of seniors paying out-of-pocket
                    for cleanings, fillings, and dentures. Medicare Advantage plans include comprehensive dental benefits
                    worth up to <strong>$3,000 per year</strong>.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-900 mb-2">Preventive Dental (100% Covered)</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• 2 cleanings per year</li>
                        <li>• 2 routine exams per year</li>
                        <li>• Annual X-rays</li>
                        <li>• Fluoride treatments</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-2">Basic Dental (80% Covered)</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Fillings and repairs</li>
                        <li>• Simple extractions</li>
                        <li>• Root canals</li>
                        <li>• Periodontal care</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-900 mb-2">Major Dental (50% Covered)</h4>
                      <ul className="text-sm text-purple-800 space-y-1">
                        <li>• Crowns and bridges</li>
                        <li>• Dentures (full or partial)</li>
                        <li>• Implants (select plans)</li>
                        <li>• Oral surgery</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Dental Coverage Comparison</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">Original Medicare</span>
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">$0</span>
                      </div>
                      <p className="text-sm text-gray-600">No dental coverage. Pay full price out-of-pocket.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">Medicare Advantage</span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Up to $3,000/year</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Comprehensive preventive, basic, and major dental coverage included.
                      </p>
                    </div>
                    <div className="bg-purple-100 p-4 rounded-lg">
                      <p className="text-sm text-purple-900 font-semibold">
                        💡 Average annual dental expenses for seniors: $1,200
                      </p>
                      <p className="text-sm text-purple-800 mt-2">
                        Medicare Advantage dental benefits can save you over $1,000 per year compared to Original Medicare.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Hearing Benefits */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Vision & Hearing Benefits Not Covered by Original Medicare
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <span className="text-5xl mr-4">👓</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Vision Coverage</h3>
                      <p className="text-purple-600 font-semibold">Up to $400 per year</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Original Medicare only covers vision care related to eye diseases or surgery. Medicare Advantage
                    plans include routine vision benefits for overall eye health and corrective eyewear.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Annual Eye Exam</p>
                        <p className="text-sm text-gray-600">Comprehensive vision screening with eye doctor</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Eyeglasses or Contact Lenses</p>
                        <p className="text-sm text-gray-600">$200-$400 allowance for corrective eyewear</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Frame Selection</p>
                        <p className="text-sm text-gray-600">Wide variety of frames to choose from</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Lens Upgrades</p>
                        <p className="text-sm text-gray-600">Upgrades like progressive lenses, anti-glare coating</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <span className="text-5xl mr-4">👂</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Hearing Benefits</h3>
                      <p className="text-purple-600 font-semibold">Up to $2,500 per pair</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Hearing aids cost $2,000-$6,000 per pair and aren't covered by Original Medicare. Medicare Advantage
                    plans include hearing exams and allowances for hearing aids, saving thousands of dollars.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Annual Hearing Exam</p>
                        <p className="text-sm text-gray-600">Comprehensive hearing test with audiologist</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Hearing Aids (1-2 pairs/year)</p>
                        <p className="text-sm text-gray-600">$1,000-$2,500 allowance for hearing devices</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Batteries & Accessories</p>
                        <p className="text-sm text-gray-600">Ongoing supplies for your hearing aids</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Fitting & Follow-up</p>
                        <p className="text-sm text-gray-600">Professional fitting and adjustment visits</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fitness & Wellness */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Fitness & Wellness Programs to Keep You Active
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl mb-6">
                    <div className="flex items-center mb-4">
                      <span className="text-5xl mr-4">💪</span>
                      <h3 className="text-2xl font-bold text-gray-900">SilverSneakers Fitness Program</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Free gym membership included in many Medicare Advantage plans. Access 15,000+ participating
                      gyms and fitness centers nationwide plus online classes and at-home workout options.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">Unlimited gym access at participating locations</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">Senior-focused fitness classes</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">On-demand digital fitness library</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">At-home exercise equipment kits</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
                    <div className="flex items-center mb-4">
                      <span className="text-5xl mr-4">🏃</span>
                      <h3 className="text-2xl font-bold text-gray-900">Renew Active by UnitedHealthcare</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Premium fitness program offering personalized fitness plans, online classes, and access to
                      top-tier gyms. Available with select UnitedHealthcare Medicare Advantage plans.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">Personalized fitness assessment</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">Customized workout routines</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">Brain health and meditation programs</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">Access to premium gyms (LA Fitness, YMCA)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-purple-50 p-6 rounded-lg mb-6">
                    <h4 className="text-xl font-bold text-purple-900 mb-4">Popular Participating Gym Chains</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded text-center">
                        <p className="font-semibold text-gray-900">LA Fitness</p>
                        <p className="text-xs text-gray-600">700+ locations</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <p className="font-semibold text-gray-900">24 Hour Fitness</p>
                        <p className="text-xs text-gray-600">400+ locations</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <p className="font-semibold text-gray-900">YMCA</p>
                        <p className="text-xs text-gray-600">2,700+ branches</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <p className="font-semibold text-gray-900">Anytime Fitness</p>
                        <p className="text-xs text-gray-600">4,000+ clubs</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <p className="font-semibold text-gray-900">Curves</p>
                        <p className="text-xs text-gray-600">3,000+ locations</p>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <p className="font-semibold text-gray-900">Planet Fitness</p>
                        <p className="text-xs text-gray-600">2,400+ locations</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-indigo-900 mb-4">Health Benefits of Regular Exercise</h4>
                    <ul className="space-y-2 text-sm text-indigo-800">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span><strong>Reduces risk of chronic diseases</strong> - heart disease, diabetes, arthritis</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span><strong>Improves mental health</strong> - reduces depression and anxiety</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span><strong>Enhances mobility and balance</strong> - prevents falls and injuries</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span><strong>Maintains independence</strong> - ability to perform daily activities</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span><strong>Social engagement</strong> - group classes and community connections</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OTC & Transportation */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <span className="text-5xl mr-4">🧴</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Over-the-Counter (OTC) Benefits</h3>
                      <p className="text-purple-600 font-semibold">$125-$200 per quarter</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Get a quarterly allowance to purchase health and wellness products delivered directly to your home.
                    No out-of-pocket cost for eligible items.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-purple-900 mb-3">Eligible OTC Items Include:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-purple-800">
                      <div>• Pain relievers</div>
                      <div>• Vitamins & supplements</div>
                      <div>• Cold & flu medicine</div>
                      <div>• First aid supplies</div>
                      <div>• Dental care products</div>
                      <div>• Eye care items</div>
                      <div>• Digestive health</div>
                      <div>• Thermometers</div>
                      <div>• Blood pressure monitors</div>
                      <div>• Diabetic supplies</div>
                      <div>• Incontinence products</div>
                      <div>• Personal care items</div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-900 font-semibold mb-2">
                      💰 Annual OTC Benefit Value: $500-$800
                    </p>
                    <p className="text-sm text-green-800">
                      Save hundreds on health products you'd normally buy at the pharmacy or store.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <span className="text-5xl mr-4">🚗</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Transportation Services</h3>
                      <p className="text-purple-600 font-semibold">Up to 48 trips per year</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Free or low-cost transportation to medical appointments, pharmacy pickups, and preventive care visits.
                    Essential for seniors without reliable transportation.
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Door-to-Door Service</p>
                        <p className="text-sm text-gray-600">Pickup from your home, drop-off at medical facility</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Covered Destinations</p>
                        <p className="text-sm text-gray-600">Doctor appointments, specialists, pharmacy, dialysis, physical therapy</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Easy Scheduling</p>
                        <p className="text-sm text-gray-600">Call ahead to arrange rides, reliable and on-time</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-2 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">Wheelchair Accessible</p>
                        <p className="text-sm text-gray-600">Vehicles accommodate wheelchairs and walkers</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900 font-semibold mb-2">
                      🚕 Value of Transportation Benefit
                    </p>
                    <p className="text-sm text-blue-800">
                      48 trips at $25 average ride = $1,200 annual value. Never miss a doctor appointment due to lack of transportation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions About Medicare Advantage Premium Benefits
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What premium benefits do Medicare Advantage plans include that Original Medicare doesn't?
                  </h3>
                  <p className="text-gray-700">
                    Medicare Advantage plans include premium benefits not covered by Original Medicare: comprehensive dental coverage
                    (up to $3,000/year), vision coverage including eyewear (up to $400/year), hearing aids (up to $2,500/pair),
                    fitness memberships (SilverSneakers or Renew Active), OTC benefits ($125-$200/quarter), transportation services,
                    meal delivery, in-home support, and enhanced telehealth. These benefits are worth an average of $3,200 annually.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Are dental, vision, and hearing benefits really free with Medicare Advantage?
                  </h3>
                  <p className="text-gray-700">
                    Yes, these benefits are included in most Medicare Advantage plans at no additional premium cost beyond what you
                    pay for Part B. While you may have copays for certain services, the coverage is built into your plan. Many plans
                    offer $0 premium with comprehensive dental, vision, and hearing benefits - a significant value compared to paying
                    out-of-pocket or buying separate insurance for these services.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How does the SilverSneakers fitness benefit work?
                  </h3>
                  <p className="text-gray-700">
                    SilverSneakers provides free access to 15,000+ participating gyms nationwide including LA Fitness, YMCA, Anytime
                    Fitness, and Planet Fitness. You get unlimited gym visits, senior-focused fitness classes, on-demand digital
                    workouts, and at-home exercise kits. Simply present your SilverSneakers member ID at participating locations.
                    Some plans offer Renew Active instead, which provides similar benefits with personalized fitness plans.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Can I really get free over-the-counter products delivered to my home?
                  </h3>
                  <p className="text-gray-700">
                    Yes! Most Medicare Advantage plans provide quarterly OTC allowances ($125-$200) to order health products, vitamins,
                    pain relievers, first aid supplies, dental care, personal care items, and more. You select items from a catalog
                    or online portal, and they're delivered to your home at no cost. This benefit alone can save $500-$800 annually
                    on products you'd normally buy at the pharmacy or store.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Do all Medicare Advantage plans offer the same premium benefits?
                  </h3>
                  <p className="text-gray-700">
                    No, benefits vary by plan and carrier. 92% of Medicare Advantage plans include extra benefits, but the specific
                    benefits and coverage amounts differ. Some plans offer comprehensive dental with major services, while others
                    provide only preventive care. Compare plans carefully to find the benefits that matter most to you. Higher-rated
                    plans (4+ stars) typically offer more generous benefits packages.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison CTA */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Find Medicare Advantage Plans with the Premium Benefits You Need
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Compare Medicare Advantage plans based on the specific benefits that matter to you - dental, vision, hearing,
                fitness, OTC, transportation, and more. Get personalized recommendations from our Medicare specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/medicare-plan-comparison-tool"
                  className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors text-center shadow-lg"
                  onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'footer', 'benefits', '/medicare-plan-comparison-tool')}
                >
                  Compare Plans by Benefits
                </Link>
                <a
                  href="tel:331-343-2584"
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('phone_call', 'footer', 'benefits', 'tel:331-343-2584')}
                >
                  Call 331-343-2584 Now
                </a>
              </div>
              <p className="text-purple-100 mt-6 text-sm">
                Licensed Medicare agents available Monday-Friday 8am-8pm, Saturday 9am-5pm EST
              </p>
            </div>
          </section>

          {/* Related Resources */}
          <section className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Medicare Resources</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Medicare Plan Types</h4>
                  <ul className="space-y-2 text-purple-600">
                    <li><Link href="/medicare-advantage" className="hover:underline">All Medicare Advantage Plans</Link></li>
                    <li><Link href="/medicare-supplement" className="hover:underline">Medicare Supplement Insurance</Link></li>
                    <li><Link href="/medicare-part-d" className="hover:underline">Medicare Part D Prescription Drug Plans</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Popular Locations</h4>
                  <ul className="space-y-2 text-purple-600">
                    <li><Link href="/medicare-advantage/miami-dade-florida" className="hover:underline">Miami-Dade Medicare Advantage</Link></li>
                    <li><Link href="/medicare-advantage/miami-beach-florida" className="hover:underline">Miami Beach Medicare Advantage</Link></li>
                    <li><Link href="/medicare-advantage/broward-county-florida" className="hover:underline">Broward County Medicare Advantage</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Medicare Tools</h4>
                  <ul className="space-y-2 text-purple-600">
                    <li><Link href="/medicare-plan-comparison-tool" className="hover:underline">Medicare Plan Comparison Tool</Link></li>
                    <li><Link href="/medicare-cost-calculator" className="hover:underline">Medicare Cost Calculator</Link></li>
                    <li><Link href="/contact" className="hover:underline">Talk to a Medicare Specialist</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
