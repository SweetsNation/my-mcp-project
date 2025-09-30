// Mid-Atlantic Region Medicare Analytics Tracking
// Comprehensive tracking for /regions/mid-atlantic webpage performance

export interface MidAtlanticPageMetrics {
  pageType: 'mid_atlantic_region';
  region: 'mid-atlantic';
  totalBeneficiaries: number;
  underservedBeneficiaries: number;
  statesCovered: number;
  specialMetrics: {
    // New York specific
    nyMedigapPenetration: number; // 21%
    nyUnderservedCount: number; // 1.2M+ NYC metro
    nyPremiumGuidance: boolean;

    // Pennsylvania specific
    paMAPenetrationRange: string; // '74-82%'
    paPlanOptions: number; // 80+
    paUrbanRuralVariation: boolean;

    // Maryland specific
    mdMAPenetration: number; // <30%
    mdGrowthPotential: boolean;
    mdMajorNetworks: string[]; // Johns Hopkins, UMD

    // Regional opportunities
    medigapOpportunity: number; // $15.78B NY alone
    marketGapSize: string; // '21-82%' penetration range
    costSavingsOpportunity: boolean;
  };
}

export interface MidAtlanticEngagementMetrics {
  scrollDepth: number;
  timeOnPage: number;
  stateSpecificClicks: {
    newYork: number;
    pennsylvania: number;
    maryland: number;
    newJersey: number;
    delaware: number;
  };
  ctaClicks: {
    phoneCall: number;
    contactForm: number;
    quoteRequest: number;
  };
  contentEngagement: {
    medigapOpportunitySection: boolean;
    maMarketAnalysis: boolean;
    stateValueProps: boolean;
  };
}

export interface MidAtlanticConversionData {
  leadSource: 'mid-atlantic-region';
  state: 'NY' | 'PA' | 'MD' | 'NJ' | 'DE';
  insuranceType: 'medicare_supplement' | 'medicare_advantage' | 'both';
  userIntent: 'cost_navigation' | 'coverage_gap' | 'plan_comparison' | 'state_expertise';
  marketOpportunity: 'low_penetration' | 'high_penetration' | 'mixed';
  premiumConcern: boolean;
}

// Track Mid-Atlantic region page views with market-specific data
export function trackMidAtlanticPageView(
  pageMetrics: MidAtlanticPageMetrics,
  userLocation?: {
    state?: string;
    city?: string;
    county?: string;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'mid_atlantic_page_view', {
      event_category: 'regional_landing_page',
      event_label: 'mid_atlantic_medicare',
      custom_parameters: {
        page_type: pageMetrics.pageType,
        region: pageMetrics.region,
        total_beneficiaries: pageMetrics.totalBeneficiaries,
        underserved_beneficiaries: pageMetrics.underservedBeneficiaries,
        states_covered: pageMetrics.statesCovered,

        // NY market data
        ny_medigap_penetration: pageMetrics.specialMetrics.nyMedigapPenetration,
        ny_underserved_count: pageMetrics.specialMetrics.nyUnderservedCount,
        ny_market_gap: 79, // 79% lack coverage

        // PA market data
        pa_ma_penetration: pageMetrics.specialMetrics.paMAPenetrationRange,
        pa_plan_options: pageMetrics.specialMetrics.paPlanOptions,

        // MD market data
        md_ma_penetration: pageMetrics.specialMetrics.mdMAPenetration,
        md_growth_potential: pageMetrics.specialMetrics.mdGrowthPotential,

        // Market opportunities
        medigap_opportunity_billions: 15.78,
        market_gap_percentage: '21-82%',

        // User location
        user_state: userLocation?.state || '',
        user_city: userLocation?.city || '',
        user_county: userLocation?.county || '',

        timestamp: new Date().toISOString()
      }
    });

    // Track state-specific market opportunities
    trackStateMarketOpportunities(pageMetrics.specialMetrics);
  }
}

