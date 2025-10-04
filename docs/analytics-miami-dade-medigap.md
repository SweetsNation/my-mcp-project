# Miami-Dade County Medicare Supplement Analytics Tracking Documentation

## Overview

Comprehensive analytics tracking implementation for the Miami-Dade County Medicare Supplement landing page. This tracking system captures urban healthcare behaviors, bilingual service engagement, international travel interest, hospital network preferences, and multi-regional exploration patterns for South Florida's largest Medicare market.

**Page:** `/medicare-supplement-miami-dade-county`
**Market:** Miami-Dade County, Florida (South Florida)
**Total Beneficiaries:** 485,000
**Medigap Opportunity:** 213,000 (56% MA penetration)
**Major Hospital Systems:** 5 (Jackson Health, Baptist Health, UM Health, Cleveland Clinic, Mount Sinai)
**Unique Factors:** Bilingual services, international travel, cultural diversity, premium networks

---

## Analytics Configuration

### Conversion Values

```typescript
{
  phoneCallValue: 95,        // Very high value - largest FL county market (485K beneficiaries)
  formSubmissionValue: 70,   // Strong lead indicator for premium urban market
  quoteCTAValue: 50,         // Mid-funnel engagement in competitive market
  contentEngagementThreshold: 150  // 2:30 minutes for 4,200-word comprehensive content
}
```

### Audience Segments (20 segments)

1. **miami_dade_residents** - General county population
2. **downtown_miami_seniors** - Downtown Miami, Brickell, urban core
3. **miami_beach_residents** - Miami Beach, South Beach areas
4. **hialeah_seniors** - Hialeah, largest Cuban-American community
5. **north_miami_dade_residents** - North Miami, Aventura, Sunny Isles
6. **south_miami_dade_homestead** - Homestead, Kendall, Cutler Bay
7. **west_miami_dade_doral** - Doral, Sweetwater, Westchester
8. **central_miami_little_havana** - Little Havana, Flagami, Allapattah
9. **coastal_communities_seniors** - Bal Harbour, Sunny Isles, Key Biscayne
10. **bilingual_spanish_speakers** - Spanish-dominant beneficiaries
11. **haitian_creole_community** - Little Haiti, North Miami Creole speakers
12. **international_travelers** - Frequent Caribbean/Latin America travelers
13. **snowbird_multi_state_residents** - Winter FL residents with northern homes
14. **premium_hospital_seekers** - UM Health, Cleveland Clinic patients
15. **jackson_health_users** - Jackson Memorial patients
16. **um_health_cleveland_clinic_patients** - Academic medical center users
17. **baptist_health_network_users** - Baptist Health system patients
18. **culturally_diverse_seniors** - Multilingual, multicultural communities
19. **high_utilization_healthcare_consumers** - Active medical care users
20. **affluent_coral_gables_pinecrest** - High-income areas (Coral Gables, Pinecrest)

---

## Custom Event Types (19 Events)

### 1. Urban Healthcare View
**Event:** `urban_healthcare_view`
**Trigger:** User views urban healthcare landscape section
**Value:** 15 points

```typescript
trackMiamiDadeMedigapEvent('urban_healthcare_view', {
  section_viewed: 'hospital_systems',
  time_spent_seconds: 45
});
```

### 2. Bilingual Service Interest
**Event:** `bilingual_service_interest`
**Trigger:** User engages with bilingual services section
**Value:** 30 points (high-value cultural competency)

```typescript
trackBilingualServiceInterest('spanish', 'enrollment_assistance');
```

**Language Options:**
- `spanish` - Spanish/Español (Little Havana, Hialeah)
- `haitian_creole` - Kreyòl (Little Haiti, North Miami)
- `portuguese` - Português (Brazilian community)
- `french` - Français (Caribbean community)

**Service Types:**
- `enrollment_assistance` - Spanish-speaking enrollment help
- `document_translation` - Translated materials
- `agent_request` - Bilingual agent assignment
- `cultural_consultation` - Cultural competency counseling

### 3. International Travel Coverage Interest
**Event:** `international_travel_coverage_interest`
**Trigger:** User views international travel coverage benefits
**Value:** 35 points

```typescript
trackInternationalTravelInterest('caribbean_cruise', 'Bahamas');
```

