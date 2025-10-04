/**
 * Miami-Dade County Health Insurance Marketplace Analytics Tracking
 *
 * Specialized tracking for ACA Marketplace landing page performance
 * Focus: Subsidy eligibility, enrollment urgency, plan comparison, bilingual services
 * Market: 287,000+ Marketplace enrollees, 68% qualify for $0 premium plans
 */

import { event } from '@/lib/analytics';

export type MiamiDadeMarketplaceEventType =
  | 'subsidy_calculator_usage'
  | 'zero_premium_plan_interest'
  | 'open_enrollment_urgency_engagement'
  | 'special_enrollment_period_check'
  | 'income_verification_start'
  | 'bilingual_enrollment_request'
  | 'silver_plan_csr_interest'
  | 'hospital_network_comparison'
  | 'essential_health_benefits_view'
  | 'preventive_care_education'
  | 'family_coverage_inquiry'
  | 'medicaid_eligibility_check'
  | 'sep_qualifying_event_check'
  | 'plan_tier_comparison'
  | 'enrollment_application_start'
  | 'deadline_urgency_interaction'
  | 'bronze_plan_interest'
  | 'gold_platinum_plan_interest'
  | 'catastrophic_plan_inquiry';

/**
 * Base tracking function for all Miami-Dade Marketplace events
 */
export const trackMiamiDadeMarketplaceEvent = (
  eventType: MiamiDadeMarketplaceEventType,
  eventData?: Record<string, any>
) => {
  event(eventType, {
    event_category: 'Health Insurance Marketplace',
    county: 'Miami-Dade County',
    state: 'Florida',
    market_size: 287000,
    subsidy_eligible_rate: 68,
    enrollment_period: 'open', // or 'sep' for special enrollment
    ...eventData
  });
};

/**
 * Track subsidy calculator usage
 */
export const trackSubsidyCalculatorUsage = (
  householdSize: number,
  annualIncome: number,
  estimatedSubsidy?: number,
  zeroPremiumEligible?: boolean
) => {
  const fpl2025 = 15060; // 2025 Federal Poverty Level for individual
  const fplPercentage = (annualIncome / (fpl2025 + (householdSize - 1) * 5380)) * 100;

  trackMiamiDadeMarketplaceEvent('subsidy_calculator_usage', {
    event_label: 'ACA Subsidy Calculator Usage',
    household_size: householdSize,
    annual_income: annualIncome,
    fpl_percentage: Math.round(fplPercentage),
    estimated_subsidy: estimatedSubsidy || 0,
    zero_premium_eligible: zeroPremiumEligible || false,
    high_value_interaction: true,
    value: zeroPremiumEligible ? 85 : 60
  });
};

/**
 * Track $0 premium plan interest
 */
export const trackZeroPremiumPlanInterest = (
  planTier: 'bronze' | 'silver',
  monthlyPremium: number,
  subsidyAmount: number
) => {
  const afterSubsidyPremium = monthlyPremium - subsidyAmount;
  const isZeroPremium = afterSubsidyPremium <= 0;

  trackMiamiDadeMarketplaceEvent('zero_premium_plan_interest', {
    event_label: '$0 Premium Plan Interest',
    plan_tier: planTier,
    monthly_premium: monthlyPremium,
    subsidy_amount: subsidyAmount,
    after_subsidy_premium: Math.max(0, afterSubsidyPremium),
    zero_premium_achieved: isZeroPremium,
    value: isZeroPremium ? 75 : 50
  });
};

/**
 * Track Open Enrollment Period urgency engagement
 */
export const trackOpenEnrollmentUrgency = (
  daysRemaining: number,
  deadlineType: 'dec_15_jan_1_coverage' | 'jan_15_final_deadline',
  userEngagement: 'viewed' | 'clicked_cta' | 'started_enrollment'
) => {
  const urgencyLevel = daysRemaining <= 7 ? 'critical' : daysRemaining <= 30 ? 'high' : 'moderate';

  trackMiamiDadeMarketplaceEvent('open_enrollment_urgency_engagement', {
    event_label: 'Open Enrollment Deadline Urgency',
    days_remaining: daysRemaining,
    deadline_type: deadlineType,
    urgency_level: urgencyLevel,
    user_engagement: userEngagement,
    critical_period: daysRemaining <= 7,
    value: userEngagement === 'started_enrollment' ? 90 : userEngagement === 'clicked_cta' ? 60 : 30
  });
};

