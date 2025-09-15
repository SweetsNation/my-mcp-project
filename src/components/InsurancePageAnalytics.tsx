'use client'

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  trackWholeLifeInsuranceInteraction,
  trackLongTermCareInteraction,
  trackInsuranceQuoteFunnel,
  trackInsuranceContentEngagement,
  trackInsuranceCrossSell,
  trackPageScroll,
  trackCTAClick
} from '@/lib/analytics';

interface InsurancePageAnalyticsProps {
  insuranceType: 'whole_life' | 'long_term_care';
  children: React.ReactNode;
}

export default function InsurancePageAnalytics({ insuranceType, children }: InsurancePageAnalyticsProps) {
  const pathname = usePathname();
  const timeOnPageStart = useRef(Date.now());
  const scrollPercentage = useRef(0);
  const userJourney = useRef<string[]>([]);
  const contentEngagement = useRef({
    rateTableViewed: false,
    comparisonChartViewed: false,
    benefitExplanationViewed: false,
    faqSectionViewed: false,
    useCaseScenarioViewed: false,
    interactionCount: 0,
    sectionsCompleted: 0
  });
  const leadQualityData = useRef({
    sourceChannel: document.referrer || 'direct',
    pageViews: 1,
    timeOnSite: 0,
    contentEngagement: 0,
    quotesRequested: 0,
    contactMethod: 'none' as 'phone' | 'form' | 'chat' | 'none',
    urgencyLevel: 'researching' as 'immediate' | 'researching' | 'future_planning'
  });

  useEffect(() => {
    // Track initial page view
    userJourney.current.push(`${insuranceType}_landing`);

    if (insuranceType === 'whole_life') {
      trackWholeLifeInsuranceInteraction('page_view', undefined, undefined, undefined, undefined, 'hero_section');
    } else {
      trackLongTermCareInteraction('page_view', undefined, undefined, undefined, undefined, undefined, undefined);
    }

    // Track funnel entry
    trackInsuranceQuoteFunnel(insuranceType, 'landing');

    // Enhanced scroll tracking with content section detection
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

      if (currentScrollPercentage > scrollPercentage.current) {
        scrollPercentage.current = currentScrollPercentage;
        trackPageScroll(currentScrollPercentage);

        // Track content section engagement based on scroll position
        const viewportHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Rate table section (estimated 25-35% of page)
        if (currentScrollPercentage >= 25 && currentScrollPercentage <= 35 && !contentEngagement.current.rateTableViewed) {
          contentEngagement.current.rateTableViewed = true;
          contentEngagement.current.sectionsCompleted++;
          trackInsuranceContentEngagement(insuranceType, 'rate_table', {
            timeSpent: Date.now() - timeOnPageStart.current,
            scrollDepth: currentScrollPercentage,
            interactionCount: contentEngagement.current.interactionCount,
            sectionCompletion: true
          });
        }

        // Comparison chart section (estimated 40-50% of page)
        if (currentScrollPercentage >= 40 && currentScrollPercentage <= 50 && !contentEngagement.current.comparisonChartViewed) {
          contentEngagement.current.comparisonChartViewed = true;
          contentEngagement.current.sectionsCompleted++;
          trackInsuranceContentEngagement(insuranceType, 'comparison_chart', {
            timeSpent: Date.now() - timeOnPageStart.current,
            scrollDepth: currentScrollPercentage,
            interactionCount: contentEngagement.current.interactionCount,
            sectionCompletion: true
          });
        }

        // Benefits/Use cases section (estimated 60-75% of page)
        if (currentScrollPercentage >= 60 && currentScrollPercentage <= 75 && !contentEngagement.current.useCaseScenarioViewed) {
          contentEngagement.current.useCaseScenarioViewed = true;
          contentEngagement.current.sectionsCompleted++;
          trackInsuranceContentEngagement(insuranceType, 'use_case_scenario', {
            timeSpent: Date.now() - timeOnPageStart.current,
            scrollDepth: currentScrollPercentage,
            interactionCount: contentEngagement.current.interactionCount,
            sectionCompletion: true
          });
        }

        // FAQ section (estimated 80-90% of page)
        if (currentScrollPercentage >= 80 && currentScrollPercentage <= 90 && !contentEngagement.current.faqSectionViewed) {
          contentEngagement.current.faqSectionViewed = true;
          contentEngagement.current.sectionsCompleted++;
          trackInsuranceContentEngagement(insuranceType, 'faq_section', {
            timeSpent: Date.now() - timeOnPageStart.current,
            scrollDepth: currentScrollPercentage,
            interactionCount: contentEngagement.current.interactionCount,
            sectionCompletion: true
          });
        }
      }
    };

    // Enhanced click tracking for insurance-specific elements
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const buttonText = target.textContent?.trim() || '';
      const href = (target as HTMLAnchorElement).href || '';
      const parentElement = target.closest('button, a, [role="button"]') as HTMLElement;

      contentEngagement.current.interactionCount++;

      // Track quote requests
      if (buttonText.toLowerCase().includes('quote') || buttonText.toLowerCase().includes('get free')) {
        userJourney.current.push('quote_request_clicked');
        leadQualityData.current.quotesRequested++;
        leadQualityData.current.urgencyLevel = 'immediate';

        if (insuranceType === 'whole_life') {
          trackWholeLifeInsuranceInteraction('quote_request');
        } else {
          trackLongTermCareInteraction('quote_request');
        }

        trackInsuranceQuoteFunnel(insuranceType, 'quote_generation');
      }

      // Track phone calls
      if (buttonText.toLowerCase().includes('call') || href.startsWith('tel:')) {
        userJourney.current.push('phone_call_clicked');
        leadQualityData.current.contactMethod = 'phone';
        leadQualityData.current.urgencyLevel = 'immediate';

        if (insuranceType === 'whole_life') {
          trackWholeLifeInsuranceInteraction('phone_call');
        } else {
          trackLongTermCareInteraction('phone_call');
        }

        trackCTAClick('phone_call', pathname, href);
      }

      // Track calculator interactions
      if (buttonText.toLowerCase().includes('calculator') || buttonText.toLowerCase().includes('calculate')) {
        userJourney.current.push('calculator_used');

        if (insuranceType === 'whole_life') {
          trackWholeLifeInsuranceInteraction('coverage_calculator');
        } else {
          trackLongTermCareInteraction('cost_calculator');
        }
      }

      // Track comparison views
      if (buttonText.toLowerCase().includes('compare') || target.closest('.comparison-table, .rate-table')) {
        userJourney.current.push('comparison_viewed');

        if (insuranceType === 'whole_life') {
          trackWholeLifeInsuranceInteraction('comparison_view', undefined, undefined, undefined, 'whole_vs_term');
        } else {
          trackLongTermCareInteraction('coverage_explorer');
        }
      }

      // Track cross-sell clicks
      const crossSellProducts = ['term-life', 'final-expense', 'medicare', 'social-security'];
      crossSellProducts.forEach(product => {
        if (href.includes(product)) {
          trackInsuranceCrossSell(
            insuranceType,
            product.replace('-', '_') as any,
            'click',
            `related_products_section`
          );
        }
      });

      // Track form submissions
      if ((target as HTMLInputElement).type === 'submit' || buttonText.toLowerCase().includes('submit')) {
        leadQualityData.current.contactMethod = 'form';

        if (insuranceType === 'whole_life') {
          trackWholeLifeInsuranceInteraction('form_submission');
        } else {
          trackLongTermCareInteraction('quote_request');
        }

        trackInsuranceQuoteFunnel(insuranceType, 'contact_request');
      }
    };

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const timeSpent = Date.now() - timeOnPageStart.current;
        leadQualityData.current.timeOnSite = timeSpent;
        leadQualityData.current.contentEngagement = contentEngagement.current.sectionsCompleted;

        // Calculate lead quality score
        const qualityScore = calculateLeadQualityScore(leadQualityData.current, timeSpent);

        if (timeSpent > 30000) { // Only track if user spent more than 30 seconds
          // Lead quality tracking would go here when function is implemented
        }
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [insuranceType, pathname]);

  return (
    <div data-insurance-analytics-container>
      {children}
    </div>
  );
}

