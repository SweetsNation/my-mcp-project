/**
 * Advanced Analytics Tracking Configuration
 * Inova vs Kaiser Permanente Medicare Advantage Fairfax County Blog Post
 *
 * Purpose: Track user engagement, conversion events, and performance metrics
 * for the hospital network comparison blog post targeting Fairfax County seniors
 */

import { event } from '../analytics';

// Page-specific event types
export type InovaKaiserEventType =
  | 'network_comparison_view'
  | 'hospital_quality_table_interaction'
  | 'cost_comparison_analysis'
  | 'decision_framework_engagement'
  | 'network_switching_guide_view'
  | 'geographic_coverage_search'
  | 'specialist_access_comparison'
  | 'inova_network_exploration'
  | 'kaiser_network_exploration'
  | 'cta_consultation_click'
  | 'cta_view_plans_click'
  | 'phone_call_initiated'
  | 'related_county_link_click'
  | 'medicare_supplement_alternative_click'
  | 'table_of_contents_navigation'
  | 'deep_content_engagement'
  | 'comparison_table_view'
  | 'enrollment_period_guide_click';

// Event tracking function with enhanced context
export const trackInovaKaiserEvent = (
  eventType: InovaKaiserEventType,
  eventData?: Record<string, any>
) => {
  try {
    event(eventType, {
      event_category: 'Hospital Network Comparison',
      event_label: 'Inova vs Kaiser Fairfax',
      page_type: 'blog_comparison',
      county: 'Fairfax County',
      state: 'Virginia',
      hospital_network_1: 'Inova Health System',
      hospital_network_2: 'Kaiser Permanente',
      content_type: 'long_form_comparison',
      word_count: 3800,
      estimated_read_time: 19,
      ...eventData
    });
  } catch (error) {
    console.warn('Failed to track Inova vs Kaiser event:', error);
  }
};

// Section-specific tracking for detailed engagement analysis
export const trackSectionView = (sectionName: string, sectionId: string) => {
  trackInovaKaiserEvent('table_of_contents_navigation', {
    section_name: sectionName,
    section_id: sectionId,
    interaction_type: 'section_view'
  });
};

// Hospital network preference tracking
export const trackNetworkPreference = (
  networkChoice: 'inova' | 'kaiser' | 'both' | 'undecided',
  reason?: string
) => {
  trackInovaKaiserEvent('network_comparison_view', {
    network_preference: networkChoice,
    preference_reason: reason || 'not_specified',
    value: 35 // Mid-funnel conversion value
  });
};

// Cost comparison table interaction
export const trackCostComparisonInteraction = (
  serviceType: string,
  inovaVsKaiser: 'comparing' | 'inova_focused' | 'kaiser_focused'
) => {
  trackInovaKaiserEvent('cost_comparison_analysis', {
    service_type: serviceType,
    comparison_focus: inovaVsKaiser,
    table_interaction: true,
    value: 20
  });
};

// Quality metrics engagement
export const trackQualityMetricsView = (
  qualityAspect: 'cms_ratings' | 'ncqa_ratings' | 'quality_highlights' | 'specialties',
  hospitalSystem: 'inova' | 'kaiser'
) => {
  trackInovaKaiserEvent('hospital_quality_table_interaction', {
    quality_aspect: qualityAspect,
    hospital_system: hospitalSystem,
    engagement_type: 'quality_research',
    value: 25
  });
};

// Decision framework engagement
export const trackDecisionFramework = (
  frameworkSection: 'choose_inova' | 'choose_kaiser' | 'both_networks' | 'medicare_supplement',
  timeSpent?: number
) => {
  trackInovaKaiserEvent('decision_framework_engagement', {
    framework_section: frameworkSection,
    time_spent_seconds: timeSpent,
    engagement_depth: 'high',
    value: 40 // High-value engagement
  });
};

// Geographic coverage interaction
export const trackGeographicCoverage = (
  location: string,
  convenientNetwork: 'inova' | 'kaiser' | 'both'
) => {
  trackInovaKaiserEvent('geographic_coverage_search', {
    location_searched: location,
    convenient_network: convenientNetwork,
    fairfax_subregion: location
  });
};

