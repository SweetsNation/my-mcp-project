'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { event, trackFormSubmission, trackPhoneCall, trackCTAClick, trackPageScroll, trackCalculatorUsage } from '@/lib/analytics'

interface SocialSecurityAnalyticsProps {
  pageType?: 'main' | 'calculator' | 'guide' | 'consultation'
  userAge?: number
  retirementYear?: number
  maritalStatus?: 'single' | 'married' | 'divorced' | 'widowed'
  location?: string
}

export default function SocialSecurityAnalytics({ 
  pageType = 'main',
  userAge,
  retirementYear,
  maritalStatus = 'single',
  location = 'unknown'
}: SocialSecurityAnalyticsProps) {
  const pathname = usePathname()
  const [pageLoadTime] = useState(() => Date.now())
  const [scrollDepth, setScrollDepth] = useState(0)
  const [timeOnPage, setTimeOnPage] = useState(0)
  const scrollTracked = useRef(new Set<number>())
  const engagementTracked = useRef(false)

  useEffect(() => {
    const startTime = Date.now()

    // Track page view with Social Security-specific context
    event('social_security_page_view', {
      event_category: 'social_security_analysis',
      event_label: pageType,
      page_type: pageType,
      user_age: userAge,
      retirement_year: retirementYear,
      marital_status: maritalStatus,
      location: location,
      page_path: pathname,
    })

    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      setScrollDepth(scrollPercent)

      // Track milestone scroll depths
      const milestones = [25, 50, 75, 90]
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollTracked.current.has(milestone)) {
          scrollTracked.current.add(milestone)
          trackPageScroll(milestone)
          
          event('social_security_scroll_milestone', {
            event_category: 'social_security_engagement',
            event_label: `scroll_${milestone}`,
            scroll_depth: milestone,
            page_type: pageType,
            user_age: userAge,
            location: location,
          })
        }
      })
    }

    // Track time on page
    const timeInterval = setInterval(() => {
      const currentTime = Date.now()
      const timeSpent = currentTime - startTime
      setTimeOnPage(timeSpent)

      // Track engagement milestones
      if (timeSpent > 45000 && !engagementTracked.current) { // 45 seconds (longer for financial analysis)
        engagementTracked.current = true
        event('social_security_deep_engagement', {
          event_category: 'social_security_engagement',
          event_label: 'engaged_user',
          time_on_page: Math.round(timeSpent / 1000),
          scroll_depth: scrollDepth,
          page_type: pageType,
          user_age: userAge,
          marital_status: maritalStatus,
          location: location,
        })
      }
    }, 5000)

    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timeInterval)
      
      // Track final page engagement
      const finalTime = Date.now() - startTime
      if (finalTime > 15000) { // Only track if user spent more than 15 seconds
        event('social_security_page_exit', {
          event_category: 'social_security_engagement',
          event_label: 'page_exit',
          time_on_page: Math.round(finalTime / 1000),
          final_scroll_depth: scrollDepth,
          page_type: pageType,
          user_age: userAge,
          marital_status: maritalStatus,
          location: location,
        })
      }
    }
  }, [pageType, userAge, retirementYear, maritalStatus, location, pathname, scrollDepth])

  // Track CTA clicks
  useEffect(() => {
    const trackCTAClicks = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.closest('a') as HTMLAnchorElement
        const href = link.href
        const text = link.textContent?.trim() || 'Unknown CTA'
        
        if (href.includes('tel:') || text.includes('CALL')) {
          trackPhoneCall('331-343-2584')
          event('social_security_phone_click', {
            event_category: 'social_security_conversion',
            event_label: 'phone_cta',
            cta_text: text,
            page_type: pageType,
            user_age: userAge,
            location: location,
          })
        } else if (href.includes('/contact') || text.includes('Analysis') || text.includes('Consultation')) {
          trackCTAClick('consultation_cta', pathname, href)
          event('social_security_consultation_click', {
            event_category: 'social_security_conversion',
            event_label: 'consultation_cta',
            cta_text: text,
            cta_destination: href,
            page_type: pageType,
            user_age: userAge,
            marital_status: maritalStatus,
            location: location,
          })
        } else if (href.includes('/resources') || text.includes('Guide')) {
          event('social_security_resource_click', {
            event_category: 'social_security_engagement',
            event_label: 'resource_download',
            cta_text: text,
            cta_destination: href,
            page_type: pageType,
            user_age: userAge,
            location: location,
          })
        }
      }
    }

    document.addEventListener('click', trackCTAClicks)
    return () => document.removeEventListener('click', trackCTAClicks)
  }, [pageType, userAge, maritalStatus, location, pathname])

  // Track form interactions
  useEffect(() => {
    const trackFormEvents = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'FORM' || target.closest('form')) {
        const form = target.closest('form') as HTMLFormElement
        const formId = form.id || form.className || 'social_security_form'
        
        if (e.type === 'submit') {
          trackFormSubmission('social_security_analysis', true)
          event('social_security_form_submit', {
            event_category: 'social_security_conversion',
            event_label: 'form_submission',
            form_id: formId,
            page_type: pageType,
            user_age: userAge,
            marital_status: maritalStatus,
            location: location,
          })
        }
      }
    }

    document.addEventListener('submit', trackFormEvents)
    return () => document.removeEventListener('submit', trackFormEvents)
  }, [pageType, userAge, maritalStatus, location])

  // Track Social Security-specific interactions
  useEffect(() => {
    const trackSocialSecurityInteractions = (e: Event) => {
      const target = e.target as HTMLElement
      
      // Track claiming age selections
      if (target.closest('[data-claiming-age]')) {
        const claimingAge = target.closest('[data-claiming-age]')?.getAttribute('data-claiming-age')
        event('social_security_claiming_age_interest', {
          event_category: 'social_security_engagement',
          event_label: 'claiming_age_click',
          claiming_age: claimingAge,
          page_type: pageType,
          user_age: userAge,
          marital_status: maritalStatus,
          location: location,
        })
      }

      // Track benefit strategy selections
      if (target.closest('[data-strategy-type]')) {
        const strategyType = target.closest('[data-strategy-type]')?.getAttribute('data-strategy-type')
        event('social_security_strategy_selection', {
          event_category: 'social_security_engagement',
          event_label: 'strategy_type_click',
          strategy_type: strategyType,
          page_type: pageType,
          user_age: userAge,
          marital_status: maritalStatus,
          location: location,
        })
      }

      // Track retirement planning interactions
      if (target.closest('[data-retirement-factor]')) {
        const retirementFactor = target.closest('[data-retirement-factor]')?.getAttribute('data-retirement-factor')
        event('social_security_retirement_factor', {
          event_category: 'social_security_engagement',
          event_label: 'retirement_factor_click',
          retirement_factor: retirementFactor,
          page_type: pageType,
          user_age: userAge,
          location: location,
        })
      }

      // Track Medicare coordination interactions
      if (target.closest('[data-medicare-coordination]')) {
        const medicareType = target.closest('[data-medicare-coordination]')?.getAttribute('data-medicare-coordination')
        event('medicare_coordination_interest', {
          event_category: 'social_security_engagement',
          event_label: 'medicare_coordination_click',
          medicare_type: medicareType,
          page_type: pageType,
          user_age: userAge,
          marital_status: maritalStatus,
          location: location,
        })
      }

      // Track tax planning interactions
      if (target.closest('[data-tax-planning]')) {
        const taxStrategy = target.closest('[data-tax-planning]')?.getAttribute('data-tax-planning')
        event('tax_planning_interest', {
          event_category: 'social_security_planning',
          event_label: 'tax_planning_click',
          tax_strategy: taxStrategy,
          page_type: pageType,
          user_age: userAge,
          location: location,
        })
      }

      // Track spousal benefit interactions
      if (target.closest('[data-spousal-benefits]')) {
        const spousalStrategy = target.closest('[data-spousal-benefits]')?.getAttribute('data-spousal-benefits')
        event('spousal_benefits_interest', {
          event_category: 'social_security_engagement',
          event_label: 'spousal_benefits_click',
          spousal_strategy: spousalStrategy,
          page_type: pageType,
          user_age: userAge,
          marital_status: maritalStatus,
          location: location,
        })
      }

      // Track survivor benefit interactions
      if (target.closest('[data-survivor-benefits]')) {
        const survivorStrategy = target.closest('[data-survivor-benefits]')?.getAttribute('data-survivor-benefits')
        event('survivor_benefits_interest', {
          event_category: 'social_security_engagement',
          event_label: 'survivor_benefits_click',
          survivor_strategy: survivorStrategy,
          page_type: pageType,
          user_age: userAge,
          marital_status: maritalStatus,
          location: location,
        })
      }
    }

    document.addEventListener('click', trackSocialSecurityInteractions)
    return () => document.removeEventListener('click', trackSocialSecurityInteractions)
  }, [pageType, userAge, maritalStatus, location])

  return null // This component doesn't render anything visible
}

