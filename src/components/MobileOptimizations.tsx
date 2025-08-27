'use client'

import { useState, useEffect } from 'react'

interface MobileOptimizationsProps {
  county: string
  phoneNumber?: string
}

export default function MobileOptimizations({ county, phoneNumber = '331-343-2584' }: MobileOptimizationsProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      setIsScrolled(currentScrollY > 50)
      setShowScrollToTop(currentScrollY > 500)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'scroll_to_top', {
        event_category: 'User Interaction',
        event_label: 'Mobile Optimization'
      })
    }
  }

  const handleQuickAction = (action: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'quick_action_used', {
        event_category: 'Mobile UX',
        event_label: action,
        custom_parameter_1: county
      })
    }

    switch (action) {
      case 'calculator':
        const calculator = document.getElementById('subsidy-calculator')
        if (calculator) {
          calculator.scrollIntoView({ behavior: 'smooth' })
        }
        break
      case 'testimonials':
        const testimonials = document.getElementById('social-proof')
        if (testimonials) {
          testimonials.scrollIntoView({ behavior: 'smooth' })
        }
        break
      case 'contact':
        const contactForm = document.getElementById('contact-form')
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: 'smooth' })
        }
        break
    }
  }

  if (!isMobile) return null

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed right-4 bottom-24 z-40 flex flex-col space-y-2">
        {/* Quick Actions Menu */}
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => handleQuickAction('calculator')}
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
            title="Quick Quote Calculator"
          >
            <span className="text-white text-lg">🧮</span>
          </button>
          
          <button
            onClick={() => handleQuickAction('testimonials')}
            className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
            title="Success Stories"
          >
            <span className="text-white text-lg">⭐</span>
          </button>
          
          <button
            onClick={() => handleQuickAction('contact')}
            className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition-colors"
            title="Get Quote Form"
          >
            <span className="text-white text-lg">📝</span>
          </button>
        </div>

        {/* Scroll to Top */}
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-all duration-300"
            title="Back to Top"
          >
            <span className="text-white text-lg">↑</span>
          </button>
        )}
      </div>

      {/* Mobile-Optimized Sticky Header */}
      {isScrolled && (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-900">
                {county} Health Insurance
              </div>
              <div className="text-xs text-gray-600">
                Save up to $705/year
              </div>
            </div>
            
            <div className="flex space-x-2">
              <a
                href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
                className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.trackPhoneCall) {
                    window.trackPhoneCall(county, 'sticky-header')
                  }
                }}
              >
                📞 Call
              </a>
              
              <button
                onClick={() => handleQuickAction('contact')}
                className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 ease-out"
          style={{
            width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
          }}
        />
      </div>

      {/* Mobile-Specific Typography Enhancement */}
      <style jsx global>{`
        @media (max-width: 768px) {
          body {
            font-size: 16px;
            line-height: 1.6;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
          
          h1 {
            font-size: 1.75rem;
            line-height: 1.3;
            margin-bottom: 1rem;
          }
          
          h2 {
            font-size: 1.5rem;
            line-height: 1.4;
            margin-bottom: 0.875rem;
          }
          
          h3 {
            font-size: 1.25rem;
            line-height: 1.4;
            margin-bottom: 0.75rem;
          }
          
          p {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 1rem;
          }
          
          /* Improve touch targets */
          button, a, input, select, textarea {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Better form styling */
          input, select, textarea {
            font-size: 16px; /* Prevents zoom on iOS */
            padding: 12px;
            border-radius: 8px;
          }
          
          /* Optimize table display */
          table {
            font-size: 14px;
          }
          
          .mobile-scroll-margin {
            scroll-margin-top: 80px;
          }
        }
      `}</style>
    </>
  )
}