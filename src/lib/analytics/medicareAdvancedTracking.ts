// Advanced Medicare Advantage Landing Page Analytics Tracking
// Comprehensive tracking for 15 specialized Medicare and health insurance landing pages

export interface MedicarePageMetrics {
  pageType: 'diverse_communities' | 'transportation_benefits' | 'safety_net_provider' | 'county_market' | 'tech_innovation' | 'healthcare_comparison' | 'island_healthcare' | 'hawaii_county' | 'bexar_county_texas' | 'orange_county' | 'miami_dade_county' | 'retirement_planning' | 'honolulu_county' | 'hidden_benefits_northern_virginia' | 'short_term_health_insurance';
  totalBeneficiaries?: number;
  availablePlans?: number;
  specialMetrics?: {
    // Original 7 pages
    diversePopulationRate?: number;
    multilingualPlans?: number;
    transportationPlans?: number;
    averageTransportationBenefit?: number;
    safetyNetPopulation?: number;
    gradyNetworkPlans?: number;
    zeroPremiumPlans?: number;
    maPenetrationRate?: number;
    techEnabledPlans?: number;
    techAdoptionRate?: number;
    healthcareSystemCount?: number;
    islandChallenges?: number;
    // New 8 pages
    // Hawaii County (Big Island)
    telemedicineServices?: boolean;
    ruralHealthcareAccess?: number;
    interIslandTransportation?: boolean;
    // Bexar County Texas (San Antonio)
    hispanicPopulation?: number;
    bilingualSupport?: boolean;
    borderHealthcare?: boolean;
    // Orange County (Premium market)
    medianIncome?: number;
    premiumPlans?: number;
    highEndNetworks?: number;
    // Miami-Dade County
    multilingualServices?: number;
    internationalPatients?: boolean;
    tropicalMedicine?: boolean;
    // Retirement Planning
    medicareTransitionPlanning?: boolean;
    annuityPlanning?: boolean;
    healthcareCostProjections?: boolean;
    // Honolulu County (Urban Hawaii)
    urbanHealthcareAccess?: boolean;
    multiculturalPrograms?: number;
    publicTransportIntegration?: boolean;
    // Hidden Benefits Northern Virginia
    exclusiveBenefits?: number;
    federalEmployeePrograms?: boolean;
    premiumWellnessPrograms?: boolean;
    // Short-term Health Insurance
    cobralAlternative?: boolean;
    temporaryCoverage?: boolean;
    gapInsurance?: boolean;
  };
}

export interface UserEngagementMetrics {
  scrollDepth: number;
  timeOnPage: number;
  ctaClicks: number;
  phoneCallClicks: number;
  internalLinkClicks: number;
}

export interface ConversionTrackingData {
  leadSource: string;
  pageCategory: string;
  userIntent: 'comparison' | 'information' | 'enrollment' | 'specialist_search';
  geographicFocus: string;
  healthcareSystem?: string;
}

// Enhanced tracking function for Medicare Advantage pages
export function trackMedicareAdvancedPageView(
  pageTitle: string,
  pageMetrics: MedicarePageMetrics,
  geographicData: {
    city: string;
    state: string;
    county?: string;
    region?: string;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'medicare_advantage_page_view', {
      event_category: 'medicare_landing_pages',
      event_label: pageMetrics.pageType,
      custom_parameters: {
        page_title: pageTitle,
        page_type: pageMetrics.pageType,
        total_beneficiaries: pageMetrics.totalBeneficiaries,
        available_plans: pageMetrics.availablePlans,
        city: geographicData.city,
        state: geographicData.state,
        county: geographicData.county || '',
        region: geographicData.region || '',
        timestamp: new Date().toISOString(),
        // Specialized metrics based on page type
        ...(pageMetrics.specialMetrics || {})
      }
    });

    // Track page type specific metrics
    trackPageTypeSpecificMetrics(pageMetrics.pageType, pageMetrics.specialMetrics || {});
  }
}

