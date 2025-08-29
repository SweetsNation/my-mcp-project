import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LocationPageAnalytics from '@/components/LocationPageAnalytics';

export const metadata: Metadata = {
  title: 'Best Medicare Advantage Plans Gwinnett County GA 2025 | Lawrenceville Atlanta Suburbs | Family-Oriented Hispanic Asian Communities',
  description: 'Find the best Medicare Advantage plans in Gwinnett County, GA with comprehensive suburban Atlanta coverage, diverse growing communities, and modern healthcare access. Compare top-rated Medicare plans Lawrenceville, Duluth, Norcross with family-oriented care and multicultural services. Expert Georgia Medicare guidance from licensed agents serving Hispanic, Asian American, and multicultural suburban families.',
  keywords: 'Medicare Advantage Gwinnett County Georgia, best Medicare plans Lawrenceville GA, Duluth Medicare Advantage 2025, Norcross Medicare plans suburban, Buford Medicare GA family, Medicare Advantage Georgia suburbs Atlanta, Medicare enrollment Gwinnett County GA, Atlanta suburbs healthcare plans family, Medicare plans Hispanic families Gwinnett, Medicare plans Asian American Georgia, Georgia Medicare agents suburban, Medicare Advantage Atlanta metro growing, Gwinnett County health insurance diverse, Medicare plans growing communities Georgia, Georgia Medicare enrollment 2025 suburban, Medicare Advantage benefits suburban Atlanta families, Medicare brokers Gwinnett GA multicultural, family Medicare plans suburban Georgia',
  openGraph: {
    title: 'Best Medicare Advantage Plans Gwinnett County GA 2025 | Atlanta Suburbs | Family-Oriented Hispanic Asian Communities',
    description: 'Find top-rated Medicare Advantage plans in Gwinnett County, GA with suburban Atlanta coverage and growing diverse community focus. Better benefits than Original Medicare with modern healthcare networks, family-oriented care, and multicultural services for Hispanic, Asian American, and suburban families.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Medicare Advantage Plans Gwinnett County GA 2025 | Family-Oriented Suburban Care',
    description: 'Compare top-rated Medicare Advantage plans in Gwinnett County, GA with expert guidance. Family-oriented suburban communities and Atlanta metro healthcare specialists serving Hispanic, Asian American, and multicultural families.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-advantage/gwinnett-county-georgia',
  },
};

const gwinnettCountyData = {
  county: 'Gwinnett County',
  state: 'Georgia',
  stateAbbrev: 'GA',
  slug: 'gwinnett-county-georgia',
  totalEnrollment: 142000,
  maPenetrationRate: 38,
  opportunityScore: 84,
  dualEligibleRate: 15,
  competitionLevel: 'High' as const,
  addressableMarket: 87960,
  potentialRevenue: 126662400,
  demographics: {
    avgAge: 68,
    malePercentage: 49,
    disabledPercentage: 10,
    raceDistribution: {
      white: 45,
      black: 24,
      hispanic: 20,
      asian: 9,
      other: 2,
    },
  },
  marketingRecommendations: {
    primaryChannels: ['Healthcare Systems', 'Community Centers', 'Digital Marketing', 'Multicultural Outreach'],
    targetAudience: 'Suburban families, diverse communities, growing population, healthcare professionals',
    messagingThemes: ['Family-oriented care', 'Suburban convenience', 'Cultural diversity', 'Modern healthcare access'],
  },
  keyFeatures: [
    'Fastest-growing county in Georgia with diverse suburban communities',
    'Strong family-oriented healthcare focus with modern medical facilities',
    'Significant Hispanic and Asian American population growth',
    'Atlanta metro suburban access with comprehensive healthcare networks',
    'Modern healthcare infrastructure serving growing diverse population',
  ],
  localInsights: {
    dominantCultures: ['Hispanic/Latino community', 'Asian American community', 'African American community', 'Suburban families'],
    languageConsiderations: 'English primary, Spanish services essential, Korean and other Asian language services growing',
    communityCharacteristics: 'Growing suburban community, family-focused, cultural diversity, modern development',
    healthcareChallenges: 'Rapid growth infrastructure, cultural competency, language services, suburban access',
  },
};

