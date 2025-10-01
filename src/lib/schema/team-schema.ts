// Schema markup generator for Team and Specialists pages

export interface TeamPageSchema {
  pagePath: string
  pageTitle: string
  pageDescription: string
}

export function generateTeamPageSchema(config: TeamPageSchema) {
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
            name: 'Team',
            item: fullUrl
          }
        ]
      },
      // Organization Schema
      {
        '@type': 'Organization',
        '@id': `${baseUrl}#organization`,
        name: 'El-Mag Insurance',
        url: baseUrl,
        description: 'Professional insurance agency with licensed specialists in Medicare, health insurance, life insurance, disability insurance, business insurance, and auto insurance.',
        telephone: '331-343-2584',
        email: 'info@elmaginsurance.com',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US'
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States'
        },
        knowsAbout: [
          'Medicare Advantage',
          'Medicare Supplement Insurance',
          'Medicare Part D',
          'Health Insurance Marketplace',
          'ACA Coverage',
          'Life Insurance',
          'Disability Insurance',
          'Business Insurance',
          'Auto Insurance'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '331-343-2584',
          contactType: 'Customer Service',
          areaServed: 'US',
          availableLanguage: ['en', 'es'],
          contactOption: 'TollFree'
        }
      }
    ]
  }
}

export function generateSpecialistsPageSchema(config: TeamPageSchema) {
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
            name: 'Specialists',
            item: fullUrl
          }
        ]
      },
      // ProfessionalService Schema
      {
        '@type': 'ProfessionalService',
        '@id': `${fullUrl}#professionalservice`,
        name: 'El-Mag Insurance Specialists',
        description: config.pageDescription,
        url: fullUrl,
        provider: {
          '@type': 'Organization',
          name: 'El-Mag Insurance',
          url: baseUrl
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States'
        },
        serviceType: 'Insurance Consultation',
        telephone: '331-343-2584',
        priceRange: 'Free Consultation',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Insurance Specialist Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Medicare Insurance Specialists',
                description: 'Expert guidance on Medicare Advantage, Medicare Supplement, and Medicare Part D plans'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Health Insurance Marketplace Advisors',
                description: 'ACA Marketplace plan comparison, subsidy qualification, and enrollment assistance'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Life Insurance Agents',
                description: 'Term life and whole life insurance consultation and policy comparison'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Disability Insurance Specialists',
                description: 'Short-term and long-term disability insurance planning and enrollment'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Business Insurance Consultants',
                description: 'Commercial insurance solutions for small and medium businesses'
              }
            }
          ]
        }
      }
    ]
  }
}
