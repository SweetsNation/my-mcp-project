'use client';

import Link from 'next/link';
import { useState } from 'react';

interface ResourceItem {
  href: string;
  title: string;
  description: string;
  category: 'guide' | 'calculator' | 'comparison' | 'blog' | 'resource' | 'timeline';
  readTime?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  priority?: 'high' | 'medium' | 'low';
  icon: string;
  featured?: boolean;
  tags?: string[];
}

interface ResourceLinksProps {
  currentService: 'medicare-advantage' | 'medicare-supplement' | 'medicare-part-d' | 'health-marketplace' | 'team' | 'tools' | 'local' | 'general';
  excludePaths?: string[];
  maxItems?: number;
  title?: string;
  description?: string;
  showCategories?: boolean;
  compact?: boolean;
}

const ALL_RESOURCES: ResourceItem[] = [
  // Educational Resources
  {
    href: '/resources/medicare-advantage-vs-original',
    title: 'Medicare Advantage vs Original Medicare Guide',
    description: 'Complete comparison of Medicare Advantage and Original Medicare with pros, cons, and decision framework',
    category: 'guide',
    readTime: '8 min read',
    difficulty: 'beginner',
    priority: 'high',
    icon: '📊',
    featured: true,
    tags: ['medicare-advantage', 'comparison', 'beginner-guide']
  },
  {
    href: '/resources/enrollment-periods-explained',
    title: 'Medicare Enrollment Periods Explained',
    description: 'Navigate Annual Open Enrollment, Special Enrollment Periods, and Medicare eligibility timelines',
    category: 'guide',
    readTime: '6 min read',
    difficulty: 'beginner',
    priority: 'high',
    icon: '📅',
    featured: true,
    tags: ['enrollment', 'deadlines', 'medicare']
  },
  {
    href: '/resources/understanding-costs',
    title: 'Understanding Medicare Advantage Costs',
    description: 'Break down premiums, deductibles, copays, and out-of-pocket maximums for Medicare plans',
    category: 'guide',
    readTime: '7 min read',
    difficulty: 'intermediate',
    priority: 'high',
    icon: '💰',
    featured: true,
    tags: ['costs', 'medicare-advantage', 'budgeting']
  },
  {
    href: '/resources/star-ratings-guide',
    title: 'Medicare Star Ratings Guide',
    description: 'Learn how Medicare rates plans and what star ratings tell you about plan quality and performance',
    category: 'guide',
    readTime: '5 min read',
    difficulty: 'intermediate',
    priority: 'medium',
    icon: '⭐',
    tags: ['quality', 'ratings', 'medicare-advantage']
  },
  {
    href: '/resources/prescription-drug-coverage',
    title: 'Prescription Drug Coverage in Medicare',
    description: 'Everything about Part D coverage, formularies, pharmacy networks, and drug costs',
    category: 'guide',
    readTime: '9 min read',
    difficulty: 'intermediate',
    priority: 'high',
    icon: '💊',
    tags: ['part-d', 'prescriptions', 'medicare-advantage']
  },
  {
    href: '/resources/dental-vision-benefits',
    title: 'Dental and Vision Benefits in Medicare Plans',
    description: 'Comprehensive guide to supplemental benefits available in Medicare Advantage plans',
    category: 'guide',
    readTime: '6 min read',
    difficulty: 'beginner',
    priority: 'medium',
    icon: '🦷',
    tags: ['benefits', 'dental', 'vision', 'medicare-advantage']
  },

  // Calculators & Tools
  {
    href: '/medicare-cost-calculator',
    title: 'Medicare Cost Calculator',
    description: 'Calculate your estimated Medicare costs and compare different plan options',
    category: 'calculator',
    readTime: '5 min use',
    difficulty: 'beginner',
    priority: 'high',
    icon: '🧮',
    featured: true,
    tags: ['calculator', 'medicare', 'costs']
  },
  {
    href: '/health-insurance-cost-calculator',
    title: 'ACA Subsidy Calculator',
    description: 'Estimate premium tax credits and cost-sharing reductions for Marketplace plans',
    category: 'calculator',
    readTime: '3 min use',
    difficulty: 'beginner',
    priority: 'high',
    icon: '🧮',
    featured: true,
    tags: ['calculator', 'marketplace', 'subsidies']
  },
  {
    href: '/medicare-plan-comparison-tool',
    title: 'Medicare Plan Comparison Tool',
    description: 'Compare Medicare Advantage and Supplement plans side-by-side with detailed analysis',
    category: 'comparison',
    readTime: '10 min use',
    difficulty: 'intermediate',
    priority: 'high',
    icon: '📋',
    featured: true,
    tags: ['comparison', 'medicare', 'plans']
  },
  {
    href: '/medicare-comparison-tool',
    title: 'Medicare Options Comparison',
    description: 'Interactive tool to compare all Medicare coverage options and find your best fit',
    category: 'comparison',
    readTime: '8 min use',
    difficulty: 'beginner',
    priority: 'high',
    icon: '⚖️',
    tags: ['comparison', 'medicare', 'decision-tool']
  },

  // Timelines & Important Dates
  {
    href: '/enrollment-timeline',
    title: 'Medicare & ACA Enrollment Timeline',
    description: 'Key dates, deadlines, and enrollment periods for Medicare and Health Insurance Marketplace',
    category: 'timeline',
    readTime: '4 min read',
    difficulty: 'beginner',
    priority: 'high',
    icon: '⏰',
    featured: true,
    tags: ['timeline', 'deadlines', 'enrollment']
  },
  {
    href: '/medicare-open-enrollment-2025',
    title: 'Medicare Open Enrollment 2025',
    description: 'Complete guide to 2025 Medicare Open Enrollment period (Oct 15 - Dec 7)',
    category: 'timeline',
    readTime: '6 min read',
    difficulty: 'beginner',
    priority: 'high',
    icon: '📅',
    featured: true,
    tags: ['enrollment', '2025', 'medicare']
  },
  {
    href: '/medicare-deadline-december-7',
    title: 'Medicare Enrollment Deadline: December 7',
    description: 'Important deadline information and what happens if you miss Medicare enrollment',
    category: 'timeline',
    readTime: '3 min read',
    difficulty: 'beginner',
    priority: 'medium',
    icon: '⚠️',
    tags: ['deadline', 'enrollment', 'medicare']
  },

  // Blog Posts & Local Guides
  {
    href: '/blog/miami-dade-health-insurance-guide',
    title: 'Miami-Dade Health Insurance Guide',
    description: 'Local guide to health insurance options for Miami-Dade County residents',
    category: 'blog',
    readTime: '10 min read',
    difficulty: 'beginner',
    priority: 'medium',
    icon: '🌴',
    tags: ['local', 'miami-dade', 'health-insurance', 'florida']
  },
  {
    href: '/blog/health-insurance-harris-county-guide',
    title: 'Harris County Health Insurance Guide',
    description: 'Comprehensive health insurance guide for Harris County, Texas residents',
    category: 'blog',
    readTime: '8 min read',
    difficulty: 'beginner',
    priority: 'medium',
    icon: '🤠',
    tags: ['local', 'harris-county', 'health-insurance', 'texas']
  },

  // Specialized Resources
  {
    href: '/medicare-extra-help',
    title: 'Medicare Extra Help Program',
    description: 'Low-Income Subsidy (LIS) program for prescription drug costs and Medicare premiums',
    category: 'resource',
    readTime: '7 min read',
    difficulty: 'intermediate',
    priority: 'medium',
    icon: '🤝',
    tags: ['extra-help', 'subsidies', 'low-income', 'medicare']
  },
  {
    href: '/medicare-part-d-formulary-lookup',
    title: 'Medicare Part D Formulary Lookup',
    description: 'Search prescription drug coverage and costs across different Medicare Part D plans',
    category: 'calculator',
    readTime: '5 min use',
    difficulty: 'intermediate',
    priority: 'medium',
    icon: '🔍',
    tags: ['part-d', 'formulary', 'prescriptions']
  },
  {
    href: '/resources',
    title: 'All Educational Resources',
    description: 'Complete library of Medicare and health insurance guides, articles, and educational content',
    category: 'resource',
    readTime: 'Browse',
    difficulty: 'beginner',
    priority: 'low',
    icon: '📚',
    tags: ['resources', 'library', 'education']
  }
];

