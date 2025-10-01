// Dallas County Texas Medicare Supplement Analytics Tracking
// Comprehensive tracking for /medicare-supplement-dallas-county-texas webpage performance

export interface DallasCountyMedigapPageMetrics {
  pageType: 'dallas_county_medigap';
  county: 'dallas';
  state: 'texas';
  totalBeneficiaries: number; // 300K+
  medigapPenetration: number; // 19.5%
  underservedBeneficiaries: number; // 240K+
  plansAvailable: number; // 50+
  specialMetrics: {
    // Texas-specific advantages
    lowerPremiums: boolean; // vs high-cost states
    averagePremiumRange: string; // $120-150/month
    costAdvantageVsNY: string; // vs $300+/month

    // Dallas County demographics
    hispanicPopulation: number; // 41.4%
    totalPopulation: number; // 2.6M+
    bilingualSupport: string[]; // Languages offered

    // DFW healthcare networks
    majorNetworks: string[]; // UT Southwestern, Baylor, Medical City, Texas Health
    topRankedFacilities: number; // Count of nationally-ranked hospitals
    utSouthwesternRanking: string; // #1 in DFW for 9 years
    baylorRanking: string; // #2 in DFW

    // Market opportunity
    marketGapPercentage: number; // 80% without Medigap
    texasPenetrationRate: number; // 19.45% statewide
    lowPenetrationAdvantage: boolean;

    // Geographic coverage
    communitiesCovered: number; // Dallas, Plano, Richardson, Irving, Garland, Mesquite, Carrollton, Grand Prairie
    subregionsCovered: number; // 8 major communities

    // Plan types
    medigapPlanTypes: number; // 10 plan types
    mostPopularPlan: string; // Plan G (54% TX enrollees)
    budgetFriendlyPlan: string; // Plan N
    lowPremiumPlan: string; // HD Plan G
  };
}

export interface DallasCountyEngagementMetrics {
  scrollDepth: number;
  timeOnPage: number;
  subregionClicks: {
    dallas: number;
    plano: number;
    richardson: number;
    irving: number;
    garland: number;
    mesquite: number;
    carrollton: number;
    grandPrairie: number;
  };
  planTypeClicks: {
    planG: number;
    planN: number;
    highDeductiblePlanG: number;
    otherPlans: number;
  };
  featureInterest: {
    texasLowerPremiums: number;
    dfwHealthcare: number;
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
    texasAdvantageSpotlight: boolean;
    subregionCoverage: boolean;
    whyElMagSection: boolean;
  };
}

export interface DallasCountyConversionData {
  leadSource: 'dallas-county-medigap';
  county: 'dallas';
  state: 'texas';
  subregion?: 'dallas' | 'plano' | 'richardson' | 'irving' | 'garland' | 'mesquite' | 'carrollton' | 'grandprairie';
  planInterest: 'plan_g' | 'plan_n' | 'hd_plan_g' | 'other' | 'unsure';
  primaryMotivation: 'lower_texas_premiums' | 'network_freedom' | 'cost_protection' | 'bilingual_support' | 'gap_coverage';
  languagePreference: 'english' | 'spanish' | 'other';
  ageGroup: '64_new_to_medicare' | '65_69' | '70_79' | '80_plus';
  currentCoverage: 'original_medicare_only' | 'medicare_advantage' | 'other_supplement' | 'none';
}

// Track Dallas County Medigap page views with county-specific data
export function trackDallasCountyMedigapPageView(
  pageMetrics: DallasCountyMedigapPageMetrics,
  userLocation?: {
    city?: string;
    zipCode?: string;
    subregion?: string;
  }
) {
  // Google Analytics 4 event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_title: 'Dallas County Texas Medicare Supplement',
      page_location: window.location.href,
      page_type: pageMetrics.pageType,
      county: pageMetrics.county,
      state: pageMetrics.state,
      total_beneficiaries: pageMetrics.totalBeneficiaries,
      medigap_penetration: pageMetrics.medigapPenetration,
      underserved_beneficiaries: pageMetrics.underservedBeneficiaries,
      plans_available: pageMetrics.plansAvailable,
      market_gap_percentage: pageMetrics.specialMetrics.marketGapPercentage,
      lower_premiums: pageMetrics.specialMetrics.lowerPremiums,
      hispanic_population: pageMetrics.specialMetrics.hispanicPopulation,
      user_city: userLocation?.city,
      user_zipcode: userLocation?.zipCode,
      user_subregion: userLocation?.subregion,
    });
  }

  // Facebook Pixel event
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'ViewContent', {
      content_name: 'Dallas County Medicare Supplement',
      content_category: 'Medicare Supplement',
      content_type: 'county_landing_page',
      county: 'Dallas',
      state: 'Texas',
      market_gap: pageMetrics.specialMetrics.marketGapPercentage,
      value: 0,
      currency: 'USD',
    });
  }

  console.log('📊 Dallas County Medigap Page View Tracked:', {
    beneficiaries: pageMetrics.totalBeneficiaries,
    penetration: `${pageMetrics.medigapPenetration}%`,
    gap: `${pageMetrics.specialMetrics.marketGapPercentage}%`,
    location: userLocation,
  });
}

