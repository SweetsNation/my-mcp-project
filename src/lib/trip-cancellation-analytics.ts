// Trip Cancellation Insurance Analytics Library
// Advanced tracking for travel insurance performance optimization

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
    dataLayer: any[]
  }
}

// Trip Cancellation Specific Event Types
export interface TripCancellationEvent {
  event_category: 'Trip Cancellation Insurance'
  event_label: string
  value?: number
  custom_parameters: {
    insurance_type: 'trip_cancellation'
    user_segment: string
    trip_type?: string
    coverage_amount?: string
    destination_type?: string
    travel_date?: string
    trip_cost?: number
    conversion_stage: string
    contact_method?: string
    content_type?: string
    session_quality?: string
    action_type?: string
    page_section?: string
    tool_type?: string
    interaction_type?: string
    selection_method?: string
    form_field?: string
    field_value?: string
    form_progress?: number
    lead_quality_score?: string
    session_duration?: string
    max_scroll_depth?: string
    interaction_count?: string
    lead_score?: string
    funnel_completion?: string
    metric_type?: string
    metric_value?: string
    load_time?: string
    scroll_percentage?: string
    time_seconds?: string
    engagement_level?: string
    user_intent?: string
    checklist_item?: string
    resource_type?: string
    feature_type?: string
    engagement_type?: string
    estimated_cost?: string
    coverage_type?: string
    estimated_trip_cost?: string
    trigger_event?: string
    funnel_position?: string
    funnel_path?: string
    [key: string]: any // Allow additional properties
  }
}

// User Segmentation for Trip Cancellation
export interface TripCancellationUserSegment {
  age_group: 'under_30' | '30_50' | '50_65' | 'over_65'
  travel_frequency: 'occasional' | 'frequent' | 'business'
  trip_value: 'budget' | 'mid_range' | 'luxury'
  destination_preference: 'domestic' | 'international' | 'cruise' | 'mixed'
  device_type: 'mobile' | 'tablet' | 'desktop'
  traffic_source: string
  geographic_location: string
}

// Conversion Funnel Stages for Trip Cancellation
export enum TripCancellationFunnelStage {
  LANDING = 'landing',
  EDUCATION = 'education',
  COVERAGE_EXPLORATION = 'coverage_exploration',
  TRIP_TYPE_SELECTION = 'trip_type_selection',
  QUOTE_INITIATION = 'quote_initiation',
  LEAD_CAPTURE = 'lead_capture',
  CONVERSION = 'conversion'
}

// Performance Metrics Tracking
export interface TripCancellationMetrics {
  page_load_time: number
  time_on_page: number
  scroll_depth: number
  interaction_rate: number
  bounce_rate: number
  conversion_rate: number
  cost_per_acquisition: number
  lead_quality_score: number
}

export class TripCancellationAnalytics {
  private static instance: TripCancellationAnalytics
  private userSegment: TripCancellationUserSegment | null = null
  private sessionStartTime: number
  private maxScrollDepth: number = 0
  private interactionCount: number = 0
  private leadScore: number = 0
  private conversionFunnel: TripCancellationFunnelStage[] = []

  constructor() {
    this.sessionStartTime = Date.now()
    this.initializeTracking()
  }

  public static getInstance(): TripCancellationAnalytics {
    if (!TripCancellationAnalytics.instance) {
      TripCancellationAnalytics.instance = new TripCancellationAnalytics()
    }
    return TripCancellationAnalytics.instance
  }

  // Initialize comprehensive tracking
  private initializeTracking(): void {
    if (typeof window !== 'undefined') {
      this.identifyUserSegment()
      this.setupPerformanceMonitoring()
      this.setupBehaviorTracking()
      this.trackFunnelStage(TripCancellationFunnelStage.LANDING)
    }
  }