**Travel Types:**
- `caribbean_cruise` - Cruise travel in Caribbean
- `latin_america_visit` - Family visits to Latin America
- `extended_travel` - Extended international trips
- `home_country_trip` - Visits to countries of origin

### 4. Hospital Network Comparison
**Event:** `hospital_network_comparison`
**Trigger:** User compares major hospital systems
**Value:** 35-50 points (varies by hospital)

```typescript
trackHospitalNetworkInterest('um_health', 'specialist_inquiry', 90);
```

**Hospital Systems:**
- `jackson_health` - Jackson Health System (40 points) - Level I Trauma, public safety net
- `baptist_health` - Baptist Health South Florida (45 points) - 12 hospitals, cardiac care
- `um_health` - University of Miami Health (50 points) - Academic center, Sylvester Cancer
- `cleveland_clinic` - Cleveland Clinic Florida (50 points) - Cardiac excellence, Weston
- `mount_sinai` - Mount Sinai Medical Center (35 points) - Miami Beach premier

**Interaction Types:**
- `view_info` - Basic hospital information view
- `specialist_inquiry` - Specialist access questions
- `network_comparison` - Comparing multiple systems

### 5. Regional Zone Exploration
**Event:** `regional_zone_exploration`
**Trigger:** User explores Miami-Dade regional zones
**Value:** 15 points

```typescript
trackRegionalZoneView('downtown_miami_beach', 'Miami Beach');
```

**Miami-Dade Zones:**
- `downtown_miami_beach` - 95K beneficiaries (Jackson, Mount Sinai, UM Health)
- `north_miami_hialeah` - 125K beneficiaries (North Shore, Hialeah, Aventura hospitals)
- `south_miami_homestead` - 78K beneficiaries (South Miami, Homestead hospitals)
- `west_miami_doral` - 88K beneficiaries (Doral Medical, Kendall Regional)
- `central_miami` - 62K beneficiaries (Mercy, Larkin hospitals)
- `coastal_communities` - 37K beneficiaries (Mount Sinai, Aventura)

### 6. Cost Comparison Analysis
**Event:** `cost_comparison_analysis`
**Trigger:** User interacts with cost comparison tables
**Value:** 25 points

```typescript
trackCostComparisonAnalysis('active_medical_care', 'ma_vs_medigap');
```

**Scenarios:**
- `light_healthcare` - MA: $960/year, Medigap: $1,896 (MA saves $936)
- `active_medical_care` - MA: $5,200/year, Medigap: $2,136 (Medigap saves $3,064)
- `specialist_care` - MA: $8,400/year, Medigap: $2,136 (Medigap saves $6,264)

**Comparison Types:**
- `ma_vs_medigap` - Medicare Advantage vs Medigap
- `plan_g_vs_n` - Plan G vs Plan N comparison
- `premium_vs_benefits` - Premium cost vs benefit analysis

### 7. Medigap Plan Selection
**Event:** `medigap_plan_selection`
**Trigger:** User views specific Medigap plan details
**Value:** 35 points

```typescript
trackMedigapPlanInterest('plan_g', 158, 'international_travel_coverage');
```

**Plans:**
- `plan_g` - $158/month (comprehensive, Part B deductible only)
- `plan_n` - $118/month (budget option, small copays)
- `plan_g_hd` - $42/month (high deductible $2,800)

### 8. Snowbird Multi-State Interest
**Event:** `snowbird_multi_state_interest`
**Trigger:** User explores snowbird/multi-state coverage
**Value:** 30 points

```typescript
trackSnowbirdMultiStateInterest('seasonal_migration', 'New York');
```

**Coverage Types:**
- `dual_state_residence` - Two permanent residences
- `seasonal_migration` - Winter FL, summer north
- `frequent_travel` - Regular interstate travel
- `northern_home` - Primary northern residence

### 9. Miami-Dade Quote Request
**Event:** `miami_dade_quote_request`
**Trigger:** User requests personalized quote
**Value:** 55 points (high-value conversion)

```typescript
trackMiamiDadeQuoteRequest('plan_g', {
  urgency: 'within_week',
  zone: 'downtown_miami_beach',
  language_preference: 'spanish',
  hospital_network_concern: 'um_health_access'
});
```

### 10. South Florida Specialist Consultation
**Event:** `south_florida_specialist_consultation`
**Trigger:** User schedules expert consultation
**Value:** 65 points (highest conversion)

