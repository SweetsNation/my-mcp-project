// Advanced Analytics Library for Emergency Evacuation Insurance
// Comprehensive tracking system for performance monitoring and optimization

interface EmergencyEvacuationMetrics {
  pageViews: number;
  uniqueVisitors: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  quoteRequests: number;
  callInitiations: number;
  formSubmissions: number;
  scrollDepth: number[];
  coreWebVitals: {
    lcp: number; // Largest Contentful Paint
    fid: number; // First Input Delay  
    cls: number; // Cumulative Layout Shift
  };
}

interface ConversionFunnel {
  stage: 'awareness' | 'consideration' | 'comparison' | 'quote_request' | 'application' | 'purchase';
  users: number;
  conversionRate: number;
  dropoffRate: number;
  averageTimeInStage: number;
}

interface UserSegmentation {
  segment: 'adventure_traveler' | 'business_traveler' | 'medical_traveler' | 'senior_traveler' | 'family_traveler';
  demographics: {
    ageRange: string;
    location: string;
    deviceType: 'mobile' | 'tablet' | 'desktop';
  };
  behavior: {
    pagesViewed: number;
    timeOnSite: number;
    engagementScore: number;
  };
  conversionData: {
    converted: boolean;
    conversionValue: number;
    conversionType: 'quote' | 'call' | 'form' | 'purchase';
  };
}

class EmergencyEvacuationAnalyticsTracker {
  private static instance: EmergencyEvacuationAnalyticsTracker;
  private sessionStartTime: number;
  private pageMetrics: EmergencyEvacuationMetrics;
  private conversionFunnel: ConversionFunnel[] = [];
  private userSegments: UserSegmentation[] = [];
  private performanceObserver: PerformanceObserver | null = null;

  static getInstance(): EmergencyEvacuationAnalyticsTracker {
    if (!EmergencyEvacuationAnalyticsTracker.instance) {
      EmergencyEvacuationAnalyticsTracker.instance = new EmergencyEvacuationAnalyticsTracker();
    }
    return EmergencyEvacuationAnalyticsTracker.instance;
  }

  constructor() {
    this.sessionStartTime = Date.now();
    this.pageMetrics = this.initializeMetrics();
    this.initializeFunnelTracking();
    this.setupPerformanceMonitoring();
  }

  private initializeMetrics(): EmergencyEvacuationMetrics {
    return {
      pageViews: 0,
      uniqueVisitors: 0,
      sessionDuration: 0,
      bounceRate: 0,
      conversionRate: 0,
      quoteRequests: 0,
      callInitiations: 0,
      formSubmissions: 0,
      scrollDepth: [],
      coreWebVitals: {
        lcp: 0,
        fid: 0,
        cls: 0
      }
    };
  }

  private initializeFunnelTracking(): void {
    this.conversionFunnel = [
      { stage: 'awareness', users: 0, conversionRate: 0, dropoffRate: 0, averageTimeInStage: 0 },
      { stage: 'consideration', users: 0, conversionRate: 0, dropoffRate: 0, averageTimeInStage: 0 },
      { stage: 'comparison', users: 0, conversionRate: 0, dropoffRate: 0, averageTimeInStage: 0 },
      { stage: 'quote_request', users: 0, conversionRate: 0, dropoffRate: 0, averageTimeInStage: 0 },
      { stage: 'application', users: 0, conversionRate: 0, dropoffRate: 0, averageTimeInStage: 0 },
      { stage: 'purchase', users: 0, conversionRate: 0, dropoffRate: 0, averageTimeInStage: 0 }
    ];
  }

