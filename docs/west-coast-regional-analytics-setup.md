# West Coast Regional Medicare Supplement Analytics Setup

## Executive Summary

This document provides comprehensive analytics implementation for the `/regions/west-coast` landing page, tracking user engagement across California, Oregon, and Washington Medicare Supplement markets. The West Coast region represents the **nation's largest low-penetration Medicare Supplement opportunity** with 8M+ beneficiaries, ~15-25% average Medigap penetration, and 6M+ underserved seniors (75-85% market gap).

### Key Market Metrics
- **Total Beneficiaries:** 8M+ across 3 states
- **Average Penetration:** ~15-25% (below 20.5% national average)
- **Underserved Market:** 6M+ beneficiaries without Medigap
- **Market Opportunity:** ~$45B+ estimated value
- **Major Markets:** LA County 1.8M, SF Bay 850K, Seattle-Tacoma 800K+, San Diego 600K, Portland 600K+, Sacramento 420K

### Unique State Advantages Tracked
1. **California:** Community rating (age-independent pricing) - only 3 states have this
2. **Oregon:** 7.9% growth in 2024 (fastest in nation, 14,626 new lives)
3. **Washington:** Premium healthcare networks (UW Medicine, Seattle Cancer Care Alliance)

---

## Analytics Architecture

### Core Components

#### 1. Tracking Library
**File:** `/src/lib/analytics/west-coast-regional-tracking.ts`

**Purpose:** Centralized analytics tracking for West Coast regional page

**Key Interfaces:**
```typescript
export interface WestCoastRegionalPageMetrics {
  pageType: 'west_coast_regional_medigap';
  region: 'west-coast';
  statesCovered: ['california', 'oregon', 'washington'];
  totalBeneficiaries: 8000000; // 8M+
  averageMedigapPenetration: 20; // ~15-25%
  underservedBeneficiaries: 6000000; // 6M+
  plansAvailable: 200;
  specialMetrics: {
    // California (48% of West Coast seniors)
    californiaCommunityRating: boolean;
    californiaPopulation: 48;
    californiaPenetration: 17; // 9-25% average
    californiaUnderserved: 3500000; // 3.5M+

    // Oregon (fastest growth)
    oregonGrowthRate: 7.9;
    oregonNewLives: 14626;
    oregonPenetration: 17.5;
    oregonUnderserved: 750000;

    // Washington (premium care)
    washingtonPenetration: 17.5;
    washingtonUnderserved: 800000;
    washingtonPremiumCare: boolean;

    // Major markets
    majorMarkets: {
      laCounty: 1800000;
      sfBay: 850000;
      sanDiego: 600000;
      sacramento: 420000;
      portland: 600000;
      seattleTacoma: 800000;
    };

    // Healthcare networks
    worldClassNetworks: string[];
    topRankedFacilities: 8;

    // Market opportunity
    marketGapPercentage: 80; // 75-85% average
    opportunityValueBillions: 45;
    lowPenetrationAdvantage: boolean;
  };
}
```

#### 2. Client Component
**File:** `/src/components/WestCoastRegionalAnalytics.tsx`

**Purpose:** Automatic client-side tracking for user interactions

**Auto-tracked Events:**
- Page views on mount with full regional metrics
- Scroll milestones (25%, 40%, 60%, 80%, 100%)
- CTA clicks (phone, form, calculator, comparison, state-specific, language-specific)
- State engagement (California, Oregon, Washington views/clicks)
- Market engagement (6+ major metro areas)
- Plan type interest (Plan G, Plan N, HD Plan G)
- State advantage education (CA community rating, OR growth, WA premium care)
- Multilingual engagement (Spanish, Mandarin, Vietnamese, Korean)
- Healthcare network interest (Stanford, UCSF, UCLA, UW Medicine, OHSU, etc.)
- User journey funnel (6 stages: arrival → state_research → education → comparison → decision → conversion)

#### 3. Page Integration
**File:** `/src/app/regions/west-coast/page.tsx`

**Integration:**
```typescript
import WestCoastRegionalAnalytics from '@/components/WestCoastRegionalAnalytics';

export default function WestCoastRegionPage() {
  return (
    <div className="bg-white">
      <WestCoastRegionalAnalytics />
      {/* Page content... */}
    </div>
  );
}
```

---

## Event Tracking Specification

### 1. Page View Event
**Event Name:** `page_view`
**Trigger:** On page mount
**GA4 Parameters:**
```javascript
{
  page_title: 'West Coast Medicare Supplement Regional',
  page_type: 'west_coast_regional_medigap',
  region: 'west-coast',
  states_covered: 'california,oregon,washington',
  total_beneficiaries: 8000000,
  average_penetration: 20,
  underserved_beneficiaries: 6000000,
  market_gap_percentage: 80,
  california_community_rating: true,
  oregon_growth_rate: 7.9,
  washington_premium_care: true,
  user_state: '', // Detected state
  user_city: '',
  user_zipcode: '',
  user_market: ''
}
```

