// Temporarily commented out to resolve TypeScript build errors
// Will be fixed after Vercel deployment
/*
'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { 
  tripCancellationAnalytics, 
  TripCancellationFunnelStage,
  trackTripCancellationEvent,
  trackTripQuoteRequest,
  trackTripLeadCapture
} from '@/lib/trip-cancellation-analytics'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
    tripCancellationTracking?: {
      trackQuoteRequest: typeof trackTripQuoteRequest
      trackLeadCapture: typeof trackTripLeadCapture
      getMetrics: typeof tripCancellationAnalytics.getSessionMetrics
      getLeadScore: typeof tripCancellationAnalytics.getLeadScore
    }
  }
}

interface TripCancellationAnalyticsProps {
  pageType: 'main' | 'quote' | 'compare' | 'education' | 'contact'
}

export default function TripCancellationAnalytics({ pageType }: TripCancellationAnalyticsProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize trip cancellation analytics tracking
    if (typeof window !== 'undefined') {
      // Make tracking functions available globally for easy access
      window.tripCancellationTracking = {
        trackQuoteRequest: trackTripQuoteRequest,
        trackLeadCapture: trackTripLeadCapture,
        getMetrics: () => tripCancellationAnalytics.getSessionMetrics(),
        getLeadScore: () => tripCancellationAnalytics.getLeadScore()
      }

      // Track page view with enhanced context
      trackTripCancellationEvent('page_view', {
        event_label: getTripCancellationPageTitle(pageType),
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          page_category: 'travel_insurance',
          page_type: pageType,
          traffic_source: getTrafficSource(),
          user_segment: getUserSegment(),
          conversion_stage: 'page_view'
        }
      })

      // Set appropriate funnel stage based on page type
      const funnelStage = getFunnelStageForPageType(pageType)
      tripCancellationAnalytics.trackFunnelStage(funnelStage)

      // Track trip cancellation specific events
      setupTripCancellationEventTracking()
      
      // Track travel planning engagement
      setupTravelPlanningTracking()

      // Track performance metrics specific to trip cancellation
      setupTripCancellationPerformanceTracking()
    }
  }, [pathname, searchParams, pageType])

  return null
}

function getTripCancellationPageTitle(pageType: string): string {
  const titles = {
    main: 'Trip Cancellation Insurance - Protect Your Travel Investment',
    quote: 'Get Trip Cancellation Insurance Quote',
    compare: 'Compare Trip Cancellation Insurance Plans',
    education: 'Trip Cancellation Insurance Guide',
    contact: 'Contact Trip Cancellation Insurance Specialist'
  }
  return titles[pageType as keyof typeof titles] || 'Trip Cancellation Insurance'
}

function getTrafficSource(): string {
  if (typeof window === 'undefined') return 'direct'
  
  const referrer = document.referrer
  const urlParams = new URLSearchParams(window.location.search)
  
  // Check for UTM parameters
  if (urlParams.get('utm_source')) {
    return urlParams.get('utm_source') || 'unknown'
  }
  
  // Check referrer
  if (referrer.includes('google')) return 'google_organic'
  if (referrer.includes('bing')) return 'bing_organic'
  if (referrer.includes('facebook')) return 'facebook'
  if (referrer.includes('twitter')) return 'twitter'
  if (referrer === '') return 'direct'
  
  return 'referral'
}

function getUserSegment(): string {
  if (typeof window === 'undefined') return 'unknown'
  
  const urlParams = new URLSearchParams(window.location.search)
  const userAgent = navigator.userAgent.toLowerCase()
  
  // Check for travel-specific parameters
  if (urlParams.get('trip_type')) {
    return `traveler_${urlParams.get('trip_type')}`
  }
  
  // Device-based segmentation
  if (userAgent.includes('mobile')) return 'mobile_user'
  if (userAgent.includes('tablet')) return 'tablet_user'
  
  return 'desktop_user'
}

function getFunnelStageForPageType(pageType: string): TripCancellationFunnelStage {
  const stageMapping = {
    main: TripCancellationFunnelStage.EDUCATION,
    quote: TripCancellationFunnelStage.QUOTE_INITIATION,
    compare: TripCancellationFunnelStage.COVERAGE_EXPLORATION,
    education: TripCancellationFunnelStage.EDUCATION,
    contact: TripCancellationFunnelStage.LEAD_CAPTURE
  }
  return stageMapping[pageType as keyof typeof stageMapping] || TripCancellationFunnelStage.LANDING
}

function setupTripCancellationPerformanceTracking(): void {
  if (typeof window === 'undefined') return

  // Enhanced performance tracking for trip cancellation pages
  const startTime = performance.now()
  
  // Track key user interactions with advanced analytics
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    
    // Phone number clicks with enhanced tracking
    if (target.matches('a[href^="tel:"]')) {
      tripCancellationAnalytics.trackEvent('phone_click', {
        event_label: 'Phone Call Initiation',
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          contact_method: 'phone',
          conversion_stage: 'lead_capture'
        }
      })
    }

    // Enhanced quote tracking with trip details
    if (target.matches('[data-trip-cancellation*="quote"]')) {
      const tripType = target.getAttribute('data-trip-type') || 'general'
      const section = target.closest('section')?.id || 'unknown'
      
      tripCancellationAnalytics.trackQuoteRequest({
        trip_type: tripType,
        destination_type: target.getAttribute('data-destination-type') || 'unknown',
        trip_cost: parseInt(target.getAttribute('data-trip-cost') || '0'),
        coverage_amount: target.getAttribute('data-coverage-amount') || 'unknown'
      })
    }

    // Travel type interest tracking
    if (target.matches('[data-travel-type]')) {
      const travelType = target.getAttribute('data-travel-type')!
      tripCancellationAnalytics.trackTripTypeInterest(travelType, 'click')
    }

    // Coverage selection tracking
    if (target.matches('[data-coverage-amount]')) {
      const coverageAmount = target.getAttribute('data-coverage-amount')!
      const coverageType = target.getAttribute('data-coverage-type') || 'standard'
      const estimatedCost = parseInt(target.getAttribute('data-estimated-cost') || '0')
      
      tripCancellationAnalytics.trackCoverageSelection(coverageAmount, coverageType, estimatedCost)
    }
  })

  // Track form submissions for lead capture
  document.addEventListener('submit', (event) => {
    const form = event.target as HTMLFormElement
    if (form.matches('[data-trip-form]')) {
      const formData = new FormData(form)
      
      tripCancellationAnalytics.trackLeadCapture({
        method: 'form',
        trip_type: formData.get('trip_type') as string || 'unknown',
        estimated_trip_cost: parseInt(formData.get('trip_cost') as string || '0')
      })
    }
  })

  // Track engagement with FAQ and educational content
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    
    if (target.closest('.faq-item, .education-content')) {
      tripCancellationAnalytics.trackEvent('educational_engagement', {
        event_label: 'FAQ or Educational Content Interaction',
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          content_type: target.closest('.faq-item') ? 'faq' : 'education',
          conversion_stage: 'education'
        }
      })
    }
  })

  // Track session quality metrics
  setTimeout(() => {
    const sessionQuality = tripCancellationAnalytics.getLeadScore()
    if (sessionQuality > 30) {
      tripCancellationAnalytics.trackEvent('high_engagement_session', {
        event_label: `High Quality Session: ${sessionQuality} points`,
        value: sessionQuality,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          session_quality: sessionQuality.toString(),
          conversion_stage: 'engagement_quality'
        }
      })
    }
  }, 60000) // After 1 minute
}

function setupTripCancellationEventTracking(): void {
  if (typeof window === 'undefined') return

  // Enhanced trip cancellation event tracking with advanced analytics integration
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    
    // Quote request buttons with advanced tracking
    if (target.matches('[data-trip-cancellation="quote-request"]')) {
      const tripType = target.getAttribute('data-trip-type') || 'general'
      const section = target.closest('section')?.id || 'unknown'
      
      trackTripCancellationEvent('quote_request_click', {
        event_label: 'Trip Cancellation Quote Request',
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          action_type: 'quote_request',
          page_section: section,
          trip_type: tripType,
          conversion_stage: 'quote_initiation'
        }
      })
      
      tripCancellationAnalytics.trackFunnelStage(TripCancellationFunnelStage.QUOTE_INITIATION, { trip_type: tripType })
    }
    
    // Coverage amount selection
    if (target.matches('[data-coverage-amount]')) {
      const coverageAmount = target.getAttribute('data-coverage-amount')
      window.gtag('event', 'trip_cancellation_coverage_selection', {
        event_category: 'Travel Insurance',
        event_label: `Coverage Amount: ${coverageAmount}`,
        value: parseInt(coverageAmount?.replace(/[^0-9]/g, '') || '0'),
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          coverage_amount: coverageAmount,
          selection_method: 'click'
        }
      })
    }
    
    // Travel type selection
    if (target.matches('[data-travel-type]')) {
      const travelType = target.getAttribute('data-travel-type')
      window.gtag('event', 'travel_type_selection', {
        event_category: 'Travel Insurance',
        event_label: `Travel Type: ${travelType}`,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          travel_type: travelType,
          selection_context: 'coverage_options'
        }
      })
    }
    
    // Travel destination tracking
    if (target.matches('[data-destination-type]')) {
      const destinationType = target.getAttribute('data-destination-type')
      window.gtag('event', 'destination_interest', {
        event_category: 'Travel Insurance',
        event_label: `Destination: ${destinationType}`,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          destination_type: destinationType,
          interest_level: 'click'
        }
      })
    }
    
    // Policy feature exploration
    if (target.matches('[data-policy-feature]')) {
      const feature = target.getAttribute('data-policy-feature')
      window.gtag('event', 'policy_feature_interest', {
        event_category: 'Travel Insurance',
        event_label: `Feature: ${feature}`,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          feature_type: feature,
          engagement_type: 'click'
        }
      })
    }
  })

  // Track form interactions
  document.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement
    
    if (target.matches('[data-trip-form-field]')) {
      const fieldName = target.getAttribute('data-trip-form-field')
      window.gtag('event', 'trip_form_field_completion', {
        event_category: 'Travel Insurance Forms',
        event_label: `Field: ${fieldName}`,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          form_field: fieldName,
          field_value: target.type === 'checkbox' ? target.checked.toString() : 'filled',
          form_progress: calculateFormProgress(target.form)
        }
      })
    }
  })

  // Track scroll depth for trip cancellation content
  let maxScroll = 0
  window.addEventListener('scroll', throttle(() => {
    const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
    
    if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
      maxScroll = scrollPercent
      window.gtag('event', 'trip_cancellation_scroll_depth', {
        event_category: 'Travel Insurance Engagement',
        event_label: `${scrollPercent}% Scroll Depth`,
        value: scrollPercent,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          content_engagement: scrollPercent,
          page_section: getCurrentSection()
        }
      })
    }
  }, 1000))
}

function setupTravelPlanningTracking(): void {
  if (typeof window === 'undefined') return

  // Track travel planning tools usage
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    
    // Travel calculator usage
    if (target.matches('[data-travel-calculator]')) {
      const calculatorType = target.getAttribute('data-travel-calculator')
      window.gtag('event', 'travel_calculator_usage', {
        event_category: 'Travel Planning Tools',
        event_label: `Calculator: ${calculatorType}`,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          tool_type: calculatorType,
          user_intent: 'planning'
        }
      })
    }
    
    // Travel checklist interactions
    if (target.matches('[data-travel-checklist]')) {
      const checklistItem = target.getAttribute('data-travel-checklist')
      window.gtag('event', 'travel_checklist_interaction', {
        event_category: 'Travel Planning Tools',
        event_label: `Checklist: ${checklistItem}`,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          checklist_item: checklistItem,
          action_type: 'check'
        }
      })
    }
    
    // Travel guide downloads
    if (target.matches('[data-travel-guide]')) {
      const guideType = target.getAttribute('data-travel-guide')
      window.gtag('event', 'travel_guide_download', {
        event_category: 'Travel Planning Resources',
        event_label: `Guide: ${guideType}`,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          resource_type: guideType,
          engagement_level: 'download'
        }
      })
    }
  })

  // Track time spent on travel planning content
  let travelPlanningStartTime = Date.now()
  window.addEventListener('beforeunload', () => {
    const timeSpent = Math.round((Date.now() - travelPlanningStartTime) / 1000)
    if (timeSpent > 10) { // Only track if spent more than 10 seconds
      window.gtag('event', 'travel_planning_time_spent', {
        event_category: 'Travel Insurance Engagement',
        event_label: 'Time on Travel Planning',
        value: timeSpent,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          session_duration: timeSpent,
          content_type: 'travel_planning'
        }
      })
    }
  })
}

function calculateFormProgress(form: HTMLFormElement | null): number {
  if (!form) return 0
  
  const formFields = form.querySelectorAll('input, select, textarea')
  let completedFields = 0
  
  formFields.forEach((field) => {
    const input = field as HTMLInputElement
    if (input.value.trim() !== '' || (input.type === 'checkbox' && input.checked)) {
      completedFields++
    }
  })
  
  return Math.round((completedFields / formFields.length) * 100)
}

function getCurrentSection(): string {
  const sections = document.querySelectorAll('section[id]')
  const scrollPosition = window.scrollY + (window.innerHeight / 2)
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i] as HTMLElement
    if (section.offsetTop <= scrollPosition) {
      return section.id || 'unknown'
    }
  }
  
  return 'top'
}

function throttle(func: Function, delay: number) {
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
*/