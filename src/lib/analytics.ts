export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && (window as any).gtag && typeof (window as any).gtag === 'function') {
    try {
      (window as any).gtag('config', GA_TRACKING_ID, {
        page_location: url,
      });
    } catch (error) {
      console.warn('Failed to track pageview:', error);
    }
  }
};

export const event = (action: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && (window as any).gtag && typeof (window as any).gtag === 'function') {
    try {
      (window as any).gtag('event', action, parameters);
    } catch (error) {
      console.warn('Failed to track event:', error);
    }
  }
};

// Form submission tracking
export const trackFormSubmission = (formType: string, success: boolean) => {
  try {
    event('form_submit', {
      form_type: formType,
      success: success ? 'true' : 'false',
      event_category: 'engagement',
      event_label: `${formType}_form`,
    });
  } catch (error) {
    console.warn('Failed to track form submission:', error);
  }
};

// Page engagement tracking  
export const trackButtonClick = (buttonName: string, location: string) => {
  try {
    event('click', {
      event_category: 'engagement',
      event_label: `${buttonName}_${location}`,
      button_name: buttonName,
      page_location: location,
    });
  } catch (error) {
    console.warn('Failed to track button click:', error);
  }
};

// Phone call tracking
export const trackPhoneCall = (phoneNumber: string) => {
  try {
    event('phone_call', {
      event_category: 'conversion',
      event_label: 'phone_click',
      phone_number: phoneNumber,
    });
  } catch (error) {
    console.warn('Failed to track phone call:', error);
  }
};

// Resource engagement
export const trackResourceView = (resourceName: string, category: string) => {
  try {
    event('view_item', {
      event_category: 'content',
      event_label: `resource_${category}`,
      item_name: resourceName,
      item_category: category,
    });
  } catch (error) {
    console.warn('Failed to track resource view:', error);
  }
};

// Calculator interaction tracking
export const trackCalculatorUsage = (calculatorType: string, inputData: Record<string, any>) => {
  try {
    event('calculator_used', {
      event_category: 'engagement',
      event_label: `${calculatorType}_calculator`,
      calculator_type: calculatorType,
      ...inputData,
    });
  } catch (error) {
    console.warn('Failed to track calculator usage:', error);
  }
};

// Calculator result view
export const trackCalculatorResult = (calculatorType: 'medicare' | 'health_insurance', resultData: Record<string, any>) => {
  try {
    event('calculator_result_viewed', {
      event_category: 'conversion',
      event_label: `${calculatorType}_result`,
      calculator_type: calculatorType,
      ...resultData,
    });
  } catch (error) {
    console.warn('Failed to track calculator result:', error);
  }
};

// Plan comparison tracking
export const trackPlanComparison = (planType: string, comparisonData: Record<string, any>) => {
  try {
    event('plan_comparison', {
      event_category: 'engagement',
      event_label: `${planType}_comparison`,
      plan_type: planType,
      ...comparisonData,
    });
  } catch (error) {
    console.warn('Failed to track plan comparison:', error);
  }
};

// CTA click tracking
export const trackCTAClick = (ctaName: string, location: string, destination: string) => {
  try {
    event('cta_click', {
      event_category: 'conversion',
      event_label: `${ctaName}_${location}`,
      cta_name: ctaName,
      page_location: location,
      destination: destination,
    });
  } catch (error) {
    console.warn('Failed to track CTA click:', error);
  }
};

// Page scroll tracking
export const trackPageScroll = (percentage: number) => {
  try {
    if (percentage >= 25 && percentage % 25 === 0) {
      event('scroll', {
        event_category: 'engagement',
        event_label: `scroll_${percentage}`,
        scroll_percentage: percentage,
      });
    }
  } catch (error) {
    console.warn('Failed to track page scroll:', error);
  }
};