**Facebook Pixel:**
```javascript
fbq('track', 'ViewContent', {
  content_name: 'West Coast Medicare Supplement Regional',
  content_category: 'Medicare Supplement',
  content_type: 'regional_landing_page',
  region: 'West Coast',
  states: 'CA, OR, WA',
  beneficiaries: 8000000,
  market_gap: 80,
  value: 100,
  currency: 'USD'
});
```

**Business Value:** $100 per page view (high-value regional page)

---

### 2. Scroll Depth Events
**Event Name:** `scroll_depth`
**Triggers:** 25%, 40%, 60%, 80%, 100% scroll milestones

**GA4 Parameters:**
```javascript
{
  event_category: 'Engagement',
  event_label: 'West Coast Regional - {depth}%',
  value: depth, // 25, 40, 60, 80, 100
  page_type: 'west_coast_regional_medigap',
  region: 'west-coast'
}
```

**Business Insights:**
- **25% scroll:** User passed hero, engaged with regional overview
- **40% scroll:** User viewing state-specific highlights → triggers `state_research` journey stage
- **60% scroll:** User in medigap opportunity section → triggers `education` journey stage
- **80% scroll:** User viewing popular plans → triggers `comparison` journey stage
- **100% scroll:** User completed page → triggers `decision` journey stage

**Expected Metrics:**
- 25% scroll: 80-85% of visitors
- 40% scroll: 60-65% of visitors
- 60% scroll: 40-45% of visitors
- 80% scroll: 25-30% of visitors
- 100% scroll: 15-20% of visitors

---

### 3. CTA Click Events
**Event Name:** `cta_click`
**Trigger:** Click on any call-to-action link

**CTA Types Tracked:**
1. **phone_call** - Tel links or "Call" buttons
2. **contact_form** - Links to /contact pages
3. **plan_comparison** - Links to comparison tool or plan finder
4. **cost_calculator** - Links to Medicare cost calculator
5. **state_specific** - State-specific CTAs (CA, OR, WA)
6. **language_specific** - Multilingual resource links

**GA4 Parameters:**
```javascript
{
  event_category: 'Conversion',
  event_label: 'West Coast - {cta_type}',
  cta_type: 'phone_call|contact_form|plan_comparison|cost_calculator|state_specific|language_specific',
  section: 'region-overview|state-highlights|medigap-opportunity|popular-plans|state-coverage|why-el-mag|cta-section',
  state: 'california|oregon|washington',
  language: 'spanish|mandarin|vietnamese|korean',
  plan_type: 'plan_g|plan_n|hd_plan_g',
  market: 'la-county|sf-bay|san-diego|sacramento|portland|seattle-tacoma|spokane|vancouver|eugene|salem',
  page_type: 'west_coast_regional_medigap',
  region: 'west-coast'
}
```

**Facebook Pixel (High-Intent CTAs):**
```javascript
// Triggered for phone_call and contact_form only
fbq('track', 'Lead', {
  content_name: 'West Coast Medicare Supplement CTA',
  content_category: 'Medicare Supplement',
  cta_type: 'phone_call|contact_form',
  region: 'West Coast',
  state: 'CA|OR|WA',
  market: 'major_metro',
  value: 150.00,
  currency: 'USD'
});
```

**Expected CTA Performance:**
- **Phone Call:** 2-3% of visitors, $200 estimated value
- **Contact Form:** 3-4% of visitors, $150 estimated value
- **Plan Comparison:** 8-10% of visitors, $100 estimated value
- **Cost Calculator:** 10-12% of visitors, $80 estimated value
- **State-Specific:** 15-20% of visitors, $120 estimated value
- **Language-Specific:** 5-7% of visitors, $180 estimated value (higher intent)

---

### 4. State Engagement Events
**Event Name:** `state_engagement`
**Trigger:** View or click on California, Oregon, or Washington content

**GA4 Parameters:**
```javascript
{
  event_category: 'Geographic Interest',
  event_label: 'West Coast - {state}',
  state: 'california|oregon|washington',
  interaction_type: 'view|click|expand',
  page_type: 'west_coast_regional_medigap',
  region: 'west-coast'
}
```

**State-Specific Tracking:**
- **California:** Most engagement (48% of West Coast beneficiaries)
- **Oregon:** Growth-focused messaging (7.9% fastest in nation)
- **Washington:** Premium care positioning (UW Medicine, Seattle Cancer Care)

**Expected State Interest Distribution:**
- California: 55-60% of state engagements (largest market)
- Washington: 25-30% of state engagements (affluent, premium care)
- Oregon: 15-20% of state engagements (fastest growing)

