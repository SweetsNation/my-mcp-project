import type { Metadata } from 'next';
import Link from 'next/link';

// Force dynamic rendering to prevent prerendering issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans 2025 | Compare Plans by County | El-Mag Insurance',
  description: 'Compare Medicare Advantage plans across high-opportunity markets. Expert guidance for Fairfax VA, Wake NC, Davidson TN, Fulton GA, and Jefferson AL counties.',
  keywords: 'Medicare Advantage plans, Medicare Advantage 2025, compare Medicare plans, Medicare Advantage by county, Medicare specialists',
  openGraph: {
    title: 'Medicare Advantage Plans 2025 | Compare Plans by County',
    description: 'Expert Medicare Advantage guidance across Virginia, North Carolina, Tennessee, Georgia, and Alabama.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Plans 2025 | Compare Plans by County',
    description: 'Compare Medicare Advantage plans with expert guidance across multiple states.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-advantage',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Medicare Advantage Plans 2025',
  description: 'Compare Medicare Advantage plans and find the best coverage for your needs',
  provider: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com',
  },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Medicare Advantage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Medicare Advantage (Part C) is a private health plan that replaces Original Medicare. It includes all Medicare Part A and Part B benefits, plus often includes prescription drug coverage (Part D) and additional benefits like dental, vision, and hearing aids.',
        },
      },
      {
        '@type': 'Question',
        name: 'When can I enroll in Medicare Advantage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can enroll in Medicare Advantage during the Annual Open Enrollment Period (October 15 - December 7), Medicare Advantage Open Enrollment Period (January 1 - March 31), or when you first become eligible for Medicare.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much do Medicare Advantage plans cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many Medicare Advantage plans have $0 monthly premiums. However, you still pay your Medicare Part B premium. Plans may have deductibles, copayments, and coinsurance that vary by plan.',
        },
      },
    ],
  },
};

