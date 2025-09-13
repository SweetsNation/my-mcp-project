import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Community Health Centers Medicare Advantage Birmingham AL 2025 | FQHC Medicare Plans | Best Coverage Guide',
  description: 'Find Medicare Advantage plans that work with Community Health Centers in Birmingham Alabama. 42 FQHC-friendly plans available. Expert guidance on federally qualified health center Medicare coverage, sliding scale benefits, and care coordination. Compare plans serving COPA Health, Jefferson County Health Department.',
  keywords: 'Community Health Centers Birmingham Alabama, FQHC Medicare Advantage Birmingham, Birmingham community health centers Medicare, Medicare FQHC coverage Alabama, Jefferson County community health Medicare, Birmingham AL Medicare FQHC plans, federally qualified health center Medicare, FQHC sliding scale Medicare, community health center Medicare Advantage, Birmingham FQHC Medicare plans 2025, COPA Health Medicare, Jefferson County Health Department Medicare, dual eligible FQHC plans, Medicare advantage community health, FQHC care coordination Medicare, Birmingham community health Medicare enrollment, Alabama FQHC Medicare specialists, community health center Medicare benefits',
  openGraph: {
    title: 'Community Health Centers Medicare Advantage Birmingham AL 2025 | FQHC Plans',
    description: 'Complete guide to Medicare Advantage plans working with Birmingham Community Health Centers (FQHCs). 42 plans available with expert guidance on FQHC-friendly coverage options.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Birmingham FQHC Medicare Specialists',
    images: [
      {
        url: '/images/birmingham-fqhc-medicare-advantage-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Birmingham Community Health Centers Medicare Advantage Plans 2025 FQHC Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Community Health Centers Medicare Birmingham AL 2025',
    description: 'Birmingham FQHC Medicare Advantage: 42 community health center-friendly plans with sliding scale benefits and care coordination.',
    images: ['/images/birmingham-fqhc-medicare-advantage-2025.jpg']
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/community-health-centers-medicare-advantage-birmingham',
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

const communityHealthCenters = [
  {
    name: 'COPA Health (Community of Practice in Alabama)',
    locations: ['Birmingham', 'Multiple Jefferson County locations'],
    services: ['Primary Care', 'Preventive Services', 'Chronic Disease Management', 'Behavioral Health'],
    specialPrograms: ['Diabetes Management', 'Hypertension Care', 'Mental Health Services'],
    medicareAccepted: true,
    sliding_scale: true
  },
  {
    name: 'Jefferson County Department of Health',
    locations: ['Birmingham', 'Bessemer', 'Homewood'],
    services: ['Primary Care', 'Women\'s Health', 'Immunizations', 'STD Testing'],
    specialPrograms: ['Family Planning', 'WIC Program', 'Tuberculosis Control'],
    medicareAccepted: true,
    sliding_scale: true
  },
  {
    name: 'Community Care Plan',
    locations: ['Birmingham Metro Area'],
    services: ['Primary Care', 'Specialty Referrals', 'Care Coordination', 'Health Education'],
    specialPrograms: ['Care Management', 'Social Services', 'Transportation Assistance'],
    medicareAccepted: true,
    sliding_scale: true
  },
  {
    name: 'Birmingham Health Care',
    locations: ['East Birmingham', 'West Birmingham'],
    services: ['Family Medicine', 'Internal Medicine', 'Pediatrics', 'Dental Services'],
    specialPrograms: ['Chronic Care Management', 'Health Screenings', 'Medication Assistance'],
    medicareAccepted: true,
    sliding_scale: true
  }
];

const fqhcFriendlyPlans = [
  {
    name: 'Humana Gold Plus HMO',
    premium: '$0',
    rating: '4 stars',
    fqhcCoverage: 'Full FQHC network access',
    specialFeatures: ['Care coordination', 'Transportation benefits', 'Health education programs'],
    copay: '$0 FQHC visits'
  },
  {
    name: 'UnitedHealthcare Dual Complete',
    premium: '$0',
    rating: '4.5 stars',
    fqhcCoverage: 'Comprehensive FQHC coverage',
    specialFeatures: ['Dual-eligible focus', 'Social services', 'Over-the-counter allowance'],
    copay: '$0 FQHC visits'
  },
  {
    name: 'Anthem Blue Cross Blue Shield Medicare Advantage',
    premium: '$25',
    rating: '4 stars',
    fqhcCoverage: 'FQHC preferred network',
    specialFeatures: ['Case management', 'Wellness programs', 'Prescription drug coverage'],
    copay: '$5 FQHC visits'
  }
];

const birminghamData = {
  totalBeneficiaries: 125000,
  maPenetration: 38.5,
  fqhcUsers: 15200,
  dualEligibleRate: 28.3,
  averageAge: 71,
  planCount: 42
};

const fqhcBenefits = [
  {
    benefit: 'Sliding Scale Payments',
    description: 'Income-based fee schedules make healthcare affordable regardless of insurance status',
    icon: '💰'
  },
  {
    benefit: 'Comprehensive Primary Care',
    description: 'Full-service primary care including preventive services and chronic disease management',
    icon: '🏥'
  },
  {
    benefit: 'Care Coordination',
    description: 'Integrated services including social services, case management, and specialty referrals',
    icon: '🤝'
  },
  {
    benefit: 'Cultural Competency',
    description: 'Services tailored to diverse communities with multilingual staff and cultural understanding',
    icon: '🌍'
  },
  {
    benefit: 'Transportation Access',
    description: 'Many Medicare Advantage plans offer transportation to FQHC appointments',
    icon: '🚐'
  },
  {
    benefit: 'Behavioral Health Integration',
    description: 'Mental health and substance abuse services integrated with primary care',
    icon: '🧠'
  }
];

export default function CommunityHealthCentersBirminghamPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Community Health Centers Birmingham', href: '/community-health-centers-medicare-advantage-birmingham' },
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
            event_label: 'birmingham_fqhc_medicare',
            custom_parameters: {
              landing_page_type: 'community_health_focus',
              time_to_midpoint: Date.now() - timeOnPage
            }
          });
        }
        
        // Track 90% scroll depth (content completion)
        if (scrollDepth >= 90 && !hasTrackedCompletion) {
          hasTrackedCompletion = true;
          (window as any).gtag?.('event', 'content_completion', {
            event_category: 'engagement',
            event_label: 'birmingham_fqhc_medicare',
            custom_parameters: {
              landing_page_type: 'community_health_focus',
              total_time_on_page: Date.now() - timeOnPage,
              final_scroll_depth: scrollDepth
            }
          });
        }
      }
    };

    // Track page view and initial metrics
    (window as any).gtag?.('event', 'page_view', {
      page_title: 'Community Health Centers Medicare Advantage Birmingham',
      page_location: window.location.href,
      custom_parameters: {
        landing_page_type: 'community_health_focus',
        service_focus: 'fqhc_medicare',
        total_beneficiaries: birminghamData.totalBeneficiaries,
        available_plans: birminghamData.planCount,
        fqhc_users: birminghamData.fqhcUsers,
        dual_eligible_rate: birminghamData.dualEligibleRate,
        ma_penetration_rate: birminghamData.maPenetration,
        county: 'jefferson_county',
        state: 'alabama'
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
          event_label: 'birmingham_fqhc_medicare',
          value: Math.round(finalTimeOnPage / 1000), // Convert to seconds
          custom_parameters: {
            landing_page_type: 'community_health_focus',
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
        pageTitle="Community Health Centers Medicare Advantage Birmingham"
        county="Jefferson County"
        state="Alabama"
        demographics={{
          avgAge: birminghamData.averageAge,
          maPenetrationRate: birminghamData.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: birminghamData.totalBeneficiaries,
          availablePlans: birminghamData.planCount,
          fqhcUsers: birminghamData.fqhcUsers,
          pageType: 'community_health_focus'
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
            "name": "El-Mag Insurance - Birmingham AL Community Health Medicare Specialists",
            "description": "Medicare Advantage specialists focusing on Community Health Center coverage in Birmingham Alabama. Expert guidance on FQHC-friendly Medicare plans and federally qualified health center benefits.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Birmingham",
              "addressRegion": "AL", 
              "postalCode": "35203",
              "addressCountry": "US"
            },
            "telephone": "331-343-2584",
            "url": "https://elmag-insurance.com/community-health-centers-medicare-advantage-birmingham",
            "areaServed": [
              {
                "@type": "AdministrativeArea",
                "name": "Birmingham Metro Area, Alabama"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Jefferson County, Alabama"
              }
            ],
            "serviceType": "Community Health Center Medicare Advantage Guidance and FQHC Plan Consultation",
            "priceRange": "Free FQHC Medicare Consultation",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "134"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.5186",
              "longitude": "-86.8104"
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
                "name": "Which Medicare Advantage plans work with Community Health Centers in Birmingham?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Several Medicare Advantage plans in Birmingham work well with Community Health Centers (FQHCs), including Humana Gold Plus HMO ($0 premium, $0 FQHC copay), UnitedHealthcare Dual Complete ($0 premium, $0 FQHC copay), and Anthem Blue Cross Blue Shield Medicare Advantage ($25 premium, $5 FQHC copay). These plans offer comprehensive FQHC network access and special benefits like transportation and care coordination."
                }
              },
              {
                "@type": "Question",
                "name": "What are the benefits of using Community Health Centers with Medicare?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Community Health Centers (FQHCs) offer Medicare beneficiaries lower copayments, sliding scale fees for non-covered services, comprehensive primary care, integrated behavioral health services, care coordination, cultural competency, and social services support. Many Medicare Advantage plans also provide transportation benefits to FQHC appointments."
                }
              },
              {
                "@type": "Question",
                "name": "What Community Health Centers are available in Birmingham Alabama?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Birmingham area Community Health Centers include COPA Health (Community of Practice in Alabama) with multiple Jefferson County locations, Jefferson County Department of Health serving Birmingham, Bessemer, and Homewood, Community Care Plan covering Birmingham Metro Area, and Birmingham Health Care with East and West Birmingham locations. All accept Medicare and offer sliding scale payments."
                }
              },
              {
                "@type": "Question",
                "name": "How do I choose a Medicare Advantage plan that works with FQHCs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To choose an FQHC-compatible Medicare Advantage plan: (1) Verify your preferred Community Health Center is in the plan's provider network, (2) Compare FQHC copayments and additional benefits, (3) Look for plans with transportation, care coordination, and social services that complement FQHC care. Dual Special Needs Plans (D-SNPs) often have the strongest FQHC partnerships."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between FQHCs and regular doctor offices for Medicare patients?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FQHCs (Federally Qualified Health Centers) differ from regular doctor offices by offering sliding scale fees regardless of insurance, serving medically underserved areas, providing comprehensive services including behavioral health and social services, having community-governed boards, and typically offering lower Medicare copayments. FQHCs must accept Medicare and Medicaid and provide care regardless of ability to pay."
                }
              },
              {
                "@type": "Question",
                "name": "Are there special Medicare Advantage benefits for dual eligible patients at FQHCs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, dual eligible Medicare beneficiaries (qualifying for both Medicare and Medicaid) can access Dual Special Needs Plans (D-SNPs) that often have enhanced FQHC partnerships. These plans typically offer $0 FQHC copays, comprehensive social services, care coordination, transportation benefits, and over-the-counter allowances that work well with Community Health Center services."
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
            "name": "Community Health Centers Medicare Advantage Birmingham AL 2025 - FQHC Guide",
            "description": "Complete guide to Medicare Advantage plans working with Community Health Centers in Birmingham Alabama. 42 FQHC-friendly plans with expert guidance.",
            "url": "https://elmag-insurance.com/community-health-centers-medicare-advantage-birmingham",
            "mainEntity": {
              "@type": "Article",
              "headline": "Community Health Centers Medicare Advantage Birmingham AL 2025: Complete FQHC Guide",
              "author": {
                "@type": "Organization",
                "name": "El-Mag Insurance FQHC Medicare Specialists"
              },
              "publisher": {
                "@type": "Organization",
                "name": "El-Mag Insurance",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://elmag-insurance.com/logo.png"
                }
              },
              "datePublished": "2024-10-01",
              "dateModified": "2024-12-09",
              "articleSection": "Community Health Medicare",
              "keywords": ["Community Health Centers Birmingham", "FQHC Medicare Advantage", "Birmingham community health", "Medicare FQHC plans", "dual eligible FQHC"],
              "about": [
                {
                  "@type": "Thing",
                  "name": "Community Health Centers"
                },
                {
                  "@type": "Thing",
                  "name": "Federally Qualified Health Centers"
                },
                {
                  "@type": "Thing",
                  "name": "Medicare Advantage Plans"
                },
                {
                  "@type": "Place",
                  "name": "Birmingham, Alabama"
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
                  "item": "https://elmag-insurance.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Medicare Advantage",
                  "item": "https://elmag-insurance.com/medicare-advantage"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Community Health Centers Birmingham",
                  "item": "https://elmag-insurance.com/community-health-centers-medicare-advantage-birmingham"
                }
              ]
            }
          }),
        }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Community Health Centers Medicare Advantage Birmingham AL 2025
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Find Medicare Advantage plans that work with Birmingham's Community Health Centers (FQHCs). 
                  42 plans available with comprehensive coverage for federally qualified health center services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                    onClick={() => (window as any).trackLandingPageCTA?.('fqhc_guidance', 'hero', '/contact')}
                  >
                    Get FQHC Plan Guidance
                  </Link>
                  <a 
                    href="tel:331-343-2584" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                    onClick={() => (window as any).trackLandingPagePhoneCall?.('hero')}
                  >
                    Call 331-E-HEALTH
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Market Overview */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Community Health Centers & Medicare in Birmingham
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">{birminghamData.totalBeneficiaries.toLocaleString()}</div>
                  <div className="text-gray-600">Medicare Beneficiaries</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">{birminghamData.fqhcUsers.toLocaleString()}</div>
                  <div className="text-gray-600">FQHC Users</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{birminghamData.planCount}</div>
                  <div className="text-gray-600">MA Plans Available</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{birminghamData.dualEligibleRate}%</div>
                  <div className="text-gray-600">Dual Eligible Rate</div>
                </div>
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-gray-600">
                  Birmingham's Community Health Centers serve as vital healthcare safety nets, providing comprehensive 
                  primary care services to Medicare beneficiaries. Understanding which 
                  <Link href="/medicare-advantage" className="text-primary-600 hover:text-primary-700 underline mx-1">Medicare Advantage plans</Link> 
                  work best with FQHCs is crucial for maintaining continuity of care. For comparison with other regional markets, 
                  explore <Link href="/medicare-advantage/hernando-county-florida" className="text-primary-600 hover:text-primary-700 underline mx-1">Hernando County Florida</Link> 
                  or <Link href="/medicare-advantage/orange-county-florida" className="text-primary-600 hover:text-primary-700 underline mx-1">Orange County Florida</Link> 
                  Medicare Advantage options.
                </p>
              </div>
            </div>
          </section>

          {/* Community Health Centers */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Birmingham Community Health Centers
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {communityHealthCenters.map((center, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{center.name}</h3>
                      <div className="flex gap-2">
                        {center.medicareAccepted && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                            Medicare
                          </span>
                        )}
                        {center.sliding_scale && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                            Sliding Scale
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Locations:</h4>
                      <ul className="text-sm text-gray-600">
                        {center.locations.map((location, locIndex) => (
                          <li key={locIndex}>• {location}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {center.services.map((service, serviceIndex) => (
                          <span key={serviceIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Special Programs:</h4>
                      <ul className="text-sm text-primary-600">
                        {center.specialPrograms.map((program, progIndex) => (
                          <li key={progIndex}>• {program}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What Are FQHCs?</h3>
                <p className="text-gray-600 mb-4">
                  Federally Qualified Health Centers (FQHCs) are community-based organizations that provide comprehensive 
                  primary care and preventive care services in underserved areas. They operate under a federal grant and 
                  must meet specific requirements to serve communities regardless of ability to pay.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">FQHC Requirements:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Serve medically underserved areas</li>
                      <li>• Provide sliding fee scale</li>
                      <li>• Accept Medicare and Medicaid</li>
                      <li>• Community-governed board</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Medicare Benefits at FQHCs:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Lower copayments typically</li>
                      <li>• Comprehensive primary care</li>
                      <li>• Care coordination services</li>
                      <li>• Social services integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FQHC-Friendly Plans */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Top FQHC-Friendly Medicare Advantage Plans
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {fqhcFriendlyPlans.map((plan, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
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
                        <span className="text-gray-600">FQHC Copay:</span>
                        <span className="font-semibold text-green-600">{plan.copay}</span>
                      </div>
                    </div>
                    <div className="border-t pt-3 mb-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">FQHC Coverage:</span> {plan.fqhcCoverage}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Special Features:</h4>
                      <ul className="text-sm text-gray-600">
                        {plan.specialFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                  Considering other Birmingham healthcare options? Compare with major health systems like 
                  <Link href="/uab-vs-st-vincents-medicare-advantage-birmingham" className="text-primary-600 hover:text-primary-700 underline mx-1">UAB vs St. Vincent's Medicare networks</Link> 
                  to understand all your coverage choices. For broader coverage considerations, explore 
                  <Link href="/health-insurance-marketplace" className="text-primary-600 hover:text-primary-700 underline mx-1">Health Insurance Marketplace</Link> 
                  options or consider <Link href="/medicare-supplement-plan-f" className="text-primary-600 hover:text-primary-700 underline mx-1">Medicare Supplement Plan F</Link> 
                  for additional coverage layers.
                </p>
              </div>
            </div>
          </section>

          {/* FQHC Benefits */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Benefits of Community Health Centers for Medicare Recipients
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fqhcBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-center mb-4">
                      <span className="text-4xl mb-3 block">{benefit.icon}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{benefit.benefit}</h3>
                    </div>
                    <p className="text-gray-600 text-sm text-center">{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Why FQHCs Matter for Medicare Beneficiaries</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Cost Savings:</h4>
                    <p className="text-blue-600 text-sm">FQHCs often have lower copayments and offer sliding scale fees for services not covered by Medicare, making healthcare more affordable.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Comprehensive Care:</h4>
                    <p className="text-blue-600 text-sm">Beyond primary care, FQHCs offer integrated services including behavioral health, dental care, and social services in one location.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Choosing the Right Plan */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Choosing an FQHC-Compatible Medicare Plan
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-600">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Verify FQHC Coverage</h3>
                    <p className="text-gray-600 text-sm">Confirm your preferred community health center is included in the plan's provider network.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-600">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Compare Costs</h3>
                    <p className="text-gray-600 text-sm">Review copayments, deductibles, and any additional benefits that complement FQHC services.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-600">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Consider Special Programs</h3>
                    <p className="text-gray-600 text-sm">Look for plans with transportation, care coordination, and social services that enhance FQHC care.</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Considerations for FQHC Users</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
                    <div>
                      <h4 className="font-semibold mb-2">Dual Eligible Benefits:</h4>
                      <p>If you qualify for both Medicare and Medicaid, look for Dual Special Needs Plans (D-SNPs) that often have strong FQHC partnerships.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Specialty Referrals:</h4>
                      <p>Ensure the plan covers referrals from your FQHC to specialists when needed, and understand any authorization requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Regional Context */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Regional Medicare and Community Health Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Alabama Medicare Resources</h3>
                  <p className="text-gray-600 mb-4">
                    Alabama has numerous community health centers serving Medicare beneficiaries. Understanding statewide 
                    resources can help you make informed healthcare decisions.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/medicare-advantage/alabama" className="text-primary-600 hover:text-primary-700 underline">• Alabama Medicare Advantage Options</Link></li>
                    <li><Link href="/medicare-supplement-alabama" className="text-primary-600 hover:text-primary-700 underline">• Alabama Medicare Supplements</Link></li>
                    <li><span className="text-gray-600">• Alabama SHIP (State Health Insurance Assistance Program)</span></li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Retirement Planning Integration</h3>
                  <p className="text-gray-600 mb-4">
                    Healthcare costs are a major consideration in retirement planning. Community health centers can help 
                    reduce these costs while maintaining quality care.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/annuities" className="text-primary-600 hover:text-primary-700 underline">• Retirement Income Annuities</Link></li>
                    <li><Link href="/medicare-cost-calculator" className="text-primary-600 hover:text-primary-700 underline">• Medicare Cost Calculator</Link></li>
                    <li><Link href="/supplemental-insurance" className="text-primary-600 hover:text-primary-700 underline">• Supplemental Insurance Options</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-800 mb-3">Community Health Center Advocacy</h3>
                <p className="text-primary-700 text-sm">
                  Community health centers play a crucial role in healthcare access for underserved populations. 
                  When choosing Medicare plans, supporting FQHC-friendly options helps maintain these vital community resources. 
                  Many Medicare Advantage plans recognize the value of FQHCs and offer enhanced benefits for their use. 
                  Explore similar healthcare system comparisons in other regions like 
                  <Link href="/emory-vs-piedmont-medicare-advantage-atlanta" className="text-primary-600 hover:text-primary-700 underline mx-1">Emory vs Piedmont in Atlanta</Link> 
                  or <Link href="/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-primary-600 hover:text-primary-700 underline mx-1">Vanderbilt vs HCA in Nashville</Link> 
                  to understand regional Medicare dynamics.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Get Expert Help with FQHC-Compatible Medicare Plans
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Our Birmingham Medicare specialists understand the importance of community health centers and can help you 
                find Medicare Advantage plans that work seamlessly with your preferred FQHC providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPageCTA?.('fqhc_expert_guidance', 'footer', '/contact')}
                >
                  Get FQHC Plan Guidance
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPagePhoneCall?.('footer')}
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