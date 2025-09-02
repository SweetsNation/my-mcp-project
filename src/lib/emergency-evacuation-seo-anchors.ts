interface AnchorTextPattern {
  keyword: string;
  variations: {
    primary: string[];
    secondary: string[];
    branded: string[];
    natural: string[];
  };
  context: 'navigational' | 'informational' | 'transactional' | 'commercial';
  difficulty: 'low' | 'medium' | 'high';
  searchVolume: number;
}

interface InternalLinkingRule {
  sourcePageType: string;
  targetPageType: string;
  anchorStrategy: 'exact-match' | 'partial-match' | 'branded' | 'natural';
  maxLinksPerPage: number;
  priority: 'high' | 'medium' | 'low';
}

interface SEOAnchorConfig {
  targetKeyword: string;
  contextualRelevance: number; // 0-1 scale
  linkJuice: 'primary' | 'secondary' | 'supporting';
  placement: 'header' | 'body' | 'sidebar' | 'footer';
  frequency: 'once' | 'multiple' | 'unlimited';
}

// Emergency evacuation anchor text patterns based on keyword research
const emergencyEvacuationAnchors: AnchorTextPattern[] = [
  {
    keyword: "emergency evacuation insurance",
    variations: {
      primary: [
        "emergency evacuation insurance",
        "emergency evacuation coverage",
        "evacuation insurance plans"
      ],
      secondary: [
        "comprehensive emergency evacuation insurance",
        "international emergency evacuation coverage",
        "emergency evacuation insurance benefits"
      ],
      branded: [
        "Elmag emergency evacuation insurance",
        "our emergency evacuation coverage",
        "professional evacuation insurance"
      ],
      natural: [
        "learn about emergency evacuation insurance",
        "emergency evacuation coverage options",
        "get emergency evacuation protection"
      ]
    },
    context: "commercial",
    difficulty: "medium",
    searchVolume: 22000
  },
  {
    keyword: "emergency evacuation cost",
    variations: {
      primary: [
        "emergency evacuation cost",
        "evacuation insurance cost",
        "emergency evacuation pricing"
      ],
      secondary: [
        "how much does emergency evacuation cost",
        "emergency evacuation insurance rates",
        "affordable emergency evacuation coverage"
      ],
      branded: [
        "Elmag evacuation cost calculator",
        "our evacuation pricing guide",
        "transparent evacuation costs"
      ],
      natural: [
        "calculate emergency evacuation costs",
        "understand evacuation pricing",
        "estimate evacuation expenses"
      ]
    },
    context: "transactional",
    difficulty: "low",
    searchVolume: 8900
  },
  {
    keyword: "medical evacuation vs emergency evacuation",
    variations: {
      primary: [
        "medical evacuation vs emergency evacuation",
        "difference between medical and emergency evacuation",
        "medical vs emergency evacuation comparison"
      ],
      secondary: [
        "medical evacuation versus emergency evacuation coverage",
        "comparing medical and emergency evacuation insurance",
        "medical evacuation vs emergency evacuation benefits"
      ],
      branded: [
        "Elmag evacuation comparison guide",
        "our medical vs emergency evacuation analysis",
        "expert evacuation coverage comparison"
      ],
      natural: [
        "understand the difference between evacuation types",
        "compare medical and emergency evacuation",
        "which evacuation coverage is right for you"
      ]
    },
    context: "informational",
    difficulty: "low",
    searchVolume: 5400
  },
  {
    keyword: "best emergency evacuation insurance",
    variations: {
      primary: [
        "best emergency evacuation insurance",
        "top emergency evacuation insurance companies",
        "emergency evacuation insurance reviews"
      ],
      secondary: [
        "best emergency evacuation insurance 2024",
        "top-rated emergency evacuation coverage",
        "leading emergency evacuation insurance providers"
      ],
      branded: [
        "Elmag emergency evacuation excellence",
        "award-winning evacuation insurance",
        "trusted evacuation insurance provider"
      ],
      natural: [
        "find the best emergency evacuation insurance",
        "choose top evacuation coverage",
        "discover leading evacuation insurance"
      ]
    },
    context: "commercial",
    difficulty: "high",
    searchVolume: 3200
  },
  {
    keyword: "emergency evacuation insurance for business travel",
    variations: {
      primary: [
        "emergency evacuation insurance for business travel",
        "business emergency evacuation coverage",
        "corporate evacuation insurance"
      ],
      secondary: [
        "business travel emergency evacuation insurance",
        "corporate emergency evacuation plans",
        "employee evacuation insurance coverage"
      ],
      branded: [
        "Elmag business evacuation insurance",
        "our corporate evacuation solutions",
        "professional business evacuation coverage"
      ],
      natural: [
        "protect business travelers with evacuation insurance",
        "business evacuation coverage options",
        "corporate emergency evacuation solutions"
      ]
    },
    context: "commercial",
    difficulty: "low",
    searchVolume: 2100
  },
  {
    keyword: "emergency evacuation insurance reviews",
    variations: {
      primary: [
        "emergency evacuation insurance reviews",
        "evacuation insurance ratings",
        "emergency evacuation coverage reviews"
      ],
      secondary: [
        "independent emergency evacuation insurance reviews",
        "customer evacuation insurance ratings",
        "professional evacuation coverage evaluations"
      ],
      branded: [
        "Elmag evacuation insurance testimonials",
        "our customer evacuation reviews",
        "verified evacuation insurance feedback"
      ],
      natural: [
        "read emergency evacuation insurance reviews",
        "customer experiences with evacuation coverage",
        "real evacuation insurance testimonials"
      ]
    },
    context: "informational",
    difficulty: "medium",
    searchVolume: 1800
  },
  {
    keyword: "high risk emergency evacuation insurance",
    variations: {
      primary: [
        "high risk emergency evacuation insurance",
        "high-risk evacuation coverage",
        "dangerous destination evacuation insurance"
      ],
      secondary: [
        "emergency evacuation insurance for high-risk destinations",
        "high-threat evacuation coverage",
        "maximum risk evacuation insurance"
      ],
      branded: [
        "Elmag high-risk evacuation specialists",
        "our extreme risk evacuation coverage",
        "specialized high-risk evacuation insurance"
      ],
      natural: [
        "evacuation coverage for dangerous locations",
        "high-risk travel evacuation protection",
        "specialized evacuation insurance for risky destinations"
      ]
    },
    context: "commercial",
    difficulty: "low",
    searchVolume: 1600
  }
];

