'use client'

import { useState, useEffect } from 'react'
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import SocialProofSection from '@/components/SocialProofSection'
import MobileContactBar from '@/components/MobileContactBar'
import ClientOnly from '@/components/ClientOnly'
import RelatedServices from '@/components/RelatedServices'
import ResourceLinks from '@/components/ResourceLinks'
import ToolLinking from '@/components/ToolLinking'
import { trackCalculatorUsage, trackCalculatorResult, trackCTAClick, trackPhoneCall } from '@/lib/analytics'

// Note: This would typically be generated server-side
const metadata = {
  title: 'Medicare Advantage Cost Calculator 2025 | Estimate Your Healthcare Costs | El-Mag Insurance',
  description: 'Free Medicare Advantage cost calculator. Estimate your total healthcare costs including premiums, deductibles, copays, and out-of-pocket maximums.',
  keywords: 'Medicare Advantage cost calculator, Medicare costs, healthcare cost estimator, Medicare Advantage savings, premium calculator',
}

interface CostInputs {
  monthlyPremium: number
  annualDeductible: number
  primaryCareVisits: number
  specialistVisits: number
  prescriptionDrugs: number
  hospitalStays: number
  urgentCareVisits: number
  mentalHealthVisits: number
  preventiveCare: number
}

interface CostBreakdown {
  totalAnnualCost: number
  monthlyPremiums: number
  deductibles: number
  copaysCoinsurance: number
  prescriptionCosts: number
  outOfPocketMax: number
}

const calculatorStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Medicare Advantage Cost Calculator',
  description: 'Interactive tool to calculate Medicare Advantage costs including premiums, deductibles, and out-of-pocket expenses',
  url: 'https://el-mag.com/medicare-cost-calculator',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'Medicare Advantage cost calculation',
    'Healthcare utilization estimates', 
    'Out-of-pocket cost projections',
    'Prescription drug cost estimates',
    'Total annual cost calculations'
  ]
}

