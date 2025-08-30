'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string[];
  tags: string[];
  insuranceType: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  relatedFAQs: string[];
  priority: 'high' | 'medium' | 'low';
  lastUpdated: string;
  viewCount?: number;
  helpfulCount?: number;
  hasVideo?: boolean;
  hasCalculator?: boolean;
  hasChecklist?: boolean;
}

interface FAQCrossReferencingProps {
  userContext?: 'medicare-advantage' | 'medicare-supplement' | 'health-marketplace' | 'medicare-part-d' | 'general';
  currentFAQId?: string;
  maxFAQs?: number;
  layout?: 'accordion' | 'list' | 'cards';
  showCategories?: boolean;
  showDifficulty?: boolean;
  showHelpfulCount?: boolean;
  showInteractive?: boolean;
  showCrossReferences?: boolean;
}

const FAQ_DATABASE: FAQ[] = [
  {
    id: 'what-is-medicare-advantage',
    question: 'What is Medicare Advantage?',
    answer: 'Medicare Advantage (Part C) is a private health plan that replaces Original Medicare. It includes all Medicare Part A and Part B benefits, plus often includes prescription drug coverage (Part D) and additional benefits like dental, vision, and hearing aids.',
    category: ['Medicare', 'Medicare Advantage', 'Basics'],
    tags: ['medicare-advantage', 'part-c', 'private-plans'],
    insuranceType: ['medicare-advantage'],
    difficulty: 'beginner',
    relatedFAQs: ['difference-original-medicare', 'cost-comparison', 'enrollment-timing'],
    priority: 'high',
    lastUpdated: '2025-01-15',
    viewCount: 2500,
    helpfulCount: 180,
    hasVideo: true,
    hasCalculator: true
  },
  {
    id: 'medicare-supplement-basics',
    question: 'What is Medicare Supplement (Medigap)?',
    answer: 'Medicare Supplement plans help pay for out-of-pocket costs that Original Medicare doesn\'t cover, such as deductibles, copayments, and coinsurance.',
    category: ['Medicare', 'Medicare Supplement', 'Basics'],
    tags: ['medigap', 'supplement', 'out-of-pocket-costs'],
    insuranceType: ['medicare-supplement'],
    difficulty: 'beginner',
    relatedFAQs: ['difference-original-medicare', 'plan-g-guide'],
    priority: 'high',
    lastUpdated: '2025-01-15',
    viewCount: 2100,
    helpfulCount: 160,
    hasVideo: true
  },
  {
    id: 'marketplace-basics',
    question: 'What is the Health Insurance Marketplace?',
    answer: 'The Health Insurance Marketplace is a government-run exchange where individuals and families can shop for health insurance plans, compare coverage options, and check eligibility for subsidies.',
    category: ['Health Insurance', 'Marketplace', 'Basics'],
    tags: ['marketplace', 'aca', 'obamacare'],
    insuranceType: ['health-marketplace'],
    difficulty: 'beginner',
    relatedFAQs: ['marketplace-enrollment', 'subsidies-available'],
    priority: 'high',
    lastUpdated: '2025-01-15',
    viewCount: 3200,
    helpfulCount: 250,
    hasVideo: true
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    'Medicare': 'bg-blue-100 text-blue-800',
    'Medicare Advantage': 'bg-green-100 text-green-800',
    'Medicare Supplement': 'bg-purple-100 text-purple-800',
    'Health Insurance': 'bg-orange-100 text-orange-800',
    'Marketplace': 'bg-red-100 text-red-800',
    'Basics': 'bg-gray-100 text-gray-800'
  };
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

const getDifficultyColor = (difficulty: string) => {
  const colors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };
  return colors[difficulty as keyof typeof colors] || colors.beginner;
};

export default function FAQCrossReferencing({
  userContext = 'general',
  currentFAQId,
  maxFAQs = 5,
  layout = 'accordion',
  showCategories = true,
  showDifficulty = false,
  showHelpfulCount = false,
  showInteractive = true,
  showCrossReferences = true
}: FAQCrossReferencingProps) {
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>([]);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const getRecommendations = (): FAQ[] => {
    let recommendations = [...FAQ_DATABASE];

    if (currentFAQId) {
      recommendations = recommendations.filter(faq => faq.id !== currentFAQId);
    }

    if (userContext !== 'general') {
      recommendations = recommendations.filter(faq => 
        faq.insuranceType.includes(userContext)
      );
    }

    recommendations.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      const aPriority = priorityOrder[a.priority];
      const bPriority = priorityOrder[b.priority];
      
      if (aPriority !== bPriority) return bPriority - aPriority;
      
      if (b.helpfulCount && a.helpfulCount && b.helpfulCount !== a.helpfulCount) {
        return b.helpfulCount - a.helpfulCount;
      }
      
      if (b.viewCount && a.viewCount && b.viewCount !== a.viewCount) {
        return b.viewCount - a.viewCount;
      }
      
      return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
    });

    return recommendations.slice(0, maxFAQs);
  };

  useEffect(() => {
    const recommendations = getRecommendations();
    setFilteredFAQs(recommendations);
  }, [userContext, currentFAQId, maxFAQs]);

  if (filteredFAQs.length === 0) {
    return (
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Questions</h2>
            <p className="text-gray-600 mb-6">Explore our comprehensive FAQ database for more answers.</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Ask Our Experts
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Questions</h2>
          <p className="text-lg text-gray-600">
            Find answers to related questions and learn more about your insurance options.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="transition-all duration-200">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {showCategories && (
                          <div className="flex flex-wrap gap-2">
                            {faq.category.slice(0, 2).map((cat) => (
                              <span key={cat} className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(cat)}`}>
                                {cat}
                              </span>
                            ))}
                          </div>
                        )}
                        {showDifficulty && (
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(faq.difficulty)}`}>
                            {faq.difficulty.charAt(0).toUpperCase() + faq.difficulty.slice(1)}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {showHelpfulCount && faq.helpfulCount && (
                        <div className="text-sm text-gray-500 mt-1">
                          👍 {faq.helpfulCount} people found this helpful
                        </div>
                      )}
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 transform transition-transform flex-shrink-0 ${
                        expandedFAQ === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">{faq.answer}</p>
                    
                    {showInteractive && (
                      <div className="flex items-center gap-2 mb-4">
                        {faq.hasVideo && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                            📹 Video Available
                          </span>
                        )}
                        {faq.hasCalculator && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                            🧮 Calculator
                          </span>
                        )}
                        {faq.hasChecklist && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            ✅ Checklist
                          </span>
                        )}
                      </div>
                    )}

                    {showCrossReferences && faq.relatedFAQs.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Related Questions:</h4>
                        <div className="flex flex-wrap gap-2">
                          {faq.relatedFAQs.slice(0, 3).map((relatedId) => {
                            const relatedFAQ = FAQ_DATABASE.find(f => f.id === relatedId);
                            if (!relatedFAQ) return null;
                            return (
                              <Link
                                key={relatedId}
                                href={`#${relatedId}`}
                                className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                              >
                                {relatedFAQ.question.length > 40 ? relatedFAQ.question.substring(0, 40) + '...' : relatedFAQ.question}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Still Have Questions? Ask Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
}
