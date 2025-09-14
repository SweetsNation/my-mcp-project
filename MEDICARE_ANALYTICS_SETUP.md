# Medicare Landing Pages Analytics Setup

## Overview
Comprehensive analytics tracking has been implemented for the Medicare Extra Help qualification quiz and Ask AI Medicare questions landing pages to track user engagement, conversion metrics, and performance data.

## Analytics Components Implemented

### 1. Enhanced Analytics Functions (`src/lib/analytics.ts`)

#### Medicare Extra Help Quiz Tracking
- **trackExtraHelpQuizInteraction**: Tracks quiz start, question answers, completion, result viewing, and CTA clicks
- **trackQuizPerformance**: Tracks completion rates, time spent, and user paths through the quiz
- **trackMedicareResourceConversion**: Tracks conversions from quiz to phone calls, form submissions, and expert requests

#### Ask AI Medicare Questions Tracking
- **trackAIQuestionInteraction**: Tracks question asking, response viewing, follow-up questions, and expert contact requests
- **trackAIInteractionQuality**: Tracks session quality, user satisfaction, and expert referral requests

#### General Medicare Tools Tracking
- **trackMedicareResourceConversion**: Universal conversion tracking across all Medicare tools
- **trackQuizPerformance**: Performance metrics for all quiz types
- **trackAIInteractionQuality**: AI interaction quality and satisfaction metrics

### 2. Page Analytics Wrapper (`src/components/MedicarePageAnalytics.tsx`)

#### Features
- **Automatic page entry tracking**: Tracks when users land on Medicare pages
- **Scroll tracking**: Monitors scroll depth and engagement
- **Click enhancement**: Automatically enhances click tracking for buttons and links
- **User journey tracking**: Records user path through the Medicare ecosystem
- **Conversion tracking**: Tracks phone calls, form submissions, and expert requests

#### Usage
```tsx
<MedicarePageAnalytics pageType="extra_help_quiz">
  {/* Page content */}
</MedicarePageAnalytics>
```

### 3. Page Implementations

#### Medicare Extra Help Quiz (`/medicare-extra-help-qualification-quiz`)
- **Page type**: `extra_help_quiz`
- **Tracks**: Quiz starts, question responses, completion rates, result views, CTA clicks
- **Conversion events**: Phone calls, expert consultations, related resource clicks

#### Ask AI Medicare Questions (`/ask-ai-medicare-questions`)
- **Page type**: `ai_questions`
- **Tracks**: Question submissions, AI response views, follow-up questions, expert requests
- **Conversion events**: Phone calls, human expert connections, related tool usage

## Analytics Events Tracked

### Quiz-Specific Events
| Event | Parameters | Purpose |
|-------|------------|---------|
| `extra_help_quiz_interaction` | `interaction_type`, `question_number`, `quiz_answer`, `quiz_result`, `cta_type` | Track quiz engagement and completion |
| `quiz_performance` | `completion_rate`, `time_spent`, `questions_answered`, `user_path` | Measure quiz effectiveness |

### AI Question Events
| Event | Parameters | Purpose |
|-------|------------|---------|
| `ai_question_interaction` | `interaction_type`, `question_category`, `question_length`, `response_helpful` | Track AI usage patterns |
| `ai_interaction_quality` | `session_id`, `questions_asked`, `user_satisfaction`, `expert_referral` | Measure AI effectiveness |

### Conversion Events
| Event | Parameters | Purpose |
|-------|------------|---------|
| `medicare_resource_conversion` | `resource_type`, `entry_point`, `conversion_action`, `user_journey`, `time_to_conversion` | Track conversion paths |
| `cta_click` | `cta_name`, `page_location`, `destination` | Monitor CTA performance |
| `phone_call` | `phone_number` | Track phone call conversions |

## Key Metrics Tracked

### Engagement Metrics
- **Page scroll depth**: 25%, 50%, 75%, 100% milestones
- **Time on page**: Total engagement time
- **Button/link clicks**: All interactive elements
- **Quiz completion rates**: Start to finish tracking
- **AI question patterns**: Question types and frequency

### Conversion Metrics
- **Phone call clicks**: Primary conversion action
- **Expert consultation requests**: High-value conversions
- **Form submissions**: Lead generation tracking
- **Cross-tool usage**: Medicare tool ecosystem engagement

### Quality Metrics
- **Quiz accuracy**: Result relevance and user feedback
- **AI satisfaction**: User-reported helpfulness
- **User journey length**: Path complexity and drop-off points
- **Resource utilization**: Related tool usage patterns

## Value Attribution

### Event Values (for GA4 enhanced ecommerce)
- **Quiz completion**: 20 points
- **AI question asked**: 10 points
- **Expert contact request**: 25 points
- **Phone call**: 50 points
- **Tool cross-usage**: 5-15 points based on complexity

### Conversion Funnels
1. **Quiz Funnel**: Page entry → Quiz start → Question answers → Completion → CTA click → Conversion
2. **AI Funnel**: Page entry → Question asked → Response viewed → Follow-up → Expert request → Conversion
3. **Cross-tool Funnel**: Entry tool → Resource exploration → Tool switching → Multi-tool usage → Conversion

## Implementation Benefits

### Business Intelligence
- **User behavior insights**: Understand how seniors engage with Medicare tools
- **Conversion optimization**: Identify high-performing CTAs and paths
- **Content effectiveness**: Measure quiz accuracy and AI helpfulness
- **Resource allocation**: Focus development on high-impact features

### Technical Advantages
- **Automatic tracking**: No manual event implementation needed for basic interactions
- **Error handling**: Graceful degradation if analytics fails
- **Performance optimized**: Non-blocking analytics calls
- **Privacy compliant**: No PII collection in analytics events

### Marketing Intelligence
- **Campaign attribution**: Track traffic source effectiveness
- **User segmentation**: Identify different user personas and needs
- **Conversion paths**: Understand multi-touch conversion journeys
- **ROI measurement**: Quantify tool effectiveness and business impact

## Future Enhancements

### Planned Additions
- **A/B testing framework**: Test different quiz flows and AI responses
- **Predictive analytics**: Identify high-conversion-probability users
- **Real-time dashboards**: Live monitoring of tool performance
- **Heat mapping integration**: Visual user behavior analysis

### Advanced Tracking
- **Medicare plan preferences**: Track which plan types users prefer
- **Geographic patterns**: Analyze usage by state/county
- **Seasonal trends**: Monitor enrollment period spikes
- **Device/browser analytics**: Optimize for senior-friendly experiences

## Dashboard Queries

See `analytics-dashboard-queries.md` for specific Google Analytics 4 and BigQuery queries to analyze the collected data.

## Notes
- All analytics respect user privacy and HIPAA compliance requirements
- No personal health information is collected in analytics events
- Analytics gracefully degrade if blocked by ad blockers or privacy tools
- All tracking is opt-out compliant with privacy regulations