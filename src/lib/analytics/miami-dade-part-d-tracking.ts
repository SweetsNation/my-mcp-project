/**
 * Miami-Dade County Medicare Part D Prescription Drug Coverage Analytics Tracking
 *
 * Specialized tracking for prescription drug coverage landing page performance
 * Focus: Pharmacy network engagement, formulary lookup, Extra Help applications
 * Market: 340,000+ Part D enrollees in South Florida's largest county
 */

import { event } from '@/lib/analytics';

export type MiamiDadePartDEventType =
  | 'pharmacy_network_view'
  | 'formulary_lookup_start'
  | 'drug_coverage_check'
  | 'plan_comparison_engagement'
  | 'extra_help_application_interest'
  | 'bilingual_pharmacy_service_interest'
  | 'chronic_condition_coverage_view'
  | 'cost_tier_analysis'
  | 'mail_order_pharmacy_interest'
  | 'cvs_network_engagement'
  | 'walgreens_pharmacy_engagement'
  | 'publix_pharmacy_interest'
  | 'navarro_sedanos_community_pharmacy'
  | 'spanish_pharmacist_request'
  | 'specialty_drug_coverage_inquiry'
  | 'part_d_enrollment_start'
  | 'donut_hole_coverage_gap_education'
  | 'preferred_pharmacy_network_view'
  | 'medication_therapy_management_interest';

/**
 * Base tracking function for all Miami-Dade Part D events
 */
export const trackMiamiDadePartDEvent = (
  eventType: MiamiDadePartDEventType,
  eventData?: Record<string, any>
) => {
  event(eventType, {
    event_category: 'Medicare Part D Prescription Coverage',
    county: 'Miami-Dade County',
    state: 'Florida',
    market_size: 340000,
    pharmacy_density: 'high',
    bilingual_services: true,
    ...eventData
  });
};

/**
 * Track pharmacy network interest
 */
export const trackPharmacyNetworkInterest = (
  pharmacyChain: 'cvs' | 'walgreens' | 'publix' | 'walmart' | 'navarro' | 'sedanos' | 'other',
  interactionType: 'view' | 'location_search' | 'hours_check' | 'services_inquiry' = 'view',
  timeSpent?: number
) => {
  const pharmacyData: Record<string, { name: string; locations: number; value: number; community?: string }> = {
    cvs: { name: 'CVS Pharmacy', locations: 200, value: 35 },
    walgreens: { name: 'Walgreens', locations: 180, value: 30 },
    publix: { name: 'Publix Pharmacy', locations: 120, value: 40 },
    walmart: { name: 'Walmart Pharmacy', locations: 45, value: 25 },
    navarro: { name: 'Navarro Discount Pharmacy', locations: 30, value: 45, community: 'Cuban-American' },
    sedanos: { name: 'Sedano\'s Pharmacy', locations: 15, value: 40, community: 'Hispanic supermarket' },
    other: { name: 'Independent Pharmacy', locations: 260, value: 30 }
  };

  const pharmacy = pharmacyData[pharmacyChain];

  trackMiamiDadePartDEvent('pharmacy_network_view', {
    event_label: `${pharmacy.name} Network Interest`,
    pharmacy_chain: pharmacyChain,
    pharmacy_name: pharmacy.name,
    pharmacy_locations: pharmacy.locations,
    interaction_type: interactionType,
    community_pharmacy: pharmacy.community || null,
    time_spent: timeSpent || 0,
    value: pharmacy.value
  });
};

/**
 * Track formulary lookup tool usage
 */
export const trackFormularyLookupUsage = (
  drugName: string,
  drugCategory: 'diabetes' | 'cardiac' | 'respiratory' | 'cholesterol' | 'blood_pressure' | 'specialty' | 'other',
  resultsFound: boolean,
  planCount?: number
) => {
  const categoryValues: Record<string, number> = {
    diabetes: 50,
    cardiac: 45,
    respiratory: 40,
    cholesterol: 35,
    blood_pressure: 35,
    specialty: 60,
    other: 30
  };

  trackMiamiDadePartDEvent('formulary_lookup_start', {
    event_label: 'Part D Formulary Drug Search',
    drug_name: drugName.toLowerCase(),
    drug_category: drugCategory,
    results_found: resultsFound,
    plan_count: planCount || 0,
    high_value_interaction: true,
    value: categoryValues[drugCategory]
  });
};

/**
 * Track drug coverage verification
 */
