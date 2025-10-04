# Southwest Region Analytics Setup Guide

## Overview
Comprehensive analytics tracking for the `/regions/southwest` webpage to measure performance, user engagement, bilingual support effectiveness, and conversion metrics for Arizona, Nevada, and New Mexico markets.

---

## Analytics Implementation

### 1. Tracking Files Created

#### `/src/lib/analytics/southwest-tracking.ts`
Core analytics tracking library with specialized functions for:
- Page view tracking with Southwest market metrics
- State-specific engagement (AZ, NV, NM)
- Bilingual support interaction tracking
- Snowbird coverage interest monitoring
- Desert health specialization tracking
- MA leadership engagement
- CTA conversion tracking
- User journey analysis
- Lead quality scoring
- Facebook Pixel integration

#### `/src/components/SouthwestAnalytics.tsx`
Client-side analytics component that:
- Automatically tracks page views on load
- Monitors scroll depth and section visibility
- Captures CTA clicks (phone, bilingual contact, plan comparison)
- Tracks bilingual support interactions
- Monitors snowbird coverage interest
- Measures desert health engagement
- Tracks user location and journey

---

## Key Performance Indicators (KPIs)

### Primary Metrics

#### 1. **Page Performance**
- **Page Views**: Total visits to Southwest region page
- **Unique Visitors**: Distinct users (target: 12,000/month at 6 months)
- **Time on Page**: Average engagement (target: 150+ seconds)
- **Scroll Depth**: Percentage viewed (target: 65%+)
- **Bounce Rate**: Users leaving without interaction (target: <45%)

#### 2. **State-Specific Engagement**
Track by state (AZ, NV, NM):
- State highlight views
- State link clicks
- State-specific CTA interactions
- Time spent on state content
- Market data interest by state

#### 3. **Southwest Specialization Metrics**
- **Bilingual Support**: Spanish contact clicks, bilingual CTA engagement
- **Snowbird Coverage**: Seasonal coverage inquiries, multi-state interest
- **Desert Health**: Climate adaptation interest, specialized network views
- **MA Leadership**: Nevada market leader recognition, zero premium interest

#### 4. **Conversion Metrics**
- **Phone Calls**: Click-to-call conversions (value: $90)
- **Bilingual Contact**: Spanish-language assistance (value: $85)
- **Plan Comparison**: Free comparison requests (value: $75)
- **Snowbird Inquiry**: Seasonal coverage questions (value: $70)
- **Contact Forms**: Lead submissions (value: $65)
- **State Navigation**: State page visits (value: $30)

#### 5. **Lead Quality Scoring** (0-100)
Based on:
- Time on page (>180s = +15 points)
- Sections viewed (5 points per section, max 20)
- State-specific interest (+10 points)
- Bilingual interest (+15 points - high-value Southwest market)
- Snowbird interest (+12 points - specialty niche)

---

## Google Analytics 4 Events

### Custom Events Tracked

#### Page View Events
```javascript
Event: 'southwest_page_view'
Parameters:
  - total_population: 7,200,000
  - states_covered: 3
  - az_ma_penetration: 54
  - nv_ma_penetration: 56 (Southwest leader)
  - nm_ma_penetration: 53
  - hispanic_population_pct: 25
  - bilingual_support: true
  - desert_healthcare: true
  - avg_ma_penetration: 54.3
  - user_state, user_city, user_county
```

#### Market Leadership Events
```javascript
Event: 'market_leadership_identified'
Categories:
  - nevada_southwest_leader (value: $95)
  - arizona_snowbird_market (value: $85)
  - new_mexico_cultural_market (value: $80)

Event: 'bilingual_market_opportunity'
Parameters:
  - hispanic_population: 25
  - bilingual_support: true
  - market_size: 'large'
  - value: $90
```

#### CTA Click Events
```javascript
Event: 'southwest_cta_click'
Types:
  - phone_call (value: $90)
  - bilingual_contact (value: $85)
  - free_plan_comparison (value: $75)
  - snowbird_info (value: $70)
  - contact_form (value: $65)
  - state_link (value: $30)
```

#### State Engagement Events
```javascript
Event: 'southwest_state_engagement'
Types:
  - highlight_view
  - market_data_view
  - state_link_click
  - network_interest
States: AZ, NV, NM
```

#### Bilingual Support Events
```javascript
Event: 'bilingual_support_interest'
Types:
  - bilingual_cta_click
  - spanish_content_view
  - bilingual_info_view
Parameters:
  - language_preference: 'spanish' | 'english'
  - conversion_intent: boolean
  - hispanic_focus: true
  - value: $85 (with intent) or $40 (without)
```

