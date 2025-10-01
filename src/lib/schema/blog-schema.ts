// Schema markup generator for Blog pages

export interface BlogPageSchema {
  pagePath: string
  pageTitle: string
  pageDescription: string
}

export interface BlogPostSchema {
  pagePath: string
  pageTitle: string
  pageDescription: string
  datePublished: string
  dateModified?: string
  category: string
  author?: string
  wordCount?: number
  location?: string
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export function generateBlogListingSchema(config: BlogPageSchema) {
  const baseUrl = 'https://elmaginsurance.com'
  const fullUrl = `${baseUrl}${config.pagePath}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
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
            name: 'Blog',
            item: fullUrl
          }
        ]
      },
      // Blog Schema
      {
        '@type': 'Blog',
        '@id': `${fullUrl}#blog`,
        name: config.pageTitle,
        description: config.pageDescription,
        url: fullUrl,
        publisher: {
          '@type': 'Organization',
          name: 'El-Mag Insurance',
          url: baseUrl
        }
      }
    ]
  }
}

export function generateBlogPostSchema(config: BlogPostSchema) {
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
          name: 'Blog',
          item: `${baseUrl}/blog`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: config.pageTitle,
          item: fullUrl
        }
      ]
    },

    // BlogPosting Schema
    {
      '@type': 'BlogPosting',
      '@id': `${fullUrl}#blogpost`,
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
      ...(config.location && {
        locationCreated: {
          '@type': 'Place',
          name: config.location
        }
      }),
      inLanguage: 'en-US',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': fullUrl
      }
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
