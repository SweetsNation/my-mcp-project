'use client'

// Final Expense Insurance Keyword Tracking Configuration
// Based on Opus-Enhanced Keyword Research

export interface KeywordData {
  keyword: string
  searchVolume: number
  competition: 'high' | 'medium' | 'low'
  commercialIntent: 'high' | 'medium' | 'low'
  priority: 'high' | 'medium' | 'low'
  targetUrl: string
  currentRanking?: number
  previousRanking?: number
  rankingTrend: 'up' | 'down' | 'stable' | 'new'
  lastUpdated: Date
}

// Priority Keywords for Final Expense Insurance
export const FINAL_EXPENSE_KEYWORDS: KeywordData[] = [
  // High-Impact Keywords (Primary Focus)
  {
    keyword: 'final expense insurance',
    searchVolume: 18000,
    competition: 'medium',
    commercialIntent: 'high',
    priority: 'high',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  },
  {
    keyword: 'burial insurance',
    searchVolume: 14500,
    competition: 'medium',
    commercialIntent: 'high',
    priority: 'high',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  },
  {
    keyword: 'funeral cost coverage',
    searchVolume: 8900,
    competition: 'low',
    commercialIntent: 'high',
    priority: 'high',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  },
  {
    keyword: 'guaranteed acceptance life insurance',
    searchVolume: 12000,
    competition: 'medium',
    commercialIntent: 'high',
    priority: 'high',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  },
  
  // Long-tail Keywords (High Intent)
  {
    keyword: 'final expense insurance quotes',
    searchVolume: 5400,
    competition: 'low',
    commercialIntent: 'high',
    priority: 'high',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  },
  {
    keyword: 'burial insurance for seniors',
    searchVolume: 6700,
    competition: 'medium',
    commercialIntent: 'high',
    priority: 'medium',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  },
  {
    keyword: 'no medical exam life insurance',
    searchVolume: 4200,
    competition: 'low',
    commercialIntent: 'high',
    priority: 'medium',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  },
  {
    keyword: 'funeral insurance plans',
    searchVolume: 3100,
    competition: 'low',
    commercialIntent: 'high',
    priority: 'medium',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  },
  
  // Problem-Solution Keywords
  {
    keyword: 'expensive funeral costs',
    searchVolume: 8500,
    competition: 'medium',
    commercialIntent: 'medium',
    priority: 'medium',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  },
  {
    keyword: 'affordable burial insurance',
    searchVolume: 3200,
    competition: 'low',
    commercialIntent: 'high',
    priority: 'medium',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  },
  {
    keyword: 'burial cost planning',
    searchVolume: 2100,
    competition: 'low',
    commercialIntent: 'high',
    priority: 'medium',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  },
  
  // Comparison Keywords
  {
    keyword: 'final expense vs term life insurance',
    searchVolume: 1800,
    competition: 'low',
    commercialIntent: 'medium',
    priority: 'low',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  },
  {
    keyword: 'best final expense insurance companies',
    searchVolume: 2800,
    competition: 'medium',
    commercialIntent: 'high',
    priority: 'medium',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  },
  
  // Local SEO Keywords
  {
    keyword: 'final expense insurance near me',
    searchVolume: 1500,
    competition: 'low',
    commercialIntent: 'high',
    priority: 'medium',
    targetUrl: '/final-expense',
    rankingTrend: 'new',
    lastUpdated: new Date()
  }
]

// Keyword Performance Tracking Functions
export class KeywordTracker {
  private keywords: KeywordData[] = FINAL_EXPENSE_KEYWORDS
  
