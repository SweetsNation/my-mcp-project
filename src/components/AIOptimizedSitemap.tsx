import React from 'react'

interface SiteMapItem {
  url: string
  title: string
  description: string
  category: 'ai-optimized' | 'seasonal' | 'educational' | 'tools'
  keywords: string[]
  lastModified: string
  priority: number
}

const sitemapData: SiteMapItem[] = [
  // AI-Optimized Pages
  {
    url: '/ai-medicare-assistant',
    title: 'AI Medicare Assistant - Instant Expert Answers',
    description: 'AI-powered Medicare guidance providing instant expert answers to Medicare questions',
    category: 'ai-optimized',
    keywords: ['AI Medicare assistant', 'Medicare AI help', 'automated Medicare guidance', 'AI healthcare assistant'],
    lastModified: '2024-12-01',
    priority: 1.0
  },
  {
    url: '/ask-ai-medicare-questions',
    title: 'Ask AI Medicare Questions - Get Instant Answers',
    description: 'Ask any Medicare question and get instant AI-powered expert answers. Free Medicare help available 24/7.',
    category: 'ai-optimized',
    keywords: ['ask AI Medicare questions', 'Medicare AI help', 'AI Medicare answers', 'free Medicare questions'],
    lastModified: '2024-12-01',
    priority: 1.0
  },
  
  // Seasonal Content
  {
    url: '/medicare-open-enrollment-2025',
    title: 'Medicare Open Enrollment 2025 - Critical Deadline Information',
    description: 'Complete guide to Medicare Open Enrollment 2025. Deadlines, changes, plan comparisons, and enrollment assistance.',
    category: 'seasonal',
    keywords: ['Medicare Open Enrollment 2025', 'Medicare enrollment deadline', 'Medicare plan changes'],
    lastModified: '2024-11-01',
    priority: 0.9
  },
  {
    url: '/medicare-deadline-december-7',
    title: 'Medicare Deadline December 7 - URGENT Action Required',
    description: 'Critical Medicare deadline December 7, 2024. What you must do before the deadline and consequences of missing it.',
    category: 'seasonal',
    keywords: ['Medicare deadline December 7', 'Medicare enrollment deadline', 'Medicare deadline 2024'],
    lastModified: '2024-11-15',
    priority: 0.9
  },
  {
    url: '/medicare-2025-changes',
    title: 'Medicare Changes 2025 - What Every Beneficiary Needs to Know',
    description: 'Major Medicare changes for 2025 including the new $2,000 Part D cap, premium increases, and benefit updates.',
    category: 'seasonal',
    keywords: ['Medicare changes 2025', '$2000 Part D cap', 'Medicare updates 2025', 'Medicare benefits 2025'],
    lastModified: '2024-10-01',
    priority: 0.8
  },
  
  // Educational Content
  {
    url: '/medicare-lis-program',
    title: 'Medicare LIS Program - Low Income Subsidy Guide 2025',
    description: 'Complete guide to Medicare Low Income Subsidy (LIS) program. Qualification requirements, benefits, and application process.',
    category: 'educational',
    keywords: ['Medicare LIS program', 'Medicare Low Income Subsidy', 'Medicare Extra Help', 'prescription drug assistance'],
    lastModified: '2024-10-01',
    priority: 0.7
  },
  {
    url: '/medicare-extra-help-qualification-quiz',
    title: 'Medicare Extra Help Qualification Quiz - Free Assessment',
    description: 'Take our free Medicare Extra Help qualification quiz to see if you qualify for prescription drug cost assistance.',
    category: 'educational',
    keywords: ['Medicare Extra Help quiz', 'LIS eligibility quiz', 'Medicare qualification assessment'],
    lastModified: '2024-10-01',
    priority: 0.7
  },
  {
    url: '/medicare-part-d-formulary-lookup',
    title: 'Medicare Part D Formulary Lookup Guide - Find Your Drugs',
    description: 'Complete guide to checking Medicare Part D formularies. Find out if your medications are covered and understand tiers.',
    category: 'educational',
    keywords: ['Medicare Part D formulary', 'formulary lookup', 'Medicare drug coverage', 'prescription coverage check'],
    lastModified: '2024-10-01',
    priority: 0.6
  },
  
  // Tools and Comparisons
  {
    url: '/medicare-plan-comparison-tool',
    title: 'Medicare Plan Comparison Tool - Find Your Best Plan',
    description: 'Comprehensive guide to comparing Medicare plans with AI-enhanced recommendations and cost analysis.',
    category: 'tools',
    keywords: ['Medicare plan comparison', 'compare Medicare plans', 'Medicare plan finder', 'best Medicare plan'],
    lastModified: '2024-11-01',
    priority: 0.8
  },
  {
    url: '/medicare-open-enrollment-checklist',
    title: 'Medicare Open Enrollment Checklist - Complete 5-Phase Guide',
    description: 'Interactive 5-phase checklist for Medicare Open Enrollment. Document gathering, plan comparison, and enrollment steps.',
    category: 'tools',
    keywords: ['Medicare enrollment checklist', 'Medicare Open Enrollment steps', 'Medicare enrollment guide'],
    lastModified: '2024-11-01',
    priority: 0.7
  }
]

