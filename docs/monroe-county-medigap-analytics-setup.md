# Monroe County Medicare Supplement Analytics Setup

## Overview
Comprehensive analytics tracking implementation for the Monroe County Medicare Supplement (Medigap) landing page, tracking island-specific healthcare engagement, hurricane preparedness interest, and conversion metrics.

## Analytics Implementation

### Page-Level Tracking

#### Advanced Medicare Tracking
```typescript
trackMedicareAdvancedPageView(
  'Medicare Supplement Monroe County Florida',
  {
    pageType: 'island_healthcare',
    totalBeneficiaries: 22500,
    availablePlans: 0, // Medigap is standardized
    specialMetrics: {
      islandChallenges: 6,
      maPenetrationRate: 38,
      telemedicineServices: true,
      interIslandTransportation: true
    }
  },
  {
    city: 'Key West',
    state: 'Florida',
    county: 'Monroe County',
    region: 'Florida Keys'
  }
)
```

#### Landing Page Analytics Component
```typescript
<LandingPageAnalytics
  pageType="county"
  pageTitle="Medicare Supplement Monroe County Florida"
  county="Monroe County"
  state="Florida"
  demographics={{
    avgAge: 74,
    maPenetrationRate: 38,
  }}
  keyMetrics={{
    totalBeneficiaries: 22500,
    medigapOpportunity: 14000,
    averagePremium: 165,
    pageType: 'island_medigap',
    productType: 'medicare_supplement'
  }}
/>
```

### Scroll Tracking Milestones

The page tracks content engagement at specific scroll depths:

| Scroll % | Milestone | Content Section |
|----------|-----------|-----------------|
| 25% | `island_healthcare_challenges_viewed` | Island Healthcare Challenges section |
| 50% | `cost_benefit_analysis_reviewed` | Cost-Benefit Analysis tables |
| 75% | `hurricane_preparedness_explored` | Hurricane Preparedness content |
| 90% | `medigap_plans_comparison_viewed` | Plan Comparison section |

### CTA Tracking

#### Contact Form CTA
- **Event**: `medicare_cta_click`
- **Location**: `content`
- **Type**: `contact_form`
- **Destination**: `/contact`

#### Phone Call CTA
- **Event**: `medicare_cta_click`
- **Location**: `content`
- **Type**: `phone_call`
- **Destination**: `tel:331-343-2584`

## Key Metrics Being Tracked

### Island-Specific Metrics
1. **Total Beneficiaries**: 22,500 Medicare beneficiaries in Monroe County
2. **MA Penetration Rate**: 38% (62% potential for Medigap)
3. **Medigap Opportunity**: 14,000 potential Medigap enrollees
4. **Average Premium**: $165/month for Plan G
5. **Island Challenges**: 6 unique healthcare challenges tracked

### Engagement Metrics
- Page views by product type (Medicare Supplement vs Medicare Advantage)
- Time on page for island healthcare content
- Scroll depth to hurricane preparedness section
- CTA clicks for Keys-specific quotes
- Phone calls from Florida Keys inquiries

### Conversion Funnel Tracking
1. **Awareness**: Page view → Island healthcare section viewed
2. **Interest**: Cost-benefit analysis reviewed → Hurricane content explored
3. **Consideration**: Plan comparison section viewed
4. **Action**: CTA click (contact form or phone call)

## Island Healthcare Event Tracking

### Special Events Tracked
```javascript
// Island healthcare specific metrics
event_category: 'medicare_specialized'
event_label: 'island_healthcare_metrics'
focus_area: 'geographic_specialty'

// Island-specific tracking
islandChallenges: 6
telemedicineServices: true
interIslandTransportation: true
```

## Conversion Value Assignment

| Action | Value | Description |
|--------|-------|-------------|
| Page View | 1 | Initial landing page visit |
| Deep Scroll (75%+) | 10 | High engagement signal |
| 30s+ Time on Page | 15 | Quality engagement |
| CTA Click | 25 | Mid-value conversion |
| Phone Call Click | 50 | High-value conversion |
| Form Submission | 75 | Lead generation |

## Performance Monitoring

### Core Web Vitals Tracking
- **Target Load Time**: < 2.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Custom Performance Events
- Island healthcare content load time
- Hurricane preparedness section rendering
- Plan comparison table performance
- CTA button interaction latency

## Geographic Segmentation

### Primary Geographic Dimensions
- **County**: Monroe County
- **State**: Florida
- **Region**: Florida Keys
- **City**: Key West (primary), Marathon, Key Largo

### Island-Specific Segments
- **Upper Keys**: Key Largo to Tavernier
- **Middle Keys**: Islamorada to Marathon
- **Lower Keys**: Big Pine Key to Key West

