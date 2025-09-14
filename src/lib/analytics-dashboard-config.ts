// Analytics Dashboard Configuration for New Landing Pages
export interface DashboardMetric {
  name: string;
  key: string;
  type: 'conversion' | 'engagement' | 'performance' | 'demographic';
  target?: number;
  format: 'percentage' | 'currency' | 'number' | 'time';
  description: string;
}

export interface PageDashboardConfig {
  pageKey: string;
  pageName: string;
  primaryKPIs: DashboardMetric[];
  conversionFunnels: string[];
  audienceSegments: string[];
  geographicBreakdowns: string[];
  contentSections: string[];
  competitiveMetrics: string[];
}

export const newLandingPageDashboards: Record<string, PageDashboardConfig> = {
  'medicare-advantage-maui-county-hawaii': {
    pageKey: 'medicare-advantage-maui-county-hawaii',
    pageName: 'Maui County Hawaii Medicare Advantage',
    primaryKPIs: [
      {
        name: 'Phone Call Conversion Rate',
        key: 'phone_conversion_rate',
        type: 'conversion',
        target: 3.2,
        format: 'percentage',
        description: 'Percentage of visitors who call after viewing page'
      },
      {
        name: 'Inter-Island Coverage Engagement',
        key: 'inter_island_engagement',
        type: 'engagement',
        target: 45,
        format: 'percentage',
        description: 'Visitors engaging with inter-island travel benefits section'
      },
      {
        name: 'Average Session Duration',
        key: 'avg_session_duration',
        type: 'engagement',
        target: 180,
        format: 'time',
        description: 'Average time visitors spend on page'
      },
      {
        name: 'Provider Network Clicks',
        key: 'provider_network_clicks',
        type: 'engagement',
        format: 'number',
        description: 'Clicks on Kaiser Permanente/HMSA provider information'
      }
    ],
    conversionFunnels: [
      'page_view → provider_section_view → phone_call',
      'page_view → inter_island_section → quote_request',
      'page_view → demographics_view → contact_form'
    ],
    audienceSegments: [
      'Native Hawaiian/Pacific Islander',
      'Mainland Retirees',
      'Snowbirds',
      'Long-term Residents'
    ],
    geographicBreakdowns: [
      'Maui',
      'Molokai',
      'Lanai',
      'Haleakala',
      'Kahului',
      'Lahaina'
    ],
    contentSections: [
      'Island Healthcare Excellence',
      'Kaiser Permanente Hawaii',
      'HMSA Plans',
      'Inter-Island Travel Benefits',
      'Native Hawaiian Services'
    ],
    competitiveMetrics: [
      'Kaiser vs HMSA engagement',
      'Island-specific vs mainland content preference',
      'Travel benefits vs local care focus'
    ]
  },

  'medicare-advantage-cobb-county-georgia': {
    pageKey: 'medicare-advantage-cobb-county-georgia',
    pageName: 'Cobb County Georgia Medicare Advantage',
    primaryKPIs: [
      {
        name: 'Quote Request Rate',
        key: 'quote_request_rate',
        type: 'conversion',
        target: 4.1,
        format: 'percentage',
        description: 'Percentage of visitors requesting quotes'
      },
      {
        name: 'Network Provider Engagement',
        key: 'network_provider_engagement',
        type: 'engagement',
        target: 52,
        format: 'percentage',
        description: 'Engagement with Wellstar/Northside/Emory network information'
      },
      {
        name: 'Affluent Audience Conversion',
        key: 'affluent_conversion',
        type: 'conversion',
        target: 3.8,
        format: 'percentage',
        description: 'Conversion rate for high-income audience segment'
      },
      {
        name: 'Atlanta Metro Referral Rate',
        key: 'metro_referral_rate',
        type: 'performance',
        format: 'percentage',
        description: 'Visitors referred from Atlanta metro area searches'
      }
    ],
    conversionFunnels: [
      'page_view → network_comparison → phone_call',
      'page_view → affluent_benefits → quote_request',
      'page_view → city_coverage → specialist_consultation'
    ],
    audienceSegments: [
      'Affluent Suburban',
      'Atlanta Metro Commuters',
      'Corporate Retirees',
      'Healthcare Conscious'
    ],
    geographicBreakdowns: [
      'Marietta',
      'Kennesaw',
      'Smyrna',
      'Acworth',
      'Powder Springs',
      'Austell'
    ],
    contentSections: [
      'Wellstar Health System',
      'Northside Hospital',
      'Emory Healthcare',
      'Affluent Community Benefits',
      'Atlanta Metro Access'
    ],
    competitiveMetrics: [
      'Wellstar vs Northside vs Emory preference',
      'Premium vs standard plan interest',
      'Suburban vs urban healthcare preference'
    ]
  },

  'medicare-advantage-fresno-county-california': {
    pageKey: 'medicare-advantage-fresno-county-california',
    pageName: 'Fresno County California Medicare Advantage',
    primaryKPIs: [
      {
        name: 'Bilingual Content Engagement',
        key: 'bilingual_engagement',
        type: 'engagement',
        target: 38,
        format: 'percentage',
        description: 'Engagement with Spanish language content'
      },
      {
        name: 'Agricultural Community Conversion',
        key: 'agricultural_conversion',
        type: 'conversion',
        target: 2.8,
        format: 'percentage',
        description: 'Conversion rate for agricultural worker segment'
      },
      {
        name: 'Language Preference Distribution',
        key: 'language_distribution',
        type: 'demographic',
        format: 'percentage',
        description: 'English vs Spanish content preference'
      },
      {
        name: 'Community Health Center Engagement',
        key: 'community_health_engagement',
        type: 'engagement',
        format: 'percentage',
        description: 'Engagement with community health center information'
      }
    ],
    conversionFunnels: [
      'page_view → spanish_content → bilingual_support_call',
      'page_view → community_services → quote_request',
      'page_view → agricultural_benefits → specialist_consultation'
    ],
    audienceSegments: [
      'Hispanic Community',
      'Agricultural Workers',
      'Central Valley Residents',
      'Bilingual Preferred'
    ],
    geographicBreakdowns: [
      'Fresno City',
      'Clovis',
      'Selma',
      'Reedley',
      'Sanger',
      'Kerman'
    ],
    contentSections: [
      'English Services',
      'Servicios en Español',
      'Community Health Centers',
      'Agricultural Worker Benefits',
      'Central Valley Network'
    ],
    competitiveMetrics: [
      'English vs Spanish content engagement',
      'Community health vs hospital network preference',
      'Urban vs rural service preference'
    ]
  },

  'medicare-cost-calculator': {
    pageKey: 'medicare-cost-calculator',
    pageName: 'Medicare Cost Calculator',
    primaryKPIs: [
      {
        name: 'Calculator Completion Rate',
        key: 'calculator_completion_rate',
        type: 'conversion',
        target: 68,
        format: 'percentage',
        description: 'Percentage of users who complete the full calculation'
      },
      {
        name: 'Post-Calculation Phone Calls',
        key: 'post_calc_phone_calls',
        type: 'conversion',
        target: 8.2,
        format: 'percentage',
        description: 'Users who call after seeing their cost estimate'
      },
      {
        name: 'Average Input Interactions',
        key: 'avg_input_interactions',
        type: 'engagement',
        format: 'number',
        description: 'Average number of input field changes per session'
      },
      {
        name: 'Cost Range Distribution',
        key: 'cost_range_distribution',
        type: 'demographic',
        format: 'percentage',
        description: 'Distribution of calculated cost ranges'
      }
    ],
    conversionFunnels: [
      'page_view → calculator_start → result_view → phone_call',
      'page_view → calculator_start → result_view → quote_request',
      'page_view → cost_tips_view → calculator_use → contact_form'
    ],
    audienceSegments: [
      'Cost Researchers',
      'Comparison Shoppers',
      'Budget Conscious',
      'Planning Ahead'
    ],
    geographicBreakdowns: [
      'National Usage',
      'High Cost Areas',
      'Rural vs Urban',
      'State-by-State Trends'
    ],
    contentSections: [
      'Calculator Inputs',
      'Cost Breakdown',
      'Savings Tips',
      'Plan Comparison',
      'Educational Content'
    ],
    competitiveMetrics: [
      'Input accuracy vs industry tools',
      'Completion rate vs competitors',
      'Post-calculation engagement vs market average'
    ]
  },

  'medicare-advantage-broward-county-florida': {
    pageKey: 'medicare-advantage-broward-county-florida',
    pageName: 'Broward County Florida Medicare Advantage',
    primaryKPIs: [
      {
        name: 'South Florida Conversion Rate',
        key: 'south_florida_conversion',
        type: 'conversion',
        target: 3.9,
        format: 'percentage',
        description: 'Conversion rate for South Florida market'
      },
      {
        name: 'Snowbird Engagement',
        key: 'snowbird_engagement',
        type: 'engagement',
        target: 42,
        format: 'percentage',
        description: 'Seasonal resident engagement with content'
      },
      {
        name: 'Multilingual Services Interest',
        key: 'multilingual_interest',
        type: 'engagement',
        format: 'percentage',
        description: 'Interest in Spanish/multilingual healthcare services'
      },
      {
        name: 'Beach Community Benefits Engagement',
        key: 'beach_community_engagement',
        type: 'engagement',
        format: 'percentage',
        description: 'Engagement with beach lifestyle health benefits'
      }
    ],
    conversionFunnels: [
      'page_view → city_coverage → provider_search → phone_call',
      'page_view → multilingual_services → bilingual_support',
      'page_view → beach_benefits → wellness_programs → quote_request'
    ],
    audienceSegments: [
      'South Florida Retirees',
      'Snowbirds',
      'Hispanic Community',
      'Beach Communities'
    ],
    geographicBreakdowns: [
      'Fort Lauderdale',
      'Hollywood',
      'Pembroke Pines',
      'Coral Springs',
      'Plantation',
      'Sunrise'
    ],
    contentSections: [
      'City-Specific Coverage',
      'South Florida Healthcare Networks',
      'Multilingual Services',
      'Seasonal Resident Benefits',
      'Beach Lifestyle Programs'
    ],
    competitiveMetrics: [
      'Humana vs UnitedHealthcare vs Florida Blue preference',
      'Local vs national provider preference',
      'Year-round vs seasonal plan interest'
    ]
  },

  'disability-insurance': {
    pageKey: 'disability-insurance',
    pageName: 'Disability Insurance Coverage',
    primaryKPIs: [
      {
        name: 'High-Value Lead Conversion',
        key: 'high_value_conversion',
        type: 'conversion',
        target: 2.1,
        format: 'percentage',
        description: 'Conversion rate for disability insurance (high-value product)'
      },
      {
        name: 'Income Calculator Usage',
        key: 'income_calculator_usage',
        type: 'engagement',
        target: 34,
        format: 'percentage',
        description: 'Visitors who use the income protection calculator'
      },
      {
        name: 'Myth Debunking Engagement',
        key: 'myth_debunking_engagement',
        type: 'engagement',
        format: 'percentage',
        description: 'Engagement with myths vs facts section'
      },
      {
        name: 'Group vs Individual Interest',
        key: 'group_vs_individual',
        type: 'demographic',
        format: 'percentage',
        description: 'Interest distribution between group and individual coverage'
      }
    ],
    conversionFunnels: [
      'page_view → income_calculator → coverage_need → phone_call',
      'page_view → myth_debunking → education → quote_request',
      'page_view → employer_comparison → individual_benefits → consultation'
    ],
    audienceSegments: [
      'Income Protectors',
      'High Earners',
      'Self Employed',
      'Family Providers'
    ],
    geographicBreakdowns: [
      'High Income States',
      'Self-Employment Hubs',
      'Corporate Centers',
      'Rural vs Urban'
    ],
    contentSections: [
      'Short-term vs Long-term',
      'Group vs Individual Comparison',
      'Income Protection Calculator',
      'Coverage Considerations',
      'Myths vs Facts'
    ],
    competitiveMetrics: [
      'Short-term vs long-term preference',
      'Group supplement vs standalone individual',
      'Education content vs direct sales approach effectiveness'
    ]
  }
};