  // Update keyword ranking
  updateKeywordRanking(keyword: string, newRanking: number) {
    const keywordData = this.keywords.find(k => k.keyword === keyword)
    if (keywordData) {
      keywordData.previousRanking = keywordData.currentRanking
      keywordData.currentRanking = newRanking
      keywordData.lastUpdated = new Date()
      
      // Update ranking trend
      if (keywordData.previousRanking) {
        if (newRanking < keywordData.previousRanking) {
          keywordData.rankingTrend = 'up'
        } else if (newRanking > keywordData.previousRanking) {
          keywordData.rankingTrend = 'down'
        } else {
          keywordData.rankingTrend = 'stable'
        }
      }
      
      // Track performance in analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'final_expense_keyword_ranking', {
          event_category: 'final_expense_seo',
          event_label: keyword,
          keyword: keyword,
          ranking_position: newRanking,
          previous_ranking: keywordData.previousRanking,
          ranking_trend: keywordData.rankingTrend,
          search_volume: keywordData.searchVolume,
          competition: keywordData.competition,
          priority: keywordData.priority
        })
      }
    }
  }
  
  // Get keyword performance summary
  getPerformanceSummary() {
    const totalKeywords = this.keywords.length
    const rankedKeywords = this.keywords.filter(k => k.currentRanking).length
    const topRankings = this.keywords.filter(k => k.currentRanking && k.currentRanking <= 10).length
    const improvingKeywords = this.keywords.filter(k => k.rankingTrend === 'up').length
    
    const avgRanking = this.keywords
      .filter(k => k.currentRanking)
      .reduce((sum, k) => sum + k.currentRanking!, 0) / rankedKeywords || 0
    
    const totalSearchVolume = this.keywords
      .reduce((sum, k) => sum + k.searchVolume, 0)
    
    const highPriorityKeywords = this.keywords.filter(k => k.priority === 'high').length
    
    return {
      totalKeywords,
      rankedKeywords,
      topRankings,
      improvingKeywords,
      avgRanking: Math.round(avgRanking),
      totalSearchVolume,
      highPriorityKeywords,
      rankingRate: Math.round((rankedKeywords / totalKeywords) * 100),
      topRankingRate: Math.round((topRankings / rankedKeywords) * 100),
      improvementRate: Math.round((improvingKeywords / rankedKeywords) * 100)
    }
  }
  
  // Get keywords by priority
  getKeywordsByPriority(priority: 'high' | 'medium' | 'low') {
    return this.keywords.filter(k => k.priority === priority)
  }
  
  // Get trending keywords
  getTrendingKeywords(trend: 'up' | 'down' | 'stable') {
    return this.keywords.filter(k => k.rankingTrend === trend)
  }
  
  // Calculate keyword opportunity score
  calculateOpportunityScore(keyword: KeywordData): number {
    let score = 0
    
    // Search volume contribution (0-40 points)
    if (keyword.searchVolume >= 10000) score += 40
    else if (keyword.searchVolume >= 5000) score += 30
    else if (keyword.searchVolume >= 1000) score += 20
    else score += 10
    
    // Competition contribution (0-20 points)
    if (keyword.competition === 'low') score += 20
    else if (keyword.competition === 'medium') score += 10
    else score += 5
    
    // Commercial intent contribution (0-30 points)
    if (keyword.commercialIntent === 'high') score += 30
    else if (keyword.commercialIntent === 'medium') score += 15
    else score += 5
    
    // Current ranking penalty (0-10 points deduction)
    if (keyword.currentRanking) {
      if (keyword.currentRanking <= 5) score -= 0
      else if (keyword.currentRanking <= 10) score -= 2
      else if (keyword.currentRanking <= 20) score -= 5
      else score -= 10
    }
    
    return Math.max(0, Math.min(100, score))
  }
  
  // Get top keyword opportunities
  getTopOpportunities(limit: number = 10) {
    return this.keywords
      .map(keyword => ({
        ...keyword,
        opportunityScore: this.calculateOpportunityScore(keyword)
      }))
      .sort((a, b) => b.opportunityScore - a.opportunityScore)
      .slice(0, limit)
  }
  
  // Track SERP feature appearances
  trackSERPFeature(keyword: string, feature: 'featured_snippet' | 'people_also_ask' | 'local_pack' | 'image_pack') {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'final_expense_serp_feature', {
        event_category: 'final_expense_seo',
        event_label: `${keyword}_${feature}`,
        keyword: keyword,
        serp_feature: feature
      })
    }
  }
  
  // Monitor competitor rankings
  trackCompetitorRanking(keyword: string, competitor: string, ranking: number) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'final_expense_competitor_ranking', {
        event_category: 'final_expense_competitive_analysis',
        event_label: `${keyword}_${competitor}`,
        keyword: keyword,
        competitor: competitor,
        competitor_ranking: ranking
      })
    }
  }
}

// Automated Ranking Check Functions
export const automatedRankingChecks = {
  // Check rankings daily for high-priority keywords
  dailyRankingCheck: () => {
    const highPriorityKeywords = FINAL_EXPENSE_KEYWORDS.filter(k => k.priority === 'high')
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'final_expense_daily_ranking_check', {
        event_category: 'final_expense_monitoring',
        event_label: 'daily_check',
        keywords_checked: highPriorityKeywords.length
      })
    }
    
    return highPriorityKeywords.map(k => k.keyword)
  },
  
  // Weekly comprehensive check
  weeklyRankingCheck: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'final_expense_weekly_ranking_check', {
        event_category: 'final_expense_monitoring',
        event_label: 'weekly_check',
        keywords_checked: FINAL_EXPENSE_KEYWORDS.length
      })
    }
    
    return FINAL_EXPENSE_KEYWORDS.map(k => k.keyword)
  },
  
  // Alert thresholds
  rankingAlerts: {
    significantDrop: 5, // Alert if ranking drops by 5+ positions
    outOfTop10: 10,     // Alert if keyword falls out of top 10
    outOfTop3: 3,       // Alert if keyword falls out of top 3
    newRanking: 20      // Alert if new keyword ranks in top 20
  }
}

// Export singleton instance
export const finalExpenseKeywordTracker = new KeywordTracker()

// SEO Performance Metrics
export interface SEOMetrics {
  organicTraffic: number
  keywordRankings: number
  avgPosition: number
  topKeywords: number
  clickThroughRate: number
  impressions: number
  conversionRate: number
}

// Track SEO performance
export const trackSEOPerformance = (metrics: SEOMetrics) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'final_expense_seo_performance', {
      event_category: 'final_expense_seo',
      event_label: 'monthly_performance',
      organic_traffic: metrics.organicTraffic,
      keyword_rankings: metrics.keywordRankings,
      avg_position: metrics.avgPosition,
      top_keywords: metrics.topKeywords,
      click_through_rate: metrics.clickThroughRate,
      impressions: metrics.impressions,
      conversion_rate: metrics.conversionRate
    })
  }
}