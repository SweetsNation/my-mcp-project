'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  location: string;
  image: string;
  color: string;
  description: string;
  achievements: string[];
  slug: string;
  expertise: string[];
  languages: string[];
  states: string[];
  availability: 'high' | 'medium' | 'low';
  rating: number;
  responseTime: string;
  consultationType: string[];
  specializations: string[];
}

interface TeamMemberLinkingProps {
  userContext?: 'medicare-advantage' | 'medicare-supplement' | 'health-marketplace' | 'life-insurance' | 'final-expense' | 'business-insurance' | 'auto-insurance' | 'general';
  userLocation?: string;
  userLanguage?: 'english' | 'spanish' | 'bilingual';
  userAge?: number;
  userIncome?: 'low' | 'medium' | 'high';
  showAvailability?: boolean;
  maxMembers?: number;
  showRatings?: boolean;
  showResponseTime?: boolean;
  layout?: 'grid' | 'list' | 'featured';
  showSpecializations?: boolean;
  showLanguages?: boolean;
  showStates?: boolean;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'elsa-galicia-lona',
    name: 'Elsa Galicia-Lona',
    title: 'Senior Insurance Specialist',
    specialty: 'Medicare Advantage, Health Marketplace & International',
    experience: '15+ years',
    location: 'Florida',
    image: 'EGL',
    color: 'blue',
    description: 'Bilingual insurance expert specializing in Medicare Advantage, Health Marketplace, and International coverage with 15+ years of experience.',
    achievements: ['3,800+ clients served', '97% client retention', 'Bilingual English/Spanish'],
    slug: 'elsa-galicia-lona',
    expertise: ['medicare-advantage', 'health-marketplace', 'international-health', 'senior-insurance'],
    languages: ['english', 'spanish'],
    states: ['Florida', 'Georgia', 'Texas', 'California', 'New York'],
    availability: 'high',
    rating: 4.9,
    responseTime: '< 2 hours',
    consultationType: ['phone', 'video', 'in-person'],
    specializations: ['Medicare Advantage Plans', 'ACA Marketplace', 'International Health Insurance', 'Senior Health Coverage']
  },
  {
    id: 'magdalena-salinas',
    name: 'Magdalena Salinas',
    title: 'Social Security Advisor & Medicare Specialist',
    specialty: 'Social Security Benefits & Medicare',
    experience: '11+ years',
    location: 'Florida',
    image: 'MS',
    color: 'green',
    description: 'Social Security Advisor and Medicare specialist helping clients optimize benefits and find comprehensive coverage.',
    achievements: ['2,800+ clients served', '$15K+ SS optimization', 'Licensed in 7 states'],
    slug: 'magdalena-salinas',
    expertise: ['social-security', 'medicare-advantage', 'medicare-supplement', 'health-marketplace'],
    languages: ['english', 'spanish'],
    states: ['Florida', 'Georgia', 'South Carolina', 'North Carolina', 'Tennessee', 'Alabama', 'Mississippi'],
    availability: 'high',
    rating: 4.8,
    responseTime: '< 4 hours',
    consultationType: ['phone', 'video', 'in-person'],
    specializations: ['Social Security Benefits', 'Medicare Advantage', 'Medicare Supplement', 'ACA Marketplace', 'Benefit Optimization']
  },
  {
    id: 'eric-salinas',
    name: 'Eric Salinas',
    title: 'Medicare Specialist',
    specialty: 'Medicare Supplement, Part D & Advantage',
    experience: '10+ years',
    location: 'Florida',
    image: 'ES',
    color: 'purple',
    description: 'Bilingual Medicare specialist helping seniors with comprehensive Medicare coverage, Hospital Indemnity, and Security Evacuation benefits.',
    achievements: ['3,200+ seniors enrolled', '$1,800 average savings', 'Licensed in 5 states'],
    slug: 'eric-salinas',
    expertise: ['medicare-supplement', 'medicare-part-d', 'medicare-advantage', 'hospital-indemnity'],
    languages: ['english', 'spanish'],
    states: ['Florida', 'Georgia', 'South Carolina', 'North Carolina', 'Tennessee'],
    availability: 'high',
    rating: 4.9,
    responseTime: '< 2 hours',
    consultationType: ['phone', 'video', 'in-person'],
    specializations: ['Medicare Supplement Plans', 'Medicare Part D', 'Medicare Advantage', 'Hospital Indemnity', 'Security Evacuation']
  },
  {
    id: 'junior-goulbourne',
    name: 'Junior Goulbourne',
    title: 'Insurance Specialist',
    specialty: 'Medicare Advantage, Final Expense & Life',
    experience: '11+ years',
    location: 'Florida',
    image: 'JG',
    color: 'indigo',
    description: 'Multi-line insurance specialist helping clients with Medicare Advantage, Final Expense, Life Insurance, and Employee Benefits.',
    achievements: ['2,400+ clients served', '$2,100 average savings', '5 insurance specialties'],
    slug: 'junior-goulbourne',
    expertise: ['medicare-advantage', 'final-expense', 'life-insurance', 'employee-benefits'],
    languages: ['english'],
    states: ['Florida', 'Georgia', 'South Carolina', 'North Carolina'],
    availability: 'medium',
    rating: 4.7,
    responseTime: '< 6 hours',
    consultationType: ['phone', 'video'],
    specializations: ['Medicare Advantage', 'Final Expense Insurance', 'Life Insurance', 'Employee Benefits', 'Multi-line Coverage']
  },
  {
    id: 'yaissa-acosta',
    name: 'Yaissa Acosta',
    title: 'Insurance Specialist',
    specialty: 'Health Marketplace & Medicare Advantage',
    experience: '2+ years',
    location: 'Florida',
    image: 'YA',
    color: 'orange',
    description: 'Bilingual insurance specialist helping families with Health Marketplace, Medicare Advantage, Life Insurance, and Supplemental Health coverage.',
    achievements: ['450+ clients enrolled', '$1,400 average savings', 'Bilingual English/Spanish'],
    slug: 'yaissa-acosta',
    expertise: ['health-marketplace', 'medicare-advantage', 'life-insurance', 'supplemental-health'],
    languages: ['english', 'spanish'],
    states: ['Florida', 'Georgia'],
    availability: 'high',
    rating: 4.6,
    responseTime: '< 3 hours',
    consultationType: ['phone', 'video'],
    specializations: ['ACA Marketplace', 'Medicare Advantage', 'Life Insurance', 'Supplemental Health', 'Family Coverage']
  },
  {
    id: 'marcia-cordero',
    name: 'Marcia Zulema Cordero Rizo',
    title: 'Insurance Specialist',
    specialty: 'Health Marketplace & Life Insurance',
    experience: '1+ years',
    location: 'Florida',
    image: 'MC',
    color: 'teal',
    description: 'Spanish-speaking insurance specialist serving the Hispanic community with Health Marketplace, Life Insurance, and Medicare coverage.',
    achievements: ['180+ Hispanic clients served', '$1,200 average savings', 'Complete Spanish service'],
    slug: 'marcia-cordero',
    expertise: ['health-marketplace', 'life-insurance', 'medicare-advantage', 'hispanic-community'],
    languages: ['spanish', 'english'],
    states: ['Florida'],
    availability: 'medium',
    rating: 4.5,
    responseTime: '< 8 hours',
    consultationType: ['phone', 'video'],
    specializations: ['ACA Marketplace', 'Life Insurance', 'Medicare Advantage', 'Hispanic Community', 'Spanish Language Service']
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100',
    green: 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100',
    purple: 'bg-purple-50 border-purple-200 text-purple-800 hover:bg-purple-100',
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800 hover:bg-indigo-100',
    orange: 'bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100',
    teal: 'bg-teal-50 border-teal-200 text-teal-800 hover:bg-teal-100'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

const getAvailabilityColor = (availability: string) => {
  const colors = {
    high: 'text-green-600 bg-green-100',
    medium: 'text-yellow-600 bg-yellow-100',
    low: 'text-red-600 bg-red-100'
  };
  return colors[availability as keyof typeof colors] || colors.medium;
};

export default function TeamMemberLinking({
  userContext = 'general',
  userLocation,
  userLanguage,
  userAge,
  userIncome,
  showAvailability = true,
  maxMembers = 3,
  showRatings = true,
  showResponseTime = true,
  layout = 'grid',
  showSpecializations = true,
  showLanguages = true,
  showStates = false
}: TeamMemberLinkingProps) {
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>([]);

  const getRecommendations = (): TeamMember[] => {
    let recommendations = [...TEAM_MEMBERS];

    // Filter by user context
    if (userContext !== 'general') {
      recommendations = recommendations.filter(member => 
        member.expertise.includes(userContext)
      );
    }

    // Filter by language preference
    if (userLanguage) {
      recommendations = recommendations.filter(member =>
        member.languages.includes(userLanguage)
      );
    }

    // Filter by location if specified
    if (userLocation) {
      recommendations = recommendations.filter(member =>
        member.states.some(state => 
          state.toLowerCase().includes(userLocation.toLowerCase()) ||
          userLocation.toLowerCase().includes(state.toLowerCase())
        )
      );
    }

    // Age-based recommendations
    if (userAge) {
      if (userAge >= 65) {
        // Prioritize Medicare specialists for seniors
        recommendations.sort((a, b) => {
          const aMedicare = a.expertise.includes('medicare-supplement') || a.expertise.includes('medicare-advantage');
          const bMedicare = b.expertise.includes('medicare-supplement') || b.expertise.includes('medicare-advantage');
          if (aMedicare && !bMedicare) return -1;
          if (!aMedicare && bMedicare) return 1;
          return 0;
        });
      } else if (userAge < 30) {
        // Prioritize marketplace and life insurance specialists for younger users
        recommendations.sort((a, b) => {
          const aMarketplace = a.expertise.includes('health-marketplace');
          const bMarketplace = b.expertise.includes('health-marketplace');
          if (aMarketplace && !bMarketplace) return -1;
          if (!aMarketplace && bMarketplace) return 1;
          return 0;
        });
      }
    }

    // Income-based recommendations
    if (userIncome) {
      if (userIncome === 'low') {
        // Prioritize marketplace and subsidy specialists
        recommendations.sort((a, b) => {
          const aMarketplace = a.expertise.includes('health-marketplace');
          const bMarketplace = b.expertise.includes('health-marketplace');
          if (aMarketplace && !bMarketplace) return -1;
          if (!aMarketplace && bMarketplace) return 1;
          return 0;
        });
      }
    }

    // Sort by availability, rating, and experience
    recommendations.sort((a, b) => {
      // Availability first
      const availabilityOrder = { high: 3, medium: 2, low: 1 };
      const availabilityDiff = availabilityOrder[b.availability] - availabilityOrder[a.availability];
      if (availabilityDiff !== 0) return availabilityDiff;

      // Then by rating
      if (b.rating !== a.rating) return b.rating - a.rating;

      // Then by experience (extract years)
      const aYears = parseInt(a.experience.match(/\d+/)?.[0] || '0');
      const bYears = parseInt(b.experience.match(/\d+/)?.[0] || '0');
      return bYears - aYears;
    });

    return recommendations.slice(0, maxMembers);
  };

  useEffect(() => {
    const recommendations = getRecommendations();
    setFilteredMembers(recommendations);
  }, [userContext, userLocation, userLanguage, userAge, userIncome, maxMembers]);

  if (filteredMembers.length === 0) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect with Our Insurance Specialists</h2>
            <p className="text-gray-600 mb-6">Our team of licensed experts is here to help you find the perfect coverage.</p>
            <Link
              href="/team"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View All Team Members
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect with Our Insurance Specialists</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get personalized guidance from our licensed experts who specialize in your specific insurance needs.
          </p>
        </div>

        {layout === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-600 mr-4">
                      {member.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.title}</p>
                      {showAvailability && (
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getAvailabilityColor(member.availability)}`}>
                          {member.availability === 'high' ? 'Available Now' : 
                           member.availability === 'medium' ? 'Limited Availability' : 'Busy'}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-700 mb-3">{member.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Experience: {member.experience}</span>
                      {showRatings && (
                        <div className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="ml-1">{member.rating}</span>
                        </div>
                      )}
                    </div>
                    {showResponseTime && (
                      <div className="text-sm text-gray-600 mb-3">
                        Response time: {member.responseTime}
                      </div>
                    )}
                  </div>

                  {showSpecializations && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Specializations:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specializations.slice(0, 3).map((spec, index) => (
                          <span key={index} className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getColorClasses(member.color)}`}>
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {showLanguages && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Languages:</h4>
                      <div className="flex gap-2">
                        {member.languages.map((lang) => (
                          <span key={lang} className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                            {lang.charAt(0).toUpperCase() + lang.slice(1)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {showStates && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Licensed States:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.states.slice(0, 3).map((state) => (
                          <span key={state} className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                            {state}
                          </span>
                        ))}
                        {member.states.length > 3 && (
                          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                            +{member.states.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/team/${member.slug}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      View Profile
                    </Link>
                    <Link
                      href={`/contact?specialist=${member.slug}`}
                      className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      Schedule Consultation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {layout === 'list' && (
          <div className="space-y-4">
            {filteredMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-600 mr-4">
                      {member.image}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.title}</p>
                      <p className="text-sm text-gray-500">{member.specialty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {showRatings && (
                      <div className="text-right">
                        <div className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="ml-1 text-sm">{member.rating}</span>
                        </div>
                        <p className="text-xs text-gray-500">{member.experience}</p>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Link
                        href={`/team/${member.slug}`}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-medium transition-colors"
                      >
                        Profile
                      </Link>
                      <Link
                        href={`/contact?specialist=${member.slug}`}
                        className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm rounded-lg font-medium transition-colors"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {layout === 'featured' && filteredMembers.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600 mr-6">
                  {filteredMembers[0].image}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{filteredMembers[0].name}</h3>
                  <p className="text-lg text-gray-600 mb-1">{filteredMembers[0].title}</p>
                  <p className="text-gray-500 mb-3">{filteredMembers[0].specialty}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-600">Experience: {filteredMembers[0].experience}</span>
                    {showRatings && (
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1">{filteredMembers[0].rating}</span>
                      </div>
                    )}
                    {showAvailability && (
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getAvailabilityColor(filteredMembers[0].availability)}`}>
                        {filteredMembers[0].availability === 'high' ? 'Available Now' : 
                         filteredMembers[0].availability === 'medium' ? 'Limited Availability' : 'Busy'}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{filteredMembers[0].description}</p>

              {showSpecializations && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {filteredMembers[0].specializations.map((spec, index) => (
                      <span key={index} className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getColorClasses(filteredMembers[0].color)}`}>
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/team/${filteredMembers[0].slug}`}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  View Full Profile
                </Link>
                <Link
                  href={`/contact?specialist=${filteredMembers[0].slug}`}
                  className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Schedule Free Consultation
                </Link>
              </div>

              {filteredMembers.length > 1 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Other Specialists Available:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredMembers.slice(1).map((member) => (
                      <div key={member.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 mr-3">
                          {member.image}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900">{member.name}</h5>
                          <p className="text-sm text-gray-600">{member.specialty}</p>
                        </div>
                        <Link
                          href={`/team/${member.slug}`}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          View →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <Link
            href="/team"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Team Members
          </Link>
        </div>
      </div>
    </section>
  );
}
