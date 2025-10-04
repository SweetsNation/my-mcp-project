# Analytics Tracking Configuration: Kaiser Permanente Medicare Advantage Hawaii Page
**El-Mag Insurance - Kaiser Hawaii Carrier-Location Analytics**

## Overview
Comprehensive Google Analytics 4 (GA4) event tracking configuration for the Kaiser Permanente Medicare Advantage Hawaii landing page, focusing on carrier-specific engagement, integrated care model interest, island-based user behavior, and Kaiser plan conversion optimization.

---

## Page View Tracking

### Initial Page Load Event

```javascript
// Triggered on page component mount
trackMedicareAdvancedPageView('Kaiser Permanente Medicare Advantage Hawaii', {
  pageType: 'carrier_location',
  pageCategory: 'kaiser_specific',
  carrier: 'Kaiser Permanente',
  state: 'Hawaii',
  totalBeneficiaries: 42000,
  availablePlans: 6,
  specialMetrics: {
    zeroPremiumPlans: 4,
    maPenetration: 52.3,
    medicalCenters: 4,
    islandsCovered: 4,
    averageStarRating: 4.5,
    integratedCareModel: true,
    japaneseLanguageSupport: true
  },
  contentFocus: 'integrated_care_island_coverage'
});
```

**Event Parameters**:
- `page_title`: "Kaiser Permanente Medicare Advantage Hawaii"
- `page_type`: "carrier_location"
- `page_category`: "kaiser_specific"
- `carrier`: "Kaiser Permanente"
- `state`: "Hawaii"
- `total_beneficiaries`: 42000
- `available_plans`: 6
- `zero_premium_plans`: 4
- `ma_penetration`: 52.3
- `medical_centers`: 4
- `islands_covered`: 4
- `average_star_rating`: 4.5
- `integrated_care_model`: true
- `japanese_language_support`: true

**Analysis Use Cases**:
- Track Kaiser-specific page performance vs other carriers
- Measure interest in integrated care model
- Compare Hawaii performance to other states
- Identify high-value Kaiser searcher behavior

---

## Scroll Depth Tracking

### Milestone-Based Scroll Events

```javascript
setupMedicareAdvancedScrollTracking('carrier_location', [
  {
    percentage: 25,
    milestone: 'kaiser_plans_overview',
    description: 'User viewed Kaiser Senior Advantage plan cards'
  },
  {
    percentage: 50,
    milestone: 'integrated_care_benefits_viewed',
    description: 'User viewed integrated care model explanation'
  },
  {
    percentage: 75,
    milestone: 'facilities_locations_explored',
    description: 'User viewed Kaiser facilities across Hawaii'
  },
  {
    percentage: 90,
    milestone: 'conversion_section_reached',
    description: 'User reached enrollment CTA section'
  }
]);
```

**Event Naming Convention**: `scroll_depth_[percentage]`

**Custom Parameters**:
- `milestone_name`: Specific content section reached
- `kaiser_features_viewed`: Array of Kaiser-specific features scrolled past
- `engagement_level`: "high" (90%+), "medium" (50-89%), "low" (<50%)

**Analysis Metrics**:
- **Target 65%+ Scroll Rate**: 55% of visitors (carrier-specific content)
- **Drop-off Points**: Identify where Kaiser interest wanes
- **Integrated Care Engagement**: Do users scroll to see care model?
- **Facility Importance**: Does location info retain attention?

---

## Kaiser Plan Engagement Tracking

### Plan Card Interaction Events

```javascript
// Track which Kaiser Senior Advantage plans users explore
const kaiserPlans = [
  {
    id: 'kaiser_basic_hmo',
    name: 'Kaiser Senior Advantage Basic (HMO)',
    premium: 0,
    islands: ['Oahu', 'Maui', 'Big Island', 'Kauai']
  },
  {
    id: 'kaiser_enhanced_hmo',
    name: 'Kaiser Senior Advantage Enhanced (HMO)',
    premium: 0,
    islands: ['Oahu', 'Maui']
  },
  {
    id: 'kaiser_premier_hmo',
    name: 'Kaiser Senior Advantage Premier (HMO)',
    premium: 35,
    islands: ['Oahu']
  }
];

kaiserPlans.forEach(plan => {
  trackKaiserPlanEngagement({
    planId: plan.id,
    planName: plan.name,
    planType: 'HMO',
    premium: plan.premium,
    islandsAvailable: plan.islands,
    starRating: 4.5,
    engagementType: 'card_click' | 'benefits_expanded' | 'cta_clicked'
  });
});
```

