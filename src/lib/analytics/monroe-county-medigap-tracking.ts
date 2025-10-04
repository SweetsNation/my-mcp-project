/**
 * Advanced Analytics Tracking Configuration
 * Monroe County Florida Medicare Supplement Landing Page
 *
 * Purpose: Track user engagement, conversion events, and performance metrics
 * for the Florida Keys island healthcare Medicare Supplement landing page
 */

import { event } from '../analytics';

// Page-specific event types
export type MonroeCountyMedigapEventType =
  | 'island_healthcare_view'
  | 'hurricane_preparedness_engagement'
  | 'snowbird_coverage_interest'
  | 'mainland_specialist_access_view'
  | 'cost_benefit_analysis_interaction'
  | 'critical_access_hospital_info_view'
  | 'plan_comparison_interaction'
  | 'regional_keys_exploration'
  | 'evacuation_coverage_interest'
  | 'seasonal_resident_inquiry'
  | 'medigap_plan_selection'
  | 'keys_quote_request'
  | 'florida_specialist_consultation'
  | 'hurricane_season_urgency'
  | 'air_ambulance_coverage_view'
  | 'baptist_health_network_interest'
  | 'upper_keys_targeting'
  | 'middle_keys_targeting'
  | 'lower_keys_targeting';

// Event tracking function with enhanced context
export const trackMonroeCountyMedigapEvent = (
  eventType: MonroeCountyMedigapEventType,
  eventData?: Record<string, any>
) => {
  try {
    event(eventType, {
      event_category: 'Medicare Supplement Island Healthcare',
      event_label: 'Monroe County Florida Keys',
      page_type: 'island_medigap',
      county: 'Monroe County',
      state: 'Florida',
      region: 'Florida Keys',
      product_type: 'medicare_supplement',
      market_size: 22500,
      island_chain: true,
      hurricane_zone: true,
      critical_access_hospitals: 3,
      ...eventData
    });
  } catch (error) {
    console.warn('Failed to track Monroe County Medigap event:', error);
  }
};

// Section-specific tracking for detailed engagement analysis
export const trackKeysRegionView = (
  region: 'upper_keys' | 'middle_keys' | 'lower_keys',
  city?: string
) => {
  const regionData = {
    upper_keys: { population: 6800, hub: 'Mariners Hospital', city: city || 'Key Largo' },
    middle_keys: { population: 8500, hub: 'Fishermen\'s Hospital', city: city || 'Marathon' },
    lower_keys: { population: 7200, hub: 'Lower Keys Medical Center', city: city || 'Key West' }
  };

  trackMonroeCountyMedigapEvent(`${region}_targeting` as MonroeCountyMedigapEventType, {
    keys_region: region,
    medicare_population: regionData[region].population,
    healthcare_hub: regionData[region].hub,
    primary_city: regionData[region].city,
    value: 20
  });
};

// Hurricane preparedness engagement
export const trackHurricanePreparednessInterest = (
  interactionType: 'evacuation_coverage' | 'emergency_care' | 'air_ambulance' | 'network_flexibility',
  timeSpent?: number
) => {
  trackMonroeCountyMedigapEvent('hurricane_preparedness_engagement', {
    interaction_type: interactionType,
    time_spent_seconds: timeSpent,
    seasonal_relevance: true,
    high_value_feature: true,
    value: 35 // High-value feature for Keys residents
  });
};

// Snowbird/seasonal resident tracking
export const trackSnowbirdCoverageInterest = (
  snowbirdType: 'full_time' | 'seasonal' | 'winter_only',
  statesOfInterest?: string[]
) => {
  trackMonroeCountyMedigapEvent('snowbird_coverage_interest', {
    snowbird_type: snowbirdType,
    multi_state_interest: statesOfInterest && statesOfInterest.length > 1,
    states_count: statesOfInterest?.length || 1,
    nationwide_coverage_needed: true,
    value: 30
  });
};

// Mainland specialist access interest
export const trackMainlandSpecialistInterest = (
  specialtyType: string,
  distance: 'miami' | 'broward' | 'palm_beach' | 'other',
  urgency: 'immediate' | 'planned' | 'future'
) => {
  trackMonroeCountyMedigapEvent('mainland_specialist_access_view', {
    specialty_type: specialtyType,
    mainland_location: distance,
    care_urgency: urgency,
    distance_from_keys: distance === 'miami' ? '165_miles' : 'mainland',
    network_flexibility_critical: true,
    value: 40 // High-intent signal
  });
};

