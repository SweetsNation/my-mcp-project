import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LocationPageAnalytics from '@/components/LocationPageAnalytics';

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans Mecklenburg County NC 2025 | Charlotte Metro Coverage | $0 Premium Plans | Best Medicare Plans North Carolina',
  description: 'Find the best Medicare Advantage plans in Mecklenburg County, NC with Charlotte metro coverage, $0 premium options, and top-rated provider networks. Compare Medicare plans Charlotte NC, Matthews, Huntersville with 5-star ratings and comprehensive benefits. Free enrollment help from licensed North Carolina Medicare agents.',
  keywords: 'Medicare Advantage Mecklenburg County North Carolina, Medicare plans Charlotte NC, best Medicare Advantage Charlotte, Medicare enrollment Charlotte NC, Charlotte Medicare agents, Medicare Advantage North Carolina 2025, $0 premium Medicare plans Charlotte, 5 star Medicare plans Mecklenburg County, Matthews Medicare Advantage, Huntersville Medicare plans, Medicare Advantage enrollment North Carolina, Charlotte healthcare insurance, Medicare plans near me Charlotte NC, Medicare brokers Charlotte, Medicare Advantage vs Original Medicare Charlotte, Medicare open enrollment Charlotte NC, Medicare Part C Charlotte, affordable Medicare plans North Carolina, Medicare Advantage benefits Charlotte',
  openGraph: {
    title: 'Best Medicare Advantage Plans Mecklenburg County NC 2025 | Charlotte Metro | $0 Premium Options',
    description: 'Compare top-rated Medicare Advantage plans in Mecklenburg County, NC. Better benefits than Original Medicare with Charlotte metro provider networks, $0 premiums, and 5-star ratings. Free enrollment assistance from licensed agents.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Medicare Advantage Plans Mecklenburg County NC 2025 | Charlotte Metro Coverage',
    description: 'Find top-rated Medicare Advantage plans in Mecklenburg County, NC with $0 premiums and comprehensive Charlotte metro networks. Free expert guidance from licensed agents.',
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/mecklenburg-county-north-carolina',
  },
};

const mecklenburgCountyData = {
  county: 'Mecklenburg County',
  state: 'North Carolina',
  stateAbbrev: 'NC',
  slug: 'mecklenburg-county-north-carolina',
  totalEnrollment: 89000,
  maPenetrationRate: 38,
  opportunityScore: 82,
  dualEligibleRate: 15,
  competitionLevel: 'High' as const,
  addressableMarket: 55180,
  potentialRevenue: 79459200,
  demographics: {
    avgAge: 71,
    malePercentage: 47,
    disabledPercentage: 12,
    raceDistribution: {
      white: 45,
      black: 35,
      hispanic: 14,
      asian: 4,
      other: 2,
    },
  },
  marketingRecommendations: {
    primaryChannels: ['Community Events', 'Digital Marketing', 'Healthcare Partnerships', 'Faith-Based Outreach'],
    targetAudience: 'Urban seniors, diverse communities, banking/finance retirees, healthcare workers',
    messagingThemes: ['Urban healthcare access', 'Cultural diversity', 'Financial district proximity', 'Comprehensive networks'],
  },
  keyFeatures: [
    'Major metropolitan area with extensive healthcare infrastructure',
    'Diverse population requiring culturally competent care',
    'Strong presence of major health systems and academic medical centers',
    'Banking and finance industry retirees with sophisticated needs',
    'Growing suburban communities with expanding Medicare enrollment',
  ],
  localInsights: {
    dominantCultures: ['African American', 'Hispanic/Latino', 'Banking professionals', 'Healthcare workers'],
    languageConsiderations: 'English and Spanish primary, growing diverse language needs',
    communityCharacteristics: 'Urban core with suburban growth, major employment centers, cultural diversity',
    healthcareChallenges: 'Urban health disparities, transportation access, cultural competency needs',
  },
};

