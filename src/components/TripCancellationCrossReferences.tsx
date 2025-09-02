import Link from 'next/link';
import { useState, useEffect } from 'react';

interface TripCancellationCrossReference {
  title: string;
  href: string;
  description: string;
  category: 'comparison' | 'guide' | 'calculator' | 'reviews' | 'claims' | 'coverage';
  keywordTarget: string;
  readingTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  popularity: number; // 1-5 scale
  searchVolume?: number;
}

interface TripContentCluster {
  name: string;
  description: string;
  icon: string;
  references: TripCancellationCrossReference[];
}

interface TripCancellationCrossReferencesProps {
  currentPage: string;
  tripValue?: number;
  destination?: string;
  showCategories?: boolean;
  maxReferences?: number;
  layout?: 'grid' | 'list' | 'compact';
  className?: string;
}

const tripCancellationCrossReferences: TripCancellationCrossReference[] = [
  // Comparison Content
  {
    title: "Trip Cancellation vs Trip Interruption Insurance: Complete Guide",
    href: "/trip-cancellation-vs-interruption",
    description: "Comprehensive comparison of trip cancellation and interruption coverage benefits.",
    category: "comparison",
    keywordTarget: "trip cancellation vs interruption",
    readingTime: "8 min",
    difficulty: "beginner",
    popularity: 5,
    searchVolume: 8900
  },
  {
    title: "Travel Insurance vs Trip Cancellation Insurance",
    href: "/travel-insurance-vs-trip-cancellation",
    description: "Understanding the differences between comprehensive travel insurance and standalone trip cancellation.",
    category: "comparison",
    keywordTarget: "travel insurance vs trip cancellation",
    readingTime: "10 min",
    difficulty: "intermediate",
    popularity: 4,
    searchVolume: 6700
  },
  {
    title: "Cancel for Any Reason vs Standard Trip Cancellation",
    href: "/cfar-vs-standard-cancellation",
    description: "Detailed comparison of CFAR coverage versus traditional trip cancellation benefits.",
    category: "comparison",
    keywordTarget: "cancel for any reason vs standard cancellation",
    readingTime: "12 min",
    difficulty: "intermediate",
    popularity: 4,
    searchVolume: 4200
  },

  // Educational Guides
  {
    title: "Complete Guide to Trip Cancellation Insurance",
    href: "/complete-trip-cancellation-guide",
    description: "Ultimate resource covering everything about trip cancellation insurance coverage.",
    category: "guide",
    keywordTarget: "trip cancellation insurance guide",
    readingTime: "20 min",
    difficulty: "beginner",
    popularity: 5,
    searchVolume: 12000
  },
  {
    title: "When to Buy Trip Cancellation Insurance: Timing Guide",
    href: "/when-buy-trip-cancellation",
    description: "Strategic timing advice for purchasing trip cancellation coverage to maximize benefits.",
    category: "guide",
    keywordTarget: "when to buy trip cancellation insurance",
    readingTime: "15 min",
    difficulty: "beginner",
    popularity: 4,
    searchVolume: 5400
  },
  {
    title: "Trip Cancellation Insurance Coverage Explained",
    href: "/trip-cancellation-coverage-explained",
    description: "Detailed explanation of what trip cancellation insurance covers and excludes.",
    category: "coverage",
    keywordTarget: "trip cancellation insurance coverage",
    readingTime: "18 min",
    difficulty: "intermediate",
    popularity: 5,
    searchVolume: 9800
  },

  // Calculators and Tools
  {
    title: "Trip Cancellation Insurance Cost Calculator",
    href: "/trip-cancellation-calculator",
    description: "Calculate trip cancellation insurance costs based on trip value and coverage options.",
    category: "calculator",
    keywordTarget: "trip cancellation insurance cost calculator",
    readingTime: "5 min",
    difficulty: "beginner",
    popularity: 5,
    searchVolume: 18000
  },
  {
    title: "Trip Value Assessment Tool",
    href: "/trip-value-assessment",
    description: "Evaluate your total trip investment to determine appropriate cancellation coverage.",
    category: "calculator",
    keywordTarget: "trip value assessment tool",
    readingTime: "7 min",
    difficulty: "beginner",
    popularity: 4
  },
  {
    title: "Trip Cancellation Risk Calculator",
    href: "/trip-cancellation-risk-calculator",
    description: "Assess your trip cancellation risk factors and get personalized coverage recommendations.",
    category: "calculator",
    keywordTarget: "trip cancellation risk calculator",
    readingTime: "10 min",
    difficulty: "intermediate",
    popularity: 3
  },

  // Company Reviews and Comparisons
  {
    title: "Best Trip Cancellation Insurance Companies 2024",
    href: "/best-trip-cancellation-companies",
    description: "Independent reviews and ratings of top trip cancellation insurance providers.",
    category: "reviews",
    keywordTarget: "best trip cancellation insurance companies",
    readingTime: "25 min",
    difficulty: "intermediate",
    popularity: 5,
    searchVolume: 12000
  },
  {
    title: "Trip Cancellation Insurance Reviews and Ratings",
    href: "/trip-cancellation-reviews",
    description: "Customer reviews and expert ratings of trip cancellation insurance policies.",
    category: "reviews",
    keywordTarget: "trip cancellation insurance reviews",
    readingTime: "15 min",
    difficulty: "beginner",
    popularity: 4,
    searchVolume: 7200
  },
  {
    title: "Cheapest Trip Cancellation Insurance Options",
    href: "/cheapest-trip-cancellation-insurance",
    description: "Budget-friendly trip cancellation coverage options and discount strategies.",
    category: "reviews",
    keywordTarget: "cheapest trip cancellation insurance",
    readingTime: "12 min",
    difficulty: "beginner",
    popularity: 4,
    searchVolume: 8500
  },

  // Claims and Process Guides
  {
    title: "How to File a Trip Cancellation Insurance Claim",
    href: "/file-trip-cancellation-claim",
    description: "Step-by-step guide to filing and managing trip cancellation insurance claims.",
    category: "claims",
    keywordTarget: "how to file trip cancellation claim",
    readingTime: "15 min",
    difficulty: "intermediate",
    popularity: 4,
    searchVolume: 6200
  },
  {
    title: "Trip Cancellation Claim Requirements and Documentation",
    href: "/trip-cancellation-claim-requirements",
    description: "Complete list of required documents and evidence for trip cancellation claims.",
    category: "claims",
    keywordTarget: "trip cancellation claim requirements",
    readingTime: "10 min",
    difficulty: "intermediate",
    popularity: 3,
    searchVolume: 3800
  },
  {
    title: "Trip Cancellation Claim Denial Appeals Process",
    href: "/trip-cancellation-claim-appeals",
    description: "How to appeal denied trip cancellation claims and improve approval chances.",
    category: "claims",
    keywordTarget: "trip cancellation claim appeal",
    readingTime: "18 min",
    difficulty: "advanced",
    popularity: 2,
    searchVolume: 2100
  },

  // Specialized Coverage Guides
  {
    title: "Business Trip Cancellation Insurance Guide",
    href: "/business-trip-cancellation-guide",
    description: "Specialized coverage considerations for corporate and business travel cancellations.",
    category: "coverage",
    keywordTarget: "business trip cancellation insurance",
    readingTime: "16 min",
    difficulty: "intermediate",
    popularity: 3,
    searchVolume: 2800
  },
  {
    title: "Cruise Trip Cancellation Insurance Essentials",
    href: "/cruise-cancellation-insurance-guide",
    description: "Cruise-specific trip cancellation coverage including cabin confinement and port issues.",
    category: "coverage",
    keywordTarget: "cruise cancellation insurance",
    readingTime: "14 min",
    difficulty: "intermediate",
    popularity: 4,
    searchVolume: 8900
  },
  {
    title: "International Trip Cancellation Insurance",
    href: "/international-trip-cancellation",
    description: "Enhanced trip cancellation coverage for international travel with country-specific benefits.",
    category: "coverage",
    keywordTarget: "international trip cancellation insurance",
    readingTime: "20 min",
    difficulty: "intermediate",
    popularity: 4,
    searchVolume: 5600
  }
];