// Internal linking rules for emergency evacuation pages
const internalLinkingRules: InternalLinkingRule[] = [
  {
    sourcePageType: "emergency-evacuation-landing",
    targetPageType: "cost-calculator",
    anchorStrategy: "natural",
    maxLinksPerPage: 3,
    priority: "high"
  },
  {
    sourcePageType: "emergency-evacuation-landing", 
    targetPageType: "comparison-guide",
    anchorStrategy: "partial-match",
    maxLinksPerPage: 2,
    priority: "high"
  },
  {
    sourcePageType: "emergency-evacuation-landing",
    targetPageType: "company-reviews",
    anchorStrategy: "natural",
    maxLinksPerPage: 2,
    priority: "medium"
  },
  {
    sourcePageType: "cost-calculator",
    targetPageType: "emergency-evacuation-landing",
    anchorStrategy: "exact-match",
    maxLinksPerPage: 1,
    priority: "high"
  },
  {
    sourcePageType: "comparison-guide",
    targetPageType: "medical-evacuation",
    anchorStrategy: "partial-match",
    maxLinksPerPage: 3,
    priority: "high"
  },
  {
    sourcePageType: "business-evacuation",
    targetPageType: "corporate-plans",
    anchorStrategy: "natural",
    maxLinksPerPage: 2,
    priority: "medium"
  }
];

export class EmergencyEvacuationSEOAnchor {
  private anchors: AnchorTextPattern[];
  private rules: InternalLinkingRule[];
  
  constructor() {
    this.anchors = emergencyEvacuationAnchors;
    this.rules = internalLinkingRules;
  }

  /**
   * Get anchor text variations for a specific keyword
   */
  getAnchorVariations(keyword: string, strategy: 'primary' | 'secondary' | 'branded' | 'natural' = 'natural'): string[] {
    const pattern = this.anchors.find(anchor => 
      anchor.keyword.toLowerCase() === keyword.toLowerCase()
    );
    
    if (!pattern) {
      return [keyword]; // Fallback to exact keyword
    }
    
    return pattern.variations[strategy] || pattern.variations.natural;
  }

