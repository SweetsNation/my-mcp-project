// Conversion Tracking Configuration for Google Analytics 4 and Facebook Pixel
import { trackLandingPagePerformance } from './landing-page-analytics-config';

export interface ConversionGoal {
  name: string;
  description: string;
  value: number;
  currency: string;
  category: 'micro' | 'macro';
  eventName: string;
  conditions: ConversionCondition[];
}

export interface ConversionCondition {
  parameter: string;
  operator: 'equals' | 'greater_than' | 'less_than' | 'contains';
  value: string | number;
}

export interface ConversionFunnel {
  name: string;
  steps: ConversionStep[];
  pageKey: string;
}

export interface ConversionStep {
  name: string;
  eventName: string;
  description: string;
  expectedDropoffRate: number; // percentage
}

// Google Analytics 4 Conversion Goals Configuration
export const ga4ConversionGoals: Record<string, ConversionGoal[]> = {
  'medicare-advantage-maui-county-hawaii': [
    {
      name: 'Maui Medicare Phone Call',
      description: 'Phone call from Maui County Medicare Advantage page',
      value: 95,
      currency: 'USD',
      category: 'macro',
      eventName: 'phone_call',
      conditions: [
        { parameter: 'page_location', operator: 'contains', value: 'maui-county-hawaii' }
      ]
    },
    {
      name: 'Island Coverage Quote Request',
      description: 'Quote request with island-specific interest',
      value: 70,
      currency: 'USD',
      category: 'macro',
      eventName: 'quote_request',
      conditions: [
        { parameter: 'page_location', operator: 'contains', value: 'maui-county-hawaii' },
        { parameter: 'user_interest', operator: 'contains', value: 'inter_island' }
      ]
    },
    {
      name: 'Kaiser/HMSA Network Engagement',
      description: 'Deep engagement with Hawaii provider networks',
      value: 25,
      currency: 'USD',
      category: 'micro',
      eventName: 'provider_network_engagement',
      conditions: [
        { parameter: 'engagement_time', operator: 'greater_than', value: 30 },
        { parameter: 'provider_type', operator: 'contains', value: 'kaiser_hmsa' }
      ]
    }
  ],

  'medicare-advantage-cobb-county-georgia': [
    {
      name: 'Cobb County Medicare Phone Call',
      description: 'Phone call from affluent Atlanta suburb audience',
      value: 80,
      currency: 'USD',
      category: 'macro',
      eventName: 'phone_call',
      conditions: [
        { parameter: 'page_location', operator: 'contains', value: 'cobb-county-georgia' }
      ]
    },
    {
      name: 'Premium Network Quote Request',
      description: 'Quote request with premium network interest',
      value: 55,
      currency: 'USD',
      category: 'macro',
      eventName: 'quote_request',
      conditions: [
        { parameter: 'network_preference', operator: 'contains', value: 'wellstar_northside_emory' }
      ]
    },
    {
      name: 'Affluent Benefits Engagement',
      description: 'Engagement with high-value benefits content',
      value: 20,
      currency: 'USD',
      category: 'micro',
      eventName: 'content_engagement',
      conditions: [
        { parameter: 'content_type', operator: 'equals', value: 'affluent_benefits' },
        { parameter: 'engagement_score', operator: 'greater_than', value: 50 }
      ]
    }
  ],

  'medicare-advantage-fresno-county-california': [
    {
      name: 'Fresno Bilingual Support Call',
      description: 'Phone call requesting bilingual Medicare support',
      value: 75,
      currency: 'USD',
      category: 'macro',
      eventName: 'phone_call',
      conditions: [
        { parameter: 'page_location', operator: 'contains', value: 'fresno-county-california' },
        { parameter: 'language_preference', operator: 'contains', value: 'spanish' }
      ]
    },
    {
      name: 'Community Health Center Interest',
      description: 'Engagement with community health resources',
      value: 30,
      currency: 'USD',
      category: 'micro',
      eventName: 'community_resource_click',
      conditions: [
        { parameter: 'resource_type', operator: 'equals', value: 'community_health_center' }
      ]
    },
    {
      name: 'Agricultural Worker Benefits View',
      description: 'Specific interest in agricultural worker benefits',
      value: 35,
      currency: 'USD',
      category: 'micro',
      eventName: 'demographic_benefits_view',
      conditions: [
        { parameter: 'demographic_type', operator: 'equals', value: 'agricultural_worker' }
      ]
    }
  ],

  'medicare-cost-calculator': [
    {
      name: 'Calculator Completion to Phone Call',
      description: 'Calculator completion followed by phone call within session',
      value: 85,
      currency: 'USD',
      category: 'macro',
      eventName: 'calculator_to_call_conversion',
      conditions: [
        { parameter: 'calculator_completed', operator: 'equals', value: 'true' },
        { parameter: 'time_to_call', operator: 'less_than', value: 300 }
      ]
    },
    {
      name: 'High-Value Cost Estimate Quote',
      description: 'Quote request after viewing high-cost estimate',
      value: 60,
      currency: 'USD',
      category: 'macro',
      eventName: 'high_value_quote_request',
      conditions: [
        { parameter: 'estimated_annual_cost', operator: 'greater_than', value: 3000 },
        { parameter: 'quote_requested', operator: 'equals', value: 'true' }
      ]
    },
    {
      name: 'Calculator Tool Completion',
      description: 'Successful completion of Medicare cost calculator',
      value: 40,
      currency: 'USD',
      category: 'micro',
      eventName: 'calculator_completion',
      conditions: [
        { parameter: 'all_inputs_completed', operator: 'equals', value: 'true' },
        { parameter: 'result_generated', operator: 'equals', value: 'true' }
      ]
    }
  ],

  'medicare-advantage-broward-county-florida': [
    {
      name: 'South Florida Medicare Specialist Call',
      description: 'Phone call requesting Florida Medicare specialist',
      value: 78,
      currency: 'USD',
      category: 'macro',
      eventName: 'phone_call',
      conditions: [
        { parameter: 'page_location', operator: 'contains', value: 'broward-county-florida' },
        { parameter: 'specialist_requested', operator: 'equals', value: 'florida_expert' }
      ]
    },
    {
      name: 'Snowbird Benefits Interest',
      description: 'Engagement with seasonal resident benefits',
      value: 30,
      currency: 'USD',
      category: 'micro',
      eventName: 'seasonal_benefits_engagement',
      conditions: [
        { parameter: 'content_section', operator: 'contains', value: 'snowbird_benefits' },
        { parameter: 'engagement_time', operator: 'greater_than', value: 45 }
      ]
    },
    {
      name: 'Multilingual Services Request',
      description: 'Interest in multilingual healthcare services',
      value: 25,
      currency: 'USD',
      category: 'micro',
      eventName: 'multilingual_services_interest',
      conditions: [
        { parameter: 'service_type', operator: 'contains', value: 'multilingual' }
      ]
    }
  ],

  'disability-insurance': [
    {
      name: 'Disability Insurance Consultation Call',
      description: 'High-value phone call for disability insurance consultation',
      value: 120,
      currency: 'USD',
      category: 'macro',
      eventName: 'phone_call',
      conditions: [
        { parameter: 'page_location', operator: 'contains', value: 'disability-insurance' }
      ]
    },
    {
      name: 'Income Protection Quote Request',
      description: 'Quote request after income protection calculation',
      value: 95,
      currency: 'USD',
      category: 'macro',
      eventName: 'quote_request',
      conditions: [
        { parameter: 'income_calculator_used', operator: 'equals', value: 'true' },
        { parameter: 'coverage_amount_estimated', operator: 'greater_than', value: 50000 }
      ]
    },
    {
      name: 'Employer vs Individual Comparison',
      description: 'Deep engagement with coverage comparison tools',
      value: 45,
      currency: 'USD',
      category: 'micro',
      eventName: 'coverage_comparison_engagement',
      conditions: [
        { parameter: 'comparison_type', operator: 'equals', value: 'employer_vs_individual' },
        { parameter: 'time_spent', operator: 'greater_than', value: 120 }
      ]
    }
  ]
};

