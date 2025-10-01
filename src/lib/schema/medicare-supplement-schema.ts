// Medicare Supplement Schema Markup Utilities
// Generates structured data for SEO optimization

interface MedicareSupplementPageSchema {
  pagePath: string;
  pageTitle: string;
  pageDescription: string;
  areaServed: {
    type: 'State' | 'County' | 'City' | 'Country';
    name: string;
    containsPlace?: Array<{ type: string; name: string }>;
  };
  plans?: Array<{
    name: string;
    description: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * Generate comprehensive schema markup for Medicare Supplement pages
 */
export function generateMedicareSupplementSchema(config: MedicareSupplementPageSchema) {
  const baseUrl = 'https://elmaginsurance.com';
  const fullUrl = `${baseUrl}${config.pagePath}`;

  const schemaGraph: any[] = [
    // WebPage Schema
    {
      '@type': 'WebPage',
      '@id': fullUrl,
      url: fullUrl,
      name: config.pageTitle,
      description: config.pageDescription,
      inLanguage: 'en-US',
      isPartOf: {
        '@id': `${baseUrl}/#website`
      },
      breadcrumb: {
        '@id': `${fullUrl}#breadcrumb`
      }
    },
    // BreadcrumbList Schema
    generateBreadcrumbs(config.pagePath, config.areaServed.name),
    // Service Schema
    {
      '@type': 'Service',
      '@id': `${fullUrl}#service`,
      name: `${config.areaServed.name} Medicare Supplement Insurance`,
      description: config.pageDescription,
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        url: baseUrl
      },
      areaServed: {
        '@type': config.areaServed.type,
        name: config.areaServed.name,
        ...(config.areaServed.containsPlace && {
          containsPlace: config.areaServed.containsPlace
        })
      },
      ...(config.plans && {
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${config.areaServed.name} Medicare Supplement Plans`,
          itemListElement: config.plans.map(plan => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: plan.name,
              description: plan.description
            }
          }))
        }
      })
    }
  ];

  // Add FAQPage schema if FAQs provided
  if (config.faqs && config.faqs.length > 0) {
    schemaGraph.push({
      '@type': 'FAQPage',
      '@id': `${fullUrl}#faq`,
      mainEntity: config.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': schemaGraph
  };
}

/**
 * Generate breadcrumb navigation schema
 */
function generateBreadcrumbs(pagePath: string, areaName: string) {
  const pathParts = pagePath.split('/').filter(Boolean);

  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://elmaginsurance.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Medicare Supplement',
      item: 'https://elmaginsurance.com/medicare-supplement'
    }
  ];

  // Add final breadcrumb for current page
  breadcrumbItems.push({
    '@type': 'ListItem',
    position: breadcrumbItems.length + 1,
    name: areaName,
    item: `https://elmaginsurance.com${pagePath}`
  });

  return {
    '@type': 'BreadcrumbList',
    '@id': `https://elmaginsurance.com${pagePath}#breadcrumb`,
    itemListElement: breadcrumbItems
  };
}

/**
 * Generate schema for state-level Medicare Supplement pages
 */
export function generateStateSchema(
  state: string,
  statePath: string,
  description: string,
  cities?: string[],
  plans?: Array<{ name: string; description: string }>,
  faqs?: Array<{ question: string; answer: string }>
) {
  return generateMedicareSupplementSchema({
    pagePath: statePath,
    pageTitle: `${state} Medicare Supplement Insurance | Medigap Plans`,
    pageDescription: description,
    areaServed: {
      type: 'State',
      name: state,
      ...(cities && {
        containsPlace: cities.map(city => ({
          type: 'City',
          name: city
        }))
      })
    },
    plans,
    faqs
  });
}

/**
 * Generate schema for county-level Medicare Supplement pages
 */
export function generateCountySchema(
  county: string,
  state: string,
  countyPath: string,
  description: string,
  cities?: string[],
  plans?: Array<{ name: string; description: string }>,
  faqs?: Array<{ question: string; answer: string }>
) {
  return generateMedicareSupplementSchema({
    pagePath: countyPath,
    pageTitle: `${county} Medicare Supplement Insurance | ${state} Medigap`,
    pageDescription: description,
    areaServed: {
      type: 'County',
      name: `${county}, ${state}`,
      ...(cities && {
        containsPlace: cities.map(city => ({
          type: 'City',
          name: city
        }))
      })
    },
    plans,
    faqs
  });
}

/**
 * Generate schema for plan-specific Medicare Supplement pages
 */
export function generatePlanSchema(
  planName: string,
  planPath: string,
  description: string,
  faqs?: Array<{ question: string; answer: string }>
) {
  return generateMedicareSupplementSchema({
    pagePath: planPath,
    pageTitle: `Medicare Supplement ${planName} | Medigap ${planName}`,
    pageDescription: description,
    areaServed: {
      type: 'Country',
      name: 'United States'
    },
    plans: [
      {
        name: `Medicare Supplement Plan ${planName}`,
        description: description
      }
    ],
    faqs
  });
}

/**
 * Common Medicare Supplement FAQs (reusable across pages)
 */
export const commonMedigapFAQs = [
  {
    question: 'What is Medicare Supplement insurance?',
    answer: 'Medicare Supplement (Medigap) insurance is private insurance that helps pay for out-of-pocket costs not covered by Original Medicare, such as copayments, coinsurance, and deductibles. Medigap policies are standardized and regulated by federal and state law.'
  },
  {
    question: 'When can I enroll in Medicare Supplement?',
    answer: 'The best time to buy a Medigap policy is during your 6-month Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Medicare Part B. During this period, you have guaranteed issue rights and cannot be denied coverage or charged higher premiums due to health conditions.'
  },
  {
    question: 'What is the difference between Medicare Supplement and Medicare Advantage?',
    answer: 'Medicare Supplement (Medigap) works with Original Medicare to cover out-of-pocket costs and allows you to see any doctor that accepts Medicare nationwide. Medicare Advantage (Part C) replaces Original Medicare with a private plan that often has network restrictions but may include extra benefits like dental and vision coverage.'
  },
  {
    question: 'Can I use my Medicare Supplement plan anywhere?',
    answer: 'Yes. Medicare Supplement plans work anywhere in the United States that accepts Original Medicare. There are no network restrictions, so you can see any doctor or specialist nationwide who accepts Medicare patients. This makes Medigap ideal for travelers and those who spend time in multiple states.'
  }
];