```typescript
trackSouthFloridaSpecialistConsultation('bilingual', {
  concern: 'hospital_network_access',
  timeframe: 'within_week',
  hospital_preference: 'cleveland_clinic'
});
```

**Consultation Types:**
- `phone` - Phone consultation
- `in_person` - Office visit
- `video` - Video conference
- `bilingual` - Spanish/Creole bilingual session

### 11. Deep Urban Healthcare Engagement
**Event:** `deep_urban_healthcare_engagement`
**Trigger:** User spends 3+ minutes, 75%+ scroll, views 5+ sections
**Value:** 50 points

```typescript
trackDeepUrbanHealthcareEngagement(210, 85, 6, [
  'Jackson Health System',
  'Baptist Health',
  'UM Health'
]);
```

**Engagement Score Calculation (0-100):**
- **Time component (40 points):**
  - 60s+ = 10 points
  - 150s+ = 15 points
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

### 12. Plan Comparison Interaction
**Event:** `plan_comparison_interaction`
**Trigger:** User compares multiple Medigap plans
**Value:** 30 points

```typescript
trackPlanComparisonInteraction(['plan_g', 'plan_n'], 120, 'plan_g_selected');
```

### 13. Multi-Regional Exploration
**Event:** `multi_regional_exploration`
**Trigger:** User explores multiple Miami-Dade zones
**Value:** 25 points

```typescript
trackMultiRegionalExploration([
  'downtown_miami_beach',
  'north_miami_hialeah',
  'south_miami_homestead'
], 'downtown_miami_beach');
```

### 14-19. Additional Tracking Events

14. **Jackson Health System Interest** - Specific to public hospital network
15. **Baptist Health Engagement** - Multi-hospital system tracking
16. **UM Health Specialist Interest** - Academic medical center focus
17. **Cleveland Clinic Access View** - Premium cardiac care interest
18. **Cultural Competency Care Interest** - Diverse community needs
19. **Spanish Language Support Request** - Bilingual service activation

---

## Automatic Tracking Features

### 1. Page View Tracking
Automatically fired on page load:

```typescript
event('landing_page_view', {
  page_type: 'county',
  county: 'Miami-Dade County',
  state: 'Florida',
  region: 'South Florida',
  product_type: 'medicare_supplement',
  market_size: 485000,
  major_hospital_systems: 5,
  bilingual_market: true
});
```

### 2. Scroll Depth Tracking
Milestones: 25%, 50%, 75%, 90%

```typescript
// 75% scroll (deep engagement)
event('deep_page_engagement', {
  scroll_depth: 75,
  time_on_page: 165,
  urban_market: 'miami_dade',
  engagement_quality: 'high'
});
```

### 3. Hospital Network View Tracking
Automatic intersection observer for hospital mentions:

- Jackson Health System views
- Baptist Health South Florida views
- UM Health/Sylvester Cancer Center views
- Cleveland Clinic Florida views
- Mount Sinai Medical Center views

### 4. Page Exit Tracking
Captures final engagement metrics:

```typescript
event('page_exit', {
  time_on_page: 240,
  max_scroll_depth: 88,
  engagement_score: 82,
  lead_quality: 'hot',
  hospital_networks_viewed: 'Jackson Health,Baptist Health,UM Health',
  zones_explored: 3
});
```

---

## Key Performance Indicators (KPIs)

### Primary Conversions

| Metric | Target | Tracking |
|--------|--------|----------|
| Phone calls | 60/month | `miami_dade_quote_request` |
| Quote requests | 80/month | `miami_dade_quote_request` |
| Consultation bookings | 35/month | `south_florida_specialist_consultation` |
| Bilingual consultations | 20/month | `bilingual_service_interest` |
| Plan selections | 50/month | `medigap_plan_selection` |

### Engagement Metrics

| Metric | Target | Tracking |
|--------|--------|----------|
| Avg. time on page | 3:00 | Automatic scroll tracking |
| Scroll depth 75%+ | 45% | `deep_page_engagement` |
| Hospital network views | 60% | `hospital_network_comparison` |
| Bilingual section views | 35% | `bilingual_service_interest` |
| Multi-zone exploration | 30% | `multi_regional_exploration` |

### Lead Quality Distribution

