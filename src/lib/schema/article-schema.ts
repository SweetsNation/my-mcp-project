// Schema markup generator for Educational Article pages

export interface ArticlePageSchema {
  pagePath: string
  pageTitle: string
  pageDescription: string
  datePublished: string
  dateModified?: string
  category: string
  wordCount?: number
  author?: string
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export function generateArticlePageSchema(config: ArticlePageSchema) {
  const baseUrl = 'https://elmaginsurance.com'
  const fullUrl = `${baseUrl}${config.pagePath}`

  const schemaGraph: any[] = [
    // WebPage Schema
    {
      '@type': 'WebPage',
      '@id': fullUrl,
      url: fullUrl,
      name: config.pageTitle,
      description: config.pageDescription,
      inLanguage: 'en-US',
      breadcrumb: {
        '@id': `${fullUrl}#breadcrumb`
      }
    },

    // BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': `${fullUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Resources',
          item: `${baseUrl}/resources`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: config.pageTitle,
          item: fullUrl
        }
      ]
    },

    // Article Schema
    {
      '@type': 'Article',
      '@id': `${fullUrl}#article`,
      headline: config.pageTitle,
      description: config.pageDescription,
      url: fullUrl,
      datePublished: config.datePublished,
      dateModified: config.dateModified || config.datePublished,
      author: {
        '@type': 'Organization',
        name: config.author || 'El-Mag Insurance',
        url: baseUrl
      },
      publisher: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`
        }
      },
      articleSection: config.category,
      ...(config.wordCount && { wordCount: config.wordCount }),
      inLanguage: 'en-US'
    }
  ]

  // Add FAQPage Schema if FAQs provided
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
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': schemaGraph
  }
}