export const trackDrugCoverageCheck = (
  medicationCount: number,
  coverageType: 'generic' | 'brand' | 'specialty' | 'mixed',
  totalMonthlyCost?: number
) => {
  trackMiamiDadePartDEvent('drug_coverage_check', {
    event_label: 'Medication Coverage Verification',
    medication_count: medicationCount,
    coverage_type: coverageType,
    monthly_cost_estimate: totalMonthlyCost || 0,
    high_medication_count: medicationCount >= 5,
    value: medicationCount >= 5 ? 55 : 40
  });
};

/**
 * Track Part D plan comparison engagement
 */
export const trackPartDPlanComparison = (
  plansCompared: string[],
  comparisonFactors: string[],
  timeSpent?: number
) => {
  trackMiamiDadePartDEvent('plan_comparison_engagement', {
    event_label: 'Part D Plan Comparison Tool',
    plans_compared: plansCompared.join(', '),
    comparison_count: plansCompared.length,
    comparison_factors: comparisonFactors.join(', '),
    time_spent: timeSpent || 0,
    deep_comparison: plansCompared.length >= 3,
    value: plansCompared.length >= 3 ? 50 : 35
  });
};

/**
 * Track Extra Help (LIS) application interest
 */
export const trackExtraHelpInterest = (
  incomeQualified: boolean,
  applicationStage: 'information' | 'eligibility_check' | 'application_start' | 'application_submit',
  assistanceRequested: boolean = false
) => {
  const stageValues: Record<string, number> = {
    information: 25,
    eligibility_check: 40,
    application_start: 60,
    application_submit: 85
  };

  trackMiamiDadePartDEvent('extra_help_application_interest', {
    event_label: 'Extra Help Low-Income Subsidy Interest',
    income_qualified: incomeQualified,
    application_stage: applicationStage,
    assistance_requested: assistanceRequested,
    high_value_lead: applicationStage === 'application_submit',
    value: stageValues[applicationStage]
  });
};

/**
 * Track bilingual pharmacy services interest
 */
export const trackBilingualPharmacyInterest = (
  language: 'spanish' | 'haitian_creole' | 'portuguese' | 'other',
  serviceType: 'pharmacist_consultation' | 'prescription_translation' | 'medication_instructions' | 'insurance_assistance'
) => {
  const languageData: Record<string, { label: string; community: string; value: number }> = {
    spanish: { label: 'Spanish/Español', community: 'Little Havana, Hialeah, Westchester', value: 45 },
    haitian_creole: { label: 'Haitian Creole/Kreyòl', community: 'Little Haiti, North Miami', value: 40 },
    portuguese: { label: 'Portuguese/Português', community: 'Brazilian community', value: 35 },
    other: { label: 'Other Language', community: 'Multi-cultural', value: 30 }
  };

  const lang = languageData[language];

  trackMiamiDadePartDEvent('bilingual_pharmacy_service_interest', {
    event_label: `${lang.label} Pharmacy Services`,
    language: language,
    language_label: lang.label,
    community: lang.community,
    service_type: serviceType,
    value: lang.value
  });
};

/**
 * Track chronic condition coverage interest
 */
export const trackChronicConditionCoverage = (
  condition: 'diabetes' | 'heart_disease' | 'copd' | 'asthma' | 'hypertension' | 'high_cholesterol',
  medicationCount: number,
  monthlySuppliesInterest: boolean = false
) => {
  const conditionData: Record<string, { name: string; prevalence: string; value: number }> = {
    diabetes: { name: 'Diabetes', prevalence: 'Very High in Miami-Dade', value: 50 },
    heart_disease: { name: 'Heart Disease', prevalence: 'High', value: 45 },
    copd: { name: 'COPD', prevalence: 'Moderate', value: 40 },
    asthma: { name: 'Asthma', prevalence: 'High', value: 35 },
    hypertension: { name: 'Hypertension', prevalence: 'Very High', value: 40 },
    high_cholesterol: { name: 'High Cholesterol', prevalence: 'High', value: 35 }
  };

  const conditionInfo = conditionData[condition];

  trackMiamiDadePartDEvent('chronic_condition_coverage_view', {
    event_label: `${conditionInfo.name} Medication Coverage`,
    condition: condition,
    condition_name: conditionInfo.name,
    medication_count: medicationCount,
    monthly_supplies_interest: monthlySuppliesInterest,
    high_medication_burden: medicationCount >= 4,
    value: conditionInfo.value
  });
};

/**
 * Track cost tier analysis
 */
