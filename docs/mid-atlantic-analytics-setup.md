# Mid-Atlantic Region Analytics Setup Guide

## Overview
Comprehensive analytics tracking for the `/regions/mid-atlantic` webpage to measure performance, user engagement, and conversion metrics based on the Facebook AEP 2025 low penetration strategy.

---

## Analytics Implementation

### 1. Tracking Files Created

#### `/src/lib/analytics/mid-atlantic-tracking.ts`
Core analytics tracking library with specialized functions for:
- Page view tracking with market-specific metrics
- State-specific engagement monitoring
- CTA conversion tracking
- User journey analysis
- Lead quality scoring
- Scroll depth tracking
- Facebook Pixel integration

#### `/src/components/MidAtlanticAnalytics.tsx`
Client-side analytics component that:
- Automatically tracks page views on load
- Monitors scroll depth and section visibility
- Captures CTA clicks (phone, contact, state links)
- Tracks user location and journey
- Measures time on page and engagement quality

---

## Key Performance Indicators (KPIs)

### Primary Metrics

#### 1. **Page Performance**
- **Page Views**: Total visits to Mid-Atlantic region page
- **Unique Visitors**: Distinct users viewing the page
- **Time on Page**: Average engagement time (target: 120+ seconds)
- **Scroll Depth**: Percentage of page viewed (target: 60%+)
- **Bounce Rate**: Users leaving without interaction (target: <50%)

#### 2. **State-Specific Engagement**
Track by state (NY, PA, MD, NJ, DE):
- State highlight views
- State link clicks
- State-specific CTA interactions
- Time spent on state content

#### 3. **Market Opportunity Engagement**
- **Medigap Opportunity Section**: Views and time spent
- **MA Market Analysis**: Interaction with penetration data
- **Cost Navigation**: Interest in NY premium guidance
- **State Value Props**: Engagement with state-specific benefits

#### 4. **Conversion Metrics**
- **Phone Calls**: Click-to-call conversions (value: $90)
- **Contact Forms**: Coverage analysis requests (value: $75)
- **Quote Requests**: Lead submissions (value: $65)
- **State Navigation**: State page visits (value: $30)

#### 5. **Lead Quality Scoring** (0-100)
Based on:
- Time on page (>180s = +15 points)
- Sections viewed (5 points per section, max 20)
- State-specific interest (+10 points)
- Premium guidance interest (+15 points)

---

## Google Analytics 4 Events

### Custom Events Tracked

#### Page View Events
```javascript
Event: 'mid_atlantic_page_view'
Parameters:
  - total_beneficiaries: 42,800,000
  - underserved_beneficiaries: 2,300,000
  - states_covered: 5
  - ny_medigap_penetration: 21
  - ny_market_gap: 79
  - pa_ma_penetration: '74-82%'
  - md_ma_penetration: 30
  - medigap_opportunity_billions: 15.78
  - user_state, user_city, user_county
```

#### Market Opportunity Events
```javascript
Event: 'market_opportunity_identified'
Categories:
  - new_york_medigap_gap (value: $100)
  - maryland_ma_growth (value: $80)
  - pennsylvania_navigation (value: $75)
```

#### CTA Click Events
```javascript
Event: 'mid_atlantic_cta_click'
Types:
  - phone_call (value: $90)
  - free_coverage_analysis (value: $75)
  - contact_form (value: $65)
  - state_link (value: $30)
```

#### State Engagement Events
```javascript
Event: 'state_specific_engagement'
Types:
  - highlight_view
  - value_prop_view
  - market_data_view
  - state_link_click
```

#### Product Education Events
```javascript
Event: 'medigap_opportunity_engagement'
Focus Areas:
  - section_view
  - cost_navigation_click
  - gap_protection_view
```

#### User Journey Tracking
```javascript
Event: 'mid_atlantic_user_journey'
Captures:
  - journey_path: Array of sections visited
  - time_spent_seconds: Total time on page
  - primary_interest: medigap | medicare_advantage | state_comparison
  - conversion_action: phone_call | form_submit | none
```

#### Lead Quality Events
```javascript
Event: 'mid_atlantic_lead_quality'
Quality Tiers:
  - high_quality (score 80+, value: $120)
  - medium_quality (score 60-79, value: $80)
  - low_quality (score <60, value: $40)
```

