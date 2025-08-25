'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLiveChat } from '@/hooks/useLiveChat';

const faqs = [
  {
    id: 'what-is-medicare-advantage',
    question: 'What is Medicare Advantage?',
    answer: 'Medicare Advantage (Part C) is a private health plan that replaces Original Medicare. It includes all Medicare Part A and Part B benefits, plus often includes prescription drug coverage (Part D) and additional benefits like dental, vision, and hearing aids. These plans are offered by private insurance companies approved by Medicare.',
  },
  {
    id: 'cost-comparison',
    question: 'How much do Medicare Advantage plans cost?',
    answer: 'Many Medicare Advantage plans have $0 monthly premiums, but you still pay your Medicare Part B premium. Plans may have deductibles, copayments, and coinsurance that vary by plan. The maximum out-of-pocket limit for 2024 is $8,850, which provides financial protection that Original Medicare doesn\'t offer.',
  },
  {
    id: 'enrollment-timing',
    question: 'When can I enroll in Medicare Advantage?',
    answer: 'You can enroll during the Annual Open Enrollment Period (October 15 - December 7), the Medicare Advantage Open Enrollment Period (January 1 - March 31) if you\'re already enrolled in a plan, when you first become eligible for Medicare, or during Special Enrollment Periods if you qualify due to certain life events.',
  },
  {
    id: 'difference-original-medicare',
    question: 'What\'s the difference between Medicare Advantage and Original Medicare?',
    answer: 'Medicare Advantage combines Parts A and B into one plan with additional benefits like prescription drugs, dental, and vision. Original Medicare has separate Parts A and B, with no coverage limit, but you need to buy separate Part D and supplement plans. Medicare Advantage has provider networks and referral requirements, while Original Medicare allows you to see any Medicare provider.',
  },
  {
    id: 'network-restrictions',
    question: 'Do Medicare Advantage plans have network restrictions?',
    answer: 'Yes, most Medicare Advantage plans have provider networks. HMO plans typically require you to stay within the network and get referrals for specialists. PPO plans offer more flexibility to see out-of-network providers at higher costs. Always check that your doctors and preferred hospitals are in the plan\'s network before enrolling.',
  },
  {
    id: 'prescription-coverage',
    question: 'Is prescription drug coverage included?',
    answer: 'Most Medicare Advantage plans include prescription drug coverage (Part D) at no additional cost. However, each plan has its own formulary (list of covered drugs) and different copays or coinsurance for medications. It\'s important to check that your medications are covered before choosing a plan.',
  },
  {
    id: 'extra-benefits',
    question: 'What extra benefits might be included?',
    answer: 'Medicare Advantage plans often include benefits not covered by Original Medicare, such as dental care, vision services, hearing aids, fitness programs (like SilverSneakers), transportation to medical appointments, over-the-counter allowances, and wellness programs. Benefits vary by plan and location.',
  },
  {
    id: 'switching-plans',
    question: 'Can I switch Medicare Advantage plans?',
    answer: 'Yes, you can switch plans during the Annual Open Enrollment Period (October 15 - December 7). If you\'re already in a Medicare Advantage plan, you can also make one change during the Medicare Advantage Open Enrollment Period (January 1 - March 31). You may also qualify for Special Enrollment Periods.',
  },
  {
    id: 'travel-coverage',
    question: 'Will I be covered when I travel?',
    answer: 'Medicare Advantage plans must cover emergency and urgent care anywhere in the United States. Some plans also provide coverage for emergency care while traveling internationally. For routine care while traveling, coverage depends on your plan type and whether providers are in your plan\'s network.',
  },
  {
    id: 'star-ratings',
    question: 'What do the star ratings mean?',
    answer: 'Medicare rates plans from 1 to 5 stars based on quality and performance measures including customer satisfaction, care coordination, and health outcomes. Plans with 4 or 5 stars are considered above average. Higher-rated plans may offer additional benefits or rebates to members.',
  },
];

export function FAQSection() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { openLiveChat } = useLiveChat();

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Get answers to the most common questions about Medicare Advantage plans.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg">
        <div className="divide-y divide-gray-200">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-400 transform transition-transform flex-shrink-0 ${
                      expandedFaq === faq.id ? 'rotate-180' : ''
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
                {expandedFaq === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {filteredFaqs.length === 0 && (
          <div className="px-6 py-12 text-center">
            <p className="text-gray-500">No FAQs found matching your search.</p>
          </div>
        )}
      </div>

      {/* Still Have Questions CTA */}
      <div className="mt-8 text-center">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Our licensed Medicare experts are here to help answer your questions and guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="tel:331-343-2584" 
              className="btn-primary inline-block text-center"
            >
              Call 331-343-2584
            </a>
            <button 
              onClick={openLiveChat}
              className="btn-secondary"
            >
              Live Chat Support
            </button>
            <a 
              href="/contact"
              className="btn-secondary inline-block text-center"
            >
              Request Callback
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Available 7 days a week • No obligation • 100% free consultation
          </p>
        </div>
      </div>
    </section>
  );
}