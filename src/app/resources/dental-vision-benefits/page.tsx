import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { generateArticlePageSchema } from '@/lib/schema/article-schema';

// Structured Data for SEO
const structuredData = generateArticlePageSchema({
  pagePath: '/resources/dental-vision-benefits',
  pageTitle: 'Extra Benefits: Dental, Vision, and Hearing Coverage',
  pageDescription: 'Complete guide to dental and vision benefits in Medicare Advantage plans. Learn about coverage options and costs.',
  datePublished: '2024-02-15',
  category: 'Benefits',
  wordCount: 900
});

export const metadata: Metadata = {
  title: 'Medicare Advantage Dental & Vision Benefits - El-Mag Insurance',
  description: 'Complete guide to dental and vision benefits in Medicare Advantage plans. Learn about coverage options and costs with El-Mag Insurance.',
  keywords: 'Medicare Advantage dental, vision benefits, Medicare dental coverage, Medicare vision coverage, supplemental benefits',
  alternates: {
    canonical: 'https://elmaginsurance.com/resources/dental-vision-benefits',
  },
};

export default function DentalVisionBenefitsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Resources', href: '/resources' },
            { label: 'Dental & Vision Benefits', href: '/resources/dental-vision-benefits' }
          ]} 
        />
        
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Medicare Advantage Dental & Vision Benefits | Extra Coverage Included
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how Medicare Advantage plans provide comprehensive dental and vision coverage that Original Medicare doesn't offer.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Dental & Vision Matter</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-4">
                  Original Medicare (Parts A & B) provides very limited dental and vision coverage. Medicare Advantage plans often include these benefits as supplemental coverage, helping you maintain your overall health and quality of life.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Health Connections</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Dental health linked to heart disease and diabetes</li>
                      <li>Eye exams detect glaucoma, diabetes complications</li>
                      <li>Early detection prevents costly treatments</li>
                      <li>Improves quality of life and independence</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Financial Benefits</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Preventive care reduces long-term costs</li>
                      <li>Coverage for routine cleanings and exams</li>
                      <li>Help with major dental and vision expenses</li>
                      <li>No separate premiums for included benefits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dental Benefits in Medicare Advantage</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">Preventive Dental Care</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Typically Covered:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>Routine cleanings (2 per year)</li>
                        <li>Oral exams and consultations</li>
                        <li>X-rays (bitewings and panoramic)</li>
                        <li>Fluoride treatments</li>
                        <li>Periodontal maintenance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Typical Costs:</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Cleaning & Exam:</span>
                          <span className="font-medium text-green-600">$0-$25</span>
                        </div>
                        <div className="flex justify-between">
                          <span>X-rays:</span>
                          <span className="font-medium text-green-600">$0-$15</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fluoride:</span>
                          <span className="font-medium text-green-600">$0-$10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-4">Basic Dental Services</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Common Services:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>Fillings (amalgam and composite)</li>
                        <li>Simple extractions</li>
                        <li>Root canals (anterior teeth)</li>
                        <li>Emergency dental care</li>
                        <li>Oral surgery consultations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Typical Coverage:</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Fillings:</span>
                          <span className="font-medium text-yellow-600">50-80% covered</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Extractions:</span>
                          <span className="font-medium text-yellow-600">50-70% covered</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Root Canals:</span>
                          <span className="font-medium text-yellow-600">50-60% covered</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-4">Major Dental Services</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Advanced Procedures:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>Crowns and bridges</li>
                        <li>Dentures (partial and full)</li>
                        <li>Root canals (posterior teeth)</li>
                        <li>Oral surgery</li>
                        <li>Periodontal treatment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Coverage Levels:</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Crowns:</span>
                          <span className="font-medium text-red-600">50% covered</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dentures:</span>
                          <span className="font-medium text-red-600">50% covered</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Annual Maximum:</span>
                          <span className="font-medium text-red-600">$1,000-$3,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vision Benefits in Medicare Advantage</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Routine Eye Exams</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">What's Included:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>Comprehensive eye exams</li>
                        <li>Refraction tests</li>
                        <li>Glaucoma screening</li>
                        <li>Diabetic eye exams</li>
                        <li>Vision correction consultation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Typical Coverage:</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Annual Eye Exam:</span>
                          <span className="font-medium text-blue-600">$0-$20 copay</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Frequency:</span>
                          <span className="font-medium">Once per year</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Network Required:</span>
                          <span className="font-medium">Usually yes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-4">Eyewear Coverage</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Eyeglasses:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>Frames allowance: $100-$300</li>
                        <li>Lens coverage for single vision</li>
                        <li>Bifocal and progressive lenses</li>
                        <li>Lens coatings (anti-glare, scratch-resistant)</li>
                        <li>Replacement frequency: 1-2 years</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Contact Lenses:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>Annual allowance: $100-$200</li>
                        <li>Covers disposable and extended wear</li>
                        <li>Fitting and evaluation included</li>
                        <li>Follow-up visits covered</li>
                        <li>Usually in lieu of eyeglasses</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-4">Enhanced Vision Benefits</h3>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-medium text-gray-800 mb-3">Some Premium Plans Include:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Higher allowances for frames and lenses</li>
                        <li>Designer frame options</li>
                        <li>Premium lens upgrades</li>
                        <li>Retinal imaging</li>
                      </ul>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Laser vision surgery discounts</li>
                        <li>Blue light filtering lenses</li>
                        <li>Photochromic (transition) lenses</li>
                        <li>Multiple pair discounts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Understanding Benefit Limitations</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="font-semibold text-yellow-800 mb-3">Important Coverage Limits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Dental Limitations:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Annual maximum benefits ($1,000-$3,000)</li>
                      <li>Waiting periods for major services</li>
                      <li>Network provider requirements</li>
                      <li>Pre-authorization for expensive procedures</li>
                      <li>Missing tooth exclusions may apply</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Vision Limitations:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Eyewear frequency limits (every 1-2 years)</li>
                      <li>Frame allowance maximums</li>
                      <li>Network provider requirements</li>
                      <li>Upgrade charges for premium options</li>
                      <li>Medical eye conditions covered differently</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Choosing Plans with Dental & Vision</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-4">Questions to Ask When Comparing Plans:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">For Dental Coverage:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>What's the annual maximum benefit?</li>
                      <li>Are there waiting periods?</li>
                      <li>Is my dentist in the network?</li>
                      <li>What preventive services are covered?</li>
                      <li>How much will major work cost me?</li>
                      <li>Are there any exclusions?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">For Vision Coverage:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>How much is the exam copay?</li>
                      <li>What's the eyewear allowance?</li>
                      <li>How often can I get new glasses?</li>
                      <li>Are contact lenses covered?</li>
                      <li>Is my eye doctor in network?</li>
                      <li>Are premium lens options covered?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Coverage Options</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Stand-Alone Dental Plans</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    If your Medicare Advantage plan has limited dental coverage, you can purchase separate dental insurance.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                    <li>Higher annual maximums available</li>
                    <li>More comprehensive coverage options</li>
                    <li>May have different provider networks</li>
                    <li>Additional monthly premium required</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Vision Insurance</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Separate vision plans may offer better coverage than Medicare Advantage vision benefits.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                    <li>Higher frame and lens allowances</li>
                    <li>More frequent replacement schedules</li>
                    <li>Broader network of providers</li>
                    <li>Usually low monthly premiums</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Discount Programs</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Some organizations offer discount programs for dental and vision care.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                    <li>Not insurance, but negotiated discounts</li>
                    <li>Lower upfront costs</li>
                    <li>May have limited provider networks</li>
                    <li>Good for routine care</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Maximizing Your Benefits</h2>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-4">Tips to Get the Most Value</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Dental Benefits:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Schedule cleanings early in the year</li>
                      <li>Spread major work across plan years</li>
                      <li>Use network providers for better rates</li>
                      <li>Get treatment plans approved in advance</li>
                      <li>Consider timing of expensive procedures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Vision Benefits:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Use your annual exam benefit</li>
                      <li>Plan eyewear purchases strategically</li>
                      <li>Ask about upgrade options and costs</li>
                      <li>Consider multiple pairs if allowed</li>
                      <li>Time purchases with benefit renewals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-blue-600 text-white p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Find Plans with Great Dental & Vision Benefits</h2>
              <p className="mb-4">
                Every Medicare Advantage plan offers different dental and vision benefits. Our licensed agents can help you find plans that best meet your oral health and vision needs while staying within your budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Compare Dental & Vision Plans
                </Link>
                <Link 
                  href="tel:331-343-2584" 
                  className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Call Now: 331-343-2584
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}