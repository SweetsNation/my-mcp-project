interface TripProfile {
  travelType?: 'leisure' | 'business' | 'cruise' | 'international' | 'adventure' | 'family';
  tripValue?: number; // Total trip cost
  destination?: string;
  departureDate?: Date;
  duration?: number; // Days
  travelers?: number;
  age?: 'under-30' | '30-50' | '50-65' | 'over-65';
  riskTolerance?: 'low' | 'medium' | 'high';
  previousClaims?: boolean;
  seasonality?: 'peak' | 'shoulder' | 'off-season';
}

interface RecommendationContext {
  currentPage: string;
  sessionDuration: number;
  pagesViewed: string[];
  interactionLevel: 'high' | 'medium' | 'low';
  deviceType: 'mobile' | 'tablet' | 'desktop';
  referralSource?: string;
  searchQuery?: string;
}

interface TripCancellationRecommendation {
  title: string;
  href: string;
  description: string;
  relevanceScore: number;
  category: 'product' | 'educational' | 'comparison' | 'calculator' | 'support';
  priority: 'critical' | 'high' | 'medium' | 'low';
  keywordTarget: string;
  cta: string;
  estimatedSearchVolume?: number;
}

interface TripValueSegment {
  name: string;
  minValue: number;
  maxValue: number;
  recommendedCoverage: string[];
  riskFactors: string[];
}

const tripValueSegments: TripValueSegment[] = [
  {
    name: 'Budget Travel',
    minValue: 0,
    maxValue: 1500,
    recommendedCoverage: ['basic-cancellation', 'travel-delay'],
    riskFactors: ['limited-flexibility', 'non-refundable-bookings']
  },
  {
    name: 'Mid-Range Travel',
    minValue: 1500,
    maxValue: 5000,
    recommendedCoverage: ['comprehensive-cancellation', 'trip-interruption', 'travel-medical'],
    riskFactors: ['moderate-investment', 'family-coordination']
  },
  {
    name: 'Luxury Travel',
    minValue: 5000,
    maxValue: 15000,
    recommendedCoverage: ['premium-cancellation', 'cancel-for-any-reason', 'concierge-services'],
    riskFactors: ['high-investment', 'complex-itineraries', 'exclusive-bookings']
  },
  {
    name: 'Ultra-Luxury Travel',
    minValue: 15000,
    maxValue: Infinity,
    recommendedCoverage: ['maximum-cancellation', 'cfar-coverage', 'vip-assistance'],
    riskFactors: ['significant-investment', 'custom-arrangements', 'celebrity-travel']
  }
];

interface DestinationRiskData {
  [region: string]: {
    riskLevel: 'low' | 'medium' | 'high' | 'extreme';
    commonCancellationReasons: string[];
    seasonalFactors: string[];
    recommendedCoverage: string[];
    averageClaimRate: number;
  };
}

const destinationRiskData: DestinationRiskData = {
  'caribbean': {
    riskLevel: 'medium',
    commonCancellationReasons: ['hurricanes', 'flight-delays', 'resort-issues'],
    seasonalFactors: ['hurricane-season', 'peak-pricing'],
    recommendedCoverage: ['weather-cancellation', 'trip-delay', 'supplier-default'],
    averageClaimRate: 0.08
  },
  'europe': {
    riskLevel: 'low',
    commonCancellationReasons: ['strikes', 'flight-delays', 'personal-emergencies'],
    seasonalFactors: ['summer-crowds', 'transportation-strikes'],
    recommendedCoverage: ['standard-cancellation', 'trip-interruption'],
    averageClaimRate: 0.05
  },
  'asia': {
    riskLevel: 'medium',
    commonCancellationReasons: ['political-events', 'natural-disasters', 'health-concerns'],
    seasonalFactors: ['monsoon-season', 'political-instability'],
    recommendedCoverage: ['comprehensive-cancellation', 'medical-evacuation'],
    averageClaimRate: 0.07
  },
  'africa': {
    riskLevel: 'high',
    commonCancellationReasons: ['political-instability', 'health-emergencies', 'infrastructure-issues'],
    seasonalFactors: ['rainy-season', 'wildlife-migration'],
    recommendedCoverage: ['maximum-cancellation', 'medical-coverage', 'evacuation'],
    averageClaimRate: 0.12
  },
  'south-america': {
    riskLevel: 'medium',
    commonCancellationReasons: ['political-events', 'natural-disasters', 'transportation-issues'],
    seasonalFactors: ['rainy-season', 'altitude-concerns'],
    recommendedCoverage: ['comprehensive-cancellation', 'adventure-coverage'],
    averageClaimRate: 0.09
  },
  'domestic-us': {
    riskLevel: 'low',
    commonCancellationReasons: ['weather-events', 'personal-emergencies', 'flight-issues'],
    seasonalFactors: ['storm-season', 'holiday-travel'],
    recommendedCoverage: ['basic-cancellation', 'travel-delay'],
    averageClaimRate: 0.04
  }
};