**Event Name**: `kaiser_plan_engaged`

**Parameters**:
- `plan_id`: Unique plan identifier
- `plan_name`: "Kaiser Senior Advantage Basic (HMO)"
- `plan_type`: "HMO"
- `premium`: 0 or dollar amount
- `islands_available`: ["Oahu", "Maui", "Big Island", "Kauai"]
- `star_rating`: 4.5
- `engagement_type`: "card_click" | "benefits_expanded" | "cta_clicked"
- `user_island`: Inferred from IP/previous behavior (if available)

**Analysis Metrics**:
- **Most Popular Plans**: Rank by engagement rate
- **$0 Premium Appeal**: Do zero-premium plans get more clicks?
- **Island Limitation Impact**: Do Oahu-only plans deter Neighbor Island users?
- **Plan-to-Conversion Rate**: Which plans drive most leads?

---

## Integrated Care Model Engagement

### Care Coordination Feature Tracking

```javascript
// Track interest in Kaiser's unique integrated care features
trackIntegratedCareEngagement({
  featureType: string,
  featureValue: string,
  timeSpentOnFeature: number,
  interactionType: string
});
```

**Integrated Care Features**:

1. **Electronic Health Records**
   ```javascript
   trackIntegratedCareEngagement({
     featureType: 'electronic_health_records',
     featureValue: 'instant_provider_access',
     timeSpentOnFeature: 45, // seconds
     interactionType: 'section_expanded' | 'video_watched' | 'infographic_viewed'
   });
   ```

2. **Care Team Coordination**
   ```javascript
   trackIntegratedCareEngagement({
     featureType: 'care_team_coordination',
     featureValue: 'pcp_specialist_integration',
     timeSpentOnFeature: 60,
     interactionType: 'diagram_viewed' | 'explainer_read'
   });
   ```

3. **Kaiser Permanente App**
   ```javascript
   trackIntegratedCareEngagement({
     featureType: 'kaiser_app',
     featureValue: 'video_visits_scheduling_refills',
     timeSpentOnFeature: 30,
     interactionType: 'screenshot_viewed' | 'feature_list_read' | 'app_store_link_clicked'
   });
   ```

4. **Same-Day Appointments**
   ```javascript
   trackIntegratedCareEngagement({
     featureType: 'same_day_appointments',
     featureValue: 'urgent_care_access',
     timeSpentOnFeature: 20,
     interactionType: 'benefit_viewed'
   });
   ```

**Event Name**: `integrated_care_feature_engaged`

**Analysis Use Cases**:
- **Top Value Propositions**: Which integrated care features resonate most?
- **Conversion Correlation**: Do users who engage with care model convert more?
- **Content Optimization**: Should we emphasize app, EHR, or coordination?
- **Competitive Advantage**: Does integrated care messaging differentiate Kaiser?

---

## Island-Specific Engagement Tracking

### Geographic Interaction Events

```javascript
// Track which Hawaiian islands users are interested in
trackIslandEngagement({
  island: 'Oahu' | 'Maui' | 'Big Island' | 'Kauai',
  engagementType: string,
  facilityViewed: string,
  planAvailability: number
});
```

**Island Engagement Events**:

1. **Oahu**
   ```javascript
   trackIslandEngagement({
     island: 'Oahu',
     engagementType: 'facility_clicked',
     facilityViewed: 'Kaiser Permanente Moanalua Medical Center',
     planAvailability: 6 // all 6 plans available
   });
   ```

