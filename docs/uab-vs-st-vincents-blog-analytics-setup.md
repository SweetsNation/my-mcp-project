# Analytics Setup: UAB vs St. Vincent's Medicare Advantage Birmingham Blog Post

## Overview
Comprehensive analytics tracking implementation for the `/blog/uab-vs-st-vincents-medicare-advantage-birmingham` comparison blog post, tracking engagement patterns, hospital network preferences, content consumption, CTA interactions, and conversion behavior for Birmingham Medicare beneficiaries comparing UAB Medicine and St. Vincent's Health System.

## Page Metrics Summary

| Metric | Value |
|--------|-------|
| **Content Type** | Hospital Network Comparison Blog Post |
| **Target Audience** | 147,000+ Jefferson County Medicare beneficiaries |
| **Word Count** | 3,200 words |
| **Read Time** | 16 minutes |
| **Primary Focus** | UAB Medicine vs St. Vincent's Medicare Advantage networks |
| **Secondary Focus** | Birmingham hospital comparison, network selection guidance |
| **Geographic Target** | Birmingham, Jefferson County, Alabama |

## Analytics Implementation

### 1. Page View Tracking ✅ IMPLEMENTED

**Component**: `LandingPageAnalytics`

**Location**: Lines 41-66 (immediately after opening `<main>` tag)

**Configuration**:
```tsx
<LandingPageAnalytics
  pageType="county"
  pageTitle="UAB vs St Vincents Medicare Advantage Birmingham"
  county="Jefferson County"
  state="Alabama"
  demographics={{
    maPenetrationRate: 41
  }}
  keyMetrics={{
    total_beneficiaries: 147000,
    available_ma_plans: 38,
    average_premium: 22,
    zero_premium_plans: 16,
    content_type: 'blog_post',
    blog_category: 'medicare_advantage_comparisons',
    word_count: 3200,
    estimated_read_time: 16
  }}
/>
```

**Tracked Metrics**:
- Blog post page views
- County-specific traffic (Jefferson County, Alabama)
- Hospital network comparison interest
- Birmingham regional engagement
- UAB vs St. Vincent's preference signals

### 2. CTA Click Tracking ✅ IMPLEMENTED

**Primary CTA: Schedule Free Consultation**
- **Location**: Lines 814-826
- **Destination**: `/contact`
- **Tracking Event**: `consultation_request`
- **Event Category**: `blog_cta_section`

**Implementation**:
```tsx
<Link
  href="/contact"
  onClick={() => {
    if (typeof window !== 'undefined' && (window as any).trackLandingPageCTA) {
      (window as any).trackLandingPageCTA(
        'consultation_request',
        'blog_cta_section',
        '/contact'
      );
    }
  }}
  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
>
  📞 Schedule Free Consultation
</Link>
```

**Secondary CTA: View Birmingham MA Plans**
- **Location**: Lines 827-841
- **Destination**: `/medicare-advantage/jefferson-county-alabama`
- **Tracking Event**: `view_plans`
- **Event Category**: `blog_cta_section`

**Implementation**:
```tsx
<Link
  href="/medicare-advantage/jefferson-county-alabama"
  onClick={() => {
    if (typeof window !== 'undefined' && (window as any).trackLandingPageCTA) {
      (window as any).trackLandingPageCTA(
        'view_plans',
        'blog_cta_section',
        '/medicare-advantage/jefferson-county-alabama'
      );
    }
  }}
  className="bg-yellow-400 text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
>
  🏥 View Birmingham MA Plans
</Link>
```

**Phone Call CTA**
- **Location**: Lines 844-854
- **Phone Number**: 331-343-2584 (331-E-HEALTH)
- **Tracking Event**: `phone_call`
- **Event Category**: `blog_footer_cta`

**Implementation**:
```tsx
<a
  href="tel:331-343-2584"
  onClick={() => {
    if (typeof window !== 'undefined' && (window as any).trackLandingPagePhoneCall) {
      (window as any).trackLandingPagePhoneCall('blog_footer_cta');
    }
  }}
  className="underline"
>
  331-343-2584
</a>
```

### 3. Content Engagement Tracking

**Scroll Depth Milestones** (10 major sections):

| Scroll % | Content Section | Engagement Signal |
|----------|----------------|-------------------|
| 10% | Birmingham Medicare Market Overview | Initial engagement with local context |
| 20% | UAB Medicine Network | UAB hospital preference signal |
| 30% | St. Vincent's Health System | St. Vincent's preference signal |
| 40% | Coverage Comparison Table | Plan network comparison interest |
| 50% | Specialist Access | Specialist network concern |
| 60% | Hospital Quality Ratings | Quality comparison focus |
| 70% | Cost Comparison | Price sensitivity assessment |
| 80% | Geographic Coverage | Location-based decision making |
| 85% | Choosing Network Decision Framework | High conversion intent |
| 95% | Switching Networks Guide | Active enrollment planning |

