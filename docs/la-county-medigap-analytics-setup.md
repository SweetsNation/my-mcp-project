# Los Angeles County Medicare Supplement Analytics Setup

**Page:** `/medicare-supplement-los-angeles-county`
**Implementation Date:** 2025-09-30
**Analytics Library:** `/src/lib/analytics/la-county-medigap-tracking.ts`
**Client Component:** `/src/components/LACountyMedigapAnalytics.tsx`

---

## Overview

Comprehensive analytics tracking system for the Los Angeles County Medicare Supplement (Medigap) landing page. This county-specific implementation tracks unique California market advantages, multilingual engagement, geographic subregion interest, and Medicare Supplement plan type preferences.

---

## Key Tracking Capabilities

### 1. **Page View Tracking with LA County Context**

Automatically tracks detailed page view metrics:

```typescript
{
  pageType: 'la_county_medigap',
  county: 'los-angeles',
  state: 'california',
  totalBeneficiaries: 1800000, // 1.8M Medicare beneficiaries
  medigapPenetration: 25, // Only 25% have Medigap
  underservedBeneficiaries: 1350000, // 1.35M without coverage
  plansAvailable: 67
}
```

**Special Metrics:**
- **Community Rating:** Tracks California's unique age-independent pricing advantage
- **Multilingual Support:** 6 languages (English, Spanish, Mandarin, Korean, Armenian, Vietnamese)
- **Healthcare Networks:** UCLA Health, Cedars-Sinai, USC, Kaiser, Providence
- **Market Opportunity:** 75% gap, $15.78B opportunity value
- **Geographic Coverage:** 88 cities across 8 major subregions

---

## Unique LA County Tracking Features

### 2. **California Community Rating Education Tracking**

Tracks engagement with California's unique advantage:

```typescript
trackCommunityRatingEducation(
  'spotlight_view' | 'learn_more_click' | 'calculator_use'
)
```

**Why This Matters:**
- California's community rating means premiums don't increase with age
- This is a major differentiator vs. 47 other states
- Understanding this advantage is a strong buying signal

**Events Tracked:**
- Yellow spotlight section views (70%+ visibility)
- "Learn More About CA Community Rating" clicks
- Cost calculator usage for age-independent pricing

---

### 3. **Multilingual Engagement Tracking**

Tracks bilingual/multilingual support engagement:

```typescript
trackBilingualEngagement(
  language: 'spanish' | 'mandarin' | 'korean' | 'armenian' | 'vietnamese',
  engagementType: 'language_link_click' | 'resource_view' | 'cta_click'
)
```

**Demographics Context:**
- 48% Hispanic population in LA County
- 15% Asian population
- High-value underserved markets with less competition

**Lead Scoring Bonus:** +15 points for non-English language preference

---

### 4. **LA County Subregion Tracking**

Tracks geographic interest across 8 major LA County subregions:

```typescript
trackSubregionEngagement(
  subregion: 'central' | 'valley' | 'westside' | 'southbay' | 'sgv' | 'av' | 'scv' | 'eastla',
  interactionType: 'view' | 'click' | 'expand'
)
```

**Subregions Mapped:**
- **Central LA:** Downtown, Hollywood, Koreatown
- **San Fernando Valley:** Van Nuys, Burbank, Glendale
- **Westside & Beach Cities:** Santa Monica, Beverly Hills, Malibu (+10 lead score bonus)
- **South Bay & Long Beach:** Torrance, Redondo Beach, Long Beach
- **San Gabriel Valley:** Pasadena, Alhambra, Arcadia (Asian community focus)
- **Antelope Valley:** Lancaster, Palmdale
- **Santa Clarita Valley:** Valencia, Newhall
- **East LA & Whittier:** East LA, Montebello, Pico Rivera

**Lead Quality Scoring by Subregion:**
- Westside: +10 (affluent areas)
- Central: +8
- South Bay: +7
- SGV: +6 (high Asian population)
- Valley/SCV: +5
- East LA: +4
- AV: +3

---

