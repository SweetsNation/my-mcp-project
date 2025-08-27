'use client'

import { useEffect, useState } from 'react'

interface ConversionEvent {
  id: string
  eventName: string
  timestamp: number
  value: number
  county: string
  source: string
  medium: string
  campaign?: string
  userId?: string
  sessionId: string
  metadata: Record<string, any>
}

interface ConversionGoal {
  id: string
  name: string
  description: string
  eventName: string
  value: number
  category: 'lead' | 'engagement' | 'conversion' | 'retention'
  isActive: boolean
}

interface ConversionTrackerProps {
  county: string
  debug?: boolean
}

const conversionGoals: ConversionGoal[] = [
  {
    id: 'phone_call',
    name: 'Phone Call',
    description: 'User initiated a phone call',
    eventName: 'phone_call_initiated',
    value: 50,
    category: 'lead',
    isActive: true
  },
  {
    id: 'form_submission',
    name: 'Contact Form Submission',
    description: 'User completed and submitted contact form',
    eventName: 'form_submission_completed',
    value: 75,
    category: 'lead',
    isActive: true
  },
  {
    id: 'calculator_completion',
    name: 'Subsidy Calculator Completion',
    description: 'User completed subsidy calculator',
    eventName: 'calculator_completed',
    value: 25,
    category: 'engagement',
    isActive: true
  },
  {
    id: 'quote_request',
    name: 'Insurance Quote Request',
    description: 'User requested personalized insurance quote',
    eventName: 'quote_requested',
    value: 100,
    category: 'conversion',
    isActive: true
  },
  {
    id: 'video_completion',
    name: 'Educational Video Completion',
    description: 'User watched educational video to completion',
    eventName: 'video_completed',
    value: 10,
    category: 'engagement',
    isActive: true
  },
  {
    id: 'partner_referral',
    name: 'Partner Organization Contact',
    description: 'User contacted partner organization',
    eventName: 'partner_contact_made',
    value: 30,
    category: 'lead',
    isActive: true
  },
  {
    id: 'email_signup',
    name: 'Email Newsletter Signup',
    description: 'User subscribed to email updates',
    eventName: 'email_subscribed',
    value: 15,
    category: 'engagement',
    isActive: true
  },
  {
    id: 'appointment_scheduled',
    name: 'Consultation Appointment',
    description: 'User scheduled consultation appointment',
    eventName: 'appointment_scheduled',
    value: 150,
    category: 'conversion',
    isActive: true
  }
]

