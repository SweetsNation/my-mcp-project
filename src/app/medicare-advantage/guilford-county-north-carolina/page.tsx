import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LocationPageAnalytics from '@/components/LocationPageAnalytics';

export const metadata: Metadata = {
  title: 'Affordable Medicare Advantage Plans Guilford County NC 2025 | Greensboro-High Point | Best Medicare Plans North Carolina Triad',
  description: 'Find affordable Medicare Advantage plans in Guilford County, NC with comprehensive Greensboro-High Point coverage, low-cost options, and diverse provider networks. Compare Medicare plans Greensboro NC, High Point, Jamestown with expert guidance from licensed North Carolina agents. Best Medicare Advantage benefits for working-class retirees.',
  keywords: 'Medicare Advantage Guilford County North Carolina, affordable Medicare plans Greensboro NC, High Point Medicare Advantage, Medicare enrollment Guilford County NC, Greensboro Medicare agents, Medicare Advantage North Carolina Triad 2025, low cost Medicare plans Guilford County, Medicare plans working class retirees, Jamestown Medicare Advantage, UNCG Medicare plans, Medicare Advantage vs Original Medicare Greensboro, Medicare open enrollment Guilford County, Medicare Part C North Carolina, Greensboro healthcare insurance, Medicare brokers High Point NC, affordable Medicare plans manufacturing workers, Medicare Advantage benefits Triad region',
  openGraph: {
    title: 'Affordable Medicare Advantage Plans Guilford County NC 2025 | Greensboro-High Point | Working-Class Friendly',
    description: 'Find affordable Medicare Advantage plans in Guilford County, NC with better benefits than Original Medicare. Greensboro-High Point provider networks with low-cost options for working-class retirees and manufacturing heritage families.',
    type: 'website',
    locale: 'en_US',
  ,
      images: [
        {
          url: 'https://www.elmaginsurance.com/images/og-medicare-advantage.jpg',
          width: 1200,
          height: 630,
          alt: 'Medicare Advantage Plans - El-Mag Insurance',
        },
      ],
    },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Medicare Advantage Plans Guilford County NC 2025 | Greensboro-High Point Coverage',
    description: 'Compare affordable Medicare Advantage plans in Guilford County, NC with expert guidance. Low-cost options for working-class retirees in Greensboro-High Point area.',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-advantage/guilford-county-north-carolina',
  },
};

const guilfordCountyData = {
  county: 'Guilford County',
  state: 'North Carolina',
  stateAbbrev: 'NC',
  slug: 'guilford-county-north-carolina',
  totalEnrollment: 78000,
  maPenetrationRate: 35,
  opportunityScore: 76,
  dualEligibleRate: 18,
  competitionLevel: 'Medium' as const,
  addressableMarket: 50700,
  potentialRevenue: 73008000,
  demographics: {
    avgAge: 72,
    malePercentage: 46,
    disabledPercentage: 14,
    raceDistribution: {
      white: 48,
      black: 38,
      hispanic: 9,
      asian: 3,
      other: 2,
    },
  },
  marketingRecommendations: {
    primaryChannels: ['Community Centers', 'Faith-Based Outreach', 'Healthcare Partnerships', 'Local Media'],
    targetAudience: 'Working-class retirees, diverse communities, university affiliates, manufacturing workers',
    messagingThemes: ['Affordable healthcare', 'Community accessibility', 'Educational partnerships', 'Manufacturing legacy'],
  },
  keyFeatures: [
    'Triad metropolitan area with strong community healthcare focus',
    'Diverse population with significant African American representation',
    'University presence providing educational healthcare partnerships',
    'Manufacturing heritage with blue-collar retiree community',
    'Growing suburban areas with expanding Medicare enrollment',
  ],
  localInsights: {
    dominantCultures: ['African American', 'Manufacturing workers', 'University affiliates', 'Historic communities'],
    languageConsiderations: 'English primary, Spanish services for growing Hispanic population',
    communityCharacteristics: 'Blue-collar heritage, educational presence, diverse urban-suburban mix',
    healthcareChallenges: 'Rural access gaps, economic healthcare barriers, transportation needs',
  },
};

