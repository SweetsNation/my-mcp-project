import { CMSEnrollmentData, MedicareEnrollmentData } from '@/types/medicare';

const CMS_API_BASE_URL = 'https://data.cms.gov/data-api/v1/dataset/d7fabe1e-d19b-4333-9eff-e80e0643f2fd/data';

export class CMSDataService {
  private cache: Map<string, { data: any; timestamp: number }> = new Map();
  private cacheTimeout = 24 * 60 * 60 * 1000; // 24 hours

  private getCacheKey(params: Record<string, any>): string {
    return JSON.stringify(params);
  }

  private isCacheValid(timestamp: number): boolean {
    return Date.now() - timestamp < this.cacheTimeout;
  }

  async fetchCMSData(params: Record<string, any> = {}): Promise<CMSEnrollmentData[]> {
    const cacheKey = this.getCacheKey(params);
    const cached = this.cache.get(cacheKey);

    if (cached && this.isCacheValid(cached.timestamp)) {
      return cached.data;
    }

    try {
      const searchParams = new URLSearchParams();
      
      // Add default parameters for better filtering
      searchParams.append('size', '10000'); // Increase default size
      
      // Add custom parameters
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, String(value));
        }
      });

      const url = `${CMS_API_BASE_URL}?${searchParams.toString()}`;
      
      // Create AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
      
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'ElMagInsurance/1.0'
        }
      });
      
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`CMS API error: ${response.status} ${response.statusText}`);
      }

      const data: CMSEnrollmentData[] = await response.json();
      
      // Cache the result
      this.cache.set(cacheKey, {
        data,
        timestamp: Date.now(),
      });

      return data;
    } catch (error) {
      // Silently handle API unavailability - this is expected in demo mode
      throw new Error('CMS API unavailable - using sample data');
    }
  }

  async getLatestData(geoLevel?: 'National' | 'State' | 'County'): Promise<CMSEnrollmentData[]> {
    const params: Record<string, any> = {};
    
    if (geoLevel) {
      params.filter = `BENE_GEO_LVL eq "${geoLevel}"`;
    }

    return this.fetchCMSData(params);
  }

  async getStateData(stateAbbrev: string): Promise<CMSEnrollmentData[]> {
    const params = {
      filter: `BENE_STATE_ABRVTN eq "${stateAbbrev}"`,
    };

    return this.fetchCMSData(params);
  }

  async getCountyData(stateAbbrev: string, countyName?: string): Promise<CMSEnrollmentData[]> {
    let filter = `BENE_STATE_ABRVTN eq "${stateAbbrev}" and BENE_GEO_LVL eq "County"`;
    
    if (countyName) {
      filter += ` and BENE_COUNTY_DESC eq "${countyName}"`;
    }

    const params = { filter };
    return this.fetchCMSData(params);
  }

  async getDataByFips(fipsCode: string): Promise<CMSEnrollmentData[]> {
    const params = {
      filter: `BENE_FIPS_CD eq "${fipsCode}"`,
    };

    return this.fetchCMSData(params);
  }

  transformCMSToEnrollmentData(cmsData: CMSEnrollmentData): MedicareEnrollmentData {
    const penetrationRate = cmsData.TOT_BENES > 0 
      ? (cmsData.MA_AND_OTH_BENES / cmsData.TOT_BENES) * 100 
      : 0;

    return {
      state: cmsData.BENE_STATE_DESC,
      county: cmsData.BENE_COUNTY_DESC,
      year: cmsData.YEAR,
      month: cmsData.MONTH,
      totalEnrollment: cmsData.TOT_BENES,
      medicareAdvantageEnrollment: cmsData.MA_AND_OTH_BENES,
      originalMedicareEnrollment: cmsData.ORGNL_MDCR_BENES,
      penetrationRate,
      demographics: {
        male: cmsData.MALE_TOT_BENES,
        female: cmsData.FEMALE_TOT_BENES,
        aged: cmsData.AGED_TOT_BENES,
        disabled: cmsData.DSBLD_TOT_BENES,
        dualEligible: cmsData.DUAL_TOT_BENES,
        fullDualEligible: cmsData.FULL_DUAL_TOT_BENES,
        race: {
          white: cmsData.WHITE_TOT_BENES,
          black: cmsData.BLACK_TOT_BENES,
          asian: cmsData.API_TOT_BENES,
          hispanic: cmsData.HISP_TOT_BENES,
          native: cmsData.NATV_TOT_BENES,
          other: cmsData.OTHR_TOT_BENES,
        },
        ageGroups: cmsData.AGE_LT_65_BENES ? {
          under65: cmsData.AGE_LT_65_BENES,
          age65to74: cmsData.AGE_65_TO_74_BENES || 0,
          age75to84: cmsData.AGE_75_TO_84_BENES || 0,
          over84: cmsData.AGE_GT_84_BENES || 0,
        } : undefined,
      },
      fipsCode: cmsData.BENE_FIPS_CD,
      geoLevel: cmsData.BENE_GEO_LVL,
    };
  }

  async getTransformedStateData(stateAbbrev: string): Promise<MedicareEnrollmentData[]> {
    const cmsData = await this.getStateData(stateAbbrev);
    return cmsData.map(data => this.transformCMSToEnrollmentData(data));
  }

  async getTransformedCountyData(stateAbbrev: string, countyName?: string): Promise<MedicareEnrollmentData[]> {
    const cmsData = await this.getCountyData(stateAbbrev, countyName);
    return cmsData.map(data => this.transformCMSToEnrollmentData(data));
  }

  async getTopStatesByEnrollment(limit: number = 10): Promise<MedicareEnrollmentData[]> {
    const stateData = await this.getLatestData('State');
    const transformed = stateData.map(data => this.transformCMSToEnrollmentData(data));
    
    return transformed
      .sort((a, b) => b.totalEnrollment - a.totalEnrollment)
      .slice(0, limit);
  }

  async getTopCountiesByEnrollment(stateAbbrev?: string, limit: number = 10): Promise<MedicareEnrollmentData[]> {
    let countyData: CMSEnrollmentData[];
    
    if (stateAbbrev) {
      countyData = await this.getCountyData(stateAbbrev);
    } else {
      countyData = await this.getLatestData('County');
    }
    
    const transformed = countyData.map(data => this.transformCMSToEnrollmentData(data));
    
    return transformed
      .sort((a, b) => b.totalEnrollment - a.totalEnrollment)
      .slice(0, limit);
  }

  async getHighPenetrationMarkets(minPenetration: number = 70, limit: number = 20): Promise<MedicareEnrollmentData[]> {
    const countyData = await this.getLatestData('County');
    const transformed = countyData.map(data => this.transformCMSToEnrollmentData(data));
    
    return transformed
      .filter(data => data.penetrationRate >= minPenetration)
      .sort((a, b) => b.penetrationRate - a.penetrationRate)
      .slice(0, limit);
  }

  async getLowPenetrationMarkets(maxPenetration: number = 50, limit: number = 20): Promise<MedicareEnrollmentData[]> {
    const countyData = await this.getLatestData('County');
    const transformed = countyData.map(data => this.transformCMSToEnrollmentData(data));
    
    return transformed
      .filter(data => data.penetrationRate <= maxPenetration && data.totalEnrollment > 1000)
      .sort((a, b) => a.penetrationRate - b.penetrationRate)
      .slice(0, limit);
  }

  clearCache(): void {
    this.cache.clear();
  }
}

// Export singleton instance
export const cmsDataService = new CMSDataService();