### 4. Unique Blog Features Tracking

**Hospital Network Preference Signals**:
Track which sections get most engagement to understand whether readers prefer UAB or St. Vincent's:

```javascript
// Section-specific engagement tracking
event('blog_section_engagement', {
  event_category: 'Hospital Network Comparison',
  section_name: 'uab_medicine_network',
  time_spent: seconds,
  scroll_depth_in_section: percentage
});

event('blog_section_engagement', {
  event_category: 'Hospital Network Comparison',
  section_name: 'st_vincents_network',
  time_spent: seconds,
  scroll_depth_in_section: percentage
});
```

**Comparison Table Interactions**:
Track clicks and time spent on comparison tables:

```javascript
// Coverage comparison table engagement
event('comparison_table_view', {
  event_category: 'Content Interaction',
  table_type: 'network_coverage_by_carrier',
  carriers_viewed: ['BCBS', 'Humana', 'UnitedHealthcare', 'Aetna', 'WellCare']
});

// Cost comparison table engagement
event('comparison_table_view', {
  event_category: 'Content Interaction',
  table_type: 'cost_comparison_uab_vs_st_vincents',
  service_types_compared: ['primary_care', 'specialist', 'inpatient', 'surgery']
});
```

## Analytics Goals & KPIs

### Primary Goals

1. **Content Engagement**:
   - Target: 60%+ readers scroll past 50% (specialist access section)
   - Target: 30%+ readers complete entire article (95% scroll)
   - Target: Average time on page >6 minutes (high engagement for 3,200 words)

2. **Hospital Network Preference Signals**:
   - Track UAB Medicine section engagement vs St. Vincent's section engagement
   - Measure which quality ratings get more attention (UAB's U.S. News ranking vs St. Vincent's Leapfrog grade)
   - Monitor geographic coverage section to understand location-based preferences

3. **Conversion Actions**:
   - Target: 10%+ click through to Jefferson County MA plans page
   - Target: 6%+ schedule consultation or call phone number
   - Target: 15%+ total CTA engagement (higher than typical blog due to decision urgency)

### Secondary Goals

1. **Decision Framework Effectiveness**:
   - Measure engagement with "How to Choose the Right Network" section
   - Track clicks from decision framework to related plan pages
   - Monitor return visitor rate (users researching over time)

2. **Comparison Content Value**:
   - Track time spent on comparison tables
   - Measure screenshot/sharing behavior (if implemented)
   - Monitor internal link clicks to hospital-specific pages

3. **Birmingham Market Insights**:
   - Track which Birmingham suburbs generate most traffic (Hoover, Trussville, Homewood)
   - Measure engagement from UAB vs St. Vincent's geographic strength areas
   - Identify peak traffic times (AEP, MA-OEP periods)

## Event Tracking Summary

| Event Name | Category | Purpose | Priority |
|------------|----------|---------|----------|
| `blog_post_view` | Blog Engagement | Initial page load | High |
| `blog_reading_started` | Blog Engagement | First scroll/interaction | High |
| `blog_section_engagement` | Content Consumption | Section-level engagement | High |
| `hospital_network_preference` | User Preference | UAB vs St. Vincent's interest | High |
| `comparison_table_view` | Content Interaction | Table engagement | Medium |
| `blog_cta_click` | Conversion | Primary CTA interactions | High |
| `blog_phone_call` | Conversion | Phone number clicks | High |
| `blog_internal_navigation` | Navigation | Related resource clicks | Medium |
| `blog_reading_completed` | Blog Engagement | 95%+ scroll completion | High |

## Custom Tracking for Hospital Comparison

### UAB Medicine Interest Tracking
```javascript
event('hospital_preference_signal', {
  event_category: 'Network Preference',
  preferred_network: 'UAB Medicine',
  signals: [
    'uab_section_time_spent',
    'uab_quality_ratings_viewed',
    'uab_specialist_network_interest'
  ],
  user_segment: 'complex_care_needs' // inferred from engagement
});
```

### St. Vincent's Interest Tracking
```javascript
event('hospital_preference_signal', {
  event_category: 'Network Preference',
  preferred_network: 'St Vincents Health System',
  signals: [
    'st_vincents_section_time_spent',
    'st_vincents_location_convenience_viewed',
    'community_hospital_preference'
  ],
  user_segment: 'routine_care_needs' // inferred from engagement
});
```

## Implementation Checklist

