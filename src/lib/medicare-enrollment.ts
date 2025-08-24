import { 
  MedicareEnrollmentData, 
  StateEnrollmentSummary, 
  CountyEnrollmentData, 
  MarketAnalysis 
} from '@/types/medicare';
import { cmsDataService } from './cms-data-service';

// Sample enrollment data - in production this would come from CMS or other data sources
const sampleEnrollmentData: MedicareEnrollmentData[] = [
  {
    zipCode: '77379',
    city: 'Spring',
    state: 'TX',
    county: 'Harris County',
    year: 2025,
    month: 1,
    totalEnrollment: 125430,
    medicareAdvantageEnrollment: 89301,
    originalMedicareEnrollment: 36129,
    penetrationRate: 71.2,
    demographics: {
      male: 58200,
      female: 67230,
      aged: 120800,
      disabled: 4630,
      dualEligible: 15680,
      fullDualEligible: 8940,
      race: {
        white: 89200,
        black: 18500,
        asian: 8900,
        hispanic: 6800,
        native: 430,
        other: 1600,
      },
      ageGroups: {
        under65: 4630,
        age65to74: 68500,
        age75to84: 42300,
        over84: 14630,
      },
    },
    fipsCode: '48201',
    geoLevel: 'County',
  },
  {
    zipCode: '29526',
    city: 'Conway',
    state: 'SC',
    county: 'Horry County',
    year: 2025,
    month: 1,
    totalEnrollment: 89200,
    medicareAdvantageEnrollment: 62440,
    originalMedicareEnrollment: 26760,
    penetrationRate: 70.0,
    demographics: {
      male: 41200,
      female: 48000,
      aged: 85600,
      disabled: 3600,
      dualEligible: 16234,
      fullDualEligible: 9876,
      race: {
        white: 67400,
        black: 15800,
        asian: 2100,
        hispanic: 2900,
        native: 200,
        other: 800,
      },
      ageGroups: {
        under65: 3600,
        age65to74: 48600,
        age75to84: 28900,
        over84: 11700,
      },
    },
    fipsCode: '45051',
    geoLevel: 'County',
  },
  {
    zipCode: '33101',
    city: 'Miami',
    state: 'FL',
    county: 'Miami-Dade County',
    year: 2025,
    month: 1,
    totalEnrollment: 342100,
    medicareAdvantageEnrollment: 267638,
    originalMedicareEnrollment: 74462,
    penetrationRate: 78.2,
    demographics: {
      male: 158200,
      female: 183900,
      aged: 328000,
      disabled: 14100,
      dualEligible: 83130,
      fullDualEligible: 52341,
      race: {
        white: 120000,
        black: 89500,
        asian: 45600,
        hispanic: 78000,
        native: 1200,
        other: 7800,
      },
      ageGroups: {
        under65: 14100,
        age65to74: 185800,
        age75to84: 115600,
        over84: 40700,
      },
    },
    fipsCode: '12086',
    geoLevel: 'County',
  },
  {
    zipCode: '30331',
    city: 'Atlanta',
    state: 'GA',
    county: 'Fulton County',
    year: 2025,
    month: 1,
    totalEnrollment: 156700,
    medicareAdvantageEnrollment: 94020,
    originalMedicareEnrollment: 62680,
    penetrationRate: 60.0,
    demographics: {
      male: 72100,
      female: 84600,
      aged: 148500,
      disabled: 8200,
      dualEligible: 31027,
      fullDualEligible: 18904,
      race: {
        white: 67800,
        black: 78900,
        asian: 5600,
        hispanic: 3200,
        native: 400,
        other: 800,
      },
      ageGroups: {
        under65: 8200,
        age65to74: 89500,
        age75to84: 48200,
        over84: 19000,
      },
    },
    fipsCode: '13121',
    geoLevel: 'County',
  },
  {
    zipCode: '27587',
    city: 'Wake Forest',
    state: 'NC',
    county: 'Wake County',
    year: 2025,
    month: 1,
    totalEnrollment: 78900,
    medicareAdvantageEnrollment: 43461,
    originalMedicareEnrollment: 35439,
    penetrationRate: 55.1,
    demographics: {
      male: 37600,
      female: 41300,
      aged: 75800,
      disabled: 3100,
      dualEligible: 7259,
      fullDualEligible: 4234,
      race: {
        white: 58900,
        black: 15600,
        asian: 2100,
        hispanic: 1800,
        native: 200,
        other: 300,
      },
      ageGroups: {
        under65: 3100,
        age65to74: 48200,
        age75to84: 22800,
        over84: 7900,
      },
    },
    fipsCode: '37183',
    geoLevel: 'County',
  },
];