2. **Maui**
   ```javascript
   trackIslandEngagement({
     island: 'Maui',
     engagementType: 'facility_clicked',
     facilityViewed: 'Kaiser Permanente Maui Lani Medical & Urgent Care',
     planAvailability: 4
   });
   ```

3. **Big Island**
   ```javascript
   trackIslandEngagement({
     island: 'Big Island',
     engagementType: 'facility_clicked',
     facilityViewed: 'Kaiser Permanente Kona Medical Office',
     planAvailability: 3
   });
   ```

4. **Kauai**
   ```javascript
   trackIslandEngagement({
     island: 'Kauai',
     engagementType: 'facility_clicked',
     facilityViewed: 'Kaiser Permanente coverage (via Oahu)',
     planAvailability: 3
   });
   ```

**Event Name**: `island_engagement`

**Parameters**:
- `island`: Island name
- `engagement_type`: "facility_clicked" | "plan_filter_applied" | "coverage_map_viewed"
- `facility_viewed`: Specific Kaiser facility
- `plan_availability`: Number of plans on that island
- `user_likely_island`: IP-based inference (if available)

**Analysis Metrics**:
- **Island Distribution**: Where are Kaiser-interested users located?
- **Neighbor Island Interest**: Do Maui/Big Island/Kauai users engage differently?
- **Facility Importance**: Do users verify facility locations before converting?
- **Plan Limitation Impact**: Does lower plan availability deter conversion?

---

## Cultural & Language Services Tracking

### Japanese Language & Cultural Service Engagement

```javascript
// Track interest in Kaiser's cultural/language services
trackCulturalServiceEngagement({
  serviceType: string,
  culturalGroup: string,
  engagementType: string,
  conversionIntent: string
});
```

**Cultural Service Events**:

1. **Japanese Language Services**
   ```javascript
   trackCulturalServiceEngagement({
     serviceType: 'japanese_language_services',
     culturalGroup: 'japanese_american',
     engagementType: 'provider_list_viewed' | 'language_info_expanded',
     conversionIntent: 'high' // If user spends >30 seconds
   });
   ```

2. **Asian Pacific Islander Programs**
   ```javascript
   trackCulturalServiceEngagement({
     serviceType: 'api_cultural_competency',
     culturalGroup: 'asian_pacific_islander',
     engagementType: 'program_details_viewed',
     conversionIntent: 'medium'
   });
   ```

3. **Multilingual Resources**
   ```javascript
   trackCulturalServiceEngagement({
     serviceType: 'multilingual_materials',
     culturalGroup: 'multiple',
     engagementType: 'resource_list_viewed' | 'language_toggle_clicked',
     conversionIntent: 'low'
   });
   ```

**Event Name**: `cultural_service_engaged`

**Analysis Use Cases**:
- **Cultural Targeting Effectiveness**: Do Japanese language services drive conversions?
- **Demographic Insights**: Which cultural groups engage with Kaiser Hawaii?
- **Content Expansion**: Should we add Filipino, Korean, Chinese content?
- **Conversion by Culture**: Do cultural services correlate with enrollment?

**Demographic Tracking**:
- Japanese-American seniors (largest Hawaii Asian group)
- Filipino-American seniors (second largest)
- Native Hawaiian seniors
- Mainland transplants/retirees

---

## CTA Click Tracking

### Kaiser-Specific Call-to-Action Events

```javascript
// Track all Kaiser-related CTA button clicks
trackKaiserCTAClick({
  ctaText: string,
  ctaLocation: string,
  kaiserContext: string,
  userJourneyStage: string
});
```

**CTA Categories & Events**:

1. **Plan Comparison CTA**
   ```javascript
   trackKaiserCTAClick({
     ctaText: 'Compare Kaiser Plans - Free Quote',
     ctaLocation: 'hero_section',
     kaiserContext: 'integrated_care_introduction',
     userJourneyStage: 'awareness',
     carrierSpecific: true
   });
   ```

2. **Kaiser-Filtered Plan Tool**
   ```javascript
   trackKaiserCTAClick({
     ctaText: 'Compare All Kaiser Plans Side-by-Side',
     ctaLocation: 'after_plan_cards',
     kaiserContext: 'post_plan_preview',
     userJourneyStage: 'consideration',
     destinationURL: '/medicare-advantage/plans?carrier=kaiser&state=hawaii'
   });
   ```