---

### 5. Market Engagement Events
**Event Name:** `market_engagement`
**Trigger:** Click on major metro area links

**Major Markets Tracked:**
1. **LA County** - 1.8M beneficiaries (California)
2. **SF Bay Area** - 850K beneficiaries (California)
3. **San Diego** - 600K beneficiaries (California)
4. **Sacramento** - 420K beneficiaries (California)
5. **Portland** - 600K+ beneficiaries (Oregon)
6. **Seattle-Tacoma** - 800K+ beneficiaries (Washington)
7. **Spokane** - Smaller market (Washington)
8. **Vancouver** - Smaller market (Washington)
9. **Eugene** - Smaller market (Oregon)
10. **Salem** - Smaller market (Oregon)

**GA4 Parameters:**
```javascript
{
  event_category: 'Market Interest',
  event_label: 'West Coast - {market}',
  market: 'la-county|sf-bay|san-diego|sacramento|portland|seattle-tacoma|spokane|vancouver|eugene|salem',
  state: 'california|oregon|washington',
  interaction_type: 'view|click',
  page_type: 'west_coast_regional_medigap',
  region: 'west-coast'
}
```

**Expected Market Engagement:**
- LA County: 30-35% of market clicks (largest, 1.8M)
- SF Bay Area: 20-25% of market clicks (affluent, 850K)
- Seattle-Tacoma: 18-22% of market clicks (premium care, 800K+)
- San Diego: 10-12% of market clicks (600K)
- Portland: 8-10% of market clicks (600K+)
- Sacramento: 5-7% of market clicks (420K)
- Smaller markets: 5-8% combined

---

### 6. Plan Type Interest Events
**Event Name:** `plan_interest`
**Trigger:** View or click on Medigap plan information

**Plans Tracked:**
1. **Plan G** - Most comprehensive coverage
2. **Plan N** - Budget-friendly option
3. **HD Plan G** - High-deductible, lowest premium
4. **Other** - Plans A, B, C, D, F, K, L, M

**GA4 Parameters:**
```javascript
{
  event_category: 'Product Interest',
  event_label: 'West Coast - {plan_type}',
  plan_type: 'plan_g|plan_n|hd_plan_g|other',
  interaction_type: 'view|click|comparison',
  state: 'california|oregon|washington',
  page_type: 'west_coast_regional_medigap',
  region: 'west-coast'
}
```

**Expected Plan Interest Distribution:**
- Plan G: 60-65% of plan interest (most comprehensive)
- Plan N: 25-30% of plan interest (budget-friendly)
- HD Plan G: 8-12% of plan interest (lowest premium)
- Other plans: 3-5% of plan interest

---

### 7. California Community Rating Events
**Event Name:** `california_community_rating`
**Trigger:** Engagement with CA community rating content

**Unique Advantage:** Only 3 states have age-independent pricing (CA, MA, VT)

**Interaction Types:**
1. **spotlight_view** - Community rating spotlight section viewed (70% visibility)
2. **learn_more_click** - Click on "Learn More About CA Community Rating" links
3. **calculator_use** - Use cost calculator to compare age-based vs community rating
4. **age_comparison** - View age comparison examples

**GA4 Parameters:**
```javascript
{
  event_category: 'State Advantage',
  event_label: 'California Community Rating',
  interaction_type: 'spotlight_view|learn_more_click|calculator_use|age_comparison',
  state: 'california',
  page_type: 'west_coast_regional_medigap',
  region: 'west-coast',
  advantage_type: 'age_independent_pricing',
  unique_to_states: 3 // Only 3 states have this
}
```

**Expected Engagement:**
- Spotlight view: 65-70% of California visitors
- Learn more click: 15-20% of spotlight viewers
- Calculator use: 25-30% of learn more clickers
- Age comparison: 40-45% of spotlight viewers

**Business Value:** $120 per interaction (highly informed, CA-specific advantage)

---

### 8. Oregon Growth Leadership Events
**Event Name:** `oregon_growth_leadership`
**Trigger:** Engagement with Oregon's 7.9% growth messaging

**Growth Data:**
- **7.9% growth** in 2024 (fastest in nation)
- **14,626 new lives** added in 2024
- **Fastest growth** ranking: #1 nationwide

**Interaction Types:**
1. **highlight_view** - Oregon growth highlight card viewed
2. **growth_data_click** - Click on growth statistics
3. **market_opportunity_interest** - Interest in emerging OR market

**GA4 Parameters:**
```javascript
{
  event_category: 'State Advantage',
  event_label: 'Oregon Growth Leadership',
  interaction_type: 'highlight_view|growth_data_click|market_opportunity_interest',
  state: 'oregon',
  page_type: 'west_coast_regional_medigap',
  region: 'west-coast',
  growth_rate: 7.9,
  growth_rank: 1 // #1 in nation
}
```

