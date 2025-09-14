// Internal Linking Configuration for Medicare and Insurance Landing Pages
// Strategic cross-linking to improve SEO, user experience, and conversion paths

export interface InternalLink {
  url: string;
  anchorText: string;
  context: string;
  placement: 'header' | 'body' | 'sidebar' | 'footer' | 'cta-section';
  priority: 'high' | 'medium' | 'low';
  linkType: 'related' | 'comparison' | 'tool' | 'location' | 'product';
  trackingLabel?: string;
}

export interface InternalLinkingStrategy {
  pageKey: string;
  inboundLinks: InternalLink[];
  outboundLinks: InternalLink[];
  crossSellingLinks: InternalLink[];
  geographicLinks: InternalLink[];
  toolLinks: InternalLink[];
  comparisonLinks: InternalLink[];
}

export const internalLinkingStrategies: Record<string, InternalLinkingStrategy> = {
  'medicare-advantage-maui-county-hawaii': {
    pageKey: 'medicare-advantage-maui-county-hawaii',
    inboundLinks: [
      {
        url: '/medicare-advantage/broward-county-florida',
        anchorText: 'Compare Hawaii vs Florida Medicare Options',
        context: 'For snowbirds considering both Hawaii and Florida, compare Medicare Advantage options in both states.',
        placement: 'body',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'broward_to_maui_comparison'
      },
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Calculate Your Hawaii Medicare Costs',
        context: 'Use our Medicare cost calculator to estimate your expenses for Hawaii Medicare Advantage plans.',
        placement: 'cta-section',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'calculator_to_maui'
      }
    ],
    outboundLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Calculate Your Maui Medicare Costs',
        context: 'Before choosing a Medicare Advantage plan in Maui County, use our cost calculator to estimate your total expenses including premiums, deductibles, and out-of-pocket maximums.',
        placement: 'body',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'maui_to_calculator'
      },
      {
        url: '/medicare-advantage/broward-county-florida',
        anchorText: 'Snowbird Medicare: Florida Coverage Options',
        context: 'If you split time between Hawaii and Florida, explore Medicare Advantage plans in Broward County with snowbird-friendly coverage.',
        placement: 'sidebar',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'maui_to_broward_snowbird'
      },
      {
        url: '/disability-insurance',
        anchorText: 'Protect Your Island Income with Disability Insurance',
        context: 'Working in Hawaii\'s tourism or service industries? Protect your income with comprehensive disability insurance coverage.',
        placement: 'footer',
        priority: 'low',
        linkType: 'product',
        trackingLabel: 'maui_to_disability'
      }
    ],
    crossSellingLinks: [
      {
        url: '/disability-insurance',
        anchorText: 'Income Protection for Hawaii Workers',
        context: 'Living in Hawaii can be expensive. Protect your income and ability to afford healthcare with disability insurance.',
        placement: 'sidebar',
        priority: 'medium',
        linkType: 'product',
        trackingLabel: 'maui_cross_sell_disability'
      }
    ],
    geographicLinks: [
      {
        url: '/medicare-advantage/broward-county-florida',
        anchorText: 'Medicare for Snowbirds: Hawaii to Florida',
        context: 'Many Hawaii residents spend winter months in Florida. Compare Medicare Advantage options for multi-state coverage.',
        placement: 'body',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'maui_geo_broward'
      }
    ],
    toolLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Hawaii Medicare Cost Calculator',
        context: 'Get accurate cost estimates for Medicare Advantage plans available in Maui County, including Kaiser and HMSA networks.',
        placement: 'cta-section',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'maui_tool_calculator'
      }
    ],
    comparisonLinks: [
      {
        url: '/medicare-advantage/cobb-county-georgia',
        anchorText: 'Compare: Hawaii vs Georgia Medicare Benefits',
        context: 'Considering relocation? Compare Medicare Advantage benefits between Hawaii and Georgia for retirees.',
        placement: 'footer',
        priority: 'low',
        linkType: 'comparison',
        trackingLabel: 'maui_compare_cobb'
      }
    ]
  },

  'medicare-advantage-cobb-county-georgia': {
    pageKey: 'medicare-advantage-cobb-county-georgia',
    inboundLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Calculate Georgia Medicare Costs',
        context: 'Estimate your Medicare Advantage costs in Georgia with our comprehensive cost calculator.',
        placement: 'cta-section',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'calculator_to_cobb'
      },
      {
        url: '/disability-insurance',
        anchorText: 'Georgia Executive Medicare Planning',
        context: 'High-earning executives in Georgia need comprehensive healthcare and income protection strategies.',
        placement: 'body',
        priority: 'medium',
        linkType: 'related',
        trackingLabel: 'disability_to_cobb_exec'
      }
    ],
    outboundLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Calculate Your Cobb County Medicare Costs',
        context: 'Before selecting a Medicare Advantage plan in Cobb County, use our calculator to compare total costs across different plan options and income levels.',
        placement: 'body',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'cobb_to_calculator'
      },
      {
        url: '/disability-insurance',
        anchorText: 'Executive Income Protection in Georgia',
        context: 'As a high-earning professional in Cobb County, protect your executive income with premium disability insurance coverage.',
        placement: 'sidebar',
        priority: 'high',
        linkType: 'product',
        trackingLabel: 'cobb_to_disability_exec'
      },
      {
        url: '/medicare-advantage/fresno-county-california',
        anchorText: 'Compare: Georgia vs California Medicare',
        context: 'Considering relocation to California? Compare Medicare Advantage benefits and costs between Georgia and California.',
        placement: 'footer',
        priority: 'low',
        linkType: 'comparison',
        trackingLabel: 'cobb_to_fresno_compare'
      }
    ],
    crossSellingLinks: [
      {
        url: '/disability-insurance',
        anchorText: 'Executive Disability Insurance Georgia',
        context: 'Protect your high executive income with comprehensive disability insurance. Essential for Cobb County professionals.',
        placement: 'cta-section',
        priority: 'high',
        linkType: 'product',
        trackingLabel: 'cobb_cross_sell_disability'
      }
    ],
    geographicLinks: [
      {
        url: '/medicare-advantage/maui-county-hawaii',
        anchorText: 'Executive Retirement: Georgia to Hawaii Medicare',
        context: 'Planning executive retirement in Hawaii? Compare Medicare Advantage options for high-income retirees.',
        placement: 'sidebar',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'cobb_geo_maui'
      }
    ],
    toolLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Georgia Medicare Cost Calculator',
        context: 'Calculate precise Medicare Advantage costs for Cobb County, including premium plans suitable for executives.',
        placement: 'header',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'cobb_tool_calculator'
      }
    ],
    comparisonLinks: [
      {
        url: '/medicare-advantage/broward-county-florida',
        anchorText: 'Compare: Georgia vs Florida Medicare for Retirees',
        context: 'Many Georgia retirees consider Florida. Compare Medicare Advantage benefits between Cobb County and South Florida.',
        placement: 'body',
        priority: 'medium',
        linkType: 'comparison',
        trackingLabel: 'cobb_compare_broward'
      }
    ]
  },

  'medicare-advantage-fresno-county-california': {
    pageKey: 'medicare-advantage-fresno-county-california',
    inboundLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Calculate California Medicare Costs',
        context: 'Use our bilingual cost calculator to estimate Medicare expenses in California\'s Central Valley.',
        placement: 'cta-section',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'calculator_to_fresno'
      },
      {
        url: '/medicare-advantage/cobb-county-georgia',
        anchorText: 'California vs Georgia Medicare Comparison',
        context: 'Compare Medicare Advantage benefits and costs between California and Georgia for retirees.',
        placement: 'body',
        priority: 'medium',
        linkType: 'comparison',
        trackingLabel: 'cobb_to_fresno'
      }
    ],
    outboundLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Calculadora de Costos Medicare California',
        context: 'Antes de elegir un plan Medicare Advantage en el Condado de Fresno, use nuestra calculadora bilingüe para estimar sus costos totales.',
        placement: 'body',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'fresno_to_calculator_spanish'
      },
      {
        url: '/disability-insurance',
        anchorText: 'Seguro de Discapacidad para Trabajadores Agrícolas',
        context: 'Trabajadores del Valle Central: Protejan sus ingresos con seguro de discapacidad especializado para la industria agrícola.',
        placement: 'sidebar',
        priority: 'medium',
        linkType: 'product',
        trackingLabel: 'fresno_to_disability_spanish'
      },
      {
        url: '/medicare-advantage/broward-county-florida',
        anchorText: 'Compare: California vs Florida Medicare Bilingüe',
        context: 'Para familias hispanas considerando mudarse entre California y Florida, compare opciones Medicare Advantage bilingües.',
        placement: 'footer',
        priority: 'medium',
        linkType: 'comparison',
        trackingLabel: 'fresno_to_broward_bilingual'
      }
    ],
    crossSellingLinks: [
      {
        url: '/disability-insurance',
        anchorText: 'Protección de Ingresos Agrícolas',
        context: 'Los trabajadores agrícolas del Valle Central necesitan protección de ingresos especializada. Explore seguros de discapacidad.',
        placement: 'cta-section',
        priority: 'high',
        linkType: 'product',
        trackingLabel: 'fresno_cross_sell_disability'
      }
    ],
    geographicLinks: [
      {
        url: '/medicare-advantage/broward-county-florida',
        anchorText: 'Medicare Bilingüe: California a Florida',
        context: 'Muchas familias hispanas se mudan entre California y Florida. Compare servicios Medicare bilingües.',
        placement: 'body',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'fresno_geo_broward'
      }
    ],
    toolLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Calculadora Medicare Valle Central',
        context: 'Calcule costos precisos de Medicare Advantage para el Condado de Fresno, disponible en español.',
        placement: 'header',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'fresno_tool_calculator'
      }
    ],
    comparisonLinks: [
      {
        url: '/medicare-advantage/cobb-county-georgia',
        anchorText: 'Comparar: Medicare California vs Georgia',
        context: 'Compare beneficios Medicare Advantage entre California y Georgia para jubilados hispanos.',
        placement: 'sidebar',
        priority: 'low',
        linkType: 'comparison',
        trackingLabel: 'fresno_compare_cobb'
      }
    ]
  },

  'medicare-cost-calculator': {
    pageKey: 'medicare-cost-calculator',
    inboundLinks: [
      {
        url: '/medicare-advantage/maui-county-hawaii',
        anchorText: 'Hawaii Medicare Cost Calculator',
        context: 'Calculate your Medicare costs in Hawaii before choosing a plan.',
        placement: 'body',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'maui_to_calculator'
      },
      {
        url: '/medicare-advantage/cobb-county-georgia',
        anchorText: 'Georgia Medicare Cost Calculator',
        context: 'Calculate your Medicare costs in Georgia before enrollment.',
        placement: 'body',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'cobb_to_calculator'
      },
      {
        url: '/medicare-advantage/fresno-county-california',
        anchorText: 'California Medicare Cost Calculator',
        context: 'Calculate your Medicare costs in California\'s Central Valley.',
        placement: 'body',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'fresno_to_calculator'
      },
      {
        url: '/medicare-advantage/broward-county-florida',
        anchorText: 'Florida Medicare Cost Calculator',
        context: 'Calculate your Medicare costs in South Florida.',
        placement: 'body',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'broward_to_calculator'
      }
    ],
    outboundLinks: [
      {
        url: '/medicare-advantage/maui-county-hawaii',
        anchorText: 'Find Hawaii Medicare Plans',
        context: 'Based on your cost calculations, explore Medicare Advantage plans available in Maui County with Kaiser and HMSA networks.',
        placement: 'cta-section',
        priority: 'high',
        linkType: 'location',
        trackingLabel: 'calculator_to_maui'
      },
      {
        url: '/medicare-advantage/cobb-county-georgia',
        anchorText: 'Find Georgia Medicare Plans',
        context: 'Based on your cost estimates, explore premium Medicare Advantage plans in Cobb County for affluent retirees.',
        placement: 'cta-section',
        priority: 'high',
        linkType: 'location',
        trackingLabel: 'calculator_to_cobb'
      },
      {
        url: '/medicare-advantage/fresno-county-california',
        anchorText: 'Find California Medicare Plans',
        context: 'Based on your calculations, explore bilingual Medicare Advantage options in Fresno County\'s Central Valley.',
        placement: 'cta-section',
        priority: 'high',
        linkType: 'location',
        trackingLabel: 'calculator_to_fresno'
      },
      {
        url: '/medicare-advantage/broward-county-florida',
        anchorText: 'Find Florida Medicare Plans',
        context: 'Based on your cost analysis, explore Medicare Advantage plans in Broward County with snowbird-friendly benefits.',
        placement: 'cta-section',
        priority: 'high',
        linkType: 'location',
        trackingLabel: 'calculator_to_broward'
      },
      {
        url: '/disability-insurance',
        anchorText: 'Protect Your Income Before Retirement',
        context: 'While planning Medicare costs, don\'t forget to protect your pre-Medicare income with disability insurance.',
        placement: 'sidebar',
        priority: 'medium',
        linkType: 'product',
        trackingLabel: 'calculator_to_disability'
      }
    ],
    crossSellingLinks: [
      {
        url: '/disability-insurance',
        anchorText: 'Calculate Disability Insurance Costs Too',
        context: 'Planning Medicare costs? Also calculate your disability insurance needs to protect income before Medicare eligibility.',
        placement: 'body',
        priority: 'medium',
        linkType: 'product',
        trackingLabel: 'calculator_cross_sell_disability'
      }
    ],
    geographicLinks: [
      {
        url: '/medicare-advantage/maui-county-hawaii',
        anchorText: 'Calculate Hawaii-Specific Costs',
        context: 'Get Hawaii-specific Medicare cost calculations including inter-island coverage considerations.',
        placement: 'body',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'calculator_geo_maui'
      },
      {
        url: '/medicare-advantage/cobb-county-georgia',
        anchorText: 'Calculate Georgia Executive Plans',
        context: 'Calculate costs for premium Medicare Advantage plans suitable for high-income Georgia executives.',
        placement: 'body',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'calculator_geo_cobb'
      },
      {
        url: '/medicare-advantage/fresno-county-california',
        anchorText: 'Calculadora Bilingüe California',
        context: 'Use our bilingual calculator for Central Valley Medicare cost estimates in Spanish.',
        placement: 'body',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'calculator_geo_fresno'
      },
      {
        url: '/medicare-advantage/broward-county-florida',
        anchorText: 'Calculate Snowbird Coverage Costs',
        context: 'Get cost estimates for Medicare plans with snowbird-friendly coverage in South Florida.',
        placement: 'body',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'calculator_geo_broward'
      }
    ],
    toolLinks: [],
    comparisonLinks: []
  },

  'medicare-advantage-broward-county-florida': {
    pageKey: 'medicare-advantage-broward-county-florida',
    inboundLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Calculate Florida Medicare Costs',
        context: 'Estimate your Medicare Advantage costs in South Florida with our comprehensive calculator.',
        placement: 'cta-section',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'calculator_to_broward'
      },
      {
        url: '/medicare-advantage/maui-county-hawaii',
        anchorText: 'Snowbird Medicare: Hawaii to Florida',
        context: 'Split time between Hawaii and Florida? Compare Medicare options for multi-state coverage.',
        placement: 'body',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'maui_to_broward'
      }
    ],
    outboundLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Calculate Your Broward County Medicare Costs',
        context: 'Before choosing a Medicare Advantage plan in Broward County, calculate your total expenses including seasonal coverage considerations.',
        placement: 'body',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'broward_to_calculator'
      },
      {
        url: '/medicare-advantage/maui-county-hawaii',
        anchorText: 'Snowbird Medicare: Florida to Hawaii Coverage',
        context: 'Spending time in both Florida and Hawaii? Compare Medicare Advantage plans with multi-state network access.',
        placement: 'sidebar',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'broward_to_maui_snowbird'
      },
      {
        url: '/medicare-advantage/fresno-county-california',
        anchorText: 'Compare: Florida vs California Medicare Bilingüe',
        context: 'Para familias hispanas, compare servicios Medicare bilingües entre Florida y California.',
        placement: 'footer',
        priority: 'medium',
        linkType: 'comparison',
        trackingLabel: 'broward_to_fresno_bilingual'
      },
      {
        url: '/disability-insurance',
        anchorText: 'Protect Your Beach Retirement Income',
        context: 'Before retiring to South Florida, protect your income with comprehensive disability insurance coverage.',
        placement: 'footer',
        priority: 'low',
        linkType: 'product',
        trackingLabel: 'broward_to_disability'
      }
    ],
    crossSellingLinks: [
      {
        url: '/disability-insurance',
        anchorText: 'Income Protection for Florida Retirees',
        context: 'Protecting your retirement income in Florida? Consider disability insurance for comprehensive financial security.',
        placement: 'sidebar',
        priority: 'medium',
        linkType: 'product',
        trackingLabel: 'broward_cross_sell_disability'
      }
    ],
    geographicLinks: [
      {
        url: '/medicare-advantage/cobb-county-georgia',
        anchorText: 'Medicare Snowbirds: Georgia to Florida',
        context: 'Many Georgia retirees move to Florida. Compare Medicare Advantage benefits for your relocation.',
        placement: 'body',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'broward_geo_cobb'
      }
    ],
    toolLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Florida Snowbird Cost Calculator',
        context: 'Calculate Medicare costs with seasonal coverage considerations for South Florida snowbirds.',
        placement: 'header',
        priority: 'high',
        linkType: 'tool',
        trackingLabel: 'broward_tool_calculator'
      }
    ],
    comparisonLinks: [
      {
        url: '/medicare-advantage/maui-county-hawaii',
        anchorText: 'Compare: Florida vs Hawaii for Retirees',
        context: 'Choosing between Florida and Hawaii for retirement? Compare Medicare Advantage benefits and costs.',
        placement: 'body',
        priority: 'medium',
        linkType: 'comparison',
        trackingLabel: 'broward_compare_maui'
      }
    ]
  },

  'disability-insurance': {
    pageKey: 'disability-insurance',
    inboundLinks: [
      {
        url: '/medicare-advantage/cobb-county-georgia',
        anchorText: 'Executive Disability Insurance',
        context: 'High-earning executives need comprehensive income protection before Medicare eligibility.',
        placement: 'sidebar',
        priority: 'high',
        linkType: 'related',
        trackingLabel: 'cobb_to_disability'
      },
      {
        url: '/medicare-advantage/fresno-county-california',
        anchorText: 'Agricultural Worker Income Protection',
        context: 'Protect your agricultural income with specialized disability insurance coverage.',
        placement: 'sidebar',
        priority: 'medium',
        linkType: 'related',
        trackingLabel: 'fresno_to_disability'
      },
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Protect Pre-Medicare Income',
        context: 'While planning Medicare costs, protect your current income with disability insurance.',
        placement: 'body',
        priority: 'medium',
        linkType: 'related',
        trackingLabel: 'calculator_to_disability'
      }
    ],
    outboundLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Plan Your Future Medicare Costs',
        context: 'While protecting your current income, also plan for future healthcare costs with our Medicare calculator.',
        placement: 'body',
        priority: 'medium',
        linkType: 'tool',
        trackingLabel: 'disability_to_calculator'
      },
      {
        url: '/medicare-advantage/cobb-county-georgia',
        anchorText: 'Executive Medicare Planning Georgia',
        context: 'High earners protecting income now? Plan your future Medicare strategy for Georgia executive retirement.',
        placement: 'sidebar',
        priority: 'high',
        linkType: 'location',
        trackingLabel: 'disability_to_cobb_exec'
      },
      {
        url: '/medicare-advantage/maui-county-hawaii',
        anchorText: 'Retirement Planning: Income to Medicare Hawaii',
        context: 'Dreaming of Hawaii retirement? Protect current income now, plan Medicare strategy for island living later.',
        placement: 'footer',
        priority: 'low',
        linkType: 'location',
        trackingLabel: 'disability_to_maui'
      },
      {
        url: '/medicare-advantage/fresno-county-california',
        anchorText: 'Agricultural Worker Medicare Planning',
        context: 'Agricultural workers: Protect income now and plan for Medicare benefits in California\'s Central Valley.',
        placement: 'sidebar',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'disability_to_fresno'
      }
    ],
    crossSellingLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Calculate Future Healthcare Costs',
        context: 'Protecting income now? Also calculate future Medicare costs to plan comprehensive financial protection.',
        placement: 'cta-section',
        priority: 'medium',
        linkType: 'tool',
        trackingLabel: 'disability_cross_sell_calculator'
      }
    ],
    geographicLinks: [
      {
        url: '/medicare-advantage/cobb-county-georgia',
        anchorText: 'Georgia Executive Income Protection',
        context: 'High-earning professionals in Georgia need specialized disability insurance for executive-level incomes.',
        placement: 'body',
        priority: 'high',
        linkType: 'location',
        trackingLabel: 'disability_geo_cobb'
      },
      {
        url: '/medicare-advantage/fresno-county-california',
        anchorText: 'Central Valley Agricultural Protection',
        context: 'Agricultural workers in California\'s Central Valley need specialized income protection coverage.',
        placement: 'body',
        priority: 'medium',
        linkType: 'location',
        trackingLabel: 'disability_geo_fresno'
      }
    ],
    toolLinks: [
      {
        url: '/medicare-cost-calculator',
        anchorText: 'Healthcare Cost Planning Tool',
        context: 'Plan comprehensive financial protection: current income via disability insurance, future healthcare via Medicare.',
        placement: 'sidebar',
        priority: 'medium',
        linkType: 'tool',
        trackingLabel: 'disability_tool_calculator'
      }
    ],
    comparisonLinks: []
  }
};

