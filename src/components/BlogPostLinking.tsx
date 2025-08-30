'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
}

interface BlogPostLinkingProps {
  userContext?: 'medicare-advantage' | 'medicare-supplement' | 'health-marketplace' | 'general';
  currentPostSlug?: string;
  maxPosts?: number;
  layout?: 'grid' | 'list';
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'miami-dade-health-insurance-guide',
    title: 'Complete Guide to Health Insurance in Miami-Dade County, Florida 2025',
    slug: 'miami-dade-health-insurance-guide',
    excerpt: 'Comprehensive Miami-Dade health insurance guide covering Marketplace plans, subsidies, bilingual support, and coverage for 450,000+ uninsured residents.',
    category: ['Health Insurance', 'County Guides'],
    publishDate: '2025-01-15',
    readTime: '15 min read',
    author: 'El-Mag Insurance Team',
    featured: true,
    insuranceType: ['health-marketplace'],
    rating: 4.8,
    hasVideo: true,
    hasCalculator: true,
    hasChecklist: true
  },
  {
    id: 'harris-county-health-insurance-guide',
    title: 'Complete Guide to Health Insurance in Harris County, Texas 2025',
    slug: 'health-insurance-harris-county-guide',
    excerpt: 'Comprehensive Harris County health insurance guide covering Marketplace plans, subsidies, Houston healthcare access, and coverage for 650,000+ uninsured residents.',
    category: ['Health Insurance', 'County Guides'],
    publishDate: '2025-01-15',
    readTime: '12 min read',
    author: 'El-Mag Insurance Team',
    featured: true,
    insuranceType: ['health-marketplace'],
    rating: 4.7,
    hasCalculator: true,
    hasChecklist: true
  },
  {
    id: 'medicare-advantage-vs-original',
    title: 'Medicare Advantage vs Original Medicare: Which is Right for You?',
    slug: 'medicare-advantage-vs-original',
    excerpt: 'Comprehensive comparison of Medicare Advantage and Original Medicare to help you make the best choice for your healthcare needs.',
    category: ['Medicare', 'Comparison Guides'],
    publishDate: '2025-01-10',
    readTime: '10 min read',
    author: 'Eric Salinas',
    featured: true,
    insuranceType: ['medicare-advantage', 'medicare-supplement'],
    rating: 4.9,
    hasVideo: true,
    hasCalculator: true
  },
  {
    id: 'enrollment-periods-explained',
    title: 'Medicare Enrollment Periods Explained: When Can You Sign Up?',
    slug: 'enrollment-periods-explained',
    excerpt: 'Complete guide to Medicare enrollment periods including Initial Enrollment, Annual Enrollment, and Special Enrollment Periods.',
    category: ['Medicare', 'Enrollment'],
    publishDate: '2025-01-08',
    readTime: '8 min read',
    author: 'Magdalena Salinas',
    featured: false,
    insuranceType: ['medicare-advantage', 'medicare-supplement', 'medicare-part-d'],
    rating: 4.6,
    hasChecklist: true
  },
  {
    id: 'medicare-supplement-plan-g-guide',
    title: 'Medicare Supplement Plan G: The Most Popular Medigap Choice',
    slug: 'medicare-supplement-plan-g-guide',
    excerpt: 'Everything you need to know about Medicare Supplement Plan G, including benefits, costs, and why it\'s the most popular Medigap choice.',
    category: ['Medicare', 'Medicare Supplement'],
    publishDate: '2025-01-05',
    readTime: '12 min read',
    author: 'Eric Salinas',
    featured: true,
    insuranceType: ['medicare-supplement'],
    rating: 4.9,
    hasVideo: true,
    hasCalculator: true,
    hasChecklist: true
  },
  {
    id: 'aca-subsidies-guide',
    title: 'ACA Subsidies Guide: How to Save Money on Health Insurance',
    slug: 'aca-subsidies-guide',
    excerpt: 'Complete guide to ACA subsidies and premium tax credits. Learn how to qualify and maximize your savings on health insurance.',
    category: ['Health Insurance', 'ACA Marketplace'],
    publishDate: '2025-01-03',
    readTime: '14 min read',
    author: 'Elsa Galicia-Lona',
    featured: true,
    insuranceType: ['health-marketplace'],
    rating: 4.8,
    hasVideo: true,
    hasCalculator: true,
    hasChecklist: true
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    'Medicare': 'bg-blue-100 text-blue-800',
    'Health Insurance': 'bg-green-100 text-green-800',
    'County Guides': 'bg-orange-100 text-orange-800',
    'Enrollment': 'bg-red-100 text-red-800',
    'ACA Marketplace': 'bg-indigo-100 text-indigo-800',
    'Comparison Guides': 'bg-yellow-100 text-yellow-800',
    'Medicare Supplement': 'bg-purple-100 text-purple-800'
  };
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export default function BlogPostLinking({
  userContext = 'general',
  currentPostSlug,
  maxPosts = 3,
  layout = 'grid'
}: BlogPostLinkingProps) {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  const getRecommendations = (): BlogPost[] => {
    let recommendations = [...BLOG_POSTS];

    // Exclude current post if specified
    if (currentPostSlug) {
      recommendations = recommendations.filter(post => post.slug !== currentPostSlug);
    }

    // Filter by user context
    if (userContext !== 'general') {
      recommendations = recommendations.filter(post => 
        post.insuranceType.includes(userContext)
      );
    }

    // Sort by featured status, rating, and publish date
    recommendations.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (b.rating && a.rating && b.rating !== a.rating) return b.rating - a.rating;
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    });

    return recommendations.slice(0, maxPosts);
  };

  useEffect(() => {
    const recommendations = getRecommendations();
    setFilteredPosts(recommendations);
  }, [userContext, currentPostSlug, maxPosts]);

  if (filteredPosts.length === 0) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <p className="text-gray-600 mb-6">Explore our educational content to learn more about insurance options.</p>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View All Articles
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our educational content to learn more about insurance options and make informed decisions.
          </p>
        </div>

        {layout === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
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
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {layout === 'list' && (
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex gap-2">
                        {post.category.slice(0, 1).map((cat) => (
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

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 mb-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>By {post.author}</span>
                      <span>⏱️ {post.readTime}</span>
                      <span>📅 {new Date(post.publishDate).toLocaleDateString()}</span>
                      {post.rating && (
                        <div className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="ml-1">{post.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-medium transition-colors"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
