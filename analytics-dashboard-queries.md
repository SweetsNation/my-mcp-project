# Final Expense Insurance Analytics Dashboard Queries

## Google Analytics 4 Custom Reports & Queries

### 1. Final Expense Page Performance Report

```sql
-- GA4 BigQuery Query: Final Expense Page Performance
SELECT
  event_date,
  page_location,
  COUNT(*) as total_sessions,
  COUNT(DISTINCT user_pseudo_id) as unique_users,
  AVG(CASE WHEN event_name = 'page_view' THEN 
    TIMESTAMP_DIFF(
      TIMESTAMP_MICROS(event_timestamp), 
      TIMESTAMP_MICROS(LAG(event_timestamp) OVER (PARTITION BY user_pseudo_id ORDER BY event_timestamp)), 
      SECOND
    ) 
  END) as avg_time_on_page,
  COUNT(CASE WHEN event_name = 'final_expense_quote_request' THEN 1 END) as quote_requests,
  COUNT(CASE WHEN event_name = 'final_expense_phone_click' THEN 1 END) as phone_calls,
  COUNT(CASE WHEN event_name = 'final_expense_form_submit' THEN 1 END) as form_submissions,
  SAFE_DIVIDE(
    COUNT(CASE WHEN event_name IN ('final_expense_quote_request', 'final_expense_phone_click', 'final_expense_form_submit') THEN 1 END),
    COUNT(DISTINCT user_pseudo_id)
  ) * 100 as conversion_rate
FROM `your-project.analytics_123456789.events_*`
WHERE 
  _TABLE_SUFFIX BETWEEN '20240101' AND '20241231'
  AND page_location LIKE '%final-expense%'
GROUP BY event_date, page_location
ORDER BY event_date DESC
```

### 2. Final Expense Conversion Funnel Analysis

```sql
-- GA4 BigQuery Query: Final Expense Conversion Funnel
WITH funnel_stages AS (
  SELECT
    user_pseudo_id,
    event_date,
    MAX(CASE WHEN event_name = 'final_expense_page_view' THEN 1 ELSE 0 END) as stage_1_awareness,
    MAX(CASE WHEN event_name = 'final_expense_coverage_interest' THEN 1 ELSE 0 END) as stage_2_interest,
    MAX(CASE WHEN event_name = 'final_expense_calculator_use' THEN 1 ELSE 0 END) as stage_3_consideration,
    MAX(CASE WHEN event_name = 'final_expense_quote_click' THEN 1 ELSE 0 END) as stage_4_intent,
    MAX(CASE WHEN event_name = 'final_expense_form_start' THEN 1 ELSE 0 END) as stage_5_evaluation,
    MAX(CASE WHEN event_name = 'final_expense_form_submit' THEN 1 ELSE 0 END) as stage_6_conversion
  FROM `your-project.analytics_123456789.events_*`
  WHERE _TABLE_SUFFIX BETWEEN '20240101' AND '20241231'
  GROUP BY user_pseudo_id, event_date
)
SELECT
  event_date,
  SUM(stage_1_awareness) as awareness_users,
  SUM(stage_2_interest) as interest_users,
  SUM(stage_3_consideration) as consideration_users,
  SUM(stage_4_intent) as intent_users,
  SUM(stage_5_evaluation) as evaluation_users,
  SUM(stage_6_conversion) as conversion_users,
  SAFE_DIVIDE(SUM(stage_2_interest), SUM(stage_1_awareness)) * 100 as awareness_to_interest_rate,
  SAFE_DIVIDE(SUM(stage_3_consideration), SUM(stage_2_interest)) * 100 as interest_to_consideration_rate,
  SAFE_DIVIDE(SUM(stage_4_intent), SUM(stage_3_consideration)) * 100 as consideration_to_intent_rate,
  SAFE_DIVIDE(SUM(stage_5_evaluation), SUM(stage_4_intent)) * 100 as intent_to_evaluation_rate,
  SAFE_DIVIDE(SUM(stage_6_conversion), SUM(stage_5_evaluation)) * 100 as evaluation_to_conversion_rate
FROM funnel_stages
GROUP BY event_date
ORDER BY event_date DESC
```