const countyData = [
  {
    name: 'Fairfax County, Virginia',
    slug: 'fairfax-county-virginia',
    city: 'Northern Virginia',
    beneficiaries: '112,000',
    maEnrollmentRate: '31.73%',
    starRatedPlans: 16,
    zeroPremiumPlans: 15,
    avgOutOfPocket: '$7,086',
    highlights: ['Inova Health System', 'Kaiser Permanente', 'High-income area'],
  },
  {
    name: 'Prince William County, Virginia',
    slug: 'prince-william-county-virginia',
    city: 'Woodbridge & Manassas',
    beneficiaries: '65,400',
    maEnrollmentRate: '42.1%',
    starRatedPlans: 18,
    zeroPremiumPlans: 14,
    avgOutOfPocket: '$6,850',
    highlights: ['Growing population', 'Mixed demographics', 'Suburban area'],
  },
  {
    name: 'Loudoun County, Virginia',
    slug: 'loudoun-county-virginia',
    city: 'Leesburg & Sterling',
    beneficiaries: '48,200',
    maEnrollmentRate: '28.9%',
    starRatedPlans: 15,
    zeroPremiumPlans: 13,
    avgOutOfPocket: '$7,200',
    highlights: ['High income', 'Tech corridor', 'Fastest growing'],
  },
  {
    name: 'Wake County, North Carolina',
    slug: 'wake-county-north-carolina',
    city: 'Raleigh & Research Triangle',
    beneficiaries: '78,900',
    maEnrollmentRate: '55.1%',
    starRatedPlans: 22,
    zeroPremiumPlans: 18,
    avgOutOfPocket: '$6,900',
    highlights: ['Duke Health', 'UNC REX Healthcare', 'Tech innovation'],
  },
  {
    name: 'Mecklenburg County, North Carolina',
    slug: 'mecklenburg-county-north-carolina',
    city: 'Charlotte Metro',
    beneficiaries: '145,600',
    maEnrollmentRate: '58.3%',
    starRatedPlans: 24,
    zeroPremiumPlans: 19,
    avgOutOfPocket: '$6,750',
    highlights: ['Banking center', 'Atrium Health', 'Urban diversity'],
  },
  {
    name: 'Guilford County, North Carolina',
    slug: 'guilford-county-north-carolina',
    city: 'Greensboro & High Point',
    beneficiaries: '89,200',
    maEnrollmentRate: '61.2%',
    starRatedPlans: 20,
    zeroPremiumPlans: 16,
    avgOutOfPocket: '$7,100',
    highlights: ['Manufacturing', 'Cone Health', 'Mid-size market'],
  },
  {
    name: 'Davidson County, Tennessee',
    slug: 'davidson-county-tennessee',
    city: 'Nashville & Music City',
    beneficiaries: '94,500',
    maEnrollmentRate: '61.7%',
    starRatedPlans: 19,
    zeroPremiumPlans: 12,
    avgOutOfPocket: '$7,250',
    highlights: ['Vanderbilt Medical', 'HCA Healthcare', 'Medium competition'],
  },
  {
    name: 'Knox County, Tennessee',
    slug: 'knox-county-tennessee',
    city: 'Knoxville & East Tennessee',
    beneficiaries: '72,800',
    maEnrollmentRate: '58.4%',
    starRatedPlans: 17,
    zeroPremiumPlans: 13,
    avgOutOfPocket: '$7,150',
    highlights: ['University of Tennessee', 'Covenant Health', 'Mountain region'],
  },
  {
    name: 'Hamilton County, Tennessee',
    slug: 'hamilton-county-tennessee',
    city: 'Chattanooga Metro',
    beneficiaries: '65,200',
    maEnrollmentRate: '64.2%',
    starRatedPlans: 16,
    zeroPremiumPlans: 11,
    avgOutOfPocket: '$7,300',
    highlights: ['Erlanger Health', 'CHI Memorial', 'River city'],
  },
  {
    name: 'Fulton County, Georgia',
    slug: 'fulton-county-georgia',
    city: 'Atlanta Metro',
    beneficiaries: '156,700',
    maEnrollmentRate: '60%',
    starRatedPlans: 25,
    zeroPremiumPlans: 20,
    avgOutOfPocket: '$6,750',
    highlights: ['Emory Healthcare', 'Piedmont Healthcare', 'Diverse communities'],
  },
  {
    name: 'DeKalb County, Georgia',
    slug: 'dekalb-county-georgia',
    city: 'Atlanta Suburbs',
    beneficiaries: '89,400',
    maEnrollmentRate: '62.1%',
    starRatedPlans: 23,
    zeroPremiumPlans: 18,
    avgOutOfPocket: '$6,850',
    highlights: ['Emory Decatur', 'DeKalb Medical', 'Urban diversity'],
  },
  {
    name: 'Gwinnett County, Georgia',
    slug: 'gwinnett-county-georgia',
    city: 'Lawrenceville & Duluth',
    beneficiaries: '118,600',
    maEnrollmentRate: '55.8%',
    starRatedPlans: 21,
    zeroPremiumPlans: 17,
    avgOutOfPocket: '$6,950',
    highlights: ['Northside Gwinnett', 'Eastside Medical', 'Growing suburb'],
  },
  {
    name: 'Jefferson County, Alabama',
    slug: 'jefferson-county-alabama',
    city: 'Birmingham Area',
    beneficiaries: '134,000',
    maEnrollmentRate: '63%',
    starRatedPlans: 14,
    zeroPremiumPlans: 11,
    avgOutOfPocket: '$7,400',
    highlights: ['UAB Medicine', 'St. Vincent\'s', '$0 premium focus'],
  },
  {
    name: 'Madison County, Alabama',
    slug: 'madison-county-alabama',
    city: 'Huntsville & Research Park',
    beneficiaries: '58,900',
    maEnrollmentRate: '59.7%',
    starRatedPlans: 16,
    zeroPremiumPlans: 12,
    avgOutOfPocket: '$7,200',
    highlights: ['Huntsville Hospital', 'Crestwood Medical', 'Tech corridor'],
  },
  {
    name: 'Mobile County, Alabama',
    slug: 'mobile-county-alabama',
    city: 'Mobile Bay Area',
    beneficiaries: '79,300',
    maEnrollmentRate: '67.4%',
    starRatedPlans: 13,
    zeroPremiumPlans: 10,
    avgOutOfPocket: '$7,500',
    highlights: ['Mobile Infirmary', 'Providence Hospital', 'Gulf Coast'],
  },
];

