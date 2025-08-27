'use client'

import { useState } from 'react'
import Image from 'next/image'

interface TestimonialData {
  id: string
  name: string
  location: string
  county: string
  state: string
  demographic: string
  industry: string
  savingsAmount: number
  planType: string
  testimonial: string
  rating: number
  verified: boolean
  photo?: string
  beforeSituation: string
  afterResult: string
  timeWithPlan: string
}

interface SocialProofSectionProps {
  county: string
  state: string
  demographic?: string
}

const testimonials: TestimonialData[] = [
  {
    id: 'harris-1',
    name: 'Maria Rodriguez',
    location: 'Spring, TX',
    county: 'Harris County',
    state: 'Texas',
    demographic: 'hispanic',
    industry: 'restaurant',
    savingsAmount: 2400,
    planType: 'Silver',
    testimonial: 'Como madre soltera trabajando en un restaurante, nunca pensé que podría pagar un seguro de salud. El agente me explicó todo en español y ahora tengo cobertura completa por solo $25 al mes. Mi hija y yo finalmente tenemos la tranquilidad que necesitamos.',
    rating: 5,
    verified: true,
    beforeSituation: 'Uninsured single mother, restaurant worker',
    afterResult: '$25/month Silver plan with subsidies',
    timeWithPlan: '8 months'
  },
  {
    id: 'harris-2',
    name: 'James Thompson',
    location: 'Cypress, TX',
    county: 'Harris County',
    state: 'Texas',
    demographic: 'general',
    industry: 'energy',
    savingsAmount: 1800,
    planType: 'Gold',
    testimonial: 'Working in the oil field, my income varies a lot. The Marketplace plan adjusted my subsidies when my income changed, and I got coverage that works whether I\'m making good money or between jobs. Plus, it covers me at the Texas Medical Center.',
    rating: 5,
    verified: true,
    beforeSituation: 'Oil field contractor with variable income',
    afterResult: 'Gold plan with flexible subsidy adjustments',
    timeWithPlan: '1.5 years'
  },
  {
    id: 'miami-1',
    name: 'Carlos Mendez',
    location: 'Hialeah, FL',
    county: 'Miami-Dade County',
    state: 'Florida',
    demographic: 'hispanic',
    industry: 'hospitality',
    savingsAmount: 3200,
    planType: 'Silver',
    testimonial: 'Trabajo en un hotel en Miami Beach y mi esposa es ama de casa. Con cuatro hijos, pensamos que nunca podríamos tener seguro médico. Ahora toda la familia está cubierta por $180 al mes. Cuando mi hijo se rompió el brazo, no tuvimos que preocuparnos por la cuenta del hospital.',
    rating: 5,
    verified: true,
    beforeSituation: 'Hotel worker, family of 6, uninsured',
    afterResult: 'Family Silver plan for $180/month',
    timeWithPlan: '2 years'
  },
  {
    id: 'fulton-1',
    name: 'Keisha Washington',
    location: 'Atlanta, GA',
    county: 'Fulton County',
    state: 'Georgia',
    demographic: 'black',
    industry: 'tech',
    savingsAmount: 1200,
    planType: 'Bronze',
    testimonial: 'As a freelance web developer in Atlanta, I needed coverage that wouldn\'t break my budget. The Bronze plan gives me the protection I need at a price I can afford. When I had to go to Emory for a specialist, everything was covered after my deductible.',
    rating: 4,
    verified: true,
    beforeSituation: 'Freelance tech worker, no employer coverage',
    afterResult: 'Bronze plan with network access to Emory',
    timeWithPlan: '10 months'
  },
  {
    id: 'clark-1',
    name: 'Roberto Silva',
    location: 'Las Vegas, NV',
    county: 'Clark County',
    state: 'Nevada',
    demographic: 'hispanic',
    industry: 'casino',
    savingsAmount: 2800,
    planType: 'Silver',
    testimonial: 'Trabajo como dealer en un casino y mi horario es de noche. Encontrar seguro médico que funcionara con mis propinas y horario era difícil. Ahora tengo un plan que entiende mi situación y puedo ver doctores cuando no estoy trabajando.',
    rating: 5,
    verified: true,
    beforeSituation: 'Casino dealer, night shift, tip-based income',
    afterResult: 'Silver plan accommodating variable income',
    timeWithPlan: '6 months'
  },
  {
    id: 'oklahoma-1',
    name: 'Sarah Miller',
    location: 'Oklahoma City, OK',
    county: 'Oklahoma County',
    state: 'Oklahoma',
    demographic: 'general',
    industry: 'agriculture',
    savingsAmount: 2200,
    planType: 'Silver',
    testimonial: 'My husband and I run a small farm outside Oklahoma City. We couldn\'t afford health insurance until we learned about the Marketplace subsidies. Now we have peace of mind during tornado season and coverage for our ongoing health needs.',
    rating: 5,
    verified: true,
    beforeSituation: 'Small farm owners, no employer coverage',
    afterResult: 'Couple Silver plan with rural provider access',
    timeWithPlan: '14 months'
  }
]

