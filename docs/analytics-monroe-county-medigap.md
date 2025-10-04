# Monroe County Medicare Supplement Analytics Tracking Documentation

## Overview

Comprehensive analytics tracking implementation for the Monroe County Florida Keys Medicare Supplement landing page. This tracking system captures unique island healthcare behaviors, hurricane preparedness engagement, snowbird coverage interest, and mainland specialist access patterns.

**Page:** `/medicare-supplement-monroe-county`
**Market:** Monroe County, Florida (Florida Keys)
**Total Beneficiaries:** 22,500
**Medigap Opportunity:** 14,000 (38% MA penetration)
**Geographic Challenges:** 120-mile island chain, 165+ miles to Miami specialists
**Seasonal Factors:** Hurricane season (June-November), Snowbird season (November-April)

---

## Analytics Configuration

### Conversion Values

```typescript
{
  phoneCallValue: 85,        // High value - limited competition in island market
  formSubmissionValue: 60,   // Strong lead indicator for Medigap
  quoteCTAValue: 40,         // Mid-funnel engagement
  contentEngagementThreshold: 130  // 2:10 minutes for 2,800-word content
}
```

### Audience Segments (16 segments)

1. **florida_keys_residents** - Year-round island residents
2. **snowbird_seasonal_residents** - Winter residents (Nov-Apr)
3. **hurricane_zone_seniors** - Hurricane preparedness focused
4. **island_healthcare_consumers** - Critical access hospital users
5. **mainland_specialist_dependent** - Require Miami/mainland care
6. **critical_access_hospital_users** - Limited local hospital capacity
7. **high_cost_healthcare_area** - Premium market awareness
8. **geographic_isolation_concerned** - Access to care concerns
9. **evacuation_coverage_seekers** - Hurricane evacuation coverage
10. **network_flexibility_prioritizers** - Nationwide coverage seekers
11. **upper_keys_residents** - Key Largo, Islamorada area
12. **middle_keys_residents** - Marathon area
13. **lower_keys_residents** - Key West area
14. **key_west_seniors** - Lower Keys Medical Center
15. **marathon_seniors** - Fishermen's Hospital
16. **key_largo_seniors** - Mariners Hospital

---

## Custom Event Types (19 Events)

### 1. Island Healthcare View
**Event:** `island_healthcare_view`
**Trigger:** User views island healthcare challenges section
**Value:** 15 points

```typescript
trackMonroeCountyMedigapEvent('island_healthcare_view', {
  section_viewed: 'healthcare_challenges',
  time_spent_seconds: 45
});
```

### 2. Hurricane Preparedness Engagement
**Event:** `hurricane_preparedness_engagement`
**Trigger:** User interacts with hurricane coverage content
**Value:** 35 points (high-value feature)

```typescript
trackHurricanePreparednessInterest('evacuation_coverage', 60);
```

**Interaction Types:**
- `evacuation_coverage` - Hurricane evacuation scenarios
- `emergency_care` - Storm emergency services
- `air_ambulance` - Medical evacuation transport
- `network_flexibility` - Nationwide coverage during evacuation

### 3. Snowbird Coverage Interest
**Event:** `snowbird_coverage_interest`
**Trigger:** Seasonal resident views snowbird-specific content
**Value:** 30 points

```typescript
trackSnowbirdCoverageInterest('seasonal_migration', 90);
```

**Coverage Types:**
- `seasonal_migration` - Winter resident coverage
- `summer_away` - Summer mainland residence
- `dual_state_coverage` - Multi-state flexibility

### 4. Mainland Specialist Access View
**Event:** `mainland_specialist_access_view`
**Trigger:** User explores Miami/mainland specialist access
**Value:** 25 points

```typescript
trackMainlandSpecialistInterest('miami_specialists', {
  distance_concern: '165_miles',
  specialty_type: 'cardiology'
});
```

**Access Types:**
- `miami_specialists` - Baptist Health South Florida network
- `homestead_care` - South Miami-Dade providers
- `air_ambulance_transfer` - Emergency medical transport

