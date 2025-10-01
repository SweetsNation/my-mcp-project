// Schema markup generators for Home, About, and Contact pages

export function generateHomePageSchema() {
  const baseUrl = 'https://elmaginsurance.com'

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization Schema
      {
        '@type': 'Organization',
        '@id': `${baseUrl}#organization`,
        name: 'El-Mag Insurance',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`
        },
        telephone: '331-343-2584',
        email: 'info@elmaginsurance.com',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US'
        },
        sameAs: [
          'https://www.facebook.com/elmaginsurance',
          'https://www.linkedin.com/company/el-mag-insurance'
        ],
        areaServed: {
          '@type': 'Country',
          name: 'United States'
        }
      },
      // WebSite Schema
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}#website`,
        url: baseUrl,
        name: 'El-Mag Insurance',
        description: 'Find the perfect Medicare Advantage, Medicare Supplement, and health insurance plans. Expert guidance and personalized service.',
        publisher: {
          '@id': `${baseUrl}#organization`
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/search?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      },
      // WebPage Schema
      {
        '@type': 'WebPage',
        '@id': baseUrl,
        url: baseUrl,
        name: 'El-Mag Insurance - Medicare Advantage & Health Insurance Plans',
        description: 'Find your perfect Medicare Advantage plan with $0 premiums, dental, vision, and fitness benefits. Expert agents help you compare and enroll.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${baseUrl}#website`
        }
      }
    ]
  }
}

export function generateAboutPageSchema() {
  const baseUrl = 'https://elmaginsurance.com'
  const aboutUrl = `${baseUrl}/about`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // WebPage Schema
      {
        '@type': 'WebPage',
        '@id': aboutUrl,
        url: aboutUrl,
        name: 'About Us - El-Mag Insurance',
        description: 'Learn about El-Mag Insurance, our mission to help you find the perfect Medicare and health insurance plans, and our team of licensed insurance professionals.',
        inLanguage: 'en-US',
        breadcrumb: {
          '@id': `${aboutUrl}#breadcrumb`
        }
      },
      // BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${aboutUrl}#breadcrumb`,
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
            name: 'About Us',
            item: aboutUrl
          }
        ]
      },
      // AboutPage Schema
      {
        '@type': 'AboutPage',
        '@id': `${aboutUrl}#aboutpage`,
        mainEntity: {
          '@type': 'Organization',
          '@id': `${baseUrl}#organization`,
          name: 'El-Mag Insurance',
          description: 'El-Mag Insurance is a trusted insurance agency specializing in Medicare Advantage, Medicare Supplement, health insurance, and life insurance. We provide expert guidance and personalized service to help you find the perfect coverage.',
          url: baseUrl,
          telephone: '331-343-2584',
          email: 'info@elmaginsurance.com',
          areaServed: {
            '@type': 'Country',
            name: 'United States'
          },
          knowsAbout: [
            'Medicare Advantage',
            'Medicare Supplement Insurance',
            'Medicare Part D',
            'Health Insurance',
            'Life Insurance',
            'Travel Insurance',
            'Long-Term Care Insurance'
          ]
        }
      }
    ]
  }
}

export function generateContactPageSchema() {
  const baseUrl = 'https://elmaginsurance.com'
  const contactUrl = `${baseUrl}/contact`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // WebPage Schema
      {
        '@type': 'WebPage',
        '@id': contactUrl,
        url: contactUrl,
        name: 'Contact Us - El-Mag Insurance',
        description: 'Get in touch with our Medicare Advantage experts. Call, email, or schedule a consultation to find the perfect plan for your needs.',
        inLanguage: 'en-US',
        breadcrumb: {
          '@id': `${contactUrl}#breadcrumb`
        }
      },
      // BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${contactUrl}#breadcrumb`,
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
            name: 'Contact Us',
            item: contactUrl
          }
        ]
      },
      // ContactPage Schema
      {
        '@type': 'ContactPage',
        '@id': `${contactUrl}#contactpage`,
        mainEntity: {
          '@type': 'Organization',
          '@id': `${baseUrl}#organization`,
          name: 'El-Mag Insurance',
          telephone: '331-343-2584',
          email: 'info@elmaginsurance.com',
          url: baseUrl,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '331-343-2584',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: ['en', 'es'],
            contactOption: 'TollFree'
          }
        }
      }
    ]
  }
}