3. **Phone Call CTA**
   ```javascript
   trackKaiserCTAClick({
     ctaText: 'Call 331-E-HEALTH for Kaiser Enrollment',
     ctaLocation: 'sticky_header',
     kaiserContext: 'mid_scroll',
     userJourneyStage: 'decision',
     callTrackingEnabled: true
   });
   ```

4. **Get Kaiser Plan Comparison**
   ```javascript
   trackKaiserCTAClick({
     ctaText: 'Get Free Kaiser Plan Comparison',
     ctaLocation: 'enrollment_section',
     kaiserContext: 'post_benefits_education',
     userJourneyStage: 'decision',
     formType: 'lead_generation',
     carrierPreference: 'Kaiser Permanente'
   });
   ```

**CTA Performance Metrics**:
- **Hero CTA Click Rate**: Target 10-14% (carrier-specific = higher intent)
- **Plan Comparison Tool CTR**: Target 30-35%
- **Phone Call CTR**: Target 3-4%
- **Bottom Form CTA**: Target 18-22%

**Kaiser-Specific Tracking**:
- Do Kaiser-branded CTAs perform better than generic "Medicare Advantage"?
- Which Kaiser value props drive most CTA clicks?
- Integrated care emphasis vs plan benefits vs island coverage?

---

## Facility Location Engagement

### Medical Center & Office Interaction Tracking

```javascript
// Track engagement with Kaiser facility information
trackFacilityEngagement({
  facilityName: string,
  island: string,
  services: array,
  specialistCount: number,
  engagementType: string
});
```

**Facility Events**:

1. **Kaiser Permanente Moanalua Medical Center** (Oahu flagship)
   ```javascript
   trackFacilityEngagement({
     facilityName: 'Kaiser Permanente Moanalua Medical Center',
     island: 'Oahu',
     location: 'Honolulu',
     services: ['Full Hospital', 'Emergency Care', 'Specialty Care', 'Lab & Imaging'],
     specialistCount: 350,
     engagementType: 'card_clicked' | 'directions_requested' | 'services_expanded'
   });
   ```

2. **Kaiser Permanente Waipio Medical Office** (Oahu)
   ```javascript
   trackFacilityEngagement({
     facilityName: 'Kaiser Permanente Waipio Medical Office',
     island: 'Oahu',
     location: 'Waipio',
     services: ['Primary Care', 'Specialty Care', 'Lab & Imaging', 'Pharmacy'],
     specialistCount: 120,
     engagementType: 'card_clicked'
   });
   ```

3. **Kaiser Permanente Maui Lani Medical & Urgent Care** (Maui)
   ```javascript
   trackFacilityEngagement({
     facilityName: 'Kaiser Permanente Maui Lani Medical & Urgent Care',
     island: 'Maui',
     location: 'Wailuku',
     services: ['Urgent Care', 'Primary Care', 'Lab & Imaging', 'Pharmacy'],
     specialistCount: 45,
     engagementType: 'card_clicked'
   });
   ```

4. **Kaiser Permanente Kona Medical Office** (Big Island)
   ```javascript
   trackFacilityEngagement({
     facilityName: 'Kaiser Permanente Kona Medical Office',
     island: 'Big Island',
     location: 'Kailua-Kona',
     services: ['Primary Care', 'Specialty Care', 'Lab & Imaging', 'Pharmacy'],
     specialistCount: 30,
     engagementType: 'card_clicked'
   });
   ```

**Event Name**: `facility_location_engaged`

**Analysis Metrics**:
- **Facility Verification Importance**: Do users check locations before converting?
- **Island Distribution**: Which facilities get most attention?
- **Service Type Interest**: Emergency care vs primary care vs specialty?
- **Proximity Conversion**: Do users near facilities convert more?

---

## Kaiser App & Technology Engagement

### Digital Health Tool Interaction

