'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { trackBlogFilter, trackBlogArticleClick } from '@/lib/analytics';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string[];
  publishDate: string;
  readTime: string;
  author: string;
  featured: boolean;
  insuranceType: string[];
  rating?: number;
  hasVideo?: boolean;
  hasCalculator?: boolean;
  hasChecklist?: boolean;
  tags?: string[];
}

interface BlogSearchProps {
  blogPosts: BlogPost[];
  initialSearchTerm?: string;
  initialCategory?: string;
  initialInsuranceType?: string;
  showFilters?: boolean;
  maxResults?: number;
}

const getCategoryColor = (category: string) => {
  const colors = {
    'Medicare': 'bg-blue-100 text-blue-800',
    'Health Insurance': 'bg-green-100 text-green-800',
    'County Guides': 'bg-orange-100 text-orange-800',
    'Enrollment': 'bg-red-100 text-red-800',
    'ACA Marketplace': 'bg-indigo-100 text-indigo-800',
    'Comparison Guides': 'bg-yellow-100 text-yellow-800',
    'Medicare Supplement': 'bg-purple-100 text-purple-800',
    'HSA': 'bg-teal-100 text-teal-800',
    'Short-Term': 'bg-pink-100 text-pink-800'
  };
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export default function BlogSearch({
  blogPosts,
  initialSearchTerm = '',
  initialCategory = '',
  initialInsuranceType = '',
  showFilters = true,
  maxResults = 50
}: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedInsuranceType, setSelectedInsuranceType] = useState(initialInsuranceType);
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'rating'>('relevance');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Extract unique categories and insurance types
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    blogPosts.forEach(post => post.category.forEach(cat => categories.add(cat)));
    return Array.from(categories).sort();
  }, [blogPosts]);

  const allInsuranceTypes = useMemo(() => {
    const types = new Set<string>();
    blogPosts.forEach(post => post.insuranceType.forEach(type => types.add(type)));
    return Array.from(types).sort();
  }, [blogPosts]);

  // Search and filter logic
  const filteredPosts = useMemo(() => {
    let results = [...blogPosts];

    // Text search
    if (searchTerm.trim()) {
      const searchWords = searchTerm.toLowerCase().trim().split(/\s+/);
      results = results.filter(post => {
        const searchableText = `${post.title} ${post.excerpt} ${post.author} ${post.category.join(' ')} ${post.tags?.join(' ') || ''}`.toLowerCase();
        return searchWords.every(word => searchableText.includes(word));
      });
    }

    // Category filter
    if (selectedCategory) {
      results = results.filter(post => post.category.includes(selectedCategory));
    }

    // Insurance type filter
    if (selectedInsuranceType) {
      results = results.filter(post => post.insuranceType.includes(selectedInsuranceType));
    }

    // Sorting
    results.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'relevance':
        default:
          // Relevance: featured first, then rating, then date
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          if (b.rating && a.rating && b.rating !== a.rating) return b.rating - a.rating;
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      }
    });

    return results.slice(0, maxResults);
  }, [blogPosts, searchTerm, selectedCategory, selectedInsuranceType, sortBy, maxResults]);

  // Track filter usage
  useEffect(() => {
    if (selectedCategory) {
      trackBlogFilter('category', selectedCategory, filteredPosts.length);
    }
  }, [selectedCategory, filteredPosts.length]);

  useEffect(() => {
    if (selectedInsuranceType) {
      trackBlogFilter('insurance_type', selectedInsuranceType, filteredPosts.length);
    }
  }, [selectedInsuranceType, filteredPosts.length]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedInsuranceType('');
    setSortBy('relevance');
  };

  const hasActiveFilters = searchTerm || selectedCategory || selectedInsuranceType || sortBy !== 'relevance';

  return (
    <div className="bg-white">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-t-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Articles</h2>
          
          {/* Main Search Input */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search articles by title, content, author, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Quick Filters */}
          {showFilters && (
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Categories</option>
                {allCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedInsuranceType}
                onChange={(e) => setSelectedInsuranceType(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Insurance Types</option>
                <option value="medicare-advantage">Medicare Advantage</option>
                <option value="medicare-supplement">Medicare Supplement</option>
                <option value="health-marketplace">Health Marketplace</option>
                <option value="medicare-part-d">Medicare Part D</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'relevance' | 'date' | 'rating')}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="date">Sort by Date</option>
                <option value="rating">Sort by Rating</option>
              </select>

              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                {showAdvancedFilters ? 'Hide Filters' : 'More Filters'}
              </button>

              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="text-sm text-gray-500 hover:text-gray-700 font-medium"
                >
                  Clear All
                </button>
              )}
            </div>
          )}

          {/* Advanced Filters */}
          {showAdvancedFilters && (
            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Advanced Filters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Content Type</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">Has Video</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">Has Calculator</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">Has Checklist</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Article Status</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">Featured Only</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">High Rated (4.5+)</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Reading Time</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Any Length</option>
                    <option value="short">Short (5-10 min)</option>
                    <option value="medium">Medium (11-15 min)</option>
                    <option value="long">Long (15+ min)</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search Results */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm text-gray-600">
              {filteredPosts.length > 0 ? (
                <>
                  Showing {filteredPosts.length} of {blogPosts.length} articles
                  {searchTerm && (
                    <span className="ml-1">
                      for "<strong>{searchTerm}</strong>"
                    </span>
                  )}
                </>
              ) : (
                <>No articles found{searchTerm && ` for "${searchTerm}"`}</>
              )}
            </div>
            
            {hasActiveFilters && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Active filters:</span>
                {selectedCategory && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory('')}
                      className="ml-1 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedInsuranceType && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {selectedInsuranceType.replace('-', ' ')}
                    <button
                      onClick={() => setSelectedInsuranceType('')}
                      className="ml-1 text-green-600 hover:text-green-800"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Results Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex flex-wrap gap-2">
                        {post.category.slice(0, 2).map((cat) => (
                          <span key={cat} className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(cat)}`}>
                            {cat}
                          </span>
                        ))}
                      </div>
                      {post.featured && (
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="hover:text-blue-600 transition-colors"
                        onClick={() => {
                          trackBlogArticleClick(
                            post.id,
                            post.title,
                            post.category[0],
                            post.insuranceType[0],
                            'search',
                            index + 1
                          );
                        }}
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <span>⏱️ {post.readTime}</span>
                        <span>📅 {new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      {post.rating && (
                        <div className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="ml-1">{post.rating}</span>
                        </div>
                      )}
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                      By {post.author}
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      {post.hasVideo && (
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                          📹 Video
                        </span>
                      )}
                      {post.hasCalculator && (
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                          🧮 Calculator
                        </span>
                      )}
                      {post.hasChecklist && (
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          ✅ Checklist
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                      onClick={() => {
                        trackBlogArticleClick(
                          post.id,
                          post.title,
                          post.category[0],
                          post.insuranceType[0],
                          'search',
                          index + 1
                        );
                      }}
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.291-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}