  // Core Web Vitals and Performance Monitoring
  private setupPerformanceMonitoring(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // Monitor Core Web Vitals
    this.performanceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.processCoreWebVital(entry);
      }
    });

    try {
      this.performanceObserver.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.warn('Performance monitoring not supported:', e);
    }

    // Monitor page load performance
    window.addEventListener('load', () => {
      this.trackPageLoadMetrics();
    });
  }

  private processCoreWebVital(entry: PerformanceEntry): void {
    switch (entry.entryType) {
      case 'largest-contentful-paint':
        this.pageMetrics.coreWebVitals.lcp = entry.startTime;
        this.sendCoreWebVitalMetric('LCP', entry.startTime);
        break;
      case 'first-input':
        const fidEntry = entry as PerformanceEventTiming;
        this.pageMetrics.coreWebVitals.fid = fidEntry.processingStart - fidEntry.startTime;
        this.sendCoreWebVitalMetric('FID', this.pageMetrics.coreWebVitals.fid);
        break;
      case 'layout-shift':
        const clsEntry = entry as any;
        if (!clsEntry.hadRecentInput) {
          this.pageMetrics.coreWebVitals.cls += clsEntry.value;
          this.sendCoreWebVitalMetric('CLS', this.pageMetrics.coreWebVitals.cls);
        }
        break;
    }
  }

  private sendCoreWebVitalMetric(metric: string, value: number): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'core_web_vital', {
        event_category: 'emergency_evacuation_performance',
        event_label: metric,
        value: Math.round(value),
        custom_parameters: {
          metric_type: metric.toLowerCase(),
          page_type: 'emergency_evacuation_landing',
          performance_score: this.calculatePerformanceScore(metric, value)
        }
      });
    }
  }

  private calculatePerformanceScore(metric: string, value: number): 'good' | 'needs_improvement' | 'poor' {
    switch (metric) {
      case 'LCP':
        return value <= 2500 ? 'good' : value <= 4000 ? 'needs_improvement' : 'poor';
      case 'FID':
        return value <= 100 ? 'good' : value <= 300 ? 'needs_improvement' : 'poor';
      case 'CLS':
        return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs_improvement' : 'poor';
      default:
        return 'needs_improvement';
    }
  }

  private trackPageLoadMetrics(): void {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    const loadMetrics = {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      timeToInteractive: navigation.domInteractive - navigation.fetchStart,
      totalLoadTime: navigation.loadEventEnd - navigation.fetchStart
    };

    if (window.gtag) {
      window.gtag('event', 'page_performance', {
        event_category: 'emergency_evacuation_performance',
        event_label: 'page_load_metrics',
        custom_parameters: {
          dom_content_loaded: Math.round(loadMetrics.domContentLoaded),
          load_complete: Math.round(loadMetrics.loadComplete),
          time_to_interactive: Math.round(loadMetrics.timeToInteractive),
          total_load_time: Math.round(loadMetrics.totalLoadTime)
        }
      });
    }
  }

  // Advanced User Behavior Tracking
  trackUserEngagement(action: string, element: string, value?: number): void {
    const engagementData = {
      timestamp: Date.now(),
      action,
      element,
      value,
      sessionTime: Date.now() - this.sessionStartTime,
      scrollPosition: window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100
    };

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'user_engagement', {
        event_category: 'emergency_evacuation_behavior',
        event_action: action,
        event_label: element,
        value: value || 0,
        custom_parameters: {
          session_time_seconds: Math.round(engagementData.sessionTime / 1000),
          scroll_position_percent: Math.round(engagementData.scrollPosition),
          engagement_quality: this.calculateEngagementQuality(engagementData.sessionTime, engagementData.scrollPosition)
        }
      });
    }
  }

  private calculateEngagementQuality(sessionTime: number, scrollPosition: number): 'high' | 'medium' | 'low' {
    const timeScore = sessionTime > 120000 ? 3 : sessionTime > 60000 ? 2 : 1; // 2min, 1min thresholds
    const scrollScore = scrollPosition > 75 ? 3 : scrollPosition > 50 ? 2 : 1; // 75%, 50% thresholds
    const totalScore = (timeScore + scrollScore) / 2;
    
    return totalScore >= 2.5 ? 'high' : totalScore >= 1.5 ? 'medium' : 'low';
  }

  // Conversion Funnel Tracking
  trackFunnelStage(stage: ConversionFunnel['stage'], additionalData?: any): void {
    const stageIndex = this.conversionFunnel.findIndex(f => f.stage === stage);
    if (stageIndex !== -1) {
      this.conversionFunnel[stageIndex].users++;
      this.updateConversionRates();
    }

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'funnel_stage', {
        event_category: 'emergency_evacuation_funnel',
        event_action: `entered_${stage}`,
        event_label: stage,
        custom_parameters: {
          funnel_stage: stage,
          stage_number: stageIndex + 1,
          total_stages: this.conversionFunnel.length,
          session_time: Math.round((Date.now() - this.sessionStartTime) / 1000),
          ...additionalData
        }
      });
    }
  }

  private updateConversionRates(): void {
    for (let i = 0; i < this.conversionFunnel.length - 1; i++) {
      const current = this.conversionFunnel[i];
      const next = this.conversionFunnel[i + 1];
      
      if (current.users > 0) {
        next.conversionRate = (next.users / current.users) * 100;
        current.dropoffRate = ((current.users - next.users) / current.users) * 100;
      }
    }
  }

  // Lead Scoring and Qualification
  calculateLeadScore(actions: string[]): number {
    const actionScores: { [key: string]: number } = {
      'page_view': 5,
      'coverage_selected': 15,
      'calculator_used': 20,
      'quote_request': 50,
      'form_interaction': 25,
      'call_initiated': 75,
      'scenario_engaged': 10,
      'faq_engagement': 8,
      'cta_click': 12,
      'scroll_depth_75': 10,
      'time_on_page_2min': 15,
      'time_on_page_5min': 25
    };

    let totalScore = 0;
    actions.forEach(action => {
      totalScore += actionScores[action] || 0;
    });

    // Bonus for multiple high-value actions
    const highValueActions = actions.filter(action => 
      ['quote_request', 'call_initiated', 'form_interaction'].includes(action)
    ).length;
    
    if (highValueActions >= 2) totalScore += 30; // Multi-action bonus
    if (highValueActions >= 3) totalScore += 50; // Super engaged bonus

    return Math.min(totalScore, 100); // Cap at 100
  }

  // A/B Testing Framework
  initializeABTest(testName: string, variants: string[]): string {
    if (typeof window === 'undefined') return variants[0];

    let selectedVariant = localStorage.getItem(`ab_test_${testName}`);
    
    if (!selectedVariant) {
      selectedVariant = variants[Math.floor(Math.random() * variants.length)];
      localStorage.setItem(`ab_test_${testName}`, selectedVariant);
    }

    if (window.gtag) {
      window.gtag('event', 'ab_test_assignment', {
        event_category: 'emergency_evacuation_testing',
        event_label: testName,
        custom_parameters: {
          test_name: testName,
          variant: selectedVariant,
          total_variants: variants.length
        }
      });
    }

    return selectedVariant;
  }

  // Analytics Reporting
  generatePerformanceReport(): EmergencyEvacuationMetrics & {
    conversionFunnel: ConversionFunnel[];
    recommendations: string[];
  } {
    const recommendations: string[] = [];

    // Performance recommendations
    if (this.pageMetrics.coreWebVitals.lcp > 2500) {
      recommendations.push('Optimize Largest Contentful Paint - consider image optimization and critical CSS');
    }
    if (this.pageMetrics.coreWebVitals.fid > 100) {
      recommendations.push('Reduce First Input Delay - minimize JavaScript execution time');
    }
    if (this.pageMetrics.coreWebVitals.cls > 0.1) {
      recommendations.push('Improve Cumulative Layout Shift - ensure consistent element sizing');
    }

    // Conversion recommendations
    const awarenessToConsideration = this.conversionFunnel.find(f => f.stage === 'consideration')?.conversionRate || 0;
    if (awarenessToConsideration < 40) {
      recommendations.push('Improve awareness to consideration conversion - enhance value proposition');
    }

    const quoteRequestRate = this.conversionFunnel.find(f => f.stage === 'quote_request')?.conversionRate || 0;
    if (quoteRequestRate < 15) {
      recommendations.push('Optimize quote request conversion - simplify forms and reduce friction');
    }

    return {
      ...this.pageMetrics,
      conversionFunnel: this.conversionFunnel,
      recommendations
    };
  }

  // Event Tracking Integration
  trackCustomEvent(eventName: string, parameters: any): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'emergency_evacuation_custom',
        custom_parameters: {
          ...parameters,
          page_url: window.location.pathname,
          timestamp: Date.now(),
          session_id: this.generateSessionId()
        }
      });
    }
  }

  private generateSessionId(): string {
    return `evacuation_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Cleanup and dispose
  dispose(): void {
    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
    }
  }
}

// Export utilities and types
export type { EmergencyEvacuationMetrics, ConversionFunnel, UserSegmentation };
export { EmergencyEvacuationAnalyticsTracker };

// Initialize global tracker instance
let globalTracker: EmergencyEvacuationAnalyticsTracker | null = null;

export function initializeEmergencyEvacuationTracking(): EmergencyEvacuationAnalyticsTracker {
  if (!globalTracker) {
    globalTracker = EmergencyEvacuationAnalyticsTracker.getInstance();
  }
  return globalTracker;
}

export function getEmergencyEvacuationTracker(): EmergencyEvacuationAnalyticsTracker | null {
  return globalTracker;
}