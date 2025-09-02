'use client'

import { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { finalExpenseTracker } from '@/lib/final-expense-analytics'

interface ConversionOptimizationProps {
  userAge?: number
  location?: string
  trafficSource?: string
  device?: string
}

export default function FinalExpenseConversionOptimization({
  userAge,
  location,
  trafficSource,
  device
}: ConversionOptimizationProps) {
  const searchParams = useSearchParams()
  const [variant, setVariant] = useState<string>('control')
  const [personalization, setPersonalization] = useState<any>({})
  const hasInitialized = useRef(false)

  useEffect(() => {
    if (hasInitialized.current) return
    hasInitialized.current = true

    initializeConversionOptimization()
  }, [userAge, location, trafficSource, device])

  const initializeConversionOptimization = () => {
    // A/B Testing Configuration
    const abTests = [
      {
        name: 'hero_cta_text',
        variants: {
          control: 'Get Free Quote',
          variant_a: 'Calculate My Coverage',
          variant_b: 'See My Rate',
          variant_c: 'Start My Application'
        },
        traffic_split: 25
      },
      {
        name: 'pricing_display',
        variants: {
          control: 'monthly_pricing',
          variant_a: 'coverage_amounts',
          variant_b: 'savings_emphasis'
        },
        traffic_split: 33
      },
      {
        name: 'social_proof_position',
        variants: {
          control: 'sidebar',
          variant_a: 'inline_content',
          variant_b: 'header_banner'
        },
        traffic_split: 33
      },
      {
        name: 'form_layout',
        variants: {
          control: 'single_step',
          variant_a: 'multi_step',
          variant_b: 'progressive_disclosure'
        },
        traffic_split: 33
      }
    ]

    // Assign A/B Test Variants
    const assignedVariants: any = {}
    abTests.forEach(test => {
      const hash = hashCode(`${test.name}_${getUserIdentifier()}`)
      const variantKeys = Object.keys(test.variants)
      const variantIndex = Math.abs(hash) % variantKeys.length
      assignedVariants[test.name] = variantKeys[variantIndex]

      // Track A/B test assignment
      finalExpenseTracker.trackABTest(test.name, assignedVariants[test.name], userAge, location)
    })

    setVariant(JSON.stringify(assignedVariants))

    // Personalization Based on User Attributes
    const personalizedContent = generatePersonalization()
    setPersonalization(personalizedContent)

    // Apply dynamic optimizations
    applyDynamicOptimizations(assignedVariants, personalizedContent)
  }

  const generatePersonalization = () => {
    const personalization: any = {}

    // Age-based personalization
    if (userAge) {
      if (userAge >= 45 && userAge <= 55) {
        personalization.ageGroup = 'early_planner'
        personalization.messaging = {
          headline: 'Plan Ahead and Save',
          subheadline: 'Lock in lower rates while you\'re healthy',
          urgency: 'Rates increase with age - secure coverage now',
          benefits: ['Lower premiums', 'Health advantages', 'Long-term planning']
        }
      } else if (userAge >= 56 && userAge <= 65) {
        personalization.ageGroup = 'pre_retiree'
        personalization.messaging = {
          headline: 'Retire with Peace of Mind',
          subheadline: 'Protect your retirement savings from funeral costs',
          urgency: 'Medicare enrollment ahead - coordinate your coverage',
          benefits: ['Retirement protection', 'Medicare coordination', 'Fixed income planning']
        }
      } else if (userAge >= 66 && userAge <= 75) {
        personalization.ageGroup = 'early_senior'
        personalization.messaging = {
          headline: 'Guaranteed Acceptance for Seniors',
          subheadline: 'No medical exam required - get approved today',
          urgency: 'Don\'t wait - health can change quickly',
          benefits: ['No medical exam', 'Guaranteed acceptance', 'Fixed premiums']
        }
      } else if (userAge >= 76) {
        personalization.ageGroup = 'senior'
        personalization.messaging = {
          headline: 'Final Expense Coverage for Seniors 75+',
          subheadline: 'Immediate needs coverage - protect your family now',
          urgency: 'Time is precious - secure coverage today',
          benefits: ['Immediate needs focus', 'Family protection', 'Simple application']
        }
      }
    }

    // Traffic source personalization
    const utm_source = searchParams.get('utm_source')
    const utm_campaign = searchParams.get('utm_campaign')
    
    if (utm_source === 'google' && utm_campaign === 'guaranteed') {
      personalization.trafficIntent = 'guaranteed_acceptance'
      personalization.emphasis = 'no_medical_exam'
      personalization.primaryCTA = 'Apply Without Medical Exam'
    } else if (utm_source === 'google' && utm_campaign === 'affordable') {
      personalization.trafficIntent = 'cost_focused'
      personalization.emphasis = 'affordability'
      personalization.primaryCTA = 'See Low Rates'
    } else if (utm_source === 'facebook') {
      personalization.trafficIntent = 'social_discovery'
      personalization.emphasis = 'family_protection'
      personalization.primaryCTA = 'Protect Your Family'
    }

    // Device-specific optimizations
    const userAgent = navigator.userAgent
    if (/Mobile|Android|iPhone|iPad/.test(userAgent)) {
      personalization.device = 'mobile'
      personalization.formStyle = 'simplified'
      personalization.ctaStyle = 'prominent_buttons'
    } else {
      personalization.device = 'desktop'
      personalization.formStyle = 'detailed'
      personalization.ctaStyle = 'inline_forms'
    }

    // Geographic personalization
    if (location) {
      personalization.location = location
      // High cost of living areas
      if (['CA', 'NY', 'NJ', 'CT', 'MA'].includes(location)) {
        personalization.costMessaging = 'expensive_area'
        personalization.urgency = 'Higher funeral costs in your area - get protected'
      }
      // Lower cost areas
      else if (['MS', 'AL', 'AR', 'WV', 'OK'].includes(location)) {
        personalization.costMessaging = 'affordable_area'
        personalization.value = 'Great value coverage for your area'
      }
    }

    return personalization
  }

  const applyDynamicOptimizations = (variants: any, personalizedContent: any) => {
    // Apply A/B test variants
    if (variants.hero_cta_text !== 'control') {
      updateCTAText(variants.hero_cta_text)
    }

    if (variants.pricing_display !== 'control') {
      updatePricingDisplay(variants.pricing_display)
    }

    if (variants.social_proof_position !== 'control') {
      updateSocialProofPosition(variants.social_proof_position)
    }

    // Apply personalization
    if (personalizedContent.messaging) {
      updateMessaging(personalizedContent.messaging)
    }

    if (personalizedContent.emphasis) {
      highlightRelevantContent(personalizedContent.emphasis)
    }

    // Dynamic urgency messaging
    if (personalizedContent.urgency) {
      addUrgencyMessage(personalizedContent.urgency)
    }

    // Form optimization based on device
    if (personalizedContent.device === 'mobile') {
      optimizeForMobile()
    }

    // Track optimization applied
    trackOptimizationApplied(variants, personalizedContent)
  }

  const updateCTAText = (variant: string) => {
    const ctaButtons = document.querySelectorAll('[data-cta="primary"]')
    const ctaTexts: { [key: string]: string } = {
      variant_a: 'Calculate My Coverage',
      variant_b: 'See My Rate', 
      variant_c: 'Start My Application'
    }

    ctaButtons.forEach(button => {
      if (ctaTexts[variant]) {
        button.textContent = ctaTexts[variant]
      }
    })
  }

  const updatePricingDisplay = (variant: string) => {
    const pricingSections = document.querySelectorAll('[data-pricing-display]')
    
    pricingSections.forEach(section => {
      if (variant === 'variant_a') {
        // Emphasize coverage amounts over monthly pricing
        section.setAttribute('data-emphasis', 'coverage')
      } else if (variant === 'variant_b') {
        // Emphasize savings and value
        section.setAttribute('data-emphasis', 'savings')
      }
    })
  }

  const updateSocialProofPosition = (variant: string) => {
    const socialProof = document.querySelector('[data-social-proof]')
    if (!socialProof) return

    if (variant === 'variant_a') {
      // Move to inline content position
      socialProof.setAttribute('data-position', 'inline')
    } else if (variant === 'variant_b') {
      // Move to header banner position
      socialProof.setAttribute('data-position', 'header')
    }
  }

  const updateMessaging = (messaging: any) => {
    // Update headline
    const headlines = document.querySelectorAll('[data-dynamic-headline]')
    headlines.forEach(headline => {
      if (messaging.headline) {
        headline.textContent = messaging.headline
      }
    })

    // Update subheadline
    const subheadlines = document.querySelectorAll('[data-dynamic-subheadline]')
    subheadlines.forEach(subheadline => {
      if (messaging.subheadline) {
        subheadline.textContent = messaging.subheadline
      }
    })

    // Update benefits list
    const benefitsList = document.querySelector('[data-dynamic-benefits]')
    if (benefitsList && messaging.benefits) {
      benefitsList.innerHTML = messaging.benefits
        .map((benefit: string) => `<li>${benefit}</li>`)
        .join('')
    }
  }

  const highlightRelevantContent = (emphasis: string) => {
    // Remove existing emphasis
    document.querySelectorAll('[data-emphasized]').forEach(el => {
      el.removeAttribute('data-emphasized')
    })

    // Add new emphasis
    const emphasisTargets: { [key: string]: string } = {
      no_medical_exam: '[data-guaranteed-acceptance]',
      affordability: '[data-pricing]',
      family_protection: '[data-family-benefits]'
    }

    const selector = emphasisTargets[emphasis]
    if (selector) {
      document.querySelectorAll(selector).forEach(el => {
        el.setAttribute('data-emphasized', 'true')
      })
    }
  }

  const addUrgencyMessage = (urgencyText: string) => {
    // Create urgency banner if it doesn't exist
    let urgencyBanner = document.querySelector('[data-urgency-banner]')
    if (!urgencyBanner) {
      urgencyBanner = document.createElement('div')
      urgencyBanner.setAttribute('data-urgency-banner', 'true')
      urgencyBanner.className = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'
      
      const container = document.querySelector('.container')
      if (container && container.firstChild) {
        container.insertBefore(urgencyBanner, container.firstChild)
      }
    }
    
    urgencyBanner.innerHTML = `
      <div class="flex items-center">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
        <span class="font-medium">${urgencyText}</span>
      </div>
    `
  }

  const optimizeForMobile = () => {
    // Add mobile-specific styles
    document.body.classList.add('mobile-optimized')
    
    // Simplify forms
    const forms = document.querySelectorAll('form')
    forms.forEach(form => {
      form.setAttribute('data-mobile-optimized', 'true')
    })
    
    // Make CTAs more prominent
    const ctaButtons = document.querySelectorAll('[data-cta]')
    ctaButtons.forEach(button => {
      button.classList.add('mobile-cta-enhanced')
    })
  }

  const trackOptimizationApplied = (variants: any, personalization: any) => {
    finalExpenseTracker.trackABTest('optimization_applied', 'active', userAge, location)
    
    // Track specific optimizations
    Object.entries(variants).forEach(([test, variant]) => {
      finalExpenseTracker.trackABTest(test, variant as string, userAge, location)
    })

    // Track personalization
    if (personalization.ageGroup) {
      finalExpenseTracker.trackABTest('age_personalization', personalization.ageGroup, userAge, location)
    }
    
    if (personalization.trafficIntent) {
      finalExpenseTracker.trackABTest('traffic_personalization', personalization.trafficIntent, userAge, location)
    }
  }

  const hashCode = (str: string): number => {
    let hash = 0
    if (str.length === 0) return hash
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32bit integer
    }
    return hash
  }

  const getUserIdentifier = (): string => {
    // Create a unique identifier for consistent A/B testing
    let identifier = localStorage.getItem('user_identifier')
    if (!identifier) {
      identifier = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      localStorage.setItem('user_identifier', identifier)
    }
    return identifier
  }

  // Heat mapping and user behavior tracking
  useEffect(() => {
    const trackUserBehavior = () => {
      // Track mouse movements for heat mapping
      let mouseMovements: any[] = []
      const handleMouseMove = (e: MouseEvent) => {
        mouseMovements.push({
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now()
        })
        
        // Limit array size for performance
        if (mouseMovements.length > 100) {
          mouseMovements = mouseMovements.slice(-100)
        }
      }

      // Track clicks with element information
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const elementInfo = {
          tagName: target.tagName,
          className: target.className,
          id: target.id,
          textContent: target.textContent?.substring(0, 50),
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now()
        }

        finalExpenseTracker.trackABTest('click_tracking', JSON.stringify(elementInfo), userAge, location)
      }

      // Track form field focus
      const handleFocusIn = (e: FocusEvent) => {
        const target = e.target as HTMLElement
        if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA') {
          finalExpenseTracker.trackABTest('form_field_focus', target.name || target.id || 'unknown', userAge, location)
        }
      }

      document.addEventListener('mousemove', handleMouseMove, { passive: true })
      document.addEventListener('click', handleClick)
      document.addEventListener('focusin', handleFocusIn)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('click', handleClick)
        document.removeEventListener('focusin', handleFocusIn)
      }
    }

    const cleanup = trackUserBehavior()
    return cleanup
  }, [userAge, location])

  return null // This component doesn't render anything visible
}

// Export utility functions for manual optimization triggers
export const triggerConversionOptimization = (element: HTMLElement, optimization: string) => {
  element.setAttribute('data-optimization-trigger', optimization)
  
  // Track manual optimization trigger
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion_optimization_trigger', {
      event_category: 'final_expense_optimization',
      event_label: optimization,
      optimization_type: optimization
    })
  }
}

export const trackConversionEvent = (eventType: string, value?: number, additionalData?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventType, {
      event_category: 'final_expense_conversion',
      event_label: eventType,
      value: value,
      ...additionalData
    })
  }
}