// Cost-benefit analysis interaction
export const trackCostBenefitAnalysis = (
  scenario: 'light_year' | 'mainland_care' | 'hurricane_evacuation',
  comparisonType: 'ma_vs_medigap',
  timeSpent?: number
) => {
  const scenarioValues = {
    light_year: { ma_cost: 1400, medigap_cost: 1980, ma_advantage: 580 },
    mainland_care: { ma_cost: 5800, medigap_cost: 2220, medigap_saves: 3580 },
    hurricane_evacuation: { ma_cost: 10400, medigap_cost: 2220, medigap_saves: 8180 }
  };

  trackMonroeCountyMedigapEvent('cost_benefit_analysis_interaction', {
    scenario: scenario,
    comparison_type: comparisonType,
    time_spent_seconds: timeSpent,
    ma_cost: scenarioValues[scenario].ma_cost,
    medigap_cost: scenarioValues[scenario].medigap_cost,
    potential_savings: scenarioValues[scenario].medigap_saves || 0,
    high_engagement: timeSpent && timeSpent > 60,
    value: 35
  });
};

// Critical access hospital information view
export const trackCriticalAccessHospitalInfo = (
  hospital: 'lower_keys_medical' | 'mariners_hospital' | 'fishermen_hospital',
  infoType: 'capabilities' | 'limitations' | 'mainland_referrals'
) => {
  const hospitalData = {
    lower_keys_medical: { location: 'Key West', region: 'Lower Keys' },
    mariners_hospital: { location: 'Tavernier', region: 'Upper Keys' },
    fishermen_hospital: { location: 'Marathon', region: 'Middle Keys' }
  };

  trackMonroeCountyMedigapEvent('critical_access_hospital_info_view', {
    hospital_name: hospital,
    info_type: infoType,
    location: hospitalData[hospital].location,
    keys_region: hospitalData[hospital].region,
    understanding_local_healthcare: true,
    value: 25
  });
};

// Medigap plan selection tracking
export const trackMedigapPlanInterest = (
  plan: 'plan_g' | 'plan_n' | 'plan_g_hd',
  premium: number,
  interactionType: 'view' | 'compare' | 'select'
) => {
  const planDetails = {
    plan_g: { name: 'Plan G', premium: 165, coverage: 'comprehensive', recommended: true },
    plan_n: { name: 'Plan N', premium: 125, coverage: 'budget', recommended: false },
    plan_g_hd: { name: 'Plan G HD', premium: 45, coverage: 'high_deductible', recommended: false }
  };

  trackMonroeCountyMedigapEvent('medigap_plan_selection', {
    plan_type: plan,
    plan_name: planDetails[plan].name,
    monthly_premium: premium,
    coverage_level: planDetails[plan].coverage,
    interaction_type: interactionType,
    most_popular: planDetails[plan].recommended,
    value: interactionType === 'select' ? 50 : 25
  });
};

// Quote request tracking
export const trackKeysQuoteRequest = (
  quoteType: 'immediate' | 'scheduled' | 'email',
  planInterest?: string[],
  urgency?: 'hurricane_season' | 'aep' | 'regular'
) => {
  trackMonroeCountyMedigapEvent('keys_quote_request', {
    quote_type: quoteType,
    plans_of_interest: planInterest,
    request_urgency: urgency,
    seasonal_context: urgency === 'hurricane_season' || urgency === 'aep',
    high_intent: true,
    conversion_type: 'quote_request',
    value: 70 // High-value conversion
  });
};

// Consultation request tracking
export const trackFloridaSpecialistConsultation = (
  consultationType: 'phone' | 'video' | 'in_person',
  topic: 'general' | 'hurricane_prep' | 'snowbird' | 'mainland_access' | 'plan_comparison',
  preferredContact: 'phone' | 'email'
) => {
  trackMonroeCountyMedigapEvent('florida_specialist_consultation', {
    consultation_type: consultationType,
    topic_of_interest: topic,
    preferred_contact_method: preferredContact,
    florida_licensed_specialist: true,
    keys_expertise: true,
    conversion_type: 'consultation_request',
    value: 65
  });
};