const breadcrumbs = generateMedicareBreadcrumbs('county', 'Gwinnett County, Georgia');
const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://elmag-insurance.com/medicare-advantage/gwinnett-county-georgia',
      name: 'Medicare Advantage Plans Gwinnett County Georgia 2025',
      description: 'Compare Medicare Advantage plans in Gwinnett County, Georgia with expert guidance from licensed agents.',
      url: 'https://elmag-insurance.com/medicare-advantage/gwinnett-county-georgia',
      inLanguage: 'en-US',
      isPartOf: {
        '@id': 'https://elmag-insurance.com/#website'
      },
      about: {
        '@id': 'https://elmag-insurance.com/medicare-advantage/gwinnett-county-georgia/#product'
      },
      mainEntity: {
        '@id': 'https://elmag-insurance.com/medicare-advantage/gwinnett-county-georgia/#product'
      }
    },
    {
      '@type': 'FinancialProduct',
      '@id': 'https://elmag-insurance.com/medicare-advantage/gwinnett-county-georgia/#product',
      name: 'Best Medicare Advantage Plans Gwinnett County Georgia 2025',
      category: 'Health Insurance',
      description: 'Top-rated Medicare Advantage plans in Gwinnett County, GA with growing suburban community focus, family-oriented care, and modern healthcare networks serving Atlanta metro suburbs including Lawrenceville, Duluth, Norcross, and surrounding diverse suburban communities with Hispanic, Asian American, and multicultural family services.',
      keywords: ['Medicare Advantage Gwinnett County', 'best Medicare plans Lawrenceville GA', 'Duluth Medicare Advantage 2025', 'Medicare plans Hispanic families Gwinnett', 'Medicare plans Asian American Georgia', 'Medicare Advantage Georgia suburbs Atlanta', 'Medicare enrollment Gwinnett County GA', 'family Medicare plans suburban Georgia'],
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'Gwinnett County, Georgia',
          containedInPlace: {
            '@type': 'State',
            name: 'Georgia'
          }
        },
        {
          '@type': 'City',
          name: 'Lawrenceville, Georgia'
        },
        {
          '@type': 'City', 
          name: 'Duluth, Georgia'
        },
        {
          '@type': 'City',
          name: 'Norcross, Georgia'
        }
      ],
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        '@id': 'https://elmag-insurance.com/#organization',
        telephone: '331-343-2584',
        url: 'https://elmag-insurance.com',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'GA',
          addressCountry: 'US'
        }
      },
      audience: [
        {
          '@type': 'PeopleAudience',
          audienceType: 'Suburban families',
          geographicArea: {
            '@type': 'AdministrativeArea',
            name: 'Gwinnett County, Georgia'
          }
        },
        {
          '@type': 'PeopleAudience', 
          audienceType: 'Hispanic Medicare beneficiaries',
          geographicArea: {
            '@type': 'AdministrativeArea',
            name: 'Gwinnett County, Georgia'
          }
        },
        {
          '@type': 'PeopleAudience',
          audienceType: 'Asian American Medicare beneficiaries',
          geographicArea: {
            '@type': 'AdministrativeArea', 
            name: 'Gwinnett County, Georgia'
          }
        }
      ],
      offers: {
        '@type': 'Offer',
        name: 'Suburban Family Medicare Advantage Plans',
        description: 'Medicare Advantage plans with family-oriented care and modern healthcare access available in Gwinnett County, Georgia',
        category: 'Family Healthcare',
        eligibleRegion: {
          '@type': 'AdministrativeArea',
          name: 'Gwinnett County, Georgia'
        }
      }
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://elmag-insurance.com/medicare-advantage/gwinnett-county-georgia/#service',
      name: 'El-Mag Insurance Medicare Services - Gwinnett County',
      description: 'Medicare Advantage plan consultation services for Gwinnett County, Georgia residents',
      telephone: '331-343-2584',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.9526,
        longitude: -83.9927
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Gwinnett County, Georgia'
      },
      serviceType: 'Medicare Insurance Consultation',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Medicare Advantage Plans Gwinnett County',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Medicare Advantage Plan Consultation',
              description: 'Free consultation for Medicare Advantage plans in Gwinnett County'
            }
          }
        ]
      }
    }
  ]
};

