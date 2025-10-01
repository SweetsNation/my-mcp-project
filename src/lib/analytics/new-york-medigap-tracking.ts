// New York Medicare Supplement (Medigap) Analytics Tracking
// Specialized tracking for NY's unique low-penetration Medigap market

export interface NewYorkMedigapPageMetrics {
  pageType: 'ny_medigap';
  state: 'new-york';
  totalBeneficiaries: number;
  medigapPenetration: number; // 12-21%
  underservedBeneficiaries: number;
  plansAvailable: number; // 12 NY standardized plans
  specialMetrics: {
    standardizedPlans: boolean; // NY uses unique standardized plans
    planTypes: number; // 12 NY-specific benefit packages
    mostPopularPlan: string; // Plan F
    secondPopularPlan: string; // Plan N
    thirdPopularPlan: string; // Plan G equivalent
    planFEnrollment: number; // 42%
    planNEnrollment: number; // 29%
    planGEnrollment: number; // 18%
    averagePremium: number; // $304/month (highest nationally)
    majorNetworks: string[];
    worldClassFacilities: number;
    marketGapPercentage: number; // 79-88%
    opportunityValueBillions: number;
    lowPenetrationAdvantage: boolean;
    regionsCovered: number; // 3 (NYC Metro, Long Island, Upstate)
    multilingualSupport: string[]; // Spanish, Chinese, Russian, Korean
  };
}

export interface UserLocation {
  city: string;
  zipCode: string;
  region: 'nyc-metro' | 'long-island' | 'upstate' | '';
}

class NewYorkMedigapTracking {
  private isProduction = process.env.NODE_ENV === 'production';

  // Track page view with NY-specific metrics
  trackPageView(metrics: NewYorkMedigapPageMetrics, location: UserLocation) {
    if (typeof window === 'undefined') return;

    const eventData = {
      event: 'ny_medigap_page_view',
      page_type: metrics.pageType,
      state: metrics.state,
      total_beneficiaries: metrics.totalBeneficiaries,
      medigap_penetration: metrics.medigapPenetration,
      underserved_beneficiaries: metrics.underservedBeneficiaries,
      plans_available: metrics.plansAvailable,
      standardized_plans: metrics.specialMetrics.standardizedPlans,
      plan_types: metrics.specialMetrics.planTypes,
      most_popular_plan: metrics.specialMetrics.mostPopularPlan,
      average_premium: metrics.specialMetrics.averagePremium,
      market_gap_percentage: metrics.specialMetrics.marketGapPercentage,
      opportunity_value_billions: metrics.specialMetrics.opportunityValueBillions,
      user_city: location.city,
      user_zip: location.zipCode,
      user_region: location.region,
      timestamp: new Date().toISOString()
    };

    this.sendEvent(eventData);
  }

  // Track scroll depth milestones
  trackScrollDepth(percentage: number) {
    if (typeof window === 'undefined') return;

    this.sendEvent({
      event: 'ny_medigap_scroll_depth',
      scroll_percentage: percentage,
      timestamp: new Date().toISOString()
    });
  }

  // Track CTA interactions
  trackCTA(
    ctaType: 'phone_call' | 'contact_form' | 'plan_comparison' | 'cost_calculator' | 'language_specific',
    metadata?: { section?: string; language?: string; plan?: string }
  ) {
    if (typeof window === 'undefined') return;

    this.sendEvent({
      event: 'ny_medigap_cta_click',
      cta_type: ctaType,
      section: metadata?.section || 'unknown',
      language: metadata?.language,
      plan: metadata?.plan,
      timestamp: new Date().toISOString()
    });
  }

  // Track user journey stages
  trackUserJourney(
    stage: 'arrival' | 'education' | 'comparison' | 'decision',
    metadata?: {
      timeSpent?: number;
      sectionsViewed?: string[];
      ctasInteracted?: string[];
    }
  ) {
    if (typeof window === 'undefined') return;

    this.sendEvent({
      event: 'ny_medigap_user_journey',
      journey_stage: stage,
      time_spent_seconds: metadata?.timeSpent,
      sections_viewed: metadata?.sectionsViewed,
      ctas_interacted: metadata?.ctasInteracted,
      timestamp: new Date().toISOString()
    });
  }

  // Track interest in specific NY plan types
  trackPlanTypeInterest(
    planType: 'plan_f' | 'plan_n' | 'plan_g' | 'other',
    interactionType: 'view' | 'click' | 'compare'
  ) {
    if (typeof window === 'undefined') return;

    this.sendEvent({
      event: 'ny_medigap_plan_interest',
      plan_type: planType,
      interaction_type: interactionType,
      timestamp: new Date().toISOString()
    });
  }

  // Track engagement with NY region-specific content
  trackRegionEngagement(
    region: 'nyc-metro' | 'long-island' | 'upstate',
    interactionType: 'view' | 'click'
  ) {
    if (typeof window === 'undefined') return;

    this.sendEvent({
      event: 'ny_medigap_region_engagement',
      region: region,
      interaction_type: interactionType,
      timestamp: new Date().toISOString()
    });
  }

  // Track multilingual engagement
  trackMultilingualEngagement(
    language: 'spanish' | 'chinese' | 'russian' | 'korean',
    interactionType: 'cta_click' | 'language_toggle'
  ) {
    if (typeof window === 'undefined') return;

    this.sendEvent({
      event: 'ny_medigap_multilingual_engagement',
      language: language,
      interaction_type: interactionType,
      timestamp: new Date().toISOString()
    });
  }

  // Track education engagement with NY standardized plans spotlight
  trackStandardizedPlansEducation(
    interactionType: 'spotlight_view' | 'learn_more_click'
  ) {
    if (typeof window === 'undefined') return;

    this.sendEvent({
      event: 'ny_medigap_standardized_plans_education',
      interaction_type: interactionType,
      timestamp: new Date().toISOString()
    });
  }

  // Track healthcare network interest
  trackNetworkInterest(
    network: 'nyu-langone' | 'mount-sinai' | 'newyork-presbyterian' | 'memorial-sloan-kettering' | 'other',
    interactionType: 'view' | 'click'
  ) {
    if (typeof window === 'undefined') return;

    this.sendEvent({
      event: 'ny_medigap_network_interest',
      network: network,
      interaction_type: interactionType,
      timestamp: new Date().toISOString()
    });
  }

  // Send event to analytics platform (Google Analytics 4)
  private sendEvent(eventData: any) {
    if (typeof window === 'undefined') return;

    // Send to Google Analytics 4 if available
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventData.event, eventData);
    }

    // Console log in development
    if (!this.isProduction) {
      console.log('📊 NY Medigap Analytics Event:', eventData);
    }
  }
}

// Export singleton instance
export const newYorkMedigapTracking = new NewYorkMedigapTracking();

// Type augmentation for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      eventParams: Record<string, any>
    ) => void;
  }
}