// Conversion Funnels for Each Landing Page
export const conversionFunnels: Record<string, ConversionFunnel> = {
  'medicare-advantage-maui-county-hawaii': {
    name: 'Maui Medicare Advantage Conversion Funnel',
    pageKey: 'medicare-advantage-maui-county-hawaii',
    steps: [
      {
        name: 'Page View',
        eventName: 'page_view',
        description: 'Initial landing on Maui Medicare page',
        expectedDropoffRate: 0
      },
      {
        name: 'Hero Section Engagement',
        eventName: 'hero_engagement',
        description: 'Interaction with hero section CTAs',
        expectedDropoffRate: 45
      },
      {
        name: 'Provider Network View',
        eventName: 'provider_network_view',
        description: 'Viewing Kaiser/HMSA network information',
        expectedDropoffRate: 65
      },
      {
        name: 'Inter-Island Benefits Interest',
        eventName: 'inter_island_interest',
        description: 'Engagement with inter-island coverage benefits',
        expectedDropoffRate: 75
      },
      {
        name: 'Contact Action',
        eventName: 'contact_action',
        description: 'Phone call or quote request submission',
        expectedDropoffRate: 85
      }
    ]
  },

  'medicare-cost-calculator': {
    name: 'Medicare Cost Calculator Conversion Funnel',
    pageKey: 'medicare-cost-calculator',
    steps: [
      {
        name: 'Page View',
        eventName: 'page_view',
        description: 'Landing on cost calculator page',
        expectedDropoffRate: 0
      },
      {
        name: 'Calculator Start',
        eventName: 'calculator_start',
        description: 'Beginning to input calculator data',
        expectedDropoffRate: 25
      },
      {
        name: 'Input Completion',
        eventName: 'input_completion',
        description: 'Completing all required calculator inputs',
        expectedDropoffRate: 45
      },
      {
        name: 'Results Review',
        eventName: 'results_review',
        description: 'Viewing calculated cost breakdown',
        expectedDropoffRate: 55
      },
      {
        name: 'Educational Content Engagement',
        eventName: 'education_engagement',
        description: 'Viewing tips and educational sections',
        expectedDropoffRate: 70
      },
      {
        name: 'Conversion Action',
        eventName: 'conversion_action',
        description: 'Phone call or quote request after calculation',
        expectedDropoffRate: 85
      }
    ]
  },

  'disability-insurance': {
    name: 'Disability Insurance Conversion Funnel',
    pageKey: 'disability-insurance',
    steps: [
      {
        name: 'Page View',
        eventName: 'page_view',
        description: 'Landing on disability insurance page',
        expectedDropoffRate: 0
      },
      {
        name: 'Education Section Engagement',
        eventName: 'education_engagement',
        description: 'Reading about disability insurance importance',
        expectedDropoffRate: 40
      },
      {
        name: 'Coverage Type Comparison',
        eventName: 'coverage_comparison',
        description: 'Comparing short-term vs long-term coverage',
        expectedDropoffRate: 60
      },
      {
        name: 'Income Calculator Usage',
        eventName: 'income_calculator',
        description: 'Using income protection calculator',
        expectedDropoffRate: 70
      },
      {
        name: 'Myth Debunking Engagement',
        eventName: 'myth_engagement',
        description: 'Reading myths vs facts section',
        expectedDropoffRate: 80
      },
      {
        name: 'High-Value Conversion',
        eventName: 'conversion_action',
        description: 'Phone call or quote request for disability insurance',
        expectedDropoffRate: 92
      }
    ]
  }
};

