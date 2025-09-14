import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';
import { 
  trackMedicareAdvancedPageView, 
  trackMedicareAdvancedCTA,
  setupMedicareAdvancedScrollTracking 
} from '@/lib/analytics/medicareAdvancedTracking';

export const metadata: Metadata = {
  title: 'Best Grady Health System Medicare Advantage Plans Atlanta GA 2025 | Safety Net Healthcare | Level 1 Trauma Center',
  description: 'Find the best Medicare Advantage plans that include Grady Health System in Atlanta GA 2025. Compare 42+ plans covering Grady Hospital Level 1 trauma center, community clinics, and safety net healthcare. Serving uninsured, underinsured, and Medicare beneficiaries with comprehensive community-based care and emergency services.',
  keywords: 'Grady Health System Medicare Advantage Atlanta, best Grady Hospital Medicare plans Atlanta 2025, safety net Medicare Advantage Atlanta, Level 1 trauma center Medicare Atlanta, Grady Medicare plans 2025, uninsured Medicare Advantage Atlanta, underinsured Medicare Atlanta, community health Medicare Atlanta, Grady clinics Medicare coverage Atlanta, public hospital Medicare Advantage Atlanta, Morehouse Medicare plans Atlanta, emergency care Medicare Advantage Atlanta, Grady ambulatory care Medicare Atlanta, Grady Memorial Hospital Medicare plans, Georgia safety net healthcare Medicare, Atlanta public hospital Medicare coverage, Grady neighborhood health centers Medicare, community healthcare Medicare Atlanta, low income Medicare plans Atlanta, charity care Medicare Advantage Atlanta, indigent care Medicare Atlanta, Grady urgent care Medicare coverage, downtown Atlanta Medicare plans, Grady specialty clinics Medicare, HIV care Medicare Advantage Atlanta, mental health Medicare Grady Atlanta, substance abuse treatment Medicare Atlanta, Grady rehabilitation services Medicare',
  openGraph: {
    title: 'Grady Health System Medicare Advantage Atlanta GA 2025 | Safety Net Provider',
    description: 'Medicare Advantage plans that include Grady Health System in Atlanta. Comprehensive community care, Level 1 trauma center, and safety net healthcare for Medicare beneficiaries.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Grady Medicare Specialists',
    images: [
      {
        url: '/images/grady-health-system-medicare-advantage-atlanta-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Grady Health System Medicare Advantage Atlanta GA 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Grady Health System Medicare Advantage Atlanta GA 2025',
    description: 'Medicare plans including Grady Health System: Level 1 trauma care, community health, safety net provider.',
    images: ['/images/grady-health-system-medicare-advantage-atlanta-2025.jpg']
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/grady-health-system-medicare-advantage-atlanta',
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

const gradyData = {
  totalBeneficiaries: 285000,
  safetyNetPopulation: 45.2,
  uninsuredRate: 18.5,
  planCount: 52,
  gradyNetworkPlans: 28,
  emergencyVisits: 165000
};

const gradyServices = [
  {
    service: 'Level 1 Trauma Center',
    description: 'Only Level 1 trauma center in Georgia, providing the highest level of emergency care',
    coverage: '24/7 emergency services',
    specialties: ['Trauma surgery', 'Neurosurgery', 'Cardiac surgery', 'Burn care'],
    icon: '🚑'
  },
  {
    service: 'Primary Care Network',
    description: 'Comprehensive primary care through Grady community health centers',
    coverage: '22 neighborhood health centers',
    specialties: ['Family medicine', 'Internal medicine', 'Pediatrics', 'Women\'s health'],
    icon: '👩‍⚕️'
  },
  {
    service: 'Specialty Care Services',
    description: 'Comprehensive specialty care including rare disease treatment',
    coverage: 'Outpatient specialty clinics',
    specialties: ['Cardiology', 'Oncology', 'Diabetes care', 'HIV care'],
    icon: '🏥'
  },
  {
    service: 'Behavioral Health',
    description: 'Mental health and substance abuse treatment services',
    coverage: 'Inpatient and outpatient services',
    specialties: ['Psychiatry', 'Psychology', 'Addiction treatment', 'Crisis intervention'],
    icon: '🧠'
  },
  {
    service: 'Morehouse Partnership',
    description: 'Academic medical center partnership with Morehouse School of Medicine',
    coverage: 'Teaching hospital services',
    specialties: ['Medical education', 'Research', 'Community health', 'Preventive care'],
    icon: '🎓'
  },
  {
    service: 'Community Outreach',
    description: 'Community health programs and outreach services',
    coverage: 'Metro Atlanta communities',
    specialties: ['Health education', 'Screening programs', 'Immunizations', 'Care coordination'],
    icon: '🤝'
  }
];

const gradyLocations = [
  {
    facility: 'Grady Memorial Hospital',
    type: 'Main Hospital Campus',
    address: '80 Jesse Hill Jr Dr SE, Atlanta, GA 30303',
    services: ['Level 1 Trauma', 'Emergency Department', 'Inpatient Services', 'Intensive Care'],
    specialties: ['Trauma Surgery', 'Neurology', 'Cardiology', 'Oncology']
  },
  {
    facility: 'Grady Ponce de Leon Center',
    type: 'HIV/AIDS Specialty Care',
    address: '341 Ponce de Leon Ave NE, Atlanta, GA 30308',
    services: ['HIV Care', 'Infectious Disease', 'Pharmacy', 'Social Services'],
    specialties: ['HIV Treatment', 'Hepatitis Care', 'Prevention Services']
  },
  {
    facility: 'Grady Cobb Community Health Center',
    type: 'Community Health Center',
    address: '1525 S Marietta Pkwy SE, Marietta, GA 30060',
    services: ['Primary Care', 'Dental', 'Behavioral Health', 'Pharmacy'],
    specialties: ['Family Medicine', 'Pediatrics', 'Women\'s Health']
  },
  {
    facility: 'Grady East Point Community Health Center',
    type: 'Community Health Center',
    address: '3242 E Point St, East Point, GA 30344',
    services: ['Primary Care', 'Chronic Disease Management', 'Lab Services'],
    specialties: ['Diabetes Care', 'Hypertension Management', 'Preventive Care']
  }
];

const gradyMedicareAdvantagePartners = [
  {
    insurer: 'Anthem Blue Cross Blue Shield',
    planName: 'Anthem MediBlue Access',
    premium: '$0',
    gradyAccess: 'Full network access',
    coverage: ['Grady Hospital emergency services', 'Community health centers', 'Specialty clinics'],
    benefits: ['$0 emergency visits', 'Transportation to Grady facilities', 'Care coordination']
  },
  {
    insurer: 'Humana',
    planName: 'Humana Honor Choice',
    premium: '$15',
    gradyAccess: 'Emergency and urgent care',
    coverage: ['Emergency department', 'Trauma services', 'Selected specialists'],
    benefits: ['Emergency transport', 'Urgent care access', 'Pharmacy benefits']
  },
  {
    insurer: 'UnitedHealthcare',
    planName: 'UnitedHealthcare AARP Complete',
    premium: '$0',
    gradyAccess: 'Limited network participation',
    coverage: ['Emergency services only', 'Out-of-network emergency care'],
    benefits: ['Emergency coverage', 'Out-of-network protections', 'Care management']
  },
  {
    insurer: 'WellCare',
    planName: 'WellCare Value Script',
    premium: '$0',
    gradyAccess: 'Community health center focus',
    coverage: ['Primary care at health centers', 'Preventive services', 'Chronic care management'],
    benefits: ['Community-based care', 'Transportation services', 'Health education']
  }
];

const safetyNetConsiderations = [
  {
    consideration: 'Continuity of Care',
    description: 'Maintaining relationships with existing Grady providers when enrolling in Medicare Advantage',
    importance: 'Critical',
    tips: ['Verify provider participation', 'Understand referral requirements', 'Check specialist access']
  },
  {
    consideration: 'Emergency Access',
    description: 'Ensuring coverage for Grady\'s Level 1 trauma center and emergency services',
    importance: 'Essential',
    tips: ['Confirm emergency coverage', 'Understand transport benefits', 'Know out-of-network protections']
  },
  {
    consideration: 'Community Health Centers',
    description: 'Access to Grady\'s network of community health centers for primary care',
    importance: 'Important',
    tips: ['Locate nearby health centers', 'Verify primary care coverage', 'Check preventive services']
  },
  {
    consideration: 'Specialty Care Coordination',
    description: 'Navigating specialty care referrals within Grady\'s integrated system',
    importance: 'Important',
    tips: ['Understand referral process', 'Verify specialist coverage', 'Know prior authorization rules']
  }
];

export default function GradyHealthSystemPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Grady Health System Atlanta', href: '/grady-health-system-medicare-advantage-atlanta' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  React.useEffect(() => {
    // Track advanced page view
    trackMedicareAdvancedPageView(
      'Grady Health System Medicare Advantage Atlanta',
      {
        pageType: 'safety_net_provider',
        totalBeneficiaries: gradyData.totalBeneficiaries,
        availablePlans: gradyData.planCount,
        specialMetrics: {
          safetyNetPopulation: gradyData.safetyNetPopulation,
          gradyNetworkPlans: gradyData.gradyNetworkPlans
        }
      },
      {
        city: 'Atlanta',
        state: 'Georgia',
        region: 'Southeast'
      }
    );

    // Set up advanced scroll tracking
    const cleanup = setupMedicareAdvancedScrollTracking('safety_net_provider', [
      { percentage: 25, milestone: 'grady_services_viewed' },
      { percentage: 50, milestone: 'healthcare_locations_reviewed' },
      { percentage: 75, milestone: 'safety_net_considerations_viewed' },
      { percentage: 90, milestone: 'content_completion' }
    ]);

    return cleanup;
  }, []);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Grady Health System Medicare Advantage Atlanta"
        county="Atlanta Metro"
        state="Georgia"
        demographics={{
          avgAge: 68,
        }}
        keyMetrics={{
          totalBeneficiaries: gradyData.totalBeneficiaries,
          availablePlans: gradyData.planCount,
          gradyNetworkPlans: gradyData.gradyNetworkPlans,
          pageType: 'safety_net_provider'
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
            "name": "Grady Health System Medicare Advantage Atlanta",
            "description": "Medicare Advantage plans that include Grady Health System in Atlanta, Georgia's safety net healthcare provider and Level 1 trauma center.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Atlanta",
              "addressRegion": "GA",
              "addressCountry": "US"
            },
            "telephone": "331-343-2584",
            "areaServed": [
              {
                "@type": "City",
                "name": "Atlanta",
                "sameAs": "https://en.wikipedia.org/wiki/Atlanta"
              }
            ],
            "serviceType": "Medicare Insurance",
            "provider": {
              "@type": "Organization",
              "name": "El-Mag Insurance"
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
                  Best Grady Health System Medicare Advantage Plans Atlanta GA 2025
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Find <strong>Medicare Advantage plans that include Grady Health System</strong>, Atlanta's premier 
                  <strong>safety net healthcare provider</strong>. Access to <strong>Level 1 trauma center</strong>, 
                  neighborhood health centers, and comprehensive community services designed to serve uninsured, 
                  underinsured, and Medicare beneficiaries across Atlanta.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/medicare-plan-comparison-tool" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('plan_comparison', 'hero', 'safety_net_provider', '/medicare-plan-comparison-tool')}
                  >
                    Compare Grady Medicare Plans
                  </Link>
                  <a 
                    href="tel:331-343-2584" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                    onClick={() => trackMedicareAdvancedCTA('phone_call', 'hero', 'safety_net_provider', 'tel:331-343-2584')}
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
                Best Medicare Plans Including Grady Health System Atlanta
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">{gradyData.gradyNetworkPlans}</div>
                  <div className="text-gray-600">Grady Network Plans</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">{gradyData.safetyNetPopulation}%</div>
                  <div className="text-gray-600">Safety Net Population</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">22</div>
                  <div className="text-gray-600">Community Health Centers</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">165K</div>
                  <div className="text-gray-600">Annual Emergency Visits</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  <strong>Grady Health System</strong> serves as Atlanta's primary <strong>safety net healthcare provider</strong>, 
                  caring for the uninsured, underinsured, and most vulnerable populations. As Georgia's only 
                  <strong>Level 1 trauma center</strong> and a major academic medical center partnering with 
                  Emory University and Morehouse School of Medicine, Grady provides essential services to 
                  {gradyData.safetyNetPopulation}% of Atlanta's safety net population through <strong>{gradyData.gradyNetworkPlans} 
                  Medicare Advantage plans</strong>.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Why Choose Medicare Plans with Grady Health System?</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>42+ Medicare plans include Grady</strong> in their provider networks</li>
                    <li>• <strong>Level 1 trauma center</strong> - Georgia's only Level 1 facility</li>
                    <li>• 22 neighborhood health centers across metro Atlanta</li>
                    <li>• Comprehensive safety net services for vulnerable populations</li>
                    <li>• Academic medical center with Emory and Morehouse partnerships</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <p className="text-sm text-blue-600 font-semibold mb-2">Compare Atlanta Healthcare Networks:</p>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/medicare-advantage-diverse-communities-atlanta" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Diverse Communities</Link>
                      <Link href="/medicare-advantage-transportation-benefits-nashville" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Nashville Transportation</Link>
                      <Link href="/inova-vs-kaiser-medicare-advantage-fairfax" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Fairfax Networks</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Grady Health System Medicare Coverage & Safety Net Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gradyServices.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-center mb-4">
                      <span className="text-4xl mb-3 block">{service.icon}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{service.service}</h3>
                    </div>
                    <p className="text-gray-600 text-sm text-center mb-4">{service.description}</p>
                    <div className="border-t pt-3">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Coverage: {service.coverage}</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                            {specialty}
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
                Key Grady Health System Locations
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {gradyLocations.map((location, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{location.facility}</h3>
                      <span className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-xs font-semibold">
                        {location.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{location.address}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Services:</h4>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {location.services.map((service, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    {location.specialties && (
                      <div className="border-t pt-3">
                        <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-1">
                          {location.specialties.map((specialty, idx) => (
                            <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Advantage Plans Including Grady Health System
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {gradyMedicareAdvantagePartners.map((partner, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{partner.insurer}</h3>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-semibold">
                        {partner.premium} premium
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{partner.planName}</h4>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold">Grady Access:</span> {partner.gradyAccess}
                      </p>
                      <div className="mb-3">
                        <h5 className="font-semibold text-gray-800 mb-1 text-sm">Coverage:</h5>
                        <ul className="text-sm text-gray-600">
                          {partner.coverage.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="border-t pt-3">
                      <h5 className="font-semibold text-gray-800 mb-1 text-sm">Additional Benefits:</h5>
                      <div className="flex flex-wrap gap-1">
                        {partner.benefits.map((benefit, idx) => (
                          <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                            {benefit}
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
                Grady Health System Locations & Medicare Coverage by Atlanta Area
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Downtown Atlanta & Midtown</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Grady Memorial Hospital (Level 1 Trauma Center)</li>
                    <li>• Grady Ambulatory Care Center</li>
                    <li>• Downtown Neighborhood Health Center</li>
                    <li>• Emergency department Medicare coverage</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">
                      Level 1 Trauma Center
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">South & Southwest Atlanta</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Butler Street Health Center</li>
                    <li>• East Point Health Center</li>
                    <li>• Adamsville Health Center</li>
                    <li>• Community-based primary care</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-semibold">
                      8 Community Centers
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">East Atlanta & DeKalb County</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• East Atlanta Health Center</li>
                    <li>• Glenwood Health Center</li>
                    <li>• Morehouse School of Medicine clinics</li>
                    <li>• Academic medical partnerships</li>
                  </ul>
                  <div className="mt-4">
                    <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs font-semibold">
                      Academic Partnerships
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Grady Health System Medicare Advantage Network Partners</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Top Medicare Plans Including Grady:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• WellCare by Allwell - $0 premium with Grady network</li>
                      <li>• Anthem Blue Cross Blue Shield - Comprehensive Grady coverage</li>
                      <li>• Aetna Better Health - Safety net provider partnerships</li>
                      <li>• UnitedHealthcare Community Plan - Grady access included</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Academic Medical Center Benefits:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Emory University School of Medicine partnerships</li>
                      <li>• Morehouse School of Medicine affiliations</li>
                      <li>• Teaching hospital access for complex cases</li>
                      <li>• Research-based treatment options available</li>
                    </ul>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Safety Net Healthcare Considerations for Medicare Recipients
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {safetyNetConsiderations.map((consideration, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{consideration.consideration}</h3>
                      <span className={`ml-2 px-2 py-1 rounded text-xs font-semibold ${
                        consideration.importance === 'Critical' ? 'bg-red-100 text-red-800' :
                        consideration.importance === 'Essential' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {consideration.importance}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{consideration.description}</p>
                    <div className="border-t pt-3">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Tips:</h4>
                      <ul className="text-sm text-gray-600">
                        {consideration.tips.map((tip, idx) => (
                          <li key={idx}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Additional Atlanta Healthcare Resources</h3>
                <p className="text-blue-700 mb-4">
                  While Grady serves as Atlanta's safety net provider, the city also offers other excellent healthcare options. 
                  Compare with other major Atlanta health systems for comprehensive Medicare planning.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Hospital System Comparisons:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/emory-vs-piedmont-medicare-advantage-atlanta" className="hover:underline">Emory vs Piedmont Networks</Link></li>
                      <li>• <Link href="/medicare-advantage-diverse-communities-atlanta" className="hover:underline">Diverse Communities Care</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Medicare Resources:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage" className="hover:underline">All Medicare Advantage Plans</Link></li>
                      <li>• <Link href="/supplemental-insurance" className="hover:underline">Supplemental Coverage</Link></li>
                      <li>• <Link href="/raleigh-tech-innovation-medicare-advantage" className="hover:underline">Raleigh Tech Medicare</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">Compare Safety Net Healthcare in Other Regions:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <Link href="/medicare-advantage/sacramento-county" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Sacramento County
                    </Link>
                    <Link href="/medicare-advantage/monroe-county-florida" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Monroe County FL
                    </Link>
                    <Link href="/raleigh-tech-innovation-medicare-advantage" className="text-sm bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50 text-center border border-blue-200">
                      Raleigh Tech Innovation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Access Quality Care Regardless of Your Circumstances
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Grady Health System has served Atlanta's most vulnerable populations for over 130 years as the region's 
                <strong>premier safety net healthcare provider</strong>. Find <strong>Medicare Advantage plans that include Grady</strong> 
                to ensure continued access to Georgia's only <strong>Level 1 trauma center</strong> and 22 neighborhood health centers 
                serving uninsured, underinsured, and Medicare beneficiaries across metro Atlanta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('contact_form', 'footer', 'safety_net_provider', '/contact')}
                >
                  Find Grady Network Plans
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                  onClick={() => trackMedicareAdvancedCTA('phone_call', 'footer', 'safety_net_provider', 'tel:331-343-2584')}
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