  /**
   * Get contextually appropriate anchor text
   */
  getContextualAnchor(
    keyword: string,
    context: 'navigational' | 'informational' | 'transactional' | 'commercial',
    avoid: string[] = []
  ): string {
    const variations = this.getAnchorVariations(keyword, 'natural');
    const pattern = this.anchors.find(anchor => anchor.keyword === keyword);
    
    // Filter out anchors to avoid
    const filteredVariations = variations.filter(variation => 
      !avoid.some(avoidTerm => variation.toLowerCase().includes(avoidTerm.toLowerCase()))
    );
    
    if (filteredVariations.length === 0) {
      return keyword; // Fallback
    }
    
    // Select based on context
    switch (context) {
      case 'navigational':
        return filteredVariations.find(v => v.includes('learn') || v.includes('guide') || v.includes('information')) 
               || filteredVariations[0];
               
      case 'informational':
        return filteredVariations.find(v => v.includes('understand') || v.includes('explain') || v.includes('what'))
               || filteredVariations[0];
               
      case 'transactional':
        return filteredVariations.find(v => v.includes('get') || v.includes('buy') || v.includes('purchase'))
               || filteredVariations[0];
               
      case 'commercial':
        return filteredVariations.find(v => v.includes('best') || v.includes('top') || v.includes('compare'))
               || filteredVariations[0];
               
      default:
        return filteredVariations[Math.floor(Math.random() * filteredVariations.length)];
    }
  }

  /**
   * Generate natural anchor text with proper grammar
   */
  generateNaturalAnchor(keyword: string, sentenceContext: string): string {
    const variations = this.getAnchorVariations(keyword, 'natural');
    
    // Simple natural language processing for better integration
    const lowerContext = sentenceContext.toLowerCase();
    
    if (lowerContext.includes('learn') || lowerContext.includes('understand')) {
      return variations.find(v => v.includes('learn') || v.includes('understand')) || variations[0];
    }
    
    if (lowerContext.includes('compare') || lowerContext.includes('versus')) {
      return variations.find(v => v.includes('compare') || v.includes('difference')) || variations[0];
    }
    
    if (lowerContext.includes('cost') || lowerContext.includes('price')) {
      return variations.find(v => v.includes('cost') || v.includes('pricing')) || variations[0];
    }
    
    return variations[0];
  }