**Expected Engagement:**
- Highlight view: 55-60% of Oregon visitors
- Growth data click: 20-25% of highlight viewers
- Market opportunity interest: 15-18% of visitors

**Business Value:** $100 per interaction (emerging market opportunity)

---

### 9. Washington Premium Care Events
**Event Name:** `washington_premium_care`
**Trigger:** Engagement with WA premium healthcare messaging

**Premium Networks:**
- **UW Medicine** - Top-ranked Pacific Northwest medical center
- **Seattle Cancer Care Alliance** - World-renowned cancer treatment
- **Swedish Medical Center** - Major Seattle healthcare provider

**Interaction Types:**
1. **highlight_view** - Washington premium care highlight viewed
2. **network_click** - Click on healthcare network information
3. **quality_focus** - Interest in premium healthcare quality

**GA4 Parameters:**
```javascript
{
  event_category: 'State Advantage',
  event_label: 'Washington Premium Healthcare',
  interaction_type: 'highlight_view|network_click|quality_focus',
  state: 'washington',
  page_type: 'west_coast_regional_medigap',
  region: 'west-coast',
  premium_networks: true
}
```

**Expected Engagement:**
- Highlight view: 60-65% of Washington visitors
- Network click: 25-30% of highlight viewers
- Quality focus: 20-22% of visitors

**Business Value:** $110 per interaction (affluent market, premium care focus)

---

### 10. Multilingual Engagement Events
**Event Name:** `multilingual_engagement`
**Trigger:** Engagement with non-English resources

**Languages Supported:**
1. **Spanish** - Largest non-English demographic
2. **Mandarin** - Significant California/Washington populations
3. **Vietnamese** - Strong presence in CA metro areas
4. **Korean** - Growing demographic in all 3 states

**Interaction Types:**
1. **content_view** - View multilingual content section
2. **cta_click** - Click on language-specific CTA
3. **resource_access** - Access language-specific resources

**GA4 Parameters:**
```javascript
{
  event_category: 'Language Support',
  event_label: 'West Coast - {language}',
  language: 'spanish|mandarin|vietnamese|korean|other',
  interaction_type: 'content_view|cta_click|resource_access',
  state: 'california|oregon|washington',
  page_type: 'west_coast_regional_medigap',
  region: 'west-coast'
}
```

**Expected Language Distribution:**
- Spanish: 60-65% of multilingual engagement (largest demographic)
- Mandarin: 20-25% of multilingual engagement (CA/WA metros)
- Vietnamese: 10-12% of multilingual engagement (CA metros)
- Korean: 5-8% of multilingual engagement (growing in all states)

**Business Value:** $180 per multilingual lead (higher intent, less competition)

---

### 11. Low Penetration Opportunity Events
**Event Name:** `low_penetration_opportunity`
**Trigger:** Engagement with 75-85% market gap messaging

**Market Gap Data:**
- **6M+ underserved** beneficiaries
- **75-85% average** without Medigap coverage
- **~$45B estimated** market opportunity value

**Interaction Types:**
1. **section_view** - View "Why 75-85% Miss Medicare Supplement" section
2. **data_interaction** - Interact with market gap statistics
3. **opportunity_calculation** - Calculate personal gap exposure

**GA4 Parameters:**
```javascript
{
  event_category: 'Market Education',
  event_label: 'West Coast Low Penetration',
  interaction_type: 'section_view|data_interaction|opportunity_calculation',
  page_type: 'west_coast_regional_medigap',
  region: 'west-coast',
  underserved_count: 6000000,
  gap_percentage: 80
}
```

**Expected Engagement:**
- Section view: 70-75% of visitors
- Data interaction: 35-40% of section viewers
- Opportunity calculation: 20-25% of section viewers

**Business Value:** $90 per interaction (education phase, high conversion potential)

---

### 12. Healthcare Network Interest Events
**Event Name:** `healthcare_network_interest`
**Trigger:** Click on healthcare network mentions

**Major Networks Tracked:**
- **California:** Stanford, UCSF, UCLA, Cedars-Sinai
- **Oregon:** OHSU, Providence
- **Washington:** UW Medicine, Seattle Cancer Care Alliance, Swedish Medical Center

**GA4 Parameters:**
```javascript
{
  event_category: 'Network Interest',
  event_label: 'West Coast - {network}',
  network: 'stanford|ucsf|ucla|cedars_sinai|uw_medicine|ohsu|providence|seattle_cancer_care|other',
  state: 'california|oregon|washington',
  interaction_type: 'mention_view|link_click',
  page_type: 'west_coast_regional_medigap',
  region: 'west-coast'
}
```

