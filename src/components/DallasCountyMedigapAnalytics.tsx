'use client';

import { useEffect, useRef, useState } from 'react';
import {
  dallasCountyMedigapTracking,
  type DallasCountyMedigapPageMetrics
} from '@/lib/analytics/dallas-county-medigap-tracking';

export default function DallasCountyMedigapAnalytics() {
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
      const isDallasArea = timezone === 'America/Chicago'; // Basic detection for Central Time

      return {
        city: '', // Would need API for accurate city detection
        zipCode: '',
        subregion: ''
      };
    };

    const userLocation = detectLocation();

    // Page metrics for Dallas County
    const pageMetrics: DallasCountyMedigapPageMetrics = {
      pageType: 'dallas_county_medigap',
      county: 'dallas',
      state: 'texas',
      totalBeneficiaries: 300000, // 300K+
      medigapPenetration: 19.5, // 19.5%
      underservedBeneficiaries: 240000, // 240K+
      plansAvailable: 50,
      specialMetrics: {
        lowerPremiums: true,
        averagePremiumRange: '$120-150/month',
        costAdvantageVsNY: 'vs $300+/month',
        hispanicPopulation: 41.4,
        totalPopulation: 2600000,
        bilingualSupport: ['english', 'spanish'],
        majorNetworks: [
          'UT Southwestern Medical Center',
          'Baylor University Medical Center',
          'Medical City Healthcare',
          'Texas Health Resources',
          'Parkland Memorial Hospital'
        ],
        topRankedFacilities: 2, // UT Southwestern #1, Baylor #2 in DFW
        utSouthwesternRanking: '#1 in DFW for 9 years',
        baylorRanking: '#2 in DFW',
        marketGapPercentage: 80, // 80% without Medigap
        texasPenetrationRate: 19.45,
        lowPenetrationAdvantage: true,
        communitiesCovered: 8,
        subregionsCovered: 8,
        medigapPlanTypes: 10,
        mostPopularPlan: 'Plan G (54% TX enrollees)',
        budgetFriendlyPlan: 'Plan N',
        lowPremiumPlan: 'HD Plan G'
      }
    };

    // Track initial page view
    dallasCountyMedigapTracking.trackPageView(pageMetrics, userLocation);

    // Track user journey arrival
    dallasCountyMedigapTracking.trackUserJourney('arrival');
  }, []);

  useEffect(() => {
    // Scroll depth tracking
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // Track milestones
      if (scrollPercentage >= 25 && !scrollTracked['25']) {
        dallasCountyMedigapTracking.trackScrollDepth(25);
        setScrollTracked(prev => ({ ...prev, '25': true }));
      }
      if (scrollPercentage >= 40 && !scrollTracked['40']) {
        dallasCountyMedigapTracking.trackScrollDepth(40);
        setScrollTracked(prev => ({ ...prev, '40': true }));
        // User engaged in education
        dallasCountyMedigapTracking.trackUserJourney('education', {
          timeSpent: Math.round((Date.now() - journeyStartTime.current) / 1000),
          sectionsViewed: Array.from(sectionsViewed.current)
        });
      }
      if (scrollPercentage >= 60 && !scrollTracked['60']) {
        dallasCountyMedigapTracking.trackScrollDepth(60);
        setScrollTracked(prev => ({ ...prev, '60': true }));
      }
      if (scrollPercentage >= 80 && !scrollTracked['80']) {
        dallasCountyMedigapTracking.trackScrollDepth(80);
        setScrollTracked(prev => ({ ...prev, '80': true }));
        // User in comparison phase
        dallasCountyMedigapTracking.trackUserJourney('comparison', {
          timeSpent: Math.round((Date.now() - journeyStartTime.current) / 1000),
          sectionsViewed: Array.from(sectionsViewed.current),
          ctasInteracted: Array.from(ctasInteracted.current)
        });
      }
      if (scrollPercentage >= 100 && !scrollTracked['100']) {
        dallasCountyMedigapTracking.trackScrollDepth(100);
        setScrollTracked(prev => ({ ...prev, '100': true }));
        // User reached decision phase
        dallasCountyMedigapTracking.trackUserJourney('decision', {
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
        dallasCountyMedigapTracking.trackCTA('phone_call', { section });
        ctasInteracted.current.add('phone_call');
      } else if (href.includes('/contact')) {
        const section = getSectionFromElement(link);
        dallasCountyMedigapTracking.trackCTA('contact_form', { section });
        ctasInteracted.current.add('contact_form');
      } else if (href.includes('/medicare-comparison-tool') || href.includes('/medicare-plan-finder')) {
        const section = getSectionFromElement(link);
        dallasCountyMedigapTracking.trackCTA('plan_comparison', { section });
        ctasInteracted.current.add('plan_comparison');
      } else if (href.includes('/medicare-cost-calculator')) {
        const section = getSectionFromElement(link);
        dallasCountyMedigapTracking.trackCTA('cost_calculator', { section });
        ctasInteracted.current.add('cost_calculator');
      }

      // Track language-specific CTAs
      if (text.includes('Español') || text.includes('Hable') || href.includes('hispanic-latino')) {
        dallasCountyMedigapTracking.trackCTA('language_specific', {
          section: getSectionFromElement(link),
          language: 'spanish'
        });
        dallasCountyMedigapTracking.trackBilingualEngagement('spanish', 'cta_click');
      }

      // Track plan type interest
      if (href.includes('plan-g') || text.includes('Plan G')) {
        dallasCountyMedigapTracking.trackPlanTypeInterest('plan_g', 'click');
      } else if (text.includes('Plan N')) {
        dallasCountyMedigapTracking.trackPlanTypeInterest('plan_n', 'click');
      } else if (text.includes('High-Deductible') || text.includes('HD Plan')) {
        dallasCountyMedigapTracking.trackPlanTypeInterest('hd_plan_g', 'click');
      }

      // Track Texas premium advantage education clicks
      if (text.includes('Texas') && (text.includes('Premium') || text.includes('Advantage') || text.includes('Savings'))) {
        dallasCountyMedigapTracking.trackTexasPremiumAdvantage('learn_more_click');
      }

      // Track DFW healthcare network interest
      if (text.includes('UT Southwestern') || href.includes('ut-southwestern')) {
        dallasCountyMedigapTracking.trackDFWHealthcareNetwork('ut_southwestern', 'click');
      } else if (text.includes('Baylor') || href.includes('baylor')) {
        dallasCountyMedigapTracking.trackDFWHealthcareNetwork('baylor', 'click');
      } else if (text.includes('Medical City')) {
        dallasCountyMedigapTracking.trackDFWHealthcareNetwork('medical_city', 'click');
      } else if (text.includes('Texas Health')) {
        dallasCountyMedigapTracking.trackDFWHealthcareNetwork('texas_health', 'click');
      } else if (text.includes('Parkland')) {
        dallasCountyMedigapTracking.trackDFWHealthcareNetwork('parkland', 'click');
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
              // User viewing the 80% gap opportunity section
            } else if (sectionId === 'popular-plans') {
              dallasCountyMedigapTracking.trackPlanTypeInterest('plan_g', 'view');
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

      // Map subregion names to codes
      const subregionMap: { [key: string]: any } = {
        'Dallas': 'dallas',
        'Downtown Dallas': 'dallas',
        'Plano': 'plano',
        'Richardson': 'richardson',
        'Irving': 'irving',
        'Las Colinas': 'irving',
        'Garland': 'garland',
        'Mesquite': 'mesquite',
        'Carrollton': 'carrollton',
        'Grand Prairie': 'grandprairie'
      };

      for (const [name, code] of Object.entries(subregionMap)) {
        if (text.includes(name)) {
          dallasCountyMedigapTracking.trackSubregionEngagement(code, 'click');
          break;
        }
      }
    };

    document.addEventListener('click', handleSubregionClick);
    return () => document.removeEventListener('click', handleSubregionClick);
  }, []);

  useEffect(() => {
    // Track Texas premium advantage spotlight engagement
    const texasAdvantageSpotlight = document.querySelector('.border-yellow-200');
    if (texasAdvantageSpotlight) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              dallasCountyMedigapTracking.trackTexasPremiumAdvantage('spotlight_view');
            }
          });
        },
        { threshold: 0.7 }
      );

      observer.observe(texasAdvantageSpotlight);
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