// Blog article engagement tracking
export const trackBlogArticleClick = (
  articleId: string,
  articleTitle: string,
  category: string,
  insuranceType: string,
  userContext?: string,
  position?: number
) => {
  try {
    event('blog_article_click', {
      event_category: 'content',
      event_label: `blog_${category.toLowerCase()}`,
      article_id: articleId,
      article_title: articleTitle,
      article_category: category,
      insurance_type: insuranceType,
      user_context: userContext || 'general',
      article_position: position || 0,
    });
  } catch (error) {
    console.warn('Failed to track blog article click:', error);
  }
};

// Blog section engagement
export const trackBlogSectionView = (
  sectionType: 'related_articles' | 'featured_content' | 'category_filter',
  userContext?: string,
  articlesShown?: number
) => {
  try {
    event('blog_section_view', {
      event_category: 'content',
      event_label: `blog_${sectionType}`,
      section_type: sectionType,
      user_context: userContext || 'general',
      articles_shown: articlesShown || 0,
    });
  } catch (error) {
    console.warn('Failed to track blog section view:', error);
  }
};

// Blog article reading engagement
export const trackBlogArticleEngagement = (
  articleId: string,
  engagementType: 'start_reading' | 'finish_reading' | 'share' | 'bookmark',
  timeSpent?: number,
  scrollPercentage?: number
) => {
  try {
    event('blog_article_engagement', {
      event_category: 'content',
      event_label: `blog_${engagementType}`,
      article_id: articleId,
      engagement_type: engagementType,
      time_spent: timeSpent || 0,
      scroll_percentage: scrollPercentage || 0,
    });
  } catch (error) {
    console.warn('Failed to track blog article engagement:', error);
  }
};

// Blog CTA interactions
export const trackBlogCTAClick = (
  ctaType: 'contact' | 'phone' | 'quote' | 'related_article',
  articleId: string,
  ctaPosition: 'header' | 'inline' | 'footer' | 'sidebar'
) => {
  try {
    event('blog_cta_click', {
      event_category: 'conversion',
      event_label: `blog_cta_${ctaType}`,
      cta_type: ctaType,
      article_id: articleId,
      cta_position: ctaPosition,
    });
  } catch (error) {
    console.warn('Failed to track blog CTA click:', error);
  }
};

// Blog interactive content usage
export const trackBlogInteractiveContent = (
  contentType: 'calculator' | 'checklist' | 'video' | 'quiz',
  articleId: string,
  interactionData?: Record<string, any>
) => {
  try {
    event('blog_interactive_content', {
      event_category: 'engagement',
      event_label: `blog_${contentType}`,
      content_type: contentType,
      article_id: articleId,
      ...interactionData,
    });
  } catch (error) {
    console.warn('Failed to track blog interactive content:', error);
  }
};

// Blog search and filtering
export const trackBlogFilter = (
  filterType: 'category' | 'insurance_type' | 'author' | 'date',
  filterValue: string,
  resultCount: number
) => {
  try {
    event('blog_filter_used', {
      event_category: 'engagement',
      event_label: `blog_filter_${filterType}`,
      filter_type: filterType,
      filter_value: filterValue,
      result_count: resultCount,
    });
  } catch (error) {
    console.warn('Failed to track blog filter:', error);
  }
};

// County-specific page tracking
export const trackCountyPageEngagement = (
  county: string,
  state: string,
  engagementType: 'provider_click' | 'plan_comparison' | 'demographic_view' | 'city_section_view',
  additionalData?: Record<string, any>
) => {
  try {
    event('county_page_engagement', {
      event_category: 'location_engagement',
      event_label: `${county}_${state}_${engagementType}`,
      county: county,
      state: state,
      engagement_type: engagementType,
      ...additionalData,
    });
  } catch (error) {
    console.warn('Failed to track county page engagement:', error);
  }
};