// Analytics event tracking goals for each page
export const trackingGoals = {
  // Primary conversion events
  highValueConversions: [
    'phone_call',
    'quote_request',
    'specialist_consultation',
    'calculator_completion'
  ],

  // Secondary engagement events
  engagementEvents: [
    'provider_network_click',
    'bilingual_content_engagement',
    'cost_calculator_interaction',
    'plan_comparison_view',
    'demographic_section_view'
  ],

  // Content-specific tracking
  contentEngagementGoals: {
    'medicare-advantage-maui-county-hawaii': [
      'inter_island_coverage_view',
      'kaiser_vs_hmsa_comparison',
      'native_hawaiian_services_click'
    ],
    'medicare-advantage-cobb-county-georgia': [
      'affluent_benefits_view',
      'atlanta_metro_network_click',
      'wellstar_northside_emory_comparison'
    ],
    'medicare-advantage-fresno-county-california': [
      'spanish_content_engagement',
      'agricultural_community_benefits_view',
      'community_health_center_click'
    ],
    'medicare-cost-calculator': [
      'input_completion',
      'result_interpretation',
      'savings_tip_engagement',
      'plan_comparison_tool_use'
    ],
    'medicare-advantage-broward-county-florida': [
      'city_specific_coverage_view',
      'snowbird_benefits_click',
      'beach_lifestyle_programs_view'
    ],
    'disability-insurance': [
      'income_protection_calculator_use',
      'short_vs_long_term_comparison',
      'group_vs_individual_comparison',
      'myth_debunking_engagement'
    ]
  }
};