// Network switching guide engagement
export const trackNetworkSwitchingGuide = (
  switchingFrom: 'inova' | 'kaiser' | 'other',
  switchingTo: 'inova' | 'kaiser' | 'supplement',
  enrollmentPeriod: 'aep' | 'ma_oep' | 'sep'
) => {
  trackInovaKaiserEvent('network_switching_guide_view', {
    switching_from: switchingFrom,
    switching_to: switchingTo,
    enrollment_period: enrollmentPeriod,
    high_intent: true,
    value: 50 // High-intent conversion signal
  });
};

// CTA tracking for consultation requests
export const trackConsultationCTA = (
  ctaLocation: 'hero' | 'mid_content' | 'footer' | 'cta_section',
  networkContext?: 'inova' | 'kaiser' | 'both'
) => {
  trackInovaKaiserEvent('cta_consultation_click', {
    cta_location: ctaLocation,
    network_context: networkContext || 'general',
    conversion_type: 'consultation_request',
    value: 65 // High-value conversion
  });
};

// CTA tracking for plan viewing
export const trackViewPlansCTA = (
  ctaLocation: 'hero' | 'mid_content' | 'footer' | 'cta_section',
  countyDestination: 'fairfax' | 'loudoun' | 'prince_william' | 'arlington'
) => {
  trackInovaKaiserEvent('cta_view_plans_click', {
    cta_location: ctaLocation,
    destination_county: countyDestination,
    conversion_type: 'plan_comparison',
    value: 45
  });
};

// Phone call tracking with source context
export const trackPhoneCallInitiated = (
  callSource: 'hero_cta' | 'footer_cta' | 'inline_text' | 'comparison_section',
  networkPreference?: 'inova' | 'kaiser' | 'undecided'
) => {
  trackInovaKaiserEvent('phone_call_initiated', {
    call_source: callSource,
    network_preference: networkPreference || 'undecided',
    phone_number: '331-343-2584',
    conversion_type: 'phone_call',
    high_intent: true,
    value: 90 // Very high-value conversion for Fairfax County
  });
};

// Related resource link tracking
export const trackRelatedResourceClick = (
  resourceType: 'county_page' | 'blog_post' | 'guide' | 'medicare_supplement',
  resourceName: string,
  destinationUrl: string
) => {
  trackInovaKaiserEvent('related_county_link_click', {
    resource_type: resourceType,
    resource_name: resourceName,
    destination_url: destinationUrl,
    engagement_type: 'deep_research'
  });
};

// Medicare Supplement alternative exploration
export const trackMedicareSupplementAlternative = (
  contextReason: 'network_restrictions' | 'flexibility' | 'both_systems' | 'out_of_area'
) => {
  trackInovaKaiserEvent('medicare_supplement_alternative_click', {
    context_reason: contextReason,
    alternative_interest: 'high',
    conversion_signal: 'supplement_consideration',
    value: 55
  });
};

// Comparison table interaction tracking
export const trackComparisonTableView = (
  tableType: 'network_model' | 'cost_comparison' | 'hospital_facilities' | 'specialist_access',
  interactionDepth: 'viewed' | 'analyzed' | 'exported'
) => {
  trackInovaKaiserEvent('comparison_table_view', {
    table_type: tableType,
    interaction_depth: interactionDepth,
    engagement_quality: interactionDepth === 'analyzed' ? 'high' : 'medium',
    value: interactionDepth === 'analyzed' ? 30 : 15
  });
};

// Deep content engagement tracking (90%+ scroll depth)
export const trackDeepContentEngagement = (
  timeOnPage: number,
  scrollDepth: number,
  sectionsViewed: number
) => {
  trackInovaKaiserEvent('deep_content_engagement', {
    time_on_page_seconds: timeOnPage,
    scroll_depth_percentage: scrollDepth,
    sections_viewed: sectionsViewed,
    engagement_score: calculateEngagementScore(timeOnPage, scrollDepth, sectionsViewed),
    high_quality_lead: timeOnPage >= 140 && scrollDepth >= 75,
    value: timeOnPage >= 140 && scrollDepth >= 75 ? 60 : 30
  });
};

