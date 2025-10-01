// Southwest Region Medicare Analytics Tracking
// Comprehensive tracking for /regions/southwest webpage performance

export interface SouthwestPageMetrics {
  pageType: 'southwest_region';
  region: 'southwest';
  totalPopulation: number;
  statesCovered: number;
  specialMetrics: {
    // Arizona specific
    azMAPenetration: number; // 54%
    azPlanOptions: number; // 80+ in Maricopa County
    azSnowbirdMarket: boolean;

    // Nevada specific
    nvMAPenetration: number; // 56% - Southwest leader
    nvPlanOptions: number; // 100+ in Clark County
    nvZeroPremiumAbundance: boolean;

    // New Mexico specific
    nmMAPenetration: number; // 53%
    nmPlanOptions: number; // 50+ in Bernalillo County
    nmCulturalCompetency: boolean;

    // Regional characteristics
    hispanicPopulation: number; // 25%+
    bilingualSupport: boolean;
    desertHealthcare: boolean;
    snowbirdCoverage: boolean;
    avgMAPenetration: number; // 54.3%
  };
}

export interface SouthwestEngagementMetrics {
  scrollDepth: number;
  timeOnPage: number;
  stateSpecificClicks: {
    arizona: number;
    nevada: number;
    newMexico: number;
  };
  ctaClicks: {
    phoneCall: number;
    contactForm: number;
    planComparison: number;
    bilingualContact: number;
  };
  contentEngagement: {
    maLeadershipSection: boolean;
    stateMarketAnalysis: boolean;
    desertHealthFocus: boolean;
    bilingualSupportInfo: boolean;
  };
}

export interface SouthwestConversionData {
  leadSource: 'southwest-region';
  state: 'AZ' | 'NV' | 'NM';
  insuranceType: 'medicare_advantage' | 'medicare_supplement' | 'both';
  userIntent: 'plan_comparison' | 'bilingual_support' | 'snowbird_coverage' | 'desert_health' | 'zero_premium';
  marketType: 'high_ma_penetration';
  bilingualInterest: boolean;
  snowbirdStatus: boolean;
}

// Track Southwest region page views with market-specific data
export function trackSouthwestPageView(
  pageMetrics: SouthwestPageMetrics,
  userLocation?: {
    state?: string;
    city?: string;
    county?: string;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'southwest_page_view', {
      event_category: 'regional_landing_page',
      event_label: 'southwest_medicare',
      custom_parameters: {
        page_type: pageMetrics.pageType,
        region: pageMetrics.region,
        total_population: pageMetrics.totalPopulation,
        states_covered: pageMetrics.statesCovered,

        // AZ market data
        az_ma_penetration: pageMetrics.specialMetrics.azMAPenetration,
        az_plan_options: pageMetrics.specialMetrics.azPlanOptions,
        az_snowbird_market: pageMetrics.specialMetrics.azSnowbirdMarket,

        // NV market data (leader)
        nv_ma_penetration: pageMetrics.specialMetrics.nvMAPenetration,
        nv_plan_options: pageMetrics.specialMetrics.nvPlanOptions,
        nv_market_leader: true,

        // NM market data
        nm_ma_penetration: pageMetrics.specialMetrics.nmMAPenetration,
        nm_cultural_competency: pageMetrics.specialMetrics.nmCulturalCompetency,

        // Regional characteristics
        hispanic_population_pct: pageMetrics.specialMetrics.hispanicPopulation,
        bilingual_support: pageMetrics.specialMetrics.bilingualSupport,
        desert_healthcare: pageMetrics.specialMetrics.desertHealthcare,
        avg_ma_penetration: pageMetrics.specialMetrics.avgMAPenetration,

        // User location
        user_state: userLocation?.state || '',
        user_city: userLocation?.city || '',
        user_county: userLocation?.county || '',

        timestamp: new Date().toISOString()
      }
    });

    // Track state-specific market leadership
    trackStateMarketLeadership(pageMetrics.specialMetrics);
  }
}

