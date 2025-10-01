'use client';

import { useEffect, useRef, useState } from 'react';
import {
  westCoastRegionalTracking,
  type WestCoastRegionalPageMetrics
} from '@/lib/analytics/west-coast-regional-tracking';

export default function WestCoastRegionalAnalytics() {
  const [scrollTracked, setScrollTracked] = useState({
    '25': false,
    '40': false,
    '60': false,
    '80': false,
    '100': false
  });
  const journeyStartTime = useRef<number>(Date.now());
  const sectionsViewed = useRef<Set<string>>(new Set());
  const statesViewed = useRef<Set<string>>(new Set());
  const ctasInteracted = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Detect user location (basic detection via timezone/locale)
    const detectLocation = () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      let state = '';
      let market = '';

      // Basic West Coast timezone detection
      if (timezone === 'America/Los_Angeles') {
        state = 'california'; // Most likely (could also be WA/OR)
      } else if (timezone === 'America/Vancouver') {
        state = 'washington';
      }

      return { state, city: '', zipCode: '', market };
    };

    const userLocation = detectLocation();

    // Page metrics for West Coast Regional
    const pageMetrics: WestCoastRegionalPageMetrics = {
      pageType: 'west_coast_regional_medigap',
      region: 'west-coast',
      statesCovered: ['california', 'oregon', 'washington'],
      totalBeneficiaries: 8000000, // 8M+
      averageMedigapPenetration: 20, // ~15-25% average
      underservedBeneficiaries: 6000000, // 6M+
      plansAvailable: 200,
      specialMetrics: {
        lowestNationalPenetration: true,
        massiveMarketOpportunity: true,

        // California (48% of West Coast seniors)
        californiaCommunityRating: true,
        californiaPopulation: 48,
        californiaPenetration: 17, // Average 9-25%
        californiaUnderserved: 3500000, // 3.5M+
        californiaAdvantage: 'age_independent_pricing_only_3_states',

        // Oregon (fastest growth)
        oregonGrowthRate: 7.9, // 7.9% in 2024
        oregonNewLives: 14626, // 14,626 new lives
        oregonPenetration: 17.5, // ~15-20%
        oregonUnderserved: 750000, // 750K+

        // Washington (premium care)
        washingtonPenetration: 17.5, // ~15-20%
        washingtonUnderserved: 800000, // 800K+
        washingtonPremiumCare: true,

        // Major markets
        majorMarkets: {
          laCounty: 1800000, // 1.8M
          sfBay: 850000, // 850K
          sanDiego: 600000, // 600K
          sacramento: 420000, // 420K
          portland: 600000, // 600K+
          seattleTacoma: 800000, // 800K+
        },

        // Healthcare networks
        worldClassNetworks: [
          'Stanford',
          'UCSF',
          'UCLA',
          'Cedars-Sinai',
          'UW Medicine',
          'OHSU',
          'Providence',
          'Seattle Cancer Care Alliance'
        ],
        topRankedFacilities: 8,

        // Market opportunity
        marketGapPercentage: 80, // 75-85% average
        opportunityValueBillions: 45, // Estimated ~$45B opportunity
        lowPenetrationAdvantage: true,

        // Coverage
        statesCovered: 3,
        majorMarketsCovered: 6,

        // Plans
        medigapPlanTypes: 11,
        mostPopularPlan: 'Plan G',
        budgetFriendlyPlan: 'Plan N',
        lowPremiumPlan: 'HD Plan G',

        // Multilingual
        multilingualSupport: ['english', 'spanish', 'mandarin', 'vietnamese', 'korean'],
        diversePopulation: true
      }
    };

    // Track initial page view
    westCoastRegionalTracking.trackPageView(pageMetrics, userLocation);

    // Track user journey arrival
    westCoastRegionalTracking.trackUserJourney('arrival');
  }, []);

  useEffect(() => {
    // Scroll depth tracking
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // Track milestones
      if (scrollPercentage >= 25 && !scrollTracked['25']) {
        westCoastRegionalTracking.trackScrollDepth(25);
        setScrollTracked(prev => ({ ...prev, '25': true }));
      }
      if (scrollPercentage >= 40 && !scrollTracked['40']) {
        westCoastRegionalTracking.trackScrollDepth(40);
        setScrollTracked(prev => ({ ...prev, '40': true }));
        // User engaged in state research
        westCoastRegionalTracking.trackUserJourney('state_research', {
          timeSpent: Math.round((Date.now() - journeyStartTime.current) / 1000),
          statesViewed: Array.from(statesViewed.current),
          sectionsViewed: Array.from(sectionsViewed.current)
        });
      }
      if (scrollPercentage >= 60 && !scrollTracked['60']) {
        westCoastRegionalTracking.trackScrollDepth(60);
        setScrollTracked(prev => ({ ...prev, '60': true }));
        // User in education phase
        westCoastRegionalTracking.trackUserJourney('education', {
          timeSpent: Math.round((Date.now() - journeyStartTime.current) / 1000),
          statesViewed: Array.from(statesViewed.current),
          sectionsViewed: Array.from(sectionsViewed.current)
        });
      }
      if (scrollPercentage >= 80 && !scrollTracked['80']) {
        westCoastRegionalTracking.trackScrollDepth(80);
        setScrollTracked(prev => ({ ...prev, '80': true }));
        // User in comparison phase
        westCoastRegionalTracking.trackUserJourney('comparison', {
          timeSpent: Math.round((Date.now() - journeyStartTime.current) / 1000),
          statesViewed: Array.from(statesViewed.current),
          sectionsViewed: Array.from(sectionsViewed.current),
          ctasInteracted: Array.from(ctasInteracted.current)
        });
      }
      if (scrollPercentage >= 100 && !scrollTracked['100']) {
        westCoastRegionalTracking.trackScrollDepth(100);
        setScrollTracked(prev => ({ ...prev, '100': true }));
        // User reached decision phase
        westCoastRegionalTracking.trackUserJourney('decision', {
          timeSpent: Math.round((Date.now() - journeyStartTime.current) / 1000),
          statesViewed: Array.from(statesViewed.current),
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
      const section = getSectionFromElement(link);

      // Identify CTA type
      if (href.includes('tel:') || text.includes('Call')) {
        westCoastRegionalTracking.trackCTA('phone_call', { section });
        ctasInteracted.current.add('phone_call');
      } else if (href.includes('/contact')) {
        westCoastRegionalTracking.trackCTA('contact_form', { section });
        ctasInteracted.current.add('contact_form');
      } else if (href.includes('/medicare-comparison-tool') || href.includes('/medicare-plan-finder')) {
        westCoastRegionalTracking.trackCTA('plan_comparison', { section });
        ctasInteracted.current.add('plan_comparison');
      } else if (href.includes('/medicare-cost-calculator')) {
        westCoastRegionalTracking.trackCTA('cost_calculator', { section });
        ctasInteracted.current.add('cost_calculator');
      }

      // Track state-specific CTAs
      let detectedState: 'california' | 'oregon' | 'washington' | undefined;
      if (text.includes('California') || href.includes('california') || text.includes('CA')) {
        detectedState = 'california';
        westCoastRegionalTracking.trackCTA('state_specific', { section, state: 'california' });
        statesViewed.current.add('california');
      } else if (text.includes('Oregon') || href.includes('oregon') || text.includes('OR')) {
        detectedState = 'oregon';
        westCoastRegionalTracking.trackCTA('state_specific', { section, state: 'oregon' });
        statesViewed.current.add('oregon');
      } else if (text.includes('Washington') || href.includes('washington') || text.includes('WA')) {
        detectedState = 'washington';
        westCoastRegionalTracking.trackCTA('state_specific', { section, state: 'washington' });
        statesViewed.current.add('washington');
      }

      // Track language-specific CTAs
      if (text.includes('Español') || text.includes('Spanish') || href.includes('hispanic-latino')) {
        westCoastRegionalTracking.trackCTA('language_specific', {
          section,
          language: 'spanish'
        });
        westCoastRegionalTracking.trackMultilingualEngagement('spanish', 'cta_click', detectedState);
      } else if (text.includes('中文') || text.includes('Mandarin')) {
        westCoastRegionalTracking.trackMultilingualEngagement('mandarin', 'cta_click', detectedState);
      } else if (text.includes('Tiếng Việt') || text.includes('Vietnamese')) {
        westCoastRegionalTracking.trackMultilingualEngagement('vietnamese', 'cta_click', detectedState);
      } else if (text.includes('한국어') || text.includes('Korean')) {
        westCoastRegionalTracking.trackMultilingualEngagement('korean', 'cta_click', detectedState);
      }

      // Track plan type interest
      if (href.includes('plan-g') || text.includes('Plan G')) {
        westCoastRegionalTracking.trackPlanTypeInterest('plan_g', 'click', detectedState);
      } else if (text.includes('Plan N')) {
        westCoastRegionalTracking.trackPlanTypeInterest('plan_n', 'click', detectedState);
      } else if (text.includes('High-Deductible') || text.includes('HD Plan')) {
        westCoastRegionalTracking.trackPlanTypeInterest('hd_plan_g', 'click', detectedState);
      }

      // Track market-specific interest
      if (text.includes('Los Angeles') || text.includes('LA County')) {
        westCoastRegionalTracking.trackMarketEngagement('la-county', 'click', 'california');
      } else if (text.includes('San Francisco') || text.includes('SF Bay')) {
        westCoastRegionalTracking.trackMarketEngagement('sf-bay', 'click', 'california');
      } else if (text.includes('San Diego')) {
        westCoastRegionalTracking.trackMarketEngagement('san-diego', 'click', 'california');
      } else if (text.includes('Sacramento')) {
        westCoastRegionalTracking.trackMarketEngagement('sacramento', 'click', 'california');
      } else if (text.includes('Portland')) {
        westCoastRegionalTracking.trackMarketEngagement('portland', 'click', 'oregon');
      } else if (text.includes('Seattle') || text.includes('Tacoma')) {
        westCoastRegionalTracking.trackMarketEngagement('seattle-tacoma', 'click', 'washington');
      }

      // Track California community rating education clicks
      if (text.includes('Community Rating') || text.includes('CA Community')) {
        westCoastRegionalTracking.trackCaliforniaCommunityRating('learn_more_click');
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
            if (sectionId === 'region-overview') {
              // User viewing regional overview
            } else if (sectionId === 'state-highlights') {
              // User viewing state-specific highlights
            } else if (sectionId === 'california-highlights') {
              westCoastRegionalTracking.trackStateEngagement('california', 'view');
              statesViewed.current.add('california');
            } else if (sectionId === 'oregon-highlights') {
              westCoastRegionalTracking.trackStateEngagement('oregon', 'view');
              statesViewed.current.add('oregon');
              westCoastRegionalTracking.trackOregonGrowth('highlight_view');
            } else if (sectionId === 'washington-highlights') {
              westCoastRegionalTracking.trackStateEngagement('washington', 'view');
              statesViewed.current.add('washington');
              westCoastRegionalTracking.trackWashingtonPremiumCare('highlight_view');
            } else if (sectionId === 'medigap-opportunity') {
              westCoastRegionalTracking.trackLowPenetrationOpportunity('section_view');
            } else if (sectionId === 'popular-plans') {
              westCoastRegionalTracking.trackPlanTypeInterest('plan_g', 'view');
            } else if (sectionId === 'state-coverage') {
              // Track interest in state-specific coverage
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
    // Track California community rating spotlight engagement
    const communityRatingSpotlight = document.querySelector('.border-yellow-200, .border-yellow-300');
    if (communityRatingSpotlight) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              westCoastRegionalTracking.trackCaliforniaCommunityRating('spotlight_view');
            }
          });
        },
        { threshold: 0.7 }
      );

      observer.observe(communityRatingSpotlight);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    // Track state card clicks
    const handleStateCardClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const card = target.closest('.bg-blue-50, .bg-green-50, .bg-purple-50');

      if (!card) return;

      const cardText = card.textContent || '';

      if (cardText.includes('California')) {
        westCoastRegionalTracking.trackStateEngagement('california', 'click');
        statesViewed.current.add('california');
      } else if (cardText.includes('Oregon')) {
        westCoastRegionalTracking.trackStateEngagement('oregon', 'click');
        statesViewed.current.add('oregon');
      } else if (cardText.includes('Washington')) {
        westCoastRegionalTracking.trackStateEngagement('washington', 'click');
        statesViewed.current.add('washington');
      }
    };

    document.addEventListener('click', handleStateCardClick);
    return () => document.removeEventListener('click', handleStateCardClick);
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
      if (text.includes('Market Overview') || text.includes('Region Overview')) return 'region-overview';
      if (text.includes('State Highlights')) return 'state-highlights';
      if (text.includes('California')) return 'california-highlights';
      if (text.includes('Oregon')) return 'oregon-highlights';
      if (text.includes('Washington')) return 'washington-highlights';
      if (text.includes('Medigap Opportunity') || text.includes('Miss Medicare')) return 'medigap-opportunity';
      if (text.includes('Community Rating')) return 'community-rating-spotlight';
      if (text.includes('Popular Plans')) return 'popular-plans';
      if (text.includes('State Coverage') || text.includes('Coverage Across')) return 'state-coverage';
      if (text.includes('Why Choose') || text.includes('Why El-Mag')) return 'why-el-mag';
    }
  }
  return 'unknown';
}
