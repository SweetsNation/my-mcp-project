// Analytics Configuration for New Medicare Landing Pages
// Comprehensive tracking setup for performance monitoring and optimization

import { LandingPageAnalyticsConfig } from './landing-page-analytics-config';

export interface NewMedicarePageAnalytics extends LandingPageAnalyticsConfig {
  specializedTracking: {
    pageType: 'zero-premium' | 'enrollment-guide' | 'dual-eligible' | 'premium-giveback' | 'regional';
    uniqueEvents: string[];
    conversionFunnels: string[];
    audienceSegments: string[];
  };
  performanceTargets: {
    conversionRate: number;
    bounceRateTarget: number;
    sessionDurationTarget: number;
    pageLoadTimeTarget: number;
  };
  competitiveTracking: {
    keyCompetitors: string[];
    comparisonMetrics: string[];
  };
}

export const newMedicarePagesAnalytics: Record<string, NewMedicarePageAnalytics> = {
  'zero-premium-medicare-advantage-jefferson-county': {
    pageKey: 'zero-premium-medicare-advantage-jefferson-county',
    pageName: 'Zero Premium Medicare Advantage Jefferson County Alabama',
    primaryAudience: ['cost_conscious', 'fixed_income_seniors', 'budget_planners', 'alabama_residents'],

    conversionGoals: {
      primary: {
        phoneCall: { value: 95, eventName: 'jefferson_phone_call', description: 'Phone consultation request' },
        quoteRequest: { value: 75, eventName: 'jefferson_quote_request', description: 'Zero premium quote request' },
        calculatorCompletion: { value: 40, eventName: 'jefferson_calculator_complete', description: 'Cost calculator completion' }
      },
      secondary: {
        uabNetworkCheck: { value: 25, eventName: 'jefferson_uab_network_check', description: 'UAB Medicine network verification' },
        benefitsComparison: { value: 30, eventName: 'jefferson_benefits_comparison', description: 'Zero premium benefits comparison' },
        zipCodeLookup: { value: 20, eventName: 'jefferson_zip_lookup', description: 'Jefferson County zip code lookup' }
      }
    },

    eventTracking: {
      engagementEvents: [
        'zero_premium_hero_engagement',
        'uab_medicine_network_click',
        'jefferson_county_coverage_view',
        'alabama_medicare_specialist_contact',
        'birmingham_provider_search',
        'cost_savings_calculator_start'
      ],
      conversionEvents: [
        'jefferson_phone_consultation_request',
        'zero_premium_quote_submission',
        'uab_network_verification_complete',
        'jefferson_medicare_enrollment_start'
      ],
      funnelEvents: [
        'page_view',
        'hero_section_engagement',
        'zero_premium_benefits_view',
        'uab_network_exploration',
        'cost_calculator_interaction',
        'contact_form_submission'
      ]
    },

    audienceSegmentation: {
      demographics: ['65_plus_seniors', 'pre_medicare_eligible', 'fixed_income', 'alabama_residents'],
      geographic: ['jefferson_county', 'birmingham_metro', 'alabama_statewide', 'southern_us'],
      behavioral: ['cost_conscious', 'healthcare_researchers', 'zero_premium_seekers', 'uab_medicine_preferred'],
      acquisition: ['organic_search', 'paid_search', 'social_media', 'direct_referral']
    },

    funnelAnalysis: {
      awarenessStage: ['page_view', 'hero_engagement', 'zero_premium_education'],
      considerationStage: ['benefits_comparison', 'uab_network_check', 'cost_calculator_use'],
      decisionStage: ['quote_request', 'phone_consultation', 'enrollment_assistance'],
      conversionStage: ['form_submission', 'phone_call_completion', 'enrollment_start']
    },

    specializedTracking: {
      pageType: 'zero-premium',
      uniqueEvents: [
        'zero_premium_education_complete',
        'uab_medicine_network_verification',
        'jefferson_county_zip_check',
        'alabama_medicare_specialist_contact',
        'cost_comparison_zero_vs_premium'
      ],
      conversionFunnels: [
        'zero_premium_awareness_to_quote',
        'uab_network_check_to_enrollment',
        'cost_calculator_to_consultation'
      ],
      audienceSegments: [
        'alabama_fixed_income_seniors',
        'jefferson_county_residents',
        'uab_medicine_patients',
        'cost_conscious_medicare_shoppers'
      ]
    },

    performanceTargets: {
      conversionRate: 3.8,
      bounceRateTarget: 55,
      sessionDurationTarget: 180,
      pageLoadTimeTarget: 3.5
    },

    competitiveTracking: {
      keyCompetitors: ['humana_alabama_zero_premium', 'unitedhealthcare_alabama', 'aetna_alabama'],
      comparisonMetrics: ['zero_premium_availability', 'uab_network_access', 'local_market_share']
    },

    retargetingConfiguration: {
      audiences: [
        { name: 'jefferson_zero_premium_researchers', criteria: 'viewed zero premium benefits', duration: 30 },
        { name: 'uab_network_interested', criteria: 'checked UAB Medicine coverage', duration: 45 },
        { name: 'jefferson_cost_calculator_users', criteria: 'used cost calculator', duration: 60 }
      ],
      campaigns: [
        { audience: 'jefferson_zero_premium_researchers', message: 'Complete your free Jefferson County Medicare quote', cta: 'Get $0 Premium Quote' },
        { audience: 'uab_network_interested', message: 'Confirm your UAB Medicine network access', cta: 'Verify Network Access' }
      ]
    }
  },

  'zero-premium-medicare-advantage-kauai-county': {
    pageKey: 'zero-premium-medicare-advantage-kauai-county',
    pageName: 'Zero Premium Medicare Advantage Kauai County Hawaii',
    primaryAudience: ['island_residents', 'retirees', 'fixed_income_seniors', 'rural_residents'],

    conversionGoals: {
      primary: {
        phoneCall: { value: 105, eventName: 'kauai_phone_call', description: 'Garden Isle consultation request' },
        quoteRequest: { value: 85, eventName: 'kauai_quote_request', description: 'Inter-island coverage quote' },
        transportationInquiry: { value: 50, eventName: 'kauai_transport_inquiry', description: 'Medical transportation inquiry' }
      },
      secondary: {
        interIslandCoverageCheck: { value: 35, eventName: 'kauai_inter_island_check', description: 'Inter-island coverage verification' },
        ruralProviderSearch: { value: 30, eventName: 'kauai_rural_provider_search', description: 'Rural area provider search' },
        kaiserHMSAComparison: { value: 40, eventName: 'kauai_kaiser_hmsa_compare', description: 'Kaiser vs HMSA comparison' }
      }
    },

    eventTracking: {
      engagementEvents: [
        'garden_isle_zero_premium_view',
        'inter_island_coverage_exploration',
        'kauai_healthcare_provider_search',
        'rural_area_benefits_view',
        'kaiser_hmsa_network_comparison',
        'medical_transportation_info_view'
      ],
      conversionEvents: [
        'kauai_phone_consultation_request',
        'inter_island_quote_submission',
        'rural_coverage_verification',
        'kauai_enrollment_assistance_request'
      ],
      funnelEvents: [
        'page_view',
        'garden_isle_hero_engagement',
        'zero_premium_island_benefits_view',
        'inter_island_coverage_check',
        'rural_provider_search',
        'consultation_request_submission'
      ]
    },

    audienceSegmentation: {
      demographics: ['island_seniors', 'mainland_retirees_hawaii', 'rural_residents', 'native_hawaiian'],
      geographic: ['kauai_county', 'garden_isle', 'outer_islands_hawaii', 'rural_hawaii'],
      behavioral: ['inter_island_travelers', 'rural_healthcare_seekers', 'cost_conscious', 'island_lifestyle'],
      acquisition: ['hawaii_local_search', 'island_community_referral', 'hawaii_medicare_search']
    },

    funnelAnalysis: {
      awarenessStage: ['page_view', 'garden_isle_engagement', 'zero_premium_education'],
      considerationStage: ['inter_island_benefits_review', 'rural_provider_check', 'kaiser_hmsa_comparison'],
      decisionStage: ['transportation_inquiry', 'coverage_verification', 'consultation_request'],
      conversionStage: ['phone_call_completion', 'enrollment_start', 'specialist_referral']
    },

    specializedTracking: {
      pageType: 'zero-premium',
      uniqueEvents: [
        'inter_island_emergency_transport_info',
        'rural_kauai_provider_verification',
        'garden_isle_coverage_confirmation',
        'hawaii_medicare_specialist_contact',
        'outer_island_benefits_comparison'
      ],
      conversionFunnels: [
        'inter_island_awareness_to_quote',
        'rural_provider_search_to_enrollment',
        'transportation_inquiry_to_consultation'
      ],
      audienceSegments: [
        'kauai_county_residents',
        'inter_island_travelers',
        'rural_hawaii_seniors',
        'kaiser_hmsa_comparison_shoppers'
      ]
    },

    performanceTargets: {
      conversionRate: 4.2,
      bounceRateTarget: 50,
      sessionDurationTarget: 220,
      pageLoadTimeTarget: 4.0
    },

    competitiveTracking: {
      keyCompetitors: ['kaiser_permanente_hawaii_direct', 'hmsa_direct_enrollment', 'hawaii_medicare_brokers'],
      comparisonMetrics: ['inter_island_coverage_availability', 'rural_provider_access', 'transportation_benefits']
    },

    retargetingConfiguration: {
      audiences: [
        { name: 'kauai_inter_island_interested', criteria: 'viewed inter-island coverage', duration: 45 },
        { name: 'rural_kauai_residents', criteria: 'searched rural providers', duration: 60 },
        { name: 'kaiser_hmsa_comparers', criteria: 'compared networks', duration: 30 }
      ],
      campaigns: [
        { audience: 'kauai_inter_island_interested', message: 'Get your Garden Isle Medicare quote with inter-island benefits', cta: 'Get Island Coverage Quote' },
        { audience: 'rural_kauai_residents', message: 'Rural Kauai Medicare coverage available', cta: 'Check Rural Coverage' }
      ]
    }
  },

  'zero-premium-medicare-advantage-westchester-county': {
    pageKey: 'zero-premium-medicare-advantage-westchester-county',
    pageName: 'Zero Premium Medicare Advantage Westchester County NY',
    primaryAudience: ['new_york_retirees', 'suburban_seniors', 'high_cost_area_residents', 'nyc_metro_residents'],

    conversionGoals: {
      primary: {
        phoneCall: { value: 110, eventName: 'westchester_phone_call', description: 'NYC metro consultation request' },
        quoteRequest: { value: 90, eventName: 'westchester_quote_request', description: 'High-cost area zero premium quote' },
        networkVerification: { value: 55, eventName: 'westchester_network_verify', description: 'Premium network verification' }
      },
      secondary: {
        highCostAreaBenefits: { value: 40, eventName: 'westchester_hca_benefits', description: 'High-cost area benefits review' },
        transportationBenefits: { value: 35, eventName: 'westchester_transport_benefits', description: 'NYC metro transportation benefits' },
        premiumNetworkAccess: { value: 45, eventName: 'westchester_premium_network', description: 'Premium healthcare network access' }
      }
    },

    eventTracking: {
      engagementEvents: [
        'westchester_zero_premium_hero_view',
        'nyc_metro_coverage_exploration',
        'high_cost_area_benefits_view',
        'premium_network_verification',
        'westchester_medical_center_check',
        'transportation_benefits_review'
      ],
      conversionEvents: [
        'westchester_consultation_request',
        'nyc_metro_quote_submission',
        'high_cost_area_verification',
        'premium_network_enrollment_start'
      ],
      funnelEvents: [
        'page_view',
        'westchester_hero_engagement',
        'zero_premium_hca_benefits_view',
        'premium_network_exploration',
        'cost_optimization_check',
        'consultation_form_submission'
      ]
    },

    audienceSegmentation: {
      demographics: ['westchester_seniors', 'nyc_metro_retirees', 'high_income_medicare_eligible', 'suburban_new_yorkers'],
      geographic: ['westchester_county', 'nyc_metro_area', 'white_plains_yonkers', 'new_york_suburbs'],
      behavioral: ['high_cost_area_residents', 'premium_healthcare_seekers', 'nyc_commuters', 'cost_optimizers'],
      acquisition: ['new_york_local_search', 'westchester_community_search', 'nyc_metro_medicare_search']
    },

    funnelAnalysis: {
      awarenessStage: ['page_view', 'westchester_engagement', 'zero_premium_hca_education'],
      considerationStage: ['premium_network_review', 'high_cost_benefits_check', 'transportation_benefits_view'],
      decisionStage: ['network_verification', 'cost_optimization_review', 'consultation_request'],
      conversionStage: ['phone_consultation_completion', 'enrollment_start', 'specialist_referral']
    },

    specializedTracking: {
      pageType: 'zero-premium',
      uniqueEvents: [
        'high_cost_area_adjustment_info',
        'nyc_metro_network_verification',
        'westchester_premium_provider_check',
        'transportation_benefit_optimization',
        'cost_comparison_hca_vs_standard'
      ],
      conversionFunnels: [
        'hca_awareness_to_enrollment',
        'premium_network_check_to_quote',
        'transportation_inquiry_to_consultation'
      ],
      audienceSegments: [
        'westchester_county_residents',
        'nyc_metro_commuters',
        'high_cost_area_optimizers',
        'premium_network_seekers'
      ]
    },

    performanceTargets: {
      conversionRate: 4.5,
      bounceRateTarget: 48,
      sessionDurationTarget: 200,
      pageLoadTimeTarget: 3.0
    },

    competitiveTracking: {
      keyCompetitors: ['empire_bcbs_westchester', 'unitedhealthcare_ny_metro', 'humana_westchester'],
      comparisonMetrics: ['zero_premium_hca_availability', 'premium_network_access', 'transportation_benefits']
    },

    retargetingConfiguration: {
      audiences: [
        { name: 'westchester_hca_researchers', criteria: 'viewed high-cost area benefits', duration: 30 },
        { name: 'nyc_metro_network_checkers', criteria: 'verified premium networks', duration: 45 },
        { name: 'westchester_cost_optimizers', criteria: 'used cost optimization tools', duration: 60 }
      ],
      campaigns: [
        { audience: 'westchester_hca_researchers', message: 'Maximize your Westchester Medicare benefits with zero premium', cta: 'Get HCA Benefits Quote' },
        { audience: 'nyc_metro_network_checkers', message: 'Confirm your NYC metro network access', cta: 'Verify Network Access' }
      ]
    }
  },

  'part-b-premium-give-back': {
    pageKey: 'part-b-premium-give-back',
    pageName: 'Part B Premium Give Back Medicare Advantage Plans',
    primaryAudience: ['cost_conscious', 'fixed_income_seniors', 'medicare_savers', 'benefit_maximizers'],

    conversionGoals: {
      primary: {
        phoneCall: { value: 100, eventName: 'part_b_phone_call', description: 'Part B give back consultation' },
        savingsCalculation: { value: 70, eventName: 'part_b_savings_calc', description: 'Part B savings calculation completion' },
        givebackPlanQuote: { value: 85, eventName: 'part_b_giveback_quote', description: 'Give back plan quote request' }
      },
      secondary: {
        benefitComparison: { value: 45, eventName: 'part_b_benefit_compare', description: 'Give back benefit comparison' },
        eligibilityCheck: { value: 35, eventName: 'part_b_eligibility_check', description: 'Give back eligibility verification' },
        socialSecurityIntegration: { value: 40, eventName: 'part_b_ss_integration', description: 'Social Security integration inquiry' }
      }
    },

    eventTracking: {
      engagementEvents: [
        'part_b_giveback_hero_engagement',
        'premium_reduction_calculator_use',
        'giveback_benefit_exploration',
        'social_security_integration_view',
        'monthly_savings_calculation',
        'part_b_cost_comparison'
      ],
      conversionEvents: [
        'part_b_consultation_request',
        'giveback_plan_quote_submission',
        'savings_calculation_completion',
        'part_b_enrollment_assistance_request'
      ],
      funnelEvents: [
        'page_view',
        'part_b_giveback_hero_engagement',
        'premium_reduction_education',
        'savings_calculator_interaction',
        'benefit_comparison_review',
        'consultation_request_submission'
      ]
    },

    audienceSegmentation: {
      demographics: ['medicare_part_b_payers', 'fixed_income_seniors', 'cost_conscious_medicare', 'benefit_optimizers'],
      geographic: ['nationwide_medicare_eligible', 'high_part_b_premium_areas', 'retirement_communities'],
      behavioral: ['cost_savers', 'benefit_maximizers', 'medicare_researchers', 'premium_reducers'],
      acquisition: ['part_b_cost_search', 'medicare_savings_search', 'giveback_benefit_search']
    },

    funnelAnalysis: {
      awarenessStage: ['page_view', 'part_b_education', 'giveback_benefit_awareness'],
      considerationStage: ['savings_calculation', 'benefit_comparison', 'eligibility_verification'],
      decisionStage: ['plan_comparison', 'consultation_request', 'enrollment_assistance'],
      conversionStage: ['enrollment_start', 'giveback_plan_selection', 'benefit_activation']
    },

    specializedTracking: {
      pageType: 'premium-giveback',
      uniqueEvents: [
        'part_b_premium_amount_check',
        'giveback_amount_calculation',
        'social_security_reimbursement_info',
        'irmaa_surcharge_consideration',
        'annual_savings_projection'
      ],
      conversionFunnels: [
        'savings_awareness_to_enrollment',
        'calculator_use_to_consultation',
        'benefit_comparison_to_selection'
      ],
      audienceSegments: [
        'high_part_b_premium_payers',
        'fixed_income_medicare_beneficiaries',
        'cost_optimization_seekers',
        'social_security_recipients'
      ]
    },

    performanceTargets: {
      conversionRate: 5.2,
      bounceRateTarget: 45,
      sessionDurationTarget: 160,
      pageLoadTimeTarget: 2.8
    },

    competitiveTracking: {
      keyCompetitors: ['humana_giveback_plans', 'unitedhealthcare_part_b_reduction', 'anthem_giveback'],
      comparisonMetrics: ['giveback_amount_comparison', 'plan_availability', 'benefit_integration']
    },

    retargetingConfiguration: {
      audiences: [
        { name: 'part_b_savings_calculators', criteria: 'used savings calculator', duration: 45 },
        { name: 'giveback_benefit_researchers', criteria: 'viewed giveback benefits', duration: 30 },
        { name: 'high_part_b_premium_payers', criteria: 'checked high premium amounts', duration: 60 }
      ],
      campaigns: [
        { audience: 'part_b_savings_calculators', message: 'Complete your Part B give back enrollment', cta: 'Start Saving on Part B' },
        { audience: 'giveback_benefit_researchers', message: 'Get up to $148.50 monthly Part B reduction', cta: 'Get Give Back Quote' }
      ]
    }
  },

  'medicare-advantage-enrollment-guide-research-triangle': {
    pageKey: 'medicare-advantage-enrollment-guide-research-triangle',
    pageName: 'Medicare Advantage Enrollment Guide Research Triangle NC',
    primaryAudience: ['research_triangle_professionals', 'tech_retirees', 'university_affiliated', 'healthcare_researchers'],

    conversionGoals: {
      primary: {
        enrollmentAssistance: { value: 95, eventName: 'triangle_enrollment_assistance', description: 'Enrollment assistance request' },
        networkComparison: { value: 70, eventName: 'triangle_network_compare', description: 'Duke vs UNC network comparison' },
        techRetireeConsultation: { value: 110, eventName: 'triangle_tech_retiree_consult', description: 'Tech retiree specialist consultation' }
      },
      secondary: {
        enrollmentGuideDownload: { value: 35, eventName: 'triangle_guide_download', description: 'Enrollment guide download' },
        deadlineReminder: { value: 25, eventName: 'triangle_deadline_reminder', description: 'Enrollment deadline reminder signup' },
        corporateToMedicareTransition: { value: 50, eventName: 'triangle_corporate_transition', description: 'Corporate to Medicare transition help' }
      }
    },

    eventTracking: {
      engagementEvents: [
        'research_triangle_enrollment_hero_view',
        'duke_vs_unc_network_comparison',
        'tech_retiree_benefits_exploration',
        'enrollment_deadline_checker',
        'rtp_medicare_options_view',
        'step_by_step_guide_interaction'
      ],
      conversionEvents: [
        'triangle_enrollment_assistance_request',
        'duke_unc_network_selection_help',
        'tech_retiree_consultation_booking',
        'enrollment_guide_completion'
      ],
      funnelEvents: [
        'page_view',
        'triangle_enrollment_hero_engagement',
        'enrollment_process_education',
        'network_comparison_interaction',
        'deadline_awareness_check',
        'assistance_request_submission'
      ]
    },

    audienceSegmentation: {
      demographics: ['tech_industry_retirees', 'university_retirees', 'research_professionals', 'triangle_area_seniors'],
      geographic: ['research_triangle_park', 'wake_county', 'durham_county', 'orange_county_nc'],
      behavioral: ['tech_industry_background', 'university_affiliated', 'research_oriented', 'process_methodical'],
      acquisition: ['research_triangle_search', 'tech_retirement_search', 'duke_unc_medicare_search']
    },

    funnelAnalysis: {
      awarenessStage: ['page_view', 'enrollment_education', 'triangle_area_focus'],
      considerationStage: ['network_comparison', 'process_understanding', 'deadline_awareness'],
      decisionStage: ['assistance_request', 'network_selection', 'specialist_consultation'],
      conversionStage: ['enrollment_start', 'network_confirmation', 'transition_completion']
    },

    specializedTracking: {
      pageType: 'enrollment-guide',
      uniqueEvents: [
        'enrollment_process_step_completion',
        'duke_health_vs_unc_health_decision',
        'tech_retiree_benefit_coordination',
        'enrollment_deadline_calendar_add',
        'rtp_medicare_specialist_contact'
      ],
      conversionFunnels: [
        'education_to_assistance_request',
        'network_comparison_to_selection',
        'tech_background_to_specialist_consult'
      ],
      audienceSegments: [
        'research_triangle_tech_retirees',
        'duke_health_network_preferrers',
        'unc_health_network_preferrers',
        'university_affiliated_retirees'
      ]
    },

    performanceTargets: {
      conversionRate: 4.8,
      bounceRateTarget: 40,
      sessionDurationTarget: 280,
      pageLoadTimeTarget: 3.2
    },

    competitiveTracking: {
      keyCompetitors: ['bcbs_nc_enrollment', 'unitedhealthcare_nc', 'medicare_gov_tools'],
      comparisonMetrics: ['enrollment_assistance_quality', 'network_comparison_tools', 'tech_retiree_specialization']
    },

    retargetingConfiguration: {
      audiences: [
        { name: 'triangle_enrollment_researchers', criteria: 'viewed enrollment process', duration: 45 },
        { name: 'duke_unc_network_comparers', criteria: 'compared networks', duration: 30 },
        { name: 'tech_retiree_transition_seekers', criteria: 'viewed tech retiree content', duration: 60 }
      ],
      campaigns: [
        { audience: 'triangle_enrollment_researchers', message: 'Get personalized Research Triangle Medicare enrollment help', cta: 'Get Enrollment Assistance' },
        { audience: 'duke_unc_network_comparers', message: 'Finalize your Duke vs UNC network decision', cta: 'Get Network Help' }
      ]
    }
  },

  'd-snp-plans-davidson-county-dual-eligible': {
    pageKey: 'd-snp-plans-davidson-county-dual-eligible',
    pageName: 'D-SNP Plans Davidson County Dual Eligible Benefits',
    primaryAudience: ['dual_eligible_beneficiaries', 'low_income_seniors', 'medicaid_recipients', 'disability_recipients'],

    conversionGoals: {
      primary: {
        dualEligibleVerification: { value: 85, eventName: 'davidson_dual_eligible_verify', description: 'Dual eligible status verification' },
        dsnpPlanComparison: { value: 90, eventName: 'davidson_dsnp_compare', description: 'D-SNP plan comparison request' },
        enhancedBenefitsConsultation: { value: 105, eventName: 'davidson_enhanced_benefits_consult', description: 'Enhanced benefits consultation' }
      },
      secondary: {
        tennCareCoordination: { value: 55, eventName: 'davidson_tenncare_coord', description: 'TennCare coordination inquiry' },
        transportationBenefits: { value: 45, eventName: 'davidson_transport_benefits', description: 'Transportation benefits inquiry' },
        careCoordinationServices: { value: 50, eventName: 'davidson_care_coordination', description: 'Care coordination services inquiry' }
      }
    },

    eventTracking: {
      engagementEvents: [
        'davidson_dsnp_hero_engagement',
        'dual_eligible_education_view',
        'enhanced_benefits_exploration',
        'tenncare_coordination_info_view',
        'transportation_services_review',
        'care_coordination_benefits_view'
      ],
      conversionEvents: [
        'davidson_dual_eligible_verification_request',
        'dsnp_plan_comparison_completion',
        'enhanced_benefits_consultation_booking',
        'tenncare_coordination_assistance_request'
      ],
      funnelEvents: [
        'page_view',
        'dsnp_hero_engagement',
        'dual_eligible_education',
        'enhanced_benefits_review',
        'coordination_services_exploration',
        'consultation_request_submission'
      ]
    },

    audienceSegmentation: {
      demographics: ['dual_eligible_seniors', 'low_income_medicare_medicaid', 'disability_recipients', 'davidson_county_residents'],
      geographic: ['davidson_county_tn', 'nashville_metro', 'middle_tennessee', 'tenncare_service_area'],
      behavioral: ['enhanced_service_seekers', 'care_coordination_needers', 'transportation_dependent', 'benefit_maximizers'],
      acquisition: ['dual_eligible_search', 'dsnp_search', 'tenncare_medicare_search']
    },

    funnelAnalysis: {
      awarenessStage: ['page_view', 'dsnp_education', 'dual_eligible_awareness'],
      considerationStage: ['enhanced_benefits_review', 'plan_comparison', 'coordination_services_exploration'],
      decisionStage: ['verification_request', 'consultation_booking', 'plan_selection_assistance'],
      conversionStage: ['enrollment_start', 'benefit_coordination_setup', 'care_plan_development']
    },

    specializedTracking: {
      pageType: 'dual-eligible',
      uniqueEvents: [
        'dual_eligible_qualification_check',
        'dsnp_vs_regular_ma_comparison',
        'tenncare_medicare_coordination_setup',
        'enhanced_transportation_benefit_inquiry',
        'care_coordination_service_request'
      ],
      conversionFunnels: [
        'education_to_verification',
        'benefits_exploration_to_enrollment',
        'coordination_inquiry_to_setup'
      ],
      audienceSegments: [
        'davidson_county_dual_eligible',
        'tenncare_medicare_recipients',
        'enhanced_service_needers',
        'care_coordination_seekers'
      ]
    },

    performanceTargets: {
      conversionRate: 6.5,
      bounceRateTarget: 35,
      sessionDurationTarget: 320,
      pageLoadTimeTarget: 3.8
    },

    competitiveTracking: {
      keyCompetitors: ['humana_tennessee_dsnp', 'unitedhealthcare_community_plan', 'anthem_dsnp'],
      comparisonMetrics: ['enhanced_benefits_comparison', 'care_coordination_quality', 'tenncare_integration']
    },

    retargetingConfiguration: {
      audiences: [
        { name: 'davidson_dual_eligible_researchers', criteria: 'viewed dual eligible content', duration: 60 },
        { name: 'dsnp_plan_comparers', criteria: 'compared D-SNP plans', duration: 45 },
        { name: 'enhanced_benefits_seekers', criteria: 'explored enhanced benefits', duration: 75 }
      ],
      campaigns: [
        { audience: 'davidson_dual_eligible_researchers', message: 'Get help with your dual eligible benefits in Davidson County', cta: 'Check Eligibility' },
        { audience: 'dsnp_plan_comparers', message: 'Complete your D-SNP plan selection', cta: 'Get D-SNP Help' }
      ]
    }
  },

  'medicare-advantage-lee-county-florida': {
    pageKey: 'medicare-advantage-lee-county-florida',
    pageName: 'Medicare Advantage Plans Lee County Florida',
    primaryAudience: ['florida_retirees', 'snowbirds', 'southwest_florida_residents', 'seasonal_residents'],

    conversionGoals: {
      primary: {
        phoneCall: { value: 88, eventName: 'lee_county_phone_call', description: 'Southwest Florida consultation' },
        snowbirdCoverageQuote: { value: 95, eventName: 'lee_county_snowbird_quote', description: 'Snowbird coverage quote request' },
        leeHealthNetworkVerification: { value: 65, eventName: 'lee_county_network_verify', description: 'Lee Health network verification' }
      },
      secondary: {
        hurricanePreparednessInfo: { value: 40, eventName: 'lee_county_hurricane_prep', description: 'Hurricane preparedness information request' },
        seasonalResidentBenefits: { value: 50, eventName: 'lee_county_seasonal_benefits', description: 'Seasonal resident benefits inquiry' },
        swFloridaProviderSearch: { value: 35, eventName: 'lee_county_provider_search', description: 'Southwest Florida provider search' }
      }
    },

    eventTracking: {
      engagementEvents: [
        'lee_county_medicare_hero_engagement',
        'southwest_florida_coverage_exploration',
        'snowbird_benefits_review',
        'lee_health_nch_network_check',
        'hurricane_preparedness_info_view',
        'seasonal_resident_services_view'
      ],
      conversionEvents: [
        'lee_county_consultation_request',
        'snowbird_coverage_quote_submission',
        'southwest_florida_enrollment_start',
        'seasonal_coordination_assistance_request'
      ],
      funnelEvents: [
        'page_view',
        'lee_county_hero_engagement',
        'southwest_florida_benefits_view',
        'snowbird_services_exploration',
        'network_verification_check',
        'consultation_request_submission'
      ]
    },

    audienceSegmentation: {
      demographics: ['southwest_florida_retirees', 'seasonal_residents', 'snowbird_population', 'lee_county_seniors'],
      geographic: ['lee_county_fl', 'fort_myers_cape_coral', 'southwest_florida', 'seasonal_resident_origins'],
      behavioral: ['snowbird_lifestyle', 'seasonal_healthcare_seekers', 'hurricane_preparers', 'southwest_fl_focused'],
      acquisition: ['southwest_florida_search', 'snowbird_medicare_search', 'lee_county_healthcare_search']
    },

    funnelAnalysis: {
      awarenessStage: ['page_view', 'southwest_florida_engagement', 'snowbird_education'],
      considerationStage: ['network_verification', 'seasonal_benefits_review', 'hurricane_prep_consideration'],
      decisionStage: ['coverage_verification', 'consultation_request', 'enrollment_assistance'],
      conversionStage: ['enrollment_start', 'seasonal_coordination_setup', 'network_confirmation']
    },

    specializedTracking: {
      pageType: 'regional',
      uniqueEvents: [
        'lee_health_network_access_check',
        'nch_healthcare_coverage_verification',
        'snowbird_multi_state_coordination',
        'hurricane_evacuation_coverage_info',
        'southwest_florida_specialist_access'
      ],
      conversionFunnels: [
        'snowbird_awareness_to_enrollment',
        'network_check_to_selection',
        'seasonal_inquiry_to_coordination'
      ],
      audienceSegments: [
        'lee_county_year_round_residents',
        'southwest_florida_snowbirds',
        'seasonal_healthcare_coordinators',
        'lee_health_network_users'
      ]
    },

    performanceTargets: {
      conversionRate: 4.1,
      bounceRateTarget: 52,
      sessionDurationTarget: 190,
      pageLoadTimeTarget: 3.5
    },

    competitiveTracking: {
      keyCompetitors: ['humana_southwest_florida', 'florida_blue_lee_county', 'unitedhealthcare_swfl'],
      comparisonMetrics: ['snowbird_service_quality', 'lee_health_network_access', 'seasonal_coordination']
    },

    retargetingConfiguration: {
      audiences: [
        { name: 'lee_county_snowbird_researchers', criteria: 'viewed snowbird benefits', duration: 45 },
        { name: 'southwest_florida_network_checkers', criteria: 'verified Lee Health access', duration: 30 },
        { name: 'seasonal_resident_planners', criteria: 'explored seasonal benefits', duration: 60 }
      ],
      campaigns: [
        { audience: 'lee_county_snowbird_researchers', message: 'Perfect Medicare coverage for your Southwest Florida lifestyle', cta: 'Get Snowbird Quote' },
        { audience: 'southwest_florida_network_checkers', message: 'Confirm your Lee Health network access', cta: 'Verify Network' }
      ]
    }
  }
};