export const trackCostTierAnalysis = (
  tier: 1 | 2 | 3 | 4 | 5,
  drugType: 'generic' | 'preferred_brand' | 'non_preferred_brand' | 'specialty',
  monthlyCost: number
) => {
  const tierLabels: Record<number, string> = {
    1: 'Tier 1 - Preferred Generic',
    2: 'Tier 2 - Generic',
    3: 'Tier 3 - Preferred Brand',
    4: 'Tier 4 - Non-Preferred Brand',
    5: 'Tier 5 - Specialty'
  };

  trackMiamiDadePartDEvent('cost_tier_analysis', {
    event_label: tierLabels[tier],
    cost_tier: tier,
    drug_type: drugType,
    monthly_cost: monthlyCost,
    high_cost_medication: monthlyCost >= 100,
    value: monthlyCost >= 100 ? 45 : 30
  });
};

/**
 * Track mail order pharmacy interest
 */
export const trackMailOrderPharmacyInterest = (
  provider: 'cvs_caremark' | 'express_scripts' | 'optum_rx' | 'other',
  savingsEstimate?: number,
  chronicMedication: boolean = false
) => {
  const providerData: Record<string, { name: string; value: number }> = {
    cvs_caremark: { name: 'CVS Caremark', value: 40 },
    express_scripts: { name: 'Express Scripts', value: 35 },
    optum_rx: { name: 'OptumRx', value: 35 },
    other: { name: 'Other Mail Order', value: 30 }
  };

  const provider_info = providerData[provider];

  trackMiamiDadePartDEvent('mail_order_pharmacy_interest', {
    event_label: `${provider_info.name} Mail Order`,
    provider: provider,
    provider_name: provider_info.name,
    savings_estimate: savingsEstimate || 0,
    chronic_medication: chronicMedication,
    value: provider_info.value
  });
};

/**
 * Track CVS pharmacy network engagement
 */
export const trackCVSNetworkEngagement = (
  location: string,
  serviceType: 'prescription_pickup' | 'immunizations' | 'health_screening' | 'minuteclinic' | 'photo_services'
) => {
  trackMiamiDadePartDEvent('cvs_network_engagement', {
    event_label: 'CVS Pharmacy Network Access',
    pharmacy_chain: 'cvs',
    location: location,
    service_type: serviceType,
    network_size: 200,
    value: 35
  });
};

/**
 * Track Walgreens pharmacy engagement
 */
export const trackWalgreensEngagement = (
  location: string,
  serviceType: 'prescription_pickup' | 'immunizations' | 'health_testing' | '24_hour_pharmacy'
) => {
  trackMiamiDadePartDEvent('walgreens_pharmacy_engagement', {
    event_label: 'Walgreens Pharmacy Network',
    pharmacy_chain: 'walgreens',
    location: location,
    service_type: serviceType,
    network_size: 180,
    value: 30
  });
};

/**
 * Track Publix pharmacy interest
 */
export const trackPublixPharmacyInterest = (
  location: string,
  freeAntibiotics: boolean = false
) => {
  trackMiamiDadePartDEvent('publix_pharmacy_interest', {
    event_label: 'Publix Pharmacy Supermarket Convenience',
    pharmacy_chain: 'publix',
    location: location,
    free_antibiotics_interest: freeAntibiotics,
    grocery_pharmacy_convenience: true,
    network_size: 120,
    value: 40
  });
};

/**
 * Track Navarro/Sedano's community pharmacy interest
 */
export const trackCommunityPharmacyInterest = (
  pharmacy: 'navarro' | 'sedanos',
  community: string,
  bilingualServices: boolean = true
) => {
  const pharmacyData: Record<string, { name: string; locations: number; culture: string; value: number }> = {
    navarro: { name: 'Navarro Discount Pharmacy', locations: 30, culture: 'Cuban-American', value: 45 },
    sedanos: { name: 'Sedano\'s Pharmacy', locations: 15, culture: 'Hispanic Supermarket', value: 40 }
  };

  const info = pharmacyData[pharmacy];

  trackMiamiDadePartDEvent('navarro_sedanos_community_pharmacy', {
    event_label: `${info.name} Community Connection`,
    pharmacy: pharmacy,
    pharmacy_name: info.name,
    community: community,
    cultural_connection: info.culture,
    bilingual_services: bilingualServices,
    network_size: info.locations,
    value: info.value
  });
};

/**
 * Track Spanish-speaking pharmacist request
 */
export const trackSpanishPharmacistRequest = (
  requestType: 'consultation' | 'medication_counseling' | 'insurance_help' | 'prescription_translation'
) => {
  trackMiamiDadePartDEvent('spanish_pharmacist_request', {
    event_label: 'Spanish-Speaking Pharmacist Service',
    request_type: requestType,
    language: 'spanish',
    bilingual_service: true,
    value: 45
  });
};