export const AIOptimizedSitemap: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'El-Mag Insurance - Medicare Guidance',
    url: 'https://el-mag.com',
    description: 'AI-powered Medicare guidance, seasonal enrollment assistance, and comprehensive Medicare education resources.',
    mainEntity: sitemapData.map(item => ({
      '@type': 'WebPage',
      '@id': `https://el-mag.com${item.url}`,
      name: item.title,
      description: item.description,
      keywords: item.keywords.join(', '),
      dateModified: item.lastModified,
      about: {
        '@type': 'Thing',
        name: 'Medicare Insurance Guidance'
      }
    })),
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: 'https://el-mag.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Medicare beneficiaries and those approaching Medicare eligibility'
    }
  }

  const categorizedPages = {
    'ai-optimized': sitemapData.filter(item => item.category === 'ai-optimized'),
    'seasonal': sitemapData.filter(item => item.category === 'seasonal'),
    'educational': sitemapData.filter(item => item.category === 'educational'),
    'tools': sitemapData.filter(item => item.category === 'tools')
  }

  return (
    <>
      {/* AI-Readable Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Human-Readable Sitemap */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">🗺️ Site Navigation - AI-Optimized Content</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* AI-Optimized Pages */}
          <div>
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
              🤖 AI-Powered Medicare Guidance
            </h4>
            <div className="space-y-2">
              {categorizedPages['ai-optimized'].map((item, index) => (
                <div key={index} className="bg-purple-50 p-3 rounded-lg">
                  <h5 className="font-medium text-purple-800 text-sm">{item.title}</h5>
                  <p className="text-purple-700 text-xs">{item.description}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.keywords.slice(0, 3).map((keyword, i) => (
                      <span key={i} className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seasonal Content */}
          <div>
            <h4 className="font-semibold text-red-800 mb-3 flex items-center">
              ⏰ Time-Critical Medicare Information
            </h4>
            <div className="space-y-2">
              {categorizedPages['seasonal'].map((item, index) => (
                <div key={index} className="bg-red-50 p-3 rounded-lg">
                  <h5 className="font-medium text-red-800 text-sm">{item.title}</h5>
                  <p className="text-red-700 text-xs">{item.description}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.keywords.slice(0, 3).map((keyword, i) => (
                      <span key={i} className="bg-red-200 text-red-800 text-xs px-2 py-1 rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Content */}
          <div>
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
              📚 Medicare Education Resources
            </h4>
            <div className="space-y-2">
              {categorizedPages['educational'].map((item, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-medium text-blue-800 text-sm">{item.title}</h5>
                  <p className="text-blue-700 text-xs">{item.description}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.keywords.slice(0, 3).map((keyword, i) => (
                      <span key={i} className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools and Comparisons */}
          <div>
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              🔧 Interactive Medicare Tools
            </h4>
            <div className="space-y-2">
              {categorizedPages['tools'].map((item, index) => (
                <div key={index} className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-medium text-green-800 text-sm">{item.title}</h5>
                  <p className="text-green-700 text-xs">{item.description}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.keywords.slice(0, 3).map((keyword, i) => (
                      <span key={i} className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">🔍 AI Search Optimization Features</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Structured data markup for enhanced AI understanding</li>
            <li>• Natural language processing-friendly content</li>
            <li>• Conversational query optimization</li>
            <li>• Real-time Medicare updates and changes</li>
            <li>• Cross-referenced content for comprehensive coverage</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default AIOptimizedSitemap