'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface UserProfile {
  age: number;
  income: number;
  householdSize: number;
  state: string;
  county?: string;
  hasDisability: boolean;
  hasEndStageRenalDisease: boolean;
  hasAmyotrophicLateralSclerosis: boolean;
  hasEmployerCoverage: boolean;
  isVeteran: boolean;
  isNativeAmerican: boolean;
  hasMedicaid: boolean;
  hasSSI: boolean;
  hasMedicareSavingsProgram: boolean;
  preferredService?: string;
  healthNeeds: string[];
  budget: 'low' | 'medium' | 'high';
  networkPreference: 'broad' | 'narrow' | 'flexible';
}

interface ServiceRecommendation {
  id: string;
  title: string;
  description: string;
  serviceType: 'medicare-advantage' | 'medicare-supplement' | 'health-marketplace' | 'medicare-part-d' | 'medicare-extra-help' | 'medicaid' | 'va-health' | 'ihs';
  icon: string;
  color: string;
  href: string;
  matchScore: number;
  reasons: string[];
  estimatedCost: string;
  enrollmentUrgency: 'immediate' | 'soon' | 'planning' | 'flexible';
  specialConsiderations: string[];
  nextSteps: string[];
  alternatives: string[];
}

interface ServiceRecommendationsProps {
  userProfile?: Partial<UserProfile>;
  showEligibilityCheck?: boolean;
  maxRecommendations?: number;
  userContext?: 'medicare-advantage' | 'medicare-supplement' | 'health-marketplace' | 'general';
  showMatchScores?: boolean;
  showAlternatives?: boolean;
}

