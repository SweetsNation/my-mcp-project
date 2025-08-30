'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SuccessStory {
  id: string;
  title: string;
  excerpt: string;
  fullStory: string;
  customerName: string;
  customerLocation: string;
  customerDemographic: string;
  customerAge: number;
  customerIndustry: string;
  planType: string;
  insuranceType: string[];
  savingsAmount: number;
  beforeSituation: string;
  afterResult: string;
  timeWithPlan: string;
  rating: number;
  verified: boolean;
  photo?: string;
  tags: string[];
  category: string[];
  publishDate: string;
  featured: boolean;
  hasVideo?: boolean;
  hasBeforeAfter?: boolean;
  hasSavingsCalculator?: boolean;
  relatedStories: string[];
  teamMember: string;
  county: string;
  state: string;
  zipCode?: string;
  language: string;
  specialCircumstances: string[];
}

interface SuccessStoryLinkingProps {
  userContext?: 'medicare-advantage' | 'medicare-supplement' | 'health-marketplace' | 'medicare-part-d' | 'general';
  currentLocation?: string;
  currentCounty?: string;
  currentState?: string;
  userAge?: number;
  userDemographic?: string;
  userIndustry?: string;
  maxStories?: number;
  layout?: 'grid' | 'list' | 'carousel' | 'featured';
  showFilters?: boolean;
  showCategories?: boolean;
  showSavings?: boolean;
  showTeamMembers?: boolean;
  showGeographic?: boolean;
  showInteractive?: boolean;
  showRelatedStories?: boolean;
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'ma-sarah-atlanta',
    title: 'From $450 to $0 Premium: Sarah\'s Medicare Advantage Journey',
    excerpt: 'Sarah M. found a Medicare Advantage plan that eliminated her monthly premium while adding dental and vision coverage.',
    fullStory: 'Sarah was paying $450 monthly for her Medicare Supplement plan when she discovered Medicare Advantage. Our team found her a plan with $0 premium that included dental, vision, and hearing benefits. She now saves $5,400 annually while getting better coverage.',
    customerName: 'Sarah M.',
    customerLocation: 'Atlanta, GA',
    customerDemographic: 'general',
    customerAge: 68,
    customerIndustry: 'retired',
    planType: 'BlueCare Medicare Advantage',
    insuranceType: ['medicare-advantage'],
    savingsAmount: 5400,
    beforeSituation: '$450/month Medicare Supplement premium',
    afterResult: '$0 premium Medicare Advantage with enhanced benefits',
    timeWithPlan: '2 years',
    rating: 5,
    verified: true,
    tags: ['premium-savings', 'dental-coverage', 'vision-coverage', 'hearing-benefits'],
    category: ['Medicare Advantage', 'Cost Savings', 'Enhanced Benefits'],
    publishDate: '2025-01-15',
    featured: true,
    hasVideo: true,
    hasBeforeAfter: true,
    hasSavingsCalculator: true,
    relatedStories: ['ma-robert-nashville', 'ma-linda-raleigh'],
    teamMember: 'Maria Rodriguez',
    county: 'Fulton County',
    state: 'Georgia',
    zipCode: '30301',
    language: 'English',
    specialCircumstances: ['retired', 'dental-needs', 'vision-needs']
  },
  {
    id: 'ms-james-virginia',
    title: 'Veteran James Finds Perfect Medicare Supplement Coverage',
    excerpt: 'James R., a veteran, found a Medicare Supplement plan that works perfectly with his VA benefits.',
    fullStory: 'As a veteran, James needed specialized coverage that would work with his VA benefits. We found him a Medicare Supplement plan that coordinates perfectly with VA care, giving him access to both systems and comprehensive coverage.',
    customerName: 'James R.',
    customerLocation: 'Virginia Beach, VA',
    customerDemographic: 'veteran',
    customerAge: 67,
    customerIndustry: 'retired',
    planType: 'UnitedHealthcare AARP',
    insuranceType: ['medicare-supplement'],
    savingsAmount: 2400,
    beforeSituation: 'Limited to VA care only, gaps in coverage',
    afterResult: 'VA care + Medicare Supplement for comprehensive coverage',
    timeWithPlan: '2.5 years',
    rating: 5,
    verified: true,
    tags: ['veteran-benefits', 'va-coordination', 'comprehensive-coverage'],
    category: ['Medicare Supplement', 'Veteran Benefits', 'VA Coordination'],
    publishDate: '2025-01-12',
    featured: true,
    hasVideo: true,
    hasBeforeAfter: true,
    relatedStories: ['ms-patricia-alabama'],
    teamMember: 'Eric Salinas',
    county: 'Virginia Beach City',
    state: 'Virginia',
    zipCode: '23451',
    language: 'English',
    specialCircumstances: ['veteran', 'va-benefits']
  },
  {
    id: 'marketplace-maria-texas',
    title: 'Maria\'s Journey: From Uninsured to Comprehensive Coverage',
    excerpt: 'Maria Rodriguez, a single mother working in a restaurant, now has complete health coverage for just $25 per month.',
    fullStory: 'Como madre soltera trabajando en un restaurante, nunca pensé que podría pagar un seguro de salud. El agente me explicó todo en español y ahora tengo cobertura completa por solo $25 al mes. Mi hija y yo finalmente tenemos la tranquilidad que necesitamos.',
    customerName: 'Maria Rodriguez',
    customerLocation: 'Spring, TX',
    customerDemographic: 'hispanic',
    customerAge: 32,
    customerIndustry: 'restaurant',
    planType: 'Silver Plan',
    insuranceType: ['health-marketplace'],
    savingsAmount: 2400,
    beforeSituation: 'Uninsured single mother, restaurant worker',
    afterResult: '$25/month Silver plan with subsidies',
    timeWithPlan: '8 months',
    rating: 5,
    verified: true,
    tags: ['single-mother', 'restaurant-worker', 'subsidies', 'spanish-speaking'],
    category: ['Health Insurance Marketplace', 'Subsidies', 'Spanish Speaking'],
    publishDate: '2025-01-15',
    featured: true,
    hasVideo: true,
    hasBeforeAfter: true,
    hasSavingsCalculator: true,
    relatedStories: ['marketplace-james-texas'],
    teamMember: 'Elsa Galicia-Lona',
    county: 'Harris County',
    state: 'Texas',
    zipCode: '77373',
    language: 'Spanish',
    specialCircumstances: ['single-parent', 'low-income', 'spanish-speaking']
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    'Medicare Advantage': 'bg-green-100 text-green-800',
    'Medicare Supplement': 'bg-purple-100 text-purple-800',
    'Health Insurance Marketplace': 'bg-orange-100 text-orange-800',
    'Cost Savings': 'bg-blue-100 text-blue-800',
    'Enhanced Benefits': 'bg-emerald-100 text-emerald-800',
    'Dental Coverage': 'bg-pink-100 text-pink-800',
    'Prescription Coverage': 'bg-indigo-100 text-indigo-800',
    'Veteran Benefits': 'bg-red-100 text-red-800',
    'Subsidies': 'bg-yellow-100 text-yellow-800',
    'Spanish Speaking': 'bg-teal-100 text-teal-800'
  };
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

