interface TripCancellationAnchorPattern {
  keyword: string;
  searchVolume: number;
  competition: 'low' | 'medium' | 'high';
  intent: 'informational' | 'commercial' | 'transactional' | 'navigational';
  variations: {
    exact: string[];
    partial: string[];
    branded: string[];
    natural: string[];
    question: string[];
  };
}

interface TripLinkingRule {
  sourcePageType: string;
  targetPageType: string;
  maxLinks: number;
  anchorStrategy: 'exact' | 'partial' | 'natural' | 'mixed';
  priority: 'critical' | 'high' | 'medium' | 'low';
}

const tripCancellationAnchorPatterns: TripCancellationAnchorPattern[] = [
  {
    keyword: "trip cancellation insurance",
    searchVolume: 45000,
    competition: "medium",
    intent: "commercial",
    variations: {
      exact: [
        "trip cancellation insurance",
        "trip cancellation coverage",
        "cancellation insurance"
      ],
      partial: [
        "comprehensive trip cancellation insurance",
        "best trip cancellation coverage",
        "affordable trip cancellation insurance"
      ],
      branded: [
        "Elmag trip cancellation insurance",
        "our trip cancellation coverage",
        "trusted trip cancellation protection"
      ],
      natural: [
        "protect your trip with cancellation insurance",
        "get trip cancellation coverage",
        "learn about trip cancellation insurance"
      ],
      question: [
        "what is trip cancellation insurance",
        "do I need trip cancellation insurance",
        "how does trip cancellation insurance work"
      ]
    }
  },
  {
    keyword: "trip cancellation insurance cost",
    searchVolume: 18000,
    competition: "low",
    intent: "transactional",
    variations: {
      exact: [
        "trip cancellation insurance cost",
        "trip cancellation cost",
        "cancellation insurance price"
      ],
      partial: [
        "how much does trip cancellation insurance cost",
        "trip cancellation insurance pricing",
        "affordable trip cancellation rates"
      ],
      branded: [
        "Elmag cancellation insurance rates",
        "our competitive cancellation pricing",
        "transparent cancellation costs"
      ],
      natural: [
        "calculate trip cancellation costs",
        "find cancellation insurance pricing",
        "compare cancellation insurance rates"
      ],
      question: [
        "how much is trip cancellation insurance",
        "what does trip cancellation insurance cost",
        "is trip cancellation insurance expensive"
      ]
    }
  },
  {
    keyword: "best trip cancellation insurance",
    searchVolume: 12000,
    competition: "high",
    intent: "commercial",
    variations: {
      exact: [
        "best trip cancellation insurance",
        "top trip cancellation insurance",
        "best cancellation coverage"
      ],
      partial: [
        "best trip cancellation insurance companies",
        "top-rated trip cancellation coverage",
        "leading trip cancellation providers"
      ],
      branded: [
        "Elmag award-winning cancellation insurance",
        "highly-rated trip cancellation coverage",
        "trusted cancellation insurance provider"
      ],
      natural: [
        "find the best trip cancellation insurance",
        "choose top cancellation coverage",
        "discover leading cancellation insurance"
      ],
      question: [
        "which is the best trip cancellation insurance",
        "what's the top trip cancellation coverage",
        "who has the best cancellation insurance"
      ]
    }
  },
  {
    keyword: "cancel for any reason insurance",
    searchVolume: 6700,
    competition: "medium",
    intent: "commercial",
    variations: {
      exact: [
        "cancel for any reason insurance",
        "CFAR insurance",
        "cancel for any reason coverage"
      ],
      partial: [
        "cancel for any reason travel insurance",
        "CFAR trip cancellation insurance",
        "ultimate cancellation flexibility"
      ],
      branded: [
        "Elmag CFAR insurance",
        "our cancel for any reason coverage",
        "flexible cancellation insurance"
      ],
      natural: [
        "get cancel for any reason protection",
        "ultimate trip cancellation flexibility",
        "maximum cancellation coverage"
      ],
      question: [
        "what is cancel for any reason insurance",
        "do I need CFAR coverage",
        "how does cancel for any reason work"
      ]
    }
  },
  {
    keyword: "trip cancellation vs trip interruption",
    searchVolume: 8900,
    competition: "low",
    intent: "informational",
    variations: {
      exact: [
        "trip cancellation vs trip interruption",
        "cancellation vs interruption",
        "difference between cancellation and interruption"
      ],
      partial: [
        "trip cancellation versus trip interruption insurance",
        "cancellation vs interruption coverage comparison",
        "understanding cancellation and interruption differences"
      ],
      branded: [
        "Elmag cancellation vs interruption guide",
        "our coverage comparison guide",
        "expert cancellation vs interruption analysis"
      ],
      natural: [
        "understand cancellation vs interruption coverage",
        "compare cancellation and interruption benefits",
        "learn the difference between coverage types"
      ],
      question: [
        "what's the difference between cancellation and interruption",
        "should I get cancellation or interruption insurance",
        "which is better cancellation or interruption coverage"
      ]
    }
  },
  {
    keyword: "when to buy trip cancellation insurance",
    searchVolume: 5400,
    competition: "low",
    intent: "informational",
    variations: {
      exact: [
        "when to buy trip cancellation insurance",
        "trip cancellation insurance timing",
        "best time to purchase cancellation insurance"
      ],
      partial: [
        "when should I buy trip cancellation insurance",
        "optimal timing for cancellation insurance",
        "trip cancellation insurance purchase timing"
      ],
      branded: [
        "Elmag timing recommendations",
        "our purchase timing guide",
        "expert timing advice"
      ],
      natural: [
        "learn when to purchase cancellation insurance",
        "find the best time to buy coverage",
        "understand cancellation insurance timing"
      ],
      question: [
        "when should I buy trip cancellation insurance",
        "is it too late to buy cancellation insurance",
        "can I buy trip cancellation insurance after booking"
      ]
    }
  },
  {
    keyword: "business trip cancellation insurance",
    searchVolume: 2800,
    competition: "low",
    intent: "commercial",
    variations: {
      exact: [
        "business trip cancellation insurance",
        "corporate trip cancellation",
        "business travel cancellation coverage"
      ],
      partial: [
        "business trip cancellation insurance policies",
        "corporate travel cancellation protection",
        "work trip cancellation coverage"
      ],
      branded: [
        "Elmag business trip cancellation",
        "our corporate cancellation solutions",
        "professional travel cancellation insurance"
      ],
      natural: [
        "protect business trips with cancellation insurance",
        "corporate travel cancellation solutions",
        "business trip protection coverage"
      ],
      question: [
        "do I need business trip cancellation insurance",
        "what is corporate trip cancellation coverage",
        "how does business trip insurance work"
      ]
    }
  },
  {
    keyword: "cruise cancellation insurance",
    searchVolume: 8900,
    competition: "medium",
    intent: "commercial",
    variations: {
      exact: [
        "cruise cancellation insurance",
        "cruise trip cancellation",
        "cruise cancellation coverage"
      ],
      partial: [
        "cruise trip cancellation insurance policies",
        "comprehensive cruise cancellation protection",
        "cruise vacation cancellation coverage"
      ],
      branded: [
        "Elmag cruise cancellation insurance",
        "our specialized cruise coverage",
        "trusted cruise cancellation protection"
      ],
      natural: [
        "protect your cruise with cancellation insurance",
        "comprehensive cruise trip protection",
        "cruise vacation cancellation coverage"
      ],
      question: [
        "do I need cruise cancellation insurance",
        "what does cruise cancellation insurance cover",
        "is cruise cancellation insurance worth it"
      ]
    }
  }
];