**Expected Network Interest:**
- Stanford/UCSF/UCLA: 35-40% of network clicks (CA prestige)
- UW Medicine/Seattle Cancer Care: 30-35% of network clicks (WA premium)
- OHSU/Providence: 15-20% of network clicks (OR quality)
- Other networks: 10-15% of network clicks

**Business Value:** $70 per network interest (specific healthcare needs, higher conversion)

---

### 13. User Journey Funnel Events
**Event Name:** `user_journey`
**Trigger:** Progress through conversion funnel stages

**6-Stage Funnel:**
1. **arrival** (0s) - Page load, initial view
2. **state_research** (20-30s) - 40% scroll, viewing state highlights
3. **education** (45-60s) - 60% scroll, learning about Medigap opportunity
4. **comparison** (75-90s) - 80% scroll, comparing plans
5. **decision** (100-120s) - 100% scroll, reviewing CTAs
6. **conversion** (varies) - Form submission or phone call

**GA4 Parameters:**
```javascript
{
  event_category: 'Funnel',
  event_label: 'West Coast - {stage}',
  journey_stage: 'arrival|state_research|education|comparison|decision|conversion',
  time_spent: seconds,
  states_viewed: 'california,oregon,washington',
  sections_viewed: 'region-overview,state-highlights,medigap-opportunity,popular-plans',
  ctas_interacted: 'phone_call,contact_form,plan_comparison',
  primary_state: 'california|oregon|washington',
  page_type: 'west_coast_regional_medigap',
  region: 'west-coast'
}
```

**Expected Funnel Conversion:**
- Arrival → State Research: 60-65% (40% scroll rate)
- State Research → Education: 65-70% (engaged users)
- Education → Comparison: 60-65% (interested users)
- Comparison → Decision: 55-60% (serious prospects)
- Decision → Conversion: 8-12% (qualified leads)
- **Overall Conversion Rate:** 8-10% of arrivals become leads

**Funnel Value Progression:**
- Arrival: $10 (page view)
- State Research: $25 (engaged)
- Education: $50 (interested)
- Comparison: $75 (serious)
- Decision: $100 (high-intent)
- Conversion: $200+ (qualified lead)

---

### 14. Lead Conversion Events
**Event Name:** `conversion`
**Trigger:** Form submission or phone call initiation

**GA4 Parameters:**
```javascript
{
  event_category: 'Conversion',
  event_label: 'West Coast Regional Medigap Lead',
  lead_source: 'west-coast-regional',
  region: 'west-coast',
  state: 'california|oregon|washington',
  market: 'la-county|sf-bay|seattle-tacoma|portland|san-diego|sacramento|spokane|vancouver|eugene|salem',
  plan_interest: 'plan_g|plan_n|hd_plan_g|other|unsure',
  primary_motivation: 'community_rating|low_penetration_advantage|gap_coverage|cost_protection|network_freedom|multilingual_support',
  language_preference: 'english|spanish|mandarin|vietnamese|korean|other',
  age_group: '64_new_to_medicare|65_69|70_79|80_plus',
  current_coverage: 'original_medicare_only|medicare_advantage|other_supplement|none',
  lead_quality_score: 0-100,
  value: lead_score * 2,
  currency: 'USD'
}
```

**Facebook Pixel:**
```javascript
fbq('track', 'Purchase', {
  content_name: 'West Coast Medicare Supplement Lead',
  content_category: 'Medicare Supplement',
  content_type: 'lead',
  region: 'West Coast',
  state: 'CA|OR|WA',
  market: 'major_metro',
  plan_interest: 'plan_g|plan_n|hd_plan_g',
  lead_quality: 'high|medium|low',
  value: lead_score * 2,
  currency: 'USD'
});
```

---

## Lead Quality Scoring Algorithm

### Base Score: 50 points

### Plan Interest (5-25 points)
- **Plan G:** +25 points (most comprehensive, highest value)
- **Plan N:** +18 points (budget-friendly, good conversion)
- **HD Plan G:** +15 points (cost-conscious, lower premium)
- **Other plans:** +10 points (less common)
- **Unsure:** +5 points (needs education)

### Primary Motivation (14-22 points)
- **Community Rating (CA-specific):** +22 points (highly informed, CA advantage)
- **Low Penetration Advantage:** +20 points (understanding unique opportunity)
- **Gap Coverage:** +18 points (educated about Medicare gaps)
- **Cost Protection:** +17 points (understanding financial risk)
- **Network Freedom:** +16 points (specific healthcare needs)
- **Multilingual Support:** +14 points (service preference)

### Age Group (10-25 points)
- **64 New to Medicare:** +25 points (prime enrollment window, OEP eligible)
- **65-69:** +20 points (recently enrolled, high interest)
- **70-79:** +15 points (established, may switch)
- **80+:** +10 points (harder to convert, but valuable)

