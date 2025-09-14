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
  title: 'Best Medicare Advantage Transportation Benefits Nashville TN 2025 | Free Medical Rides | WeGo Transit Coverage',
  description: 'Find the best Medicare Advantage transportation benefits in Nashville TN 2025. Compare 45+ plans offering FREE medical rides, WeGo transit coverage, wheelchair transportation, and pharmacy trips. Save $840+ annually on medical transportation with top-rated Medicare plans in Nashville and Middle Tennessee.',
  keywords: 'Medicare Advantage transportation benefits Nashville, best medical transportation Medicare Nashville 2025, free rides Medicare Advantage Nashville, WeGo transit Medicare coverage Nashville, medical appointment transportation Nashville, Medicare transportation benefits Tennessee, Nashville senior transportation Medicare, pharmacy transportation Nashville Medicare, dialysis transportation Nashville, medical rides Medicare Advantage Nashville, Nashville public transit Medicare, mobility assistance Medicare Nashville, wheelchair transportation Medicare Nashville, non-emergency medical transport Nashville, free medical transportation Nashville seniors, Medicare Advantage with transportation Nashville, Nashville Medicare transportation allowance, WeGo Access Ride Medicare Nashville, Vanderbilt medical transportation Medicare, Saint Thomas transportation benefits Medicare, HCA healthcare transportation Nashville, Nashville VA medical transportation, disability transportation Medicare Nashville, rural transportation Medicare Tennessee, Music City transportation Medicare benefits, Davidson County medical transportation Medicare, free pharmacy rides Nashville Medicare, kidney dialysis transportation Nashville',
  openGraph: {
    title: 'Medicare Advantage Transportation Benefits Nashville TN 2025 | Medical Rides',
    description: 'Complete guide to Medicare Advantage transportation benefits in Nashville. Free medical rides, WeGo transit coverage, and comprehensive mobility assistance for Nashville seniors.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Nashville Transportation Medicare Specialists',
    images: [
      {
        url: '/images/nashville-medicare-transportation-benefits-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Medicare Advantage Transportation Benefits Nashville TN 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Medicare Advantage Transportation Benefits Nashville TN 2025',
    description: 'Medicare transportation benefits in Nashville: free medical rides, WeGo transit, and mobility assistance.',
    images: ['/images/nashville-medicare-transportation-benefits-2025.jpg']
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage-transportation-benefits-nashville',
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

const nashvilleData = {
  totalBeneficiaries: 145000,
  seniorPopulation: 13.8,
  transportationChallenges: 28.5,
  planCount: 45,
  transportationPlans: 32,
  averageTransportationBenefit: 840
};

const transportationBenefits = [
  {
    benefit: 'Medical Appointment Rides',
    description: 'Free or reduced-cost transportation to medical appointments',
    coverage: 'Unlimited rides to plan providers',
    value: '$12-25 per trip',
    icon: '🚗'
  },
  {
    benefit: 'Pharmacy Transportation',
    description: 'Rides to pick up prescriptions and pharmacy services',
    coverage: 'Monthly pharmacy trips',
    value: '$10-20 per trip',
    icon: '💊'
  },
  {
    benefit: 'WeGo Public Transit',
    description: 'Nashville public transportation vouchers and passes',
    coverage: 'Monthly transit passes',
    value: '$50-100 per month',
    icon: '🚌'
  },
  {
    benefit: 'Dialysis Transportation',
    description: 'Specialized transportation for dialysis treatments',
    coverage: '3x weekly transport',
    value: '$30-50 per trip',
    icon: '🏥'
  },
  {
    benefit: 'Wheelchair Accessible Rides',
    description: 'ADA-compliant vehicles for mobility device users',
    coverage: 'Specialized medical transport',
    value: '$25-45 per trip',
    icon: '♿'
  },
  {
    benefit: 'Emergency Medical Transport',
    description: 'Non-emergency medical transportation for urgent care',
    coverage: 'Hospital and urgent care',
    value: '$40-75 per trip',
    icon: '🚑'
  }
];

const nashvilleTransportationProviders = [
  {
    provider: 'LogistiCare (UnitedHealthcare)',
    serviceArea: 'Metro Nashville & Davidson County',
    services: ['Medical appointments', 'Pharmacy trips', 'Dialysis transport'],
    wheelchairAccessible: true,
    booking: '1-855-564-4782',
    advanceNotice: '48 hours'
  },
  {
    provider: 'ModivCare (Anthem & Humana)',
    serviceArea: 'Middle Tennessee Region',
    services: ['Routine medical care', 'Specialist visits', 'Lab appointments'],
    wheelchairAccessible: true,
    booking: '1-855-687-4786',
    advanceNotice: '24-48 hours'
  },
  {
    provider: 'GoGoGrandparent (Multiple Plans)',
    serviceArea: 'Nashville Metro Area',
    services: ['On-demand rides', 'Scheduled appointments', 'Grocery/pharmacy'],
    wheelchairAccessible: false,
    booking: '1-855-464-6872',
    advanceNotice: 'Same day available'
  },
  {
    provider: 'WeGo Transit Partnership',
    serviceArea: 'Nashville-Davidson County',
    services: ['Public bus routes', 'Access Ride paratransit', 'WeGo Star train'],
    wheelchairAccessible: true,
    booking: '615-862-5950',
    advanceNotice: 'Day before for Access Ride'
  }
];

const topTransportationPlans = [
  {
    plan: 'UnitedHealthcare AARP Complete',
    premium: '$0',
    transportationBenefit: '$1,200 annual',
    features: ['Unlimited medical rides', 'LogistiCare partnership', 'WeGo transit vouchers'],
    wheelchairAccessible: true,
    coverage: 'Metro Nashville & surrounding counties'
  },
  {
    plan: 'Humana Honor Choice PPO',
    premium: '$35',
    transportationBenefit: '$960 annual',
    features: ['24 round trips annually', 'Pharmacy delivery', 'Specialist visits'],
    wheelchairAccessible: true,
    coverage: 'Middle Tennessee region'
  },
  {
    plan: 'Anthem MediBlue Plus',
    premium: '$0',
    transportationBenefit: '$600 annual',
    features: ['Medical appointments only', 'Emergency transport', 'ModivCare network'],
    wheelchairAccessible: true,
    coverage: 'Davidson, Williamson, Rutherford counties'
  }
];

const transportationTips = [
  {
    tip: 'Book Early',
    description: 'Schedule transportation 24-48 hours in advance for best availability',
    importance: 'Critical'
  },
  {
    tip: 'Confirm Wheelchair Access',
    description: 'Specify mobility device needs when booking to ensure proper vehicle',
    importance: 'Essential'
  },
  {
    tip: 'Keep Documentation',
    description: 'Have Medicare card and appointment confirmation ready for driver',
    importance: 'Important'
  },
  {
    tip: 'Plan Return Trips',
    description: 'Book both directions when scheduling, including potential wait time',
    importance: 'Recommended'
  },
  {
    tip: 'Know Your Benefits',
    description: 'Understand your annual transportation allowance and covered destinations',
    importance: 'Essential'
  },
  {
    tip: 'Alternative Options',
    description: 'Consider family, WeGo Access Ride, or ride-sharing for non-covered trips',
    importance: 'Helpful'
  }
];

export default function TransportationBenefitsNashvillePage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Transportation Benefits Nashville', href: '/medicare-advantage-transportation-benefits-nashville' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  React.useEffect(() => {
    // Track advanced page view
    trackMedicareAdvancedPageView(
      'Medicare Advantage Transportation Benefits Nashville',
      {
        pageType: 'transportation_benefits',
        totalBeneficiaries: nashvilleData.totalBeneficiaries,
        availablePlans: nashvilleData.planCount,
        specialMetrics: {
          transportationPlans: nashvilleData.transportationPlans,
          averageTransportationBenefit: nashvilleData.averageTransportationBenefit
        }
      },
      {
        city: 'Nashville',
        state: 'Tennessee',
        region: 'Southeast'
      }
    );

    // Set up advanced scroll tracking
    const cleanup = setupMedicareAdvancedScrollTracking('transportation_benefits', [
      { percentage: 25, milestone: 'benefits_overview_viewed' },
      { percentage: 50, milestone: 'providers_coverage_viewed' },
      { percentage: 75, milestone: 'usage_tips_viewed' },
      { percentage: 90, milestone: 'content_completion' }
    ]);

    return cleanup;
  }, []);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Transportation Benefits Nashville"
        county="Davidson County"
        state="Tennessee"
        demographics={{
          avgAge: 67,
        }}
        keyMetrics={{
          totalBeneficiaries: nashvilleData.totalBeneficiaries,
          availablePlans: nashvilleData.planCount,
          transportationPlans: nashvilleData.transportationPlans,
          pageType: 'transportation_benefits'
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Medicare Advantage Transportation Benefits Nashville",
            "description": "Medicare Advantage transportation benefits and medical ride services for Nashville seniors, including WeGo transit coverage and medical appointment transportation.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nashville",
              "addressRegion": "TN",
              "addressCountry": "US"
            },
            "telephone": "331-343-2584",
            "areaServed": [
              {
                "@type": "City",
                "name": "Nashville",
                "sameAs": "https://en.wikipedia.org/wiki/Nashville,_Tennessee"
              }
            ],
            "serviceType": "Medicare Insurance",
            "provider": {
              "@type": "Organization",
              "name": "El-Mag Insurance"
            }
          }),
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
                  Best Medicare Advantage Transportation Benefits Nashville TN 2025
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Get <strong>FREE medical rides</strong> and transportation benefits with top-rated Medicare Advantage plans in Nashville. 
                  Compare {nashvilleData.transportationPlans}+ plans offering medical appointment transportation, 
                  <strong>WeGo transit coverage</strong>, wheelchair accessible vehicles, and pharmacy rides. 
                  Save up to <strong>${nashvilleData.averageTransportationBenefit} annually</strong> on medical transportation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/medicare-plan-comparison-tool" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'hero', 'transportation_benefits', '/medicare-plan-comparison-tool')}
                  >
                    Find Best Transportation Plans
                  </Link>
                  <a 
                    href="tel:331-343-2584" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('phone_call', 'hero', 'transportation_benefits')}
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
                Best Medicare Transportation Benefits in Nashville TN
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">{nashvilleData.transportationPlans}</div>
                  <div className="text-gray-600">Transportation Plans</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">${nashvilleData.averageTransportationBenefit}</div>
                  <div className="text-gray-600">Average Annual Benefit</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">4+</div>
                  <div className="text-gray-600">Service Providers</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{nashvilleData.transportationChallenges}%</div>
                  <div className="text-gray-600">Face Transport Challenges</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Nashville's <strong>best Medicare Advantage transportation benefits</strong> address the reality that 
                  {nashvilleData.transportationChallenges}% of Middle Tennessee seniors face transportation barriers to healthcare. 
                  Top-rated plans now offer <strong>FREE medical rides</strong>, WeGo public transit support, wheelchair accessible transportation, 
                  and specialized services for dialysis appointments and pharmacy visits across Davidson, Wilson, and Williamson counties.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Why Choose Medicare Plans with Transportation Benefits in Nashville?</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>Save up to $840 annually</strong> on medical transportation costs</li>
                    <li>• <strong>32 Medicare plans with transportation</strong> covering Nashville metro area</li>
                    <li>• WeGo Access Ride coordination for disabled seniors</li>
                    <li>• Door-to-door service to <Link href="/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-blue-800 underline hover:text-blue-900">Vanderbilt, Saint Thomas, and HCA</Link> facilities</li>
                    <li>• Emergency transportation coverage available 24/7</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <p className="text-sm text-blue-600 font-semibold mb-2">Compare Transportation Benefits in Other Cities:</p>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/medicare-advantage-diverse-communities-atlanta" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Atlanta Diverse Communities</Link>
                      <Link href="/medicare-advantage/monroe-county-florida" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Florida Keys Transportation</Link>
                      <Link href="/medicare-advantage/sacramento-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Sacramento County</Link>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">Explore Medicare Options by Region:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <Link href="/grady-health-system-medicare-advantage-atlanta" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Atlanta Grady System
                    </Link>
                    <Link href="/inova-vs-kaiser-medicare-advantage-fairfax" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Fairfax Networks
                    </Link>
                    <Link href="/medicare-advantage/monroe-county-florida" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Florida Keys
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Free Medical Transportation Benefits in Nashville Medicare Plans
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {transportationBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-center mb-4">
                      <span className="text-4xl mb-3 block">{benefit.icon}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{benefit.benefit}</h3>
                    </div>
                    <p className="text-gray-600 text-sm text-center mb-4">{benefit.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-sm">Coverage:</span>
                        <span className="text-primary-600 text-sm font-semibold">{benefit.coverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-sm">Value:</span>
                        <span className="text-green-600 text-sm font-semibold">{benefit.value}</span>
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
                Nashville Transportation Service Providers
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {nashvilleTransportationProviders.map((provider, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{provider.provider}</h3>
                      {provider.wheelchairAccessible && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">♿ Accessible</span>
                      )}
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Service Area:</h4>
                      <p className="text-sm text-gray-600">{provider.serviceArea}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {provider.services.map((service, idx) => (
                          <span key={idx} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t pt-3 space-y-1">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Booking:</span> {provider.booking}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Notice:</span> {provider.advanceNotice}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Top Medicare Plans with Transportation Benefits
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {topTransportationPlans.map((plan, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{plan.plan}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Premium:</span>
                        <span className="font-semibold text-primary-600">{plan.premium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Transport Benefit:</span>
                        <span className="font-semibold text-green-600">{plan.transportationBenefit}</span>
                      </div>
                      {plan.wheelchairAccessible && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Wheelchair:</span>
                          <span className="text-blue-600">✓ Accessible</span>
                        </div>
                      )}
                    </div>
                    <div className="border-t pt-3 mb-3">
                      <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {plan.features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-xs text-gray-600">
                      <span className="font-semibold">Coverage:</span> {plan.coverage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Transportation Coverage by Nashville Healthcare Systems
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Vanderbilt University Medical Center</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Medicare transportation to all VUMC locations</li>
                    <li>• Specialized oncology appointment rides</li>
                    <li>• Wheelchair accessible vehicles available</li>
                    <li>• Same-day transportation for urgent care</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-semibold">
                      28 Plans Cover VUMC
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Saint Thomas Health / Ascension</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Free rides to Saint Thomas hospitals</li>
                    <li>• Dialysis center transportation coordination</li>
                    <li>• Post-surgery discharge transportation</li>
                    <li>• WeGo Access Ride partnerships</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs font-semibold">
                      25 Plans Cover Saint Thomas
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">HCA Healthcare Nashville</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Transportation to TriStar facilities</li>
                    <li>• Emergency department ride coverage</li>
                    <li>• Pharmacy pickup coordination</li>
                    <li>• Rural transportation to satellite clinics</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                      22 Plans Cover HCA
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Nashville Metro Transportation Partners</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">WeGo Public Transit Medicare Benefits:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Reduced fare programs for Medicare recipients</li>
                      <li>• WeGo Access Ride door-to-door service</li>
                      <li>• Medical appointment transportation priority</li>
                      <li>• Wheelchair accessible bus and van services</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Top-Rated Transportation Providers:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• GoGoGrandparent - On-demand rides for seniors</li>
                      <li>• Medical Transportation Management (MTM)</li>
                      <li>• NET Transportation - Specialized medical transport</li>
                      <li>• Nashville VA Medical Center transport</li>
                    </ul>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Transportation Benefits Tips for Nashville Seniors
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {transportationTips.map((tip, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{tip.tip}</h3>
                      <span className={`ml-2 px-2 py-1 rounded text-xs font-semibold ${
                        tip.importance === 'Critical' ? 'bg-red-100 text-red-800' :
                        tip.importance === 'Essential' ? 'bg-orange-100 text-orange-800' :
                        tip.importance === 'Important' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {tip.importance}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Additional Nashville Transportation Resources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">WeGo Public Transit:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/vanderbilt-vs-hca-medicare-advantage-nashville" className="hover:underline">Nashville Hospital Networks</Link></li>
                      <li>• WeGo Access Ride paratransit</li>
                      <li>• Senior discount programs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Medicare Resources:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage" className="hover:underline">All Medicare Advantage Plans</Link></li>
                      <li>• <Link href="/supplemental-insurance" className="hover:underline">Supplemental Coverage</Link></li>
                      <li>• <Link href="/raleigh-tech-innovation-medicare-advantage" className="hover:underline">Raleigh Tech Medicare</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">Explore Medicare Options by Region:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <Link href="/grady-health-system-medicare-advantage-atlanta" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Atlanta Grady System
                    </Link>
                    <Link href="/inova-vs-kaiser-medicare-advantage-fairfax" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Fairfax Networks
                    </Link>
                    <Link href="/medicare-advantage/monroe-county-florida" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Florida Keys
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Never Miss a Medical Appointment Again
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Transportation shouldn't be a barrier to your healthcare. Find the <strong>best Medicare Advantage plans in Nashville</strong> 
                with <strong>FREE medical transportation</strong>, WeGo transit support, and wheelchair accessible rides that keep you 
                connected to Vanderbilt, Saint Thomas, and HCA healthcare facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('contact_form', 'footer', 'transportation_benefits', '/contact')}
                >
                  Find Transportation Plans
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('phone_call', 'footer', 'transportation_benefits')}
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