import { event } from '@/lib/analytics'

/**
 * Miami-Dade County Medicare Supplement Tracking Module
 *
 * Comprehensive analytics for South Florida's largest Medicare market
 * - 485,000+ beneficiaries
 * - 5 major hospital systems
 * - Bilingual services tracking
 * - International travel coverage
 */

export type MiamiDadeMedigapEventType =
  | 'urban_healthcare_view'
  | 'bilingual_service_interest'
  | 'international_travel_coverage_interest'
  | 'hospital_network_comparison'
  | 'jackson_health_system_interest'
  | 'baptist_health_engagement'
  | 'um_health_specialist_interest'
  | 'cleveland_clinic_access_view'
  | 'regional_zone_exploration'
  | 'cost_comparison_analysis'
  | 'medigap_plan_selection'
  | 'snowbird_multi_state_interest'
  | 'cultural_competency_care_interest'
  | 'spanish_language_support_request'
  | 'miami_dade_quote_request'
  | 'south_florida_specialist_consultation'
  | 'deep_urban_healthcare_engagement'
  | 'plan_comparison_interaction'
  | 'multi_regional_exploration'

/**
 * Main tracking function for Miami-Dade Medicare Supplement events
 */
export const trackMiamiDadeMedigapEvent = (
  eventType: MiamiDadeMedigapEventType,
  eventData?: Record<string, any>
) => {
  event(eventType, {
    event_category: 'Medicare Supplement Urban Healthcare',
    event_label: 'Miami-Dade County South Florida',
    page_type: 'urban_medigap',
    county: 'Miami-Dade County',
    state: 'Florida',
    region: 'South Florida',
    product_type: 'medicare_supplement',
    market_size: 485000,
    major_hospital_systems: 5,
    bilingual_market: true,
    international_community: true,
    ...eventData
  })
}

/**
 * Track hospital network interest by system
 */
export const trackHospitalNetworkInterest = (
  hospital: 'jackson_health' | 'baptist_health' | 'um_health' | 'cleveland_clinic' | 'mount_sinai',
  interactionType: 'view_info' | 'specialist_inquiry' | 'network_comparison',
  timeSpent?: number
) => {
  const hospitalData = {
    jackson_health: {
      name: 'Jackson Health System',
      type: 'public_safety_net',
      services: 'Level I Trauma',
      value: 40
    },
    baptist_health: {
      name: 'Baptist Health South Florida',
      type: 'private_multi_hospital',
      services: '12 hospitals, cardiac care',
      value: 45
    },
    um_health: {
      name: 'University of Miami Health',
      type: 'academic_medical_center',
      services: 'Sylvester Cancer Center',
      value: 50
    },
    cleveland_clinic: {
      name: 'Cleveland Clinic Florida',
      type: 'academic_tertiary',
      services: 'Cardiac excellence, Weston',
      value: 50
    },
    mount_sinai: {
      name: 'Mount Sinai Medical Center',
      type: 'acute_care',
      services: 'Miami Beach premier',
      value: 35
    }
  }

  trackMiamiDadeMedigapEvent('hospital_network_comparison', {
    hospital_system: hospital,
    hospital_name: hospitalData[hospital].name,
    hospital_type: hospitalData[hospital].type,
    key_services: hospitalData[hospital].services,
    interaction_type: interactionType,
    time_spent_seconds: timeSpent,
    high_value_network: true,
    value: hospitalData[hospital].value
  })
}

/**
 * Track bilingual service interest
 */
export const trackBilingualServiceInterest = (
  language: 'spanish' | 'haitian_creole' | 'portuguese' | 'french',
  serviceType: 'enrollment_assistance' | 'document_translation' | 'agent_request' | 'cultural_consultation'
) => {
  const languageData = {
    spanish: { label: 'Spanish/Español', community: 'Little Havana, Hialeah', priority: 'high' },
    haitian_creole: { label: 'Haitian Creole/Kreyòl', community: 'Little Haiti, North Miami', priority: 'high' },
    portuguese: { label: 'Portuguese/Português', community: 'Brazilian community', priority: 'medium' },
    french: { label: 'French/Français', community: 'Caribbean community', priority: 'medium' }
  }

  trackMiamiDadeMedigapEvent('bilingual_service_interest', {
    language: language,
    language_label: languageData[language].label,
    primary_community: languageData[language].community,
    service_type: serviceType,
    cultural_competence: true,
    priority_level: languageData[language].priority,
    value: 30
  })
}

