export interface MedicarePlan {
  id: string;
  name: string;
  carrier: string;
  type: 'HMO' | 'PPO' | 'HMO-POS' | 'PFFS';
  premium: number;
  deductible: number;
  maxOutOfPocket: number;
  dental: boolean;
  dentalLimit: number;
  vision: boolean;
  visionLimit: number;
  hearing: boolean;
  hearingLimit: number;
  fitness: boolean;
  transportation: boolean;
  overTheCounter: boolean;
  otcLimit: number;
  rating: number;
  doctorCopay: number;
  specialistCopay: number;
  hospitalCopay: number;
  urgentCareCopay: number;
  emergencyRoomCopay: number;
  zipCodes: string[];
  counties: string[];
  networkProviders?: string[];
  formulary?: string[];
}

export interface PlanFilter {
  zipCode?: string;
  planType?: 'all' | 'HMO' | 'PPO' | 'HMO-POS' | 'PFFS';
  maxPremium?: number;
  needsDental?: boolean;
  needsVision?: boolean;
  needsHearing?: boolean;
  needsFitness?: boolean;
  minRating?: number;
}

export interface PlanComparison {
  plans: MedicarePlan[];
  selectedFeatures: string[];
}

export interface EnrollmentPeriod {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
  eligibilityRequirements: string[];
}

export interface UserPreferences {
  zipCode: string;
  county: string;
  state: string;
  currentMedications: string[];
  preferredDoctors: string[];
  preferredHospitals: string[];
  budget: {
    maxPremium: number;
    maxDeductible: number;
    maxOutOfPocket: number;
  };
  importantBenefits: string[];
}

export interface PlanRecommendation {
  plan: MedicarePlan;
  score: number;
  reasons: string[];
  potentialSavings: number;
  matchedPreferences: string[];
}

export interface CMSEnrollmentData {
  YEAR: number;
  MONTH: number;
  BENE_GEO_LVL: 'National' | 'State' | 'County';
  BENE_STATE_ABRVTN: string;
  BENE_STATE_DESC: string;
  BENE_COUNTY_DESC?: string;
  BENE_FIPS_CD: string;
  TOT_BENES: number;
  ORGNL_MDCR_BENES: number;
  MA_AND_OTH_BENES: number;
  MALE_TOT_BENES: number;
  FEMALE_TOT_BENES: number;
  AGED_TOT_BENES: number;
  DSBLD_TOT_BENES: number;
  DUAL_TOT_BENES: number;
  FULL_DUAL_TOT_BENES: number;
  WHITE_TOT_BENES: number;
  BLACK_TOT_BENES: number;
  API_TOT_BENES: number;
  HISP_TOT_BENES: number;
  NATV_TOT_BENES: number;
  OTHR_TOT_BENES: number;
  AGE_LT_65_BENES?: number;
  AGE_65_TO_74_BENES?: number;
  AGE_75_TO_84_BENES?: number;
  AGE_GT_84_BENES?: number;
}

export interface MedicareEnrollmentData {
  zipCode?: string;
  city?: string;
  state: string;
  county?: string;
  year: number;
  month: number;
  totalEnrollment: number;
  medicareAdvantageEnrollment: number;
  originalMedicareEnrollment: number;
  penetrationRate: number;
  demographics: {
    male: number;
    female: number;
    aged: number;
    disabled: number;
    dualEligible: number;
    fullDualEligible: number;
    race: {
      white: number;
      black: number;
      asian: number;
      hispanic: number;
      native: number;
      other: number;
    };
    ageGroups?: {
      under65: number;
      age65to74: number;
      age75to84: number;
      over84: number;
    };
  };
  fipsCode: string;
  geoLevel: 'National' | 'State' | 'County';
  marketOpportunityScore?: number;
}

export interface StateEnrollmentSummary {
  state: string;
  totalEnrollment: number;
  medicareAdvantageEnrollment: number;
  penetrationRate: number;
  topCounties: CountyEnrollmentData[];
  growthTrend: 'increasing' | 'decreasing' | 'stable';
  marketOpportunity: 'high' | 'medium' | 'low';
}

export interface CountyEnrollmentData {
  county: string;
  state: string;
  totalEnrollment: number;
  medicareAdvantageEnrollment: number;
  penetrationRate: number;
  competitorCount: number;
  averageRating: number;
  marketSaturation: 'low' | 'medium' | 'high';
}

export interface MarketAnalysis {
  targetRecommendations: {
    topStates: StateEnrollmentSummary[];
    topCounties: CountyEnrollmentData[];
    underservedMarkets: CountyEnrollmentData[];
    highGrowthMarkets: CountyEnrollmentData[];
  };
  insights: {
    totalAddressableMarket: number;
    recommendedFocus: string[];
    competitiveAnalysis: string[];
  };
}