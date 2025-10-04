export interface LandingPageConfig {
  pageName: string;
  pageType: 'county' | 'regional' | 'product' | 'comparison' | 'guide';
  primaryConversions: string[];
  trackingGoals: {
    phoneCallValue: number;
    formSubmissionValue: number;
    quoteCTAValue: number;
    contentEngagementThreshold: number; // seconds
  };
  keyMetrics: string[];
  audienceSegments: string[];
}

export const landingPageAnalyticsConfig: Record<string, LandingPageConfig> = {
  'gwinnett-county-georgia': {
    pageName: 'Medicare Advantage Plans Gwinnett County Georgia',
    pageType: 'county',
    primaryConversions: ['phone_call', 'get_quote', 'contact_form'],
    trackingGoals: {
      phoneCallValue: 75, // High value for county-specific leads
      formSubmissionValue: 50,
      quoteCTAValue: 35,
      contentEngagementThreshold: 90, // 1.5 minutes for county pages
    },
    keyMetrics: ['totalEnrollment', 'maPenetrationRate', 'diversityIndex', 'opportunityScore'],
    audienceSegments: ['suburban_families', 'hispanic_community', 'asian_american_community', 'growing_communities']
  },

  'long-term-care-insurance': {
    pageName: 'Long Term Care Insurance',
    pageType: 'product',
    primaryConversions: ['phone_call', 'get_quote', 'download_guide'],
    trackingGoals: {
      phoneCallValue: 100, // Very high value for LTC insurance
      formSubmissionValue: 75,
      quoteCTAValue: 50,
      contentEngagementThreshold: 120, // 2 minutes for complex product
    },
    keyMetrics: ['cost_calculator_usage', 'benefit_comparison_views', 'provider_selection'],
    audienceSegments: ['pre_retirees', 'family_caregivers', 'high_net_worth', 'healthcare_planners']
  },

  'medicare': {
    pageName: 'Medicare Guide',
    pageType: 'guide',
    primaryConversions: ['phone_call', 'specialist_consultation', 'plan_comparison'],
    trackingGoals: {
      phoneCallValue: 60,
      formSubmissionValue: 40,
      quoteCTAValue: 30,
      contentEngagementThreshold: 180, // 3 minutes for comprehensive guide
    },
    keyMetrics: ['guide_section_completion', 'plan_type_comparison', 'enrollment_timeline_views'],
    audienceSegments: ['new_medicare_eligible', 'current_medicare_users', 'medicare_caregivers']
  },

  'how-will-medicare-benefit-you': {
    pageName: 'How Will Medicare Benefit You',
    pageType: 'guide',
    primaryConversions: ['explore_benefits', 'calculate_savings', 'contact_specialist'],
    trackingGoals: {
      phoneCallValue: 50,
      formSubmissionValue: 35,
      quoteCTAValue: 25,
      contentEngagementThreshold: 150, // 2.5 minutes for benefit education
    },
    keyMetrics: ['benefit_interaction', 'savings_calculator_usage', 'faq_engagement'],
    audienceSegments: ['medicare_curious', 'benefit_researchers', 'cost_conscious', 'health_focused']
  },

  'san-francisco-county': {
    pageName: 'Medicare Advantage San Francisco County',
    pageType: 'county',
    primaryConversions: ['phone_call', 'get_quote', 'provider_search'],
    trackingGoals: {
      phoneCallValue: 85, // High value for high-cost area
      formSubmissionValue: 60,
      quoteCTAValue: 40,
      contentEngagementThreshold: 90,
    },
    keyMetrics: ['totalEnrollment', 'maPenetrationRate', 'highCostArea', 'providerDensity'],
    audienceSegments: ['urban_professionals', 'tech_retirees', 'healthcare_conscious', 'high_income']
  },

  'duval-county-florida': {
    pageName: 'Medicare Advantage Duval County Florida',
    pageType: 'county',
    primaryConversions: ['phone_call', 'get_quote', 'plan_comparison'],
    trackingGoals: {
      phoneCallValue: 70,
      formSubmissionValue: 45,
      quoteCTAValue: 30,
      contentEngagementThreshold: 90,
    },
    keyMetrics: ['totalEnrollment', 'maPenetrationRate', 'hospitalNetworks', 'retireePopulation'],
    audienceSegments: ['florida_retirees', 'military_veterans', 'snowbirds', 'cost_conscious']
  },

  'duke-vs-unc-rex-medicare-advantage-wake-county': {
    pageName: 'Duke vs UNC REX Medicare Advantage Wake County',
    pageType: 'comparison',
    primaryConversions: ['phone_call', 'compare_plans', 'provider_search'],
    trackingGoals: {
      phoneCallValue: 80, // High value for provider comparison
      formSubmissionValue: 55,
      quoteCTAValue: 35,
      contentEngagementThreshold: 120, // Longer for comparison content
    },
    keyMetrics: ['providerComparison', 'hospitalNetworks', 'planFeatureComparison'],
    audienceSegments: ['provider_loyal', 'comparison_shoppers', 'healthcare_researchers', 'quality_focused']
  },

  'medicare-supplement-plan-n': {
    pageName: 'Medicare Supplement Plan N',
    pageType: 'product',
    primaryConversions: ['phone_call', 'get_quote', 'plan_comparison'],
    trackingGoals: {
      phoneCallValue: 90, // High value for supplement plans
      formSubmissionValue: 65,
      quoteCTAValue: 45,
      contentEngagementThreshold: 120,
    },
    keyMetrics: ['costComparison', 'benefitAnalysis', 'planNSpecificEngagement'],
    audienceSegments: ['cost_conscious', 'comprehensive_coverage_seekers', 'plan_g_alternatives', 'copay_tolerant']
  },

  // New landing pages configurations
  'medicare-advantage-maui-county-hawaii': {
    pageName: 'Medicare Advantage Plans Maui County Hawaii',
    pageType: 'county',
    primaryConversions: ['phone_call', 'get_quote', 'provider_search'],
    trackingGoals: {
      phoneCallValue: 95, // High value for Hawaii's unique market
      formSubmissionValue: 70,
      quoteCTAValue: 50,
      contentEngagementThreshold: 100, // Island-specific content engagement
    },
    keyMetrics: ['totalBeneficiaries', 'maPenetration', 'islandAccessibility', 'interIslandCoverage'],
    audienceSegments: ['hawaiian_residents', 'mainland_retirees', 'snowbirds', 'native_hawaiian_pacific_islander']
  },

  'medicare-advantage-cobb-county-georgia': {
    pageName: 'Medicare Advantage Plans Cobb County Georgia',
    pageType: 'county',
    primaryConversions: ['phone_call', 'get_quote', 'network_search'],
    trackingGoals: {
      phoneCallValue: 80, // High value for affluent Atlanta suburb
      formSubmissionValue: 55,
      quoteCTAValue: 35,
      contentEngagementThreshold: 90,
    },
    keyMetrics: ['totalBeneficiaries', 'maPenetration', 'affluenceIndex', 'atlantaMetroAccess'],
    audienceSegments: ['affluent_suburban', 'atlanta_metro', 'corporate_retirees', 'healthcare_conscious']
  },

  'medicare-advantage-fresno-county-california': {
    pageName: 'Medicare Advantage Plans Fresno County California',
    pageType: 'county',
    primaryConversions: ['phone_call', 'get_quote', 'bilingual_support'],
    trackingGoals: {
      phoneCallValue: 75,
      formSubmissionValue: 50,
      quoteCTAValue: 30,
      contentEngagementThreshold: 95, // Bilingual content consideration
    },
    keyMetrics: ['totalBeneficiaries', 'hispanicPopulation', 'bilingualServices', 'agriculturalCommunity'],
    audienceSegments: ['hispanic_community', 'agricultural_workers', 'central_valley_residents', 'bilingual_preferred']
  },

  'medicare-cost-calculator': {
    pageName: 'Medicare Cost Calculator',
    pageType: 'product',
    primaryConversions: ['calculator_completion', 'phone_call', 'get_personalized_quote'],
    trackingGoals: {
      phoneCallValue: 85, // High value for calculator users
      formSubmissionValue: 60,
      quoteCTAValue: 40,
      contentEngagementThreshold: 150, // Interactive tool engagement
    },
    keyMetrics: ['calculatorUsage', 'resultGeneration', 'costEstimateRanges', 'followUpActions'],
    audienceSegments: ['cost_researchers', 'comparison_shoppers', 'budget_conscious', 'planning_ahead']
  },

  'medicare-advantage-broward-county-florida': {
    pageName: 'Medicare Advantage Plans Broward County Florida',
    pageType: 'county',
    primaryConversions: ['phone_call', 'get_quote', 'florida_specialist'],
    trackingGoals: {
      phoneCallValue: 78, // High value for South Florida market
      formSubmissionValue: 52,
      quoteCTAValue: 33,
      contentEngagementThreshold: 85,
    },
    keyMetrics: ['totalBeneficiaries', 'maPenetration', 'retireeInflux', 'multilingualServices'],
    audienceSegments: ['south_florida_retirees', 'snowbirds', 'hispanic_community', 'beach_communities']
  },

  'disability-insurance': {
    pageName: 'Disability Insurance Coverage',
    pageType: 'product',
    primaryConversions: ['phone_call', 'get_quote', 'coverage_calculator'],
    trackingGoals: {
      phoneCallValue: 120, // Very high value for disability insurance
      formSubmissionValue: 95,
      quoteCTAValue: 70,
      contentEngagementThreshold: 180, // Complex product requiring education
    },
    keyMetrics: ['incomeProtectionCalculation', 'benefitComparison', 'employerVsIndividual', 'riskAssessment'],
    audienceSegments: ['income_protectors', 'high_earners', 'self_employed', 'family_providers']
  },

  'inova-vs-kaiser-medicare-advantage-fairfax': {
    pageName: 'Inova vs Kaiser Permanente Medicare Advantage Fairfax County',
    pageType: 'comparison',
    primaryConversions: ['phone_call', 'compare_plans', 'schedule_consultation', 'hospital_network_search'],
    trackingGoals: {
      phoneCallValue: 90, // Very high value for Fairfax County premium market
      formSubmissionValue: 65,
      quoteCTAValue: 45,
      contentEngagementThreshold: 140, // Longer for detailed hospital comparison content (3,800 words)
    },
    keyMetrics: [
      'hospitalNetworkComparison',
      'inovaVsKaiserEngagement',
      'providerPreferenceSelection',
      'networkTypeComparison',
      'costComparisonTableViews',
      'qualityMetricsEngagement',
      'geographicCoverageInteraction',
      'scrollToSwitchingSection',
      'decisionFrameworkEngagement'
    ],
    audienceSegments: [
      'fairfax_county_residents',
      'northern_virginia_seniors',
      'hospital_comparison_shoppers',
      'inova_affiliated_patients',
      'kaiser_existing_members',
      'network_flexibility_seekers',
      'integrated_care_advocates',
      'affluent_suburban_retirees',
      'provider_loyal_consumers',
      'cost_vs_quality_researchers'
    ]
  },

  'medicare-supplement-monroe-county': {
    pageName: 'Medicare Supplement Monroe County Florida Keys',
    pageType: 'county',
    primaryConversions: ['phone_call', 'get_quote', 'specialist_consultation', 'hurricane_coverage_inquiry'],
    trackingGoals: {
      phoneCallValue: 85, // High value for unique island market with limited competition
      formSubmissionValue: 60,
      quoteCTAValue: 40,
      contentEngagementThreshold: 130, // Longer for island healthcare complexity (2,800 words)
    },
    keyMetrics: [
      'islandHealthcareEngagement',
      'hurricanePreparednessInterest',
      'snowbirdCoverageInterest',
      'mainlandSpecialistAccessViews',
      'costBenefitAnalysisInteraction',
      'criticalAccessHospitalInfo',
      'medigapPlanComparison',
      'keysRegionalExploration',
      'airAmbulanceCoverageInterest',
      'baptistHealthNetworkInterest',
      'evacuationCoverageInterest',
      'seasonalUrgencyTracking'
    ],
    audienceSegments: [
      'florida_keys_residents',
      'snowbird_seasonal_residents',
      'hurricane_zone_seniors',
      'island_healthcare_consumers',
      'mainland_specialist_dependent',
      'critical_access_hospital_users',
      'high_cost_healthcare_area',
      'geographic_isolation_concerned',
      'evacuation_coverage_seekers',
      'network_flexibility_prioritizers',
      'upper_keys_residents',
      'middle_keys_residents',
      'lower_keys_residents',
      'key_west_seniors',
      'marathon_seniors',
      'key_largo_seniors'
    ]
  },

  'medicare-supplement-miami-dade-county': {
    pageName: 'Medicare Supplement Miami-Dade County South Florida',
    pageType: 'county',
    primaryConversions: ['phone_call', 'get_quote', 'bilingual_consultation', 'hospital_network_inquiry'],
    trackingGoals: {
      phoneCallValue: 95, // Very high value for largest FL county market, 485K beneficiaries
      formSubmissionValue: 70,
      quoteCTAValue: 50,
      contentEngagementThreshold: 150, // Longer for comprehensive urban market content (4,200 words)
    },
    keyMetrics: [
      'urbanHealthcareEngagement',
      'bilingualServiceInterest',
      'internationalTravelCoverage',
      'hospitalNetworkAccess',
      'jacksonHealthSystemInterest',
      'baptistHealthEngagement',
      'umHealthSpecialistInterest',
      'clevelandClinicAccess',
      'regionalZoneExploration',
      'costComparisonAnalysis',
      'medigapPlanSelection',
      'snowbirdFlexibilityInterest',
      'culturalCompetencyCare',
      'spanishLanguageSupport'
    ],
    audienceSegments: [
      'miami_dade_residents',
      'downtown_miami_seniors',
      'miami_beach_residents',
      'hialeah_seniors',
      'north_miami_dade_residents',
      'south_miami_dade_homestead',
      'west_miami_dade_doral',
      'central_miami_little_havana',
      'coastal_communities_seniors',
      'bilingual_spanish_speakers',
      'haitian_creole_community',
      'international_travelers',
      'snowbird_multi_state_residents',
      'premium_hospital_seekers',
      'jackson_health_users',
      'um_health_cleveland_clinic_patients',
      'baptist_health_network_users',
      'culturally_diverse_seniors',
      'high_utilization_healthcare_consumers',
      'affluent_coral_gables_pinecrest'
    ]
  },

  'medicare-part-d-miami-dade-county': {
    pageName: 'Medicare Part D Miami-Dade County Prescription Drug Coverage',
    pageType: 'county',
    primaryConversions: ['phone_call', 'formulary_lookup', 'plan_comparison', 'extra_help_application'],
    trackingGoals: {
      phoneCallValue: 80, // High value for Part D enrollment in largest FL market
      formSubmissionValue: 60,
      quoteCTAValue: 45,
      contentEngagementThreshold: 140, // Longer for comprehensive Part D content (3,800 words)
    },
    keyMetrics: [
      'pharmacyNetworkInterest',
      'formularyLookupUsage',
      'drugCoverageCheck',
      'planComparisonEngagement',
      'extraHelpEligibilityInterest',
      'bilingualPharmacyServices',
      'chronicConditionCoverage',
      'costTierAnalysis',
      'mailOrderInterest',
      'cvsPharmaNetworkAccess',
      'walgreensPharmacyEngagement',
      'publixPharmacyInterest',
      'navarroSedanosCommunityPharmacy',
      'spanishLanguagePharmacistSupport'
    ],
    audienceSegments: [
      'miami_dade_part_d_enrollees',
      'prescription_drug_users',
      'chronic_condition_patients',
      'diabetes_medication_users',
      'cardiac_medication_users',
      'respiratory_medication_users',
      'extra_help_eligible_seniors',
      'bilingual_spanish_pharmacy_users',
      'haitian_creole_pharmacy_community',
      'hialeah_pharmacy_users',
      'miami_beach_pharmacy_users',
      'little_havana_pharmacy_users',
      'little_haiti_pharmacy_users',
      'cvs_caremark_network_users',
      'walgreens_pharmacy_users',
      'publix_pharmacy_users',
      'navarro_sedanos_community',
      'mail_order_prescription_users',
      'specialty_drug_users',
      'high_cost_medication_users'
    ]
  },

  // Miami-Dade County Health Insurance Marketplace
  'health-insurance-marketplace-miami-dade-county': {
    pageName: 'Health Insurance Marketplace Miami-Dade County ACA Plans',
    pageType: 'county',
    primaryConversions: ['phone_call', 'subsidy_calculator', 'enrollment_start', 'plan_comparison'],
    trackingGoals: {
      phoneCallValue: 125, // Very high value for ACA enrollment
      formSubmissionValue: 85,
      quoteCTAValue: 65,
      contentEngagementThreshold: 180,
    },
    keyMetrics: [
      'subsidyCalculatorUsage',
      'zeroPremiumPlanInterest',
      'openEnrollmentUrgency',
      'specialEnrollmentPeriodCheck',
      'incomeVerificationEngagement',
      'bilingualEnrollmentRequest',
      'silverPlanCSRInterest',
      'hospitalNetworkComparison',
      'essentialHealthBenefitsView',
      'preventiveCareEducation',
      'familyCoverageInquiry',
      'medicaidEligibilityCheck',
      'sEPQualifyingEventCheck',
      'planTierComparison'
    ],
    audienceSegments: [
      'miami_dade_marketplace_shoppers',
      'subsidy_eligible_residents',
      'zero_premium_qualified',
      'open_enrollment_period_shoppers',
      'special_enrollment_qualified',
      'bilingual_spanish_enrollees',
      'haitian_creole_community',
      'hialeah_marketplace_residents',
      'miami_beach_aca_shoppers',
      'little_havana_enrollees',
      'little_haiti_marketplace',
      'uninsured_miami_dade_residents',
      'silver_plan_csr_eligible',
      'family_coverage_seekers',
      'young_adults_under_26',
      'self_employed_entrepreneurs',
      'gig_economy_workers',
      'recent_job_loss_sep',
      'income_change_sep_eligible',
      'medicaid_expansion_eligible'
    ]
  },

  // Broward County Medicare Supplement
  'medicare-supplement-broward-county': {
    pageName: 'Medicare Supplement Broward County Fort Lauderdale Medigap',
    pageType: 'county',
    primaryConversions: ['phone_call', 'get_quote', 'plan_comparison', 'specialist_consultation'],
    trackingGoals: {
      phoneCallValue: 90, // Very high value for 2nd largest FL county, 365K beneficiaries
      formSubmissionValue: 65,
      quoteCTAValue: 45,
      contentEngagementThreshold: 145, // Longer for comprehensive Medigap content (5,200 words)
    },
    keyMetrics: [
      'medigapPlanGInterest',
      'medigapPlanNComparison',
      'annualCostCalculatorUsage',
      'hospitalNetworkAccess',
      'snowbirdTravelCoverage',
      'internationalTravelInterest',
      'caribbeanCruiseCoverage',
      'enrollmentTimingEducation',
      'guaranteedIssueRightsInterest',
      'medicalUnderwritingConcerns',
      'clevelandClinicFloridaAccess',
      'memorialHealthcareEngagement',
      'browardHealthNetworkInterest',
      'holyCrossHealthInterest',
      'fortLauderdaleZoneExploration',
      'pembrokePinesInterest',
      'hollywoodFLEngagement',
      'coralSpringsInterest',
      'pompanoBeachInterest',
      'plantationSunriseInterest'
    ],
    audienceSegments: [
      'broward_county_residents',
      'fort_lauderdale_seniors',
      'pembroke_pines_seniors',
      'hollywood_fl_seniors',
      'coral_springs_seniors',
      'pompano_beach_seniors',
      'plantation_sunrise_seniors',
      'south_florida_snowbirds',
      'beach_community_residents',
      'cleveland_clinic_florida_patients',
      'memorial_healthcare_users',
      'broward_health_network_users',
      'holy_cross_health_patients',
      'medigap_plan_g_seekers',
      'medigap_plan_n_cost_conscious',
      'travel_coverage_prioritizers',
      'caribbean_cruise_travelers',
      'international_travel_seniors',
      'network_freedom_seekers',
      'guaranteed_issue_period_enrollees',
      'medical_underwriting_concerned'
    ]
  },

  // Palm Beach County Medicare Supplement
  'medicare-supplement-palm-beach-county': {
    pageName: 'Medicare Supplement Palm Beach County West Palm Beach Medigap',
    pageType: 'county',
    primaryConversions: ['phone_call', 'get_quote', 'plan_comparison', 'specialist_consultation'],
    trackingGoals: {
      phoneCallValue: 95, // Highest value for FL's largest Medicare market, 455K beneficiaries
      formSubmissionValue: 70,
      quoteCTAValue: 50,
      contentEngagementThreshold: 150, // Longer for comprehensive Medigap content
    },
    keyMetrics: [
      'medigapPlanGInterest',
      'medigapPlanNComparison',
      'highDeductiblePlanGInterest',
      'annualCostCalculatorUsage',
      'hospitalNetworkAccess',
      'snowbirdTravelCoverage',
      'internationalTravelInterest',
      'enrollmentTimingEducation',
      'guaranteedIssueRightsInterest',
      'medicalUnderwritingConcerns',
      'jupiterMedicalCenterAccess',
      'palmBeachGardensMedicalEngagement',
      'bocaRatonRegionalHospitalInterest',
      'bethhesdaHospitalEastAccess',
      'stMarysWestPalmBeachInterest',
      'westPalmBeachZoneExploration',
      'bocaRatonInterest',
      'delrayBeachEngagement',
      'wellingtonInterest',
      'boyntonBeachInterest',
      'jupiterPalmBeachGardensInterest'
    ],
    audienceSegments: [
      'palm_beach_county_residents',
      'west_palm_beach_seniors',
      'boca_raton_seniors',
      'delray_beach_seniors',
      'wellington_seniors',
      'boynton_beach_seniors',
      'jupiter_palm_beach_gardens_seniors',
      'south_florida_snowbirds',
      'affluent_retirees',
      'beach_community_residents',
      'active_adult_communities',
      'century_village_residents',
      'kings_point_residents',
      'jupiter_medical_center_patients',
      'boca_raton_regional_hospital_users',
      'bethesda_hospital_patients',
      'medigap_plan_g_seekers',
      'medigap_plan_n_cost_conscious',
      'high_deductible_plan_g_seekers',
      'travel_coverage_prioritizers',
      'network_freedom_seekers',
      'guaranteed_issue_period_enrollees',
      'medical_underwriting_concerned',
      'equestrian_community_members',
      'cleveland_clinic_access_seekers'
    ]
  },

  // Broward County Medicare Part D
  'medicare-part-d-broward-county': {
    pageName: 'Medicare Part D Broward County Fort Lauderdale Prescription Drug Coverage',
    pageType: 'county',
    primaryConversions: ['phone_call', 'formulary_lookup', 'plan_comparison', 'extra_help_application'],
    trackingGoals: {
      phoneCallValue: 85, // High value for Part D enrollment in 2nd largest FL market
      formSubmissionValue: 65,
      quoteCTAValue: 50,
      contentEngagementThreshold: 150, // Longer for comprehensive Part D content (4,500+ words)
    },
    keyMetrics: [
      'pharmacyNetworkInterest',
      'formularyLookupUsage',
      'drugCoverageCheck',
      'planComparisonEngagement',
      'extraHelpEligibilityInterest',
      'coverageGapEducation',
      'donutHoleConcerns',
      'genericSubstitutionInterest',
      'mailOrderPharmacyUsage',
      'cvsPharmaNetworkAccess',
      'walgreensPharmacyEngagement',
      'publixPharmacyInterest',
      'costcoPharmacyInterest',
      'fortLauderdalePharmacyAccess',
      'pembrokePinesPharmacyInterest',
      'hollywoodPharmacyEngagement',
      'coralSpringsPharmacyInterest',
      'pompanoBeachPharmacyInterest',
      'lateEnrollmentPenaltyConcerns',
      'enrollmentPeriodEducation'
    ],
    audienceSegments: [
      'broward_county_part_d_enrollees',
      'fort_lauderdale_prescription_users',
      'pembroke_pines_pharmacy_users',
      'hollywood_fl_pharmacy_users',
      'coral_springs_prescription_users',
      'pompano_beach_pharmacy_users',
      'plantation_sunrise_pharmacy_users',
      'chronic_condition_patients',
      'diabetes_medication_users',
      'cardiac_medication_users',
      'respiratory_medication_users',
      'extra_help_eligible_seniors',
      'coverage_gap_concerned',
      'cvs_caremark_network_users',
      'walgreens_pharmacy_users',
      'publix_pharmacy_users',
      'costco_pharmacy_users',
      'mail_order_prescription_users',
      'specialty_drug_users',
      'high_cost_medication_users',
      'generic_medication_users'
    ]
  },

  // Palm Beach County Medicare Part D
  'medicare-part-d-palm-beach-county': {
    pageName: 'Medicare Part D Palm Beach County West Palm Beach Prescription Drug Coverage',
    pageType: 'county',
    primaryConversions: ['phone_call', 'formulary_lookup', 'plan_comparison', 'extra_help_application'],
    trackingGoals: {
      phoneCallValue: 90, // Highest value for Part D in FL's largest Medicare market
      formSubmissionValue: 70,
      quoteCTAValue: 55,
      contentEngagementThreshold: 155, // Comprehensive Part D content with medication focus
    },
    keyMetrics: [
      'pharmacyNetworkInterest',
      'formularyLookupUsage',
      'drugCoverageCheck',
      'planComparisonEngagement',
      'extraHelpEligibilityInterest',
      'coverageGapEducation',
      'donutHoleConcerns',
      'genericSubstitutionInterest',
      'mailOrderPharmacyUsage',
      'cvsPharmaNetworkAccess',
      'walgreensPharmacyEngagement',
      'publixPharmacyInterest',
      'costcoPharmacyInterest',
      'westPalmBeachPharmacyAccess',
      'bocaRatonPharmacyInterest',
      'delrayBeachPharmacyEngagement',
      'wellingtonPharmacyInterest',
      'boyntonBeachPharmacyInterest',
      'jupiterPharmacyAccess',
      'lateEnrollmentPenaltyConcerns',
      'enrollmentPeriodEducation'
    ],
    audienceSegments: [
      'palm_beach_county_part_d_enrollees',
      'west_palm_beach_prescription_users',
      'boca_raton_pharmacy_users',
      'delray_beach_pharmacy_users',
      'wellington_prescription_users',
      'boynton_beach_pharmacy_users',
      'jupiter_palm_beach_gardens_pharmacy_users',
      'affluent_retirees_prescription_users',
      'chronic_condition_patients',
      'diabetes_medication_users',
      'cardiac_medication_users',
      'respiratory_medication_users',
      'extra_help_eligible_seniors',
      'coverage_gap_concerned',
      'cvs_caremark_network_users',
      'walgreens_pharmacy_users',
      'publix_pharmacy_users',
      'costco_pharmacy_users',
      'winn_dixie_pharmacy_users',
      'mail_order_prescription_users',
      'specialty_drug_users',
      'high_cost_medication_users',
      'generic_medication_users',
      'snowbird_prescription_travelers'
    ]
  },

  // Broward County Health Insurance Marketplace
  'health-insurance-marketplace-broward-county': {
    pageName: 'Health Insurance Marketplace Broward County Fort Lauderdale ACA Plans',
    pageType: 'county',
    primaryConversions: ['phone_call', 'subsidy_calculator', 'enrollment_start', 'plan_comparison'],
    trackingGoals: {
      phoneCallValue: 125, // Very high value for ACA enrollment in 2nd largest FL market
      formSubmissionValue: 85,
      quoteCTAValue: 65,
      contentEngagementThreshold: 180, // Longer for comprehensive ACA content
    },
    keyMetrics: [
      'subsidyCalculatorUsage',
      'zeroPremiumPlanInterest',
      'openEnrollmentUrgency',
      'specialEnrollmentPeriodCheck',
      'incomeVerificationEngagement',
      'silverPlanCSRInterest',
      'hospitalNetworkComparison',
      'essentialHealthBenefitsView',
      'preventiveCareEducation',
      'familyCoverageInquiry',
      'medicaidEligibilityCheck',
      'sEPQualifyingEventCheck',
      'planTierComparison',
      'fortLauderdaleCoverageInterest',
      'pembrokePinesEnrollmentInterest',
      'hollywoodMarketplaceEngagement',
      'coralSpringsACAInterest',
      'pompanoBeachMarketplaceInterest',
      'zeroPremiumQualificationCheck',
      'subsidyEligibilityCalculation'
    ],
    audienceSegments: [
      'broward_county_marketplace_shoppers',
      'fort_lauderdale_aca_enrollees',
      'pembroke_pines_marketplace_residents',
      'hollywood_fl_marketplace_shoppers',
      'coral_springs_aca_eligible',
      'pompano_beach_marketplace_residents',
      'plantation_sunrise_aca_shoppers',
      'subsidy_eligible_residents',
      'zero_premium_qualified',
      'open_enrollment_period_shoppers',
      'special_enrollment_qualified',
      'uninsured_broward_residents',
      'silver_plan_csr_eligible',
      'family_coverage_seekers',
      'young_adults_under_26',
      'self_employed_entrepreneurs',
      'gig_economy_workers',
      'recent_job_loss_sep',
      'income_change_sep_eligible',
      'medicaid_expansion_eligible',
      'freelance_contractor_workers'
    ]
  },

  // Palm Beach County Health Insurance Marketplace
  'health-insurance-marketplace-palm-beach-county': {
    pageName: 'Health Insurance Marketplace Palm Beach County West Palm Beach ACA Plans',
    pageType: 'county',
    primaryConversions: ['phone_call', 'subsidy_calculator', 'enrollment_start', 'plan_comparison'],
    trackingGoals: {
      phoneCallValue: 135, // Highest value for ACA enrollment in FL's largest Marketplace
      formSubmissionValue: 95,
      quoteCTAValue: 70,
      contentEngagementThreshold: 185, // Longer for affluent demographic research
    },
    keyMetrics: [
      'subsidyCalculatorUsage',
      'zeroPremiumPlanInterest',
      'openEnrollmentUrgency',
      'specialEnrollmentPeriodCheck',
      'incomeVerificationEngagement',
      'silverPlanCSRInterest',
      'hospitalNetworkComparison',
      'essentialHealthBenefitsView',
      'preventiveCareEducation',
      'familyCoverageInquiry',
      'medicaidEligibilityCheck',
      'sEPQualifyingEventCheck',
      'planTierComparison',
      'westPalmBeachCoverageInterest',
      'bocaRatonEnrollmentInterest',
      'delrayBeachMarketplaceEngagement',
      'wellingtonACAInterest',
      'boyntonBeachMarketplaceInterest',
      'jupiterPalmBeachGardensInterest',
      'zeroPremiumQualificationCheck',
      'subsidyEligibilityCalculation'
    ],
    audienceSegments: [
      'palm_beach_county_marketplace_shoppers',
      'west_palm_beach_aca_enrollees',
      'boca_raton_marketplace_residents',
      'delray_beach_marketplace_shoppers',
      'wellington_aca_eligible',
      'boynton_beach_marketplace_residents',
      'jupiter_palm_beach_gardens_aca_shoppers',
      'affluent_marketplace_shoppers',
      'subsidy_eligible_residents',
      'zero_premium_qualified',
      'open_enrollment_period_shoppers',
      'special_enrollment_qualified',
      'uninsured_palm_beach_residents',
      'silver_plan_csr_eligible',
      'family_coverage_seekers',
      'young_adults_under_26',
      'self_employed_entrepreneurs',
      'gig_economy_workers',
      'recent_job_loss_sep',
      'income_change_sep_eligible',
      'medicaid_expansion_eligible',
      'freelance_contractor_workers',
      'high_income_subsidy_eligible'
    ]
  },

  // Palm Beach County Medicare Advantage
  'medicare-advantage-palm-beach-county': {
    pageName: 'Medicare Advantage Palm Beach County West Palm Beach MA Plans',
    pageType: 'county',
    primaryConversions: ['phone_call', 'plan_comparison', 'enrollment_start', 'star_rating_check'],
    trackingGoals: {
      phoneCallValue: 110, // High value for MA enrollment in FL's largest county (218K enrollees)
      formSubmissionValue: 85,
      quoteCTAValue: 65,
      contentEngagementThreshold: 165, // Medicare seniors research thoroughly
    },
    keyMetrics: [
      'starRatingComparison',
      'zeroPremiumPlanInterest',
      'partBGivebackInterest', // 42 plans, $80-$174.70/month savings
      'dentalVisionBenefitsView', // 98% of plans include
      'hmoVsPpoComparison',
      'maVsMedigapComparison',
      'hospitalNetworkCheck',
      'prescriptionDrugCoverage',
      'aepEnrollmentUrgency', // Oct 15 - Dec 7
      'otcAllowanceInterest',
      'fitnessGymBenefits', // SilverSneakers
      'mealTransportationBenefits',
      'westPalmBeachMAInterest',
      'bocaRatonMAEngagement',
      'delrayBeachSnowbirdPPO',
      'wellingtonBoyntonJupiterMA',
      'clevelandClinicNetworkAccess',
      'bocaRegionalHospitalAccess',
      'moopMaxOutOfPocketCheck',
      'partDFormularyLookup',
      'conciergeCarePlans', // Devoted Health, premium services
      'nationwidePPOForSnowbirds'
    ],
    audienceSegments: [
      'palm_beach_county_medicare_advantage',
      'west_palm_beach_ma_enrollees',
      'boca_raton_affluent_ma_shoppers',
      'delray_beach_snowbirds',
      'wellington_boynton_jupiter_seniors',
      'zero_premium_ma_seekers', // 85+ plans
      'part_b_giveback_eligible', // 42 plans
      'high_star_rating_preference', // 4.2★ avg, 4.5-5★ seekers
      'dental_vision_hearing_priority',
      'original_medicare_switchers',
      'medigap_to_ma_converters',
      'aep_enrollment_period_shoppers', // Oct 15 - Dec 7
      'oep_medicare_advantage_switchers', // Jan 1 - Mar 31
      'snowbird_nationwide_coverage',
      'cleveland_clinic_seekers',
      'boca_regional_hospital_network',
      'fitness_wellness_enthusiasts', // SilverSneakers
      'otc_allowance_maximizers',
      'prescription_drug_high_utilizers',
      'telehealth_users',
      'meal_transportation_benefit_seekers',
      'concierge_care_preference',
      'ppo_flexibility_preference',
      'hmo_lower_cost_preference',
      'humana_brand_loyal',
      'unitedhealthcare_aarp_members'
    ]
  }
};

