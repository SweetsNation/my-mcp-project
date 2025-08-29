'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface EnrollmentPeriod {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  type: 'initial' | 'annual' | 'special' | 'open' | 'continuous';
  applicableServices: string[];
  eligibility: string[];
  actions: string[];
  icon: string;
  color: string;
  priority: 'high' | 'medium' | 'low';
  isActive: boolean;
  daysRemaining?: number;
  specialNotes?: string;
}

interface EnrollmentTimelineProps {
  userContext?: 'medicare-advantage' | 'medicare-supplement' | 'health-marketplace' | 'medicare-part-d' | 'general';
  userAge?: number;
  showActiveOnly?: boolean;
  maxPeriods?: number;
  showCountdown?: boolean;
  layout?: 'timeline' | 'grid' | 'list';
}

export default function EnrollmentTimeline({
  userContext = 'general',
  userAge,
  showActiveOnly = false,
  maxPeriods = 8,
  showCountdown = true,
  layout = 'timeline'
}: EnrollmentTimelineProps) {
  const [enrollmentPeriods, setEnrollmentPeriods] = useState<EnrollmentPeriod[]>([]);
  const [currentDate] = useState(new Date());

  // Calculate days remaining for a period
  const calculateDaysRemaining = (endDate: string): number => {
    const end = new Date(endDate);
    const diffTime = end.getTime() - currentDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  // Check if a period is currently active
  const isPeriodActive = (period: EnrollmentPeriod): boolean => {
    const start = new Date(period.startDate);
    const end = new Date(period.endDate);
    return currentDate >= start && currentDate <= end;
  };

  // Get current year enrollment periods
  const getCurrentYearPeriods = (): EnrollmentPeriod[] => {
    const currentYear = currentDate.getFullYear();
    const nextYear = currentYear + 1;
    
    return [
      {
        id: 'medicare-iep',
        name: 'Medicare Initial Enrollment Period',
        description: '7-month window around your 65th birthday or disability onset to enroll in Medicare.',
        startDate: `${currentYear}-01-01`,
        endDate: `${currentYear}-12-31`,
        type: 'initial',
        applicableServices: ['medicare-advantage', 'medicare-supplement', 'medicare-part-d'],
        eligibility: ['Turning 65', 'Disability onset', 'First time Medicare eligible'],
        actions: [
          'Enroll in Medicare Part A and Part B',
          'Choose Medicare Advantage or Original Medicare',
          'Select Medicare Supplement plan',
          'Enroll in Part D prescription drug coverage'
        ],
        icon: '🎂',
        color: 'blue',
        priority: 'high',
        isActive: false,
        specialNotes: 'Timing is critical - late enrollment can result in penalties'
      },
      {
        id: 'medicare-aep',
        name: 'Medicare Annual Enrollment Period',
        description: 'Annual opportunity to change Medicare Advantage and Part D plans.',
        startDate: `${currentYear}-10-15`,
        endDate: `${currentYear}-12-07`,
        type: 'annual',
        applicableServices: ['medicare-advantage', 'medicare-part-d'],
        eligibility: ['Currently enrolled in Medicare'],
        actions: [
          'Switch Medicare Advantage plans',
          'Change Part D prescription drug plans',
          'Switch from Original Medicare to Medicare Advantage',
          'Switch from Medicare Advantage to Original Medicare'
        ],
        icon: '📅',
        color: 'green',
        priority: 'high',
        isActive: isPeriodActive({ startDate: `${currentYear}-10-15`, endDate: `${currentYear}-12-07` } as EnrollmentPeriod),
        daysRemaining: calculateDaysRemaining(`${currentYear}-12-07`),
        specialNotes: 'Changes take effect January 1st of the following year'
      },
      {
        id: 'medigap-oep',
        name: 'Medigap Open Enrollment Period',
        description: '6-month window after Part B starts for guaranteed issue Medigap plans.',
        startDate: `${currentYear}-01-01`,
        endDate: `${currentYear}-12-31`,
        type: 'initial',
        applicableServices: ['medicare-supplement'],
        eligibility: ['Recently enrolled in Medicare Part B'],
        actions: [
          'Compare standardized Medigap plans',
          'Choose Plan G for comprehensive coverage',
          'Lock in best rates with guaranteed issue',
          'Avoid medical underwriting'
        ],
        icon: '🛡️',
        color: 'purple',
        priority: 'high',
        isActive: false,
        specialNotes: 'Best rates guaranteed during this period - timing is critical'
      },
      {
        id: 'marketplace-oep',
        name: 'Health Insurance Marketplace Open Enrollment',
        description: 'Annual enrollment period for ACA-compliant health insurance plans.',
        startDate: `${currentYear}-11-01`,
        endDate: `${nextYear}-01-15`,
        type: 'open',
        applicableServices: ['health-marketplace'],
        eligibility: ['Under 65', 'No employer coverage', 'U.S. citizen or legal resident'],
        actions: [
          'Compare Marketplace plans',
          'Apply for premium tax credits',
          'Check cost-sharing reductions',
          'Enroll in comprehensive coverage'
        ],
        icon: '🏛️',
        color: 'orange',
        priority: userAge && userAge < 65 ? 'high' : 'low',
        isActive: isPeriodActive({ startDate: `${currentYear}-11-01`, endDate: `${nextYear}-01-15` } as EnrollmentPeriod),
        daysRemaining: calculateDaysRemaining(`${nextYear}-01-15`),
        specialNotes: 'Only time to enroll unless you qualify for Special Enrollment Period'
      },
      {
        id: 'medicare-sep',
        name: 'Medicare Special Enrollment Periods',
        description: 'Qualifying life events that allow enrollment outside regular periods.',
        startDate: `${currentYear}-01-01`,
        endDate: `${currentYear}-12-31`,
        type: 'special',
        applicableServices: ['medicare-advantage', 'medicare-supplement', 'medicare-part-d'],
        eligibility: [
          'Moving to new service area',
          'Losing employer coverage',
          'Medicare plan leaving service area',
          'Qualifying for Extra Help'
        ],
        actions: [
          'Verify qualifying event',
          'Document life change',
          'Enroll within 60 days',
          'Contact Medicare for assistance'
        ],
        icon: '⚡',
        color: 'red',
        priority: 'medium',
        isActive: true,
        specialNotes: 'Available year-round for qualifying events'
      },
      {
        id: 'marketplace-sep',
        name: 'Marketplace Special Enrollment Periods',
        description: 'Qualifying life events for Marketplace enrollment outside Open Enrollment.',
        startDate: `${currentYear}-01-01`,
        endDate: `${currentYear}-12-31`,
        type: 'special',
        applicableServices: ['health-marketplace'],
        eligibility: [
          'Getting married or divorced',
          'Having a baby',
          'Losing health coverage',
          'Moving to new area'
        ],
        actions: [
          'Verify qualifying event',
          'Apply within 60 days',
          'Provide documentation',
          'Choose appropriate plan'
        ],
        icon: '🎯',
        color: 'red',
        priority: 'medium',
        isActive: true,
        specialNotes: '60-day window from qualifying event'
      },
      {
        id: 'medicare-extra-help',
        name: 'Medicare Extra Help Application',
        description: 'Year-round application for prescription drug cost assistance.',
        startDate: `${currentYear}-01-01`,
        endDate: `${currentYear}-12-31`,
        type: 'continuous',
        applicableServices: ['medicare-part-d'],
        eligibility: ['Limited income and resources', 'Enrolled in Medicare Part D'],
        actions: [
          'Apply through Social Security',
          'Gather income documentation',
          'Submit application',
          'Choose Part D plan to use benefits'
        ],
        icon: '💰',
        color: 'green',
        priority: 'high',
        isActive: true,
        specialNotes: 'Available year-round - no enrollment periods'
      },
      {
        id: 'medicaid-application',
        name: 'Medicaid Application',
        description: 'Year-round application for low-income health coverage.',
        startDate: `${currentYear}-01-01`,
        endDate: `${currentYear}-12-31`,
        type: 'continuous',
        applicableServices: ['medicaid'],
        eligibility: ['Low income', 'U.S. citizen or legal resident', 'State resident'],
        actions: [
          'Apply through state agency',
          'Provide income documentation',
          'Submit application',
          'Follow up on status'
        ],
        icon: '🏥',
        color: 'green',
        priority: 'high',
        isActive: true,
        specialNotes: 'Available year-round - no enrollment periods'
      }
    ];
  };

  // Filter periods based on user context and preferences
  const filterPeriods = (periods: EnrollmentPeriod[]): EnrollmentPeriod[] => {
    let filtered = periods;

    // Filter by user context
    if (userContext !== 'general') {
      filtered = filtered.filter(period => 
        period.applicableServices.includes(userContext)
      );
    }

    // Filter by active status if requested
    if (showActiveOnly) {
      filtered = filtered.filter(period => period.isActive);
    }

    // Sort by priority and active status
    filtered.sort((a, b) => {
      // Active periods first
      if (a.isActive && !b.isActive) return -1;
      if (!a.isActive && b.isActive) return 1;
      
      // Then by priority
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    return filtered.slice(0, maxPeriods);
  };

  useEffect(() => {
    const periods = getCurrentYearPeriods();
    const filtered = filterPeriods(periods);
    setEnrollmentPeriods(filtered);
  }, [userContext, userAge, showActiveOnly, maxPeriods]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'initial': return 'bg-blue-100 text-blue-800';
      case 'annual': return 'bg-green-100 text-green-800';
      case 'special': return 'bg-red-100 text-red-800';
      case 'open': return 'bg-orange-100 text-orange-800';
      case 'continuous': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (isActive: boolean) => {
    return isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  if (enrollmentPeriods.length === 0) {
    return (
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📅 Enrollment Timeline</h2>
            <p className="text-lg text-gray-600">
              No enrollment periods currently available for your situation.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (layout === 'grid') {
    return (
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📅 Enrollment Timeline</h2>
            <p className="text-lg text-gray-600">
              Key enrollment periods and deadlines for your Medicare and health insurance coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrollmentPeriods.map((period) => (
              <div key={period.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`p-6 ${period.color === 'blue' ? 'bg-blue-50' : period.color === 'green' ? 'bg-green-50' : period.color === 'purple' ? 'bg-purple-50' : period.color === 'orange' ? 'bg-orange-50' : period.color === 'red' ? 'bg-red-50' : 'bg-gray-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-3xl">{period.icon}</div>
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(period.priority)}`}>
                        {period.priority.toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(period.type)}`}>
                        {period.type.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{period.name}</h3>
                  <p className="text-gray-700 text-sm">{period.description}</p>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(period.isActive)}`}>
                        {period.isActive ? 'ACTIVE NOW' : 'UPCOMING'}
                      </span>
                      {showCountdown && period.daysRemaining !== undefined && (
                        <span className="text-sm text-gray-600">
                          {period.daysRemaining} days remaining
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Period:</strong> {new Date(period.startDate).toLocaleDateString()} - {new Date(period.endDate).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Eligibility:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {period.eligibility.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Actions:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {period.actions.map((action, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">→</span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {period.specialNotes && (
                    <div className="mb-4">
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="text-sm text-yellow-600 font-medium">Important:</div>
                        <div className="text-sm text-yellow-800">{period.specialNotes}</div>
                      </div>
                    </div>
                  )}

                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
                  >
                    Get Help
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (layout === 'list') {
    return (
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📅 Enrollment Timeline</h2>
            <p className="text-lg text-gray-600">
              Key enrollment periods and deadlines for your Medicare and health insurance coverage
            </p>
          </div>

          <div className="space-y-4">
            {enrollmentPeriods.map((period) => (
              <div key={period.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{period.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{period.name}</h3>
                      <div className="flex space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(period.priority)}`}>
                          {period.priority.toUpperCase()}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(period.isActive)}`}>
                          {period.isActive ? 'ACTIVE NOW' : 'UPCOMING'}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{period.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Period:</h4>
                        <p className="text-sm text-gray-600">
                          {new Date(period.startDate).toLocaleDateString()} - {new Date(period.endDate).toLocaleDateString()}
                        </p>
                        {showCountdown && period.daysRemaining !== undefined && (
                          <p className="text-sm text-blue-600 font-medium mt-1">
                            {period.daysRemaining} days remaining
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Actions:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {period.actions.slice(0, 2).map((action, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-500 mr-2 mt-1">→</span>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {period.specialNotes && (
                      <div className="mt-3 bg-yellow-50 p-3 rounded-lg">
                        <div className="text-sm text-yellow-600 font-medium">Important:</div>
                        <div className="text-sm text-yellow-800">{period.specialNotes}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default timeline layout
  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">📅 Enrollment Timeline</h2>
          <p className="text-lg text-gray-600">
            Key enrollment periods and deadlines for your Medicare and health insurance coverage
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          <div className="space-y-8">
            {enrollmentPeriods.map((period, index) => (
              <div key={period.id} className="relative flex items-start space-x-6">
                {/* Timeline dot */}
                <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-2xl ${period.isActive ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  {period.icon}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{period.name}</h3>
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(period.priority)}`}>
                        {period.priority.toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(period.type)}`}>
                        {period.type.toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(period.isActive)}`}>
                        {period.isActive ? 'ACTIVE NOW' : 'UPCOMING'}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{period.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Timeline:</h4>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">
                          <strong>Start:</strong> {new Date(period.startDate).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>End:</strong> {new Date(period.endDate).toLocaleDateString()}
                        </div>
                        {showCountdown && period.daysRemaining !== undefined && (
                          <div className="text-sm text-blue-600 font-medium mt-2">
                            {period.daysRemaining} days remaining
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Eligibility:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {period.eligibility.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Actions:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {period.actions.map((action, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">→</span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {period.specialNotes && (
                    <div className="mt-4 bg-yellow-50 p-3 rounded-lg">
                      <div className="text-sm text-yellow-600 font-medium">Important Notes:</div>
                      <div className="text-sm text-yellow-800">{period.specialNotes}</div>
                    </div>
                  )}

                  <div className="mt-4">
                    <Link
                      href="/contact"
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
                    >
                      Get Help with Enrollment
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