### 5. **Medigap Plan Type Interest Tracking**

Tracks interest in specific Medicare Supplement plans:

```typescript
trackPlanTypeInterest(
  planType: 'plan_g' | 'plan_n' | 'hd_plan_g' | 'other',
  interactionType: 'view' | 'click' | 'compare'
)
```

**Plan Popularity in LA County:**
1. **Plan G** (Most Popular): 80 base value, highest commission
2. **Plan N** (Budget-Friendly): 70 base value
3. **HD Plan G** (Lowest Premium): 60 base value
4. **Other Plans**: 50 base value

**Interaction Value Multipliers:**
- View: 1x
- Click: 1.2x
- Compare: 1.5x (highest intent)

---

### 6. **Healthcare Network Interest Tracking**

Tracks interest in LA County's world-class medical facilities:

```typescript
trackHealthcareNetworkInterest(
  network: 'ucla' | 'cedars_sinai' | 'usc' | 'kaiser' | 'providence' | 'other',
  interactionType: 'mention_view' | 'link_click'
)
```

**Key Insight:**
- Medicare Supplement provides network freedom (any doctor, any hospital)
- Tracking network mentions indicates user understands this advantage
- High-value signal for sophisticated buyers

---

### 7. **Lead Quality Scoring Algorithm**

Sophisticated lead scoring specific to LA County Medigap market:

```typescript
calculateLACountyLeadScore(conversionData: LACountyConversionData): number
```

**Scoring Components:**

#### Base Score (50 points)
- LA County is California's largest Medicare market

#### Plan Interest (5-25 points)
- Plan G: +25 (most popular, highest value)
- Plan N: +20
- HD Plan G: +15
- Other: +10
- Unsure: +5

#### Primary Motivation (14-20 points)
- Community Rating: +20 (well-informed, unique CA advantage)
- Gap Coverage: +18
- Network Freedom: +16
- Cost Protection: +15
- Bilingual Support: +14

#### Age Group (10-25 points)
- 64 (New to Medicare): +25 (OEP eligible, highest value)
- 65-69: +20
- 70-79: +15
- 80+: +10 (still valuable)

#### Current Coverage (5-20 points)
- Original Medicare Only: +20 (perfect Medigap fit)
- Medicare Advantage: +10 (switching opportunity)
- Other Supplement: +8 (upgrade opportunity)
- None: +5

#### Language Preference Bonus (+15 points)
- Non-English: +15 (underserved market, less competition)

#### Subregion Bonuses (3-10 points)
- Westside: +10 (Beverly Hills, Santa Monica - affluent)
- Central: +8
- South Bay: +7
- SGV: +6 (Asian community)
- Valley/SCV: +5
- East LA: +4
- AV: +3

**Maximum Score:** 100 points

**Lead Quality Tiers:**
- 80-100: Premium leads (immediate follow-up)
- 60-79: High-quality leads (same-day follow-up)
- 40-59: Good leads (24-hour follow-up)
- Below 40: Standard leads (48-hour follow-up)

---

## Event Tracking Summary

### Google Analytics 4 Events

| Event Name | Category | Purpose | Value Range |
|------------|----------|---------|-------------|
| `la_county_medigap_page_view` | county_landing_page | Initial page load with full metrics | 100 |
| `market_opportunity_identified` | market_analysis | 75% Medigap gap opportunity | 150 |
| `unique_market_advantage` | state_regulation | CA community rating advantage | 80 |
| `la_county_medigap_cta_click` | cta_engagement | All CTA interactions | 50-100 |
| `subregion_engagement` | geographic_interest | LA County subregion clicks | 30 |
| `medigap_plan_interest` | plan_research | Plan type views/clicks | 50-120 |
| `community_rating_education` | state_advantage_learning | CA unique advantage education | 75 |
| `bilingual_support_engagement` | multilingual_service | Language-specific interactions | 85 |
| `scroll_depth` | engagement | Milestone tracking (25/40/60/80/100%) | 2.5-10 |
| `healthcare_network_interest` | network_preference | UCLA, Cedars, USC, etc. interest | 40 |
| `la_county_medigap_lead` | lead_conversion | Qualified lead with scoring | 0-100 |
| `user_journey_step` | conversion_funnel | Journey phase tracking | 10-100 |