// Facebook Pixel Event Configuration
export const facebookPixelEvents: Record<string, any> = {
  'medicare-advantage-maui-county-hawaii': {
    'Lead': {
      content_name: 'Maui County Medicare Advantage',
      content_category: 'Health Insurance',
      value: 95,
      currency: 'USD',
      custom_data: {
        location: 'Maui County, Hawaii',
        product_type: 'Medicare Advantage',
        audience: 'Hawaiian Residents'
      }
    }
  },

  'medicare-cost-calculator': {
    'CompleteRegistration': {
      content_name: 'Medicare Cost Calculator Completion',
      content_category: 'Insurance Tool',
      value: 40,
      currency: 'USD',
      custom_data: {
        tool_type: 'Cost Calculator',
        completion_stage: 'Full Calculation'
      }
    },
    'Lead': {
      content_name: 'Medicare Cost Calculator Lead',
      content_category: 'Insurance Tool',
      value: 85,
      currency: 'USD',
      custom_data: {
        lead_source: 'Cost Calculator',
        lead_quality: 'High Intent'
      }
    }
  },

  'disability-insurance': {
    'Lead': {
      content_name: 'Disability Insurance Consultation',
      content_category: 'Income Protection',
      value: 120,
      currency: 'USD',
      custom_data: {
        product_type: 'Disability Insurance',
        lead_value: 'Premium',
        audience: 'Income Protectors'
      }
    }
  }
};

