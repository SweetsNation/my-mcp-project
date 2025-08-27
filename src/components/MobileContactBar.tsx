'use client'

import { useState } from 'react'

interface MobileContactBarProps {
  county: string
  phoneNumber?: string
}

export default function MobileContactBar({ 
  county, 
  phoneNumber = '331-343-2584' 
}: MobileContactBarProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handlePhoneClick = () => {
    // Track phone call conversion
    if (typeof window !== 'undefined' && window.trackPhoneCall) {
      window.trackPhoneCall(county, 'mobile-contact-bar')
    }
    
    if (typeof window !== 'undefined' && window.fbTrackContact) {
      window.fbTrackContact('phone', county)
    }
  }

  const handleTextClick = () => {
    // Track text message interest
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'text_message_click', {
        event_category: 'Contact',
        event_label: 'Mobile Contact Bar',
        custom_parameter_1: county
      })
    }
  }

  return (
    <>
      {/* Fixed Mobile Contact Bar - Only visible on mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-green-600 text-white z-40 lg:hidden">
        <div className="flex items-center justify-between p-4">
          <div className="flex-1">
            <div className="text-sm font-semibold">
              Free {county} Health Insurance Quote
            </div>
            <div className="text-xs opacity-90">
              Licensed agents • Save up to $705/year
            </div>
          </div>
          
          <div className="flex space-x-2">
            <a
              href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
              onClick={handlePhoneClick}
              className="bg-yellow-400 text-blue-800 px-4 py-2 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors flex items-center"
            >
              📞 Call Now
            </a>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-white bg-opacity-20 p-2 rounded-lg hover:bg-opacity-30 transition-colors"
            >
              {isExpanded ? '×' : '💬'}
            </button>
          </div>
        </div>
        
        {/* Expanded Contact Options */}
        {isExpanded && (
          <div className="border-t border-white border-opacity-20 p-4 space-y-3">
            <a
              href={`sms:${phoneNumber.replace(/[^0-9]/g, '')}`}
              onClick={handleTextClick}
              className="flex items-center justify-center w-full bg-white bg-opacity-10 py-3 rounded-lg font-semibold hover:bg-opacity-20 transition-colors"
            >
              💬 Text Us
            </a>
            
            <button
              onClick={() => {
                // Scroll to contact form
                const contactForm = document.getElementById('contact-form')
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' })
                  setIsExpanded(false)
                }
              }}
              className="flex items-center justify-center w-full bg-white bg-opacity-10 py-3 rounded-lg font-semibold hover:bg-opacity-20 transition-colors"
            >
              📝 Get Quote Form
            </button>
            
            <a
              href={`mailto:info@el-mag.com?subject=${encodeURIComponent(`${county} Health Insurance Inquiry`)}`}
              className="flex items-center justify-center w-full bg-white bg-opacity-10 py-3 rounded-lg font-semibold hover:bg-opacity-20 transition-colors"
            >
              📧 Email Us
            </a>
          </div>
        )}
      </div>
      
      {/* Spacer to prevent content overlap on mobile */}
      <div className="h-20 lg:hidden"></div>
    </>
  )
}