// Analytics Dashboard Configuration
export const newMedicarePagesDashboardConfig = {
  dashboardName: 'New Medicare Landing Pages Performance',
  reportingPeriods: ['daily', 'weekly', 'monthly', 'quarterly'],

  keyMetrics: {
    conversionMetrics: [
      'total_conversions',
      'conversion_rate',
      'cost_per_conversion',
      'conversion_value',
      'phone_call_conversions',
      'quote_request_conversions'
    ],
    engagementMetrics: [
      'page_views',
      'unique_visitors',
      'session_duration',
      'bounce_rate',
      'pages_per_session',
      'scroll_depth'
    ],
    performanceMetrics: [
      'page_load_time',
      'core_web_vitals',
      'mobile_usability',
      'search_rankings',
      'organic_traffic_share'
    ]
  },

  segmentedReporting: {
    byPageType: ['zero-premium', 'enrollment-guide', 'dual-eligible', 'premium-giveback', 'regional'],
    byAudience: ['seniors_65_plus', 'pre_medicare', 'dual_eligible', 'tech_retirees', 'snowbirds'],
    byGeography: ['county_level', 'state_level', 'regional_clusters'],
    byTrafficSource: ['organic_search', 'paid_search', 'social_media', 'direct', 'referral']
  },

  automatedAlerts: [
    { metric: 'conversion_rate', condition: 'below_target_20_percent', action: 'email_alert' },
    { metric: 'page_load_time', condition: 'above_5_seconds', action: 'slack_notification' },
    { metric: 'bounce_rate', condition: 'above_70_percent', action: 'dashboard_highlight' },
    { metric: 'phone_conversions', condition: 'below_daily_target', action: 'email_daily_summary' }
  ],

  competitiveMonitoring: {
    trackingFrequency: 'weekly',
    competitors: [
      'humana_regional_pages',
      'unitedhealthcare_local_pages',
      'medicare_gov_tools',
      'local_medicare_brokers'
    ],
    metrics: [
      'search_ranking_comparison',
      'ad_spend_estimation',
      'content_gap_analysis',
      'feature_comparison'
    ]
  }
};