const breadcrumbs = generateMedicareBreadcrumbs('county', 'Mecklenburg County, North Carolina');
const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/mecklenburg-county-north-carolina',
      name: 'Medicare Advantage Plans Mecklenburg County North Carolina 2025',
      description: 'Compare Medicare Advantage plans in Mecklenburg County, North Carolina with expert guidance from licensed agents.',
      url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/mecklenburg-county-north-carolina',
      inLanguage: 'en-US',
      isPartOf: {
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/#website'
      },
      about: {
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/mecklenburg-county-north-carolina/#product'
      },
      mainEntity: {
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/mecklenburg-county-north-carolina/#product'
      }
    },
    {
      '@type': 'FinancialProduct',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/mecklenburg-county-north-carolina/#product',
      name: 'Best Medicare Advantage Plans Mecklenburg County North Carolina 2025',
      category: 'Health Insurance',
      description: 'Top-rated Medicare Advantage plans in Mecklenburg County, NC with 5-star provider networks, $0 premium options, and comprehensive benefits serving Charlotte, Matthews, Huntersville metro area with culturally competent healthcare and expert enrollment assistance.',
      keywords: ['Medicare Advantage Mecklenburg County', 'best Medicare plans Charlotte NC', 'Charlotte Medicare Advantage 2025', '$0 premium Medicare plans Charlotte', '5 star Medicare Advantage North Carolina', 'Medicare enrollment Charlotte NC', 'Medicare agents Charlotte', 'Medicare Advantage vs Original Medicare Charlotte'],
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'Mecklenburg County, North Carolina',
          containedInPlace: {
            '@type': 'State',
            name: 'North Carolina'
          }
        },
        {
          '@type': 'City',
          name: 'Charlotte, North Carolina'
        },
        {
          '@type': 'City', 
          name: 'Matthews, North Carolina'
        },
        {
          '@type': 'City',
          name: 'Huntersville, North Carolina'
        }
      ],
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/#organization',
        telephone: '331-343-2584',
        url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'NC',
          addressCountry: 'US'
        }
      },
      audience: [
        {
          '@type': 'PeopleAudience',
          audienceType: 'Urban seniors',
          geographicArea: {
            '@type': 'AdministrativeArea',
            name: 'Mecklenburg County, North Carolina'
          }
        },
        {
          '@type': 'PeopleAudience', 
          audienceType: 'African American Medicare beneficiaries',
          geographicArea: {
            '@type': 'AdministrativeArea',
            name: 'Mecklenburg County, North Carolina'
          }
        },
        {
          '@type': 'PeopleAudience',
          audienceType: 'Banking and finance retirees',
          geographicArea: {
            '@type': 'AdministrativeArea', 
            name: 'Mecklenburg County, North Carolina'
          }
        }
      ],
      offers: {
        '@type': 'Offer',
        name: '$0 Premium Medicare Advantage Plans',
        description: 'Medicare Advantage plans with $0 monthly premiums available in Mecklenburg County, North Carolina',
        price: '0',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '0',
          priceCurrency: 'USD',
          eligibilityDescription: 'Medicare-eligible residents of Mecklenburg County, North Carolina'
        }
      }
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/mecklenburg-county-north-carolina/#service',
      name: 'El-Mag Insurance Medicare Services - Mecklenburg County',
      description: 'Medicare Advantage plan consultation services for Mecklenburg County, North Carolina residents',
      telephone: '331-343-2584',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.2271,
        longitude: -80.8431
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Mecklenburg County, North Carolina'
      },
      serviceType: 'Medicare Insurance Consultation',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Medicare Advantage Plans Mecklenburg County',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Medicare Advantage Plan Consultation',
              description: 'Free consultation for Medicare Advantage plans in Mecklenburg County'
            }
          }
        ]
      }
    }
  ]
};

