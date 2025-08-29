'use client';

import Link from 'next/link';
import { useState } from 'react';

interface ServiceLink {
  href: string;
  title: string;
  description: string;
  category: 'medicare' | 'marketplace' | 'supplement' | 'life' | 'tools' | 'local';
  icon: string;
  priority?: 'high' | 'medium' | 'low';
}

interface RelatedServicesProps {
  currentService: 'medicare-advantage' | 'medicare-supplement' | 'medicare-part-d' | 'health-marketplace' | 'life-insurance' | 'team' | 'tools' | 'local' | 'other';
  excludePaths?: string[];
  maxItems?: number;
  title?: string;
  description?: string;
  showCategories?: boolean;
}

const ALL_SERVICES: ServiceLink[] = [
  // Medicare Services
  {
    href: '/medicare-advantage',
    title: 'Medicare Advantage Plans',
    description: 'HMO & PPO plans with extra benefits like dental, vision, and prescription coverage',
    category: 'medicare',
    icon: '🏥',
    priority: 'high'
  },
  {
    href: '/medicare-supplement-plan-g',
    title: 'Medicare Supplement Plan G',
    description: 'Comprehensive Medigap coverage for Medicare Part A & B out-of-pocket costs',
    category: 'supplement',
    icon: '🛡️',
    priority: 'high'
  },
  {
    href: '/medicare-part-d',
    title: 'Medicare Part D',
    description: 'Prescription drug coverage with formulary lookup and cost comparison',
    category: 'medicare',
    icon: '💊',
    priority: 'high'
  },
  {
    href: '/medicare-extra-help',
    title: 'Medicare Extra Help',
    description: 'Low-income subsidy programs for prescription drug costs and premiums',
    category: 'medicare',
    icon: '💰',
    priority: 'medium'
  },
  {
    href: '/medicare-supplement-florida',
    title: 'Medicare Supplement Florida',
    description: 'Florida-specific Medigap plans with state-tailored benefits and pricing',
    category: 'supplement',
    icon: '🌴',
    priority: 'medium'
  },

  // Health Insurance Marketplace
  {
    href: '/health-insurance-marketplace',
    title: 'Health Insurance Marketplace',
    description: 'ACA plans with premium tax credits and cost-sharing reductions',
    category: 'marketplace',
    icon: '🏛️',
    priority: 'high'
  },
  {
    href: '/health-insurance-cost-calculator',
    title: 'ACA Subsidy Calculator',
    description: 'Calculate premium tax credits and estimate your ACA marketplace savings',
    category: 'tools',
    icon: '🧮',
    priority: 'high'
  },
  {
    href: '/health-insurance-miami-dade-florida',
    title: 'Miami-Dade Health Insurance',
    description: 'Local ACA marketplace plans and community-specific enrollment assistance',
    category: 'local',
    icon: '🌊',
    priority: 'medium'
  },
  {
    href: '/health-insurance-harris-county-texas',
    title: 'Harris County Health Insurance',
    description: 'Texas ACA marketplace options with local agent support',
    category: 'local',
    icon: '🤠',
    priority: 'medium'
  },

  // Tools & Calculators
  {
    href: '/medicare-cost-calculator',
    title: 'Medicare Cost Calculator',
    description: 'Compare Medicare plan costs and estimate your out-of-pocket expenses',
    category: 'tools',
    icon: '🧮',
    priority: 'high'
  },
  {
    href: '/medicare-plan-comparison-tool',
    title: 'Plan Comparison Tool',
    description: 'Side-by-side comparison of Medicare Advantage and Supplement plans',
    category: 'tools',
    icon: '📊',
    priority: 'high'
  },
  {
    href: '/enrollment-timeline',
    title: 'Enrollment Timeline',
    description: 'Medicare and ACA enrollment periods, deadlines, and special enrollment triggers',
    category: 'tools',
    icon: '📅',
    priority: 'medium'
  },

  // Team & Contact
  {
    href: '/team',
    title: 'Meet Our Expert Agents',
    description: 'Licensed insurance specialists across multiple states with Medicare & ACA expertise',
    category: 'medicare',
    icon: '👥',
    priority: 'medium'
  },
  {
    href: '/team/magdalena-salinas',
    title: 'Social Security & Medicare Expert',
    description: 'Magdalena Salinas - Multi-state Social Security optimization and Medicare specialist',
    category: 'medicare',
    icon: '👩‍💼',
    priority: 'medium'
  },
  {
    href: '/team/elsa-galicia-lona',
    title: 'Marketplace & International Expert',
    description: 'Elsa Galicia-Lona - Health Insurance Marketplace and International Health specialist',
    category: 'marketplace',
    icon: '👩‍💼',
    priority: 'medium'
  },

  // Resources
  {
    href: '/resources',
    title: 'Insurance Resources',
    description: 'Comprehensive guides, FAQs, and educational content for all insurance types',
    category: 'medicare',
    icon: '📚',
    priority: 'low'
  },
  {
    href: '/about',
    title: 'About El-Mag Insurance',
    description: 'Our mission, experience, and commitment to helping you find the right coverage',
    category: 'medicare',
    icon: 'ℹ️',
    priority: 'low'
  }
];

