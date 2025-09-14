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
  title: 'Miami-Dade County Medicare Advantage 2025 | Bilingual Florida Plans | Hispanic Community Coverage',
  description: 'Best Miami-Dade County Medicare Advantage plans 2025. Compare 95+ bilingual plans for Hispanic families. Spanish-speaking agents, cultural competency, Jackson Health System networks.',
  keywords: 'Miami-Dade County Medicare Advantage 2025, bilingual Medicare plans Florida, Hispanic Medicare Miami, Spanish speaking Medicare agents Miami, Cuban American Medicare plans, Latino Medicare Advantage Florida, Jackson Health System Medicare, Baptist Health South Florida Medicare, Miami bilingual customer service Medicare, Hispanic community health plans Miami, South Florida Medicare specialists, Miami Medicare brokers Spanish, Miami-Dade Medicare enrollment, bilingual Medicare navigation Florida, Spanish Medicare materials Miami, Hispanic family Medicare plans, Miami Latino senior insurance, Cuban Medicare plans Miami, Venezuelan Medicare plans Florida, Colombian Medicare coverage Miami, Haitian Medicare services Miami-Dade, Nicaraguan Medicare plans Florida, Argentinian Medicare coverage Miami, Peruvian Medicare plans South Florida, Ecuadorian Medicare services Miami, Bolivian Medicare coverage Florida, Dominican Medicare plans Miami-Dade, Puerto Rican Medicare services Florida, Mexican Medicare coverage Miami',
  openGraph: {
    title: 'Medicare Advantage Miami-Dade County Florida 2025 | Bilingual Healthcare',
    description: 'Complete guide to Medicare Advantage plans in Miami-Dade County. 95+ options with bilingual support and comprehensive South Florida healthcare networks.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Miami-Dade Medicare Specialists',
    images: [
      {
        url: '/images/miami-dade-county-medicare-advantage-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Medicare Advantage Plans Miami-Dade County Florida 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Medicare Advantage Miami-Dade County 2025',
    description: 'Miami-Dade County Medicare Advantage: 95+ bilingual plans with comprehensive South Florida healthcare coverage.',
    images: ['/images/miami-dade-county-medicare-advantage-2025.jpg']
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/miami-dade-county',
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
  hispanicPopulation: 69.4,
  planCount: 95,
  zeroPremiumPlans: 58,
  averageStarRating: 4.2,
  bilingualPlans: 78,
  spanishSpeakingProviders: 85
};

const topPlans = [
  {
    name: 'Humana Gold Plus HMO',
    premium: '$0',
    rating: '4.5 stars',
    network: 'Comprehensive South Florida network with bilingual providers',
    maxOOP: '$6,900',
    specialFeatures: ['Spanish customer service', 'Transportation benefits', 'Chronic care management']
  },
  {
    name: 'UnitedHealthcare AARP Complete',
    premium: '$0',
    rating: '4 stars',
    network: 'Jackson Health System and Baptist Health partnerships',
    maxOOP: '$7,550',
    specialFeatures: ['Multilingual support', 'Wellness programs', 'Prescription delivery']
  },
  {
    name: 'Wellcare Staywell',
    premium: '$35',
    rating: '4 stars',
    network: 'Miami-Dade focused network with community health centers',
    maxOOP: '$8,300',
    specialFeatures: ['Hispanic community focus', 'Cultural competency', 'Family-centered care']
  }
];

export default function MiamiDadeCountyPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Miami-Dade County', href: '/medicare-advantage/miami-dade-county' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Local Business Schema for Miami-Dade Medicare Services
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Miami-Dade County Bilingual Medicare Advantage Specialists",
    "description": "Bilingual Medicare Advantage plans for Miami-Dade County Hispanic community. Expert Spanish-speaking guidance for South Florida healthcare coverage with cultural competency.",
    "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/miami-dade-county",
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
          "name": "Hialeah"
        },
        {
          "@type": "City",
          "name": "Homestead"
        },
        {
          "@type": "City",
          "name": "Coral Gables"
        }
      ]
    },
    "serviceType": "Bilingual Medicare Advantage Insurance",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Miami-Dade Bilingual Medicare Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medicare Advantage Plans Miami-Dade County",
            "description": "95 Medicare Advantage plans with 78 bilingual options for Miami-Dade Hispanic community"
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
        "name": "What makes Miami-Dade Medicare plans different for Hispanic families?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Miami-Dade Medicare Advantage plans include bilingual Spanish customer service, cultural competency programs, family-centered care, and partnerships with Jackson Health System and Baptist Health that understand Latino healthcare needs."
        }
      },
      {
        "@type": "Question",
        "name": "How many bilingual Medicare Advantage plans are available in Miami-Dade County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are 95 Medicare Advantage plans available in Miami-Dade County for 2025, with 78 plans offering bilingual Spanish-English services and 58 zero premium options for Hispanic families."
        }
      },
      {
        "@type": "Question",
        "name": "Do Miami-Dade Medicare plans serve Cuban and Venezuelan communities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Miami-Dade Medicare Advantage plans are specifically designed to serve Cuban, Venezuelan, Colombian, Haitian, and other Hispanic/Latino communities with culturally competent care and Spanish-speaking healthcare providers."
        }
      }
    ]
  };

  React.useEffect(() => {
    trackMedicareAdvancedPageView(
      'Medicare Advantage Miami-Dade County',
      {
        pageType: 'diverse_communities',
        totalBeneficiaries: miamiDadeData.totalBeneficiaries,
        availablePlans: miamiDadeData.planCount,
        specialMetrics: {
          hispanicPopulation: miamiDadeData.hispanicPopulation
        }
      },
      {
        city: 'Miami',
        state: 'Florida',
        county: 'Miami-Dade County',
        region: 'South Florida'
      }
    );

    const cleanup = setupMedicareAdvancedScrollTracking('diverse_communities', [
      { percentage: 25, milestone: 'miami_plans_viewed' },
      { percentage: 50, milestone: 'bilingual_features_reviewed' },
      { percentage: 75, milestone: 'regional_coverage_explored' },
      { percentage: 90, milestone: 'content_completion' }
    ]);

    return cleanup;
  }, []);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Miami-Dade County"
        county="Miami-Dade County"
        state="Florida"
        demographics={{
          avgAge: miamiDadeData.averageAge,
          hispanicPopulation: miamiDadeData.hispanicPopulation,
          maPenetrationRate: miamiDadeData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: miamiDadeData.totalBeneficiaries,
          availablePlans: miamiDadeData.planCount,
          zeroPremiumPlans: miamiDadeData.zeroPremiumPlans,
          pageType: 'diverse_communities'
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
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
                  Best Medicare Advantage Plans Miami-Dade County Florida 2025
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Find the best Medicare Advantage plans for Miami-Dade County Florida. 
                  <strong>95 plans with 58 zero premium options</strong> featuring 
                  <strong>bilingual customer service</strong> and culturally competent care 
                  for Hispanic communities across Miami, Hialeah, and Homestead.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/medicare-plan-comparison-tool" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'hero', 'diverse_communities', '/medicare-plan-comparison-tool')}
                  >
                    Find Best Miami Plans
                  </Link>
                  <a 
                    href="tel:331-343-2584" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('phone_call', 'hero', 'diverse_communities', 'tel:331-343-2584')}
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
                Best Medicare Advantage Plans in Miami-Dade County 2025
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">{miamiDadeData.totalBeneficiaries.toLocaleString()}</div>
                  <div className="text-gray-600">Medicare Beneficiaries</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">{miamiDadeData.planCount}</div>
                  <div className="text-gray-600">MA Plans Available</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{miamiDadeData.zeroPremiumPlans}</div>
                  <div className="text-gray-600">$0 Premium Plans</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{miamiDadeData.hispanicPopulation}%</div>
                  <div className="text-gray-600">Hispanic Population</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Miami-Dade County, with its {miamiDadeData.hispanicPopulation}% Hispanic population, offers specialized 
                  Medicare Advantage plans with comprehensive bilingual support and cultural competency. 
                  With {miamiDadeData.maPenetration}% Medicare Advantage enrollment, seniors have access to 
                  Jackson Health System, Baptist Health South Florida, and community health centers 
                  throughout the region.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Why Miami-Dade Has Specialized Medicare Options</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>95 Medicare plans with bilingual support</strong> - comprehensive Spanish-language services</li>
                    <li>• <strong>58 zero premium plans</strong> - affordable coverage for diverse communities</li>
                    <li>• Jackson Health System partnerships for safety net healthcare</li>
                    <li>• Baptist Health South Florida premium network access</li>
                    <li>• Cultural competency training for healthcare providers</li>
                    <li>• Community health worker integration for care coordination</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <p className="text-sm text-blue-600 font-semibold mb-2">Compare Hispanic-Focused Medicare Markets:</p>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/medicare-advantage/bexar-county-texas" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Bexar County TX</Link>
                      <Link href="/medicare-advantage-diverse-communities-atlanta" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Atlanta Communities</Link>
                      <Link href="/medicare-advantage/orange-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Orange County CA</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Top Medicare Advantage Plans for Miami-Dade County
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {topPlans.map((plan, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{plan.name}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Premium:</span>
                        <span className="font-semibold text-primary-600">{plan.premium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating:</span>
                        <span className="font-semibold text-yellow-600">{plan.rating}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Max Out-of-Pocket:</span>
                        <span className="font-semibold text-gray-700">{plan.maxOOP}</span>
                      </div>
                    </div>
                    <div className="border-t pt-3 mb-3">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Network:</span> {plan.network}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">South Florida Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {plan.specialFeatures.map((feature, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">South Florida Medicare Resources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">Florida Medicare Markets:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/broward-county-florida" className="hover:underline">Broward County Plans</Link></li>
                      <li>• <Link href="/medicare-advantage/monroe-county-florida" className="hover:underline">Monroe County (Keys)</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">Medicare Resources:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage" className="hover:underline">All Medicare Advantage Plans</Link></li>
                      <li>• <Link href="/supplemental-insurance" className="hover:underline">Supplemental Coverage</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Compare Hispanic-Serving Medicare Markets:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <Link href="/medicare-advantage/bexar-county-texas" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Bexar County TX
                    </Link>
                    <Link href="/medicare-advantage-diverse-communities-atlanta" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Atlanta Communities
                    </Link>
                    <Link href="/medicare-advantage/orange-county" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Orange County CA
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Medicare Plans That Speak Your Language
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Miami-Dade's vibrant Hispanic community deserves Medicare plans that understand your culture 
                and speak your language. Find <strong>bilingual Medicare Advantage plans</strong> with 
                Spanish-speaking customer service, culturally competent providers, and partnerships 
                with Jackson Health System and Baptist Health South Florida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('contact_form', 'footer', 'diverse_communities', '/contact')}
                >
                  Get Bilingual Medicare Help
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('phone_call', 'footer', 'diverse_communities', 'tel:331-343-2584')}
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