## A/B Testing Setup (Future)

### Potential Test Variants
1. **Hurricane Focus vs. Mainland Access Focus**: Which messaging resonates more?
2. **Plan G vs. Plan N Emphasis**: Which plan drives more inquiries?
3. **Seasonal Resident vs. Year-Round Messaging**: Snowbird targeting effectiveness
4. **Critical Access Hospital Messaging**: Impact on trust and engagement

## Google Analytics 4 Events

### Custom Events Configured
```
- medicare_supplement_page_view
- island_healthcare_metrics
- hurricane_preparedness_interest
- mainland_access_inquiry
- medigap_plan_comparison
- keys_specific_cta_click
- seasonal_resident_interest
- critical_access_hospital_view
```

## BigQuery Integration

### Data Export Schema
```sql
SELECT
  event_timestamp,
  event_name,
  user_pseudo_id,
  geo.region,
  geo.city,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_type') as page_type,
  (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'total_beneficiaries') as total_beneficiaries,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'county') as county,
  (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'medigap_opportunity') as medigap_opportunity
FROM
  `analytics.events_*`
WHERE
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_type') = 'island_medigap'
```

## Dashboard Metrics

### Primary KPIs to Monitor
1. **Conversion Rate**: CTA clicks / Page views
2. **Engagement Rate**: 75%+ scroll / Page views
3. **Phone Call Rate**: Phone clicks / Page views
4. **Island Interest**: Hurricane section views / Page views
5. **Plan Comparison Rate**: Plan section views / Page views

### Secondary Metrics
- Average time on page
- Bounce rate
- Exit rate
- Seasonal traffic patterns (snowbird season)
- Hurricane season traffic spikes

## Integration with Marketing Campaigns

### Campaign Tracking Parameters
```
utm_source=google
utm_medium=cpc
utm_campaign=monroe_medigap_2025
utm_content=island_healthcare
utm_term=florida+keys+medicare+supplement
```

### Island-Specific Campaign Tags
- `keys_hurricane_prep` - Hurricane preparedness focus
- `keys_mainland_access` - Mainland specialist access
- `keys_snowbird` - Seasonal resident targeting
- `keys_critical_access` - Hospital network focus

## Privacy Compliance

### HIPAA Considerations
- No PII collected in analytics events
- No health information tracked
- Only aggregated demographic data
- GDPR/CCPA compliant implementation

### Data Retention
- Event data: 14 months
- User data: 2 months
- Conversion data: 36 months

## Success Metrics (30-Day Targets)

### Traffic Goals
- **Organic Traffic**: 15% increase from Keys-related searches
- **Direct Traffic**: 10% increase from word-of-mouth referrals
- **Page Views**: 500+ monthly views

### Engagement Goals
- **Average Time on Page**: > 3.5 minutes
- **Scroll Depth**: 65%+ average scroll
- **Bounce Rate**: < 55%

### Conversion Goals
- **CTA Click Rate**: > 8%
- **Phone Call Rate**: > 3%
- **Form Submission Rate**: > 2%

## Reporting Schedule

### Daily Monitoring
- Page view trends
- CTA click patterns
- Phone call volume

### Weekly Analysis
- Engagement metrics review
- Scroll depth analysis
- Conversion funnel performance

### Monthly Reporting
- KPI dashboard review
- Island-specific insights
- Seasonal pattern analysis
- Competitive positioning

## Technical Implementation Notes

### Client-Side Tracking
- React `useEffect` for page view tracking
- Event handlers on CTAs for click tracking
- Scroll listener for engagement milestones
- Cleanup on component unmount

### Server-Side Considerations
- No server-side rendering conflicts
- Browser-only analytics execution
- Graceful degradation if analytics blocked
- Error handling for failed events

## Future Enhancements

### Planned Additions
1. **Video Engagement Tracking**: Hurricane prep video views
2. **Calculator Interaction**: Medigap cost calculator usage
3. **Chat Widget**: Live chat initiation tracking
4. **Download Tracking**: PDF guide downloads
5. **Email Signup**: Newsletter subscription tracking

### Advanced Segments
- First-time visitors vs. returning
- Mobile vs. desktop behavior
- Seasonal traffic patterns
- Geographic source (Upper/Middle/Lower Keys)

## Support and Maintenance

### Monthly Tasks
- Review event tracking accuracy
- Validate conversion attribution
- Update seasonal benchmarks
- Audit data quality

### Quarterly Reviews
- Campaign performance analysis
- ROI calculation
- Competitive intelligence
- Strategy adjustments

---

**Last Updated**: 2025-10-01
**Analytics Version**: GA4 + Custom Events
**Implementation Status**: ✅ Complete
**Next Review Date**: 2025-11-01
