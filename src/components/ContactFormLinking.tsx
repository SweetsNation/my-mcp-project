'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Specialist {
  id: string;
  name: string;
  title: string;
  slug: string;
  specialties: string[];
  insuranceTypes: string[];
  languages: string[];
  states: string[];
  experience: string;
  rating: number;
  responseTime: string;
  availability: string;
  photo?: string;
  color: string;
  achievements: string[];
  certifications: string[];
  customerCount: number;
  retentionRate: string;
  avgSavings: number;
  focusAreas: string[];
  education: string[];
  awards: string[];
  languagesSpoken: string[];
  specialCircumstances: string[];
  availabilityHours: string;
  preferredContact: string;
  emergencyContact: boolean;
  consultationFee: string;
  freeConsultation: boolean;
}

interface ContactFormLinkingProps {
  userContext?: 'medicare-advantage' | 'medicare-supplement' | 'health-marketplace' | 'medicare-part-d' | 'general';
  currentLocation?: string;
  currentCounty?: string;
  currentState?: string;
  userAge?: number;
  userLanguage?: string;
  userIncome?: number;
  userDemographic?: string;
  userIndustry?: string;
  showFilters?: boolean;
  showCategories?: boolean;
  showRatings?: boolean;
  showAvailability?: boolean;
  showResponseTime?: boolean;
  showAchievements?: boolean;
  showConsultationInfo?: boolean;
  maxSpecialists?: number;
  layout?: 'grid' | 'list' | 'featured' | 'carousel';
  showEmergencyContact?: boolean;
  showFreeConsultation?: boolean;
}

