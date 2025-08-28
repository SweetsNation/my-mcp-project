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

interface TeamPageAnalyticsProps {
  agentName: string;
  agentSpecialties: string[];
  states: string[];
  phoneNumber: string;
}

export default function TeamPageAnalytics({ 
  agentName, 
  agentSpecialties, 
  states, 
  phoneNumber 
}: TeamPageAnalyticsProps) {
  const pathname = usePathname();
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [maxScrollDepth, setMaxScrollDepth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [pageLoadTime] = useState(Date.now());

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Track page view with team member context
  useEffect(() => {
    if (!isClient) return;

    try {
      event('team_page_view', {
        event_category: 'team_engagement',
        event_label: agentName,
        agent_name: agentName,
        agent_specialties: agentSpecialties.join(','),
        agent_states: states.join(','),
        page_location: pathname,
      });
    } catch (error) {
      console.warn('Failed to track team page view:', error);
    }
  }, [isClient, agentName, agentSpecialties, states, pathname]);

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
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollDepth = Math.round((scrollTop / documentHeight) * 100);
      
      if (scrollDepth > maxScrollDepth) {
        setMaxScrollDepth(scrollDepth);
        trackPageScroll(scrollDepth);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient, maxScrollDepth]);

  // Track engagement milestones
  useEffect(() => {
    if (!isClient) return;

    const engagementTimers = [
      setTimeout(() => {
        event('team_page_engagement', {
          event_category: 'team_engagement',
          event_label: `${agentName}_30_seconds`,
          agent_name: agentName,
          engagement_duration: '30_seconds',
        });
      }, 30000),
      setTimeout(() => {
        event('team_page_engagement', {
          event_category: 'team_engagement', 
          event_label: `${agentName}_60_seconds`,
          agent_name: agentName,
          engagement_duration: '60_seconds',
        });
      }, 60000),
      setTimeout(() => {
        event('team_page_engagement', {
          event_category: 'team_engagement',
          event_label: `${agentName}_deep_engagement`,
          agent_name: agentName,
          engagement_duration: '120_seconds',
        });
      }, 120000),
    ];

    return () => {
      engagementTimers.forEach(timer => clearTimeout(timer));
    };
  }, [isClient, agentName]);

  // Track page exit
  useEffect(() => {
    if (!isClient) return;

    const handleBeforeUnload = () => {
      const sessionDuration = Math.round((Date.now() - pageLoadTime) / 1000);
      
      try {
        event('team_page_exit', {
          event_category: 'team_engagement',
          event_label: `${agentName}_session_complete`,
          agent_name: agentName,
          session_duration: sessionDuration,
          max_scroll_depth: maxScrollDepth,
          engagement_quality: sessionDuration >= 60 && maxScrollDepth >= 50 ? 'high' : 
                            sessionDuration >= 30 && maxScrollDepth >= 25 ? 'medium' : 'low',
        });
      } catch (error) {
        console.warn('Failed to track team page exit:', error);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isClient, agentName, maxScrollDepth, pageLoadTime]);

  // Enhanced tracking functions for team pages
  const trackTeamPhoneCall = (source = 'hero') => {
    trackPhoneCall(phoneNumber);
    event('team_phone_call', {
      event_category: 'team_conversion',
      event_label: `${agentName}_phone_call`,
      agent_name: agentName,
      phone_number: phoneNumber,
      source_location: source,
    });
  };

  const trackTeamCTAClick = (ctaName: string, location: string, destination: string) => {
    trackCTAClick(ctaName, location, destination);
    event('team_cta_click', {
      event_category: 'team_conversion',
      event_label: `${agentName}_${ctaName}`,
      agent_name: agentName,
      cta_name: ctaName,
      source_location: location,
      destination: destination,
    });
  };

  const trackTeamSpecialtyInteraction = (specialty: string, action: string) => {
    event('team_specialty_interaction', {
      event_category: 'team_engagement',
      event_label: `${agentName}_${specialty}_${action}`,
      agent_name: agentName,
      specialty: specialty,
      interaction_type: action,
    });
  };

  const trackTeamFormStart = (formType: 'contact' | 'quote') => {
    event('team_form_start', {
      event_category: 'team_conversion',
      event_label: `${agentName}_${formType}_start`,
      agent_name: agentName,
      form_type: formType,
    });
  };

  const trackTeamFormComplete = (formType: 'contact' | 'quote') => {
    event('team_form_complete', {
      event_category: 'team_conversion',
      event_label: `${agentName}_${formType}_complete`,
      agent_name: agentName,
      form_type: formType,
      value: formType === 'quote' ? 50 : 25, // Assign lead values
    });
  };

  // Add event listeners for automatic tracking
  useEffect(() => {
    if (!isClient) return;

    // Track phone number clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        trackTeamPhoneCall(`phone_link_${index + 1}`);
      });
    });

    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('a[href^="/"], button');
    ctaButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const buttonText = target.textContent?.trim() || 'unknown';
        const href = target.getAttribute('href') || 'unknown';
        
        trackTeamCTAClick(buttonText, pathname, href);
      });
    });

    // Track form interactions
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      form.addEventListener('focusin', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
          trackTeamFormStart('contact');
        }
      });

      form.addEventListener('submit', () => {
        trackTeamFormComplete('contact');
      });
    });

    return () => {
      // Cleanup event listeners
      phoneLinks.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, [isClient, agentName, pathname, phoneNumber]);

  // Expose tracking functions globally for manual use
  useEffect(() => {
    if (!isClient || typeof window === 'undefined') return;

    (window as any).trackTeamAnalytics = {
      trackPhoneCall: trackTeamPhoneCall,
      trackCTAClick: trackTeamCTAClick,
      trackSpecialtyInteraction: trackTeamSpecialtyInteraction,
      trackFormStart: trackTeamFormStart,
      trackFormComplete: trackTeamFormComplete,
    };
  }, [isClient, agentName]);

  return null; // This component only tracks events, doesn't render anything
}