/**
 * Track international travel coverage interest
 */
export const trackInternationalTravelInterest = (
  travelType: 'caribbean_cruise' | 'latin_america_visit' | 'extended_travel' | 'home_country_trip',
  destination?: string
) => {
  trackMiamiDadeMedigapEvent('international_travel_coverage_interest', {
    travel_type: travelType,
    destination: destination || 'not_specified',
    emergency_coverage_need: true,
    foreign_travel_benefit: '$50000_lifetime',
    miami_international_community: true,
    value: 35
  })
}

/**
 * Track regional zone exploration within Miami-Dade
 */
export const trackRegionalZoneView = (
  zone: 'downtown_miami_beach' | 'north_miami_hialeah' | 'south_miami_homestead' | 'west_miami_doral' | 'central_miami' | 'coastal_communities',
  city?: string
) => {
  const zoneData = {
    downtown_miami_beach: {
      population: 95000,
      hub: 'Jackson Memorial, Mount Sinai, UM Health',
      cities: 'Miami, Miami Beach, Coral Gables'
    },
    north_miami_hialeah: {
      population: 125000,
      hub: 'North Shore Medical, Hialeah Hospital, Aventura',
      cities: 'Hialeah, North Miami, Aventura'
    },
    south_miami_homestead: {
      population: 78000,
      hub: 'South Miami Hospital, Homestead Hospital',
      cities: 'Kendall, Homestead, Cutler Bay'
    },
    west_miami_doral: {
      population: 88000,
      hub: 'Doral Medical, Kendall Regional',
      cities: 'Doral, Sweetwater, Westchester'
    },
    central_miami: {
      population: 62000,
      hub: 'Mercy Hospital, Larkin Hospital',
      cities: 'Little Havana, Flagami, Allapattah'
    },
    coastal_communities: {
      population: 37000,
      hub: 'Mount Sinai, Aventura Hospital',
      cities: 'Sunny Isles, Bal Harbour, Key Biscayne'
    }
  }

  trackMiamiDadeMedigapEvent('regional_zone_exploration', {
    miami_dade_zone: zone,
    medicare_population: zoneData[zone].population,
    healthcare_hub: zoneData[zone].hub,
    key_cities: city || zoneData[zone].cities,
    urban_healthcare_access: true,
    value: 15
  })
}

/**
 * Track cost comparison analysis
 */
export const trackCostComparisonAnalysis = (
  scenario: 'light_healthcare' | 'active_medical_care' | 'specialist_care',
  comparisonType: 'ma_vs_medigap' | 'plan_g_vs_n' | 'premium_vs_benefits'
) => {
  const scenarioValues = {
    light_healthcare: { ma_cost: 960, medigap_cost: 1896, savings: -936 },
    active_medical_care: { ma_cost: 5200, medigap_cost: 2136, savings: 3064 },
    specialist_care: { ma_cost: 8400, medigap_cost: 2136, savings: 6264 }
  }

  trackMiamiDadeMedigapEvent('cost_comparison_analysis', {
    scenario_type: scenario,
    comparison_type: comparisonType,
    ma_annual_cost: scenarioValues[scenario].ma_cost,
    medigap_annual_cost: scenarioValues[scenario].medigap_cost,
    potential_savings: scenarioValues[scenario].savings,
    high_utilization_market: true,
    value: 25
  })
}

/**
 * Track Medigap plan selection interest
 */
export const trackMedigapPlanInterest = (
  plan: 'plan_g' | 'plan_n' | 'plan_g_hd',
  monthlyPremium: number,
  featureInterest?: string
) => {
  const planDetails = {
    plan_g: { coverage: 'comprehensive', deductible: 240, ideal_for: 'active_seniors_high_utilization' },
    plan_n: { coverage: 'budget_copays', deductible: 240, ideal_for: 'healthy_budget_conscious' },
    plan_g_hd: { coverage: 'catastrophic', deductible: 2800, ideal_for: 'healthy_low_premium' }
  }

  trackMiamiDadeMedigapEvent('medigap_plan_selection', {
    plan_type: plan,
    monthly_premium: monthlyPremium,
    annual_cost: monthlyPremium * 12,
    coverage_level: planDetails[plan].coverage,
    annual_deductible: planDetails[plan].deductible,
    ideal_for_segment: planDetails[plan].ideal_for,
    feature_interest: featureInterest || 'general_inquiry',
    miami_dade_competitive_rate: true,
    value: 35
  })
}