// Track state-specific market leadership and opportunities
function trackStateMarketLeadership(metrics: SouthwestPageMetrics['specialMetrics']) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    // Nevada market leadership
    (window as any).gtag('event', 'market_leadership_identified', {
      event_category: 'market_analysis',
      event_label: 'nevada_southwest_leader',
      state: 'NV',
      penetration_rate: metrics.nvMAPenetration,
      plan_options: metrics.nvPlanOptions,
      market_position: 'regional_leader',
      national_rank: 'top_10',
      value: 95 // High value event
    });

    // Arizona snowbird market
    (window as any).gtag('event', 'market_opportunity_identified', {
      event_category: 'market_analysis',
      event_label: 'arizona_snowbird_market',
      state: 'AZ',
      penetration_rate: metrics.azMAPenetration,
      specialty_market: 'snowbird_coverage',
      plan_options: metrics.azPlanOptions,
      value: 85
    });

    // New Mexico cultural competency
    (window as any).gtag('event', 'market_opportunity_identified', {
      event_category: 'market_analysis',
      event_label: 'new_mexico_cultural_market',
      state: 'NM',
      penetration_rate: metrics.nmMAPenetration,
      specialty_focus: 'cultural_competency',
      hispanic_latino_focus: true,
      value: 80
    });

    // Bilingual market opportunity
    if (metrics.bilingualSupport && metrics.hispanicPopulation >= 25) {
      (window as any).gtag('event', 'bilingual_market_opportunity', {
        event_category: 'market_specialization',
        event_label: 'southwest_bilingual_support',
        hispanic_population: metrics.hispanicPopulation,
        bilingual_support: true,
        market_size: 'large',
        value: 90
      });
    }
  }
}

// Track Southwest CTA interactions
export function trackSouthwestCTA(
  ctaType: 'free_plan_comparison' | 'phone_call' | 'contact_form' | 'state_link' | 'bilingual_contact' | 'snowbird_info',
  ctaLocation: 'hero' | 'ma_leadership' | 'state_analysis' | 'state_values' | 'footer',
  state?: 'AZ' | 'NV' | 'NM',
  additionalData?: any
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const eventValue = ctaType === 'phone_call' ? 90 :
                       ctaType === 'bilingual_contact' ? 85 :
                       ctaType === 'free_plan_comparison' ? 75 :
                       ctaType === 'snowbird_info' ? 70 :
                       ctaType === 'contact_form' ? 65 : 30;

    (window as any).gtag('event', 'southwest_cta_click', {
      event_category: 'regional_conversion',
      event_label: `${ctaType}_${state || 'general'}`,
      cta_type: ctaType,
      cta_location: ctaLocation,
      target_state: state || 'multi_state',
      page_type: 'southwest_region',
      value: eventValue,
      ...additionalData,
      timestamp: new Date().toISOString()
    });

    // Track conversion funnel step
    trackSouthwestFunnelStep(ctaType, state, ctaLocation);
  }
}

// Track Southwest conversion funnel steps
function trackSouthwestFunnelStep(
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
      case 'free_plan_comparison':
        funnelStep = 'plan_comparison_requested';
        break;
      case 'phone_call':
        funnelStep = 'phone_contact_initiated';
        break;
      case 'bilingual_contact':
        funnelStep = 'bilingual_assistance_requested';
        break;
      case 'snowbird_info':
        funnelStep = 'snowbird_coverage_inquiry';
        break;
      case 'contact_form':
        funnelStep = 'form_contact_initiated';
        break;
    }

    (window as any).gtag('event', 'southwest_funnel_step', {
      event_category: 'funnel_tracking',
      event_label: `southwest_${funnelStep}`,
      funnel_step: funnelStep,
      funnel_name: 'Southwest Regional Conversion',
      target_state: state || 'multi_state',
      step_location: location,
      timestamp: new Date().toISOString()
    });
  }
}

// Track state-specific section engagement
export function trackSouthwestStateEngagement(
  state: 'AZ' | 'NV' | 'NM',
  engagementType: 'highlight_view' | 'market_data_view' | 'state_link_click' | 'network_interest',
  timeSpent?: number,
  additionalData?: any
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'southwest_state_engagement', {
      event_category: 'geographic_engagement',
      event_label: `${state}_${engagementType}`,
      state: state,
      engagement_type: engagementType,
      time_spent: timeSpent || 0,
      page_type: 'southwest_region',
      ...additionalData,
      timestamp: new Date().toISOString()
    });
  }
}

