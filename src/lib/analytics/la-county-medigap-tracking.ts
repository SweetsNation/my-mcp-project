// Los Angeles County Medicare Supplement Analytics Tracking
// Comprehensive tracking for /medicare-supplement-los-angeles-county webpage performance

export interface LACountyMedigapPageMetrics {
  pageType: 'la_county_medigap';
  county: 'los-angeles';
  state: 'california';
  totalBeneficiaries: number; // 1.8M
  medigapPenetration: number; // 25%
  underservedBeneficiaries: number; // 1.35M
  plansAvailable: number; // 67+
  specialMetrics: {
    // California-specific advantages
    communityRating: boolean; // Age-independent pricing
    communityRatingAdvantage: string; // vs other states

    // LA County demographics
    hispanicPopulation: number; // 48%
    asianPopulation: number; // 15%
    multilingualSupport: string[]; // Languages offered

    // Healthcare networks
    majorNetworks: string[]; // UCLA, Cedars-Sinai, USC, Kaiser, Providence
    worldClassFacilities: number; // Count of major medical centers

    // Market opportunity
    marketGapPercentage: number; // 75% without Medigap
    opportunityValueBillions: number; // $15.78B
    lowPenetrationAdvantage: boolean;

    // Geographic coverage
    citiesCovered: number; // 88 cities
    subregionsCovered: number; // 8 major subregions

    // Plan types
    medigapPlanTypes: number; // 11 plan types
    mostPopularPlan: string; // Plan G
    budgetFriendlyPlan: string; // Plan N
    lowPremiumPlan: string; // HD Plan G
  };
}

export interface LACountyEngagementMetrics {
  scrollDepth: number;
  timeOnPage: number;
  subregionClicks: {
    centralLA: number;
    sanFernandoValley: number;
    westLABeachCities: number;
    southBayLongBeach: number;
    sanGabrielValley: number;
    antelopeValley: number;
    santaClaritaValley: number;
    eastLAWhittier: number;
  };
  planTypeClicks: {
    planG: number;
    planN: number;
    highDeductiblePlanG: number;
    otherPlans: number;
  };
  featureInterest: {
    communityRating: number;
    bilingualSupport: number;
    networkFreedom: number;
    costCalculator: number;
  };
  ctaClicks: {
    phoneCall: number;
    contactForm: number;
    planComparison: number;
    costCalculator: number;
    languageSpecific: number;
  };
  contentEngagement: {
    medigapOpportunitySection: boolean;
    popularPlansSection: boolean;
    communityRatingSpotlight: boolean;
    subregionCoverage: boolean;
    whyElMagSection: boolean;
  };
}

export interface LACountyConversionData {
  leadSource: 'la-county-medigap';
  county: 'los-angeles';
  state: 'california';
  subregion?: 'central' | 'valley' | 'westside' | 'southbay' | 'sgv' | 'av' | 'scv' | 'eastla';
  planInterest: 'plan_g' | 'plan_n' | 'hd_plan_g' | 'other' | 'unsure';
  primaryMotivation: 'community_rating' | 'network_freedom' | 'cost_protection' | 'bilingual_support' | 'gap_coverage';
  languagePreference: 'english' | 'spanish' | 'mandarin' | 'korean' | 'armenian' | 'vietnamese' | 'other';
  ageGroup: '64_new_to_medicare' | '65_69' | '70_79' | '80_plus';
  currentCoverage: 'original_medicare_only' | 'medicare_advantage' | 'other_supplement' | 'none';
}