### Current Coverage (5-20 points)
- **Original Medicare Only:** +20 points (perfect Medigap prospect)
- **Medicare Advantage:** +15 points (may switch during AEP)
- **None:** +12 points (needs education and enrollment)
- **Other Supplement:** +5 points (may shop rates)

### State Bonus (8-12 points)
- **California:** +12 points (largest market, community rating advantage)
- **Oregon:** +10 points (fastest growth, emerging opportunity)
- **Washington:** +8 points (premium care, affluent market)

### Market Bonus (3-12 points)
- **LA County:** +12 points (1.8M beneficiaries, largest market)
- **SF Bay Area:** +10 points (850K, affluent)
- **Seattle-Tacoma:** +9 points (800K+, premium care)
- **San Diego:** +8 points (600K, large market)
- **Portland:** +8 points (600K+, growing)
- **Sacramento:** +6 points (420K, state capital)
- **Spokane:** +4 points (smaller market)
- **Vancouver:** +3 points (smaller market)
- **Eugene:** +3 points (smaller market)
- **Salem:** +3 points (smaller market)

### Language Bonus (0-15 points)
- **Non-English:** +15 points (Spanish, Mandarin, Vietnamese, Korean - less competition, higher intent)
- **English:** +0 points (baseline)

### Total Score Range: 0-100 points

**Lead Quality Tiers:**
- **Premium Leads (70-100):** Immediate follow-up, high conversion potential
- **Qualified Leads (50-69):** Standard follow-up, good conversion potential
- **Nurture Leads (0-49):** Educational nurture sequence, longer conversion cycle

---

## Performance Targets & KPIs

### Page-Level Metrics

#### Traffic Metrics
- **Target Monthly Visits:** 5,000-8,000 visitors (regional page)
- **Average Session Duration:** 3:30-4:30 minutes
- **Bounce Rate:** 40-50% (lower is better)
- **Pages Per Session:** 2.5-3.5 pages

#### Engagement Metrics
- **40% Scroll Rate:** 60-65% of visitors (state research phase)
- **60% Scroll Rate:** 40-45% of visitors (education phase)
- **80% Scroll Rate:** 25-30% of visitors (comparison phase)
- **100% Scroll Rate:** 15-20% of visitors (decision phase)

#### State Interest Distribution
- **California:** 55-60% of state engagements (48% of beneficiaries)
- **Washington:** 25-30% of state engagements (affluent market)
- **Oregon:** 15-20% of state engagements (fastest growth)

#### Market Interest Distribution
- **LA County:** 30-35% of market clicks (1.8M beneficiaries)
- **SF Bay Area:** 20-25% of market clicks (850K, affluent)
- **Seattle-Tacoma:** 18-22% of market clicks (800K+, premium)
- **San Diego:** 10-12% of market clicks (600K)
- **Portland:** 8-10% of market clicks (600K+)
- **Other Markets:** 10-15% combined

### Conversion Metrics

#### CTA Performance
- **Phone Call CTA:** 2-3% of visitors ($200 value)
- **Contact Form CTA:** 3-4% of visitors ($150 value)
- **Plan Comparison CTA:** 8-10% of visitors ($100 value)
- **Cost Calculator CTA:** 10-12% of visitors ($80 value)
- **State-Specific CTA:** 15-20% of visitors ($120 value)
- **Language-Specific CTA:** 5-7% of visitors ($180 value)

#### Lead Generation
- **Overall Conversion Rate:** 8-10% of visitors → qualified leads
- **Average Lead Quality Score:** 65-75 points
- **Premium Leads (70-100):** 30-35% of conversions
- **Qualified Leads (50-69):** 50-55% of conversions
- **Nurture Leads (0-49):** 10-15% of conversions

#### State-Specific Conversion Rates
- **California:** 9-11% conversion (community rating advantage, largest market)
- **Washington:** 8-10% conversion (affluent, premium care)
- **Oregon:** 7-9% conversion (emerging market, fastest growth)

#### Market-Specific Conversion Rates
- **SF Bay Area:** 12-15% conversion (affluent, tech-savvy)
- **Seattle-Tacoma:** 11-14% conversion (premium care, educated)
- **LA County:** 9-11% conversion (large volume, diverse)
- **San Diego:** 10-12% conversion (affluent coastal)
- **Portland:** 9-11% conversion (educated, growing)
- **Sacramento:** 8-10% conversion (state capital, government)
- **Smaller Markets:** 6-8% conversion (varied demographics)

### Revenue Metrics

#### Cost Efficiency Targets
- **Cost Per Lead:** $30-40 (regional page, broad audience)
- **Cost Per State-Specific Lead:** $25-35 (targeted messaging)
- **Cost Per Market-Specific Lead:** $35-45 (metro-specific)
- **Cost Per Multilingual Lead:** $40-50 (less competition, higher value)

