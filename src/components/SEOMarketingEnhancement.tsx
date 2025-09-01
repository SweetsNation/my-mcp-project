'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface SEOMarketingEnhancementProps {
  pageType: 'marketplace' | 'supplemental' | 'social-security'
  targetKeywords?: string[]
  localTarget?: string
  competitorUrls?: string[]
}

interface KeywordData {
  primary: string[]
  secondary: string[]
  longTail: string[]
  local: string[]
  seasonal: string[]
}

export default function SEOMarketingEnhancement({ 
  pageType,
  targetKeywords = [],
  localTarget = 'United States',
  competitorUrls = []
}: SEOMarketingEnhancementProps) {
  const pathname = usePathname()
  const [keywordData] = useState<KeywordData>(() => getKeywordData(pageType))

  useEffect(() => {
    // Inject schema markup for better SEO
    injectSchemaMarkup(pageType, pathname)
    
    // Add meta keywords for better targeting
    addMetaKeywords(keywordData)
    
    // Implement structured data for rich snippets
    implementStructuredData(pageType)
    
    // Add FAQ schema if relevant
    addFAQSchema(pageType)
    
    // Implement breadcrumb schema
    addBreadcrumbSchema(pathname)
    
  }, [pageType, pathname, keywordData])

  return (
    <>
      {/* JSON-LD for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema())
        }}
      />
      
      {/* JSON-LD for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServiceSchema(pageType))
        }}
      />
      
      {/* JSON-LD for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLocalBusinessSchema())
        }}
      />
    </>
  )
}

function getKeywordData(pageType: string): KeywordData {
  const keywordMaps = {
    marketplace: {
      primary: [
        'health insurance marketplace',
        'ACA plans',
        'obamacare enrollment',
        'marketplace health insurance',
        'health insurance marketplace plans'
      ],
      secondary: [
        'affordable health insurance',
        'premium tax credits',
        'ACA subsidies',
        'health insurance enrollment',
        'marketplace insurance'
      ],
      longTail: [
        'health insurance marketplace 2025',
        'ACA subsidy calculator',
        'how to enroll in obamacare',
        'health insurance marketplace eligibility',
        'best marketplace health insurance plans'
      ],
      local: [
        'florida health insurance marketplace',
        'texas health insurance marketplace',
        'california health insurance marketplace'
      ],
      seasonal: [
        'open enrollment health insurance',
        'health insurance deadline',
        'ACA enrollment period'
      ]
    },
    supplemental: {
      primary: [
        'supplemental health insurance',
        'accident insurance',
        'critical illness insurance',
        'hospital indemnity insurance'
      ],
      secondary: [
        'gap insurance coverage',
        'additional health coverage',
        'supplemental medical insurance',
        'voluntary benefits'
      ],
      longTail: [
        'supplemental insurance quotes',
        'accident insurance coverage',
        'critical illness insurance benefits',
        'hospital indemnity insurance plans'
      ],
      local: [
        'supplemental insurance agents near me',
        'accident insurance quotes local'
      ],
      seasonal: [
        'supplemental insurance open enrollment',
        'voluntary benefits enrollment'
      ]
    },
    'social-security': {
      primary: [
        'social security benefits analysis',
        'social security claiming strategies',
        'retirement planning',
        'social security optimization'
      ],
      secondary: [
        'when to claim social security',
        'social security calculator',
        'spousal benefits',
        'delayed retirement credits'
      ],
      longTail: [
        'social security benefits consultation',
        'maximize social security benefits',
        'social security claiming age calculator',
        'retirement income planning strategies'
      ],
      local: [
        'social security help near me',
        'retirement planning advisor'
      ],
      seasonal: [
        'social security annual statement',
        'retirement planning 2025'
      ]
    }
  }
  
  return keywordMaps[pageType as keyof typeof keywordMaps] || keywordMaps.marketplace
}

function injectSchemaMarkup(pageType: string, pathname: string) {
  // Remove any existing schema markup
  const existingSchemas = document.querySelectorAll('script[type="application/ld+json"][data-seo-marketing]')
  existingSchemas.forEach(script => script.remove())
}

function addMetaKeywords(keywordData: KeywordData) {
  // Add or update meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta')
    metaKeywords.name = 'keywords'
    document.head.appendChild(metaKeywords)
  }
  
  const allKeywords = [
    ...keywordData.primary,
    ...keywordData.secondary,
    ...keywordData.longTail
  ].join(', ')
  
  metaKeywords.content = allKeywords
}

function implementStructuredData(pageType: string) {
  // Add product/service structured data
  const serviceSchema = getServiceSchema(pageType)
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-seo-marketing', 'true')
  script.textContent = JSON.stringify(serviceSchema)
  document.head.appendChild(script)
}

function addFAQSchema(pageType: string) {
  const faqData = getFAQData(pageType)
  if (faqData.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData
    }
    
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo-marketing', 'true')
    script.textContent = JSON.stringify(faqSchema)
    document.head.appendChild(script)
  }
}

function addBreadcrumbSchema(pathname: string) {
  const pathParts = pathname.split('/').filter(part => part)
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": pathParts.map((part, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      "item": `https://elmag-insurance.com/${pathParts.slice(0, index + 1).join('/')}`
    }))
  }
  
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-seo-marketing', 'true')
  script.textContent = JSON.stringify(breadcrumbList)
  document.head.appendChild(script)
}

function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "El-Mag Insurance",
    "url": "https://elmag-insurance.com",
    "logo": "https://elmag-insurance.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "331-343-2584",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7520 NW 5th St, #201",
      "addressLocality": "Plantation",
      "addressRegion": "FL",
      "postalCode": "33317",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/elmaginsurance",
      "https://www.linkedin.com/company/el-mag-insurance"
    ]
  }
}

function getServiceSchema(pageType: string) {
  const serviceData = {
    marketplace: {
      name: "Health Insurance Marketplace Enrollment",
      description: "Expert assistance with ACA health insurance marketplace enrollment, plan comparison, and subsidy optimization.",
      serviceType: "Insurance Brokerage"
    },
    supplemental: {
      name: "Supplemental Health Insurance",
      description: "Accident, critical illness, hospital indemnity, and gap insurance coverage to supplement your primary health insurance.",
      serviceType: "Insurance Brokerage"
    },
    'social-security': {
      name: "Social Security Benefits Analysis",
      description: "Professional Social Security claiming strategy analysis and retirement planning consultation.",
      serviceType: "Financial Planning"
    }
  }
  
  const service = serviceData[pageType as keyof typeof serviceData]
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service?.name || "Insurance Services",
    "description": service?.description || "Professional insurance and financial planning services",
    "provider": {
      "@type": "Organization",
      "name": "El-Mag Insurance"
    },
    "serviceType": service?.serviceType || "Insurance Brokerage",
    "areaServed": "United States"
  }
}

function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "El-Mag Insurance",
    "description": "Licensed insurance agency providing health insurance, Medicare, and retirement planning services nationwide.",
    "url": "https://elmag-insurance.com",
    "telephone": "331-343-2584",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7520 NW 5th St, #201",
      "addressLocality": "Plantation",
      "addressRegion": "FL",
      "postalCode": "33317",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.1224,
      "longitude": -80.2330
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "Free consultation"
  }
}

function getFAQData(pageType: string) {
  const faqData = {
    marketplace: [
      {
        "@type": "Question",
        "name": "What is the Health Insurance Marketplace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Health Insurance Marketplace is a government-run exchange where individuals and families can shop for health insurance plans, compare coverage, and apply for premium tax credits and subsidies."
        }
      },
      {
        "@type": "Question",
        "name": "When can I enroll in Marketplace health insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Open Enrollment runs from November 1 through January 15 each year. You may also qualify for Special Enrollment if you have qualifying life events like job loss, marriage, or having a baby."
        }
      }
    ],
    supplemental: [
      {
        "@type": "Question",
        "name": "What does supplemental health insurance cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Supplemental insurance provides additional coverage for specific events like accidents, critical illnesses, or hospital stays. It helps fill gaps in your primary health insurance coverage."
        }
      }
    ],
    'social-security': [
      {
        "@type": "Question",
        "name": "When should I claim Social Security benefits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The optimal claiming age depends on your health, financial situation, and retirement goals. You can claim as early as 62 with reduced benefits, at full retirement age, or delay until 70 for maximum benefits."
        }
      }
    ]
  }
  
  return faqData[pageType as keyof typeof faqData] || []
}

// Export helper functions for manual SEO optimization
export const SEOHelpers = {
  addStructuredData: (schema: object) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  },
  
  updateMetaDescription: (description: string) => {
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement
    if (metaDesc) {
      metaDesc.content = description
    }
  },
  
  addCanonicalUrl: (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  },
  
  optimizeImages: () => {
    document.querySelectorAll('img').forEach(img => {
      if (!img.alt) {
        const src = img.src.toLowerCase()
        if (src.includes('insurance')) img.alt = 'Insurance services'
        if (src.includes('health')) img.alt = 'Health insurance coverage'
        if (src.includes('medicare')) img.alt = 'Medicare insurance plans'
      }
    })
  }
}