const breadcrumbs = generateMedicareBreadcrumbs('county', 'Guilford County, North Carolina');
const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbs);

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/guilford-county-north-carolina',
      name: 'Medicare Advantage Plans Guilford County North Carolina 2025',
      description: 'Compare Medicare Advantage plans in Guilford County, North Carolina with expert guidance from licensed agents.',
      url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/guilford-county-north-carolina',
      inLanguage: 'en-US',
      isPartOf: {
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/#website'
      },
      about: {
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/guilford-county-north-carolina/#product'
      },
      mainEntity: {
        '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/guilford-county-north-carolina/#product'
      }
    },
    {
      '@type': 'FinancialProduct',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/guilford-county-north-carolina/#product',
      name: 'Affordable Medicare Advantage Plans Guilford County North Carolina 2025',
      category: 'Health Insurance',
      description: 'Low-cost Medicare Advantage plans in Guilford County, NC with affordable provider networks serving Greensboro, High Point, Jamestown, and Triad communities with accessible healthcare for working-class retirees and manufacturing heritage families.',
      keywords: ['Medicare Advantage Guilford County', 'affordable Medicare plans Greensboro NC', 'High Point Medicare Advantage 2025', 'low cost Medicare Guilford County', 'Medicare Advantage North Carolina Triad', 'Medicare plans working class retirees', 'Greensboro Medicare enrollment', 'affordable Medicare plans manufacturing workers'],
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'Guilford County, North Carolina',
          containedInPlace: {
            '@type': 'State',
            name: 'North Carolina'
          }
        },
        {
          '@type': 'City',
          name: 'Greensboro, North Carolina'
        },
        {
          '@type': 'City', 
          name: 'High Point, North Carolina'
        },
        {
          '@type': 'City',
          name: 'Jamestown, North Carolina'
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
          audienceType: 'Working-class retirees',
          geographicArea: {
            '@type': 'AdministrativeArea',
            name: 'Guilford County, North Carolina'
          }
        },
        {
          '@type': 'PeopleAudience', 
          audienceType: 'African American Medicare beneficiaries',
          geographicArea: {
            '@type': 'AdministrativeArea',
            name: 'Guilford County, North Carolina'
          }
        },
        {
          '@type': 'PeopleAudience',
          audienceType: 'Manufacturing retirees',
          geographicArea: {
            '@type': 'AdministrativeArea', 
            name: 'Guilford County, North Carolina'
          }
        }
      ],
      offers: {
        '@type': 'Offer',
        name: 'Affordable Medicare Advantage Plans',
        description: 'Medicare Advantage plans with affordable premiums available in Guilford County, North Carolina',
        category: 'Affordable Healthcare',
        eligibleRegion: {
          '@type': 'AdministrativeArea',
          name: 'Guilford County, North Carolina'
        }
      }
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/guilford-county-north-carolina/#service',
      name: 'El-Mag Insurance Medicare Services - Guilford County',
      description: 'Medicare Advantage plan consultation services for Guilford County, North Carolina residents',
      telephone: '331-343-2584',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.0726,
        longitude: -79.7920
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Guilford County, North Carolina'
      },
      serviceType: 'Medicare Insurance Consultation',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Medicare Advantage Plans Guilford County',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Medicare Advantage Plan Consultation',
              description: 'Free consultation for Medicare Advantage plans in Guilford County'
            }
          }
        ]
      }
    }
  ]
};

