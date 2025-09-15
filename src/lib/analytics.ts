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

// Medicare Extra Help Quiz specific tracking
export const trackExtraHelpQuizInteraction = (
  interactionType: 'quiz_start' | 'question_answered' | 'quiz_completed' | 'result_viewed' | 'cta_clicked',
  questionNumber?: number,
  answer?: string,
  quizResult?: 'likely_eligible' | 'not_eligible' | 'needs_review',
  ctaType?: string
) => {
  try {
    event('extra_help_quiz_interaction', {
      event_category: 'medicare_tools',
      event_label: `extra_help_${interactionType}`,
      interaction_type: interactionType,
      question_number: questionNumber || 0,
      quiz_answer: answer || '',
      quiz_result: quizResult || '',
      cta_type: ctaType || '',
      value: interactionType === 'quiz_completed' ? 20 : interactionType === 'cta_clicked' ? 15 : 5,
    });
  } catch (error) {
    console.warn('Failed to track Extra Help quiz interaction:', error);
  }
};

// Ask AI Medicare Questions specific tracking
export const trackAIQuestionInteraction = (
  interactionType: 'question_asked' | 'ai_response_viewed' | 'follow_up_question' | 'expert_contact_requested' | 'example_question_clicked',
  questionCategory?: 'getting_started' | 'plan_comparison' | 'prescription' | 'cost' | 'timing' | 'coverage',
  questionText?: string,
  responseHelpful?: boolean,
  contactMethod?: 'phone' | 'chat' | 'form'
) => {
  try {
    event('ai_question_interaction', {
      event_category: 'ai_assistance',
      event_label: `ai_medicare_${interactionType}`,
      interaction_type: interactionType,
      question_category: questionCategory || '',
      question_length: questionText?.length || 0,
      response_helpful: responseHelpful,
      contact_method: contactMethod || '',
      value: interactionType === 'expert_contact_requested' ? 25 : interactionType === 'question_asked' ? 10 : 3,
    });
  } catch (error) {
    console.warn('Failed to track AI question interaction:', error);
  }
};

// Medicare quiz performance tracking
export const trackQuizPerformance = (
  quizType: 'extra_help' | 'plan_finder' | 'eligibility',
  completionRate: number,
  timeSpent: number,
  questionsAnswered: number,
  totalQuestions: number,
  userPath: string[]
) => {
  try {
    event('quiz_performance', {
      event_category: 'quiz_analytics',
      event_label: `${quizType}_performance`,
      quiz_type: quizType,
      completion_rate: completionRate,
      time_spent: timeSpent,
      questions_answered: questionsAnswered,
      total_questions: totalQuestions,
      user_path: userPath.join(','),
      value: completionRate > 80 ? 20 : completionRate > 50 ? 10 : 5,
    });
  } catch (error) {
    console.warn('Failed to track quiz performance:', error);
  }
};

// AI interaction quality tracking
export const trackAIInteractionQuality = (
  sessionId: string,
  questionsAsked: number,
  averageResponseTime: number,
  userSatisfaction: 'helpful' | 'somewhat_helpful' | 'not_helpful',
  expertReferralRequested: boolean,
  topicsCovered: string[]
) => {
  try {
    event('ai_interaction_quality', {
      event_category: 'ai_performance',
      event_label: `ai_session_${userSatisfaction}`,
      session_id: sessionId,
      questions_asked: questionsAsked,
      avg_response_time: averageResponseTime,
      user_satisfaction: userSatisfaction,
      expert_referral: expertReferralRequested,
      topics_covered: topicsCovered.join(','),
      value: userSatisfaction === 'helpful' ? 15 : userSatisfaction === 'somewhat_helpful' ? 8 : 2,
    });
  } catch (error) {
    console.warn('Failed to track AI interaction quality:', error);
  }
};

