'use client'

import { event } from './analytics'

// Final Expense Insurance Analytics Tracking Configuration
export const FINAL_EXPENSE_EVENTS = {
  // Page Performance Events
  PAGE_VIEW: 'final_expense_page_view',
  PAGE_EXIT: 'final_expense_page_exit',
  SCROLL_MILESTONE: 'final_expense_scroll_milestone',
  DEEP_ENGAGEMENT: 'final_expense_deep_engagement',
  
  // Conversion Events
  QUOTE_REQUEST: 'final_expense_quote_request',
  PHONE_CALL: 'final_expense_phone_call',
  FORM_SUBMIT: 'final_expense_form_submit',
  APPLICATION_START: 'final_expense_application_start',
  
  // Content Engagement Events
  COVERAGE_INTEREST: 'final_expense_coverage_interest',
  CALCULATOR_USE: 'final_expense_calculator_use',
  FAQ_INTERACTION: 'final_expense_faq_interaction',
  COST_CALCULATOR: 'funeral_cost_calculator_use',
  
  // Product Interest Events
  BURIAL_INSURANCE_CLICK: 'burial_insurance_interest',
  GUARANTEED_ACCEPTANCE_CLICK: 'guaranteed_acceptance_interest',
  FUNERAL_COSTS_CLICK: 'funeral_costs_planning',
  PREMIUM_CALCULATOR: 'final_expense_premium_calculator',
  
  // Educational Content Events
  EDUCATION_ENGAGEMENT: 'final_expense_education_engagement',
  GUIDE_DOWNLOAD: 'final_expense_guide_download',
  VIDEO_WATCH: 'final_expense_video_watch',
  COMPARISON_TOOL: 'final_expense_comparison_tool',
} as const

// Performance Tracking Configuration
export interface FinalExpensePerformanceMetrics {
  pageLoadTime: number
  timeToFirstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
  timeOnPage: number
  scrollDepth: number
  bounceRate: number
  conversionRate: number
}

// Lead Scoring Configuration
export const FINAL_EXPENSE_LEAD_SCORING = {
  // High-value actions
  FORM_SUBMISSION: 100,
  PHONE_CALL: 90,
  QUOTE_REQUEST: 85,
  APPLICATION_START: 95,
  
  // Medium-value actions
  CALCULATOR_USE: 40,
  COVERAGE_COMPARISON: 35,
  FAQ_ENGAGEMENT: 25,
  DEEP_ENGAGEMENT: 30,
  
  // Low-value actions
  PAGE_VIEW: 5,
  SCROLL_MILESTONE: 10,
  CONTENT_CLICK: 15,
  VIDEO_WATCH: 20,
} as const

// Conversion Funnel Stages
export const FINAL_EXPENSE_FUNNEL_STAGES = {
  AWARENESS: 'awareness',
  INTEREST: 'interest',
  CONSIDERATION: 'consideration',
  INTENT: 'intent',
  EVALUATION: 'evaluation',
  PURCHASE: 'purchase',
} as const

// Analytics Performance Tracking Functions
export class FinalExpenseAnalyticsTracker {
  private startTime: number
  private performanceMetrics: Partial<FinalExpensePerformanceMetrics> = {}
  
  constructor() {
    this.startTime = Date.now()
    this.initializePerformanceTracking()
  }
  
  private initializePerformanceTracking() {
    // Track Core Web Vitals
    if (typeof window !== 'undefined') {
      // Track page load performance
      window.addEventListener('load', () => {
        this.trackPageLoadMetrics()
      })
      
      // Track First Contentful Paint
      this.trackFCP()
      
      // Track Largest Contentful Paint
      this.trackLCP()
      
      // Track Cumulative Layout Shift
      this.trackCLS()
      
      // Track First Input Delay
      this.trackFID()
    }
  }
  
  private trackPageLoadMetrics() {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    this.performanceMetrics.pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart
    
    event('final_expense_performance_metrics', {
      event_category: 'final_expense_performance',
      event_label: 'page_load_time',
      page_load_time: this.performanceMetrics.pageLoadTime,
      custom_metric_1: this.performanceMetrics.pageLoadTime,
    })
  }
  
  private trackFCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fcp = entries.find(entry => entry.name === 'first-contentful-paint')
      