// Helper functions for manual tracking
export const trackSocialSecurityCalculator = (calculatorType: 'benefit_estimator' | 'claiming_optimizer' | 'spousal_analysis', userInput: any, location: string) => {
  trackCalculatorUsage('social_security', userInput)
  event('social_security_calculator_use', {
    event_category: 'social_security_tools',
    event_label: calculatorType,
    calculator_type: calculatorType,
    location: location,
    ...userInput,
  })
}

export const trackSocialSecurityConsultationRequest = (consultationType: string, estimatedBenefit: number, claimingAge: number, location: string) => {
  event('social_security_consultation_request', {
    event_category: 'social_security_conversion',
    event_label: 'consultation_requested',
    consultation_type: consultationType,
    estimated_benefit: estimatedBenefit,
    claiming_age: claimingAge,
    location: location,
    value: 150, // Higher lead value for financial planning
  })
}

export const trackSocialSecurityStrategyComparison = (strategiesCompared: string[], selectedStrategy: string, location: string) => {
  event('social_security_strategy_comparison', {
    event_category: 'social_security_engagement',
    event_label: 'strategy_comparison',
    strategies_compared: strategiesCompared.join(','),
    selected_strategy: selectedStrategy,
    comparison_count: strategiesCompared.length,
    location: location,
  })
}

