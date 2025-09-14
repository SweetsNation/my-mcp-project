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
  title: 'Bexar County Texas Medicare Advantage 2025 | San Antonio Bilingual Plans | Hispanic Community Coverage',
  description: 'Best Bexar County Texas Medicare Advantage plans 2025. Compare 65+ San Antonio plans with bilingual support, Hispanic community focus. $0 premium options, cultural competency, Spanish-speaking agents.',
  keywords: 'Bexar County Texas Medicare Advantage 2025, San Antonio Medicare plans, bilingual Medicare Texas, Hispanic Medicare plans San Antonio, Spanish speaking Medicare agents Bexar County, South Texas Medicare Advantage, Mexican American Medicare plans, San Antonio senior health insurance, Bexar County Medicare enrollment, UT Health San Antonio Medicare, Methodist Healthcare Medicare plans, Baptist Health System Medicare, bilingual customer service Medicare, promotores de salud Medicare, Hispanic community health plans, South Texas Medicare specialists, San Antonio Medicare brokers, Bexar County zero premium Medicare, Texas bilingual Medicare coverage, Latino Medicare plans San Antonio, Hispanic Medicare enrollment Texas, Mexican American senior insurance, South Texas cultural competency Medicare, San Antonio VA Medicare Advantage, Bexar County Medicare comparison, bilingual Medicare navigation Texas, Spanish Medicare materials San Antonio, Hispanic family Medicare plans, South Texas Medicare benefits, Border region Medicare plans Texas, Latino senior health insurance Bexar County',
  openGraph: {
    title: 'Medicare Advantage Bexar County Texas 2025 | San Antonio Healthcare',
    description: 'Complete guide to Medicare Advantage plans in Bexar County Texas. 65+ options with bilingual support and South Texas healthcare partnerships.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Bexar County Medicare Specialists',
    images: [
      {
        url: '/images/bexar-county-texas-medicare-advantage-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Medicare Advantage Plans Bexar County Texas San Antonio 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Medicare Advantage Bexar County Texas 2025',
    description: 'Bexar County Texas Medicare Advantage: 65+ options with bilingual support and comprehensive San Antonio healthcare coverage.',
    images: ['/images/bexar-county-texas-medicare-advantage-2025.jpg']
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/bexar-county-texas',
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

const bexarCountyData = {
  totalBeneficiaries: 285000,
  maPenetration: 42.1,
  averageAge: 69,
  hispanicPopulation: 64.2,
  planCount: 65,
  zeroPremiumPlans: 42,
  averageStarRating: 4.0
};

const topPlans = [
  {
    name: 'UnitedHealthcare AARP Complete',
    premium: '$0',
    rating: '4.5 stars',
    network: 'Comprehensive Texas network with San Antonio focus',
    maxOOP: '$6,700',
    specialFeatures: ['Bilingual customer service', 'Transportation benefits', 'Prescription coverage']
  },
  {
    name: 'Humana Honor Choice PPO',
    premium: '$25',
    rating: '4 stars',
    network: 'Methodist Healthcare and Baptist Health partnerships',
    maxOOP: '$7,550',
    specialFeatures: ['South Texas provider network', 'Wellness programs', 'Dental coverage']
  },
  {
    name: 'Wellcare Texan Plus',
    premium: '$0',
    rating: '4 stars',
    network: 'University Health System and UT Health partnerships',
    maxOOP: '$8,300',
    specialFeatures: ['Hispanic community focus', 'Chronic care management', 'Pharmacy benefits']
  }
];

const sanAntonioRegions = [
  {
    region: 'Central San Antonio',
    population: '465,000',
    keyFeatures: ['Downtown medical district', 'University Hospital', 'UT Health San Antonio'],
    healthcareHighlights: 'Major medical hub with academic medical center',
    challenges: ['Urban healthcare access', 'Specialist wait times']
  },
  {
    region: 'North San Antonio',
    population: '385,000',
    keyFeatures: ['Methodist Healthcare system', 'Stone Oak medical facilities', 'Suburban clinics'],
    healthcareHighlights: 'Growing healthcare infrastructure in affluent areas',
    challenges: ['Traffic congestion to facilities', 'Higher costs']
  },
  {
    region: 'South San Antonio',
    population: '290,000',
    keyFeatures: ['Baptist Health System', 'Community health centers', 'Hispanic-serving providers'],
    healthcareHighlights: 'Strong community health focus with cultural competency',
    challenges: ['Socioeconomic health barriers', 'Language access needs']
  },
  {
    region: 'East/West San Antonio',
    population: '240,000',
    keyFeatures: ['Regional medical centers', 'VA Medical Center', 'Specialty clinics'],
    healthcareHighlights: 'Veterans healthcare and specialty services',
    challenges: ['Transportation to care', 'Rural-urban healthcare gaps']
  }
];

const culturalHealthFeatures = [
  {
    feature: 'Bilingual Healthcare Services',
    description: 'Spanish-speaking providers and customer service throughout Bexar County',
    coverage: '58 of 65 Medicare plans',
    communities: ['Hispanic/Latino', 'Mexican-American', 'Spanish-speaking seniors']
  },
  {
    feature: 'Cultural Competency Training',
    description: 'Healthcare providers trained in South Texas cultural health practices',
    coverage: '45 participating provider networks',
    communities: ['Traditional medicine users', 'Multigenerational families', 'Faith-based communities']
  },
  {
    feature: 'Community Health Workers',
    description: 'Promotores de salud integrated into Medicare plan care coordination',
    coverage: '32 Medicare plans with CHW programs',
    communities: ['Underserved populations', 'Chronic disease management', 'Health education']
  },
  {
    feature: 'Family-Centered Care',
    description: 'Healthcare delivery models accommodating extended family involvement',
    coverage: 'Available across major health systems',
    communities: ['Traditional Hispanic families', 'Caregiver support systems', 'Cultural health decisions']
  }
];

export default function BexarCountyTexasPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Bexar County TX', href: '/medicare-advantage/bexar-county-texas' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Local Business Schema for Bexar County Medicare Services
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bexar County Texas Medicare Advantage Specialists",
    "description": "Bilingual Medicare Advantage plans for Bexar County (San Antonio) Hispanic community. Expert guidance for South Texas healthcare coverage with Spanish-speaking agents.",
    "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/bexar-county-texas",
    "telephone": "331-343-2584",
    "areaServed": {
      "@type": "State",
      "name": "Texas",
      "containsPlace": [
        {
          "@type": "City",
          "name": "San Antonio"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Bexar County"
        }
      ]
    },
    "serviceType": "Bilingual Medicare Advantage Insurance",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Bexar County Medicare Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medicare Advantage Plans Bexar County Texas",
            "description": "65 Medicare Advantage plans with 42 zero premium options for San Antonio Hispanic community"
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
        "name": "What makes Bexar County Medicare plans different for Hispanic families?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bexar County Medicare Advantage plans include bilingual customer service in Spanish, promotores de salud (community health workers), cultural competency training for providers, and family-centered care that accommodates extended family involvement in healthcare decisions."
        }
      },
      {
        "@type": "Question",
        "name": "How many bilingual Medicare Advantage plans are available in Bexar County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are 65 Medicare Advantage plans available in Bexar County Texas for 2025, with 58 of these plans offering bilingual Spanish-English customer service and 42 zero premium options for San Antonio families."
        }
      },
      {
        "@type": "Question",
        "name": "Do Bexar County Medicare plans include promotores de salud?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 32 Medicare Advantage plans in Bexar County include community health worker (promotores de salud) programs integrated into care coordination, helping Hispanic families navigate healthcare and manage chronic conditions."
        }
      }
    ]
  };

  React.useEffect(() => {
    trackMedicareAdvancedPageView(
      'Medicare Advantage Bexar County Texas',
      {
        pageType: 'diverse_communities',
        totalBeneficiaries: bexarCountyData.totalBeneficiaries,
        availablePlans: bexarCountyData.planCount,
        specialMetrics: {
          hispanicPopulation: bexarCountyData.hispanicPopulation
        }
      },
      {
        city: 'San Antonio',
        state: 'Texas',
        county: 'Bexar County',
        region: 'South Texas'
      }
    );

    const cleanup = setupMedicareAdvancedScrollTracking('diverse_communities', [
      { percentage: 25, milestone: 'san_antonio_plans_viewed' },
      { percentage: 50, milestone: 'cultural_features_reviewed' },
      { percentage: 75, milestone: 'regional_coverage_explored' },
      { percentage: 90, milestone: 'content_completion' }
    ]);

    return cleanup;
  }, []);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Bexar County Texas"
        county="Bexar County"
        state="Texas"
        demographics={{
          avgAge: bexarCountyData.averageAge,
          hispanicPopulation: bexarCountyData.hispanicPopulation,
          maPenetrationRate: bexarCountyData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: bexarCountyData.totalBeneficiaries,
          availablePlans: bexarCountyData.planCount,
          zeroPremiumPlans: bexarCountyData.zeroPremiumPlans,
          pageType: 'diverse_communities'
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
                  Bexar County Texas Medicare Advantage 2025 | San Antonio Hispanic Community Plans
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  <strong>Best bilingual Medicare plans for San Antonio Hispanic families.</strong> Compare 
                  <strong>65 Bexar County Medicare Advantage plans with 42 zero premium options</strong> 
                  featuring <strong>Spanish-speaking customer service, promotores de salud,</strong> 
                  and culturally competent South Texas healthcare for Latino communities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/medicare-plan-comparison-tool" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'hero', 'diverse_communities', '/medicare-plan-comparison-tool')}
                  >
                    Find Best San Antonio Plans
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
                Top Bexar County Texas Medicare Advantage Plans 2025 | San Antonio Hispanic Coverage
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">{bexarCountyData.totalBeneficiaries.toLocaleString()}</div>
                  <div className="text-gray-600">Medicare Beneficiaries</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">{bexarCountyData.planCount}</div>
                  <div className="text-gray-600">MA Plans Available</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{bexarCountyData.zeroPremiumPlans}</div>
                  <div className="text-gray-600">$0 Premium Plans</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{bexarCountyData.hispanicPopulation}%</div>
                  <div className="text-gray-600">Hispanic Population</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  <strong>Bexar County Medicare Advantage plans</strong> are specially designed for San Antonio's 
                  large Hispanic population ({bexarCountyData.hispanicPopulation}% Latino). Our <strong>bilingual Medicare specialists</strong> 
                  help Latino families find plans with <strong>Spanish-speaking customer service, promotores de salud,</strong> 
                  and partnerships with trusted South Texas providers like <strong>UT Health San Antonio, Methodist Healthcare,</strong> 
                  and <strong>Baptist Health System.</strong>
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Why Choose Culturally Competent Medicare Plans in Bexar County</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>65 Medicare plans with bilingual support</strong> - Spanish-speaking customer service</li>
                    <li>• <strong>42 zero premium plans</strong> - affordable coverage for San Antonio families</li>
                    <li>• Promotores de salud (community health workers) integrated into care</li>
                    <li>• Cultural competency training for healthcare providers</li>
                    <li>• Family-centered care accommodating extended family involvement</li>
                    <li>• UT Health San Antonio and Methodist Healthcare partnerships</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <p className="text-sm text-blue-600 font-semibold mb-2">Compare Texas Medicare Markets:</p>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/medicare-advantage/harris-county-texas" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Harris County</Link>
                      <Link href="/medicare-advantage-diverse-communities-atlanta" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Atlanta Communities</Link>
                      <Link href="/medicare-advantage/miami-dade-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Miami-Dade</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEO-Optimized Marketing Section */}
          <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Bexar County Medicare Advantage Plans?
                </h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
                  <strong>San Antonio Medicare specialists</strong> recommend Bexar County Medicare Advantage plans 
                  because they're specifically designed for <strong>Hispanic community healthcare needs</strong>. 
                  Unlike generic plans, these <strong>bilingual Medicare options</strong> include cultural competency 
                  and Spanish-speaking support essential for Latino families.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    🗣️ Bilingual Medicare Expertise
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our <strong>Spanish-speaking Medicare agents</strong> understand Hispanic healthcare 
                    culture and family decision-making in Bexar County.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 64.2% Hispanic population coverage expertise</li>
                    <li>• Spanish-language plan materials</li>
                    <li>• Promotores de salud integration</li>
                    <li>• Cultural competency specialists</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    💰 Best Texas Medicare Values
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>42 zero premium Bexar County Medicare plans</strong> with Hispanic 
                    community benefits you won't find in generic Medicare options.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• $0 monthly premium options</li>
                    <li>• Lower out-of-pocket maximums</li>
                    <li>• South Texas healthcare savings</li>
                    <li>• Hispanic community health programs</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    🏥 South Texas Healthcare Networks
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>San Antonio Medicare plans</strong> include trusted provider networks 
                    with Spanish-speaking doctors and cultural competency training.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• UT Health San Antonio partnerships</li>
                    <li>• Methodist Healthcare networks</li>
                    <li>• Baptist Health System coverage</li>
                    <li>• Community health center access</li>
                  </ul>
                </div>
              </div>
              
              {/* Call-to-Action with Local Keywords */}
              <div className="bg-orange-600 text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Get Free Bexar County Medicare Plan Comparison
                </h3>
                <p className="text-lg mb-6">
                  <strong>Local bilingual Medicare agents</strong> help you compare all 65 Bexar County 
                  Medicare Advantage plans. Free consultation in Spanish or English, no obligation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/medicare-plan-comparison-tool?location=bexar-county-texas" 
                    className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'content', 'bexar_county', '/medicare-plan-comparison-tool?location=bexar-county-texas')}
                  >
                    Compare San Antonio Plans
                  </Link>
                  <a 
                    href="tel:331-343-2584" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-orange-600 transition-colors"
                    onClick={() => trackMedicareAdvancedCTA('phone_call', 'content', 'bexar_county', 'tel:331-343-2584')}
                  >
                    Call Bilingual Medicare Agent
                  </a>
                </div>
                <p className="text-sm text-orange-200 mt-4">
                  Serving San Antonio communities: Southside • Westside • East Side • North Side • Downtown
                </p>
                <p className="text-xs text-orange-300 mt-2">
                  Hablamos Español | Servicio en Español Disponible
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Best Bexar County Texas Medicare Advantage Plans 2025 | San Antonio Hispanic Coverage
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
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">South Texas Features:</h4>
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
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Cultural Healthcare Features in Bexar County Medicare Plans
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {culturalHealthFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.feature}</h3>
                    <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Coverage:</h4>
                      <p className="text-sm text-primary-600 font-semibold">{feature.coverage}</p>
                    </div>
                    <div className="border-t pt-3">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Serves:</h4>
                      <div className="flex flex-wrap gap-1">
                        {feature.communities.map((community, idx) => (
                          <span key={idx} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                            {community}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                San Antonio Regional Medicare Coverage
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {sanAntonioRegions.map((region, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{region.region}</h3>
                      <span className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-xs font-semibold">
                        Pop: {region.population}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600">
                        {region.keyFeatures.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-3 border-t pt-3">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Healthcare Highlights:</h4>
                      <p className="text-sm text-green-600">{region.healthcareHighlights}</p>
                    </div>
                    <div className="border-t pt-3">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Challenges:</h4>
                      <ul className="text-sm text-red-600">
                        {region.challenges.map((challenge, idx) => (
                          <li key={idx}>• {challenge}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">South Texas Medicare Planning Resources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">Texas Medicare Markets:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/harris-county-texas" className="hover:underline">Harris County (Houston)</Link></li>
                      <li>• <Link href="/medicare-advantage/dallas-county-texas" className="hover:underline">Dallas County Plans</Link></li>
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
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Compare Diverse Community Markets:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <Link href="/medicare-advantage-diverse-communities-atlanta" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Atlanta Communities
                    </Link>
                    <Link href="/medicare-advantage/miami-dade-county" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Miami-Dade County
                    </Link>
                    <Link href="/medicare-advantage/sacramento-county" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Sacramento County
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section for SEO */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Bexar County Medicare Advantage FAQ | San Antonio Hispanic Community Questions
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What makes Bexar County Medicare plans different for Hispanic families?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Bexar County Medicare Advantage plans</strong> include <strong>bilingual customer service in Spanish</strong>, 
                      promotores de salud (community health workers), cultural competency training for providers, 
                      and family-centered care that accommodates extended family involvement in healthcare decisions.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      How many bilingual Medicare Advantage plans are available in Bexar County?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      There are <strong>65 Medicare Advantage plans available in Bexar County Texas</strong> for 2025, 
                      with <strong>58 of these plans offering bilingual Spanish-English customer service</strong> and 
                      42 zero premium options for San Antonio families.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Do Bexar County Medicare plans include promotores de salud?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Yes, <strong>32 Medicare Advantage plans in Bexar County include community health worker</strong> 
                      (promotores de salud) programs integrated into care coordination, helping Hispanic families 
                      navigate healthcare and manage chronic conditions.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Which San Antonio healthcare systems work with Medicare Advantage plans?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      <strong>UT Health San Antonio, Methodist Healthcare, Baptist Health System,</strong> and 
                      University Health System all partner with Medicare Advantage plans. Many offer 
                      Spanish-speaking providers and culturally competent care for Hispanic patients.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What's the best time to enroll in Bexar County Medicare plans?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Medicare Annual Open Enrollment (October 15 - December 7)</strong> is the primary enrollment 
                      period. Bexar County residents can also enroll during Special Enrollment Periods when moving 
                      to Texas or losing other coverage.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Are there local Spanish-speaking Medicare agents in San Antonio?
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Yes, <strong>local bilingual Medicare specialists</strong> are available throughout San Antonio 
                      to help Bexar County residents compare plans. Our agents understand Hispanic healthcare culture 
                      and can provide personalized guidance in Spanish or English.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Medicare Plans That Understand South Texas Culture
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                San Antonio's rich Hispanic heritage requires Medicare plans that understand your culture and speak your language. 
                Find <strong>bilingual Medicare Advantage plans in Bexar County</strong> with promotores de salud, 
                family-centered care, and partnerships with trusted South Texas healthcare providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('contact_form', 'footer', 'diverse_communities', '/contact')}
                >
                  Get Bilingual Medicare Guidance
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