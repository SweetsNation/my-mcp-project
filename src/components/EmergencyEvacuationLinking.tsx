import Link from 'next/link';

interface EmergencyRelatedProduct {
  title: string;
  href: string;
  description: string;
  category: 'travel' | 'security' | 'health' | 'business';
  priority: 'high' | 'medium' | 'low';
}

interface EmergencyContextualLink {
  text: string;
  href: string;
  context: string;
  keywordTarget: string;
}

interface EmergencyEvacuationLinkingProps {
  currentPage?: 'emergency-evacuation' | 'medical-evacuation' | 'political-evacuation' | 'natural-disaster';
  userContext?: {
    travelType?: 'business' | 'leisure' | 'humanitarian' | 'expat';
    riskLevel?: 'high' | 'medium' | 'low';
    destination?: string;
    coverage?: 'individual' | 'family' | 'group' | 'corporate';
  };
  className?: string;
}

const emergencyRelatedProducts: EmergencyRelatedProduct[] = [
  {
    title: "Medical Evacuation Insurance",
    href: "/medical-evacuation-insurance",
    description: "Specialized medical transport coverage for emergency situations worldwide with 24/7 coordination.",
    category: "health",
    priority: "high"
  },
  {
    title: "Political Evacuation Coverage",
    href: "/political-evacuation-insurance", 
    description: "Protection against civil unrest, terrorism, and political instability with rapid extraction services.",
    category: "security",
    priority: "high"
  },
  {
    title: "Natural Disaster Evacuation",
    href: "/natural-disaster-evacuation",
    description: "Emergency evacuation coverage for hurricanes, earthquakes, wildfires, and other natural catastrophes.",
    category: "travel",
    priority: "high"
  },
  {
    title: "Kidnap and Ransom Insurance",
    href: "/kidnap-ransom-insurance",
    description: "Comprehensive security coverage including ransom payments and crisis management services.",
    category: "security",
    priority: "medium"
  },
  {
    title: "Executive Protection Services",
    href: "/executive-protection",
    description: "Personal security and evacuation services for high-profile individuals and executives.",
    category: "business",
    priority: "medium"
  },
  {
    title: "International Travel Insurance",
    href: "/international-travel-insurance",
    description: "Complete travel protection including emergency evacuation benefits for overseas trips.",
    category: "travel",
    priority: "medium"
  },
  {
    title: "Crisis Management Services",
    href: "/crisis-management-insurance",
    description: "Professional crisis response and evacuation coordination for businesses and individuals.",
    category: "business",
    priority: "low"
  },
  {
    title: "Travel Security Consulting",
    href: "/travel-security-consulting",
    description: "Expert risk assessment and security planning for high-risk travel destinations.",
    category: "security",
    priority: "low"
  }
];

const contextualLinks: EmergencyContextualLink[] = [
  {
    text: "Emergency Evacuation vs Medical Evacuation: Key Differences",
    href: "/emergency-vs-medical-evacuation",
    context: "comparison",
    keywordTarget: "emergency evacuation vs medical evacuation"
  },
  {
    text: "How Emergency Evacuation Insurance Works",
    href: "/how-emergency-evacuation-works",
    context: "educational",
    keywordTarget: "how emergency evacuation insurance works"
  },
  {
    text: "Emergency Evacuation Cost Calculator",
    href: "/emergency-evacuation-calculator",
    context: "tool",
    keywordTarget: "emergency evacuation cost"
  },
  {
    text: "Emergency Evacuation Coverage Limits and Benefits",
    href: "/evacuation-coverage-limits",
    context: "details",
    keywordTarget: "emergency evacuation coverage"
  },
  {
    text: "Best Emergency Evacuation Insurance Companies",
    href: "/best-emergency-evacuation-companies",
    context: "comparison",
    keywordTarget: "best emergency evacuation insurance"
  },
  {
    text: "Emergency Evacuation Insurance for Business Travel",
    href: "/business-emergency-evacuation",
    context: "business",
    keywordTarget: "business emergency evacuation insurance"
  },
  {
    text: "Emergency Evacuation from High-Risk Countries",
    href: "/high-risk-evacuation",
    context: "risk",
    keywordTarget: "emergency evacuation high risk countries"
  },
  {
    text: "Emergency Evacuation Insurance Reviews and Ratings",
    href: "/emergency-evacuation-reviews",
    context: "reviews",
    keywordTarget: "emergency evacuation insurance reviews"
  }
];

