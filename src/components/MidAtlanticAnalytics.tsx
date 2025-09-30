'use client';

import { useEffect, useState } from 'react';
import { midAtlanticTracking } from '@/lib/analytics/mid-atlantic-tracking';
import type { MidAtlanticPageMetrics } from '@/lib/analytics/mid-atlantic-tracking';

export default function MidAtlanticAnalytics() {
  const [userLocation, setUserLocation] = useState<{
    state?: string;
    city?: string;
    county?: string;
  }>({});

  useEffect(() => {
    // Track initial page view
    const pageMetrics: MidAtlanticPageMetrics = {
      pageType: 'mid_atlantic_region',
      region: 'mid-atlantic',
      totalBeneficiaries: 42800000,
      underservedBeneficiaries: 2300000,
      statesCovered: 5,
      specialMetrics: {
        // New York
        nyMedigapPenetration: 21,
        nyUnderservedCount: 1200000,
        nyPremiumGuidance: true,

        // Pennsylvania
        paMAPenetrationRange: '74-82%',
        paPlanOptions: 80,
        paUrbanRuralVariation: true,

        // Maryland
        mdMAPenetration: 30,
        mdGrowthPotential: true,
        mdMajorNetworks: ['Johns Hopkins', 'University of Maryland', 'MedStar'],

        // Regional opportunities
        medigapOpportunity: 15.78,
        marketGapSize: '21-82%',
        costSavingsOpportunity: true,
      },
    };

    // Detect user location (you can integrate with a geolocation API)
    detectUserLocation();

    // Track page view
    midAtlanticTracking.trackPageView(pageMetrics, userLocation);

    // Track Facebook Pixel page view
    midAtlanticTracking.trackFacebookPixel('PageView');

    // Setup scroll tracking
    const cleanupScroll = midAtlanticTracking.setupScrollTracking();

    // Track time on page and user journey
    const startTime = Date.now();
    const journeyPath: string[] = ['page_entry'];

    // Intersection Observer for section visibility
    const observeSections = () => {
      const sections = [
        { id: 'region-overview', name: 'region_overview' },
        { id: 'medigap-opportunity', name: 'medigap_opportunity' },
        { id: 'ma-market-analysis', name: 'ma_market_analysis' },
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

      midAtlanticTracking.trackUserJourney(
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
    // Simple location detection from browser (you can enhance with API)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Map timezone to likely state
    const timezoneStateMap: Record<string, string> = {
      'America/New_York': 'NY',
      'America/Philadelphia': 'PA',
      'America/Baltimore': 'MD',
    };

    const detectedState = Object.entries(timezoneStateMap).find(([tz]) =>
      timezone.includes(tz)
    )?.[1];

    if (detectedState) {
      setUserLocation({ state: detectedState });
    }
  };

  const determinePrimaryInterest = (path: string[]): 'medigap' | 'medicare_advantage' | 'state_comparison' | 'cost_savings' => {
    if (path.includes('medigap_opportunity')) return 'medigap';
    if (path.includes('ma_market_analysis')) return 'medicare_advantage';
    if (path.includes('state_value_props')) return 'state_comparison';
    return 'cost_savings';
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
        const location = section?.className.includes('hero') ? 'hero' :
                        section?.className.includes('bg-gradient-to-br') ? 'medigap_opportunity' :
                        section?.className.includes('bg-gray-50') ? 'market_analysis' :
                        section?.className.includes('bg-gradient-to-r') ? 'footer' : 'content';

        midAtlanticTracking.trackCTA('phone_call', location as any);
        midAtlanticTracking.trackFacebookPixel('Lead', {
          contentName: 'Mid-Atlantic Phone Call',
          insuranceType: 'medicare'
        });
      }

      // Contact form tracking
      if (href?.includes('/contact')) {
        const section = link.closest('section');
        const location = section?.className.includes('hero') ? 'hero' :
                        section?.className.includes('bg-gradient-to-r') ? 'footer' : 'content';

        midAtlanticTracking.trackCTA('free_coverage_analysis', location as any);
        midAtlanticTracking.trackFacebookPixel('InitiateCheckout', {
          contentName: 'Mid-Atlantic Coverage Analysis',
          insuranceType: 'medicare'
        });
      }

      // State-specific link tracking
      if (href?.includes('/states/')) {
        const state = href.split('/states/')[1]?.split('/')[0]?.toUpperCase().substring(0, 2) as any;
        if (['NY', 'PA', 'MD', 'NJ', 'DE'].includes(state)) {
          midAtlanticTracking.trackCTA('state_link', 'content', state);
          midAtlanticTracking.trackStateEngagement(state, 'state_link_click');
        }
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
            if (state && ['NY', 'PA', 'MD', 'NJ', 'DE'].includes(state)) {
              midAtlanticTracking.trackStateEngagement(state, 'highlight_view');
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

  // Track Medigap opportunity section
  useEffect(() => {
    const medigapSection = document.querySelector('.medigap-opportunity-section');

    if (!medigapSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeSpent = 0;
            const scrollDepth = 0;

            midAtlanticTracking.trackMedigapOpportunity(
              'section_view',
              undefined,
              { timeSpent, scrollDepth }
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(medigapSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  // This component only handles analytics, no visual rendering
  return null;
}
