import Link from 'next/link';

interface TripCancellationRelatedProduct {
  title: string;
  href: string;
  description: string;
  category: 'travel' | 'interruption' | 'delay' | 'medical' | 'comprehensive';
  priority: 'high' | 'medium' | 'low';
  searchVolume?: number;
}

interface TripCancellationContextualLink {
  text: string;
  href: string;
  context: string;
  keywordTarget: string;
  intent: 'informational' | 'commercial' | 'transactional';
}

interface TripCancellationLinkingProps {
  currentPage?: 'trip-cancellation' | 'trip-interruption' | 'travel-delay' | 'travel-medical';
  userContext?: {
    travelType?: 'leisure' | 'business' | 'cruise' | 'international' | 'adventure';
    tripValue?: 'budget' | 'mid-range' | 'luxury';
    riskLevel?: 'high' | 'medium' | 'low';
    coverage?: 'basic' | 'comprehensive' | 'premium';
    destination?: string;
    age?: 'under-30' | '30-50' | '50-65' | 'over-65';
  };
  className?: string;
}

const tripCancellationRelatedProducts: TripCancellationRelatedProduct[] = [
  {
    title: "Trip Interruption Insurance",
    href: "/trip-interruption-insurance",
    description: "Coverage for unexpected trip interruptions, including reimbursement for unused portions and additional expenses.",
    category: "interruption",
    priority: "high",
    searchVolume: 18000
  },
  {
    title: "Travel Delay Insurance",
    href: "/travel-delay-insurance", 
    description: "Protection against flight delays, missed connections, and additional accommodation expenses.",
    category: "delay",
    priority: "high",
    searchVolume: 12000
  },
  {
    title: "Travel Medical Insurance",
    href: "/travel-medical-insurance",
    description: "Comprehensive medical coverage for emergencies, accidents, and illnesses while traveling abroad.",
    category: "medical",
    priority: "high",
    searchVolume: 38000
  },
  {
    title: "Comprehensive Travel Insurance",
    href: "/comprehensive-travel-insurance",
    description: "All-in-one travel protection combining cancellation, medical, delay, and baggage coverage.",
    category: "comprehensive",
    priority: "medium",
    searchVolume: 25000
  },
  {
    title: "Business Travel Insurance",
    href: "/business-travel-insurance",
    description: "Specialized coverage for corporate travelers with enhanced cancellation and interruption benefits.",
    category: "travel",
    priority: "medium",
    searchVolume: 4200
  },
  {
    title: "Cruise Travel Insurance",
    href: "/cruise-travel-insurance",
    description: "Cruise-specific coverage including cabin confinement, missed port protection, and ship delays.",
    category: "travel",
    priority: "medium",
    searchVolume: 12000
  },
  {
    title: "International Travel Insurance",
    href: "/international-travel-insurance",
    description: "Worldwide coverage with enhanced cancellation benefits for overseas travel.",
    category: "travel",
    priority: "medium",
    searchVolume: 67000
  },
  {
    title: "Senior Travel Insurance",
    href: "/senior-travel-insurance",
    description: "Age-appropriate travel coverage with expanded cancellation reasons and medical benefits.",
    category: "travel",
    priority: "low",
    searchVolume: 5400
  }
];

const tripCancellationContextualLinks: TripCancellationContextualLink[] = [
  {
    text: "Trip Cancellation vs Trip Interruption: Understanding the Differences",
    href: "/trip-cancellation-vs-interruption",
    context: "comparison",
    keywordTarget: "trip cancellation vs interruption",
    intent: "informational"
  },
  {
    text: "Trip Cancellation Insurance Cost Calculator",
    href: "/trip-cancellation-cost-calculator",
    context: "tool",
    keywordTarget: "trip cancellation insurance cost",
    intent: "transactional"
  },
  {
    text: "Best Trip Cancellation Insurance Companies 2024",
    href: "/best-trip-cancellation-insurance",
    context: "comparison",
    keywordTarget: "best trip cancellation insurance",
    intent: "commercial"
  },
  {
    text: "Trip Cancellation Insurance Coverage Guide",
    href: "/trip-cancellation-coverage-guide",
    context: "educational",
    keywordTarget: "trip cancellation insurance coverage",
    intent: "informational"
  },
  {
    text: "When to Buy Trip Cancellation Insurance",
    href: "/when-buy-trip-cancellation-insurance",
    context: "timing",
    keywordTarget: "when to buy trip cancellation insurance",
    intent: "informational"
  },
  {
    text: "Trip Cancellation Insurance Claims Process",
    href: "/trip-cancellation-claims",
    context: "process",
    keywordTarget: "trip cancellation insurance claims",
    intent: "informational"
  },
  {
    text: "Trip Cancellation Insurance for COVID-19",
    href: "/trip-cancellation-covid",
    context: "covid",
    keywordTarget: "trip cancellation insurance covid",
    intent: "informational"
  },
  {
    text: "Cancel for Any Reason Travel Insurance",
    href: "/cancel-for-any-reason",
    context: "cfar",
    keywordTarget: "cancel for any reason insurance",
    intent: "commercial"
  },
  {
    text: "Trip Cancellation Insurance Reviews",
    href: "/trip-cancellation-reviews",
    context: "reviews",
    keywordTarget: "trip cancellation insurance reviews",
    intent: "commercial"
  },
  {
    text: "Non-Refundable Trip Protection",
    href: "/non-refundable-trip-protection",
    context: "protection",
    keywordTarget: "non-refundable trip protection",
    intent: "commercial"
  }
];

