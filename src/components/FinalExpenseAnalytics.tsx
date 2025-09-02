'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { event, trackFormSubmission, trackPhoneCall, trackCTAClick, trackPageScroll, trackCalculatorUsage } from '@/lib/analytics'
import { finalExpenseTracker, FINAL_EXPENSE_FUNNEL_STAGES } from '@/lib/final-expense-analytics'

interface FinalExpenseAnalyticsProps {
  pageType?: 'main' | 'calculator' | 'quotes' | 'application'
  userAge?: number
  coverageAmount?: number
  familyStatus?: 'single' | 'married' | 'widowed' | 'family'
  location?: string
}

export default function FinalExpenseAnalytics({ 
  pageType = 'main',
  userAge,
  coverageAmount,
  familyStatus = 'single',
  location = 'unknown'
}: FinalExpenseAnalyticsProps) {
  const pathname = usePathname()
  const [pageLoadTime] = useState(() => Date.now())
  const [scrollDepth, setScrollDepth] = useState(0)
  const [timeOnPage, setTimeOnPage] = useState(0)
  const scrollTracked = useRef(new Set<number>())
  const engagementTracked = useRef(false)

  useEffect(() => {
    const startTime = Date.now()

    // Track page view with final expense-specific context
    event('final_expense_page_view', {
      event_category: 'final_expense',
      event_label: pageType,
      page_type: pageType,
      user_age: userAge,
      coverage_amount: coverageAmount,
      family_status: familyStatus,
      location: location,
      page_path: pathname,
    })

    // Track funnel stage - Awareness
    finalExpenseTracker.trackFunnelStage(FINAL_EXPENSE_FUNNEL_STAGES.AWARENESS, userAge, coverageAmount, location)

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
          
          event('final_expense_scroll_milestone', {
            event_category: 'final_expense_engagement',
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
      if (timeSpent > 45000 && !engagementTracked.current) { // 45 seconds (longer for final expense planning)
        engagementTracked.current = true
        event('final_expense_deep_engagement', {
          event_category: 'final_expense_engagement',
          event_label: 'engaged_user',
          time_on_page: Math.round(timeSpent / 1000),
          scroll_depth: scrollDepth,
          page_type: pageType,
          user_age: userAge,
          family_status: familyStatus,
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
      if (finalTime > 20000) { // Only track if user spent more than 20 seconds
        event('final_expense_page_exit', {
          event_category: 'final_expense_engagement',
          event_label: 'page_exit',
          time_on_page: Math.round(finalTime / 1000),
          final_scroll_depth: scrollDepth,
          page_type: pageType,
          user_age: userAge,
          family_status: familyStatus,
          location: location,
        })
      }
    }
  }, [pageType, userAge, coverageAmount, familyStatus, location, pathname, scrollDepth])

  // Track CTA clicks
  useEffect(() => {
    const trackCTAClicks = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.closest('a') as HTMLAnchorElement
        const href = link.href
        const text = link.textContent?.trim() || 'Unknown CTA'
        
        if (href.includes('tel:') || text.includes('CALL') || text.includes('331-E-HEALTH')) {
          trackPhoneCall('331-343-2584')
          event('final_expense_phone_click', {
            event_category: 'final_expense_conversion',
            event_label: 'phone_cta',
            cta_text: text,
            page_type: pageType,
            user_age: userAge,
            location: location,
          })
        } else if (href.includes('/contact') || text.includes('Quote') || text.includes('Get Free')) {
          trackCTAClick('quote_cta', pathname, href)
          event('final_expense_quote_click', {
            event_category: 'final_expense_conversion',
            event_label: 'quote_cta',
            cta_text: text,
            cta_destination: href,
            page_type: pageType,
            user_age: userAge,
            family_status: familyStatus,
            location: location,
          })
          // Track funnel stage - Intent
          finalExpenseTracker.trackFunnelStage(FINAL_EXPENSE_FUNNEL_STAGES.INTENT, userAge, coverageAmount, location)
        } else if (href.includes('/tools') || text.includes('Calculator')) {
          event('final_expense_calculator_click', {
            event_category: 'final_expense_engagement',
            event_label: 'calculator_cta',
            cta_text: text,
            cta_destination: href,
            page_type: pageType,
            user_age: userAge,
            location: location,
          })
          // Track funnel stage - Consideration
          finalExpenseTracker.trackFunnelStage(FINAL_EXPENSE_FUNNEL_STAGES.CONSIDERATION, userAge, coverageAmount, location)
        }
      }
    }

    document.addEventListener('click', trackCTAClicks)
    return () => document.removeEventListener('click', trackCTAClicks)
  }, [pageType, userAge, familyStatus, location, pathname])

  // Track form interactions
  useEffect(() => {
    const trackFormEvents = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'FORM' || target.closest('form')) {
        const form = target.closest('form') as HTMLFormElement
        const formId = form.id || form.className || 'final_expense_form'
        
        if (e.type === 'submit') {
          trackFormSubmission('final_expense_quote', true)
          event('final_expense_form_submit', {
            event_category: 'final_expense_conversion',
            event_label: 'form_submission',
            form_id: formId,
            page_type: pageType,
            user_age: userAge,
            family_status: familyStatus,
            coverage_amount: coverageAmount,
            location: location,
          })
          // Track funnel stage - Purchase
          finalExpenseTracker.trackFunnelStage(FINAL_EXPENSE_FUNNEL_STAGES.PURCHASE, userAge, coverageAmount, location)
          
          // Calculate and track lead score
          const leadScore = finalExpenseTracker.calculateLeadScore(['FORM_SUBMISSION', 'DEEP_ENGAGEMENT', 'CALCULATOR_USE'])
          finalExpenseTracker.trackLeadScore(leadScore, userAge, coverageAmount, location)
        }
      }
    }

    document.addEventListener('submit', trackFormEvents)
    return () => document.removeEventListener('submit', trackFormEvents)
  }, [pageType, userAge, familyStatus, coverageAmount, location])

  // Track final expense-specific interactions
  useEffect(() => {
    const trackFinalExpenseInteractions = (e: Event) => {
      const target = e.target as HTMLElement
      
      // Track coverage amount interest
      if (target.closest('[data-coverage-amount]')) {
        const coverageAmount = target.closest('[data-coverage-amount]')?.getAttribute('data-coverage-amount')
        event('final_expense_coverage_interest', {
          event_category: 'final_expense_engagement',
          event_label: 'coverage_amount_click',
          coverage_amount: coverageAmount,
          page_type: pageType,
          user_age: userAge,
          family_status: familyStatus,
          location: location,
        })
        // Track funnel stage - Interest
        finalExpenseTracker.trackFunnelStage(FINAL_EXPENSE_FUNNEL_STAGES.INTEREST, userAge, parseInt(coverageAmount || '0'), location)
      }

      // Track burial insurance vs final expense interest
      if (target.closest('[data-burial-insurance]')) {
        const insuranceType = target.closest('[data-burial-insurance]')?.getAttribute('data-burial-insurance')
        event('burial_insurance_interest', {
          event_category: 'final_expense_engagement',
          event_label: 'burial_insurance_click',
          insurance_type: insuranceType,
          page_type: pageType,
          user_age: userAge,
          family_status: familyStatus,
          location: location,
        })
      }

      // Track funeral cost planning interest
      if (target.closest('[data-funeral-costs]')) {
        const costType = target.closest('[data-funeral-costs]')?.getAttribute('data-funeral-costs')
        event('funeral_costs_planning', {
          event_category: 'final_expense_engagement',
          event_label: 'funeral_costs_click',
          cost_type: costType,
          page_type: pageType,
          user_age: userAge,
          location: location,
        })
      }

      // Track guaranteed acceptance interest
      if (target.closest('[data-guaranteed-acceptance]')) {
        const acceptanceType = target.closest('[data-guaranteed-acceptance]')?.getAttribute('data-guaranteed-acceptance')
        event('guaranteed_acceptance_interest', {
          event_category: 'final_expense_engagement',
          event_label: 'guaranteed_acceptance_click',
          acceptance_type: acceptanceType,
          page_type: pageType,
          user_age: userAge,
          location: location,
        })
      }
    }

    document.addEventListener('click', trackFinalExpenseInteractions)
    return () => document.removeEventListener('click', trackFinalExpenseInteractions)
  }, [pageType, userAge, familyStatus, location])

  return null // This component doesn't render anything visible
}