const baseRecommendations: TripCancellationRecommendation[] = [
  {
    title: "Trip Cancellation Cost Calculator",
    href: "/trip-cancellation-calculator",
    description: "Calculate the cost of trip cancellation insurance based on your trip value and coverage needs.",
    relevanceScore: 0.9,
    category: "calculator",
    priority: "critical",
    keywordTarget: "trip cancellation insurance cost",
    cta: "Calculate Your Coverage Cost",
    estimatedSearchVolume: 18000
  },
  {
    title: "Trip Cancellation vs Trip Interruption Insurance",
    href: "/trip-cancellation-vs-interruption",
    description: "Understand the key differences between cancellation and interruption coverage.",
    relevanceScore: 0.85,
    category: "comparison",
    priority: "high",
    keywordTarget: "trip cancellation vs interruption",
    cta: "Compare Coverage Types",
    estimatedSearchVolume: 8900
  },
  {
    title: "Best Trip Cancellation Insurance Companies 2024",
    href: "/best-trip-cancellation-insurance",
    description: "Independent reviews and ratings of top trip cancellation insurance providers.",
    relevanceScore: 0.8,
    category: "comparison",
    priority: "high",
    keywordTarget: "best trip cancellation insurance",
    cta: "View Company Rankings",
    estimatedSearchVolume: 12000
  },
  {
    title: "Cancel for Any Reason (CFAR) Insurance",
    href: "/cancel-for-any-reason",
    description: "Ultimate flexibility with cancel for any reason travel insurance coverage.",
    relevanceScore: 0.75,
    category: "product",
    priority: "high",
    keywordTarget: "cancel for any reason insurance",
    cta: "Learn About CFAR",
    estimatedSearchVolume: 6700
  },
  {
    title: "When to Buy Trip Cancellation Insurance",
    href: "/when-buy-trip-cancellation",
    description: "Optimal timing for purchasing trip cancellation coverage to maximize benefits.",
    relevanceScore: 0.7,
    category: "educational",
    priority: "medium",
    keywordTarget: "when to buy trip cancellation insurance",
    cta: "Learn Best Timing",
    estimatedSearchVolume: 4200
  },
  {
    title: "Trip Cancellation Insurance Claims Guide",
    href: "/trip-cancellation-claims",
    description: "Step-by-step guide to filing and managing trip cancellation insurance claims.",
    relevanceScore: 0.65,
    category: "support",
    priority: "medium",
    keywordTarget: "trip cancellation insurance claims",
    cta: "File Your Claim",
    estimatedSearchVolume: 5400
  }
];

export class TripCancellationRecommendationEngine {
  private tripProfile: TripProfile;
  private context: RecommendationContext;
  
  constructor(tripProfile: TripProfile = {}, context: RecommendationContext) {
    this.tripProfile = tripProfile;
    this.context = context;
  }

  /**
   * Generate personalized trip cancellation recommendations
   */
  generateRecommendations(limit: number = 6): TripCancellationRecommendation[] {
    let recommendations = [...baseRecommendations];
    
    // Add trip value-specific recommendations
    if (this.tripProfile.tripValue) {
      recommendations = this.addTripValueRecommendations(recommendations);
    }
    
    // Add destination-specific recommendations
    if (this.tripProfile.destination) {
      recommendations = this.addDestinationRecommendations(recommendations);
    }
    
    // Add travel type-specific recommendations
    if (this.tripProfile.travelType) {
      recommendations = this.addTravelTypeRecommendations(recommendations);
    }
    
    // Add age-specific recommendations
    if (this.tripProfile.age) {
      recommendations = this.addAgeSpecificRecommendations(recommendations);
    }
    
    // Apply contextual scoring
    recommendations = this.applyContextualScoring(recommendations);
    
    // Sort by relevance and priority
    recommendations.sort((a, b) => {
      if (a.priority === 'critical' && b.priority !== 'critical') return -1;
      if (b.priority === 'critical' && a.priority !== 'critical') return 1;
      return b.relevanceScore - a.relevanceScore;
    });
    
    return recommendations.slice(0, limit);
  }