const quickNavigation = [
  { text: "All Travel Insurance", href: "/travel-insurance" },
  { text: "Travel Medical Coverage", href: "/travel-medical-insurance" },
  { text: "International Insurance", href: "/international-travel-insurance" },
  { text: "Business Travel", href: "/business-travel-insurance" },
  { text: "Travel Quotes", href: "/travel-insurance-quotes" }
];

export default function TripCancellationLinking({ 
  currentPage = 'trip-cancellation',
  userContext = {},
  className = ""
}: TripCancellationLinkingProps) {
  
  // Filter related products based on user context
  const getFilteredProducts = (): TripCancellationRelatedProduct[] => {
    let filtered = [...tripCancellationRelatedProducts];
    
    // Sort by user travel type
    if (userContext.travelType === 'business') {
      filtered = filtered.sort((a, b) => {
        if (a.title.toLowerCase().includes('business') && !b.title.toLowerCase().includes('business')) return -1;
        if (b.title.toLowerCase().includes('business') && !a.title.toLowerCase().includes('business')) return 1;
        return a.priority === 'high' ? -1 : 1;
      });
    }
    
    if (userContext.travelType === 'cruise') {
      filtered = filtered.sort((a, b) => {
        if (a.title.toLowerCase().includes('cruise') && !b.title.toLowerCase().includes('cruise')) return -1;
        if (b.title.toLowerCase().includes('cruise') && !a.title.toLowerCase().includes('cruise')) return 1;
        return a.priority === 'high' ? -1 : 1;
      });
    }
    
    if (userContext.travelType === 'international') {
      filtered = filtered.sort((a, b) => {
        if (a.title.toLowerCase().includes('international') && !b.title.toLowerCase().includes('international')) return -1;
        if (b.title.toLowerCase().includes('international') && !a.title.toLowerCase().includes('international')) return 1;
        return a.priority === 'high' ? -1 : 1;
      });
    }
    
    if (userContext.age === 'over-65') {
      filtered = filtered.sort((a, b) => {
        if (a.title.toLowerCase().includes('senior') && !b.title.toLowerCase().includes('senior')) return -1;
        if (b.title.toLowerCase().includes('senior') && !a.title.toLowerCase().includes('senior')) return 1;
        return a.priority === 'high' ? -1 : 1;
      });
    }
    
    return filtered.slice(0, 4); // Show top 4 most relevant
  };

  // Filter contextual links based on current page and user context
  const getFilteredContextualLinks = (): TripCancellationContextualLink[] => {
    let filtered = [...tripCancellationContextualLinks];
    
    // Prioritize COVID-related content if relevant
    if (userContext.riskLevel === 'high') {
      filtered = filtered.sort((a, b) => {
        if (a.context === 'covid' && b.context !== 'covid') return -1;
        if (b.context === 'covid' && a.context !== 'covid') return 1;
        return 0;
      });
    }
    
    // Prioritize tools for transactional users
    if (userContext.coverage === 'premium') {
      filtered = filtered.sort((a, b) => {
        if (a.context === 'tool' && b.context !== 'tool') return -1;
        if (b.context === 'tool' && a.context !== 'tool') return 1;
        return 0;
      });
    }
    
    return filtered.slice(0, 8);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'interruption':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3" />
          </svg>
        );
      case 'delay':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'medical':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case 'comprehensive':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
          </svg>
        );
    }
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-green-50 to-blue-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete Trip Protection & Travel Insurance Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive travel insurance coverage to protect your trip investment and provide peace of mind.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Related Products */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Related Travel Coverage Options
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {getFilteredProducts().map((product, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-green-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center text-green-600">
                      {getCategoryIcon(product.category)}
                      <h4 className="text-lg font-semibold text-gray-900 ml-2 flex-1">
                        <Link href={product.href} className="hover:text-green-600 transition-colors">
                          {product.title}
                        </Link>
                      </h4>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      product.priority === 'high' ? 'bg-green-100 text-green-700' :
                      product.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {product.priority}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <Link 
                      href={product.href} 
                      className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm transition-colors group"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    {product.searchVolume && (
                      <span className="text-xs text-gray-400">
                        {(product.searchVolume / 1000).toFixed(1)}K searches/month
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contextual Links */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Trip Cancellation Resources
            </h3>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <ul className="space-y-4">
                {getFilteredContextualLinks().map((link, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <Link 
                        href={link.href} 
                        className="text-gray-800 hover:text-green-600 transition-colors font-medium text-sm leading-relaxed block"
                      >
                        {link.text}
                      </Link>
                      <div className="flex items-center mt-1 space-x-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          link.intent === 'commercial' ? 'bg-blue-100 text-blue-700' :
                          link.intent === 'transactional' ? 'bg-green-100 text-green-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {link.intent}
                        </span>
                        <span className="text-xs text-gray-500">
                          {link.keywordTarget}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Need Help Choosing Coverage?
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Our travel insurance specialists can help you find the right trip cancellation coverage for your needs.
                </p>
                <Link 
                  href="/trip-cancellation-consultation" 
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                  Get Expert Guidance
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO-Optimized Quick Navigation */}
        <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Explore All Travel Insurance Options
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {quickNavigation.map((nav, index) => (
              <Link 
                key={index}
                href={nav.href} 
                className="bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 px-4 py-2 rounded-full border border-gray-200 hover:border-green-200 text-sm font-medium transition-all duration-200"
              >
                {nav.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Trip Value Assessment CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Protect Your Trip Investment</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Don't risk losing thousands on non-refundable trip costs. Get comprehensive trip cancellation coverage starting at just $50.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/trip-cancellation-quotes" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Get Trip Cancellation Quote
            </Link>
            <Link 
              href="/trip-cancellation-calculator" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Calculate Coverage Cost
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}