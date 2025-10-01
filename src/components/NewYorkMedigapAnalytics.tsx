'use client';

import { useEffect, useRef, useState } from 'react';
import {
  newYorkMedigapTracking,
  type NewYorkMedigapPageMetrics
} from '@/lib/analytics/new-york-medigap-tracking';

export default function NewYorkMedigapAnalytics() {
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
      const isNYTimezone = timezone === 'America/New_York';

      return {
        city: '',
        zipCode: '',
        region: '' as ''
      };
    };

    const userLocation = detectLocation();

    // Page metrics for New York
    const pageMetrics: NewYorkMedigapPageMetrics = {
      pageType: 'ny_medigap',
      state: 'new-york',
      totalBeneficiaries: 3500000, // 3.5M
      medigapPenetration: 17, // 12-21%, using midpoint
      underservedBeneficiaries: 2800000, // 2.8M+
      plansAvailable: 12, // 12 NY standardized plans
      specialMetrics: {
        standardizedPlans: true,
        planTypes: 12,
        mostPopularPlan: 'Plan F',
        secondPopularPlan: 'Plan N',
        thirdPopularPlan: 'Plan G equivalent',
        planFEnrollment: 42,
        planNEnrollment: 29,
        planGEnrollment: 18,
        averagePremium: 304, // $304/month
        majorNetworks: ['NYU Langone', 'Mount Sinai', 'NewYork-Presbyterian', 'Memorial Sloan Kettering'],
        worldClassFacilities: 4,
        marketGapPercentage: 83, // Average of 79-88%
        opportunityValueBillions: 32.76, // 2.8M × $1,170/month × 12
        lowPenetrationAdvantage: true,
        regionsCovered: 3, // NYC Metro, Long Island, Upstate
        multilingualSupport: ['spanish', 'chinese', 'russian', 'korean', 'english']
      }
    };

    // Track initial page view
    newYorkMedigapTracking.trackPageView(pageMetrics, userLocation);

    // Track user journey arrival
    newYorkMedigapTracking.trackUserJourney('arrival');
  }, []);

  useEffect(() => {
    // Scroll depth tracking
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // Track milestones
      if (scrollPercentage >= 25 && !scrollTracked['25']) {
        newYorkMedigapTracking.trackScrollDepth(25);
        setScrollTracked(prev => ({ ...prev, '25': true }));
      }
      if (scrollPercentage >= 40 && !scrollTracked['40']) {
        newYorkMedigapTracking.trackScrollDepth(40);
        setScrollTracked(prev => ({ ...prev, '40': true }));
        // User engaged in education
        newYorkMedigapTracking.trackUserJourney('education', {
          timeSpent: Math.round((Date.now() - journeyStartTime.current) / 1000),
          sectionsViewed: Array.from(sectionsViewed.current)
        });
      }
      if (scrollPercentage >= 60 && !scrollTracked['60']) {
        newYorkMedigapTracking.trackScrollDepth(60);
        setScrollTracked(prev => ({ ...prev, '60': true }));
      }
      if (scrollPercentage >= 80 && !scrollTracked['80']) {
        newYorkMedigapTracking.trackScrollDepth(80);
        setScrollTracked(prev => ({ ...prev, '80': true }));
        // User in comparison phase
        newYorkMedigapTracking.trackUserJourney('comparison', {
          timeSpent: Math.round((Date.now() - journeyStartTime.current) / 1000),
          sectionsViewed: Array.from(sectionsViewed.current),
          ctasInteracted: Array.from(ctasInteracted.current)
        });
      }
      if (scrollPercentage >= 100 && !scrollTracked['100']) {
        newYorkMedigapTracking.trackScrollDepth(100);
        setScrollTracked(prev => ({ ...prev, '100': true }));
        // User reached decision phase
        newYorkMedigapTracking.trackUserJourney('decision', {
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
        newYorkMedigapTracking.trackCTA('phone_call', { section });
        ctasInteracted.current.add('phone_call');
      } else if (href.includes('/contact')) {
        const section = getSectionFromElement(link);
        newYorkMedigapTracking.trackCTA('contact_form', { section });
        ctasInteracted.current.add('contact_form');
      } else if (href.includes('/medicare-comparison-tool') || href.includes('/medicare-plan-finder')) {
        const section = getSectionFromElement(link);
        newYorkMedigapTracking.trackCTA('plan_comparison', { section });
        ctasInteracted.current.add('plan_comparison');
      } else if (href.includes('/medicare-cost-calculator')) {
        const section = getSectionFromElement(link);
        newYorkMedigapTracking.trackCTA('cost_calculator', { section });
        ctasInteracted.current.add('cost_calculator');
      }

      // Track language-specific CTAs
      if (text.includes('Español') || text.includes('Hable') || href.includes('hispanic-latino')) {
        newYorkMedigapTracking.trackCTA('language_specific', {
          section: getSectionFromElement(link),
          language: 'spanish'
        });
        newYorkMedigapTracking.trackMultilingualEngagement('spanish', 'cta_click');
      } else if (text.includes('中文') || text.includes('我們說')) {
        newYorkMedigapTracking.trackMultilingualEngagement('chinese', 'cta_click');
      } else if (text.includes('한국어')) {
        newYorkMedigapTracking.trackMultilingualEngagement('korean', 'cta_click');
      } else if (text.includes('Русский')) {
        newYorkMedigapTracking.trackMultilingualEngagement('russian', 'cta_click');
      }

      // Track plan type interest
      if (href.includes('plan-f') || text.includes('Plan F')) {
        newYorkMedigapTracking.trackPlanTypeInterest('plan_f', 'click');
      } else if (text.includes('Plan N')) {
        newYorkMedigapTracking.trackPlanTypeInterest('plan_n', 'click');
      } else if (text.includes('Plan G')) {
        newYorkMedigapTracking.trackPlanTypeInterest('plan_g', 'click');
      }

      // Track standardized plans education clicks
      if (text.includes('Standardized Plans') || text.includes('NY-Specific')) {
        newYorkMedigapTracking.trackStandardizedPlansEducation('learn_more_click');
      }

      // Track healthcare network interest
      if (text.includes('NYU Langone')) {
        newYorkMedigapTracking.trackNetworkInterest('nyu-langone', 'click');
      } else if (text.includes('Mount Sinai')) {
        newYorkMedigapTracking.trackNetworkInterest('mount-sinai', 'click');
      } else if (text.includes('NewYork-Presbyterian')) {
        newYorkMedigapTracking.trackNetworkInterest('newyork-presbyterian', 'click');
      } else if (text.includes('Memorial Sloan Kettering') || text.includes('MSK')) {
        newYorkMedigapTracking.trackNetworkInterest('memorial-sloan-kettering', 'click');
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
              // User viewing the 79-88% gap opportunity section
            } else if (sectionId === 'popular-plans') {
              newYorkMedigapTracking.trackPlanTypeInterest('plan_f', 'view');
            } else if (sectionId === 'regional-coverage') {
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
    // Track region link clicks
    const handleRegionClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');

      if (!link) return;

      const text = link.textContent || '';
      const href = link.getAttribute('href') || '';

      // Map region names to codes
      const regionMap: { [key: string]: 'nyc-metro' | 'long-island' | 'upstate' } = {
        'NYC': 'nyc-metro',
        'New York City': 'nyc-metro',
        'Manhattan': 'nyc-metro',
        'Brooklyn': 'nyc-metro',
        'Queens': 'nyc-metro',
        'Bronx': 'nyc-metro',
        'Staten Island': 'nyc-metro',
        'Long Island': 'long-island',
        'Nassau': 'long-island',
        'Suffolk': 'long-island',
        'Upstate': 'upstate',
        'Buffalo': 'upstate',
        'Rochester': 'upstate',
        'Syracuse': 'upstate',
        'Albany': 'upstate'
      };

      for (const [name, code] of Object.entries(regionMap)) {
        if (text.includes(name)) {
          newYorkMedigapTracking.trackRegionEngagement(code, 'click');
          break;
        }
      }
    };

    document.addEventListener('click', handleRegionClick);
    return () => document.removeEventListener('click', handleRegionClick);
  }, []);

  useEffect(() => {
    // Track standardized plans spotlight engagement
    const standardizedPlansSpotlight = document.querySelector('.border-yellow-200');
    if (standardizedPlansSpotlight) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              newYorkMedigapTracking.trackStandardizedPlansEducation('spotlight_view');
            }
          });
        },
        { threshold: 0.7 }
      );

      observer.observe(standardizedPlansSpotlight);
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
      if (text.includes('Coverage Across')) return 'regional-coverage';
      if (text.includes('Why Choose')) return 'why-el-mag';
      if (text.includes('Beneficiaries Miss')) return 'medigap-opportunity';
    }
  }
  return 'unknown';
}