#### Snowbird Coverage Events
```javascript
Event: 'snowbird_coverage_interest'
Types:
  - snowbird_section_view
  - multi_state_inquiry
  - seasonal_coverage_interest
Parameters:
  - states_of_interest: 'arizona' (primary)
  - season_type: 'winter' | 'year_round'
  - specialty_market: 'snowbird_retiree'
  - value: $70
```

#### Desert Health Events
```javascript
Event: 'desert_health_interest'
Focus Areas:
  - heat_prevention
  - climate_adaptation
  - wellness_programs
  - specialized_networks
Engagement Levels:
  - inquiry (value: $60)
  - click (value: $35)
  - view (value: $20)
```

#### MA Leadership Events
```javascript
Event: 'ma_leadership_engagement'
Types:
  - section_view
  - nv_leadership_view
  - zero_premium_interest
  - network_exploration
Parameters:
  - market_focus: 'high_penetration_competitive'
  - value: $45
```

#### User Journey Tracking
```javascript
Event: 'southwest_user_journey'
Primary Interests:
  - ma_plans
  - bilingual_support
  - snowbird_coverage
  - desert_health
  - plan_comparison
Conversion Actions:
  - phone_call (value: $100)
  - bilingual_contact (value: $95)
  - form_submit (value: $80)
  - none (value: $25)
```

#### Lead Quality Events
```javascript
Event: 'southwest_lead_quality'
Quality Tiers:
  - high_quality (score 80+, value: $125)
  - medium_quality (score 60-79, value: $85)
  - low_quality (score <60, value: $45)

Special Indicators:
  - bilingual_interest_flag: boolean (+15 points)
  - snowbird_interest_flag: boolean (+12 points)
  - state_specific_interest: boolean (+10 points)
```

---

## Facebook Pixel Events

### Standard Events
```javascript
// Page View
fbq('track', 'PageView', {
  content_name: 'Southwest Medicare Coverage',
  content_category: 'Regional Medicare',
  value: 12,
  currency: 'USD',
  custom_data: {
    region: 'southwest',
    market_type: 'high_ma_penetration'
  }
})

// Lead Conversion
fbq('track', 'Lead', {
  content_name: 'Southwest Phone Call',
  content_category: 'Regional Medicare',
  value: 85,
  currency: 'USD',
  custom_data: {
    region: 'southwest',
    state: 'AZ|NV|NM',
    market_type: 'high_ma_penetration',
    bilingual_support: true
  }
})

// Bilingual Lead
fbq('track', 'Lead', {
  content_name: 'Southwest Bilingual Contact',
  value: 85,
  currency: 'USD',
  custom_data: {
    bilingual_interest: true,
    hispanic_focus: true
  }
})

// Checkout Initiation
fbq('track', 'InitiateCheckout', {
  content_name: 'Southwest Plan Comparison',
  value: 70,
  currency: 'USD'
})
```

---

## Conversion Funnel Tracking

### Southwest Conversion Funnel Steps

1. **Page Entry** (100% - Baseline)
   - Event: `page_view`
   - Expected: All visitors

2. **Region Overview Engagement** (60% - 40% dropoff)
   - Event: `region_overview_view`
   - Better retention than Mid-Atlantic (MA leadership focus)

3. **Market Specialization Interest** (40% - 60% dropoff)
   - Event: `ma_leadership_view` OR `bilingual_support_view` OR `snowbird_view`
   - Multiple paths based on user intent

4. **State-Specific Exploration** (25% - 75% dropoff)
   - Event: `southwest_state_engagement`
   - Viewing state highlights or market data

5. **Specialized Service Interest** (15% - 85% dropoff)
   - Event: `bilingual_contact` OR `snowbird_info` OR `desert_health_click`
   - Niche market engagement

6. **Conversion** (8-10% - 90-92% dropoff)
   - Event: `phone_call` OR `bilingual_contact` OR `free_plan_comparison`
   - Final conversion action

### Target Conversion Rates
- **Phone Call**: 4-6% of total visitors
- **Bilingual Contact**: 2-3% of total visitors (high value)
- **Plan Comparison**: 3-5% of total visitors
- **Combined Conversion**: 9-14% of total visitors

---

## Google Analytics 4 Dashboard Setup

### Recommended Custom Reports

#### 1. Southwest Overview Report
**Metrics:**
- Total Page Views
- Unique Users
- Average Engagement Time
- Scroll Depth Distribution
- Conversion Rate by Type
- Bilingual vs. English engagement

**Dimensions:**
- User State (AZ, NV, NM focus)
- Device Category
- Traffic Source
- Language Preference

#### 2. State Performance Report
**Metrics by State:**
- AZ: Highlight views, snowbird interest, conversions
- NV: Highlight views, plan comparison, conversions (expect highest)
- NM: Highlight views, bilingual interest, conversions