// Track state-specific market opportunities
function trackStateMarketOpportunities(metrics: MidAtlanticPageMetrics['specialMetrics']) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    // New York Medigap opportunity
    (window as any).gtag('event', 'market_opportunity_identified', {
      event_category: 'market_analysis',
      event_label: 'new_york_medigap_gap',
      state: 'NY',
      penetration_rate: metrics.nyMedigapPenetration,
      gap_percentage: 79,
      underserved_count: metrics.nyUnderservedCount,
      opportunity_value: 15.78, // billions
      market_type: 'low_penetration_high_opportunity',
      value: 100 // High value event
    });

    // Maryland MA opportunity
    (window as any).gtag('event', 'market_opportunity_identified', {
      event_category: 'market_analysis',
      event_label: 'maryland_ma_growth',
      state: 'MD',
      penetration_rate: metrics.mdMAPenetration,
      market_type: 'low_penetration_growth_market',
      networks: metrics.mdMajorNetworks.join(','),
      value: 80
    });

    // Pennsylvania high penetration but complex market
    (window as any).gtag('event', 'market_opportunity_identified', {
      event_category: 'market_analysis',
      event_label: 'pennsylvania_navigation',
      state: 'PA',
      penetration_range: metrics.paMAPenetrationRange,
      plan_options: metrics.paPlanOptions,
      market_type: 'high_penetration_expert_navigation',
      value: 75
    });
  }
}

// Track Mid-Atlantic CTA interactions
export function trackMidAtlanticCTA(
  ctaType: 'free_coverage_analysis' | 'phone_call' | 'contact_form' | 'state_link',
  ctaLocation: 'hero' | 'medigap_opportunity' | 'market_analysis' | 'state_values' | 'footer',
  state?: 'NY' | 'PA' | 'MD' | 'NJ' | 'DE',
  additionalData?: any
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const eventValue = ctaType === 'phone_call' ? 90 :
                       ctaType === 'free_coverage_analysis' ? 75 :
                       ctaType === 'contact_form' ? 65 : 30;

    (window as any).gtag('event', 'mid_atlantic_cta_click', {
      event_category: 'regional_conversion',
      event_label: `${ctaType}_${state || 'general'}`,
      cta_type: ctaType,
      cta_location: ctaLocation,
      target_state: state || 'multi_state',
      page_type: 'mid_atlantic_region',
      value: eventValue,
      ...additionalData,
      timestamp: new Date().toISOString()
    });

    // Track conversion funnel step
    trackMidAtlanticFunnelStep(ctaType, state, ctaLocation);
  }
}

// Track Mid-Atlantic conversion funnel steps
function trackMidAtlanticFunnelStep(
  action: string,
  state?: string,
  location?: string
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    let funnelStep = '';

    switch (action) {
      case 'state_link':
        funnelStep = 'state_exploration';
        break;
      case 'free_coverage_analysis':
        funnelStep = 'coverage_analysis_requested';
        break;
      case 'phone_call':
        funnelStep = 'phone_contact_initiated';
        break;
      case 'contact_form':
        funnelStep = 'form_contact_initiated';
        break;
    }

    (window as any).gtag('event', 'mid_atlantic_funnel_step', {
      event_category: 'funnel_tracking',
      event_label: `mid_atlantic_${funnelStep}`,
      funnel_step: funnelStep,
      funnel_name: 'Mid-Atlantic Regional Conversion',
      target_state: state || 'multi_state',
      step_location: location,
      timestamp: new Date().toISOString()
    });
  }
}

// Track state-specific section engagement
export function trackStateSpecificEngagement(
  state: 'NY' | 'PA' | 'MD' | 'NJ' | 'DE',
  engagementType: 'highlight_view' | 'value_prop_view' | 'market_data_view' | 'state_link_click',
  timeSpent?: number,
  additionalData?: any
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'state_specific_engagement', {
      event_category: 'geographic_engagement',
      event_label: `${state}_${engagementType}`,
      state: state,
      engagement_type: engagementType,
      time_spent: timeSpent || 0,
      page_type: 'mid_atlantic_region',
      ...additionalData,
      timestamp: new Date().toISOString()
    });
  }
}

// Track Medigap opportunity section engagement
export function trackMedigapOpportunityEngagement(
  interactionType: 'section_view' | 'cost_navigation_click' | 'gap_protection_view',
  state?: 'NY' | 'PA' | 'MD',
  engagementMetrics?: {
    timeSpent: number;
    scrollDepth: number;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'medigap_opportunity_engagement', {
      event_category: 'product_education',
      event_label: `medigap_${interactionType}_${state || 'general'}`,
      interaction_type: interactionType,
      target_state: state || 'multi_state',
      product_type: 'medicare_supplement',
      opportunity_focus: 'low_penetration_states',
      time_spent: engagementMetrics?.timeSpent || 0,
      scroll_depth: engagementMetrics?.scrollDepth || 0,
      value: 40, // High value educational engagement
      timestamp: new Date().toISOString()
    });
  }
}