  /**
   * Get internal linking recommendations for a page
   */
  getInternalLinkingRecommendations(
    currentPageType: string,
    existingLinks: string[] = []
  ): Array<{
    targetPage: string;
    anchorText: string;
    priority: string;
    placement: string;
  }> {
    const applicableRules = this.rules.filter(rule => 
      rule.sourcePageType === currentPageType
    );
    
    const recommendations = [];
    
    for (const rule of applicableRules) {
      // Count existing links to this target
      const existingCount = existingLinks.filter(link => 
        link.includes(rule.targetPageType)
      ).length;
      
      if (existingCount < rule.maxLinksPerPage) {
        const remainingSlots = rule.maxLinksPerPage - existingCount;
        
        // Generate appropriate anchor text
        const keyword = this.getKeywordForPageType(rule.targetPageType);
        const anchorText = this.getContextualAnchor(
          keyword,
          'navigational',
          existingLinks
        );
        
        recommendations.push({
          targetPage: rule.targetPageType,
          anchorText,
          priority: rule.priority,
          placement: this.getOptimalPlacement(rule.priority)
        });
      }
    }
    
    return recommendations.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority as keyof typeof priorityOrder] - 
             priorityOrder[a.priority as keyof typeof priorityOrder];
    });
  }

  /**
   * Generate anchor text distribution to avoid over-optimization
   */
  generateAnchorDistribution(
    keyword: string,
    totalLinks: number
  ): Array<{
    anchorText: string;
    percentage: number;
    count: number;
  }> {
    const pattern = this.anchors.find(anchor => anchor.keyword === keyword);
    if (!pattern) {
      return [{ anchorText: keyword, percentage: 100, count: totalLinks }];
    }
    
    // SEO-safe distribution percentages
    const distribution = [
      { type: 'exact', percentage: 15 }, // Exact match
      { type: 'partial', percentage: 25 }, // Partial match
      { type: 'branded', percentage: 20 }, // Branded
      { type: 'natural', percentage: 30 }, // Natural language
      { type: 'generic', percentage: 10 }  // Generic terms
    ];
    
    const result = [];
    
    for (const dist of distribution) {
      const count = Math.round((totalLinks * dist.percentage) / 100);
      let anchorText = keyword;
      
      switch (dist.type) {
        case 'exact':
          anchorText = pattern.variations.primary[0];
          break;
        case 'partial':
          anchorText = pattern.variations.secondary[0];
          break;
        case 'branded':
          anchorText = pattern.variations.branded[0];
          break;
        case 'natural':
          anchorText = pattern.variations.natural[0];
          break;
        case 'generic':
          anchorText = 'learn more';
          break;
      }
      
      if (count > 0) {
        result.push({
          anchorText,
          percentage: dist.percentage,
          count
        });
      }
    }
    
    return result;
  }

  /**
   * Validate anchor text for SEO safety
   */
  validateAnchorText(anchorText: string, targetKeyword: string): {
    isValid: boolean;
    score: number;
    warnings: string[];
    suggestions: string[];
  } {
    const warnings = [];
    const suggestions = [];
    let score = 100;
    
    // Check for over-optimization
    if (anchorText.toLowerCase() === targetKeyword.toLowerCase()) {
      warnings.push("Exact match anchor - use sparingly to avoid over-optimization");
      score -= 20;
    }
    
    // Check length
    if (anchorText.length > 100) {
      warnings.push("Anchor text too long - keep under 100 characters");
      score -= 10;
    }
    
    if (anchorText.length < 10) {
      warnings.push("Anchor text very short - consider more descriptive text");
      score -= 5;
    }
    
    // Check for keyword stuffing
    const keywordCount = (anchorText.toLowerCase().match(new RegExp(targetKeyword.toLowerCase(), 'g')) || []).length;
    if (keywordCount > 1) {
      warnings.push("Keyword appears multiple times - avoid keyword stuffing");
      score -= 15;
    }
    
    // Check for natural language
    const naturalWords = ['learn', 'discover', 'explore', 'understand', 'find out', 'read about'];
    const hasNaturalLanguage = naturalWords.some(word => anchorText.toLowerCase().includes(word));
    
    if (!hasNaturalLanguage && anchorText.toLowerCase() === targetKeyword.toLowerCase()) {
      suggestions.push("Consider adding natural language terms like 'learn about' or 'discover'");
      score -= 5;
    }
    
    return {
      isValid: score >= 70,
      score,
      warnings,
      suggestions
    };
  }

  /**
   * Get keyword for specific page type
   */
  private getKeywordForPageType(pageType: string): string {
    const keywordMap: { [key: string]: string } = {
      'cost-calculator': 'emergency evacuation cost',
      'comparison-guide': 'medical evacuation vs emergency evacuation', 
      'company-reviews': 'emergency evacuation insurance reviews',
      'business-evacuation': 'emergency evacuation insurance for business travel',
      'high-risk': 'high risk emergency evacuation insurance',
      'medical-evacuation': 'medical evacuation insurance',
      'corporate-plans': 'corporate evacuation insurance'
    };
    
    return keywordMap[pageType] || 'emergency evacuation insurance';
  }

  /**
   * Get optimal placement based on priority
   */
  private getOptimalPlacement(priority: string): string {
    switch (priority) {
      case 'high':
        return 'body'; // Within main content
      case 'medium':
        return 'sidebar'; // Related content sidebar
      case 'low':
        return 'footer'; // Footer resources
      default:
        return 'body';
    }
  }
}

/**
 * Utility functions for common use cases
 */
export const seoAnchor = new EmergencyEvacuationSEOAnchor();

export function getOptimizedAnchor(
  keyword: string, 
  context: 'navigational' | 'informational' | 'transactional' | 'commercial' = 'navigational'
): string {
  return seoAnchor.getContextualAnchor(keyword, context);
}

export function generateInternalLinks(
  pageType: string,
  existingLinks: string[] = []
): Array<{targetPage: string; anchorText: string; priority: string}> {
  return seoAnchor.getInternalLinkingRecommendations(pageType, existingLinks);
}

export function createSafeAnchorDistribution(keyword: string, totalLinks: number) {
  return seoAnchor.generateAnchorDistribution(keyword, totalLinks);
}

export function validateSEOAnchor(anchorText: string, targetKeyword: string) {
  return seoAnchor.validateAnchorText(anchorText, targetKeyword);
}