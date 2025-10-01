// West Coast Regional Medicare Supplement Analytics Tracking
// Comprehensive tracking for /regions/west-coast webpage performance
// Covers California, Oregon, and Washington state Medicare Supplement markets

export interface WestCoastRegionalPageMetrics {
  pageType: 'west_coast_regional_medigap';
  region: 'west-coast';
  statesCovered: ['california', 'oregon', 'washington'];
  totalBeneficiaries: number; // 8M+
  averageMedigapPenetration: number; // ~15-25%
  underservedBeneficiaries: number; // 6M+
  plansAvailable: number; // 200+
  specialMetrics: {
    // Regional advantages
    lowestNationalPenetration: boolean; // 75-85% miss coverage
    massiveMarketOpportunity: boolean;

    // California-specific (4.7M beneficiaries)
    californiaCommunityRating: boolean; // Age-independent pricing
    californiaPopulation: number; // 48% of West Coast seniors
    californiaPenetration: number; // 9-25%
    californiaUnderserved: number; // 3.5M+
    californiaAdvantage: string; // Only 3 states have community rating

    // Oregon-specific (900K+ beneficiaries)
    oregonGrowthRate: number; // 7.9% in 2024 (fastest in nation)
    oregonNewLives: number; // 14,626 new lives in 2024
    oregonPenetration: number; // ~15-20%
    oregonUnderserved: number; // 750K+

    // Washington-specific (1M+ beneficiaries)
    washingtonPenetration: number; // ~15-20%
    washingtonUnderserved: number; // 800K+
    washingtonPremiumCare: boolean; // UW Medicine, Seattle Cancer Care

    // Major markets
    majorMarkets: {
      laCounty: number; // 1.8M
      sfBay: number; // 850K
      sanDiego: number; // 600K
      sacramento: number; // 420K
      portland: number; // 600K+
      seattleTacoma: number; // 800K+
    };

    // Healthcare networks
    worldClassNetworks: string[]; // Stanford, UCSF, UCLA, Cedars-Sinai, UW Medicine, OHSU
    topRankedFacilities: number; // Count of nationally-ranked hospitals

    // Market opportunity
    marketGapPercentage: number; // 75-85% without Medigap
    opportunityValueBillions: number; // Estimated market value
    lowPenetrationAdvantage: boolean;

    // Geographic coverage
    statesCovered: number; // 3 states
    majorMarketsCovered: number; // 6+ major metro areas

    // Plan types
    medigapPlanTypes: number; // 11 plan types
    mostPopularPlan: string; // Plan G
    budgetFriendlyPlan: string; // Plan N
    lowPremiumPlan: string; // HD Plan G

    // Multilingual support
    multilingualSupport: string[]; // Spanish, Mandarin, Vietnamese, etc.
    diversePopulation: boolean;
  };
}

export interface WestCoastEngagementMetrics {
  scrollDepth: number;
  timeOnPage: number;
  stateClicks: {
    california: number;
    oregon: number;
    washington: number;
  };
  marketClicks: {
    laCounty: number;
    sfBay: number;
    sanDiego: number;
    sacramento: number;
    portland: number;
    seattleTacoma: number;
    spokane: number;
    vancouver: number;
    eugene: number;
    salem: number;
  };
  planTypeClicks: {
    planG: number;
    planN: number;
    highDeductiblePlanG: number;
    otherPlans: number;
  };
  featureInterest: {
    californiaCommunityRating: number;
    oregonGrowth: number;
    washingtonPremiumCare: number;
    lowPenetrationMarkets: number;
    networkFreedom: number;
    costCalculator: number;
  };
  ctaClicks: {
    phoneCall: number;
    contactForm: number;
    planComparison: number;
    costCalculator: number;
    stateSpecific: number;
    languageSpecific: number;
  };
  contentEngagement: {
    regionOverviewSection: boolean;
    stateHighlightsSection: boolean;
    communityRatingSpotlight: boolean;
    medigapOpportunitySection: boolean;
    popularPlansSection: boolean;
    stateCoverageSection: boolean;
    whyElMagSection: boolean;
  };
}