export const trackSocialSecurityEducation = (contentType: 'guide' | 'video' | 'article' | 'calculator' | 'webinar', contentTitle: string, location: string) => {
  event('social_security_education_engagement', {
    event_category: 'social_security_content',
    event_label: contentType,
    content_type: contentType,
    content_title: contentTitle,
    location: location,
  })
}

export const trackRetirementPlanningIntegration = (planningTool: 'medicare_coordination' | 'tax_planning' | 'estate_planning' | 'investment_strategy', userAge: number, location: string) => {
  event('retirement_planning_integration', {
    event_category: 'social_security_planning',
    event_label: planningTool,
    planning_tool: planningTool,
    user_age: userAge,
    location: location,
  })
}

export const trackSpousalBenefitsAnalysis = (spouseAge: number, spouseBenefit: number, strategy: 'file_and_suspend' | 'restricted_application' | 'delay_benefits', location: string) => {
  event('spousal_benefits_analysis', {
    event_category: 'social_security_conversion',
    event_label: 'spousal_analysis_request',
    spouse_age: spouseAge,
    spouse_benefit: spouseBenefit,
    optimization_strategy: strategy,
    location: location,
    value: 200, // High-value lead for spousal benefits
  })
}

export const trackSurvivorBenefitsPlanning = (survivorAge: number, estimatedBenefit: number, planningStrategy: string, location: string) => {
  event('survivor_benefits_planning', {
    event_category: 'social_security_planning',
    event_label: 'survivor_benefits_inquiry',
    survivor_age: survivorAge,
    estimated_benefit: estimatedBenefit,
    planning_strategy: planningStrategy,
    location: location,
    value: 175,
  })
}

export const trackMedicareCoordinationPlanning = (medicareType: 'original' | 'advantage' | 'supplement', enrollmentTiming: string, location: string) => {
  event('medicare_coordination_planning', {
    event_category: 'social_security_planning',
    event_label: 'medicare_coordination',
    medicare_type: medicareType,
    enrollment_timing: enrollmentTiming,
    location: location,
  })
}

export const trackTaxPlanningStrategy = (taxStrategy: 'roth_conversion' | 'withdrawal_timing' | 'tax_bracket_management', retirementYear: number, location: string) => {
  event('tax_planning_strategy', {
    event_category: 'social_security_planning',
    event_label: 'tax_optimization',
    tax_strategy: taxStrategy,
    retirement_year: retirementYear,
    location: location,
  })
}

export const trackClaimingAgeOptimization = (currentAge: number, proposedClaimingAge: number, estimatedIncrease: number, location: string) => {
  event('claiming_age_optimization', {
    event_category: 'social_security_tools',
    event_label: 'claiming_age_analysis',
    current_age: currentAge,
    proposed_claiming_age: proposedClaimingAge,
    estimated_increase: estimatedIncrease,
    location: location,
  })
}