const tripCancellationLinkingRules: TripLinkingRule[] = [
  {
    sourcePageType: "trip-cancellation-landing",
    targetPageType: "cost-calculator",
    maxLinks: 3,
    anchorStrategy: "natural",
    priority: "critical"
  },
  {
    sourcePageType: "trip-cancellation-landing",
    targetPageType: "comparison-guide",
    maxLinks: 2,
    anchorStrategy: "partial",
    priority: "high"
  },
  {
    sourcePageType: "trip-cancellation-landing",
    targetPageType: "company-reviews",
    maxLinks: 2,
    anchorStrategy: "natural",
    priority: "high"
  },
  {
    sourcePageType: "cost-calculator",
    targetPageType: "trip-cancellation-landing",
    maxLinks: 1,
    anchorStrategy: "exact",
    priority: "critical"
  },
  {
    sourcePageType: "comparison-guide",
    targetPageType: "cfar-coverage",
    maxLinks: 2,
    anchorStrategy: "partial",
    priority: "high"
  },
  {
    sourcePageType: "business-trip",
    targetPageType: "corporate-plans",
    maxLinks: 3,
    anchorStrategy: "natural",
    priority: "medium"
  },
  {
    sourcePageType: "cruise-cancellation",
    targetPageType: "travel-insurance",
    maxLinks: 2,
    anchorStrategy: "mixed",
    priority: "medium"
  }
];

