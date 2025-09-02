'use client';

import { useEffect } from 'react';
import { initializeEmergencyEvacuationTracking, getEmergencyEvacuationTracker } from '@/lib/emergency-evacuation-analytics';

interface EmergencyEvacuationEvent {
  event_category: 'emergency_evacuation';
  event_action: string;
  event_label?: string;
  value?: number;
  custom_parameters?: {
    coverage_type?: 'basic_evacuation' | 'comprehensive_evacuation' | 'premium_evacuation';
    destination_type?: 'domestic' | 'international' | 'remote_areas' | 'high_risk_zones';
    evacuation_method?: 'air_ambulance' | 'ground_transport' | 'helicopter' | 'commercial_flight';
    medical_condition?: 'emergency_medical' | 'injury' | 'illness' | 'natural_disaster';
    trip_duration?: 'short_term' | 'extended' | 'long_term_travel';
    traveler_age?: 'under_35' | '35_50' | '50_65' | 'over_65';
    coverage_amount?: '50k' | '100k' | '250k' | '500k' | '1m_plus';
    quote_type?: 'instant_quote' | 'custom_quote' | 'agent_consultation';
    user_segment?: 'adventure_traveler' | 'business_traveler' | 'medical_traveler' | 'senior_traveler';
    page_section?: 'hero' | 'coverage_details' | 'benefits' | 'scenarios' | 'faq' | 'testimonials' | 'cta';
    funnel_stage?: 'awareness' | 'consideration' | 'comparison' | 'quote_request' | 'application' | 'purchase';
    content_type?: 'evacuation_guide' | 'cost_calculator' | 'coverage_comparison' | 'emergency_scenarios';
    engagement_quality?: 'high' | 'medium' | 'low';
    device_type?: 'mobile' | 'tablet' | 'desktop';
    traffic_source?: 'organic' | 'paid' | 'direct' | 'referral' | 'social' | 'email';
    session_duration?: 'quick_browse' | 'standard_visit' | 'deep_engagement';
    interaction_depth?: 'surface' | 'moderate' | 'comprehensive';
    contact_method?: 'phone' | 'email' | 'form' | 'chat';
  };
}

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
    dataLayer: any[];
  }
}

class EmergencyEvacuationAnalytics {
  private static instance: EmergencyEvacuationAnalytics;
  private isInitialized = false;

  static getInstance(): EmergencyEvacuationAnalytics {
    if (!EmergencyEvacuationAnalytics.instance) {
      EmergencyEvacuationAnalytics.instance = new EmergencyEvacuationAnalytics();
    }
    return EmergencyEvacuationAnalytics.instance;
  }

  initialize(): void {
    if (this.isInitialized || typeof window === 'undefined') return;

    // Initialize advanced tracking library
    const advancedTracker = initializeEmergencyEvacuationTracking();
    
    this.setupEventListeners();
    this.trackPageView();
    this.monitorUserBehavior();
    
    // Initialize funnel tracking
    advancedTracker.trackFunnelStage('awareness', {
      page_type: 'emergency_evacuation_landing',
      traffic_source: this.getTrafficSource(),
      device_type: this.getDeviceType()
    });
    
    this.isInitialized = true;
    console.log('Emergency Evacuation Analytics with advanced tracking initialized');
  }

  private trackEvent(event: EmergencyEvacuationEvent): void {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('event', event.event_action, {
      event_category: event.event_category,
      event_label: event.event_label,
      value: event.value,
      custom_parameters: event.custom_parameters,
    });

    // Enhanced tracking for high-value actions
    if (['quote_request', 'call_initiated', 'form_submission'].includes(event.event_action)) {
      this.trackConversion(event);
    }
  }

