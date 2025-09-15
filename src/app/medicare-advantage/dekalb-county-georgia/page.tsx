import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LocationPageAnalytics from '@/components/LocationPageAnalytics';
import StateCountyLinking from '@/components/StateCountyLinking';

export const metadata: Metadata = {
  title: 'Best Medicare Advantage Plans DeKalb County GA 2025 | Atlanta Metro | Diverse Communities | Emory Healthcare Access | African American Seniors',
  description: 'Find the best Medicare Advantage plans in DeKalb County, GA with comprehensive Atlanta metro coverage, diverse community focus, and Emory Healthcare access. Compare top-rated Medicare plans Decatur, Tucker, Stone Mountain with cultural competency and language services. Expert Georgia Medicare guidance from licensed agents serving African American seniors and multicultural communities.',
  keywords: 'Medicare Advantage DeKalb County Georgia, best Medicare plans Atlanta GA, Decatur Medicare Advantage 2025, Medicare plans African American seniors, Tucker Medicare plans GA, Stone Mountain Medicare Advantage, Medicare Advantage Georgia Atlanta metro, Medicare enrollment DeKalb County GA, Atlanta healthcare plans diverse communities, Medicare plans Emory Healthcare, Georgia Medicare agents multicultural, Medicare Advantage Atlanta metro 2025, DeKalb County health insurance diversity, Medicare plans diverse communities Georgia, Georgia Medicare enrollment African American, Medicare Advantage benefits Atlanta, Medicare brokers DeKalb GA, multicultural Medicare plans Georgia, cultural competency Medicare Atlanta, Spanish Medicare plans Georgia',
  openGraph: {
    title: 'Best Medicare Advantage Plans DeKalb County GA 2025 | Atlanta Metro Diversity | Emory Healthcare | African American Focus',
    description: 'Find top-rated Medicare Advantage plans in DeKalb County, GA with Atlanta metro coverage and diverse community focus. Better benefits than Original Medicare with Emory Healthcare, cultural competency, and language services for African American seniors and multicultural families.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Medicare Advantage Plans DeKalb County GA 2025 | Atlanta Diversity | Cultural Competency',
    description: 'Compare top-rated Medicare Advantage plans in DeKalb County, GA with expert guidance. Diverse community specialists and Atlanta metro healthcare with cultural competency for African American and multicultural seniors.',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-advantage/dekalb-county-georgia',
  },
};

const dekalbCountyData = {
  county: 'DeKalb County',
  state: 'Georgia',
  stateAbbrev: 'GA',
  slug: 'dekalb-county-georgia',
  totalEnrollment: 156000,
  maPenetrationRate: 41,
  opportunityScore: 87,
  dualEligibleRate: 19,
  competitionLevel: 'High' as const,
  addressableMarket: 92040,
  potentialRevenue: 132537600,
  demographics: {
    avgAge: 69,
    malePercentage: 45,
    disabledPercentage: 12,
    raceDistribution: {
      white: 28,
      black: 54,
      hispanic: 12,
      asian: 4,
      other: 2,
    },
  },
  marketingRecommendations: {
    primaryChannels: ['Community Centers', 'Faith-Based Outreach', 'Healthcare Systems', 'Multicultural Media'],
    targetAudience: 'African American seniors, diverse communities, Atlanta metro residents, healthcare professionals',
    messagingThemes: ['Cultural diversity', 'Community healthcare', 'Atlanta metro access', 'Multicultural services'],
  },
  keyFeatures: [
    'Diverse metropolitan area with majority African American population',
    'Atlanta metro access with comprehensive healthcare networks',
    'Strong community healthcare presence and cultural competency',
    'Emory Healthcare system integration and academic medical centers',
    'Multicultural communities with specialized healthcare needs',
  ],
  localInsights: {
    dominantCultures: ['African American community', 'Hispanic/Latino community', 'Asian American community', 'Atlanta metro professionals'],
    languageConsiderations: 'English primary, Spanish services significant, Asian language services available',
    communityCharacteristics: 'Urban diverse community, Atlanta suburb, healthcare corridor, cultural diversity',
    healthcareChallenges: 'Cultural competency, language barriers, economic healthcare access, transportation needs',
  },
};

