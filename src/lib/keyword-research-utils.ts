import marketingStrategies, { MarketingStrategy, KeywordData } from './marketing-strategy-config';

export interface KeywordAnalysis {
  keyword: string;
  searchVolume: 'high' | 'medium' | 'low';
  intent: 'commercial' | 'informational' | 'navigational' | 'transactional';
  competitorDifficulty: 'high' | 'medium' | 'low';
  opportunityScore: number; // 1-100
  suggestedContent: string[];
  recommendedCTAs: string[];
}

export interface ContentOptimization {
  primaryKeywords: string[];
  secondaryKeywords: string[];
  suggestedHeaders: string[];
  metaOptimizations: {
    title: string;
    description: string;
    keywords: string;
  };
  contentSuggestions: string[];
  internalLinkOpportunities: string[];
}

// Analyze keyword performance and opportunities
export const analyzeKeywordOpportunities = (pageKey: string): KeywordAnalysis[] => {
  const strategy = marketingStrategies[pageKey];
  if (!strategy) return [];

  const analyses: KeywordAnalysis[] = [];

  // Analyze primary keywords
  strategy.keywordStrategy.primary.forEach(keyword => {
    analyses.push({
      keyword,
      searchVolume: getSearchVolumeTier(keyword, strategy.keywordStrategy),
      intent: getKeywordIntent(keyword, strategy.keywordStrategy),
      competitorDifficulty: calculateCompetitorDifficulty(keyword, strategy),
      opportunityScore: calculateOpportunityScore(keyword, strategy),
      suggestedContent: generateContentSuggestions(keyword, strategy),
      recommendedCTAs: generateCTASuggestions(keyword, strategy)
    });
  });

  // Analyze long-tail opportunities
  strategy.keywordStrategy.longTail.forEach(keyword => {
    analyses.push({
      keyword,
      searchVolume: 'low', // Most long-tail keywords are low volume
      intent: getKeywordIntent(keyword, strategy.keywordStrategy),
      competitorDifficulty: 'low', // Long-tail typically has lower competition
      opportunityScore: calculateOpportunityScore(keyword, strategy) + 20, // Boost for long-tail
      suggestedContent: generateContentSuggestions(keyword, strategy),
      recommendedCTAs: generateCTASuggestions(keyword, strategy)
    });
  });

  return analyses.sort((a, b) => b.opportunityScore - a.opportunityScore);
};

// Generate content optimizations for a page
export const generateContentOptimizations = (pageKey: string): ContentOptimization => {
  const strategy = marketingStrategies[pageKey];
  if (!strategy) {
    return {
      primaryKeywords: [],
      secondaryKeywords: [],
      suggestedHeaders: [],
      metaOptimizations: { title: '', description: '', keywords: '' },
      contentSuggestions: [],
      internalLinkOpportunities: []
    };
  }

  return {
    primaryKeywords: strategy.keywordStrategy.primary,
    secondaryKeywords: strategy.keywordStrategy.secondary,
    suggestedHeaders: generateSuggestedHeaders(strategy),
    metaOptimizations: {
      title: optimizeTitle(strategy),
      description: optimizeMetaDescription(strategy),
      keywords: generateMetaKeywords(strategy)
    },
    contentSuggestions: generateAdvancedContentSuggestions(strategy),
    internalLinkOpportunities: identifyInternalLinkOpportunities(strategy)
  };
};

// Helper functions
const getSearchVolumeTier = (keyword: string, keywordData: KeywordData): 'high' | 'medium' | 'low' => {
  if (keywordData.searchVolume.high.includes(keyword)) return 'high';
  if (keywordData.searchVolume.medium.includes(keyword)) return 'medium';
  return 'low';
};

const getKeywordIntent = (keyword: string, keywordData: KeywordData): 'commercial' | 'informational' | 'navigational' | 'transactional' => {
  if (keywordData.intent.commercial.includes(keyword)) return 'commercial';
  if (keywordData.intent.informational.includes(keyword)) return 'informational';
  if (keywordData.intent.navigational.includes(keyword)) return 'navigational';
  if (keywordData.intent.transactional.includes(keyword)) return 'transactional';

  // Infer intent from keyword structure
  if (keyword.includes('best') || keyword.includes('top') || keyword.includes('review')) return 'commercial';
  if (keyword.includes('how') || keyword.includes('what') || keyword.includes('why')) return 'informational';
  if (keyword.includes('buy') || keyword.includes('enroll') || keyword.includes('apply')) return 'transactional';

  return 'informational'; // Default
};