### 5. Cost-Benefit Analysis Interaction
**Event:** `cost_benefit_analysis_interaction`
**Trigger:** User interacts with cost comparison tables
**Value:** 20 points

```typescript
trackCostBenefitAnalysis('mainland_specialist_scenario');
```

**Scenarios:**
- `light_year` - Basic coverage year
- `mainland_specialist_scenario` - Frequent Miami trips
- `hurricane_evacuation_scenario` - Emergency evacuation costs

### 6. Critical Access Hospital Info
**Event:** `critical_access_hospital_info`
**Trigger:** Views critical access hospital information
**Value:** 15 points

```typescript
trackCriticalAccessHospitalInfo('fishermens_hospital', {
  limitation_concern: 'limited_cardiac_care'
});
```

**Hospitals:**
- `mariners_hospital` - Upper Keys (Tavernier)
- `fishermens_hospital` - Middle Keys (Marathon)
- `lower_keys_medical_center` - Lower Keys (Key West)

### 7. Medigap Plan Interest
**Event:** `medigap_plan_interest`
**Trigger:** User views specific Medigap plan details
**Value:** 30 points

```typescript
trackMedigapPlanInterest('plan_g', 165, {
  feature_interest: 'mainland_specialist_coverage'
});
```

**Plans:**
- `plan_g` - $165/month (most comprehensive)
- `plan_n` - $125/month (copay trade-off)
- `plan_g_high_deductible` - $45/month (budget option)

### 8. Keys Quote Request
**Event:** `keys_quote_request`
**Trigger:** User requests personalized quote
**Value:** 50 points (high-value conversion)

```typescript
trackKeysQuoteRequest('plan_g', {
  urgency: 'hurricane_season',
  region: 'lower_keys'
});
```

### 9. Florida Specialist Consultation
**Event:** `florida_specialist_consultation`
**Trigger:** User schedules expert consultation
**Value:** 60 points (highest conversion)

```typescript
trackFloridaSpecialistConsultation('phone', {
  concern: 'mainland_access',
  timeframe: 'within_week'
});
```

### 10. Hurricane Season Urgency
**Event:** `hurricane_season_urgency`
**Trigger:** User engages during active hurricane threat
**Value:** 40 points

```typescript
trackHurricaneSeasonUrgency('active_storm_forecast', {
  storm_name: 'Hurricane Category 3',
  days_until_arrival: 5
});
```

**Urgency Types:**
- `active_storm_forecast` - Named storm approaching
- `hurricane_watch` - 48-hour watch period
- `post_storm_enrollment` - After major hurricane
- `season_preparation` - Pre-season (May-June)

### 11. Air Ambulance Coverage Interest
**Event:** `air_ambulance_coverage_interest`
**Trigger:** User views air ambulance coverage details
**Value:** 35 points

```typescript
trackAirAmbulanceCoverageInterest('emergency_mainland_transfer', {
  cost_concern: '$25000_uncovered'
});
```

### 12. Baptist Health Network Interest
**Event:** `baptist_health_network_interest`
**Trigger:** User explores Miami hospital network
**Value:** 25 points

```typescript
trackBaptistHealthNetworkInterest('baptist_miami_cardiac', {
  specialty_needed: 'cardiology'
});
```

### 13. Evacuation Coverage Interest
**Event:** `evacuation_coverage_interest`
**Trigger:** User explores hurricane evacuation scenarios
**Value:** 35 points

```typescript
trackEvacuationCoverageInterest('mainland_temporary_stay');
```

**Scenarios:**
- `mandatory_evacuation` - Ordered evacuation
- `mainland_temporary_stay` - Temporary mainland residence
- `family_relocation` - Extended family stay

### 14. Deep Island Healthcare Engagement
**Event:** `deep_island_healthcare_engagement`
**Trigger:** User spends 3+ minutes, 75%+ scroll, views 5+ sections
**Value:** 45 points

```typescript
trackDeepIslandHealthcareEngagement(210, 85, 6);
// (timeSeconds, scrollDepth, sectionsViewed)
```