const breadcrumbs = generateMedicareBreadcrumbs('county', 'DeKalb County, Georgia');
const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/dekalb-county-georgia',
      name: 'Medicare Advantage Plans DeKalb County Georgia 2025',
      description: 'Compare Medicare Advantage plans in DeKalb County, Georgia with expert guidance from licensed agents.',
      url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/dekalb-county-georgia',
      inLanguage: 'en-US',
      isPartOf: {
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/#website'
      },
      about: {
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/dekalb-county-georgia/#product'
      },
      mainEntity: {
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/dekalb-county-georgia/#product'
      }
    },
    {
      '@type': 'FinancialProduct',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/dekalb-county-georgia/#product',
      name: 'Best Medicare Advantage Plans DeKalb County Georgia 2025',
      category: 'Health Insurance',
      description: 'Top-rated Medicare Advantage plans in DeKalb County, GA with diverse community focus, Emory Healthcare access, cultural competency services, and multicultural provider networks serving Atlanta metro area including Decatur, Tucker, Stone Mountain, and surrounding diverse communities with African American senior focus and language accessibility.',
      keywords: ['Medicare Advantage DeKalb County', 'best Medicare plans Atlanta GA', 'Decatur Medicare Advantage 2025', 'Medicare plans African American seniors', 'Tucker Medicare plans GA', 'Medicare Advantage Georgia Atlanta metro', 'Medicare enrollment DeKalb County GA', 'multicultural Medicare plans Georgia'],
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'DeKalb County, Georgia',
          containedInPlace: {
            '@type': 'State',
            name: 'Georgia'
          }
        },
        {
          '@type': 'City',
          name: 'Decatur, Georgia'
        },
        {
          '@type': 'City', 
          name: 'Tucker, Georgia'
        },
        {
          '@type': 'City',
          name: 'Stone Mountain, Georgia'
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
          addressRegion: 'GA',
          addressCountry: 'US'
        }
      },
      audience: [
        {
          '@type': 'PeopleAudience',
          audienceType: 'African American Medicare beneficiaries',
          geographicArea: {
            '@type': 'AdministrativeArea',
            name: 'DeKalb County, Georgia'
          }
        },
        {
          '@type': 'PeopleAudience', 
          audienceType: 'Diverse communities',
          geographicArea: {
            '@type': 'AdministrativeArea',
            name: 'DeKalb County, Georgia'
          }
        },
        {
          '@type': 'PeopleAudience',
          audienceType: 'Atlanta metro residents',
          geographicArea: {
            '@type': 'AdministrativeArea', 
            name: 'DeKalb County, Georgia'
          }
        }
      ],
      offers: {
        '@type': 'Offer',
        name: 'Diverse Community Medicare Advantage Plans',
        description: 'Medicare Advantage plans with multicultural healthcare services available in DeKalb County, Georgia',
        category: 'Multicultural Healthcare',
        eligibleRegion: {
          '@type': 'AdministrativeArea',
          name: 'DeKalb County, Georgia'
        }
      }
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/dekalb-county-georgia/#service',
      name: 'El-Mag Insurance Medicare Services - DeKalb County',
      description: 'Medicare Advantage plan consultation services for DeKalb County, Georgia residents',
      telephone: '331-343-2584',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.7701,
        longitude: -84.2557
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'DeKalb County, Georgia'
      },
      serviceType: 'Medicare Insurance Consultation',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Medicare Advantage Plans DeKalb County',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Medicare Advantage Plan Consultation',
              description: 'Free consultation for Medicare Advantage plans in DeKalb County'
            }
          }
        ]
      }
    }
  ]
};

