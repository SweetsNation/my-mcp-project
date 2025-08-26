'use client'

import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface ComparisonState {
  age: string
  state: string
  healthStatus: string
  monthlyBudget: string
  travelFrequency: string
  doctorPreference: string
}

interface PlanRecommendation {
  type: 'medicare-advantage' | 'medigap'
  planName: string
  monthlyPremium: number
  annualCost: string
  pros: string[]
  cons: string[]
  bestFor: string
  confidence: number
}

const stateData = {
  'hawaii': { name: 'Hawaii', avgMedigap: 102, penetration: 9 },
  'new-york': { name: 'New York', avgMedigap: 304, penetration: 21 },
  'california': { name: 'California', avgMedigap: 200, penetration: 25 },
  'florida': { name: 'Florida', avgMedigap: 150, penetration: 28 },
  'texas': { name: 'Texas', avgMedigap: 120, penetration: 30 }
}

export default function MedicareComparisonTool() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<ComparisonState>({
    age: '',
    state: '',
    healthStatus: '',
    monthlyBudget: '',
    travelFrequency: '',
    doctorPreference: ''
  })
  const [recommendations, setRecommendations] = useState<PlanRecommendation[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleInputChange = (field: keyof ComparisonState, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const generateRecommendations = (): PlanRecommendation[] => {
    const stateInfo = stateData[formData.state as keyof typeof stateData]
    const budget = parseInt(formData.monthlyBudget) || 0
    
    const recommendations: PlanRecommendation[] = []
    
    // Medicare Advantage Recommendation
    const maMonthly = budget < 100 ? 25 : 45
    const maAnnual = formData.healthStatus === 'poor' ? '$8,000-12,000' : 
                     formData.healthStatus === 'fair' ? '$3,500-6,500' : '$500-2,000'
    
    recommendations.push({
      type: 'medicare-advantage',
      planName: `${stateInfo?.name} Medicare Advantage`,
      monthlyPremium: maMonthly,
      annualCost: maAnnual,
      pros: [
        'Lower monthly premiums',
        'Often includes dental, vision, hearing',
        'Prescription drug coverage included',
        'Out-of-pocket maximum protection'
      ],
      cons: [
        'Network restrictions',
        formData.travelFrequency === 'frequently' ? 'Limited coverage when traveling' : 'Area-specific coverage',
        'Plan benefits can change annually',
        'May require referrals for specialists'
      ],
      bestFor: 'Budget-conscious beneficiaries who stay in their local area',
      confidence: formData.travelFrequency === 'rarely' && budget < 150 ? 85 : 65
    })

    // Medigap Recommendation  
    const medigapMonthly = stateInfo?.avgMedigap || 180
    const medigapAnnual = formData.healthStatus === 'poor' ? `$${(medigapMonthly * 12 + 500).toLocaleString()}-${(medigapMonthly * 12 + 1000).toLocaleString()}` :
                         formData.healthStatus === 'fair' ? `$${(medigapMonthly * 12 + 300).toLocaleString()}-${(medigapMonthly * 12 + 800).toLocaleString()}` :
                         `$${(medigapMonthly * 12 + 240).toLocaleString()}-${(medigapMonthly * 12 + 400).toLocaleString()}`

    recommendations.push({
      type: 'medigap',
      planName: `${stateInfo?.name} Medicare Supplement Plan G`,
      monthlyPremium: medigapMonthly,
      annualCost: medigapAnnual,
      pros: [
        'Nationwide coverage - any Medicare doctor',
        'Predictable costs with comprehensive coverage',
        formData.travelFrequency === 'frequently' ? 'Perfect for frequent travelers' : 'Travel coverage included',
        'No network restrictions or referrals needed',
        'Plan benefits guaranteed renewable'
      ],
      cons: [
        'Higher monthly premiums',
        'No prescription drug coverage (need separate Part D)',
        formData.state === 'new-york' ? 'Highest premiums nationally' : 'Premium varies by state',
        'Health underwriting during initial enrollment'
      ],
      bestFor: 'Those wanting comprehensive coverage and provider flexibility',
      confidence: formData.travelFrequency === 'frequently' || formData.doctorPreference === 'choice' ? 90 : 75
    })

    return recommendations.sort((a, b) => b.confidence - a.confidence)
  }

  const handleSubmit = () => {
    const recs = generateRecommendations()
    setRecommendations(recs)
    setShowResults(true)
  }

  const resetTool = () => {
    setStep(1)
    setFormData({
      age: '',
      state: '',
      healthStatus: '',
      monthlyBudget: '',
      travelFrequency: '',
      doctorPreference: ''
    })
    setShowResults(false)
    setRecommendations([])
  }

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Your Personalized Medicare Recommendations</h2>
            <p className="text-gray-600">Based on your preferences and {stateData[formData.state as keyof typeof stateData]?.name} market data</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {recommendations.map((rec, index) => (
              <div key={index} className={`border-2 rounded-lg p-6 ${rec.confidence > 80 ? 'border-green-400 bg-green-50' : 'border-blue-200 bg-blue-50'}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{rec.planName}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${rec.confidence > 80 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {rec.confidence}% Match
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900">${rec.monthlyPremium}/month</div>
                  <div className="text-sm text-gray-600">Estimated annual cost: {rec.annualCost}</div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-green-700 mb-2">✅ Advantages:</h4>
                  <ul className="text-sm space-y-1">
                    {rec.pros.map((pro, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-red-700 mb-2">⚠️ Considerations:</h4>
                  <ul className="text-sm space-y-1">
                    {rec.cons.map((con, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-1">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-white rounded border">
                  <h4 className="font-semibold text-gray-800 mb-1">🎯 Best For:</h4>
                  <p className="text-sm text-gray-700">{rec.bestFor}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-yellow-800 mb-3">💡 Key Insights for {stateData[formData.state as keyof typeof stateData]?.name}:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold">Average Medigap Premium:</span> ${stateData[formData.state as keyof typeof stateData]?.avgMedigap}/month
              </div>
              <div>
                <span className="font-semibold">Medigap Penetration:</span> {stateData[formData.state as keyof typeof stateData]?.penetration}% (opportunity for education)
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={resetTool}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
            >
              🔄 Start Over
            </button>
            <a
              href="/contact"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
            >
              📞 Get Expert Guidance
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🔍 Medicare Advantage vs. Supplement Comparison Tool</h2>
          <p className="text-gray-600">Get personalized recommendations based on your needs and location</p>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${(step / 6) * 100}%` }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Step {step} of 6</p>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">What's your age range?</h3>
            <div className="grid grid-cols-2 gap-4">
              {['65-69', '70-74', '75-79', '80+'].map(age => (
                <button
                  key={age}
                  onClick={() => {
                    handleInputChange('age', age)
                    setStep(2)
                  }}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
                >
                  {age} years old
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Which state are you in?</h3>
            <div className="space-y-3">
              {Object.entries(stateData).map(([key, state]) => (
                <button
                  key={key}
                  onClick={() => {
                    handleInputChange('state', key)
                    setStep(3)
                  }}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors text-left flex justify-between"
                >
                  <span>{state.name}</span>
                  <span className="text-sm text-gray-500">Avg Medigap: ${state.avgMedigap}/mo</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">How would you describe your health?</h3>
            <div className="space-y-3">
              {[
                { value: 'excellent', label: 'Excellent - Rarely see doctors', desc: 'Annual checkups only' },
                { value: 'good', label: 'Good - Occasional visits', desc: 'A few specialists, manageable conditions' },
                { value: 'fair', label: 'Fair - Regular medical care', desc: 'Multiple specialists, ongoing treatments' },
                { value: 'poor', label: 'Poor - Frequent medical needs', desc: 'Complex conditions, regular hospital visits' }
              ].map(health => (
                <button
                  key={health.value}
                  onClick={() => {
                    handleInputChange('healthStatus', health.value)
                    setStep(4)
                  }}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors text-left"
                >
                  <div className="font-semibold">{health.label}</div>
                  <div className="text-sm text-gray-600">{health.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">What's your monthly healthcare budget?</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '50', label: 'Under $50/month', desc: 'Budget-focused' },
                { value: '100', label: '$50-100/month', desc: 'Moderate budget' },
                { value: '200', label: '$100-200/month', desc: 'Flexible budget' },
                { value: '300', label: '$200+ per month', desc: 'Premium coverage' }
              ].map(budget => (
                <button
                  key={budget.value}
                  onClick={() => {
                    handleInputChange('monthlyBudget', budget.value)
                    setStep(5)
                  }}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
                >
                  <div className="font-semibold">{budget.label}</div>
                  <div className="text-xs text-gray-600">{budget.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">How often do you travel?</h3>
            <div className="space-y-3">
              {[
                { value: 'rarely', label: 'Rarely travel', desc: 'Stay local most of the time' },
                { value: 'occasionally', label: 'Occasional travel', desc: 'Few trips per year' },
                { value: 'frequently', label: 'Frequent traveler', desc: 'Multiple trips, snowbird, or multi-state resident' }
              ].map(travel => (
                <button
                  key={travel.value}
                  onClick={() => {
                    handleInputChange('travelFrequency', travel.value)
                    setStep(6)
                  }}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors text-left"
                >
                  <div className="font-semibold">{travel.label}</div>
                  <div className="text-sm text-gray-600">{travel.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Doctor preference?</h3>
            <div className="space-y-3">
              {[
                { value: 'current', label: 'Keep current doctors', desc: 'Have established relationships' },
                { value: 'choice', label: 'Want choice of any doctor', desc: 'Prefer maximum flexibility' },
                { value: 'network', label: 'Network is fine', desc: 'Comfortable with plan networks' }
              ].map(pref => (
                <button
                  key={pref.value}
                  onClick={() => {
                    handleInputChange('doctorPreference', pref.value)
                    handleSubmit()
                  }}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors text-left"
                >
                  <div className="font-semibold">{pref.label}</div>
                  <div className="text-sm text-gray-600">{pref.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              ← Back
            </button>
          )}
          <div className="flex-grow"></div>
          {step < 6 && (
            <button
              disabled={!Object.values(formData)[step - 1]}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              onClick={() => setStep(step + 1)}
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}