export default function GuilfordCountyMedicareAdvantagePage() {
  // Calculate diversity index from race distribution
  const diversityIndex = 100 - guilfordCountyData.demographics.raceDistribution.white;

  return (
    <div className="bg-white">
      {/* Analytics Tracking */}
      <LocationPageAnalytics 
        county={guilfordCountyData.county}
        state={guilfordCountyData.state}
        serviceType="Medicare Advantage"
        totalEnrollment={guilfordCountyData.totalEnrollment}
        maPenetrationRate={guilfordCountyData.maPenetrationRate}
        phoneNumber="331-343-2584"
        demographicProfile={{
          avgAge: guilfordCountyData.demographics.avgAge,
          diversityIndex: diversityIndex,
          primaryCommunities: ['Greensboro', 'High Point', 'Jamestown', 'Summerfield', 'Stokesdale', 'Gibsonville']
        }}
        marketMetrics={{
          opportunityScore: guilfordCountyData.opportunityScore,
          competitionLevel: guilfordCountyData.competitionLevel,
          addressableMarket: guilfordCountyData.addressableMarket
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
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-2 mb-6">
                <span className="text-white font-semibold">🌳 GUILFORD COUNTY: Triad Community Healthcare</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Medicare Advantage in Guilford County, North Carolina 2025
              </h1>
              
              <p className="text-xl text-green-100 mb-8">
                Serving {guilfordCountyData.totalEnrollment.toLocaleString()}+ Medicare beneficiaries in the Triad region 
                with affordable healthcare networks and low-cost Medicare Advantage plans designed for working-class retirees, manufacturing heritage families, and diverse communities across Greensboro, High Point, Jamestown, and surrounding areas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{guilfordCountyData.maPenetrationRate}%</div>
                  <div className="text-green-100 text-sm">MA Penetration Rate</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{guilfordCountyData.demographics.raceDistribution.black + guilfordCountyData.demographics.raceDistribution.hispanic}%</div>
                  <div className="text-green-100 text-sm">Diverse Community</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">Triad</div>
                  <div className="text-green-100 text-sm">Healthcare Hub</div>
                </div>
                <div className="bg-white bg-opacity-15 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{guilfordCountyData.opportunityScore}/100</div>
                  <div className="text-green-100 text-sm">Market Score</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors"
                >
                  Compare Greensboro Plans
                </Link>
                <a 
                  href="tel:331-343-2584"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white hover:text-green-600 transition-colors"
                >
                  Call 331-343-2584
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Market Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Guilford County Medicare Market</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-green-900 mb-6">Triad Market Opportunity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-green-800">Total Medicare Enrollment:</span>
                  <span className="font-semibold text-green-900">{guilfordCountyData.totalEnrollment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-800">Medicare Advantage Penetration:</span>
                  <span className="font-semibold text-green-900">{guilfordCountyData.maPenetrationRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-800">Addressable Market:</span>
                  <span className="font-semibold text-green-900">{guilfordCountyData.addressableMarket.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-800">Dual Eligible Rate:</span>
                  <span className="font-semibold text-green-900">{guilfordCountyData.dualEligibleRate}%</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Community Demographics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Average Age:</span>
                  <span className="font-semibold text-blue-900">{guilfordCountyData.demographics.avgAge} years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">African American:</span>
                  <span className="font-semibold text-blue-900">{guilfordCountyData.demographics.raceDistribution.black}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Hispanic/Latino:</span>
                  <span className="font-semibold text-blue-900">{guilfordCountyData.demographics.raceDistribution.hispanic}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Competition Level:</span>
                  <span className="font-semibold text-blue-900">{guilfordCountyData.competitionLevel}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🌳 Why Guilford County is an Attractive Medicare Market</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {guilfordCountyData.keyFeatures.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {guilfordCountyData.keyFeatures.slice(3).map((feature, index) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Guilford County Communities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Greensboro</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Medicare Pop:</strong> 48,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Diverse urban community</div>
                <div><strong>Healthcare:</strong> Moses Cone Health System</div>
                <div><strong>Opportunity:</strong> Large African American population</div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">High Point</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Medicare Pop:</strong> 18,000+ beneficiaries</div>
                <div><strong>Demographics:</strong> Furniture industry heritage</div>
                <div><strong>Healthcare:</strong> High Point Medical Center</div>
                <div><strong>Opportunity:</strong> Manufacturing retirees</div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Jamestown</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Medicare Pop:</strong> 2,500+ beneficiaries</div>
                <div><strong>Demographics:</strong> Small town community</div>
                <div><strong>Healthcare:</strong> Regional network access</div>
                <div><strong>Opportunity:</strong> Community-focused care</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">Summerfield</h3>
              <div className="space-y-2 text-yellow-700 text-sm">
                <div><strong>Medicare Pop:</strong> 3,200+ beneficiaries</div>
                <div><strong>Demographics:</strong> Suburban growth area</div>
                <div><strong>Healthcare:</strong> Access to Greensboro facilities</div>
                <div><strong>Opportunity:</strong> Expanding suburban market</div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-3">Stokesdale</h3>
              <div className="space-y-2 text-indigo-700 text-sm">
                <div><strong>Medicare Pop:</strong> 1,800+ beneficiaries</div>
                <div><strong>Demographics:</strong> Rural suburban community</div>
                <div><strong>Healthcare:</strong> Regional provider networks</div>
                <div><strong>Opportunity:</strong> Transportation-conscious plans</div>
              </div>
            </div>
            
            <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-3">Gibsonville</h3>
              <div className="space-y-2 text-pink-700 text-sm">
                <div><strong>Medicare Pop:</strong> 1,500+ beneficiaries</div>
                <div><strong>Demographics:</strong> Historic mill community</div>
                <div><strong>Healthcare:</strong> Alamance-Guilford border access</div>
                <div><strong>Opportunity:</strong> Working-class retirees</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Considerations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving Guilford County's Working Communities</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Community-Focused Healthcare Access</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🏭 Working Class Heritage</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Manufacturing Retirees:</strong> Understanding industrial health impacts and needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Union Benefit Transitions:</strong> Help navigating from group to Medicare coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Furniture Industry Focus:</strong> Specialized knowledge of High Point legacy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Economic Sensitivity:</strong> Affordable options for fixed incomes</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🎓 Educational Community</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>UNCG Affiliates:</strong> Plans for university retirees and community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>A&T University Connection:</strong> Historically Black university community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Educational Outreach:</strong> Community center and library partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Research Participation:</strong> Access to clinical trials and studies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Network */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Guilford County Healthcare Network</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">🏥 Major Healthcare Providers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏥</span>
                  <span><strong>Cone Health:</strong> Major regional health system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏥</span>
                  <span><strong>High Point Medical Center:</strong> Wake Forest Baptist affiliate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏥</span>
                  <span><strong>Women's Hospital:</strong> Specialized women's care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏥</span>
                  <span><strong>Behavioral Health Hospital:</strong> Mental health specialization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏩</span>
                  <span><strong>Community Health Centers:</strong> Federally qualified health centers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🎯 Network Strengths</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Community Focus:</strong> Providers understanding local working-class culture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Educational Partnerships:</strong> University health programs and research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Affordable Access:</strong> Community health centers and sliding scales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Triad Integration:</strong> Regional network coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Transportation Support:</strong> Plans addressing rural access needs</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded">
            <h4 className="font-semibold text-green-800 mb-2">🌳 Guilford County Healthcare Community:</h4>
            <p className="text-green-700">
              Guilford County offers Medicare Advantage members access to comprehensive healthcare that understands 
              the Triad's unique character. With providers experienced in serving diverse working-class communities, 
              educational partnerships, and regional coordination, Medicare Advantage plans ensure accessible, 
              affordable care that honors Guilford County's manufacturing heritage and community values.
            </p>
          </div>
        </section>

        {/* Strategic Marketing Section - Community Focus */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🌳 Why Guilford County Residents Choose Medicare Advantage</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Affordable Options</h3>
                <p className="text-gray-600 text-sm">Medicare Advantage plans in Guilford County offer affordable premiums and comprehensive benefits designed for working-class retirees and fixed incomes.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Networks</h3>
                <p className="text-gray-600 text-sm">Access to Cone Health, High Point Medical Center, and community health centers throughout the Greensboro-High Point area.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cultural Understanding</h3>
                <p className="text-gray-600 text-sm">Providers experienced with diverse communities, manufacturing heritage, and the unique healthcare needs of the Triad region.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🏭 Special Focus for Guilford County Workers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Manufacturing Legacy:</strong> Understanding of industrial health impacts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Union Transition Help:</strong> Guidance from group to individual coverage</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>University Partnerships:</strong> UNCG and A&T educational health programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Transportation Support:</strong> Plans addressing rural and urban access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Community-Specific Benefits */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">📍 Greensboro Area Plans</h4>
              <p className="text-green-700 text-sm mb-3">48,000+ Medicare beneficiaries in Greensboro have access to comprehensive networks including Cone Health and university partnerships.</p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Academic medical centers</li>
                <li>• Community health focus</li>
                <li>• Diverse provider networks</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">📍 High Point Coverage</h4>
              <p className="text-blue-700 text-sm mb-3">18,000+ Medicare enrollees in High Point benefit from specialized care understanding furniture industry legacy and working-class needs.</p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• High Point Medical Center</li>
                <li>• Manufacturing heritage focus</li>
                <li>• Community accessibility</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-3">📍 Rural Guilford</h4>
              <p className="text-yellow-700 text-sm mb-3">8,000+ Medicare beneficiaries in rural areas enjoy plans with transportation support and regional network access.</p>
              <ul className="text-sm text-yellow-600 space-y-1">
                <li>• Regional network access</li>
                <li>• Transportation considerations</li>
                <li>• Community-centered care</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🌳 Get Expert Guilford County Medicare Guidance</h2>
            <p className="text-green-100 mb-6 max-w-3xl mx-auto">
              Navigate the Triad's healthcare landscape with affordable Medicare Advantage coverage. 
              Get personalized North Carolina Medicare expertise from licensed agents who understand working-class 
              communities, manufacturing heritage, and regional healthcare access needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                🌳 Get Greensboro Quote
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📞 Call NC Expert
              </a>
            </div>
            <p className="text-green-200 text-sm mt-4">
              Free consultation • Licensed North Carolina agents • Community healthcare specialists
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}