// CMS-based functions
export async function getEnrollmentByState(stateAbbrev: string): Promise<MedicareEnrollmentData[]> {
  try {
    return await cmsDataService.getTransformedStateData(stateAbbrev);
  } catch (error) {
    console.warn('Failed to fetch CMS data, falling back to sample data:', error);
    return sampleEnrollmentData.filter(data => data.state === stateAbbrev);
  }
}

export async function getEnrollmentByCounty(stateAbbrev: string, countyName?: string): Promise<MedicareEnrollmentData[]> {
  try {
    return await cmsDataService.getTransformedCountyData(stateAbbrev, countyName);
  } catch (error) {
    console.warn('Failed to fetch CMS data, falling back to sample data:', error);
    return sampleEnrollmentData.filter(data => 
      data.state === stateAbbrev && (!countyName || data.county === countyName)
    );
  }
}

export async function getEnrollmentByFips(fipsCode: string): Promise<MedicareEnrollmentData[]> {
  try {
    const cmsData = await cmsDataService.getDataByFips(fipsCode);
    return cmsData.map(data => cmsDataService.transformCMSToEnrollmentData(data));
  } catch (error) {
    console.warn('Failed to fetch CMS data by FIPS:', error);
    return [];
  }
}

export async function getTopStatesByEnrollment(limit: number = 10): Promise<MedicareEnrollmentData[]> {
  try {
    return await cmsDataService.getTopStatesByEnrollment(limit);
  } catch (error) {
    console.warn('Failed to fetch top states from CMS, using sample data:', error);
    return sampleEnrollmentData
      .sort((a, b) => b.totalEnrollment - a.totalEnrollment)
      .slice(0, limit);
  }
}

export async function getTopCountiesByEnrollment(stateAbbrev?: string, limit: number = 10): Promise<MedicareEnrollmentData[]> {
  try {
    return await cmsDataService.getTopCountiesByEnrollment(stateAbbrev, limit);
  } catch (error) {
    console.warn('Failed to fetch top counties from CMS, using sample data:', error);
    let data = sampleEnrollmentData;
    if (stateAbbrev) {
      data = data.filter(d => d.state === stateAbbrev);
    }
    return data
      .sort((a, b) => b.totalEnrollment - a.totalEnrollment)
      .slice(0, limit);
  }
}

export async function getHighPenetrationMarkets(minPenetration: number = 70, limit: number = 20): Promise<MedicareEnrollmentData[]> {
  try {
    return await cmsDataService.getHighPenetrationMarkets(minPenetration, limit);
  } catch (error) {
    console.warn('Failed to fetch high penetration markets from CMS:', error);
    return sampleEnrollmentData
      .filter(data => data.penetrationRate >= minPenetration)
      .sort((a, b) => b.penetrationRate - a.penetrationRate)
      .slice(0, limit);
  }
}

export async function getLowPenetrationMarkets(maxPenetration: number = 50, limit: number = 20): Promise<MedicareEnrollmentData[]> {
  try {
    return await cmsDataService.getLowPenetrationMarkets(maxPenetration, limit);
  } catch (error) {
    console.warn('Failed to fetch low penetration markets from CMS:', error);
    return sampleEnrollmentData
      .filter(data => data.penetrationRate <= maxPenetration && data.totalEnrollment > 1000)
      .sort((a, b) => a.penetrationRate - b.penetrationRate)
      .slice(0, limit);
  }
}

// Legacy functions for backward compatibility
export function getEnrollmentByZipCode(zipCode: string): MedicareEnrollmentData | null {
  return sampleEnrollmentData.find(data => data.zipCode === zipCode) || null;
}

export function getEnrollmentByStateSync(state: string): MedicareEnrollmentData[] {
  return sampleEnrollmentData.filter(data => data.state === state);
}

export function getEnrollmentByCountySync(county: string, state: string): MedicareEnrollmentData[] {
  return sampleEnrollmentData.filter(data => 
    data.county === county && data.state === state
  );
}