// Hurricane season urgency tracking
export const trackHurricaneSeasonUrgency = (
  urgencyTrigger: 'active_storm' | 'storm_forecast' | 'season_start' | 'aep_overlap',
  userAction: 'researching' | 'comparing' | 'requesting_quote'
) => {
  trackMonroeCountyMedigapEvent('hurricane_season_urgency', {
    urgency_trigger: urgencyTrigger,
    user_action: userAction,
    seasonal_timing: true,
    emergency_context: urgencyTrigger === 'active_storm',
    high_priority: true,
    value: urgencyTrigger === 'active_storm' ? 60 : 40
  });
};

// Air ambulance coverage interest
export const trackAirAmbulanceCoverageInterest = (
  context: 'emergency_transfer' | 'mainland_specialists' | 'trauma_center',
  concernLevel: 'high' | 'medium' | 'general_interest'
) => {
  trackMonroeCountyMedigapEvent('air_ambulance_coverage_view', {
    coverage_context: context,
    concern_level: concernLevel,
    part_b_coverage: true,
    medigap_benefit: true,
    critical_for_islands: true,
    value: concernLevel === 'high' ? 45 : 30
  });
};

// Baptist Health South Florida network interest
export const trackBaptistHealthNetworkInterest = (
  location: 'miami' | 'broward' | 'palm_beach' | 'homestead',
  serviceType: 'specialty_care' | 'hospital' | 'urgent_care' | 'primary_care'
) => {
  trackMonroeCountyMedigapEvent('baptist_health_network_interest', {
    baptist_health_location: location,
    service_type: serviceType,
    mainland_network_access: true,
    medigap_flexibility_benefit: true,
    value: 30
  });
};

// Evacuation coverage interest
export const trackEvacuationCoverageInterest = (
  evacuationType: 'hurricane_mandatory' | 'medical_emergency' | 'seasonal_relocation',
  destinationState?: string
) => {
  trackMonroeCountyMedigapEvent('evacuation_coverage_interest', {
    evacuation_type: evacuationType,
    destination_state: destinationState || 'mainland_florida',
    nationwide_coverage_needed: true,
    emergency_preparedness: true,
    keys_specific_concern: true,
    value: 35
  });
};

// Deep content engagement tracking
export const trackDeepIslandHealthcareEngagement = (
  timeOnPage: number,
  scrollDepth: number,
  sectionsViewed: string[],
  interactionsCount: number
) => {
  const engagementScore = calculateIslandHealthcareEngagementScore(
    timeOnPage,
    scrollDepth,
    sectionsViewed.length,
    interactionsCount
  );

  trackMonroeCountyMedigapEvent('island_healthcare_view', {
    time_on_page_seconds: timeOnPage,
    scroll_depth_percentage: scrollDepth,
    sections_viewed: sectionsViewed.length,
    sections_list: sectionsViewed,
    interactions_count: interactionsCount,
    engagement_score: engagementScore,
    high_quality_lead: engagementScore >= 70 && timeOnPage >= 180,
    value: engagementScore >= 70 ? 55 : 25
  });
};

// Calculate engagement score for lead qualification
const calculateIslandHealthcareEngagementScore = (
  timeSeconds: number,
  scrollDepth: number,
  sectionsViewed: number,
  interactionsCount: number
): number => {
  let score = 0;

  // Time component (0-35 points)
  if (timeSeconds >= 60) score += 8;
  if (timeSeconds >= 120) score += 10;
  if (timeSeconds >= 180) score += 12; // 3 minutes = strong engagement
  if (timeSeconds >= 300) score += 5;

  // Scroll component (0-30 points)
  if (scrollDepth >= 25) score += 8;
  if (scrollDepth >= 50) score += 10;
  if (scrollDepth >= 75) score += 10;
  if (scrollDepth >= 90) score += 2;

  // Section viewing component (0-20 points)
  if (sectionsViewed >= 3) score += 6;
  if (sectionsViewed >= 5) score += 8;
  if (sectionsViewed >= 7) score += 6;

  // Interaction component (0-15 points)
  if (interactionsCount >= 1) score += 5;
  if (interactionsCount >= 3) score += 5;
  if (interactionsCount >= 5) score += 5;

  return Math.min(score, 100); // Cap at 100
};