/**
 * Track Special Enrollment Period qualifying event check
 */
export const trackSEPQualifyingEventCheck = (
  eventType: 'job_loss' | 'marriage' | 'birth_adoption' | 'moved' | 'medicaid_loss' | 'citizenship' | 'incarceration_release' | 'income_change' | 'other',
  withinSixtyDays: boolean,
  documentationReady: boolean = false
) => {
  const eventValues: Record<string, number> = {
    job_loss: 80,
    marriage: 65,
    birth_adoption: 70,
    moved: 60,
    medicaid_loss: 75,
    citizenship: 70,
    incarceration_release: 65,
    income_change: 60,
    other: 50
  };

  trackMiamiDadeMarketplaceEvent('sep_qualifying_event_check', {
    event_label: 'SEP Qualifying Event Check',
    qualifying_event_type: eventType,
    within_sixty_days: withinSixtyDays,
    documentation_ready: documentationReady,
    sep_eligible: withinSixtyDays,
    value: eventValues[eventType]
  });
};

/**
 * Track income verification process
 */
export const trackIncomeVerification = (
  verificationType: 'paystubs' | 'tax_return' | 'employer_letter' | 'self_employed_1099' | 'social_security',
  incomeRange: 'under_15k' | '15k_36k' | '36k_50k' | '50k_75k' | 'over_75k',
  householdSize: number
) => {
  trackMiamiDadeMarketplaceEvent('income_verification_start', {
    event_label: 'Income Verification Process',
    verification_type: verificationType,
    income_range: incomeRange,
    household_size: householdSize,
    self_employed: verificationType === 'self_employed_1099',
    value: 55
  });
};

/**
 * Track bilingual enrollment request
 */
export const trackBilingualEnrollmentRequest = (
  language: 'spanish' | 'haitian_creole' | 'portuguese' | 'other',
  serviceType: 'phone_enrollment' | 'in_person_appointment' | 'document_translation' | 'plan_explanation',
  community?: string
) => {
  const languageData: Record<string, { label: string; value: number; communities: string }> = {
    spanish: {
      label: 'Spanish/Español',
      value: 70,
      communities: 'Little Havana, Hialeah, Westchester'
    },
    haitian_creole: {
      label: 'Haitian Creole/Kreyòl',
      value: 65,
      communities: 'Little Haiti, North Miami'
    },
    portuguese: {
      label: 'Portuguese/Português',
      value: 60,
      communities: 'Brazilian community'
    },
    other: {
      label: 'Other Language',
      value: 55,
      communities: 'Multi-cultural'
    }
  };

  const lang = languageData[language];

  trackMiamiDadeMarketplaceEvent('bilingual_enrollment_request', {
    event_label: `${lang.label} Marketplace Enrollment`,
    language: language,
    language_label: lang.label,
    service_type: serviceType,
    community: community || lang.communities,
    value: lang.value
  });
};

/**
 * Track Silver Plan CSR (Cost-Sharing Reduction) interest
 */
export const trackSilverPlanCSRInterest = (
  fplPercentage: number,
  csrLevel: '94av' | '87av' | '73av' | 'none',
  estimatedSavings?: number
) => {
  const csrLevels: Record<string, { label: string; value: number }> = {
    '94av': { label: '94% Actuarial Value (150% FPL)', value: 80 },
    '87av': { label: '87% Actuarial Value (200% FPL)', value: 75 },
    '73av': { label: '73% Actuarial Value (250% FPL)', value: 70 },
    'none': { label: 'No CSR (over 250% FPL)', value: 50 }
  };

  const csr = csrLevels[csrLevel];

  trackMiamiDadeMarketplaceEvent('silver_plan_csr_interest', {
    event_label: 'Silver Plan Cost-Sharing Reduction',
    fpl_percentage: fplPercentage,
    csr_level: csrLevel,
    csr_label: csr.label,
    estimated_savings: estimatedSavings || 0,
    high_csr_eligible: csrLevel === '94av' || csrLevel === '87av',
    value: csr.value
  });
};

/**
 * Track hospital network comparison
 */