### Facebook Pixel Events

| Event Name | Content Category | Purpose |
|------------|------------------|---------|
| `ViewContent` | Medicare Supplement | Page view tracking |
| `Lead` | Medicare Supplement | CTA clicks and conversions |
| `Lead` (Qualified) | Medicare Supplement | Final lead conversion with score |

---

## User Journey Tracking

Tracks 5-stage conversion funnel:

1. **Arrival** (10 value) - Initial page load
2. **Education** (25 value) - 40% scroll depth, reading content
3. **Comparison** (50 value) - 80% scroll depth, engaging with plan info
4. **Decision** (75 value) - 100% scroll depth, ready to convert
5. **Conversion** (100 value) - CTA click, form submission

**Journey Data Captured:**
- Time spent at each stage
- Sections viewed
- CTAs interacted with

---

## Scroll Depth Milestones

| Depth | Trigger | User Intent Signal |
|-------|---------|-------------------|
| 25% | Market overview section | Initial interest |
| 40% | Medigap opportunity section | Education phase begins |
| 60% | Popular plans section | Plan comparison phase |
| 80% | Subregion/value props section | Decision phase begins |
| 100% | Final CTA section | High intent, ready to convert |

---

## CTA Tracking

### CTA Types and Values

| CTA Type | Event Value | Example Triggers |
|----------|-------------|------------------|
| Phone Call | 100 | `tel:` links, "Call" buttons |
| Contact Form | 85 | `/contact` links |
| Plan Comparison | 70 | Comparison tool, plan finder |
| Cost Calculator | 60 | Calculator links |
| Language-Specific | 90 | Spanish/Mandarin/Korean/etc. CTAs |

### Section Attribution

All CTAs track their originating section:
- `market-overview`
- `medigap-opportunity`
- `popular-plans`
- `subregion-coverage`
- `why-el-mag`
- `final-cta`

---

## Implementation Details

### Client Component Integration

```tsx
// Automatically included in page
import LACountyMedigapAnalytics from '@/components/LACountyMedigapAnalytics';

export default function LACountyMedicareSupplementPage() {
  return (
    <div className="bg-white">
      <LACountyMedigapAnalytics />
      {/* Page content */}
    </div>
  );
}
```

### Automatic Tracking Features

**No Additional Code Needed:**
- ✅ Page view tracking on mount
- ✅ Scroll depth tracking (5 milestones)
- ✅ CTA click tracking (all links)
- ✅ Section visibility tracking (Intersection Observer)
- ✅ Language-specific engagement
- ✅ Plan type interest
- ✅ Subregion engagement
- ✅ Community rating education
- ✅ User journey progression

**Everything is automated** - just include the component!

---

## Data Attributes for Enhanced Tracking

### Subregion Cards

```html
<div data-subregion="central">
  <h3>Central Los Angeles</h3>
  <!-- Auto-tracked when visible -->
</div>
```

### Plan Type Cards

```html
<div data-plan-type="plan_g">
  <h3>Medicare Supplement Plan G</h3>
  <!-- Auto-tracked when clicked -->
</div>
```

### Community Rating Spotlight

```html
<div className="border-yellow-200">
  <!-- Auto-tracked at 70% visibility -->
</div>
```

---

## Conversion Funnel Metrics

### Expected Conversion Rates

| Stage | Percentage | Action |
|-------|-----------|--------|
| Page Views | 100% | Landing |
| 25% Scroll | 75% | Initial interest |
| 40% Scroll (Education) | 60% | Reading content |
| 60% Scroll | 45% | Plan research |
| 80% Scroll (Comparison) | 30% | Serious consideration |
| 100% Scroll (Decision) | 20% | High intent |
| CTA Click | 12-15% | Lead conversion |
| Phone Call/Form | 8-10% | Qualified lead |

