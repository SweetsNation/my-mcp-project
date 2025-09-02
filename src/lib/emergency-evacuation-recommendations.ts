interface UserProfile {
  travelType?: 'business' | 'leisure' | 'humanitarian' | 'expat';
  riskLevel?: 'high' | 'medium' | 'low';
  destination?: string;
  coverage?: 'individual' | 'family' | 'group' | 'corporate';
  industry?: string;
  previousClaims?: boolean;
  travelFrequency?: 'frequent' | 'occasional' | 'rare';
  budget?: 'premium' | 'standard' | 'budget';
}

interface RecommendationContext {
  currentPage: string;
  timeOnPage: number;
  scrollDepth: number;
  interactionLevel: 'high' | 'medium' | 'low';
  referralSource?: string;
  seasonality?: 'peak' | 'shoulder' | 'off';
}

interface ContentRecommendation {
  title: string;
  href: string;
  description: string;
  relevanceScore: number;
  category: 'product' | 'educational' | 'comparison' | 'tool' | 'support';
  priority: 'critical' | 'high' | 'medium' | 'low';
  keywordTarget: string;
  cta: string;
}

interface GeographicRiskData {
  [country: string]: {
    riskLevel: 'extreme' | 'high' | 'elevated' | 'low';
    primaryThreats: string[];
    evacuationCost: number;
    recommendedCoverage: string[];
  };
}

const geographicRiskData: GeographicRiskData = {
  'afghanistan': {
    riskLevel: 'extreme',
    primaryThreats: ['terrorism', 'political-instability', 'kidnapping'],
    evacuationCost: 50000,
    recommendedCoverage: ['political-evacuation', 'kidnap-ransom', 'security-services']
  },
  'iraq': {
    riskLevel: 'extreme', 
    primaryThreats: ['terrorism', 'political-instability', 'civil-unrest'],
    evacuationCost: 45000,
    recommendedCoverage: ['political-evacuation', 'security-services', 'crisis-management']
  },
  'syria': {
    riskLevel: 'extreme',
    primaryThreats: ['war', 'terrorism', 'political-instability'],
    evacuationCost: 55000,
    recommendedCoverage: ['political-evacuation', 'medical-evacuation', 'kidnap-ransom']
  },
  'somalia': {
    riskLevel: 'extreme',
    primaryThreats: ['piracy', 'terrorism', 'kidnapping'],
    evacuationCost: 40000,
    recommendedCoverage: ['political-evacuation', 'kidnap-ransom', 'security-services']
  },
  'venezuela': {
    riskLevel: 'high',
    primaryThreats: ['political-instability', 'crime', 'economic-crisis'],
    evacuationCost: 25000,
    recommendedCoverage: ['political-evacuation', 'medical-evacuation']
  },
  'myanmar': {
    riskLevel: 'high',
    primaryThreats: ['political-instability', 'civil-unrest', 'military-conflict'],
    evacuationCost: 30000,
    recommendedCoverage: ['political-evacuation', 'crisis-management']
  },
  'haiti': {
    riskLevel: 'high',
    primaryThreats: ['political-instability', 'natural-disasters', 'crime'],
    evacuationCost: 20000,
    recommendedCoverage: ['political-evacuation', 'natural-disaster-evacuation', 'medical-evacuation']
  },
  'ukraine': {
    riskLevel: 'high',
    primaryThreats: ['war', 'political-instability', 'infrastructure-damage'],
    evacuationCost: 35000,
    recommendedCoverage: ['political-evacuation', 'medical-evacuation']
  }
};