// Track scroll depth milestones
export function trackDallasCountyScrollDepth(depth: number) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'scroll_depth', {
      event_category: 'Engagement',
      event_label: `Dallas County Medigap - ${depth}%`,
      value: depth,
      page_type: 'dallas_county_medigap',
      county: 'dallas',
      state: 'texas',
    });
  }

  console.log(`📜 Dallas County Scroll Depth: ${depth}%`);
}

// Track CTA interactions
export function trackDallasCountyCTA(
  ctaType: 'phone_call' | 'contact_form' | 'plan_comparison' | 'cost_calculator' | 'language_specific',
  metadata?: {
    section?: string;
    language?: string;
    planType?: string;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', {
      event_category: 'Conversion',
      event_label: `Dallas County - ${ctaType}`,
      cta_type: ctaType,
      section: metadata?.section,
      language: metadata?.language,
      plan_type: metadata?.planType,
      page_type: 'dallas_county_medigap',
      county: 'dallas',
      state: 'texas',
    });
  }

  // Facebook Pixel - Lead event for high-intent CTAs
  if (
    (ctaType === 'phone_call' || ctaType === 'contact_form') &&
    typeof window !== 'undefined' &&
    (window as any).fbq
  ) {
    (window as any).fbq('track', 'Lead', {
      content_name: 'Dallas County Medicare Supplement CTA',
      content_category: 'Medicare Supplement',
      cta_type: ctaType,
      county: 'Dallas',
      state: 'Texas',
      value: 150.0, // Estimated lead value
      currency: 'USD',
    });
  }

  console.log(`🎯 Dallas County CTA Click: ${ctaType}`, metadata);
}

// Track plan type interest
export function trackDallasCountyPlanTypeInterest(
  planType: 'plan_g' | 'plan_n' | 'hd_plan_g' | 'other',
  interactionType: 'view' | 'click' | 'comparison'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'plan_interest', {
      event_category: 'Product Interest',
      event_label: `Dallas County - ${planType}`,
      plan_type: planType,
      interaction_type: interactionType,
      page_type: 'dallas_county_medigap',
      county: 'dallas',
      state: 'texas',
    });
  }

  console.log(`📋 Dallas County Plan Interest: ${planType} (${interactionType})`);
}

// Track subregion engagement
export function trackDallasCountySubregionEngagement(
  subregion: 'dallas' | 'plano' | 'richardson' | 'irving' | 'garland' | 'mesquite' | 'carrollton' | 'grandprairie',
  interactionType: 'view' | 'click'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'subregion_engagement', {
      event_category: 'Geographic Interest',
      event_label: `Dallas County - ${subregion}`,
      subregion: subregion,
      interaction_type: interactionType,
      page_type: 'dallas_county_medigap',
      county: 'dallas',
      state: 'texas',
    });
  }

  console.log(`🗺️ Dallas County Subregion: ${subregion} (${interactionType})`);
}

// Track Texas premium advantage education
export function trackTexasPremiumAdvantageEducation(
  interactionType: 'spotlight_view' | 'learn_more_click' | 'calculator_use'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'texas_premium_advantage', {
      event_category: 'Education',
      event_label: `Dallas County - Texas Premium Advantage`,
      interaction_type: interactionType,
      page_type: 'dallas_county_medigap',
      county: 'dallas',
      state: 'texas',
      advantage_type: 'lower_premiums_vs_high_cost_states',
    });
  }

  console.log(`💰 Texas Premium Advantage: ${interactionType}`);
}

// Track bilingual engagement
export function trackDallasCountyBilingualEngagement(
  language: 'spanish' | 'english' | 'other',
  interactionType: 'content_view' | 'cta_click' | 'resource_access'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'bilingual_engagement', {
      event_category: 'Language Support',
      event_label: `Dallas County - ${language}`,
      language: language,
      interaction_type: interactionType,
      page_type: 'dallas_county_medigap',
      county: 'dallas',
      state: 'texas',
      hispanic_population: 41.4,
    });
  }

  console.log(`🗣️ Dallas County Bilingual: ${language} (${interactionType})`);
}