const stateGroups = [
  {
    state: 'Virginia',
    counties: countyData.filter(c => c.name.includes('Virginia')),
    color: 'blue',
  },
  {
    state: 'North Carolina',
    counties: countyData.filter(c => c.name.includes('North Carolina')),
    color: 'green',
  },
  {
    state: 'Tennessee',
    counties: countyData.filter(c => c.name.includes('Tennessee')),
    color: 'purple',
  },
  {
    state: 'Georgia',
    counties: countyData.filter(c => c.name.includes('Georgia')),
    color: 'orange',
  },
  {
    state: 'Alabama',
    counties: countyData.filter(c => c.name.includes('Alabama')),
    color: 'red',
  },
];

export default function MedicareAdvantagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Medicare Advantage Plans 2025
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto">
                Compare Medicare Advantage plans across high-opportunity markets. Expert guidance 
                for Virginia, North Carolina, Tennessee, Georgia, and Alabama counties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#counties" className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg text-center">
                  Compare Plans by County
                </Link>
                <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-lg text-center">
                  331-E-HEALTH
                </a>
              </div>
            </div>
          </section>

          {/* Market Overview Stats */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Advantage Market Overview
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">576,100</div>
                  <div className="text-gray-600">Total Medicare Beneficiaries</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">5</div>
                  <div className="text-gray-600">High-Opportunity Counties</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">96</div>
                  <div className="text-gray-600">4+ Star Rated Plans</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">76</div>
                  <div className="text-gray-600">$0 Premium Plans</div>
                </div>
              </div>
            </div>
          </section>

          {/* Counties by State */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Advantage Plans by State
              </h2>
              <div className="space-y-12">
                {stateGroups.map((stateGroup) => (
                  <div key={stateGroup.state}>
                    <h3 className="text-2xl font-bold text-primary-600 mb-6">
                      {stateGroup.state}
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {stateGroup.counties.map((county) => (
                        <Link
                          key={county.slug}
                          href={`/medicare-advantage/${county.slug}`}
                          className="card hover:shadow-xl transition-all duration-200"
                        >
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">
                            {county.name}
                          </h4>
                          <p className="text-gray-600 mb-4">{county.city}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div>
                              <span className="text-gray-500">Beneficiaries:</span>
                              <span className="font-semibold ml-1">{county.beneficiaries}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">MA Rate:</span>
                              <span className="font-semibold ml-1">{county.maEnrollmentRate}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">4+ Star Plans:</span>
                              <span className="font-semibold ml-1">{county.starRatedPlans}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">$0 Premium:</span>
                              <span className="font-semibold ml-1">{county.zeroPremiumPlans}</span>
                            </div>
                          </div>

                          <div className="mb-4">
                            <span className="text-gray-500 text-sm">Avg Out-of-Pocket Max:</span>
                            <span className="font-semibold ml-1">{county.avgOutOfPocket}</span>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {county.highlights.map((highlight, index) => (
                              <span
                                key={index}
                                className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>

                          <div className="text-primary-600 font-medium">
                            View Plans →
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Medicare Advantage */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Why Choose Medicare Advantage?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Savings</h3>
                  <p className="text-gray-600">
                    Many Medicare Advantage plans offer $0 monthly premiums and lower out-of-pocket costs compared to Original Medicare.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Extra Benefits</h3>
                  <p className="text-gray-600">
                    Access additional benefits like prescription drug coverage, dental, vision, hearing aids, and transportation.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Care Coordination</h3>
                  <p className="text-gray-600">
                    Coordinated care through preferred provider networks and dedicated care management teams.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Find Your Perfect Medicare Advantage Plan?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Our licensed Medicare specialists understand local markets and can help you compare plans 
                from top providers in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
                  Compare Plans Now
                </Link>
                <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center">
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