```javascript
// Track interest in Kaiser's technology features
trackKaiserTechnologyEngagement({
  technologyFeature: string,
  engagementType: string,
  timeSpent: number,
  conversionIntent: string
});
```

**Technology Feature Events**:

1. **Kaiser Permanente Mobile App**
   ```javascript
   trackKaiserTechnologyEngagement({
     technologyFeature: 'kaiser_permanente_app',
     engagementType: 'feature_list_viewed' | 'screenshot_viewed' | 'app_store_clicked',
     timeSpent: 45,
     conversionIntent: 'high',
     appFeatures: [
       'video_visits',
       'appointment_scheduling',
       'prescription_refills',
       'secure_messaging',
       'health_records_access'
     ]
   });
   ```

2. **Video Visits**
   ```javascript
   trackKaiserTechnologyEngagement({
     technologyFeature: 'video_visits',
     engagementType: 'benefit_explored',
     timeSpent: 30,
     conversionIntent: 'medium',
     relevance: 'high_for_neighbor_islands'
   });
   ```

3. **Electronic Health Records**
   ```javascript
   trackKaiserTechnologyEngagement({
     technologyFeature: 'electronic_health_records',
     engagementType: 'explainer_read' | 'diagram_viewed',
     timeSpent: 60,
     conversionIntent: 'high',
     keyBenefit: 'island_to_island_continuity'
   });
   ```

4. **Secure Messaging**
   ```javascript
   trackKaiserTechnologyEngagement({
     technologyFeature: 'secure_messaging',
     engagementType: 'benefit_viewed',
     timeSpent: 20,
     conversionIntent: 'medium'
   });
   ```

**Event Name**: `kaiser_technology_engaged`

**Analysis Use Cases**:
- **Technology Appeal**: Do tech-savvy seniors prefer Kaiser?
- **App Features Ranking**: Which app capabilities drive most interest?
- **Video Visit Appeal**: Especially important for island-to-island convenience
- **EHR Understanding**: Do seniors grasp electronic records value?

---

## Star Rating & Quality Metrics Engagement

### Quality Recognition Interaction

```javascript
// Track engagement with Kaiser's 4.5-star rating and quality metrics
trackQualityMetricsEngagement({
  metricType: string,
  metricValue: number | string,
  engagementType: string,
  trustImpact: string
});
```

**Quality Metric Events**:

1. **4.5 Star Rating**
   ```javascript
   trackQualityMetricsEngagement({
     metricType: 'cms_star_rating',
     metricValue: 4.5,
     engagementType: 'star_badge_viewed' | 'rating_explanation_clicked',
     trustImpact: 'high',
     comparisonContext: 'above_average_for_hawaii'
   });
   ```

2. **Member Satisfaction**
   ```javascript
   trackQualityMetricsEngagement({
     metricType: 'member_satisfaction',
     metricValue: 'nationally_recognized',
     engagementType: 'testimonial_read' | 'satisfaction_data_viewed',
     trustImpact: 'medium'
   });
   ```

3. **Health Outcomes**
   ```javascript
   trackQualityMetricsEngagement({
     metricType: 'health_outcomes',
     metricValue: 'preventive_care_excellence',
     engagementType: 'outcome_data_viewed',
     trustImpact: 'high'
   });
   ```

**Event Name**: `quality_metrics_engaged`

**Analysis Metrics**:
- **Trust Building**: Does star rating drive conversions?
- **Quality vs Price**: Do users prioritize quality over $0 premiums?
- **Competitive Advantage**: Kaiser's 4.5 stars vs other Hawaii carriers

---

## Conversion Event Tracking

### Kaiser-Specific Lead Generation

```javascript
// Contact form submission with Kaiser preference
trackKaiserConversion({
  conversionType: 'contact_form_submission',
  formLocation: 'enrollment_cta_section',
  carrierPreference: 'Kaiser Permanente',
  islandPreference: string,
  integratedCareInterest: boolean,
  plansExploredCount: number,
  timeOnPage: number,
  scrollDepth: number,
  facilitiesViewed: array,
  culturalServicesInterest: boolean
});
```

