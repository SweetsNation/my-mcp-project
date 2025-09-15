'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { trackInsuranceContentEngagement, trackInsuranceQuoteFunnel, trackCTAClick } from '@/lib/analytics'

interface InsuranceMarketingStrategyProps {
  insuranceType: 'whole_life' | 'long_term_care'
  targetDemographics?: {
    primaryAge: string
    incomeLevel: string
    lifeStage: string
  }
}

export default function InsuranceMarketingStrategy({
  insuranceType,
  targetDemographics = {
    primaryAge: '45-65',
    incomeLevel: 'middle-to-high',
    lifeStage: 'pre-retirement'
  }
}: InsuranceMarketingStrategyProps) {
  const [activeStrategy, setActiveStrategy] = useState<string>('awareness')

  // Keyword-driven content based on research
  const wholeLifeKeywords = {
    highIntent: [
      'whole life insurance quotes',
      'permanent life insurance rates',
      'cash value life insurance',
      'guaranteed life insurance',
      'whole life vs term life',
      'life insurance over 50',
      'tax free life insurance'
    ],
    longTail: [
      'whole life insurance for retirement planning',
      'best whole life insurance companies 2025',
      'guaranteed universal life insurance rates',
      'whole life insurance cash value calculator',
      'permanent life insurance estate planning',
      'whole life insurance tax benefits',
      'life insurance with guaranteed dividends'
    ],
    localIntent: [
      'whole life insurance agent near me',
      'local life insurance quotes',
      'life insurance consultation appointment'
    ]
  }

  const longTermCareKeywords = {
    highIntent: [
      'long term care insurance cost',
      'nursing home insurance quotes',
      'hybrid long term care insurance',
      'LTC insurance rates',
      'long term care coverage options',
      'assisted living insurance',
      'elder care insurance'
    ],
    longTail: [
      'long term care insurance for couples',
      'best age to buy long term care insurance',
      'traditional vs hybrid LTC insurance',
      'long term care insurance with inflation protection',
      'medicare vs long term care insurance',
      'home care insurance coverage',
      'dementia care insurance options'
    ],
    localIntent: [
      'long term care insurance agent near me',
      'local elder care planning',
      'LTC insurance consultation'
    ]
  }

  const getKeywords = () => {
    return insuranceType === 'whole_life' ? wholeLifeKeywords : longTermCareKeywords
  }

  const getMarketingCopy = () => {
    if (insuranceType === 'whole_life') {
      return {
        urgencyMessage: "Life insurance premiums increase with age - lock in today's rates",
        valueProposition: "Build wealth while protecting your family with guaranteed cash value growth",
        painPoint: "Don't let your family struggle financially without life insurance protection",
        socialProof: "Join over 2 million Americans who chose whole life insurance for permanent protection",
        callToAction: "Get Your Personalized Whole Life Quote - No Obligation",
        trustSignals: "A+ Rated Insurance Companies • 100% Confidential • Expert Guidance"
      }
    } else {
      return {
        urgencyMessage: "70% of seniors need long-term care - don't wait until it's too late",
        valueProposition: "Protect your retirement savings from devastating long-term care costs",
        painPoint: "Average nursing home costs $108,405/year - don't drain your life savings",
        socialProof: "Over 8 million Americans have long-term care insurance protection",
        callToAction: "Calculate Your Long-Term Care Insurance Cost - Free Analysis",
        trustSignals: "Licensed Specialists • Comprehensive Coverage • Family Protection"
      }
    }
  }

  const marketingCopy = getMarketingCopy()
  const keywords = getKeywords()

  // Track marketing strategy engagement
  useEffect(() => {
    trackInsuranceContentEngagement(insuranceType, 'marketing_strategy', {
      timeSpent: Date.now(),
      scrollDepth: 0,
      interactionCount: 0,
      sectionCompletion: true
    })
  }, [insuranceType])

  const handleStrategyClick = (strategy: string) => {
    setActiveStrategy(strategy)
    trackInsuranceContentEngagement(insuranceType, 'strategy_selection', {
      timeSpent: Date.now(),
      scrollDepth: 0,
      interactionCount: 1,
      sectionCompletion: true,
      strategyType: strategy
    })
  }

  const handleCTAClick = (ctaType: string, destination: string) => {
    trackCTAClick(ctaType, window.location.pathname, destination)
    trackInsuranceQuoteFunnel(insuranceType, 'marketing_conversion', {
      source: 'marketing_strategy',
      ctaType: ctaType
    })
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-8 rounded-r-lg">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {insuranceType === 'whole_life' ? 'Whole Life Insurance' : 'Long-Term Care Insurance'} Marketing Strategy
        </h3>

        {/* Urgency & Value Proposition */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-red-800 mb-2">Time-Sensitive Opportunity</h4>
              <p className="text-red-700 mb-4">{marketingCopy.urgencyMessage}</p>
              <p className="text-gray-700">{marketingCopy.valueProposition}</p>
            </div>
          </div>
        </div>

        {/* Marketing Strategy Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 mb-6">
            {['awareness', 'consideration', 'conversion'].map((strategy) => (
              <button
                key={strategy}
                onClick={() => handleStrategyClick(strategy)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeStrategy === strategy
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {strategy.charAt(0).toUpperCase() + strategy.slice(1)} Stage
              </button>
            ))}
          </div>

          {/* Strategy Content */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            {activeStrategy === 'awareness' && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Awareness Stage Keywords</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">High-Intent Keywords:</h5>
                    <ul className="space-y-1">
                      {keywords.highIntent.slice(0, 4).map((keyword, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {keyword}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Educational Content Focus:</h5>
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600">• Understanding coverage basics</li>
                      <li className="text-sm text-gray-600">• Cost comparison guides</li>
                      <li className="text-sm text-gray-600">• Benefits explanation</li>
                      <li className="text-sm text-gray-600">• Myth-busting content</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeStrategy === 'consideration' && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Consideration Stage Strategy</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Long-Tail Keywords:</h5>
                    <ul className="space-y-1">
                      {keywords.longTail.slice(0, 4).map((keyword, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {keyword}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Comparison Content:</h5>
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600">• Provider comparisons</li>
                      <li className="text-sm text-gray-600">• Policy type analysis</li>
                      <li className="text-sm text-gray-600">• Cost-benefit calculators</li>
                      <li className="text-sm text-gray-600">• Customer testimonials</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeStrategy === 'conversion' && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Conversion Stage Optimization</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Local Intent Keywords:</h5>
                    <ul className="space-y-1">
                      {keywords.localIntent.map((keyword, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                          {keyword}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Conversion Elements:</h5>
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600">• Instant quote forms</li>
                      <li className="text-sm text-gray-600">• One-click phone calls</li>
                      <li className="text-sm text-gray-600">• Trust badges</li>
                      <li className="text-sm text-gray-600">• Limited-time offers</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pain Point Addressing */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-yellow-800 mb-2">Address This Key Concern:</h4>
              <p className="text-yellow-700">{marketingCopy.painPoint}</p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-green-700">{marketingCopy.socialProof}</p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 text-center text-white">
          <h4 className="text-2xl font-bold mb-4">{marketingCopy.callToAction}</h4>
          <p className="text-blue-100 mb-6">{marketingCopy.trustSignals}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => handleCTAClick('primary_quote', '/contact')}
            >
              Get Free Quote Now
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              onClick={() => handleCTAClick('phone_call', 'tel:331-343-2584')}
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </div>

        {/* Target Demographics Info */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Optimized for: {targetDemographics.primaryAge} age group • {targetDemographics.incomeLevel} income • {targetDemographics.lifeStage} planning
          </p>
        </div>
      </div>
    </div>
  )
}