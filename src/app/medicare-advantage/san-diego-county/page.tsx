import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Medicare Advantage San Diego County CA 2025 | 67 Plans | Kaiser, Sharp, Scripps | Best Medicare Plans California',
  description: 'Compare 67 Medicare Advantage plans in San Diego County California. San Diego, Chula Vista, Oceanside, Carlsbad, Encinitas coverage. 42 $0 premium plans available. Kaiser Permanente, Sharp Health, Scripps Health, UCSD networks. Expert Medicare guidance for Southern California retirees.',
  keywords: 'San Diego County Medicare Advantage, San Diego Medicare plans 2025, California Medicare Advantage, San Diego CA Medicare enrollment, Medicare Advantage San Diego County, Chula Vista Medicare, Oceanside Medicare plans, Carlsbad Medicare Advantage, Encinitas Medicare plans, Kaiser Permanente Medicare San Diego, Sharp Health Plan Medicare, Scripps Health Medicare, UC San Diego Health Medicare, California Medicare Advantage 2025, San Diego metro Medicare plans, North County San Diego Medicare, South Bay Medicare plans, East County San Diego Medicare, San Diego senior health insurance, California Medicare specialists, Medicare Advantage enrollment California',
  openGraph: {
    title: 'Medicare Advantage San Diego County CA 2025 | 67 Plans | Kaiser, Sharp, Scripps',
    description: 'Complete guide to Medicare Advantage plans in San Diego County CA. 67 plans available with Kaiser, Sharp, Scripps, and UCSD networks. 42 $0 premium options with expert guidance.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Southern California Medicare Specialists',
    images: [
      {
        url: '/images/san-diego-county-medicare-advantage-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'San Diego County California Medicare Advantage Plans 2025 Kaiser Sharp Scripps'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Medicare Advantage San Diego County CA 2025 | 67 Plans',
    description: 'San Diego County Medicare Advantage: 67 options with 42 $0 premium plans. Kaiser, Sharp, Scripps, UCSD networks.',
    images: ['/images/san-diego-county-medicare-advantage-2025.jpg']
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/san-diego-county',
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

const sanDiegoCountyData = {
  totalBeneficiaries: 485000,
  maPenetration: 58.2,
  averageAge: 74,
  dualEligibleRate: 19.7,
  planCount: 67,
  zeroPremiumPlans: 42,
  averageStarRating: 4.1
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
    name: 'Sharp Health Plan Medicare Advantage',
    premium: '$0',
    rating: '4.5 stars',
    network: 'Sharp HealthCare system and affiliates',
    maxOOP: '$7,550',
    specialFeatures: ['Local San Diego focus', 'Comprehensive network', 'Care coordination']
  },
  {
    name: 'UnitedHealthcare AARP Medicare Advantage',
    premium: '$22',
    rating: '4 stars',
    network: 'Large nationwide network with local providers',
    maxOOP: '$8,300',
    specialFeatures: ['Nationwide coverage', 'Travel benefits', 'Fitness programs']
  }
];

const healthcareResources = [
  {
    name: 'Sharp HealthCare',
    type: 'Health System',
    locations: ['Sharp Memorial', 'Sharp Grossmont', 'Sharp Chula Vista', 'Sharp Coronado'],
    specialties: ['Cancer Care', 'Heart & Vascular', 'Orthopedics', 'Women\'s Health'],
    coverage: 'San Diego Metro'
  },
  {
    name: 'Scripps Health',
    type: 'Health System',
    locations: ['Scripps Memorial', 'Scripps Green', 'Scripps Mercy', 'Scripps Encinitas'],
    specialties: ['Cardiovascular', 'Cancer Treatment', 'Neurosciences', 'Transplant'],
    coverage: 'Countywide'
  },
  {
    name: 'UC San Diego Health',
    type: 'Academic Medical Center',
    locations: ['UC San Diego Medical Center', 'Jacobs Medical Center', 'Multiple clinics'],
    specialties: ['Research Medicine', 'Specialty Care', 'Clinical Trials', 'Teaching Hospital'],
    coverage: 'Regional'
  },
  {
    name: 'Kaiser Permanente',
    type: 'Integrated System',
    locations: ['Multiple Kaiser facilities throughout San Diego County'],
    specialties: ['Primary Care', 'Specialty Services', 'Mental Health', 'Pharmacy'],
    coverage: 'Countywide'
  }
];

const regionalAreas = [
  {
    area: 'San Diego City',
    population: '1.4M',
    keyFeatures: ['Major medical centers', 'Academic institutions', 'Diverse provider networks'],
    planHighlights: 'Highest plan concentration with 67 options'
  },
  {
    area: 'North County',
    population: '850K',
    keyFeatures: ['Scripps Encinitas', 'Tri-City Medical', 'Palomar Health'],
    planHighlights: 'Strong HMO and PPO options'
  },
  {
    area: 'South Bay',
    population: '680K',
    keyFeatures: ['Sharp Chula Vista', 'Paradise Valley Hospital', 'Border proximity'],
    planHighlights: 'Bilingual services and cultural competency'
  },
  {
    area: 'East County',
    population: '550K',
    keyFeatures: ['Sharp Grossmont', 'Alvarado Hospital', 'Rural access'],
    planHighlights: 'Transportation benefits important'
  }
];

export default function SanDiegoCountyPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'San Diego County CA', href: '/medicare-advantage/san-diego-county' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Track scroll depth and time on page
  React.useEffect(() => {
    let scrollDepth = 0;
    let timeOnPage = Date.now();
    let hasTrackedMidpoint = false;
    let hasTrackedCompletion = false;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentDepth = Math.round((scrollTop / documentHeight) * 100);
      
      if (currentDepth > scrollDepth) {
        scrollDepth = currentDepth;
        
        // Track 50% scroll depth
        if (scrollDepth >= 50 && !hasTrackedMidpoint) {
          hasTrackedMidpoint = true;
          (window as any).gtag?.('event', 'scroll_depth_50', {
            event_category: 'engagement',
            event_label: 'san_diego_county_california',
            custom_parameters: {
              landing_page_type: 'county_market',
              time_to_midpoint: Date.now() - timeOnPage
            }
          });
        }
        
        // Track 90% scroll depth (content completion)
        if (scrollDepth >= 90 && !hasTrackedCompletion) {
          hasTrackedCompletion = true;
          (window as any).gtag?.('event', 'content_completion', {
            event_category: 'engagement',
            event_label: 'san_diego_county_california',
            custom_parameters: {
              landing_page_type: 'county_market',
              total_time_on_page: Date.now() - timeOnPage,
              final_scroll_depth: scrollDepth
            }
          });
        }
      }
    };

    // Track page view and initial metrics
    (window as any).gtag?.('event', 'page_view', {
      page_title: 'Medicare Advantage San Diego County California',
      page_location: window.location.href,
      custom_parameters: {
        landing_page_type: 'county_market',
        total_beneficiaries: sanDiegoCountyData.totalBeneficiaries,
        available_plans: sanDiegoCountyData.planCount,
        zero_premium_plans: sanDiegoCountyData.zeroPremiumPlans,
        ma_penetration_rate: sanDiegoCountyData.maPenetration,
        average_age: sanDiegoCountyData.averageAge,
        dual_eligible_rate: sanDiegoCountyData.dualEligibleRate,
        average_star_rating: sanDiegoCountyData.averageStarRating,
        county: 'san_diego_county',
        state: 'california',
        metro_area: 'san_diego',
        healthcare_systems: 'kaiser_sharp_scripps_ucsd'
      }
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Track time on page when component unmounts
      const finalTimeOnPage = Date.now() - timeOnPage;
      if (finalTimeOnPage > 30000) { // Only track if user spent more than 30 seconds
        (window as any).gtag?.('event', 'time_on_page', {
          event_category: 'engagement',
          event_label: 'san_diego_county_california',
          value: Math.round(finalTimeOnPage / 1000), // Convert to seconds
          custom_parameters: {
            landing_page_type: 'county_market',
            final_scroll_depth: scrollDepth
          }
        });
      }
    };
  }, []);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage San Diego County"
        county="San Diego County"
        state="California"
        demographics={{
          avgAge: sanDiegoCountyData.averageAge,
          maPenetrationRate: sanDiegoCountyData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: sanDiegoCountyData.totalBeneficiaries,
          availablePlans: sanDiegoCountyData.planCount,
          zeroPremiumPlans: sanDiegoCountyData.zeroPremiumPlans,
          pageType: 'county_market'
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
                  Medicare Advantage San Diego County CA 2025: 67 Plans Available
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Compare Medicare Advantage plans in San Diego County California. 67 plans available throughout 
                  San Diego metro with 42 $0 premium options. 58.2% Medicare Advantage enrollment rate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/medicare-plan-comparison-tool" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  >
                    Compare 67 Plans
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
                San Diego County Medicare Market Overview 2025
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">{sanDiegoCountyData.totalBeneficiaries.toLocaleString()}</div>
                  <div className="text-gray-600">Medicare Beneficiaries</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">{sanDiegoCountyData.planCount}</div>
                  <div className="text-gray-600">MA Plans Available</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{sanDiegoCountyData.zeroPremiumPlans}</div>
                  <div className="text-gray-600">$0 Premium Plans</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{sanDiegoCountyData.maPenetration}%</div>
                  <div className="text-gray-600">MA Enrollment Rate</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  San Diego County leads California in Medicare Advantage adoption. Explore comprehensive options including 
                  <Link href="/medicare-advantage" className="text-primary-600 hover:text-primary-700 underline mx-1">Medicare Advantage plans</Link> 
                  and <Link href="/medicare-supplement-california" className="text-primary-600 hover:text-primary-700 underline mx-1">California Medicare Supplements</Link> 
                  for complete healthcare coverage. Compare with other major markets like 
                  <Link href="/medicare-advantage/orange-county-florida" className="text-primary-600 hover:text-primary-700 underline mx-1">Orange County Florida</Link> 
                  or explore hospital system comparisons like 
                  <Link href="/emory-vs-piedmont-medicare-advantage-atlanta" className="text-primary-600 hover:text-primary-700 underline mx-1">Emory vs Piedmont in Atlanta</Link> 
                  for regional perspective.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Top Medicare Advantage Plans in San Diego County
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
                San Diego County Healthcare Systems
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
                Regional Areas & Medicare Planning
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
                  California's diverse Medicare landscape varies significantly by region. San Diego County's high MA penetration 
                  reflects strong plan options and provider networks.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">West Coast Markets:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/los-angeles-county-california" className="hover:underline">Los Angeles County Plans</Link></li>
                      <li>• <Link href="/medicare-advantage/west-coast" className="hover:underline">West Coast Regional Options</Link></li>
                      <li>• <Link href="/medicare-advantage/hernando-county-florida" className="hover:underline">Hernando County Florida</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Retirement Planning:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/annuities" className="hover:underline">California Retirement Annuities</Link></li>
                      <li>• <Link href="/medicare-supplement-california" className="hover:underline">CA Medicare Supplements</Link></li>
                      <li>• <Link href="/whole-life-insurance" className="hover:underline">Whole Life Insurance</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Find Your Perfect Medicare Plan in San Diego County
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Our California Medicare specialists understand San Diego County's unique healthcare landscape 
                and can help you navigate your 67 plan options with confidence. For broader insurance coverage, 
                explore <Link href="/cobra-insurance" className="text-white hover:text-primary-200 underline mx-1">COBRA insurance</Link> 
                for employment transitions or 
                <Link href="/community-health-centers-medicare-advantage-birmingham" className="text-white hover:text-primary-200 underline mx-1">community health centers</Link> 
                for comprehensive care approaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                >
                  Get Expert Guidance
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