export async function calculateStateEnrollmentSummary(stateAbbrev: string): Promise<StateEnrollmentSummary | null> {
  const stateData = await getEnrollmentByState(stateAbbrev);
  
  if (stateData.length === 0) {
    return null;
  }

  const totalEnrollment = stateData.reduce((sum, data) => sum + data.totalEnrollment, 0);
  const totalMAEnrollment = stateData.reduce((sum, data) => sum + data.medicareAdvantageEnrollment, 0);
  const avgPenetrationRate = stateData.reduce((sum, data) => sum + data.penetrationRate, 0) / stateData.length;
  
  // For now, assume stable growth since CMS data doesn't include growth metrics
  const avgGrowth = 5; // Default stable growth

  // Group by county for top counties
  const countyMap = new Map<string, MedicareEnrollmentData[]>();
  stateData.forEach(data => {
    const countyKey = data.county || 'Unknown';
    if (!countyMap.has(countyKey)) {
      countyMap.set(countyKey, []);
    }
    countyMap.get(countyKey)!.push(data);
  });

  const topCounties: CountyEnrollmentData[] = Array.from(countyMap.entries())
    .map(([county, data]) => {
      const countyTotal = data.reduce((sum, d) => sum + d.totalEnrollment, 0);
      const countyMA = data.reduce((sum, d) => sum + d.medicareAdvantageEnrollment, 0);
      const countyPenetration = data.reduce((sum, d) => sum + d.penetrationRate, 0) / data.length;
      
      return {
        county: county as string, // Ensure it's a string
        state: stateAbbrev,
        totalEnrollment: countyTotal,
        medicareAdvantageEnrollment: countyMA,
        penetrationRate: countyPenetration,
        competitorCount: Math.floor(Math.random() * 8) + 3, // Sample data
        averageRating: 3.5 + Math.random() * 1.5,
        marketSaturation: countyPenetration > 70 ? 'high' : countyPenetration > 50 ? 'medium' : 'low' as 'low' | 'medium' | 'high',
      };
    })
    .sort((a, b) => b.totalEnrollment - a.totalEnrollment)
    .slice(0, 10);

  return {
    state: stateAbbrev,
    totalEnrollment,
    medicareAdvantageEnrollment: totalMAEnrollment,
    penetrationRate: avgPenetrationRate,
    topCounties,
    growthTrend: avgGrowth > 10 ? 'increasing' : avgGrowth < 5 ? 'decreasing' : 'stable',
    marketOpportunity: avgPenetrationRate < 60 && avgGrowth > 8 ? 'high' : 
                      avgPenetrationRate < 70 || avgGrowth > 5 ? 'medium' : 'low',
  };
}

