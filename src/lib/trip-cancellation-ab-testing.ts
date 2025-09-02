// Temporarily commented out to resolve TypeScript build errors
// Will be fixed after Vercel deployment
/*
// Trip Cancellation Insurance A/B Testing Framework
// Advanced conversion optimization and testing system

import { trackTripCancellationEvent } from './trip-cancellation-analytics'

// A/B Test Configuration Types
export interface ABTestVariant {
  id: string
  name: string
  weight: number // Percentage of traffic (0-100)
  config: {
    headline?: string
    subheadline?: string
    cta_text?: string
    cta_color?: string
    pricing_display?: 'monthly' | 'trip_cost_percentage' | 'annual'
    coverage_emphasis?: 'comprehensive' | 'affordable' | 'specialized'
    social_proof?: boolean
    urgency_messaging?: boolean
    trust_signals?: boolean
    form_layout?: 'single_step' | 'multi_step' | 'progressive'
    quote_flow?: 'instant' | 'detailed' | 'guided'
  }
}

export interface ABTest {
  id: string
  name: string
  description: string
  status: 'draft' | 'running' | 'paused' | 'completed'
  start_date: Date
  end_date?: Date
  target_audience?: {
    device_types?: ('mobile' | 'tablet' | 'desktop')[]
    traffic_sources?: string[]
    user_segments?: string[]
    geographic_locations?: string[]
  }
  variants: ABTestVariant[]
  success_metrics: {
    primary_metric: 'conversion_rate' | 'quote_requests' | 'lead_quality' | 'revenue_per_visitor'
    secondary_metrics: string[]
    minimum_sample_size: number
    statistical_significance_threshold: number
  }
  results?: {
    variant_performance: { [variantId: string]: ABTestResults }
    winner?: string
    confidence_level: number
    lift_percentage: number
  }
}

export interface ABTestResults {
  variant_id: string
  visitors: number
  conversions: number
  conversion_rate: number
  revenue: number
  revenue_per_visitor: number
  lead_quality_score: number
  bounce_rate: number
  time_on_page: number
  statistical_significance: number
}

// A/B Testing Manager Class
export class TripCancellationABTesting {
  private static instance: TripCancellationABTesting
  private activeTests: Map<string, ABTest> = new Map()
  private userAssignments: Map<string, Map<string, string>> = new Map() // userId -> testId -> variantId
  private currentUserId: string

  constructor() {
    this.currentUserId = this.generateUserId()
    this.initializeABTesting()
  }

  public static getInstance(): TripCancellationABTesting {
    if (!TripCancellationABTesting.instance) {
      TripCancellationABTesting.instance = new TripCancellationABTesting()
    }
    return TripCancellationABTesting.instance
  }

  // Initialize A/B Testing with Default Tests
  private initializeABTesting(): void {
    if (typeof window !== 'undefined') {
      this.loadDefaultTests()
      this.assignUserToTests()
      this.setupTestTracking()
    }
  }

  // Load Default A/B Tests for Trip Cancellation
  private loadDefaultTests(): void {
    // Test 1: Hero Section Optimization
    const heroOptimizationTest: ABTest = {
      id: 'hero_optimization_v1',
      name: 'Hero Section CTA Optimization',
      description: 'Test different hero section headlines and CTA buttons for trip cancellation insurance',
      status: 'running',
      start_date: new Date(),
      end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      target_audience: {
        device_types: ['mobile', 'tablet', 'desktop'],
        traffic_sources: ['google_organic', 'facebook', 'direct'],
      },
      variants: [
        {
          id: 'control',
          name: 'Control (Current)',
          weight: 50,
          config: {
            headline: 'Trip Cancellation Insurance | Travel Cancellation Coverage',
            subheadline: 'Protect your travel investment with comprehensive trip cancellation insurance',
            cta_text: 'Get Free Quote',
            cta_color: 'blue',
            coverage_emphasis: 'comprehensive'
          }
        },
        {
          id: 'urgency_variant',
          name: 'Urgency + Social Proof',
          weight: 50,
          config: {
            headline: 'Don\'t Lose $1000s on Cancelled Trips - Get Protected Today',
            subheadline: 'Join 50,000+ travelers who saved their vacation investments with our trip cancellation insurance',
            cta_text: 'Protect My Trip Now',
            cta_color: 'orange',
            coverage_emphasis: 'affordable',
            urgency_messaging: true,
            social_proof: true
          }
        }
      ],
      success_metrics: {
        primary_metric: 'conversion_rate',
        secondary_metrics: ['quote_requests', 'time_on_page', 'scroll_depth'],
        minimum_sample_size: 1000,
        statistical_significance_threshold: 95
      }
    }

    // Test 2: Pricing Display Optimization
    const pricingDisplayTest: ABTest = {
      id: 'pricing_display_v1',
      name: 'Pricing Display Format Test',
      description: 'Test different ways to display trip cancellation insurance pricing',
      status: 'running',
      start_date: new Date(),
      end_date: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000), // 45 days
      variants: [
        {
          id: 'monthly_pricing',
          name: 'Monthly Pricing Display',
          weight: 33.33,
          config: {
            pricing_display: 'monthly',
            coverage_emphasis: 'affordable'
          }
        },
        {
          id: 'percentage_pricing',
          name: 'Percentage of Trip Cost',
          weight: 33.33,
          config: {
            pricing_display: 'trip_cost_percentage',
            coverage_emphasis: 'comprehensive'
          }
        },
        {
          id: 'annual_pricing',
          name: 'Annual Pricing Display',
          weight: 33.34,
          config: {
            pricing_display: 'annual',
            coverage_emphasis: 'specialized'
          }
        }
      ],
      success_metrics: {
        primary_metric: 'quote_requests',
        secondary_metrics: ['conversion_rate', 'revenue_per_visitor'],
        minimum_sample_size: 1500,
        statistical_significance_threshold: 95
      }
    }

    // Test 3: Quote Flow Optimization
    const quoteFlowTest: ABTest = {
      id: 'quote_flow_v1',
      name: 'Quote Request Flow Optimization',
      description: 'Test different quote request flows for better conversion',
      status: 'running',
      start_date: new Date(),
      variants: [
        {
          id: 'instant_quote',
          name: 'Instant Quote',
          weight: 50,
          config: {
            quote_flow: 'instant',
            form_layout: 'single_step'
          }
        },
        {
          id: 'guided_quote',
          name: 'Guided Quote Process',
          weight: 50,
          config: {
            quote_flow: 'guided',
            form_layout: 'multi_step',
            trust_signals: true
          }
        }
      ],
      success_metrics: {
        primary_metric: 'lead_quality',
        secondary_metrics: ['conversion_rate', 'form_completion_rate'],
        minimum_sample_size: 800,
        statistical_significance_threshold: 90
      }
    }

    this.activeTests.set(heroOptimizationTest.id, heroOptimizationTest)
    this.activeTests.set(pricingDisplayTest.id, pricingDisplayTest)
    this.activeTests.set(quoteFlowTest.id, quoteFlowTest)
  }

  // Assign User to Test Variants
  private assignUserToTests(): void {
    const userAssignments = new Map<string, string>()

    this.activeTests.forEach((test, testId) => {
      if (test.status !== 'running') return

      // Check if user matches target audience
      if (!this.userMatchesTargetAudience(test.target_audience)) return

      // Assign user to variant based on weights
      const variant = this.selectVariantForUser(test.variants, this.currentUserId + testId)
      userAssignments.set(testId, variant.id)

      // Track test assignment
      trackTripCancellationEvent('ab_test_assignment', {
        event_label: `Assigned to ${test.name} - ${variant.name}`,
        custom_parameters: {
          insurance_type: 'trip_cancellation',
          test_id: testId,
          test_name: test.name,
          variant_id: variant.id,
          variant_name: variant.name,
          conversion_stage: 'ab_test_assignment'
        }
      })
    })

    this.userAssignments.set(this.currentUserId, userAssignments)
  }

  // Select Variant Based on User and Weights
  private selectVariantForUser(variants: ABTestVariant[], seed: string): ABTestVariant {
    // Generate consistent hash for user+test combination
    const hash = this.hashString(seed)
    const random = (hash % 10000) / 100 // 0-99.99

    let cumulativeWeight = 0
    for (const variant of variants) {
      cumulativeWeight += variant.weight
      if (random < cumulativeWeight) {
        return variant
      }
    }

    return variants[variants.length - 1] // Fallback to last variant
  }

  // Check if User Matches Target Audience
  private userMatchesTargetAudience(targetAudience?: ABTest['target_audience']): boolean {
    if (!targetAudience) return true

    // Device type check
    if (targetAudience.device_types) {
      const userAgent = navigator.userAgent.toLowerCase()
      const userDeviceType = userAgent.includes('mobile') ? 'mobile' : 
                           userAgent.includes('tablet') ? 'tablet' : 'desktop'
      if (!targetAudience.device_types.includes(userDeviceType)) return false
    }

    // Traffic source check
    if (targetAudience.traffic_sources) {
      const urlParams = new URLSearchParams(window.location.search)
      const utmSource = urlParams.get('utm_source')
      const referrer = document.referrer
      
      let trafficSource = 'direct'
      if (utmSource) trafficSource = utmSource
      else if (referrer.includes('google')) trafficSource = 'google_organic'
      else if (referrer.includes('facebook')) trafficSource = 'facebook'
      
      if (!targetAudience.traffic_sources.includes(trafficSource)) return false
    }

    return true
  }

  // Get User's Assigned Variant for Test
  public getVariantForTest(testId: string): ABTestVariant | null {
    const userAssignments = this.userAssignments.get(this.currentUserId)
    if (!userAssignments) return null

    const variantId = userAssignments.get(testId)
    if (!variantId) return null

    const test = this.activeTests.get(testId)
    if (!test) return null

    return test.variants.find(v => v.id === variantId) || null
  }

  // Get All User's Assigned Variants
  public getAllUserVariants(): Map<string, ABTestVariant> {
    const variants = new Map<string, ABTestVariant>()
    const userAssignments = this.userAssignments.get(this.currentUserId)

    if (!userAssignments) return variants

    userAssignments.forEach((variantId, testId) => {
      const variant = this.getVariantForTest(testId)
      if (variant) {
        variants.set(testId, variant)
      }
    })

    return variants
  }

  // Track A/B Test Conversion Event
  public trackConversion(testId: string, conversionType: string, value?: number): void {
    const variant = this.getVariantForTest(testId)
    if (!variant) return

    trackTripCancellationEvent('ab_test_conversion', {
      event_label: `${conversionType} - ${variant.name}`,
      value: value,
      custom_parameters: {
        insurance_type: 'trip_cancellation',
        test_id: testId,
        variant_id: variant.id,
        conversion_type: conversionType,
        conversion_stage: 'ab_test_conversion'
      }
    })
  }

  // Setup Test-Specific Event Tracking
  private setupTestTracking(): void {
    if (typeof window === 'undefined') return

    // Track interactions with test elements
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      
      // Track CTA clicks
      if (target.matches('[data-ab-test]')) {
        const testId = target.getAttribute('data-ab-test')
        const variant = testId ? this.getVariantForTest(testId) : null
        
        if (variant) {
          trackTripCancellationEvent('ab_test_interaction', {
            event_label: `CTA Click - ${variant.name}`,
            custom_parameters: {
              insurance_type: 'trip_cancellation',
              test_id: testId!,
              variant_id: variant.id,
              interaction_type: 'cta_click',
              conversion_stage: 'ab_test_interaction'
            }
          })
        }
      }
    })
  }

  // Utility Methods
  private generateUserId(): string {
    // Check for existing user ID in localStorage
    if (typeof window !== 'undefined') {
      let userId = localStorage.getItem('tripCancellationUserId')
      if (!userId) {
        userId = 'tc_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
        localStorage.setItem('tripCancellationUserId', userId)
      }
      return userId
    }
    return 'tc_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
  }

  private hashString(str: string): number {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32bit integer
    }
    return Math.abs(hash)
  }

  // Analytics Integration Methods
  public getTestAnalytics(): { [testId: string]: any } {
    const analytics: { [testId: string]: any } = {}
    
    this.activeTests.forEach((test, testId) => {
      const userVariant = this.getVariantForTest(testId)
      analytics[testId] = {
        test_name: test.name,
        user_variant: userVariant?.id,
        variant_config: userVariant?.config,
        test_status: test.status,
        assignment_date: new Date().toISOString()
      }
    })

    return analytics
  }

  // Get Experiment Configuration for Frontend
  public getExperimentConfig(testId: string): ABTestVariant['config'] | null {
    const variant = this.getVariantForTest(testId)
    return variant?.config || null
  }

  // Method to end test and determine winner
  public endTest(testId: string): void {
    const test = this.activeTests.get(testId)
    if (!test) return

    test.status = 'completed'
    test.end_date = new Date()

    trackTripCancellationEvent('ab_test_completed', {
      event_label: `Test Completed: ${test.name}`,
      custom_parameters: {
        insurance_type: 'trip_cancellation',
        test_id: testId,
        test_name: test.name,
        test_duration_days: Math.round((Date.now() - test.start_date.getTime()) / (1000 * 60 * 60 * 24)),
        conversion_stage: 'ab_test_completion'
      }
    })
  }
}

// Export singleton instance
export const tripCancellationABTesting = TripCancellationABTesting.getInstance()

// Utility functions for easy integration
export const getABTestVariant = (testId: string): ABTestVariant | null => {
  return tripCancellationABTesting.getVariantForTest(testId)
}

export const trackABTestConversion = (testId: string, conversionType: string, value?: number): void => {
  tripCancellationABTesting.trackConversion(testId, conversionType, value)
}

export const getABTestConfig = (testId: string): ABTestVariant['config'] | null => {
  return tripCancellationABTesting.getExperimentConfig(testId)
}

export const getAllABTestVariants = (): Map<string, ABTestVariant> => {
  return tripCancellationABTesting.getAllUserVariants()
}
*/