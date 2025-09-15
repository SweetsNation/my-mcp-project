import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LocationPageAnalytics from '@/components/LocationPageAnalytics';

export const metadata: Metadata = {
  title: 'Premium Medicare Advantage Plans Loudoun County VA 2025 | Executive Healthcare | Concierge Services',
  description: 'Discover premium Medicare Advantage plans in Loudoun County, VA with concierge-level care, technology integration, and executive health services. Serving Ashburn, Leesburg, Sterling professionals with sophisticated Medicare solutions.',
  keywords: 'Medicare Advantage Loudoun County Virginia, premium Medicare plans Ashburn VA, executive Medicare Advantage Leesburg, Sterling Medicare plans VA, concierge Medicare Loudoun, technology Medicare plans Virginia, Medicare Advantage Northern Virginia affluent, premium healthcare Loudoun County, executive Medicare benefits, Medicare plans near Dulles, high-income Medicare Advantage Virginia, Medicare Advantage tech professionals',
  openGraph: {
    title: 'Medicare Advantage Plans Loudoun County Virginia 2025',
    description: 'Find the best Medicare Advantage plans in Loudoun County, VA. Better benefits than Original Medicare with premium provider networks.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Plans Loudoun County Virginia 2025',
    description: 'Compare Medicare Advantage plans in Loudoun County, VA with expert guidance.',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-advantage/loudoun-county-virginia',
  },
};

const loudounCountyData = {
  county: 'Loudoun County',
  state: 'Virginia',
  stateAbbrev: 'VA',
  slug: 'loudoun-county-virginia',
  totalEnrollment: 42000,
  maPenetrationRate: 48,
  opportunityScore: 85,
  dualEligibleRate: 6,
  competitionLevel: 'High' as const,
  addressableMarket: 21840,
  potentialRevenue: 31449600,
  demographics: {
    avgAge: 73,
    malePercentage: 49,
    disabledPercentage: 5,
    raceDistribution: {
      white: 65,
      black: 8,
      hispanic: 13,
      asian: 12,
      other: 2,
    },
  },
  marketingRecommendations: {
    primaryChannels: ['Digital Marketing', 'Professional Networks', 'Direct Mail', 'Community Events'],
    targetAudience: 'Affluent retirees, tech industry professionals, educated consumers',
    messagingThemes: ['Premium quality care', 'Comprehensive benefits', 'Technology integration', 'Executive-level service'],
  },
  keyFeatures: [
    'Wealthiest county in Virginia with sophisticated healthcare preferences',
    'High concentration of educated professionals and federal retirees',
    'Premium provider networks with concierge-level services',
    'Technology-forward healthcare delivery systems',
    'Strong demand for comprehensive benefits and wellness programs',
  ],
  localInsights: {
    dominantCultures: ['Professional class', 'Federal government retirees', 'Technology professionals'],
    languageConsiderations: 'English primary, some Spanish and Asian language needs',
    communityCharacteristics: 'Affluent suburbs, planned communities, technology corridor',
    healthcareChallenges: 'High expectations for service quality, demand for latest medical technology',
  },
};

