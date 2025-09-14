export interface InternalLinkConfig {
  url: string;
  title: string;
  description: string;
  category: 'location' | 'product' | 'guide' | 'comparison';
  priority: 'high' | 'medium' | 'low';
  contextualRelevance: string[];
  audienceAlignment: string[];
}

export interface PageLinkingStrategy {
  pageKey: string;
  primaryLinks: InternalLinkConfig[];
  contextualLinks: InternalLinkConfig[];
  relatedTopics: InternalLinkConfig[];
  crossSells: InternalLinkConfig[];
}

// All internal link configurations
export const internalLinkConfigs: Record<string, InternalLinkConfig> = {
  'gwinnett-county-georgia': {
    url: '/medicare-advantage/gwinnett-county-georgia',
    title: 'Medicare Advantage Plans Gwinnett County Georgia',
    description: 'Find the best Medicare Advantage plans in Gwinnett County, GA with suburban family-oriented care and multicultural services.',
    category: 'location',
    priority: 'high',
    contextualRelevance: ['suburban_healthcare', 'atlanta_metro', 'diverse_communities', 'family_oriented'],
    audienceAlignment: ['suburban_families', 'hispanic_community', 'asian_american_community']
  },

  'long-term-care-insurance': {
    url: '/long-term-care-insurance',
    title: 'Long Term Care Insurance',
    description: 'Protect your retirement savings with comprehensive long term care insurance coverage and planning.',
    category: 'product',
    priority: 'high',
    contextualRelevance: ['retirement_planning', 'financial_protection', 'family_caregiving', 'senior_care'],
    audienceAlignment: ['pre_retirees', 'family_caregivers', 'high_net_worth', 'healthcare_planners']
  },

  'medicare': {
    url: '/medicare',
    title: 'Complete Medicare Guide 2025',
    description: 'Master Medicare with confidence: Complete guide to benefits, enrollment, and choosing the right coverage.',
    category: 'guide',
    priority: 'high',
    contextualRelevance: ['medicare_education', 'enrollment_help', 'benefits_explanation', 'comprehensive_guide'],
    audienceAlignment: ['new_medicare_eligible', 'current_medicare_users', 'medicare_caregivers']
  },

  'how-will-medicare-benefit-you': {
    url: '/how-will-medicare-benefit-you',
    title: 'How Will Medicare Benefit You?',
    description: 'Discover how Medicare can transform your healthcare experience while protecting your financial future.',
    category: 'guide',
    priority: 'medium',
    contextualRelevance: ['medicare_benefits', 'cost_savings', 'healthcare_value', 'benefit_analysis'],
    audienceAlignment: ['medicare_curious', 'benefit_researchers', 'cost_conscious', 'health_focused']
  },

  'san-francisco-county': {
    url: '/medicare-advantage/san-francisco-county',
    title: 'Medicare Advantage San Francisco County',
    description: 'Premium Medicare Advantage plans for San Francisco with UCSF, Kaiser, and Sutter Health networks.',
    category: 'location',
    priority: 'high',
    contextualRelevance: ['urban_healthcare', 'premium_networks', 'high_cost_area', 'tech_community'],
    audienceAlignment: ['urban_professionals', 'tech_retirees', 'healthcare_conscious', 'high_income']
  },

  'duval-county-florida': {
    url: '/medicare-advantage/duval-county-florida',
    title: 'Medicare Advantage Duval County Florida',
    description: 'Medicare Advantage plans in Jacksonville with Mayo Clinic access, veteran-friendly options, and snowbird coverage.',
    category: 'location',
    priority: 'high',
    contextualRelevance: ['mayo_clinic', 'veteran_healthcare', 'florida_retirement', 'snowbird_coverage'],
    audienceAlignment: ['florida_retirees', 'military_veterans', 'snowbirds', 'cost_conscious']
  },

  'duke-vs-unc-rex-medicare-advantage-wake-county': {
    url: '/duke-vs-unc-rex-medicare-advantage-wake-county',
    title: 'Duke vs UNC REX Medicare Advantage Wake County',
    description: 'Compare Duke Health and UNC REX Medicare Advantage plans in Wake County, NC for the best network match.',
    category: 'comparison',
    priority: 'medium',
    contextualRelevance: ['provider_networks', 'hospital_comparison', 'academic_medical', 'triangle_area'],
    audienceAlignment: ['provider_loyal', 'comparison_shoppers', 'healthcare_researchers', 'quality_focused']
  },

  'medicare-supplement-plan-n': {
    url: '/medicare-supplement-plan-n',
    title: 'Medicare Supplement Plan N',
    description: 'Medicare Plan N costs $165.45/month average with nearly comprehensive coverage and small copays.',
    category: 'product',
    priority: 'high',
    contextualRelevance: ['supplement_insurance', 'medigap_coverage', 'cost_effective', 'copay_plans'],
    audienceAlignment: ['cost_conscious', 'comprehensive_coverage_seekers', 'plan_g_alternatives', 'copay_tolerant']
  }
};

