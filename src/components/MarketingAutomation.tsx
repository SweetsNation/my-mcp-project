'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

interface MarketingAutomationProps {
  pageType: 'marketplace' | 'supplemental' | 'social-security'
  userSegment?: 'new_visitor' | 'returning' | 'engaged' | 'high_intent'
  trafficSource?: string
  campaignId?: string
}

interface LeadCapture {
  email?: string
  phone?: string
  interests: string[]
  pageViews: number
  timeOnSite: number
}

export default function MarketingAutomation({ 
  pageType,
  userSegment = 'new_visitor',
  trafficSource,
  campaignId
}: MarketingAutomationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [leadData, setLeadData] = useState<LeadCapture>({
    interests: [],
    pageViews: 1,
    timeOnSite: 0
  })
  const [showLeadCapture, setShowLeadCapture] = useState(false)
  const [showExitIntent, setShowExitIntent] = useState(false)
  const sessionStartTime = useRef(Date.now())
  const engagementTimer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    // Track marketing attribution
    trackMarketingAttribution()
    
    // Initialize user segmentation
    identifyUserSegment()
    
    // Set up lead capture triggers
    setupLeadCaptureTriggers()
    
    // Monitor user engagement
    monitorEngagement()
    
    // Set up exit-intent detection
    setupExitIntentDetection()
    
    // Cleanup
    return () => {
      if (engagementTimer.current) {
        clearTimeout(engagementTimer.current)
      }
    }
  }, [])

  const trackMarketingAttribution = () => {
    const attribution = {
      source: trafficSource || searchParams.get('utm_source') || 'direct',
      medium: searchParams.get('utm_medium') || 'organic',
      campaign: campaignId || searchParams.get('utm_campaign') || 'none',
      content: searchParams.get('utm_content'),
      term: searchParams.get('utm_term'),
      referrer: document.referrer,
      landingPage: pathname,
      timestamp: Date.now()
    }
    
    // Store attribution data
    localStorage.setItem('marketing_attribution', JSON.stringify(attribution))
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'marketing_attribution', {
        event_category: 'marketing',
        event_label: pageType,
        source: attribution.source,
        medium: attribution.medium,
        campaign: attribution.campaign
      })
    }
  }

  const identifyUserSegment = () => {
    const visitHistory = JSON.parse(localStorage.getItem('visit_history') || '[]')
    const pageViews = visitHistory.length + 1
    const lastVisit = localStorage.getItem('last_visit')
    const isReturning = !!lastVisit
    
    let segment = 'new_visitor'
    
    if (isReturning) {
      if (pageViews >= 5) segment = 'engaged'
      else if (pageViews >= 3) segment = 'high_intent' 
      else segment = 'returning'
    }
    
    // Update visit history
    visitHistory.push({
      page: pathname,
      timestamp: Date.now(),
      source: trafficSource
    })
    localStorage.setItem('visit_history', JSON.stringify(visitHistory))
    localStorage.setItem('last_visit', Date.now().toString())
    
    setLeadData(prev => ({ ...prev, pageViews }))
  }

  const setupLeadCaptureTriggers = () => {
    // Time-based trigger (30 seconds for engaged users)
    if (userSegment === 'engaged' || userSegment === 'high_intent') {
      setTimeout(() => {
        setShowLeadCapture(true)
      }, 30000)
    }
    
    // Scroll-based trigger (70% page scroll)
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      
      if (scrollPercent >= 70 && !showLeadCapture) {
        setShowLeadCapture(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }

  const monitorEngagement = () => {
    // Track time on page
    engagementTimer.current = setInterval(() => {
      const timeSpent = Date.now() - sessionStartTime.current
      setLeadData(prev => ({ ...prev, timeOnSite: timeSpent }))
      
      // High engagement trigger (2+ minutes)
      if (timeSpent > 120000 && userSegment === 'new_visitor') {
        setShowLeadCapture(true)
      }
    }, 10000) // Check every 10 seconds
    
    // Track clicks on key elements
    const trackEngagementClicks = (e: Event) => {
      const target = e.target as HTMLElement
      const interests = [...leadData.interests]
      
      if (target.closest('[data-plan-type]')) {
        const planType = target.closest('[data-plan-type]')?.getAttribute('data-plan-type')
        if (planType && !interests.includes(planType)) {
          interests.push(planType)
          setLeadData(prev => ({ ...prev, interests }))
        }
      }
      
      if (target.closest('[data-claiming-age]') || target.closest('[data-strategy-type]')) {
        const interest = pageType === 'social-security' ? 'retirement_planning' : 'insurance_analysis'
        if (!interests.includes(interest)) {
          interests.push(interest)
          setLeadData(prev => ({ ...prev, interests }))
        }
      }
    }
    
    document.addEventListener('click', trackEngagementClicks)
    return () => document.removeEventListener('click', trackEngagementClicks)
  }

  const setupExitIntentDetection = () => {
    let exitIntentShown = false
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentShown && !showLeadCapture) {
        setShowExitIntent(true)
        exitIntentShown = true
      }
    }
    
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }

  const getLeadCaptureContent = () => {
    const content = {
      marketplace: {
        headline: "Get Your FREE ACA Subsidy Analysis",
        subtext: "See if you qualify for up to $2,400/year in premium tax credits",
        cta: "Check My Eligibility",
        offer: "Free eligibility check + licensed agent consultation"
      },
      supplemental: {
        headline: "Protect Your Family with Supplemental Coverage",
        subtext: "Get quotes for accident, critical illness, and hospital insurance",
        cta: "Get Free Quotes",
        offer: "Instant quotes + personalized recommendations"
      },
      'social-security': {
        headline: "Maximize Your Social Security Benefits",
        subtext: "Free analysis of your optimal claiming strategy",
        cta: "Get Free Analysis",
        offer: "Professional consultation + personalized report"
      }
    }
    
    return content[pageType]
  }

  const handleLeadCapture = (email: string, phone?: string) => {
    const leadInfo = {
      ...leadData,
      email,
      phone,
      pageType,
      userSegment,
      trafficSource,
      campaignId,
      captureMethod: showExitIntent ? 'exit_intent' : 'engagement_trigger',
      attribution: JSON.parse(localStorage.getItem('marketing_attribution') || '{}')
    }
    
    // Send lead to CRM/automation system
    submitLead(leadInfo)
    
    // Track conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'lead_capture', {
        event_category: 'conversion',
        event_label: pageType,
        value: getLeadValue(pageType),
        user_segment: userSegment
      })
    }
    
    setShowLeadCapture(false)
    setShowExitIntent(false)
    
    // Show thank you message
    showThankYouMessage(pageType)
  }

  const submitLead = async (leadInfo: any) => {
    try {
      // In a real implementation, this would call your CRM API
      console.log('Lead captured:', leadInfo)
      
      // Store locally for now
      const leads = JSON.parse(localStorage.getItem('captured_leads') || '[]')
      leads.push({ ...leadInfo, timestamp: Date.now() })
      localStorage.setItem('captured_leads', JSON.stringify(leads))
      
      // Trigger marketing automation workflows
      triggerAutomationWorkflow(leadInfo)
      
    } catch (error) {
      console.error('Failed to submit lead:', error)
    }
  }

  const triggerAutomationWorkflow = (leadInfo: any) => {
    // Define automation workflows based on page type and interests
    const workflows = {
      marketplace: {
        immediate: 'ACA_Subsidy_Calculator_Email',
        followup: 'Marketplace_Enrollment_Series',
        nurture: 'Health_Insurance_Education'
      },
      supplemental: {
        immediate: 'Supplemental_Quotes_Email',
        followup: 'Gap_Coverage_Series',
        nurture: 'Supplemental_Education'
      },
      'social-security': {
        immediate: 'SS_Analysis_Report_Email',
        followup: 'Retirement_Planning_Series',
        nurture: 'Social_Security_Education'
      }
    }
    
    const pageWorkflows = workflows[pageType as keyof typeof workflows]
    
    // Simulate workflow triggers (replace with actual automation platform calls)
    console.log(`Triggering workflows for ${pageType}:`, pageWorkflows)
  }

  const getLeadValue = (pageType: string): number => {
    const values = {
      'social-security': 150, // High-value financial planning lead
      marketplace: 25,        // Standard health insurance lead
      supplemental: 20        // Supplemental insurance lead
    }
    return values[pageType as keyof typeof values] || 15
  }

  const showThankYouMessage = (pageType: string) => {
    const messages = {
      marketplace: "Thank you! We'll send your ACA subsidy analysis within 24 hours. A licensed agent will also call you to discuss your options.",
      supplemental: "Thank you! Your supplemental insurance quotes are on the way. We'll email them within the hour plus schedule a consultation call.",
      'social-security': "Thank you! Your Social Security analysis report will be emailed within 24 hours. We'll also call to schedule your free consultation."
    }
    
    // Show toast notification or modal
    alert(messages[pageType as keyof typeof messages])
  }

  const renderLeadCaptureModal = () => {
    if (!showLeadCapture && !showExitIntent) return null
    
    const content = getLeadCaptureContent()
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
          <button 
            onClick={() => {
              setShowLeadCapture(false)
              setShowExitIntent(false)
            }}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{content?.headline}</h2>
          <p className="text-gray-600 mb-6">{content?.subtext}</p>
          
          <form onSubmit={(e) => {
            e.preventDefault()
            const form = e.target as HTMLFormElement
            const formData = new FormData(form)
            const email = formData.get('email') as string
            const phone = formData.get('phone') as string
            handleLeadCapture(email, phone)
          }}>
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number (optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {content?.cta}
              </button>
            </div>
          </form>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            {content?.offer}
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      {renderLeadCaptureModal()}
      
      {/* Hidden conversion tracking pixels */}
      <div style={{ display: 'none' }}>
        <img src={`/api/tracking/page-view?type=${pageType}&segment=${userSegment}`} alt="" />
      </div>
    </>
  )
}

// Export analytics functions for manual tracking
export const MarketingHelpers = {
  trackConversion: (type: string, value: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        event_category: 'marketing',
        event_label: type,
        value: value
      })
    }
  },
  
  trackLeadQuality: (leadId: string, quality: 'hot' | 'warm' | 'cold') => {
    console.log(`Lead ${leadId} quality: ${quality}`)
  },
  
  updateUserSegment: (newSegment: string) => {
    localStorage.setItem('user_segment', newSegment)
  }
}