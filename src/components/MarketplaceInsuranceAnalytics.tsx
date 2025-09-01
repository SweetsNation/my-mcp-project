'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { event, trackFormSubmission, trackPhoneCall, trackCTAClick, trackPageScroll, trackCalculatorUsage } from '@/lib/analytics'

interface MarketplaceInsuranceAnalyticsProps {
  pageType?: 'main' | 'enrollment' | 'plans' | 'subsidies'
  userAge?: number
  userIncome?: number
  location?: string
}

export default function MarketplaceInsuranceAnalytics({ 
  pageType = 'main',
  userAge,
  userIncome, 
  location = 'unknown'
}: MarketplaceInsuranceAnalyticsProps) {
  const pathname = usePathname()
  const [pageLoadTime] = useState(() => Date.now())
  const [scrollDepth, setScrollDepth] = useState(0)
  const [timeOnPage, setTimeOnPage] = useState(0)
  const scrollTracked = useRef(new Set<number>())
  const engagementTracked = useRef(false)

  useEffect(() => {
    const startTime = Date.now()

    // Track page view with marketplace-specific context
    event('marketplace_page_view', {
      event_category: 'marketplace_insurance',
      event_label: pageType,
      page_type: pageType,
      user_age: userAge,
      user_income: userIncome,
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
          
          event('marketplace_scroll_milestone', {
            event_category: 'marketplace_engagement',
            event_label: `scroll_${milestone}`,
            scroll_depth: milestone,
            page_type: pageType,
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
        event('marketplace_deep_engagement', {
          event_category: 'marketplace_engagement',
          event_label: 'engaged_user',
          time_on_page: Math.round(timeSpent / 1000),
          scroll_depth: scrollDepth,
          page_type: pageType,
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
        event('marketplace_page_exit', {
          event_category: 'marketplace_engagement',
          event_label: 'page_exit',
          time_on_page: Math.round(finalTime / 1000),
          final_scroll_depth: scrollDepth,
          page_type: pageType,
          location: location,
        })
      }
    }
  }, [pageType, userAge, userIncome, location, pathname, scrollDepth])

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
          event('marketplace_phone_click', {
            event_category: 'marketplace_conversion',
            event_label: 'phone_cta',
            cta_text: text,
            page_type: pageType,
            location: location,
          })
        } else if (href.includes('/contact') || text.includes('ENROLLMENT') || text.includes('QUOTE')) {
          trackCTAClick('enrollment_cta', pathname, href)
          event('marketplace_enrollment_click', {
            event_category: 'marketplace_conversion',
            event_label: 'enrollment_cta',
            cta_text: text,
            cta_destination: href,
            page_type: pageType,
            location: location,
          })
        }
      }
    }

    document.addEventListener('click', trackCTAClicks)
    return () => document.removeEventListener('click', trackCTAClicks)
  }, [pageType, location, pathname])

  // Track form interactions
  useEffect(() => {
    const trackFormEvents = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'FORM' || target.closest('form')) {
        const form = target.closest('form') as HTMLFormElement
        const formId = form.id || form.className || 'marketplace_form'
        
        if (e.type === 'submit') {
          trackFormSubmission('marketplace_quote', true)
          event('marketplace_form_submit', {
            event_category: 'marketplace_conversion',
            event_label: 'form_submission',
            form_id: formId,
            page_type: pageType,
            location: location,
          })
        }
      }
    }

    document.addEventListener('submit', trackFormEvents)
    return () => document.removeEventListener('submit', trackFormEvents)
  }, [pageType, location])

  return null // This component doesn't render anything visible
}

// Helper functions for manual tracking
export const trackMarketplaceCalculator = (calculatorType: 'subsidy' | 'plan_comparison' | 'cost_estimator', userInput: any, location: string) => {
  trackCalculatorUsage('marketplace', userInput)
  event('marketplace_calculator_use', {
    event_category: 'marketplace_tools',
    event_label: calculatorType,
    calculator_type: calculatorType,
    location: location,
    ...userInput,
  })
}

export const trackMarketplaceQuoteRequest = (planType: string, estimatedPremium: number, subsidyAmount: number, location: string) => {
  event('marketplace_quote_request', {
    event_category: 'marketplace_conversion',
    event_label: 'quote_requested',
    plan_type: planType,
    estimated_premium: estimatedPremium,
    subsidy_amount: subsidyAmount,
    location: location,
    value: 25, // Lead value
  })
}

export const trackMarketplacePlanComparison = (plansCompared: string[], selectedPlan: string, location: string) => {
  event('marketplace_plan_comparison', {
    event_category: 'marketplace_engagement',
    event_label: 'plan_comparison',
    plans_compared: plansCompared.join(','),
    selected_plan: selectedPlan,
    comparison_count: plansCompared.length,
    location: location,
  })
}