export interface WestCoastConversionData {
  leadSource: 'west-coast-regional';
  region: 'west-coast';
  state: 'california' | 'oregon' | 'washington';
  market?: 'la-county' | 'sf-bay' | 'san-diego' | 'sacramento' | 'portland' | 'seattle-tacoma' | 'spokane' | 'vancouver' | 'eugene' | 'salem';
  planInterest: 'plan_g' | 'plan_n' | 'hd_plan_g' | 'other' | 'unsure';
  primaryMotivation: 'community_rating' | 'low_penetration_advantage' | 'network_freedom' | 'cost_protection' | 'gap_coverage' | 'multilingual_support';
  languagePreference: 'english' | 'spanish' | 'mandarin' | 'vietnamese' | 'korean' | 'other';
  ageGroup: '64_new_to_medicare' | '65_69' | '70_79' | '80_plus';
  currentCoverage: 'original_medicare_only' | 'medicare_advantage' | 'other_supplement' | 'none';
}

// Track West Coast Regional Medigap page views with regional data
export function trackWestCoastRegionalPageView(
  pageMetrics: WestCoastRegionalPageMetrics,
  userLocation?: {
    state?: string;
    city?: string;
    zipCode?: string;
    market?: string;
  }
) {
  // Google Analytics 4 event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_title: 'West Coast Medicare Supplement Regional',
      page_location: window.location.href,
      page_type: pageMetrics.pageType,
      region: pageMetrics.region,
      states_covered: pageMetrics.statesCovered.join(','),
      total_beneficiaries: pageMetrics.totalBeneficiaries,
      average_penetration: pageMetrics.averageMedigapPenetration,
      underserved_beneficiaries: pageMetrics.underservedBeneficiaries,
      market_gap_percentage: pageMetrics.specialMetrics.marketGapPercentage,
      california_community_rating: pageMetrics.specialMetrics.californiaCommunityRating,
      oregon_growth_rate: pageMetrics.specialMetrics.oregonGrowthRate,
      washington_premium_care: pageMetrics.specialMetrics.washingtonPremiumCare,
      user_state: userLocation?.state,
      user_city: userLocation?.city,
      user_zipcode: userLocation?.zipCode,
      user_market: userLocation?.market,
    });
  }

  // Facebook Pixel event
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'ViewContent', {
      content_name: 'West Coast Medicare Supplement Regional',
      content_category: 'Medicare Supplement',
      content_type: 'regional_landing_page',
      region: 'West Coast',
      states: 'CA, OR, WA',
      beneficiaries: pageMetrics.totalBeneficiaries,
      market_gap: pageMetrics.specialMetrics.marketGapPercentage,
      value: 100, // High-value regional page
      currency: 'USD',
    });
  }

  console.log('📊 West Coast Regional Medigap Page View Tracked:', {
    beneficiaries: pageMetrics.totalBeneficiaries,
    states: pageMetrics.statesCovered,
    penetration: `${pageMetrics.averageMedigapPenetration}%`,
    gap: `${pageMetrics.specialMetrics.marketGapPercentage}%`,
    location: userLocation,
  });
}

// Track scroll depth milestones
export function trackWestCoastScrollDepth(depth: number) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'scroll_depth', {
      event_category: 'Engagement',
      event_label: `West Coast Regional - ${depth}%`,
      value: depth,
      page_type: 'west_coast_regional_medigap',
      region: 'west-coast',
    });
  }

  console.log(`📜 West Coast Regional Scroll Depth: ${depth}%`);
}

// Track CTA interactions
export function trackWestCoastCTA(
  ctaType: 'phone_call' | 'contact_form' | 'plan_comparison' | 'cost_calculator' | 'state_specific' | 'language_specific',
  metadata?: {
    section?: string;
    state?: string;
    language?: string;
    planType?: string;
    market?: string;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', {
      event_category: 'Conversion',
      event_label: `West Coast - ${ctaType}`,
      cta_type: ctaType,
      section: metadata?.section,
      state: metadata?.state,
      language: metadata?.language,
      plan_type: metadata?.planType,
      market: metadata?.market,
      page_type: 'west_coast_regional_medigap',
      region: 'west-coast',
    });
  }

  // Facebook Pixel - Lead event for high-intent CTAs
  if (
    (ctaType === 'phone_call' || ctaType === 'contact_form') &&
    typeof window !== 'undefined' &&
    (window as any).fbq
  ) {
    (window as any).fbq('track', 'Lead', {
      content_name: 'West Coast Medicare Supplement CTA',
      content_category: 'Medicare Supplement',
      cta_type: ctaType,
      region: 'West Coast',
      state: metadata?.state,
      market: metadata?.market,
      value: 150.0, // Estimated lead value
      currency: 'USD',
    });
  }

  console.log(`🎯 West Coast Regional CTA Click: ${ctaType}`, metadata);
}