// Calculate engagement score for lead qualification
const calculateEngagementScore = (
  timeSeconds: number,
  scrollDepth: number,
  sectionsViewed: number
): number => {
  let score = 0;

  // Time component (0-40 points)
  if (timeSeconds >= 60) score += 10;
  if (timeSeconds >= 140) score += 15; // Content engagement threshold
  if (timeSeconds >= 300) score += 10;
  if (timeSeconds >= 600) score += 5;

  // Scroll component (0-40 points)
  if (scrollDepth >= 25) score += 10;
  if (scrollDepth >= 50) score += 10;
  if (scrollDepth >= 75) score += 15;
  if (scrollDepth >= 90) score += 5;

  // Section viewing component (0-20 points)
  if (sectionsViewed >= 3) score += 5;
  if (sectionsViewed >= 5) score += 7;
  if (sectionsViewed >= 8) score += 8;

  return Math.min(score, 100); // Cap at 100
};

// Hospital-specific exploration tracking
export const trackHospitalExploration = (
  hospitalSystem: 'inova' | 'kaiser',
  explorationDepth: 'facilities' | 'specialists' | 'quality' | 'cost' | 'geographic_reach'
) => {
  const eventType = hospitalSystem === 'inova' ?
    'inova_network_exploration' :
    'kaiser_network_exploration';

  trackInovaKaiserEvent(eventType as InovaKaiserEventType, {
    hospital_system: hospitalSystem,
    exploration_aspect: explorationDepth,
    research_depth: 'detailed',
    value: 25
  });
};

// Enrollment period guide click tracking
export const trackEnrollmentPeriodGuideClick = (
  enrollmentPeriod: 'aep' | 'ma_oep' | 'sep',
  currentNetwork?: 'inova' | 'kaiser' | 'other'
) => {
  trackInovaKaiserEvent('enrollment_period_guide_click', {
    enrollment_period: enrollmentPeriod,
    current_network: currentNetwork || 'unknown',
    switching_interest: true,
    value: 40
  });
};

// Initialize page-specific tracking on load
export const initializeInovaKaiserTracking = () => {
  if (typeof window === 'undefined') return;

  // Track initial page context
  trackInovaKaiserEvent('network_comparison_view', {
    page_load: true,
    referrer: document.referrer,
    viewport_width: window.innerWidth,
    device_type: window.innerWidth < 768 ? 'mobile' : 'desktop'
  });

  // Set up intersection observer for section tracking
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          trackSectionView(
            entry.target.textContent?.substring(0, 50) || 'Section',
            entry.target.id
          );
        }
      });
    },
    { threshold: 0.5 } // Track when 50% of section is visible
  );

  // Observe all major sections
  document.querySelectorAll('section[id], h2[id]').forEach((section) => {
    sectionObserver.observe(section);
  });

  // Track table interactions
  document.querySelectorAll('table').forEach((table) => {
    table.addEventListener('mouseenter', () => {
      const tableCaption = table.querySelector('caption, thead')?.textContent || 'Comparison Table';
      trackComparisonTableView('network_model', 'viewed');
    });
  });

  // Track outbound link clicks
  document.querySelectorAll('a[href^="http"], a[href^="/"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = (e.currentTarget as HTMLAnchorElement).href;
      const text = (e.currentTarget as HTMLAnchorElement).textContent || '';

      if (href.includes('medicare-supplement') || text.toLowerCase().includes('supplement')) {
        trackMedicareSupplementAlternative('flexibility');
      } else if (href.includes('medicare-advantage') && !href.includes('inova-vs-kaiser')) {
        trackRelatedResourceClick('county_page', text, href);
      }
    });
  });
};

// Export tracking utilities
export const InovaKaiserTracking = {
  trackNetworkPreference,
  trackCostComparisonInteraction,
  trackQualityMetricsView,
  trackDecisionFramework,
  trackGeographicCoverage,
  trackNetworkSwitchingGuide,
  trackConsultationCTA,
  trackViewPlansCTA,
  trackPhoneCallInitiated,
  trackRelatedResourceClick,
  trackMedicareSupplementAlternative,
  trackComparisonTableView,
  trackDeepContentEngagement,
  trackHospitalExploration,
  trackEnrollmentPeriodGuideClick,
  initializeInovaKaiserTracking
};
