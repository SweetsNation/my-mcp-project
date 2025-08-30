'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { trackBlogFilter } from '@/lib/analytics';

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

interface RelatedTagsProps {
  currentPost?: BlogPost;
  allPosts: BlogPost[];
  maxTags?: number;
  maxRelatedPosts?: number;
  onTagClick?: (tag: string, relatedPosts: BlogPost[]) => void;
}

// Comprehensive tag definitions for all blog posts
const BLOG_POST_TAGS = {
  // Geographic tags
  'florida': ['miami-dade-health-insurance-guide'],
  'miami-dade': ['miami-dade-health-insurance-guide'],
  'texas': ['harris-county-health-insurance-guide'],
  'harris-county': ['harris-county-health-insurance-guide'],
  'houston': ['harris-county-health-insurance-guide'],
  
  // Insurance type tags
  'medicare-comparison': ['medicare-advantage-vs-original'],
  'original-medicare': ['medicare-advantage-vs-original'],
  'medicare-advantage': ['medicare-advantage-vs-original'],
  'medigap': ['medicare-supplement-plan-g-guide', 'medicare-supplement-plan-f-vs-plan-g', 'medicare-supplement-plan-n-guide'],
  'plan-g': ['medicare-supplement-plan-g-guide', 'medicare-supplement-plan-f-vs-plan-g'],
  'plan-f': ['medicare-supplement-plan-f-vs-plan-g'],
  'plan-n': ['medicare-supplement-plan-n-guide'],
  'plan-c': ['medicare-supplement-plan-c-discontinued'],
  
  // Process and enrollment tags
  'enrollment-periods': ['enrollment-periods-explained'],
  'initial-enrollment': ['enrollment-periods-explained'],
  'annual-enrollment': ['enrollment-periods-explained'],
  'special-enrollment': ['enrollment-periods-explained', 'special-enrollment-period-marketplace'],
  'medigap-enrollment': ['medigap-open-enrollment-guide'],
  'open-enrollment': ['medigap-open-enrollment-guide'],
  'guaranteed-issue': ['medigap-open-enrollment-guide', 'medicare-supplement-guaranteed-issue-rights'],
  
  // Financial tags
  'subsidies': ['miami-dade-health-insurance-guide', 'harris-county-health-insurance-guide', 'aca-subsidies-guide'],
  'aca-subsidies': ['aca-subsidies-guide'],
  'premium-tax-credits': ['aca-subsidies-guide'],
  'supplement-costs': ['medicare-supplement-costs-premiums'],
  'medigap-premiums': ['medicare-supplement-costs-premiums'],
  'deductibles': ['health-insurance-deductibles-explained'],
  
  // Plan types and comparison tags
  'bronze-plans': ['bronze-vs-silver-health-plans'],
  'silver-plans': ['bronze-vs-silver-health-plans'],
  'metal-tiers': ['bronze-vs-silver-health-plans'],
  'catastrophic-plans': ['marketplace-catastrophic-health-plans'],
  'young-adults': ['marketplace-catastrophic-health-plans'],
  
  // Special programs and accounts
  'hsa': ['health-savings-account-hsa-guide'],
  'health-savings-account': ['health-savings-account-hsa-guide'],
  'triple-tax-advantage': ['health-savings-account-hsa-guide'],
  'short-term-insurance': ['short-term-health-insurance-guide'],
  'temporary-coverage': ['short-term-health-insurance-guide'],
  
  // Demographics and community tags
  'bilingual': ['miami-dade-health-insurance-guide'],
  'spanish': ['miami-dade-health-insurance-guide'],
  'hispanic': ['miami-dade-health-insurance-guide'],
  'uninsured': ['miami-dade-health-insurance-guide', 'harris-county-health-insurance-guide'],
  
  // Content type tags
  'enrollment-guide': ['miami-dade-health-insurance-guide', 'harris-county-health-insurance-guide', 'health-insurance-marketplace-2025-guide'],
  'comparison': ['medicare-advantage-vs-original', 'medicare-supplement-plan-f-vs-plan-g', 'bronze-vs-silver-health-plans'],
  'costs': ['medicare-advantage-vs-original', 'medicare-supplement-costs-premiums', 'bronze-vs-silver-health-plans'],
  'benefits': ['medicare-advantage-vs-original', 'medicare-supplement-plan-g-guide'],
  'coverage-options': ['medicare-advantage-vs-original'],
  'decision-guide': ['medicare-advantage-vs-original', 'bronze-vs-silver-health-plans'],
  
  // Marketplace specific tags
  'marketplace': ['miami-dade-health-insurance-guide', 'harris-county-health-insurance-guide', 'health-insurance-marketplace-2025-guide'],
  'marketplace-2025': ['health-insurance-marketplace-2025-guide'],
  'aca-marketplace': ['aca-subsidies-guide', 'health-insurance-marketplace-2025-guide'],
  
  // Rights and protections
  'guaranteed-issue-rights': ['medicare-supplement-guaranteed-issue-rights'],
  'cant-be-denied': ['medicare-supplement-guaranteed-issue-rights'],
  'no-underwriting': ['medicare-supplement-guaranteed-issue-rights'],
  'qualifying-situations': ['medicare-supplement-guaranteed-issue-rights'],
  
  // Timing and deadlines
  'deadlines': ['enrollment-periods-explained'],
  'timing': ['enrollment-periods-explained'],
  'signup-windows': ['enrollment-periods-explained'],
  'qualifying-events': ['special-enrollment-period-marketplace'],
  'life-events': ['special-enrollment-period-marketplace'],
  
  // Administrative tags
  'county-specific': ['miami-dade-health-insurance-guide', 'harris-county-health-insurance-guide'],
  'healthcare-access': ['harris-county-health-insurance-guide'],
  'discontinued-plans': ['medicare-supplement-plan-c-discontinued'],
  'grandfather-provisions': ['medicare-supplement-plan-c-discontinued']
};

