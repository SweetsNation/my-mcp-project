import Link from 'next/link';
import { useState, useEffect } from 'react';

interface CrossReference {
  title: string;
  href: string;
  description: string;
  category: 'comparison' | 'guide' | 'faq' | 'case-study' | 'news' | 'tool';
  keywordTarget: string;
  readingTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  popularity: number; // 1-5 scale
}

interface TopicalCluster {
  name: string;
  description: string;
  references: CrossReference[];
}

interface EmergencyEvacuationCrossReferencesProps {
  currentPage: string;
  showCategories?: boolean;
  maxReferences?: number;
  layout?: 'grid' | 'list' | 'compact';
  className?: string;
}

const crossReferences: CrossReference[] = [
  // Comparison Content
  {
    title: "Emergency Evacuation vs Travel Insurance: Complete Comparison",
    href: "/emergency-evacuation-vs-travel-insurance",
    description: "Detailed comparison of emergency evacuation coverage versus standard travel insurance benefits.",
    category: "comparison",
    keywordTarget: "emergency evacuation vs travel insurance",
    readingTime: "8 min",
    difficulty: "beginner",
    popularity: 5
  },
  {
    title: "Medical Evacuation vs Emergency Evacuation: Key Differences",
    href: "/medical-vs-emergency-evacuation",
    description: "Understanding the critical differences between medical and emergency evacuation coverage.",
    category: "comparison", 
    keywordTarget: "medical evacuation vs emergency evacuation",
    readingTime: "6 min",
    difficulty: "intermediate",
    popularity: 4
  },
  {
    title: "Emergency Evacuation Insurance vs Kidnap Ransom: Coverage Analysis",
    href: "/evacuation-vs-kidnap-ransom",
    description: "Comparing emergency evacuation insurance with kidnap and ransom coverage options.",
    category: "comparison",
    keywordTarget: "emergency evacuation vs kidnap ransom insurance",
    readingTime: "10 min",
    difficulty: "advanced",
    popularity: 3
  },

  // Educational Guides
  {
    title: "Complete Guide to Emergency Evacuation Insurance",
    href: "/complete-emergency-evacuation-guide",
    description: "Comprehensive guide covering all aspects of emergency evacuation insurance coverage.",
    category: "guide",
    keywordTarget: "emergency evacuation insurance guide",
    readingTime: "15 min",
    difficulty: "beginner",
    popularity: 5
  },
  {
    title: "How Emergency Evacuation Insurance Claims Work",
    href: "/emergency-evacuation-claims-process",
    description: "Step-by-step guide to filing and processing emergency evacuation insurance claims.",
    category: "guide",
    keywordTarget: "emergency evacuation insurance claims",
    readingTime: "12 min",
    difficulty: "intermediate",
    popularity: 4
  },
  {
    title: "Emergency Evacuation Planning for High-Risk Destinations",
    href: "/high-risk-evacuation-planning",
    description: "Strategic planning guide for emergency evacuation in dangerous locations worldwide.",
    category: "guide",
    keywordTarget: "emergency evacuation planning high risk destinations",
    readingTime: "18 min",
    difficulty: "advanced",
    popularity: 4
  },

  // FAQ Content
  {
    title: "Emergency Evacuation Insurance FAQ: Top 50 Questions Answered",
    href: "/emergency-evacuation-faq",
    description: "Comprehensive FAQ covering the most common questions about emergency evacuation insurance.",
    category: "faq",
    keywordTarget: "emergency evacuation insurance faq",
    readingTime: "20 min",
    difficulty: "beginner",
    popularity: 5
  },
  {
    title: "Emergency Evacuation Cost FAQ: Pricing and Coverage Questions",
    href: "/evacuation-cost-faq",
    description: "Detailed FAQ about emergency evacuation costs, coverage limits, and pricing factors.",
    category: "faq",
    keywordTarget: "emergency evacuation cost faq",
    readingTime: "10 min",
    difficulty: "intermediate",
    popularity: 4
  },

  // Case Studies
  {
    title: "Real Emergency Evacuation Case Studies: Lessons Learned",
    href: "/emergency-evacuation-case-studies",
    description: "Real-world emergency evacuation stories and lessons learned from actual evacuations.",
    category: "case-study",
    keywordTarget: "emergency evacuation case studies",
    readingTime: "25 min",
    difficulty: "intermediate",
    popularity: 4
  },
  {
    title: "Corporate Emergency Evacuation: Johnson & Co. Case Study",
    href: "/corporate-evacuation-case-study",
    description: "How Johnson & Co. successfully evacuated 200 employees from a political crisis zone.",
    category: "case-study",
    keywordTarget: "corporate emergency evacuation case study",
    readingTime: "12 min",
    difficulty: "advanced",
    popularity: 3
  },

  // Tools and Calculators
  {
    title: "Emergency Evacuation Cost Calculator",
    href: "/emergency-evacuation-calculator",
    description: "Calculate potential evacuation costs based on destination, risk level, and coverage needs.",
    category: "tool",
    keywordTarget: "emergency evacuation cost calculator",
    readingTime: "5 min",
    difficulty: "beginner",
    popularity: 5
  },
  {
    title: "Travel Risk Assessment Tool",
    href: "/travel-risk-assessment",
    description: "Assess your travel risk level and get personalized emergency evacuation recommendations.",
    category: "tool",
    keywordTarget: "travel risk assessment tool",
    readingTime: "8 min",
    difficulty: "intermediate",
    popularity: 4
  },

  // News and Updates
  {
    title: "Emergency Evacuation Insurance Industry News 2024",
    href: "/evacuation-insurance-news-2024",
    description: "Latest news, trends, and updates in the emergency evacuation insurance industry.",
    category: "news",
    keywordTarget: "emergency evacuation insurance news 2024",
    readingTime: "6 min",
    difficulty: "intermediate",
    popularity: 3
  },
  {
    title: "Global Emergency Evacuation Statistics and Trends",
    href: "/global-evacuation-statistics",
    description: "Current statistics and trends in global emergency evacuations and insurance claims.",
    category: "news",
    keywordTarget: "emergency evacuation statistics trends",
    readingTime: "8 min",
    difficulty: "intermediate",
    popularity: 3
  }
];