// Medicare resource conversion tracking
export const trackMedicareResourceConversion = (
  resourceType: 'quiz' | 'ai_chat' | 'calculator' | 'comparison_tool',
  entryPoint: string,
  conversionAction: 'phone_call' | 'form_submit' | 'expert_request' | 'plan_selection',
  userJourney: string[],
  timeToConversion: number
) => {
  try {
    event('medicare_resource_conversion', {
      event_category: 'conversion',
      event_label: `${resourceType}_to_${conversionAction}`,
      resource_type: resourceType,
      entry_point: entryPoint,
      conversion_action: conversionAction,
      user_journey: userJourney.join(' > '),
      time_to_conversion: timeToConversion,
      value: conversionAction === 'phone_call' ? 50 : conversionAction === 'expert_request' ? 40 : 25,
    });
  } catch (error) {
    console.warn('Failed to track Medicare resource conversion:', error);
  }
};

// Whole Life Insurance specific tracking
export const trackWholeLifeInsuranceInteraction = (
  interactionType: 'page_view' | 'quote_request' | 'coverage_calculator' | 'comparison_view' | 'rate_table_view' | 'benefit_exploration' | 'phone_call' | 'form_submission',
  coverageAmount?: number,
  userAge?: number,
  premiumRange?: string,
  comparisonType?: 'whole_vs_term' | 'whole_vs_universal' | 'carrier_comparison',
  contentSection?: string
) => {
  try {
    event('whole_life_insurance_interaction', {
      event_category: 'life_insurance',
      event_label: `whole_life_${interactionType}`,
      interaction_type: interactionType,
      coverage_amount: coverageAmount || 0,
      user_age: userAge || 0,
      premium_range: premiumRange || '',
      comparison_type: comparisonType || '',
      content_section: contentSection || '',
      product_type: 'whole_life_insurance',
      insurance_category: 'permanent_life',
      value: interactionType === 'phone_call' ? 75 : interactionType === 'quote_request' ? 50 : interactionType === 'form_submission' ? 60 : 10,
    });
  } catch (error) {
    console.warn('Failed to track whole life insurance interaction:', error);
  }
};

// Long Term Care Insurance specific tracking
export const trackLongTermCareInteraction = (
  interactionType: 'page_view' | 'cost_calculator' | 'coverage_explorer' | 'benefit_period_selection' | 'care_setting_info' | 'premium_estimate' | 'phone_call' | 'quote_request',
  dailyBenefitAmount?: number,
  benefitPeriod?: string,
  careType?: 'nursing_home' | 'assisted_living' | 'home_care' | 'memory_care' | 'comprehensive',
  userAge?: number,
  premiumEstimate?: number,
  policyType?: 'traditional' | 'hybrid_life' | 'hybrid_annuity'
) => {
  try {
    event('long_term_care_interaction', {
      event_category: 'ltc_insurance',
      event_label: `ltc_${interactionType}`,
      interaction_type: interactionType,
      daily_benefit_amount: dailyBenefitAmount || 0,
      benefit_period: benefitPeriod || '',
      care_type: careType || '',
      user_age: userAge || 0,
      premium_estimate: premiumEstimate || 0,
      policy_type: policyType || '',
      product_type: 'long_term_care_insurance',
      insurance_category: 'health_care_planning',
      value: interactionType === 'phone_call' ? 85 : interactionType === 'quote_request' ? 65 : interactionType === 'premium_estimate' ? 35 : 12,
    });
  } catch (error) {
    console.warn('Failed to track long term care interaction:', error);
  }
};

// Insurance quote funnel tracking
export const trackInsuranceQuoteFunnel = (
  insuranceType: 'whole_life' | 'long_term_care' | 'term_life' | 'final_expense',
  funnelStep: 'landing' | 'info_gathering' | 'quote_generation' | 'quote_review' | 'contact_request' | 'application_start',
  stepData?: {
    coverageAmount?: number;
    userAge?: number;
    premiumBudget?: string;
    healthStatus?: string;
    timeSpent?: number;
  }
) => {
  try {
    event('insurance_quote_funnel', {
      event_category: 'funnel_tracking',
      event_label: `${insuranceType}_${funnelStep}`,
      insurance_type: insuranceType,
      funnel_step: funnelStep,
      coverage_amount: stepData?.coverageAmount || 0,
      user_age: stepData?.userAge || 0,
      premium_budget: stepData?.premiumBudget || '',
      health_status: stepData?.healthStatus || '',
      time_spent: stepData?.timeSpent || 0,
      step_completion: true,
      value: funnelStep === 'contact_request' ? 60 : funnelStep === 'quote_review' ? 40 : funnelStep === 'quote_generation' ? 30 : 8,
    });
  } catch (error) {
    console.warn('Failed to track insurance quote funnel:', error);
  }
};