### 3. Final Expense Lead Quality Scoring

```sql
-- GA4 BigQuery Query: Final Expense Lead Quality Analysis
WITH user_actions AS (
  SELECT
    user_pseudo_id,
    event_date,
    SUM(CASE WHEN event_name = 'final_expense_form_submit' THEN 100 ELSE 0 END) +
    SUM(CASE WHEN event_name = 'final_expense_phone_click' THEN 90 ELSE 0 END) +
    SUM(CASE WHEN event_name = 'final_expense_quote_request' THEN 85 ELSE 0 END) +
    SUM(CASE WHEN event_name = 'final_expense_calculator_use' THEN 40 ELSE 0 END) +
    SUM(CASE WHEN event_name = 'final_expense_deep_engagement' THEN 30 ELSE 0 END) +
    SUM(CASE WHEN event_name = 'final_expense_coverage_interest' THEN 25 ELSE 0 END) +
    SUM(CASE WHEN event_name = 'final_expense_scroll_milestone' THEN 10 ELSE 0 END) +
    SUM(CASE WHEN event_name = 'final_expense_page_view' THEN 5 ELSE 0 END) as lead_score,
    MAX(CASE WHEN event_name = 'final_expense_page_view' 
        THEN CAST(event_params.value.string_value AS INT64) 
        ELSE NULL END) as user_age,
    MAX(CASE WHEN event_name = 'final_expense_coverage_interest' 
        THEN CAST(event_params.value.string_value AS INT64) 
        ELSE NULL END) as coverage_amount,
    MAX(CASE WHEN event_name = 'final_expense_page_view' 
        THEN event_params.value.string_value 
        ELSE NULL END) as location
  FROM `your-project.analytics_123456789.events_*`,
    UNNEST(event_params) as event_params
  WHERE 
    _TABLE_SUFFIX BETWEEN '20240101' AND '20241231'
    AND event_name LIKE 'final_expense_%'
  GROUP BY user_pseudo_id, event_date
)
SELECT
  event_date,
  CASE 
    WHEN lead_score >= 200 THEN 'High Quality'
    WHEN lead_score >= 100 THEN 'Medium Quality'
    ELSE 'Low Quality'
  END as lead_quality,
  COUNT(*) as lead_count,
  AVG(lead_score) as avg_lead_score,
  AVG(user_age) as avg_user_age,
  AVG(coverage_amount) as avg_coverage_amount,
  location
FROM user_actions
WHERE lead_score > 0
GROUP BY event_date, lead_quality, location
ORDER BY event_date DESC, lead_score DESC
```

### 4. Final Expense Keyword Performance Tracking

```sql
-- GA4 BigQuery Query: Final Expense SEO Performance
SELECT
  event_date,
  traffic_source.source as source,
  traffic_source.medium as medium,
  traffic_source.campaign as campaign,
  COUNT(DISTINCT user_pseudo_id) as users,
  COUNT(*) as sessions,
  SUM(CASE WHEN event_name = 'final_expense_quote_request' THEN 1 ELSE 0 END) as conversions,
  SAFE_DIVIDE(
    SUM(CASE WHEN event_name = 'final_expense_quote_request' THEN 1 ELSE 0 END),
    COUNT(DISTINCT user_pseudo_id)
  ) * 100 as conversion_rate,
  AVG(CASE WHEN event_name = 'page_view' THEN 
    TIMESTAMP_DIFF(
      TIMESTAMP_MICROS(event_timestamp), 
      TIMESTAMP_MICROS(LAG(event_timestamp) OVER (PARTITION BY user_pseudo_id ORDER BY event_timestamp)), 
      SECOND
    ) 
  END) as avg_session_duration
FROM `your-project.analytics_123456789.events_*`
WHERE 
  _TABLE_SUFFIX BETWEEN '20240101' AND '20241231'
  AND page_location LIKE '%final-expense%'
  AND traffic_source.medium = 'organic'
GROUP BY event_date, source, medium, campaign
ORDER BY users DESC
```

### 5. Final Expense Revenue Attribution

