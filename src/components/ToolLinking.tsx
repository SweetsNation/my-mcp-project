'use client';

import Link from 'next/link';

interface ToolLink {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  category: 'calculator' | 'comparison' | 'timeline' | 'finder' | 'quiz' | 'lookup';
  features: string[];
  estimatedTime: string;
  userContext: string[];
  priority: 'high' | 'medium' | 'low';
}

interface ToolLinkingProps {
  currentTool?: string;
  userContext?: 'medicare-advantage' | 'medicare-supplement' | 'health-marketplace' | 'general' | 'cost-analysis' | 'plan-selection';
  showRelatedTools?: boolean;
  maxTools?: number;
  showFeatures?: boolean;
  layout?: 'grid' | 'list' | 'featured';
}

const TOOL_DATA: ToolLink[] = [
  {
    id: 'medicare-cost-calculator',
    title: 'Medicare Cost Calculator',
    description: 'Estimate your total Medicare costs including premiums, deductibles, copays, and out-of-pocket expenses',
    href: '/medicare-cost-calculator',
    icon: '🧮',
    color: 'blue',
    category: 'calculator',
    features: ['Premium calculation', 'Deductible analysis', 'Copay estimates', 'Out-of-pocket projections', 'Annual cost breakdown'],
    estimatedTime: '3-5 minutes',
    userContext: ['medicare-advantage', 'medicare-supplement', 'cost-analysis'],
    priority: 'high'
  },
  {
    id: 'health-insurance-cost-calculator',
    title: 'Health Insurance Cost Calculator',
    description: 'Calculate ACA Marketplace costs including subsidies, tax credits, and out-of-pocket expenses',
    href: '/health-insurance-cost-calculator',
    icon: '🏥',
    color: 'green',
    category: 'calculator',
    features: ['Subsidy calculation', 'Tax credit estimation', 'Plan type comparison', 'Income-based pricing', 'Cost-sharing analysis'],
    estimatedTime: '5-7 minutes',
    userContext: ['health-marketplace', 'cost-analysis'],
    priority: 'high'
  },
  {
    id: 'medicare-comparison-tool',
    title: 'Medicare Plan Comparison Tool',
    description: 'Compare Medicare Advantage vs Medicare Supplement plans with personalized recommendations',
    href: '/medicare-comparison-tool',
    icon: '⚖️',
    color: 'purple',
    category: 'comparison',
    features: ['Side-by-side comparison', 'Personalized recommendations', 'Cost analysis', 'Feature comparison', 'Expert guidance'],
    estimatedTime: '7-10 minutes',
    userContext: ['medicare-advantage', 'medicare-supplement', 'plan-selection'],
    priority: 'high'
  },
  {
    id: 'medicare-plan-comparison-tool',
    title: 'Medicare Plan Comparison Tool',
    description: 'Compare different Medicare Advantage plans and Medicare Supplement options',
    href: '/medicare-plan-comparison-tool',
    icon: '📊',
    color: 'indigo',
    category: 'comparison',
    features: ['Plan comparison', 'Feature analysis', 'Cost breakdown', 'Network evaluation', 'Benefit comparison'],
    estimatedTime: '5-8 minutes',
    userContext: ['medicare-advantage', 'medicare-supplement', 'plan-selection'],
    priority: 'medium'
  },
  {
    id: 'medicare-enrollment-timeline',
    title: 'Medicare Enrollment Timeline',
    description: 'Track important Medicare enrollment dates and deadlines personalized to your situation',
    href: '/medicare-enrollment-timeline',
    icon: '📅',
    color: 'orange',
    category: 'timeline',
    features: ['Personalized timeline', 'Deadline tracking', 'Enrollment periods', 'Important dates', 'Reminder system'],
    estimatedTime: '2-3 minutes',
    userContext: ['medicare-advantage', 'medicare-supplement', 'general'],
    priority: 'high'
  },
  {
    id: 'enrollment-timeline',
    title: 'Enrollment Timeline',
    description: 'Comprehensive timeline for all insurance enrollment periods and deadlines',
    href: '/enrollment-timeline',
    icon: '🗓️',
    color: 'teal',
    category: 'timeline',
    features: ['All enrollment periods', 'Deadline tracking', 'Calendar view', 'Reminder system', 'Period explanations'],
    estimatedTime: '3-4 minutes',
    userContext: ['medicare-advantage', 'medicare-supplement', 'health-marketplace', 'general'],
    priority: 'medium'
  },
  {
    id: 'medicare-advantage-finder',
    title: 'Medicare Advantage Plan Finder',
    description: 'Search and compare Medicare Advantage plans available in your area',
    href: '/medicare-advantage',
    icon: '🔍',
    color: 'blue',
    category: 'finder',
    features: ['Plan search', 'Area-based results', 'Plan comparison', 'Network information', 'Cost estimates'],
    estimatedTime: '5-8 minutes',
    userContext: ['medicare-advantage', 'plan-selection'],
    priority: 'high'
  },
  {
    id: 'health-marketplace-finder',
    title: 'Health Insurance Marketplace Finder',
    description: 'Find ACA Marketplace plans and check subsidy eligibility',
    href: '/health-insurance-marketplace',
    icon: '🏛️',
    color: 'green',
    category: 'finder',
    features: ['Plan search', 'Subsidy calculator', 'Eligibility check', 'Plan comparison', 'Enrollment assistance'],
    estimatedTime: '6-9 minutes',
    userContext: ['health-marketplace', 'plan-selection'],
    priority: 'high'
  },
  {
    id: 'medicare-extra-help-qualification-quiz',
    title: 'Medicare Extra Help Qualification Quiz',
    description: 'Check if you qualify for Medicare Extra Help with prescription drug costs',
    href: '/medicare-extra-help-qualification-quiz',
    icon: '❓',
    color: 'yellow',
    category: 'quiz',
    features: ['Qualification check', 'Income assessment', 'Asset evaluation', 'Benefit calculation', 'Application guidance'],
    estimatedTime: '4-6 minutes',
    userContext: ['medicare-advantage', 'medicare-supplement', 'cost-analysis'],
    priority: 'medium'
  },
  {
    id: 'medicare-part-d-formulary-lookup',
    title: 'Medicare Part D Formulary Lookup',
    description: 'Search prescription drug formularies to find covered medications',
    href: '/medicare-part-d-formulary-lookup',
    icon: '💊',
    color: 'red',
    category: 'lookup',
    features: ['Drug search', 'Formulary lookup', 'Coverage check', 'Cost estimates', 'Alternative suggestions'],
    estimatedTime: '2-4 minutes',
    userContext: ['medicare-advantage', 'medicare-supplement', 'cost-analysis'],
    priority: 'medium'
  },
  {
    id: 'ask-ai-medicare-questions',
    title: 'AI Medicare Assistant',
    description: 'Get instant answers to your Medicare questions with our AI-powered assistant',
    href: '/ask-ai-medicare-questions',
    icon: '🤖',
    color: 'purple',
    category: 'quiz',
    features: ['AI-powered answers', 'Instant responses', 'Comprehensive coverage', '24/7 availability', 'Expert knowledge'],
    estimatedTime: '1-3 minutes',
    userContext: ['medicare-advantage', 'medicare-supplement', 'health-marketplace', 'general'],
    priority: 'high'
  },
  {
    id: 'medicare-open-enrollment-checklist',
    title: 'Medicare Open Enrollment Checklist',
    description: 'Complete checklist to ensure you don\'t miss anything during Medicare Open Enrollment',
    href: '/medicare-open-enrollment-checklist',
    icon: '✅',
    color: 'green',
    category: 'timeline',
    features: ['Comprehensive checklist', 'Step-by-step guide', 'Document preparation', 'Deadline tracking', 'Action items'],
    estimatedTime: '3-5 minutes',
    userContext: ['medicare-advantage', 'medicare-supplement', 'general'],
    priority: 'medium'
  }
];