#### Lead Value Estimates
- **Average Lead Value:** $180-220 (based on commission potential)
- **Premium Lead Value:** $300-400 (70-100 score, high conversion)
- **Qualified Lead Value:** $150-250 (50-69 score, good conversion)
- **Nurture Lead Value:** $50-100 (0-49 score, longer cycle)

#### ROI Projections
- **Target ROAS:** 400-500% (return on ad spend)
- **Annual Revenue Potential:** $1.5M-2.5M (8K monthly visits @ 9% conversion)
- **Estimated Market Penetration:** 0.01-0.02% of 6M+ underserved market
- **3-Year Growth Target:** 25K+ leads, $5M-8M revenue

---

## State-Specific Analytics Insights

### California (48% of West Coast Beneficiaries)

**Unique Advantage:** Community rating (age-independent pricing)
**Market Size:** 4.7M+ beneficiaries, 3.5M+ underserved
**Penetration:** 9-25% (varies by county)
**Major Markets:** LA County 1.8M, SF Bay 850K, San Diego 600K, Sacramento 420K

**Key Tracking Focus:**
1. **Community Rating Education:** Track spotlight views, learn more clicks, age comparisons
2. **Market-Specific Performance:** LA County vs SF Bay vs San Diego vs Sacramento
3. **Multilingual Engagement:** Spanish, Mandarin, Vietnamese (high CA populations)
4. **Healthcare Network Interest:** Stanford, UCSF, UCLA, Cedars-Sinai

**Expected Performance:**
- **Overall CA Conversion:** 9-11% (highest due to community rating advantage)
- **SF Bay Conversion:** 12-15% (affluent, educated, tech-savvy)
- **LA County Conversion:** 9-11% (volume leader, diverse demographics)
- **San Diego Conversion:** 10-12% (affluent coastal, quality healthcare)
- **Sacramento Conversion:** 8-10% (state capital, government workers)

**Community Rating Impact:**
- **65-year-old Premium:** Same as 80-year-old (unique advantage)
- **Education Engagement:** 65-70% of CA visitors view community rating content
- **Conversion Lift:** +20-25% for community rating-motivated leads

---

### Oregon (Fastest Growing Medicare Market)

**Unique Advantage:** 7.9% growth in 2024 (fastest in nation)
**Market Size:** 900K+ beneficiaries, 750K+ underserved
**Penetration:** ~15-20% (below national average)
**Major Markets:** Portland 600K+, Eugene, Salem
**New Lives:** 14,626 added in 2024

**Key Tracking Focus:**
1. **Growth Leadership Messaging:** Track highlight views, growth data clicks
2. **Portland Metro Dominance:** 70% of OR beneficiaries in Portland area
3. **Emerging Market Opportunity:** Track first-time Medicare enrollees
4. **Healthcare Quality:** OHSU, Providence networks

**Expected Performance:**
- **Overall OR Conversion:** 7-9% (emerging market, education needed)
- **Portland Conversion:** 9-11% (largest market, educated population)
- **Eugene/Salem Conversion:** 6-8% (smaller markets, less awareness)

**Growth Market Impact:**
- **New Enrollees:** 14,626 new lives = prime Medigap prospects
- **First-Time Medicare:** Higher education needs, longer sales cycle
- **3-Year Projection:** 30K+ new beneficiaries at 7.9% CAGR

---

### Washington (Premium Healthcare Focus)

**Unique Advantage:** World-class healthcare networks (UW Medicine, Seattle Cancer Care)
**Market Size:** 1M+ beneficiaries, 800K+ underserved
**Penetration:** ~15-20% (below national average)
**Major Markets:** Seattle-Tacoma 800K+, Spokane, Vancouver
**Premium Networks:** UW Medicine, Seattle Cancer Care Alliance, Swedish Medical Center

**Key Tracking Focus:**
1. **Premium Care Messaging:** Track network interest, quality focus
2. **Seattle-Tacoma Dominance:** 75% of WA beneficiaries in Puget Sound area
3. **Affluent Demographics:** Higher income, more likely to purchase Medigap
4. **Healthcare Quality:** UW Medicine #1 in Pacific Northwest

**Expected Performance:**
- **Overall WA Conversion:** 8-10% (affluent, quality-focused)
- **Seattle-Tacoma Conversion:** 11-14% (premium care, educated, affluent)
- **Spokane Conversion:** 7-9% (smaller market, less awareness)
- **Vancouver Conversion:** 6-8% (smaller market, Portland influence)

**Premium Care Impact:**
- **UW Medicine Interest:** 40-45% of WA visitors engage with network content
- **Quality-Motivated Leads:** +15-20% conversion vs cost-motivated
- **Affluent Demographics:** Higher average policy premium, better retention