export default function GwinnettCountyMedicareAdvantagePage() {
  // Calculate diversity index from race distribution
  const diversityIndex = 100 - gwinnettCountyData.demographics.raceDistribution.white;

  return (
    <div className="bg-white">
      {/* Analytics Tracking */}
      <LocationPageAnalytics 
        county={gwinnettCountyData.county}
        state={gwinnettCountyData.state}
        serviceType="Medicare Advantage"
        totalEnrollment={gwinnettCountyData.totalEnrollment}
        maPenetrationRate={gwinnettCountyData.maPenetrationRate}
        phoneNumber="331-343-2584"
        demographicProfile={{
          avgAge: gwinnettCountyData.demographics.avgAge,
          diversityIndex: diversityIndex,
          primaryCommunities: ['Lawrenceville', 'Duluth', 'Norcross', 'Buford', 'Snellville', 'Lilburn']
        }}
        marketMetrics={{
          opportunityScore: gwinnettCountyData.opportunityScore,
          competitionLevel: gwinnettCountyData.competitionLevel,
          addressableMarket: gwinnettCountyData.addressableMarket
        }}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        {/* Hero Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-2 mb-6">
                <span className="text-white font-semibold">🏘️ GWINNETT COUNTY: Growing Suburban Communities</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Medicare Advantage in Gwinnett County, Georgia 2025
              </h1>
              
              <p className="text-xl text-emerald-100 mb-8">
                Serving {gwinnettCountyData.totalEnrollment.toLocaleString()}+ Medicare beneficiaries in Georgia's fastest-growing county 
                with comprehensive suburban healthcare networks and modern medical facilities serving Lawrenceville, Duluth, Norcross, and surrounding diverse suburban communities with family-oriented care and cultural competency.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{gwinnettCountyData.maPenetrationRate}%</div>
                  <div className="text-emerald-100 text-sm">MA Penetration Rate</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{gwinnettCountyData.demographics.raceDistribution.hispanic + gwinnettCountyData.demographics.raceDistribution.asian + gwinnettCountyData.demographics.raceDistribution.black}%</div>
                  <div className="text-emerald-100 text-sm">Diverse Community</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">Growing</div>
                  <div className="text-emerald-100 text-sm">Suburban Hub</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{gwinnettCountyData.opportunityScore}/100</div>
                  <div className="text-emerald-100 text-sm">Market Score</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors"
                >
                  Compare Gwinnett Plans
                </Link>
                <a 
                  href="tel:331-343-2584"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  Call 331-343-2584
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Market Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Gwinnett County Medicare Market</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-emerald-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-emerald-900 mb-6">Growing Suburban Opportunity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-800">Total Medicare Enrollment:</span>
                  <span className="font-semibold text-emerald-900">{gwinnettCountyData.totalEnrollment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-800">Medicare Advantage Penetration:</span>
                  <span className="font-semibold text-emerald-900">{gwinnettCountyData.maPenetrationRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-800">Addressable Market:</span>
                  <span className="font-semibold text-emerald-900">{gwinnettCountyData.addressableMarket.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-800">Dual Eligible Rate:</span>
                  <span className="font-semibold text-emerald-900">{gwinnettCountyData.dualEligibleRate}%</span>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-teal-900 mb-6">Diverse Suburban Demographics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-teal-800">Average Age:</span>
                  <span className="font-semibold text-teal-900">{gwinnettCountyData.demographics.avgAge} years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-teal-800">Hispanic/Latino:</span>
                  <span className="font-semibold text-teal-900">{gwinnettCountyData.demographics.raceDistribution.hispanic}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-teal-800">Asian American:</span>
                  <span className="font-semibold text-teal-900">{gwinnettCountyData.demographics.raceDistribution.asian}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-teal-800">Competition Level:</span>
                  <span className="font-semibold text-teal-900">{gwinnettCountyData.competitionLevel}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🏘️ Why Gwinnett County is a Premier Growing Medicare Market</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {gwinnettCountyData.keyFeatures.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {gwinnettCountyData.keyFeatures.slice(3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Community Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Gwinnett County Communities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg">
              <h3 className="font-semibold text-emerald-800 mb-3">Lawrenceville</h3>
              <div className="space-y-2 text-emerald-700 text-sm">
                <div><strong>Medicare Pop:</strong> 48,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> County seat, diverse suburban</div>
                <div><strong>Healthcare:</strong> Northside Gwinnett Hospital</div>
                <div><strong>Opportunity:</strong> Growing suburban families</div>
              </div>
            </div>
            
            <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-3">Duluth</h3>
              <div className="space-y-2 text-teal-700 text-sm">
                <div><strong>Medicare Pop:</strong> 18,500+ beneficiaries</div>
                <div><strong>Demographics:</strong> Affluent diverse community</div>
                <div><strong>Healthcare:</strong> Gwinnett Medical Center</div>
                <div><strong>Opportunity:</strong> High-income suburban retirees</div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Norcross</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Medicare Pop:</strong> 12,800+ beneficiaries</div>
                <div><strong>Demographics:</strong> Hispanic/Latino hub</div>
                <div><strong>Healthcare:</strong> Bilingual healthcare services</div>
                <div><strong>Opportunity:</strong> Spanish-speaking community</div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Buford</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Medicare Pop:</strong> 15,200+ beneficiaries</div>
                <div><strong>Demographics:</strong> Growing suburban community</div>
                <div><strong>Healthcare:</strong> Northeast Georgia Medical</div>
                <div><strong>Opportunity:</strong> Family-oriented healthcare</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">Snellville</h3>
              <div className="space-y-2 text-yellow-700 text-sm">
                <div><strong>Medicare Pop:</strong> 11,700+ beneficiaries</div>
                <div><strong>Demographics:</strong> Established suburban community</div>
                <div><strong>Healthcare:</strong> Eastside Medical Center</div>
                <div><strong>Opportunity:</strong> Community-focused care</div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">Lilburn</h3>
              <div className="space-y-2 text-indigo-700 text-sm">
                <div><strong>Medicare Pop:</strong> 8,900+ beneficiaries</div>
                <div><strong>Demographics:</strong> Asian American community</div>
                <div><strong>Healthcare:</strong> Multicultural health services</div>
                <div><strong>Opportunity:</strong> Cultural competency focus</div>
              </div>
            </div>
          </div>
        </section>

        {/* Growing Community Focus */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving Gwinnett County's Growing Communities</h2>
          
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Family-Oriented & Multicultural Healthcare</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🏘️ Suburban Family Focus</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span><strong>Family Healthcare:</strong> Plans designed for multi-generational suburban families</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span><strong>Modern Facilities:</strong> State-of-the-art suburban medical centers and specialty care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span><strong>Suburban Convenience:</strong> Healthcare access designed for suburban lifestyle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span><strong>Growth Infrastructure:</strong> Expanding healthcare to match rapid population growth</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🌍 Multicultural Suburban Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span><strong>Hispanic/Latino Services:</strong> 20% population with comprehensive Spanish-speaking care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span><strong>Asian American Healthcare:</strong> Korean, Vietnamese, and other Asian language services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span><strong>Cultural Integration:</strong> Healthcare reflecting diverse suburban community needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span><strong>Community Growth:</strong> Services expanding with demographic diversity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Network */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Gwinnett County Healthcare Network</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-emerald-600 mb-4">🏥 Major Healthcare Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">🏥</span>
                  <span><strong>Northside Hospital Gwinnett:</strong> Premier suburban medical center</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">🏥</span>
                  <span><strong>Gwinnett Medical Center:</strong> Regional healthcare system with multiple locations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">🏥</span>
                  <span><strong>Northeast Georgia Medical Center:</strong> Comprehensive care network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">🏥</span>
                  <span><strong>Eastside Medical Center:</strong> Community-focused healthcare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">🏩</span>
                  <span><strong>Specialty Medical Centers:</strong> Modern suburban specialty care facilities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">🎯 Network Advantages</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">✓</span>
                  <span><strong>Modern Infrastructure:</strong> State-of-the-art facilities designed for growing communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">✓</span>
                  <span><strong>Suburban Accessibility:</strong> Convenient locations throughout Gwinnett County</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">✓</span>
                  <span><strong>Cultural Services:</strong> Multilingual staff and culturally competent care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">✓</span>
                  <span><strong>Family Focus:</strong> Healthcare designed for suburban family needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">✓</span>
                  <span><strong>Growth Adaptation:</strong> Expanding services to match rapid population growth</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-400 p-6 rounded">
            <h4 className="font-semibold text-emerald-800 mb-2">🏘️ Gwinnett County Healthcare Growth:</h4>
            <p className="text-emerald-700">
              Gwinnett County offers Medicare Advantage members access to Georgia's most rapidly expanding suburban healthcare ecosystem. 
              With Northside Hospital Gwinnett, Gwinnett Medical Center, and modern specialty facilities leading suburban medical excellence, 
              Medicare Advantage plans ensure exceptional care that serves Gwinnett County's growing diverse communities with 
              family-oriented healthcare and cultural competency.
            </p>
          </div>
        </section>

        {/* Strategic Marketing Section - Growth Focus */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🏘️ Why Gwinnett County Residents Choose Medicare Advantage</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏘️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Suburban Convenience</h3>
                <p className="text-gray-600 text-sm">Modern healthcare facilities designed for suburban lifestyle with convenient locations throughout Gwinnett County's growing communities.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Family-Oriented Care</h3>
                <p className="text-gray-600 text-sm">Healthcare plans designed for multi-generational families with comprehensive care coordination and family-focused services.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cultural Diversity</h3>
                <p className="text-gray-600 text-sm">Comprehensive multicultural services with Spanish, Korean, and other language support for Georgia's most diverse suburban county.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-emerald-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🏘️ Special Services for Growing Communities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span><strong>Suburban Family Focus:</strong> Healthcare designed for multi-generational family needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span><strong>Hispanic/Latino Services:</strong> Comprehensive Spanish-speaking care and cultural competency</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span><strong>Asian American Healthcare:</strong> Korean, Vietnamese, and multicultural language services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span><strong>Modern Infrastructure:</strong> State-of-the-art facilities matching rapid community growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Community-Specific Benefits */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-800 mb-3">📍 Lawrenceville Area Plans</h4>
              <p className="text-emerald-700 text-sm mb-3">63,200+ Medicare beneficiaries in Lawrenceville and surrounding areas have access to Northside Gwinnett and comprehensive suburban healthcare networks.</p>
              <ul className="text-sm text-emerald-600 space-y-1">
                <li>• Premier suburban healthcare</li>
                <li>• Family-oriented services</li>
                <li>• Modern facility access</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-800 mb-3">📍 North Gwinnett Communities</h4>
              <p className="text-teal-700 text-sm mb-3">46,500+ Medicare enrollees in Duluth, Buford, and surrounding areas benefit from affluent community healthcare and modern medical facilities.</p>
              <ul className="text-sm text-teal-600 space-y-1">
                <li>• Affluent community care</li>
                <li>• Modern medical facilities</li>
                <li>• Comprehensive specialty care</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">📍 South/Central Gwinnett</h4>
              <p className="text-green-700 text-sm mb-3">32,300+ Medicare beneficiaries in Norcross, Snellville, and Lilburn enjoy multicultural healthcare services with language accessibility and cultural competency.</p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Multicultural services</li>
                <li>• Language accessibility</li>
                <li>• Cultural competency</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🏘️ Get Expert Gwinnett County Medicare Guidance</h2>
            <p className="text-emerald-100 mb-6 max-w-3xl mx-auto">
              Navigate Georgia's fastest-growing suburban healthcare landscape with family-oriented Medicare Advantage coverage. 
              Get personalized Georgia Medicare expertise from licensed agents who understand growing diverse communities, 
              suburban family needs, and multicultural healthcare access requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                🏘️ Get Gwinnett Quote
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-emerald-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📞 Call GA Expert
              </a>
            </div>
            <p className="text-emerald-200 text-sm mt-4">
              Free consultation • Licensed Georgia agents • Suburban family healthcare specialists
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}