// Track MA Leadership section engagement
export function trackMALeadershipEngagement(
  interactionType: 'section_view' | 'nv_leadership_view' | 'zero_premium_interest' | 'network_exploration',
  state?: 'AZ' | 'NV' | 'NM',
  engagementMetrics?: {
    timeSpent: number;
    scrollDepth: number;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'ma_leadership_engagement', {
      event_category: 'market_education',
      event_label: `ma_leadership_${interactionType}_${state || 'general'}`,
      interaction_type: interactionType,
      target_state: state || 'multi_state',
      product_type: 'medicare_advantage',
      market_focus: 'high_penetration_competitive',
      time_spent: engagementMetrics?.timeSpent || 0,
      scroll_depth: engagementMetrics?.scrollDepth || 0,
      value: 45, // High value educational engagement
      timestamp: new Date().toISOString()
    });
  }
}

// Track bilingual support interest
export function trackBilingualSupportInterest(
  interactionType: 'bilingual_cta_click' | 'spanish_content_view' | 'bilingual_info_view',
  language: 'spanish' | 'english',
  conversionIntent: boolean = false
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'bilingual_support_interest', {
      event_category: 'language_support',
      event_label: `bilingual_${interactionType}`,
      interaction_type: interactionType,
      language_preference: language,
      conversion_intent: conversionIntent,
      region: 'southwest',
      hispanic_focus: true,
      value: conversionIntent ? 85 : 40,
      timestamp: new Date().toISOString()
    });
  }
}

// Track snowbird coverage interest
export function trackSnowbirdCoverageInterest(
  interactionType: 'snowbird_section_view' | 'multi_state_inquiry' | 'seasonal_coverage_interest',
  states?: string[],
  season?: 'winter' | 'year_round'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'snowbird_coverage_interest', {
      event_category: 'specialty_market',
      event_label: `snowbird_${interactionType}`,
      interaction_type: interactionType,
      states_of_interest: states?.join(',') || 'arizona',
      season_type: season || 'winter',
      specialty_market: 'snowbird_retiree',
      value: 70,
      timestamp: new Date().toISOString()
    });
  }
}

// Track desert health specialization interest
export function trackDesertHealthInterest(
  focusArea: 'heat_prevention' | 'climate_adaptation' | 'wellness_programs' | 'specialized_networks',
  engagementLevel: 'view' | 'click' | 'inquiry'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'desert_health_interest', {
      event_category: 'healthcare_specialization',
      event_label: `desert_health_${focusArea}`,
      focus_area: focusArea,
      engagement_level: engagementLevel,
      region: 'southwest',
      specialty_type: 'desert_healthcare',
      value: engagementLevel === 'inquiry' ? 60 : engagementLevel === 'click' ? 35 : 20,
      timestamp: new Date().toISOString()
    });
  }
}

// Track user journey through Southwest content
export function trackSouthwestUserJourney(
  journeyPath: string[],
  timeSpent: number,
  primaryInterest: 'ma_plans' | 'bilingual_support' | 'snowbird_coverage' | 'desert_health' | 'plan_comparison',
  conversionAction?: 'phone_call' | 'form_submit' | 'bilingual_contact' | 'none'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'southwest_user_journey', {
      event_category: 'user_journey',
      event_label: `journey_${primaryInterest}`,
      journey_path: journeyPath.join(' > '),
      time_spent_seconds: timeSpent,
      primary_interest: primaryInterest,
      conversion_action: conversionAction || 'none',
      journey_complexity: journeyPath.length,
      journey_completed: conversionAction !== 'none',
      value: conversionAction === 'phone_call' ? 100 :
             conversionAction === 'bilingual_contact' ? 95 :
             conversionAction === 'form_submit' ? 80 : 25,
      timestamp: new Date().toISOString()
    });
  }
}