export const trackHospitalNetworkComparison = (
  hospitalsCompared: string[],
  networkType: 'hmo' | 'ppo' | 'epo',
  priorityHospital?: string
) => {
  const majorHospitals: Record<string, number> = {
    'jackson_health': 70,
    'baptist_health': 75,
    'um_health': 75,
    'cleveland_clinic': 80,
    'mount_sinai': 65
  };

  trackMiamiDadeMarketplaceEvent('hospital_network_comparison', {
    event_label: 'Hospital Network Comparison',
    hospitals_compared: hospitalsCompared.join(', '),
    network_type: networkType,
    priority_hospital: priorityHospital || 'none',
    comparison_count: hospitalsCompared.length,
    value: 60
  });
};

/**
 * Track Essential Health Benefits education
 */
export const trackEssentialHealthBenefitsView = (
  benefitCategory: 'medical_services' | 'pharmacy_specialty' | 'family_services' | 'preventive_care' | 'all',
  timeSpent?: number
) => {
  trackMiamiDadeMarketplaceEvent('essential_health_benefits_view', {
    event_label: 'Essential Health Benefits Education',
    benefit_category: benefitCategory,
    time_spent: timeSpent || 0,
    comprehensive_view: benefitCategory === 'all',
    value: 35
  });
};

/**
 * Track preventive care education
 */
export const trackPreventiveCareEducation = (
  serviceType: 'annual_checkup' | 'cancer_screening' | 'immunizations' | 'well_woman' | 'blood_pressure' | 'diabetes_screening',
  zeroCopayUnderstanding: boolean = false
) => {
  trackMiamiDadeMarketplaceEvent('preventive_care_education', {
    event_label: 'Preventive Care $0 Copay Education',
    service_type: serviceType,
    zero_copay_understood: zeroCopayUnderstanding,
    value: 40
  });
};

/**
 * Track family coverage inquiry
 */
export const trackFamilyCoverageInquiry = (
  familySize: number,
  childrenCount: number,
  adultsCount: number,
  estimatedPremium?: number
) => {
  trackMiamiDadeMarketplaceEvent('family_coverage_inquiry', {
    event_label: 'Family Coverage Inquiry',
    family_size: familySize,
    children_count: childrenCount,
    adults_count: adultsCount,
    estimated_premium: estimatedPremium || 0,
    large_family: familySize >= 5,
    value: familySize >= 5 ? 85 : 65
  });
};

/**
 * Track Medicaid eligibility check
 */
export const trackMedicaidEligibilityCheck = (
  annualIncome: number,
  householdSize: number,
  category: 'adult_expansion' | 'pregnant_women' | 'children_chip' | 'disabled' | 'elderly'
) => {
  const fpl2025 = 15060 + (householdSize - 1) * 5380;
  const fplPercentage = (annualIncome / fpl2025) * 100;
  const medicaidEligible = fplPercentage <= 138; // Florida Medicaid expansion threshold

  trackMiamiDadeMarketplaceEvent('medicaid_eligibility_check', {
    event_label: 'Medicaid Eligibility Check',
    annual_income: annualIncome,
    household_size: householdSize,
    fpl_percentage: Math.round(fplPercentage),
    category: category,
    medicaid_eligible: medicaidEligible,
    value: medicaidEligible ? 70 : 45
  });
};

/**
 * Track plan tier comparison
 */
export const trackPlanTierComparison = (
  tiersCompared: ('bronze' | 'silver' | 'gold' | 'platinum' | 'catastrophic')[],
  primaryConsideration: 'premium' | 'deductible' | 'out_of_pocket_max' | 'network' | 'subsidies',
  timeSpent?: number
) => {
  trackMiamiDadeMarketplaceEvent('plan_tier_comparison', {
    event_label: 'Plan Tier Comparison',
    tiers_compared: tiersCompared.join(', '),
    comparison_count: tiersCompared.length,
    primary_consideration: primaryConsideration,
    time_spent: timeSpent || 0,
    comprehensive_comparison: tiersCompared.length >= 3,
    value: tiersCompared.length >= 3 ? 70 : 50
  });
};

/**
 * Track enrollment application start
 */
export const trackEnrollmentApplicationStart = (
  enrollmentType: 'open_enrollment' | 'special_enrollment',
  assistanceNeeded: boolean = false,
  planSelected?: string
) => {
  trackMiamiDadeMarketplaceEvent('enrollment_application_start', {
    event_label: 'Marketplace Enrollment Application Started',
    enrollment_type: enrollmentType,
    assistance_needed: assistanceNeeded,
    plan_selected: planSelected || 'not_selected',
    high_value_conversion: true,
    value: 100
  });
};