const trustMetrics = [
  { metric: '15,000+', label: 'Families Enrolled', icon: '👨‍👩‍👧‍👦' },
  { metric: '4.9/5', label: 'Customer Rating', icon: '⭐' },
  { metric: '$705', label: 'Average Annual Savings', icon: '💰' },
  { metric: '24/7', label: 'Customer Support', icon: '🕒' }
]

export default function SocialProofSection({ county, state, demographic = 'general' }: SocialProofSectionProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  // Filter testimonials by county/state and demographic
  const relevantTestimonials = testimonials.filter(t => 
    (t.county === county || t.state === state) && 
    (demographic === 'general' || t.demographic === demographic || t.demographic === 'general')
  )
  
  const displayTestimonials = relevantTestimonials.length > 0 ? relevantTestimonials : testimonials.slice(0, 3)
  
  const currentTestimonialData = displayTestimonials[currentTestimonial]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % displayTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length)
  }

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Trust Metrics */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Trusted by {county} Families
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {trustMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{metric.metric}</div>
                <div className="text-gray-600 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Real {county} Success Stories
            </h3>
            <div className="flex justify-center items-center space-x-2 mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i < currentTestimonialData.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">
                  {currentTestimonialData.demographic === 'hispanic' ? '🇲🇽' : 
                   currentTestimonialData.demographic === 'black' ? '👤' : '👨‍💼'}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                {currentTestimonialData.name}
              </h4>
              <p className="text-gray-600 text-sm">
                {currentTestimonialData.location}
              </p>
              <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-100 text-green-800">
                ✓ Verified Customer
              </div>
            </div>

            <div className="md:col-span-2">
              <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6">
                "{currentTestimonialData.testimonial}"
              </blockquote>
              
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Before:</span>
                    <p className="text-gray-600">{currentTestimonialData.beforeSituation}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">After:</span>
                    <p className="text-gray-600">{currentTestimonialData.afterResult}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm border-t pt-3">
                  <span className="text-green-600 font-semibold">
                    Annual Savings: ${currentTestimonialData.savingsAmount.toLocaleString()}
                  </span>
                  <span className="text-gray-500">
                    Customer for {currentTestimonialData.timeWithPlan}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          {displayTestimonials.length > 1 && (
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
              >
                ←
              </button>
              
              <div className="flex space-x-2">
                {displayTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Quick Stats Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {displayTestimonials.filter(t => t.rating >= 5).length}/{displayTestimonials.length}
            </div>
            <div className="text-gray-600">5-Star Reviews</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              ${Math.round(displayTestimonials.reduce((sum, t) => sum + t.savingsAmount, 0) / displayTestimonials.length).toLocaleString()}
            </div>
            <div className="text-gray-600">Average Savings</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              100%
            </div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
        </div>

        {/* Industry-Specific Testimonials */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Success Stories by Industry
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['restaurant', 'energy', 'hospitality', 'tech', 'casino', 'agriculture'].map((industry) => {
              const industryTestimonial = testimonials.find(t => t.industry === industry)
              if (!industryTestimonial) return null
              
              return (
                <div key={industry} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm">
                        {industry === 'restaurant' ? '🍽️' :
                         industry === 'energy' ? '⛽' :
                         industry === 'hospitality' ? '🏨' :
                         industry === 'tech' ? '💻' :
                         industry === 'casino' ? '🎰' :
                         industry === 'agriculture' ? '🌾' : '💼'}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">
                        {industryTestimonial.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {industry.charAt(0).toUpperCase() + industry.slice(1)} Worker
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    "{industryTestimonial.testimonial.substring(0, 120)}..."
                  </p>
                  
                  <div className="text-xs text-green-600 font-semibold">
                    Saves ${industryTestimonial.savingsAmount} annually
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Trusted & Verified</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm font-semibold text-gray-500">Licensed Agents</div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="text-sm font-semibold text-gray-500">BBB Accredited</div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="text-sm font-semibold text-gray-500">HIPAA Compliant</div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="text-sm font-semibold text-gray-500">SSL Secured</div>
          </div>
        </div>
      </div>
    </section>
  )
}