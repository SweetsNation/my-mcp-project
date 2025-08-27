'use client'

import { useState } from 'react'

interface EnhancedContactFormProps {
  county: string
  state: string
  formType?: 'quote' | 'contact' | 'callback'
  demographic?: string
}

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  zipCode: string
  age: string
  familySize: string
  currentInsurance: string
  employerCoverage: string
  preferredContact: string
  bestTimeToCall: string
  specificQuestions: string
  leadSource: string
  smsOptIn: boolean
}

export default function EnhancedContactForm({ 
  county, 
  state, 
  formType = 'contact',
  demographic = 'general' 
}: EnhancedContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    age: '',
    familySize: '1',
    currentInsurance: '',
    employerCoverage: '',
    preferredContact: 'phone',
    bestTimeToCall: 'morning',
    specificQuestions: '',
    leadSource: 'website',
    smsOptIn: false
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showExitIntent, setShowExitIntent] = useState(false)

  const totalSteps = formType === 'quote' ? 3 : 2

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.email && formData.phone)
      case 2:
        return !!(formData.zipCode && formData.age)
      case 3:
        return true // Optional step
      default:
        return false
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
      
      // Track step progression
      if (typeof window !== 'undefined' && window.trackFormSubmission) {
        window.trackFormSubmission(`step-${currentStep}-complete`, county, true)
      }
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          county,
          state,
          formType,
          demographic,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        
        // Track successful submission
        if (typeof window !== 'undefined') {
          if (window.trackLead) {
            const leadValue = formType === 'quote' ? 50 : 25
            window.trackLead(formType, county, leadValue)
          }
          
          if (window.trackFormSubmission) {
            window.trackFormSubmission(formType, county, true)
          }
          
          if (window.fbTrackLead) {
            window.fbTrackLead(county, formType === 'quote' ? 50 : 25)
          }
        }
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your information. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Exit intent detection
  React.useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isSubmitted && !showExitIntent) {
        setShowExitIntent(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [isSubmitted, showExitIntent])

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✅</span>
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
        <p className="text-green-700 mb-6">
          Your information has been submitted successfully. A licensed {state} health insurance agent 
          will contact you within 24 hours to discuss your {county} coverage options.
        </p>
        
        <div className="bg-white rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">What Happens Next?</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-2xl mb-2">📞</div>
              <strong>Agent Contact</strong>
              <p className="text-gray-600">Within 24 hours</p>
            </div>
            <div>
              <div className="text-2xl mb-2">💰</div>
              <strong>Personalized Quote</strong>
              <p className="text-gray-600">Customized for your needs</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📋</div>
              <strong>Plan Comparison</strong>
              <p className="text-gray-600">Multiple options reviewed</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <p className="text-sm text-gray-600">
            Need immediate assistance? Call us now:
          </p>
          <a
            href="tel:331-343-2584"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            onClick={() => {
              if (typeof window !== 'undefined' && window.trackPhoneCall) {
                window.trackPhoneCall(county, 'form-confirmation')
              }
            }}
          >
            📞 Call Now: 331-E-HEALTH
          </a>
        </div>
      </div>
    )
  }

  const getFormTitle = () => {
    switch (formType) {
      case 'quote':
        return `Get Your Free ${county} Health Insurance Quote`
      case 'callback':
        return `Request a Callback from ${county} Health Insurance Experts`
      default:
        return `Get ${county} Health Insurance Information`
    }
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{getFormTitle()}</h3>
          <p className="text-gray-600">
            {formType === 'quote' 
              ? 'Get personalized quotes from multiple insurance companies'
              : 'Speak with a licensed agent about your coverage options'
            }
          </p>
          
          {/* Progress bar */}
          <div className="mt-4 mb-6">
            <div className="flex justify-center items-center space-x-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    i + 1 <= currentStep 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {i + 1}
                  </div>
                  {i < totalSteps - 1 && (
                    <div className={`w-8 h-1 mx-2 ${
                      i + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <div className="mt-2">
                  <label className="flex items-center text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={formData.smsOptIn}
                      onChange={(e) => handleInputChange('smsOptIn', e.target.checked)}
                      className="mr-2"
                    />
                    Send me text message updates about my application
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Coverage Information */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ZIP Code*
                  </label>
                  <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    maxLength={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Age*
                  </label>
                  <select
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select age</option>
                    {Array.from({ length: 45 }, (_, i) => i + 18).map(age => (
                      <option key={age} value={age}>{age}</option>
                    ))}
                    <option value="64">64+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How many people need coverage?
                </label>
                <select
                  value={formData.familySize}
                  onChange={(e) => handleInputChange('familySize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="1">Just me</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5+ people</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Do you currently have health insurance?
                </label>
                <select
                  value={formData.currentInsurance}
                  onChange={(e) => handleInputChange('currentInsurance', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select option</option>
                  <option value="none">No insurance</option>
                  <option value="marketplace">Marketplace plan</option>
                  <option value="employer">Employer plan</option>
                  <option value="medicare">Medicare</option>
                  <option value="medicaid">Medicaid</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Additional Information (for quote requests) */}
          {currentStep === 3 && formType === 'quote' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                      className="mr-2"
                    />
                    Phone
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                      className="mr-2"
                    />
                    Email
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="text"
                      checked={formData.preferredContact === 'text'}
                      onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                      className="mr-2"
                    />
                    Text Message
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Best Time to Call
                </label>
                <select
                  value={formData.bestTimeToCall}
                  onChange={(e) => handleInputChange('bestTimeToCall', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="morning">Morning (8 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Any specific questions or concerns?
                </label>
                <textarea
                  value={formData.specificQuestions}
                  onChange={(e) => handleInputChange('specificQuestions', e.target.value)}
                  rows={4}
                  placeholder="Tell us about your healthcare needs, budget concerns, or any other questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                ← Previous
              </button>
            ) : (
              <div></div>
            )}
            
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!validateStep(currentStep)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Next Step →
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting || !validateStep(currentStep)}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  `🚀 ${formType === 'quote' ? 'Get My Quote' : 'Submit Request'}`
                )}
              </button>
            )}
          </div>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            By submitting this form, you agree to be contacted by a licensed insurance agent. 
            Your information is secure and will never be shared with third parties.
          </p>
        </div>
      </div>

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4 relative">
            <button
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wait! Don't Miss Out</h3>
              <p className="text-gray-600 mb-4">
                You could save up to $705 per year on health insurance. Get your free quote before leaving!
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => setShowExitIntent(false)}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
                >
                  Get My Free Quote Now
                </button>
                <button
                  onClick={() => setShowExitIntent(false)}
                  className="w-full text-gray-500 text-sm hover:text-gray-700"
                >
                  No thanks, I don't want to save money
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}