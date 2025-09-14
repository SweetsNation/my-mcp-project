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