const calculateCompetitorDifficulty = (keyword: string, strategy: MarketingStrategy): 'high' | 'medium' | 'low' => {
  // Simple heuristic based on keyword characteristics and competitors
  const competitorCount = strategy.competitorAnalysis.mainCompetitors.length;
  const isGenericKeyword = keyword.split(' ').length <= 2;
  const hasLocationModifier = strategy.keywordStrategy.local?.some(local =>
    keyword.toLowerCase().includes(local.toLowerCase().split(' ')[1] || '')
  );

  if (competitorCount >= 4 && isGenericKeyword && !hasLocationModifier) return 'high';
  if (competitorCount >= 3 || isGenericKeyword) return 'medium';
  return 'low';
};

const calculateOpportunityScore = (keyword: string, strategy: MarketingStrategy): number => {
  let score = 50; // Base score

  // Search volume factor
  const volumeTier = getSearchVolumeTier(keyword, strategy.keywordStrategy);
  if (volumeTier === 'high') score += 30;
  else if (volumeTier === 'medium') score += 20;
  else score += 10;

  // Intent factor
  const intent = getKeywordIntent(keyword, strategy.keywordStrategy);
  if (intent === 'transactional') score += 25;
  else if (intent === 'commercial') score += 20;
  else if (intent === 'navigational') score += 10;
  else score += 5;

  // Competition factor (inverse - lower competition = higher opportunity)
  const difficulty = calculateCompetitorDifficulty(keyword, strategy);
  if (difficulty === 'low') score += 20;
  else if (difficulty === 'medium') score += 10;
  // High difficulty adds no bonus

  // Local modifier bonus
  const hasLocalModifier = strategy.keywordStrategy.local?.some(local =>
    keyword.toLowerCase().includes(local.toLowerCase())
  );
  if (hasLocalModifier) score += 15;

  // Long-tail bonus
  if (keyword.split(' ').length >= 4) score += 10;

  return Math.min(100, Math.max(1, score));
};

const generateContentSuggestions = (keyword: string, strategy: MarketingStrategy): string[] => {
  const suggestions: string[] = [];
  const intent = getKeywordIntent(keyword, strategy.keywordStrategy);

  switch (intent) {
    case 'commercial':
      suggestions.push(
        `Comparison section: "${keyword}" vs alternatives`,
        `Benefits breakdown specifically for "${keyword}"`,
        `Pricing analysis for "${keyword}" options`,
        `Customer testimonials related to "${keyword}"`
      );
      break;
    case 'informational':
      suggestions.push(
        `Comprehensive guide section addressing "${keyword}"`,
        `FAQ section answering common questions about "${keyword}"`,
        `Step-by-step explanation of "${keyword}"`,
        `Benefits and considerations for "${keyword}"`
      );
      break;
    case 'transactional':
      suggestions.push(
        `Clear call-to-action for "${keyword}"`,
        `Application process for "${keyword}"`,
        `Immediate next steps after "${keyword}" decision`,
        `Contact information and consultation offers for "${keyword}"`
      );
      break;
    case 'navigational':
      suggestions.push(
        `Navigation elements highlighting "${keyword}"`,
        `Service directory for "${keyword}"`,
        `Contact information specific to "${keyword}"`,
        `Location-specific information for "${keyword}"`
      );
      break;
  }

  return suggestions;
};

const generateCTASuggestions = (keyword: string, strategy: MarketingStrategy): string[] => {
  const intent = getKeywordIntent(keyword, strategy.keywordStrategy);
  const ctas: string[] = [];

  switch (intent) {
    case 'commercial':
      ctas.push(
        `Compare ${keyword} Options`,
        `Get ${keyword} Quote`,
        `Find Best ${keyword} Plans`
      );
      break;
    case 'informational':
      ctas.push(
        `Learn More About ${keyword}`,
        `Download ${keyword} Guide`,
        `Get ${keyword} Information`
      );
      break;
    case 'transactional':
      ctas.push(
        `Enroll in ${keyword} Now`,
        `Apply for ${keyword}`,
        `Get Started with ${keyword}`
      );
      break;
    case 'navigational':
      ctas.push(
        `Find ${keyword} Near You`,
        `Contact ${keyword} Specialist`,
        `Visit ${keyword} Office`
      );
      break;
  }

  return ctas;
};