// Helper functions for manual tracking
export const trackFinalExpenseCalculator = (calculatorType: 'burial_cost_calculator' | 'coverage_estimator' | 'premium_calculator', userInput: any, location: string) => {
  trackCalculatorUsage('final_expense', userInput)
  event('final_expense_calculator_use', {
    event_category: 'final_expense_tools',
    event_label: calculatorType,
    calculator_type: calculatorType,
    location: location,
    ...userInput,
  })
}

export const trackFinalExpenseQuote = (coverageAmount: number, userAge: number, estimatedPremium: number, location: string) => {
  event('final_expense_quote_request', {
    event_category: 'final_expense_conversion',
    event_label: 'quote_requested',
    coverage_amount: coverageAmount,
    user_age: userAge,
    estimated_premium: estimatedPremium,
    location: location,
    value: 75, // High-value lead for final expense insurance
  })
}

export const trackBurialInsuranceComparison = (companiesCompared: string[], selectedCompany: string, location: string) => {
  event('burial_insurance_comparison', {
    event_category: 'final_expense_engagement',
    event_label: 'company_comparison',
    companies_compared: companiesCompared.join(','),
    selected_company: selectedCompany,
    comparison_count: companiesCompared.length,
    location: location,
  })
}

export const trackFinalExpenseEducation = (contentType: 'guide' | 'video' | 'article' | 'calculator' | 'faq', contentTitle: string, location: string) => {
  event('final_expense_education_engagement', {
    event_category: 'final_expense_content',
    event_label: contentType,
    content_type: contentType,
    content_title: contentTitle,
    location: location,
  })
}

export const trackGuaranteedAcceptanceApplication = (applicationStage: 'started' | 'health_questions' | 'beneficiary_info' | 'completed', userAge: number, coverageAmount: number, location: string) => {
  event('guaranteed_acceptance_application_progress', {
    event_category: 'final_expense_conversion',
    event_label: applicationStage,
    application_stage: applicationStage,
    user_age: userAge,
    coverage_amount: coverageAmount,
    location: location,
  })
}