---

## A/B Testing Recommendations

### Test 1: State Ordering
**Hypothesis:** California-first vs alphabetical ordering impacts engagement
**Variants:**
- **A (Current):** California, Oregon, Washington (population order)
- **B:** Alphabetical (California, Oregon, Washington - same order)
- **C:** Geographic (California, Oregon, Washington - south to north)

**Metrics:** State engagement rate, scroll depth, conversion by state

---

### Test 2: Community Rating Spotlight Placement
**Hypothesis:** Earlier community rating spotlight increases CA conversions
**Variants:**
- **A (Current):** After medigap opportunity section (~50% scroll)
- **B:** Immediately after region overview (~20% scroll)
- **C:** Both top and mid-page spotlights

**Metrics:** CA conversion rate, community rating education engagement

---

### Test 3: Market-Specific CTAs
**Hypothesis:** Market-specific CTAs (LA County, Seattle, Portland) increase conversions
**Variants:**
- **A (Current):** Generic state-level CTAs
- **B:** Market-specific CTAs with market names
- **C:** Dynamic CTAs based on detected location

**Metrics:** CTA click rate, market-specific conversion rate

---

### Test 4: Oregon Growth Messaging
**Hypothesis:** Growth leadership messaging increases OR engagement
**Variants:**
- **A (Current):** "Fastest growth (7.9%)" focus
- **B:** "14,626 new lives added" absolute numbers
- **C:** "Emerging market opportunity" forward-looking

**Metrics:** OR engagement rate, OR conversion rate

---

### Test 5: Multilingual CTA Prominence
**Hypothesis:** More prominent multilingual CTAs increase language-specific conversions
**Variants:**
- **A (Current):** Language CTAs in designated sections
- **B:** Floating language selector in header
- **C:** Inline language options throughout page

**Metrics:** Language-specific CTA clicks, multilingual lead conversion

---

## Integration Requirements

### Google Analytics 4 Setup
```javascript
// Required GA4 configuration
gtag('config', 'GA_MEASUREMENT_ID', {
  custom_map: {
    'dimension1': 'page_type',
    'dimension2': 'region',
    'dimension3': 'state',
    'dimension4': 'market',
    'dimension5': 'lead_quality_score'
  }
});
```

### Facebook Pixel Setup
```javascript
// Required Facebook Pixel configuration
fbq('init', 'PIXEL_ID');
fbq('track', 'PageView');
```

### Server-Side Event Forwarding
For lead conversions, implement server-side event tracking for:
1. Enhanced conversion accuracy
2. iOS 14.5+ privacy compliance
3. Ad blocker mitigation
4. Better attribution

---

## Monitoring & Optimization

### Daily Monitoring (Automated)
- Page views and unique visitors
- Conversion rate (overall and by state)
- CTA click rates
- Error rates and broken links

### Weekly Analysis
- State engagement distribution (CA vs OR vs WA)
- Market performance comparison
- Lead quality score trends
- CTA performance by section
- User journey funnel drop-off points

### Monthly Deep Dive
- State-specific conversion rate analysis
- Market-specific performance review
- Lead quality score correlation with actual conversions
- A/B test results and recommendations
- Content engagement patterns
- Multilingual engagement trends

### Quarterly Strategic Review
- ROI analysis by state and market
- Budget allocation optimization (CA vs OR vs WA)
- Content updates based on performance
- New market opportunities identification
- Competitive analysis (West Coast Medicare Supplement landscape)

---

## Success Metrics Summary

### Overall Regional Performance
- **Monthly Visits:** 5,000-8,000 visitors
- **Overall Conversion:** 8-10% → qualified leads
- **Average Lead Score:** 65-75 points
- **Cost Per Lead:** $30-40
- **ROAS:** 400-500%

### State-Specific Performance
- **California:** 9-11% conversion, 55-60% of leads, $180-220 avg value
- **Washington:** 8-10% conversion, 25-30% of leads, $200-240 avg value
- **Oregon:** 7-9% conversion, 15-20% of leads, $160-200 avg value

### Market-Specific Performance
- **LA County:** 9-11% conversion, 30-35% of CA leads
- **SF Bay Area:** 12-15% conversion, 20-25% of CA leads
- **Seattle-Tacoma:** 11-14% conversion, 75% of WA leads
- **San Diego:** 10-12% conversion, 10-12% of CA leads
- **Portland:** 9-11% conversion, 70% of OR leads

This comprehensive analytics setup provides complete visibility into West Coast regional Medicare Supplement market performance, enabling data-driven optimization and strategic resource allocation across the 8M+ beneficiary, 6M+ underserved opportunity spanning California, Oregon, and Washington.