// Performance Testing Configuration
export const performanceTestingConfig = {
  testingSchedule: 'monthly',
  testTypes: [
    'page_load_speed',
    'mobile_responsiveness',
    'conversion_funnel_optimization',
    'user_experience_testing'
  ],

  abTestingFramework: {
    platforms: ['google_optimize', 'optimizely'],
    testingPriorities: [
      'hero_section_optimization',
      'cta_button_testing',
      'form_optimization',
      'content_layout_testing'
    ],

    plannedTests: [
      {
        testName: 'zero_premium_hero_cta_test',
        pages: ['jefferson-county', 'kauai-county', 'westchester-county'],
        variants: ['current', 'benefit_focused', 'urgency_focused'],
        successMetric: 'phone_call_conversion_rate'
      },
      {
        testName: 'enrollment_guide_flow_test',
        pages: ['research-triangle-enrollment'],
        variants: ['single_page', 'multi_step', 'interactive_wizard'],
        successMetric: 'enrollment_assistance_requests'
      },
      {
        testName: 'dsnp_benefits_explanation_test',
        pages: ['davidson-county-dsnp'],
        variants: ['text_heavy', 'visual_infographic', 'video_explanation'],
        successMetric: 'dual_eligible_verification_requests'
      }
    ]
  }
};

export default newMedicarePagesAnalytics;