// Custom dimensions and metrics configuration for Google Analytics
export const customDimensionsConfig = {
  // Page-specific custom dimensions
  customDimensions: {
    1: 'page_type', // county, product, calculator
    2: 'audience_segment', // primary audience for the visit
    3: 'geographic_location', // specific city/county
    4: 'content_language', // english, spanish, bilingual
    5: 'insurance_product_interest', // medicare_advantage, disability, etc.
    6: 'engagement_level', // high, medium, low based on actions
    7: 'conversion_intent', // high, medium, low based on behavior
    8: 'device_category', // desktop, mobile, tablet
    9: 'traffic_source_category', // organic, paid, direct, referral
    10: 'user_journey_stage' // awareness, consideration, decision
  },

  // Custom metrics
  customMetrics: {
    1: 'time_to_first_interaction', // Time until first meaningful engagement
    2: 'content_engagement_score', // Calculated engagement score
    3: 'conversion_probability', // Calculated probability of conversion
    4: 'page_value_score', // Business value of the page view
    5: 'calculator_completion_score' // For calculator pages
  }
};

// Performance monitoring thresholds
export const performanceThresholds = {
  pageLoadTime: {
    excellent: 1.5, // seconds
    good: 3.0,
    poor: 5.0
  },

  conversionRates: {
    'medicare-advantage-maui-county-hawaii': { target: 3.2, minimum: 2.0 },
    'medicare-advantage-cobb-county-georgia': { target: 4.1, minimum: 2.5 },
    'medicare-advantage-fresno-county-california': { target: 2.8, minimum: 1.8 },
    'medicare-cost-calculator': { target: 8.2, minimum: 5.0 },
    'medicare-advantage-broward-county-florida': { target: 3.9, minimum: 2.3 },
    'disability-insurance': { target: 2.1, minimum: 1.2 }
  },

  engagementMetrics: {
    averageSessionDuration: {
      county_pages: 120, // 2 minutes minimum
      product_pages: 180, // 3 minutes minimum
      calculator_pages: 240 // 4 minutes minimum
    },

    bounceRate: {
      maximum: 65, // Should not exceed 65%
      target: 45 // Target 45% or lower
    },

    scrollDepth: {
      minimum: 50, // At least 50% of visitors should scroll past 50%
      target: 75 // Target 75% scroll depth for 25% of visitors
    }
  }
};