// Enhanced Ecommerce Tracking for Google Analytics
export const enhancedEcommerceConfig = {
  // Treat insurance quotes as "products" for tracking purposes
  'medicare-advantage-maui-county-hawaii': {
    item_id: 'ma-maui-quote',
    item_name: 'Maui County Medicare Advantage Quote',
    item_category: 'Medicare Advantage',
    item_category2: 'County Specific',
    item_brand: 'El-Mag Insurance',
    price: 95.00,
    quantity: 1,
    custom_parameters: {
      location: 'Maui County, Hawaii',
      audience_segment: 'Hawaiian Residents'
    }
  },

  'medicare-cost-calculator': {
    item_id: 'medicare-calculator-lead',
    item_name: 'Medicare Cost Calculator Generated Lead',
    item_category: 'Interactive Tools',
    item_category2: 'Cost Calculator',
    item_brand: 'El-Mag Insurance',
    price: 85.00,
    quantity: 1,
    custom_parameters: {
      tool_completion: 'Full',
      lead_quality: 'Calculator Generated'
    }
  },

  'disability-insurance': {
    item_id: 'disability-insurance-consultation',
    item_name: 'Disability Insurance Consultation Request',
    item_category: 'Disability Insurance',
    item_category2: 'Income Protection',
    item_brand: 'El-Mag Insurance',
    price: 120.00,
    quantity: 1,
    custom_parameters: {
      product_complexity: 'High',
      education_level: 'Advanced'
    }
  }
};

// Real-time event tracking functions
export const trackConversion = (pageKey: string, conversionType: string, additionalData: any = {}) => {
  const goals = ga4ConversionGoals[pageKey];
  if (!goals) return;

  const matchingGoal = goals.find(goal => goal.eventName === conversionType);
  if (!matchingGoal) return;

  // Track in Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', matchingGoal.eventName, {
      event_category: matchingGoal.category,
      event_label: matchingGoal.name,
      value: matchingGoal.value,
      currency: matchingGoal.currency,
      custom_page_key: pageKey,
      conversion_goal: matchingGoal.name,
      ...additionalData
    });
  }

  // Track in Facebook Pixel
  const fbEvent = facebookPixelEvents[pageKey];
  if (fbEvent && typeof window !== 'undefined' && (window as any).fbq) {
    const eventType = conversionType === 'phone_call' || conversionType === 'quote_request' ? 'Lead' : 'CustomEvent';
    (window as any).fbq('track', eventType, fbEvent[eventType] || fbEvent['Lead']);
  }

  // Track in landing page analytics
  trackLandingPagePerformance(pageKey, conversionType, {
    goal_value: matchingGoal.value,
    goal_category: matchingGoal.category,
    ...additionalData
  });
};

// Funnel step tracking
export const trackFunnelStep = (pageKey: string, stepName: string, stepData: any = {}) => {
  const funnel = conversionFunnels[pageKey];
  if (!funnel) return;

  const step = funnel.steps.find(s => s.name === stepName);
  if (!step) return;

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'funnel_step', {
      event_category: 'Conversion Funnel',
      event_label: `${funnel.name} - ${stepName}`,
      funnel_name: funnel.name,
      step_name: stepName,
      step_order: funnel.steps.indexOf(step) + 1,
      expected_dropoff_rate: step.expectedDropoffRate,
      page_key: pageKey,
      ...stepData
    });
  }
};

// Conversion rate optimization tracking
export const trackCROExperiment = (pageKey: string, experimentName: string, variant: string, outcome: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cro_experiment', {
      event_category: 'Conversion Optimization',
      event_label: `${experimentName} - ${variant}`,
      experiment_name: experimentName,
      variant_name: variant,
      outcome: outcome,
      page_key: pageKey
    });
  }
};