**Event Name**: `kaiser_lead_generated`

**Parameters**:
- `conversion_type`: "contact_form" | "phone_call" | "chat_initiated"
- `form_location`: Where conversion occurred
- `carrier_preference`: "Kaiser Permanente" (pre-filled)
- `island_preference`: User's island (Oahu, Maui, Big Island, Kauai)
- `integrated_care_interest`: Boolean (did user engage with care model content?)
- `plans_explored_count`: Number of Kaiser plans viewed
- `time_on_page`: Seconds
- `scroll_depth`: Percentage
- `facilities_viewed`: Array of Kaiser facilities checked
- `cultural_services_interest`: Boolean (Japanese language, API services)
- `technology_features_explored`: Array of app/tech features viewed

**Lead Scoring for Kaiser**:
```javascript
function calculateKaiserLeadQuality(metrics) {
  let score = 0;

  // Time on page (max 35 points)
  if (metrics.timeOnPage > 240) score += 35;
  else if (metrics.timeOnPage > 120) score += 20;
  else if (metrics.timeOnPage > 60) score += 10;

  // Plans explored (max 25 points)
  score += Math.min(metrics.plansExploredCount * 8, 25);

  // Integrated care interest (20 points)
  if (metrics.integratedCareInterest) score += 20;

  // Scroll depth (max 15 points)
  score += (metrics.scrollDepth / 100) * 15;

  // Facilities viewed (10 points)
  if (metrics.facilitiesViewed.length > 0) score += 10;

  // Cultural services interest (5 points)
  if (metrics.culturalServicesInterest) score += 5;

  // Lead quality classification
  if (score >= 75) return 'high';
  if (score >= 45) return 'medium';
  return 'low';
}
```

---

## Phone Call Tracking

### Kaiser Enrollment Call Intent

```javascript
// Track phone number clicks for Kaiser enrollment
trackKaiserPhoneCallIntent({
  phoneNumber: '331-343-2584',
  displayFormat: '331-E-HEALTH',
  clickLocation: string,
  kaiserContext: string,
  deviceType: string,
  integratedCareEngagement: boolean,
  planPreference: string
});
```

**Event Name**: `kaiser_phone_call_initiated`

**Parameters**:
- `phone_number`: "331-343-2584"
- `display_format`: "331-E-HEALTH"
- `click_location`: CTA placement
- `kaiser_context`: What Kaiser content was user viewing?
- `device_type`: Mobile vs desktop
- `integrated_care_engagement`: Did user explore care model?
- `plan_preference`: Which Kaiser plan (if clicked from plan card)
- `island_interest`: Which island's facility was viewed?
- `call_tracking_id`: Unique ID for call attribution

**Call-to-Enrollment Tracking**:
- Use dynamic call tracking numbers for Kaiser-specific attribution
- Record pre-call behavior (integrated care viewed? facilities checked?)
- Correlate calls with GA4 user sessions
- Track call outcome (enrolled, callback requested, not interested)

---

## Plan Comparison Tool Navigation

### Kaiser-Filtered Tool Clicks

```javascript
// Track clicks to plan comparison tool with Kaiser pre-filter
trackKaiserComparisonToolNavigation({
  entryPoint: 'kaiser_hawaii_page',
  carrierPrefiltered: 'Kaiser Permanente',
  statePrefiltered: 'Hawaii',
  plansPreviewedBefore: 3,
  integratedCareViewed: true,
  facilitiesVerified: true,
  islandSelected: 'Oahu',
  priorPageViews: 2
});
```

**Event Name**: `kaiser_comparison_tool_navigated`

**Parameters**:
- `entry_point`: "kaiser_hawaii_page"
- `carrier_prefiltered`: "Kaiser Permanente"
- `state_prefiltered`: "Hawaii"
- `plans_previewed_before_comparison`: Count
- `integrated_care_viewed`: Boolean
- `facilities_verified`: Boolean
- `island_selected`: User's island preference
- `prior_page_views`: Session page view count
- `session_duration`: Total session time

