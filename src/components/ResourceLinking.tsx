'use client';

import Link from 'next/link';

interface ResourceLink {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  icon: string;
  color: string;
  priority: 'high' | 'medium' | 'low';
  tags: string[];
}

interface ToolLink {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  category: 'calculator' | 'comparison' | 'timeline' | 'finder';
}

interface ResourceLinkingProps {
  currentResource?: string;
  currentCategory?: string;
  userContext?: 'medicare-advantage' | 'medicare-supplement' | 'health-marketplace' | 'general';
  showTools?: boolean;
  maxResources?: number;
  maxTools?: number;
}

const RESOURCE_DATA: Record<string, ResourceLink> = {
  'medicare-advantage-vs-original': {
    id: 'medicare-advantage-vs-original',
    title: 'Medicare Advantage vs Original Medicare',
    description: 'Complete comparison guide to help you choose between Medicare Advantage and Original Medicare',
    category: 'Comparison',
    readTime: '8 min read',
    icon: '⚖️',
    color: 'blue',
    priority: 'high',
    tags: ['medicare-advantage', 'original-medicare', 'comparison', 'decision-guide']
  },
  'enrollment-periods-explained': {
    id: 'enrollment-periods-explained',
    title: 'Medicare Enrollment Periods Explained',
    description: 'Navigate all Medicare enrollment periods including Annual Open Enrollment and Special Enrollment Periods',
    category: 'Enrollment',
    readTime: '6 min read',
    icon: '📅',
    color: 'green',
    priority: 'high',
    tags: ['enrollment', 'deadlines', 'timeline', 'open-enrollment']
  },
  'understanding-costs': {
    id: 'understanding-costs',
    title: 'Understanding Medicare Advantage Costs',
    description: 'Break down premiums, deductibles, copays, and out-of-pocket maximums for Medicare Advantage',
    category: 'Costs',
    readTime: '7 min read',
    icon: '💰',
    color: 'yellow',
    priority: 'high',
    tags: ['costs', 'premiums', 'deductibles', 'budgeting']
  },
  'star-ratings-guide': {
    id: 'star-ratings-guide',
    title: 'Medicare Star Ratings Guide',
    description: 'Learn how Medicare rates plans and what star ratings tell you about plan quality',
    category: 'Quality',
    readTime: '5 min read',
    icon: '⭐',
    color: 'purple',
    priority: 'medium',
    tags: ['quality', 'ratings', 'plan-selection', 'performance']
  },
  'prescription-drug-coverage': {
    id: 'prescription-drug-coverage',
    title: 'Prescription Drug Coverage in Medicare Advantage',
    description: 'Everything about Part D coverage, formularies, pharmacy networks, and drug costs',
    category: 'Benefits',
    readTime: '9 min read',
    icon: '💊',
    color: 'red',
    priority: 'high',
    tags: ['prescription-drugs', 'part-d', 'formulary', 'pharmacy']
  },
  'dental-vision-benefits': {
    id: 'dental-vision-benefits',
    title: 'Extra Benefits: Dental, Vision, and Hearing',
    description: 'Explore additional benefits that many Medicare Advantage plans offer beyond basic coverage',
    category: 'Benefits',
    readTime: '6 min read',
    icon: '🦷',
    color: 'teal',
    priority: 'medium',
    tags: ['dental', 'vision', 'hearing', 'extra-benefits']
  }
};

const TOOL_DATA: ToolLink[] = [
  {
    id: 'cost-calculator',
    title: 'Medicare Cost Calculator',
    description: 'Estimate your total Medicare costs including premiums, deductibles, and out-of-pocket expenses',
    href: '/medicare-cost-calculator',
    icon: '🧮',
    color: 'blue',
    category: 'calculator'
  },
  {
    id: 'health-insurance-calculator',
    title: 'Health Insurance Cost Calculator',
    description: 'Calculate ACA Marketplace costs including subsidies and out-of-pocket expenses',
    href: '/health-insurance-cost-calculator',
    icon: '🏥',
    color: 'green',
    category: 'calculator'
  },
  {
    id: 'plan-comparison',
    title: 'Medicare Plan Comparison Tool',
    description: 'Compare Medicare Advantage and Medicare Supplement plans side-by-side',
    href: '/medicare-comparison-tool',
    icon: '📊',
    color: 'purple',
    category: 'comparison'
  },
  {
    id: 'enrollment-timeline',
    title: 'Medicare Enrollment Timeline',
    description: 'Track important Medicare enrollment dates and deadlines personalized to your situation',
    href: '/medicare-enrollment-timeline',
    icon: '📅',
    color: 'orange',
    category: 'timeline'
  },
  {
    id: 'plan-finder',
    title: 'Medicare Advantage Plan Finder',
    description: 'Search and compare Medicare Advantage plans available in your area',
    href: '/medicare-advantage',
    icon: '🔍',
    color: 'indigo',
    category: 'finder'
  },
  {
    id: 'marketplace-finder',
    title: 'Health Insurance Marketplace Finder',
    description: 'Find ACA Marketplace plans and check subsidy eligibility',
    href: '/health-insurance-marketplace',
    icon: '🏛️',
    color: 'teal',
    category: 'finder'
  }
];