export default function MecklenburgCountyMedicareAdvantagePage() {
  // Calculate diversity index from race distribution
  const diversityIndex = 100 - mecklenburgCountyData.demographics.raceDistribution.white;

  return (
    <div className="bg-white">
      {/* Analytics Tracking */}
      <LocationPageAnalytics 
        county={mecklenburgCountyData.county}
        state={mecklenburgCountyData.state}
        serviceType="Medicare Advantage"
        totalEnrollment={mecklenburgCountyData.totalEnrollment}
        maPenetrationRate={mecklenburgCountyData.maPenetrationRate}
        phoneNumber="331-343-2584"
        demographicProfile={{
          avgAge: mecklenburgCountyData.demographics.avgAge,
          diversityIndex: diversityIndex,
          primaryCommunities: ['Charlotte', 'Matthews', 'Huntersville', 'Cornelius', 'Mint Hill', 'Pineville']
        }}
        marketMetrics={{
          opportunityScore: mecklenburgCountyData.opportunityScore,
          competitionLevel: mecklenburgCountyData.competitionLevel,
          addressableMarket: mecklenburgCountyData.addressableMarket
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-2 mb-6">
                <span className="text-white font-semibold">🏙️ MECKLENBURG COUNTY: Charlotte Metro Healthcare</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Medicare Advantage in Mecklenburg County, North Carolina 2025
              </h1>
              
              <p className="text-xl text-blue-100 mb-8">
                Serving {mecklenburgCountyData.totalEnrollment.toLocaleString()}+ Medicare beneficiaries in Charlotte's metropolitan area 
                with comprehensive healthcare networks serving diverse communities across Charlotte, Matthews, Huntersville, and surrounding areas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{mecklenburgCountyData.maPenetrationRate}%</div>
                  <div className="text-blue-100 text-sm">MA Penetration Rate</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{mecklenburgCountyData.demographics.raceDistribution.black + mecklenburgCountyData.demographics.raceDistribution.hispanic}%</div>
                  <div className="text-blue-100 text-sm">Diverse Community</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">Major</div>
                  <div className="text-blue-100 text-sm">Healthcare Hub</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{mecklenburgCountyData.opportunityScore}/100</div>
                  <div className="text-blue-100 text-sm">Market Score</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors"
                >
                  Compare Charlotte Plans
                </Link>
                <a 
                  href="tel:331-343-2584"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Call 331-343-2584
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Market Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Mecklenburg County Medicare Market</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Metropolitan Market Opportunity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Total Medicare Enrollment:</span>
                  <span className="font-semibold text-blue-900">{mecklenburgCountyData.totalEnrollment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Medicare Advantage Penetration:</span>
                  <span className="font-semibold text-blue-900">{mecklenburgCountyData.maPenetrationRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Addressable Market:</span>
                  <span className="font-semibold text-blue-900">{mecklenburgCountyData.addressableMarket.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Dual Eligible Rate:</span>
                  <span className="font-semibold text-blue-900">{mecklenburgCountyData.dualEligibleRate}%</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-6">Diverse Community Profile</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-800">Average Age:</span>
                  <span className="font-semibold text-purple-900">{mecklenburgCountyData.demographics.avgAge} years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-800">African American:</span>
                  <span className="font-semibold text-purple-900">{mecklenburgCountyData.demographics.raceDistribution.black}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-800">Hispanic/Latino:</span>
                  <span className="font-semibold text-purple-900">{mecklenburgCountyData.demographics.raceDistribution.hispanic}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-800">Competition Level:</span>
                  <span className="font-semibold text-purple-900">{mecklenburgCountyData.competitionLevel}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🏙️ Why Mecklenburg County is a Strong Medicare Market</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {mecklenburgCountyData.keyFeatures.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {mecklenburgCountyData.keyFeatures.slice(3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Community Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Mecklenburg County Communities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Charlotte</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Medicare Pop:</strong> 65,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Urban diverse community</div>
                <div><strong>Healthcare:</strong> Major medical centers</div>
                <div><strong>Opportunity:</strong> Large African American population</div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Matthews</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Medicare Pop:</strong> 8,500+ beneficiaries</div>
                <div><strong>Demographics:</strong> Affluent suburban families</div>
                <div><strong>Healthcare:</strong> Atrium Health network access</div>
                <div><strong>Opportunity:</strong> Growing senior population</div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Huntersville</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Medicare Pop:</strong> 6,200+ beneficiaries</div>
                <div><strong>Demographics:</strong> Professional suburban community</div>
                <div><strong>Healthcare:</strong> Lake Norman Regional access</div>
                <div><strong>Opportunity:</strong> Rapid growth area</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">Cornelius</h3>
              <div className="space-y-2 text-yellow-700 text-sm">
                <div><strong>Medicare Pop:</strong> 3,800+ beneficiaries</div>
                <div><strong>Demographics:</strong> Lake community retirees</div>
                <div><strong>Healthcare:</strong> Regional network providers</div>
                <div><strong>Opportunity:</strong> Quality-focused consumers</div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">Mint Hill</h3>
              <div className="space-y-2 text-indigo-700 text-sm">
                <div><strong>Medicare Pop:</strong> 3,200+ beneficiaries</div>
                <div><strong>Demographics:</strong> Family-oriented community</div>
                <div><strong>Healthcare:</strong> Charlotte metro access</div>
                <div><strong>Opportunity:</strong> Suburban convenience needs</div>
              </div>
            </div>
            
            <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-3">Pineville</h3>
              <div className="space-y-2 text-pink-700 text-sm">
                <div><strong>Medicare Pop:</strong> 2,800+ beneficiaries</div>
                <div><strong>Demographics:</strong> Historic community</div>
                <div><strong>Healthcare:</strong> Close to major facilities</div>
                <div><strong>Opportunity:</strong> Community-focused care</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Considerations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving Mecklenburg County's Diverse Communities</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Cultural Competency & Community Outreach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🌍 Urban Diversity Focus</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>African American Community:</strong> Serving 35% of Medicare population with cultural understanding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Hispanic/Latino Outreach:</strong> Spanish language services for 14% of beneficiaries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Faith-Based Partnerships:</strong> Working with churches and community organizations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Community Health Centers:</strong> Access to federally qualified health centers</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🏢 Professional Community Focus</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Banking Industry Retirees:</strong> Understanding corporate benefit transitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Healthcare Workers:</strong> Plans for medical professionals and retirees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Urban Transportation:</strong> Plans considering city transit needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Suburban Growth:</strong> Coverage expanding with metro development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Network */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Mecklenburg County Healthcare Network</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🏥 Major Healthcare Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Atrium Health:</strong> Largest healthcare system in Carolinas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Novant Health:</strong> Major regional healthcare provider</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>CMC Main:</strong> Level I trauma center and teaching hospital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Presbyterian Healthcare:</strong> Comprehensive medical services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏩</span>
                  <span><strong>Specialty Centers:</strong> Cancer, cardiac, and neurological care</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🎯 Network Advantages</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span><strong>Academic Medical Centers:</strong> Access to teaching hospitals and research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span><strong>Urban Accessibility:</strong> Multiple locations throughout metro area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span><strong>Diverse Provider Base:</strong> Culturally competent healthcare professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span><strong>Specialty Care Excellence:</strong> Comprehensive subspecialty coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span><strong>Regional Coordination:</strong> Seamless care across metro area</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">🏙️ Mecklenburg County Healthcare Excellence:</h4>
            <p className="text-blue-700">
              Mecklenburg County offers Medicare Advantage members access to one of the Southeast's most comprehensive 
              healthcare ecosystems. With major health systems, academic medical centers, and culturally diverse provider 
              networks, Medicare Advantage plans ensure high-quality, accessible care that serves Charlotte's dynamic 
              metropolitan community and growing suburban areas.
            </p>
          </div>
        </section>

        {/* Strategic Marketing Section - Urban Focus */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🏙️ Why Mecklenburg County Residents Choose Medicare Advantage</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive Networks</h3>
                <p className="text-gray-600 text-sm">Access to Atrium Health, Novant Health, and Presbyterian Healthcare systems throughout Charlotte metro area with extensive specialist coverage.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cultural Competency</h3>
                <p className="text-gray-600 text-sm">Providers experienced in serving diverse communities with African American, Hispanic/Latino, and multi-cultural healthcare approaches.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">$0 Premium Options</h3>
                <p className="text-gray-600 text-sm">Multiple Medicare Advantage plans in Mecklenburg County offer $0 monthly premiums with comprehensive benefits and prescription coverage.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🏢 Special Benefits for Charlotte Metro Professionals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span><strong>Banking Industry Focus:</strong> Plans understanding corporate benefit transitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span><strong>Healthcare Worker Plans:</strong> Coverage for medical professionals and retirees</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span><strong>Urban Convenience:</strong> Multiple clinic locations throughout metro area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span><strong>Academic Medicine Access:</strong> Connection to research and teaching hospitals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Community-Specific Benefits */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">📍 Charlotte Metro Plans</h4>
              <p className="text-blue-700 text-sm mb-3">65,000+ Medicare beneficiaries in Charlotte have access to major healthcare systems with comprehensive urban networks.</p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Academic medical centers</li>
                <li>• Diverse provider networks</li>
                <li>• Urban accessibility</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">📍 Matthews-Mint Hill</h4>
              <p className="text-green-700 text-sm mb-3">11,700+ Medicare enrollees in Southeast Mecklenburg enjoy suburban convenience with urban healthcare access.</p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Suburban medical facilities</li>
                <li>• Family-focused care</li>
                <li>• Regional network access</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3">📍 North Mecklenburg</h4>
              <p className="text-purple-700 text-sm mb-3">10,000+ Medicare beneficiaries in Huntersville-Cornelius area benefit from Lake Norman regional healthcare.</p>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>• Lake Norman Regional</li>
                <li>• Professional communities</li>
                <li>• Rapid growth coverage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🏙️ Get Expert Mecklenburg County Medicare Guidance</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Navigate Charlotte's diverse healthcare landscape with comprehensive Medicare Advantage coverage. 
              Get personalized North Carolina Medicare expertise from licensed agents who understand urban healthcare 
              needs, cultural diversity, and metropolitan community preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                🏙️ Get Charlotte Quote
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📞 Call NC Expert
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Free consultation • Licensed North Carolina agents • Urban healthcare specialists
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}