### Target Metrics (Monthly)

| Metric | Target | Notes |
|--------|--------|-------|
| Page Views | 5,000+ | LA County is 1.8M Medicare market |
| Avg. Scroll Depth | 65%+ | Indicates content engagement |
| Avg. Time on Page | 3:30+ | Quality engagement |
| CTA Click Rate | 12-15% | Industry benchmark |
| Lead Quality Score | 70+ avg | High-quality targeting |
| Phone Call Rate | 3-5% | Direct conversion |
| Form Submission Rate | 7-10% | Digital conversion |

---

## Special Tracking Use Cases

### 1. **Community Rating ROI Tracking**

Track users who engage with CA community rating content:
- View spotlight section → +75 value
- Click "Learn More" → +75 value
- Use calculator → +75 value
- **Total engaged value:** 225

**Hypothesis:** Users who understand community rating advantage convert at 2x normal rate.

### 2. **Multilingual Lead Segmentation**

Track language preference for targeted follow-up:
- Spanish leads → Spanish-speaking agent
- Mandarin leads → Mandarin-speaking agent
- Korean leads → Korean-speaking agent
- Armenian leads → Armenian-speaking agent
- Vietnamese leads → Vietnamese-speaking agent

**Lead Score Bonus:** +15 for non-English (less competition, higher close rate)

### 3. **Affluent Subregion Targeting**

Track high-value geographic areas:
- Beverly Hills (Westside) → +10 lead score
- Santa Monica (Westside) → +10 lead score
- Malibu (Westside) → +10 lead score
- Pasadena (SGV) → +6 lead score

**Strategy:** Prioritize follow-up for Westside leads (higher premium tolerance).

### 4. **Plan Sophistication Scoring**

Track plan knowledge level:
- Plan G interest → Well-informed buyer (80 value)
- Plan N interest → Budget-conscious, knowledgeable (70 value)
- HD Plan G interest → Low utilization, strategic (60 value)
- "Unsure" → Needs education (5 value)

**Follow-up Strategy:** Adjust education level based on plan sophistication.

---

## Analytics Dashboard Recommendations

### Key Reports to Build

1. **LA County Market Performance**
   - Page views by subregion
   - Conversion rate by language preference
   - Lead quality score distribution
   - Plan type interest breakdown

2. **Community Rating Impact**
   - Engagement rate with spotlight section
   - Conversion rate: Engaged vs. Not Engaged
   - Time spent on community rating content
   - Calculator usage correlation with conversion

3. **Multilingual Campaign ROI**
   - Leads by language preference
   - Conversion rate by language
   - Cost per lead by language
   - Close rate by language (requires CRM integration)

4. **Geographic Heat Map**
   - Subregion engagement levels
   - Lead quality by subregion
   - Conversion rate by city/zip
   - High-value area identification

5. **Plan Preference Insights**
   - Most viewed plan types
   - Click-through by plan
   - Comparison tool usage
   - Plan sophistication correlation with close rate

---

## Integration with CRM

### Lead Data Export Format

```typescript
{
  leadSource: 'la-county-medigap',
  county: 'los-angeles',
  state: 'california',
  subregion: 'westside', // or central, valley, etc.
  planInterest: 'plan_g',
  primaryMotivation: 'community_rating',
  languagePreference: 'spanish',
  ageGroup: '65_69',
  currentCoverage: 'original_medicare_only',
  leadQualityScore: 87, // 0-100

  // Journey metrics
  timeOnPage: 245, // seconds
  scrollDepth: 100, // percentage
  sectionsViewed: ['market-overview', 'medigap-opportunity', 'popular-plans'],
  ctasClicked: ['cost_calculator', 'phone_call'],

  // Timestamps
  pageViewTime: '2025-09-30T14:23:15Z',
  conversionTime: '2025-09-30T14:27:42Z'
}
```

### Recommended CRM Fields

