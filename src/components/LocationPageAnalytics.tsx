'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { 
  event, 
  trackPhoneCall, 
  trackCTAClick, 
  trackButtonClick,
  trackPageScroll,
  pageview
} from '@/lib/analytics';

interface LocationPageAnalyticsProps {
  county: string;
  state: string;
  serviceType: string; // e.g., 'Medicare Advantage'
  totalEnrollment: number;
  maPenetrationRate: number;
  phoneNumber: string;
  demographicProfile?: {
    avgAge: number;
    diversityIndex: number; // Calculated from race distribution
    primaryCommunities: string[];
  };
  marketMetrics?: {
    opportunityScore: number;
    competitionLevel: string;
    addressableMarket: number;
  };
}

export default function LocationPageAnalytics({ 
  county, 
  state,
  serviceType,
  totalEnrollment,
  maPenetrationRate,
  phoneNumber,
  demographicProfile,
  marketMetrics
}: LocationPageAnalyticsProps) {
  const pathname = usePathname();
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [maxScrollDepth, setMaxScrollDepth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [pageLoadTime] = useState(Date.now());
  const [engagementEvents, setEngagementEvents] = useState({
    heroViewed: false,
    marketDataViewed: false,
    communityDataViewed: false,
    healthcareNetworkViewed: false,
    culturalSectionViewed: false,
    ctaViewed: false
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Track initial page view with location context
  useEffect(() => {
    if (!isClient) return;

    try {
      event('location_page_view', {
        event_category: 'location_engagement',
        event_label: `${county}, ${state}`,
        location_county: county,
        location_state: state,
        service_type: serviceType,
        total_enrollment: totalEnrollment,
        ma_penetration_rate: maPenetrationRate,
        page_location: pathname,
        demographic_avg_age: demographicProfile?.avgAge || null,
        diversity_index: demographicProfile?.diversityIndex || null,
        opportunity_score: marketMetrics?.opportunityScore || null,
        competition_level: marketMetrics?.competitionLevel || null,
      });

      // Track pageview for Google Analytics
      pageview(pathname);
    } catch (error) {
      console.warn('Analytics tracking error:', error);
    }
  }, [isClient, county, state, serviceType, pathname, totalEnrollment, maPenetrationRate, demographicProfile, marketMetrics]);

  // Track time on page
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isClient]);

  // Track scroll depth
  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (scrollPercent > maxScrollDepth) {
        setMaxScrollDepth(scrollPercent);
        
        // Track scroll milestones
        if (scrollPercent > 25 && !engagementEvents.marketDataViewed) {
          event('location_scroll_milestone', {
            event_category: 'location_engagement',
            event_label: `${county} - 25% scroll`,
            location_county: county,
            milestone: '25_percent',
            time_to_milestone: timeOnPage,
          });
          setEngagementEvents(prev => ({ ...prev, marketDataViewed: true }));
        }
        
        if (scrollPercent > 50 && !engagementEvents.communityDataViewed) {
          event('location_scroll_milestone', {
            event_category: 'location_engagement',
            event_label: `${county} - 50% scroll`,
            location_county: county,
            milestone: '50_percent',
            time_to_milestone: timeOnPage,
          });
          setEngagementEvents(prev => ({ ...prev, communityDataViewed: true }));
        }
        
        if (scrollPercent > 75 && !engagementEvents.healthcareNetworkViewed) {
          event('location_scroll_milestone', {
            event_category: 'location_engagement',
            event_label: `${county} - 75% scroll`,
            location_county: county,
            milestone: '75_percent',
            time_to_milestone: timeOnPage,
          });
          setEngagementEvents(prev => ({ ...prev, healthcareNetworkViewed: true }));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient, maxScrollDepth, county, timeOnPage, engagementEvents]);

  // Track engagement milestones
  useEffect(() => {
    if (!isClient) return;

    // Track 30-second engagement
    const thirtySecondTimer = setTimeout(() => {
      event('location_time_milestone', {
        event_category: 'location_engagement',
        event_label: `${county} - 30s engaged`,
        location_county: county,
        service_type: serviceType,
        milestone: '30_seconds',
        scroll_depth: maxScrollDepth,
      });
    }, 30000);

    // Track 2-minute engagement
    const twoMinuteTimer = setTimeout(() => {
      event('location_time_milestone', {
        event_category: 'location_engagement',
        event_label: `${county} - 2min engaged`,
        location_county: county,
        service_type: serviceType,
        milestone: '2_minutes',
        scroll_depth: maxScrollDepth,
      });
    }, 120000);

    return () => {
      clearTimeout(thirtySecondTimer);
      clearTimeout(twoMinuteTimer);
    };
  }, [isClient, county, serviceType, maxScrollDepth]);

  // Track when user leaves page
  useEffect(() => {
    if (!isClient) return;

    const handleBeforeUnload = () => {
      try {
        event('location_page_exit', {
          event_category: 'location_engagement',
          event_label: `${county}, ${state}`,
          location_county: county,
          service_type: serviceType,
          time_on_page: timeOnPage,
          max_scroll_depth: maxScrollDepth,
          page_completion: maxScrollDepth > 80 ? 'complete' : 'partial',
        });
      } catch (error) {
        console.warn('Exit tracking error:', error);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isClient, county, state, serviceType, timeOnPage, maxScrollDepth]);

  // Set up click tracking for location-specific elements
  useEffect(() => {
    if (!isClient) return;

    const setupClickTracking = () => {
      // Phone number clicks
      document.querySelectorAll(`a[href="tel:${phoneNumber}"]`).forEach(link => {
        link.addEventListener('click', () => {
          trackPhoneCall(phoneNumber);
          // Track additional location context
          event('location_phone_call', {
            event_category: 'location_conversion',
            event_label: `${county} Phone Call`,
            location_county: county,
            service_type: serviceType,
            time_on_page: timeOnPage,
            scroll_depth: maxScrollDepth,
          });
        });
      });

      // Contact form CTAs
      document.querySelectorAll('a[href="/contact"]').forEach(link => {
        link.addEventListener('click', () => {
          trackCTAClick(`${county} Contact CTA`, county, '/contact');
          // Track additional location context
          event('location_cta_click', {
            event_category: 'location_conversion',
            event_label: `${county} Contact CTA`,
            location_county: county,
            service_type: serviceType,
            cta_type: 'contact_form',
            time_on_page: timeOnPage,
            scroll_depth: maxScrollDepth,
          });
        });
      });

      // Community-specific buttons
      document.querySelectorAll('[data-community]').forEach(element => {
        element.addEventListener('click', () => {
          const community = element.getAttribute('data-community');
          event('community_interest', {
            event_category: 'location_engagement',
            event_label: `${community} in ${county}`,
            location_county: county,
            community_name: community,
            service_type: serviceType,
          });
        });
      });

      // Market data interactions
      document.querySelectorAll('[data-market-metric]').forEach(element => {
        element.addEventListener('click', () => {
          const metric = element.getAttribute('data-market-metric');
          event('market_data_interaction', {
            event_category: 'location_engagement',
            event_label: `${metric} - ${county}`,
            location_county: county,
            metric_type: metric,
            service_type: serviceType,
          });
        });
      });

      // Healthcare provider clicks
      document.querySelectorAll('[data-provider]').forEach(element => {
        element.addEventListener('click', () => {
          const provider = element.getAttribute('data-provider');
          event('provider_interest', {
            event_category: 'location_engagement',
            event_label: `${provider} - ${county}`,
            location_county: county,
            provider_name: provider,
            service_type: serviceType,
          });
        });
      });
    };

    // Set up tracking after a brief delay to ensure DOM is ready
    const timeout = setTimeout(setupClickTracking, 1000);
    return () => clearTimeout(timeout);
  }, [isClient, county, serviceType, phoneNumber, timeOnPage, maxScrollDepth]);

  // Track form interactions if present
  useEffect(() => {
    if (!isClient) return;

    const handleFormInteraction = (formType: string) => {
      event('location_form_interaction', {
        event_category: 'location_engagement',
        event_label: `${formType} - ${county}`,
        location_county: county,
        service_type: serviceType,
        form_type: formType,
        time_on_page: timeOnPage,
      });
    };

    // Track form focus events
    document.querySelectorAll('input, textarea, select').forEach(input => {
      input.addEventListener('focus', () => {
        const form = input.closest('form');
        const formId = form?.getAttribute('id') || 'unknown_form';
        handleFormInteraction(formId);
      });
    });

    // Track form submissions
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', () => {
        const formId = form.getAttribute('id') || 'unknown_form';
        event('location_form_submit', {
          event_category: 'location_conversion',
          event_label: `${formId} - ${county}`,
          location_county: county,
          service_type: serviceType,
          form_type: formId,
          time_on_page: timeOnPage,
          scroll_depth: maxScrollDepth,
        });
      });
    });
  }, [isClient, county, serviceType, timeOnPage, maxScrollDepth]);

  // Component doesn't render anything visible
  return null;
}