const quickNavigation = [
  { text: "All Travel Insurance", href: "/travel-insurance" },
  { text: "Security Services", href: "/security-services" },
  { text: "Business Insurance", href: "/business-insurance" },
  { text: "International Coverage", href: "/international-insurance" },
  { text: "Risk Assessment", href: "/risk-assessment" }
];

export default function EmergencyEvacuationLinking({ 
  currentPage = 'emergency-evacuation',
  userContext = {},
  className = ""
}: EmergencyEvacuationLinkingProps) {
  
  // Filter related products based on user context
  const getFilteredProducts = (): EmergencyRelatedProduct[] => {
    let filtered = [...emergencyRelatedProducts];
    
    // Sort by priority and context relevance
    if (userContext.travelType === 'business') {
      filtered = filtered.sort((a, b) => {
        if (a.category === 'business' && b.category !== 'business') return -1;
        if (b.category === 'business' && a.category !== 'business') return 1;
        return a.priority === 'high' ? -1 : 1;
      });
    }
    
    if (userContext.riskLevel === 'high') {
      filtered = filtered.sort((a, b) => {
        if (a.category === 'security' && b.category !== 'security') return -1;
        if (b.category === 'security' && a.category !== 'security') return 1;
        return a.priority === 'high' ? -1 : 1;
      });
    }
    
    return filtered.slice(0, 4); // Show top 4 most relevant
  };

  // Filter contextual links based on current page
  const getFilteredContextualLinks = (): EmergencyContextualLink[] => {
    return contextualLinks.filter(link => {
      if (currentPage === 'medical-evacuation' && link.context === 'comparison') return false;
      return true;
    }).slice(0, 6);
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-blue-50 to-indigo-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Related Emergency Coverage & Security Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive protection for international travel, business operations, and personal security needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Related Products */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Specialized Coverage Options
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {getFilteredProducts().map((product, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 flex-1">
                      <Link href={product.href} className="hover:text-blue-600 transition-colors">
                        {product.title}
                      </Link>
                    </h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      product.priority === 'high' ? 'bg-red-100 text-red-700' :
                      product.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {product.priority}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <Link 
                    href={product.href} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors group"
                  >
                    Learn More About Coverage
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contextual Links */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Essential Resources
            </h3>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <ul className="space-y-4">
                {getFilteredContextualLinks().map((link, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <Link 
                        href={link.href} 
                        className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm leading-relaxed block"
                      >
                        {link.text}
                      </Link>
                      <span className="text-xs text-gray-500 mt-1 block">
                        Target: {link.keywordTarget}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Need Expert Guidance?
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Our emergency evacuation specialists can help assess your risk profile and recommend optimal coverage.
                </p>
                <Link 
                  href="/emergency-evacuation-consultation" 
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                  Get Free Risk Assessment
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO-Optimized Quick Navigation */}
        <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Explore More Coverage Categories
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {quickNavigation.map((nav, index) => (
              <Link 
                key={index}
                href={nav.href} 
                className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-full border border-gray-200 hover:border-blue-200 text-sm font-medium transition-all duration-200"
              >
                {nav.text}
              </Link>
            ))}
          </div>
          
          {/* Emergency Contact CTA */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">
              <strong>24/7 Emergency Support:</strong> Already have coverage and need immediate evacuation assistance?
            </p>
            <Link 
              href="/emergency-contact" 
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Emergency Hotline
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}