const breadcrumbs = generateMedicareBreadcrumbs('county', 'Loudoun County, Virginia');
const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/loudoun-county-virginia',
      name: 'Premium Medicare Advantage Plans Loudoun County Virginia 2025',
      description: 'Discover premium Medicare Advantage plans in Loudoun County, Virginia with concierge-level care and executive healthcare services.',
      url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/loudoun-county-virginia',
      inLanguage: 'en-US',
      isPartOf: {
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/#website'
      },
      about: {
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/loudoun-county-virginia/#product'
      },
      mainEntity: {
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/loudoun-county-virginia/#product'
      }
    },
    {
      '@type': 'FinancialProduct',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/loudoun-county-virginia/#product',
      name: 'Premium Medicare Advantage Plans Loudoun County Virginia',
      category: 'Premium Health Insurance',
      description: 'Executive-level Medicare Advantage plans in Loudoun County, VA with concierge services, technology integration, and premium healthcare networks serving Ashburn, Leesburg, and Sterling professionals.',
      keywords: ['Medicare Advantage Loudoun County', 'premium Medicare plans Ashburn VA', 'executive Medicare Advantage Leesburg', 'concierge Medicare Virginia', 'technology Medicare plans'],
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'Loudoun County, Virginia',
          containedInPlace: {
            '@type': 'State',
            name: 'Virginia'
          }
        },
        {
          '@type': 'City',
          name: 'Ashburn, Virginia'
        },
        {
          '@type': 'City', 
          name: 'Leesburg, Virginia'
        },
        {
          '@type': 'City',
          name: 'Sterling, Virginia'
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
          addressRegion: 'VA',
          addressCountry: 'US'
        }
      },
      audience: [
        {
          '@type': 'PeopleAudience',
          audienceType: 'Affluent professionals',
          geographicArea: {
            '@type': 'AdministrativeArea',
            name: 'Loudoun County, Virginia'
          }
        },
        {
          '@type': 'PeopleAudience', 
          audienceType: 'Technology professionals',
          geographicArea: {
            '@type': 'AdministrativeArea',
            name: 'Loudoun County, Virginia'
          }
        },
        {
          '@type': 'PeopleAudience',
          audienceType: 'Federal government retirees',
          geographicArea: {
            '@type': 'AdministrativeArea', 
            name: 'Loudoun County, Virginia'
          }
        }
      ],
      offers: [
        {
          '@type': 'Offer',
          name: 'Premium Medicare Advantage Plans',
          description: 'Executive-level Medicare Advantage plans with concierge services available in Loudoun County, Virginia',
          category: 'Premium Healthcare',
          eligibleRegion: {
            '@type': 'AdministrativeArea',
            name: 'Loudoun County, Virginia'
          }
        },
        {
          '@type': 'Offer',
          name: 'Concierge Healthcare Services',
          description: 'Personalized healthcare coordination and premium medical services',
          category: 'Concierge Medicine'
        }
      ]
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/loudoun-county-virginia/#service',
      name: 'El-Mag Insurance Premium Medicare Services - Loudoun County',
      description: 'Premium Medicare Advantage plan consultation services for Loudoun County, Virginia executives and affluent professionals',
      telephone: '331-343-2584',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 39.1143,
        longitude: -77.6418
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Loudoun County, Virginia'
      },
      serviceType: 'Premium Medicare Insurance Consultation',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Premium Medicare Advantage Plans Loudoun County',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Executive Medicare Advantage Consultation',
              description: 'Premium consultation for executive-level Medicare Advantage plans in Loudoun County'
            }
          }
        ]
      }
    }
  ]
};

