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
  title: 'Orange County Medicare Advantage 2025 | Premium California Plans | Anaheim Irvine Newport Beach',
  description: 'Premium Orange County Medicare Advantage plans 2025. Compare 85+ luxury healthcare plans with Kaiser, UC Irvine, Hoag networks. $0 premium options, concierge medicine, high-end coverage.',
  keywords: 'Orange County Medicare Advantage 2025, premium Medicare plans California, luxury Medicare Advantage Orange County, Anaheim Medicare plans, Irvine Medicare Advantage, Newport Beach Medicare luxury, Huntington Beach premium Medicare, Kaiser Permanente Orange County, UC Irvine Health Medicare, Hoag Hospital Medicare plans, Orange County concierge medicine Medicare, Southern California premium healthcare, affluent senior health insurance Orange County, high-income Medicare plans California, Orange County Medicare specialists, luxury healthcare coverage, premium Medicare networks California, Orange County Medicare enrollment 2025, executive Medicare plans Orange County, Anaheim premium healthcare, Irvine luxury Medicare, Newport Beach concierge Medicare, Orange County Medicare brokers, California premium senior insurance, high-end Medicare Advantage plans, Orange County Medicare comparison, luxury senior health insurance California, premium healthcare networks OC, Orange County Medicare advisors, executive health insurance California',
  openGraph: {
    title: 'Medicare Advantage Orange County California 2025 | Premium Healthcare',
    description: 'Complete guide to Medicare Advantage plans in Orange County. 85+ premium options with top-rated healthcare networks and comprehensive coverage.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Orange County Medicare Specialists',
    images: [
      {
        url: '/images/orange-county-california-medicare-advantage-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Medicare Advantage Plans Orange County California 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Medicare Advantage Orange County California 2025',
    description: 'Orange County California Medicare Advantage: 85+ premium plans with top-rated healthcare networks.',
    images: ['/images/orange-county-california-medicare-advantage-2025.jpg']
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-advantage/orange-county',
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

const orangeCountyData = {
  totalBeneficiaries: 485000,
  maPenetration: 67.8,
  averageAge: 71,
  affluenceIndex: 142, // Above national average
  planCount: 85,
  zeroPremiumPlans: 52,
  averageStarRating: 4.3
};

const topPlans = [
  {
    name: 'Kaiser Permanente Senior Advantage',
    premium: '$0',
    rating: '4.5 stars',
    network: 'Integrated Kaiser facilities throughout Orange County',
    maxOOP: '$6,700',
    specialFeatures: ['Coordinated care model', 'Electronic health records', 'Comprehensive wellness programs']
  },
  {
    name: 'Anthem Blue Cross Partnership Plan',
    premium: '$45',
    rating: '4.5 stars',
    network: 'Premium provider network with top Orange County hospitals',
    maxOOP: '$7,200',
    specialFeatures: ['Cedars-Sinai partnerships', 'Concierge services', 'Advanced diagnostic coverage']
  },
  {
    name: 'UnitedHealthcare AARP Complete',
    premium: '$0',
    rating: '4 stars',
    network: 'Comprehensive network with national coverage',
    maxOOP: '$8,300',
    specialFeatures: ['Travel benefits', 'Wellness rewards', 'Prescription home delivery']
  }
];

const orangeCountyCities = [
  {
    city: 'Anaheim',
    population: '350,000',
    keyFeatures: ['Kaiser Anaheim Medical Center', 'UCI Health partnerships', 'Multilingual healthcare services'],
    healthcareHighlights: 'Major medical hub with diverse healthcare options',
    planAvailability: '82 Medicare plans available'
  },
  {
    city: 'Newport Beach',
    population: '87,000',
    keyFeatures: ['Hoag Hospital Newport Beach', 'Premium concierge medicine', 'Coastal healthcare luxury'],
    healthcareHighlights: 'High-end healthcare with boutique medical practices',
    planAvailability: '75 Medicare plans available'
  },
  {
    city: 'Irvine',
    population: '285,000',
    keyFeatures: ['UC Irvine Medical Center', 'Planned community healthcare', 'Technology-integrated care'],
    healthcareHighlights: 'Academic medical center with cutting-edge technology',
    planAvailability: '83 Medicare plans available'
  },
  {
    city: 'Huntington Beach',
    population: '198,000',
    keyFeatures: ['Huntington Beach Hospital', 'Beach community wellness focus', 'Active senior programs'],
    healthcareHighlights: 'Community-focused healthcare with wellness emphasis',
    planAvailability: '78 Medicare plans available'
  }
];

const healthcareNetworks = [
  {
    network: 'Kaiser Permanente',
    coverage: 'Comprehensive integrated network',
    facilities: ['Kaiser Anaheim', 'Kaiser Irvine', 'Kaiser Orange', 'Kaiser Woodland Hills'],
    specialties: 'All major specialties with coordinated care model',
    planCount: '12 Medicare Advantage plans'
  },
  {
    network: 'UC Irvine Health',
    coverage: 'Academic medical center network',
    facilities: ['UC Irvine Medical Center', 'UCI Health specialty clinics', 'Douglas Hospital'],
    specialties: 'Advanced subspecialties and research-based care',
    planCount: '35+ participating Medicare plans'
  },
  {
    network: 'Hoag Health Network',
    coverage: 'Premium community healthcare',
    facilities: ['Hoag Newport Beach', 'Hoag Irvine', 'Hoag Orthopedic Institute'],
    specialties: 'Orthopedics, cardiovascular, cancer care',
    planCount: '42 participating Medicare plans'
  },
  {
    network: 'MemorialCare Health System',
    coverage: 'Community-based comprehensive care',
    facilities: ['Orange Coast Medical Center', 'Saddleback Medical Center'],
    specialties: 'Emergency services, surgical care, rehabilitation',
    planCount: '38 participating Medicare plans'
  }
];

export default function OrangeCountyPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Orange County', href: '/medicare-advantage/orange-county' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Local Business Schema for Orange County Premium Medicare Services
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Orange County Premium Medicare Advantage Specialists",
    "description": "Premium Medicare Advantage plans for Orange County California affluent seniors. Expert guidance for luxury healthcare coverage with concierge medicine options.",
    "url": "https://elmag-insurance.com/medicare-advantage/orange-county",
    "telephone": "331-343-2584",
    "areaServed": {
      "@type": "State",
      "name": "California",
      "containsPlace": [
        {
          "@type": "City",
          "name": "Anaheim"
        },
        {
          "@type": "City",
          "name": "Irvine"
        },
        {
          "@type": "City",
          "name": "Newport Beach"
        },
        {
          "@type": "City",
          "name": "Huntington Beach"
        }
      ]
    },
    "serviceType": "Premium Medicare Advantage Insurance",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Orange County Premium Medicare Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Medicare Advantage Plans Orange County",
            "description": "85 luxury Medicare Advantage plans with 52 zero premium options for Orange County affluent seniors"
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
        "name": "What makes Orange County Medicare plans premium compared to other California markets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Orange County Medicare Advantage plans offer premium features including Kaiser Permanente integrated care, UC Irvine cutting-edge treatments, Hoag Hospital concierge services, and luxury healthcare networks designed for affluent seniors with executive-level benefits."
        }
      },
      {
        "@type": "Question",
        "name": "How many premium Medicare Advantage plans are available in Orange County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are 85 Medicare Advantage plans available in Orange County California for 2025, including 52 zero premium options with luxury healthcare networks and concierge medicine features."
        }
      },
      {
        "@type": "Question",
        "name": "Do Orange County Medicare plans include concierge medicine services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many premium Orange County Medicare Advantage plans include concierge medicine services, executive health programs, and luxury healthcare features through partnerships with Hoag Hospital, UC Irvine Health, and other premium providers."
        }
      }
    ]
  };

  React.useEffect(() => {
    trackMedicareAdvancedPageView(
      'Medicare Advantage Orange County',
      {
        pageType: 'county_market',
        totalBeneficiaries: orangeCountyData.totalBeneficiaries,
        availablePlans: orangeCountyData.planCount,
        specialMetrics: {}
      },
      {
        city: 'Anaheim',
        state: 'California',
        county: 'Orange County',
        region: 'Southern California'
      }
    );

    const cleanup = setupMedicareAdvancedScrollTracking('premium_market', [
      { percentage: 25, milestone: 'premium_plans_viewed' },
      { percentage: 50, milestone: 'network_coverage_reviewed' },
      { percentage: 75, milestone: 'city_coverage_explored' },
      { percentage: 90, milestone: 'content_completion' }
    ]);

    return cleanup;
  }, []);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Orange County"
        county="Orange County"
        state="California"
        demographics={{
          avgAge: orangeCountyData.averageAge,
          maPenetrationRate: orangeCountyData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: orangeCountyData.totalBeneficiaries,
          availablePlans: orangeCountyData.planCount,
          zeroPremiumPlans: orangeCountyData.zeroPremiumPlans,
          pageType: 'premium_market'
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
                  Orange County Medicare Advantage 2025 | Premium California Healthcare Plans
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  <strong>Premium Medicare Advantage plans for affluent Orange County seniors.</strong> Compare 
                  <strong>85 luxury healthcare plans with 52 zero premium options</strong> featuring 
                  <strong>Kaiser Permanente integrated care, UC Irvine cutting-edge medicine,</strong> 
                  and <strong>Hoag Hospital concierge services</strong> across Anaheim, Irvine, Newport Beach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/medicare-plan-comparison-tool" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'hero', 'premium_market', '/medicare-plan-comparison-tool')}
                  >
                    Find Best OC Plans
                  </Link>
                  <a 
                    href="tel:331-343-2584" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('phone_call', 'hero', 'premium_market', 'tel:331-343-2584')}
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
                Premium Orange County Medicare Advantage Plans 2025 | Luxury California Healthcare
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">{orangeCountyData.totalBeneficiaries.toLocaleString()}</div>
                  <div className="text-gray-600">Medicare Beneficiaries</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">{orangeCountyData.planCount}</div>
                  <div className="text-gray-600">MA Plans Available</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{orangeCountyData.zeroPremiumPlans}</div>
                  <div className="text-gray-600">$0 Premium Plans</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{orangeCountyData.maPenetration}%</div>
                  <div className="text-gray-600">MA Enrollment Rate</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  <strong>Orange County Medicare Advantage plans</strong> serve one of California's most affluent senior populations 
                  with {orangeCountyData.maPenetration}% enrollment in premium Medicare plans. Our <strong>Orange County Medicare specialists</strong> 
                  help high-income seniors access <strong>85 luxury healthcare plans</strong> featuring <strong>Kaiser Permanente integrated care,</strong> 
                  <strong>UC Irvine academic medicine,</strong> and <strong>Hoag Hospital concierge services</strong> with advanced technology and executive-level benefits.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Why Orange County Has Premium Medicare Options</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>85 Medicare plans with premium networks</strong> - highest quality healthcare options</li>
                    <li>• <strong>52 zero premium plans</strong> - excellent value with comprehensive benefits</li>
                    <li>• Kaiser Permanente integrated care model with coordinated services</li>
                    <li>• UC Irvine academic medical center with cutting-edge treatments</li>
                    <li>• Hoag Hospital premium community healthcare with concierge services</li>
                    <li>• 4.3 average star rating - among California's highest-rated markets</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <p className="text-sm text-blue-600 font-semibold mb-2">Compare Premium California Markets:</p>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/medicare-advantage/sacramento-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Sacramento County</Link>
                      <Link href="/medicare-advantage/san-diego-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">San Diego County</Link>
                      <Link href="/medicare-advantage/los-angeles-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Los Angeles County</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Top Medicare Advantage Plans for Orange County
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
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Premium Features:</h4>
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
                Orange County Healthcare Networks
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {healthcareNetworks.map((network, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{network.network}</h3>
                    <p className="text-gray-600 text-sm mb-4">{network.coverage}</p>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Facilities:</h4>
                      <ul className="text-sm text-gray-600">
                        {network.facilities.map((facility, idx) => (
                          <li key={idx}>• {facility}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-3 border-t pt-3">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Specialties:</h4>
                      <p className="text-sm text-green-600">{network.specialties}</p>
                    </div>
                    <div className="border-t pt-3">
                      <p className="text-sm text-primary-600 font-semibold">{network.planCount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Coverage by Orange County Cities
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {orangeCountyCities.map((city, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{city.city}</h3>
                      <span className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-xs font-semibold">
                        Pop: {city.population}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600">
                        {city.keyFeatures.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-3 border-t pt-3">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Healthcare Highlights:</h4>
                      <p className="text-sm text-green-600">{city.healthcareHighlights}</p>
                    </div>
                    <div className="border-t pt-3">
                      <p className="text-sm text-primary-600 font-semibold">{city.planAvailability}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Southern California Medicare Resources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">California Medicare Markets:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/los-angeles-county" className="hover:underline">Los Angeles County Plans</Link></li>
                      <li>• <Link href="/medicare-advantage/san-diego-county" className="hover:underline">San Diego County</Link></li>
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
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Compare Premium Medicare Markets:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <Link href="/medicare-advantage/sacramento-county" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Sacramento County
                    </Link>
                    <Link href="/inova-vs-kaiser-medicare-advantage-fairfax" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Fairfax Networks
                    </Link>
                    <Link href="/raleigh-tech-innovation-medicare-advantage" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Raleigh Tech
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Premium Medicare Coverage in Orange County
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Orange County offers some of California's finest healthcare options. Find 
                <strong>premium Medicare Advantage plans</strong> with access to Kaiser Permanente's 
                integrated care, UC Irvine's cutting-edge treatments, and Hoag Hospital's 
                concierge services across Anaheim, Newport Beach, Irvine, and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('contact_form', 'footer', 'premium_market', '/contact')}
                >
                  Get Premium Medicare Guidance
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('phone_call', 'footer', 'premium_market', 'tel:331-343-2584')}
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