// Track LA County Medigap page views with county-specific data
export function trackLACountyMedigapPageView(
  pageMetrics: LACountyMedigapPageMetrics,
  userLocation?: {
    city?: string;
    zipCode?: string;
    subregion?: string;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'la_county_medigap_page_view', {
      event_category: 'county_landing_page',
      event_label: 'la_county_medicare_supplement',
      custom_parameters: {
        page_type: pageMetrics.pageType,
        county: pageMetrics.county,
        state: pageMetrics.state,

        // Market size
        total_beneficiaries: pageMetrics.totalBeneficiaries,
        medigap_penetration: pageMetrics.medigapPenetration,
        underserved_beneficiaries: pageMetrics.underservedBeneficiaries,
        market_gap_percentage: pageMetrics.specialMetrics.marketGapPercentage,

        // California advantages
        community_rating: pageMetrics.specialMetrics.communityRating,
        community_rating_advantage: pageMetrics.specialMetrics.communityRatingAdvantage,

        // Demographics
        hispanic_population: pageMetrics.specialMetrics.hispanicPopulation,
        asian_population: pageMetrics.specialMetrics.asianPopulation,
        multilingual_languages: pageMetrics.specialMetrics.multilingualSupport.length,

        // Coverage
        plans_available: pageMetrics.plansAvailable,
        plan_types_available: pageMetrics.specialMetrics.medigapPlanTypes,
        cities_covered: pageMetrics.specialMetrics.citiesCovered,
        subregions_covered: pageMetrics.specialMetrics.subregionsCovered,

        // Healthcare networks
        major_networks_count: pageMetrics.specialMetrics.majorNetworks.length,
        world_class_facilities: pageMetrics.specialMetrics.worldClassFacilities,

        // Opportunity
        opportunity_value_billions: pageMetrics.specialMetrics.opportunityValueBillions,
        low_penetration_market: pageMetrics.specialMetrics.lowPenetrationAdvantage,

        // User location
        user_city: userLocation?.city || '',
        user_zipcode: userLocation?.zipCode || '',
        user_subregion: userLocation?.subregion || '',

        timestamp: new Date().toISOString()
      }
    });

    // Track LA County market opportunity
    trackLACountyMarketOpportunity(pageMetrics.specialMetrics);

    // Track California community rating advantage
    trackCommunityRatingAdvantage(pageMetrics.specialMetrics);
  }

  // Facebook Pixel tracking
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'ViewContent', {
      content_name: 'LA County Medicare Supplement Landing Page',
      content_category: 'Medicare Supplement',
      content_type: 'county_landing_page',
      county: 'Los Angeles',
      state: 'California',
      beneficiaries: pageMetrics.totalBeneficiaries,
      market_gap: pageMetrics.specialMetrics.marketGapPercentage,
      value: 100 // High-value page view
    });
  }
}

// Track LA County market opportunity (75% gap)
function trackLACountyMarketOpportunity(metrics: LACountyMedigapPageMetrics['specialMetrics']) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'market_opportunity_identified', {
      event_category: 'market_analysis',
      event_label: 'la_county_medigap_gap',
      county: 'los-angeles',
      state: 'california',
      penetration_rate: 25, // Only 25% have Medigap
      gap_percentage: metrics.marketGapPercentage, // 75%
      underserved_count: 1350000, // 1.35M
      opportunity_value: metrics.opportunityValueBillions,
      market_type: 'low_penetration_high_opportunity',
      unique_advantage: 'community_rating',
      value: 150 // Very high value event for LA County
    });
  }
}

// Track California's unique community rating advantage
function trackCommunityRatingAdvantage(metrics: LACountyMedigapPageMetrics['specialMetrics']) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'unique_market_advantage', {
      event_category: 'state_regulation',
      event_label: 'california_community_rating',
      advantage_type: 'age_independent_pricing',
      state: 'california',
      county: 'los-angeles',
      competitive_advantage: metrics.communityRatingAdvantage,
      differentiator: 'same_price_any_age',
      value: 80 // High value for unique state advantage
    });
  }
}

// Track CTA clicks with LA County context
export function trackLACountyMedigapCTA(
  ctaType: 'phone_call' | 'contact_form' | 'plan_comparison' | 'cost_calculator' | 'language_specific',
  ctaContext: {
    section: string;
    planType?: string;
    language?: string;
    subregion?: string;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'la_county_medigap_cta_click', {
      event_category: 'cta_engagement',
      event_label: `${ctaType}_${ctaContext.section}`,
      cta_type: ctaType,
      section: ctaContext.section,
      plan_type: ctaContext.planType || '',
      language_preference: ctaContext.language || 'english',
      subregion: ctaContext.subregion || '',
      county: 'los-angeles',
      state: 'california',
      value: getCTAValue(ctaType)
    });
  }

  // Facebook Pixel conversion tracking
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: `LA County Medigap - ${ctaType}`,
      content_category: 'Medicare Supplement',
      county: 'Los Angeles',
      cta_type: ctaType,
      section: ctaContext.section,
      value: getCTAValue(ctaType),
      currency: 'USD'
    });
  }
}