const baseRecommendations: ContentRecommendation[] = [
  {
    title: "Emergency Evacuation Cost Calculator",
    href: "/emergency-evacuation-calculator",
    description: "Calculate potential evacuation costs based on destination, coverage level, and risk factors.",
    relevanceScore: 0.9,
    category: "tool",
    priority: "critical",
    keywordTarget: "emergency evacuation cost calculator",
    cta: "Calculate Your Coverage Needs"
  },
  {
    title: "How Emergency Evacuation Insurance Works", 
    href: "/how-emergency-evacuation-works",
    description: "Complete guide to understanding emergency evacuation coverage, benefits, and claim process.",
    relevanceScore: 0.85,
    category: "educational",
    priority: "high",
    keywordTarget: "how emergency evacuation insurance works",
    cta: "Learn About Coverage"
  },
  {
    title: "Emergency Evacuation vs Medical Evacuation",
    href: "/emergency-vs-medical-evacuation",
    description: "Key differences between emergency evacuation and medical evacuation insurance coverage.",
    relevanceScore: 0.8,
    category: "comparison",
    priority: "high", 
    keywordTarget: "emergency evacuation vs medical evacuation",
    cta: "Compare Coverage Types"
  },
  {
    title: "Best Emergency Evacuation Insurance Companies 2024",
    href: "/best-emergency-evacuation-companies",
    description: "Independent reviews and ratings of top emergency evacuation insurance providers.",
    relevanceScore: 0.75,
    category: "comparison",
    priority: "high",
    keywordTarget: "best emergency evacuation insurance companies",
    cta: "View Company Rankings"
  },
  {
    title: "Emergency Evacuation Coverage Limits Explained",
    href: "/evacuation-coverage-limits",
    description: "Understanding coverage limits, exclusions, and benefit maximums for evacuation policies.",
    relevanceScore: 0.7,
    category: "educational",
    priority: "medium",
    keywordTarget: "emergency evacuation coverage limits",
    cta: "Understand Your Limits"
  },
  {
    title: "24/7 Emergency Evacuation Assistance",
    href: "/emergency-evacuation-assistance",
    description: "Round-the-clock emergency coordination and evacuation assistance services.",
    relevanceScore: 0.85,
    category: "support",
    priority: "critical",
    keywordTarget: "24/7 emergency evacuation assistance",
    cta: "Get Emergency Help"
  }
];

export class EmergencyEvacuationRecommendationEngine {
  private userProfile: UserProfile;
  private context: RecommendationContext;
  
  constructor(userProfile: UserProfile = {}, context: RecommendationContext) {
    this.userProfile = userProfile;
    this.context = context;
  }

  /**
   * Generate personalized content recommendations based on user profile and context
   */
  generateRecommendations(limit: number = 6): ContentRecommendation[] {
    let recommendations = [...baseRecommendations];
    
    // Apply destination-specific recommendations
    if (this.userProfile.destination) {
      recommendations = this.addDestinationRecommendations(recommendations);
    }
    
    // Apply user type-specific recommendations
    if (this.userProfile.travelType) {
      recommendations = this.addTravelTypeRecommendations(recommendations);
    }
    
    // Apply risk level recommendations
    if (this.userProfile.riskLevel) {
      recommendations = this.addRiskLevelRecommendations(recommendations);
    }
    
    // Apply coverage type recommendations
    if (this.userProfile.coverage) {
      recommendations = this.addCoverageTypeRecommendations(recommendations);
    }
    
    // Apply contextual scoring based on user behavior
    recommendations = this.applyContextualScoring(recommendations);
    
    // Sort by relevance score and priority
    recommendations.sort((a, b) => {
      if (a.priority === 'critical' && b.priority !== 'critical') return -1;
      if (b.priority === 'critical' && a.priority !== 'critical') return 1;
      return b.relevanceScore - a.relevanceScore;
    });
    
    return recommendations.slice(0, limit);
  }

  /**
   * Add destination-specific recommendations based on geographic risk
   */
  private addDestinationRecommendations(recommendations: ContentRecommendation[]): ContentRecommendation[] {
    const destination = this.userProfile.destination?.toLowerCase();
    
    if (!destination || !geographicRiskData[destination]) {
      return recommendations;
    }
    
    const riskData = geographicRiskData[destination];
    const destinationRecommendations: ContentRecommendation[] = [];
    
    // Add high-risk destination specific content
    if (riskData.riskLevel === 'extreme' || riskData.riskLevel === 'high') {
      destinationRecommendations.push({
        title: `Emergency Evacuation from ${this.capitalizeFirst(destination)}`,
        href: `/emergency-evacuation-${destination}`,
        description: `Specialized evacuation coverage and risk assessment for ${this.capitalizeFirst(destination)}.`,
        relevanceScore: 0.95,
        category: "product",
        priority: "critical",
        keywordTarget: `emergency evacuation ${destination}`,
        cta: "Get Country-Specific Coverage"
      });
    }
    
    // Add threat-specific recommendations
    if (riskData.primaryThreats.includes('terrorism')) {
      destinationRecommendations.push({
        title: "Terrorism and Political Violence Coverage",
        href: "/terrorism-evacuation-insurance",
        description: "Specialized coverage for evacuation due to terrorism and political violence.",
        relevanceScore: 0.9,
        category: "product",
        priority: "high",
        keywordTarget: "terrorism evacuation insurance",
        cta: "Protect Against Terror Threats"
      });
    }
    
    if (riskData.primaryThreats.includes('kidnapping')) {
      destinationRecommendations.push({
        title: "Kidnap and Ransom Insurance",
        href: "/kidnap-ransom-insurance",
        description: "Comprehensive kidnap and ransom coverage with crisis management services.",
        relevanceScore: 0.88,
        category: "product", 
        priority: "high",
        keywordTarget: "kidnap ransom insurance",
        cta: "Get K&R Protection"
      });
    }
    
    if (riskData.primaryThreats.includes('natural-disasters')) {
      destinationRecommendations.push({
        title: "Natural Disaster Evacuation Coverage",
        href: "/natural-disaster-evacuation",
        description: "Emergency evacuation for hurricanes, earthquakes, and other natural disasters.",
        relevanceScore: 0.82,
        category: "product",
        priority: "high",
        keywordTarget: "natural disaster evacuation insurance",
        cta: "Get Disaster Protection"
      });
    }
    
    return [...recommendations, ...destinationRecommendations];
  }