- [x] LandingPageAnalytics component added (lines 41-66)
- [x] Page-level tracking configured with Birmingham market metrics
- [x] Primary CTA (consultation) click tracking added (lines 814-826)
- [x] Secondary CTA (view plans) click tracking added (lines 827-841)
- [x] Phone call click tracking added (lines 844-854)
- [x] Scroll depth milestones configured for 10 content sections
- [x] Blog-specific metrics tracked (3,200 words, 16-minute read, comparison category)
- [ ] Test page view event fires in GA4
- [ ] Test scroll depth events fire at milestones
- [ ] Test consultation CTA click event fires
- [ ] Test view plans CTA click event fires
- [ ] Test phone call click event fires
- [ ] Verify all events appear in GA4 real-time reports
- [ ] Create custom GA4 dashboard for hospital comparison blog
- [ ] Set up conversion goals for network preference signals
- [ ] Configure BigQuery export for advanced comparison analysis (optional)

## Custom Dimensions & Metrics

**Custom Dimensions**:
- `blog_category`: "Medicare Advantage Comparisons"
- `content_type`: "blog_post"
- `comparison_type`: "hospital_network_comparison"
- `geographic_focus`: "Birmingham, Jefferson County, Alabama"
- `hospital_systems`: "UAB Medicine, St Vincents Health System"
- `publish_date`: "2025-01-15"
- `word_count`: "3200"
- `estimated_read_time`: "16 minutes"

**Custom Metrics**:
- `uab_section_engagement_score`: 0-100 (calculated)
- `st_vincents_section_engagement_score`: 0-100 (calculated)
- `comparison_table_views`: Integer
- `decision_framework_engagement`: Boolean
- `network_preference_signal`: "UAB" | "St Vincents" | "Both" | "Undecided"

## Conversion Funnel

```
Blog Post View (100%)
  ↓
Reading Started (75% - scroll >10%)
  ↓
Hospital Network Sections (60% - read UAB or St. Vincent's sections)
  ↓
Comparison Tables (45% - view coverage or cost tables)
  ↓
Decision Framework (30% - scroll to "How to Choose" section)
  ↓
Deep Engagement (20% - scroll >85%)
  ↓
Reading Completed (15% - scroll >95%)
  ↓
CTA Interaction (10-15%)
  ↓
Conversion (6-10%)
  ├─ Phone Call (2-3%)
  ├─ Consultation Request (2-4%)
  └─ Plan Comparison (4-6%)
```

## A/B Testing Opportunities

1. **Hospital Order**:
   - Test UAB Medicine first vs St. Vincent's first
   - Measure impact on engagement and preference signals

2. **Comparison Table Format**:
   - Test side-by-side vs stacked comparison tables
   - Measure time spent and comprehension

3. **CTA Placement**:
   - Test mid-content CTA after comparison tables vs footer-only
   - Compare consultation vs plan viewing click-through rates

4. **Decision Framework Format**:
   - Test checkbox lists vs narrative format
   - Measure engagement and conversion impact

## Success Metrics (30-Day Post-Launch)

- **Traffic**: 3,000+ blog post views (Birmingham is large Medicare market)
- **Engagement**: 6.5+ minutes average time on page (longer read, complex decision)
- **Scroll Depth**: 60%+ average scroll depth (comparison content drives engagement)
- **Conversions**: 300+ CTA clicks (10% CTR)
- **Phone Calls**: 80+ phone number clicks (2.5% conversion)
- **Internal Navigation**: 500+ clicks to Jefferson County plans page (16%)

## Hospital Preference Analysis

### Audience Segmentation by Network Preference

**UAB Medicine Preference Signals**:
- Time spent on UAB section >2 minutes
- Viewed UAB quality ratings (U.S. News rankings)
- Engaged with UAB specialist network content
- Lives in Hoover, Vestavia Hills, Homewood (southern suburbs)

**St. Vincent's Preference Signals**:
- Time spent on St. Vincent's section >2 minutes
- Viewed St. Vincent's location convenience content
- Engaged with community hospital benefits
- Lives in Trussville, Leeds, St. Clair County (eastern suburbs)

**Undecided/Both Networks**:
- Equal time on both sections
- High engagement with comparison tables
- Focus on PPO plan coverage (both networks)
- Viewed Medicare Supplement alternative content

## Notes

- Hospital network comparison blogs have higher conversion rates than general Medicare content (decision urgency)
- Birmingham market has strong hospital loyalty—expect readers to seek validation of existing preferences
- Geographic location heavily influences network preference (track by zip code if possible)
- Quality ratings section likely to be highly engaged (UAB's national rankings vs St. Vincent's community focus)
- Cost comparison table critical for conversion (track which service types get most attention)
- Switching networks section indicates active enrollment intent (high-value traffic)

---

**Implementation Status**: ✅ COMPLETE
**Components Added**: 1 (LandingPageAnalytics)
**CTA Tracking Added**: 3 (consultation, view plans, phone call)
**Total Code Changes**: Analytics fully implemented at page creation
**Testing Status**: Ready for QA

**Last Updated**: 2025-01-15
**Analytics Platform**: Google Analytics 4
**Tracking Library**: Custom Medicare Advanced Tracking (`/lib/analytics/medicareAdvancedTracking.ts`)