// Track DFW healthcare network interest
export function trackDFWHealthcareNetworkInterest(
  network: 'ut_southwestern' | 'baylor' | 'medical_city' | 'texas_health' | 'parkland' | 'general',
  interactionType: 'view' | 'click' | 'learn_more'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'healthcare_network_interest', {
      event_category: 'Network Interest',
      event_label: `Dallas County - ${network}`,
      network: network,
      interaction_type: interactionType,
      page_type: 'dallas_county_medigap',
      county: 'dallas',
      state: 'texas',
    });
  }

  console.log(`🏥 DFW Healthcare Network: ${network} (${interactionType})`);
}

// Track user journey through conversion funnel
export function trackDallasCountyUserJourney(
  stage: 'arrival' | 'education' | 'comparison' | 'decision' | 'conversion',
  metadata?: {
    timeSpent?: number;
    sectionsViewed?: string[];
    ctasInteracted?: string[];
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'user_journey', {
      event_category: 'Funnel',
      event_label: `Dallas County - ${stage}`,
      journey_stage: stage,
      time_spent: metadata?.timeSpent,
      sections_viewed: metadata?.sectionsViewed?.join(','),
      ctas_interacted: metadata?.ctasInteracted?.join(','),
      page_type: 'dallas_county_medigap',
      county: 'dallas',
      state: 'texas',
    });
  }

  console.log(`🚀 Dallas County User Journey: ${stage}`, metadata);
}

// Calculate lead quality score for Dallas County
export function calculateDallasCountyLeadScore(conversionData: DallasCountyConversionData): number {
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

  // Primary motivation scoring (14-20 points)
  const motivationScores = {
    lower_texas_premiums: 20, // Strong buying signal - cost-conscious
    cost_protection: 18, // Understanding Medicare gaps
    gap_coverage: 17, // Educated about need
    network_freedom: 16, // Specific healthcare needs
    bilingual_support: 14, // Service need
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

  // Language preference bonus (Spanish +15 for 41.4% Hispanic population)
  if (conversionData.languagePreference === 'spanish') {
    score += 15;
  }

  // Subregion bonuses (based on income/demographics)
  const subregionBonuses = {
    plano: 10, // High-income, educated population
    richardson: 8, // Tech corridor, high education
    dallas: 7, // Urban core, diverse
    irving: 6, // Las Colinas, affluent areas
    carrollton: 6, // Suburban, stable
    garland: 5, // Growing senior population
    mesquite: 5, // Budget-conscious market
    grandprairie: 4, // Diverse, growing
  };
  if (conversionData.subregion) {
    score += subregionBonuses[conversionData.subregion] || 0;
  }

  // Ensure score stays within 0-100 range
  return Math.min(Math.max(score, 0), 100);
}

// Track conversion with lead quality scoring
export function trackDallasCountyConversion(conversionData: DallasCountyConversionData) {
  const leadScore = calculateDallasCountyLeadScore(conversionData);

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      event_category: 'Conversion',
      event_label: 'Dallas County Medigap Lead',
      lead_source: conversionData.leadSource,
      county: conversionData.county,
      state: conversionData.state,
      subregion: conversionData.subregion,
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
      content_name: 'Dallas County Medicare Supplement Lead',
      content_category: 'Medicare Supplement',
      content_type: 'lead',
      county: 'Dallas',
      state: 'Texas',
      plan_interest: conversionData.planInterest,
      lead_quality: leadScore >= 70 ? 'high' : leadScore >= 50 ? 'medium' : 'low',
      value: leadScore * 2,
      currency: 'USD',
    });
  }

  console.log(`✅ Dallas County Conversion - Lead Score: ${leadScore}`, conversionData);
}

// Consolidated tracking object for easy import
export const dallasCountyMedigapTracking = {
  trackPageView: trackDallasCountyMedigapPageView,
  trackScrollDepth: trackDallasCountyScrollDepth,
  trackCTA: trackDallasCountyCTA,
  trackPlanTypeInterest: trackDallasCountyPlanTypeInterest,
  trackSubregionEngagement: trackDallasCountySubregionEngagement,
  trackTexasPremiumAdvantage: trackTexasPremiumAdvantageEducation,
  trackBilingualEngagement: trackDallasCountyBilingualEngagement,
  trackDFWHealthcareNetwork: trackDFWHealthcareNetworkInterest,
  trackUserJourney: trackDallasCountyUserJourney,
  calculateLeadScore: calculateDallasCountyLeadScore,
  trackConversion: trackDallasCountyConversion,
};
