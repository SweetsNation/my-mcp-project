import type { Metadata } from 'next';
import Link from 'next/link';
import ResourceLinking from '@/components/ResourceLinking';
import { generateResourcesPageSchema } from '@/lib/schema/resources-schema';

// Structured Data for SEO
const structuredData = generateResourcesPageSchema();

export const metadata: Metadata = {
  title: 'Medicare Resources & Education - El-Mag Insurance',
  description: 'Learn about Medicare Advantage plans, enrollment periods, benefits, and more with our comprehensive educational resources.',
  keywords: 'Medicare education, Medicare Advantage resources, Medicare guide, enrollment help, benefits explanation',
  alternates: {
    canonical: 'https://elmaginsurance.com/resources',
  },
};

const articles = [
  {
    id: 'medicare-advantage-vs-original',
    title: 'Medicare Advantage vs Original Medicare: Which Is Right for You?',
    excerpt: 'Understand the key differences between Medicare Advantage and Original Medicare to make an informed decision about your healthcare coverage.',
    category: 'Comparison',
    readTime: '8 min read',
    date: '2024-03-15',
    featured: true
  },
  {
    id: 'enrollment-periods-explained',
    title: 'Medicare Enrollment Periods Explained',
    excerpt: 'Navigate Medicare enrollment periods including Annual Open Enrollment, Special Enrollment Periods, and more.',
    category: 'Enrollment',
    readTime: '6 min read',
    date: '2024-03-10',
    featured: true
  },
  {
    id: 'understanding-costs',
    title: 'Understanding Medicare Advantage Costs: Premiums, Deductibles, and More',
    excerpt: 'Break down the various costs associated with Medicare Advantage plans and how to budget for your healthcare expenses.',
    category: 'Costs',
    readTime: '7 min read',
    date: '2024-03-05',
    featured: true
  },
  {
    id: 'star-ratings-guide',
    title: 'Medicare Star Ratings: What They Mean and Why They Matter',
    excerpt: 'Learn how Medicare rates plans and what star ratings tell you about plan quality and performance.',
    category: 'Quality',
    readTime: '5 min read',
    date: '2024-02-28',
    featured: false
  },
  {
    id: 'prescription-drug-coverage',
    title: 'Prescription Drug Coverage in Medicare Advantage Plans',
    excerpt: 'Everything you need to know about Part D coverage, formularies, and pharmacy networks.',
    category: 'Benefits',
    readTime: '9 min read',
    date: '2024-02-20',
    featured: false
  },
  {
    id: 'dental-vision-benefits',
    title: 'Extra Benefits: Dental, Vision, and Hearing Coverage',
    excerpt: 'Explore the additional benefits that many Medicare Advantage plans offer beyond basic medical coverage.',
    category: 'Benefits',
    readTime: '6 min read',
    date: '2024-02-15',
    featured: false
  }
];

const categories = ['All', 'Comparison', 'Enrollment', 'Costs', 'Quality', 'Benefits'];

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Medicare Resources | Expert Education & Guidance</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your comprehensive guide to understanding Medicare Advantage plans and making informed healthcare decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-lg text-gray-600">Start with these essential guides to Medicare Advantage</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {articles.filter(article => article.featured).map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link href={`/resources/${article.id}`} className="hover:text-blue-600">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <Link 
                      href={`/resources/${article.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Resources</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 bg-gray-50 cursor-default"
                >
                  {category}
                </span>
              ))}
              <p className="w-full text-center text-sm text-gray-500 mt-4">Category filtering coming soon</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <Link href={`/resources/${article.id}`} className="hover:text-blue-600">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <Link 
                      href={`/resources/${article.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medicare Tools Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Medicare Tools & Calculators</h2>
            <p className="text-lg text-gray-600">Interactive tools to help you make informed decisions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Calculator</h3>
              <p className="text-gray-600 mb-4">Estimate your total Medicare Advantage costs including premiums, deductibles, and out-of-pocket expenses.</p>
              <Link href="/tools/cost-calculator" className="btn-primary inline-block text-center">Try Calculator</Link>
            </div>

            <div className="bg-green-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Plan Finder</h3>
              <p className="text-gray-600 mb-4">Search and compare Medicare Advantage plans available in your area based on your specific needs.</p>
              <Link href="/medicare-advantage" className="btn-primary inline-block text-center">Find Plans</Link>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enrollment Timeline</h3>
              <p className="text-gray-600 mb-4">Track important Medicare enrollment dates and deadlines personalized to your situation.</p>
              <Link href="/medicare-enrollment-timeline" className="btn-primary inline-block text-center">View Timeline</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Resource Linking */}
      <ResourceLinking 
        currentResource=""
        currentCategory=""
        userContext="general"
        showTools={true}
        maxResources={6}
        maxTools={6}
      />

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed About Medicare</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest Medicare news, tips, and updates delivered to your inbox monthly.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg opacity-75 cursor-not-allowed">
                Coming Soon
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-3">
              No spam. Unsubscribe at any time. Your email is safe with us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}