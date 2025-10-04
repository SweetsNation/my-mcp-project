import BlogPostLinking from '@/components/BlogPostLinking';
import ToolLinking from '@/components/ToolLinking';
import ResourceLinking from '@/components/ResourceLinking';
import { generateBlogListingSchema } from '@/lib/schema/blog-schema';
import { generatePageMetadata } from '@/lib/metadata';

// Structured Data for SEO
const structuredData = generateBlogListingSchema({
  pagePath: '/blog',
  pageTitle: 'Insurance Blog & Educational Resources | Medicare, Health Insurance & More',
  pageDescription: 'Expert insurance blog with educational articles on Medicare, health insurance, ACA Marketplace, and more. Get informed with our comprehensive guides and resources.'
});

export const metadata = generatePageMetadata({
  title: 'Insurance Blog & Educational Resources | Medicare, Health Insurance & More | El-Mag Insurance',
  description: 'Expert insurance blog with educational articles on Medicare, health insurance, ACA Marketplace, and more. Get informed with our comprehensive guides and resources.',
  url: '/blog',
  image: '/images/og-blog.jpg',
  imageAlt: 'El-Mag Insurance Blog - Medicare and Health Insurance Education',
  type: 'website',
  keywords: 'insurance blog, Medicare articles, health insurance guides, ACA Marketplace blog, insurance education, Medicare Advantage blog, Medicare Supplement articles',
});

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">📚</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insurance Education Blog</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Expert insights, comprehensive guides, and educational resources to help you make informed insurance decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Showcase */}
      <BlogPostLinking 
        userContext="general"
        maxPosts={6}
        layout="grid"
      />

      {/* Blog Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">
              Find articles organized by insurance type and topic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medicare</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Medicare Advantage vs Original Medicare</div>
                <div>• Medicare Supplement Plan G Guide</div>
                <div>• Enrollment Periods Explained</div>
                <div>• Medicare Part D Prescription Coverage</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health Insurance</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• ACA Marketplace Guides</div>
                <div>• Subsidies and Tax Credits</div>
                <div>• County-Specific Coverage</div>
                <div>• Enrollment Strategies</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">County Guides</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Miami-Dade County, Florida</div>
                <div>• Harris County, Texas</div>
                <div>• Local Healthcare Access</div>
                <div>• Regional Insurance Options</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comparison Guides</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Medicare Advantage vs Supplement</div>
                <div>• Plan G vs Plan N vs Plan F</div>
                <div>• Marketplace vs Employer Coverage</div>
                <div>• Cost-Benefit Analysis</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enrollment</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Medicare Enrollment Periods</div>
                <div>• ACA Open Enrollment</div>
                <div>• Special Enrollment Periods</div>
                <div>• Enrollment Checklists</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost & Savings</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• ACA Subsidies Guide</div>
                <div>• Medicare Cost Calculators</div>
                <div>• Savings Strategies</div>
                <div>• Financial Planning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles by Category</h2>
            <p className="text-lg text-gray-600">
              Discover our most popular and informative articles
            </p>
          </div>

          <div className="space-y-12">
            {/* Medicare Articles */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏥</span>
                Medicare Articles
              </h3>
              <BlogPostLinking
                userContext="medicare-advantage"
                maxPosts={3}
                layout="list"
              />
            </div>

            {/* Health Insurance Articles */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏛️</span>
                Health Insurance Articles
              </h3>
              <BlogPostLinking
                userContext="health-marketplace"
                maxPosts={3}
                layout="list"
              />
            </div>

            {/* Medicare Supplement Articles */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🛡️</span>
                Medicare Supplement Articles
              </h3>
              <BlogPostLinking
                userContext="medicare-supplement"
                maxPosts={3}
                layout="list"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <ToolLinking 
        currentTool=""
        userContext="general"
        showRelatedTools={true}
        maxTools={4}
        showFeatures={true}
        layout="grid"
      />

      {/* Educational Resources */}
      <ResourceLinking 
        currentResource=""
        currentCategory=""
        userContext="general"
        showTools={true}
        maxResources={4}
        maxTools={3}
      />

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Informed</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest insurance news, tips, and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Insurance Guidance?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our licensed experts are here to help you find the perfect coverage. 
            Get personalized recommendations based on your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors text-center inline-block"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-center inline-block"
            >
              Call 331-343-2584
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