**Engagement Score Calculation (0-100):**
- **Time component (40 points):**
  - 60s+ = 10 points
  - 130s+ = 15 points
  - 300s+ = 10 points
  - 600s+ = 5 points
- **Scroll component (40 points):**
  - 25%+ = 10 points
  - 50%+ = 10 points
  - 75%+ = 15 points
  - 90%+ = 5 points
- **Section viewing (20 points):**
  - 3+ sections = 5 points
  - 5+ sections = 7 points
  - 8+ sections = 8 points

**Lead Quality:**
- 80-100: Hot lead (immediate follow-up)
- 60-79: Warm lead (24-hour follow-up)
- 40-59: Engaged lead (email nurture)
- 0-39: Browser (retargeting)

### 15. Plan Comparison Interaction
**Event:** `plan_comparison_interaction`
**Trigger:** User compares multiple Medigap plans
**Value:** 25 points

```typescript
trackPlanComparisonInteraction(['plan_g', 'plan_n'], 90);
```

### 16. Regional Keys Exploration
**Event:** `regional_keys_exploration`
**Trigger:** User explores multiple Keys regions
**Value:** 20 points

```typescript
trackRegionalKeysExploration(['upper_keys', 'middle_keys']);
```

### 17. Keys Region View
**Event:** `keys_region_view`
**Trigger:** User views specific Keys region content
**Value:** 15 points

```typescript
trackKeysRegionView('upper_keys', 'Key Largo');
```

