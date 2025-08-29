'use client'

import { useState, useEffect } from 'react'
import ContactForm from '@/components/ContactForm'
import SocialProofSection from '@/components/SocialProofSection'
import MobileContactBar from '@/components/MobileContactBar'
import ClientOnly from '@/components/ClientOnly'
import RelatedServices from '@/components/RelatedServices'
import ResourceLinks from '@/components/ResourceLinks'
import ToolLinking from '@/components/ToolLinking'
import { trackCalculatorUsage, trackCalculatorResult, trackCTAClick, trackPhoneCall } from '@/lib/analytics'

// Client component - metadata should be handled by layout.tsx or a separate server component

interface MarketplaceCostInputs {
  annualIncome: number
  householdSize: number
  age: number
  planType: 'bronze' | 'silver' | 'gold' | 'platinum'
  primaryCareVisits: number
  specialistVisits: number
  prescriptionDrugs: number
  emergencyRoomVisits: number
  urgentCareVisits: number
  mentalHealthVisits: number
  preventiveCare: number
  chronicConditions: number
}

interface MarketplaceCostBreakdown {
  totalAnnualCost: number
  monthlyPremium: number
  annualPremium: number
  premiumTaxCredit: number
  subsidizedPremium: number
  deductible: number
  outOfPocketMax: number
  estimatedMedicalCosts: number
  totalOutOfPocket: number
  incomePercentOfFPL: number
  qualifiesForSubsidies: boolean
  qualifiesForCSR: boolean
}

const calculatorStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Health Insurance Marketplace Cost Calculator',
  description: 'Interactive tool to calculate ACA Health Insurance Marketplace costs including premiums, subsidies, and out-of-pocket expenses',
  url: 'https://el-mag.com/health-insurance-cost-calculator',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'ACA marketplace cost calculation',
    'Premium tax credit estimation',
    'Cost-sharing reduction calculation',
    'Healthcare utilization estimates',
    'Plan type comparison'
  ]
}

// 2025 Federal Poverty Level guidelines (estimated)
const FPL_2025 = {
  1: 15060,
  2: 20440,
  3: 25820,
  4: 31200,
  5: 36580,
  6: 41960,
  7: 47340,
  8: 52720
}

// Plan type average costs (2025 estimates)
const PLAN_COSTS = {
  bronze: { premium: 350, deductible: 7000, oopMax: 9200 },
  silver: { premium: 450, deductible: 4500, oopMax: 9200 },
  gold: { premium: 550, deductible: 2000, oopMax: 9200 },
  platinum: { premium: 650, deductible: 500, oopMax: 8550 }
}

