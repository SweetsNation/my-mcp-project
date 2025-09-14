import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Medicare Advantage Orange County FL 2025 | 58 Plans | Orlando, Winter Park, Apopka | Best Medicare Plans Florida',
  description: 'Compare 58 Medicare Advantage plans in Orange County Florida. Orlando, Winter Park, Apopka, Ocoee coverage. 37 $0 premium plans available. Expert Medicare guidance for Central Florida retirees. Orlando Health, AdventHealth networks covered.',
  keywords: 'Orange County Florida Medicare Advantage, Orlando Medicare plans 2025, Winter Park Medicare Advantage, Apopka Medicare plans, Florida Medicare plans, Orange County FL Medicare enrollment, Medicare Advantage Orlando, Central Florida Medicare, Orlando Health Medicare, AdventHealth Medicare, Florida Blue Medicare Orange County, Humana Medicare Orlando, UnitedHealthcare AARP Orlando, Medicare Advantage enrollment Florida, Orlando metro Medicare plans, Winter Park senior health insurance, Apopka Medicare specialists, Orange County FL Medicare brokers, Florida Medicare Advantage 2025, Orlando area Medicare enrollment, Central Florida retiree health insurance',
  openGraph: {
    title: 'Medicare Advantage Orange County FL 2025 | 58 Plans | Orlando Metro Coverage',
    description: 'Complete guide to Medicare Advantage plans in Orange County Florida. 58 plans available in Orlando, Winter Park, Apopka with 37 $0 premium options and expert guidance.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Central Florida Medicare Specialists',
    images: [
      {
        url: '/images/orange-county-florida-medicare-advantage-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Orange County Florida Medicare Advantage Plans 2025 Orlando Metro'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Medicare Advantage Orange County FL 2025 | 58 Plans',
    description: 'Orange County Florida Medicare Advantage: 58 options with 37 $0 premium plans. Orlando, Winter Park, Apopka coverage.',
    images: ['/images/orange-county-florida-medicare-advantage-2025.jpg']
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/orange-county-florida',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const orangeCountyData = {
  totalBeneficiaries: 245000,
  maPenetration: 47.8,
  averageAge: 73,
  dualEligibleRate: 22.1,
  planCount: 58,
  zeroPremiumPlans: 37,
  averageStarRating: 3.9
};

const topPlans = [
  {
    name: 'Florida Blue Medicare HMO',
    premium: '$0',
    rating: '4.5 stars',
    network: 'Comprehensive Florida network including Orlando Health',
    maxOOP: '$6,900',
    specialFeatures: ['Dental & Vision', 'Wellness programs', 'Transportation']
  },
  {
    name: 'Humana Gold Plus HMO',
    premium: '$0',
    rating: '4 stars',
    network: 'Extensive provider network with AdventHealth partnership',
    maxOOP: '$7,550',
    specialFeatures: ['Fitness programs', 'Over-the-counter allowance', 'Telehealth']
  },
  {
    name: 'UnitedHealthcare AARP Medicare Advantage',
    premium: '$15',
    rating: '4 stars',
    network: 'Large nationwide network with local Orlando providers',
    maxOOP: '$8,300',
    specialFeatures: ['Prescription drug coverage', 'Care coordination', 'Wellness rewards']
  }
];

const healthcareResources = [
  {
    name: 'Orlando Health',
    type: 'Health System',
    locations: ['Orlando Regional Medical Center', 'Dr. P. Phillips Hospital', 'Health Central Hospital'],
    specialties: ['Cancer Care', 'Heart & Vascular', 'Neuroscience', 'Trauma Care']
  },
  {
    name: 'AdventHealth',
    type: 'Health System', 
    locations: ['AdventHealth Orlando', 'AdventHealth Winter Park', 'AdventHealth Apopka'],
    specialties: ['Children\'s Health', 'Women\'s Care', 'Orthopedics', 'Behavioral Health']
  },
  {
    name: 'Orlando VA Medical Center',
    type: 'Veterans Affairs',
    locations: ['Orlando VA Medical Center', 'Multiple CBOC locations'],
    specialties: ['Primary Care', 'Mental Health', 'Specialty Care', 'Emergency Services']
  }
];

export default function OrangeCountyFloridaPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Orange County FL', href: '/medicare-advantage/orange-county-florida' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Track scroll depth and time on page
  React.useEffect(() => {
    let scrollDepth = 0;
    let timeOnPage = Date.now();
    let hasTrackedMidpoint = false;
    let hasTrackedCompletion = false;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentDepth = Math.round((scrollTop / documentHeight) * 100);
      
      if (currentDepth > scrollDepth) {
        scrollDepth = currentDepth;
        
        // Track 50% scroll depth
        if (scrollDepth >= 50 && !hasTrackedMidpoint) {
          hasTrackedMidpoint = true;
          (window as any).gtag?.('event', 'scroll_depth_50', {
            event_category: 'engagement',
            event_label: 'orange_county_florida',
            custom_parameters: {
              landing_page_type: 'county_market',
              time_to_midpoint: Date.now() - timeOnPage
            }
          });
        }
        
        // Track 90% scroll depth (content completion)
        if (scrollDepth >= 90 && !hasTrackedCompletion) {
          hasTrackedCompletion = true;
          (window as any).gtag?.('event', 'content_completion', {
            event_category: 'engagement',
            event_label: 'orange_county_florida',
            custom_parameters: {
              landing_page_type: 'county_market',
              total_time_on_page: Date.now() - timeOnPage,
              final_scroll_depth: scrollDepth
            }
          });
        }
      }
    };

    // Track page view and initial metrics
    (window as any).gtag?.('event', 'page_view', {
      page_title: 'Medicare Advantage Orange County Florida',
      page_location: window.location.href,
      custom_parameters: {
        landing_page_type: 'county_market',
        total_beneficiaries: orangeCountyData.totalBeneficiaries,
        available_plans: orangeCountyData.planCount,
        zero_premium_plans: orangeCountyData.zeroPremiumPlans,
        ma_penetration_rate: orangeCountyData.maPenetration,
        average_age: orangeCountyData.averageAge,
        dual_eligible_rate: orangeCountyData.dualEligibleRate,
        average_star_rating: orangeCountyData.averageStarRating,
        county: 'orange_county',
        state: 'florida',
        metro_area: 'orlando'
      }
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Track time on page when component unmounts
      const finalTimeOnPage = Date.now() - timeOnPage;
      if (finalTimeOnPage > 30000) { // Only track if user spent more than 30 seconds
        (window as any).gtag?.('event', 'time_on_page', {
          event_category: 'engagement',
          event_label: 'orange_county_florida',
          value: Math.round(finalTimeOnPage / 1000), // Convert to seconds
          custom_parameters: {
            landing_page_type: 'county_market',
            final_scroll_depth: scrollDepth
          }
        });
      }
    };
  }, []);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Orange County Florida"
        county="Orange County"
        state="Florida"
        demographics={{
          avgAge: orangeCountyData.averageAge,
          maPenetrationRate: orangeCountyData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: orangeCountyData.totalBeneficiaries,
          availablePlans: orangeCountyData.planCount,
          zeroPremiumPlans: orangeCountyData.zeroPremiumPlans,
          pageType: 'county_market'
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "El-Mag Insurance - Orange County FL Medicare Specialists",
            "description": "Medicare Advantage specialists serving Orange County Florida including Orlando, Winter Park, Apopka, and Ocoee. Expert guidance on 58 available Medicare plans with local healthcare network expertise.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Orlando",
              "addressRegion": "FL",
              "postalCode": "32801",
              "addressCountry": "US"
            },
            "telephone": "331-343-2584",
            "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/orange-county-florida",
            "areaServed": [
              {
                "@type": "AdministrativeArea",
                "name": "Orange County, Florida"
              },
              {
                "@type": "City",
                "name": "Orlando, Florida"
              },
              {
                "@type": "City",
                "name": "Winter Park, Florida"
              },
              {
                "@type": "City",
                "name": "Apopka, Florida"
              },
              {
                "@type": "City",
                "name": "Ocoee, Florida"
              }
            ],
            "serviceType": "Medicare Advantage Plan Comparison and Central Florida Healthcare Network Guidance",
            "priceRange": "Free Medicare Advantage Consultation",
            "paymentAccepted": ["Cash", "Check", "Credit Card"],
            "currenciesAccepted": "USD",
            "openingHours": "Mo-Fr 08:00-18:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "189"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.5383",
              "longitude": "-81.3792"
            },
            "sameAs": [
              "https://www.facebook.com/ElMagInsurance",
              "https://www.linkedin.com/company/el-mag-insurance"
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How many Medicare Advantage plans are available in Orange County Florida for 2025?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There are 58 Medicare Advantage plans available in Orange County Florida for 2025, with 37 plans offering $0 monthly premiums. These plans serve Orlando, Winter Park, Apopka, Ocoee, and surrounding Central Florida communities with comprehensive healthcare network coverage including Orlando Health and AdventHealth systems."
                }
              },
              {
                "@type": "Question",
                "name": "What are the best Medicare Advantage plans in Orlando Florida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Top-rated Medicare Advantage plans in Orange County include Florida Blue Medicare HMO (4.5 stars, $0 premium), Humana Gold Plus HMO (4 stars, $0 premium), and UnitedHealthcare AARP Medicare Advantage (4 stars, $15 premium). These plans offer extensive Florida networks including Orlando Health, AdventHealth, and comprehensive coverage options."
                }
              },
              {
                "@type": "Question",
                "name": "Which hospitals in Orlando accept Medicare Advantage plans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Major hospitals serving Orange County Medicare Advantage beneficiaries include Orlando Health (Orlando Regional Medical Center, Dr. P. Phillips Hospital, Health Central Hospital), AdventHealth facilities (Orlando, Winter Park, Apopka locations), and Orlando VA Medical Center. Most Medicare Advantage plans in Orange County include these major healthcare systems in their networks."
                }
              },
              {
                "@type": "Question",
                "name": "What is the Medicare Advantage enrollment rate in Orange County Florida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Orange County Florida has a 47.8% Medicare Advantage enrollment rate with 245,000 Medicare beneficiaries and an average age of 73. This represents a strong Medicare Advantage market in Central Florida, particularly popular with retirees in Orlando, Winter Park, and surrounding communities."
                }
              },
              {
                "@type": "Question",
                "name": "When is Medicare open enrollment for Orange County Florida residents?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Medicare Open Enrollment runs from October 15 to December 7 each year for Orange County residents. There's also Medicare Advantage Open Enrollment from January 1 to March 31. During these periods, Orlando, Winter Park, Apopka, and Ocoee residents can switch between Medicare Advantage plans or return to Original Medicare plus a supplement plan."
                }
              },
              {
                "@type": "Question",
                "name": "Are there special Medicare Advantage benefits for Florida residents in Orange County?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, many Medicare Advantage plans in Orange County offer Florida-specific benefits including transportation services for medical appointments, coverage for seasonal residents who travel between states, wellness programs suited for active Central Florida retirees, partnerships with popular Florida healthcare systems like Orlando Health and AdventHealth, and additional benefits for hurricane preparedness."
                }
              }
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Medicare Advantage Orange County FL 2025 - Orlando Metro Plans",
            "description": "Compare 58 Medicare Advantage plans in Orange County Florida. Orlando, Winter Park, Apopka coverage with 37 $0 premium options and expert guidance.",
            "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/orange-county-florida",
            "mainEntity": {
              "@type": "Article",
              "headline": "Medicare Advantage Orange County FL 2025: Complete Guide to 58 Available Plans",
              "author": {
                "@type": "Organization",
                "name": "El-Mag Insurance Central Florida Medicare Specialists"
              },
              "publisher": {
                "@type": "Organization",
                "name": "El-Mag Insurance",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/logo.png"
                }
              },
              "datePublished": "2024-10-01",
              "dateModified": "2024-12-09",
              "articleSection": "Medicare Advantage",
              "keywords": ["Orange County Florida Medicare", "Orlando Medicare Advantage", "Winter Park Medicare plans", "Central Florida Medicare", "Florida Medicare Advantage"],
              "about": [
                {
                  "@type": "Place",
                  "name": "Orange County, Florida"
                },
                {
                  "@type": "Place",
                  "name": "Orlando, Florida"
                },
                {
                  "@type": "Place",
                  "name": "Winter Park, Florida"
                },
                {
                  "@type": "Thing",
                  "name": "Medicare Advantage Plans"
                }
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Medicare Advantage",
                  "item": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Orange County FL",
                  "item": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/orange-county-florida"
                }
              ]
            }
          }),
        }}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        <main>
          <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Medicare Advantage Orange County FL 2025: 58 Plans Available
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Compare Medicare Advantage plans in Orange County Florida. 58 plans available in Orlando metro 
                  with 37 $0 premium options. 47.8% Medicare Advantage enrollment rate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/medicare-plan-comparison-tool" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  >
                    Compare 58 Plans
                  </Link>
                  <a 
                    href="tel:331-343-2584" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                  >
                    Call 331-E-HEALTH
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Orange County FL Medicare Market Overview 2025
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">{orangeCountyData.totalBeneficiaries.toLocaleString()}</div>
                  <div className="text-gray-600">Medicare Beneficiaries</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">{orangeCountyData.planCount}</div>
                  <div className="text-gray-600">MA Plans Available</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{orangeCountyData.zeroPremiumPlans}</div>
                  <div className="text-gray-600">$0 Premium Plans</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{orangeCountyData.maPenetration}%</div>
                  <div className="text-gray-600">MA Enrollment Rate</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Orange County's diverse healthcare landscape offers excellent Medicare Advantage options. Explore 
                  <Link href="/medicare-advantage" className="text-primary-600 hover:text-primary-700 underline mx-1">Medicare Advantage plans</Link> 
                  and <Link href="/medicare-supplement-florida" className="text-primary-600 hover:text-primary-700 underline mx-1">Florida Medicare Supplements</Link> 
                  for comprehensive coverage. Compare with other Florida markets like 
                  <Link href="/medicare-advantage/hernando-county-florida" className="text-primary-600 hover:text-primary-700 underline mx-1">Hernando County</Link> 
                  or explore health systems in major metros like 
                  <Link href="/emory-vs-piedmont-medicare-advantage-atlanta" className="text-primary-600 hover:text-primary-700 underline mx-1">Atlanta</Link> 
                  for regional perspective.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Top Medicare Advantage Plans in Orange County
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {topPlans.map((plan, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{plan.name}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Premium:</span>
                        <span className="font-semibold text-primary-600">{plan.premium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating:</span>
                        <span className="font-semibold text-yellow-600">{plan.rating}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Max Out-of-Pocket:</span>
                        <span className="font-semibold text-gray-700">{plan.maxOOP}</span>
                      </div>
                    </div>
                    <div className="border-t pt-3 mb-3">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Network:</span> {plan.network}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Special Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {plan.specialFeatures.map((feature, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Orlando Area Healthcare Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {healthcareResources.map((resource, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{resource.name}</h3>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-semibold">
                        {resource.type}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Locations:</h4>
                      <ul className="text-sm text-gray-600">
                        {resource.locations.map((location, idx) => (
                          <li key={idx}>• {location}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {resource.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Regional Medicare Planning</h3>
                <p className="text-blue-700 mb-4">
                  Orange County offers excellent Medicare options, but planning extends beyond healthcare. Consider comprehensive retirement strategies:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Florida Markets:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/hernando-county-florida" className="hover:underline">Hernando County Plans</Link></li>
                      <li>• <Link href="/medicare-supplement-florida" className="hover:underline">Florida Medicare Supplements</Link></li>
                      <li>• <Link href="/medicare-advantage/san-diego-county" className="hover:underline">San Diego County Medicare</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Retirement Planning:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/annuities" className="hover:underline">Retirement Income Annuities</Link></li>
                      <li>• <Link href="/supplemental-insurance" className="hover:underline">Supplemental Coverage</Link></li>
                      <li>• <Link href="/whole-life-insurance" className="hover:underline">Whole Life Insurance</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Find Your Perfect Medicare Plan in Orange County?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Our Florida Medicare specialists understand Orange County's unique healthcare landscape 
                and can help you navigate your 58 plan options. For broader insurance needs, explore 
                <Link href="/cobra-insurance" className="text-white hover:text-primary-200 underline mx-1">COBRA insurance</Link> 
                for employment transitions or 
                <Link href="/community-health-centers-medicare-advantage-birmingham" className="text-white hover:text-primary-200 underline mx-1">community health center options</Link> 
                for comprehensive care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                >
                  Get Expert Guidance
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                >
                  331-E-HEALTH
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}