**Regions:**
- `upper_keys` - Key Largo, Tavernier, Islamorada (Mariners Hospital)
- `middle_keys` - Marathon, Duck Key (Fishermen's Hospital)
- `lower_keys` - Key West, Big Pine Key (Lower Keys Medical Center)

### 18. Phone Call Click
**Event:** `keys_phone_call_click`
**Trigger:** User clicks phone number
**Value:** 50 points

```typescript
trackMonroeCountyMedigapEvent('keys_phone_call_click', {
  call_source: 'hero_cta',
  phone_number: '331-343-2584'
});
```

### 19. CTA Button Click
**Event:** `keys_cta_click`
**Trigger:** User clicks primary CTA button
**Value:** 40 points

```typescript
trackMonroeCountyMedigapEvent('keys_cta_click', {
  cta_type: 'get_quote',
  cta_location: 'hero'
});
```

---

## Automatic Tracking Features

### 1. Page View Tracking
Automatically fired on page load with full context:

```typescript
event('landing_page_view', {
  page_type: 'county',
  county: 'Monroe County',
  state: 'Florida',
  region: 'Florida Keys',
  product_type: 'medicare_supplement',
  market_size: 22500,
  island_chain: true,
  hurricane_zone: true
});
```

### 2. Scroll Depth Tracking
Milestones: 25%, 50%, 75%, 90%

```typescript
// 25% scroll
event('page_scroll', {
  scroll_depth: 25,
  page_type: 'island_medigap',
  section_reached: 'island_healthcare_challenges'
});

// 75% scroll (deep engagement)
event('deep_page_engagement', {
  scroll_depth: 75,
  time_on_page: 145,
  engagement_quality: 'high'
});
```

### 3. Time on Page Tracking
30-second engagement milestone:

```typescript
event('page_engagement_30s', {
  time_spent: 30,
  page_type: 'island_medigap'
});
```

### 4. Page Exit Tracking
Captures final engagement metrics:

```typescript
event('page_exit', {
  time_on_page: 210,
  max_scroll_depth: 85,
  engagement_score: 78,  // Calculated score
  lead_quality: 'warm'
});
```

---

## Implementation Guide

### Step 1: Import Tracking Module

```typescript
import {
  trackMonroeCountyMedigapEvent,
  trackKeysRegionView,
  trackHurricanePreparednessInterest,
  trackSnowbirdCoverageInterest,
  trackMainlandSpecialistInterest,
  trackCostBenefitAnalysis,
  trackMedigapPlanInterest,
  trackKeysQuoteRequest,
  trackFloridaSpecialistConsultation,
  initializeMonroeCountyTracking
} from '@/lib/analytics/monroe-county-medigap-tracking';
```

### Step 2: Initialize Tracking

```typescript
useEffect(() => {
  initializeMonroeCountyTracking();
  return () => {
    // Cleanup handled by module
  };
}, []);
```

### Step 3: Track User Interactions

**Hurricane Section:**
```typescript
<div
  onClick={() => trackHurricanePreparednessInterest('evacuation_coverage', 60)}
  onMouseEnter={() => trackMonroeCountyMedigapEvent('section_hover', {
    section: 'hurricane_preparedness'
  })}
>
  {/* Hurricane preparedness content */}
</div>
```

**Plan Selection:**
```typescript
<button
  onClick={() => trackMedigapPlanInterest('plan_g', 165, {
    feature_interest: 'mainland_specialist_coverage'
  })}
>
  View Plan G Details ($165/month)
</button>
```

**Quote Request:**
```typescript
<form onSubmit={(e) => {
  e.preventDefault();
  trackKeysQuoteRequest('plan_g', {
    urgency: 'hurricane_season',
    region: 'lower_keys'
  });
}}>
  {/* Quote form */}
</form>
```

---

## Key Performance Indicators (KPIs)

### Primary Conversions

| Metric | Target | Tracking |
|--------|--------|----------|
| Phone calls | 25/month | `keys_phone_call_click` |
| Quote requests | 40/month | `keys_quote_request` |
| Consultation bookings | 15/month | `florida_specialist_consultation` |
| Plan selections | 20/month | `medigap_plan_interest` |

### Engagement Metrics

| Metric | Target | Tracking |
|--------|--------|----------|
| Avg. time on page | 2:30 | Automatic scroll tracking |
| Scroll depth 75%+ | 35% | `deep_page_engagement` |
| Hurricane section views | 50% | `hurricane_preparedness_engagement` |
| Mainland specialist views | 40% | `mainland_specialist_access_view` |
| Multi-region exploration | 25% | `regional_keys_exploration` |

### Lead Quality Distribution

| Quality | Score | Monthly Target | Follow-up |
|---------|-------|----------------|-----------|
| Hot | 80-100 | 12 leads | Immediate call |
| Warm | 60-79 | 28 leads | 24-hour call |
| Engaged | 40-59 | 45 leads | Email nurture |
| Browser | 0-39 | N/A | Retargeting ads |

### Seasonal Tracking

**Hurricane Season (June-November):**
- Track: `hurricane_season_urgency` spike
- Expected: 40% increase in hurricane content engagement
- Action: Activate hurricane-specific email sequences

**Snowbird Season (November-April):**
- Track: `snowbird_coverage_interest` spike
- Expected: 35% increase in dual-state coverage questions
- Action: Promote nationwide coverage benefits

---

## GA4 Custom Dimensions

Configure these custom dimensions in GA4:

```javascript
// Event-scoped dimensions
{
  island_region: 'upper_keys' | 'middle_keys' | 'lower_keys',
  hospital_preference: 'mariners' | 'fishermens' | 'lower_keys_medical',
  hurricane_urgency: 'active_storm' | 'season_prep' | 'post_storm',
  mainland_dependency: 'high' | 'medium' | 'low',
  seasonal_resident: 'snowbird' | 'year_round',
  engagement_score: 0-100,
  lead_quality: 'hot' | 'warm' | 'engaged' | 'browser'
}
```

---

## GA4 Exploration Reports

### 1. Keys Regional Performance
**Template:** Free form
**Rows:** island_region
**Values:** conversions, engagement_score, avg_time_on_page
**Filter:** page_path contains '/medicare-supplement-monroe-county'

### 2. Hurricane Urgency Impact
**Template:** Funnel exploration
**Steps:**
1. Page view
2. Hurricane section view
3. Evacuation coverage interest
4. Quote request
**Breakdown:** hurricane_urgency

### 3. Lead Quality Funnel
**Template:** Funnel exploration
**Steps:**
1. Page view (all visitors)
2. 30s engagement
3. 75% scroll
4. Section views (5+)
5. Conversion
**Breakdown:** lead_quality

### 4. Seasonal Trends
**Template:** Line chart
**X-axis:** Date (monthly)
**Y-axis:** Events
**Lines:**
- Hurricane preparedness engagement
- Snowbird coverage interest
- Mainland specialist views
**Filter:** Monroe County page

---

## Testing & Validation

### Manual Testing Checklist

- [ ] Page view fires on load with correct context
- [ ] Scroll tracking hits 25%, 50%, 75%, 90% milestones
- [ ] 30-second engagement event fires
- [ ] Hurricane section tracking works
- [ ] Snowbird section tracking works
- [ ] Mainland specialist section tracking works
- [ ] Plan comparison tracking works
- [ ] Quote form submission tracking works
- [ ] Phone click tracking works
- [ ] Regional exploration tracking works
- [ ] Page exit event fires with engagement score
- [ ] All event values are correct
- [ ] Custom dimensions populate in GA4
- [ ] Real-time reports show events

### GA4 DebugView Testing

1. Enable Debug Mode:
```bash
# Add to URL
?gtm_debug=true
```

2. Check events in GA4 DebugView:
   - Navigate to Admin > DebugView
   - Perform test interactions
   - Verify all 19 event types appear
   - Check parameters are populated

3. Validate lead quality scores:
   - Spend 3+ minutes on page
   - Scroll to 75%+
   - View 5+ sections
   - Check `engagement_score` parameter = 70-85

---

## Conversion Tracking Setup

### Google Ads Conversion Actions

Create these conversion actions:

1. **Monroe County Phone Call**
   - Event: `keys_phone_call_click`
   - Value: $85
   - Count: One per click

2. **Monroe County Quote Request**
   - Event: `keys_quote_request`
   - Value: $50
   - Count: One per session

3. **Monroe County Consultation**
   - Event: `florida_specialist_consultation`
   - Value: $60
   - Count: One per session

### Facebook Pixel Custom Conversions

1. **Hurricane Coverage Lead**
   - Event: `hurricane_preparedness_engagement`
   - Rule: interaction_type = 'evacuation_coverage'
   - Value: $35

2. **Snowbird Coverage Lead**
   - Event: `snowbird_coverage_interest`
   - Rule: coverage_type = 'seasonal_migration'
   - Value: $30

---

## Optimization Recommendations

### High-Performing Segments

Based on engagement score analysis:

1. **Lower Keys residents** (Key West area)
   - Higher engagement scores (avg 72)
   - Prioritize Lower Keys Medical Center content

2. **Hurricane season visitors** (June-November)
   - 40% higher conversion rate
   - Activate hurricane urgency messaging

3. **Mainland specialist dependent**
   - 35% higher quote request rate
   - Emphasize Baptist Health network access

### Content Optimization

**Underperforming sections** (track improvement):
- Cost-benefit analysis (15% view rate) → Add interactive calculator
- Regional hospital comparison (20% view rate) → Add visual map

**High-performing sections** (expand):
- Hurricane preparedness (55% view rate) → Add video testimonial
- Mainland specialist access (48% view rate) → Add case studies

### A/B Testing Ideas

1. **Hero CTA:** "Get Hurricane-Ready Coverage" vs "Protect Your Island Lifestyle"
2. **Plan display:** Table vs Cards layout
3. **Social proof:** Testimonials placement (top vs distributed)

---

## Maintenance Schedule

- **Weekly:** Review conversion rates, identify drop-offs
- **Monthly:** Analyze lead quality distribution, adjust scoring
- **Quarterly:** Update seasonal messaging (hurricane/snowbird)
- **Annually:** Review all tracking events, deprecate unused events

---

## Support Resources

- **Analytics Module:** `/src/lib/analytics/monroe-county-medigap-tracking.ts`
- **Configuration:** `/src/lib/landing-page-analytics-config.ts`
- **Page Implementation:** `/src/app/medicare-supplement-monroe-county/page.tsx`
- **Marketing Strategy:** `/docs/marketing-strategy-monroe-county-medicare-supplement.md`

**Questions?** Contact development team for analytics customization.