**Conversion Funnel for Kaiser**:
1. Kaiser Hawaii page view: 100%
2. Kaiser plan card explored: 65%
3. Integrated care content viewed: 50%
4. Facilities checked: 35%
5. Comparison tool clicked: 30%
6. Lead conversion: 6-8%

---

## User Journey Pathways

### Kaiser-Specific User Flows

```javascript
// Track complete user journey through Kaiser content
trackKaiserUserJourneyFlow({
  sessionId: 'unique_session_id',
  journeySteps: [
    { step: 1, action: 'page_load', timestamp: 0, context: 'organic_search_kaiser_hawaii' },
    { step: 2, action: 'scrolled_to_integrated_care', timestamp: 20 },
    { step: 3, action: 'expanded_care_model_details', timestamp: 45 },
    { step: 4, action: 'viewed_kaiser_moanalua_facility', timestamp: 90 },
    { step: 5, action: 'explored_japanese_language_services', timestamp: 120 },
    { step: 6, action: 'clicked_kaiser_plan_card', timestamp: 180 },
    { step: 7, action: 'clicked_comparison_tool_cta', timestamp: 240 },
    { step: 8, action: 'submitted_contact_form', timestamp: 420 }
  ],
  totalSessionDuration: 420,
  conversionAchieved: true,
  kaiserFeaturesExplored: [
    'integrated_care',
    'moanalua_medical_center',
    'japanese_language_services',
    'senior_advantage_basic_plan'
  ],
  exitPage: 'plan_comparison_tool_kaiser_filtered'
});
```

**Event Name**: `kaiser_user_journey_completed`

**Analysis Use Cases**:
- **Common Paths to Conversion**: What sequence leads to Kaiser enrollment?
- **Drop-off Points**: Where do Kaiser-interested users abandon?
- **Value Prop Priority**: Integrated care vs facilities vs cultural services?
- **Island-Specific Patterns**: Do Oahu users behave differently than Maui?

---

## Performance Metrics Dashboard

### Key Performance Indicators (KPIs)

**Traffic Metrics**:
- **Monthly Page Views**: Target 1,200-1,800
- **Unique Visitors**: Target 900-1,400
- **Average Session Duration**: Target 3-5 minutes
- **Bounce Rate**: Target <40% (carrier-specific = higher intent)

**Engagement Metrics**:
- **Scroll Depth (65%+)**: Target 55% of visitors
- **Kaiser Plans Explored**: Average 2-3 plans per visitor
- **Integrated Care Engagement**: Target 45-55% of visitors
- **Facility Verification**: Target 30-40% check locations

**Conversion Metrics**:
- **Contact Form Submissions**: Target 25-35/month
- **Phone Calls**: Target 12-18/month
- **Comparison Tool Clicks**: Target 30-35% CTR
- **Lead Generation Rate**: Target 6-8%

**Revenue Metrics**:
- **Cost per Lead**: Target <$180
- **Lead-to-Enrollment Conversion**: Target 18-22% (Kaiser brand loyalty)
- **Revenue per Visitor**: Target $45-65
- **Monthly Revenue Attribution**: Target $15,000-25,000

---

## A/B Testing Framework

### Kaiser-Specific Experiments

**Test 1: Integrated Care Emphasis**
- Variant A: Integrated care model in hero section
- Variant B: $0 premium plans in hero section
- Metric: Conversion rate + engagement depth

**Test 2: Island Coverage Presentation**
- Variant A: Island-by-island facility list
- Variant B: Interactive island coverage map
- Metric: Facility engagement + conversion rate

**Test 3: Cultural Services Placement**
- Variant A: Japanese language services in dedicated section
- Variant B: Japanese services integrated throughout
- Metric: Cultural engagement + lead quality

**Test 4: Plan Card Order**
- Variant A: $0 premium plans first
- Variant B: 4.5-star rating prominence first
- Metric: Plan exploration + conversion rate

---

## Custom Dimensions & Metrics

### Kaiser-Specific Custom Dimensions