  /**
   * Add travel type-specific recommendations
   */
  private addTravelTypeRecommendations(recommendations: ContentRecommendation[]): ContentRecommendation[] {
    const travelTypeRecommendations: ContentRecommendation[] = [];
    
    switch (this.userProfile.travelType) {
      case 'business':
        travelTypeRecommendations.push({
          title: "Business Travel Emergency Evacuation",
          href: "/business-emergency-evacuation",
          description: "Corporate emergency evacuation coverage for business travelers and employees.",
          relevanceScore: 0.92,
          category: "product",
          priority: "high",
          keywordTarget: "business emergency evacuation insurance",
          cta: "Protect Your Employees"
        });
        break;
        
      case 'humanitarian':
        travelTypeRecommendations.push({
          title: "Humanitarian Worker Evacuation Coverage",
          href: "/humanitarian-evacuation",
          description: "Specialized evacuation coverage for humanitarian workers and NGO personnel.",
          relevanceScore: 0.9,
          category: "product",
          priority: "high", 
          keywordTarget: "humanitarian worker evacuation insurance",
          cta: "Protect Aid Workers"
        });
        break;
        
      case 'expat':
        travelTypeRecommendations.push({
          title: "Expatriate Emergency Evacuation",
          href: "/expat-emergency-evacuation",
          description: "Long-term expatriate evacuation coverage with family protection options.",
          relevanceScore: 0.88,
          category: "product",
          priority: "high",
          keywordTarget: "expat emergency evacuation insurance", 
          cta: "Protect Your Family Abroad"
        });
        break;
    }
    
    return [...recommendations, ...travelTypeRecommendations];
  }

  /**
   * Add risk level-specific recommendations
   */
  private addRiskLevelRecommendations(recommendations: ContentRecommendation[]): ContentRecommendation[] {
    const riskRecommendations: ContentRecommendation[] = [];
    
    if (this.userProfile.riskLevel === 'high') {
      riskRecommendations.push({
        title: "High-Risk Travel Evacuation Insurance",
        href: "/high-risk-evacuation",
        description: "Comprehensive evacuation coverage for high-risk destinations and activities.",
        relevanceScore: 0.95,
        category: "product",
        priority: "critical",
        keywordTarget: "high risk evacuation insurance",
        cta: "Get Maximum Protection"
      });
      
      riskRecommendations.push({
        title: "Executive Protection Services",
        href: "/executive-protection",
        description: "Personal security and evacuation services for high-profile individuals.",
        relevanceScore: 0.85,
        category: "product",
        priority: "high",
        keywordTarget: "executive protection evacuation",
        cta: "Get VIP Protection"
      });
    }
    
    return [...recommendations, ...riskRecommendations];
  }