export default function RelatedServices({
  currentService,
  excludePaths = [],
  maxItems = 6,
  title = "Related Insurance Services",
  description = "Explore additional insurance options that may complement your coverage",
  showCategories = false
}: RelatedServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Smart filtering based on current service
  const getRecommendedServices = (): ServiceLink[] => {
    let filtered = ALL_SERVICES.filter(service => !excludePaths.includes(service.href));

    // Enhanced cross-service recommendations based on current page
    switch (currentService) {
      case 'medicare-advantage':
        // For Medicare Advantage, suggest supplements, marketplace for under-65, and tools
        filtered = filtered.filter(s => 
          s.category === 'supplement' || 
          s.category === 'marketplace' || 
          s.category === 'tools' ||
          (s.category === 'medicare' && s.href !== '/medicare-advantage')
        );
        // Prioritize Medicare Supplement as the main alternative
        filtered.sort((a, b) => {
          if (a.href === '/medicare-supplement-plan-g') return -1;
          if (b.href === '/medicare-supplement-plan-g') return 1;
          return 0;
        });
        break;

      case 'medicare-supplement':
        // For Medicare Supplement, suggest Medicare Advantage, Part D, and family marketplace coverage
        filtered = filtered.filter(s => 
          s.category === 'medicare' || 
          s.category === 'marketplace' || 
          s.category === 'tools'
        );
        // Prioritize Medicare Advantage and family marketplace coverage
        filtered.sort((a, b) => {
          if (a.href === '/medicare-advantage') return -1;
          if (b.href === '/medicare-advantage') return 1;
          if (a.href === '/health-insurance-marketplace') return -1;
          if (b.href === '/health-insurance-marketplace') return 1;
          return 0;
        });
        break;

      case 'medicare-part-d':
        // For Part D, suggest Medicare Advantage (includes Part D), supplements, and tools
        filtered = filtered.filter(s => 
          s.category === 'medicare' || 
          s.category === 'supplement' || 
          s.category === 'marketplace' || 
          s.category === 'tools'
        );
        // Prioritize Medicare Advantage and Medicare Supplement
        filtered.sort((a, b) => {
          if (a.href === '/medicare-advantage') return -1;
          if (b.href === '/medicare-advantage') return 1;
          if (a.href === '/medicare-supplement-plan-g') return -1;
          if (b.href === '/medicare-supplement-plan-g') return 1;
          return 0;
        });
        break;

      case 'health-marketplace':
        // For Marketplace, suggest Medicare for 65+, local pages, and team
        filtered = filtered.filter(s => 
          s.category === 'medicare' || 
          s.category === 'supplement' || 
          s.category === 'local' || 
          s.category === 'tools' ||
          (s.category === 'marketplace' && s.href !== '/health-insurance-marketplace')
        );
        // Prioritize Medicare Supplement for those approaching 65
        filtered.sort((a, b) => {
          if (a.href === '/medicare-supplement-plan-g') return -1;
          if (b.href === '/medicare-supplement-plan-g') return 1;
          if (a.href === '/medicare-open-enrollment-2025') return -1;
          if (b.href === '/medicare-open-enrollment-2025') return 1;
          return 0;
        });
        break;

      case 'tools':
        // For tools, suggest main service pages
        filtered = filtered.filter(s => 
          s.category === 'medicare' || 
          s.category === 'marketplace' || 
          s.category === 'supplement'
        );
        break;

      case 'team':
        // For team pages, suggest all main services
        filtered = filtered.filter(s => 
          s.category === 'medicare' || 
          s.category === 'marketplace' || 
          s.category === 'supplement' ||
          s.category === 'tools'
        );
        break;

      case 'local':
        // For local pages, suggest main services and relevant team members
        filtered = filtered.filter(s => 
          s.category === 'medicare' || 
          s.category === 'marketplace' || 
          s.category === 'tools' ||
          (s.category === 'local' && !excludePaths.includes(s.href))
        );
        break;

      default:
        // For other pages, show a mix of high-priority services
        filtered = filtered.filter(s => s.priority === 'high');
        break;
    }

    // Sort by priority, then alphabetically
    filtered.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      const aPriority = priorityOrder[a.priority || 'low'];
      const bPriority = priorityOrder[b.priority || 'low'];
      
      if (aPriority !== bPriority) {
        return bPriority - aPriority;
      }
      return a.title.localeCompare(b.title);
    });

    // Filter by selected category if categories are shown
    if (showCategories && selectedCategory !== 'all') {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }

    return filtered.slice(0, maxItems);
  };

  const recommendedServices = getRecommendedServices();
  const categories = [...new Set(ALL_SERVICES.map(s => s.category))];

  if (recommendedServices.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        {showCategories && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
              }`}
            >
              All Services
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
                {category.replace('-', ' ')}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-blue-200 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-800">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Smart CTA based on current service */}
        <div className="text-center mt-10">
          <div className="bg-white rounded-xl border-2 border-blue-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Not Sure Which Option Is Best for You?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our licensed insurance experts can help you compare all options and find the perfect coverage for your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/team"
                className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 transition-colors"
              >
                Meet Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}