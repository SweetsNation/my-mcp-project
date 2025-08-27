'use client'

import { useState } from 'react'

interface SubsidyCalculatorProps {
  county: string
  state: string
}

interface CalculatorState {
  age: string
  income: string
  familySize: string
  zipCode: string
  employerCoverage: string
}

export default function SubsidyCalculator({ county, state }: SubsidyCalculatorProps) {
  const [formData, setFormData] = useState<CalculatorState>({
    age: '',
    income: '',
    familySize: '1',
    zipCode: '',
    employerCoverage: 'no'
  })
  
  const [results, setResults] = useState<any>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  // Federal Poverty Level data for 2025
  const fplData = {
    1: 15060,
    2: 20440,
    3: 25820,
    4: 31200,
    5: 36580,
    6: 41960,
    7: 47340,
    8: 52720
  }

  // State-specific premium data (average monthly premiums by age)
  const statePremiums: { [key: string]: { [key: string]: number } } = {
    'Texas': {
      'bronze': 280,
      'silver': 350,
      'gold': 450
    },
    'Florida': {
      'bronze': 320,
      'silver': 420,
      'gold': 540
    },
    'Georgia': {
      'bronze': 310,
      'silver': 390,
      'gold': 500
    },
    'Nevada': {
      'bronze': 295,
      'silver': 375,
      'gold': 480
    },
    'Oklahoma': {
      'bronze': 285,
      'silver': 360,
      'gold': 465
    }
  }

  const calculateSubsidy = () => {
    setIsCalculating(true)
    
    // Simulate calculation delay
    setTimeout(() => {
      const income = parseFloat(formData.income)
      const familySize = parseInt(formData.familySize)
      const age = parseInt(formData.age)
      
      const fpl = fplData[familySize as keyof typeof fplData] || fplData[8] + ((familySize - 8) * 5380)
      const fplPercentage = Math.round((income / fpl) * 100)
      
      // Calculate subsidies based on ACA formula
      let subsidyAmount = 0
      let maxPremiumPercentage = 0
      
      if (fplPercentage <= 150) {
        maxPremiumPercentage = 4.0
      } else if (fplPercentage <= 200) {
        maxPremiumPercentage = 6.0
      } else if (fplPercentage <= 250) {
        maxPremiumPercentage = 8.5
      } else if (fplPercentage <= 300) {
        maxPremiumPercentage = 9.5
      } else if (fplPercentage <= 400) {
        maxPremiumPercentage = 9.5
      } else {
        maxPremiumPercentage = 0 // No subsidy
      }
      
      const maxPremiumAmount = (income * (maxPremiumPercentage / 100)) / 12
      
      // Get state premiums
      const premiums = statePremiums[state] || statePremiums['Texas']
      
      // Apply age factor (simplified)
      const ageFactor = age < 30 ? 0.8 : age < 40 ? 1.0 : age < 50 ? 1.2 : age < 60 ? 1.5 : 1.8
      
      const adjustedPremiums = {
        bronze: Math.round(premiums.bronze * ageFactor),
        silver: Math.round(premiums.silver * ageFactor),
        gold: Math.round(premiums.gold * ageFactor)
      }
      
      // Calculate subsidies for each plan
      const planResults = Object.entries(adjustedPremiums).map(([planType, premium]) => {
        const monthlySubsidy = maxPremiumPercentage > 0 ? Math.max(0, premium - maxPremiumAmount) : 0
        const yourCost = premium - monthlySubsidy
        
        return {
          planType: planType.charAt(0).toUpperCase() + planType.slice(1),
          premium,
          subsidy: Math.round(monthlySubsidy),
          yourCost: Math.round(Math.max(0, yourCost)),
          annualSavings: Math.round(monthlySubsidy * 12)
        }
      })
      
      const calculationResults = {
        eligible: fplPercentage >= 100 && fplPercentage <= 400,
        fplPercentage,
        maxPremiumPercentage,
        plans: planResults,
        totalAnnualSavings: Math.round((planResults[1].subsidy * 12)), // Based on Silver plan
        zipCode: formData.zipCode
      }
      
      setResults(calculationResults)
      setIsCalculating(false)
      
      // Track calculator usage
      if (typeof window !== 'undefined' && window.trackCalculatorUsage) {
        window.trackCalculatorUsage('Subsidy Calculator', county, 
          calculationResults.eligible ? 'eligible' : 'not-eligible')
      }
      
      // Track Facebook lead event
      if (typeof window !== 'undefined' && window.fbTrackLead) {
        window.fbTrackLead(county, calculationResults.totalAnnualSavings / 50) // Convert to lead value
      }
      
    }, 1500)
  }

  const handleInputChange = (field: keyof CalculatorState, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const isFormValid = formData.age && formData.income && formData.zipCode

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 shadow-lg">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {county} Health Insurance Subsidy Calculator
        </h3>
        <p className="text-gray-600 text-lg">
          Find out how much you can save with enhanced tax credits
        </p>
        <div className="flex justify-center space-x-6 text-sm text-green-600 mt-4">
          <div className="flex items-center">
            <span className="text-green-500 mr-1">✓</span>
            <span>Instant Results</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-1">✓</span>
            <span>2025 Rates</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-1">✓</span>
            <span>All Plan Types</span>
          </div>
        </div>
      </div>

      {!results ? (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
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
                <option value="">Select your age</option>
                {Array.from({ length: 45 }, (_, i) => i + 18).map(age => (
                  <option key={age} value={age}>{age}</option>
                ))}
                <option value="64">64+</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Annual Household Income*
              </label>
              <select
                value={formData.income}
                onChange={(e) => handleInputChange('income', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select income range</option>
                <option value="15000">Under $15,000</option>
                <option value="20000">$15,000 - $25,000</option>
                <option value="30000">$25,000 - $35,000</option>
                <option value="40000">$35,000 - $45,000</option>
                <option value="50000">$45,000 - $55,000</option>
                <option value="60000">$55,000 - $65,000</option>
                <option value="70000">$65,000 - $75,000</option>
                <option value="80000">$75,000 - $85,000</option>
                <option value="90000">$85,000 - $95,000</option>
                <option value="100000">$95,000+</option>
              </select>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Family Size*
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
                <option value="5">5 people</option>
                <option value="6">6+ people</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ZIP Code*
              </label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                placeholder="Enter your ZIP code"
                maxLength={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Do you have access to employer health insurance?
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="no"
                  checked={formData.employerCoverage === 'no'}
                  onChange={(e) => handleInputChange('employerCoverage', e.target.value)}
                  className="mr-2"
                />
                No
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="yes"
                  checked={formData.employerCoverage === 'yes'}
                  onChange={(e) => handleInputChange('employerCoverage', e.target.value)}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="unaffordable"
                  checked={formData.employerCoverage === 'unaffordable'}
                  onChange={(e) => handleInputChange('employerCoverage', e.target.value)}
                  className="mr-2"
                />
                Yes, but unaffordable
              </label>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={calculateSubsidy}
              disabled={!isFormValid || isCalculating}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Calculating Your Savings...
                </span>
              ) : (
                '💰 Calculate My Savings'
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {results.eligible ? (
            <>
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                <h4 className="text-2xl font-bold text-green-800 mb-2">
                  🎉 Great News! You Qualify for Subsidies
                </h4>
                <p className="text-green-700 text-lg">
                  You could save up to <strong>${results.totalAnnualSavings.toLocaleString()}</strong> per year!
                </p>
                <p className="text-green-600 text-sm mt-2">
                  Your income is {results.fplPercentage}% of the Federal Poverty Level
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {results.plans.map((plan: any, index: number) => (
                  <div key={plan.planType} className={`border-2 rounded-lg p-6 ${
                    index === 1 ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
                  }`}>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">
                      {plan.planType} Plan
                      {index === 1 && <span className="text-blue-600 text-sm ml-2">(Most Popular)</span>}
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Full Premium:</span>
                        <span className="font-semibold">${plan.premium}/month</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Your Subsidy:</span>
                        <span className="font-semibold">-${plan.subsidy}/month</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between text-lg font-bold">
                        <span>Your Cost:</span>
                        <span className="text-blue-600">${plan.yourCost}/month</span>
                      </div>
                      <div className="text-center bg-green-100 rounded p-2 mt-3">
                        <span className="text-green-800 font-semibold">
                          Annual Savings: ${plan.annualSavings}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold text-yellow-800 mb-2">
                ⚠️ You May Not Qualify for Premium Subsidies
              </h4>
              <p className="text-yellow-700">
                Your income appears to be {results.fplPercentage > 400 ? 'above' : 'below'} the subsidy range. 
                However, you may still have other options.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Speak with a Licensed Agent
              </button>
            </div>
          )}
          
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              These are estimates based on 2025 average premiums in {state}. Actual costs may vary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setResults(null)
                  setFormData({
                    age: '',
                    income: '',
                    familySize: '1',
                    zipCode: '',
                    employerCoverage: 'no'
                  })
                }}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600"
              >
                Calculate Again
              </button>
              <button 
                onClick={() => {
                  // Track conversion
                  if (typeof window !== 'undefined' && window.trackQuoteRequest) {
                    window.trackQuoteRequest(county, 'calculator-user', results.plans[1]?.planType || 'unknown')
                  }
                }}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
              >
                Get Personalized Quote
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8 bg-white rounded-lg p-6 border-2 border-blue-100">
        <h4 className="font-semibold text-blue-800 mb-3 text-center">🛡️ Next Steps</h4>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl mb-2">📞</div>
            <strong>Speak with an Expert</strong>
            <p className="text-gray-600">Get personalized guidance from licensed {state} agents</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">📋</div>
            <strong>Compare All Options</strong>
            <p className="text-gray-600">Review plans from multiple insurance companies</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">✅</div>
            <strong>Enroll Today</strong>
            <p className="text-gray-600">Start your coverage as soon as next month</p>
          </div>
        </div>
      </div>
    </div>
  )
}