  private trackConversion(event: EmergencyEvacuationEvent): void {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID/emergency_evacuation_leads',
      event_category: 'emergency_evacuation_conversion',
      event_action: event.event_action,
      value: event.value || 150,
      currency: 'USD',
      custom_parameters: event.custom_parameters,
    });
  }

  trackPageView(): void {
    this.trackEvent({
      event_category: 'emergency_evacuation',
      event_action: 'page_view',
      event_label: 'emergency_evacuation_landing',
      custom_parameters: {
        page_section: 'hero',
        funnel_stage: 'awareness',
        device_type: this.getDeviceType(),
        traffic_source: this.getTrafficSource(),
      },
    });
  }

  trackCoverageSelection(coverageType: string, amount: string): void {
    this.trackEvent({
      event_category: 'emergency_evacuation',
      event_action: 'coverage_selected',
      event_label: `${coverageType}_${amount}`,
      value: this.getCoverageValue(coverageType),
      custom_parameters: {
        coverage_type: coverageType as any,
        coverage_amount: amount as any,
        funnel_stage: 'consideration',
        engagement_quality: 'high',
      },
    });
  }

  trackDestinationSelection(destinationType: string): void {
    this.trackEvent({
      event_category: 'emergency_evacuation',
      event_action: 'destination_selected',
      event_label: destinationType,
      custom_parameters: {
        destination_type: destinationType as any,
        funnel_stage: 'consideration',
        interaction_depth: 'moderate',
      },
    });
  }

  trackEvacuationMethodInterest(method: string): void {
    this.trackEvent({
      event_category: 'emergency_evacuation',
      event_action: 'evacuation_method_viewed',
      event_label: method,
      custom_parameters: {
        evacuation_method: method as any,
        content_type: 'evacuation_guide',
        engagement_quality: 'medium',
      },
    });
  }

  trackQuoteRequest(quoteType: string, coverageDetails: any): void {
    this.trackEvent({
      event_category: 'emergency_evacuation',
      event_action: 'quote_request',
      event_label: `${quoteType}_quote`,
      value: 200,
      custom_parameters: {
        quote_type: quoteType as any,
        coverage_type: coverageDetails.coverageType,
        coverage_amount: coverageDetails.amount,
        destination_type: coverageDetails.destination,
        funnel_stage: 'quote_request',
        engagement_quality: 'high',
      },
    });
  }

  trackFormInteraction(formField: string, section: string): void {
    this.trackEvent({
      event_category: 'emergency_evacuation',
      event_action: 'form_interaction',
      event_label: formField,
      custom_parameters: {
        page_section: section as any,
        funnel_stage: 'application',
        interaction_depth: 'comprehensive',
      },
    });
  }

  trackCallInitiation(source: string): void {
    this.trackEvent({
      event_category: 'emergency_evacuation',
      event_action: 'call_initiated',
      event_label: source,
      value: 250,
      custom_parameters: {
        contact_method: 'phone',
        page_section: source as any,
        funnel_stage: 'quote_request',
        engagement_quality: 'high',
      },
    });
  }

  trackScenarioEngagement(scenario: string): void {
    this.trackEvent({
      event_category: 'emergency_evacuation',
      event_action: 'scenario_engaged',
      event_label: scenario,
      custom_parameters: {
        content_type: 'emergency_scenarios',
        medical_condition: scenario as any,
        engagement_quality: 'medium',
        interaction_depth: 'moderate',
      },
    });
  }

  trackCalculatorUsage(calculationType: string, inputs: any): void {
    this.trackEvent({
      event_category: 'emergency_evacuation',
      event_action: 'calculator_used',
      event_label: calculationType,
      value: 75,
      custom_parameters: {
        content_type: 'cost_calculator',
        coverage_amount: inputs.coverageAmount,
        destination_type: inputs.destination,
        trip_duration: inputs.duration,
        funnel_stage: 'consideration',
        engagement_quality: 'high',
      },
    });
  }

  private setupEventListeners(): void {
    if (typeof window === 'undefined') return;

    // Track scroll depth for engagement
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        this.trackEvent({
          event_category: 'emergency_evacuation',
          event_action: 'scroll_depth',
          event_label: `${scrollPercent}%`,
          custom_parameters: {
            engagement_quality: scrollPercent > 75 ? 'high' : scrollPercent > 50 ? 'medium' : 'low',
            session_duration: this.getSessionDuration(),
          },
        });
      }
    });

    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      this.trackEvent({
        event_category: 'emergency_evacuation',
        event_action: 'time_on_page',
        event_label: `${timeOnPage}s`,
        value: timeOnPage,
        custom_parameters: {
          session_duration: timeOnPage > 180 ? 'deep_engagement' : timeOnPage > 60 ? 'standard_visit' : 'quick_browse',
          engagement_quality: timeOnPage > 120 ? 'high' : timeOnPage > 30 ? 'medium' : 'low',
        },
      });
    });
  }

  private monitorUserBehavior(): void {
    // Track clicks on key elements
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      
      if (target.matches('[data-evacuation-cta]')) {
        this.trackEvent({
          event_category: 'emergency_evacuation',
          event_action: 'cta_click',
          event_label: target.getAttribute('data-evacuation-cta') || 'unknown',
          custom_parameters: {
            page_section: 'cta',
            funnel_stage: 'quote_request',
            engagement_quality: 'high',
          },
        });
      }

      if (target.matches('[data-evacuation-coverage]')) {
        const coverageType = target.getAttribute('data-evacuation-coverage') || 'unknown';
        this.trackCoverageSelection(coverageType, 'standard');
      }

      if (target.matches('[data-evacuation-destination]')) {
        const destination = target.getAttribute('data-evacuation-destination') || 'unknown';
        this.trackDestinationSelection(destination);
      }
    });
  }

  private getCoverageValue(coverageType: string): number {
    const values = {
      basic_evacuation: 100,
      comprehensive_evacuation: 175,
      premium_evacuation: 250,
    };
    return values[coverageType as keyof typeof values] || 125;
  }

  private getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    if (typeof window === 'undefined') return 'desktop';
    
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  private getTrafficSource(): 'organic' | 'paid' | 'direct' | 'referral' | 'social' | 'email' {
    if (typeof window === 'undefined') return 'direct';
    
    const referrer = document.referrer;
    if (!referrer) return 'direct';
    
    if (referrer.includes('google.com') || referrer.includes('bing.com') || referrer.includes('yahoo.com')) {
      return 'organic';
    }
    if (referrer.includes('facebook.com') || referrer.includes('twitter.com') || referrer.includes('linkedin.com')) {
      return 'social';
    }
    return 'referral';
  }

  private getSessionDuration(): 'quick_browse' | 'standard_visit' | 'deep_engagement' {
    // This would typically be calculated based on session start time
    // For now, return a default value
    return 'standard_visit';
  }
}

function EmergencyEvacuationAnalyticsComponent() {
  useEffect(() => {
    const analytics = EmergencyEvacuationAnalytics.getInstance();
    analytics.initialize();
  }, []);

  return null;
}

export default EmergencyEvacuationAnalyticsComponent;
export { EmergencyEvacuationAnalytics };