export class TripCancellationSEOAnchor {
  private patterns: TripCancellationAnchorPattern[];
  private rules: TripLinkingRule[];
  
  constructor() {
    this.patterns = tripCancellationAnchorPatterns;
    this.rules = tripCancellationLinkingRules;
  }

  /**
   * Get anchor text variations for a specific keyword
   */
  getAnchorVariations(
    keyword: string, 
    type: 'exact' | 'partial' | 'branded' | 'natural' | 'question' = 'natural'
  ): string[] {
    const pattern = this.patterns.find(p => 
      p.keyword.toLowerCase() === keyword.toLowerCase()
    );
    
    if (!pattern) {
      return [keyword];
    }
    
    return pattern.variations[type] || pattern.variations.natural;
  }

  /**
   * Get contextually appropriate anchor text
   */
  getContextualAnchor(
    keyword: string,
    intent: 'informational' | 'commercial' | 'transactional' | 'navigational',
    avoid: string[] = []
  ): string {
    const pattern = this.patterns.find(p => p.keyword === keyword);
    if (!pattern) return keyword;
    
    let variations: string[];
    
    // Select variation type based on intent
    switch (intent) {
      case 'informational':
        variations = [...pattern.variations.question, ...pattern.variations.natural];
        break;
      case 'commercial':
        variations = [...pattern.variations.partial, ...pattern.variations.natural];
        break;
      case 'transactional':
        variations = [...pattern.variations.exact, ...pattern.variations.partial];
        break;
      case 'navigational':
        variations = [...pattern.variations.natural, ...pattern.variations.branded];
        break;
      default:
        variations = pattern.variations.natural;
    }
    
    // Filter out avoided terms
    const filteredVariations = variations.filter(variation => 
      !avoid.some(avoidTerm => variation.toLowerCase().includes(avoidTerm.toLowerCase()))
    );
    
    return filteredVariations[0] || keyword;
  }

  /**
   * Generate natural anchor text with context awareness
   */
  generateNaturalAnchor(
    keyword: string, 
    context: {
      tripValue?: number;
      travelType?: string;
      urgency?: 'high' | 'medium' | 'low';
      pagePosition?: 'header' | 'body' | 'footer';
    }
  ): string {
    const pattern = this.patterns.find(p => p.keyword === keyword);
    if (!pattern) return keyword;
    
    let selectedVariations = pattern.variations.natural;
    
    // Adjust based on context
    if (context.tripValue && context.tripValue > 5000) {
      // High-value trips get more premium language
      selectedVariations = pattern.variations.partial.filter(v => 
        v.includes('comprehensive') || v.includes('premium') || v.includes('best')
      ).concat(selectedVariations);
    }
    
    if (context.travelType === 'business') {
      selectedVariations = selectedVariations.filter(v =>
        !v.includes('vacation') && !v.includes('leisure')
      );
    }
    
    if (context.urgency === 'high') {
      selectedVariations = pattern.variations.exact.concat(selectedVariations);
    }
    
    if (context.pagePosition === 'header') {
      // Headers get more direct, compelling language
      selectedVariations = pattern.variations.partial.concat(selectedVariations);
    }
    
    return selectedVariations[0] || pattern.variations.natural[0];
  }