  /**
   * Add trip value-specific recommendations
   */
  private addTripValueRecommendations(recommendations: TripCancellationRecommendation[]): TripCancellationRecommendation[] {
    if (!this.tripProfile.tripValue) return recommendations;
    
    const segment = this.getTripValueSegment(this.tripProfile.tripValue);
    const valueRecommendations: TripCancellationRecommendation[] = [];
    
    if (segment.name === 'Budget Travel') {
      valueRecommendations.push({
        title: "Affordable Trip Cancellation Insurance",
        href: "/cheap-trip-cancellation-insurance",
        description: "Budget-friendly trip cancellation coverage options for cost-conscious travelers.",
        relevanceScore: 0.85,
        category: "product",
        priority: "high",
        keywordTarget: "cheap trip cancellation insurance",
        cta: "Find Budget Coverage",
        estimatedSearchVolume: 3200
      });
    }
    
    if (segment.name === 'Luxury Travel' || segment.name === 'Ultra-Luxury Travel') {
      valueRecommendations.push({
        title: "Premium Trip Cancellation Insurance",
        href: "/premium-trip-cancellation",
        description: "High-value trip protection with comprehensive cancellation benefits and concierge services.",
        relevanceScore: 0.9,
        category: "product",
        priority: "critical",
        keywordTarget: "premium trip cancellation insurance",
        cta: "Get Premium Coverage",
        estimatedSearchVolume: 2100
      });
      
      valueRecommendations.push({
        title: "Luxury Travel Insurance Concierge Services",
        href: "/luxury-travel-concierge",
        description: "VIP travel assistance and personalized support for high-value trips.",
        relevanceScore: 0.8,
        category: "product",
        priority: "high",
        keywordTarget: "luxury travel insurance concierge",
        cta: "Access VIP Services"
      });
    }
    
    return [...recommendations, ...valueRecommendations];
  }

  /**
   * Add destination-specific recommendations
   */
  private addDestinationRecommendations(recommendations: TripCancellationRecommendation[]): TripCancellationRecommendation[] {
    const destination = this.tripProfile.destination?.toLowerCase();
    if (!destination) return recommendations;
    
    const region = this.getDestinationRegion(destination);
    const riskData = destinationRiskData[region];
    
    if (!riskData) return recommendations;
    
    const destinationRecommendations: TripCancellationRecommendation[] = [];
    
    if (riskData.riskLevel === 'high' || riskData.riskLevel === 'extreme') {
      destinationRecommendations.push({
        title: `High-Risk Destination Trip Insurance for ${this.capitalizeFirst(region)}`,
        href: `/trip-insurance-${region}`,
        description: `Specialized trip cancellation coverage for ${region} travel with enhanced protection.`,
        relevanceScore: 0.95,
        category: "product",
        priority: "critical",
        keywordTarget: `trip insurance ${region}`,
        cta: "Get Destination Coverage"
      });
    }
    
    if (riskData.commonCancellationReasons.includes('hurricanes')) {
      destinationRecommendations.push({
        title: "Hurricane Trip Cancellation Insurance",
        href: "/hurricane-trip-cancellation",
        description: "Protect your trip from hurricane-related cancellations and delays.",
        relevanceScore: 0.9,
        category: "product",
        priority: "high",
        keywordTarget: "hurricane trip cancellation insurance",
        cta: "Get Weather Protection",
        estimatedSearchVolume: 4800
      });
    }
    
    if (riskData.commonCancellationReasons.includes('political-events')) {
      destinationRecommendations.push({
        title: "Political Evacuation and Trip Cancellation",
        href: "/political-evacuation-insurance",
        description: "Coverage for trip cancellations due to political instability and civil unrest.",
        relevanceScore: 0.85,
        category: "product",
        priority: "high",
        keywordTarget: "political evacuation insurance",
        cta: "Protect Against Unrest"
      });
    }
    
    return [...recommendations, ...destinationRecommendations];
  }