/**
 * Track specialty drug coverage inquiry
 */
export const trackSpecialtyDrugInquiry = (
  drugCategory: 'oncology' | 'rheumatoid_arthritis' | 'multiple_sclerosis' | 'hepatitis_c' | 'other',
  monthlyCost?: number
) => {
  trackMiamiDadePartDEvent('specialty_drug_coverage_inquiry', {
    event_label: 'Specialty Medication Coverage',
    drug_category: drugCategory,
    monthly_cost: monthlyCost || 0,
    high_cost_specialty: true,
    value: 60
  });
};

/**
 * Track Part D enrollment initiation
 */
export const trackPartDEnrollmentStart = (
  enrollmentPeriod: 'aep' | 'iep' | 'oep' | 'sep',
  assistanceNeeded: boolean = false
) => {
  const periodLabels: Record<string, string> = {
    aep: 'Annual Enrollment Period (Oct 15 - Dec 7)',
    iep: 'Initial Enrollment Period',
    oep: 'Open Enrollment Period (Jan 1 - Mar 31)',
    sep: 'Special Enrollment Period'
  };

  trackMiamiDadePartDEvent('part_d_enrollment_start', {
    event_label: 'Part D Enrollment Application Started',
    enrollment_period: enrollmentPeriod,
    period_label: periodLabels[enrollmentPeriod],
    assistance_needed: assistanceNeeded,
    high_value_conversion: true,
    value: 75
  });
};

/**
 * Track donut hole / coverage gap education
 */
export const trackDonutHoleEducation = (
  currentSpending: number,
  gapCoverageInterest: boolean = false
) => {
  const inDonutHole = currentSpending >= 5030 && currentSpending <= 8000;
  const approachingDonutHole = currentSpending >= 3500 && currentSpending < 5030;

  trackMiamiDadePartDEvent('donut_hole_coverage_gap_education', {
    event_label: 'Coverage Gap Education',
    current_spending: currentSpending,
    in_donut_hole: inDonutHole,
    approaching_gap: approachingDonutHole,
    gap_coverage_interest: gapCoverageInterest,
    value: inDonutHole ? 50 : 35
  });
};

/**
 * Track preferred pharmacy network information
 */
export const trackPreferredPharmacyNetwork = (
  pharmacyName: string,
  costSavings?: number
) => {
  trackMiamiDadePartDEvent('preferred_pharmacy_network_view', {
    event_label: 'Preferred Pharmacy Lower Costs',
    pharmacy_name: pharmacyName,
    cost_savings: costSavings || 0,
    value: 35
  });
};

/**
 * Track Medication Therapy Management (MTM) interest
 */
export const trackMTMInterest = (
  qualifies: boolean,
  chronicConditions: number,
  medicationCount: number
) => {
  trackMiamiDadePartDEvent('medication_therapy_management_interest', {
    event_label: 'MTM Program Interest',
    qualifies_for_mtm: qualifies,
    chronic_conditions: chronicConditions,
    medication_count: medicationCount,
    high_medication_complexity: medicationCount >= 8,
    value: qualifies ? 45 : 30
  });
};

/**
 * Track regional pharmacy access by Miami-Dade zone
 */
export const trackRegionalPharmacyAccess = (
  region: 'downtown_miami' | 'north_miami_dade' | 'south_miami_dade' | 'west_miami_dade' | 'central_miami_dade' | 'beaches',
  pharmacyDensity: 'high' | 'medium' | 'low'
) => {
  const regionData: Record<string, { name: string; pharmacies: number; population: number }> = {
    downtown_miami: { name: 'Downtown Miami & Miami Beach', pharmacies: 180, population: 95000 },
    north_miami_dade: { name: 'North Miami-Dade & Hialeah', pharmacies: 240, population: 125000 },
    south_miami_dade: { name: 'South Miami-Dade & Homestead', pharmacies: 150, population: 78000 },
    west_miami_dade: { name: 'West Miami-Dade & Doral', pharmacies: 170, population: 88000 },
    central_miami_dade: { name: 'Central Miami-Dade', pharmacies: 120, population: 62000 },
    beaches: { name: 'Beaches & Coastal Communities', pharmacies: 90, population: 37000 }
  };

  const info = regionData[region];

  trackMiamiDadePartDEvent('pharmacy_network_view', {
    event_label: `${info.name} Pharmacy Access`,
    region: region,
    region_name: info.name,
    pharmacy_count: info.pharmacies,
    pharmacy_density: pharmacyDensity,
    population: info.population,
    value: 30
  });
};