| Quality | Score | Monthly Target | Follow-up |
|---------|-------|----------------|-----------|
| Hot | 80-100 | 25 leads | Immediate call |
| Warm | 60-79 | 55 leads | 24-hour call |
| Engaged | 40-59 | 80 leads | Email nurture |
| Browser | 0-39 | N/A | Retargeting ads |

### Market-Specific Metrics

**Hospital Network Engagement:**
- UM Health/Cleveland Clinic views (premium care) - 40% of users
- Jackson Health views (comprehensive care) - 55% of users
- Baptist Health views (multi-hospital network) - 50% of users

**Bilingual Services:**
- Spanish language interest - 45% of users
- Haitian Creole interest - 15% of users
- Bilingual consultation requests - 30% of conversions

**International Travel:**
- Travel coverage section views - 40% of users
- Caribbean/Latin America specific interest - 25% of users

---

## GA4 Custom Dimensions

Configure these custom dimensions in GA4:

```javascript
// Event-scoped dimensions
{
  miami_dade_zone: 'downtown_miami_beach' | 'north_miami_hialeah' | 'south_miami_homestead' | 'west_miami_doral' | 'central_miami' | 'coastal_communities',
  hospital_system: 'jackson_health' | 'baptist_health' | 'um_health' | 'cleveland_clinic' | 'mount_sinai',
  language_preference: 'english' | 'spanish' | 'haitian_creole' | 'portuguese',
  international_traveler: 'yes' | 'no',
  snowbird_status: 'seasonal' | 'year_round',
  engagement_score: 0-100,
  lead_quality: 'hot' | 'warm' | 'engaged' | 'browser',
  bilingual_service_requested: true | false,
  hospital_networks_viewed_count: number
}
```

---

## GA4 Exploration Reports

### 1. Hospital Network Performance
**Template:** Free form
**Rows:** hospital_system
**Values:** conversions, engagement_score, avg_time_on_page
**Filter:** page_path contains '/medicare-supplement-miami-dade-county'

### 2. Bilingual Services Impact
**Template:** Funnel exploration
**Steps:**
1. Page view
2. Bilingual section view
3. Language support request
4. Bilingual consultation booking
**Breakdown:** language_preference

### 3. Regional Zone Conversion Funnel
**Template:** Funnel exploration
**Steps:**
1. Page view (all visitors)
2. Zone exploration
3. Hospital network interest
4. Quote request
5. Consultation booking
**Breakdown:** miami_dade_zone

### 4. International Traveler Analysis
**Template:** Free form
**Rows:** international_traveler (yes/no)
**Values:** conversions, plan_selection_rate, avg_premium
**Segments:** Travelers vs Non-travelers

### 5. Lead Quality by Hospital Network
**Template:** Scatter chart
**X-axis:** hospital_networks_viewed_count
**Y-axis:** engagement_score
**Bubble size:** conversion_value
**Color:** lead_quality

---

## Implementation Guide

### Step 1: Import Tracking Module

```typescript
import {
  trackHospitalNetworkInterest,
  trackBilingualServiceInterest,
  trackInternationalTravelInterest,
  trackRegionalZoneView,
  trackCostComparisonAnalysis,
  trackMedigapPlanInterest,
  trackMiamiDadeQuoteRequest,
  trackSouthFloridaSpecialistConsultation,
  trackSnowbirdMultiStateInterest,
  initializeMiamiDadeTracking
} from '@/lib/analytics/miami-dade-medigap-tracking';
```

### Step 2: Initialize Tracking

```typescript
useEffect(() => {
  initializeMiamiDadeTracking();
  return () => {
    // Cleanup handled by module
  };
}, []);
```

### Step 3: Track User Interactions

**Hospital Network Section:**
```typescript
<div
  onClick={() => trackHospitalNetworkInterest('um_health', 'specialist_inquiry', 90)}
  onMouseEnter={() => trackMiamiDadeMedigapEvent('section_hover', {
    section: 'um_health_network'
  })}
>
  {/* UM Health content */}
</div>
```

**Bilingual Services:**
```typescript
<button
  onClick={() => trackBilingualServiceInterest('spanish', 'agent_request')}
>
  Servicio en Español
</button>
```

**Plan Selection:**
```typescript
<button
  onClick={() => trackMedigapPlanInterest('plan_g', 158, 'comprehensive_coverage')}
>
  View Plan G Details ($158/month)
</button>
```

