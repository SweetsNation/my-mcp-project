'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const enrollmentPeriods = [
  {
    id: 'aep',
    title: 'Annual Open Enrollment (AEP)',
    period: 'October 15 - December 7',
    description: 'The main enrollment period when anyone with Medicare can enroll in or switch Medicare Advantage plans.',
    details: [
      'Available to all Medicare beneficiaries',
      'Can enroll in a new Medicare Advantage plan',
      'Can switch from one Medicare Advantage plan to another',
      'Can switch from Medicare Advantage back to Original Medicare',
      'Changes take effect January 1st',
    ],
  },
  {
    id: 'ma-oep',
    title: 'Medicare Advantage Open Enrollment',
    period: 'January 1 - March 31',
    description: 'If you\'re already enrolled in a Medicare Advantage plan, you can make one change during this period.',
    details: [
      'Only available if you\'re already in a Medicare Advantage plan',
      'Can switch to a different Medicare Advantage plan',
      'Can switch back to Original Medicare and enroll in a Part D plan',
      'Cannot enroll in Medicare Advantage for the first time',
      'Changes take effect the first day of the following month',
    ],
  },
  {
    id: 'initial',
    title: 'Initial Enrollment Period (IEP)',
    period: '7-month period around your 65th birthday',
    description: 'When you first become eligible for Medicare, you have a 7-month window to enroll.',
    details: [
      '3 months before your 65th birthday month',
      'Your 65th birthday month',
      '3 months after your 65th birthday month',
      'Best time to enroll to avoid penalties',
      'Coverage can start as early as the first day of your birthday month',
    ],
  },
  {
    id: 'special',
    title: 'Special Enrollment Periods (SEP)',
    period: 'Various times based on qualifying events',
    description: 'Special circumstances that allow you to enroll or change plans outside of regular enrollment periods.',
    details: [
      'Moving to a new area',
      'Losing other health coverage',
      'Qualifying for Extra Help with prescription costs',
      'Plan changes or leaves Medicare program',
      'Usually 63 days to make changes after qualifying event',
    ],
  },
];

const enrollmentSteps = [
  {
    step: 1,
    title: 'Check Your Eligibility',
    description: 'Make sure you\'re eligible for Medicare and determine your enrollment period.',
    icon: '📋',
  },
  {
    step: 2,
    title: 'Compare Plans',
    description: 'Use our comparison tool or speak with an agent to find plans that meet your needs.',
    icon: '🔍',
  },
  {
    step: 3,
    title: 'Gather Information',
    description: 'Collect your Medicare card, current medications list, and preferred doctors.',
    icon: '📄',
  },
  {
    step: 4,
    title: 'Enroll in Your Plan',
    description: 'Complete your enrollment online, by phone, or with the help of a licensed agent.',
    icon: '✍️',
  },
  {
    step: 5,
    title: 'Receive Confirmation',
    description: 'You\'ll receive enrollment confirmation and your new member materials.',
    icon: '✅',
  },
];

export function EnrollmentGuide() {
  const [activeTab, setActiveTab] = useState('periods');
  const [expandedPeriod, setExpandedPeriod] = useState<string | null>('aep');

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Medicare Advantage Enrollment Guide
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Understanding when and how to enroll in Medicare Advantage is crucial for getting 
          the coverage you need when you need it.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('periods')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'periods'
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Enrollment Periods
          </button>
          <button
            onClick={() => setActiveTab('steps')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'steps'
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Enrollment Steps
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'periods' && (
          <motion.div
            key="periods"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Medicare Enrollment Periods
              </h3>
              <div className="space-y-4">
                {enrollmentPeriods.map((period) => (
                  <div key={period.id} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setExpandedPeriod(expandedPeriod === period.id ? null : period.id)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{period.title}</h4>
                          <p className="text-primary-600 font-medium">{period.period}</p>
                          <p className="text-gray-600 text-sm mt-1">{period.description}</p>
                        </div>
                        <svg
                          className={`w-5 h-5 text-gray-400 transform transition-transform ${
                            expandedPeriod === period.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    <AnimatePresence>
                      {expandedPeriod === period.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-6 pb-4"
                        >
                          <ul className="space-y-2">
                            {period.details.map((detail, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'steps' && (
          <motion.div
            key="steps"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                5 Steps to Enroll in Medicare Advantage
              </h3>
              <div className="space-y-6">
                {enrollmentSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-grow">
                      <div className="flex items-center mb-2">
                        <span className="bg-primary-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
                          {step.step}
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    {index < enrollmentSteps.length - 1 && (
                      <div className="absolute left-6 mt-12 w-0.5 h-6 bg-gray-200"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <div className="mt-8 bg-secondary-50 rounded-xl p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Need Help with Enrollment?
        </h3>
        <p className="text-gray-600 mb-4">
          Our licensed agents can help you navigate the enrollment process and find the right plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="tel:331-343-2584" 
            className="btn-primary inline-block text-center"
          >
            Call 331-343-2584
          </a>
          <a 
            href="/contact" 
            className="btn-secondary inline-block text-center"
          >
            Start Online Enrollment
          </a>
        </div>
      </div>
    </section>
  );
}