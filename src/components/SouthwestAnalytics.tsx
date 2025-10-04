'use client';

import { useEffect, useState } from 'react';
import { southwestTracking } from '@/lib/analytics/southwest-tracking';
import type { SouthwestPageMetrics } from '@/lib/analytics/southwest-tracking';

export default function SouthwestAnalytics() {
  const [userLocation, setUserLocation] = useState<{
    state?: string;
    city?: string;
    county?: string;
  }>({});

  useEffect(() => {
    // Track initial page view
    const pageMetrics: SouthwestPageMetrics = {
      pageType: 'southwest_region',
      region: 'southwest',
      totalPopulation: 7200000,
      statesCovered: 3,
      specialMetrics: {
        // Arizona
        azMAPenetration: 54,
        azPlanOptions: 80,
        azSnowbirdMarket: true,

        // Nevada
        nvMAPenetration: 56,
        nvPlanOptions: 100,
        nvZeroPremiumAbundance: true,

        // New Mexico
        nmMAPenetration: 53,
        nmPlanOptions: 50,
        nmCulturalCompetency: true,

        // Regional characteristics
        hispanicPopulation: 25,
        bilingualSupport: true,
        desertHealthcare: true,
        snowbirdCoverage: true,
        avgMAPenetration: 54.3,
      },
    };

    // Detect user location
    detectUserLocation();

    // Track page view
    southwestTracking.trackPageView(pageMetrics, userLocation);

    // Track Facebook Pixel page view
    southwestTracking.trackFacebookPixel('PageView');

    // Setup scroll tracking
    const cleanupScroll = southwestTracking.setupScrollTracking();

    // Track time on page and user journey
    const startTime = Date.now();
    const journeyPath: string[] = ['page_entry'];

    // Intersection Observer for section visibility
    const observeSections = () => {
      const sections = [
        { id: 'region-overview', name: 'region_overview' },
        { id: 'ma-leadership', name: 'ma_leadership' },
        { id: 'state-market-analysis', name: 'state_market_analysis' },
        { id: 'state-values', name: 'state_value_props' },
      ];

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const section = sections.find((s) =>
                entry.target.id === s.id ||
                entry.target.closest(`#${s.id}`)
              );
              if (section && !journeyPath.includes(section.name)) {
                journeyPath.push(section.name);
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      // Observe sections
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.observe(element);
        }
      });

      return observer;
    };

    const sectionObserver = observeSections();

    // Track exit intent
    const handleBeforeUnload = () => {
      const timeSpent = (Date.now() - startTime) / 1000;
      const primaryInterest = determinePrimaryInterest(journeyPath);

      southwestTracking.trackUserJourney(
        journeyPath,
        timeSpent,
        primaryInterest,
        'none'
      );
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      if (cleanupScroll) cleanupScroll();
      sectionObserver?.disconnect();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const detectUserLocation = () => {
    // Simple location detection from browser
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Map timezone to likely state
    const timezoneStateMap: Record<string, string> = {
      'America/Phoenix': 'AZ',
      'America/Denver': 'NM', // or CO
      'America/Los_Angeles': 'NV', // or CA
    };

    const detectedState = Object.entries(timezoneStateMap).find(([tz]) =>
      timezone.includes(tz)
    )?.[1];

    if (detectedState) {
      setUserLocation({ state: detectedState });
    }
  };

  const determinePrimaryInterest = (path: string[]): 'ma_plans' | 'bilingual_support' | 'snowbird_coverage' | 'desert_health' | 'plan_comparison' => {
    if (path.includes('ma_leadership')) return 'ma_plans';
    if (path.includes('state_value_props')) return 'bilingual_support';
    if (path.includes('state_market_analysis')) return 'plan_comparison';
    return 'ma_plans';
  };

  // Setup event listeners for CTA tracking
  useEffect(() => {
    const handleCTAClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');

      if (!link) return;

      const href = link.getAttribute('href');
      const text = link.textContent?.toLowerCase() || '';

      // Phone call tracking
      if (href?.startsWith('tel:')) {
        const section = link.closest('section');
        const location = section?.id === 'ma-leadership' ? 'ma_leadership' :
                        section?.id === 'state-market-analysis' ? 'state_analysis' :
                        section?.className.includes('bg-gradient-to-r') ? 'footer' : 'content';

        southwestTracking.trackCTA('phone_call', location as any);
        southwestTracking.trackFacebookPixel('Lead', {
          contentName: 'Southwest Phone Call',
          insuranceType: 'medicare'
        });
      }

      // Bilingual contact tracking
      if (text.includes('hable') || text.includes('español')) {
        southwestTracking.trackCTA('bilingual_contact', 'footer');
        southwestTracking.trackBilingualSupport('bilingual_cta_click', 'spanish', true);
        southwestTracking.trackFacebookPixel('Lead', {
          contentName: 'Southwest Bilingual Contact',
          insuranceType: 'medicare',
          bilingualInterest: true
        });
      }

      // Contact form tracking
      if (href?.includes('/contact')) {
        const section = link.closest('section');
        const location = section?.className.includes('bg-gradient-to-r') ? 'footer' : 'content';

        southwestTracking.trackCTA('free_plan_comparison', location as any);
        southwestTracking.trackFacebookPixel('InitiateCheckout', {
          contentName: 'Southwest Plan Comparison',
          insuranceType: 'medicare'
        });
      }

      // State-specific link tracking
      if (href?.includes('/medicare-advantage/southwest')) {
        const parent = link.closest('[data-state-highlight]');
        const state = parent?.getAttribute('data-state-highlight') as any;

        if (['AZ', 'NV', 'NM'].includes(state)) {
          southwestTracking.trackCTA('state_link', 'state_values', state);
          southwestTracking.trackStateEngagement(state, 'state_link_click');
        }
      }

      // Snowbird coverage tracking
      if (text.includes('snowbird')) {
        southwestTracking.trackSnowbirdCoverage('seasonal_coverage_interest', ['AZ'], 'winter');
      }

      // Desert health tracking
      if (text.includes('desert') || text.includes('health programs')) {
        southwestTracking.trackDesertHealth('specialized_networks', 'click');
      }
    };

    document.addEventListener('click', handleCTAClick);

    return () => {
      document.removeEventListener('click', handleCTAClick);
    };
  }, []);

  // Track state-specific section views
  useEffect(() => {
    const stateHighlights = document.querySelectorAll('[data-state-highlight]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const state = entry.target.getAttribute('data-state-highlight') as any;
            if (state && ['AZ', 'NV', 'NM'].includes(state)) {
              southwestTracking.trackStateEngagement(state, 'highlight_view');
            }
          }
        });
      },
      { threshold: 0.7 }
    );

    stateHighlights.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Track MA Leadership section
  useEffect(() => {
    const maSection = document.getElementById('ma-leadership');

    if (!maSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeSpent = 0;
            const scrollDepth = 0;

            southwestTracking.trackMALeadership(
              'section_view',
              undefined,
              { timeSpent, scrollDepth }
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(maSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  // This component only handles analytics, no visual rendering
  return null;
}