// Track lead quality from Southwest page
export function trackSouthwestLeadQuality(
  conversionData: SouthwestConversionData,
  engagementScore: number,
  qualityIndicators: {
    timeOnPage: number;
    sectionsViewed: number;
    stateSpecificInterest: boolean;
    bilingualInterest: boolean;
    snowbirdInterest: boolean;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const qualityScore = calculateSouthwestLeadQuality(engagementScore, qualityIndicators);

    (window as any).gtag('event', 'southwest_lead_quality', {
      event_category: 'lead_scoring',
      event_label: `southwest_${qualityScore >= 80 ? 'high' : qualityScore >= 60 ? 'medium' : 'low'}_quality`,
      lead_source: conversionData.leadSource,
      state: conversionData.state,
      insurance_type: conversionData.insuranceType,
      user_intent: conversionData.userIntent,
      market_type: conversionData.marketType,
      bilingual_interest: conversionData.bilingualInterest,
      snowbird_status: conversionData.snowbirdStatus,
      engagement_score: engagementScore,
      quality_score: qualityScore,
      time_on_page: qualityIndicators.timeOnPage,
      sections_viewed: qualityIndicators.sectionsViewed,
      state_specific_interest: qualityIndicators.stateSpecificInterest,
      bilingual_interest_flag: qualityIndicators.bilingualInterest,
      snowbird_interest_flag: qualityIndicators.snowbirdInterest,
      value: qualityScore >= 80 ? 125 : qualityScore >= 60 ? 85 : 45,
      timestamp: new Date().toISOString()
    });
  }
}

// Calculate Southwest-specific lead quality score
function calculateSouthwestLeadQuality(
  baseScore: number,
  indicators: {
    timeOnPage: number;
    sectionsViewed: number;
    stateSpecificInterest: boolean;
    bilingualInterest: boolean;
    snowbirdInterest: boolean;
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

  // Bilingual interest bonus (high-value Southwest market)
  if (indicators.bilingualInterest) score += 15;

  // Snowbird interest bonus (specialty market)
  if (indicators.snowbirdInterest) score += 12;

  return Math.min(score, 100);
}

// Track scroll milestones for Southwest page
export function setupSouthwestScrollTracking() {
  if (typeof window === 'undefined') return;

  const milestones = [
    { percentage: 25, section: 'region_overview' },
    { percentage: 40, section: 'ma_leadership' },
    { percentage: 60, section: 'state_market_analysis' },
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
            (window as any).gtag('event', 'southwest_scroll_milestone', {
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
      (window as any).gtag('event', 'southwest_page_engagement_complete', {
        event_category: 'engagement',
        event_label: 'southwest_region',
        final_scroll_depth: scrollDepth,
        time_on_page_seconds: Math.round(finalTimeOnPage / 1000),
        engagement_quality: finalTimeOnPage > 180000 ? 'high' : finalTimeOnPage > 90000 ? 'medium' : 'low',
        value: finalTimeOnPage > 180000 ? 35 : finalTimeOnPage > 90000 ? 22 : 12,
        timestamp: new Date().toISOString()
      });
    }
  };
}

// Facebook Pixel events for Southwest page
export function trackSouthwestFacebookPixel(
  eventType: 'PageView' | 'Lead' | 'InitiateCheckout' | 'ViewContent',
  customData?: {
    state?: string;
    insuranceType?: string;
    contentName?: string;
    bilingualInterest?: boolean;
  }
) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    const fbData = {
      content_name: customData?.contentName || 'Southwest Medicare Coverage',
      content_category: 'Regional Medicare',
      value: eventType === 'Lead' ? 85 : eventType === 'InitiateCheckout' ? 70 : 12,
      currency: 'USD',
      content_ids: ['southwest-region'],
      custom_data: {
        region: 'southwest',
        state: customData?.state || 'multi-state',
        insurance_type: customData?.insuranceType || 'medicare_advantage',
        market_type: 'high_ma_penetration',
        bilingual_support: customData?.bilingualInterest || false,
        page_type: 'regional_landing'
      }
    };

    (window as any).fbq('track', eventType, fbData);
  }
}

// Export all tracking functions
export const southwestTracking = {
  trackPageView: trackSouthwestPageView,
  trackCTA: trackSouthwestCTA,
  trackStateEngagement: trackSouthwestStateEngagement,
  trackMALeadership: trackMALeadershipEngagement,
  trackBilingualSupport: trackBilingualSupportInterest,
  trackSnowbirdCoverage: trackSnowbirdCoverageInterest,
  trackDesertHealth: trackDesertHealthInterest,
  trackUserJourney: trackSouthwestUserJourney,
  trackLeadQuality: trackSouthwestLeadQuality,
  setupScrollTracking: setupSouthwestScrollTracking,
  trackFacebookPixel: trackSouthwestFacebookPixel
};