export default function ConversionTracker({ county, debug = false }: ConversionTrackerProps) {
  const [sessionId] = useState(() => 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9))
  const [conversionEvents, setConversionEvents] = useState<ConversionEvent[]>([])
  const [isTracking, setIsTracking] = useState(true)

  useEffect(() => {
    // Initialize conversion tracking
    const initializeTracking = () => {
      // Set up global conversion tracking functions
      if (typeof window !== 'undefined') {
        // Phone call tracking
        (window as any).trackPhoneCall = (county: string, source: string) => {
          trackConversion('phone_call_initiated', {
            county,
            source,
            action: 'phone_call'
          }, 50)
        }

        // Form submission tracking
        (window as any).trackFormSubmission = (formType: string, county: string) => {
          trackConversion('form_submission_completed', {
            county,
            formType,
            action: 'form_submit'
          }, 75)
        }

        // Calculator completion tracking
        (window as any).trackCalculatorCompletion = (county: string, results: any) => {
          trackConversion('calculator_completed', {
            county,
            results,
            action: 'calculator_complete'
          }, 25)
        }

        // Quote request tracking
        (window as any).trackQuoteRequest = (county: string, planType: string, income: number) => {
          trackConversion('quote_requested', {
            county,
            planType,
            income,
            action: 'quote_request'
          }, 100)
        }

        // Video completion tracking
        (window as any).trackVideoCompletion = (videoTitle: string, county: string, duration: string) => {
          trackConversion('video_completed', {
            county,
            videoTitle,
            duration,
            action: 'video_complete'
          }, 10)
        }

        // Partner contact tracking
        (window as any).trackPartnerContact = (partnerName: string, county: string, contactType: string) => {
          trackConversion('partner_contact_made', {
            county,
            partnerName,
            contactType,
            action: 'partner_contact'
          }, 30)
        }

        // Email signup tracking
        (window as any).trackEmailSignup = (county: string, source: string) => {
          trackConversion('email_subscribed', {
            county,
            source,
            action: 'email_signup'
          }, 15)
        }

        // Appointment scheduling tracking
        (window as any).trackAppointmentScheduled = (county: string, appointmentType: string, date: string) => {
          trackConversion('appointment_scheduled', {
            county,
            appointmentType,
            date,
            action: 'appointment_schedule'
          }, 150)
        }

        // Generic lead tracking
        (window as any).trackLead = (leadType: string, county: string, value: number = 25) => {
          trackConversion('lead_generated', {
            county,
            leadType,
            action: 'lead_gen'
          }, value)
        }

        // Enhanced ecommerce tracking for Facebook Pixel
        (window as any).fbTrackContact = (type: string, county: string) => {
          if ((window as any).fbq) {
            (window as any).fbq('track', 'Contact', {
              content_category: 'Health Insurance',
              content_name: `${county} Contact`,
              value: type === 'phone' ? 50 : 25,
              currency: 'USD'
            })
          }
        }

        (window as any).fbTrackLead = (county: string, value: number) => {
          if ((window as any).fbq) {
            (window as any).fbq('track', 'Lead', {
              content_category: 'Health Insurance',
              content_name: `${county} Lead`,
              value: value,
              currency: 'USD'
            })
          }
        }
      }
    }

    initializeTracking()

    // Set up page visibility tracking for engagement time
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User left page, track engagement time
        const engagementTime = Date.now() - (sessionStorage.getItem('pageStartTime') ? parseInt(sessionStorage.getItem('pageStartTime')!) : Date.now())
        
        if (engagementTime > 30000) { // More than 30 seconds
          trackConversion('high_engagement', {
            county,
            engagementTime,
            action: 'engagement'
          }, 5)
        }
      } else {
        // User returned to page
        sessionStorage.setItem('pageStartTime', Date.now().toString())
      }
    }

    // Track initial page load
    sessionStorage.setItem('pageStartTime', Date.now().toString())
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Scroll depth tracking
    let maxScrollPercent = 0
    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
      
      if (scrollPercent > maxScrollPercent) {
        maxScrollPercent = scrollPercent
        
        // Track milestone scroll depths
        if (scrollPercent >= 75 && maxScrollPercent < 75) {
          trackConversion('scroll_75_percent', {
            county,
            scrollPercent,
            action: 'scroll_depth'
          }, 2)
        } else if (scrollPercent >= 50 && maxScrollPercent < 50) {
          trackConversion('scroll_50_percent', {
            county,
            scrollPercent,
            action: 'scroll_depth'
          }, 1)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [county])

  const trackConversion = (eventName: string, metadata: Record<string, any>, value: number) => {
    if (!isTracking) return

    const event: ConversionEvent = {
      id: 'conv_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      eventName,
      timestamp: Date.now(),
      value,
      county,
      source: document.referrer || 'direct',
      medium: 'web',
      sessionId,
      metadata
    }

    // Add to local state if debug mode
    if (debug) {
      setConversionEvents(prev => [...prev, event])
    }

    // Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: 'Conversions',
        event_label: eventName,
        value: value,
        currency: 'USD',
        custom_parameter_1: county,
        custom_parameter_2: metadata.action || 'unknown',
        send_to: 'GA_MEASUREMENT_ID' // Replace with actual GA4 measurement ID
      })
    }

    // Send to Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      const fbEventMap: Record<string, string> = {
        'form_submission_completed': 'Lead',
        'quote_requested': 'Lead',
        'appointment_scheduled': 'Schedule',
        'phone_call_initiated': 'Contact',
        'email_subscribed': 'Subscribe'
      }

      const fbEventName = fbEventMap[eventName] || 'CustomConversion'
      
      (window as any).fbq('track', fbEventName, {
        content_category: 'Health Insurance',
        content_name: `${county} ${eventName}`,
        value: value,
        currency: 'USD'
      })
    }

    // Send to server endpoint (replace with actual endpoint)
    fetch('/api/conversions/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event)
    }).catch(error => {
      console.warn('Failed to send conversion event to server:', error)
    })

    // Store in localStorage for offline capability
    try {
      const storedEvents = JSON.parse(localStorage.getItem('conversionEvents') || '[]')
      storedEvents.push(event)
      
      // Keep only last 50 events
      if (storedEvents.length > 50) {
        storedEvents.splice(0, storedEvents.length - 50)
      }
      
      localStorage.setItem('conversionEvents', JSON.stringify(storedEvents))
    } catch (error) {
      console.warn('Failed to store conversion event locally:', error)
    }
  }

  // Debug panel (only shown in debug mode)
  if (!debug) return null

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-50 max-h-96 overflow-hidden">
      <div className="bg-gray-100 px-4 py-2 flex items-center justify-between">
        <h3 className="font-bold text-sm">Conversion Tracker Debug</h3>
        <button
          onClick={() => setIsTracking(!isTracking)}
          className={`px-2 py-1 rounded text-xs ${
            isTracking ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {isTracking ? 'ON' : 'OFF'}
        </button>
      </div>
      
      <div className="p-4 max-h-80 overflow-y-auto">
        <div className="mb-4">
          <div className="text-xs text-gray-600 mb-2">Session: {sessionId.substr(-8)}</div>
          <div className="text-xs text-gray-600 mb-2">Events: {conversionEvents.length}</div>
          <div className="text-xs text-gray-600 mb-2">
            Total Value: ${conversionEvents.reduce((sum, event) => sum + event.value, 0)}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Recent Events:</h4>
          {conversionEvents.slice(-5).reverse().map((event) => (
            <div key={event.id} className="bg-gray-50 rounded p-2 text-xs">
              <div className="font-semibold">{event.eventName}</div>
              <div className="text-gray-600">${event.value} • {new Date(event.timestamp).toLocaleTimeString()}</div>
              <div className="text-gray-500 truncate">{JSON.stringify(event.metadata)}</div>
            </div>
          ))}
          
          {conversionEvents.length === 0 && (
            <div className="text-gray-500 text-xs text-center py-4">
              No conversion events yet
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t">
          <h4 className="font-semibold text-sm mb-2">Test Conversions:</h4>
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => trackConversion('test_phone_call', { test: true }, 50)}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
            >
              Test Call
            </button>
            <button
              onClick={() => trackConversion('test_form_submit', { test: true }, 75)}
              className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
            >
              Test Form
            </button>
            <button
              onClick={() => trackConversion('test_calculator', { test: true }, 25)}
              className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs"
            >
              Test Calc
            </button>
            <button
              onClick={() => trackConversion('test_quote', { test: true }, 100)}
              className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
            >
              Test Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}