export default function ServiceRecommendations({
  userProfile,
  showEligibilityCheck = true,
  maxRecommendations = 6,
  userContext = 'general',
  showMatchScores = true,
  showAlternatives = true
}: ServiceRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<ServiceRecommendation[]>([]);
  const [showEligibilityForm, setShowEligibilityForm] = useState(false);

  // Federal Poverty Level 2025 (48 contiguous states)
  const FPL_2025: Record<number, number> = {
    1: 15030,
    2: 20360,
    3: 25690,
    4: 31020,
    5: 36350,
    6: 41680,
    7: 47010,
    8: 52340,
  };

  const getFPL = (householdSize: number): number => {
    if (householdSize <= 8) return FPL_2025[householdSize];
    return FPL_2025[8] + ((householdSize - 8) * 5380);
  };

  const generateRecommendations = (profile: Partial<UserProfile>): ServiceRecommendation[] => {
    const results: ServiceRecommendation[] = [];
    
    if (!profile.age || !profile.income || !profile.householdSize || !profile.state) {
      return [];
    }

    const fpl = getFPL(profile.householdSize);
    const incomePercentOfFPL = (profile.income / fpl) * 100;
    const isMedicareEligible = profile.age >= 65 || profile.hasDisability || profile.hasEndStageRenalDisease || profile.hasAmyotrophicLateralSclerosis;
    const isApproaching65 = profile.age >= 60 && profile.age < 65;
    const isUnder65 = profile.age < 65;

    // Medicare Advantage Recommendations
    if (isMedicareEligible) {
      let matchScore = 85;
      const reasons: string[] = ['Age 65+ or disability qualifies you for Medicare'];
      
      if (profile.hasDisability) {
        matchScore += 10;
        reasons.push('Disability provides early Medicare eligibility');
      }
      
      if (profile.budget === 'low') {
        matchScore += 15;
        reasons.push('$0 premium plans available');
      }
      
      if (profile.networkPreference === 'narrow') {
        matchScore += 5;
        reasons.push('HMO plans offer focused provider networks');
      }

      results.push({
        id: 'medicare-advantage',
        title: 'Medicare Advantage Plans',
        description: 'Comprehensive coverage combining Medicare Parts A, B, and often D with additional benefits.',
        serviceType: 'medicare-advantage',
        icon: '🏥',
        color: 'blue',
        href: '/medicare-advantage',
        matchScore: Math.min(100, matchScore),
        reasons,
        estimatedCost: profile.budget === 'low' ? '$0 - $50/month' : '$50 - $150/month',
        enrollmentUrgency: isApproaching65 ? 'planning' : 'flexible',
        specialConsiderations: [
          'Check provider networks in your area',
          'Compare prescription drug coverage',
          'Review additional benefits (dental, vision, hearing)',
          'Consider out-of-pocket maximums'
        ],
        nextSteps: [
          'Confirm Medicare enrollment status',
          'Compare plans in your zip code',
          'Check if your doctors are in-network',
          'Review prescription drug formularies'
        ],
        alternatives: ['Medicare Supplement + Part D', 'Original Medicare only']
      });
    }

    // Medicare Supplement Recommendations
    if (isMedicareEligible) {
      let matchScore = 80;
      const reasons: string[] = ['Age 65+ or disability qualifies you for Medicare'];
      
      if (profile.networkPreference === 'broad') {
        matchScore += 15;
        reasons.push('No network restrictions - see any doctor');
      }
      
      if (profile.budget === 'high') {
        matchScore += 10;
        reasons.push('Comprehensive coverage with predictable costs');
      }
      
      if (profile.healthNeeds && profile.healthNeeds.includes('frequent-care')) {
        matchScore += 10;
        reasons.push('Frequent care needs benefit from predictable costs');
      }

      results.push({
        id: 'medicare-supplement',
        title: 'Medicare Supplement (Medigap) Plans',
        description: 'Gap coverage for Original Medicare that helps pay out-of-pocket costs.',
        serviceType: 'medicare-supplement',
        icon: '🛡️',
        color: 'green',
        href: '/medicare-supplement-plan-g',
        matchScore: Math.min(100, matchScore),
        reasons,
        estimatedCost: profile.budget === 'high' ? '$200 - $400/month' : '$100 - $300/month',
        enrollmentUrgency: isApproaching65 ? 'immediate' : 'soon',
        specialConsiderations: [
          'Best rates during Medigap Open Enrollment Period',
          'Guaranteed issue rights may apply',
          'Standardized benefits across carriers',
          'Consider Plan G for comprehensive coverage'
        ],
        nextSteps: [
          'Enroll during your Medigap Open Enrollment Period',
          'Compare standardized plans (A, B, C, D, F, G, K, L, M, N)',
          'Check if you qualify for guaranteed issue rights',
          'Consider your budget and health needs'
        ],
        alternatives: ['Medicare Advantage', 'Original Medicare only']
      });
    }

    // Medicare Part D Recommendations
    if (isMedicareEligible) {
      let matchScore = 75;
      const reasons: string[] = ['Prescription drug coverage needed'];
      
      if (profile.healthNeeds && profile.healthNeeds.includes('prescriptions')) {
        matchScore += 15;
        reasons.push('Regular prescription medications require coverage');
      }
      
      if (incomePercentOfFPL <= 150) {
        matchScore += 20;
        reasons.push('Extra Help available for low income');
      }

      results.push({
        id: 'medicare-part-d',
        title: 'Medicare Part D Prescription Drug Plans',
        description: 'Standalone prescription drug coverage for Original Medicare beneficiaries.',
        serviceType: 'medicare-part-d',
        icon: '💊',
        color: 'purple',
        href: '/medicare-part-d',
        matchScore: Math.min(100, matchScore),
        reasons,
        estimatedCost: incomePercentOfFPL <= 150 ? '$0 - $10/month' : '$15 - $50/month',
        enrollmentUrgency: 'flexible',
        specialConsiderations: [
          'Compare formularies for your medications',
          'Check pharmacy networks',
          'Apply for Extra Help if income-eligible',
          'Consider Medicare Advantage plans with drug coverage'
        ],
        nextSteps: [
          'List all your current medications',
          'Compare Part D plans in your area',
          'Check if your medications are covered',
          'Apply for Extra Help if eligible'
        ],
        alternatives: ['Medicare Advantage with drug coverage', 'Employer prescription coverage']
      });
    }

    // Medicare Extra Help Recommendations
    if (isMedicareEligible && (profile.hasMedicaid || profile.hasSSI || profile.hasMedicareSavingsProgram || incomePercentOfFPL <= 150)) {
      results.push({
        id: 'medicare-extra-help',
        title: 'Medicare Extra Help (Low Income Subsidy)',
        description: 'Federal program that helps pay Medicare Part D costs for limited income beneficiaries.',
        serviceType: 'medicare-extra-help',
        icon: '💰',
        color: 'orange',
        href: '/medicare-extra-help',
        matchScore: 95,
        reasons: [
          'Income below 150% of Federal Poverty Level',
          'Can significantly reduce prescription drug costs',
          'Available year-round'
        ],
        estimatedCost: '$0 - $10/month for most medications',
        enrollmentUrgency: 'immediate',
        specialConsiderations: [
          'Apply through Social Security Administration',
          'Benefits are retroactive to application date',
          'Can change Part D plans any time',
          'No enrollment periods'
        ],
        nextSteps: [
          'Apply for Extra Help online or by phone',
          'Gather income and resource documentation',
          'Choose a Part D plan to use benefits',
          'Contact us for application assistance'
        ],
        alternatives: ['Regular Part D plans', 'Medicare Advantage with drug coverage']
      });
    }

    // Health Insurance Marketplace Recommendations
    if (!profile.hasEmployerCoverage && profile.income >= fpl && profile.income <= fpl * 4 && isUnder65) {
      let matchScore = 70;
      const reasons: string[] = ['Under 65 and no employer coverage'];
      
      if (incomePercentOfFPL <= 250) {
        matchScore += 20;
        reasons.push('Eligible for significant premium subsidies');
      }
      
      if (profile.budget === 'low') {
        matchScore += 15;
        reasons.push('Subsidies can reduce costs significantly');
      }
      
      if (profile.healthNeeds && profile.healthNeeds.includes('comprehensive')) {
        matchScore += 10;
        reasons.push('Comprehensive coverage available');
      }

      results.push({
        id: 'health-marketplace',
        title: 'Health Insurance Marketplace Plans',
        description: 'ACA-compliant health insurance with premium tax credits and cost-sharing reductions.',
        serviceType: 'health-marketplace',
        icon: '🏛️',
        color: 'purple',
        href: '/health-insurance-marketplace',
        matchScore: Math.min(100, matchScore),
        reasons,
        estimatedCost: incomePercentOfFPL <= 250 ? 'Subsidized - varies by income' : 'Market rate - subsidies available',
        enrollmentUrgency: 'flexible',
        specialConsiderations: [
          'Open Enrollment period required (Nov 1 - Jan 15)',
          'Special Enrollment Periods may apply',
          'Subsidies based on income and household size',
          'Essential health benefits guaranteed'
        ],
        nextSteps: [
          'Check income eligibility for subsidies',
          'Compare plans during Open Enrollment',
          'Apply for premium tax credits',
          'Consider Special Enrollment Periods'
        ],
        alternatives: ['Employer coverage', 'Medicaid', 'Short-term health plans']
      });
    }

    // Medicaid Recommendations
    if (profile.hasMedicaid || profile.hasSSI || incomePercentOfFPL <= 138) {
      results.push({
        id: 'medicaid',
        title: 'Medicaid Coverage',
        description: 'State and federal health coverage for low-income individuals and families.',
        serviceType: 'medicaid',
        icon: '🏥',
        color: 'green',
        href: '/contact',
        matchScore: 90,
        reasons: [
          'Low income qualifies for Medicaid',
          'Comprehensive coverage with low cost-sharing',
          'Available year-round'
        ],
        estimatedCost: 'Low or no cost',
        enrollmentUrgency: 'immediate',
        specialConsiderations: [
          'Apply through your state Medicaid agency',
          'Income and resource limits vary by state',
          'Can coordinate with Medicare if eligible',
          'No enrollment periods'
        ],
        nextSteps: [
          'Apply through your state Medicaid agency',
          'Check income and resource limits',
          'Gather required documentation',
          'Contact us for application assistance'
        ],
        alternatives: ['Health Insurance Marketplace', 'Medicare (if eligible)', 'Employer coverage']
      });
    }

    // VA Health Benefits
    if (profile.isVeteran) {
      results.push({
        id: 'va-health',
        title: 'VA Health Benefits',
        description: 'Comprehensive health care for eligible veterans through the Department of Veterans Affairs.',
        serviceType: 'va-health',
        icon: '🎖️',
        color: 'red',
        href: '/contact',
        matchScore: 95,
        reasons: [
          'Veteran status qualifies for VA benefits',
          'Comprehensive health care coverage',
          'Can coordinate with Medicare'
        ],
        estimatedCost: 'Varies by priority group and income',
        enrollmentUrgency: 'soon',
        specialConsiderations: [
          'Apply for VA health care benefits',
          'Determine priority group',
          'Can use alongside Medicare',
          'Check local VA facility availability'
        ],
        nextSteps: [
          'Apply for VA health care benefits',
          'Determine priority group',
          'Schedule initial health assessment',
          'Coordinate with other coverage'
        ],
        alternatives: ['Medicare', 'Health Insurance Marketplace', 'Employer coverage']
      });
    }

    // Indian Health Service
    if (profile.isNativeAmerican) {
      results.push({
        id: 'ihs',
        title: 'Indian Health Service',
        description: 'Health care services for American Indians and Alaska Natives.',
        serviceType: 'ihs',
        icon: '🏞️',
        color: 'brown',
        href: '/contact',
        matchScore: 95,
        reasons: [
          'American Indian/Alaska Native status',
          'Comprehensive health services',
          'Cultural competency'
        ],
        estimatedCost: 'No cost for most services',
        enrollmentUrgency: 'soon',
        specialConsiderations: [
          'Contact local IHS facility',
          'Verify tribal membership',
          'Can use alongside Medicare and other insurance',
          'Traditional healing options available'
        ],
        nextSteps: [
          'Contact local IHS facility',
          'Verify tribal membership',
          'Schedule initial appointment',
          'Coordinate with other coverage'
        ],
        alternatives: ['Medicare', 'Health Insurance Marketplace', 'Medicaid']
      });
    }

    // Sort by match score and filter by user context
    return results
      .filter(result => userContext === 'general' || result.serviceType.includes(userContext))
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, maxRecommendations);
  };

  useEffect(() => {
    if (userProfile && Object.keys(userProfile).length > 0) {
      const recs = generateRecommendations(userProfile);
      setRecommendations(recs);
    }
  }, [userProfile, userContext, maxRecommendations]);

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 80) return 'bg-blue-100 text-blue-800';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'immediate': return 'bg-red-100 text-red-800';
      case 'soon': return 'bg-orange-100 text-orange-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      case 'flexible': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (recommendations.length === 0 && !showEligibilityCheck) {
    return null;
  }

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🎯 Personalized Service Recommendations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Based on your eligibility and preferences, here are the best Medicare and health insurance options for you.
          </p>
        </div>

        {/* Eligibility Check Prompt */}
        {showEligibilityCheck && recommendations.length === 0 && (
          <div className="text-center mb-8">
            <div className="bg-blue-50 border-2 border-blue-300 p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Check Your Eligibility</h3>
              <p className="text-gray-700 mb-6">
                To get personalized service recommendations, we need to know a bit about your situation. 
                This helps us suggest the best Medicare and health insurance options for you.
              </p>
              <button
                onClick={() => setShowEligibilityForm(true)}
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Eligibility Assessment
              </button>
            </div>
          </div>
        )}

        {/* Eligibility Form */}
        {showEligibilityForm && (
          <div className="mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Eligibility Check</h3>
                <p className="text-gray-600">Answer a few questions to get personalized recommendations</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    min="0"
                    max="120"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your age"
                    onChange={(e) => {
                      const age = parseInt(e.target.value) || 0;
                      const newProfile = { ...userProfile, age };
                      const recs = generateRecommendations(newProfile);
                      setRecommendations(recs);
                    }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income</label>
                  <input
                    type="number"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter annual income"
                    onChange={(e) => {
                      const income = parseInt(e.target.value) || 0;
                      const newProfile = { ...userProfile, income };
                      const recs = generateRecommendations(newProfile);
                      setRecommendations(recs);
                    }}
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setShowEligibilityForm(false)}
                  className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors mr-4"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                >
                  Get Full Assessment
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {recommendations.map((recommendation, index) => (
              <div key={recommendation.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`p-6 ${recommendation.color === 'blue' ? 'bg-blue-50' : recommendation.color === 'green' ? 'bg-green-50' : recommendation.color === 'purple' ? 'bg-purple-50' : recommendation.color === 'orange' ? 'bg-orange-50' : recommendation.color === 'red' ? 'bg-red-50' : 'bg-gray-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-3xl">{recommendation.icon}</div>
                    {showMatchScores && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMatchScoreColor(recommendation.matchScore)}`}>
                        {recommendation.matchScore}% Match
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{recommendation.title}</h3>
                  <p className="text-gray-700 text-sm">{recommendation.description}</p>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Why This Matches:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {recommendation.reasons.map((reason, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Estimated Cost:</div>
                      <div className="font-semibold text-gray-900">{recommendation.estimatedCost}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm text-blue-600 font-medium">Enrollment Urgency:</div>
                      <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(recommendation.enrollmentUrgency)}`}>
                        {recommendation.enrollmentUrgency.charAt(0).toUpperCase() + recommendation.enrollmentUrgency.slice(1)}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Special Considerations:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {recommendation.specialConsiderations.map((consideration, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Next Steps:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {recommendation.nextSteps.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-500 mr-2 mt-1">→</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {showAlternatives && recommendation.alternatives.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Alternative Options:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {recommendation.alternatives.map((alternative, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-gray-500 mr-2 mt-1">↔</span>
                            {alternative}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    href={recommendation.href}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        {recommendations.length > 0 && (
          <div className="text-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Get Personalized Help
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