// Track plan type interest
export function trackWestCoastPlanTypeInterest(
  planType: 'plan_g' | 'plan_n' | 'hd_plan_g' | 'other',
  interactionType: 'view' | 'click' | 'comparison',
  state?: 'california' | 'oregon' | 'washington'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'plan_interest', {
      event_category: 'Product Interest',
      event_label: `West Coast - ${planType}`,
      plan_type: planType,
      interaction_type: interactionType,
      state: state,
      page_type: 'west_coast_regional_medigap',
      region: 'west-coast',
    });
  }

  console.log(`📋 West Coast Plan Interest: ${planType} (${interactionType})`, { state });
}

// Track state-specific engagement
export function trackWestCoastStateEngagement(
  state: 'california' | 'oregon' | 'washington',
  interactionType: 'view' | 'click' | 'expand'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'state_engagement', {
      event_category: 'Geographic Interest',
      event_label: `West Coast - ${state}`,
      state: state,
      interaction_type: interactionType,
      page_type: 'west_coast_regional_medigap',
      region: 'west-coast',
    });
  }

  console.log(`🗺️ West Coast State: ${state} (${interactionType})`);
}

// Track market-specific engagement (major metros)
export function trackWestCoastMarketEngagement(
  market: 'la-county' | 'sf-bay' | 'san-diego' | 'sacramento' | 'portland' | 'seattle-tacoma' | 'spokane' | 'vancouver' | 'eugene' | 'salem',
  interactionType: 'view' | 'click',
  state: 'california' | 'oregon' | 'washington'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'market_engagement', {
      event_category: 'Market Interest',
      event_label: `West Coast - ${market}`,
      market: market,
      state: state,
      interaction_type: interactionType,
      page_type: 'west_coast_regional_medigap',
      region: 'west-coast',
    });
  }

  console.log(`🏙️ West Coast Market: ${market} (${interactionType})`);
}

// Track California community rating education (unique advantage)
export function trackCaliforniaCommunityRatingEducation(
  interactionType: 'spotlight_view' | 'learn_more_click' | 'calculator_use' | 'age_comparison'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'california_community_rating', {
      event_category: 'State Advantage',
      event_label: 'California Community Rating',
      interaction_type: interactionType,
      state: 'california',
      page_type: 'west_coast_regional_medigap',
      region: 'west-coast',
      advantage_type: 'age_independent_pricing',
      unique_to_states: 3, // Only 3 states have this
    });
  }

  console.log(`⭐ California Community Rating Education: ${interactionType}`);
}

// Track Oregon growth leadership interest
export function trackOregonGrowthLeadership(
  interactionType: 'highlight_view' | 'growth_data_click' | 'market_opportunity_interest'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'oregon_growth_leadership', {
      event_category: 'State Advantage',
      event_label: 'Oregon Growth Leadership',
      interaction_type: interactionType,
      state: 'oregon',
      page_type: 'west_coast_regional_medigap',
      region: 'west-coast',
      growth_rate: 7.9, // 7.9% in 2024
      growth_rank: 1, // #1 in nation
    });
  }

  console.log(`📈 Oregon Growth Leadership: ${interactionType}`);
}

// Track Washington premium healthcare interest
export function trackWashingtonPremiumCare(
  interactionType: 'highlight_view' | 'network_click' | 'quality_focus'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'washington_premium_care', {
      event_category: 'State Advantage',
      event_label: 'Washington Premium Healthcare',
      interaction_type: interactionType,
      state: 'washington',
      page_type: 'west_coast_regional_medigap',
      region: 'west-coast',
      premium_networks: true, // UW Medicine, Seattle Cancer Care
    });
  }

  console.log(`🏥 Washington Premium Care: ${interactionType}`);
}