  /**
   * Get internal linking recommendations
   */
  getInternalLinkingRecommendations(
    currentPageType: string,
    existingLinks: string[] = []
  ): Array<{
    targetPage: string;
    anchorText: string;
    priority: string;
    placement: 'header' | 'body' | 'sidebar' | 'footer';
    maxOccurrences: number;
  }> {
    const rules = this.rules.filter(rule => 
      rule.sourcePageType === currentPageType
    );
    
    const recommendations = [];
    
    for (const rule of rules) {
      const existingCount = existingLinks.filter(link => 
        link.includes(rule.targetPageType)
      ).length;
      
      if (existingCount < rule.maxLinks) {
        const keyword = this.getKeywordForPageType(rule.targetPageType);
        let anchorText: string;
        
        switch (rule.anchorStrategy) {
          case 'exact':
            anchorText = this.getAnchorVariations(keyword, 'exact')[0];
            break;
          case 'partial':
            anchorText = this.getAnchorVariations(keyword, 'partial')[0];
            break;
          case 'natural':
            anchorText = this.getAnchorVariations(keyword, 'natural')[0];
            break;
          case 'mixed':
            const allTypes = ['exact', 'partial', 'natural'] as const;
            const randomType = allTypes[Math.floor(Math.random() * allTypes.length)];
            anchorText = this.getAnchorVariations(keyword, randomType)[0];
            break;
          default:
            anchorText = keyword;
        }
        
        recommendations.push({
          targetPage: rule.targetPageType,
          anchorText,
          priority: rule.priority,
          placement: this.getOptimalPlacement(rule.priority),
          maxOccurrences: rule.maxLinks - existingCount
        });
      }
    }
    
    return recommendations.sort((a, b) => {
      const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
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
    type: string;
  }> {
    const pattern = this.patterns.find(p => p.keyword === keyword);
    if (!pattern) {
      return [{ anchorText: keyword, percentage: 100, count: totalLinks, type: 'exact' }];
    }
    
    // SEO-safe distribution for trip cancellation
    const distribution = [
      { type: 'exact', percentage: 10, variations: pattern.variations.exact },
      { type: 'partial', percentage: 30, variations: pattern.variations.partial },
      { type: 'natural', percentage: 35, variations: pattern.variations.natural },
      { type: 'branded', percentage: 15, variations: pattern.variations.branded },
      { type: 'generic', percentage: 10, variations: ['learn more', 'read guide', 'get coverage'] }
    ];
    
    const result = [];
    
    for (const dist of distribution) {
      const count = Math.round((totalLinks * dist.percentage) / 100);
      if (count > 0) {
        const anchorText = dist.variations[0] || keyword;
        result.push({
          anchorText,
          percentage: dist.percentage,
          count,
          type: dist.type
        });
      }
    }
    
    return result;
  }

  /**
   * Validate anchor text for SEO safety
   */
  validateAnchorText(
    anchorText: string, 
    targetKeyword: string
  ): {
    isValid: boolean;
    score: number;
    warnings: string[];
    suggestions: string[];
  } {
    const warnings = [];
    const suggestions = [];
    let score = 100;
    
    const lowerAnchor = anchorText.toLowerCase();
    const lowerKeyword = targetKeyword.toLowerCase();
    
    // Exact match check
    if (lowerAnchor === lowerKeyword) {
      warnings.push("Exact match anchor - use sparingly (max 10% of links)");
      score -= 15;
    }
    
    // Length checks
    if (anchorText.length > 150) {
      warnings.push("Anchor text too long - keep under 150 characters");
      score -= 10;
    }
    
    if (anchorText.length < 8) {
      warnings.push("Anchor text very short - consider more descriptive text");
      score -= 5;
    }
    
    // Keyword density in anchor
    const keywordCount = (lowerAnchor.match(new RegExp(lowerKeyword.replace(/\s+/g, '\\s+'), 'g')) || []).length;
    if (keywordCount > 1) {
      warnings.push("Target keyword appears multiple times - avoid stuffing");
      score -= 20;
    }
    
    // Natural language assessment
    const naturalIndicators = [
      'learn', 'discover', 'find', 'get', 'compare', 'understand', 
      'guide', 'help', 'tips', 'advice', 'information'
    ];
    
    const hasNaturalLanguage = naturalIndicators.some(indicator => 
      lowerAnchor.includes(indicator)
    );
    
    if (!hasNaturalLanguage && lowerAnchor === lowerKeyword) {
      suggestions.push("Add natural language terms for better user experience");
      score -= 5;
    }
    
    // Commercial intent checks
    const commercialTerms = ['best', 'top', 'cheap', 'affordable', 'premium'];
    const hasCommercialTerms = commercialTerms.some(term => lowerAnchor.includes(term));
    
    if (hasCommercialTerms && commercialTerms.filter(term => lowerAnchor.includes(term)).length > 1) {
      warnings.push("Multiple commercial terms may appear spammy");
      score -= 10;
    }
    
    // Action-oriented language
    const actionWords = ['get', 'buy', 'purchase', 'find', 'compare', 'choose'];
    const hasAction = actionWords.some(action => lowerAnchor.includes(action));
    
    if (!hasAction && lowerAnchor.includes('insurance')) {
      suggestions.push("Consider adding action words for better click-through rates");
    }
    
    return {
      isValid: score >= 70,
      score,
      warnings,
      suggestions
    };
  }

  /**
   * Generate trip-specific anchor variations
   */
  generateTripSpecificAnchors(
    baseKeyword: string,
    tripContext: {
      destination?: string;
      travelType?: 'leisure' | 'business' | 'cruise' | 'adventure';
      duration?: number;
      season?: 'summer' | 'winter' | 'spring' | 'fall';
    }
  ): string[] {
    const variations = this.getAnchorVariations(baseKeyword, 'natural');
    const contextualVariations = [];
    
    // Add destination-specific variations
    if (tripContext.destination) {
      contextualVariations.push(
        `${baseKeyword} for ${tripContext.destination}`,
        `${tripContext.destination} ${baseKeyword}`,
        `protect your ${tripContext.destination} trip`
      );
    }
    
    // Add travel type variations  
    if (tripContext.travelType) {
      switch (tripContext.travelType) {
        case 'business':
          contextualVariations.push(
            `business ${baseKeyword}`,
            `corporate trip protection`,
            `work travel ${baseKeyword}`
          );
          break;
        case 'cruise':
          contextualVariations.push(
            `cruise ${baseKeyword}`,
            `cruise vacation protection`,
            `ship trip ${baseKeyword}`
          );
          break;
        case 'adventure':
          contextualVariations.push(
            `adventure ${baseKeyword}`,
            `extreme sports trip protection`,
            `outdoor adventure ${baseKeyword}`
          );
          break;
        default:
          contextualVariations.push(
            `vacation ${baseKeyword}`,
            `leisure trip protection`
          );
      }
    }
    
    // Add seasonal variations
    if (tripContext.season) {
      contextualVariations.push(
        `${tripContext.season} ${baseKeyword}`,
        `${tripContext.season} travel protection`
      );
    }
    
    return [...variations, ...contextualVariations].slice(0, 10);
  }

  private getKeywordForPageType(pageType: string): string {
    const keywordMap: { [key: string]: string } = {
      'cost-calculator': 'trip cancellation insurance cost',
      'comparison-guide': 'trip cancellation vs trip interruption',
      'company-reviews': 'best trip cancellation insurance',
      'cfar-coverage': 'cancel for any reason insurance',
      'business-trip': 'business trip cancellation insurance',
      'cruise-cancellation': 'cruise cancellation insurance',
      'claims-guide': 'trip cancellation insurance claims',
      'coverage-guide': 'trip cancellation insurance coverage'
    };
    
    return keywordMap[pageType] || 'trip cancellation insurance';
  }

  private getOptimalPlacement(priority: string): 'header' | 'body' | 'sidebar' | 'footer' {
    switch (priority) {
      case 'critical':
        return 'header';
      case 'high':
        return 'body';
      case 'medium':
        return 'sidebar';
      case 'low':
        return 'footer';
      default:
        return 'body';
    }
  }
}

/**
 * Utility functions for trip cancellation SEO
 */
export const tripCancellationSEO = new TripCancellationSEOAnchor();

export function getTripAnchorText(
  keyword: string,
  intent: 'informational' | 'commercial' | 'transactional' | 'navigational' = 'commercial'
): string {
  return tripCancellationSEO.getContextualAnchor(keyword, intent);
}

export function generateTripInternalLinks(
  pageType: string,
  existingLinks: string[] = []
) {
  return tripCancellationSEO.getInternalLinkingRecommendations(pageType, existingLinks);
}

export function validateTripAnchor(anchorText: string, targetKeyword: string) {
  return tripCancellationSEO.validateAnchorText(anchorText, targetKeyword);
}

export function createTripAnchorDistribution(keyword: string, totalLinks: number) {
  return tripCancellationSEO.generateAnchorDistribution(keyword, totalLinks);
}

export function getTripSpecificAnchors(
  keyword: string,
  tripContext: {
    destination?: string;
    travelType?: 'leisure' | 'business' | 'cruise' | 'adventure';
    duration?: number;
    season?: 'summer' | 'winter' | 'spring' | 'fall';
  }
) {
  return tripCancellationSEO.generateTripSpecificAnchors(keyword, tripContext);
}