  /**
   * Add travel type-specific recommendations
   */
  private addTravelTypeRecommendations(recommendations: TripCancellationRecommendation[]): TripCancellationRecommendation[] {
    const travelTypeRecommendations: TripCancellationRecommendation[] = [];
    
    switch (this.tripProfile.travelType) {
      case 'business':
        travelTypeRecommendations.push({
          title: "Business Trip Cancellation Insurance",
          href: "/business-trip-cancellation",
          description: "Corporate travel protection with work-related cancellation benefits.",
          relevanceScore: 0.9,
          category: "product",
          priority: "high",
          keywordTarget: "business trip cancellation insurance",
          cta: "Protect Business Travel",
          estimatedSearchVolume: 2800
        });
        break;
        
      case 'cruise':
        travelTypeRecommendations.push({
          title: "Cruise Trip Cancellation Insurance",
          href: "/cruise-cancellation-insurance",
          description: "Specialized cruise cancellation coverage including cabin confinement protection.",
          relevanceScore: 0.9,
          category: "product",
          priority: "high",
          keywordTarget: "cruise cancellation insurance",
          cta: "Protect Your Cruise",
          estimatedSearchVolume: 8900
        });
        break;
        
      case 'family':
        travelTypeRecommendations.push({
          title: "Family Trip Cancellation Insurance",
          href: "/family-trip-cancellation",
          description: "Family travel protection covering all travelers with child-friendly benefits.",
          relevanceScore: 0.85,
          category: "product",
          priority: "high",
          keywordTarget: "family trip cancellation insurance",
          cta: "Protect Family Travel",
          estimatedSearchVolume: 3600
        });
        break;
        
      case 'adventure':
        travelTypeRecommendations.push({
          title: "Adventure Travel Cancellation Insurance",
          href: "/adventure-travel-cancellation",
          description: "Specialized coverage for adventure and extreme sports travel cancellations.",
          relevanceScore: 0.8,
          category: "product",
          priority: "medium",
          keywordTarget: "adventure travel cancellation insurance",
          cta: "Cover Adventure Travel",
          estimatedSearchVolume: 1800
        });
        break;
    }
    
    return [...recommendations, ...travelTypeRecommendations];
  }

  /**
   * Add age-specific recommendations
   */
  private addAgeSpecificRecommendations(recommendations: TripCancellationRecommendation[]): TripCancellationRecommendation[] {
    const ageRecommendations: TripCancellationRecommendation[] = [];
    
    if (this.tripProfile.age === 'over-65') {
      ageRecommendations.push({
        title: "Senior Trip Cancellation Insurance",
        href: "/senior-trip-cancellation",
        description: "Age-appropriate trip cancellation coverage with expanded medical reasons.",
        relevanceScore: 0.9,
        category: "product",
        priority: "high",
        keywordTarget: "senior trip cancellation insurance",
        cta: "Get Senior Coverage",
        estimatedSearchVolume: 4200
      });
    }
    
    if (this.tripProfile.age === 'under-30') {
      ageRecommendations.push({
        title: "Student and Young Traveler Trip Insurance",
        href: "/student-trip-cancellation",
        description: "Affordable trip cancellation options designed for students and young travelers.",
        relevanceScore: 0.8,
        category: "product",
        priority: "medium",
        keywordTarget: "student trip cancellation insurance",
        cta: "Student Discounts Available"
      });
    }
    
    return [...recommendations, ...ageRecommendations];
  }

  /**
   * Apply contextual scoring based on user behavior
   */
  private applyContextualScoring(recommendations: TripCancellationRecommendation[]): TripCancellationRecommendation[] {
    return recommendations.map(rec => {
      let adjustedScore = rec.relevanceScore;
      
      // High engagement users prefer educational content
      if (this.context.interactionLevel === 'high') {
        if (rec.category === 'educational' || rec.category === 'comparison') {
          adjustedScore += 0.1;
        }
      }
      
      // Low engagement users prefer tools and immediate value
      if (this.context.interactionLevel === 'low') {
        if (rec.category === 'calculator' || rec.category === 'product') {
          adjustedScore += 0.15;
        }
      }
      
      // Mobile users prefer simplified tools
      if (this.context.deviceType === 'mobile') {
        if (rec.category === 'calculator') {
          adjustedScore += 0.1;
        }
      }
      
      // Session duration adjustments
      if (this.context.sessionDuration > 300) { // 5+ minutes
        if (rec.category === 'educational') {
          adjustedScore += 0.05;
        }
      }
      
      return { ...rec, relevanceScore: Math.min(1.0, adjustedScore) };
    });
  }

