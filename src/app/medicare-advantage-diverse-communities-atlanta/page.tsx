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
  title: 'Medicare Advantage Diverse Communities Atlanta GA 2025 | Best Multicultural Healthcare Plans | Spanish Speaking Providers',
  description: 'Find the best Medicare Advantage plans for diverse communities in Atlanta GA 2025. Compare 52+ plans with Spanish speaking doctors, culturally competent care, and multilingual support. Serving Hispanic, African American, Asian, and LGBTQ+ communities with trusted providers who understand your heritage and health needs.',
  keywords: 'Medicare Advantage diverse communities Atlanta, best multicultural Medicare plans Atlanta 2025, Hispanic Medicare Advantage Atlanta, African American Medicare plans Atlanta, Asian Medicare plans Atlanta, Spanish speaking doctors Medicare Atlanta, bilingual Medicare support Atlanta, cultural competency Medicare Atlanta, community health Medicare Atlanta, diversity healthcare Atlanta, inclusive Medicare plans Atlanta, minority Medicare Advantage Atlanta, Latino Medicare plans Atlanta, culturally sensitive healthcare Atlanta, community Medicare resources Atlanta, diverse provider networks Atlanta, Muslim Medicare plans Atlanta, Korean Medicare Advantage Atlanta, Vietnamese Medicare support Atlanta, LGBTQ Medicare plans Atlanta, affordable Medicare plans diverse communities, Medicare Advantage enrollment diverse populations Atlanta, multicultural senior healthcare Atlanta, ethnic community Medicare guidance Atlanta, faith-based Medicare plans Atlanta, traditional medicine Medicare coverage Atlanta',
  openGraph: {
    title: 'Medicare Advantage Diverse Communities Atlanta GA 2025 | Multicultural Healthcare',
    description: 'Medicare Advantage plans designed for Atlanta\'s diverse communities. Multilingual support, cultural competency, and community-focused care from providers who understand your needs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Diverse Communities Medicare Specialists',
    images: [
      {
        url: '/images/atlanta-diverse-communities-medicare-advantage-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Medicare Advantage Diverse Communities Atlanta GA 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Medicare Advantage Diverse Communities Atlanta GA 2025',
    description: 'Medicare plans for Atlanta\'s diverse communities with multilingual support and cultural competency.',
    images: ['/images/atlanta-diverse-communities-medicare-advantage-2025.jpg']
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-advantage-diverse-communities-atlanta',
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

const atlantaData = {
  totalBeneficiaries: 285000,
  diversePopulation: 68.5,
  hispanicPopulation: 15.2,
  africanAmericanPopulation: 52.4,
  asianPopulation: 4.8,
  planCount: 52,
  multilingualPlans: 38
};

const culturalCompetencyFeatures = [
  {
    feature: 'Multilingual Customer Service',
    description: 'Support available in Spanish, Korean, Vietnamese, and other languages',
    communities: ['Hispanic/Latino', 'Asian American', 'African Immigrant'],
    icon: '🗣️'
  },
  {
    feature: 'Cultural Health Programs',
    description: 'Health education and wellness programs tailored to cultural preferences',
    communities: ['All Communities', 'Faith-Based', 'Traditional Medicine'],
    icon: '🎯'
  },
  {
    feature: 'Community Health Workers',
    description: 'Trained community members who understand local health challenges',
    communities: ['Hispanic/Latino', 'African American', 'Refugee Communities'],
    icon: '👥'
  },
  {
    feature: 'Traditional Medicine Integration',
    description: 'Plans that respect and accommodate traditional healing practices',
    communities: ['Asian American', 'Native American', 'African Heritage'],
    icon: '🌿'
  },
  {
    feature: 'Faith-Based Healthcare',
    description: 'Network providers who understand religious healthcare considerations',
    communities: ['Muslim', 'Jewish', 'Christian', 'Hindu'],
    icon: '🙏'
  },
  {
    feature: 'LGBTQ+ Affirming Care',
    description: 'Providers trained in LGBTQ+ health needs and cultural sensitivity',
    communities: ['LGBTQ+', 'Transgender', 'Same-Sex Couples'],
    icon: '🏳️‍🌈'
  }
];

const communityResources = [
  {
    community: 'Hispanic/Latino Community',
    population: '15.2%',
    resources: [
      'Centro de Salud Community Health Centers',
      'Latin American Association Health Services',
      'Spanish-speaking primary care physicians',
      'Traditional curandera practitioner networks'
    ],
    plans: 'Kaiser Permanente, UnitedHealthcare AARP, Humana'
  },
  {
    community: 'African American Community',
    population: '52.4%',
    resources: [
      'Grady Health System community programs',
      'Morehouse School of Medicine providers',
      'African American church-based health ministries',
      'Sickle cell disease specialty centers'
    ],
    plans: 'Anthem Blue Cross Blue Shield, Aetna, WellCare'
  },
  {
    community: 'Asian American Community',
    population: '4.8%',
    resources: [
      'Asian Health Clinic of Atlanta',
      'Korean American Medical Association providers',
      'Traditional Chinese Medicine practitioners',
      'Vietnamese Health Coalition'
    ],
    plans: 'Kaiser Permanente, Cigna HealthCare, UnitedHealthcare'
  },
  {
    community: 'LGBTQ+ Community',
    population: '12.8%',
    resources: [
      'AID Atlanta healthcare services',
      'Fenway Health Atlanta affiliate providers',
      'LGBTQ+ affirming mental health specialists',
      'Gender-affirming care centers'
    ],
    plans: 'Kaiser Permanente, Aetna, UnitedHealthcare AARP'
  }
];

const languageSupport = [
  {
    language: 'Spanish',
    availability: '38 plans',
    services: ['Phone support', 'Written materials', 'Provider network', 'Pharmacy support'],
    communities: 'Hispanic/Latino, Spanish-speaking'
  },
  {
    language: 'Korean',
    availability: '22 plans',
    services: ['Phone support', 'Key documents', 'Provider referrals'],
    communities: 'Korean American'
  },
  {
    language: 'Vietnamese',
    availability: '18 plans',
    services: ['Phone support', 'Essential materials', 'Community liaisons'],
    communities: 'Vietnamese American'
  },
  {
    language: 'Arabic',
    availability: '15 plans',
    services: ['Phone support', 'Cultural liaisons', 'Religious considerations'],
    communities: 'Middle Eastern, North African'
  }
];

export default function DiverseCommunitiesAtlantaPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Diverse Communities Atlanta', href: '/medicare-advantage-diverse-communities-atlanta' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  React.useEffect(() => {
    // Track advanced page view
    trackMedicareAdvancedPageView(
      'Medicare Advantage Diverse Communities Atlanta',
      {
        pageType: 'diverse_communities',
        totalBeneficiaries: atlantaData.totalBeneficiaries,
        availablePlans: atlantaData.planCount,
        specialMetrics: {
          diversePopulationRate: atlantaData.diversePopulation,
          multilingualPlans: atlantaData.multilingualPlans
        }
      },
      {
        city: 'Atlanta',
        state: 'Georgia',
        region: 'Southeast'
      }
    );

    // Set up advanced scroll tracking
    const cleanup = setupMedicareAdvancedScrollTracking('diverse_communities', [
      { percentage: 25, milestone: 'cultural_features_viewed' },
      { percentage: 50, milestone: 'community_resources_viewed' },
      { percentage: 75, milestone: 'language_support_viewed' },
      { percentage: 90, milestone: 'content_completion' }
    ]);

    return cleanup;
  }, []);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Diverse Communities Atlanta"
        county="Atlanta Metro"
        state="Georgia"
        demographics={{
          avgAge: 68,
        }}
        keyMetrics={{
          totalBeneficiaries: atlantaData.totalBeneficiaries,
          availablePlans: atlantaData.planCount,
          multilingualPlans: atlantaData.multilingualPlans,
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Medicare Advantage Diverse Communities Atlanta",
            "description": "Medicare Advantage plans and guidance for Atlanta's diverse communities with multilingual support and cultural competency.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Atlanta",
              "addressRegion": "GA",
              "addressCountry": "US"
            },
            "telephone": "331-343-2584",
            "areaServed": [
              {
                "@type": "City",
                "name": "Atlanta",
                "sameAs": "https://en.wikipedia.org/wiki/Atlanta"
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
                  Medicare Advantage for Atlanta's Diverse Communities 2025
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Find Medicare Advantage plans that understand and serve Atlanta's diverse communities. 
                  Multilingual support, cultural competency, and community-focused healthcare from providers 
                  who respect your heritage and traditions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/medicare-plan-comparison-tool" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'hero', 'diverse_communities', '/medicare-plan-comparison-tool')}
                  >
                    Find Culturally Competent Plans
                  </Link>
                  <a 
                    href="tel:331-343-2584" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('phone_call', 'hero', 'diverse_communities')}
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
                Best Medicare Advantage Plans for Diverse Communities in Atlanta
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">{atlantaData.diversePopulation}%</div>
                  <div className="text-gray-600">Diverse Population</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">{atlantaData.planCount}</div>
                  <div className="text-gray-600">Available Plans</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{atlantaData.multilingualPlans}</div>
                  <div className="text-gray-600">Multilingual Plans</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">4+</div>
                  <div className="text-gray-600">Languages Supported</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Atlanta's Medicare Advantage market serves one of the most diverse metropolitan areas in the Southeast, 
                  offering the <strong>best multicultural Medicare plans</strong> in Georgia. With {atlantaData.africanAmericanPopulation}% African American, 
                  {atlantaData.hispanicPopulation}% Hispanic/Latino, and growing Asian American populations, top-rated Medicare plans 
                  provide <strong>Spanish speaking doctors</strong>, culturally competent care, and comprehensive multilingual support 
                  for all communities including Buckhead, Midtown, East Atlanta, and surrounding metro areas.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Why Choose Culturally Competent Medicare Plans in Atlanta?</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>52+ Medicare Advantage plans</strong> with diverse provider networks</li>
                    <li>• <strong>Spanish speaking doctors and bilingual staff</strong> at major health systems</li>
                    <li>• Cultural health education programs tailored to your community</li>
                    <li>• Faith-based healthcare options for religious communities</li>
                    <li>• LGBTQ+ affirming providers throughout metro Atlanta</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <p className="text-sm text-blue-600 font-semibold mb-2">Explore Related Medicare Options:</p>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/medicare-advantage-transportation-benefits-nashville" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Transportation Benefits Nashville</Link>
                      <Link href="/medicare-advantage/sacramento-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Sacramento County</Link>
                      <Link href="/inova-vs-kaiser-medicare-advantage-fairfax" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Fairfax Networks</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Cultural Competency Features in Medicare Plans
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {culturalCompetencyFeatures.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-center mb-4">
                      <span className="text-4xl mb-3 block">{feature.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{feature.feature}</h3>
                    </div>
                    <p className="text-gray-600 text-sm text-center mb-4">{feature.description}</p>
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

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Community-Specific Medicare Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {communityResources.map((resource, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{resource.community}</h3>
                      <span className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-xs font-semibold">
                        {resource.population}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Healthcare Resources:</h4>
                      <ul className="text-sm text-gray-600">
                        {resource.resources.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Top Plan Options:</h4>
                      <p className="text-sm text-primary-600 font-medium">{resource.plans}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Multilingual Support Availability
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {languageSupport.map((language, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{language.language}</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {language.availability}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Available Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {language.services.map((service, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t pt-3">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Primary Communities:</span> {language.communities}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Language Access Rights</h3>
                <p className="text-blue-700 mb-4">
                  Under federal law, Medicare plans must provide language assistance services at no cost. 
                  This includes oral interpretation and written translation of vital documents for 
                  non-English speaking members.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Your Rights Include:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Free interpretation services</li>
                      <li>• Translated enrollment materials</li>
                      <li>• Culturally competent care</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Additional Resources:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage" className="hover:underline">All Medicare Advantage Plans</Link></li>
                      <li>• <Link href="/grady-health-system-medicare-advantage-atlanta" className="hover:underline">Grady Health System Medicare</Link></li>
                      <li>• <Link href="/supplemental-insurance" className="hover:underline">Supplemental Coverage</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">Compare Medicare Options in Other Cities:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Link href="/raleigh-tech-innovation-medicare-advantage" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Raleigh Tech Innovation
                    </Link>
                    <Link href="/medicare-advantage/monroe-county-florida" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Monroe County FL
                    </Link>
                    <Link href="/medicare-advantage-transportation-benefits-nashville" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Nashville Benefits
                    </Link>
                    <Link href="/inova-vs-kaiser-medicare-advantage-fairfax" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Fairfax Networks
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Advantage Plans by Atlanta Neighborhood
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Downtown & Midtown Atlanta</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• <Link href="/grady-health-system-medicare-advantage-atlanta" className="text-primary-600 hover:underline">Grady Health System</Link> network plans</li>
                    <li>• Emory Healthcare diverse provider options</li>
                    <li>• Spanish speaking providers at Piedmont Atlanta</li>
                    <li>• LGBTQ+ affirming care centers</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-semibold">
                      42 Plans Available
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">East Atlanta & Decatur</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Hispanic community health centers</li>
                    <li>• DeKalb Medical Center multilingual staff</li>
                    <li>• African American church health ministries</li>
                    <li>• Traditional medicine integration options</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs font-semibold">
                      38 Plans Available
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Gwinnett & Cobb Counties</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Korean American medical providers</li>
                    <li>• Vietnamese Health Coalition partners</li>
                    <li>• WellStar multicultural care programs</li>
                    <li>• Faith-based healthcare networks</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                      45 Plans Available
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Finding the Right Plan for Your Community</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Consider These Factors:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Provider language preferences and cultural competency</li>
                      <li>• Proximity to community health centers and places of worship</li>
                      <li>• Coverage for traditional or complementary medicine</li>
                      <li>• Prescription drug coverage for cultural dietary supplements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Top-Rated Plans for Diverse Communities:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Kaiser Permanente - Comprehensive multilingual support</li>
                      <li>• UnitedHealthcare AARP - Strong diverse provider network</li>
                      <li>• Humana - Cultural health education programs</li>
                      <li>• Anthem Blue Cross - Community partnership initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Find Medicare Plans That Honor Your Heritage
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Every community deserves healthcare that understands their unique needs and cultural values. 
                Our specialists help you find Medicare Advantage plans with the cultural competency and 
                language support your family deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('contact_form', 'footer', 'diverse_communities', '/contact')}
                >
                  Get Personalized Guidance
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('phone_call', 'footer', 'diverse_communities')}
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