**Comparison:**
- State engagement rate
- State conversion rate
- State lead quality score

#### 3. Bilingual Support Report
**Metrics:**
- Bilingual CTA clicks
- Spanish content engagement
- Bilingual lead quality
- Conversion rate comparison (bilingual vs. standard)

**Segments:**
- Hispanic/Latino users
- Spanish-language preference
- Bilingual contact path

#### 4. Specialty Markets Report
**Snowbird Market:**
- Snowbird section views
- Multi-state coverage interest
- Seasonal inquiry patterns
- Arizona focus conversion

**Desert Health:**
- Climate adaptation interest
- Specialized network engagement
- Heat prevention program views

---

## Key Segments to Create

### 1. High-Intent MA Users
**Conditions:**
- Time on page > 120 seconds
- Viewed MA leadership section
- Engaged with state-specific content
- Nevada or Arizona focus

**Value:** High conversion probability (Nevada 56% MA market)

### 2. Bilingual Support Seekers
**Conditions:**
- Clicked bilingual CTAs
- Engaged with Spanish content
- Time on bilingual sections > 45 seconds
- Hispanic/Latino demographic indicators

**Value:** High-value niche market ($85 lead value)

### 3. Snowbird/Seasonal Residents
**Conditions:**
- Viewed snowbird coverage section
- Arizona state focus
- Multi-state coverage interest
- Seasonal timing (Oct-Apr)

**Value:** Specialty market with unique needs

### 4. Desert Health Focus
**Conditions:**
- Engaged with desert health content
- Climate adaptation interest
- Specialized network views
- Arizona or New Mexico focus

**Value:** Unique Southwest differentiator

### 5. Nevada Market Leaders
**Conditions:**
- Nevada state focus
- MA leadership section engagement
- Zero premium plan interest
- Las Vegas area

**Value:** Highest MA penetration market (56%)

---

## A/B Testing Recommendations

### Test 1: Bilingual CTA Placement
- **Variant A**: "Se Habla Español" in footer only
- **Variant B**: Bilingual CTAs throughout page
- **Metric**: Bilingual contact conversion rate

### Test 2: Nevada Market Leadership Emphasis
- **Variant A**: Current (56% penetration highlighted)
- **Variant B**: "Las Vegas: Most Competitive Medicare Market"
- **Metric**: Nevada engagement, plan comparison clicks

### Test 3: Snowbird Messaging
- **Variant A**: "Snowbird & Retiree Specialists"
- **Variant B**: "Part-Time Resident Medicare Coverage"
- **Metric**: Snowbird inquiry rate, AZ conversions

### Test 4: Desert Health Positioning
- **Variant A**: Section emphasis on climate adaptation
- **Variant B**: Section emphasis on specialized networks
- **Metric**: Desert health engagement, network interest

---

## Monitoring & Optimization

### Daily Checks
- [ ] Page views and unique visitors
- [ ] Conversion rate (phone + bilingual + form)
- [ ] Average time on page
- [ ] Bounce rate
- [ ] Bilingual CTA performance

### Weekly Reviews
- [ ] State-specific performance (AZ vs. NV vs. NM)
- [ ] Bilingual support engagement trends
- [ ] Snowbird market seasonality (Oct-Apr peak)
- [ ] Funnel dropoff analysis
- [ ] Lead quality distribution

### Monthly Analysis
- [ ] Month-over-month growth
- [ ] Seasonal trends (snowbird season impact)
- [ ] State market ROI comparison
- [ ] Bilingual vs. standard conversion rates
- [ ] Specialty market performance (snowbird, desert health)
- [ ] Device and traffic source effectiveness

---

## Success Metrics Targets

### Phase 1: Launch (Months 1-2)
- **Page Views**: 3,000-5,000/month
- **Conversion Rate**: 6-8%
- **Phone Calls**: 180-250/month
- **Bilingual Contacts**: 60-100/month
- **Plan Comparisons**: 120-180/month
- **Avg Time on Page**: 90-120 seconds

### Phase 2: Optimization (Months 3-6)
- **Page Views**: 8,000-12,000/month
- **Conversion Rate**: 8-11%
- **Phone Calls**: 400-650/month
- **Bilingual Contacts**: 150-250/month
- **Plan Comparisons**: 300-480/month
- **Avg Time on Page**: 120-150 seconds

### Phase 3: Scale (Months 7-12)
- **Page Views**: 15,000-25,000/month
- **Conversion Rate**: 10-14%
- **Phone Calls**: 750-1,250/month
- **Bilingual Contacts**: 300-500/month
- **Plan Comparisons**: 600-1,000/month
- **Avg Time on Page**: 150-180 seconds

---

## ROI Tracking

### Lead Value Calculation

