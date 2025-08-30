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
export const trackFormSubmission = (formType: 'contact' | 'quote', success: boolean) => {
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
export const trackCalculatorUsage = (calculatorType: 'medicare' | 'health_insurance', inputData: Record<string, any>) => {
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