  // User Segmentation Based on Trip Cancellation Patterns
  private identifyUserSegment(): void {
    if (typeof window === 'undefined') return

    const userAgent = navigator.userAgent.toLowerCase()
    const urlParams = new URLSearchParams(window.location.search)
    const referrer = document.referrer

    this.userSegment = {
      age_group: this.inferAgeGroup(urlParams),
      travel_frequency: this.inferTravelFrequency(referrer, urlParams),
      trip_value: this.inferTripValue(urlParams),
      destination_preference: this.inferDestinationPreference(urlParams),
      device_type: this.getDeviceType(userAgent),
      traffic_source: this.getTrafficSource(referrer, urlParams),
      geographic_location: this.getGeographicLocation()
    }

    // Track user segment identification
    this.trackEvent('user_segment_identified', {
      event_label: 'User Segmentation Complete',
      custom_parameters: {
        insurance_type: 'trip_cancellation',
        user_segment: JSON.stringify(this.userSegment),
        conversion_stage: 'segmentation'
      }
    })
  }

  // Advanced Event Tracking
  public trackEvent(eventName: string, eventData: Partial<TripCancellationEvent>): void {
    if (typeof window === 'undefined' || !window.gtag) return

    const completeEventData: TripCancellationEvent = {
      event_category: 'Trip Cancellation Insurance',
      event_label: eventData.event_label || eventName,
      value: eventData.value,
      custom_parameters: {
        insurance_type: 'trip_cancellation',
        user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
        conversion_stage: 'interaction',
        ...eventData.custom_parameters
      }
    }

    window.gtag('event', eventName, completeEventData)

    // Update lead scoring
    this.updateLeadScore(eventName, eventData.custom_parameters?.trip_type)
  }