const SPECIALISTS: Specialist[] = [
  {
    id: 'elsa-galicia-lona',
    name: 'Elsa Galicia-Lona',
    title: 'Senior Insurance Specialist',
    slug: 'elsa-galicia-lona',
    specialties: ['Medicare Advantage', 'Health Insurance Marketplace', 'International Coverage', 'Bilingual Services'],
    insuranceTypes: ['medicare-advantage', 'health-marketplace'],
    languages: ['English', 'Spanish'],
    states: ['Florida', 'Texas', 'California', 'New York'],
    experience: '15+ years',
    rating: 4.9,
    responseTime: '< 2 hours',
    availability: 'Monday-Friday, 9AM-6PM EST',
    color: 'blue',
    achievements: ['3,800+ clients served', '97% client retention', 'Bilingual expert'],
    certifications: ['Licensed Health Agent', 'Medicare Specialist', 'ACA Marketplace Certified'],
    customerCount: 3800,
    retentionRate: '97%',
    avgSavings: 2400,
    focusAreas: ['Hispanic community', 'Medicare transitions', 'Marketplace subsidies'],
    education: ['Insurance License', 'Medicare Certification', 'ACA Training'],
    awards: ['Top Producer 2023', 'Customer Service Excellence'],
    languagesSpoken: ['English', 'Spanish'],
    specialCircumstances: ['Low-income families', 'Spanish-speaking clients', 'Medicare transitions'],
    availabilityHours: '9AM-6PM EST, Monday-Friday',
    preferredContact: 'Phone',
    emergencyContact: true,
    consultationFee: '$0',
    freeConsultation: true
  },
  {
    id: 'eric-salinas',
    name: 'Eric Salinas',
    title: 'Medicare Specialist',
    slug: 'eric-salinas',
    specialties: ['Medicare Advantage', 'Medicare Supplement', 'Medicare Part D', 'Veteran Benefits'],
    insuranceTypes: ['medicare-advantage', 'medicare-supplement', 'medicare-part-d'],
    languages: ['English', 'Spanish'],
    states: ['Florida', 'Texas', 'California', 'Virginia', 'North Carolina', 'Tennessee', 'Georgia', 'Alabama'],
    experience: '12+ years',
    rating: 4.8,
    responseTime: '< 4 hours',
    availability: 'Monday-Friday, 8AM-7PM EST',
    color: 'green',
    achievements: ['2,500+ Medicare clients', 'Veteran benefits expert', 'Multi-state licensed'],
    certifications: ['Medicare Specialist', 'Veteran Benefits Advisor', 'Multi-State License'],
    customerCount: 2500,
    retentionRate: '95%',
    avgSavings: 3200,
    focusAreas: ['Veterans', 'Medicare transitions', 'Multi-state coverage'],
    education: ['Medicare Certification', 'Veteran Benefits Training'],
    awards: ['Medicare Expert 2023', 'Veteran Advocate'],
    languagesSpoken: ['English', 'Spanish'],
    specialCircumstances: ['Veterans', 'Medicare transitions', 'Multi-state residents'],
    availabilityHours: '8AM-7PM EST, Monday-Friday',
    preferredContact: 'Phone',
    emergencyContact: true,
    consultationFee: '$0',
    freeConsultation: true
  },
  {
    id: 'magdalena-salinas',
    name: 'Magdalena Salinas',
    title: 'Social Security Advisor & Medicare Specialist',
    slug: 'magdalena-salinas',
    specialties: ['Social Security Benefits', 'Medicare Planning', 'Retirement Planning', 'Benefit Optimization'],
    insuranceTypes: ['medicare-advantage', 'medicare-supplement', 'medicare-part-d'],
    languages: ['English', 'Spanish'],
    states: ['Florida', 'Texas', 'California', 'New York', 'Illinois'],
    experience: '11+ years',
    rating: 4.9,
    responseTime: '< 3 hours',
    availability: 'Monday-Friday, 9AM-5PM EST',
    color: 'purple',
    achievements: ['2,800+ clients served', '$15K+ SS optimization', 'Licensed in 7 states'],
    certifications: ['Social Security Advisor', 'Medicare Specialist', 'Retirement Planning'],
    customerCount: 2800,
    retentionRate: '96%',
    avgSavings: 15000,
    focusAreas: ['Social Security optimization', 'Medicare planning', 'Retirement transitions'],
    education: ['Social Security Training', 'Medicare Certification'],
    awards: ['Social Security Expert 2023', 'Retirement Planning Specialist'],
    languagesSpoken: ['English', 'Spanish'],
    specialCircumstances: ['Retirement planning', 'Social Security optimization', 'Medicare transitions'],
    availabilityHours: '9AM-5PM EST, Monday-Friday',
    preferredContact: 'Phone',
    emergencyContact: false,
    consultationFee: '$0',
    freeConsultation: true
  },
  {
    id: 'yaissa-acosta',
    name: 'Yaissa Acosta',
    title: 'Insurance Specialist',
    slug: 'yaissa-acosta',
    specialties: ['Health Insurance Marketplace', 'Medicare Advantage', 'Life Insurance', 'Supplemental Health'],
    insuranceTypes: ['health-marketplace', 'medicare-advantage'],
    languages: ['English', 'Spanish'],
    states: ['Florida', 'Texas', 'California', 'Nevada'],
    experience: '8+ years',
    rating: 4.7,
    responseTime: '< 6 hours',
    availability: 'Monday-Friday, 10AM-6PM EST',
    color: 'orange',
    achievements: ['1,800+ marketplace clients', 'Subsidy expert', 'Bilingual specialist'],
    certifications: ['ACA Marketplace Certified', 'Medicare Specialist', 'Life Insurance License'],
    customerCount: 1800,
    retentionRate: '94%',
    avgSavings: 1800,
    focusAreas: ['Marketplace subsidies', 'Low-income families', 'Medicare transitions'],
    education: ['ACA Certification', 'Medicare Training'],
    awards: ['Marketplace Expert 2023', 'Subsidy Specialist'],
    languagesSpoken: ['English', 'Spanish'],
    specialCircumstances: ['Low-income families', 'Subsidy applications', 'Marketplace transitions'],
    availabilityHours: '10AM-6PM EST, Monday-Friday',
    preferredContact: 'Email',
    emergencyContact: false,
    consultationFee: '$0',
    freeConsultation: true
  },
  {
    id: 'marcia-cordero',
    name: 'Marcia Zulema Cordero Rizo',
    title: 'Insurance Specialist',
    slug: 'marcia-cordero',
    specialties: ['Health Insurance Marketplace', 'Life Insurance', 'Final Expense', 'Medicare Advantage'],
    insuranceTypes: ['health-marketplace', 'medicare-advantage'],
    languages: ['English', 'Spanish'],
    states: ['Florida', 'Texas', 'California', 'Illinois'],
    experience: '9+ years',
    rating: 4.6,
    responseTime: '< 5 hours',
    availability: 'Monday-Friday, 9AM-5PM EST',
    color: 'pink',
    achievements: ['2,200+ clients served', 'Life insurance expert', 'Final expense specialist'],
    certifications: ['Life Insurance License', 'ACA Marketplace Certified', 'Medicare Specialist'],
    customerCount: 2200,
    retentionRate: '93%',
    avgSavings: 2100,
    focusAreas: ['Life insurance', 'Final expense planning', 'Marketplace coverage'],
    education: ['Life Insurance Training', 'ACA Certification'],
    awards: ['Life Insurance Specialist 2023', 'Final Expense Expert'],
    languagesSpoken: ['English', 'Spanish'],
    specialCircumstances: ['Life insurance needs', 'Final expense planning', 'Family coverage'],
    availabilityHours: '9AM-5PM EST, Monday-Friday',
    preferredContact: 'Phone',
    emergencyContact: false,
    consultationFee: '$0',
    freeConsultation: true
  },
  {
    id: 'junior-goulbourne',
    name: 'Junior Goulbourne',
    title: 'Business Insurance Specialist',
    slug: 'junior-goulbourne',
    specialties: ['Business Insurance', 'Employee Benefits', 'Group Health', 'Commercial Coverage'],
    insuranceTypes: ['business-insurance', 'employee-benefits'],
    languages: ['English'],
    states: ['Florida', 'Texas', 'California', 'New York'],
    experience: '10+ years',
    rating: 4.8,
    responseTime: '< 4 hours',
    availability: 'Monday-Friday, 8AM-6PM EST',
    color: 'indigo',
    achievements: ['500+ business clients', 'Employee benefits expert', 'Group health specialist'],
    certifications: ['Business Insurance License', 'Employee Benefits Specialist', 'Group Health Certified'],
    customerCount: 500,
    retentionRate: '98%',
    avgSavings: 8500,
    focusAreas: ['Small business', 'Employee benefits', 'Group health plans'],
    education: ['Business Insurance Training', 'Employee Benefits Certification'],
    awards: ['Business Insurance Expert 2023', 'Employee Benefits Specialist'],
    languagesSpoken: ['English'],
    specialCircumstances: ['Small business owners', 'HR professionals', 'Group health needs'],
    availabilityHours: '8AM-6PM EST, Monday-Friday',
    preferredContact: 'Phone',
    emergencyContact: true,
    consultationFee: '$0',
    freeConsultation: true
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    green: 'bg-green-100 text-green-800 border-green-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200',
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
    pink: 'bg-pink-100 text-pink-800 border-pink-200',
    indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

const getSpecialtyColor = (specialty: string) => {
  const colors = {
    'Medicare Advantage': 'bg-green-100 text-green-800',
    'Medicare Supplement': 'bg-purple-100 text-purple-800',
    'Health Insurance Marketplace': 'bg-orange-100 text-orange-800',
    'Medicare Part D': 'bg-indigo-100 text-indigo-800',
    'Veteran Benefits': 'bg-red-100 text-red-800',
    'Social Security': 'bg-yellow-100 text-yellow-800',
    'Life Insurance': 'bg-pink-100 text-pink-800',
    'Business Insurance': 'bg-blue-100 text-blue-800'
  };
  return colors[specialty as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export default function ContactFormLinking({
  userContext = 'general',
  currentLocation,
  currentCounty,
  currentState,
  userAge,
  userLanguage,
  userIncome,
  userDemographic,
  userIndustry,
  showFilters = true,
  showCategories = true,
  showRatings = true,
  showAvailability = true,
  showResponseTime = true,
  showAchievements = true,
  showConsultationInfo = true,
  maxSpecialists = 6,
  layout = 'grid',
  showEmergencyContact = false,
  showFreeConsultation = true
}: ContactFormLinkingProps) {
  const [filteredSpecialists, setFilteredSpecialists] = useState<Specialist[]>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [currentSpecialist, setCurrentSpecialist] = useState<number>(0);

  const getRecommendations = (): Specialist[] => {
    let recommendations = [...SPECIALISTS];

    // Filter by user context
    if (userContext !== 'general') {
      recommendations = recommendations.filter(specialist => 
        specialist.insuranceTypes.includes(userContext)
      );
    }

    // Filter by state if specified
    if (currentState && currentState !== 'all') {
      recommendations = recommendations.filter(specialist => 
        specialist.states.includes(currentState)
      );
    }

    // Filter by language if specified
    if (userLanguage && userLanguage !== 'all') {
      recommendations = recommendations.filter(specialist => 
        specialist.languages.includes(userLanguage)
      );
    }

    // Filter by age if specified (for Medicare eligibility)
    if (userAge && userAge >= 65) {
      recommendations = recommendations.filter(specialist => 
        specialist.specialties.some(s => s.includes('Medicare'))
      );
    }

    // Sort by rating, experience, and response time
    recommendations.sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating;
      if (a.experience !== b.experience) {
        const aExp = parseInt(a.experience);
        const bExp = parseInt(b.experience);
        if (!isNaN(aExp) && !isNaN(bExp)) return bExp - aExp;
      }
      return a.responseTime.localeCompare(b.responseTime);
    });

    return recommendations.slice(0, maxSpecialists);
  };

  useEffect(() => {
    const recommendations = getRecommendations();
    setFilteredSpecialists(recommendations);
  }, [userContext, currentState, userLanguage, userAge, maxSpecialists]);

  const getUniqueSpecialties = () => {
    const specialties = new Set<string>();
    SPECIALISTS.forEach(specialist => {
      specialist.specialties.forEach(specialty => specialties.add(specialty));
    });
    return Array.from(specialties);
  };

  const getUniqueLanguages = () => {
    const languages = new Set<string>();
    SPECIALISTS.forEach(specialist => {
      specialist.languages.forEach(language => languages.add(language));
    });
    return Array.from(languages);
  };

  const getUniqueStates = () => {
    const states = new Set<string>();
    SPECIALISTS.forEach(specialist => {
      specialist.states.forEach(state => states.add(state));
    });
    return Array.from(states);
  };

  const filterSpecialists = () => {
    let filtered = getRecommendations();

    if (selectedSpecialty !== 'all') {
      filtered = filtered.filter(specialist => 
        specialist.specialties.includes(selectedSpecialty)
      );
    }

    if (selectedLanguage !== 'all') {
      filtered = filtered.filter(specialist => 
        specialist.languages.includes(selectedLanguage)
      );
    }

    if (selectedState !== 'all') {
      filtered = filtered.filter(specialist => 
        specialist.states.includes(selectedState)
      );
    }

    setFilteredSpecialists(filtered);
  };

  useEffect(() => {
    filterSpecialists();
  }, [selectedSpecialty, selectedLanguage, selectedState]);

  if (filteredSpecialists.length === 0) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect with Our Specialists</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team of licensed insurance professionals is here to help you find the perfect coverage.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const nextSpecialist = () => {
    setCurrentSpecialist((prev) => (prev + 1) % filteredSpecialists.length);
  };

  const prevSpecialist = () => {
    setCurrentSpecialist((prev) => (prev - 1 + filteredSpecialists.length) % filteredSpecialists.length);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect with Our Insurance Specialists</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get personalized guidance from our team of licensed insurance professionals. 
            Each specialist has unique expertise to help you find the perfect coverage.
          </p>
        </div>

        {showFilters && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {showCategories && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Specialties</option>
                    {getUniqueSpecialties().map((specialty) => (
                      <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Languages</option>
                  {getUniqueLanguages().map((language) => (
                    <option key={language} value={language}>{language}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All States</option>
                  {getUniqueStates().map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {layout === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecialists.map((specialist) => (
              <div key={specialist.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-blue-600">{specialist.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{specialist.name}</h4>
                        <p className="text-sm text-gray-600">{specialist.title}</p>
                      </div>
                    </div>
                    {showRatings && (
                      <div className="text-right">
                        <div className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="ml-1 text-sm font-medium">{specialist.rating}</span>
                        </div>
                        <p className="text-xs text-gray-500">{specialist.experience}</p>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {specialist.specialties.slice(0, 2).map((specialty) => (
                        <span key={specialty} className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getSpecialtyColor(specialty)}`}>
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {specialist.achievements.slice(0, 2).join(' • ')}
                    </p>
                  </div>

                  {showAvailability && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <span>🕒</span>
                        <span>{specialist.availability}</span>
                      </div>
                      {showResponseTime && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>⚡</span>
                          <span>Response: {specialist.responseTime}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {showConsultationInfo && (
                    <div className="mb-4">
                      {showFreeConsultation && specialist.freeConsultation && (
                        <div className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 mb-2">
                          ✓ Free Consultation
                        </div>
                      )}
                      <div className="text-sm text-gray-600">
                        <p>Preferred: {specialist.preferredContact}</p>
                        {showEmergencyContact && specialist.emergencyContact && (
                          <p className="text-orange-600">🆘 Emergency Contact Available</p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/team/${specialist.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                    >
                      View Profile →
                    </Link>
                    <Link
                      href={`/contact?specialist=${specialist.slug}`}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-medium transition-colors"
                    >
                      Contact {specialist.name.split(' ')[0]}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {layout === 'carousel' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="relative">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-600">
                      {filteredSpecialists[currentSpecialist].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {filteredSpecialists[currentSpecialist].name}
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  {filteredSpecialists[currentSpecialist].title}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {filteredSpecialists[currentSpecialist].specialties.slice(0, 3).map((specialty) => (
                    <span key={specialty} className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getSpecialtyColor(specialty)}`}>
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Experience</p>
                    <p className="font-semibold text-gray-900">{filteredSpecialists[currentSpecialist].experience}</p>
                    <p className="text-gray-600">{filteredSpecialists[currentSpecialist].customerCount}+ clients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Rating</p>
                    <p className="font-semibold text-gray-900">⭐ {filteredSpecialists[currentSpecialist].rating}</p>
                    <p className="text-gray-600">{filteredSpecialists[currentSpecialist].retentionRate} retention</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Response Time</p>
                    <p className="font-semibold text-gray-900">{filteredSpecialists[currentSpecialist].responseTime}</p>
                    <p className="text-gray-600">{filteredSpecialists[currentSpecialist].availability}</p>
                  </div>
                </div>

                {showAchievements && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {filteredSpecialists[currentSpecialist].achievements.slice(0, 3).map((achievement, index) => (
                        <span key={index} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={`/team/${filteredSpecialists[currentSpecialist].slug}`}
                    className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
                  >
                    View Full Profile
                  </Link>
                  <Link
                    href={`/contact?specialist=${filteredSpecialists[currentSpecialist].slug}`}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Contact {filteredSpecialists[currentSpecialist].name.split(' ')[0]}
                  </Link>
                </div>
              </div>

              <button
                onClick={prevSpecialist}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSpecialist}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                {filteredSpecialists.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSpecialist(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSpecialist ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