// Insurance content engagement tracking
export const trackInsuranceContentEngagement = (
  insuranceType: 'whole_life' | 'long_term_care',
  contentType: 'rate_table' | 'comparison_chart' | 'benefit_explanation' | 'cost_breakdown' | 'use_case_scenario' | 'faq_section',
  engagementMetrics: {
    timeSpent: number;
    scrollDepth: number;
    interactionCount: number;
    sectionCompletion: boolean;
  },
  contentValue?: string
) => {
  try {
    event('insurance_content_engagement', {
      event_category: 'content_engagement',
      event_label: `${insuranceType}_${contentType}`,
      insurance_type: insuranceType,
      content_type: contentType,
      time_spent: engagementMetrics.timeSpent,
      scroll_depth: engagementMetrics.scrollDepth,
      interaction_count: engagementMetrics.interactionCount,
      section_completion: engagementMetrics.sectionCompletion,
      content_value: contentValue || '',
      value: engagementMetrics.sectionCompletion ? 15 : engagementMetrics.timeSpent > 30 ? 10 : 5,
    });
  } catch (error) {
    console.warn('Failed to track insurance content engagement:', error);
  }
};

// Insurance lead quality scoring
export const trackInsuranceLeadQuality = (
  insuranceType: 'whole_life' | 'long_term_care',
  leadData: {
    sourceChannel: string;
    pageViews: number;
    timeOnSite: number;
    contentEngagement: number;
    quotesRequested: number;
    contactMethod: 'phone' | 'form' | 'chat';
    urgencyLevel: 'immediate' | 'researching' | 'future_planning';
  },
  qualityScore: number
) => {
  try {
    event('insurance_lead_quality', {
      event_category: 'lead_scoring',
      event_label: `${insuranceType}_quality_${qualityScore >= 80 ? 'high' : qualityScore >= 60 ? 'medium' : 'low'}`,
      insurance_type: insuranceType,
      source_channel: leadData.sourceChannel,
      page_views: leadData.pageViews,
      time_on_site: leadData.timeOnSite,
      content_engagement: leadData.contentEngagement,
      quotes_requested: leadData.quotesRequested,
      contact_method: leadData.contactMethod,
      urgency_level: leadData.urgencyLevel,
      quality_score: qualityScore,
      value: qualityScore >= 80 ? 100 : qualityScore >= 60 ? 60 : 25,
    });
  } catch (error) {
    console.warn('Failed to track insurance lead quality:', error);
  }
};

// Insurance cross-sell tracking
export const trackInsuranceCrossSell = (
  primaryProduct: 'whole_life' | 'long_term_care',
  crossSellProduct: 'term_life' | 'final_expense' | 'medicare_supplement' | 'social_security_analysis',
  crossSellAction: 'view' | 'click' | 'quote_request' | 'conversion',
  crossSellContext: string
) => {
  try {
    event('insurance_cross_sell', {
      event_category: 'cross_sell',
      event_label: `${primaryProduct}_to_${crossSellProduct}`,
      primary_product: primaryProduct,
      cross_sell_product: crossSellProduct,
      cross_sell_action: crossSellAction,
      cross_sell_context: crossSellContext,
      product_combination: `${primaryProduct}+${crossSellProduct}`,
      value: crossSellAction === 'conversion' ? 80 : crossSellAction === 'quote_request' ? 45 : crossSellAction === 'click' ? 15 : 5,
    });
  } catch (error) {
    console.warn('Failed to track insurance cross-sell:', error);
  }
};