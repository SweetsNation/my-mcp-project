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
  title: 'Best Medicare Advantage Plans Sacramento County CA 2025 | 74 Plans | 51 Zero Premium Options',
  description: 'Find the best Medicare Advantage plans in Sacramento County CA 2025. Compare 74 plans including 51 zero premium options. Kaiser Permanente, Sutter Health, UC Davis Health networks. Cover Sacramento, Elk Grove, Roseville, Folsom, Citrus Heights. Expert Medicare guidance for Northern California seniors with top-rated plans and comprehensive coverage.',
  keywords: 'Sacramento County Medicare Advantage, best Sacramento Medicare plans 2025, California Medicare Advantage, Sacramento CA Medicare enrollment, Medicare Advantage Sacramento County, Elk Grove Medicare, Roseville Medicare plans, Folsom Medicare Advantage, Citrus Heights Medicare plans, Kaiser Permanente Medicare Sacramento, Sutter Health Medicare, UC Davis Health Medicare, California Medicare Advantage 2025, Sacramento metro Medicare plans, Northern California Medicare, Sacramento senior health insurance, California Medicare specialists, Medicare Advantage enrollment California, zero premium Medicare plans Sacramento, $0 Medicare plans Sacramento County, affordable Medicare Sacramento, Sacramento Medicare enrollment help, Rancho Cordova Medicare plans, Fair Oaks Medicare Advantage, Carmichael Medicare plans, Arden-Arcade Medicare, Sacramento Medicare brokers, Northern California Medicare advisors, Sacramento Medicare open enrollment, California Medicare Part C plans, Sacramento Medicare HMO PPO, Medicare Advantage star ratings Sacramento',
  openGraph: {
    title: 'Medicare Advantage Sacramento County CA 2025 | 74 Plans | Kaiser, Sutter, UC Davis',
    description: 'Complete guide to Medicare Advantage plans in Sacramento County CA. 74 plans available with Kaiser, Sutter, and UC Davis Health networks. 51 $0 premium options with expert guidance.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Sacramento County Medicare Specialists',
    images: [
      {
        url: '/images/sacramento-county-medicare-advantage-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Sacramento County California Medicare Advantage Plans 2025 Kaiser Sutter UC Davis'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Medicare Advantage Sacramento County CA 2025 | 74 Plans',
    description: 'Sacramento County Medicare Advantage: 74 options with 51 $0 premium plans. Kaiser, Sutter, UC Davis Health networks.',
    images: ['/images/sacramento-county-medicare-advantage-2025.jpg']
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/sacramento-county',
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

const sacramentoCountyData = {
  totalBeneficiaries: 265000,
  maPenetration: 54.8,
  averageAge: 73,
  dualEligibleRate: 16.3,
  planCount: 74,
  zeroPremiumPlans: 51,
  averageStarRating: 4.2
};

const topPlans = [
  {
    name: 'Kaiser Permanente Medicare Advantage',
    premium: '$0',
    rating: '4.5 stars',
    network: 'Integrated Kaiser Permanente system',
    maxOOP: '$6,700',
    specialFeatures: ['Integrated care model', 'Prescription included', 'Wellness programs']
  },
  {
    name: 'Sutter Health Plus Medicare Advantage',
    premium: '$0',
    rating: '4.5 stars',
    network: 'Sutter Health system and affiliates',
    maxOOP: '$7,550',
    specialFeatures: ['Local Sacramento focus', 'Comprehensive network', 'Care coordination']
  },
  {
    name: 'UnitedHealthcare AARP Medicare Advantage',
    premium: '$19',
    rating: '4 stars',
    network: 'Large nationwide network with local providers',
    maxOOP: '$8,300',
    specialFeatures: ['Nationwide coverage', 'Travel benefits', 'Fitness programs']
  }
];

const healthcareResources = [
  {
    name: 'Sutter Health',
    type: 'Health System',
    locations: ['Sutter Medical Center', 'Sutter Memorial', 'Sutter Roseville', 'Sutter Davis'],
    specialties: ['Cancer Care', 'Heart & Vascular', 'Orthopedics', 'Women\'s Health'],
    coverage: 'Sacramento Metro'
  },
  {
    name: 'UC Davis Health',
    type: 'Academic Medical Center',
    locations: ['UC Davis Medical Center', 'Multiple specialty clinics', 'Research facilities'],
    specialties: ['Research Medicine', 'Specialty Care', 'Clinical Trials', 'Teaching Hospital'],
    coverage: 'Northern California'
  },
  {
    name: 'Kaiser Permanente',
    type: 'Integrated System',
    locations: ['Multiple Kaiser facilities throughout Sacramento County'],
    specialties: ['Primary Care', 'Specialty Services', 'Mental Health', 'Pharmacy'],
    coverage: 'Countywide'
  },
  {
    name: 'Dignity Health',
    type: 'Health System',
    locations: ['Mercy General', 'Methodist Hospital', 'Woodland Memorial'],
    specialties: ['Emergency Care', 'Surgery', 'Rehabilitation', 'Senior Services'],
    coverage: 'Regional'
  }
];

const regionalAreas = [
  {
    area: 'Sacramento City',
    population: '525K',
    keyFeatures: ['Major medical centers', 'Academic institutions', 'Diverse provider networks'],
    planHighlights: 'Highest plan concentration with 74 options'
  },
  {
    area: 'Elk Grove',
    population: '175K',
    keyFeatures: ['Growing senior population', 'Kaiser Permanente facility', 'Primary care focus'],
    planHighlights: 'Strong HMO and PPO options'
  },
  {
    area: 'Roseville',
    population: '145K',
    keyFeatures: ['Sutter Roseville Medical Center', 'Retirement communities', 'Specialty services'],
    planHighlights: 'Excellent Medicare Advantage penetration'
  },
  {
    area: 'Folsom',
    population: '80K',
    keyFeatures: ['Mercy Hospital Folsom', 'Active senior community', 'Wellness programs'],
    planHighlights: 'High-quality plan options'
  }
];

const californiaConsiderations = [
  {
    consideration: 'State Medicare Supplements',
    description: 'California has unique Medigap regulations and standardized plans',
    details: ['Birthday rule for switching', 'Standardized plan benefits', 'State insurance department oversight']
  },
  {
    consideration: 'PACE Programs',
    description: 'Program of All-Inclusive Care for the Elderly available in Sacramento',
    details: ['On Lok PACE Sacramento', 'Comprehensive senior care', 'Medicare and Medicaid coordination']
  },
  {
    consideration: 'Health Savings Accounts',
    description: 'HSA compatibility with Medicare Advantage in California',
    details: ['HSA contribution limitations', 'Medical savings accounts', 'Tax advantages for healthcare']
  },
  {
    consideration: 'Prescription Drug Coverage',
    description: 'California state drug assistance programs and Medicare Part D',
    details: ['California Prescription Drug Discount', 'Medicare Extra Help program', 'State pharmaceutical assistance']
  }
];

export default function SacramentoCountyPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Sacramento County CA', href: '/medicare-advantage/sacramento-county' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/sacramento-county',
        url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/sacramento-county',
        name: 'Best Medicare Advantage Plans Sacramento County CA 2025 | 74 Plans | 51 Zero Premium Options',
        description: 'Find the best Medicare Advantage plans in Sacramento County CA 2025. Compare 74 plans including 51 zero premium options. Kaiser Permanente, Sutter Health, UC Davis Health networks.',
        inLanguage: 'en-US',
        isPartOf: { '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/#website' },
        breadcrumb: { '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/sacramento-county#breadcrumb' }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/sacramento-county#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'Medicare Advantage', item: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage' },
          { '@type': 'ListItem', position: 3, name: 'Sacramento County, California', item: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/sacramento-county' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/sacramento-county#service',
        name: 'Sacramento County California Medicare Advantage Plans',
        description: 'Medicare Advantage (Part C) plans for Sacramento County residents with 74 plan options and Kaiser, Sutter, UC Davis Health networks.',
        provider: { '@type': 'Organization', name: 'El-Mag Insurance', url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app' },
        areaServed: {
          '@type': 'County',
          name: 'Sacramento County, California',
          containsPlace: [
            { '@type': 'City', name: 'Sacramento' }
          ]
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Sacramento County Medicare Advantage Plans',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HMO Medicare Advantage', description: '$0 premium plans with Sacramento-area network coverage' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PPO Medicare Advantage', description: 'Flexible provider access across California' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'D-SNP Plans', description: 'Dual-eligible Special Needs Plans for Medicaid beneficiaries' } }
          ]
        }
      }
    ]
  };

  React.useEffect(() => {
    // Track advanced page view
    trackMedicareAdvancedPageView(
      'Medicare Advantage Sacramento County California',
      {
        pageType: 'county_market',
        totalBeneficiaries: sacramentoCountyData.totalBeneficiaries,
        availablePlans: sacramentoCountyData.planCount,
        specialMetrics: {
          zeroPremiumPlans: sacramentoCountyData.zeroPremiumPlans,
          maPenetrationRate: sacramentoCountyData.maPenetration
        }
      },
      {
        city: 'Sacramento',
        state: 'California',
        county: 'Sacramento County',
        region: 'Northern California'
      }
    );

    // Set up advanced scroll tracking
    const cleanup = setupMedicareAdvancedScrollTracking('county_market', [
      { percentage: 25, milestone: 'top_plans_viewed' },
      { percentage: 50, milestone: 'healthcare_systems_reviewed' },
      { percentage: 75, milestone: 'regional_areas_explored' },
      { percentage: 90, milestone: 'content_completion' }
    ]);

    return cleanup;
  }, []);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Sacramento County"
        county="Sacramento County"
        state="California"
        demographics={{
          avgAge: sacramentoCountyData.averageAge,
          maPenetrationRate: sacramentoCountyData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: sacramentoCountyData.totalBeneficiaries,
          availablePlans: sacramentoCountyData.planCount,
          zeroPremiumPlans: sacramentoCountyData.zeroPremiumPlans,
          pageType: 'county_market'
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
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
                  Best Medicare Advantage Plans Sacramento County CA 2025
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Find the <strong>best Medicare Advantage plans in Sacramento County</strong> California. 
                  Compare <strong>74 plans with 51 zero premium options</strong> covering Sacramento, Elk Grove, 
                  Roseville, Folsom, and Citrus Heights. <strong>Kaiser Permanente, Sutter Health, UC Davis Health</strong> 
                  networks with 54.8% enrollment rate reflecting top satisfaction in Northern California.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/medicare-plan-comparison-tool" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'hero', 'county_market', '/medicare-plan-comparison-tool')}
                  >
                    Find Zero Premium Plans
                  </Link>
                  <a 
                    href="tel:331-343-2584" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('phone_call', 'hero', 'county_market', 'tel:331-343-2584')}
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
                Best Medicare Advantage Plans in Sacramento County 2025
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">{sacramentoCountyData.totalBeneficiaries.toLocaleString()}</div>
                  <div className="text-gray-600">Medicare Beneficiaries</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">{sacramentoCountyData.planCount}</div>
                  <div className="text-gray-600">MA Plans Available</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{sacramentoCountyData.zeroPremiumPlans}</div>
                  <div className="text-gray-600">$0 Premium Plans</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{sacramentoCountyData.maPenetration}%</div>
                  <div className="text-gray-600">MA Enrollment Rate</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Sacramento County represents one of Northern California's most robust <strong>Medicare Advantage markets</strong>. 
                  With top healthcare systems including <strong>Kaiser Permanente, Sutter Health, and UC Davis Health</strong>, 
                  the county offers <strong>{sacramentoCountyData.planCount} Medicare Advantage options with {sacramentoCountyData.zeroPremiumPlans} 
                  zero premium plans</strong> available. The {sacramentoCountyData.maPenetration}% enrollment rate reflects 
                  high satisfaction with Medicare Advantage throughout Sacramento, Elk Grove, Roseville, Folsom, and surrounding areas.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Why Sacramento County Has Top Medicare Advantage Options</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>74 Medicare Advantage plans</strong> - most options in Northern California</li>
                    <li>• <strong>51 zero premium plans</strong> - affordable coverage for all budgets</li>
                    <li>• Kaiser Permanente integrated care model with top ratings</li>
                    <li>• Sutter Health comprehensive network across metro area</li>
                    <li>• UC Davis Health academic medical center excellence</li>
                    <li>• 54.8% enrollment rate shows high resident satisfaction</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <p className="text-sm text-blue-600 font-semibold mb-2">Compare Medicare Markets:</p>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/medicare-advantage-diverse-communities-atlanta" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Atlanta Diverse Care</Link>
                      <Link href="/inova-vs-kaiser-medicare-advantage-fairfax" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Fairfax Networks</Link>
                      <Link href="/raleigh-tech-innovation-medicare-advantage" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Raleigh Tech</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Top Medicare Advantage Plans in Sacramento County
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {topPlans.map((plan, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{plan.name}</h3>
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
                      <h4 className="font-semibold text-gray-800 mb-2">Special Features:</h4>
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
                Sacramento County Healthcare Systems
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {healthcareResources.map((resource, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{resource.name}</h3>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-semibold">
                        {resource.type}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Locations:</h4>
                      <ul className="text-sm text-gray-600">
                        {resource.locations.map((location, idx) => (
                          <li key={idx}>• {location}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {resource.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-primary-600 font-medium">Coverage: {resource.coverage}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Advantage Coverage by Sacramento County Cities
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Sacramento City & Downtown</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 74 Medicare Advantage plans available</li>
                    <li>• UC Davis Medical Center access</li>
                    <li>• Sutter Medical Center Sacramento</li>
                    <li>• Kaiser Permanente South Sacramento</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-semibold">
                      All 74 Plans
                    </span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Elk Grove & South County</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 72 Medicare plans with coverage</li>
                    <li>• Kaiser Permanente Elk Grove</li>
                    <li>• Dignity Health Methodist Hospital</li>
                    <li>• Sutter Health network access</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs font-semibold">
                      72 Plans Available
                    </span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Roseville & Rocklin</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 70 Medicare plans available</li>
                    <li>• Sutter Roseville Medical Center</li>
                    <li>• Kaiser Permanente Roseville</li>
                    <li>• AdventHealth Roseville</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                      70 Plans Available
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Folsom & Rancho Cordova</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 69 Medicare plans with network access</li>
                    <li>• Mercy Hospital of Folsom</li>
                    <li>• Kaiser Permanente Point West</li>
                    <li>• UC Davis Health network</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                      69 Plans Available
                    </span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Citrus Heights & Fair Oaks</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 68 Medicare plans available</li>
                    <li>• Mercy San Juan Medical Center</li>
                    <li>• Kaiser Permanente South Sacramento</li>
                    <li>• Sutter Medical network access</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">
                      68 Plans Available
                    </span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Carmichael & Arden-Arcade</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 67 Medicare plans with coverage</li>
                    <li>• Mercy General Hospital</li>
                    <li>• UC Davis Medical Group</li>
                    <li>• Kaiser Permanente Morse Ave</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">
                      67 Plans Available
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Top Zero Premium Medicare Plans by Area</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Kaiser Permanente Areas:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Kaiser Senior Advantage - $0 premium across all areas</li>
                      <li>• Integrated care model with hospitals and clinics</li>
                      <li>• Strong presence in Sacramento, Elk Grove, Roseville</li>
                      <li>• Top star ratings for customer satisfaction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Sutter Health & UC Davis Networks:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Multiple $0 premium options with broad networks</li>
                      <li>• Academic medical center access (UC Davis)</li>
                      <li>• Regional hospitals in all major cities</li>
                      <li>• Specialty care and research opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Regional Areas & Medicare Planning Considerations
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {regionalAreas.map((area, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{area.area}</h3>
                      <span className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-xs font-semibold">
                        Pop: {area.population}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600">
                        {area.keyFeatures.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <p className="text-sm text-primary-600 font-semibold">{area.planHighlights}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">California Medicare Considerations</h3>
                <p className="text-blue-700 mb-4">
                  California offers unique Medicare benefits and protections for residents. Sacramento County beneficiaries 
                  have access to extensive consumer protections and state-specific programs.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  {californiaConsiderations.map((consideration, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">{consideration.consideration}</h4>
                      <p className="text-blue-700 text-sm mb-3">{consideration.description}</p>
                      <ul className="text-sm text-blue-600 space-y-1">
                        {consideration.details.map((detail, idx) => (
                          <li key={idx}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">California Medicare Markets:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/san-diego-county" className="hover:underline">San Diego County Plans</Link></li>
                      <li>• <Link href="/medicare-advantage/orange-county-florida" className="hover:underline">Orange County Comparison</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Additional Resources:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage" className="hover:underline">All Medicare Advantage Plans</Link></li>
                      <li>• <Link href="/annuities" className="hover:underline">California Retirement Annuities</Link></li>
                      <li>• <Link href="/supplemental-insurance" className="hover:underline">Supplemental Coverage</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">Explore Medicare Options in Other States:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <Link href="/medicare-advantage-diverse-communities-atlanta" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Atlanta Diverse Care
                    </Link>
                    <Link href="/medicare-advantage-transportation-benefits-nashville" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Nashville Benefits
                    </Link>
                    <Link href="/inova-vs-kaiser-medicare-advantage-fairfax" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Virginia Networks
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Find Your Perfect Medicare Plan in Sacramento County
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Our <strong>Northern California Medicare specialists</strong> understand Sacramento County's unique healthcare landscape 
                and can help you navigate your <strong>74 plan options with confidence</strong>. From Kaiser Permanente's integrated care 
                to Sutter Health's community focus and UC Davis Health's academic excellence, find the perfect 
                <strong>zero premium Medicare plan</strong> for your needs in Sacramento, Elk Grove, Roseville, Folsom, or Citrus Heights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('contact_form', 'footer', 'county_market', '/contact')}
                >
                  Get Expert Guidance
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('phone_call', 'footer', 'county_market', 'tel:331-343-2584')}
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