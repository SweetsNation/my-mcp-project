'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { event, trackFormSubmission, trackPhoneCall, trackCTAClick, trackPageScroll, trackCalculatorUsage } from '@/lib/analytics'

interface SupplementalInsuranceAnalyticsProps {
  pageType?: 'main' | 'accident' | 'critical_illness' | 'hospital_indemnity' | 'dental_vision'
  userAge?: number
  hasExistingInsurance?: boolean
  supplementType?: string
  location?: string
}

export default function SupplementalInsuranceAnalytics({ 
  pageType = 'main',
  userAge,
  hasExistingInsurance = false,
  supplementType = 'general',
  location = 'unknown'
}: SupplementalInsuranceAnalyticsProps) {
  const pathname = usePathname()
  const [pageLoadTime] = useState(() => Date.now())
  const [scrollDepth, setScrollDepth] = useState(0)
  const [timeOnPage, setTimeOnPage] = useState(0)
  const scrollTracked = useRef(new Set<number>())
  const engagementTracked = useRef(false)

  useEffect(() => {
    const startTime = Date.now()

    // Track page view with supplemental-specific context
    event('supplemental_page_view', {
      event_category: 'supplemental_insurance',
      event_label: pageType,
      page_type: pageType,
      user_age: userAge,
      has_existing_insurance: hasExistingInsurance,
      supplement_type: supplementType,
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
          
          event('supplemental_scroll_milestone', {
            event_category: 'supplemental_engagement',
            event_label: `scroll_${milestone}`,
            scroll_depth: milestone,
            page_type: pageType,
            supplement_type: supplementType,
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
      if (timeSpent > 30000 && !engagementTracked.current) { // 30 seconds
        engagementTracked.current = true
        event('supplemental_deep_engagement', {
          event_category: 'supplemental_engagement',
          event_label: 'engaged_user',
          time_on_page: Math.round(timeSpent / 1000),
          scroll_depth: scrollDepth,
          page_type: pageType,
          supplement_type: supplementType,
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
      if (finalTime > 10000) { // Only track if user spent more than 10 seconds
        event('supplemental_page_exit', {
          event_category: 'supplemental_engagement',
          event_label: 'page_exit',
          time_on_page: Math.round(finalTime / 1000),
          final_scroll_depth: scrollDepth,
          page_type: pageType,
          supplement_type: supplementType,
          location: location,
        })
      }
    }
  }, [pageType, userAge, hasExistingInsurance, supplementType, location, pathname, scrollDepth])

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
          event('supplemental_phone_click', {
            event_category: 'supplemental_conversion',
            event_label: 'phone_cta',
            cta_text: text,
            page_type: pageType,
            supplement_type: supplementType,
            location: location,
          })
        } else if (href.includes('/contact') || text.includes('QUOTE') || text.includes('Get Free Quote')) {
          trackCTAClick('quote_cta', pathname, href)
          event('supplemental_quote_click', {
            event_category: 'supplemental_conversion',
            event_label: 'quote_cta',
            cta_text: text,
            cta_destination: href,
            page_type: pageType,
            supplement_type: supplementType,
            location: location,
          })
        }
      }
    }

    document.addEventListener('click', trackCTAClicks)
    return () => document.removeEventListener('click', trackCTAClicks)
  }, [pageType, supplementType, location, pathname])

  // Track form interactions
  useEffect(() => {
    const trackFormEvents = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'FORM' || target.closest('form')) {
        const form = target.closest('form') as HTMLFormElement
        const formId = form.id || form.className || 'supplemental_form'
        
        if (e.type === 'submit') {
          trackFormSubmission('supplemental_quote', true)
          event('supplemental_form_submit', {
            event_category: 'supplemental_conversion',
            event_label: 'form_submission',
            form_id: formId,
            page_type: pageType,
            supplement_type: supplementType,
            location: location,
          })
        }
      }
    }

    document.addEventListener('submit', trackFormEvents)
    return () => document.removeEventListener('submit', trackFormEvents)
  }, [pageType, supplementType, location])

  // Track supplemental-specific interactions
  useEffect(() => {
    const trackSupplementalInteractions = (e: Event) => {
      const target = e.target as HTMLElement
      
      // Track plan type selections
      if (target.closest('[data-plan-type]')) {
        const planType = target.closest('[data-plan-type]')?.getAttribute('data-plan-type')
        event('supplemental_plan_interest', {
          event_category: 'supplemental_engagement',
          event_label: 'plan_type_click',
          plan_type: planType,
          page_type: pageType,
          supplement_type: supplementType,
          location: location,
        })
      }

      // Track coverage amount interactions
      if (target.closest('[data-coverage-amount]')) {
        const coverageAmount = target.closest('[data-coverage-amount]')?.getAttribute('data-coverage-amount')
        event('supplemental_coverage_selection', {
          event_category: 'supplemental_engagement',
          event_label: 'coverage_amount_click',
          coverage_amount: coverageAmount,
          page_type: pageType,
          supplement_type: supplementType,
          location: location,
        })
      }
    }

    document.addEventListener('click', trackSupplementalInteractions)
    return () => document.removeEventListener('click', trackSupplementalInteractions)
  }, [pageType, supplementType, location])

  return null // This component doesn't render anything visible
}

// Helper functions for manual tracking
export const trackSupplementalCalculator = (calculatorType: 'coverage_estimator' | 'premium_calculator' | 'gap_analysis', userInput: any, location: string) => {
  trackCalculatorUsage('supplemental', userInput)
  event('supplemental_calculator_use', {
    event_category: 'supplemental_tools',
    event_label: calculatorType,
    calculator_type: calculatorType,
    location: location,
    ...userInput,
  })
}

export const trackSupplementalQuoteRequest = (supplementType: string, coverageAmount: number, estimatedPremium: number, location: string) => {
  event('supplemental_quote_request', {
    event_category: 'supplemental_conversion',
    event_label: 'quote_requested',
    supplement_type: supplementType,
    coverage_amount: coverageAmount,
    estimated_premium: estimatedPremium,
    location: location,
    value: 20, // Lead value
  })
}

export const trackSupplementalComparison = (plansCompared: string[], selectedPlan: string, location: string) => {
  event('supplemental_plan_comparison', {
    event_category: 'supplemental_engagement',
    event_label: 'plan_comparison',
    plans_compared: plansCompared.join(','),
    selected_plan: selectedPlan,
    comparison_count: plansCompared.length,
    location: location,
  })
}

export const trackSupplementalEducation = (contentType: 'guide' | 'video' | 'article' | 'faq', contentTitle: string, location: string) => {
  event('supplemental_education_engagement', {
    event_category: 'supplemental_content',
    event_label: contentType,
    content_type: contentType,
    content_title: contentTitle,
    location: location,
  })
}