const generateSuggestedHeaders = (strategy: MarketingStrategy): string[] => {
  const headers: string[] = [];

  // H1 suggestions
  headers.push(`H1: ${strategy.seoOptimizations.titleOptimization}`);

  // H2 suggestions based on keyword strategy
  strategy.keywordStrategy.primary.forEach(keyword => {
    headers.push(`H2: ${keyword} Benefits and Coverage`);
    headers.push(`H2: How to Choose the Best ${keyword}`);
  });

  strategy.keywordStrategy.secondary.forEach(keyword => {
    headers.push(`H3: ${keyword} Explained`);
  });

  // Add existing strategy headers
  strategy.seoOptimizations.headerStrategy.forEach(header => {
    headers.push(header);
  });

  return headers;
};

const optimizeTitle = (strategy: MarketingStrategy): string => {
  const primaryKeyword = strategy.keywordStrategy.primary[0];
  const secondaryKeyword = strategy.keywordStrategy.secondary[0];
  const currentYear = new Date().getFullYear();

  return `${primaryKeyword} ${currentYear} | ${secondaryKeyword} | Expert Guide & Quotes`;
};

const optimizeMetaDescription = (strategy: MarketingStrategy): string => {
  const primaryKeyword = strategy.keywordStrategy.primary[0];
  const valueProposition = strategy.contentStrategy.valuePropositions[0];

  return `${primaryKeyword}: ${valueProposition} Expert consultation available. Compare plans and get quotes today.`;
};

const generateMetaKeywords = (strategy: MarketingStrategy): string => {
  const allKeywords = [
    ...strategy.keywordStrategy.primary,
    ...strategy.keywordStrategy.secondary,
    ...strategy.keywordStrategy.longTail.slice(0, 3)
  ];

  return allKeywords.join(', ');
};

const generateAdvancedContentSuggestions = (strategy: MarketingStrategy): string[] => {
  return [
    `Create comparison tables featuring ${strategy.keywordStrategy.primary.join(', ')}`,
    `Develop location-specific content for ${strategy.keywordStrategy.local?.join(', ')}`,
    `Build FAQ section addressing ${strategy.keywordStrategy.longTail.join(', ')}`,
    `Add testimonials from ${strategy.primaryAudience.join(' and ')} customers`,
    `Include competitor comparison section highlighting your differentiators`,
    `Create urgency-driven content around ${strategy.contentStrategy.urgencyFactors[0]}`,
    `Develop trust-building content featuring ${strategy.contentStrategy.trustSignals[0]}`
  ];
};

const identifyInternalLinkOpportunities = (strategy: MarketingStrategy): string[] => {
  const opportunities: string[] = [];

  // Link to related services
  strategy.seoOptimizations.internalLinking.forEach(link => {
    opportunities.push(`Link to: ${link}`);
  });

  // Cross-link to other location pages (for location-based pages)
  if (strategy.keywordStrategy.local) {
    strategy.keywordStrategy.local.forEach(location => {
      opportunities.push(`Cross-link to: ${location} landing page`);
    });
  }

  // Link to competitors mentioned
  strategy.competitorAnalysis.mainCompetitors.forEach(competitor => {
    opportunities.push(`Consider comparison page: ${competitor} vs Our Service`);
  });

  return opportunities;
};

// Export keyword research results for analysis
export const exportKeywordResearch = (pageKey: string) => {
  const strategy = marketingStrategies[pageKey];
  if (!strategy) return null;

  const analysis = analyzeKeywordOpportunities(pageKey);
  const optimizations = generateContentOptimizations(pageKey);

  return {
    pageKey,
    pageName: strategy.pageName,
    keywordAnalysis: analysis,
    contentOptimizations: optimizations,
    competitorInsights: strategy.competitorAnalysis,
    audienceSegments: strategy.primaryAudience,
    generatedAt: new Date().toISOString()
  };
};

// Get all page marketing strategies
export const getAllMarketingStrategies = () => {
  return Object.keys(marketingStrategies).map(pageKey => ({
    ...marketingStrategies[pageKey],
    pageKey
  }));
};