import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Medicare Advantage Orange County FL 2025 | 58 Plans Available | Orlando Medicare',
  description: 'Compare 58 Medicare Advantage plans in Orange County Florida. Orlando, Winter Park, Apopka coverage. 37 $0 premium plans available. Expert Medicare guidance.',
  keywords: 'Orange County Florida Medicare Advantage, Orlando Medicare plans 2025, Winter Park Medicare Advantage, Florida Medicare plans, Orange County FL Medicare enrollment, Medicare Advantage Orlando',
  openGraph: {
    title: 'Medicare Advantage Orange County FL 2025 | 58 Plans Available',
    description: 'Compare Medicare Advantage plans in Orange County FL. 58 plans available in Orlando metro with comprehensive coverage options.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Orange County FL 2025 | 58 Plans',
    description: 'Orange County Florida Medicare Advantage plans: 58 options with 37 $0 premium plans. Orlando metro coverage.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-advantage/orange-county-florida',
  },
};

const orangeCountyData = {
  totalBeneficiaries: 245000,
  maPenetration: 47.8,
  averageAge: 73,
  dualEligibleRate: 22.1,
  planCount: 58,
  zeroPremiumPlans: 37,
  averageStarRating: 3.9
};

const topPlans = [
  {
    name: 'Florida Blue Medicare HMO',
    premium: '$0',
    rating: '4.5 stars',
    network: 'Comprehensive Florida network including Orlando Health',
    maxOOP: '$6,900',
    specialFeatures: ['Dental & Vision', 'Wellness programs', 'Transportation']
  },
  {
    name: 'Humana Gold Plus HMO',
    premium: '$0',
    rating: '4 stars',
    network: 'Extensive provider network with AdventHealth partnership',
    maxOOP: '$7,550',
    specialFeatures: ['Fitness programs', 'Over-the-counter allowance', 'Telehealth']
  },
  {
    name: 'UnitedHealthcare AARP Medicare Advantage',
    premium: '$15',
    rating: '4 stars',
    network: 'Large nationwide network with local Orlando providers',
    maxOOP: '$8,300',
    specialFeatures: ['Prescription drug coverage', 'Care coordination', 'Wellness rewards']
  }
];

const healthcareResources = [
  {
    name: 'Orlando Health',
    type: 'Health System',
    locations: ['Orlando Regional Medical Center', 'Dr. P. Phillips Hospital', 'Health Central Hospital'],
    specialties: ['Cancer Care', 'Heart & Vascular', 'Neuroscience', 'Trauma Care']
  },
  {
    name: 'AdventHealth',
    type: 'Health System', 
    locations: ['AdventHealth Orlando', 'AdventHealth Winter Park', 'AdventHealth Apopka'],
    specialties: ['Children\'s Health', 'Women\'s Care', 'Orthopedics', 'Behavioral Health']
  },
  {
    name: 'Orlando VA Medical Center',
    type: 'Veterans Affairs',
    locations: ['Orlando VA Medical Center', 'Multiple CBOC locations'],
    specialties: ['Primary Care', 'Mental Health', 'Specialty Care', 'Emergency Services']
  }
];

export default function OrangeCountyFloridaPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Orange County FL', href: '/medicare-advantage/orange-county-florida' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Orange County Florida"
        county="Orange County"
        state="Florida"
        demographics={{
          avgAge: orangeCountyData.averageAge,
          maPenetrationRate: orangeCountyData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: orangeCountyData.totalBeneficiaries,
          availablePlans: orangeCountyData.planCount,
          zeroPremiumPlans: orangeCountyData.zeroPremiumPlans,
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
                  Medicare Advantage Orange County FL 2025: 58 Plans Available
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Compare Medicare Advantage plans in Orange County Florida. 58 plans available in Orlando metro 
                  with 37 $0 premium options. 47.8% Medicare Advantage enrollment rate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/medicare-plan-comparison-tool" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  >
                    Compare 58 Plans
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
                Orange County FL Medicare Market Overview 2025
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
                  Orange County's diverse healthcare landscape offers excellent Medicare Advantage options. Explore 
                  <Link href="/medicare-advantage" className="text-primary-600 hover:text-primary-700 underline mx-1">Medicare Advantage plans</Link> 
                  and <Link href="/medicare-supplement-florida" className="text-primary-600 hover:text-primary-700 underline mx-1">Florida Medicare Supplements</Link> 
                  for comprehensive coverage.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Top Medicare Advantage Plans in Orange County
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
                Orlando Area Healthcare Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {healthcareResources.map((resource, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{resource.name}</h3>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-semibold">
                        {resource.type}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Locations:</h4>
                      <ul className="text-sm text-gray-600">
                        {resource.locations.map((location, idx) => (
                          <li key={idx}>• {location}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {resource.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Regional Medicare Planning</h3>
                <p className="text-blue-700 mb-4">
                  Orange County offers excellent Medicare options, but planning extends beyond healthcare. Consider comprehensive retirement strategies:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Florida Markets:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/hernando-county-florida" className="hover:underline">Hernando County Plans</Link></li>
                      <li>• <Link href="/medicare-supplement-florida" className="hover:underline">Florida Medicare Supplements</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Retirement Planning:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/annuities" className="hover:underline">Retirement Income Annuities</Link></li>
                      <li>• <Link href="/supplemental-insurance" className="hover:underline">Supplemental Coverage</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Find Your Perfect Medicare Plan in Orange County?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Our Florida Medicare specialists understand Orange County's unique healthcare landscape 
                and can help you navigate your 58 plan options.
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