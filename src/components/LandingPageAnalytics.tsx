'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { event, trackButtonClick, trackCTAClick, trackPhoneCall, trackPageScroll } from '@/lib/analytics';
import { initializeLandingPageTracking } from '@/lib/landing-page-analytics-config';

interface LandingPageAnalyticsProps {
  pageType: 'accessibility' | 'regional' | 'county' | 'state';
  pageTitle: string;
  region?: string;
  county?: string;
  state?: string;
  demographics?: {
    avgAge?: number;
    hispanicPopulation?: number;
    dualEligibleRate?: number;
    maPenetrationRate?: number;
  };
  keyMetrics?: Record<string, number | string>;
}

export default function LandingPageAnalytics({
  pageType,
  pageTitle,
  region,
  county,
  state,
  demographics,
  keyMetrics
}: LandingPageAnalyticsProps) {
  const pathname = usePathname();
  const [scrollTracked, setScrollTracked] = useState<Set<number>>(new Set());
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [pageEngagementTracked, setPageEngagementTracked] = useState(false);
  const startTimeRef = useRef<number>(Date.now());
  const scrollListenerRef = useRef<(() => void) | null>(null);

  // Track initial page view with enhanced data
  useEffect(() => {
    try {
      event('landing_page_view', {
        event_category: 'Landing Page',
        event_label: pageType,
        page_type: pageType,
        page_title: pageTitle,
        region: region || '',
        county: county || '',
        state: state || '',
        avg_age: demographics?.avgAge || 0,
        hispanic_population: demographics?.hispanicPopulation || 0,
        dual_eligible_rate: demographics?.dualEligibleRate || 0,
        ma_penetration_rate: demographics?.maPenetrationRate || 0,
        ...keyMetrics
      });

      // Track page type specific metrics
      if (pageType === 'accessibility') {
        event('accessibility_page_view', {
          event_category: 'Accessibility',
          event_label: 'Landing Page View',
          page_title: pageTitle
        });
      } else if (pageType === 'regional') {
        event('regional_page_view', {
          event_category: 'Regional Marketing',
          event_label: region || 'Unknown Region',
          region: region || ''
        });
      } else if (pageType === 'county') {
        event('county_page_view', {
          event_category: 'Local Marketing',
          event_label: county || 'Unknown County',
          county: county || '',
          state: state || ''
        });
      } else if (pageType === 'state') {
        event('state_page_view', {
          event_category: 'State Marketing',
          event_label: state || 'Unknown State',
          state: state || ''
        });
      }
    } catch (error) {
      console.warn('Failed to track landing page view:', error);
    }
  }, [pageType, pageTitle, region, county, state, demographics, keyMetrics]);

  // Set up scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

      // Track scroll milestones
      [25, 50, 75, 90].forEach(milestone => {
        if (scrollPercentage >= milestone && !scrollTracked.has(milestone)) {
          setScrollTracked(prev => new Set([...prev, milestone]));
          trackPageScroll(milestone);
          
          // Track deep engagement on specific milestones
          if (milestone >= 75) {
            event('deep_page_engagement', {
              event_category: 'Engagement',
              event_label: `${pageType}_deep_scroll`,
              page_type: pageType,
              scroll_depth: milestone,
              time_on_page: Math.round((Date.now() - startTimeRef.current) / 1000)
            });
          }
        }
      });
    };

    scrollListenerRef.current = handleScroll;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (scrollListenerRef.current) {
        window.removeEventListener('scroll', scrollListenerRef.current);
      }
    };
  }, [pageType, scrollTracked]);

  // Track time on page
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now() - startTimeRef.current;
      setTimeOnPage(currentTime);

      // Track engagement milestones
      const timeInSeconds = Math.round(currentTime / 1000);
      if (timeInSeconds === 30 && !pageEngagementTracked) {
        setPageEngagementTracked(true);
        event('page_engagement_30s', {
          event_category: 'Engagement',
          event_label: `${pageType}_30_second_view`,
          page_type: pageType,
          time_spent: timeInSeconds
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [pageType, pageEngagementTracked]);

  // Track when user leaves page
  useEffect(() => {
    const handleBeforeUnload = () => {
      const finalTimeOnPage = Math.round((Date.now() - startTimeRef.current) / 1000);
      const maxScroll = Math.max(...Array.from(scrollTracked), 0);
      
      try {
        event('page_exit', {
          event_category: 'Engagement',
          event_label: `${pageType}_exit`,
          page_type: pageType,
          time_on_page: finalTimeOnPage,
          max_scroll_depth: maxScroll,
          engagement_score: calculateEngagementScore(finalTimeOnPage, maxScroll)
        });
      } catch (error) {
        // Silently fail on page unload
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [pageType, scrollTracked]);

  // Calculate engagement score
  const calculateEngagementScore = (timeSeconds: number, maxScroll: number): number => {
    let score = 0;
    
    // Time component (0-50 points)
    if (timeSeconds >= 30) score += 10;
    if (timeSeconds >= 60) score += 15;
    if (timeSeconds >= 120) score += 15;
    if (timeSeconds >= 300) score += 10;
    
    // Scroll component (0-50 points)
    if (maxScroll >= 25) score += 10;
    if (maxScroll >= 50) score += 15;
    if (maxScroll >= 75) score += 15;
    if (maxScroll >= 90) score += 10;
    
    return score;
  };

  // Initialize advanced tracking configuration
  useEffect(() => {
    // Extract page key from pathname for configuration
    const pathParts = pathname.split('/').filter(Boolean);
    const pageKey = pathParts.length > 0 ? pathParts[pathParts.length - 1] : '';

    // Initialize page-specific tracking if configuration exists
    if (pageKey) {
      initializeLandingPageTracking(pageKey);
    }
  }, [pathname]);

  // Expose tracking functions globally for use in components
  useEffect(() => {
    // Enhanced phone call tracking for landing pages
    (window as any).trackLandingPagePhoneCall = (source: string = 'hero') => {
      trackPhoneCall('331-343-2584');
      event('landing_page_phone_call', {
        event_category: 'Conversion',
        event_label: `${pageType}_phone_call`,
        page_type: pageType,
        call_source: source,
        region: region || '',
        county: county || '',
        state: state || '',
        value: 50 // High-value conversion
      });
    };

    // Enhanced CTA tracking for landing pages
    (window as any).trackLandingPageCTA = (ctaType: string, location: string, destination: string) => {
      trackCTAClick(ctaType, location, destination);
      event('landing_page_cta_click', {
        event_category: 'Conversion',
        event_label: `${pageType}_cta`,
        page_type: pageType,
        cta_type: ctaType,
        cta_location: location,
        destination: destination,
        region: region || '',
        county: county || '',
        state: state || '',
        value: 25 // Mid-value conversion
      });
    };

    // Section view tracking
    (window as any).trackLandingPageSection = (sectionName: string) => {
      event('landing_page_section_view', {
        event_category: 'Engagement',
        event_label: `${pageType}_section_${sectionName}`,
        page_type: pageType,
        section_name: sectionName,
        time_to_section: Math.round((Date.now() - startTimeRef.current) / 1000)
      });
    };

    // Form interaction tracking
    (window as any).trackLandingPageFormStart = (formType: string) => {
      event('landing_page_form_start', {
        event_category: 'Lead Generation',
        event_label: `${pageType}_form_start`,
        page_type: pageType,
        form_type: formType,
        region: region || '',
        county: county || '',
        state: state || ''
      });
    };

    (window as any).trackLandingPageFormComplete = (formType: string, formData?: Record<string, any>) => {
      event('landing_page_form_complete', {
        event_category: 'Lead Generation',
        event_label: `${pageType}_form_complete`,
        page_type: pageType,
        form_type: formType,
        region: region || '',
        county: county || '',
        state: state || '',
        value: 75, // High-value lead
        ...formData
      });
    };

    // Resource interaction tracking
    (window as any).trackLandingPageResource = (resourceType: string, resourceName: string) => {
      event('landing_page_resource_click', {
        event_category: 'Engagement',
        event_label: `${pageType}_resource`,
        page_type: pageType,
        resource_type: resourceType,
        resource_name: resourceName
      });
    };

    // Provider/plan interaction tracking
    (window as any).trackLandingPageProvider = (providerName: string, action: string = 'view') => {
      event('landing_page_provider_interaction', {
        event_category: 'Engagement',
        event_label: `${pageType}_provider`,
        page_type: pageType,
        provider_name: providerName,
        action: action,
        region: region || '',
        county: county || '',
        state: state || ''
      });
    };

    // Link clicks to other pages
    (window as any).trackLandingPageNavigation = (linkType: string, destination: string) => {
      event('landing_page_navigation', {
        event_category: 'Navigation',
        event_label: `${pageType}_navigation`,
        page_type: pageType,
        link_type: linkType,
        destination: destination
      });
    };

  }, [pageType, region, county, state]);

  return null; // This component doesn't render anything
}

// Hook for easy analytics integration
export const useLandingPageAnalytics = (config: LandingPageAnalyticsProps) => {
  const trackPhoneCall = (source: string = 'hero') => {
    (window as any).trackLandingPagePhoneCall?.(source);
  };

  const trackCTA = (ctaType: string, location: string, destination: string) => {
    (window as any).trackLandingPageCTA?.(ctaType, location, destination);
  };

  const trackSection = (sectionName: string) => {
    (window as any).trackLandingPageSection?.(sectionName);
  };

  const trackFormStart = (formType: string) => {
    (window as any).trackLandingPageFormStart?.(formType);
  };

  const trackFormComplete = (formType: string, formData?: Record<string, any>) => {
    (window as any).trackLandingPageFormComplete?.(formType, formData);
  };

  const trackResource = (resourceType: string, resourceName: string) => {
    (window as any).trackLandingPageResource?.(resourceType, resourceName);
  };

  const trackProvider = (providerName: string, action: string = 'view') => {
    (window as any).trackLandingPageProvider?.(providerName, action);
  };

  const trackNavigation = (linkType: string, destination: string) => {
    (window as any).trackLandingPageNavigation?.(linkType, destination);
  };

  return {
    trackPhoneCall,
    trackCTA,
    trackSection,
    trackFormStart,
    trackFormComplete,
    trackResource,
    trackProvider,
    trackNavigation
  };
};