  // Conversion Funnel Tracking
  public trackFunnelStage(stage: TripCancellationFunnelStage, additionalData?: any): void {
    if (!this.conversionFunnel.includes(stage)) {
      this.conversionFunnel.push(stage)

      this.trackEvent('funnel_progression', {
        event_label: `Funnel Stage: ${stage}`,
        value: this.conversionFunnel.length,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
          conversion_stage: stage,
          funnel_position: this.conversionFunnel.length.toString(),
          funnel_path: this.conversionFunnel.join(' → '),
          ...additionalData
        }
      })
    }
  }

  // Trip Type Interest Tracking
  public trackTripTypeInterest(tripType: string, interactionType: 'view' | 'click' | 'explore'): void {
    this.trackEvent('trip_type_interest', {
      event_label: `${tripType} - ${interactionType}`,
      custom_parameters: {
        insurance_type: 'trip_cancellation',
        user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
        trip_type: tripType,
        interaction_type: interactionType,
        conversion_stage: 'exploration'
      }
    })

    if (interactionType === 'explore') {
      this.trackFunnelStage(TripCancellationFunnelStage.TRIP_TYPE_SELECTION, { trip_type: tripType })
    }
  }

  // Coverage Amount Selection Tracking
  public trackCoverageSelection(coverageAmount: string, coverageType: string, estimatedCost: number): void {
    this.trackEvent('coverage_selection', {
      event_label: `Coverage: ${coverageAmount} - ${coverageType}`,
      value: estimatedCost,
      custom_parameters: {
        insurance_type: 'trip_cancellation',
        user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
        coverage_amount: coverageAmount,
        coverage_type: coverageType,
        estimated_cost: estimatedCost.toString(),
        conversion_stage: 'coverage_selection'
      }
    })

    this.trackFunnelStage(TripCancellationFunnelStage.COVERAGE_EXPLORATION, { 
      coverage_amount: coverageAmount,
      coverage_type: coverageType 
    })
  }

  // Quote Request Tracking with Enhanced Data
  public trackQuoteRequest(quoteData: {
    trip_type: string
    destination_type: string
    trip_cost: number
    coverage_amount: string
    travel_date?: string
  }): void {
    this.trackEvent('quote_request', {
      event_label: `Quote Request: ${quoteData.trip_type}`,
      value: quoteData.trip_cost,
      custom_parameters: {
        insurance_type: 'trip_cancellation',
        user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
        trip_type: quoteData.trip_type,
        destination_type: quoteData.destination_type,
        trip_cost: quoteData.trip_cost,
        coverage_amount: quoteData.coverage_amount,
        travel_date: quoteData.travel_date || 'not_specified',
        conversion_stage: 'quote_request',
        lead_quality_score: this.leadScore.toString()
      }
    })

    this.trackFunnelStage(TripCancellationFunnelStage.QUOTE_INITIATION, quoteData)
  }

  // Lead Capture Tracking
  public trackLeadCapture(contactData: {
    method: 'phone' | 'email' | 'form'
    trip_type: string
    estimated_trip_cost: number
  }): void {
    this.trackEvent('lead_capture', {
      event_label: `Lead Captured: ${contactData.method}`,
      value: contactData.estimated_trip_cost,
      custom_parameters: {
        insurance_type: 'trip_cancellation',
        user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
        contact_method: contactData.method,
        trip_type: contactData.trip_type,
        estimated_trip_cost: contactData.estimated_trip_cost.toString(),
        conversion_stage: 'lead_capture',
        lead_quality_score: this.leadScore.toString(),
        session_duration: ((Date.now() - this.sessionStartTime) / 1000).toString()
      }
    })

    this.trackFunnelStage(TripCancellationFunnelStage.LEAD_CAPTURE, contactData)
  }

  // Performance Metrics Tracking
  private setupPerformanceMonitoring(): void {
    if (typeof window === 'undefined') return

    // Core Web Vitals for Trip Cancellation Pages
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.trackEvent('core_web_vital_lcp', {
            event_label: 'Largest Contentful Paint',
            value: Math.round(entry.startTime),
            custom_parameters: {
              insurance_type: 'trip_cancellation',
              user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
              metric_type: 'lcp',
              metric_value: Math.round(entry.startTime).toString(),
              conversion_stage: 'performance'
            }
          })
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay (FID)
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.trackEvent('core_web_vital_fid', {
            event_label: 'First Input Delay',
            value: Math.round((entry as any).processingStart - entry.startTime),
            custom_parameters: {
              insurance_type: 'trip_cancellation',
              user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
              metric_type: 'fid',
              metric_value: Math.round((entry as any).processingStart - entry.startTime).toString(),
              conversion_stage: 'performance'
            }
          })
        }
      }).observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift (CLS)
      new PerformanceObserver((list) => {
        let clsScore = 0
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsScore += (entry as any).value
          }
        }
        
        this.trackEvent('core_web_vital_cls', {
          event_label: 'Cumulative Layout Shift',
          value: Math.round(clsScore * 1000),
          custom_parameters: {
            insurance_type: 'trip_cancellation',
            user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
            metric_type: 'cls',
            metric_value: clsScore.toString(),
            conversion_stage: 'performance'
          }
        })
      }).observe({ entryTypes: ['layout-shift'] })
    }

    // Page Load Time
    window.addEventListener('load', () => {
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const pageLoadTime = navigationTiming.loadEventEnd - navigationTiming.fetchStart

      this.trackEvent('page_load_time', {
        event_label: 'Trip Cancellation Page Load',
        value: Math.round(pageLoadTime),
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
          load_time: Math.round(pageLoadTime).toString(),
          conversion_stage: 'performance'
        }
      })
    })
  }

  // Behavior Tracking Setup
  private setupBehaviorTracking(): void {
    if (typeof window === 'undefined') return

    // Scroll Depth Tracking
    let scrollDepthIntervals = [10, 25, 50, 75, 90, 100]
    let trackedIntervals = new Set<number>()

    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )

      this.maxScrollDepth = Math.max(this.maxScrollDepth, scrollPercent)

      scrollDepthIntervals.forEach(interval => {
        if (scrollPercent >= interval && !trackedIntervals.has(interval)) {
          trackedIntervals.add(interval)
          this.trackEvent('scroll_depth', {
            event_label: `${interval}% Scroll Depth`,
            value: interval,
            custom_parameters: {
              insurance_type: 'trip_cancellation',
              user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
              scroll_percentage: interval.toString(),
              conversion_stage: 'engagement'
            }
          })
        }
      })
    }

    window.addEventListener('scroll', this.throttle(trackScrollDepth, 500))

    // Time on Page Tracking
    const timeIntervals = [30, 60, 120, 300, 600] // seconds
    let trackedTimeIntervals = new Set<number>()

    timeIntervals.forEach(interval => {
      setTimeout(() => {
        if (!trackedTimeIntervals.has(interval)) {
          trackedTimeIntervals.add(interval)
          this.trackEvent('time_on_page', {
            event_label: `${interval}s Time on Page`,
            value: interval,
            custom_parameters: {
              insurance_type: 'trip_cancellation',
              user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
              time_seconds: interval.toString(),
              conversion_stage: 'engagement'
            }
          })
        }
      }, interval * 1000)
    })

    // Session End Tracking
    window.addEventListener('beforeunload', () => {
      const sessionDuration = Math.round((Date.now() - this.sessionStartTime) / 1000)
      
      this.trackEvent('session_end', {
        event_label: 'Trip Cancellation Session Complete',
        value: sessionDuration,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
          session_duration: sessionDuration.toString(),
          max_scroll_depth: this.maxScrollDepth.toString(),
          interaction_count: this.interactionCount.toString(),
          lead_score: this.leadScore.toString(),
          funnel_completion: this.conversionFunnel.join(' → '),
          conversion_stage: 'session_end'
        }
      })
    })
  }

  // Lead Scoring Algorithm for Trip Cancellation
  private updateLeadScore(eventName: string, tripType?: string): void {
    const scoreWeights = {
      'quote_request': 25,
      'coverage_selection': 15,
      'trip_type_interest': 10,
      'phone_click': 20,
      'form_interaction': 15,
      'specialist_contact': 30,
      'calculator_usage': 12,
      'faq_engagement': 8,
      'time_on_page': 5,
      'scroll_depth': 3
    }

    // Trip type premium scoring
    const tripTypeMultipliers = {
      'cruise': 1.3,
      'international': 1.2,
      'honeymoon': 1.4,
      'business': 1.1,
      'domestic': 1.0
    }

    const baseScore = scoreWeights[eventName as keyof typeof scoreWeights] || 2
    const tripMultiplier = tripType ? (tripTypeMultipliers[tripType as keyof typeof tripTypeMultipliers] || 1.0) : 1.0
    
    this.leadScore += Math.round(baseScore * tripMultiplier)
    this.interactionCount++

    // Track lead score updates
    if (this.leadScore > 50) { // High-quality lead threshold
      this.trackEvent('high_quality_lead', {
        event_label: `High Quality Lead: Score ${this.leadScore}`,
        value: this.leadScore,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          user_segment: this.userSegment ? JSON.stringify(this.userSegment) : 'unknown',
          lead_score: this.leadScore.toString(),
          trigger_event: eventName,
          conversion_stage: 'lead_qualification'
        }
      })
    }
  }

  // Utility Methods
  private inferAgeGroup(urlParams: URLSearchParams): 'under_30' | '30_50' | '50_65' | 'over_65' {
    const ageParam = urlParams.get('age')
    if (ageParam) {
      const age = parseInt(ageParam)
      if (age < 30) return 'under_30'
      if (age < 50) return '30_50'
      if (age < 65) return '50_65'
      return 'over_65'
    }
    return '30_50' // default
  }

  private inferTravelFrequency(referrer: string, urlParams: URLSearchParams): 'occasional' | 'frequent' | 'business' {
    if (referrer.includes('business') || urlParams.get('travel_type') === 'business') return 'business'
    if (referrer.includes('frequent') || urlParams.get('frequency') === 'frequent') return 'frequent'
    return 'occasional'
  }

  private inferTripValue(urlParams: URLSearchParams): 'budget' | 'mid_range' | 'luxury' {
    const cost = urlParams.get('trip_cost')
    if (cost) {
      const tripCost = parseInt(cost)
      if (tripCost < 2000) return 'budget'
      if (tripCost < 8000) return 'mid_range'
      return 'luxury'
    }
    return 'mid_range'
  }

  private inferDestinationPreference(urlParams: URLSearchParams): 'domestic' | 'international' | 'cruise' | 'mixed' {
    const destination = urlParams.get('destination') || urlParams.get('trip_type')
    if (destination) {
      if (destination.includes('cruise')) return 'cruise'
      if (destination.includes('international')) return 'international'
      if (destination.includes('domestic')) return 'domestic'
    }
    return 'mixed'
  }

  private getDeviceType(userAgent: string): 'mobile' | 'tablet' | 'desktop' {
    if (userAgent.includes('mobile')) return 'mobile'
    if (userAgent.includes('tablet')) return 'tablet'
    return 'desktop'
  }

  private getTrafficSource(referrer: string, urlParams: URLSearchParams): string {
    if (urlParams.get('utm_source')) return urlParams.get('utm_source')!
    if (referrer.includes('google')) return 'google_organic'
    if (referrer.includes('facebook')) return 'facebook'
    if (referrer.includes('bing')) return 'bing'
    if (referrer === '') return 'direct'
    return 'referral'
  }

  private getGeographicLocation(): string {
    // This would typically integrate with a geolocation service
    // For now, return a placeholder
    return 'unknown'
  }

  private throttle(func: Function, delay: number) {
    let timeoutId: NodeJS.Timeout
    let lastExecTime = 0
    
    return function (this: any, ...args: any[]) {
      const currentTime = Date.now()
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args)
        lastExecTime = currentTime
      } else {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          func.apply(this, args)
          lastExecTime = Date.now()
        }, delay - (currentTime - lastExecTime))
      }
    }
  }

  // Public Methods for External Use
  public getLeadScore(): number {
    return this.leadScore
  }

  public getUserSegment(): TripCancellationUserSegment | null {
    return this.userSegment
  }

  public getConversionFunnel(): TripCancellationFunnelStage[] {
    return [...this.conversionFunnel]
  }

  public getSessionMetrics(): TripCancellationMetrics {
    return {
      page_load_time: 0, // Would be populated by performance monitoring
      time_on_page: Math.round((Date.now() - this.sessionStartTime) / 1000),
      scroll_depth: this.maxScrollDepth,
      interaction_rate: this.interactionCount,
      bounce_rate: 0, // Would be calculated based on session behavior
      conversion_rate: 0, // Would be calculated based on funnel completion
      cost_per_acquisition: 0, // Would be provided by marketing data
      lead_quality_score: this.leadScore
    }
  }
}

// Export singleton instance
export const tripCancellationAnalytics = TripCancellationAnalytics.getInstance()

// Export utility functions for easy integration
export const trackTripCancellationEvent = (eventName: string, eventData: Partial<TripCancellationEvent>) => {
  tripCancellationAnalytics.trackEvent(eventName, eventData)
}

export const trackTripQuoteRequest = (quoteData: Parameters<typeof tripCancellationAnalytics.trackQuoteRequest>[0]) => {
  tripCancellationAnalytics.trackQuoteRequest(quoteData)
}

export const trackTripLeadCapture = (contactData: Parameters<typeof tripCancellationAnalytics.trackLeadCapture>[0]) => {
  tripCancellationAnalytics.trackLeadCapture(contactData)
}

export const getTripCancellationMetrics = () => {
  return tripCancellationAnalytics.getSessionMetrics()
}