export async function generateMarketAnalysis(): Promise<MarketAnalysis> {
  // Use CMS data for analysis
  try {
    const topStates = await getTopStatesByEnrollment(10);
    const topCounties = await getTopCountiesByEnrollment(undefined, 15);
    const lowPenetrationMarkets = await getLowPenetrationMarkets(60, 15);

    // Convert to state summaries for compatibility
    const stateMap = new Map<string, MedicareEnrollmentData[]>();
    topStates.forEach(state => {
      if (!stateMap.has(state.state)) {
        stateMap.set(state.state, []);
      }
      stateMap.get(state.state)!.push(state);
    });

    const statesSummaries: StateEnrollmentSummary[] = Array.from(stateMap.entries()).map(([stateName, data]) => {
      const totalEnrollment = data.reduce((sum, d) => sum + d.totalEnrollment, 0);
      const totalMA = data.reduce((sum, d) => sum + d.medicareAdvantageEnrollment, 0);
      const avgPenetration = data.reduce((sum, d) => sum + d.penetrationRate, 0) / data.length;
      
      return {
        state: stateName,
        totalEnrollment,
        medicareAdvantageEnrollment: totalMA,
        penetrationRate: avgPenetration,
        topCounties: [],
        growthTrend: 'stable' as const,
        marketOpportunity: avgPenetration < 60 ? 'high' : avgPenetration < 70 ? 'medium' : 'low' as const,
      };
    });

    const sortedStates = statesSummaries
      .sort((a, b) => {
        const aScore = (a.marketOpportunity === 'high' ? 3 : a.marketOpportunity === 'medium' ? 2 : 1);
        const bScore = (b.marketOpportunity === 'high' ? 3 : b.marketOpportunity === 'medium' ? 2 : 1);
        return bScore - aScore;
      })
      .slice(0, 5);

    const underservedMarkets = lowPenetrationMarkets.map(data => ({
      county: data.county || 'Unknown',
      state: data.state,
      totalEnrollment: data.totalEnrollment,
      medicareAdvantageEnrollment: data.medicareAdvantageEnrollment,
      penetrationRate: data.penetrationRate,
      competitorCount: Math.floor(Math.random() * 8) + 3,
      averageRating: 3.5 + Math.random() * 1.5,
      marketSaturation: 'low' as const,
    })).slice(0, 10);

    const highGrowthMarkets = topCounties
      .filter(data => data.totalEnrollment > 50000)
      .map(data => {
        const penetration = data.penetrationRate;
        return {
          county: data.county || 'Unknown',
          state: data.state,
          totalEnrollment: data.totalEnrollment,
          medicareAdvantageEnrollment: data.medicareAdvantageEnrollment,
          penetrationRate: penetration,
          competitorCount: Math.floor(Math.random() * 8) + 3,
          averageRating: 3.5 + Math.random() * 1.5,
          marketSaturation: (penetration > 70 ? 'high' : penetration > 50 ? 'medium' : 'low') as 'high' | 'medium' | 'low',
        };
      })
      .slice(0, 10);

    const totalAddressableMarket = topStates.reduce(
      (sum, data) => sum + data.totalEnrollment, 0
    );

    return {
      targetRecommendations: {
        topStates: sortedStates,
        topCounties: topCounties.map(data => {
          const penetration = data.penetrationRate;
          return {
            county: data.county || 'Unknown',
            state: data.state,
            totalEnrollment: data.totalEnrollment,
            medicareAdvantageEnrollment: data.medicareAdvantageEnrollment,
            penetrationRate: penetration,
            competitorCount: Math.floor(Math.random() * 8) + 3,
            averageRating: 3.5 + Math.random() * 1.5,
            marketSaturation: (penetration > 70 ? 'high' : penetration > 50 ? 'medium' : 'low') as 'high' | 'medium' | 'low',
          };
        }).slice(0, 10),
        underservedMarkets,
        highGrowthMarkets,
      },
      insights: {
        totalAddressableMarket,
        recommendedFocus: [
          'Focus on counties with Medicare Advantage penetration below 60%',
          'Target areas with large Medicare populations (50,000+ beneficiaries)',
          'Prioritize markets with dual-eligible populations above national average',
          'Consider demographic trends in aging populations',
        ],
        competitiveAnalysis: [
          'Analyze county-level penetration rates from CMS data',
          'Identify underserved rural and suburban markets',
          'Focus on states with growing Medicare populations',
          'Monitor Medicare Advantage vs Original Medicare trends',
        ],
      },
    };
  } catch (error) {
    console.warn('Failed to generate CMS-based market analysis, using sample data:', error);
    // Fallback to sample data analysis
    return {
      targetRecommendations: {
        topStates: [],
        topCounties: [],
        underservedMarkets: [],
        highGrowthMarkets: [],
      },
      insights: {
        totalAddressableMarket: 0,
        recommendedFocus: ['Unable to fetch CMS data'],
        competitiveAnalysis: ['Unable to fetch CMS data'],
      },
    };
  }
}

export function getAllEnrollmentData(): MedicareEnrollmentData[] {
  return sampleEnrollmentData;
}

export function getMarketOpportunityScore(enrollmentData: MedicareEnrollmentData): number {
  let score = 0;
  
  // Market penetration opportunity (0-40 points) - lower penetration = higher opportunity
  const penetrationScore = Math.max(0, (80 - enrollmentData.penetrationRate) * 0.5);
  score += penetrationScore;
  
  // Market size (0-30 points)
  const sizeScore = Math.min(enrollmentData.totalEnrollment / 10000, 30);
  score += sizeScore;
  
  // Demographic factors (0-20 points)
  const dualEligibleRate = enrollmentData.demographics.dualEligible / enrollmentData.totalEnrollment * 100;
  const demographicScore = Math.min(dualEligibleRate, 20);
  score += demographicScore;
  
  // Geographic level bonus (0-10 points)
  const geoScore = enrollmentData.geoLevel === 'County' ? 10 : 
                   enrollmentData.geoLevel === 'State' ? 5 : 0;
  score += geoScore;
  
  return Math.round(score);
}