// Page-specific linking strategies
export const pageLinkingStrategies: Record<string, PageLinkingStrategy> = {
  'gwinnett-county-georgia': {
    pageKey: 'gwinnett-county-georgia',
    primaryLinks: [
      internalLinkConfigs['medicare'],
      internalLinkConfigs['medicare-supplement-plan-n'],
      internalLinkConfigs['how-will-medicare-benefit-you']
    ],
    contextualLinks: [
      internalLinkConfigs['san-francisco-county'], // Urban/suburban comparison
      internalLinkConfigs['duval-county-florida']  // Growing retirement communities
    ],
    relatedTopics: [
      internalLinkConfigs['duke-vs-unc-rex-medicare-advantage-wake-county'] // Regional comparison
    ],
    crossSells: [
      internalLinkConfigs['long-term-care-insurance'] // Family planning
    ]
  },

  'long-term-care-insurance': {
    pageKey: 'long-term-care-insurance',
    primaryLinks: [
      internalLinkConfigs['medicare'],
      internalLinkConfigs['medicare-supplement-plan-n'],
      internalLinkConfigs['how-will-medicare-benefit-you']
    ],
    contextualLinks: [
      internalLinkConfigs['gwinnett-county-georgia'], // Family-oriented communities
      internalLinkConfigs['san-francisco-county']     // High net worth areas
    ],
    relatedTopics: [
      internalLinkConfigs['duval-county-florida']     // Retirement planning
    ],
    crossSells: [
      internalLinkConfigs['duke-vs-unc-rex-medicare-advantage-wake-county'] // Quality healthcare
    ]
  },

  'medicare': {
    pageKey: 'medicare',
    primaryLinks: [
      internalLinkConfigs['medicare-supplement-plan-n'],
      internalLinkConfigs['how-will-medicare-benefit-you'],
      internalLinkConfigs['gwinnett-county-georgia']
    ],
    contextualLinks: [
      internalLinkConfigs['san-francisco-county'],
      internalLinkConfigs['duval-county-florida'],
      internalLinkConfigs['duke-vs-unc-rex-medicare-advantage-wake-county']
    ],
    relatedTopics: [
      internalLinkConfigs['long-term-care-insurance']
    ],
    crossSells: []
  },

  'how-will-medicare-benefit-you': {
    pageKey: 'how-will-medicare-benefit-you',
    primaryLinks: [
      internalLinkConfigs['medicare'],
      internalLinkConfigs['medicare-supplement-plan-n'],
      internalLinkConfigs['gwinnett-county-georgia']
    ],
    contextualLinks: [
      internalLinkConfigs['san-francisco-county'],
      internalLinkConfigs['duval-county-florida']
    ],
    relatedTopics: [
      internalLinkConfigs['duke-vs-unc-rex-medicare-advantage-wake-county']
    ],
    crossSells: [
      internalLinkConfigs['long-term-care-insurance']
    ]
  },

  'san-francisco-county': {
    pageKey: 'san-francisco-county',
    primaryLinks: [
      internalLinkConfigs['medicare'],
      internalLinkConfigs['medicare-supplement-plan-n'],
      internalLinkConfigs['how-will-medicare-benefit-you']
    ],
    contextualLinks: [
      internalLinkConfigs['gwinnett-county-georgia'], // Suburban comparison
      internalLinkConfigs['duval-county-florida']     // High-quality networks
    ],
    relatedTopics: [
      internalLinkConfigs['duke-vs-unc-rex-medicare-advantage-wake-county'] // Premium network comparison
    ],
    crossSells: [
      internalLinkConfigs['long-term-care-insurance'] // High net worth planning
    ]
  },

  'duval-county-florida': {
    pageKey: 'duval-county-florida',
    primaryLinks: [
      internalLinkConfigs['medicare'],
      internalLinkConfigs['medicare-supplement-plan-n'],
      internalLinkConfigs['how-will-medicare-benefit-you']
    ],
    contextualLinks: [
      internalLinkConfigs['gwinnett-county-georgia'], // Growing communities
      internalLinkConfigs['san-francisco-county']     // Premium healthcare
    ],
    relatedTopics: [
      internalLinkConfigs['duke-vs-unc-rex-medicare-advantage-wake-county'] // Academic medical centers
    ],
    crossSells: [
      internalLinkConfigs['long-term-care-insurance'] // Retirement planning
    ]
  },

  'duke-vs-unc-rex-medicare-advantage-wake-county': {
    pageKey: 'duke-vs-unc-rex-medicare-advantage-wake-county',
    primaryLinks: [
      internalLinkConfigs['medicare'],
      internalLinkConfigs['medicare-supplement-plan-n'],
      internalLinkConfigs['gwinnett-county-georgia']
    ],
    contextualLinks: [
      internalLinkConfigs['san-francisco-county'], // Premium networks
      internalLinkConfigs['duval-county-florida']  // Academic medical centers
    ],
    relatedTopics: [
      internalLinkConfigs['how-will-medicare-benefit-you']
    ],
    crossSells: [
      internalLinkConfigs['long-term-care-insurance'] // Comprehensive planning
    ]
  },

  'medicare-supplement-plan-n': {
    pageKey: 'medicare-supplement-plan-n',
    primaryLinks: [
      internalLinkConfigs['medicare'],
      internalLinkConfigs['how-will-medicare-benefit-you'],
      internalLinkConfigs['gwinnett-county-georgia']
    ],
    contextualLinks: [
      internalLinkConfigs['san-francisco-county'],
      internalLinkConfigs['duval-county-florida']
    ],
    relatedTopics: [
      internalLinkConfigs['duke-vs-unc-rex-medicare-advantage-wake-county']
    ],
    crossSells: [
      internalLinkConfigs['long-term-care-insurance'] // Comprehensive protection
    ]
  }
};

