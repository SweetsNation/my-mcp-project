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
import { generateCountyMedicareSchema, getMedicareAdvantageFAQs } from '@/lib/schema/county-medicare-schema';

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans Miami-Dade Florida 2025 | Best MA Plans Miami | Compare 95+ Options',
  description: 'Find the best Medicare Advantage plans in Miami-Dade Florida 2025. Compare 95+ plans with $0 premiums, dental, vision coverage. Jackson Health, Baptist Health networks. Free quotes.',
  keywords: 'Medicare Advantage plans Miami-Dade Florida, Medicare Advantage Miami FL 2025, best Medicare plans Miami, Medicare Advantage Miami-Dade County, zero premium Medicare Miami, Miami Medicare Advantage enrollment, Medicare plans South Florida, Jackson Health Medicare, Baptist Health Medicare Miami, Medicare Advantage Miami comparison, affordable Medicare Miami-Dade, Medicare Advantage HMO Miami, Medicare Advantage PPO Florida, Miami Medicare benefits, South Florida Medicare plans 2025',
  openGraph: {
    title: 'Best Medicare Advantage Plans Miami-Dade Florida 2025 | Compare 95+ MA Plans',
    description: 'Compare Medicare Advantage plans in Miami-Dade Florida. 58 zero premium options, comprehensive benefits, Jackson Health & Baptist Health networks. Get free quotes.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Miami-Dade Medicare Specialists',
    images: [
      {
        url: '/images/medicare-advantage-miami-dade-florida-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Medicare Advantage Plans Miami-Dade Florida 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Medicare Advantage Plans Miami-Dade Florida 2025',
    description: 'Compare 95+ Medicare Advantage plans in Miami-Dade FL. 58 $0 premium options, dental & vision coverage, top healthcare networks.',
    images: ['/images/medicare-advantage-miami-dade-florida-2025.jpg']
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/miami-dade-florida',
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

const miamiDadeData = {
  totalBeneficiaries: 525000,
  maPenetration: 71.2,
  averageAge: 73,
  planCount: 95,
  zeroPremiumPlans: 58,
  averageStarRating: 4.2,
  avgMonthlySavings: 1680,
  topRatedPlans: 42
};

const topPlans = [
  {
    name: 'Humana Gold Plus HMO',
    carrier: 'Humana',
    premium: '$0',
    rating: '4.5 stars',
    network: 'Jackson Health System, Baptist Health South Florida',
    maxOOP: '$6,900',
    drugCoverage: 'Included',
    extraBenefits: ['Dental', 'Vision', 'Hearing', 'Fitness', 'Transportation']
  },
  {
    name: 'UnitedHealthcare AARP Medicare Advantage',
    carrier: 'UnitedHealthcare',
    premium: '$0',
    rating: '4 stars',
    network: 'Comprehensive South Florida network',
    maxOOP: '$7,550',
    drugCoverage: 'Included',
    extraBenefits: ['Dental', 'Vision', 'OTC benefits', 'Telehealth']
  },
  {
    name: 'Aetna Medicare Premier (HMO)',
    carrier: 'Aetna',
    premium: '$29',
    rating: '4.5 stars',
    network: 'Mount Sinai, Jackson Health partnerships',
    maxOOP: '$6,700',
    drugCoverage: 'Enhanced',
    extraBenefits: ['Comprehensive dental', 'Vision', 'Hearing aids', 'Gym membership']
  }
];

// Comprehensive County Medicare Schema with FAQs
const miamiDadeMAStructuredData = generateCountyMedicareSchema({
  pagePath: '/medicare-advantage/miami-dade-florida',
  pageTitle: 'Medicare Advantage Plans Miami-Dade Florida 2025 | Best MA Plans Miami | Compare 95+ Options',
  pageDescription: 'Find the best Medicare Advantage plans in Miami-Dade Florida 2025. Compare 95+ plans with $0 premiums, dental, vision coverage. Jackson Health, Baptist Health networks.',
  county: 'Miami-Dade County',
  state: 'Florida',
  productType: 'medicare-advantage',
  totalBeneficiaries: 525000,
  averagePremium: 0,
  faqs: getMedicareAdvantageFAQs('Miami-Dade', 'Florida', 95, 58)
});

export default function MiamiDadeFloridaPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Miami-Dade Florida', href: '/medicare-advantage/miami-dade-florida' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Local Business Schema for Miami-Dade Medicare Services
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Medicare Advantage Plans Miami-Dade Florida",
    "description": "Compare Medicare Advantage plans in Miami-Dade Florida. Expert guidance for Miami Medicare beneficiaries with access to Jackson Health, Baptist Health, and Mount Sinai networks.",
    "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/miami-dade-florida",
    "telephone": "331-343-2584",
    "areaServed": {
      "@type": "State",
      "name": "Florida",
      "containsPlace": [
        {
          "@type": "City",
          "name": "Miami"
        },
        {
          "@type": "City",
          "name": "Miami Beach"
        },
        {
          "@type": "City",
          "name": "Hialeah"
        },
        {
          "@type": "City",
          "name": "Coral Gables"
        },
        {
          "@type": "City",
          "name": "Homestead"
        },
        {
          "@type": "City",
          "name": "North Miami"
        }
      ]
    },
    "serviceType": "Medicare Advantage Insurance",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Miami-Dade Medicare Advantage Plans 2025",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medicare Advantage Plans Miami-Dade Florida",
            "description": "95 Medicare Advantage plans with 58 zero premium options for Miami-Dade County residents"
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
        "name": "How many Medicare Advantage plans are available in Miami-Dade Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are 95 Medicare Advantage plans available in Miami-Dade Florida for 2025, including 58 plans with $0 monthly premiums. Plans include coverage from major carriers like Humana, UnitedHealthcare, Aetna, and Wellcare."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best Medicare Advantage plans in Miami-Dade Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Top Medicare Advantage plans in Miami-Dade include Humana Gold Plus HMO (4.5 stars, $0 premium), UnitedHealthcare AARP Complete (4 stars, $0 premium), and Aetna Medicare Premier (4.5 stars, $29 premium). These plans offer access to Jackson Health, Baptist Health, and comprehensive benefits including dental and vision."
        }
      },
      {
        "@type": "Question",
        "name": "Do Miami-Dade Medicare Advantage plans cover Jackson Health System?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many Medicare Advantage plans in Miami-Dade Florida include Jackson Health System in their networks. Plans from Humana, Aetna, and other carriers partner with Jackson Memorial Hospital and Jackson Health facilities across South Florida."
        }
      },
      {
        "@type": "Question",
        "name": "When can I enroll in Medicare Advantage in Miami-Dade Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Miami-Dade residents can enroll in Medicare Advantage during the Annual Enrollment Period (October 15 - December 7), Medicare Advantage Open Enrollment (January 1 - March 31), or during Special Enrollment Periods if you qualify due to moving, losing coverage, or other qualifying events."
        }
      },
      {
        "@type": "Question",
        "name": "Are there zero premium Medicare Advantage plans in Miami-Dade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Miami-Dade Florida has 58 Medicare Advantage plans with $0 monthly premiums in 2025. These plans include extra benefits like dental, vision, hearing, fitness memberships, and prescription drug coverage at no additional premium cost."
        }
      }
    ]
  };

  React.useEffect(() => {
    trackMedicareAdvancedPageView(
      'Medicare Advantage Miami-Dade Florida',
      {
        pageType: 'county',
        totalBeneficiaries: miamiDadeData.totalBeneficiaries,
        availablePlans: miamiDadeData.planCount,
        specialMetrics: {
          zeroPremiumPlans: miamiDadeData.zeroPremiumPlans,
          maPenetration: miamiDadeData.maPenetration
        }
      },
      {
        city: 'Miami',
        state: 'Florida',
        county: 'Miami-Dade County',
        region: 'South Florida'
      }
    );

    const cleanup = setupMedicareAdvancedScrollTracking('county', [
      { percentage: 25, milestone: 'miami_plans_overview' },
      { percentage: 50, milestone: 'plan_comparison_viewed' },
      { percentage: 75, milestone: 'benefits_explored' },
      { percentage: 90, milestone: 'content_completion' }
    ]);

    return cleanup;
  }, []);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Miami-Dade Florida"
        county="Miami-Dade County"
        state="Florida"
        demographics={{
          avgAge: miamiDadeData.averageAge,
          maPenetrationRate: miamiDadeData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: miamiDadeData.totalBeneficiaries,
          availablePlans: miamiDadeData.planCount,
          zeroPremiumPlans: miamiDadeData.zeroPremiumPlans,
          pageType: 'county'
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
          __html: JSON.stringify(miamiDadeMAStructuredData),
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
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Best Medicare Advantage Plans Miami-Dade Florida 2025
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Compare <strong>95 Medicare Advantage plans</strong> in Miami-Dade Florida including{' '}
                  <strong>58 plans with $0 monthly premiums</strong>. Access Jackson Health System,
                  Baptist Health South Florida, Mount Sinai, and top healthcare networks across Miami.
                </p>
                <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg mb-8">
                  <h2 className="text-2xl font-bold mb-4">Why Miami-Dade Seniors Choose Medicare Advantage</h2>
                  <ul className="grid md:grid-cols-2 gap-3 text-blue-50">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      58 zero premium Medicare plans available
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Average savings of $1,680 annually
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Dental, vision & hearing included
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      42 plans rated 4+ stars
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/medicare-plan-comparison-tool"
                    className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-center shadow-lg"
                    onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'hero', 'county', '/medicare-plan-comparison-tool')}
                  >
                    Compare Miami Plans Now
                  </Link>
                  <a
                    href="tel:331-343-2584"
                    className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('phone_call', 'hero', 'county', 'tel:331-343-2584')}
                  >
                    Call 331-343-2584
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Key Statistics */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Medicare Advantage in Miami-Dade Florida
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600">{miamiDadeData.totalBeneficiaries.toLocaleString()}</div>
                  <div className="text-gray-600 mt-2">Medicare Beneficiaries</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-green-600">{miamiDadeData.planCount}</div>
                  <div className="text-gray-600 mt-2">MA Plans Available</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-purple-600">{miamiDadeData.zeroPremiumPlans}</div>
                  <div className="text-gray-600 mt-2">$0 Premium Plans</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-orange-600">{miamiDadeData.maPenetration}%</div>
                  <div className="text-gray-600 mt-2">MA Penetration</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Miami-Dade Has Top Medicare Advantage Options</h3>
                <p className="text-gray-700 mb-4">
                  Miami-Dade County leads Florida with a <strong>{miamiDadeData.maPenetration}% Medicare Advantage enrollment rate</strong>,
                  offering seniors access to premier healthcare networks including Jackson Health System, Baptist Health South Florida,
                  Mount Sinai Medical Center, and Nicklaus Children's Hospital affiliates.
                </p>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li>• Access to Jackson Memorial Hospital & Jackson Health</li>
                  <li>• Baptist Health South Florida comprehensive network</li>
                  <li>• Mount Sinai Medical Center partnerships</li>
                  <li>• University of Miami Health System coverage</li>
                  <li>• Cleveland Clinic Florida affiliations</li>
                  <li>• 58 plans with zero monthly premiums</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Top Plans Comparison */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Top Rated Medicare Advantage Plans in Miami-Dade Florida
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Compare the highest-rated Medicare Advantage plans available to Miami-Dade residents.
                These plans offer comprehensive coverage with top healthcare networks across South Florida.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {topPlans.map((plan, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-blue-400 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                      <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {plan.rating}
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-blue-600 mb-1">{plan.premium}<span className="text-lg text-gray-500">/mo</span></div>
                      <div className="text-sm text-gray-500">+ Part B premium</div>
                    </div>
                    <div className="space-y-3 mb-4 pb-4 border-b">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Max Out-of-Pocket:</span>
                        <span className="font-semibold text-gray-900">{plan.maxOOP}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Drug Coverage:</span>
                        <span className="font-semibold text-gray-900">{plan.drugCoverage}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Healthcare Network:</h4>
                      <p className="text-sm text-gray-600">{plan.network}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Extra Benefits Included:</h4>
                      <div className="flex flex-wrap gap-2">
                        {plan.extraBenefits.map((benefit, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Link
                  href="/medicare-plan-comparison-tool"
                  className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'plans_section', 'county', '/medicare-plan-comparison-tool')}
                >
                  Compare All 95 Miami-Dade Plans
                </Link>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Advantage Benefits in Miami-Dade Florida
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Premium Plans</h3>
                  <p className="text-gray-700">
                    58 Medicare Advantage plans with $0 monthly premiums available in Miami-Dade.
                    Get comprehensive coverage without paying extra beyond your Part B premium.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dental & Vision Coverage</h3>
                  <p className="text-gray-700">
                    Most Miami-Dade Medicare Advantage plans include dental cleanings, exams, vision care,
                    and eyewear allowances - benefits not covered by Original Medicare.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Prescription Drug Coverage</h3>
                  <p className="text-gray-700">
                    Prescription drug coverage (Part D) included in most Miami-Dade Medicare Advantage plans.
                    Access local pharmacies including CVS, Walgreens, and Publix.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transportation Benefits</h3>
                  <p className="text-gray-700">
                    Many plans offer free or low-cost transportation to medical appointments,
                    pharmacies, and fitness centers throughout Miami-Dade County.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fitness Programs</h3>
                  <p className="text-gray-700">
                    Free gym memberships and fitness programs at participating Miami-Dade gyms,
                    including LA Fitness, SilverSneakers, and Renew Active programs.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Over-the-Counter Benefits</h3>
                  <p className="text-gray-700">
                    Quarterly allowances for over-the-counter health products, personal care items,
                    and wellness products delivered to your Miami home.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Healthcare Networks */}
          <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Top Healthcare Networks in Miami-Dade
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Medicare Advantage plans in Miami-Dade provide access to South Florida's premier healthcare systems
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Jackson Health System</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Jackson Memorial Hospital</li>
                    <li>• Jackson North Medical Center</li>
                    <li>• Jackson South Medical Center</li>
                    <li>• Jackson West Medical Center</li>
                    <li>• Holtz Children's Hospital</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Baptist Health South Florida</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Baptist Hospital of Miami</li>
                    <li>• South Miami Hospital</li>
                    <li>• Doctors Hospital</li>
                    <li>• Homestead Hospital</li>
                    <li>• West Kendall Baptist Hospital</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mount Sinai Medical Center</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mount Sinai Medical Center</li>
                    <li>• Mount Sinai Aventura</li>
                    <li>• Comprehensive cancer care</li>
                    <li>• Heart & vascular institute</li>
                    <li>• Orthopedic services</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">University of Miami Health</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• UHealth Tower</li>
                    <li>• Bascom Palmer Eye Institute</li>
                    <li>• Sylvester Comprehensive Cancer</li>
                    <li>• Miami Project to Cure Paralysis</li>
                    <li>• Miller School of Medicine</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cleveland Clinic Florida</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Weston Hospital</li>
                    <li>• Florida Executive Health</li>
                    <li>• Heart & vascular care</li>
                    <li>• Digestive disease center</li>
                    <li>• Neurology services</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Nicklaus Children's Hospital</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Main campus</li>
                    <li>• Outpatient centers</li>
                    <li>• Pediatric specialties</li>
                    <li>• Emergency services</li>
                    <li>• Family medicine</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Enrollment Information */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                When Can You Enroll in Medicare Advantage in Miami-Dade?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Annual Enrollment Period (AEP)</h3>
                  <p className="text-blue-800 font-semibold mb-2">October 15 - December 7</p>
                  <p className="text-gray-700">
                    The main enrollment period when you can join, switch, or drop Medicare Advantage plans.
                    Coverage begins January 1st.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-900 mb-3">Open Enrollment Period (OEP)</h3>
                  <p className="text-green-800 font-semibold mb-2">January 1 - March 31</p>
                  <p className="text-gray-700">
                    Switch from one Medicare Advantage plan to another or return to Original Medicare.
                    One change allowed during this period.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">Special Enrollment Periods (SEP)</h3>
                  <p className="text-purple-800 font-semibold mb-2">Year-round qualifying events</p>
                  <p className="text-gray-700">
                    Enroll outside normal periods if you move to Miami-Dade, lose coverage, qualify for Extra Help,
                    or meet other special circumstances.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions About Miami-Dade Medicare Advantage
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What is the difference between Medicare Advantage and Original Medicare in Miami-Dade?
                  </h3>
                  <p className="text-gray-700">
                    Medicare Advantage (Part C) combines hospital (Part A), medical (Part B), and usually prescription drug (Part D)
                    coverage in one plan. In Miami-Dade, 95 Medicare Advantage plans offer extra benefits like dental, vision, hearing,
                    fitness, and transportation that Original Medicare doesn't cover. 58 plans have $0 monthly premiums.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Can I keep my Miami doctor with Medicare Advantage?
                  </h3>
                  <p className="text-gray-700">
                    Most Miami-Dade Medicare Advantage plans use network providers. Check if your current doctor participates in the
                    plan's network before enrolling. Many plans include Jackson Health, Baptist Health, Mount Sinai, and University of
                    Miami Health providers. PPO plans typically offer more flexibility to see out-of-network doctors.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How much do Medicare Advantage plans cost in Miami-Dade Florida?
                  </h3>
                  <p className="text-gray-700">
                    58 Medicare Advantage plans in Miami-Dade have $0 monthly premiums (you still pay your Part B premium).
                    Other plans range from $20-$150 per month with enhanced benefits. All plans have maximum out-of-pocket limits
                    ranging from $6,700 to $8,850 annually to protect you from high medical costs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Do Miami-Dade Medicare Advantage plans cover specialists?
                  </h3>
                  <p className="text-gray-700">
                    Yes, Medicare Advantage plans in Miami-Dade cover specialists, but HMO plans typically require referrals from your
                    primary care physician. PPO plans allow you to see specialists without referrals. Most plans cover specialists at
                    Jackson Health, Baptist Health, Mount Sinai, and University of Miami Health systems.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Are prescription drugs covered in Miami-Dade Medicare Advantage plans?
                  </h3>
                  <p className="text-gray-700">
                    Most Miami-Dade Medicare Advantage plans include prescription drug coverage (Part D). You can use major pharmacy
                    chains including CVS, Walgreens, Publix, and Winn-Dixie. Many plans also offer mail-order prescriptions and
                    preferred pharmacy networks for lower copays.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Pages */}
          <section className="py-12 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Medicare Resources</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Florida Medicare Markets</h4>
                  <ul className="space-y-2 text-blue-600">
                    <li><Link href="/medicare-advantage/broward-county-florida" className="hover:underline">Broward County Medicare Advantage</Link></li>
                    <li><Link href="/medicare-advantage/monroe-county-florida" className="hover:underline">Monroe County Medicare Advantage</Link></li>
                    <li><Link href="/medicare-advantage/orange-county-florida" className="hover:underline">Orange County Medicare Advantage</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Medicare Plan Types</h4>
                  <ul className="space-y-2 text-blue-600">
                    <li><Link href="/medicare-advantage" className="hover:underline">All Medicare Advantage Plans</Link></li>
                    <li><Link href="/medicare-supplement" className="hover:underline">Medicare Supplement Insurance</Link></li>
                    <li><Link href="/medicare-part-d" className="hover:underline">Medicare Part D Prescription Drug Plans</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Medicare Tools</h4>
                  <ul className="space-y-2 text-blue-600">
                    <li><Link href="/medicare-plan-comparison-tool" className="hover:underline">Medicare Plan Comparison Tool</Link></li>
                    <li><Link href="/medicare-cost-calculator" className="hover:underline">Medicare Cost Calculator</Link></li>
                    <li><Link href="/contact" className="hover:underline">Talk to a Medicare Specialist</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Find the Best Medicare Advantage Plan in Miami-Dade?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Compare all 95 Medicare Advantage plans available in Miami-Dade Florida. Get personalized recommendations
                based on your doctors, medications, and budget. Our Medicare specialists are here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/medicare-plan-comparison-tool"
                  className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-center shadow-lg"
                  onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'footer', 'county', '/medicare-plan-comparison-tool')}
                >
                  Compare Miami Plans Free
                </Link>
                <a
                  href="tel:331-343-2584"
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('phone_call', 'footer', 'county', 'tel:331-343-2584')}
                >
                  Call 331-343-2584 Now
                </a>
              </div>
              <p className="text-blue-100 mt-6 text-sm">
                Licensed Medicare agents available Monday-Friday 8am-8pm, Saturday 9am-5pm EST
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