const tripContentClusters: TripContentCluster[] = [
  {
    name: "Trip Cancellation Basics",
    description: "Foundation knowledge about trip cancellation insurance and coverage",
    icon: "book",
    references: tripCancellationCrossReferences.filter(ref => 
      ref.difficulty === 'beginner' && ['guide', 'coverage'].includes(ref.category)
    )
  },
  {
    name: "Coverage Comparisons",
    description: "Detailed comparisons between different types of trip cancellation coverage",
    icon: "chart",
    references: tripCancellationCrossReferences.filter(ref => ref.category === 'comparison')
  },
  {
    name: "Cost Analysis & Tools",
    description: "Calculators and tools to evaluate trip cancellation insurance costs and needs",
    icon: "calculator",
    references: tripCancellationCrossReferences.filter(ref => ref.category === 'calculator')
  },
  {
    name: "Provider Reviews",
    description: "Reviews, ratings, and comparisons of trip cancellation insurance companies",
    icon: "star",
    references: tripCancellationCrossReferences.filter(ref => ref.category === 'reviews')
  },
  {
    name: "Claims Management",
    description: "Guidance on filing, managing, and appealing trip cancellation claims",
    icon: "document",
    references: tripCancellationCrossReferences.filter(ref => ref.category === 'claims')
  },
  {
    name: "Specialized Coverage",
    description: "Specialized trip cancellation coverage for specific travel types and situations",
    icon: "globe",
    references: tripCancellationCrossReferences.filter(ref => 
      ref.category === 'coverage' && ref.difficulty !== 'beginner'
    )
  }
];