// Enhanced tracking functions for specific landing page events
export const trackLandingPagePerformance = (pageKey: string, eventType: string, eventData: any) => {
  const config = landingPageAnalyticsConfig[pageKey];
  if (!config) return;

  // Track with enhanced context
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventType, {
      event_category: 'Landing Page Performance',
      event_label: config.pageName,
      page_type: config.pageType,
      audience_segments: config.audienceSegments,
      conversion_value: getConversionValue(eventType, config),
      custom_parameters: {
        page_key: pageKey,
        ...eventData
      }
    });
  }
};

const getConversionValue = (eventType: string, config: LandingPageConfig): number => {
  switch (eventType) {
    case 'phone_call': return config.trackingGoals.phoneCallValue;
    case 'form_submission': return config.trackingGoals.formSubmissionValue;
    case 'cta_click': return config.trackingGoals.quoteCTAValue;
    default: return 0;
  }
};

// Page-specific tracking setup
export const initializeLandingPageTracking = (pageKey: string) => {
  const config = landingPageAnalyticsConfig[pageKey];
  if (!config) return;

  // Set up conversion tracking
  if (typeof window !== 'undefined') {
    // Enhanced phone call tracking
    (window as any).trackLandingPagePhoneCall = (source: string = 'unknown') => {
      trackLandingPagePerformance(pageKey, 'phone_call', {
        source,
        value: config.trackingGoals.phoneCallValue,
        audience_segments: config.audienceSegments
      });
    };

    // Enhanced CTA tracking
    (window as any).trackLandingPageCTA = (ctaType: string, location: string, destination: string) => {
      trackLandingPagePerformance(pageKey, 'cta_click', {
        cta_type: ctaType,
        location,
        destination,
        value: config.trackingGoals.quoteCTAValue
      });
    };

    // Page-specific engagement tracking
    (window as any).trackLandingPageEngagement = (engagementType: string, data: any = {}) => {
      trackLandingPagePerformance(pageKey, 'engagement', {
        engagement_type: engagementType,
        threshold: config.trackingGoals.contentEngagementThreshold,
        ...data
      });
    };
  }
};

// Performance monitoring setup for all configured pages
export const monitorLandingPagePerformance = () => {
  if (typeof window !== 'undefined') {
    // Track page performance metrics
    window.addEventListener('load', () => {
      const currentPath = window.location.pathname;
      const pageKey = Object.keys(landingPageAnalyticsConfig).find(key =>
        currentPath.includes(key) || currentPath.includes(key.replace(/-/g, '/'))
      );

      if (pageKey) {
        const config = landingPageAnalyticsConfig[pageKey];

        // Track page load performance
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          trackLandingPagePerformance(pageKey, 'page_performance', {
            load_time: navigation.loadEventEnd - navigation.loadEventStart,
            dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            page_type: config.pageType,
            audience_segments: config.audienceSegments
          });
        }

        // Initialize page-specific tracking
        initializeLandingPageTracking(pageKey);
      }
    });
  }
};