// Internal linking optimization functions
export class InternalLinkingOptimizer {
  static generateContextualLinks(currentPageKey: string, context: string): InternalLink[] {
    const strategy = internalLinkingStrategies[currentPageKey];
    if (!strategy) return [];

    // Return links that match the current context
    return strategy.outboundLinks.filter(link =>
      link.context.toLowerCase().includes(context.toLowerCase())
    );
  }

  static getLinksByPlacement(pageKey: string, placement: InternalLink['placement']): InternalLink[] {
    const strategy = internalLinkingStrategies[pageKey];
    if (!strategy) return [];

    return strategy.outboundLinks.filter(link => link.placement === placement);
  }

  static getLinksByPriority(pageKey: string, priority: InternalLink['priority']): InternalLink[] {
    const strategy = internalLinkingStrategies[pageKey];
    if (!strategy) return [];

    return strategy.outboundLinks.filter(link => link.priority === priority);
  }

  static getLinksByType(pageKey: string, linkType: InternalLink['linkType']): InternalLink[] {
    const strategy = internalLinkingStrategies[pageKey];
    if (!strategy) return [];

    return strategy.outboundLinks.filter(link => link.linkType === linkType);
  }

  static trackInternalLinkClick(fromPage: string, toPage: string, linkType: string, trackingLabel?: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'internal_link_click', {
        event_category: 'Internal Navigation',
        event_label: trackingLabel || `${fromPage}_to_${toPage}`,
        custom_parameters: {
          from_page: fromPage,
          to_page: toPage,
          link_type: linkType,
          tracking_label: trackingLabel
        }
      });
    }
  }

  static generateRelatedPagesSection(currentPageKey: string): InternalLink[] {
    const strategy = internalLinkingStrategies[currentPageKey];
    if (!strategy) return [];

    // Combine different types of related links
    const relatedLinks = [
      ...strategy.geographicLinks,
      ...strategy.comparisonLinks,
      ...strategy.toolLinks.slice(0, 2), // Limit tool links
      ...strategy.crossSellingLinks.slice(0, 1) // Limit cross-selling
    ];

    // Sort by priority and return top 6
    return relatedLinks
      .sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      })
      .slice(0, 6);
  }

  static generateBreadcrumbLinks(currentPageKey: string): { name: string; url: string }[] {
    const breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Medicare Services', url: '/medicare' }
    ];

    const pageMap: Record<string, { name: string; category: string }> = {
      'medicare-advantage-maui-county-hawaii': { name: 'Maui County Hawaii', category: 'Medicare Advantage' },
      'medicare-advantage-cobb-county-georgia': { name: 'Cobb County Georgia', category: 'Medicare Advantage' },
      'medicare-advantage-fresno-county-california': { name: 'Fresno County California', category: 'Medicare Advantage' },
      'medicare-cost-calculator': { name: 'Cost Calculator', category: 'Medicare Tools' },
      'medicare-advantage-broward-county-florida': { name: 'Broward County Florida', category: 'Medicare Advantage' },
      'disability-insurance': { name: 'Disability Insurance', category: 'Insurance Services' }
    };

    const currentPage = pageMap[currentPageKey];
    if (currentPage) {
      breadcrumbs.push({ name: currentPage.category, url: '#' });
      breadcrumbs.push({ name: currentPage.name, url: '#' });
    }

    return breadcrumbs;
  }

  static generateSitemapConnections(): Record<string, string[]> {
    const connections: Record<string, string[]> = {};

    Object.keys(internalLinkingStrategies).forEach(pageKey => {
      const strategy = internalLinkingStrategies[pageKey];
      connections[pageKey] = strategy.outboundLinks.map(link => link.url);
    });

    return connections;
  }
}