export default function LoudounCountyMedicareAdvantagePage() {
  // Calculate diversity index from race distribution
  const diversityIndex = 100 - loudounCountyData.demographics.raceDistribution.white;

  return (
    <div className="bg-white">
      {/* Analytics Tracking */}
      <LocationPageAnalytics 
        county={loudounCountyData.county}
        state={loudounCountyData.state}
        serviceType="Medicare Advantage"
        totalEnrollment={loudounCountyData.totalEnrollment}
        maPenetrationRate={loudounCountyData.maPenetrationRate}
        phoneNumber="331-343-2584"
        demographicProfile={{
          avgAge: loudounCountyData.demographics.avgAge,
          diversityIndex: diversityIndex,
          primaryCommunities: ['Ashburn', 'Leesburg', 'Sterling', 'Herndon/Reston Border', 'Purcellville', 'Lansdowne']
        }}
        marketMetrics={{
          opportunityScore: loudounCountyData.opportunityScore,
          competitionLevel: loudounCountyData.competitionLevel,
          addressableMarket: loudounCountyData.addressableMarket
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
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-2 mb-6">
                <span className="text-white font-semibold">💎 LOUDOUN COUNTY: Premium Healthcare Market</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Medicare Advantage in Loudoun County, Virginia 2025
              </h1>
              
              <p className="text-xl text-purple-100 mb-8">
                Serving {loudounCountyData.totalEnrollment.toLocaleString()}+ Medicare beneficiaries in Virginia's wealthiest county 
                with premium healthcare networks in Ashburn, Leesburg, Sterling, and across the technology corridor.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{loudounCountyData.maPenetrationRate}%</div>
                  <div className="text-purple-100 text-sm">MA Penetration Rate</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">#1</div>
                  <div className="text-purple-100 text-sm">Wealthiest County</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">Premium</div>
                  <div className="text-purple-100 text-sm">Provider Networks</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{loudounCountyData.opportunityScore}/100</div>
                  <div className="text-purple-100 text-sm">Market Score</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors"
                >
                  Compare Loudoun Plans
                </Link>
                <a 
                  href="tel:331-343-2584"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Call 331-343-2584
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Market Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Loudoun County Medicare Market</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-6">Premium Market Opportunity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-800">Total Medicare Enrollment:</span>
                  <span className="font-semibold text-purple-900">{loudounCountyData.totalEnrollment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-800">Medicare Advantage Penetration:</span>
                  <span className="font-semibold text-purple-900">{loudounCountyData.maPenetrationRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-800">Addressable Market:</span>
                  <span className="font-semibold text-purple-900">{loudounCountyData.addressableMarket.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-800">Dual Eligible Rate:</span>
                  <span className="font-semibold text-purple-900">{loudounCountyData.dualEligibleRate}% (Low)</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Affluent Demographics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Average Age:</span>
                  <span className="font-semibold text-blue-900">{loudounCountyData.demographics.avgAge} years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Asian Population:</span>
                  <span className="font-semibold text-blue-900">{loudounCountyData.demographics.raceDistribution.asian}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Hispanic Population:</span>
                  <span className="font-semibold text-blue-900">{loudounCountyData.demographics.raceDistribution.hispanic}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Competition Level:</span>
                  <span className="font-semibold text-blue-900">{loudounCountyData.competitionLevel}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">💎 Why Loudoun County is a Premium Medicare Market</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {loudounCountyData.keyFeatures.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⭐</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {loudounCountyData.keyFeatures.slice(3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-500 mr-3 mt-1">⭐</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Community Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Loudoun County Premium Communities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Ashburn</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Medicare Pop:</strong> 12,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Affluent tech professionals</div>
                <div><strong>Healthcare:</strong> Inova Loudoun Hospital</div>
                <div><strong>Opportunity:</strong> Premium benefit packages</div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Leesburg</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Medicare Pop:</strong> 8,500+ beneficiaries</div>
                <div><strong>Demographics:</strong> Historic town, mixed income</div>
                <div><strong>Healthcare:</strong> Regional medical facilities</div>
                <div><strong>Opportunity:</strong> Diverse plan options</div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Sterling</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Medicare Pop:</strong> 6,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Federal employees</div>
                <div><strong>Healthcare:</strong> Proximity to multiple networks</div>
                <div><strong>Opportunity:</strong> Government retiree plans</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">Herndon/Reston Border</h3>
              <div className="space-y-2 text-yellow-700 text-sm">
                <div><strong>Medicare Pop:</strong> 4,500+ beneficiaries</div>
                <div><strong>Demographics:</strong> High-tech corridor</div>
                <div><strong>Healthcare:</strong> Corporate executive plans</div>
                <div><strong>Opportunity:</strong> Comprehensive coverage</div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">Purcellville</h3>
              <div className="space-y-2 text-indigo-700 text-sm">
                <div><strong>Medicare Pop:</strong> 2,800+ beneficiaries</div>
                <div><strong>Demographics:</strong> Rural-suburban affluent</div>
                <div><strong>Healthcare:</strong> Commuter access plans</div>
                <div><strong>Opportunity:</strong> Quality-focused benefits</div>
              </div>
            </div>
            
            <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-3">Lansdowne</h3>
              <div className="space-y-2 text-pink-700 text-sm">
                <div><strong>Medicare Pop:</strong> 3,200+ beneficiaries</div>
                <div><strong>Demographics:</strong> Planned luxury community</div>
                <div><strong>Healthcare:</strong> Concierge-style services</div>
                <div><strong>Opportunity:</strong> Premium plan features</div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Services Focus */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Premium Healthcare Expectations in Loudoun County</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Executive-Level Healthcare Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">💎 Premium Care Expectations</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Concierge Medicine Options:</strong> Personalized, high-touch healthcare</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Latest Medical Technology:</strong> Advanced diagnostic and treatment options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Minimal Wait Times:</strong> Efficient appointment scheduling and access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Comprehensive Wellness:</strong> Preventive and lifestyle medicine focus</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🌐 Technology Integration</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Telemedicine Leadership:</strong> Advanced virtual care platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Digital Health Tools:</strong> Apps and online portals for health management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Electronic Records:</strong> Seamless information sharing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>AI-Enhanced Care:</strong> Data-driven treatment recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Network */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Loudoun County Premium Healthcare Network</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🏥 Premium Healthcare Facilities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🏥</span>
                  <span><strong>Inova Loudoun Hospital:</strong> Award-winning regional medical center</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🏥</span>
                  <span><strong>Virginia Hospital Center:</strong> Extended network access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🏥</span>
                  <span><strong>Johns Hopkins ACG:</strong> Academic medical center partnership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🏥</span>
                  <span><strong>Kaiser Permanente:</strong> Integrated care model</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🏩</span>
                  <span><strong>Specialty Centers:</strong> Cancer, cardiac, orthopedic excellence</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">⭐ Network Excellence</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⭐</span>
                  <span><strong>DC Metro Access:</strong> World-class medical facilities nearby</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⭐</span>
                  <span><strong>Academic Medicine:</strong> Teaching hospital partnerships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⭐</span>
                  <span><strong>Specialist Networks:</strong> Comprehensive subspecialty coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⭐</span>
                  <span><strong>Innovation Centers:</strong> Clinical trial and research access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⭐</span>
                  <span><strong>Concierge Options:</strong> Premium service tiers available</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
            <h4 className="font-semibold text-purple-800 mb-2">💎 Loudoun County Healthcare Excellence:</h4>
            <p className="text-purple-700">
              As Virginia's wealthiest county, Loudoun County sets the standard for premium Medicare Advantage care. 
              Members enjoy access to the most advanced medical facilities, innovative treatment options, and 
              personalized healthcare services designed for discerning professionals and affluent retirees who 
              expect nothing less than excellence in their healthcare experience.
            </p>
          </div>
        </section>

        {/* Premium Marketing Section - Executive Focus */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">💎 Why Loudoun County Executives Choose Premium Medicare Advantage</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Concierge-Level Care</h3>
                <p className="text-gray-600 text-sm">Premium Medicare Advantage plans in Loudoun County offer concierge medicine options with personalized healthcare coordination and minimal wait times for busy professionals.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technology Integration</h3>
                <p className="text-gray-600 text-sm">Advanced telemedicine platforms, digital health tools, and AI-enhanced care coordination designed for tech-savvy Ashburn and Sterling professionals.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Executive Health Services</h3>
                <p className="text-gray-600 text-sm">Comprehensive wellness programs, preventive screenings, and executive physical packages through Inova Loudoun Hospital and premier network providers.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🏛️ Federal Retiree & Tech Professional Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span><strong>FEHB Coordination:</strong> Plans that complement federal employee health benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span><strong>Corporate Executive Networks:</strong> Access to premier medical facilities</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span><strong>Travel Benefits:</strong> Worldwide coverage for frequent business travelers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span><strong>Premium Specialists:</strong> Access to top-tier medical specialists in DC area</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Community-Specific Premium Benefits */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">📍 Ashburn Premium Plans</h4>
              <p className="text-blue-700 text-sm mb-3">12,000+ Medicare beneficiaries in Ashburn's tech corridor enjoy executive-level Medicare Advantage plans with cutting-edge healthcare technology.</p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Inova Loudoun Hospital access</li>
                <li>• Tech professional focused</li>
                <li>• Advanced telemedicine</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3">📍 Leesburg Executive Care</h4>
              <p className="text-purple-700 text-sm mb-3">8,500+ Medicare enrollees in historic Leesburg benefit from premium plans featuring regional medical facilities and concierge services.</p>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>• Historic community healthcare</li>
                <li>• Mixed-income plan options</li>
                <li>• Regional medical access</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-3">📍 Sterling Federal Benefits</h4>
              <p className="text-yellow-700 text-sm mb-3">6,000+ Medicare beneficiaries in Sterling enjoy specialized plans coordinating with federal retirement benefits and government healthcare systems.</p>
              <ul className="text-sm text-yellow-600 space-y-1">
                <li>• Federal retiree focus</li>
                <li>• Government benefit coordination</li>
                <li>• Multiple network access</li>
              </ul>
            </div>
          </div>

          {/* Premium Value Proposition */}
          <div className="mt-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">💼 Why High-Income Loudoun County Residents Prefer Medicare Advantage</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600">$0</div>
                <div className="text-sm text-gray-600">Premium Options Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Concierge Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Worldwide Emergency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">Premium</div>
                <div className="text-sm text-gray-600">Specialist Networks</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">💎 Get Premium Loudoun County Medicare Guidance</h2>
            <p className="text-purple-100 mb-6 max-w-3xl mx-auto">
              Experience Medicare Advantage coverage that matches Loudoun County's premium lifestyle. Get personalized 
              Northern Virginia Medicare expertise from licensed agents who understand affluent retiree needs, 
              technology integration, and executive-level healthcare service expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                💎 Get Premium Loudoun Quote
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📞 Call Virginia Expert
              </a>
            </div>
            <p className="text-purple-200 text-sm mt-4">
              Free consultation • Licensed Virginia agents • Premium plan specialists
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}