const CONTEXTUAL_RECOMMENDATIONS: Record<string, string[]> = {
  'medicare-advantage': ['medicare-advantage-vs-original', 'understanding-costs', 'enrollment-periods-explained', 'star-ratings-guide'],
  'medicare-supplement': ['medicare-advantage-vs-original', 'understanding-costs', 'enrollment-periods-explained', 'prescription-drug-coverage'],
  'health-marketplace': ['enrollment-periods-explained', 'understanding-costs', 'prescription-drug-coverage', 'dental-vision-benefits'],
  'general': ['medicare-advantage-vs-original', 'enrollment-periods-explained', 'understanding-costs', 'star-ratings-guide']
};

export default function ResourceLinking({
  currentResource,
  currentCategory,
  userContext = 'general',
  showTools = true,
  maxResources = 4,
  maxTools = 3
}: ResourceLinkingProps) {
  
  // Get contextual recommendations based on user context
  const contextualResourceIds = CONTEXTUAL_RECOMMENDATIONS[userContext] || CONTEXTUAL_RECOMMENDATIONS.general;
  
  // Filter out current resource if we're on a resource page
  const filteredResourceIds = currentResource 
    ? contextualResourceIds.filter(id => id !== currentResource)
    : contextualResourceIds;
  
  // Get recommended resources
  const recommendedResources = filteredResourceIds
    .map(id => RESOURCE_DATA[id])
    .filter(Boolean)
    .slice(0, maxResources);
  
  // Get recommended tools based on context
  const getRecommendedTools = () => {
    switch (userContext) {
      case 'medicare-advantage':
        return TOOL_DATA.filter(tool => ['cost-calculator', 'plan-comparison', 'plan-finder'].includes(tool.id));
      case 'medicare-supplement':
        return TOOL_DATA.filter(tool => ['cost-calculator', 'plan-comparison', 'enrollment-timeline'].includes(tool.id));
      case 'health-marketplace':
        return TOOL_DATA.filter(tool => ['health-insurance-calculator', 'marketplace-finder', 'enrollment-timeline'].includes(tool.id));
      default:
        return TOOL_DATA.slice(0, maxTools);
    }
  };
  
  const recommendedTools = getRecommendedTools().slice(0, maxTools);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Comparison': 'blue',
      'Enrollment': 'green',
      'Costs': 'yellow',
      'Quality': 'purple',
      'Benefits': 'teal'
    };
    return colors[category] || 'gray';
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      'blue': 'bg-blue-100 text-blue-800 border-blue-200',
      'green': 'bg-green-100 text-green-800 border-green-200',
      'yellow': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'purple': 'bg-purple-100 text-purple-800 border-purple-200',
      'red': 'bg-red-100 text-red-800 border-red-200',
      'teal': 'bg-teal-100 text-teal-800 border-teal-200',
      'orange': 'bg-orange-100 text-orange-800 border-orange-200',
      'indigo': 'bg-indigo-100 text-indigo-800 border-indigo-200'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Recommended Resources */}
        {recommendedResources.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                📚 Related Educational Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {currentResource 
                  ? 'Continue your Medicare education with these related guides and resources.'
                  : 'Start your Medicare education journey with these essential guides and resources.'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {recommendedResources.map((resource) => (
                <Link
                  key={resource.id}
                  href={`/resources/${resource.id}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 ${getColorClasses(resource.color)} rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                        {resource.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getColorClasses(getCategoryColor(resource.category))}`}>
                          {resource.category}
                        </span>
                        <span className="text-sm text-gray-500">{resource.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-800">
                        Read Guide
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Tools */}
        {showTools && recommendedTools.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🛠️ Interactive Tools & Calculators
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Use these interactive tools to calculate costs, compare plans, and make informed decisions about your healthcare coverage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 p-6 text-center"
                >
                  <div className={`w-16 h-16 ${getColorClasses(tool.color)} rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {tool.description}
                  </p>
                  <div className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-800">
                    Try Tool
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Resources Link */}
        <div className="text-center">
          <Link
            href="/resources"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span className="mr-2">📚</span>
            Explore All Medicare Resources
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