```javascript
// Set custom user properties for Kaiser-interested users
setKaiserUserProperties({
  carrier_preference: 'Kaiser Permanente',
  integrated_care_priority: 'high' | 'medium' | 'low',
  island_location: 'Oahu' | 'Maui' | 'Big Island' | 'Kauai',
  cultural_services_interest: 'japanese' | 'filipino' | 'none',
  technology_affinity: 'high' | 'medium' | 'low',
  facility_proximity_verified: boolean,
  kaiser_brand_familiarity: 'existing_member' | 'brand_aware' | 'researching'
});
```

**Custom Metrics**:
1. `kaiser_plans_explored_count`: Number of plans viewed
2. `integrated_care_engagement_score`: 0-100 score
3. `time_in_care_model_section`: Seconds
4. `facilities_checked_count`: Number of locations viewed
5. `cultural_services_engagement`: Boolean
6. `island_relevance_score`: How relevant is content to user's island?

---

## Integration with Other Platforms

### CallRail Dynamic Number Insertion

**Kaiser-Specific Tracking Numbers**:
- Organic search (Kaiser keywords): (808) 555-0101
- Paid search (Kaiser campaigns): (808) 555-0102
- Direct traffic (Kaiser bookmark): (808) 555-0103
- Social media (Kaiser ads): (808) 555-0104

**Call Data Integration**:
```javascript
// Send call data to GA4
function syncCallRailToGA4(callData) {
  gtag('event', 'kaiser_phone_call_completed', {
    call_duration: callData.duration,
    call_outcome: callData.outcome, // enrolled, callback, not_interested
    caller_island: callData.location,
    plans_discussed: callData.plans,
    integrated_care_mentioned: callData.caremodelInterest,
    enrollment_scheduled: callData.enrollmentBooked
  });
}
```

### Hotjar/Microsoft Clarity Heatmaps

**Focus Areas for Kaiser Page**:
- Which Kaiser plan cards get most clicks?
- Do users scroll to integrated care section?
- Are facilities visible and engaging?
- Is Japanese language services section discovered?
- Where do users abandon the page?

---

## Privacy & Compliance

### HIPAA & CMS Compliance for Kaiser Content

**Data Collection Restrictions**:
- No PHI (Personal Health Information) in analytics
- Anonymized user IDs only
- No tracking of specific health conditions
- Kaiser plan names and benefits only (no member data)

**Cookie Consent**:
```javascript
// Only track Kaiser engagement if user consents
if (hasAnalyticsConsent()) {
  trackKaiserPlanEngagement(/* ... */);
}
```

**CMS Marketing Guidelines**:
- Accurate Kaiser plan representation only
- Verify all Kaiser benefits annually
- Proper carrier disclaimers
- No misleading comparative claims

---

## Reporting Cadence

### Weekly Reports
- Kaiser page traffic trends
- Top-performing plans (Basic vs Enhanced vs Premier)
- Integrated care engagement rates
- Island-specific user behavior

### Monthly Reports
- Kaiser keyword ranking updates
- Lead volume and quality by island
- Conversion funnel performance
- Integrated care messaging effectiveness

### Quarterly Reports
- Kaiser vs other carriers performance comparison
- Cultural services engagement trends
- Technology feature interest analysis
- ROI and revenue attribution

---

## Conclusion

This analytics configuration provides comprehensive tracking of Kaiser Permanente-specific user behavior on the Hawaii landing page. By tracking **integrated care model engagement**, **island-specific interests**, **cultural service interactions**, and **facility verification**, we can optimize the page for Hawaii seniors seeking Kaiser's unique coordinated care approach.

**Key Analytics Focus**:
1. **Integrated Care Appeal** - Does coordinated care messaging drive conversions?
2. **Island Geography** - How do Oahu, Maui, Big Island, Kauai users differ?
3. **Cultural Targeting** - Does Japanese language service content work?
4. **Technology Interest** - Do Kaiser app features attract tech-savvy seniors?
5. **Facility Proximity** - Does location verification correlate with enrollment?

The data will enable continuous optimization of Kaiser-specific value propositions, island-targeted messaging, and cultural service emphasis to maximize conversions for Hawaii's integrated care Medicare market.