const getDemographicIcon = (demographic: string) => {
  const icons = {
    'general': '👤',
    'hispanic': '🇲🇽',
    'veteran': '🎖️',
    'senior': '👴',
    'working-parent': '👨‍👩‍👧‍👦',
    'retired': '🏖️'
  };
  return icons[demographic as keyof typeof icons] || '👤';
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export default function SuccessStoryLinking({
  userContext = 'general',
  currentLocation,
  currentCounty,
  currentState,
  userAge,
  userDemographic,
  userIndustry,
  maxStories = 6,
  layout = 'grid',
  showFilters = true,
  showCategories = true,
  showSavings = true,
  showTeamMembers = true,
  showGeographic = true,
  showInteractive = true,
  showRelatedStories = true
}: SuccessStoryLinkingProps) {
  const [filteredStories, setFilteredStories] = useState<SuccessStory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDemographic, setSelectedDemographic] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [currentStory, setCurrentStory] = useState<number>(0);

  const getRecommendations = (): SuccessStory[] => {
    let recommendations = [...SUCCESS_STORIES];

    if (userContext !== 'general') {
      recommendations = recommendations.filter(story => 
        story.insuranceType.includes(userContext)
      );
    }

    if (currentState && currentState !== 'all') {
      recommendations = recommendations.filter(story => 
        story.state === currentState
      );
    }

    if (currentCounty && currentCounty !== 'all') {
      recommendations = recommendations.filter(story => 
        story.county === currentCounty
      );
    }

    if (userDemographic && userDemographic !== 'all') {
      recommendations = recommendations.filter(story => 
        story.customerDemographic === userDemographic || story.customerDemographic === 'general'
      );
    }

    if (userAge) {
      recommendations = recommendations.filter(story => 
        Math.abs(story.customerAge - userAge) <= 10
      );
    }

    if (userIndustry && userIndustry !== 'all') {
      recommendations = recommendations.filter(story => 
        story.customerIndustry === userIndustry
      );
    }

    recommendations.sort((a, b) => {
      if (a.featured !== b.featured) return b.featured ? 1 : -1;
      if (b.rating !== a.rating) return b.rating - a.rating;
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    });

    return recommendations.slice(0, maxStories);
  };

  useEffect(() => {
    const recommendations = getRecommendations();
    setFilteredStories(recommendations);
  }, [userContext, currentLocation, currentCounty, currentState, userAge, userDemographic, userIndustry, maxStories]);

  const getUniqueCategories = () => {
    const categories = new Set<string>();
    SUCCESS_STORIES.forEach(story => {
      story.category.forEach(cat => categories.add(cat));
    });
    return Array.from(categories);
  };

  const getUniqueDemographics = () => {
    const demographics = new Set<string>();
    SUCCESS_STORIES.forEach(story => {
      demographics.add(story.customerDemographic);
    });
    return Array.from(demographics);
  };

  const getUniqueStates = () => {
    const states = new Set<string>();
    SUCCESS_STORIES.forEach(story => {
      states.add(story.state);
    });
    return Array.from(states);
  };

  const filterStories = () => {
    let filtered = getRecommendations();

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(story => 
        story.category.includes(selectedCategory)
      );
    }

    if (selectedDemographic !== 'all') {
      filtered = filtered.filter(story => 
        story.customerDemographic === selectedDemographic
      );
    }

    if (selectedState !== 'all') {
      filtered = filtered.filter(story => 
        story.state === selectedState
      );
    }

    setFilteredStories(filtered);
  };

  useEffect(() => {
    filterStories();
  }, [selectedCategory, selectedDemographic, selectedState]);

  if (filteredStories.length === 0) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 mb-6">
              Discover how we've helped others find the perfect insurance coverage.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Share Your Success Story
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % filteredStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped thousands of families find the perfect insurance coverage and save money on their healthcare costs.
          </p>
        </div>

        {showFilters && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {showCategories && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Categories</option>
                    {getUniqueCategories().map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Demographic</label>
                <select
                  value={selectedDemographic}
                  onChange={(e) => setSelectedDemographic(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Demographics</option>
                  {getUniqueDemographics().map((demo) => (
                    <option key={demo} value={demo}>
                      {demo === 'hispanic' ? 'Hispanic/Latino' : 
                       demo === 'veteran' ? 'Veteran' : 
                       demo === 'senior' ? 'Senior' : 
                       demo === 'working-parent' ? 'Working Parent' : 
                       demo === 'retired' ? 'Retired' : 'General'}
                    </option>
                  ))}
                </select>
              </div>

              {showGeographic && (
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
              )}
            </div>
          </div>
        )}

        {layout === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">{getDemographicIcon(story.customerDemographic)}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{story.customerName}</h4>
                        <p className="text-sm text-gray-600">{story.customerLocation}</p>
                      </div>
                    </div>
                    {story.verified && (
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        ✓ Verified
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {story.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>

                  {showCategories && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {story.category.slice(0, 2).map((cat) => (
                        <span key={cat} className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(cat)}`}>
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}

                  {showSavings && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                      <div className="text-center">
                        <p className="text-sm text-green-600 mb-1">Annual Savings</p>
                        <p className="text-2xl font-bold text-green-700">{formatCurrency(story.savingsAmount)}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <span>⭐ {story.rating}/5</span>
                      <span>📅 {story.timeWithPlan}</span>
                    </div>
                  </div>

                  {showInteractive && (
                    <div className="flex items-center gap-2 mb-4">
                      {story.hasVideo && (
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                          📹 Video
                        </span>
                      )}
                      {story.hasBeforeAfter && (
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                          📊 Before/After
                        </span>
                      )}
                      {story.hasSavingsCalculator && (
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          🧮 Calculator
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/success-stories/${story.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                    >
                      Read Full Story →
                    </Link>
                    {showTeamMembers && (
                      <span className="text-xs text-gray-500">
                        by {story.teamMember}
                      </span>
                    )}
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
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">{getDemographicIcon(filteredStories[currentStory].customerDemographic)}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {filteredStories[currentStory].title}
                </h3>

                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed max-w-4xl mx-auto">
                  "{filteredStories[currentStory].excerpt}"
                </blockquote>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Customer</p>
                    <p className="font-semibold text-gray-900">{filteredStories[currentStory].customerName}</p>
                    <p className="text-gray-600">{filteredStories[currentStory].customerLocation}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-sm text-gray-500 mb-1">Plan</p>
                    <p className="font-semibold text-gray-900">{filteredStories[currentStory].planType}</p>
                    <p className="text-gray-600">{filteredStories[currentStory].timeWithPlan}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Annual Savings</p>
                    <p className="font-semibold text-green-600">{formatCurrency(filteredStories[currentStory].savingsAmount)}</p>
                    <p className="text-gray-600">Verified</p>
                  </div>
                </div>

                {showRelatedStories && filteredStories[currentStory].relatedStories.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Related Stories:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {filteredStories[currentStory].relatedStories.slice(0, 3).map((relatedId) => {
                        const relatedStory = SUCCESS_STORIES.find(s => s.id === relatedId);
                        if (!relatedStory) return null;
                        return (
                          <Link
                            key={relatedId}
                            href={`/success-stories/${relatedId}`}
                            className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                          >
                            {relatedStory.customerName} - {relatedStory.customerLocation}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                <Link
                  href={`/success-stories/${filteredStories[currentStory].id}`}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Read Full Success Story
                </Link>
              </div>

              <button
                onClick={prevStory}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextStory}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                {filteredStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentStory ? 'bg-blue-600' : 'bg-gray-300'
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
            Share Your Success Story
          </Link>
        </div>
      </div>
    </section>
  );
}