export default function ResourceLinks({
  currentService,
  excludePaths = [],
  maxItems = 8,
  title = "Helpful Resources & Tools",
  description = "Educational guides, calculators, and tools to help you make informed insurance decisions",
  showCategories = false,
  compact = false
}: ResourceLinksProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Smart filtering based on current service
  const getRecommendedResources = (): ResourceItem[] => {
    let filtered = ALL_RESOURCES.filter(resource => !excludePaths.includes(resource.href));

    // Context-aware recommendations
    switch (currentService) {
      case 'medicare-advantage':
        filtered = filtered.filter(r => 
          r.tags?.includes('medicare-advantage') ||
          r.tags?.includes('medicare') ||
          r.tags?.includes('comparison') ||
          r.category === 'calculator' ||
          r.category === 'timeline'
        );
        break;

      case 'medicare-supplement':
        filtered = filtered.filter(r => 
          r.tags?.includes('medicare') ||
          r.tags?.includes('comparison') ||
          r.category === 'calculator' ||
          r.category === 'guide'
        );
        break;

      case 'medicare-part-d':
        filtered = filtered.filter(r => 
          r.tags?.includes('part-d') ||
          r.tags?.includes('prescriptions') ||
          r.tags?.includes('medicare') ||
          r.category === 'calculator'
        );
        break;

      case 'health-marketplace':
        filtered = filtered.filter(r => 
          r.tags?.includes('marketplace') ||
          r.tags?.includes('subsidies') ||
          r.tags?.includes('health-insurance') ||
          r.category === 'calculator' ||
          r.category === 'blog'
        );
        break;

      case 'tools':
        filtered = filtered.filter(r => 
          r.category === 'guide' ||
          r.category === 'resource' ||
          r.category === 'timeline' ||
          (r.category === 'calculator' && !excludePaths.includes(r.href))
        );
        break;

      case 'team':
        // Show a mix of beginner guides and high-priority resources
        filtered = filtered.filter(r => 
          r.difficulty === 'beginner' ||
          r.priority === 'high' ||
          r.featured
        );
        break;

      case 'local':
        filtered = filtered.filter(r => 
          r.category === 'blog' ||
          r.tags?.includes('local') ||
          r.category === 'calculator' ||
          r.category === 'guide'
        );
        break;

      default:
        // Show featured and high-priority resources
        filtered = filtered.filter(r => r.featured || r.priority === 'high');
        break;
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(r => r.category === selectedCategory);
    }

    // Apply difficulty filter
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(r => r.difficulty === selectedDifficulty);
    }

    // Sort by priority, featured status, then alphabetically
    filtered.sort((a, b) => {
      // Featured items first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      // Then by priority
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      const aPriority = priorityOrder[a.priority || 'low'];
      const bPriority = priorityOrder[b.priority || 'low'];
      
      if (aPriority !== bPriority) {
        return bPriority - aPriority;
      }

      return a.title.localeCompare(b.title);
    });

    return filtered.slice(0, maxItems);
  };

  const recommendedResources = getRecommendedResources();
  const categories = [...new Set(ALL_RESOURCES.map(r => r.category))];
  const difficulties = [...new Set(ALL_RESOURCES.map(r => r.difficulty).filter(Boolean))];

  if (recommendedResources.length === 0) {
    return null;
  }

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'guide': return 'bg-blue-100 text-blue-800';
      case 'calculator': return 'bg-green-100 text-green-800';
      case 'comparison': return 'bg-purple-100 text-purple-800';
      case 'blog': return 'bg-orange-100 text-orange-800';
      case 'timeline': return 'bg-red-100 text-red-800';
      case 'resource': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        {showCategories && (
          <div className="mb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                }`}
              >
                All Resources
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  {category}s
                </button>
              ))}
            </div>

            {/* Difficulty Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedDifficulty('all')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedDifficulty === 'all'
                    ? 'bg-gray-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                All Levels
              </button>
              {difficulties.map((difficulty) => 
                difficulty ? (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors capitalize ${
                      selectedDifficulty === difficulty
                        ? 'bg-gray-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {difficulty}
                  </button>
                ) : null
              )}
            </div>
          </div>
        )}

        <div className={`grid gap-6 ${compact ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {recommendedResources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-blue-200 transition-colors">
                    {resource.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={`font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 ${compact ? 'text-sm' : 'text-lg'}`}>
                      {resource.title}
                    </h3>
                    {resource.featured && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 ml-2">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className={`text-gray-600 leading-relaxed mb-3 ${compact ? 'text-xs' : 'text-sm'}`}>
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(resource.category)}`}>
                        {resource.category}
                      </span>
                      {resource.difficulty && (
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                          {resource.difficulty}
                        </span>
                      )}
                    </div>
                    {resource.readTime && (
                      <span className="text-xs text-gray-500">{resource.readTime}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-800 mt-3">
                    {resource.category === 'calculator' ? 'Use Tool' : 
                     resource.category === 'comparison' ? 'Compare Now' : 
                     'Read More'}
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-10">
          <div className="bg-white rounded-xl border-2 border-blue-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Need Personal Guidance?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our licensed insurance experts can walk you through any of these resources and help you apply the information to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Expert Help
              </Link>
              <Link 
                href="/resources"
                className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 transition-colors"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}