// Automated alerts configuration
export const alertsConfiguration = {
  conversionRateAlerts: {
    dropThreshold: 20, // Alert if conversion rate drops 20% below target
    checkFrequency: 'daily'
  },

  performanceAlerts: {
    pageLoadTimeThreshold: 5.0, // Alert if page load time exceeds 5 seconds
    checkFrequency: 'hourly'
  },

  engagementAlerts: {
    bounceRateThreshold: 70, // Alert if bounce rate exceeds 70%
    sessionDurationThreshold: 60, // Alert if avg session drops below 60 seconds
    checkFrequency: 'daily'
  },

  technicalAlerts: {
    errorRateThreshold: 5, // Alert if error rate exceeds 5%
    uptimeThreshold: 99.5, // Alert if uptime drops below 99.5%
    checkFrequency: 'realtime'
  }
};

// A/B Testing Configuration for optimization
export const abTestingConfig = {
  'medicare-advantage-maui-county-hawaii': [
    {
      testName: 'Hero CTA Optimization',
      variants: ['Compare Plans', 'Find Island Coverage', 'Get Hawaii Quote'],
      metric: 'cta_click_rate'
    },
    {
      testName: 'Inter-Island Benefits Placement',
      variants: ['top_section', 'middle_section', 'bottom_section'],
      metric: 'section_engagement_rate'
    }
  ],

  'medicare-cost-calculator': [
    {
      testName: 'Calculator Completion Flow',
      variants: ['single_page', 'multi_step', 'progressive_disclosure'],
      metric: 'completion_rate'
    },
    {
      testName: 'Results Display Format',
      variants: ['detailed_breakdown', 'summary_first', 'visual_charts'],
      metric: 'post_result_engagement'
    }
  ],

  'disability-insurance': [
    {
      testName: 'Income Calculator Prominence',
      variants: ['hero_placement', 'sidebar_placement', 'inline_placement'],
      metric: 'calculator_usage_rate'
    },
    {
      testName: 'Myth Debunking vs Benefits Focus',
      variants: ['myths_first', 'benefits_first', 'integrated_approach'],
      metric: 'page_engagement_score'
    }
  ]
};