'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  name: string
  href: string
  current?: boolean
}

interface BreadcrumbNavigationProps {
  customBreadcrumbs?: BreadcrumbItem[]
  className?: string
}

export default function BreadcrumbNavigation({ 
  customBreadcrumbs, 
  className = '' 
}: BreadcrumbNavigationProps) {
  const pathname = usePathname()
  
  // Generate breadcrumbs from pathname if custom ones aren't provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customBreadcrumbs) {
      return customBreadcrumbs
    }
    
    const pathSegments = pathname.split('/').filter(segment => segment !== '')
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', href: '/' }
    ]
    
    // Map common paths to user-friendly names
    const pathNameMap: { [key: string]: string } = {
      'final-expense': 'Final Expense Insurance',
      'term-life-insurance': 'Term Life Insurance', 
      'medicare-supplement': 'Medicare Supplement',
      'medicare-advantage': 'Medicare Advantage',
      'health-insurance-marketplace': 'Health Insurance Marketplace',
      'supplemental-insurance': 'Supplemental Insurance',
      'social-security-analysis': 'Social Security Analysis',
      'travel-insurance': 'Travel Insurance',
      'trip-cancellation-insurance': 'Trip Cancellation Insurance',
      'emergency-evacuation-insurance': 'Emergency Evacuation Insurance',
      'contact': 'Contact Us',
      'tools': 'Insurance Tools',
      'specialists': 'Insurance Specialists',
      'resources': 'Resources',
      'blog': 'Blog',
      'about': 'About Us'
    }
    
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === pathSegments.length - 1
      const name = pathNameMap[segment] || segment.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
      
      breadcrumbs.push({
        name,
        href: currentPath,
        current: isLast
      })
    })
    
    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  // Generate structured data for breadcrumbs
  const generateStructuredData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `https://www.elmaginsurance.com${item.href}`
      }))
    }
  }

  if (breadcrumbs.length <= 1) {
    return null // Don't show breadcrumbs on home page
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData())
        }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav
        className={`flex ${className}`}
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-1 md:space-x-3 text-sm text-gray-500">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index === 0 && (
                <Home className="h-4 w-4 mr-1 flex-shrink-0" />
              )}
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-1 flex-shrink-0" />
              )}
              {item.current ? (
                <span 
                  className="text-gray-700 font-medium" 
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

// Export specific breadcrumb configurations for common pages
export const FINAL_EXPENSE_BREADCRUMBS: BreadcrumbItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Insurance Products', href: '/insurance-products' },
  { name: 'Final Expense Insurance', href: '/final-expense', current: true }
]

export const TERM_LIFE_BREADCRUMBS: BreadcrumbItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Life Insurance', href: '/life-insurance' },
  { name: 'Term Life Insurance', href: '/term-life-insurance', current: true }
]

export const MEDICARE_BREADCRUMBS: BreadcrumbItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Medicare Plans', href: '/medicare-plans' },
  { name: 'Medicare Supplement', href: '/medicare-supplement', current: true }
]

export const TRIP_CANCELLATION_BREADCRUMBS: BreadcrumbItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Travel Insurance', href: '/travel-insurance' },
  { name: 'Trip Cancellation Insurance', href: '/trip-cancellation-insurance', current: true }
]

export const EMERGENCY_EVACUATION_BREADCRUMBS: BreadcrumbItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Travel Insurance', href: '/travel-insurance' },
  { name: 'Emergency Evacuation Insurance', href: '/emergency-evacuation-insurance', current: true }
]