/**
 * Track deadline urgency interaction
 */
export const trackDeadlineUrgencyInteraction = (
  deadline: 'december_15' | 'january_15',
  action: 'viewed_alert' | 'clicked_enroll' | 'set_reminder' | 'shared'
) => {
  const actionValues: Record<string, number> = {
    viewed_alert: 25,
    clicked_enroll: 75,
    set_reminder: 45,
    shared: 35
  };

  trackMiamiDadeMarketplaceEvent('deadline_urgency_interaction', {
    event_label: 'Open Enrollment Deadline Alert',
    deadline: deadline,
    deadline_label: deadline === 'december_15' ? 'Dec 15 (Jan 1 coverage)' : 'Jan 15 (Final deadline)',
    action: action,
    value: actionValues[action]
  });
};

/**
 * Track Bronze plan interest (low premium)
 */
export const trackBronzePlanInterest = (
  monthlyPremium: number,
  deductible: number,
  afterSubsidy?: number
) => {
  trackMiamiDadeMarketplaceEvent('bronze_plan_interest', {
    event_label: 'Bronze Plan Low Premium Interest',
    monthly_premium: monthlyPremium,
    deductible: deductible,
    after_subsidy_premium: afterSubsidy || monthlyPremium,
    zero_premium_bronze: (afterSubsidy || monthlyPremium) <= 0,
    value: 55
  });
};

/**
 * Track Gold/Platinum plan interest (comprehensive coverage)
 */
export const trackGoldPlatinumPlanInterest = (
  planTier: 'gold' | 'platinum',
  monthlyPremium: number,
  outOfPocketMax: number,
  chronicCondition: boolean = false
) => {
  trackMiamiDadeMarketplaceEvent('gold_platinum_plan_interest', {
    event_label: `${planTier.charAt(0).toUpperCase() + planTier.slice(1)} Plan Comprehensive Coverage`,
    plan_tier: planTier,
    monthly_premium: monthlyPremium,
    out_of_pocket_max: outOfPocketMax,
    chronic_condition: chronicCondition,
    value: chronicCondition ? 75 : 60
  });
};

/**
 * Track Catastrophic plan inquiry (under 30 or hardship)
 */
export const trackCatastrophicPlanInquiry = (
  age: number,
  hardshipExemption: boolean = false,
  reasonForInterest: 'low_premium' | 'young_healthy' | 'hardship' | 'other'
) => {
  const under30Eligible = age < 30;
  const eligible = under30Eligible || hardshipExemption;

  trackMiamiDadeMarketplaceEvent('catastrophic_plan_inquiry', {
    event_label: 'Catastrophic Plan Inquiry',
    age: age,
    under_30_eligible: under30Eligible,
    hardship_exemption: hardshipExemption,
    eligible: eligible,
    reason_for_interest: reasonForInterest,
    value: 45
  });
};

/**
 * Track regional marketplace engagement by Miami-Dade zone
 */
export const trackRegionalMarketplaceEngagement = (
  region: 'downtown_miami' | 'hialeah_north' | 'kendall_south' | 'west_doral' | 'homestead' | 'little_haiti_havana',
  uninsuredRate: number,
  averageSubsidy: number
) => {
  const regionData: Record<string, { name: string; population: number }> = {
    downtown_miami: { name: 'Downtown Miami & Miami Beach', population: 485000 },
    hialeah_north: { name: 'Hialeah & North Miami-Dade', population: 620000 },
    kendall_south: { name: 'Kendall & South Miami-Dade', population: 550000 },
    west_doral: { name: 'West Miami-Dade & Doral', population: 445000 },
    homestead: { name: 'Homestead & South Dade', population: 285000 },
    little_haiti_havana: { name: 'Little Haiti & Little Havana', population: 332000 }
  };

  const info = regionData[region];

  trackMiamiDadeMarketplaceEvent('subsidy_calculator_usage', {
    event_label: `${info.name} Marketplace Engagement`,
    region: region,
    region_name: info.name,
    population: info.population,
    uninsured_rate: uninsuredRate,
    average_subsidy: averageSubsidy,
    high_uninsured_area: uninsuredRate >= 18,
    value: 45
  });
};
