'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { event, trackFormSubmission, trackPhoneCall, trackCTAClick, trackPageScroll, trackCalculatorUsage } from '@/lib/analytics'

interface TermLifeInsuranceAnalyticsProps {
  pageType?: 'main' | 'calculator' | 'quotes' | 'application'
  userAge?: number
  coverageAmount?: number
  familyStatus?: 'single' | 'married' | 'family_with_children' | 'business_owner'
  location?: string
}

export default function TermLifeInsuranceAnalytics({ 
  pageType = 'main',
  userAge,
  coverageAmount,
  familyStatus = 'single',
  location = 'unknown'
}: TermLifeInsuranceAnalyticsProps) {
  const pathname = usePathname()
  const [pageLoadTime] = useState(() => Date.now())
  const [scrollDepth, setScrollDepth] = useState(0)
  const [timeOnPage, setTimeOnPage] = useState(0)
  const scrollTracked = useRef(new Set<number>())
  const engagementTracked = useRef(false)

  useEffect(() => {
    const startTime = Date.now()

    // Track page view with life insurance-specific context
    event('term_life_insurance_page_view', {
      event_category: 'term_life_insurance',
      event_label: pageType,
      page_type: pageType,
      user_age: userAge,
      coverage_amount: coverageAmount,
      family_status: familyStatus,
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
          
          event('term_life_insurance_scroll_milestone', {
            event_category: 'term_life_insurance_engagement',
            event_label: `scroll_${milestone}`,
            scroll_depth: milestone,
            page_type: pageType,
            user_age: userAge,
            family_status: familyStatus,
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
      if (timeSpent > 60000 && !engagementTracked.current) { // 60 seconds (longer for life insurance research)
        engagementTracked.current = true
        event('term_life_insurance_deep_engagement', {
          event_category: 'term_life_insurance_engagement',
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
        event('term_life_insurance_page_exit', {
          event_category: 'term_life_insurance_engagement',
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
          event('term_life_insurance_phone_click', {
            event_category: 'term_life_insurance_conversion',
            event_label: 'phone_cta',
            cta_text: text,
            page_type: pageType,
            user_age: userAge,
            family_status: familyStatus,
            location: location,
          })
        } else if (href.includes('/contact') || text.includes('Quote') || text.includes('Get Free')) {
          trackCTAClick('quote_cta', pathname, href)
          event('term_life_insurance_quote_click', {
            event_category: 'term_life_insurance_conversion',
            event_label: 'quote_cta',
            cta_text: text,
            cta_destination: href,
            page_type: pageType,
            user_age: userAge,
            family_status: familyStatus,
            location: location,
          })
        } else if (href.includes('/tools') || text.includes('Calculator')) {
          event('term_life_insurance_calculator_click', {
            event_category: 'term_life_insurance_engagement',
            event_label: 'calculator_cta',
            cta_text: text,
            cta_destination: href,
            page_type: pageType,
            user_age: userAge,
            family_status: familyStatus,
            location: location,
          })
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
        const formId = form.id || form.className || 'term_life_insurance_form'
        
        if (e.type === 'submit') {
          trackFormSubmission('term_life_insurance_quote', true)
          event('term_life_insurance_form_submit', {
            event_category: 'term_life_insurance_conversion',
            event_label: 'form_submission',
            form_id: formId,
            page_type: pageType,
            user_age: userAge,
            family_status: familyStatus,
            coverage_amount: coverageAmount,
            location: location,
          })
        }
      }
    }

    document.addEventListener('submit', trackFormEvents)
    return () => document.removeEventListener('submit', trackFormEvents)
  }, [pageType, userAge, familyStatus, coverageAmount, location])

  // Track life insurance-specific interactions
  useEffect(() => {
    const trackLifeInsuranceInteractions = (e: Event) => {
      const target = e.target as HTMLElement
      
      // Track coverage amount interest
      if (target.closest('[data-coverage-amount]')) {
        const coverageAmount = target.closest('[data-coverage-amount]')?.getAttribute('data-coverage-amount')
        event('term_life_insurance_coverage_interest', {
          event_category: 'term_life_insurance_engagement',
          event_label: 'coverage_amount_click',
          coverage_amount: coverageAmount,
          page_type: pageType,
          user_age: userAge,
          family_status: familyStatus,
          location: location,
        })
      }

      // Track term length selections
      if (target.closest('[data-term-length]')) {
        const termLength = target.closest('[data-term-length]')?.getAttribute('data-term-length')
        event('term_life_insurance_term_selection', {
          event_category: 'term_life_insurance_engagement',
          event_label: 'term_length_click',
          term_length: termLength,
          page_type: pageType,
          user_age: userAge,
          family_status: familyStatus,
          location: location,
        })
      }

      // Track beneficiary type interest
      if (target.closest('[data-beneficiary-type]')) {
        const beneficiaryType = target.closest('[data-beneficiary-type]')?.getAttribute('data-beneficiary-type')
        event('term_life_insurance_beneficiary_interest', {
          event_category: 'term_life_insurance_engagement',
          event_label: 'beneficiary_type_click',
          beneficiary_type: beneficiaryType,
          page_type: pageType,
          user_age: userAge,
          family_status: familyStatus,
          location: location,
        })
      }

      // Track comparison interactions (term vs whole life)
      if (target.closest('[data-insurance-type]')) {
        const insuranceType = target.closest('[data-insurance-type]')?.getAttribute('data-insurance-type')
        event('life_insurance_type_comparison', {
          event_category: 'term_life_insurance_engagement',
          event_label: 'insurance_type_click',
          insurance_type: insuranceType,
          page_type: pageType,
          user_age: userAge,
          family_status: familyStatus,
          location: location,
        })
      }
    }

    document.addEventListener('click', trackLifeInsuranceInteractions)
    return () => document.removeEventListener('click', trackLifeInsuranceInteractions)
  }, [pageType, userAge, familyStatus, location])

  return null // This component doesn't render anything visible
}

// Helper functions for manual tracking
export const trackTermLifeInsuranceCalculator = (calculatorType: 'coverage_calculator' | 'premium_estimator' | 'needs_analysis', userInput: any, location: string) => {
  trackCalculatorUsage('term_life_insurance', userInput)
  event('term_life_insurance_calculator_use', {
    event_category: 'term_life_insurance_tools',
    event_label: calculatorType,
    calculator_type: calculatorType,
    location: location,
    ...userInput,
  })
}

export const trackTermLifeInsuranceQuote = (coverageAmount: number, termLength: number, estimatedPremium: number, location: string) => {
  event('term_life_insurance_quote_request', {
    event_category: 'term_life_insurance_conversion',
    event_label: 'quote_requested',
    coverage_amount: coverageAmount,
    term_length: termLength,
    estimated_premium: estimatedPremium,
    location: location,
    value: 100, // High-value lead for life insurance
  })
}

export const trackTermLifeInsuranceComparison = (companiesCompared: string[], selectedCompany: string, location: string) => {
  event('term_life_insurance_comparison', {
    event_category: 'term_life_insurance_engagement',
    event_label: 'company_comparison',
    companies_compared: companiesCompared.join(','),
    selected_company: selectedCompany,
    comparison_count: companiesCompared.length,
    location: location,
  })
}

export const trackTermLifeInsuranceEducation = (contentType: 'guide' | 'video' | 'article' | 'calculator' | 'faq', contentTitle: string, location: string) => {
  event('term_life_insurance_education_engagement', {
    event_category: 'term_life_insurance_content',
    event_label: contentType,
    content_type: contentType,
    content_title: contentTitle,
    location: location,
  })
}

export const trackLifeInsuranceApplication = (applicationStage: 'started' | 'medical_questions' | 'beneficiary_info' | 'completed', userAge: number, coverageAmount: number, location: string) => {
  event('term_life_insurance_application_progress', {
    event_category: 'term_life_insurance_conversion',
    event_label: applicationStage,
    application_stage: applicationStage,
    user_age: userAge,
    coverage_amount: coverageAmount,
    location: location,
  })
}