import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Medicare Advantage Hernando County FL 2025 | 47 Plans Available | Spring Hill',
  description: 'Compare 47 Medicare Advantage plans in Hernando County Florida. Spring Hill, Brooksville area coverage. 31 $0 premium plans available. Expert Medicare guidance.',
  keywords: 'Hernando County Florida Medicare Advantage, Spring Hill Medicare plans 2025, Brooksville Medicare Advantage, Florida Medicare plans, Hernando County FL Medicare enrollment, Medicare Advantage Spring Hill',
  openGraph: {
    title: 'Medicare Advantage Hernando County FL 2025 | 47 Plans Available',
    description: 'Compare Medicare Advantage plans in Hernando County FL. 47 plans available in Spring Hill and Brooksville with comprehensive coverage options.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Hernando County FL 2025 | 47 Plans',
    description: 'Hernando County Florida Medicare Advantage plans: 47 options with 31 $0 premium plans. Spring Hill & Brooksville coverage.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-advantage/hernando-county-florida',
  },
};

const hernandoCountyData = {
  totalBeneficiaries: 89500,
  maPenetration: 52.3,
  averageAge: 74,
  dualEligibleRate: 18.2,
  planCount: 47,
  zeroPremiumPlans: 31,
  averageStarRating: 3.8,
  topCarriers: [
    'Humana',
    'UnitedHealthcare',
    'Anthem Blue Cross Blue Shield',
    'Florida Blue Medicare',
    'Aetna Better Health'
  ]
};

const topPlans = [
  {
    name: 'Humana Gold Plus HMO',
    premium: '$0',
    rating: '4.5 stars',
    network: 'Extensive Florida network with local providers',
    deductible: '$0',
    maxOOP: '$6,700'
  },
  {
    name: 'UnitedHealthcare AARP Medicare Advantage',
    premium: '$0',
    rating: '4 stars',
    network: 'Large nationwide network including Hernando providers',
    deductible: '$0',
    maxOOP: '$8,300'
  },
  {
    name: 'Anthem Blue Cross Blue Shield Medicare Advantage',
    premium: '$29',
    rating: '4 stars',
    network: 'Florida Blue network with Spring Hill specialists',
    deductible: '$0',
    maxOOP: '$7,550'
  }
];

const healthcareResources = [
  {
    name: 'Oak Hill Hospital',
    type: 'Major Hospital',
    location: 'Brooksville',
    description: 'Full-service acute care hospital serving Hernando County'
  },
  {
    name: 'Spring Hill Regional Hospital',
    type: 'Regional Hospital',
    location: 'Spring Hill',
    description: 'Community hospital with emergency and specialty services'
  },
  {
    name: 'BayCare Medical Group',
    type: 'Primary Care Network',
    location: 'Multiple locations',
    description: 'Comprehensive primary care and specialty services'
  },
  {
    name: 'AdventHealth Centra Care',
    type: 'Urgent Care Network',
    location: 'Spring Hill, Brooksville',
    description: 'Walk-in urgent care and family medicine services'
  }
];

const nearbyCounties = [
  {
    name: 'Pasco County',
    distance: '20 miles south',
    planCount: 52,
    highlight: 'Tampa metro access'
  },
  {
    name: 'Citrus County',
    distance: '25 miles north',
    planCount: 39,
    highlight: 'Rural Florida options'
  },
  {
    name: 'Sumter County',
    distance: '30 miles east',
    planCount: 41,
    highlight: 'Villages community'
  }
];

