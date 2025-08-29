'use client';

import Link from 'next/link';

interface CountyLink {
  name: string;
  href: string;
  description: string;
  population?: string;
  enrollmentRate?: string;
  icon: string;
  color: string;
}

interface StateCountyLinkingProps {
  serviceType: 'medicare-supplement' | 'medicare-advantage' | 'health-marketplace';
  currentState?: string;
  currentCounty?: string;
  showStateLink?: boolean;
  maxCounties?: number;
}

const COUNTY_DATA: Record<string, Record<string, CountyLink[]>> = {
  'medicare-supplement': {
    'Texas': [
      {
        name: 'Harris County',
        href: '/medicare-supplement-harris-county-texas',
        description: 'Houston area Medicare Supplement plans with Texas Medical Center access',
        population: '4.7M',
        icon: '🏥',
        color: 'blue'
      },
      {
        name: 'Dallas County',
        href: '/medicare-supplement-dallas-county-texas',
        description: 'Dallas-Fort Worth Medicare Supplement coverage options',
        population: '2.6M',
        icon: '🤠',
        color: 'green'
      },
      {
        name: 'Tarrant County',
        href: '/medicare-supplement-tarrant-county-texas',
        description: 'Fort Worth area Medicare Supplement plans',
        population: '2.1M',
        icon: '🐎',
        color: 'purple'
      },
      {
        name: 'Bexar County',
        href: '/medicare-supplement-bexar-county-texas',
        description: 'San Antonio Medicare Supplement coverage',
        population: '2.0M',
        icon: '🌵',
        color: 'orange'
      }
    ],
    'California': [
      {
        name: 'Los Angeles County',
        href: '/medicare-supplement-los-angeles-county',
        description: 'LA area Medicare Supplement plans for 2.1M beneficiaries',
        population: '10.0M',
        icon: '🌴',
        color: 'blue'
      },
      {
        name: 'Orange County',
        href: '/medicare-supplement-orange-county-california',
        description: 'Orange County Medicare Supplement with community rating',
        population: '3.2M',
        icon: '🏖️',
        color: 'orange'
      },
      {
        name: 'San Diego County',
        href: '/medicare-supplement-san-diego-county',
        description: 'San Diego Medicare Supplement for retirees and military',
        population: '3.3M',
        icon: '🌊',
        color: 'blue'
      },
      {
        name: 'San Francisco County',
        href: '/medicare-supplement-san-francisco-county',
        description: 'Bay Area Medicare Supplement with premium healthcare access',
        population: '873K',
        icon: '🌉',
        color: 'purple'
      },
      {
        name: 'Sacramento County',
        href: '/medicare-supplement-sacramento-county',
        description: 'Sacramento area Medicare Supplement plans',
        population: '1.6M',
        icon: '🏛️',
        color: 'green'
      },
      {
        name: 'Fresno County',
        href: '/medicare-supplement-fresno-county',
        description: 'Central Valley Medicare Supplement coverage',
        population: '1.0M',
        icon: '🌾',
        color: 'yellow'
      }
    ],
    'Florida': [
      {
        name: 'Miami-Dade County',
        href: '/medicare-supplement-miami-dade-county',
        description: 'Miami area Medicare Supplement with international access',
        population: '2.7M',
        icon: '🌴',
        color: 'blue'
      },
      {
        name: 'Broward County',
        href: '/medicare-supplement-broward-county',
        description: 'Fort Lauderdale Medicare Supplement plans',
        population: '1.9M',
        icon: '🏖️',
        color: 'orange'
      },
      {
        name: 'Orange County',
        href: '/medicare-supplement-orange-county-florida',
        description: 'Orlando area Medicare Supplement coverage',
        population: '1.4M',
        icon: '🎢',
        color: 'purple'
      },
      {
        name: 'Lee County',
        href: '/medicare-supplement-lee-county-florida',
        description: 'Fort Myers Medicare Supplement for retirees',
        population: '760K',
        icon: '🌅',
        color: 'yellow'
      },
      {
        name: 'Duval County',
        href: '/medicare-supplement-duval-county-florida',
        description: 'Jacksonville Medicare Supplement plans',
        population: '950K',
        icon: '🌊',
        color: 'blue'
      },
      {
        name: 'Hernando County',
        href: '/medicare-supplement-hernando-county-florida',
        description: 'Spring Hill Medicare Supplement coverage',
        population: '193K',
        icon: '🌲',
        color: 'green'
      },
      {
        name: 'Monroe County',
        href: '/medicare-supplement-monroe-county-florida',
        description: 'Key West Medicare Supplement for island residents',
        population: '82K',
        icon: '🏝️',
        color: 'orange'
      }
    ],
    'New York': [
      {
        name: 'Nassau County',
        href: '/medicare-supplement-nassau-county',
        description: 'Long Island Medicare Supplement with NYC access',
        population: '1.4M',
        icon: '🌊',
        color: 'blue'
      },
      {
        name: 'Westchester County',
        href: '/medicare-supplement-westchester-county',
        description: 'Westchester Medicare Supplement plans',
        population: '968K',
        icon: '🏘️',
        color: 'green'
      },
      {
        name: 'Monroe County',
        href: '/medicare-supplement-monroe-county',
        description: 'Rochester area Medicare Supplement coverage',
        population: '759K',
        icon: '🌊',
        color: 'purple'
      }
    ],
    'Hawaii': [
      {
        name: 'Honolulu County',
        href: '/medicare-supplement-honolulu-county',
        description: 'Oahu Medicare Supplement with island healthcare access',
        population: '1.0M',
        icon: '🌺',
        color: 'blue'
      },
      {
        name: 'Hawaii County',
        href: '/medicare-supplement-hawaii-county',
        description: 'Big Island Medicare Supplement coverage',
        population: '200K',
        icon: '🌋',
        color: 'red'
      },
      {
        name: 'Maui County',
        href: '/medicare-supplement-maui-county-hawaii',
        description: 'Maui Medicare Supplement for island residents',
        population: '168K',
        icon: '🏝️',
        color: 'orange'
      },
      {
        name: 'Kauai County',
        href: '/medicare-supplement-kauai-county',
        description: 'Kauai Medicare Supplement plans',
        population: '73K',
        icon: '🌴',
        color: 'green'
      }
    ]
  },
  'medicare-advantage': {
    'Virginia': [
      {
        name: 'Fairfax County',
        href: '/medicare-advantage/fairfax-county-virginia',
        description: 'Northern Virginia Medicare Advantage with Inova Health System',
        population: '1.1M',
        enrollmentRate: '31.73%',
        icon: '🏛️',
        color: 'blue'
      },
      {
        name: 'Prince William County',
        href: '/medicare-advantage/prince-william-county-virginia',
        description: 'Woodbridge & Manassas Medicare Advantage plans',
        population: '654K',
        enrollmentRate: '42.1%',
        icon: '🏘️',
        color: 'green'
      },
      {
        name: 'Loudoun County',
        href: '/medicare-advantage/loudoun-county-virginia',
        description: 'Leesburg & Sterling Medicare Advantage coverage',
        population: '482K',
        enrollmentRate: '28.9%',
        icon: '🏔️',
        color: 'purple'
      }
    ],
    'North Carolina': [
      {
        name: 'Wake County',
        href: '/medicare-advantage/wake-county-north-carolina',
        description: 'Raleigh area Medicare Advantage with Duke Health',
        population: '1.1M',
        enrollmentRate: '35.2%',
        icon: '🌳',
        color: 'green'
      },
      {
        name: 'Mecklenburg County',
        href: '/medicare-advantage/mecklenburg-county-north-carolina',
        description: 'Charlotte Medicare Advantage with Atrium Health',
        population: '1.1M',
        enrollmentRate: '38.7%',
        icon: '🏙️',
        color: 'blue'
      },
      {
        name: 'Guilford County',
        href: '/medicare-advantage/guilford-county-north-carolina',
        description: 'Greensboro Medicare Advantage plans',
        population: '537K',
        enrollmentRate: '32.1%',
        icon: '🏭',
        color: 'orange'
      }
    ],
    'Tennessee': [
      {
        name: 'Davidson County',
        href: '/medicare-advantage/davidson-county-tennessee',
        description: 'Nashville Medicare Advantage with Vanderbilt Health',
        population: '694K',
        enrollmentRate: '29.8%',
        icon: '🎸',
        color: 'purple'
      },
      {
        name: 'Hamilton County',
        href: '/medicare-advantage/hamilton-county-tennessee',
        description: 'Chattanooga Medicare Advantage coverage',
        population: '366K',
        enrollmentRate: '34.2%',
        icon: '🌊',
        color: 'blue'
      },
      {
        name: 'Knox County',
        href: '/medicare-advantage/knox-county-tennessee',
        description: 'Knoxville Medicare Advantage plans',
        population: '478K',
        enrollmentRate: '31.5%',
        icon: '🏔️',
        color: 'green'
      }
    ],
    'Georgia': [
      {
        name: 'Fulton County',
        href: '/medicare-advantage/fulton-county-georgia',
        description: 'Atlanta Medicare Advantage with Emory Healthcare',
        population: '1.1M',
        enrollmentRate: '27.3%',
        icon: '🍑',
        color: 'orange'
      },
      {
        name: 'Gwinnett County',
        href: '/medicare-advantage/gwinnett-county-georgia',
        description: 'Lawrenceville Medicare Advantage plans',
        population: '957K',
        enrollmentRate: '33.8%',
        icon: '🏘️',
        color: 'green'
      },
      {
        name: 'Dekalb County',
        href: '/medicare-advantage/dekalb-county-georgia',
        description: 'Decatur Medicare Advantage coverage',
        population: '764K',
        enrollmentRate: '29.1%',
        icon: '🌳',
        color: 'blue'
      }
    ],
    'Alabama': [
      {
        name: 'Jefferson County',
        href: '/medicare-advantage/jefferson-county-alabama',
        description: 'Birmingham Medicare Advantage with UAB Health',
        population: '675K',
        enrollmentRate: '41.2%',
        icon: '🏥',
        color: 'blue'
      },
      {
        name: 'Madison County',
        href: '/medicare-advantage/madison-county-alabama',
        description: 'Huntsville Medicare Advantage plans',
        population: '388K',
        enrollmentRate: '36.7%',
        icon: '🚀',
        color: 'purple'
      },
      {
        name: 'Mobile County',
        href: '/medicare-advantage/mobile-county-alabama',
        description: 'Mobile Medicare Advantage coverage',
        population: '414K',
        enrollmentRate: '39.8%',
        icon: '🌊',
        color: 'blue'
      }
    ]
  },
  'health-marketplace': {
    'Georgia': [
      {
        name: 'Fulton County',
        href: '/health-insurance-fulton-county-georgia',
        description: 'Atlanta Health Insurance Marketplace with Emory Healthcare',
        population: '1.1M',
        icon: '🍑',
        color: 'orange'
      },
      {
        name: 'Gwinnett County',
        href: '/health-insurance-gwinnett-county-georgia',
        description: 'Lawrenceville ACA Marketplace plans',
        population: '957K',
        icon: '🏘️',
        color: 'green'
      },
      {
        name: 'Cobb County',
        href: '/health-insurance-cobb-county-georgia',
        description: 'Marietta Health Insurance Marketplace coverage',
        population: '766K',
        icon: '🌳',
        color: 'blue'
      }
    ],
    'Texas': [
      {
        name: 'Harris County',
        href: '/health-insurance-harris-county-texas',
        description: 'Houston Health Insurance Marketplace with Texas Medical Center',
        population: '4.7M',
        icon: '🏥',
        color: 'blue'
      },
      {
        name: 'Dallas County',
        href: '/health-insurance-dallas-county-texas',
        description: 'Dallas-Fort Worth ACA Marketplace plans',
        population: '2.6M',
        icon: '🤠',
        color: 'green'
      },
      {
        name: 'Tarrant County',
        href: '/health-insurance-tarrant-county-texas',
        description: 'Fort Worth Health Insurance Marketplace',
        population: '2.1M',
        icon: '🐎',
        color: 'purple'
      }
    ],
    'Florida': [
      {
        name: 'Miami-Dade County',
        href: '/health-insurance-miami-dade-florida',
        description: 'Miami Health Insurance Marketplace with international access',
        population: '2.7M',
        icon: '🌴',
        color: 'blue'
      },
      {
        name: 'Broward County',
        href: '/health-insurance-broward-county-florida',
        description: 'Fort Lauderdale ACA Marketplace plans',
        population: '1.9M',
        icon: '🏖️',
        color: 'orange'
      },
      {
        name: 'Orange County',
        href: '/health-insurance-orange-county-florida',
        description: 'Orlando Health Insurance Marketplace coverage',
        population: '1.4M',
        icon: '🎢',
        color: 'purple'
      }
    ],
    'Nevada': [
      {
        name: 'Clark County',
        href: '/health-insurance-clark-county-nevada',
        description: 'Las Vegas Health Insurance Marketplace plans',
        population: '2.3M',
        icon: '🎰',
        color: 'purple'
      },
      {
        name: 'Washoe County',
        href: '/health-insurance-washoe-county-nevada',
        description: 'Reno ACA Marketplace coverage',
        population: '486K',
        icon: '🏔️',
        color: 'blue'
      }
    ],
    'Oklahoma': [
      {
        name: 'Oklahoma County',
        href: '/health-insurance-oklahoma-county-oklahoma',
        description: 'Oklahoma City Health Insurance Marketplace plans',
        population: '796K',
        icon: '🌾',
        color: 'green'
      },
      {
        name: 'Tulsa County',
        href: '/health-insurance-tulsa-county-oklahoma',
        description: 'Tulsa ACA Marketplace coverage',
        population: '669K',
        icon: '🌳',
        color: 'blue'
      }
    ]
  }
};