// Track multilingual support engagement
export function trackWestCoastMultilingualEngagement(
  language: 'spanish' | 'mandarin' | 'vietnamese' | 'korean' | 'other',
  interactionType: 'content_view' | 'cta_click' | 'resource_access',
  state?: 'california' | 'oregon' | 'washington'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'multilingual_engagement', {
      event_category: 'Language Support',
      event_label: `West Coast - ${language}`,
      language: language,
      interaction_type: interactionType,
      state: state,
      page_type: 'west_coast_regional_medigap',
      region: 'west-coast',
    });
  }

  console.log(`🗣️ West Coast Multilingual: ${language} (${interactionType})`, { state });
}

// Track low-penetration market opportunity education
export function trackLowPenetrationOpportunity(
  interactionType: 'section_view' | 'data_interaction' | 'opportunity_calculation'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'low_penetration_opportunity', {
      event_category: 'Market Education',
      event_label: 'West Coast Low Penetration',
      interaction_type: interactionType,
      page_type: 'west_coast_regional_medigap',
      region: 'west-coast',
      underserved_count: 6000000, // 6M+ underserved
      gap_percentage: 80, // 75-85% average
    });
  }

  console.log(`💎 Low Penetration Opportunity: ${interactionType}`);
}

// Track healthcare network interest
export function trackWestCoastHealthcareNetworkInterest(
  network: 'stanford' | 'ucsf' | 'ucla' | 'cedars_sinai' | 'uw_medicine' | 'ohsu' | 'providence' | 'seattle_cancer_care' | 'other',
  interactionType: 'mention_view' | 'link_click',
  state: 'california' | 'oregon' | 'washington'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'healthcare_network_interest', {
      event_category: 'Network Interest',
      event_label: `West Coast - ${network}`,
      network: network,
      state: state,
      interaction_type: interactionType,
      page_type: 'west_coast_regional_medigap',
      region: 'west-coast',
    });
  }

  console.log(`🏥 West Coast Healthcare Network: ${network} (${interactionType})`);
}

// Track user journey through conversion funnel
export function trackWestCoastUserJourney(
  stage: 'arrival' | 'state_research' | 'education' | 'comparison' | 'decision' | 'conversion',
  metadata?: {
    timeSpent?: number;
    statesViewed?: string[];
    sectionsViewed?: string[];
    ctasInteracted?: string[];
    primaryState?: 'california' | 'oregon' | 'washington';
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'user_journey', {
      event_category: 'Funnel',
      event_label: `West Coast - ${stage}`,
      journey_stage: stage,
      time_spent: metadata?.timeSpent,
      states_viewed: metadata?.statesViewed?.join(','),
      sections_viewed: metadata?.sectionsViewed?.join(','),
      ctas_interacted: metadata?.ctasInteracted?.join(','),
      primary_state: metadata?.primaryState,
      page_type: 'west_coast_regional_medigap',
      region: 'west-coast',
    });
  }

  console.log(`🚀 West Coast User Journey: ${stage}`, metadata);
}