**Cost Per Lead (CPL) Targets:**
- Google Analytics tracking: $28-42
- Facebook Pixel tracking: $22-38
- Bilingual campaigns: $30-45 (higher acquisition, higher value)

**Lead to Sale Conversion:**
- Target: 15-20% (18% with bilingual support)
- Medicare Advantage commission: ~$600/enrollment
- Medicare Supplement avg premium: ~$1,600/year (Southwest)

**Expected ROI by Market:**
- **Nevada (56% MA)**: Conservative 12:1, Optimistic 18:1
- **Arizona (54% MA + Snowbird)**: Conservative 11:1, Optimistic 16:1
- **New Mexico (53% MA + Cultural)**: Conservative 10:1, Optimistic 15:1
- **Bilingual Market**: Conservative 13:1, Optimistic 19:1

### Attribution Model
- **First Click**: Initial traffic source
- **Last Click**: Final conversion source
- **Linear**: Equal credit across journey
- **Time Decay**: More credit to recent interactions
- **Southwest-Specific**: Bilingual path attribution, snowbird seasonality

---

## Unique Southwest Tracking Features

### 1. Bilingual Support Analytics
```javascript
// Track language preference patterns
Event: 'language_preference_detected'
Parameters:
  - browser_language: 'es' | 'en'
  - bilingual_cta_shown: boolean
  - spanish_content_engagement: number
```

### 2. Snowbird Seasonality Tracking
```javascript
// Track seasonal patterns
Event: 'snowbird_season_activity'
Parameters:
  - season: 'high' (Oct-Apr) | 'low' (May-Sep)
  - arizona_focus: boolean
  - multi_state_interest: boolean
```

### 3. Desert Health Specialization
```javascript
// Track unique Southwest health focus
Event: 'desert_health_engagement'
Parameters:
  - climate_focus: boolean
  - heat_prevention_interest: boolean
  - specialized_network_view: boolean
```

### 4. MA Market Leadership Recognition
```javascript
// Track Nevada market leader positioning
Event: 'market_leader_recognition'
Parameters:
  - nevada_56_percent_viewed: boolean
  - competitive_market_interest: boolean
  - zero_premium_focus: boolean
```

---

## Data Privacy & Compliance

### HIPAA Considerations
- **No PII**: Do not track personally identifiable information
- **Anonymize IP**: Enable IP anonymization in GA4
- **Language Preference**: Track without storing personal details
- **Cookie Consent**: Bilingual consent management

### CMS Marketing Guidelines
- Bilingual marketing compliance
- No discriminatory targeting
- Transparent data usage (English + Spanish)
- User opt-out capabilities (both languages)

---

## Implementation Checklist

### Completed ✅
- [x] `/src/lib/analytics/southwest-tracking.ts` created
- [x] `/src/components/SouthwestAnalytics.tsx` created
- [x] Analytics component integrated into page
- [x] Section IDs added for tracking
- [x] Data attributes for state highlights
- [x] Bilingual CTA tracking
- [x] Snowbird coverage tracking
- [x] Desert health tracking
- [x] MA leadership tracking

### Pending Configuration
- [ ] Configure Google Analytics 4 custom events
- [ ] Set up GA4 custom dashboards
- [ ] Configure Facebook Pixel custom conversions
- [ ] Create bilingual campaign tracking
- [ ] Implement snowbird seasonality alerts
- [ ] Set up automated reporting (English + Spanish)
- [ ] Configure heat mapping (optional)
- [ ] Bilingual A/B testing framework

---

## Competitive Advantages in Analytics

### vs. National Medicare Sites
**Our Edge:**
- Bilingual support tracking (unique)
- Snowbird market analytics
- Desert health specialization metrics
- Southwest-specific lead scoring

### vs. Local Competitors
**Our Edge:**
- Multi-state Southwest analytics
- Cultural competency tracking
- Seasonal pattern recognition
- MA leadership positioning metrics

---

## Success Criteria

### Month 1-2
- All Southwest-specific events implemented ✅
- Analytics tracking configured ✅
- Baseline metrics established
- Bilingual tracking validated

### Month 3-6
- 12% improvement in user engagement
- 6-9% increase in conversion rate
- Bilingual conversion rate >18%
- Positive snowbird seasonality impact

### Month 7-12
- 25% improvement in user engagement
- 12-16% increase in conversion rate
- Bilingual market leader in Southwest
- Featured snippets for Southwest Medicare queries
- Snowbird season conversion spike (Oct-Apr)

---

**Document Version**: 1.0
**Last Updated**: 2024
**Next Review**: Monthly (bilingual performance), Quarterly (seasonal adjustments)
**Bilingual Support**: English primary, Spanish tracking integrated
**Owner**: SEO/Analytics Team