// Semantic tag relationships for better content discovery
const TAG_RELATIONSHIPS = {
  'medicare-advantage': ['medicare-comparison', 'original-medicare', 'costs', 'benefits', 'coverage-options'],
  'medigap': ['plan-g', 'plan-f', 'plan-n', 'supplement-costs', 'guaranteed-issue'],
  'enrollment-periods': ['initial-enrollment', 'annual-enrollment', 'special-enrollment', 'deadlines', 'timing'],
  'subsidies': ['aca-subsidies', 'premium-tax-credits', 'marketplace'],
  'florida': ['miami-dade', 'bilingual', 'spanish', 'hispanic'],
  'texas': ['harris-county', 'houston', 'healthcare-access'],
  'bronze-plans': ['silver-plans', 'metal-tiers', 'marketplace', 'deductibles'],
  'hsa': ['health-savings-account', 'triple-tax-advantage', 'deductibles'],
  'marketplace': ['aca-marketplace', 'enrollment-guide', 'subsidies'],
  'costs': ['deductibles', 'supplement-costs', 'medigap-premiums']
};

// Tag popularity weights for trending analysis
const TAG_WEIGHTS = {
  'medicare-advantage': 0.95,
  'medigap': 0.90,
  'enrollment-periods': 0.85,
  'subsidies': 0.80,
  'marketplace': 0.75,
  'costs': 0.70,
  'plan-g': 0.65,
  'hsa': 0.60,
  'special-enrollment': 0.55,
  'guaranteed-issue': 0.50
};

const getTagColor = (tag: string) => {
  // Assign colors based on tag categories
  if (['florida', 'texas', 'miami-dade', 'harris-county', 'houston'].includes(tag)) {
    return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
  }
  if (['medicare-comparison', 'original-medicare', 'medicare-advantage', 'medigap'].includes(tag)) {
    return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
  }
  if (['subsidies', 'aca-subsidies', 'premium-tax-credits', 'costs'].includes(tag)) {
    return 'bg-green-100 text-green-800 hover:bg-green-200';
  }
  if (['enrollment-periods', 'special-enrollment', 'open-enrollment'].includes(tag)) {
    return 'bg-red-100 text-red-800 hover:bg-red-200';
  }
  if (['bronze-plans', 'silver-plans', 'catastrophic-plans', 'plan-g', 'plan-f', 'plan-n'].includes(tag)) {
    return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
  }
  if (['hsa', 'health-savings-account', 'short-term-insurance'].includes(tag)) {
    return 'bg-teal-100 text-teal-800 hover:bg-teal-200';
  }
  if (['bilingual', 'spanish', 'hispanic', 'uninsured'].includes(tag)) {
    return 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200';
  }
  return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
};