---

## Facebook Pixel Events

### Standard Events
```javascript
// Page View
fbq('track', 'PageView', {
  content_name: 'Mid-Atlantic Medicare Coverage',
  content_category: 'Regional Medicare',
  value: 10,
  currency: 'USD'
})

// Lead Conversion
fbq('track', 'Lead', {
  content_name: 'Mid-Atlantic Phone Call',
  content_category: 'Regional Medicare',
  value: 85,
  currency: 'USD',
  custom_data: {
    region: 'mid-atlantic',
    state: 'NY|PA|MD|NJ|DE',
    market_opportunity: 'low_penetration_high_value'
  }
})

// Checkout Initiation
fbq('track', 'InitiateCheckout', {
  content_name: 'Mid-Atlantic Coverage Analysis',
  value: 65,
  currency: 'USD'
})
```

---

## Conversion Funnel Tracking

### Mid-Atlantic Conversion Funnel Steps

1. **Page Entry** (100% - Baseline)
   - Event: `page_view`
   - Expected: All visitors

2. **Region Overview Engagement** (55% - 45% dropoff)
   - Event: `region_overview_view`
   - Scroll to region overview section

3. **Market Opportunity Interest** (35% - 65% dropoff)
   - Event: `medigap_opportunity_view` or `ma_market_analysis_view`
   - Engagement with market data

4. **State-Specific Exploration** (20% - 80% dropoff)
   - Event: `state_specific_engagement`
   - Viewing state highlights or value props

5. **CTA Interaction** (10% - 90% dropoff)
   - Event: `state_link_click` or `contact_initiated`
   - Clicking state link or contact CTA

6. **Conversion** (3-5% - 95-97% dropoff)
   - Event: `phone_call` or `free_coverage_analysis`
   - Final conversion action

### Target Conversion Rates
- **Phone Call**: 3-5% of total visitors
- **Contact Form**: 2-4% of total visitors
- **State Navigation**: 8-12% of total visitors
- **Combined Conversion**: 13-21% of total visitors

---

## Google Analytics 4 Dashboard Setup

### Recommended Custom Reports

#### 1. Mid-Atlantic Overview Report
**Metrics:**
- Total Page Views
- Unique Users
- Average Engagement Time
- Scroll Depth Distribution
- Conversion Rate by Type

**Dimensions:**
- User State
- Device Category
- Traffic Source
- Landing Page

#### 2. State Performance Report
**Metrics by State:**
- NY: Highlight views, CTA clicks, conversions
- PA: Highlight views, CTA clicks, conversions
- MD: Highlight views, CTA clicks, conversions
- NJ/DE: Combined metrics

**Comparison:**
- State engagement rate
- State conversion rate
- State lead quality score

#### 3. Conversion Funnel Report
**Funnel Steps:**
- Page Entry → Region Overview → Market Opportunity → State Exploration → CTA → Conversion

**Analysis:**
- Dropoff rate at each step
- Time between steps
- Device impact on conversion

#### 4. Lead Quality Report
**Segments:**
- High Quality (80+): Count, conversion rate, avg time
- Medium Quality (60-79): Count, conversion rate, avg time
- Low Quality (<60): Count, conversion rate, avg time

**Dimensions:**
- Premium guidance interest
- State-specific interest
- Sections viewed

---

## Key Segments to Create

### 1. High-Intent Users
**Conditions:**
- Time on page > 120 seconds
- Viewed 3+ sections
- Interacted with state-specific content
- Viewed Medigap opportunity OR MA market analysis

**Value:** High conversion probability

### 2. New York Focus
**Conditions:**
- Viewed NY state highlight
- Clicked NY-specific content
- Interested in Medigap or premium navigation

**Value:** Highest market opportunity ($15.78B)

### 3. Cost-Conscious Users
**Conditions:**
- Engaged with cost navigation content
- Viewed premium guidance sections
- Spent time on NY market data

**Value:** Strong conversion potential

### 4. State Comparison Users
**Conditions:**
- Viewed multiple state highlights
- Engaged with MA market analysis
- Compared penetration rates

**Value:** Research-intensive, medium conversion

---

## A/B Testing Recommendations

### Test 1: Hero CTA Placement
- **Variant A**: Single CTA - "Get Free Coverage Analysis"
- **Variant B**: Dual CTA - "Get Free Analysis" + "Call Now"
- **Metric**: CTA click-through rate