```sql
-- GA4 BigQuery Query: Final Expense Revenue Attribution
WITH attributed_revenue AS (
  SELECT
    user_pseudo_id,
    event_date,
    traffic_source.source,
    traffic_source.medium,
    traffic_source.campaign,
    SUM(ecommerce.purchase_revenue_in_usd) as revenue,
    COUNT(CASE WHEN event_name = 'purchase' THEN 1 END) as purchases
  FROM `your-project.analytics_123456789.events_*`
  WHERE 
    _TABLE_SUFFIX BETWEEN '20240101' AND '20241231'
    AND event_name = 'purchase'
    AND ecommerce.purchase_revenue_in_usd > 0
  GROUP BY user_pseudo_id, event_date, source, medium, campaign
)
SELECT
  event_date,
  source,
  medium,
  campaign,
  COUNT(DISTINCT user_pseudo_id) as converting_users,
  SUM(purchases) as total_purchases,
  SUM(revenue) as total_revenue,
  AVG(revenue) as avg_revenue_per_user,
  SUM(revenue) / SUM(purchases) as avg_order_value
FROM attributed_revenue
GROUP BY event_date, source, medium, campaign
ORDER BY total_revenue DESC
```

## Custom Metrics & KPIs for Dashboard

### Primary KPIs
1. **Final Expense Page Views**: Total views of /final-expense page
2. **Quote Request Rate**: Percentage of visitors who request quotes
3. **Phone Call Conversion Rate**: Percentage who click phone numbers
4. **Form Completion Rate**: Percentage who complete contact forms
5. **Lead Quality Score**: Average lead score based on user actions

### Secondary KPIs
1. **Time on Final Expense Page**: Average session duration
2. **Scroll Depth**: Percentage of page scrolled
3. **Coverage Interest Rate**: Clicks on coverage amount options
4. **Calculator Usage Rate**: Percentage using burial cost calculator
5. **FAQ Engagement Rate**: Interaction with FAQ section

### Performance Metrics
1. **Page Load Speed**: Core Web Vitals for final expense page
2. **Mobile Usability Score**: Mobile performance metrics
3. **Bounce Rate**: Single-page session percentage
4. **Return Visitor Rate**: Percentage of returning users
5. **Cross-page Navigation**: Movement to other insurance pages

## Dashboard Visualization Recommendations

### 1. Executive Summary Dashboard
- Total final expense leads generated
- Conversion rate trends
- Revenue attribution by channel
- Lead quality distribution
- Month-over-month growth

### 2. Performance Monitoring Dashboard
- Real-time final expense page performance
- Core Web Vitals tracking
- Mobile vs desktop performance
- Geographic performance breakdown
- Hour-by-hour traffic patterns

### 3. Content Engagement Dashboard
- Most engaging sections of final expense page
- User journey flow visualization
- A/B test performance comparison
- Content effectiveness scoring
- FAQ interaction heatmap

### 4. SEO Performance Dashboard
- Keyword ranking tracking for final expense terms
- Organic traffic growth
- SERP feature appearances
- Competitor comparison metrics
- Local search performance

## Automated Alerts Configuration

### High Priority Alerts
1. **Conversion Rate Drop**: >20% decrease in 24 hours
2. **Page Load Speed**: >5 second load times
3. **Form Errors**: >10% form submission failures
4. **Traffic Anomaly**: >50% traffic change
5. **Revenue Impact**: Significant revenue attribution changes

### Medium Priority Alerts
1. **Bounce Rate Increase**: >30% increase in bounce rate
2. **Mobile Performance**: Mobile usability issues
3. **Content Engagement**: Significant engagement drops
4. **Lead Quality**: Average lead score decreases
5. **Competitor Activity**: Ranking position changes

## Data Export & Reporting Schedule

### Daily Reports
- Final expense page performance summary
- Lead generation metrics
- Conversion funnel performance

### Weekly Reports
- SEO keyword ranking updates
- Content engagement analysis
- A/B testing results summary

### Monthly Reports
- Comprehensive final expense insurance performance
- ROI and revenue attribution analysis
- Competitive landscape assessment
- Optimization recommendations