function trackPageTypeSpecificMetrics(pageType: string, specialMetrics: any) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    switch (pageType) {
      case 'diverse_communities':
        (window as any).gtag('event', 'diverse_communities_metrics', {
          event_category: 'medicare_specialized',
          diverse_population_rate: specialMetrics.diversePopulationRate,
          multilingual_plans: specialMetrics.multilingualPlans,
          focus_area: 'cultural_competency'
        });
        break;
      
      case 'transportation_benefits':
        (window as any).gtag('event', 'transportation_benefits_metrics', {
          event_category: 'medicare_specialized',
          transportation_plans: specialMetrics.transportationPlans,
          average_benefit: specialMetrics.averageTransportationBenefit,
          focus_area: 'mobility_assistance'
        });
        break;
      
      case 'safety_net_provider':
        (window as any).gtag('event', 'safety_net_metrics', {
          event_category: 'medicare_specialized',
          safety_net_population: specialMetrics.safetyNetPopulation,
          grady_network_plans: specialMetrics.gradyNetworkPlans,
          focus_area: 'community_healthcare'
        });
        break;
      
      case 'tech_innovation':
        (window as any).gtag('event', 'tech_innovation_metrics', {
          event_category: 'medicare_specialized',
          tech_enabled_plans: specialMetrics.techEnabledPlans,
          tech_adoption_rate: specialMetrics.techAdoptionRate,
          focus_area: 'digital_health'
        });
        break;
      
      case 'healthcare_comparison':
        (window as any).gtag('event', 'healthcare_comparison_metrics', {
          event_category: 'medicare_specialized',
          healthcare_systems: specialMetrics.healthcareSystemCount,
          focus_area: 'system_comparison'
        });
        break;
      
      case 'island_healthcare':
        (window as any).gtag('event', 'island_healthcare_metrics', {
          event_category: 'medicare_specialized',
          island_challenges: specialMetrics.islandChallenges,
          focus_area: 'geographic_specialty'
        });
        break;
      
      // New 8 landing pages
      case 'hawaii_county':
        (window as any).gtag('event', 'hawaii_county_metrics', {
          event_category: 'medicare_geographic',
          telemedicine_services: specialMetrics.telemedicineServices,
          rural_healthcare_access: specialMetrics.ruralHealthcareAccess,
          inter_island_transportation: specialMetrics.interIslandTransportation,
          focus_area: 'rural_island_healthcare'
        });
        break;

      case 'bexar_county_texas':
        (window as any).gtag('event', 'bexar_county_metrics', {
          event_category: 'medicare_geographic',
          hispanic_population: specialMetrics.hispanicPopulation,
          bilingual_support: specialMetrics.bilingualSupport,
          border_healthcare: specialMetrics.borderHealthcare,
          focus_area: 'hispanic_community_healthcare'
        });
        break;

      case 'orange_county':
        (window as any).gtag('event', 'orange_county_metrics', {
          event_category: 'medicare_geographic',
          median_income: specialMetrics.medianIncome,
          premium_plans: specialMetrics.premiumPlans,
          high_end_networks: specialMetrics.highEndNetworks,
          focus_area: 'premium_healthcare_market'
        });
        break;

      case 'miami_dade_county':
        (window as any).gtag('event', 'miami_dade_metrics', {
          event_category: 'medicare_geographic',
          multilingual_services: specialMetrics.multilingualServices,
          international_patients: specialMetrics.internationalPatients,
          tropical_medicine: specialMetrics.tropicalMedicine,
          focus_area: 'multicultural_urban_healthcare'
        });
        break;

      case 'retirement_planning':
        (window as any).gtag('event', 'retirement_planning_metrics', {
          event_category: 'medicare_services',
          medicare_transition_planning: specialMetrics.medicareTransitionPlanning,
          annuity_planning: specialMetrics.annuityPlanning,
          healthcare_cost_projections: specialMetrics.healthcareCostProjections,
          focus_area: 'retirement_healthcare_planning'
        });
        break;

      case 'honolulu_county':
        (window as any).gtag('event', 'honolulu_county_metrics', {
          event_category: 'medicare_geographic',
          urban_healthcare_access: specialMetrics.urbanHealthcareAccess,
          multicultural_programs: specialMetrics.multiculturalPrograms,
          public_transport_integration: specialMetrics.publicTransportIntegration,
          focus_area: 'urban_island_healthcare'
        });
        break;

      case 'hidden_benefits_northern_virginia':
        (window as any).gtag('event', 'hidden_benefits_metrics', {
          event_category: 'medicare_specialized',
          exclusive_benefits: specialMetrics.exclusiveBenefits,
          federal_employee_programs: specialMetrics.federalEmployeePrograms,
          premium_wellness_programs: specialMetrics.premiumWellnessPrograms,
          focus_area: 'exclusive_medicare_benefits'
        });
        break;

      case 'short_term_health_insurance':
        (window as any).gtag('event', 'short_term_insurance_metrics', {
          event_category: 'health_insurance_alternative',
          cobra_alternative: specialMetrics.cobralAlternative,
          temporary_coverage: specialMetrics.temporaryCoverage,
          gap_insurance: specialMetrics.gapInsurance,
          focus_area: 'temporary_health_coverage'
        });
        break;
    }
  }
}

// Enhanced CTA tracking for Medicare pages
export function trackMedicareAdvancedCTA(
  ctaType: 'plan_comparison' | 'contact_form' | 'phone_call' | 'newsletter_signup',
  ctaLocation: 'hero' | 'content' | 'footer' | 'sidebar',
  pageType: string,
  destination?: string
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'medicare_cta_click', {
      event_category: 'conversion_tracking',
      event_label: `${ctaType}_${pageType}`,
      custom_parameters: {
        cta_type: ctaType,
        cta_location: ctaLocation,
        page_type: pageType,
        destination: destination || '',
        timestamp: new Date().toISOString()
      }
    });

    // Track conversion funnel progress
    trackConversionFunnelStep(ctaType, pageType);
  }
}

