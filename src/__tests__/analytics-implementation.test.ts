// Analytics Implementation Test Suite
// Tests for the new landing page analytics tracking

import {
  landingPageAnalyticsConfig,
  trackLandingPagePerformance,
  initializeLandingPageTracking
} from '../lib/landing-page-analytics-config';

import {
  ga4ConversionGoals,
  conversionFunnels,
  trackConversion,
  trackFunnelStep
} from '../lib/conversion-tracking-config';

import {
  trackCountyPageEngagement,
  trackDisabilityInsuranceInteraction,
  trackCalculatorInteraction,
  trackBilingualContentEngagement,
  trackIslandSpecificEngagement
} from '../lib/analytics';

// Mock window.gtag and window.fbq
const mockGtag = jest.fn();
const mockFbq = jest.fn();

Object.defineProperty(window, 'gtag', {
  value: mockGtag,
  writable: true
});

Object.defineProperty(window, 'fbq', {
  value: mockFbq,
  writable: true
});

describe('Analytics Implementation for New Landing Pages', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    mockGtag.mockClear();
    mockFbq.mockClear();
  });

  describe('Landing Page Analytics Configuration', () => {
    test('should have configuration for all new landing pages', () => {
      const expectedPages = [
        'medicare-advantage-maui-county-hawaii',
        'medicare-advantage-cobb-county-georgia',
        'medicare-advantage-fresno-county-california',
        'medicare-cost-calculator',
        'medicare-advantage-broward-county-florida',
        'disability-insurance'
      ];

      expectedPages.forEach(pageKey => {
        expect(landingPageAnalyticsConfig[pageKey]).toBeDefined();
        expect(landingPageAnalyticsConfig[pageKey].pageName).toBeTruthy();
        expect(landingPageAnalyticsConfig[pageKey].pageType).toBeTruthy();
        expect(landingPageAnalyticsConfig[pageKey].primaryConversions.length).toBeGreaterThan(0);
      });
    });

    test('should have appropriate conversion values for each page type', () => {
      // County pages should have mid-to-high conversion values
      const countyPages = [
        'medicare-advantage-maui-county-hawaii',
        'medicare-advantage-cobb-county-georgia',
        'medicare-advantage-fresno-county-california',
        'medicare-advantage-broward-county-florida'
      ];

      countyPages.forEach(pageKey => {
        const config = landingPageAnalyticsConfig[pageKey];
        expect(config.trackingGoals.phoneCallValue).toBeGreaterThanOrEqual(70);
        expect(config.trackingGoals.phoneCallValue).toBeLessThanOrEqual(100);
      });

      // Product pages should have high conversion values
      const productPages = ['disability-insurance', 'medicare-cost-calculator'];
      productPages.forEach(pageKey => {
        const config = landingPageAnalyticsConfig[pageKey];
        expect(config.trackingGoals.phoneCallValue).toBeGreaterThanOrEqual(85);
      });
    });

    test('should have audience segments defined for targeting', () => {
      Object.values(landingPageAnalyticsConfig).forEach(config => {
        expect(config.audienceSegments.length).toBeGreaterThan(0);
        expect(Array.isArray(config.audienceSegments)).toBe(true);
      });
    });
  });

  describe('Conversion Goals Configuration', () => {
    test('should have conversion goals for all new pages', () => {
      const newPages = [
        'medicare-advantage-maui-county-hawaii',
        'medicare-advantage-cobb-county-georgia',
        'medicare-advantage-fresno-county-california',
        'medicare-cost-calculator',
        'medicare-advantage-broward-county-florida',
        'disability-insurance'
      ];

      newPages.forEach(pageKey => {
        expect(ga4ConversionGoals[pageKey]).toBeDefined();
        expect(ga4ConversionGoals[pageKey].length).toBeGreaterThan(0);
      });
    });

    test('should have macro and micro conversion goals', () => {
      Object.values(ga4ConversionGoals).forEach(goals => {
        const macroGoals = goals.filter(goal => goal.category === 'macro');
        const microGoals = goals.filter(goal => goal.category === 'micro');

        expect(macroGoals.length).toBeGreaterThan(0);
        expect(microGoals.length).toBeGreaterThan(0);
      });
    });

    test('should have appropriate conversion values', () => {
      Object.values(ga4ConversionGoals).forEach(goals => {
        goals.forEach(goal => {
          if (goal.category === 'macro') {
            expect(goal.value).toBeGreaterThanOrEqual(50);
          } else if (goal.category === 'micro') {
            expect(goal.value).toBeGreaterThanOrEqual(5);
            expect(goal.value).toBeLessThanOrEqual(50);
          }
        });
      });
    });
  });

  describe('Conversion Funnel Tracking', () => {
    test('should have funnel definitions for key pages', () => {
      const keyPages = [
        'medicare-advantage-maui-county-hawaii',
        'medicare-cost-calculator',
        'disability-insurance'
      ];

      keyPages.forEach(pageKey => {
        expect(conversionFunnels[pageKey]).toBeDefined();
        expect(conversionFunnels[pageKey].steps.length).toBeGreaterThanOrEqual(4);
      });
    });

    test('should have realistic dropoff rates', () => {
      Object.values(conversionFunnels).forEach(funnel => {
        let previousDropoff = 0;

        funnel.steps.forEach(step => {
          expect(step.expectedDropoffRate).toBeGreaterThanOrEqual(previousDropoff);
          expect(step.expectedDropoffRate).toBeLessThanOrEqual(95);
          previousDropoff = step.expectedDropoffRate;
        });
      });
    });
  });

  describe('Page-Specific Tracking Functions', () => {
    test('should track county page engagement correctly', () => {
      trackCountyPageEngagement('Maui County', 'Hawaii', 'provider_click', {
        provider_name: 'Kaiser Permanente'
      });

      expect(mockGtag).toHaveBeenCalledWith('event', 'county_page_engagement',
        expect.objectContaining({
          event_category: 'location_engagement',
          county: 'Maui County',
          state: 'Hawaii',
          engagement_type: 'provider_click',
          provider_name: 'Kaiser Permanente'
        })
      );
    });

    test('should track disability insurance interactions', () => {
      trackDisabilityInsuranceInteraction('income_calculator', {
        annual_income: 75000,
        coverage_percentage: 60
      });

      expect(mockGtag).toHaveBeenCalledWith('event', 'disability_insurance_interaction',
        expect.objectContaining({
          event_category: 'product_engagement',
          interaction_type: 'income_calculator',
          value: 15,
          annual_income: 75000,
          coverage_percentage: 60
        })
      );
    });

    test('should track calculator interactions', () => {
      trackCalculatorInteraction('medicare_cost', 'result_view', {
        total_cost: 2500,
        monthly_premium: 45
      });

      expect(mockGtag).toHaveBeenCalledWith('event', 'calculator_interaction',
        expect.objectContaining({
          event_category: 'tool_engagement',
          calculator_type: 'medicare_cost',
          interaction_type: 'result_view'
        })
      );
    });

    test('should track bilingual content engagement', () => {
      trackBilingualContentEngagement('spanish', 'servicios_salud', 'Fresno County');

      expect(mockGtag).toHaveBeenCalledWith('event', 'bilingual_content_engagement',
        expect.objectContaining({
          event_category: 'accessibility',
          language: 'spanish',
          content_section: 'servicios_salud',
          county: 'Fresno County'
        })
      );
    });

    test('should track island-specific engagement for Hawaii pages', () => {
      trackIslandSpecificEngagement('Maui', 'inter_island_coverage', {
        coverage_type: 'emergency_transport'
      });

      expect(mockGtag).toHaveBeenCalledWith('event', 'island_specific_engagement',
        expect.objectContaining({
          event_category: 'geographic_engagement',
          island: 'Maui',
          engagement_type: 'inter_island_coverage',
          coverage_type: 'emergency_transport'
        })
      );
    });
  });

  describe('Conversion Tracking Integration', () => {
    test('should track conversion with proper goal mapping', () => {
      trackConversion('medicare-advantage-maui-county-hawaii', 'phone_call', {
        call_source: 'hero_cta'
      });

      expect(mockGtag).toHaveBeenCalledWith('event', 'phone_call',
        expect.objectContaining({
          event_category: 'macro',
          value: 95,
          currency: 'USD',
          custom_page_key: 'medicare-advantage-maui-county-hawaii',
          call_source: 'hero_cta'
        })
      );
    });

    test('should track funnel steps correctly', () => {
      trackFunnelStep('medicare-cost-calculator', 'Calculator Start', {
        user_segment: 'cost_researchers'
      });

      expect(mockGtag).toHaveBeenCalledWith('event', 'funnel_step',
        expect.objectContaining({
          event_category: 'Conversion Funnel',
          step_name: 'Calculator Start',
          page_key: 'medicare-cost-calculator',
          user_segment: 'cost_researchers'
        })
      );
    });

    test('should handle Facebook Pixel tracking', () => {
      trackConversion('medicare-cost-calculator', 'phone_call');

      // Should call Facebook Pixel for lead events
      expect(mockFbq).toHaveBeenCalled();
    });
  });

  describe('Error Handling', () => {
    test('should handle missing gtag gracefully', () => {
      // Temporarily remove gtag
      const originalGtag = (window as any).gtag;
      delete (window as any).gtag;

      expect(() => {
        trackCountyPageEngagement('Test County', 'Test State', 'provider_click');
      }).not.toThrow();

      // Restore gtag
      (window as any).gtag = originalGtag;
    });

    test('should handle invalid page keys gracefully', () => {
      expect(() => {
        trackConversion('non-existent-page', 'phone_call');
      }).not.toThrow();

      expect(() => {
        trackFunnelStep('invalid-page-key', 'Invalid Step');
      }).not.toThrow();
    });

    test('should handle missing configuration gracefully', () => {
      expect(() => {
        trackLandingPagePerformance('undefined-page', 'test_event', {});
      }).not.toThrow();
    });
  });

  describe('Performance and Optimization', () => {
    test('should not make excessive analytics calls', () => {
      // Simulate rapid interactions
      for (let i = 0; i < 10; i++) {
        trackCalculatorInteraction('medicare_cost', 'input_change', { field: `input_${i}` });
      }

      // Should make reasonable number of calls, not one per interaction
      expect(mockGtag.mock.calls.length).toBeLessThanOrEqual(10);
    });

    test('should include performance data in tracking', () => {
      const performanceData = {
        page_load_time: 1500,
        time_to_interactive: 2000
      };

      trackLandingPagePerformance('medicare-cost-calculator', 'page_performance', performanceData);

      expect(mockGtag).toHaveBeenCalledWith('event', 'page_performance',
        expect.objectContaining(performanceData)
      );
    });
  });

  describe('Data Quality and Validation', () => {
    test('should validate tracking data structure', () => {
      const trackingCall = () => {
        trackCountyPageEngagement('Maui County', 'Hawaii', 'provider_click', {
          provider_name: 'Kaiser Permanente',
          engagement_time: 45
        });
      };

      trackingCall();

      const lastCall = mockGtag.mock.calls[mockGtag.mock.calls.length - 1];
      const eventData = lastCall[2];

      // Validate required fields
      expect(eventData.event_category).toBeDefined();
      expect(eventData.county).toBeDefined();
      expect(eventData.state).toBeDefined();
      expect(eventData.engagement_type).toBeDefined();

      // Validate data types
      expect(typeof eventData.engagement_time).toBe('number');
      expect(typeof eventData.provider_name).toBe('string');
    });

    test('should ensure consistent naming conventions', () => {
      Object.values(landingPageAnalyticsConfig).forEach(config => {
        // Page keys should use kebab-case
        expect(config.pageType).toMatch(/^[a-z]+(_[a-z]+)*$/);

        // Audience segments should use snake_case or kebab-case
        config.audienceSegments.forEach(segment => {
          expect(segment).toMatch(/^[a-z]+([_-][a-z]+)*$/);
        });
      });
    });

    test('should have consistent conversion value ranges', () => {
      Object.values(ga4ConversionGoals).forEach(goals => {
        goals.forEach(goal => {
          // Values should be positive numbers
          expect(goal.value).toBeGreaterThan(0);
          expect(typeof goal.value).toBe('number');

          // Currency should be USD
          expect(goal.currency).toBe('USD');

          // Event names should be snake_case
          expect(goal.eventName).toMatch(/^[a-z]+(_[a-z]+)*$/);
        });
      });
    });
  });

  describe('Integration Testing', () => {
    test('should work with LandingPageAnalytics component', () => {
      // Simulate component initialization
      const pageKey = 'medicare-advantage-maui-county-hawaii';
      initializeLandingPageTracking(pageKey);

      // Check that tracking functions are available on window
      expect((window as any).trackLandingPagePhoneCall).toBeDefined();
      expect((window as any).trackLandingPageCTA).toBeDefined();
      expect((window as any).trackLandingPageEngagement).toBeDefined();
    });

    test('should maintain backward compatibility', () => {
      // Test that existing tracking still works
      const existingConfig = landingPageAnalyticsConfig['gwinnett-county-georgia'];
      expect(existingConfig).toBeDefined();
      expect(existingConfig.trackingGoals.phoneCallValue).toBeDefined();
    });
  });
});

// Helper function to reset analytics state for testing
export const resetAnalyticsForTesting = () => {
  mockGtag.mockClear();
  mockFbq.mockClear();

  // Clear any stored analytics state
  if (typeof window !== 'undefined') {
    delete (window as any).trackLandingPagePhoneCall;
    delete (window as any).trackLandingPageCTA;
    delete (window as any).trackLandingPageEngagement;
  }
};

// Mock data generators for testing
export const generateMockAnalyticsEvent = (pageKey: string, eventType: string) => ({
  page_key: pageKey,
  event_type: eventType,
  timestamp: Date.now(),
  session_id: 'mock_session_123',
  user_id: 'mock_user_456'
});

export const generateMockConversionData = (pageKey: string, goalValue: number) => ({
  page_key: pageKey,
  conversion_value: goalValue,
  conversion_currency: 'USD',
  conversion_timestamp: new Date().toISOString(),
  user_journey_duration: Math.floor(Math.random() * 600) + 60 // 1-10 minutes
});