// Get value for different CTA types
function getCTAValue(ctaType: string): number {
  const values: { [key: string]: number } = {
    phone_call: 100,
    contact_form: 85,
    plan_comparison: 70,
    cost_calculator: 60,
    language_specific: 90 // Higher value for multilingual engagement
  };
  return values[ctaType] || 50;
}

// Track subregion-specific engagement
export function trackSubregionEngagement(
  subregion: 'central' | 'valley' | 'westside' | 'southbay' | 'sgv' | 'av' | 'scv' | 'eastla',
  interactionType: 'view' | 'click' | 'expand'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'subregion_engagement', {
      event_category: 'geographic_interest',
      event_label: `la_county_${subregion}`,
      subregion: subregion,
      interaction_type: interactionType,
      county: 'los-angeles',
      state: 'california',
      value: 30
    });
  }
}

// Track Medigap plan type interest
export function trackPlanTypeInterest(
  planType: 'plan_g' | 'plan_n' | 'hd_plan_g' | 'other',
  interactionType: 'view' | 'click' | 'compare'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'medigap_plan_interest', {
      event_category: 'plan_research',
      event_label: `la_county_${planType}`,
      plan_type: planType,
      interaction_type: interactionType,
      county: 'los-angeles',
      state: 'california',
      value: getPlanInterestValue(planType, interactionType)
    });
  }
}

function getPlanInterestValue(planType: string, interactionType: string): number {
  const baseValues: { [key: string]: number } = {
    plan_g: 80, // Most popular
    plan_n: 70,
    hd_plan_g: 60,
    other: 50
  };

  const multiplier = interactionType === 'compare' ? 1.5 : interactionType === 'click' ? 1.2 : 1;
  return Math.round((baseValues[planType] || 50) * multiplier);
}

// Track community rating education engagement
export function trackCommunityRatingEducation(
  engagementType: 'spotlight_view' | 'learn_more_click' | 'calculator_use'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'community_rating_education', {
      event_category: 'state_advantage_learning',
      event_label: 'california_community_rating',
      engagement_type: engagementType,
      county: 'los-angeles',
      state: 'california',
      unique_advantage: 'age_independent_pricing',
      value: 75 // High value for education on unique CA advantage
    });
  }
}

// Track bilingual support engagement
export function trackBilingualEngagement(
  language: 'spanish' | 'mandarin' | 'korean' | 'armenian' | 'vietnamese' | 'other',
  engagementType: 'language_link_click' | 'resource_view' | 'cta_click'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'bilingual_support_engagement', {
      event_category: 'multilingual_service',
      event_label: `la_county_${language}`,
      language: language,
      engagement_type: engagementType,
      county: 'los-angeles',
      state: 'california',
      demographic_focus: language === 'spanish' ? 'hispanic_48_percent' : 'asian_15_percent',
      value: 85 // High value for multilingual engagement
    });
  }
}

// Track scroll depth milestones
export function trackLACountyScrollDepth(
  depth: 25 | 40 | 60 | 80 | 100
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'scroll_depth', {
      event_category: 'engagement',
      event_label: `la_county_medigap_${depth}`,
      scroll_depth: depth,
      page_type: 'la_county_medigap',
      value: depth / 10 // 2.5 to 10 value
    });
  }
}

// Track healthcare network interest
export function trackHealthcareNetworkInterest(
  network: 'ucla' | 'cedars_sinai' | 'usc' | 'kaiser' | 'providence' | 'other',
  interactionType: 'mention_view' | 'link_click'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'healthcare_network_interest', {
      event_category: 'network_preference',
      event_label: `la_county_${network}`,
      network: network,
      interaction_type: interactionType,
      county: 'los-angeles',
      network_freedom: 'medigap_advantage',
      value: 40
    });
  }
}