/**
 * Track Miami-Dade quote request
 */
export const trackMiamiDadeQuoteRequest = (
  planType: 'plan_g' | 'plan_n' | 'plan_g_hd' | 'comparison',
  additionalContext?: {
    urgency?: 'immediate' | 'within_week' | 'within_month' | 'researching',
    zone?: string,
    language_preference?: string,
    hospital_network_concern?: string
  }
) => {
  trackMiamiDadeMedigapEvent('miami_dade_quote_request', {
    plan_type: planType,
    urgency: additionalContext?.urgency || 'not_specified',
    miami_dade_zone: additionalContext?.zone || 'not_specified',
    language_preference: additionalContext?.language_preference || 'english',
    hospital_network_priority: additionalContext?.hospital_network_concern || 'any',
    south_florida_largest_market: true,
    high_value_conversion: true,
    value: 55
  })
}

/**
 * Track South Florida specialist consultation request
 */
export const trackSouthFloridaSpecialistConsultation = (
  consultationType: 'phone' | 'in_person' | 'video' | 'bilingual',
  specialistConcern?: {
    concern: string,
    timeframe: string,
    hospital_preference?: string
  }
) => {
  trackMiamiDadeMedigapEvent('south_florida_specialist_consultation', {
    consultation_type: consultationType,
    primary_concern: specialistConcern?.concern || 'general_medigap_inquiry',
    preferred_timeframe: specialistConcern?.timeframe || 'flexible',
    hospital_network_preference: specialistConcern?.hospital_preference || 'no_preference',
    bilingual_spanish_available: true,
    miami_dade_expertise: true,
    highest_value_conversion: true,
    value: 65
  })
}

/**
 * Track snowbird/multi-state flexibility interest
 */
export const trackSnowbirdMultiStateInterest = (
  coverageType: 'dual_state_residence' | 'seasonal_migration' | 'frequent_travel' | 'northern_home',
  secondaryState?: string
) => {
  trackMiamiDadeMedigapEvent('snowbird_multi_state_interest', {
    coverage_type: coverageType,
    primary_residence: 'Miami-Dade County, Florida',
    secondary_state: secondaryState || 'not_specified',
    nationwide_medigap_benefit: true,
    snowbird_population: 'high',
    value: 30
  })
}

/**
 * Track deep engagement with Miami-Dade healthcare content
 */
export const trackDeepUrbanHealthcareEngagement = (
  timeSeconds: number,
  scrollDepth: number,
  sectionsViewed: number,
  hospitalNetworksExplored: string[]
) => {
  const engagementScore = calculateEngagementScore(timeSeconds, scrollDepth, sectionsViewed)
  const leadQuality = getLeadQuality(engagementScore)

  trackMiamiDadeMedigapEvent('deep_urban_healthcare_engagement', {
    time_on_page: timeSeconds,
    scroll_depth_percentage: scrollDepth,
    sections_viewed_count: sectionsViewed,
    hospital_networks_explored: hospitalNetworksExplored.join(','),
    engagement_score: engagementScore,
    lead_quality: leadQuality,
    deep_research_indicator: sectionsViewed >= 5 && scrollDepth >= 75,
    high_intent_signal: engagementScore >= 70,
    value: 50
  })
}

/**
 * Calculate engagement score (0-100)
 */
const calculateEngagementScore = (timeSeconds: number, scrollDepth: number, sectionsViewed: number): number => {
  let score = 0

  // Time component (0-40 points)
  if (timeSeconds >= 60) score += 10
  if (timeSeconds >= 150) score += 15
  if (timeSeconds >= 300) score += 10
  if (timeSeconds >= 600) score += 5

  // Scroll component (0-40 points)
  if (scrollDepth >= 25) score += 10
  if (scrollDepth >= 50) score += 10
  if (scrollDepth >= 75) score += 15
  if (scrollDepth >= 90) score += 5

  // Section viewing component (0-20 points)
  if (sectionsViewed >= 3) score += 5
  if (sectionsViewed >= 5) score += 7
  if (sectionsViewed >= 8) score += 8

  return Math.min(score, 100)
}