// Calculate lead quality score for West Coast Regional
export function calculateWestCoastLeadScore(conversionData: WestCoastConversionData): number {
  let score = 50; // Base score

  // Plan interest scoring (5-25 points)
  const planScores = {
    plan_g: 25, // Highest value - most comprehensive
    plan_n: 18, // Good value - budget conscious
    hd_plan_g: 15, // Lower premium, cost-conscious
    other: 10,
    unsure: 5,
  };
  score += planScores[conversionData.planInterest];

  // Primary motivation scoring (14-22 points)
  const motivationScores = {
    community_rating: 22, // CA-specific, highly informed
    low_penetration_advantage: 20, // Understanding unique opportunity
    gap_coverage: 18, // Educated about need
    cost_protection: 17, // Understanding Medicare gaps
    network_freedom: 16, // Specific healthcare needs
    multilingual_support: 14, // Service need
  };
  score += motivationScores[conversionData.primaryMotivation];

  // Age group scoring (10-25 points)
  const ageScores = {
    '64_new_to_medicare': 25, // Prime enrollment window
    '65_69': 20, // Recently enrolled, high interest
    '70_79': 15, // Established, may switch
    '80_plus': 10, // Harder to convert
  };
  score += ageScores[conversionData.ageGroup];

  // Current coverage scoring (5-20 points)
  const coverageScores = {
    original_medicare_only: 20, // Perfect prospect
    medicare_advantage: 15, // May switch during AEP
    none: 12, // Needs education
    other_supplement: 5, // May shop rates
  };
  score += coverageScores[conversionData.currentCoverage];

  // State-specific bonuses
  const stateBonuses = {
    california: 12, // Largest market, community rating advantage
    oregon: 10, // Fastest growth, emerging market
    washington: 8, // Premium care, affluent market
  };
  score += stateBonuses[conversionData.state];

  // Market-specific bonuses (major metros)
  const marketBonuses: { [key: string]: number } = {
    'la-county': 12, // Largest market, 1.8M beneficiaries
    'sf-bay': 10, // Affluent, 850K beneficiaries
    'seattle-tacoma': 9, // Premium care, 800K+
    'san-diego': 8, // Large market, 600K
    'portland': 8, // Growing, 600K+
    'sacramento': 6, // State capital, 420K
    'spokane': 4,
    'vancouver': 3,
    'eugene': 3,
    'salem': 3,
  };
  if (conversionData.market) {
    score += marketBonuses[conversionData.market] || 0;
  }

  // Language preference bonus (multilingual leads - less competition)
  if (conversionData.languagePreference !== 'english') {
    score += 15;
  }

  // Ensure score stays within 0-100 range
  return Math.min(Math.max(score, 0), 100);
}

// Track conversion with lead quality scoring
export function trackWestCoastConversion(conversionData: WestCoastConversionData) {
  const leadScore = calculateWestCoastLeadScore(conversionData);

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      event_category: 'Conversion',
      event_label: 'West Coast Regional Medigap Lead',
      lead_source: conversionData.leadSource,
      region: 'west-coast',
      state: conversionData.state,
      market: conversionData.market,
      plan_interest: conversionData.planInterest,
      primary_motivation: conversionData.primaryMotivation,
      language_preference: conversionData.languagePreference,
      age_group: conversionData.ageGroup,
      current_coverage: conversionData.currentCoverage,
      lead_quality_score: leadScore,
      value: leadScore * 2, // Estimated lead value based on quality
      currency: 'USD',
    });
  }

  // Facebook Pixel - Purchase event (lead acquired)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Purchase', {
      content_name: 'West Coast Medicare Supplement Lead',
      content_category: 'Medicare Supplement',
      content_type: 'lead',
      region: 'West Coast',
      state: conversionData.state,
      market: conversionData.market,
      plan_interest: conversionData.planInterest,
      lead_quality: leadScore >= 70 ? 'high' : leadScore >= 50 ? 'medium' : 'low',
      value: leadScore * 2,
      currency: 'USD',
    });
  }

  console.log(`✅ West Coast Regional Conversion - Lead Score: ${leadScore}`, conversionData);
}

// Consolidated tracking object for easy import
export const westCoastRegionalTracking = {
  trackPageView: trackWestCoastRegionalPageView,
  trackScrollDepth: trackWestCoastScrollDepth,
  trackCTA: trackWestCoastCTA,
  trackPlanTypeInterest: trackWestCoastPlanTypeInterest,
  trackStateEngagement: trackWestCoastStateEngagement,
  trackMarketEngagement: trackWestCoastMarketEngagement,
  trackCaliforniaCommunityRating: trackCaliforniaCommunityRatingEducation,
  trackOregonGrowth: trackOregonGrowthLeadership,
  trackWashingtonPremiumCare: trackWashingtonPremiumCare,
  trackMultilingualEngagement: trackWestCoastMultilingualEngagement,
  trackLowPenetrationOpportunity: trackLowPenetrationOpportunity,
  trackHealthcareNetwork: trackWestCoastHealthcareNetworkInterest,
  trackUserJourney: trackWestCoastUserJourney,
  calculateLeadScore: calculateWestCoastLeadScore,
  trackConversion: trackWestCoastConversion,
};