export default function MedicareCostCalculatorPage() {
  const [inputs, setInputs] = useState<CostInputs>({
    monthlyPremium: 0,
    annualDeductible: 0,
    primaryCareVisits: 4,
    specialistVisits: 2,
    prescriptionDrugs: 3,
    hospitalStays: 0,
    urgentCareVisits: 1,
    mentalHealthVisits: 0,
    preventiveCare: 2
  })

  const [results, setResults] = useState<CostBreakdown>({
    totalAnnualCost: 0,
    monthlyPremiums: 0,
    deductibles: 0,
    copaysCoinsurance: 0,
    prescriptionCosts: 0,
    outOfPocketMax: 8850 // 2025 Medicare Advantage max
  })

  const calculateCosts = () => {
    const monthlyPremiums = inputs.monthlyPremium * 12
    const deductibles = inputs.annualDeductible
    
    // Estimated copays and coinsurance
    const primaryCareCosts = inputs.primaryCareVisits * 25 // $25 avg copay
    const specialistCosts = inputs.specialistVisits * 50 // $50 avg copay
    const hospitalCosts = inputs.hospitalStays * 350 // $350 avg per day copay
    const urgentCareCosts = inputs.urgentCareVisits * 90 // $90 avg copay
    const mentalHealthCosts = inputs.mentalHealthVisits * 40 // $40 avg copay
    const preventiveCosts = inputs.preventiveCare * 0 // Usually covered 100%
    
    const copaysCoinsurance = primaryCareCosts + specialistCosts + hospitalCosts + urgentCareCosts + mentalHealthCosts + preventiveCosts
    
    // Prescription drug costs (simplified estimate)
    const prescriptionCosts = inputs.prescriptionDrugs * 35 * 12 // $35 avg monthly per drug
    
    const totalBeforeMax = monthlyPremiums + deductibles + copaysCoinsurance + prescriptionCosts
    const totalAnnualCost = Math.min(totalBeforeMax, monthlyPremiums + results.outOfPocketMax)
    
    setResults({
      totalAnnualCost,
      monthlyPremiums,
      deductibles,
      copaysCoinsurance,
      prescriptionCosts,
      outOfPocketMax: results.outOfPocketMax
    })
  }

  useEffect(() => {
    calculateCosts()
  }, [inputs])

  // Track calculator usage when inputs change significantly
  useEffect(() => {
    const timer = setTimeout(() => {
      trackCalculatorUsage('medicare', {
        monthly_premium: inputs.monthlyPremium,
        annual_deductible: inputs.annualDeductible,
        primary_care_visits: inputs.primaryCareVisits,
        specialist_visits: inputs.specialistVisits,
        prescription_drugs: inputs.prescriptionDrugs,
        hospital_stays: inputs.hospitalStays,
        total_healthcare_visits: inputs.primaryCareVisits + inputs.specialistVisits + inputs.urgentCareVisits + inputs.mentalHealthVisits
      })
    }, 2000) // Track after user stops changing inputs for 2 seconds

    return () => clearTimeout(timer)
  }, [inputs.monthlyPremium, inputs.annualDeductible, inputs.primaryCareVisits, inputs.specialistVisits, inputs.prescriptionDrugs, inputs.hospitalStays])

  // Track results when they're calculated
  useEffect(() => {
    if (results.totalAnnualCost > 0) {
      trackCalculatorResult('medicare', {
        total_annual_cost: results.totalAnnualCost,
        monthly_cost: Math.round(results.totalAnnualCost / 12),
        monthly_premiums: results.monthlyPremiums,
        deductibles: results.deductibles,
        copays_coinsurance: results.copaysCoinsurance,
        prescription_costs: results.prescriptionCosts,
        out_of_pocket_max: results.outOfPocketMax
      })
    }
  }, [results.totalAnnualCost, results.monthlyPremiums, results.deductibles])

  const handleInputChange = (field: keyof CostInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const handleCTAClick = (ctaName: string, destination: string) => {
    trackCTAClick(ctaName, 'medicare_calculator', destination)
  }

  const handlePhoneClick = () => {
    trackPhoneCall('331-343-2584')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorStructuredData) }}
      />
      
      <ClientOnly>
        <MobileContactBar county="National" />
      </ClientOnly>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medicare Cost Calculator 2025 | Estimate Your Healthcare Savings
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get a personalized estimate of your Medicare Advantage costs and discover potential savings opportunities.
              Compare costs for Medicare Advantage plans, Medicare Supplement Plan N, or disability Medicare coverage.
            </p>
            
            <div className="bg-green-500 text-green-100 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Free Calculator • No Personal Information Required</span>
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
              {/* Plan Costs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Plan Costs</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Premium ($)
                    </label>
                    <input
                      type="number"
                      value={inputs.monthlyPremium}
                      onChange={(e) => handleInputChange('monthlyPremium', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Annual Deductible ($)
                    </label>
                    <input
                      type="number"
                      value={inputs.annualDeductible}
                      onChange={(e) => handleInputChange('annualDeductible', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0"
                      min="0"
                    />
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                        max="20"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Prescription Drugs
                      </label>
                      <input
                        type="number"
                        value={inputs.prescriptionDrugs}
                        onChange={(e) => handleInputChange('prescriptionDrugs', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                        max="15"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hospital Stays (days)
                      </label>
                      <input
                        type="number"
                        value={inputs.hospitalStays}
                        onChange={(e) => handleInputChange('hospitalStays', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                        max="30"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                        max="10"
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
              {/* Total Cost */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Estimated Annual Cost</h3>
                <div className="text-4xl font-bold text-blue-600">
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
                    <span className="text-gray-700">Monthly Premiums (Annual)</span>
                    <span className="font-semibold">${results.monthlyPremiums.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Deductible</span>
                    <span className="font-semibold">${results.deductibles.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Copays & Coinsurance</span>
                    <span className="font-semibold">${results.copaysCoinsurance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Prescription Drugs</span>
                    <span className="font-semibold">${results.prescriptionCosts.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Out-of-Pocket Maximum</span>
                    <span className="text-sm text-gray-500">${results.outOfPocketMax.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Savings Tip */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Savings Opportunity</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>This is an estimate based on national averages. Actual costs may vary significantly between plans and providers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Comparison Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Compare Your Options
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border-2 border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Low-Cost Plans</h3>
                <p className="text-gray-600 mb-4">$0-$50 monthly premium</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Higher deductibles</li>
                  <li>• Limited networks</li>
                  <li>• Basic benefits</li>
                </ul>
              </div>
              
              <div className="text-center p-6 border-2 border-blue-500 rounded-lg bg-blue-50">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Balanced Plans</h3>
                <p className="text-gray-600 mb-4">$50-$150 monthly premium</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Moderate deductibles</li>
                  <li>• Good networks</li>
                  <li>• Extra benefits</li>
                </ul>
                <div className="mt-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Most Popular</span>
                </div>
              </div>
              
              <div className="text-center p-6 border-2 border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Plans</h3>
                <p className="text-gray-600 mb-4">$150+ monthly premium</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Low/no deductibles</li>
                  <li>• Extensive networks</li>
                  <li>• Comprehensive benefits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cost-Saving Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Money-Saving Tips for Medicare Advantage
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">💰 Ways to Save</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Use in-network providers to minimize costs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Take advantage of free preventive care benefits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Use generic medications when available</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Review your plan annually during Open Enrollment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Check for Low Income Subsidy (LIS) eligibility</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-4">⚠️ Cost Pitfalls to Avoid</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Going out-of-network without authorization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Ignoring prior authorization requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Not comparing plans during enrollment periods</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Using emergency rooms for non-emergencies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Not understanding your plan's formulary</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Medicare Costs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Understanding Medicare Advantage Costs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium</h3>
              <p className="text-sm text-gray-600">Monthly amount you pay for your plan, even if you don't use services</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deductible</h3>
              <p className="text-sm text-gray-600">Amount you pay before your plan starts paying for covered services</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Copay</h3>
              <p className="text-sm text-gray-600">Fixed amount you pay for covered services after meeting deductible</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Out-of-Pocket Max</h3>
              <p className="text-sm text-gray-600">Maximum amount you'll pay per year for covered services</p>
            </div>
          </div>
        </section>

        {/* Regional Medicare Options */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Calculate Medicare Costs by Location
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-blue-700 mb-3">Hawaii Medicare Costs</h3>
                <p className="text-gray-600 mb-4 text-sm">Calculate costs for Maui County Medicare Advantage plans with island-specific benefits.</p>
                <a href="/medicare-advantage-maui-county" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Maui County →</a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-blue-700 mb-3">Georgia Medicare Costs</h3>
                <p className="text-gray-600 mb-4 text-sm">Calculate costs for Cobb County Medicare plans with WellStar network access.</p>
                <a href="/medicare-advantage-cobb-county-georgia" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Cobb County →</a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-blue-700 mb-3">California Medicare Costs</h3>
                <p className="text-gray-600 mb-4 text-sm">Calculate costs for Fresno County Central Valley Medicare Advantage plans.</p>
                <a href="/medicare-advantage-fresno-county" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Fresno County →</a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-blue-700 mb-3">Florida Medicare Costs</h3>
                <p className="text-gray-600 mb-4 text-sm">Calculate costs for Broward County South Florida Medicare Advantage plans.</p>
                <a href="/medicare-advantage-broward-county" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Broward County →</a>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-blue-700 mb-3">Medicare Supplement Plan N</h3>
                <p className="text-gray-600 mb-4 text-sm">Calculate costs for Medicare Supplement Plan N with predictable copays.</p>
                <a href="/medicare-supplement-plan-n" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Plan N Costs →</a>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-blue-700 mb-3">Disability Medicare</h3>
                <p className="text-gray-600 mb-4 text-sm">Calculate Medicare costs for disabled beneficiaries under 65.</p>
                <a href="/medicare-disability-insurance" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Disability Medicare →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Linking */}
        <ToolLinking 
          currentTool="medicare-cost-calculator"
          userContext="cost-analysis"
          showRelatedTools={true}
          maxTools={6}
          showFeatures={true}
          layout="grid"
        />

        {/* Resource Links Section */}
        <ResourceLinks 
          currentService="tools"
          excludePaths={['/medicare-cost-calculator']}
          title="Additional Tools & Educational Resources"
          description="More calculators, comparison tools, and educational content to support your insurance decisions"
        />

        {/* Related Services */}
        <RelatedServices 
          currentService="tools"
          excludePaths={['/medicare-cost-calculator']}
          title="Related Insurance Services & Tools"
          description="Use these tools to compare options, then connect with our agents for enrollment assistance."
        />

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm 
            title="Need Help Finding the Right Plan?"
            subtitle="Our licensed Medicare specialists can help you find a plan that fits your healthcare needs and budget"
          />
        </div>

        {/* Social Proof */}
        <SocialProofSection 
          county="National" 
          state="Nationwide"
          demographic="general"
        />

      </main>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Medicare Plan?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Use this cost calculator as a starting point, then let our experienced team help you find the 
            best Medicare Advantage plan for your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              onClick={() => handleCTAClick('Get Personalized Plan Recommendations', '/contact')}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors text-center inline-block hover:bg-blue-50"
            >
              Get Personalized Plan Recommendations
            </a>
            <a 
              href="tel:331-343-2584" 
              onClick={handlePhoneClick}
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center inline-block hover:bg-white hover:text-blue-600"
            >
              331-E-HEALTH
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}