/**
 * Get lead quality classification
 */
const getLeadQuality = (score: number): 'hot' | 'warm' | 'engaged' | 'browser' => {
  if (score >= 80) return 'hot'
  if (score >= 60) return 'warm'
  if (score >= 40) return 'engaged'
  return 'browser'
}

/**
 * Track plan comparison interaction
 */
export const trackPlanComparisonInteraction = (
  plansCompared: string[],
  comparisonDuration: number,
  decisionMade?: string
) => {
  trackMiamiDadeMedigapEvent('plan_comparison_interaction', {
    plans_compared: plansCompared.join(' vs '),
    comparison_duration_seconds: comparisonDuration,
    number_of_plans: plansCompared.length,
    decision_made: decisionMade || 'still_researching',
    comparison_tool_engagement: true,
    value: 30
  })
}

/**
 * Track multi-regional exploration
 */
export const trackMultiRegionalExploration = (
  zonesExplored: string[],
  primaryInterestZone?: string
) => {
  trackMiamiDadeMedigapEvent('multi_regional_exploration', {
    zones_explored_count: zonesExplored.length,
    zones_list: zonesExplored.join(','),
    primary_interest_zone: primaryInterestZone || 'undecided',
    comprehensive_research: zonesExplored.length >= 3,
    miami_dade_wide_search: true,
    value: 25
  })
}

/**
 * Initialize Miami-Dade tracking with intersection observers
 */
export const initializeMiamiDadeTracking = () => {
  if (typeof window === 'undefined') return

  // Track page visibility time
  let startTime = Date.now()
  let totalTime = 0
  let maxScroll = 0
  let sectionsViewed = new Set<string>()
  let hospitalNetworksViewed = new Set<string>()

  // Scroll depth tracking
  const trackScroll = () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    )
    maxScroll = Math.max(maxScroll, scrollPercentage)
  }

  // Section view tracking
  const observeSections = () => {
    const sections = document.querySelectorAll('section[class*="mb-12"]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('h2')
            if (heading) {
              sectionsViewed.add(heading.textContent || '')
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => observer.observe(section))
  }

  // Hospital network tracking
  const observeHospitalSections = () => {
    const hospitalElements = document.querySelectorAll('[class*="hospital"], [class*="network"]')
    hospitalElements.forEach((el) => {
      if (el.textContent?.includes('Jackson Health')) hospitalNetworksViewed.add('Jackson Health System')
      if (el.textContent?.includes('Baptist Health')) hospitalNetworksViewed.add('Baptist Health')
      if (el.textContent?.includes('UM Health') || el.textContent?.includes('University of Miami')) hospitalNetworksViewed.add('UM Health')
      if (el.textContent?.includes('Cleveland Clinic')) hospitalNetworksViewed.add('Cleveland Clinic Florida')
      if (el.textContent?.includes('Mount Sinai')) hospitalNetworksViewed.add('Mount Sinai')
    })
  }

  // Track on scroll
  window.addEventListener('scroll', trackScroll)

  // Initialize observers
  observeSections()
  observeHospitalSections()

  // Track exit engagement
  window.addEventListener('beforeunload', () => {
    totalTime = Math.round((Date.now() - startTime) / 1000)
    trackDeepUrbanHealthcareEngagement(
      totalTime,
      maxScroll,
      sectionsViewed.size,
      Array.from(hospitalNetworksViewed)
    )
  })
}

/**
 * Export utilities
 */
export const miamiDadeTrackingUtils = {
  trackHospitalNetworkInterest,
  trackBilingualServiceInterest,
  trackInternationalTravelInterest,
  trackRegionalZoneView,
  trackCostComparisonAnalysis,
  trackMedigapPlanInterest,
  trackMiamiDadeQuoteRequest,
  trackSouthFloridaSpecialistConsultation,
  trackSnowbirdMultiStateInterest,
  trackDeepUrbanHealthcareEngagement,
  trackPlanComparisonInteraction,
  trackMultiRegionalExploration,
  initializeMiamiDadeTracking
}