export default function RelatedTags({
  currentPost,
  allPosts,
  maxTags = 8,
  maxRelatedPosts = 6,
  onTagClick
}: RelatedTagsProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(false);

  // Get all tags for current post
  const currentPostTags = useMemo(() => {
    if (!currentPost?.tags) return [];
    return currentPost.tags;
  }, [currentPost]);

  // Get related tags based on current post, semantic relationships, and trending
  const relatedTags = useMemo(() => {
    if (!currentPost) return [];

    const tagScores = new Map<string, number>();
    
    // Add current post's tags with high base score
    if (currentPost.tags) {
      currentPost.tags.forEach(tag => {
        const weight = TAG_WEIGHTS[tag as keyof typeof TAG_WEIGHTS] || 0.3;
        tagScores.set(tag, weight + 0.5); // Base score + tag popularity
      });
      
      // Add semantically related tags
      currentPost.tags.forEach(tag => {
        const relatedTags = TAG_RELATIONSHIPS[tag as keyof typeof TAG_RELATIONSHIPS];
        if (relatedTags) {
          relatedTags.forEach(relatedTag => {
            const weight = TAG_WEIGHTS[relatedTag as keyof typeof TAG_WEIGHTS] || 0.2;
            const currentScore = tagScores.get(relatedTag) || 0;
            tagScores.set(relatedTag, currentScore + weight * 0.7); // 70% of full weight
          });
        }
      });
    }
    
    // Add tags from similar posts with weighted scoring
    allPosts.forEach(post => {
      if (post.id === currentPost.id) return;
      
      // Calculate similarity score
      let similarityScore = 0;
      
      // Category similarity
      const sharedCategories = post.category.filter(cat => 
        currentPost.category.includes(cat)
      ).length;
      similarityScore += sharedCategories * 0.3;
      
      // Insurance type similarity
      const sharedInsuranceTypes = post.insuranceType.filter(type => 
        currentPost.insuranceType.includes(type)
      ).length;
      similarityScore += sharedInsuranceTypes * 0.4;
      
      // Recent post bonus (posts from last 30 days get higher weight)
      const postDate = new Date(post.publishDate);
      const daysSincePublish = Math.floor((Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24));
      const recencyBonus = daysSincePublish <= 30 ? 0.2 : 0;
      
      if (similarityScore > 0 && post.tags) {
        post.tags.forEach(tag => {
          const weight = TAG_WEIGHTS[tag as keyof typeof TAG_WEIGHTS] || 0.1;
          const currentScore = tagScores.get(tag) || 0;
          const newScore = weight * similarityScore + recencyBonus;
          tagScores.set(tag, currentScore + newScore);
        });
      }
    });

    // Sort tags by score and return top results
    return Array.from(tagScores.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, maxTags)
      .map(([tag]) => tag);
  }, [currentPost, allPosts, maxTags]);

  // Get all available tags from the blog posts
  const allAvailableTags = useMemo(() => {
    const tagSet = new Set<string>();
    allPosts.forEach(post => {
      if (post.tags) {
        post.tags.forEach(tag => tagSet.add(tag));
      }
    });
    // Also add predefined tags from BLOG_POST_TAGS
    Object.keys(BLOG_POST_TAGS).forEach(tag => tagSet.add(tag));
    return Array.from(tagSet).sort();
  }, [allPosts]);

  // Filter tags based on search term
  const filteredTags = useMemo(() => {
    if (!searchTerm.trim()) return relatedTags;
    
    return allAvailableTags.filter(tag =>
      tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tag.replace('-', ' ').toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, maxTags);
  }, [searchTerm, relatedTags, allAvailableTags, maxTags]);

  // Get posts related to a specific tag
  const getPostsByTag = (tag: string): BlogPost[] => {
    return allPosts.filter(post => 
      post.tags?.includes(tag) || 
      post.title.toLowerCase().includes(tag.replace('-', ' ')) ||
      post.excerpt.toLowerCase().includes(tag.replace('-', ' '))
    ).slice(0, maxRelatedPosts);
  };

  // Generate smart recommendations based on current content
  const getSmartRecommendations = () => {
    if (!currentPost) return [];

    const recommendations: Array<{reason: string, tags: string[]}> = [];

    // Enrollment timing recommendations
    if (currentPostTags.some(tag => ['medicare-advantage', 'medigap'].includes(tag))) {
      recommendations.push({
        reason: "Learn about enrollment deadlines and timing",
        tags: ['enrollment-periods', 'special-enrollment', 'deadlines']
      });
    }

    // Cost-related recommendations
    if (currentPostTags.some(tag => ['plan-g', 'plan-f', 'plan-n'].includes(tag))) {
      recommendations.push({
        reason: "Compare costs and premiums across different plans",
        tags: ['supplement-costs', 'medigap-premiums', 'costs']
      });
    }

    // Geographic recommendations
    if (currentPostTags.some(tag => ['florida', 'texas'].includes(tag))) {
      recommendations.push({
        reason: "Explore location-specific insurance options",
        tags: ['county-specific', 'subsidies', 'marketplace']
      });
    }

    // HSA recommendations for marketplace content
    if (currentPostTags.some(tag => ['bronze-plans', 'silver-plans', 'marketplace'].includes(tag))) {
      recommendations.push({
        reason: "Maximize savings with Health Savings Accounts",
        tags: ['hsa', 'health-savings-account', 'deductibles']
      });
    }

    // Rights and protections for Medicare content
    if (currentPostTags.some(tag => ['medigap', 'supplement-costs'].includes(tag))) {
      recommendations.push({
        reason: "Understand your guaranteed coverage rights",
        tags: ['guaranteed-issue', 'guaranteed-issue-rights', 'no-underwriting']
      });
    }

    // Default recommendations for broader appeal
    if (recommendations.length === 0) {
      recommendations.push(
        {
          reason: "Explore popular insurance topics and comparisons",
          tags: ['medicare-advantage', 'costs', 'marketplace']
        },
        {
          reason: "Learn about enrollment periods and deadlines",
          tags: ['enrollment-periods', 'special-enrollment', 'timing']
        }
      );
    }

    return recommendations;
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    const relatedPosts = getPostsByTag(tag);
    
    // Track tag usage
    trackBlogFilter('category', `tag:${tag}`, relatedPosts.length);
    
    if (onTagClick) {
      onTagClick(tag, relatedPosts);
    }
  };

  const displayTags = showSearch ? filteredTags : relatedTags;

  if (relatedTags.length === 0 && !showSearch) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">🏷️ Related Topics</h3>
        <button
          onClick={() => {
            setShowSearch(!showSearch);
            setSearchTerm('');
            setSelectedTag(null);
          }}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          {showSearch ? '← Back to Related' : '🔍 Search All Tags'}
        </button>
      </div>

      {/* Search Input */}
      {showSearch && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search tags... (e.g., medicare, enrollment, costs)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      )}
      
      {/* Tags Cloud */}
      <div className="flex flex-wrap gap-2 mb-6">
        {displayTags.map((tag) => {
          const postCount = getPostsByTag(tag).length;
          return (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`
                inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full 
                transition-colors cursor-pointer relative
                ${selectedTag === tag 
                  ? 'bg-blue-600 text-white' 
                  : getTagColor(tag)
                }
              `}
            >
              #{tag.replace('-', ' ')}
              {postCount > 0 && (
                <span className="ml-1 text-xs opacity-75">({postCount})</span>
              )}
            </button>
          );
        })}
      </div>

      {showSearch && searchTerm && displayTags.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          <p>No tags found matching "{searchTerm}"</p>
          <p className="text-sm mt-1">Try searching for: medicare, enrollment, costs, plans</p>
        </div>
      )}

      {/* Related Posts for Selected Tag */}
      {selectedTag && (
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-md font-medium text-gray-800 mb-3">
            Articles about "{selectedTag.replace('-', ' ')}"
          </h4>
          <div className="space-y-3">
            {getPostsByTag(selectedTag).map((post) => (
              <div key={post.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    post.featured ? 'bg-yellow-400' : 'bg-blue-400'
                  }`} />
                </div>
                <div className="flex-grow">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="block hover:bg-white hover:shadow-sm rounded p-2 transition-all"
                  >
                    <h5 className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
                      {post.title}
                    </h5>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                      <span>⏱️ {post.readTime}</span>
                      <span>👤 {post.author}</span>
                      {post.rating && (
                        <span className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="ml-1">{post.rating}</span>
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Smart Recommendations */}
      {!selectedTag && !showSearch && relatedTags.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-3">💡 You might also like</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {getSmartRecommendations().slice(0, 2).map((recommendation, index) => (
              <div key={index} className="bg-white rounded-lg p-3 border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-500 text-sm">🎯</span>
                  <div className="flex-grow">
                    <p className="text-sm text-gray-700 mb-2">{recommendation.reason}</p>
                    <div className="flex flex-wrap gap-1">
                      {recommendation.tags.slice(0, 3).map(tag => (
                        <button
                          key={tag}
                          onClick={() => handleTagClick(tag)}
                          className={`inline-flex items-center px-2 py-1 text-xs rounded-md ${getTagColor(tag)}`}
                        >
                          #{tag.replace('-', ' ')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tag Statistics */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{displayTags.length} {showSearch ? 'matching' : 'related'} topics</span>
          {selectedTag && (
            <span>{getPostsByTag(selectedTag).length} articles found</span>
          )}
        </div>
      </div>
    </div>
  );
}