const CONTEXTUAL_TOOL_RECOMMENDATIONS: Record<string, string[]> = {
  'medicare-advantage': ['medicare-cost-calculator', 'medicare-comparison-tool', 'medicare-advantage-finder', 'medicare-enrollment-timeline'],
  'medicare-supplement': ['medicare-cost-calculator', 'medicare-comparison-tool', 'medicare-enrollment-timeline', 'medicare-part-d-formulary-lookup'],
  'health-marketplace': ['health-insurance-cost-calculator', 'health-marketplace-finder', 'enrollment-timeline', 'ask-ai-medicare-questions'],
  'cost-analysis': ['medicare-cost-calculator', 'health-insurance-cost-calculator', 'medicare-extra-help-qualification-quiz', 'medicare-part-d-formulary-lookup'],
  'plan-selection': ['medicare-comparison-tool', 'medicare-plan-comparison-tool', 'medicare-advantage-finder', 'health-marketplace-finder'],
  'general': ['medicare-cost-calculator', 'medicare-comparison-tool', 'medicare-enrollment-timeline', 'ask-ai-medicare-questions']
};

export default function ToolLinking({
  currentTool,
  userContext = 'general',
  showRelatedTools = true,
  maxTools = 6,
  showFeatures = false,
  layout = 'grid'
}: ToolLinkingProps) {
  
  // Get contextual recommendations based on user context
  const contextualToolIds = CONTEXTUAL_TOOL_RECOMMENDATIONS[userContext] || CONTEXTUAL_TOOL_RECOMMENDATIONS.general;
  
  // Filter out current tool if we're on a tool page
  const filteredToolIds = currentTool 
    ? contextualToolIds.filter(id => id !== currentTool)
    : contextualToolIds;
  
  // Get recommended tools
  const recommendedTools = filteredToolIds
    .map(id => TOOL_DATA.find(tool => tool.id === id))
    .filter(Boolean)
    .slice(0, maxTools) as ToolLink[];
  
  // Get all tools for comprehensive view
  const allTools = TOOL_DATA.filter(tool => !currentTool || tool.id !== currentTool);

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      'blue': 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200',
      'green': 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200',
      'purple': 'bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200',
      'orange': 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200',
      'teal': 'bg-teal-100 text-teal-800 border-teal-200 hover:bg-teal-200',
      'yellow': 'bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200',
      'red': 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200',
      'indigo': 'bg-indigo-100 text-indigo-800 border-indigo-200 hover:bg-indigo-200'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200';
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      'calculator': '🧮',
      'comparison': '⚖️',
      'timeline': '📅',
      'finder': '🔍',
      'quiz': '❓',
      'lookup': '🔎'
    };
    return icons[category] || '🛠️';
  };

  const renderToolCard = (tool: ToolLink, isCompact = false) => (
    <Link
      key={tool.id}
      href={tool.href}
      className={`group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 ${
        isCompact ? 'p-4' : 'p-6'
      }`}
    >
      <div className={`flex ${isCompact ? 'items-center space-x-3' : 'items-start space-x-4'}`}>
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 ${getColorClasses(tool.color)} rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
            {tool.icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getColorClasses(tool.color)}`}>
              {getCategoryIcon(tool.category)} {tool.category}
            </span>
            <span className="text-sm text-gray-500">{tool.estimatedTime}</span>
          </div>
          <h3 className={`font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 ${
            isCompact ? 'text-base' : 'text-lg'
          }`}>
            {tool.title}
          </h3>
          <p className={`text-gray-600 leading-relaxed mb-3 ${
            isCompact ? 'text-sm' : 'text-base'
          }`}>
            {tool.description}
          </p>
          {showFeatures && tool.features.length > 0 && (
            <div className="mb-3">
              <p className="text-xs font-medium text-gray-500 mb-1">Features:</p>
              <div className="flex flex-wrap gap-1">
                {tool.features.slice(0, 3).map((feature, index) => (
                  <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
                {tool.features.length > 3 && (
                  <span className="text-xs text-gray-500">+{tool.features.length - 3} more</span>
                )}
              </div>
            </div>
          )}
          <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-800">
            Try Tool
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );

  const renderToolList = (tool: ToolLink) => (
    <Link
      key={tool.id}
      href={tool.href}
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-300 p-4"
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className={`w-10 h-10 ${getColorClasses(tool.color)} rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
            {tool.icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {tool.title}
            </h3>
            <span className="text-sm text-gray-500">{tool.estimatedTime}</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">{tool.description}</p>
          <div className="flex items-center justify-between">
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getColorClasses(tool.color)}`}>
              {tool.category}
            </span>
            <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-800">
              Use Tool
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Recommended Tools */}
        {showRelatedTools && recommendedTools.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🛠️ Recommended Tools & Calculators
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {currentTool 
                  ? 'Explore these related tools to get the most out of your Medicare research.'
                  : 'Use these interactive tools to calculate costs, compare plans, and make informed decisions about your healthcare coverage.'
                }
              </p>
            </div>

            {layout === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedTools.map((tool) => renderToolCard(tool))}
              </div>
            )}

            {layout === 'list' && (
              <div className="space-y-4">
                {recommendedTools.map((tool) => renderToolList(tool))}
              </div>
            )}

            {layout === 'featured' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {recommendedTools.slice(0, 2).map((tool) => renderToolCard(tool))}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recommendedTools.slice(2).map((tool) => renderToolCard(tool, true))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* All Tools Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎯 All Interactive Tools & Calculators
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive collection of tools to help you navigate Medicare, health insurance, and make informed decisions.
            </p>
          </div>

          {/* Tool Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {['calculator', 'comparison', 'timeline', 'finder', 'quiz', 'lookup'].map((category) => {
              const categoryTools = allTools.filter(tool => tool.category === category);
              if (categoryTools.length === 0) return null;
              
              return (
                <div key={category} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 ${getColorClasses('blue')} rounded-lg flex items-center justify-center text-xl mr-3`}>
                      {getCategoryIcon(category)}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 capitalize">
                      {category} Tools
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {categoryTools.slice(0, 3).map((tool) => (
                      <Link
                        key={tool.id}
                        href={tool.href}
                        className="block group"
                      >
                        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className={`w-8 h-8 ${getColorClasses(tool.color)} rounded flex items-center justify-center text-sm`}>
                            {tool.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                              {tool.title}
                            </h4>
                            <p className="text-gray-500 text-xs">{tool.estimatedTime}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {categoryTools.length > 3 && (
                      <div className="text-center pt-2">
                        <span className="text-sm text-gray-500">
                          +{categoryTools.length - 3} more {category} tools
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Access Tools */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Access to Popular Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {TOOL_DATA.filter(tool => tool.priority === 'high').slice(0, 4).map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${getColorClasses(tool.color)}`}
              >
                <span className="mr-2">{tool.icon}</span>
                {tool.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
