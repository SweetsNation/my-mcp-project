'use client';

import { useState } from 'react';
import Link from 'next/link';

interface EligibilityCriteria {
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
}

interface ServiceEligibility {
  service: string;
  title: string;
  description: string;
  eligibility: 'eligible' | 'potentially-eligible' | 'not-eligible' | 'requires-enrollment';
  priority: 'high' | 'medium' | 'low';
  icon: string;
  color: string;
  href: string;
  requirements: string[];
  benefits: string[];
  estimatedCost: string;
  nextSteps: string[];
  enrollmentPeriod?: string;
  specialNotes?: string;
}

interface EligibilityAssessmentProps {
  showForm?: boolean;
  showResults?: boolean;
  userContext?: 'medicare-advantage' | 'medicare-supplement' | 'health-marketplace' | 'general';
  maxRecommendations?: number;
}

export default function EligibilityAssessment({
  showForm = true,
  showResults = true,
  userContext = 'general',
  maxRecommendations = 6
}: EligibilityAssessmentProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<EligibilityCriteria>({
    age: 0,
    income: 0,
    householdSize: 1,
    state: '',
    county: '',
    hasDisability: false,
    hasEndStageRenalDisease: false,
    hasAmyotrophicLateralSclerosis: false,
    hasEmployerCoverage: false,
    isVeteran: false,
    isNativeAmerican: false,
    hasMedicaid: false,
    hasSSI: false,
    hasMedicareSavingsProgram: false,
  });
  const [eligibilityResults, setEligibilityResults] = useState<ServiceEligibility[]>([]);

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

  const assessEligibility = (criteria: EligibilityCriteria): ServiceEligibility[] => {
    const results: ServiceEligibility[] = [];
    const fpl = getFPL(criteria.householdSize);
    const incomePercentOfFPL = (criteria.income / fpl) * 100;
    const isMedicareEligible = criteria.age >= 65 || criteria.hasDisability || criteria.hasEndStageRenalDisease || criteria.hasAmyotrophicLateralSclerosis;

    // Medicare Advantage Eligibility
    if (isMedicareEligible) {
      results.push({
        service: 'medicare-advantage',
        title: 'Medicare Advantage Plans',
        description: 'Comprehensive coverage combining Medicare Parts A, B, and often D with additional benefits.',
        eligibility: 'eligible',
        priority: 'high',
        icon: '🏥',
        color: 'blue',
        href: '/medicare-advantage',
        requirements: [
          'Enrolled in Medicare Part A and Part B',
          'Live in the plan\'s service area',
          'Not have End-Stage Renal Disease (with exceptions)'
        ],
        benefits: [
          'Often $0 monthly premiums',
          'Additional benefits (dental, vision, hearing)',
          'Out-of-pocket maximum protection',
          'Prescription drug coverage included'
        ],
        estimatedCost: '$0 - $100/month premium + copays',
        nextSteps: [
          'Confirm Medicare enrollment',
          'Compare plans in your area',
          'Check provider networks',
          'Review prescription drug coverage'
        ],
        enrollmentPeriod: 'Initial Enrollment Period, Annual Enrollment Period (Oct 15 - Dec 7), Special Enrollment Periods'
      });
    }

    // Medicare Supplement Eligibility
    if (isMedicareEligible) {
      results.push({
        service: 'medicare-supplement',
        title: 'Medicare Supplement (Medigap) Plans',
        description: 'Gap coverage for Original Medicare that helps pay out-of-pocket costs.',
        eligibility: 'eligible',
        priority: 'high',
        icon: '🛡️',
        color: 'green',
        href: '/medicare-supplement-plan-g',
        requirements: [
          'Enrolled in Medicare Part A and Part B',
          'Best to enroll during Medigap Open Enrollment Period'
        ],
        benefits: [
          'Standardized benefits across carriers',
          'No network restrictions',
          'Predictable out-of-pocket costs',
          'Guaranteed renewable'
        ],
        estimatedCost: '$100 - $300/month premium',
        nextSteps: [
          'Enroll during your Medigap Open Enrollment Period',
          'Compare standardized plans (A, B, C, D, F, G, K, L, M, N)',
          'Consider Plan G for comprehensive coverage',
          'Check if you qualify for guaranteed issue rights'
        ],
        enrollmentPeriod: 'Medigap Open Enrollment Period (6 months after Part B starts)',
        specialNotes: 'Best rates guaranteed during Open Enrollment Period'
      });
    }

    // Medicare Part D Eligibility
    if (isMedicareEligible) {
      results.push({
        service: 'medicare-part-d',
        title: 'Medicare Part D Prescription Drug Plans',
        description: 'Standalone prescription drug coverage for Original Medicare beneficiaries.',
        eligibility: 'eligible',
        priority: 'medium',
        icon: '💊',
        color: 'purple',
        href: '/medicare-part-d',
        requirements: [
          'Enrolled in Medicare Part A and/or Part B',
          'Live in the plan\'s service area'
        ],
        benefits: [
          'Prescription drug coverage',
          'Low-income subsidy (Extra Help) available',
          'Plan comparison tools available',
          'Annual plan changes during Open Enrollment'
        ],
        estimatedCost: '$0 - $50/month premium + deductibles and copays',
        nextSteps: [
          'Compare Part D plans in your area',
          'Check if your medications are covered',
          'Apply for Extra Help if income-eligible',
          'Consider Medicare Advantage plans with drug coverage'
        ],
        enrollmentPeriod: 'Initial Enrollment Period, Annual Enrollment Period (Oct 15 - Dec 7)'
      });
    }

    // Medicare Extra Help Eligibility
    if (isMedicareEligible && (criteria.hasMedicaid || criteria.hasSSI || criteria.hasMedicareSavingsProgram || incomePercentOfFPL <= 150)) {
      results.push({
        service: 'medicare-extra-help',
        title: 'Medicare Extra Help (Low Income Subsidy)',
        description: 'Federal program that helps pay Medicare Part D costs for limited income beneficiaries.',
        eligibility: criteria.hasMedicaid || criteria.hasSSI || criteria.hasMedicareSavingsProgram ? 'eligible' : 'potentially-eligible',
        priority: 'high',
        icon: '💰',
        color: 'orange',
        href: '/medicare-extra-help',
        requirements: [
          'Enrolled in Medicare Part D',
          'Limited income and resources',
          'Income below 150% of Federal Poverty Level'
        ],
        benefits: [
          'Reduced or $0 monthly premiums',
          'Lower deductibles and copays',
          'No coverage gap (donut hole)',
          'Year-round plan changes'
        ],
        estimatedCost: '$0 - $10/month for most medications',
        nextSteps: [
          'Apply through Social Security Administration',
          'Gather income and resource documentation',
          'Choose a Part D plan to use benefits',
          'Contact us for application assistance'
        ],
        specialNotes: 'Available year-round, no enrollment periods'
      });
    }

    // Health Insurance Marketplace Eligibility
    if (!criteria.hasEmployerCoverage && criteria.income >= fpl && criteria.income <= fpl * 4) {
      results.push({
        service: 'health-marketplace',
        title: 'Health Insurance Marketplace Plans',
        description: 'ACA-compliant health insurance with premium tax credits and cost-sharing reductions.',
        eligibility: 'eligible',
        priority: criteria.age < 65 ? 'high' : 'medium',
        icon: '🏛️',
        color: 'purple',
        href: '/health-insurance-marketplace',
        requirements: [
          'Not eligible for Medicare',
          'No affordable employer coverage',
          'Income between 100-400% of Federal Poverty Level',
          'U.S. citizen or legal resident'
        ],
        benefits: [
          'Premium tax credits available',
          'Cost-sharing reductions for lower income',
          'Essential health benefits guaranteed',
          'No pre-existing condition exclusions'
        ],
        estimatedCost: 'Varies by income - subsidies available',
        nextSteps: [
          'Check income eligibility for subsidies',
          'Compare plans during Open Enrollment',
          'Apply for premium tax credits',
          'Consider Special Enrollment Periods'
        ],
        enrollmentPeriod: 'Annual Open Enrollment (Nov 1 - Jan 15), Special Enrollment Periods'
      });
    }

    // Medicaid Eligibility
    if (criteria.hasMedicaid || criteria.hasSSI || incomePercentOfFPL <= 138) {
      results.push({
        service: 'medicaid',
        title: 'Medicaid Coverage',
        description: 'State and federal health coverage for low-income individuals and families.',
        eligibility: criteria.hasMedicaid || criteria.hasSSI ? 'eligible' : 'potentially-eligible',
        priority: 'high',
        icon: '🏥',
        color: 'green',
        href: '/contact',
        requirements: [
          'Low income (varies by state)',
          'U.S. citizen or legal resident',
          'State residency requirements'
        ],
        benefits: [
          'Comprehensive health coverage',
          'Low or no cost-sharing',
          'Covers essential health benefits',
          'Long-term care services'
        ],
        estimatedCost: 'Low or no cost',
        nextSteps: [
          'Apply through your state Medicaid agency',
          'Check income and resource limits',
          'Gather required documentation',
          'Contact us for application assistance'
        ],
        specialNotes: 'Available year-round, no enrollment periods'
      });
    }

    // VA Health Benefits
    if (criteria.isVeteran) {
      results.push({
        service: 'va-health',
        title: 'VA Health Benefits',
        description: 'Comprehensive health care for eligible veterans through the Department of Veterans Affairs.',
        eligibility: 'eligible',
        priority: 'high',
        icon: '🎖️',
        color: 'red',
        href: '/contact',
        requirements: [
          'Honorable discharge from military service',
          'Meet service requirements',
          'Income and asset limits may apply'
        ],
        benefits: [
          'Comprehensive health care',
          'Prescription drug coverage',
          'Mental health services',
          'Long-term care options'
        ],
        estimatedCost: 'Varies by priority group and income',
        nextSteps: [
          'Apply for VA health care benefits',
          'Determine priority group',
          'Schedule initial health assessment',
          'Coordinate with other coverage'
        ],
        specialNotes: 'Can be used alongside Medicare'
      });
    }

    // Indian Health Service
    if (criteria.isNativeAmerican) {
      results.push({
        service: 'ihs',
        title: 'Indian Health Service',
        description: 'Health care services for American Indians and Alaska Natives.',
        eligibility: 'eligible',
        priority: 'high',
        icon: '🏞️',
        color: 'brown',
        href: '/contact',
        requirements: [
          'American Indian or Alaska Native',
          'Member of federally recognized tribe',
          'Live in IHS service area'
        ],
        benefits: [
          'Comprehensive health services',
          'No cost-sharing for most services',
          'Cultural competency',
          'Traditional healing options'
        ],
        estimatedCost: 'No cost for most services',
        nextSteps: [
          'Contact local IHS facility',
          'Verify tribal membership',
          'Schedule initial appointment',
          'Coordinate with other coverage'
        ],
        specialNotes: 'Can be used alongside Medicare and other insurance'
      });
    }

    // Medicare Savings Programs
    if (isMedicareEligible && incomePercentOfFPL <= 150) {
      results.push({
        service: 'medicare-savings',
        title: 'Medicare Savings Programs',
        description: 'State programs that help pay Medicare premiums, deductibles, and coinsurance.',
        eligibility: 'potentially-eligible',
        priority: 'high',
        icon: '💳',
        color: 'blue',
        href: '/contact',
        requirements: [
          'Enrolled in Medicare Part A',
          'Limited income and resources',
          'State-specific eligibility criteria'
        ],
        benefits: [
          'Help with Medicare Part B premiums',
          'Assistance with deductibles and coinsurance',
          'Automatic Extra Help qualification',
          'State-specific additional benefits'
        ],
        estimatedCost: 'Varies by program and income level',
        nextSteps: [
          'Contact your state Medicaid office',
          'Check income and resource limits',
          'Apply for MSP benefits',
          'Coordinate with Extra Help application'
        ],
        specialNotes: 'Available year-round, no enrollment periods'
      });
    }

    // Sort by priority and eligibility
    return results.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      const eligibilityOrder = { eligible: 3, 'potentially-eligible': 2, 'not-eligible': 1, 'requires-enrollment': 2 };
      
      const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
      if (priorityDiff !== 0) return priorityDiff;
      
      return eligibilityOrder[b.eligibility] - eligibilityOrder[a.eligibility];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const results = assessEligibility(formData);
    setEligibilityResults(results);
    setStep(2);
  };

  const getEligibilityColor = (eligibility: string) => {
    switch (eligibility) {
      case 'eligible': return 'bg-green-100 text-green-800 border-green-200';
      case 'potentially-eligible': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'not-eligible': return 'bg-red-100 text-red-800 border-red-200';
      case 'requires-enrollment': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (step === 1 && showForm) {
    return (
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🔍 Eligibility Assessment</h2>
            <p className="text-lg text-gray-600">
              Answer a few questions to discover which Medicare and health insurance services you're eligible for.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  max="120"
                  value={formData.age || ''}
                  onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your age"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Household Income *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.income || ''}
                  onChange={(e) => setFormData({ ...formData, income: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter annual income"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Household Size *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  max="10"
                  value={formData.householdSize || ''}
                  onChange={(e) => setFormData({ ...formData, householdSize: parseInt(e.target.value) || 1 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Number of people"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <select
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select your state</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Special Circumstances</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.hasDisability}
                    onChange={(e) => setFormData({ ...formData, hasDisability: e.target.checked })}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Have a disability (under 65)</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.hasEndStageRenalDisease}
                    onChange={(e) => setFormData({ ...formData, hasEndStageRenalDisease: e.target.checked })}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">End-Stage Renal Disease</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.hasAmyotrophicLateralSclerosis}
                    onChange={(e) => setFormData({ ...formData, hasAmyotrophicLateralSclerosis: e.target.checked })}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Amyotrophic Lateral Sclerosis (ALS)</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.hasEmployerCoverage}
                    onChange={(e) => setFormData({ ...formData, hasEmployerCoverage: e.target.checked })}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Have employer health coverage</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.isVeteran}
                    onChange={(e) => setFormData({ ...formData, isVeteran: e.target.checked })}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Veteran</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.isNativeAmerican}
                    onChange={(e) => setFormData({ ...formData, isNativeAmerican: e.target.checked })}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">American Indian/Alaska Native</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.hasMedicaid}
                    onChange={(e) => setFormData({ ...formData, hasMedicaid: e.target.checked })}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Currently have Medicaid</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.hasSSI}
                    onChange={(e) => setFormData({ ...formData, hasSSI: e.target.checked })}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Receive SSI benefits</span>
                </label>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Check My Eligibility
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  if (step === 2 && showResults && eligibilityResults.length > 0) {
    const filteredResults = eligibilityResults
      .filter(result => userContext === 'general' || result.service.includes(userContext))
      .slice(0, maxRecommendations);

    return (
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Your Eligibility Results</h2>
            <p className="text-lg text-gray-600">
              Based on your information, here are the services you're eligible for:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredResults.map((result, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`p-6 ${getEligibilityColor(result.eligibility)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-3xl">{result.icon}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(result.priority)}`}>
                      {result.priority.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{result.title}</h3>
                  <p className="text-gray-700 text-sm">{result.description}</p>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {result.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {result.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Estimated Cost:</div>
                      <div className="font-semibold text-gray-900">{result.estimatedCost}</div>
                    </div>
                  </div>

                  {result.enrollmentPeriod && (
                    <div className="mb-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm text-blue-600 font-medium">Enrollment Period:</div>
                        <div className="text-sm text-blue-800">{result.enrollmentPeriod}</div>
                      </div>
                    </div>
                  )}

                  {result.specialNotes && (
                    <div className="mb-4">
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="text-sm text-yellow-600 font-medium">Special Notes:</div>
                        <div className="text-sm text-yellow-800">{result.specialNotes}</div>
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Next Steps:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {result.nextSteps.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-500 mr-2 mt-1">→</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={result.href}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setStep(1)}
              className="bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors mr-4"
            >
              Start Over
            </button>
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Get Personalized Help
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return null;
}