  /**
   * Get trip value segment
   */
  private getTripValueSegment(tripValue: number): TripValueSegment {
    return tripValueSegments.find(segment => 
      tripValue >= segment.minValue && tripValue < segment.maxValue
    ) || tripValueSegments[0];
  }

  /**
   * Get destination region from destination string
   */
  private getDestinationRegion(destination: string): string {
    const regionKeywords = {
      'caribbean': ['caribbean', 'bahamas', 'jamaica', 'cuba', 'barbados', 'puerto rico'],
      'europe': ['europe', 'france', 'italy', 'spain', 'germany', 'uk', 'england', 'greece'],
      'asia': ['asia', 'japan', 'china', 'thailand', 'india', 'singapore', 'vietnam', 'korea'],
      'africa': ['africa', 'south africa', 'kenya', 'egypt', 'morocco', 'tanzania'],
      'south-america': ['brazil', 'argentina', 'chile', 'peru', 'colombia', 'ecuador'],
      'domestic-us': ['usa', 'united states', 'america', 'domestic', 'california', 'florida', 'new york']
    };
    
    for (const [region, keywords] of Object.entries(regionKeywords)) {
      if (keywords.some(keyword => destination.toLowerCase().includes(keyword))) {
        return region;
      }
    }
    
    return 'international'; // Default fallback
  }

  /**
   * Generate trip cancellation risk assessment
   */
  generateRiskAssessment(): {
    riskLevel: 'low' | 'medium' | 'high';
    factors: string[];
    recommendedCoverage: string[];
    estimatedClaimProbability: number;
  } {
    const factors: string[] = [];
    let riskScore = 0;
    
    // Trip value risk
    if (this.tripProfile.tripValue) {
      if (this.tripProfile.tripValue > 10000) {
        factors.push('High trip investment');
        riskScore += 2;
      } else if (this.tripProfile.tripValue > 5000) {
        factors.push('Significant trip investment');
        riskScore += 1;
      }
    }
    
    // Destination risk
    if (this.tripProfile.destination) {
      const region = this.getDestinationRegion(this.tripProfile.destination);
      const riskData = destinationRiskData[region];
      
      if (riskData) {
        if (riskData.riskLevel === 'high' || riskData.riskLevel === 'extreme') {
          factors.push(`High-risk destination (${region})`);
          riskScore += 3;
        } else if (riskData.riskLevel === 'medium') {
          factors.push(`Moderate destination risk (${region})`);
          riskScore += 1;
        }
      }
    }
    
    // Age risk
    if (this.tripProfile.age === 'over-65') {
      factors.push('Senior traveler health considerations');
      riskScore += 1;
    }
    
    // Travel type risk
    if (this.tripProfile.travelType === 'adventure') {
      factors.push('Adventure travel activity risks');
      riskScore += 2;
    }
    
    // Determine overall risk level
    let riskLevel: 'low' | 'medium' | 'high';
    if (riskScore >= 4) {
      riskLevel = 'high';
    } else if (riskScore >= 2) {
      riskLevel = 'medium';
    } else {
      riskLevel = 'low';
    }
    
    // Recommended coverage based on risk
    const recommendedCoverage: string[] = [];
    if (riskLevel === 'high') {
      recommendedCoverage.push('Cancel for Any Reason', 'Maximum trip cancellation', 'Medical evacuation');
    } else if (riskLevel === 'medium') {
      recommendedCoverage.push('Comprehensive trip cancellation', 'Trip interruption', 'Travel delay');
    } else {
      recommendedCoverage.push('Basic trip cancellation', 'Travel delay protection');
    }
    
    return {
      riskLevel,
      factors,
      recommendedCoverage,
      estimatedClaimProbability: Math.min(0.2, 0.03 + (riskScore * 0.02))
    };
  }

  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

/**
 * Utility functions
 */
export function createTripCancellationEngine(
  tripProfile: TripProfile = {},
  context: RecommendationContext
): TripCancellationRecommendationEngine {
  return new TripCancellationRecommendationEngine(tripProfile, context);
}

export function getQuickTripRecommendations(
  currentPage: string,
  tripContext: Partial<TripProfile> = {}
): TripCancellationRecommendation[] {
  const engine = createTripCancellationEngine(tripContext, {
    currentPage,
    sessionDuration: 120,
    pagesViewed: [currentPage],
    interactionLevel: 'medium',
    deviceType: 'desktop'
  });
  
  return engine.generateRecommendations(4);
}