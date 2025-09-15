'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { trackInsuranceContentEngagement } from '@/lib/analytics'

interface KeywordOptimizedContentProps {
  insuranceType: 'whole_life' | 'long_term_care'
  contentType: 'hero' | 'features' | 'comparison' | 'faq' | 'cta'
  location?: string
}

export default function KeywordOptimizedContent({
  insuranceType,
  contentType,
  location = 'nationwide'
}: KeywordOptimizedContentProps) {
  const [visibilityTracked, setVisibilityTracked] = useState(false)

  // High-converting keyword phrases based on research
  const getOptimizedContent = () => {
    const baseContent = {
      whole_life: {
        hero: {
          headline: "Whole Life Insurance 2025: Permanent Coverage with Guaranteed Cash Value",
          subheadline: "Lock in today's rates with permanent life insurance that builds wealth while protecting your family. Get guaranteed coverage with fixed premiums and tax-advantaged cash value growth.",
          keywords: ["whole life insurance", "permanent life insurance", "guaranteed cash value", "fixed premiums", "tax-advantaged"],
          cta: "Get Your Whole Life Insurance Quote"
        },
        features: {
          title: "Why Choose Whole Life Insurance Over Term Life?",
          content: [
            {
              title: "Permanent Coverage That Never Expires",
              description: "Unlike term life insurance, whole life provides guaranteed lifetime protection with premiums that never increase.",
              keywords: ["permanent coverage", "lifetime protection", "guaranteed premiums"]
            },
            {
              title: "Cash Value Growth with Guaranteed Returns",
              description: "Build wealth with guaranteed cash value that grows tax-deferred and can be accessed through policy loans.",
              keywords: ["cash value growth", "guaranteed returns", "tax-deferred", "policy loans"]
            },
            {
              title: "Fixed Premiums for Predictable Planning",
              description: "Enjoy the security of fixed premiums that remain the same throughout your entire life, perfect for retirement planning.",
              keywords: ["fixed premiums", "retirement planning", "predictable costs"]
            }
          ]
        },
        comparison: {
          title: "Whole Life vs Term Life Insurance: Which Is Right for You?",
          intro: "Compare permanent whole life insurance with temporary term life coverage to find the best life insurance solution.",
          keywords: ["whole life vs term life", "permanent vs temporary", "life insurance comparison"]
        },
        faq: {
          title: "Frequently Asked Questions About Whole Life Insurance",
          questions: [
            {
              question: "What is whole life insurance and how does cash value work?",
              answer: "Whole life insurance is permanent life insurance with guaranteed cash value accumulation. Part of your premium builds cash value that grows at a guaranteed rate and can be borrowed against or withdrawn.",
              keywords: ["what is whole life insurance", "cash value work", "guaranteed rate"]
            },
            {
              question: "Is whole life insurance worth it compared to term life insurance?",
              answer: "Whole life insurance is worth it if you need permanent coverage, want to build cash value, and prefer predictable premiums. Term life is better for temporary needs and lower budgets.",
              keywords: ["whole life insurance worth it", "compared to term life", "permanent coverage"]
            }
          ]
        },
        cta: {
          headline: "Get Your Personalized Whole Life Insurance Quote Today",
          description: "Compare rates from top-rated insurance companies and find the best whole life insurance policy for your needs and budget.",
          urgency: "Premiums increase with age - lock in today's rates",
          keywords: ["whole life insurance quote", "compare rates", "top-rated insurance companies"]
        }
      },
      long_term_care: {
        hero: {
          headline: "Long-Term Care Insurance 2025: Protect Your Retirement from Nursing Home Costs",
          subheadline: "Don't let long-term care costs devastate your savings. Get comprehensive coverage for nursing homes, assisted living, and home care starting at $150/month.",
          keywords: ["long-term care insurance", "nursing home costs", "assisted living coverage", "home care insurance"],
          cta: "Calculate Your LTC Insurance Cost"
        },
        features: {
          title: "Comprehensive Long-Term Care Coverage Options",
          content: [
            {
              title: "Nursing Home and Assisted Living Coverage",
              description: "Comprehensive benefits for skilled nursing facilities, memory care, and assisted living communities with daily benefit amounts up to $400.",
              keywords: ["nursing home coverage", "assisted living benefits", "memory care", "daily benefit amounts"]
            },
            {
              title: "Home and Community-Based Care Services",
              description: "Stay in your home longer with coverage for home health aides, adult day care, and home modifications.",
              keywords: ["home care services", "home health aides", "adult day care", "aging in place"]
            },
            {
              title: "Inflation Protection and Flexible Benefits",
              description: "Protect against rising care costs with inflation protection and choose benefit periods from 2 years to lifetime coverage.",
              keywords: ["inflation protection", "rising care costs", "benefit periods", "lifetime coverage"]
            }
          ]
        },
        comparison: {
          title: "Traditional vs Hybrid Long-Term Care Insurance: Find the Right Fit",
          intro: "Compare traditional LTC insurance with hybrid life insurance policies that include long-term care benefits.",
          keywords: ["traditional vs hybrid", "LTC insurance types", "hybrid life insurance"]
        },
        faq: {
          title: "Long-Term Care Insurance Questions and Answers",
          questions: [
            {
              question: "What does long-term care insurance cover and when do benefits start?",
              answer: "Long-term care insurance covers nursing homes, assisted living, home care, and adult day care. Benefits typically begin after you cannot perform 2 of 6 activities of daily living or have cognitive impairment.",
              keywords: ["what does LTC insurance cover", "when do benefits start", "activities of daily living"]
            },
            {
              question: "How much does long-term care insurance cost in 2025?",
              answer: "Long-term care insurance costs vary by age, health, and coverage. Average annual premiums range from $1,500-$5,000, with most people paying around $2,800 for comprehensive coverage.",
              keywords: ["LTC insurance cost 2025", "average premiums", "comprehensive coverage cost"]
            }
          ]
        },
        cta: {
          headline: "Protect Your Family's Financial Future with Long-Term Care Insurance",
          description: "Get personalized quotes from top-rated insurance companies and secure your retirement against devastating care costs.",
          urgency: "70% of seniors need long-term care - don't wait until it's too late",
          keywords: ["protect financial future", "LTC insurance quotes", "secure retirement"]
        }
      }
    }

    return baseContent[insuranceType][contentType]
  }

  const content = getOptimizedContent()

  // Track content engagement
  useEffect(() => {
    const handleScroll = () => {
      if (!visibilityTracked) {
        const element = document.getElementById(`optimized-content-${contentType}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setVisibilityTracked(true)
            trackInsuranceContentEngagement(insuranceType, 'keyword_optimized_content', {
              timeSpent: Date.now(),
              scrollDepth: Math.round((window.pageYOffset / document.documentElement.scrollHeight) * 100),
              interactionCount: 0,
              sectionCompletion: true,
              contentType: contentType
            })
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial visibility

    return () => window.removeEventListener('scroll', handleScroll)
  }, [insuranceType, contentType, visibilityTracked])

  const renderContent = () => {
    switch (contentType) {
      case 'hero':
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {content.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              {content.subheadline}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {content.keywords.map((keyword, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {keyword}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
            >
              {content.cta}
            </Link>
          </div>
        )

      case 'features':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {content.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {content.content.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.keywords.map((keyword, kidx) => (
                      <span key={kidx} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'comparison':
        return (
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {content.title}
            </h2>
            <p className="text-lg text-gray-700 text-center mb-6">
              {content.intro}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {content.keywords.map((keyword, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )

      case 'faq':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {content.title}
            </h2>
            <div className="space-y-6">
              {content.questions.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {faq.answer}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {faq.keywords.map((keyword, kidx) => (
                      <span key={kidx} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'cta':
        return (
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              {content.headline}
            </h2>
            <p className="text-xl text-blue-100 mb-2">
              {content.description}
            </p>
            <p className="text-lg text-yellow-200 mb-6 font-semibold">
              {content.urgency}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {content.keywords.map((keyword, index) => (
                <span key={index} className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {keyword}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:331-343-2584"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call Now: 331-E-HEALTH
              </a>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div id={`optimized-content-${contentType}`} className="keyword-optimized-content">
      {renderContent()}

      {/* SEO Enhancement Indicator */}
      <div className="mt-4 text-center">
        <div className="inline-flex items-center text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          SEO Optimized for {insuranceType.replace('_', ' ')} keywords
        </div>
      </div>
    </div>
  )
}