  /**
   * Add coverage type-specific recommendations
   */
  private addCoverageTypeRecommendations(recommendations: ContentRecommendation[]): ContentRecommendation[] {
    const coverageRecommendations: ContentRecommendation[] = [];
    
    switch (this.userProfile.coverage) {
      case 'family':
        coverageRecommendations.push({
          title: "Family Emergency Evacuation Plans",
          href: "/family-emergency-evacuation",
          description: "Comprehensive family evacuation coverage with dependent protection.",
          relevanceScore: 0.9,
          category: "product",
          priority: "high",
          keywordTarget: "family emergency evacuation insurance",
          cta: "Protect Your Entire Family"
        });
        break;
        
      case 'corporate':
        coverageRecommendations.push({
          title: "Corporate Group Evacuation Coverage",
          href: "/corporate-evacuation",
          description: "Enterprise-level evacuation insurance for multiple employees and locations.",
          relevanceScore: 0.92,
          category: "product",
          priority: "high",
          keywordTarget: "corporate emergency evacuation insurance",
          cta: "Get Enterprise Coverage"
        });
        break;
        
      case 'group':
        coverageRecommendations.push({
          title: "Group Emergency Evacuation Plans",
          href: "/group-emergency-evacuation", 
          description: "Group evacuation coverage for organizations, tour groups, and teams.",
          relevanceScore: 0.88,
          category: "product",
          priority: "high",
          keywordTarget: "group emergency evacuation insurance",
          cta: "Cover Your Group"
        });
        break;
    }
    
    return [...recommendations, ...coverageRecommendations];
  }

  /**
   * Apply contextual scoring based on user behavior and engagement
   */
  private applyContextualScoring(recommendations: ContentRecommendation[]): ContentRecommendation[] {
    return recommendations.map(rec => {
      let adjustedScore = rec.relevanceScore;
      
      // High engagement users get more educational content
      if (this.context.interactionLevel === 'high') {
        if (rec.category === 'educational' || rec.category === 'comparison') {
          adjustedScore += 0.1;
        }
      }
      
      // Low engagement users get more tools and immediate value
      if (this.context.interactionLevel === 'low') {
        if (rec.category === 'tool' || rec.category === 'support') {
          adjustedScore += 0.15;
        }
      }
      
      // Time on page adjustments
      if (this.context.timeOnPage > 120) { // 2+ minutes
        if (rec.category === 'product') {
          adjustedScore += 0.1;
        }
      }
      
      // Scroll depth adjustments
      if (this.context.scrollDepth > 75) {
        if (rec.category === 'comparison' || rec.category === 'educational') {
          adjustedScore += 0.05;
        }
      }
      
      return { ...rec, relevanceScore: Math.min(1.0, adjustedScore) };
    });
  }

  /**
   * Get emergency contact recommendations based on risk level
   */
  getEmergencyContacts(): Array<{title: string, phone: string, description: string}> {
    const baseContacts = [
      {
        title: "24/7 Emergency Evacuation Hotline",
        phone: "+1-800-EVACUATE",
        description: "Immediate evacuation assistance and coordination"
      },
      {
        title: "Medical Emergency Line",
        phone: "+1-800-MED-EVAC", 
        description: "Medical evacuation and emergency healthcare"
      }
    ];
    
    if (this.userProfile.riskLevel === 'high') {
      baseContacts.push({
        title: "Crisis Management Center",
        phone: "+1-800-CRISIS-1",
        description: "Security threat assessment and crisis response"
      });
    }
    
    return baseContacts;
  }

  /**
   * Generate SEO-optimized anchor text for internal links
   */
  generateAnchorText(targetKeyword: string, context: 'navigational' | 'informational' | 'transactional'): string[] {
    const variations: string[] = [];
    
    switch (context) {
      case 'navigational':
        variations.push(
          `learn about ${targetKeyword}`,
          `${targetKeyword} information`,
          `complete ${targetKeyword} guide`
        );
        break;
        
      case 'informational':
        variations.push(
          `what is ${targetKeyword}`,
          `${targetKeyword} explained`,
          `understanding ${targetKeyword}`
        );
        break;
        
      case 'transactional':
        variations.push(
          `get ${targetKeyword}`,
          `buy ${targetKeyword}`,
          `${targetKeyword} quotes`
        );
        break;
    }
    
    return variations;
  }

  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

/**
 * Utility function to create recommendation engine instance
 */
export function createRecommendationEngine(
  userProfile: UserProfile = {},
  context: RecommendationContext
): EmergencyEvacuationRecommendationEngine {
  return new EmergencyEvacuationRecommendationEngine(userProfile, context);
}

/**
 * Get quick emergency evacuation recommendations for any page
 */
export function getQuickRecommendations(
  currentPage: string,
  userContext: Partial<UserProfile> = {}
): ContentRecommendation[] {
  const engine = createRecommendationEngine(userContext, {
    currentPage,
    timeOnPage: 60,
    scrollDepth: 50,
    interactionLevel: 'medium'
  });
  
  return engine.generateRecommendations(4);
}