const topicalClusters: TopicalCluster[] = [
  {
    name: "Emergency Evacuation Basics",
    description: "Foundation knowledge about emergency evacuation insurance coverage and benefits",
    references: crossReferences.filter(ref => 
      ref.difficulty === 'beginner' && ['guide', 'faq', 'tool'].includes(ref.category)
    )
  },
  {
    name: "Coverage Comparisons",
    description: "Detailed comparisons between different types of evacuation and travel insurance",
    references: crossReferences.filter(ref => ref.category === 'comparison')
  },
  {
    name: "Advanced Planning",
    description: "Strategic planning and advanced considerations for emergency evacuation coverage",
    references: crossReferences.filter(ref => 
      ref.difficulty === 'advanced' && ['guide', 'case-study'].includes(ref.category)
    )
  },
  {
    name: "Industry Insights",
    description: "Latest trends, news, and statistics in the emergency evacuation insurance industry",
    references: crossReferences.filter(ref => ref.category === 'news')
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'comparison':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case 'guide':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'faq':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'case-study':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case 'tool':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case 'news':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner':
      return 'bg-green-100 text-green-700';
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-700';
    case 'advanced':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const getPopularityStars = (popularity: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <svg 
      key={i} 
      className={`w-3 h-3 ${i < popularity ? 'text-yellow-400' : 'text-gray-300'}`} 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));
};

export default function EmergencyEvacuationCrossReferences({
  currentPage,
  showCategories = true,
  maxReferences = 12,
  layout = 'grid',
  className = ""
}: EmergencyEvacuationCrossReferencesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCluster, setSelectedCluster] = useState<string>('');
  const [filteredReferences, setFilteredReferences] = useState<CrossReference[]>([]);

  useEffect(() => {
    let filtered = crossReferences;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(ref => ref.category === selectedCategory);
    }
    
    if (selectedCluster) {
      const cluster = topicalClusters.find(c => c.name === selectedCluster);
      if (cluster) {
        filtered = cluster.references;
      }
    }
    
    // Sort by popularity and reading time
    filtered.sort((a, b) => {
      if (a.popularity !== b.popularity) {
        return b.popularity - a.popularity;
      }
      return parseInt(a.readingTime) - parseInt(b.readingTime);
    });
    
    setFilteredReferences(filtered.slice(0, maxReferences));
  }, [selectedCategory, selectedCluster, maxReferences]);

  const categories = ['all', ...Array.from(new Set(crossReferences.map(ref => ref.category)))];

  if (layout === 'compact') {
    return (
      <div className={`bg-white rounded-lg border border-gray-200 p-4 ${className}`}>
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
          <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          Related Articles
        </h3>
        <ul className="space-y-2">
          {filteredReferences.slice(0, 6).map((ref, index) => (
            <li key={index}>
              <Link 
                href={ref.href} 
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors block"
              >
                {ref.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Essential Emergency Evacuation Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides, comparisons, and tools to help you understand and choose the right emergency evacuation coverage.
          </p>
        </div>

        {/* Topical Clusters */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Browse by Topic</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topicalClusters.map((cluster, index) => (
              <button
                key={index}
                onClick={() => setSelectedCluster(selectedCluster === cluster.name ? '' : cluster.name)}
                className={`text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedCluster === cluster.name
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50'
                }`}
              >
                <h4 className="font-semibold text-gray-900 mb-2">{cluster.name}</h4>
                <p className="text-sm text-gray-600">{cluster.description}</p>
                <span className="text-xs text-blue-600 mt-2 block">
                  {cluster.references.length} articles
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        {showCategories && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {category === 'all' ? 'All Content' : category.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* References Grid */}
        <div className={`${layout === 'grid' ? 'grid lg:grid-cols-3 md:grid-cols-2 gap-6' : 'space-y-4'}`}>
          {filteredReferences.map((ref, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center text-blue-600">
                    {getCategoryIcon(ref.category)}
                    <span className="ml-2 text-xs uppercase font-medium text-gray-500">
                      {ref.category.replace('-', ' ')}
                    </span>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(ref.difficulty)}`}>
                    {ref.difficulty}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                  <Link href={ref.href} className="hover:text-blue-600 transition-colors">
                    {ref.title}
                  </Link>
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {ref.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {ref.readingTime} read
                  </span>
                  <div className="flex items-center">
                    {getPopularityStars(ref.popularity)}
                  </div>
                </div>
                
                <Link 
                  href={ref.href} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors group"
                >
                  Read Article
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400 block">
                    SEO Target: {ref.keywordTarget}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More */}
        {filteredReferences.length === maxReferences && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setFilteredReferences(prev => [...prev, ...crossReferences.slice(prev.length, prev.length + 6)])}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Load More Articles
            </button>
          </div>
        )}
        
        {/* SEO Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Explore our comprehensive library of emergency evacuation insurance resources to make informed coverage decisions.
          </p>
        </div>
      </div>
    </section>
  );
}