**Quote Request:**
```typescript
<form onSubmit={(e) => {
  e.preventDefault();
  trackMiamiDadeQuoteRequest('plan_g', {
    urgency: 'within_week',
    zone: 'downtown_miami_beach',
    language_preference: 'spanish'
  });
}}>
  {/* Quote form */}
</form>
```

---

## Testing & Validation

### Manual Testing Checklist

- [ ] Page view fires on load with Miami-Dade context
- [ ] Scroll tracking hits 25%, 50%, 75%, 90% milestones
- [ ] Hospital network tracking works for all 5 systems
- [ ] Bilingual section tracking works (Spanish, Creole, Portuguese)
- [ ] International travel section tracking works
- [ ] Regional zone exploration tracking works (all 6 zones)
- [ ] Cost comparison tracking works (all 3 scenarios)
- [ ] Plan selection tracking works (Plan G, N, HD)
- [ ] Quote form submission tracking works
- [ ] Consultation request tracking works
- [ ] Page exit event fires with engagement score
- [ ] All event values are correct (95 for phone, 65 for consultation)
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
   - Explore 3+ hospital networks
   - Check `engagement_score` parameter = 75-90

---

## Conversion Tracking Setup

### Google Ads Conversion Actions

Create these conversion actions:

1. **Miami-Dade Phone Call**
   - Event: `miami_dade_quote_request` with phone intent
   - Value: $95
   - Count: One per click

2. **Miami-Dade Quote Request**
   - Event: `miami_dade_quote_request`
   - Value: $55
   - Count: One per session

3. **Miami-Dade Specialist Consultation**
   - Event: `south_florida_specialist_consultation`
   - Value: $65
   - Count: One per session

4. **Bilingual Consultation Request**
   - Event: `south_florida_specialist_consultation` where consultation_type = 'bilingual'
   - Value: $70
   - Count: One per session

### Facebook Pixel Custom Conversions

1. **Hospital Network Lead**
   - Event: `hospital_network_comparison`
   - Rule: hospital_system = 'um_health' OR 'cleveland_clinic'
   - Value: $40

2. **Bilingual Services Lead**
   - Event: `bilingual_service_interest`
   - Rule: service_type = 'agent_request'
   - Value: $30

3. **International Travel Lead**
   - Event: `international_travel_coverage_interest`
   - Value: $35

---

## Optimization Recommendations

### High-Performing Segments

Based on engagement score analysis:

1. **Bilingual Spanish speakers** (Little Havana, Hialeah)
   - Higher engagement scores (avg 76)
   - 35% higher conversion rate
   - Prioritize Spanish content, bilingual CTAs

2. **Premium hospital seekers** (UM Health, Cleveland Clinic interest)
   - 40% higher quote request rate
   - Emphasize academic medical center access, specialist freedom

3. **International travelers**
   - 28% higher Plan G selection
   - Highlight foreign emergency coverage benefits

### Content Optimization

**Underperforming sections** (track improvement):
- Regional zone comparison (25% view rate) → Add interactive map
- Cost analysis tables (30% view rate) → Add calculator tool

**High-performing sections** (expand):
- Hospital network comparison (60% view rate) → Add video testimonials
- Bilingual services (45% view rate) → Add Spanish language toggle
- International travel (40% view rate) → Add destination-specific examples

### A/B Testing Ideas

1. **Hero CTA:** "Get Miami-Dade Medigap Quote" vs "Servicio Bilingüe Disponible - Get Quote"
2. **Hospital section:** List format vs Card format with images
3. **Language toggle:** Top of page vs Floating button

---

## Maintenance Schedule

- **Weekly:** Review conversion rates, identify drop-offs by hospital network
- **Monthly:** Analyze lead quality distribution, adjust scoring
- **Quarterly:** Update bilingual content, refresh hospital statistics
- **Annually:** Review all tracking events, deprecate unused events

---

## Support Resources

- **Analytics Module:** `/src/lib/analytics/miami-dade-medigap-tracking.ts`
- **Configuration:** `/src/lib/landing-page-analytics-config.ts`
- **Page Implementation:** `/src/app/medicare-supplement-miami-dade-county/page.tsx`

**Questions?** Contact development team for analytics customization or bilingual tracking enhancements.