// Generate contextual link recommendations
export const generateContextualLinks = (currentPageKey: string, context: string): InternalLinkConfig[] => {
  const strategy = pageLinkingStrategies[currentPageKey];
  if (!strategy) return [];

  const contextualMatches: InternalLinkConfig[] = [];

  // Check all available links for contextual relevance
  Object.values(internalLinkConfigs).forEach(linkConfig => {
    if (linkConfig.url === internalLinkConfigs[currentPageKey].url) return; // Skip self-links

    const hasContextualRelevance = linkConfig.contextualRelevance.some(relevance =>
      context.toLowerCase().includes(relevance.replace('_', ' '))
    );

    if (hasContextualRelevance) {
      contextualMatches.push(linkConfig);
    }
  });

  return contextualMatches.slice(0, 3); // Limit to top 3 matches
};

// Generate audience-based recommendations
export const generateAudienceLinks = (currentPageKey: string, audienceSegment: string): InternalLinkConfig[] => {
  const audienceMatches: InternalLinkConfig[] = [];

  Object.values(internalLinkConfigs).forEach(linkConfig => {
    if (linkConfig.url === internalLinkConfigs[currentPageKey].url) return;

    const hasAudienceAlignment = linkConfig.audienceAlignment.some(audience =>
      audience.includes(audienceSegment.toLowerCase()) ||
      audienceSegment.toLowerCase().includes(audience.replace('_', ' '))
    );

    if (hasAudienceAlignment) {
      audienceMatches.push(linkConfig);
    }
  });

  return audienceMatches.slice(0, 2);
};

// SEO-optimized link anchor text variations
export const getLinkAnchorVariations = (linkConfig: InternalLinkConfig): string[] => {
  const variations: string[] = [linkConfig.title];

  switch (linkConfig.category) {
    case 'location':
      variations.push(
        `Medicare plans in ${linkConfig.title.split(' ').pop()}`,
        `${linkConfig.title.split(' ').pop()} Medicare Advantage`,
        `Best Medicare coverage ${linkConfig.title.split(' ').pop()}`
      );
      break;
    case 'product':
      variations.push(
        `Learn about ${linkConfig.title}`,
        `${linkConfig.title} benefits`,
        `Compare ${linkConfig.title} options`
      );
      break;
    case 'guide':
      variations.push(
        `${linkConfig.title} guide`,
        `Understanding ${linkConfig.title.toLowerCase()}`,
        `Complete ${linkConfig.title.toLowerCase()} information`
      );
      break;
    case 'comparison':
      variations.push(
        `${linkConfig.title} comparison`,
        `Compare ${linkConfig.title.split(' vs ')[0]} and ${linkConfig.title.split(' vs ')[1]}`,
        `Which is better: ${linkConfig.title.replace(' vs ', ' or ')}`
      );
      break;
  }

  return variations;
};

export default pageLinkingStrategies;