// Disability insurance specific tracking
export const trackDisabilityInsuranceInteraction = (
  interactionType: 'income_calculator' | 'coverage_comparison' | 'myth_debunking' | 'employer_vs_individual',
  userInputs?: Record<string, any>
) => {
  try {
    event('disability_insurance_interaction', {
      event_category: 'product_engagement',
      event_label: `disability_${interactionType}`,
      interaction_type: interactionType,
      value: interactionType === 'income_calculator' ? 15 : 5,
      ...userInputs,
    });
  } catch (error) {
    console.warn('Failed to track disability insurance interaction:', error);
  }
};

// Interactive calculator enhanced tracking
export const trackCalculatorInteraction = (
  calculatorType: 'medicare_cost' | 'disability_coverage',
  interactionType: 'input_change' | 'result_view' | 'section_expand' | 'tip_view',
  interactionData?: Record<string, any>
) => {
  try {
    event('calculator_interaction', {
      event_category: 'tool_engagement',
      event_label: `${calculatorType}_${interactionType}`,
      calculator_type: calculatorType,
      interaction_type: interactionType,
      ...interactionData,
    });
  } catch (error) {
    console.warn('Failed to track calculator interaction:', error);
  }
};

// Bilingual content engagement tracking
export const trackBilingualContentEngagement = (
  language: 'english' | 'spanish',
  contentSection: string,
  county?: string
) => {
  try {
    event('bilingual_content_engagement', {
      event_category: 'accessibility',
      event_label: `${language}_${contentSection}`,
      language: language,
      content_section: contentSection,
      county: county || '',
    });
  } catch (error) {
    console.warn('Failed to track bilingual content engagement:', error);
  }
};

// Island-specific tracking (for Hawaii pages)
export const trackIslandSpecificEngagement = (
  island: string,
  engagementType: 'inter_island_coverage' | 'provider_network' | 'travel_benefits',
  additionalData?: Record<string, any>
) => {
  try {
    event('island_specific_engagement', {
      event_category: 'geographic_engagement',
      event_label: `${island}_${engagementType}`,
      island: island,
      engagement_type: engagementType,
      ...additionalData,
    });
  } catch (error) {
    console.warn('Failed to track island-specific engagement:', error);
  }
};

// Premium plan comparison tracking
export const trackPremiumPlanComparison = (
  planType: 'low_cost' | 'balanced' | 'premium',
  comparisonData: Record<string, any>
) => {
  try {
    event('premium_plan_comparison', {
      event_category: 'plan_research',
      event_label: `${planType}_plan_selected`,
      plan_type: planType,
      value: planType === 'premium' ? 10 : planType === 'balanced' ? 7 : 3,
      ...comparisonData,
    });
  } catch (error) {
    console.warn('Failed to track premium plan comparison:', error);
  }
};

// Regional network provider tracking
export const trackNetworkProviderInteraction = (
  networkName: string,
  interactionType: 'view_details' | 'find_doctor' | 'coverage_check',
  location?: string
) => {
  try {
    event('network_provider_interaction', {
      event_category: 'provider_engagement',
      event_label: `${networkName}_${interactionType}`,
      network_name: networkName,
      interaction_type: interactionType,
      location: location || '',
      value: interactionType === 'find_doctor' ? 20 : 5,
    });
  } catch (error) {
    console.warn('Failed to track network provider interaction:', error);
  }
};

// Enrollment period tracking
export const trackEnrollmentPeriodInteraction = (
  periodType: 'open_enrollment' | 'special_enrollment' | 'initial_enrollment',
  actionTaken: 'date_check' | 'eligibility_verify' | 'start_process',
  userContext?: Record<string, any>
) => {
  try {
    event('enrollment_period_interaction', {
      event_category: 'enrollment',
      event_label: `${periodType}_${actionTaken}`,
      period_type: periodType,
      action_taken: actionTaken,
      value: actionTaken === 'start_process' ? 25 : 5,
      ...userContext,
    });
  } catch (error) {
    console.warn('Failed to track enrollment period interaction:', error);
  }
};