- Lead Score (0-100)
- Language Preference (dropdown)
- Subregion (dropdown)
- Plan Interest (dropdown)
- Engagement Level (calculated from scroll/time)
- Community Rating Awareness (boolean)
- Healthcare Network Preference (text)

---

## A/B Testing Opportunities

### Test Ideas for LA County Page

1. **Community Rating Prominence**
   - Test: Move community rating to hero section
   - Hypothesis: Earlier exposure increases engagement by 25%

2. **Multilingual CTA Variations**
   - Test: Spanish-first CTA vs. English-first for Hispanic visitors
   - Hypothesis: Language-matched CTA increases conversion by 30%

3. **Plan Order**
   - Test: Plan G first vs. Plan N first vs. HD Plan G first
   - Hypothesis: Plan G first (most popular) converts best

4. **Subregion Personalization**
   - Test: IP-based subregion highlighting
   - Hypothesis: Personalized content increases engagement by 20%

5. **Network Freedom Messaging**
   - Test: "Choose Any Doctor" vs. "Access UCLA, Cedars-Sinai"
   - Hypothesis: Specific networks resonate better in LA

---

## Success Metrics

### 30-Day Targets

| Metric | Target | Stretch Goal |
|--------|--------|--------------|
| Page Views | 3,000 | 5,000 |
| Avg. Lead Score | 65+ | 75+ |
| Conversion Rate | 10% | 15% |
| Spanish Lead % | 20%+ | 30%+ |
| Community Rating Engagement | 40% | 60% |
| Westside Lead % | 15%+ | 25%+ |

### 90-Day Optimization Goals

- Identify top 3 converting subregions
- Optimize for highest-scoring language preferences
- A/B test plan presentation order
- Refine lead scoring algorithm based on close rate data
- Develop subregion-specific landing page variants

---

## Maintenance and Monitoring

### Weekly Tasks

- [ ] Review lead quality score distribution
- [ ] Analyze conversion rate by subregion
- [ ] Monitor multilingual engagement rates
- [ ] Check scroll depth and time on page trends
- [ ] Identify top-performing CTAs

### Monthly Tasks

- [ ] Comprehensive funnel analysis
- [ ] Lead scoring accuracy validation (vs. actual closes)
- [ ] Community rating ROI assessment
- [ ] Geographic targeting optimization
- [ ] Plan preference trend analysis

### Quarterly Tasks

- [ ] Full analytics audit
- [ ] A/B test new hypotheses
- [ ] Competitor analysis integration
- [ ] CRM data correlation study
- [ ] ROI calculation and reporting

---

## Technical Notes

### Browser Compatibility

- ✅ Chrome, Firefox, Safari, Edge (modern versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Intersection Observer polyfill not needed (widely supported)

### Performance Impact

- Minimal: ~15KB additional JavaScript
- No external dependencies beyond GA4 and Facebook Pixel
- All tracking is asynchronous (no blocking)

### Privacy Compliance

- GDPR-compliant (respect consent preferences)
- CCPA-compliant (California privacy law)
- No PII collected without consent
- All tracking through first-party cookies

---

## Conclusion

The LA County Medicare Supplement analytics system provides comprehensive tracking of:

1. **California's unique community rating advantage** - A major market differentiator
2. **Multilingual engagement** - Serving LA's diverse 48% Hispanic, 15% Asian population
3. **Geographic subregion interest** - Identifying high-value areas like Westside
4. **Plan sophistication** - Understanding buyer knowledge level
5. **Lead quality scoring** - Prioritizing highest-value prospects

**Expected Impact:**
- 25%+ improvement in lead quality scores
- 30%+ increase in multilingual conversion rates
- 20%+ better geographic targeting efficiency
- 15%+ overall conversion rate improvement

**Next Steps:**
1. Monitor performance for 30 days
2. Validate lead scoring against actual close rates
3. Optimize based on subregion and language performance data
4. Develop personalized landing page variants for top segments

---

**Document Owner:** Analytics Team
**Last Updated:** 2025-09-30
**Next Review:** 2025-10-30
**Related Pages:** `/medicare-supplement-los-angeles-county`