export default function DeKalbCountyMedicareAdvantagePage() {
  // Calculate diversity index from race distribution
  const diversityIndex = 100 - dekalbCountyData.demographics.raceDistribution.white;

  return (
    <div className="bg-white">
      {/* Analytics Tracking */}
      <LocationPageAnalytics 
        county={dekalbCountyData.county}
        state={dekalbCountyData.state}
        serviceType="Medicare Advantage"
        totalEnrollment={dekalbCountyData.totalEnrollment}
        maPenetrationRate={dekalbCountyData.maPenetrationRate}
        phoneNumber="331-343-2584"
        demographicProfile={{
          avgAge: dekalbCountyData.demographics.avgAge,
          diversityIndex: diversityIndex,
          primaryCommunities: ['Decatur', 'Tucker', 'Stone Mountain', 'Clarkston', 'Chamblee', 'Doraville']
        }}
        marketMetrics={{
          opportunityScore: dekalbCountyData.opportunityScore,
          competitionLevel: dekalbCountyData.competitionLevel,
          addressableMarket: dekalbCountyData.addressableMarket
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
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-2 mb-6">
                <span className="text-white font-semibold">🌍 DEKALB COUNTY: Atlanta Metro Diverse Communities</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Medicare Advantage in DeKalb County, Georgia 2025
              </h1>
              
              <p className="text-xl text-purple-100 mb-8">
                Serving {dekalbCountyData.totalEnrollment.toLocaleString()}+ Medicare beneficiaries in Atlanta's most diverse county 
                with top-rated Medicare Advantage plans featuring cultural competency, language services, and Emory Healthcare access serving African American seniors, Hispanic/Latino families, and diverse communities in Decatur, Tucker, Stone Mountain, and surrounding multicultural areas with community-focused medical excellence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{dekalbCountyData.maPenetrationRate}%</div>
                  <div className="text-purple-100 text-sm">MA Penetration Rate</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{dekalbCountyData.demographics.raceDistribution.black + dekalbCountyData.demographics.raceDistribution.hispanic + dekalbCountyData.demographics.raceDistribution.asian}%</div>
                  <div className="text-purple-100 text-sm">Diverse Community</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">Atlanta</div>
                  <div className="text-purple-100 text-sm">Metro Hub</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{dekalbCountyData.opportunityScore}/100</div>
                  <div className="text-purple-100 text-sm">Market Score</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors"
                >
                  Compare Atlanta Plans
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">DeKalb County Medicare Market</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-6">Atlanta Metro Opportunity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-800">Total Medicare Enrollment:</span>
                  <span className="font-semibold text-purple-900">{dekalbCountyData.totalEnrollment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-800">Medicare Advantage Penetration:</span>
                  <span className="font-semibold text-purple-900">{dekalbCountyData.maPenetrationRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-800">Addressable Market:</span>
                  <span className="font-semibold text-purple-900">{dekalbCountyData.addressableMarket.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-800">Dual Eligible Rate:</span>
                  <span className="font-semibold text-purple-900">{dekalbCountyData.dualEligibleRate}%</span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-indigo-900 mb-6">Diverse Community Demographics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-indigo-800">Average Age:</span>
                  <span className="font-semibold text-indigo-900">{dekalbCountyData.demographics.avgAge} years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-800">African American:</span>
                  <span className="font-semibold text-indigo-900">{dekalbCountyData.demographics.raceDistribution.black}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-800">Hispanic/Latino:</span>
                  <span className="font-semibold text-indigo-900">{dekalbCountyData.demographics.raceDistribution.hispanic}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-800">Competition Level:</span>
                  <span className="font-semibold text-indigo-900">{dekalbCountyData.competitionLevel}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🌍 Why DeKalb County is a Premier Diverse Medicare Market</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {dekalbCountyData.keyFeatures.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {dekalbCountyData.keyFeatures.slice(3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Community Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">DeKalb County Communities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Decatur</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Medicare Pop:</strong> 58,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Diverse urban community</div>
                <div><strong>Healthcare:</strong> Emory Decatur Hospital</div>
                <div><strong>Opportunity:</strong> Cultural diversity focus</div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">Tucker</h3>
              <div className="space-y-2 text-indigo-700 text-sm">
                <div><strong>Medicare Pop:</strong> 12,500+ beneficiaries</div>
                <div><strong>Demographics:</strong> Suburban diverse community</div>
                <div><strong>Healthcare:</strong> Northlake medical corridor</div>
                <div><strong>Opportunity:</strong> Growing suburban market</div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Stone Mountain</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Medicare Pop:</strong> 8,700+ beneficiaries</div>
                <div><strong>Demographics:</strong> Historic diverse community</div>
                <div><strong>Healthcare:</strong> DeKalb Medical access</div>
                <div><strong>Opportunity:</strong> Community healthcare focus</div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Clarkston</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Medicare Pop:</strong> 4,200+ beneficiaries</div>
                <div><strong>Demographics:</strong> International refugee community</div>
                <div><strong>Healthcare:</strong> Multicultural health services</div>
                <div><strong>Opportunity:</strong> Language services needed</div>
              </div>
            </div>
            
            <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-3">Chamblee</h3>
              <div className="space-y-2 text-teal-700 text-sm">
                <div><strong>Medicare Pop:</strong> 6,800+ beneficiaries</div>
                <div><strong>Demographics:</strong> Hispanic/Latino growing community</div>
                <div><strong>Healthcare:</strong> Bilingual healthcare access</div>
                <div><strong>Opportunity:</strong> Spanish-speaking services</div>
              </div>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">Doraville</h3>
              <div className="space-y-2 text-orange-700 text-sm">
                <div><strong>Medicare Pop:</strong> 3,900+ beneficiaries</div>
                <div><strong>Demographics:</strong> Asian American community hub</div>
                <div><strong>Healthcare:</strong> Asian language healthcare services</div>
                <div><strong>Opportunity:</strong> Cultural competency focus</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Competency Focus */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving DeKalb County's Diverse Communities</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Multicultural Healthcare Excellence</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🌍 African American Community Focus</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Cultural Competency:</strong> Providers experienced with African American healthcare traditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Community Health:</strong> Faith-based partnerships and community center outreach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Chronic Conditions:</strong> Specialized focus on diabetes, hypertension, heart disease</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Economic Access:</strong> Plans addressing healthcare affordability and transportation</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🗺️ Multicultural Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span><strong>Language Services:</strong> Spanish, Korean, Vietnamese, and other language support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span><strong>International Communities:</strong> Refugee and immigrant healthcare navigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span><strong>Cultural Foods:</strong> Understanding dietary needs and cultural nutrition preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span><strong>Community Outreach:</strong> Multicultural centers and ethnic organization partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Network */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">DeKalb County Healthcare Network</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🏥 Major Healthcare Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🏥</span>
                  <span><strong>Emory Healthcare:</strong> Academic medical center with Emory Decatur Hospital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🏥</span>
                  <span><strong>DeKalb Medical:</strong> Regional healthcare system with community focus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🏥</span>
                  <span><strong>Northside Hospital:</strong> Comprehensive care network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🏥</span>
                  <span><strong>Grady Health System:</strong> Safety net and community healthcare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🏩</span>
                  <span><strong>Community Health Centers:</strong> Federally qualified health centers with multicultural services</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">🎯 Network Advantages</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span><strong>Cultural Competency:</strong> Providers trained in diverse community healthcare needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span><strong>Language Services:</strong> Comprehensive interpretation and translation services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span><strong>Community Integration:</strong> Strong partnerships with community organizations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span><strong>Atlanta Metro Access:</strong> Comprehensive urban healthcare corridor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span><strong>Economic Accessibility:</strong> Plans addressing diverse economic needs</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
            <h4 className="font-semibold text-purple-800 mb-2">🌍 DeKalb County Healthcare Diversity:</h4>
            <p className="text-purple-700">
              DeKalb County offers Medicare Advantage members access to Atlanta metro's most culturally competent healthcare ecosystem. 
              With Emory Healthcare leading academic medical excellence, comprehensive community health centers, and strong 
              multicultural healthcare partnerships, Medicare Advantage plans ensure exceptional care that serves DeKalb County's 
              diverse communities with cultural understanding and language accessibility.
            </p>
          </div>
        </section>

        {/* Strategic Marketing Section - Diversity Focus */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🌍 Why DeKalb County Residents Choose Medicare Advantage</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cultural Competency</h3>
                <p className="text-gray-600 text-sm">Healthcare providers trained in diverse community needs with comprehensive language services and cultural understanding.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Atlanta Metro Access</h3>
                <p className="text-gray-600 text-sm">Comprehensive access to Emory Healthcare, DeKalb Medical, and Atlanta metro healthcare networks with urban convenience.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Partnership</h3>
                <p className="text-gray-600 text-sm">Strong partnerships with faith-based organizations, community centers, and multicultural service organizations.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🌍 Special Services for Diverse Communities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span><strong>African American Focus:</strong> Cultural competency and community health partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span><strong>Language Services:</strong> Spanish, Korean, Vietnamese interpretation and materials</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span><strong>International Communities:</strong> Refugee and immigrant healthcare navigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span><strong>Economic Access:</strong> Plans addressing diverse economic and transportation needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Community-Specific Benefits */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3">📍 Decatur Area Plans</h4>
              <p className="text-purple-700 text-sm mb-3">70,500+ Medicare beneficiaries in Decatur and surrounding areas have access to Emory Healthcare and diverse community health networks.</p>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>• Emory academic excellence</li>
                <li>• Urban healthcare access</li>
                <li>• Cultural diversity focus</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-800 mb-3">📍 North DeKalb Communities</h4>
              <p className="text-indigo-700 text-sm mb-3">48,200+ Medicare enrollees in Tucker, Chamblee, and Doraville benefit from multicultural healthcare services and language accessibility.</p>
              <ul className="text-sm text-indigo-600 space-y-1">
                <li>• Multicultural services</li>
                <li>• Language accessibility</li>
                <li>• Suburban convenience</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-pink-800 mb-3">📍 South/East DeKalb</h4>
              <p className="text-pink-700 text-sm mb-3">37,300+ Medicare beneficiaries in Stone Mountain, Clarkston, and surrounding areas enjoy community-focused care with cultural competency.</p>
              <ul className="text-sm text-pink-600 space-y-1">
                <li>• Community health centers</li>
                <li>• Cultural competency</li>
                <li>• Economic accessibility</li>
              </ul>
            </div>
          </div>
        </section>

        {/* State-to-County Linking */}
        <StateCountyLinking 
          serviceType="medicare-advantage"
          currentState="Georgia"
          currentCounty="DeKalb County"
          showStateLink={true}
          maxCounties={4}
        />

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🌍 Get Expert DeKalb County Medicare Guidance</h2>
            <p className="text-purple-100 mb-6 max-w-3xl mx-auto">
              Navigate Atlanta metro's diverse healthcare landscape with culturally competent Medicare Advantage coverage. 
              Get personalized Georgia Medicare expertise from licensed agents who understand multicultural communities, 
              diverse healthcare needs, and Atlanta regional access requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                🌍 Get Atlanta Quote
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📞 Call GA Expert
              </a>
            </div>
            <p className="text-purple-200 text-sm mt-4">
              Free consultation • Licensed Georgia agents • Multicultural healthcare specialists
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}