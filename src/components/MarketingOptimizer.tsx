'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import marketingStrategies, { MarketingStrategy } from '@/lib/marketing-strategy-config';

interface MarketingOptimizerProps {
  pageKey?: string;
  enableDynamicOptimization?: boolean;
  trackKeywordPerformance?: boolean;
}

export default function MarketingOptimizer({
  pageKey,
  enableDynamicOptimization = true,
  trackKeywordPerformance = true
}: MarketingOptimizerProps) {
  const pathname = usePathname();
  const [strategy, setStrategy] = useState<MarketingStrategy | null>(null);
  const [optimizationsApplied, setOptimizationsApplied] = useState<string[]>([]);

  useEffect(() => {
    // Determine page key from pathname or prop
    const currentPageKey = pageKey || extractPageKeyFromPath(pathname);
    const pageStrategy = currentPageKey ? marketingStrategies[currentPageKey] : null;

    if (pageStrategy) {
      setStrategy(pageStrategy);
      applyMarketingOptimizations(pageStrategy);
    }
  }, [pageKey, pathname]);

  const extractPageKeyFromPath = (path: string): string | null => {
    const pathSegments = path.split('/').filter(Boolean);

    // Try exact matches first
    for (const key in marketingStrategies) {
      if (path.includes(key)) return key;
    }

    // Try partial matches
    const lastSegment = pathSegments[pathSegments.length - 1];
    if (lastSegment && marketingStrategies[lastSegment]) {
      return lastSegment;
    }

    // Try compound paths
    const compoundKey = pathSegments.slice(-2).join('-');
    if (marketingStrategies[compoundKey]) {
      return compoundKey;
    }

    return null;
  };

  const applyMarketingOptimizations = (pageStrategy: MarketingStrategy) => {
    const applied: string[] = [];

    // Apply keyword tracking
    if (trackKeywordPerformance) {
      trackKeywordImpressions(pageStrategy);
      applied.push('keyword_tracking');
    }

    // Apply dynamic content optimizations
    if (enableDynamicOptimization) {
      injectSchemaMarkup(pageStrategy);
      optimizeInternalLinking(pageStrategy);
      enhanceUserExperience(pageStrategy);
      applied.push('dynamic_optimization');
    }

    // Track marketing events
    trackMarketingEvents(pageStrategy);
    applied.push('marketing_events');

    setOptimizationsApplied(applied);
  };

  const trackKeywordImpressions = (pageStrategy: MarketingStrategy) => {
    if (typeof window === 'undefined') return;

    // Track primary keyword performance
    pageStrategy.keywordStrategy.primary.forEach(keyword => {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'keyword_impression', {
          event_category: 'SEO',
          event_label: keyword,
          page_key: pageStrategy.pageKey,
          keyword_type: 'primary',
          search_volume_tier: getSearchVolumeTier(keyword, pageStrategy),
          keyword_intent: getKeywordIntent(keyword, pageStrategy)
        });
      }
    });

    // Track long-tail keyword opportunities
    pageStrategy.keywordStrategy.longTail.forEach(keyword => {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'longtail_keyword_opportunity', {
          event_category: 'SEO',
          event_label: keyword,
          page_key: pageStrategy.pageKey,
          keyword_type: 'long_tail'
        });
      }
    });
  };

  const getSearchVolumeTier = (keyword: string, strategy: MarketingStrategy): string => {
    if (strategy.keywordStrategy.searchVolume.high.includes(keyword)) return 'high';
    if (strategy.keywordStrategy.searchVolume.medium.includes(keyword)) return 'medium';
    if (strategy.keywordStrategy.searchVolume.low.includes(keyword)) return 'low';
    return 'unknown';
  };

  const getKeywordIntent = (keyword: string, strategy: MarketingStrategy): string => {
    if (strategy.keywordStrategy.intent.commercial.includes(keyword)) return 'commercial';
    if (strategy.keywordStrategy.intent.informational.includes(keyword)) return 'informational';
    if (strategy.keywordStrategy.intent.navigational.includes(keyword)) return 'navigational';
    if (strategy.keywordStrategy.intent.transactional.includes(keyword)) return 'transactional';
    return 'unknown';
  };

  const injectSchemaMarkup = (pageStrategy: MarketingStrategy) => {
    if (typeof window === 'undefined') return;

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": generateFAQFromKeywords(pageStrategy)
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": pageStrategy.pageName,
      "description": pageStrategy.contentStrategy.heroMessage,
      "provider": {
        "@type": "Organization",
        "name": "El-Mag Insurance",
        "telephone": "331-343-2584"
      },
      "areaServed": determineServiceArea(pageStrategy),
      "audience": {
        "@type": "Audience",
        "audienceType": pageStrategy.primaryAudience.join(', ')
      }
    };

    // Inject schemas into page
    injectSchema('marketing-faq-schema', faqSchema);
    injectSchema('marketing-service-schema', serviceSchema);
  };

  const generateFAQFromKeywords = (strategy: MarketingStrategy) => {
    return strategy.keywordStrategy.longTail.slice(0, 5).map(keyword => ({
      "@type": "Question",
      "name": keyword,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": generateAnswerFromKeyword(keyword, strategy)
      }
    }));
  };

  const generateAnswerFromKeyword = (keyword: string, strategy: MarketingStrategy): string => {
    // Generate contextual answers based on page strategy
    if (keyword.includes('cost') || keyword.includes('price')) {
      return `${strategy.contentStrategy.valuePropositions[0]} Contact our specialists at 331-343-2584 for personalized cost analysis.`;
    }
    if (keyword.includes('best') || keyword.includes('compare')) {
      return `${strategy.contentStrategy.valuePropositions[1]} Our experts help you compare all available options.`;
    }
    return `${strategy.contentStrategy.heroMessage} ${strategy.contentStrategy.valuePropositions[0]}`;
  };

  const determineServiceArea = (strategy: MarketingStrategy) => {
    if (strategy.pageKey.includes('county')) {
      const county = strategy.pageKey.split('-')[0];
      const state = strategy.pageKey.includes('georgia') ? 'Georgia' :
                   strategy.pageKey.includes('florida') ? 'Florida' :
                   strategy.pageKey.includes('california') ? 'California' : 'United States';
      return {
        "@type": "AdministrativeArea",
        "name": `${county} County, ${state}`
      };
    }
    return {
      "@type": "Country",
      "name": "United States"
    };
  };

  const optimizeInternalLinking = (pageStrategy: MarketingStrategy) => {
    if (typeof window === 'undefined') return;

    // Add internal link suggestions to page
    const linkContainer = document.getElementById('marketing-internal-links');
    if (linkContainer) {
      const linkHTML = pageStrategy.seoOptimizations.internalLinking
        .map(link => `<a href="/${link.toLowerCase().replace(/\s+/g, '-')}" class="internal-marketing-link">${link}</a>`)
        .join(' | ');
      linkContainer.innerHTML = `<div class="internal-links-wrapper">Related: ${linkHTML}</div>`;
    }
  };

  const enhanceUserExperience = (pageStrategy: MarketingStrategy) => {
    if (typeof window === 'undefined') return;

    // Add trust signals dynamically
    const trustContainer = document.getElementById('marketing-trust-signals');
    if (trustContainer) {
      const trustHTML = pageStrategy.contentStrategy.trustSignals
        .map(signal => `<div class="trust-signal"><span class="trust-icon">✓</span>${signal}</div>`)
        .join('');
      trustContainer.innerHTML = trustHTML;
    }

    // Add urgency messaging
    const urgencyContainer = document.getElementById('marketing-urgency');
    if (urgencyContainer) {
      const urgencyHTML = `
        <div class="urgency-banner">
          <span class="urgency-icon">⏰</span>
          <span class="urgency-text">${pageStrategy.contentStrategy.urgencyFactors[0]}</span>
        </div>
      `;
      urgencyContainer.innerHTML = urgencyHTML;
    }
  };

  const trackMarketingEvents = (pageStrategy: MarketingStrategy) => {
    if (typeof window === 'undefined') return;

    // Track marketing strategy application
    if ((window as any).gtag) {
      (window as any).gtag('event', 'marketing_strategy_applied', {
        event_category: 'Marketing',
        event_label: pageStrategy.pageKey,
        primary_audience: pageStrategy.primaryAudience.join(','),
        keyword_count: pageStrategy.keywordStrategy.primary.length,
        value_propositions: pageStrategy.contentStrategy.valuePropositions.length
      });
    }

    // Track competitive positioning
    if (pageStrategy.competitorAnalysis.mainCompetitors.length > 0) {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'competitive_positioning', {
          event_category: 'Marketing',
          event_label: pageStrategy.pageKey,
          main_competitors: pageStrategy.competitorAnalysis.mainCompetitors.join(','),
          differentiator_count: pageStrategy.competitorAnalysis.differentiators.length
        });
      }
    }
  };

  const injectSchema = (id: string, schema: any) => {
    if (typeof window === 'undefined') return;

    let schemaScript = document.getElementById(id);
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = id;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
  };

  // Expose marketing functions globally
  useEffect(() => {
    if (!strategy) return;

    (window as any).trackMarketingCTA = (ctaType: string, location: string) => {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'marketing_cta_click', {
          event_category: 'Marketing CTA',
          event_label: `${strategy.pageKey}_${ctaType}`,
          cta_type: ctaType,
          cta_location: location,
          audience_segment: strategy.primaryAudience.join(','),
          value: 35
        });
      }
    };

    (window as any).trackKeywordEngagement = (keyword: string, engagementType: string) => {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'keyword_engagement', {
          event_category: 'SEO Engagement',
          event_label: keyword,
          engagement_type: engagementType,
          page_key: strategy.pageKey,
          keyword_intent: getKeywordIntent(keyword, strategy)
        });
      }
    };

    (window as any).trackCompetitorComparison = (competitor: string, action: string) => {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'competitor_comparison', {
          event_category: 'Competitive Analysis',
          event_label: `${strategy.pageKey}_vs_${competitor}`,
          competitor: competitor,
          action: action,
          page_differentiators: strategy.competitorAnalysis.differentiators.length
        });
      }
    };
  }, [strategy]);

  if (!strategy) return null;

  return (
    <>
      {/* Marketing optimization containers */}
      <div id="marketing-trust-signals" className="hidden" />
      <div id="marketing-urgency" className="hidden" />
      <div id="marketing-internal-links" className="hidden" />

      {/* Marketing optimization styles */}
      <style jsx>{`
        .trust-signal {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #059669;
        }
        .trust-icon {
          margin-right: 0.5rem;
          font-weight: bold;
        }
        .urgency-banner {
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          margin: 1rem 0;
          font-weight: 600;
        }
        .urgency-icon {
          margin-right: 0.5rem;
          font-size: 1.2rem;
        }
        .internal-links-wrapper {
          margin: 1rem 0;
          padding: 1rem;
          background: #f3f4f6;
          border-radius: 0.5rem;
          font-size: 0.9rem;
        }
        .internal-marketing-link {
          color: #3b82f6;
          text-decoration: none;
          margin: 0 0.5rem;
        }
        .internal-marketing-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

// Hook for easy marketing strategy access
export const useMarketingStrategy = (pageKey?: string) => {
  const pathname = usePathname();
  const [strategy, setStrategy] = useState<MarketingStrategy | null>(null);

  useEffect(() => {
    const currentPageKey = pageKey || pathname.split('/').filter(Boolean).pop() || '';
    const pageStrategy = marketingStrategies[currentPageKey];
    setStrategy(pageStrategy || null);
  }, [pageKey, pathname]);

  return {
    strategy,
    trackMarketingCTA: (ctaType: string, location: string) => {
      (window as any).trackMarketingCTA?.(ctaType, location);
    },
    trackKeywordEngagement: (keyword: string, engagementType: string) => {
      (window as any).trackKeywordEngagement?.(keyword, engagementType);
    },
    trackCompetitorComparison: (competitor: string, action: string) => {
      (window as any).trackCompetitorComparison?.(competitor, action);
    }
  };
};