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
  title: 'Medicare Advantage Plans Miami Beach Florida 2025 | Best MA Plans | Compare 85+ Options',
  description: 'Find the best Medicare Advantage plans in Miami Beach Florida 2025. Compare 85+ plans with $0 premiums, Mount Sinai Medical Center access. Seasonal resident coverage. Free quotes.',
  keywords: 'Medicare Advantage plans Miami Beach Florida, Medicare Advantage Miami Beach FL 2025, best Medicare plans Miami Beach, Medicare Advantage South Beach, zero premium Medicare Miami Beach, Miami Beach Medicare enrollment, Medicare plans Miami Beach retirees, Mount Sinai Medicare Miami Beach, Medicare Advantage snowbirds Miami Beach, Medicare plans Miami Beach condos, South Beach Medicare coverage, Miami Beach seasonal residents Medicare',
  openGraph: {
    title: 'Best Medicare Advantage Plans Miami Beach Florida 2025 | Compare 85+ MA Plans',
    description: 'Compare Medicare Advantage plans in Miami Beach Florida. 52 zero premium options, Mount Sinai Medical Center access, seasonal resident coverage. Get free quotes.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Miami Beach Medicare Specialists',
    images: [
      {
        url: '/images/medicare-advantage-miami-beach-florida-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Medicare Advantage Plans Miami Beach Florida 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Medicare Advantage Plans Miami Beach Florida 2025',
    description: 'Compare 85+ Medicare Advantage plans in Miami Beach FL. 52 $0 premium options, Mount Sinai access, seasonal resident coverage.',
    images: ['/images/medicare-advantage-miami-beach-florida-2025.jpg']
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/miami-beach-florida',
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

const miamiBeachData = {
  totalBeneficiaries: 18500,
  maPenetration: 73.8,
  averageAge: 74,
  planCount: 85,
  zeroPremiumPlans: 52,
  averageStarRating: 4.3,
  avgMonthlySavings: 1850,
  topRatedPlans: 38,
  seasonalResidents: 42
};

const topPlans = [
  {
    name: 'Humana Gold Plus Integrated (HMO SNP)',
    carrier: 'Humana',
    premium: '$0',
    rating: '4.5 stars',
    network: 'Mount Sinai Medical Center, Jackson Health System',
    maxOOP: '$6,700',
    drugCoverage: 'Included',
    extraBenefits: ['Dental', 'Vision', 'Hearing', 'SilverSneakers', 'Transportation', 'Telehealth']
  },
  {
    name: 'UnitedHealthcare AARP Medicare Advantage Choice (PPO)',
    carrier: 'UnitedHealthcare',
    premium: '$0',
    rating: '4 stars',
    network: 'Nationwide PPO network with Miami Beach providers',
    maxOOP: '$7,550',
    drugCoverage: 'Included',
    extraBenefits: ['Dental', 'Vision', 'Seasonal travel coverage', 'Worldwide emergency']
  },
  {
    name: 'Aetna Medicare Premier Plus (HMO-POS)',
    carrier: 'Aetna',
    premium: '$34',
    rating: '4.5 stars',
    network: 'Mount Sinai, Baptist Health, out-of-network benefits',
    maxOOP: '$6,500',
    drugCoverage: 'Enhanced',
    extraBenefits: ['Comprehensive dental', 'Vision', 'Hearing aids', 'Gym membership', 'OTC $125/quarter']
  }
];

// Comprehensive County Medicare Schema with FAQs
const miamiBeachMAStructuredData = generateCountyMedicareSchema({
  pagePath: '/medicare-advantage/miami-beach-florida',
  pageTitle: 'Medicare Advantage Plans Miami Beach Florida 2025 | Best MA Plans | Compare 85+ Options',
  pageDescription: 'Find the best Medicare Advantage plans in Miami Beach Florida 2025. Compare 85+ plans with $0 premiums, Mount Sinai Medical Center access. Seasonal resident coverage.',
  county: 'Miami-Dade County',
  state: 'Florida',
  productType: 'medicare-advantage',
  totalBeneficiaries: 18500,
  averagePremium: 0,
  faqs: getMedicareAdvantageFAQs('Miami Beach', 'Florida', 85, 52)
});

export default function MiamiBeachFloridaPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Miami Beach Florida', href: '/medicare-advantage/miami-beach-florida' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Local Business Schema for Miami Beach Medicare Services
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Medicare Advantage Plans Miami Beach Florida",
    "description": "Compare Medicare Advantage plans in Miami Beach Florida. Expert guidance for Miami Beach retirees and seasonal residents with access to Mount Sinai Medical Center and South Florida healthcare networks.",
    "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/miami-beach-florida",
    "telephone": "331-343-2584",
    "areaServed": {
      "@type": "City",
      "name": "Miami Beach",
      "containsPlace": [
        {
          "@type": "Neighborhood",
          "name": "South Beach"
        },
        {
          "@type": "Neighborhood",
          "name": "Mid-Beach"
        },
        {
          "@type": "Neighborhood",
          "name": "North Beach"
        },
        {
          "@type": "Neighborhood",
          "name": "Bal Harbour"
        },
        {
          "@type": "Neighborhood",
          "name": "Surfside"
        }
      ]
    },
    "serviceType": "Medicare Advantage Insurance",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Miami Beach Medicare Advantage Plans 2025",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medicare Advantage Plans Miami Beach Florida",
            "description": "85 Medicare Advantage plans with 52 zero premium options for Miami Beach residents and seasonal residents"
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
        "name": "How many Medicare Advantage plans are available in Miami Beach Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are 85 Medicare Advantage plans available in Miami Beach Florida for 2025, including 52 plans with $0 monthly premiums. Plans include coverage from major carriers like Humana, UnitedHealthcare, Aetna, and Wellcare with access to Mount Sinai Medical Center."
        }
      },
      {
        "@type": "Question",
        "name": "Do Medicare Advantage plans in Miami Beach cover seasonal residents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many Medicare Advantage plans in Miami Beach offer special benefits for seasonal residents and snowbirds, including nationwide PPO networks, temporary travel coverage, and worldwide emergency care. 42% of Miami Beach Medicare beneficiaries are seasonal residents."
        }
      },
      {
        "@type": "Question",
        "name": "Does Mount Sinai Medical Center accept Medicare Advantage plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Mount Sinai Medical Center in Miami Beach participates in many Medicare Advantage plans, including networks from Humana, Aetna, UnitedHealthcare, and other major carriers. Mount Sinai is the primary hospital serving Miami Beach residents."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best Medicare Advantage plans for Miami Beach retirees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Top Medicare Advantage plans for Miami Beach retirees include Humana Gold Plus Integrated (4.5 stars, $0 premium), UnitedHealthcare AARP Choice PPO (4 stars, $0 premium with travel benefits), and Aetna Medicare Premier Plus (4.5 stars, enhanced benefits). Plans offer Mount Sinai access and seasonal resident coverage."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use my Miami Beach Medicare Advantage plan when traveling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many Miami Beach Medicare Advantage plans include travel benefits. PPO plans offer out-of-network coverage nationwide, while all plans provide emergency and urgently needed care coverage anywhere in the United States. Some plans also include worldwide emergency coverage."
        }
      }
    ]
  };

  React.useEffect(() => {
    trackMedicareAdvancedPageView(
      'Medicare Advantage Miami Beach Florida',
      {
        pageType: 'city',
        totalBeneficiaries: miamiBeachData.totalBeneficiaries,
        availablePlans: miamiBeachData.planCount,
        specialMetrics: {
          zeroPremiumPlans: miamiBeachData.zeroPremiumPlans,
          maPenetration: miamiBeachData.maPenetration,
          seasonalResidents: miamiBeachData.seasonalResidents
        }
      },
      {
        city: 'Miami Beach',
        state: 'Florida',
        county: 'Miami-Dade County',
        region: 'South Florida'
      }
    );

    const cleanup = setupMedicareAdvancedScrollTracking('city', [
      { percentage: 25, milestone: 'miami_beach_overview' },
      { percentage: 50, milestone: 'plan_comparison_viewed' },
      { percentage: 75, milestone: 'seasonal_benefits_explored' },
      { percentage: 90, milestone: 'content_completion' }
    ]);

    return cleanup;
  }, []);

  return (
    <>
      <LandingPageAnalytics
        pageType="city"
        pageTitle="Medicare Advantage Miami Beach Florida"
        county="Miami-Dade County"
        state="Florida"
        demographics={{
          avgAge: miamiBeachData.averageAge,
          maPenetrationRate: miamiBeachData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: miamiBeachData.totalBeneficiaries,
          availablePlans: miamiBeachData.planCount,
          zeroPremiumPlans: miamiBeachData.zeroPremiumPlans,
          pageType: 'city'
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
          __html: JSON.stringify(miamiBeachMAStructuredData),
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
          <section className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Best Medicare Advantage Plans Miami Beach Florida 2025
                </h1>
                <p className="text-xl md:text-2xl text-cyan-100 mb-8">
                  Compare <strong>85 Medicare Advantage plans</strong> in Miami Beach Florida including{' '}
                  <strong>52 plans with $0 monthly premiums</strong>. Access Mount Sinai Medical Center,
                  specialized coverage for seasonal residents, and comprehensive benefits for South Beach retirees.
                </p>
                <div className="bg-cyan-900 bg-opacity-50 p-6 rounded-lg mb-8">
                  <h2 className="text-2xl font-bold mb-4">Why Miami Beach Residents Choose Medicare Advantage</h2>
                  <ul className="grid md:grid-cols-2 gap-3 text-cyan-50">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      52 zero premium Medicare plans
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Mount Sinai Medical Center access
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Seasonal resident & snowbird coverage
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      38 plans rated 4+ stars
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/medicare-plan-comparison-tool"
                    className="bg-white text-cyan-600 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors text-center shadow-lg"
                    onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'hero', 'city', '/medicare-plan-comparison-tool')}
                  >
                    Compare Miami Beach Plans
                  </Link>
                  <a
                    href="tel:331-343-2584"
                    className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('phone_call', 'hero', 'city', 'tel:331-343-2584')}
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
                Medicare Advantage in Miami Beach Florida
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
                <div className="bg-cyan-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-cyan-600">{miamiBeachData.totalBeneficiaries.toLocaleString()}</div>
                  <div className="text-gray-600 mt-2">Medicare Beneficiaries</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-green-600">{miamiBeachData.planCount}</div>
                  <div className="text-gray-600 mt-2">MA Plans Available</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-purple-600">{miamiBeachData.zeroPremiumPlans}</div>
                  <div className="text-gray-600 mt-2">$0 Premium Plans</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-orange-600">{miamiBeachData.seasonalResidents}%</div>
                  <div className="text-gray-600 mt-2">Seasonal Residents</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Miami Beach Has Unique Medicare Options</h3>
                <p className="text-gray-700 mb-4">
                  Miami Beach leads South Florida with a <strong>{miamiBeachData.maPenetration}% Medicare Advantage enrollment rate</strong>,
                  offering specialized plans for the city's unique population including retirees, seasonal residents, and active seniors.
                  Access premier healthcare at Mount Sinai Medical Center and comprehensive South Florida networks.
                </p>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li>• Mount Sinai Medical Center - Primary Miami Beach hospital</li>
                  <li>• Specialized seasonal resident coverage options</li>
                  <li>• PPO plans for nationwide & international travel</li>
                  <li>• South Beach wellness & fitness benefits</li>
                  <li>• Condo community-focused healthcare coordination</li>
                  <li>• 52 plans with zero monthly premiums</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Top Plans Comparison */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Top Rated Medicare Advantage Plans for Miami Beach Residents
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Compare the highest-rated Medicare Advantage plans available to Miami Beach residents and seasonal snowbirds.
                These plans offer Mount Sinai Medical Center access and specialized benefits for South Florida living.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {topPlans.map((plan, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-cyan-400 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">{plan.name}</h3>
                      <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-2">
                        {plan.rating}
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-cyan-600 mb-1">{plan.premium}<span className="text-lg text-gray-500">/mo</span></div>
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
                          <span key={idx} className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium">
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
                  className="inline-block bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-cyan-700 transition-colors"
                  onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'plans_section', 'city', '/medicare-plan-comparison-tool')}
                >
                  Compare All 85 Miami Beach Plans
                </Link>
              </div>
            </div>
          </section>

          {/* Seasonal Residents & Snowbirds Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Advantage for Miami Beach Seasonal Residents & Snowbirds
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">PPO Plans for Travelers</h3>
                  <p className="text-gray-700 mb-4">
                    Many Miami Beach Medicare Advantage PPO plans offer nationwide coverage, allowing you to visit
                    doctors and specialists throughout the United States when traveling or visiting family.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-cyan-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Out-of-network benefits nationwide
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-cyan-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      No referrals needed for specialists
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-cyan-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Flexibility for 6-month residents
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-cyan-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Coverage in northern home states
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Worldwide Emergency Coverage</h3>
                  <p className="text-gray-700 mb-4">
                    Most Miami Beach Medicare Advantage plans include emergency and urgently needed care coverage
                    anywhere in the world, perfect for international travelers and cruise enthusiasts.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-purple-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Emergency care worldwide
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-purple-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Coverage on cruises & international trips
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-purple-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Peace of mind while traveling
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-purple-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Urgent care outside U.S. borders
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-cyan-50 border-2 border-cyan-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-cyan-900 mb-3">Important for Snowbirds & Part-Time Residents</h3>
                <p className="text-cyan-800 mb-3">
                  <strong>42% of Miami Beach Medicare beneficiaries are seasonal residents.</strong> When selecting a Medicare Advantage plan:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-cyan-800">
                  <li>• Choose PPO plans for multi-state flexibility</li>
                  <li>• Verify coverage in your northern home state</li>
                  <li>• Consider plans with no referral requirements</li>
                  <li>• Check prescription drug coverage in both locations</li>
                  <li>• Ensure Mount Sinai access when in Miami Beach</li>
                  <li>• Review emergency care benefits for travel</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Advantage Benefits in Miami Beach Florida
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Premium Plans</h3>
                  <p className="text-gray-700">
                    52 Medicare Advantage plans with $0 monthly premiums available in Miami Beach.
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
                    Most Miami Beach Medicare Advantage plans include dental cleanings, exams, vision care,
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
                    Prescription drug coverage (Part D) included in most Miami Beach Medicare Advantage plans.
                    Access local pharmacies including CVS, Walgreens, and Publix along Collins Avenue.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fitness & Wellness Programs</h3>
                  <p className="text-gray-700">
                    Free SilverSneakers or Renew Active gym memberships at Miami Beach fitness centers.
                    Beach walking programs and wellness activities for active South Beach living.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transportation Benefits</h3>
                  <p className="text-gray-700">
                    Free or low-cost transportation to medical appointments and Mount Sinai Medical Center.
                    Essential for condo residents without vehicles in Miami Beach.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Telehealth Services</h3>
                  <p className="text-gray-700">
                    24/7 virtual doctor visits and telehealth consultations. Perfect for seasonal residents
                    who need healthcare access while traveling or in their northern homes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Healthcare Networks */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Healthcare Networks Serving Miami Beach
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Medicare Advantage plans in Miami Beach provide access to premier South Florida healthcare systems
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-cyan-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mount Sinai Medical Center</h3>
                  <p className="text-sm text-cyan-600 mb-3">Primary Miami Beach Hospital</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mount Sinai Medical Center - Main campus</li>
                    <li>• Mount Sinai Heart Institute</li>
                    <li>• Comprehensive cancer care center</li>
                    <li>• Emergency services 24/7</li>
                    <li>• Orthopedic & spine institute</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Jackson Health System</h3>
                  <p className="text-sm text-blue-600 mb-3">Comprehensive Miami Network</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Jackson Memorial Hospital</li>
                    <li>• Jackson North Medical Center</li>
                    <li>• Specialty care facilities</li>
                    <li>• Emergency & trauma care</li>
                    <li>• Research & teaching hospital</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-purple-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Baptist Health South Florida</h3>
                  <p className="text-sm text-purple-600 mb-3">Regional Healthcare Leader</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Baptist Hospital of Miami</li>
                    <li>• South Miami Hospital</li>
                    <li>• Baptist Outpatient Services</li>
                    <li>• Cancer care institute</li>
                    <li>• Heart & vascular services</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">University of Miami Health</h3>
                  <p className="text-sm text-green-600 mb-3">Academic Medical Center</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• UHealth Tower</li>
                    <li>• Bascom Palmer Eye Institute</li>
                    <li>• Sylvester Comprehensive Cancer Center</li>
                    <li>• Miller School of Medicine affiliates</li>
                    <li>• Specialty & tertiary care</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-orange-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Community Health Centers</h3>
                  <p className="text-sm text-orange-600 mb-3">Local Miami Beach Facilities</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Miami Beach Community Health</li>
                    <li>• Urgent care centers</li>
                    <li>• Primary care physicians</li>
                    <li>• Specialty clinics</li>
                    <li>• Walk-in services</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-red-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Specialty Care Networks</h3>
                  <p className="text-sm text-red-600 mb-3">Specialized Services</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Cardiology specialists</li>
                    <li>• Orthopedic surgery centers</li>
                    <li>• Dermatology clinics</li>
                    <li>• Physical therapy facilities</li>
                    <li>• Diagnostic imaging centers</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Enrollment Information */}
          <section className="py-16 bg-gradient-to-r from-gray-50 to-cyan-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                When Can You Enroll in Medicare Advantage in Miami Beach?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-cyan-900 mb-3">Annual Enrollment Period (AEP)</h3>
                  <p className="text-cyan-800 font-semibold mb-2">October 15 - December 7</p>
                  <p className="text-gray-700">
                    The main enrollment period when you can join, switch, or drop Medicare Advantage plans.
                    Coverage begins January 1st. Perfect timing for snowbirds arriving for winter season.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-green-900 mb-3">Open Enrollment Period (OEP)</h3>
                  <p className="text-green-800 font-semibold mb-2">January 1 - March 31</p>
                  <p className="text-gray-700">
                    Switch from one Medicare Advantage plan to another or return to Original Medicare.
                    One change allowed during this period. Good for seasonal residents adjusting coverage.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">Special Enrollment Periods (SEP)</h3>
                  <p className="text-purple-800 font-semibold mb-2">Year-round qualifying events</p>
                  <p className="text-gray-700">
                    Enroll outside normal periods if you move to Miami Beach permanently, lose coverage,
                    qualify for Extra Help, or meet other special circumstances.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions About Miami Beach Medicare Advantage
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What makes Miami Beach Medicare Advantage plans different?
                  </h3>
                  <p className="text-gray-700">
                    Miami Beach Medicare Advantage plans are tailored for the city's unique population, with 42% being seasonal
                    residents or snowbirds. Many plans offer PPO options for nationwide coverage, travel benefits, and flexible
                    networks that work both in South Florida and northern home states. Plans provide Mount Sinai Medical Center
                    access as the primary Miami Beach hospital.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Can I use my Medicare Advantage plan if I'm a seasonal resident?
                  </h3>
                  <p className="text-gray-700">
                    Yes! Many Miami Beach Medicare Advantage plans are designed for seasonal residents. PPO plans offer out-of-network
                    coverage nationwide, allowing you to see doctors in your northern home state. All Medicare Advantage plans provide
                    emergency and urgently needed care anywhere in the U.S. Choose plans with nationwide networks if you split time
                    between Miami Beach and another state.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Does Mount Sinai Medical Center accept Medicare Advantage?
                  </h3>
                  <p className="text-gray-700">
                    Yes, Mount Sinai Medical Center - Miami Beach's primary hospital - participates in most Medicare Advantage plans
                    including Humana, UnitedHealthcare, Aetna, Cigna, and Wellcare networks. Mount Sinai offers comprehensive services
                    including emergency care, heart institute, cancer center, and specialty care. Always verify your specific plan's
                    network before enrolling.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How much do Medicare Advantage plans cost in Miami Beach?
                  </h3>
                  <p className="text-gray-700">
                    52 Medicare Advantage plans in Miami Beach have $0 monthly premiums (you still pay your Part B premium).
                    Other enhanced plans range from $25-$140 per month with additional benefits. All plans have maximum out-of-pocket
                    limits ranging from $6,500 to $8,850 annually. Zero premium plans are popular among Miami Beach retirees and
                    condo residents.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Do Miami Beach plans cover international travel and cruises?
                  </h3>
                  <p className="text-gray-700">
                    Yes, most Medicare Advantage plans include worldwide emergency coverage, which covers emergency and urgently
                    needed care outside the United States, including on cruises. Some plans also offer enhanced international
                    travel benefits. This is especially valuable for Miami Beach residents who frequently travel internationally
                    or take Caribbean cruises from Port of Miami.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Pages */}
          <section className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Medicare Resources</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">South Florida Medicare Markets</h4>
                  <ul className="space-y-2 text-cyan-600">
                    <li><Link href="/medicare-advantage/miami-dade-florida" className="hover:underline">Miami-Dade Medicare Advantage</Link></li>
                    <li><Link href="/medicare-advantage/broward-county-florida" className="hover:underline">Broward County Medicare Advantage</Link></li>
                    <li><Link href="/medicare-advantage/monroe-county-florida" className="hover:underline">Monroe County Medicare Advantage</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Medicare Plan Types</h4>
                  <ul className="space-y-2 text-cyan-600">
                    <li><Link href="/medicare-advantage" className="hover:underline">All Medicare Advantage Plans</Link></li>
                    <li><Link href="/medicare-supplement" className="hover:underline">Medicare Supplement Insurance</Link></li>
                    <li><Link href="/medicare-part-d" className="hover:underline">Medicare Part D Prescription Drug Plans</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Medicare Tools</h4>
                  <ul className="space-y-2 text-cyan-600">
                    <li><Link href="/medicare-plan-comparison-tool" className="hover:underline">Medicare Plan Comparison Tool</Link></li>
                    <li><Link href="/medicare-cost-calculator" className="hover:underline">Medicare Cost Calculator</Link></li>
                    <li><Link href="/contact" className="hover:underline">Talk to a Medicare Specialist</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Find the Best Medicare Advantage Plan in Miami Beach?
              </h2>
              <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
                Compare all 85 Medicare Advantage plans available in Miami Beach Florida. Get personalized recommendations
                for seasonal residents, retirees, and active seniors. Our Medicare specialists understand Miami Beach living.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/medicare-plan-comparison-tool"
                  className="bg-white text-cyan-600 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors text-center shadow-lg"
                  onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'footer', 'city', '/medicare-plan-comparison-tool')}
                >
                  Compare Miami Beach Plans
                </Link>
                <a
                  href="tel:331-343-2584"
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('phone_call', 'footer', 'city', 'tel:331-343-2584')}
                >
                  Call 331-343-2584 Now
                </a>
              </div>
              <p className="text-cyan-100 mt-6 text-sm">
                Licensed Medicare agents available Monday-Friday 8am-8pm, Saturday 9am-5pm EST
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
