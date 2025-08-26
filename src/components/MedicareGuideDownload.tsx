'use client'

import { useState } from 'react'

interface MedicareGuideDownloadProps {
  guideTopic: string
  guideTitle: string
  guideDescription: string
  downloadUrl: string
  state?: string
  county?: string
  demographic?: string
}

export default function MedicareGuideDownload({ 
  guideTopic, 
  guideTitle, 
  guideDescription, 
  downloadUrl,
  state,
  county,
  demographic 
}: MedicareGuideDownloadProps) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // In a real implementation, this would send to your CRM/email service
    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phone,
          guideTopic,
          guideTitle,
          state,
          county,
          demographic,
          timestamp: new Date().toISOString(),
          source: 'lead-magnet-download'
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // In production, initiate actual download
        window.open(downloadUrl, '_blank')
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // Still show success and provide download for user experience
      setIsSubmitted(true)
      window.open(downloadUrl, '_blank')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✅</span>
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-3">Download Starting!</h3>
        <p className="text-green-700 mb-4">
          Your {guideTitle} should download automatically. If it doesn't, 
          <a href={downloadUrl} className="text-green-600 underline ml-1">click here</a>.
        </p>
        <div className="bg-white rounded-lg p-4 border border-green-200">
          <p className="text-sm text-gray-600 mb-2">
            <strong>Next Steps:</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 text-left">
            <li>• Review your personalized Medicare guide</li>
            <li>• Watch for follow-up emails with additional resources</li>
            <li>• Schedule a free consultation when ready</li>
            <li>• Call <a href="tel:331-343-2584" className="text-blue-600 underline">331-343-2584</a> with questions</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">📚</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{guideTitle}</h3>
        <p className="text-gray-600 mb-4">{guideDescription}</p>
        <div className="flex justify-center space-x-6 text-sm text-gray-500 mb-6">
          <div className="flex items-center">
            <span className="text-green-500 mr-1">✓</span>
            <span>Free Download</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-1">✓</span>
            <span>Instant Access</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-1">✓</span>
            <span>Expert Insights</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Preparing Your Download...
            </span>
          ) : (
            `📥 Download ${guideTitle}`
          )}
        </button>
        
        <p className="text-xs text-gray-500 text-center">
          By downloading, you agree to receive helpful Medicare information via email. 
          Unsubscribe anytime. We never share your information.
        </p>
      </form>
    </div>
  )
}