// Plan comparison interaction
export const trackPlanComparisonInteraction = (
  plansCompared: string[],
  comparisonAspect: 'cost' | 'coverage' | 'benefits' | 'hurricane_coverage' | 'mainland_access',
  timeSpent?: number
) => {
  trackMonroeCountyMedigapEvent('plan_comparison_interaction', {
    plans_compared: plansCompared,
    comparison_count: plansCompared.length,
    comparison_aspect: comparisonAspect,
    time_spent_seconds: timeSpent,
    detailed_research: timeSpent && timeSpent > 90,
    value: 30
  });
};

// Regional Keys exploration (Upper/Middle/Lower)
export const trackRegionalKeysExploration = (
  regionsViewed: ('upper_keys' | 'middle_keys' | 'lower_keys')[],
  primaryRegionOfInterest?: 'upper_keys' | 'middle_keys' | 'lower_keys'
) => {
  trackMonroeCountyMedigapEvent('regional_keys_exploration', {
    regions_viewed: regionsViewed,
    regions_count: regionsViewed.length,
    primary_region: primaryRegionOfInterest,
    comprehensive_research: regionsViewed.length >= 2,
    geographic_targeting_success: true,
    value: 20
  });
};

// Initialize page-specific tracking on load
export const initializeMonroeCountyMedigapTracking = () => {
  if (typeof window === 'undefined') return;

  // Track initial page context
  trackMonroeCountyMedigapEvent('island_healthcare_view', {
    page_load: true,
    referrer: document.referrer,
    viewport_width: window.innerWidth,
    device_type: window.innerWidth < 768 ? 'mobile' : 'desktop',
    keys_specific_landing: true
  });

  // Set up intersection observer for section tracking
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          const sectionId = entry.target.id;

          // Track specific Keys sections
          if (sectionId.includes('hurricane')) {
            trackHurricanePreparednessInterest('evacuation_coverage');
          } else if (sectionId.includes('snowbird')) {
            trackSnowbirdCoverageInterest('seasonal');
          } else if (sectionId.includes('cost')) {
            // Cost section view tracking handled separately
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe all major sections
  document.querySelectorAll('section[id], h2[id]').forEach((section) => {
    sectionObserver.observe(section);
  });

  // Track plan card interactions
  document.querySelectorAll('[data-plan-type]').forEach((planCard) => {
    planCard.addEventListener('click', (e) => {
      const planType = (e.currentTarget as HTMLElement).getAttribute('data-plan-type') as any;
      const premium = parseInt((e.currentTarget as HTMLElement).getAttribute('data-premium') || '0');
      trackMedigapPlanInterest(planType, premium, 'select');
    });
  });

  // Track CTA clicks
  document.querySelectorAll('a[href*="contact"], a[href^="tel:"]').forEach((cta) => {
    cta.addEventListener('click', (e) => {
      const href = (e.currentTarget as HTMLAnchorElement).href;
      if (href.includes('tel:')) {
        trackFloridaSpecialistConsultation('phone', 'general', 'phone');
      } else {
        trackKeysQuoteRequest('email', undefined, 'regular');
      }
    });
  });
};

// Export tracking utilities
export const MonroeCountyMedigapTracking = {
  trackKeysRegionView,
  trackHurricanePreparednessInterest,
  trackSnowbirdCoverageInterest,
  trackMainlandSpecialistInterest,
  trackCostBenefitAnalysis,
  trackCriticalAccessHospitalInfo,
  trackMedigapPlanInterest,
  trackKeysQuoteRequest,
  trackFloridaSpecialistConsultation,
  trackHurricaneSeasonUrgency,
  trackAirAmbulanceCoverageInterest,
  trackBaptistHealthNetworkInterest,
  trackEvacuationCoverageInterest,
  trackDeepIslandHealthcareEngagement,
  trackPlanComparisonInteraction,
  trackRegionalKeysExploration,
  initializeMonroeCountyMedigapTracking
};