### Test 2: Medigap Opportunity Positioning
- **Variant A**: Medigap section before MA market analysis
- **Variant B**: MA market analysis before Medigap section
- **Metric**: Time on section, scroll depth

### Test 3: State Highlight Format
- **Variant A**: Icon + text highlights (current)
- **Variant B**: Data-heavy cards with stats
- **Metric**: State engagement rate, state link clicks

### Test 4: NY Premium Messaging
- **Variant A**: "Navigate NY's highest premiums"
- **Variant B**: "Save thousands on NY Medicare costs"
- **Metric**: Cost navigation engagement, NY conversions

---

## Monitoring & Optimization

### Daily Checks
- [ ] Page views and unique visitors
- [ ] Conversion rate (phone + form)
- [ ] Average time on page
- [ ] Bounce rate

### Weekly Reviews
- [ ] State-specific performance comparison
- [ ] Funnel dropoff analysis
- [ ] Lead quality distribution
- [ ] Top performing CTAs

### Monthly Analysis
- [ ] Month-over-month growth
- [ ] Seasonal trends (AEP period focus)
- [ ] State market opportunity ROI
- [ ] Content engagement patterns
- [ ] Device and traffic source performance

---

## Success Metrics Targets

### Phase 1: Launch (Months 1-2)
- **Page Views**: 5,000-8,000/month
- **Conversion Rate**: 5-8%
- **Phone Calls**: 250-400/month
- **Contact Forms**: 150-250/month
- **Avg Time on Page**: 90-120 seconds

### Phase 2: Optimization (Months 3-6)
- **Page Views**: 10,000-15,000/month
- **Conversion Rate**: 8-12%
- **Phone Calls**: 500-800/month
- **Contact Forms**: 300-500/month
- **Avg Time on Page**: 120-150 seconds

### Phase 3: Scale (Months 7-12)
- **Page Views**: 20,000-30,000/month
- **Conversion Rate**: 12-15%
- **Phone Calls**: 1,000-1,500/month
- **Contact Forms**: 600-1,000/month
- **Avg Time on Page**: 150-180 seconds

---

## ROI Tracking

### Lead Value Calculation
Based on strategy document conversion assumptions:

**Cost Per Lead (CPL) Targets:**
- Google Analytics tracking: $25-40
- Facebook Pixel tracking: $20-35

**Lead to Sale Conversion:**
- Target: 15-20%
- Medicare Supplement avg premium: $1,800/year
- Medicare Advantage commission: ~$600/enrollment

**Expected ROI:**
- Conservative: 10.8:1
- Moderate: 15.1:1
- Optimistic: 19.2:1

### Attribution Model
- **First Click**: Initial traffic source
- **Last Click**: Final conversion source
- **Linear**: Equal credit across journey
- **Time Decay**: More credit to recent interactions

---

## Implementation Checklist

- [x] Create `/src/lib/analytics/mid-atlantic-tracking.ts`
- [x] Create `/src/components/MidAtlanticAnalytics.tsx`
- [x] Integrate analytics component into page
- [x] Add section IDs for tracking
- [x] Add data attributes for state highlights
- [ ] Configure Google Analytics 4 custom events
- [ ] Set up GA4 custom dashboards
- [ ] Configure Facebook Pixel custom conversions
- [ ] Create conversion goal tracking
- [ ] Set up automated reporting
- [ ] Implement A/B testing framework
- [ ] Configure heat mapping (optional)
- [ ] Set up real-time alerts for anomalies

---

## Data Privacy & Compliance

### HIPAA Considerations
- **No PII**: Do not track personally identifiable information
- **Anonymize IP**: Enable IP anonymization in GA4
- **Cookie Consent**: Implement consent management
- **Data Retention**: Set appropriate retention periods

### CMS Marketing Guidelines
- Track engagement, not health conditions
- No discriminatory targeting data
- Transparent data usage
- User opt-out capabilities

---

## Questions & Support

For analytics setup questions:
- Google Analytics: GA4 Help Center
- Facebook Pixel: Meta Business Help
- Custom implementation: Development team

**Document Version**: 1.0
**Last Updated**: 2024
**Next Review**: AEP 2025 preparation (August 2025)