// Link building and SEO utility functions
export class LinkSEOUtils {
  static generateLinkAnchorVariations(baseAnchor: string, targetKeywords: string[]): string[] {
    const variations = [baseAnchor];

    targetKeywords.forEach(keyword => {
      variations.push(`${keyword} - ${baseAnchor}`);
      variations.push(`${baseAnchor} for ${keyword}`);
      variations.push(`Best ${baseAnchor.toLowerCase()}`);
    });

    return variations.slice(0, 5); // Limit to 5 variations
  }

  static validateLinkDistribution(pageKey: string): {
    totalOutbound: number;
    byPriority: Record<string, number>;
    byType: Record<string, number>;
    recommendations: string[];
  } {
    const strategy = internalLinkingStrategies[pageKey];
    if (!strategy) return { totalOutbound: 0, byPriority: {}, byType: {}, recommendations: [] };

    const totalOutbound = strategy.outboundLinks.length;
    const byPriority: Record<string, number> = {};
    const byType: Record<string, number> = {};
    const recommendations: string[] = [];

    strategy.outboundLinks.forEach(link => {
      byPriority[link.priority] = (byPriority[link.priority] || 0) + 1;
      byType[link.linkType] = (byType[link.linkType] || 0) + 1;
    });

    // Generate recommendations
    if (totalOutbound < 5) {
      recommendations.push('Consider adding more outbound links for better user experience');
    }
    if (totalOutbound > 15) {
      recommendations.push('Consider reducing outbound links to avoid overwhelming users');
    }
    if (!byPriority.high) {
      recommendations.push('Add at least one high-priority outbound link');
    }
    if (!byType.tool) {
      recommendations.push('Consider adding tool links for better conversion');
    }

    return { totalOutbound, byPriority, byType, recommendations };
  }
}

export default internalLinkingStrategies;