export default function HealthInsuranceCostCalculatorPage() {
  const [inputs, setInputs] = useState<MarketplaceCostInputs>({
    annualIncome: 50000,
    householdSize: 2,
    age: 35,
    planType: 'silver',
    primaryCareVisits: 2,
    specialistVisits: 1,
    prescriptionDrugs: 2,
    emergencyRoomVisits: 0,
    urgentCareVisits: 1,
    mentalHealthVisits: 0,
    preventiveCare: 1,
    chronicConditions: 0
  })

  const [results, setResults] = useState<MarketplaceCostBreakdown>({
    totalAnnualCost: 0,
    monthlyPremium: 0,
    annualPremium: 0,
    premiumTaxCredit: 0,
    subsidizedPremium: 0,
    deductible: 0,
    outOfPocketMax: 0,
    estimatedMedicalCosts: 0,
    totalOutOfPocket: 0,
    incomePercentOfFPL: 0,
    qualifiesForSubsidies: false,
    qualifiesForCSR: false
  })

  const getFPL = (householdSize: number): number => {
    if (householdSize <= 8) {
      return FPL_2025[householdSize as keyof typeof FPL_2025]
    }
    // For households > 8, add $5,380 for each additional person
    return FPL_2025[8] + ((householdSize - 8) * 5380)
  }

  const calculateCosts = () => {
    const planCost = PLAN_COSTS[inputs.planType]
    const fpl = getFPL(inputs.householdSize)
    const incomePercentOfFPL = (inputs.annualIncome / fpl) * 100

    // Premium calculations
    let monthlyPremium = planCost.premium
    // Adjust premium based on age (rough approximation)
    const ageFactor = inputs.age < 30 ? 0.8 : inputs.age > 50 ? 1.3 : 1.0
    monthlyPremium *= ageFactor

    const annualPremium = monthlyPremium * 12
    
    // Premium tax credit calculation (simplified)
    let premiumTaxCredit = 0
    let qualifiesForSubsidies = false
    let qualifiesForCSR = false

    if (incomePercentOfFPL >= 100 && incomePercentOfFPL <= 400) {
      qualifiesForSubsidies = true
      
      // Simplified premium tax credit calculation
      const maxPremiumPercentage = incomePercentOfFPL <= 150 ? 0.04 :
                                  incomePercentOfFPL <= 200 ? 0.06 :
                                  incomePercentOfFPL <= 250 ? 0.08 :
                                  incomePercentOfFPL <= 300 ? 0.095 : 0.095

      const maxAffordablePremium = inputs.annualIncome * maxPremiumPercentage
      premiumTaxCredit = Math.max(0, annualPremium - maxAffordablePremium)
    }

    if (incomePercentOfFPL >= 100 && incomePercentOfFPL <= 250 && inputs.planType === 'silver') {
      qualifiesForCSR = true
    }

    const subsidizedPremium = Math.max(0, annualPremium - premiumTaxCredit)

    // Deductible and out-of-pocket adjustments for CSR
    let deductible = planCost.deductible
    let outOfPocketMax = planCost.oopMax

    if (qualifiesForCSR) {
      if (incomePercentOfFPL <= 150) {
        deductible *= 0.13 // 87% reduction - Enhanced Silver (94% actuarial value)
        outOfPocketMax = Math.min(outOfPocketMax * 0.67, 2850) // Reduced to ~$2,850
      } else if (incomePercentOfFPL <= 200) {
        deductible *= 0.27 // 73% reduction - Enhanced Silver (87% actuarial value)
        outOfPocketMax = Math.min(outOfPocketMax * 0.74, 7200) // Reduced to ~$7,200
      } else if (incomePercentOfFPL <= 250) {
        deductible *= 0.5 // 50% reduction - Enhanced Silver (73% actuarial value)
        outOfPocketMax = Math.min(outOfPocketMax * 0.87, 8000) // Reduced to ~$8,000
      }
    }

    // Estimated medical costs
    const primaryCareCosts = inputs.primaryCareVisits * (qualifiesForCSR ? 15 : 25)
    const specialistCosts = inputs.specialistVisits * (qualifiesForCSR ? 35 : 50)
    const prescriptionCosts = inputs.prescriptionDrugs * 40 * 12
    const emergencyRoomCosts = inputs.emergencyRoomVisits * (qualifiesForCSR ? 300 : 500)
    const urgentCareCosts = inputs.urgentCareVisits * (qualifiesForCSR ? 60 : 90)
    const mentalHealthCosts = inputs.mentalHealthVisits * (qualifiesForCSR ? 25 : 40)
    const preventiveCosts = inputs.preventiveCare * 0 // Usually covered 100%
    const chronicConditionCosts = inputs.chronicConditions * 2500 // Annual estimated cost per condition

    const estimatedMedicalCosts = primaryCareCosts + specialistCosts + prescriptionCosts +
                                emergencyRoomCosts + urgentCareCosts + mentalHealthCosts +
                                preventiveCosts + chronicConditionCosts

    const totalOutOfPocket = Math.min(estimatedMedicalCosts + Math.max(0, estimatedMedicalCosts - deductible), outOfPocketMax)
    const totalAnnualCost = subsidizedPremium + totalOutOfPocket

    setResults({
      totalAnnualCost,
      monthlyPremium,
      annualPremium,
      premiumTaxCredit,
      subsidizedPremium,
      deductible: Math.round(deductible),
      outOfPocketMax: Math.round(outOfPocketMax),
      estimatedMedicalCosts,
      totalOutOfPocket,
      incomePercentOfFPL: Math.round(incomePercentOfFPL),
      qualifiesForSubsidies,
      qualifiesForCSR
    })
  }

  useEffect(() => {
    calculateCosts()
  }, [inputs])

  // Track calculator usage when inputs change significantly
  useEffect(() => {
    const timer = setTimeout(() => {
      trackCalculatorUsage('health_insurance', {
        annual_income: inputs.annualIncome,
        household_size: inputs.householdSize,
        age: inputs.age,
        plan_type: inputs.planType,
        total_healthcare_visits: inputs.primaryCareVisits + inputs.specialistVisits + inputs.emergencyRoomVisits + inputs.urgentCareVisits + inputs.mentalHealthVisits,
        chronic_conditions: inputs.chronicConditions
      })
    }, 2000) // Track after user stops changing inputs for 2 seconds

    return () => clearTimeout(timer)
  }, [inputs.annualIncome, inputs.householdSize, inputs.age, inputs.planType, inputs.chronicConditions])

  // Track results when they're calculated
  useEffect(() => {
    if (results.totalAnnualCost > 0) {
      trackCalculatorResult('health_insurance', {
        total_annual_cost: results.totalAnnualCost,
        monthly_cost: Math.round(results.totalAnnualCost / 12),
        qualifies_for_subsidies: results.qualifiesForSubsidies,
        qualifies_for_csr: results.qualifiesForCSR,
        income_percent_fpl: results.incomePercentOfFPL,
        premium_tax_credit: results.premiumTaxCredit,
        plan_type: inputs.planType
      })
    }
  }, [results.totalAnnualCost, results.qualifiesForSubsidies, results.qualifiesForCSR])

  const handleInputChange = (field: keyof MarketplaceCostInputs, value: number | string) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const handleCTAClick = (ctaName: string, destination: string) => {
    trackCTAClick(ctaName, 'health_insurance_calculator', destination)
  }

  const handlePhoneClick = () => {
    trackPhoneCall('331-343-2584')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorStructuredData) }}
      />
      
      <ClientOnly>
        <MobileContactBar county="National" />
      </ClientOnly>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Health Insurance Cost Calculator 2025 | Free ACA Subsidy Estimator
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
              Calculate your ACA Health Insurance costs, premium tax credits, and subsidies based on your income and family size.
            </p>
            
            <div className="bg-blue-500 text-blue-100 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Free Calculator • Includes 2025 Subsidies & Tax Credits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Calculator Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Information</h2>
            
            <div className="space-y-6">
              {/* Income & Household */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Income & Household</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Annual Household Income ($)
                    </label>
                    <input
                      type="number"
                      value={inputs.annualIncome}
                      onChange={(e) => handleInputChange('annualIncome', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      min="0"
                      step="1000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Household Size
                    </label>
                    <input
                      type="number"
                      value={inputs.householdSize}
                      onChange={(e) => handleInputChange('householdSize', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      min="1"
                      max="10"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Age
                    </label>
                    <input
                      type="number"
                      value={inputs.age}
                      onChange={(e) => handleInputChange('age', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      min="18"
                      max="100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Plan Type
                    </label>
                    <select
                      value={inputs.planType}
                      onChange={(e) => handleInputChange('planType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="bronze">Bronze (Lower premium, higher deductible)</option>
                      <option value="silver">Silver (Balanced premium and deductible)</option>
                      <option value="gold">Gold (Higher premium, lower deductible)</option>
                      <option value="platinum">Platinum (Highest premium, lowest deductible)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Healthcare Utilization */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Expected Annual Healthcare Use</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Care Visits
                      </label>
                      <input
                        type="number"
                        value={inputs.primaryCareVisits}
                        onChange={(e) => handleInputChange('primaryCareVisits', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        min="0"
                        max="20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specialist Visits
                      </label>
                      <input
                        type="number"
                        value={inputs.specialistVisits}
                        onChange={(e) => handleInputChange('specialistVisits', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        min="0"
                        max="20"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prescription Medications
                      </label>
                      <input
                        type="number"
                        value={inputs.prescriptionDrugs}
                        onChange={(e) => handleInputChange('prescriptionDrugs', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        min="0"
                        max="15"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Emergency Room Visits
                      </label>
                      <input
                        type="number"
                        value={inputs.emergencyRoomVisits}
                        onChange={(e) => handleInputChange('emergencyRoomVisits', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        min="0"
                        max="10"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Urgent Care Visits
                      </label>
                      <input
                        type="number"
                        value={inputs.urgentCareVisits}
                        onChange={(e) => handleInputChange('urgentCareVisits', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        min="0"
                        max="10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mental Health Visits
                      </label>
                      <input
                        type="number"
                        value={inputs.mentalHealthVisits}
                        onChange={(e) => handleInputChange('mentalHealthVisits', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        min="0"
                        max="20"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preventive Care Visits
                      </label>
                      <input
                        type="number"
                        value={inputs.preventiveCare}
                        onChange={(e) => handleInputChange('preventiveCare', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        min="0"
                        max="10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Chronic Conditions
                      </label>
                      <input
                        type="number"
                        value={inputs.chronicConditions}
                        onChange={(e) => handleInputChange('chronicConditions', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        min="0"
                        max="5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Estimated Annual Costs</h2>
            
            <div className="space-y-6">
              {/* Income Status */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Income Status</span>
                  <span className="font-semibold">{results.incomePercentOfFPL}% of FPL</span>
                </div>
                {results.qualifiesForSubsidies && (
                  <div className="text-sm text-green-700 font-medium">✓ Qualifies for Premium Tax Credits</div>
                )}
                {results.qualifiesForCSR && (
                  <div className="text-sm text-blue-700 font-medium">✓ Qualifies for Cost-Sharing Reductions</div>
                )}
              </div>

              {/* Total Cost */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Estimated Annual Cost</h3>
                <div className="text-4xl font-bold text-green-600">
                  ${results.totalAnnualCost.toLocaleString()}
                </div>
                <div className="text-lg text-gray-600 mt-2">
                  ${(results.totalAnnualCost / 12).toFixed(0)} per month
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Cost Breakdown</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Full Premium (Annual)</span>
                    <span className="font-semibold">${results.annualPremium.toLocaleString()}</span>
                  </div>
                  {results.premiumTaxCredit > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-green-700">Premium Tax Credit</span>
                      <span className="font-semibold text-green-600">-${results.premiumTaxCredit.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Your Premium (After Credits)</span>
                    <span className="font-semibold">${results.subsidizedPremium.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Deductible</span>
                    <span className="font-semibold">${results.deductible.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Estimated Medical Costs</span>
                    <span className="font-semibold">${results.estimatedMedicalCosts.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Total Out-of-Pocket</span>
                    <span className="font-semibold">${results.totalOutOfPocket.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Out-of-Pocket Maximum</span>
                    <span className="text-sm text-gray-500">${results.outOfPocketMax.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Subsidy Information */}
              {results.qualifiesForSubsidies && (
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">Great News!</h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>You qualify for premium tax credits that can significantly reduce your monthly premium costs.</p>
                        {results.qualifiesForCSR && (
                          <p className="mt-1">You also qualify for cost-sharing reductions with Silver plans, lowering your deductible and out-of-pocket costs.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Plan Comparison Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Compare ACA Plan Types
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border-2 border-orange-200 rounded-lg bg-orange-50">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥉</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bronze Plans</h3>
                <p className="text-gray-600 mb-4">60% coverage on average</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lowest monthly premium</li>
                  <li>• Highest deductible (~$7,000)</li>
                  <li>• Good for healthy individuals</li>
                  <li>• Catastrophic protection</li>
                </ul>
              </div>
              
              <div className="text-center p-6 border-2 border-gray-300 rounded-lg bg-gray-50">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Silver Plans</h3>
                <p className="text-gray-600 mb-4">70% coverage on average</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Moderate monthly premium</li>
                  <li>• Medium deductible (~$4,500)</li>
                  <li>• Qualifies for CSR benefits</li>
                  <li>• Most popular choice</li>
                </ul>
                <div className="mt-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Recommended</span>
                </div>
              </div>
              
              <div className="text-center p-6 border-2 border-yellow-200 rounded-lg bg-yellow-50">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥇</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gold Plans</h3>
                <p className="text-gray-600 mb-4">80% coverage on average</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Higher monthly premium</li>
                  <li>• Lower deductible (~$2,000)</li>
                  <li>• Good for regular healthcare users</li>
                  <li>• More predictable costs</li>
                </ul>
              </div>
              
              <div className="text-center p-6 border-2 border-purple-200 rounded-lg bg-purple-50">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Platinum Plans</h3>
                <p className="text-gray-600 mb-4">90% coverage on average</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Highest monthly premium</li>
                  <li>• Lowest deductible (~$500)</li>
                  <li>• Best for chronic conditions</li>
                  <li>• Maximum coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Subsidy Information */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding ACA Subsidies & Cost-Sharing Reductions
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">💰 Premium Tax Credits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Available for incomes 100-400% of Federal Poverty Level</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Reduces monthly premium costs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Can be applied directly to premium or claimed on taxes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Available for all metal tiers (Bronze, Silver, Gold, Platinum)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">🛡️ Cost-Sharing Reductions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Available for incomes 100-250% of Federal Poverty Level</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700"><strong>Only available with Silver plans</strong></span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Reduces deductibles, copays, and out-of-pocket maximums</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Can reduce deductibles by up to 87%</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhanced CSR Breakdown Table */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Cost-Sharing Reduction Benefits by Income Level</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Income Level (% of FPL)</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Plan Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Actuarial Value</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Typical Deductible Reduction</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Out-of-Pocket Max</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-medium text-green-700">100-150% FPL</td>
                      <td className="px-4 py-3">Enhanced Silver</td>
                      <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">94% Coverage</span></td>
                      <td className="px-4 py-3">Up to 87% reduction</td>
                      <td className="px-4 py-3">~$2,850</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-blue-700">150-200% FPL</td>
                      <td className="px-4 py-3">Enhanced Silver</td>
                      <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">87% Coverage</span></td>
                      <td className="px-4 py-3">Up to 73% reduction</td>
                      <td className="px-4 py-3">~$7,200</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-purple-700">200-250% FPL</td>
                      <td className="px-4 py-3">Enhanced Silver</td>
                      <td className="px-4 py-3"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">73% Coverage</span></td>
                      <td className="px-4 py-3">Up to 50% reduction</td>
                      <td className="px-4 py-3">~$8,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-600">Standard Silver</td>
                      <td className="px-4 py-3">Regular Silver</td>
                      <td className="px-4 py-3"><span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">70% Coverage</span></td>
                      <td className="px-4 py-3">No reduction</td>
                      <td className="px-4 py-3">~$9,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                * Amounts are estimates based on 2025 projections. Actual amounts may vary by insurer and plan.
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Health Insurance Costs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Understanding Health Insurance Costs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium</h3>
              <p className="text-sm text-gray-600">Monthly payment for your health insurance plan</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deductible</h3>
              <p className="text-sm text-gray-600">Amount you pay before insurance starts covering costs</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Copayment</h3>
              <p className="text-sm text-gray-600">Fixed fee you pay for covered healthcare services</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Out-of-Pocket Max</h3>
              <p className="text-sm text-gray-600">Maximum amount you pay per year for covered services</p>
            </div>
          </div>
        </section>

        {/* Resource Links Section */}
        <ResourceLinks 
          currentService="tools"
          excludePaths={['/health-insurance-cost-calculator']}
          title="Additional Tools & Educational Resources"
          description="More calculators, comparison tools, and educational content to support your insurance decisions"
        />

        {/* Related Services */}
        <RelatedServices 
          currentService="tools"
          excludePaths={['/health-insurance-cost-calculator']}
          title="Related Insurance Services & Tools"
          description="Use these tools to compare options, then connect with our agents for enrollment assistance."
        />

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm 
            title="Need Help Finding the Right Health Insurance Plan?"
            subtitle="Our licensed insurance specialists can help you navigate the marketplace and find a plan that fits your needs and budget"
          />
        </div>

        {/* Why Use Our Calculator */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Use Our Health Insurance Cost Calculator?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accurate Estimates</h3>
                <p className="text-gray-600">Get precise cost calculations based on 2025 ACA rules, including all subsidies and cost-sharing reductions you qualify for.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Maximize Savings</h3>
                <p className="text-gray-600">Discover all the ways to save money on health insurance, from premium tax credits to enhanced Silver plan benefits.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Guidance</h3>
                <p className="text-gray-600">Get personalized recommendations and free help from licensed insurance agents to find the perfect plan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Linking */}
        <ToolLinking 
          currentTool="health-insurance-cost-calculator"
          userContext="cost-analysis"
          showRelatedTools={true}
          maxTools={6}
          showFeatures={true}
          layout="grid"
        />

        {/* Success Stories */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Real People, Real Savings
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah M., Age 34</h4>
                    <p className="text-sm text-gray-600">Small Business Owner</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "I was paying $450/month for individual coverage. Using the calculator, I discovered I qualified for a $280/month tax credit. Now I pay just $170/month for better coverage!"
                </p>
                <div className="text-green-600 font-bold">Savings: $3,360 per year</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Marcus & Lisa T.</h4>
                    <p className="text-sm text-gray-600">Family of 4</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "We thought health insurance would cost us $1,200/month. The calculator showed we qualify for premium credits AND cost-sharing reductions. Now we pay $320/month with lower deductibles."
                </p>
                <div className="text-green-600 font-bold">Savings: $10,560 per year</div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <SocialProofSection 
          county="National" 
          state="Nationwide"
          demographic="general"
        />

      </main>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Health Insurance Plan?</h2>
          <p className="text-xl text-green-100 mb-8">
            Use this cost calculator as a starting point, then let our experienced team help you enroll in a 
            marketplace plan that maximizes your subsidies and fits your healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              onClick={() => handleCTAClick('Get Help With Enrollment', '/contact')}
              className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors text-center inline-block hover:bg-green-50"
            >
              Get Help With Enrollment
            </a>
            <a 
              href="tel:331-343-2584" 
              onClick={handlePhoneClick}
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center inline-block hover:bg-white hover:text-green-600"
            >
              331-E-HEALTH
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}