      if (fcp) {
        this.performanceMetrics.timeToFirstContentfulPaint = fcp.startTime
        
        event('final_expense_fcp', {
          event_category: 'final_expense_performance',
          event_label: 'first_contentful_paint',
          fcp_time: fcp.startTime,
          custom_metric_2: fcp.startTime,
        })
      }
    })
    
    observer.observe({ entryTypes: ['paint'] })
  }
  
  private trackLCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      
      this.performanceMetrics.largestContentfulPaint = lastEntry.startTime
      
      event('final_expense_lcp', {
        event_category: 'final_expense_performance',
        event_label: 'largest_contentful_paint',
        lcp_time: lastEntry.startTime,
        custom_metric_3: lastEntry.startTime,
      })
    })
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
  }
  
  private trackCLS() {
    let clsValue = 0
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
        }
      }
      
      this.performanceMetrics.cumulativeLayoutShift = clsValue
      
      event('final_expense_cls', {
        event_category: 'final_expense_performance',
        event_label: 'cumulative_layout_shift',
        cls_value: clsValue,
        custom_metric_4: clsValue,
      })
    })
    
    observer.observe({ entryTypes: ['layout-shift'] })
  }
  
  private trackFID() {
    const observer = new PerformanceObserver((list) => {
      const firstEntry = list.getEntries()[0]
      
      this.performanceMetrics.firstInputDelay = firstEntry.processingStart - firstEntry.startTime
      
      event('final_expense_fid', {
        event_category: 'final_expense_performance',
        event_label: 'first_input_delay',
        fid_time: this.performanceMetrics.firstInputDelay,
        custom_metric_5: this.performanceMetrics.firstInputDelay,
      })
    })
    
    observer.observe({ entryTypes: ['first-input'] })
  }
  
  // Conversion Funnel Tracking
  trackFunnelStage(stage: string, userAge?: number, coverageAmount?: number, location?: string) {
    event('final_expense_funnel_progress', {
      event_category: 'final_expense_conversion_funnel',
      event_label: stage,
      funnel_stage: stage,
      user_age: userAge,
      coverage_amount: coverageAmount,
      location: location,
      timestamp: Date.now(),
    })
  }
  
  // Lead Scoring
  calculateLeadScore(actions: string[]): number {
    return actions.reduce((score, action) => {
      const actionScore = FINAL_EXPENSE_LEAD_SCORING[action as keyof typeof FINAL_EXPENSE_LEAD_SCORING] || 0
      return score + actionScore
    }, 0)
  }
  
  trackLeadScore(score: number, userAge?: number, coverageAmount?: number, location?: string) {
    let leadQuality = 'low'
    if (score >= 200) leadQuality = 'high'
    else if (score >= 100) leadQuality = 'medium'
    
    event('final_expense_lead_score', {
      event_category: 'final_expense_lead_quality',
      event_label: leadQuality,
      lead_score: score,
      lead_quality: leadQuality,
      user_age: userAge,
      coverage_amount: coverageAmount,
      location: location,
      value: score,
    })
  }
  
  // A/B Testing Support
  trackABTest(testName: string, variant: string, userAge?: number, location?: string) {
    event('final_expense_ab_test', {
      event_category: 'final_expense_optimization',
      event_label: `${testName}_${variant}`,
      test_name: testName,
      variant: variant,
      user_age: userAge,
      location: location,
    })
  }
  
  // Competitor Analysis Tracking
  trackCompetitorComparison(competitors: string[], selectedOption: string, location?: string) {
    event('final_expense_competitor_comparison', {
      event_category: 'final_expense_market_analysis',
      event_label: 'competitor_comparison',
      competitors_viewed: competitors.join(','),
      selected_option: selectedOption,
      comparison_count: competitors.length,
      location: location,
    })
  }
  
  // SEO Performance Tracking
  trackKeywordPerformance(keyword: string, ranking: number, searchVolume: number) {
    event('final_expense_seo_performance', {
      event_category: 'final_expense_seo',
      event_label: keyword,
      keyword: keyword,
      ranking_position: ranking,
      search_volume: searchVolume,
      improvement_opportunity: ranking > 10 ? 'high' : ranking > 5 ? 'medium' : 'low',
    })
  }
  
  // Revenue Attribution Tracking
  trackRevenueAttribution(source: string, medium: string, campaign: string, revenue: number) {
    event('final_expense_revenue_attribution', {
      event_category: 'final_expense_revenue',
      event_label: `${source}_${medium}`,
      traffic_source: source,
      traffic_medium: medium,
      campaign_name: campaign,
      attributed_revenue: revenue,
      value: revenue,
    })
  }
}

// Utility Functions for Analytics
export const trackFinalExpenseQuoteRequest = (
  coverageAmount: number,
  userAge: number,
  familyStatus: string,
  location: string,
  leadScore: number = 0
) => {
  event(FINAL_EXPENSE_EVENTS.QUOTE_REQUEST, {
    event_category: 'final_expense_conversion',
    event_label: 'quote_requested',
    coverage_amount: coverageAmount,
    user_age: userAge,
    family_status: familyStatus,
    location: location,
    lead_score: leadScore,
    value: 75, // High-value conversion for final expense insurance
  })
}

export const trackFinalExpenseCalculatorUsage = (
  calculatorType: 'burial_cost' | 'coverage_estimator' | 'premium_calculator',
  userInput: Record<string, any>,
  result: number,
  location: string
) => {
  event(FINAL_EXPENSE_EVENTS.CALCULATOR_USE, {
    event_category: 'final_expense_tools',
    event_label: calculatorType,
    calculator_type: calculatorType,
    calculated_result: result,
    location: location,
    ...userInput,
  })
}

export const trackFinalExpenseEducationalContent = (
  contentType: 'guide' | 'video' | 'article' | 'faq' | 'calculator',
  contentTitle: string,
  timeSpent: number,
  location: string
) => {
  event(FINAL_EXPENSE_EVENTS.EDUCATION_ENGAGEMENT, {
    event_category: 'final_expense_content',
    event_label: contentType,
    content_type: contentType,
    content_title: contentTitle,
    time_spent: timeSpent,
    location: location,
  })
}

// Export singleton instance
export const finalExpenseTracker = new FinalExpenseAnalyticsTracker()