// Track Medicare Advantage market analysis engagement
export function trackMAMarketAnalysisEngagement(
  analysisType: 'high_penetration_view' | 'low_penetration_view' | 'state_comparison',
  statesCompared?: string[],
  engagementMetrics?: {
    timeSpent: number;
    interactionCount: number;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'ma_market_analysis_engagement', {
      event_category: 'market_research',
      event_label: `ma_analysis_${analysisType}`,
      analysis_type: analysisType,
      states_compared: statesCompared?.join(',') || '',
      product_type: 'medicare_advantage',
      time_spent: engagementMetrics?.timeSpent || 0,
      interaction_count: engagementMetrics?.interactionCount || 0,
      value: 35,
      timestamp: new Date().toISOString()
    });
  }
}

// Track cost navigation expertise interest (NY specific focus)
export function trackCostNavigationInterest(
  costFocus: 'ny_premium_guidance' | 'county_pricing' | 'cost_comparison' | 'savings_opportunity',
  county?: string,
  estimatedSavings?: number
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cost_navigation_interest', {
      event_category: 'cost_analysis',
      event_label: `cost_nav_${costFocus}`,
      cost_focus: costFocus,
      state: 'NY',
      county: county || '',
      estimated_savings: estimatedSavings || 0,
      expertise_type: 'premium_navigation',
      value: costFocus === 'savings_opportunity' ? 50 : 30,
      timestamp: new Date().toISOString()
    });
  }
}

// Track user journey through Mid-Atlantic content
export function trackMidAtlanticUserJourney(
  journeyPath: string[],
  timeSpent: number,
  primaryInterest: 'medigap' | 'medicare_advantage' | 'state_comparison' | 'cost_savings',
  conversionAction?: 'phone_call' | 'form_submit' | 'none'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'mid_atlantic_user_journey', {
      event_category: 'user_journey',
      event_label: `journey_${primaryInterest}`,
      journey_path: journeyPath.join(' > '),
      time_spent_seconds: timeSpent,
      primary_interest: primaryInterest,
      conversion_action: conversionAction || 'none',
      journey_complexity: journeyPath.length,
      journey_completed: conversionAction !== 'none',
      value: conversionAction === 'phone_call' ? 100 : conversionAction === 'form_submit' ? 80 : 20,
      timestamp: new Date().toISOString()
    });
  }
}

// Track lead quality from Mid-Atlantic page
export function trackMidAtlanticLeadQuality(
  conversionData: MidAtlanticConversionData,
  engagementScore: number,
  qualityIndicators: {
    timeOnPage: number;
    sectionsViewed: number;
    stateSpecificInterest: boolean;
    premiumGuidanceInterest: boolean;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const qualityScore = calculateLeadQualityScore(engagementScore, qualityIndicators);

    (window as any).gtag('event', 'mid_atlantic_lead_quality', {
      event_category: 'lead_scoring',
      event_label: `mid_atlantic_${qualityScore >= 80 ? 'high' : qualityScore >= 60 ? 'medium' : 'low'}_quality`,
      lead_source: conversionData.leadSource,
      state: conversionData.state,
      insurance_type: conversionData.insuranceType,
      user_intent: conversionData.userIntent,
      market_opportunity: conversionData.marketOpportunity,
      premium_concern: conversionData.premiumConcern,
      engagement_score: engagementScore,
      quality_score: qualityScore,
      time_on_page: qualityIndicators.timeOnPage,
      sections_viewed: qualityIndicators.sectionsViewed,
      state_specific_interest: qualityIndicators.stateSpecificInterest,
      premium_guidance_interest: qualityIndicators.premiumGuidanceInterest,
      value: qualityScore >= 80 ? 120 : qualityScore >= 60 ? 80 : 40,
      timestamp: new Date().toISOString()
    });
  }
}