function trackConversionFunnelStep(ctaType: string, pageType: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    let funnelStep = '';
    
    switch (ctaType) {
      case 'plan_comparison':
        funnelStep = 'comparison_initiated';
        break;
      case 'contact_form':
        funnelStep = 'contact_initiated';
        break;
      case 'phone_call':
        funnelStep = 'phone_contact_initiated';
        break;
      case 'newsletter_signup':
        funnelStep = 'lead_nurture_initiated';
        break;
    }

    (window as any).gtag('event', 'conversion_funnel_step', {
      event_category: 'funnel_tracking',
      event_label: funnelStep,
      custom_parameters: {
        page_type: pageType,
        funnel_step: funnelStep,
        timestamp: new Date().toISOString()
      }
    });
  }
}

// Enhanced scroll tracking for Medicare pages
export function setupMedicareAdvancedScrollTracking(
  pageType: string,
  contentMilestones: Array<{
    percentage: number;
    milestone: string;
  }>
) {
  if (typeof window === 'undefined') return;

  let scrollDepth = 0;
  let timeOnPage = Date.now();
  let trackedMilestones = new Set<number>();
  
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentDepth = Math.round((scrollTop / documentHeight) * 100);
    
    if (currentDepth > scrollDepth) {
      scrollDepth = currentDepth;
      
      // Track content milestones
      contentMilestones.forEach(milestone => {
        if (scrollDepth >= milestone.percentage && !trackedMilestones.has(milestone.percentage)) {
          trackedMilestones.add(milestone.percentage);
          
          if ((window as any).gtag) {
            (window as any).gtag('event', 'content_milestone_reached', {
              event_category: 'engagement',
              event_label: `${pageType}_${milestone.milestone}`,
              custom_parameters: {
                page_type: pageType,
                milestone: milestone.milestone,
                scroll_percentage: milestone.percentage,
                time_to_milestone: Date.now() - timeOnPage,
                timestamp: new Date().toISOString()
              }
            });
          }
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
    
    // Track final engagement metrics
    const finalTimeOnPage = Date.now() - timeOnPage;
    if (finalTimeOnPage > 10000 && (window as any).gtag) { // Only track if more than 10 seconds
      (window as any).gtag('event', 'medicare_page_engagement_complete', {
        event_category: 'engagement',
        event_label: pageType,
        value: Math.round(finalTimeOnPage / 1000),
        custom_parameters: {
          page_type: pageType,
          final_scroll_depth: scrollDepth,
          time_on_page_seconds: Math.round(finalTimeOnPage / 1000),
          engagement_quality: finalTimeOnPage > 60000 ? 'high' : finalTimeOnPage > 30000 ? 'medium' : 'low',
          timestamp: new Date().toISOString()
        }
      });
    }
  };
}

// Track internal link navigation for Medicare pages
export function trackMedicareInternalNavigation(
  fromPage: string,
  toPage: string,
  linkText: string,
  linkCategory: 'related_plan' | 'geographic_comparison' | 'healthcare_system' | 'resource_link'
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'medicare_internal_navigation', {
      event_category: 'internal_linking',
      event_label: `${fromPage}_to_${toPage}`,
      custom_parameters: {
        from_page: fromPage,
        to_page: toPage,
        link_text: linkText,
        link_category: linkCategory,
        timestamp: new Date().toISOString()
      }
    });
  }
}

// Performance monitoring for Medicare pages
export function trackMedicarePagePerformance(
  pageType: string,
  performanceMetrics: {
    loadTime: number;
    timeToInteractive: number;
    largestContentfulPaint: number;
  }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'medicare_page_performance', {
      event_category: 'performance',
      event_label: pageType,
      custom_parameters: {
        page_type: pageType,
        load_time: performanceMetrics.loadTime,
        time_to_interactive: performanceMetrics.timeToInteractive,
        largest_contentful_paint: performanceMetrics.largestContentfulPaint,
        timestamp: new Date().toISOString()
      }
    });
  }
}

// A/B testing support for Medicare pages
export function trackMedicareABTest(
  testName: string,
  variant: string,
  pageType: string,
  userAction?: string
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'medicare_ab_test', {
      event_category: 'ab_testing',
      event_label: `${testName}_${variant}`,
      custom_parameters: {
        test_name: testName,
        variant: variant,
        page_type: pageType,
        user_action: userAction || 'page_view',
        timestamp: new Date().toISOString()
      }
    });
  }
}