export default function StateCountyLinking({
  serviceType,
  currentState,
  currentCounty,
  showStateLink = true,
  maxCounties = 6
}: StateCountyLinkingProps) {
  const stateData = COUNTY_DATA[serviceType];
  const availableStates = Object.keys(stateData);
  
  // If we're on a specific state page, show counties for that state
  // If we're on a county page, show other counties in the same state
  // If we're on a general page, show a mix of states
  const targetState = currentState || availableStates[0];
  const counties = stateData[targetState] || [];
  
  // Filter out current county if we're on a county page
  const filteredCounties = currentCounty 
    ? counties.filter(county => !county.href.includes(currentCounty.toLowerCase().replace(/\s+/g, '-')))
    : counties;
  
  const displayCounties = filteredCounties.slice(0, maxCounties);
  
  if (displayCounties.length === 0) {
    return null;
  }

  const getServiceTitle = () => {
    switch (serviceType) {
      case 'medicare-supplement':
        return 'Medicare Supplement';
      case 'medicare-advantage':
        return 'Medicare Advantage';
      case 'health-marketplace':
        return 'Health Insurance Marketplace';
      default:
        return 'Insurance';
    }
  };

  const getStateLink = () => {
    switch (serviceType) {
      case 'medicare-supplement':
        return `/medicare-supplement-${targetState.toLowerCase()}`;
      case 'medicare-advantage':
        return `/medicare-advantage`;
      case 'health-marketplace':
        return `/health-insurance-marketplace`;
      default:
        return '/';
    }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {currentCounty 
              ? `Other ${getServiceTitle()} Options in ${targetState}`
              : `${getServiceTitle()} by County in ${targetState}`
            }
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {currentCounty 
              ? `Explore ${getServiceTitle()} plans in other ${targetState} counties to find the best coverage for your area.`
              : `Find ${getServiceTitle()} plans tailored to your specific county in ${targetState}. Each county has unique healthcare networks and pricing.`
            }
          </p>
        </div>

        {showStateLink && (
          <div className="mb-8 text-center">
            <Link 
              href={getStateLink()}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span className="mr-2">🏛️</span>
              View All {targetState} {getServiceTitle()} Plans
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCounties.map((county, index) => (
            <Link
              key={index}
              href={county.href}
              className={`group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-${county.color}-300 p-6`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 bg-${county.color}-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-${county.color}-200 transition-colors`}>
                    {county.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {county.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {county.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    {county.population && (
                      <span>Population: {county.population}</span>
                    )}
                    {county.enrollmentRate && (
                      <span>MA Rate: {county.enrollmentRate}</span>
                    )}
                  </div>
                  <div className="flex items-center text-blue-600 font-medium text-sm mt-3 group-hover:text-blue-800">
                    View Plans
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {availableStates.length > 1 && (
          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Explore {getServiceTitle()} Plans in Other States
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {availableStates.slice(0, 6).map((state) => (
                <Link
                  key={state}
                  href={serviceType === 'medicare-supplement' 
                    ? `/medicare-supplement-${state.toLowerCase()}` 
                    : serviceType === 'medicare-advantage'
                    ? `/medicare-advantage`
                    : `/health-insurance-marketplace`
                  }
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  {state}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
