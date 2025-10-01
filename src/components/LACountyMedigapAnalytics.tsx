'use client';

import { useEffect, useRef, useState } from 'react';
import {
  laCountyMedigapTracking,
  type LACountyMedigapPageMetrics
} from '@/lib/analytics/la-county-medigap-tracking';

export default function LACountyMedigapAnalytics() {
  const [scrollTracked, setScrollTracked] = useState({
    '25': false,
    '40': false,
    '60': false,
    '80': false,
    '100': false
  });
  const journeyStartTime = useRef<number>(Date.now());
  const sectionsViewed = useRef<Set<string>>(new Set());
  const ctasInteracted = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Detect user location (basic geolocation via timezone/locale)
    const detectLocation = () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const isLACounty = timezone === 'America/Los_Angeles'; // Basic detection

      return {
        city: '', // Would need API for accurate city detection
        zipCode: '',
        subregion: ''
      };
    };

    const userLocation = detectLocation();

    // Page metrics for LA County
    const pageMetrics: LACountyMedigapPageMetrics = {
      pageType: 'la_county_medigap',
      county: 'los-angeles',
      state: 'california',
      totalBeneficiaries: 1800000, // 1.8M
      medigapPenetration: 25, // 25%
      underservedBeneficiaries: 1350000, // 1.35M
      plansAvailable: 67,
      specialMetrics: {
        communityRating: true,
        communityRatingAdvantage: 'age_independent_pricing_vs_47_states',
        hispanicPopulation: 48,
        asianPopulation: 15,
        multilingualSupport: ['spanish', 'mandarin', 'korean', 'armenian', 'vietnamese', 'english'],
        majorNetworks: ['UCLA Health', 'Cedars-Sinai', 'USC Keck Medicine', 'Kaiser', 'Providence'],
        worldClassFacilities: 5,
        marketGapPercentage: 75, // 75% without Medigap
        opportunityValueBillions: 15.78,
        lowPenetrationAdvantage: true,
        citiesCovered: 88,
        subregionsCovered: 8,
        medigapPlanTypes: 11,
        mostPopularPlan: 'Plan G',
        budgetFriendlyPlan: 'Plan N',
        lowPremiumPlan: 'HD Plan G'
      }
    };

    // Track initial page view
    laCountyMedigapTracking.trackPageView(pageMetrics, userLocation);

    // Track user journey arrival
    laCountyMedigapTracking.trackUserJourney('arrival');
  }, []);

  useEffect(() => {
    // Scroll depth tracking
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // Track milestones
      if (scrollPercentage >= 25 && !scrollTracked['25']) {
        laCountyMedigapTracking.trackScrollDepth(25);
        setScrollTracked(prev => ({ ...prev, '25': true }));
      }
      if (scrollPercentage >= 40 && !scrollTracked['40']) {
        laCountyMedigapTracking.trackScrollDepth(40);
        setScrollTracked(prev => ({ ...prev, '40': true }));
        // User engaged in education
        laCountyMedigapTracking.trackUserJourney('education', {
          timeSpent: Math.round((Date.now() - journeyStartTime.current) / 1000),
          sectionsViewed: Array.from(sectionsViewed.current)
        });
      }
      if (scrollPercentage >= 60 && !scrollTracked['60']) {
        laCountyMedigapTracking.trackScrollDepth(60);
        setScrollTracked(prev => ({ ...prev, '60': true }));
      }
      if (scrollPercentage >= 80 && !scrollTracked['80']) {
        laCountyMedigapTracking.trackScrollDepth(80);
        setScrollTracked(prev => ({ ...prev, '80': true }));
        // User in comparison phase
        laCountyMedigapTracking.trackUserJourney('comparison', {
          timeSpent: Math.round((Date.now() - journeyStartTime.current) / 1000),
          sectionsViewed: Array.from(sectionsViewed.current),
          ctasInteracted: Array.from(ctasInteracted.current)
        });
      }
      if (scrollPercentage >= 100 && !scrollTracked['100']) {
        laCountyMedigapTracking.trackScrollDepth(100);
        setScrollTracked(prev => ({ ...prev, '100': true }));
        // User reached decision phase
        laCountyMedigapTracking.trackUserJourney('decision', {
          timeSpent: Math.round((Date.now() - journeyStartTime.current) / 1000),
          sectionsViewed: Array.from(sectionsViewed.current),
          ctasInteracted: Array.from(ctasInteracted.current)
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTracked]);

  useEffect(() => {
    // Track CTA clicks
    const handleCTAClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');

      if (!link) return;

      const href = link.getAttribute('href') || '';
      const text = link.textContent || '';

      // Identify CTA type
      if (href.includes('tel:') || text.includes('Call')) {
        const section = getSectionFromElement(link);
        laCountyMedigapTracking.trackCTA('phone_call', { section });
        ctasInteracted.current.add('phone_call');
      } else if (href.includes('/contact')) {
        const section = getSectionFromElement(link);
        laCountyMedigapTracking.trackCTA('contact_form', { section });
        ctasInteracted.current.add('contact_form');
      } else if (href.includes('/medicare-comparison-tool') || href.includes('/medicare-plan-finder')) {
        const section = getSectionFromElement(link);
        laCountyMedigapTracking.trackCTA('plan_comparison', { section });
        ctasInteracted.current.add('plan_comparison');
      } else if (href.includes('/medicare-cost-calculator')) {
        const section = getSectionFromElement(link);
        laCountyMedigapTracking.trackCTA('cost_calculator', { section });
        ctasInteracted.current.add('cost_calculator');
      }

      // Track language-specific CTAs
      if (text.includes('Español') || text.includes('Hable') || href.includes('hispanic-latino')) {
        laCountyMedigapTracking.trackCTA('language_specific', {
          section: getSectionFromElement(link),
          language: 'spanish'
        });
        laCountyMedigapTracking.trackBilingualEngagement('spanish', 'cta_click');
      } else if (text.includes('中文') || text.includes('我們說')) {
        laCountyMedigapTracking.trackBilingualEngagement('mandarin', 'cta_click');
      } else if (text.includes('한국어')) {
        laCountyMedigapTracking.trackBilingualEngagement('korean', 'cta_click');
      } else if (text.includes('հայերեն')) {
        laCountyMedigapTracking.trackBilingualEngagement('armenian', 'cta_click');
      } else if (text.includes('tiếng Việt')) {
        laCountyMedigapTracking.trackBilingualEngagement('vietnamese', 'cta_click');
      }

      // Track plan type interest
      if (href.includes('plan-g') || text.includes('Plan G')) {
        laCountyMedigapTracking.trackPlanTypeInterest('plan_g', 'click');
      } else if (text.includes('Plan N')) {
        laCountyMedigapTracking.trackPlanTypeInterest('plan_n', 'click');
      } else if (text.includes('High-Deductible') || text.includes('HD Plan')) {
        laCountyMedigapTracking.trackPlanTypeInterest('hd_plan_g', 'click');
      }

      // Track community rating education clicks
      if (text.includes('Community Rating') || text.includes('CA Community')) {
        laCountyMedigapTracking.trackCommunityRatingEducation('learn_more_click');
      }
    };

    document.addEventListener('click', handleCTAClick);
    return () => document.removeEventListener('click', handleCTAClick);
  }, []);

  useEffect(() => {
    // Track section visibility with Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          if (sectionId && !sectionsViewed.current.has(sectionId)) {
            sectionsViewed.current.add(sectionId);

            // Track specific section engagements
            if (sectionId === 'medigap-opportunity') {
              // User viewing the 75% gap opportunity section
            } else if (sectionId === 'popular-plans') {
              laCountyMedigapTracking.trackPlanTypeInterest('plan_g', 'view');
            } else if (sectionId === 'subregion-coverage') {
              // Track geographic interest
            } else if (sectionId === 'why-el-mag') {
              // User viewing value propositions
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all major sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Track subregion link clicks
    const handleSubregionClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');

      if (!link) return;

      const text = link.textContent || '';
      const href = link.getAttribute('href') || '';

      // Map subregion names to codes
      const subregionMap: { [key: string]: any } = {
        'Central Los Angeles': 'central',
        'Downtown LA': 'central',
        'San Fernando Valley': 'valley',
        'Valley': 'valley',
        'West LA': 'westside',
        'Beach Cities': 'westside',
        'Santa Monica': 'westside',
        'South Bay': 'southbay',
        'Long Beach': 'southbay',
        'San Gabriel Valley': 'sgv',
        'SGV': 'sgv',
        'Pasadena': 'sgv',
        'Antelope Valley': 'av',
        'AV': 'av',
        'Santa Clarita': 'scv',
        'SCV': 'scv',
        'East LA': 'eastla',
        'Whittier': 'eastla'
      };

      for (const [name, code] of Object.entries(subregionMap)) {
        if (text.includes(name)) {
          laCountyMedigapTracking.trackSubregionEngagement(code, 'click');
          break;
        }
      }
    };

    document.addEventListener('click', handleSubregionClick);
    return () => document.removeEventListener('click', handleSubregionClick);
  }, []);

  useEffect(() => {
    // Track community rating spotlight engagement
    const communityRatingSpotlight = document.querySelector('.border-yellow-200');
    if (communityRatingSpotlight) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              laCountyMedigapTracking.trackCommunityRatingEducation('spotlight_view');
            }
          });
        },
        { threshold: 0.7 }
      );

      observer.observe(communityRatingSpotlight);
      return () => observer.disconnect();
    }
  }, []);

  // This component doesn't render anything visible
  return null;
}

// Helper function to get section from element
function getSectionFromElement(element: HTMLElement): string {
  const section = element.closest('section');
  if (section) {
    const id = section.getAttribute('id');
    if (id) return id;

    // Try to get section from heading
    const heading = section.querySelector('h2');
    if (heading) {
      const text = heading.textContent || '';
      if (text.includes('Market Overview')) return 'market-overview';
      if (text.includes('Popular Plans')) return 'popular-plans';
      if (text.includes('Coverage Across')) return 'subregion-coverage';
      if (text.includes('Why Choose')) return 'why-el-mag';
      if (text.includes('Beneficiaries Miss')) return 'medigap-opportunity';
    }
  }
  return 'unknown';
}