const getCategoryIcon = (category: string) => {
  const iconMap = {
    comparison: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    guide: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    calculator: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    reviews: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    claims: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    coverage: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  };
  
  return iconMap[category as keyof typeof iconMap] || iconMap.guide;
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

export default function TripCancellationCrossReferences({
  currentPage,
  tripValue,
  destination,
  showCategories = true,
  maxReferences = 12,
  layout = 'grid',
  className = ""
}: TripCancellationCrossReferencesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCluster, setSelectedCluster] = useState<string>('');
  const [filteredReferences, setFilteredReferences] = useState<TripCancellationCrossReference[]>([]);

  useEffect(() => {
    let filtered = tripCancellationCrossReferences;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(ref => ref.category === selectedCategory);
    }
    
    if (selectedCluster) {
      const cluster = tripContentClusters.find(c => c.name === selectedCluster);
      if (cluster) {
        filtered = cluster.references;
      }
    }
    
    // Personalization based on trip value
    if (tripValue) {
      filtered = filtered.sort((a, b) => {
        if (tripValue > 5000) {
          // High-value trips prioritize comprehensive guides and CFAR
          if (a.keywordTarget.includes('cfar') || a.keywordTarget.includes('comprehensive')) return -1;
          if (b.keywordTarget.includes('cfar') || b.keywordTarget.includes('comprehensive')) return 1;
        } else {
          // Budget trips prioritize cost calculators and cheap options
          if (a.keywordTarget.includes('cost') || a.keywordTarget.includes('cheap')) return -1;
          if (b.keywordTarget.includes('cost') || b.keywordTarget.includes('cheap')) return 1;
        }
        return b.popularity - a.popularity;
      });
    } else {
      // Sort by popularity and search volume
      filtered.sort((a, b) => {
        if (a.popularity !== b.popularity) {
          return b.popularity - a.popularity;
        }
        return (b.searchVolume || 0) - (a.searchVolume || 0);
      });
    }
    
    setFilteredReferences(filtered.slice(0, maxReferences));
  }, [selectedCategory, selectedCluster, maxReferences, tripValue]);

  const categories = ['all', ...Array.from(new Set(tripCancellationCrossReferences.map(ref => ref.category)))];

  if (layout === 'compact') {
    return (
      <div className={`bg-white rounded-lg border border-gray-200 p-4 ${className}`}>
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
          <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          Trip Cancellation Resources
        </h3>
        <ul className="space-y-2">
          {filteredReferences.slice(0, 6).map((ref, index) => (
            <li key={index}>
              <Link 
                href={ref.href} 
                className="text-sm text-green-600 hover:text-green-800 hover:underline transition-colors block"
              >
                {ref.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <Link 
            href="/trip-cancellation-resources" 
            className="text-xs text-gray-500 hover:text-green-600 transition-colors"
          >
            View all trip cancellation resources →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete Trip Cancellation Insurance Resource Library
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides, calculators, and comparisons to help you understand and choose the best trip cancellation coverage.
          </p>
        </div>

        {/* Content Clusters */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Browse by Topic</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tripContentClusters.map((cluster, index) => (
              <button
                key={index}
                onClick={() => setSelectedCluster(selectedCluster === cluster.name ? '' : cluster.name)}
                className={`text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedCluster === cluster.name
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 bg-white hover:border-green-200 hover:bg-green-50'
                }`}
              >
                <div className="flex items-center mb-2">
                  {getCategoryIcon(cluster.icon)}
                  <h4 className="font-semibold text-gray-900 ml-2">{cluster.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">{cluster.description}</p>
                <span className="text-xs text-green-600 font-medium">
                  {cluster.references.length} resources
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
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-green-300 hover:text-green-600'
                  }`}
                >
                  {category === 'all' ? 'All Resources' : category}
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
                  <div className="flex items-center text-green-600">
                    {getCategoryIcon(ref.category)}
                    <span className="ml-2 text-xs uppercase font-medium text-gray-500">
                      {ref.category}
                    </span>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(ref.difficulty)}`}>
                    {ref.difficulty}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                  <Link href={ref.href} className="hover:text-green-600 transition-colors">
                    {ref.title}
                  </Link>
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {ref.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {ref.readingTime} read
                    </span>
                    {ref.searchVolume && (
                      <span className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        {(ref.searchVolume / 1000).toFixed(1)}K/month
                      </span>
                    )}
                  </div>
                  <div className="flex items-center">
                    {getPopularityStars(ref.popularity)}
                  </div>
                </div>
                
                <Link 
                  href={ref.href} 
                  className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm transition-colors group"
                >
                  Read Resource
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400 block">
                    Target: {ref.keywordTarget}
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
              onClick={() => setFilteredReferences(prev => [...prev, ...tripCancellationCrossReferences.slice(prev.length, prev.length + 6)])}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Load More Resources
            </button>
          </div>
        )}
        
        {/* Trip Value Personalization */}
        {tripValue && (
          <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Personalized for Your Trip Value</h3>
            <p className="text-green-100 mb-4">
              Based on your ${tripValue.toLocaleString()} trip investment, we've prioritized the most relevant resources for you.
            </p>
            <Link 
              href="/personalized-trip-recommendations" 
              className="inline-flex items-center bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Personalized Recommendations
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}