export default function HernandoCountyFloridaPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Hernando County FL', href: '/medicare-advantage/hernando-county-florida' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Hernando County Florida"
        county="Hernando County"
        state="Florida"
        demographics={{
          avgAge: hernandoCountyData.averageAge,
          maPenetrationRate: hernandoCountyData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: hernandoCountyData.totalBeneficiaries,
          availablePlans: hernandoCountyData.planCount,
          zeroPremiumPlans: hernandoCountyData.zeroPremiumPlans,
          pageType: 'county_market'
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
            "name": "El-Mag Insurance - Hernando County FL Medicare Specialists",
            "description": "Medicare Advantage specialists serving Hernando County Florida including Spring Hill and Brooksville. Expert guidance on 47 available Medicare plans.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "331-343-2584",
            "url": "https://elmag-insurance.com/medicare-advantage/hernando-county-florida",
            "areaServed": {
              "@type": "AdministrativeArea", 
              "name": "Hernando County, Florida"
            },
            "serviceType": "Medicare Advantage Plan Comparison and Enrollment"
          }),
        }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Medicare Advantage Hernando County FL 2025: 47 Plans Available
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Compare Medicare Advantage plans in Hernando County Florida. 47 plans available in Spring Hill and Brooksville 
                  with 31 $0 premium options. 52.3% Medicare Advantage enrollment rate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/medicare-plan-comparison-tool" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                    onClick={() => (window as any).trackLandingPageCTA?.('view_plans', 'hero', '/medicare-plan-comparison-tool')}
                  >
                    Compare 47 Plans
                  </Link>
                  <a 
                    href="tel:331-343-2584" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                    onClick={() => (window as any).trackLandingPagePhoneCall?.('hero')}
                  >
                    Call 331-E-HEALTH
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Hernando County Market Overview */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Hernando County FL Medicare Advantage Market Overview 2025
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">{hernandoCountyData.totalBeneficiaries.toLocaleString()}</div>
                  <div className="text-gray-600">Medicare Beneficiaries</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">{hernandoCountyData.planCount}</div>
                  <div className="text-gray-600">MA Plans Available</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{hernandoCountyData.zeroPremiumPlans}</div>
                  <div className="text-gray-600">$0 Premium Plans</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{hernandoCountyData.maPenetration}%</div>
                  <div className="text-gray-600">MA Enrollment Rate</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Hernando County's growing retiree population enjoys excellent Medicare Advantage options. Explore comprehensive coverage including 
                  <Link href="/medicare-advantage" className="text-primary-600 hover:text-primary-700 underline mx-1">Medicare Advantage plans</Link> 
                  and <Link href="/medicare-supplement-plan-f" className="text-primary-600 hover:text-primary-700 underline mx-1">Medicare Supplement options</Link> 
                  for complete healthcare protection.
                </p>
              </div>
            </div>
          </section>

          {/* Top Medicare Advantage Plans */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Top Medicare Advantage Plans in Hernando County
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
                    <div className="border-t pt-3">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Network:</span> {plan.network}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                  Planning for Medicare coverage changes? Learn about the 
                  <Link href="/2025-medicare-advantage-changes-fairfax" className="text-primary-600 hover:text-primary-700 underline mx-1">2025 Medicare Advantage changes</Link> 
                  affecting plans nationwide, including Florida markets.
                </p>
              </div>
            </div>
          </section>

          {/* Healthcare Resources */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Healthcare Resources in Hernando County
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {healthcareResources.map((resource, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{resource.name}</h3>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-semibold">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-primary-600 font-medium mb-2">{resource.location}</p>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Healthcare Planning for Retirement</h3>
                <p className="text-blue-700 mb-4">
                  Hernando County's retiree-friendly environment offers excellent healthcare access. When planning your Medicare coverage, 
                  consider pairing your healthcare strategy with comprehensive retirement income planning.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/annuities" className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm hover:bg-blue-200 transition-colors">
                    Explore Retirement Annuities
                  </Link>
                  <Link href="/medicare-supplement-florida" className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm hover:bg-blue-200 transition-colors">
                    Florida Medicare Supplements
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Hernando County Demographics */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Hernando County Medicare Demographics
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Average Age</h3>
                    <div className="text-4xl font-bold text-primary-600 mb-2">{hernandoCountyData.averageAge}</div>
                    <p className="text-gray-600 text-sm">Higher than Florida average, reflecting strong retiree presence</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Dual Eligible Rate</h3>
                    <div className="text-4xl font-bold text-secondary-600 mb-2">{hernandoCountyData.dualEligibleRate}%</div>
                    <p className="text-gray-600 text-sm">Eligible for both Medicare and Medicaid benefits</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Average Star Rating</h3>
                    <div className="text-4xl font-bold text-yellow-600 mb-2">{hernandoCountyData.averageStarRating}</div>
                    <p className="text-gray-600 text-sm">Above-average plan quality in Florida</p>
                  </div>
                </div>
                <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Top Insurance Carriers</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {hernandoCountyData.topCarriers.map((carrier, index) => (
                      <div key={index} className="text-center p-3 bg-gray-50 rounded">
                        <span className="font-medium text-gray-800">{carrier}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Nearby Counties Comparison */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Nearby Counties and Regional Options
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {nearbyCounties.map((county, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{county.name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{county.distance}</p>
                    <div className="text-2xl font-bold text-secondary-600 mb-2">{county.planCount} Plans</div>
                    <p className="text-gray-600 text-sm">{county.highlight}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Medicare Market Insights</h3>
                <p className="text-gray-600 mb-4">
                  Florida's Medicare markets vary significantly by region. Compare additional markets for comprehensive options:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Florida Markets:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/orange-county-florida" className="text-primary-600 hover:text-primary-700 underline">Orange County (Orlando)</Link></li>
                      <li>• <Link href="/medicare-supplement-florida" className="text-primary-600 hover:text-primary-700 underline">Florida Medicare Supplements</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Southeast Region:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/emory-vs-piedmont-medicare-advantage-atlanta" className="text-primary-600 hover:text-primary-700 underline">Atlanta: Emory vs Piedmont</Link></li>
                      <li>• <Link href="/medicare-advantage/southwest" className="text-primary-600 hover:text-primary-700 underline">Southwest Regional Plans</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Making Your Decision */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Making Your Medicare Decision in Hernando County
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">1</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Check Provider Networks</h3>
                      <p className="text-gray-600 text-sm">Ensure your preferred doctors and hospitals in Spring Hill or Brooksville are covered.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">2</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Compare Plan Benefits</h3>
                      <p className="text-gray-600 text-sm">Review premiums, deductibles, and additional benefits like dental and vision.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">3</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Consider Prescription Drugs</h3>
                      <p className="text-gray-600 text-sm">Verify your medications are covered and check pharmacy network access.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">Special Considerations for Hernando County Residents</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-primary-700">
                    <div>
                      <h4 className="font-semibold mb-2">Transportation Access:</h4>
                      <p>Consider plans with transportation benefits for medical appointments, especially important in more rural areas of the county.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Seasonal Resident Planning:</h4>
                      <p>If you split time between Florida and another state, look for plans with nationwide coverage or guest membership programs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Find Your Perfect Medicare Plan in Hernando County?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Our Florida Medicare specialists understand the unique needs of Hernando County residents 
                and can help you navigate your 47 plan options to find the best coverage for your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPageCTA?.('expert_guidance', 'footer', '/contact')}
                >
                  Get Expert Guidance
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPagePhoneCall?.('footer')}
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