// Calculate lead quality score based on engagement metrics
function calculateLeadQualityScore(leadData: any, timeSpent: number): number {
  let score = 0;

  // Time on site scoring (max 30 points)
  if (timeSpent > 300000) score += 30; // 5+ minutes
  else if (timeSpent > 180000) score += 25; // 3-5 minutes
  else if (timeSpent > 120000) score += 20; // 2-3 minutes
  else if (timeSpent > 60000) score += 15; // 1-2 minutes
  else if (timeSpent > 30000) score += 10; // 30s-1m

  // Content engagement scoring (max 25 points)
  score += Math.min(leadData.contentEngagement * 6, 25);

  // Contact method scoring (max 20 points)
  if (leadData.contactMethod === 'phone') score += 20;
  else if (leadData.contactMethod === 'form') score += 15;
  else if (leadData.contactMethod === 'chat') score += 10;

  // Urgency level scoring (max 15 points)
  if (leadData.urgencyLevel === 'immediate') score += 15;
  else if (leadData.urgencyLevel === 'researching') score += 10;
  else if (leadData.urgencyLevel === 'future_planning') score += 5;

  // Quote requests scoring (max 10 points)
  score += Math.min(leadData.quotesRequested * 5, 10);

  return Math.min(score, 100);
}

// Hook for manual insurance analytics tracking
export const useInsuranceAnalytics = (insuranceType: 'whole_life' | 'long_term_care') => {
  const pathname = usePathname();

  const trackInteraction = (
    interactionType: string,
    additionalData?: any
  ) => {
    if (insuranceType === 'whole_life') {
      trackWholeLifeInsuranceInteraction(
        interactionType as any,
        additionalData?.coverageAmount,
        additionalData?.userAge,
        additionalData?.premiumRange,
        additionalData?.comparisonType,
        additionalData?.contentSection
      );
    } else {
      trackLongTermCareInteraction(
        interactionType as any,
        additionalData?.dailyBenefitAmount,
        additionalData?.benefitPeriod,
        additionalData?.careType,
        additionalData?.userAge,
        additionalData?.premiumEstimate,
        additionalData?.policyType
      );
    }
  };

  const trackFunnelStep = (step: string, stepData?: any) => {
    trackInsuranceQuoteFunnel(insuranceType, step as any, stepData);
  };

  const trackContentEngagement = (contentType: string, metrics: any) => {
    trackInsuranceContentEngagement(insuranceType, contentType as any, metrics);
  };

  const trackCrossSelltive = (product: string, action: string, context: string) => {
    trackInsuranceCrossSell(insuranceType, product as any, action as any, context);
  };

  return {
    trackInteraction,
    trackFunnelStep,
    trackContentEngagement,
    trackCrossSelltive
  };
};