// Lead quality scoring for LA County Medigap
export function calculateLACountyLeadScore(conversionData: LACountyConversionData): number {
  let score = 0;

  // Base score for LA County (large market)
  score += 50;

  // Plan interest scoring
  const planScores: { [key: string]: number } = {
    plan_g: 25, // Most popular, highest commission
    plan_n: 20,
    hd_plan_g: 15,
    other: 10,
    unsure: 5
  };
  score += planScores[conversionData.planInterest] || 0;

  // Primary motivation scoring
  const motivationScores: { [key: string]: number } = {
    community_rating: 20, // Unique CA advantage, well-informed
    gap_coverage: 18,
    network_freedom: 16,
    cost_protection: 15,
    bilingual_support: 14
  };
  score += motivationScores[conversionData.primaryMotivation] || 0;

  // Age group scoring (OEP eligibility)
  const ageScores: { [key: string]: number } = {
    '64_new_to_medicare': 25, // Highest - new to Medicare, OEP eligible
    '65_69': 20,
    '70_79': 15,
    '80_plus': 10 // Lower but still valuable
  };
  score += ageScores[conversionData.ageGroup] || 0;

  // Current coverage scoring
  const coverageScores: { [key: string]: number } = {
    original_medicare_only: 20, // Highest - clear Medigap fit
    medicare_advantage: 10, // Switching opportunity
    other_supplement: 8, // Potential upgrade
    none: 5
  };
  score += coverageScores[conversionData.currentCoverage] || 0;

  // Language preference bonus (underserved markets)
  if (conversionData.languagePreference !== 'english') {
    score += 15; // Bonus for multilingual leads (less competition)
  }

  // Subregion bonuses (high-value areas)
  const subregionBonuses: { [key: string]: number } = {
    westside: 10, // Beverly Hills, Santa Monica - affluent
    central: 8,
    southbay: 7,
    sgv: 6, // San Gabriel Valley - high Asian population
    valley: 5,
    scv: 5,
    eastla: 4,
    av: 3
  };
  if (conversionData.subregion) {
    score += subregionBonuses[conversionData.subregion] || 0;
  }

  return Math.min(score, 100); // Cap at 100
}

// Track lead conversion with quality score
export function trackLACountyLeadConversion(conversionData: LACountyConversionData) {
  const leadScore = calculateLACountyLeadScore(conversionData);

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'la_county_medigap_lead', {
      event_category: 'lead_conversion',
      event_label: 'la_county_medigap_qualified_lead',
      lead_source: conversionData.leadSource,
      county: conversionData.county,
      state: conversionData.state,
      subregion: conversionData.subregion || '',
      plan_interest: conversionData.planInterest,
      primary_motivation: conversionData.primaryMotivation,
      language_preference: conversionData.languagePreference,
      age_group: conversionData.ageGroup,
      current_coverage: conversionData.currentCoverage,
      lead_quality_score: leadScore,
      value: leadScore // Use lead score as value
    });
  }

  // Facebook Pixel conversion
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: 'LA County Medigap Qualified Lead',
      content_category: 'Medicare Supplement',
      county: 'Los Angeles',
      state: 'California',
      lead_score: leadScore,
      plan_interest: conversionData.planInterest,
      language: conversionData.languagePreference,
      value: leadScore,
      currency: 'USD'
    });
  }
}

// User journey tracking
export function trackLACountyUserJourney(
  journeyStep: 'arrival' | 'education' | 'comparison' | 'decision' | 'conversion',
  stepData?: {
    timeSpent?: number;
    sectionsViewed?: string[];
    ctasInteracted?: string[];
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'user_journey_step', {
      event_category: 'conversion_funnel',
      event_label: `la_county_medigap_${journeyStep}`,
      journey_step: journeyStep,
      page_type: 'la_county_medigap',
      time_spent_seconds: stepData?.timeSpent || 0,
      sections_viewed: stepData?.sectionsViewed?.join(',') || '',
      ctas_interacted: stepData?.ctasInteracted?.join(',') || '',
      county: 'los-angeles',
      state: 'california',
      value: getJourneyStepValue(journeyStep)
    });
  }
}

function getJourneyStepValue(step: string): number {
  const values: { [key: string]: number } = {
    arrival: 10,
    education: 25,
    comparison: 50,
    decision: 75,
    conversion: 100
  };
  return values[step] || 0;
}

// Export all tracking functions
export const laCountyMedigapTracking = {
  trackPageView: trackLACountyMedigapPageView,
  trackCTA: trackLACountyMedigapCTA,
  trackSubregionEngagement,
  trackPlanTypeInterest,
  trackCommunityRatingEducation,
  trackBilingualEngagement,
  trackScrollDepth: trackLACountyScrollDepth,
  trackHealthcareNetworkInterest,
  trackLeadConversion: trackLACountyLeadConversion,
  trackUserJourney: trackLACountyUserJourney,
  calculateLeadScore: calculateLACountyLeadScore
};