// Calculate lead quality score
function calculateLeadQualityScore(
  baseScore: number,
  indicators: {
    timeOnPage: number;
    sectionsViewed: number;
    stateSpecificInterest: boolean;
    premiumGuidanceInterest: boolean;
  }
): number {
  let score = baseScore;

  // Time on page bonus
  if (indicators.timeOnPage > 180) score += 15;
  else if (indicators.timeOnPage > 120) score += 10;
  else if (indicators.timeOnPage > 60) score += 5;

  // Sections viewed bonus
  score += Math.min(indicators.sectionsViewed * 5, 20);

  // State-specific interest bonus
  if (indicators.stateSpecificInterest) score += 10;

  // Premium guidance interest bonus (indicates serious buyer)
  if (indicators.premiumGuidanceInterest) score += 15;

  return Math.min(score, 100);
}

// Track scroll milestones for Mid-Atlantic page
export function setupMidAtlanticScrollTracking() {
  if (typeof window === 'undefined') return;

  const milestones = [
    { percentage: 25, section: 'region_overview' },
    { percentage: 40, section: 'medigap_opportunity' },
    { percentage: 60, section: 'ma_market_analysis' },
    { percentage: 80, section: 'state_value_props' },
    { percentage: 100, section: 'full_page_complete' }
  ];

  let scrollDepth = 0;
  let timeOnPage = Date.now();
  let trackedMilestones = new Set<number>();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentDepth = Math.round((scrollTop / documentHeight) * 100);

    if (currentDepth > scrollDepth) {
      scrollDepth = currentDepth;

      milestones.forEach(milestone => {
        if (scrollDepth >= milestone.percentage && !trackedMilestones.has(milestone.percentage)) {
          trackedMilestones.add(milestone.percentage);

          if ((window as any).gtag) {
            (window as any).gtag('event', 'mid_atlantic_scroll_milestone', {
              event_category: 'engagement',
              event_label: `scroll_${milestone.section}`,
              scroll_percentage: milestone.percentage,
              section: milestone.section,
              time_to_milestone: Date.now() - timeOnPage,
              timestamp: new Date().toISOString()
            });
          }
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);

    // Track final engagement
    const finalTimeOnPage = Date.now() - timeOnPage;
    if (finalTimeOnPage > 10000 && (window as any).gtag) {
      (window as any).gtag('event', 'mid_atlantic_page_engagement_complete', {
        event_category: 'engagement',
        event_label: 'mid_atlantic_region',
        final_scroll_depth: scrollDepth,
        time_on_page_seconds: Math.round(finalTimeOnPage / 1000),
        engagement_quality: finalTimeOnPage > 180000 ? 'high' : finalTimeOnPage > 90000 ? 'medium' : 'low',
        value: finalTimeOnPage > 180000 ? 30 : finalTimeOnPage > 90000 ? 20 : 10,
        timestamp: new Date().toISOString()
      });
    }
  };
}

// Facebook Pixel events for Mid-Atlantic page
export function trackMidAtlanticFacebookPixel(
  eventType: 'PageView' | 'Lead' | 'InitiateCheckout' | 'ViewContent',
  customData?: {
    state?: string;
    insuranceType?: string;
    contentName?: string;
  }
) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    const fbData = {
      content_name: customData?.contentName || 'Mid-Atlantic Medicare Coverage',
      content_category: 'Regional Medicare',
      value: eventType === 'Lead' ? 85 : eventType === 'InitiateCheckout' ? 65 : 10,
      currency: 'USD',
      content_ids: ['mid-atlantic-region'],
      custom_data: {
        region: 'mid-atlantic',
        state: customData?.state || 'multi-state',
        insurance_type: customData?.insuranceType || 'medicare',
        market_opportunity: 'low_penetration_high_value',
        page_type: 'regional_landing'
      }
    };

    (window as any).fbq('track', eventType, fbData);
  }
}

// Export all tracking functions
export const midAtlanticTracking = {
  trackPageView: trackMidAtlanticPageView,
  trackCTA: trackMidAtlanticCTA,
  trackStateEngagement: trackStateSpecificEngagement,
  trackMedigapOpportunity: trackMedigapOpportunityEngagement,
  trackMAMarketAnalysis: trackMAMarketAnalysisEngagement,
  trackCostNavigation: trackCostNavigationInterest,
  trackUserJourney: trackMidAtlanticUserJourney,
  trackLeadQuality: trackMidAtlanticLeadQuality,
  setupScrollTracking: setupMidAtlanticScrollTracking,
  trackFacebookPixel: trackMidAtlanticFacebookPixel
};
