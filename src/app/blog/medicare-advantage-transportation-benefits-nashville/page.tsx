import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { generateBlogPostSchema } from '@/lib/schema/blog-schema'

const blogPostData = {
  title: 'Medicare Advantage Transportation Benefits in Nashville 2025: Free Rides to Doctor Appointments',
  description: 'Discover Medicare Advantage plans in Nashville offering free transportation to medical appointments. Compare ride benefits, wheelchair-accessible vehicles, and non-emergency medical transportation (NEMT) coverage.',
  publishDate: '2025-01-15',
  modifiedDate: '2025-01-15',
  author: 'El-Mag Insurance',
  category: 'Medicare Advantage',
  keywords: 'Medicare Advantage transportation benefits Nashville, free rides to doctor appointments Nashville, NEMT Nashville, wheelchair accessible transportation Medicare Nashville, Nashville Medicare transportation, Davidson County Medicare rides, WeGo Access Medicare, non-emergency medical transportation Tennessee'
}

export const metadata: Metadata = {
  title: 'Medicare Advantage Transportation Benefits in Nashville 2025 | Free Rides to Doctor Appointments',
  description: 'Discover Medicare Advantage plans in Nashville offering free transportation to medical appointments. Compare ride benefits, wheelchair-accessible vehicles, and non-emergency medical transportation (NEMT) coverage.',
  keywords: 'Medicare Advantage transportation benefits Nashville, free rides to doctor appointments Nashville, NEMT Nashville, wheelchair accessible transportation Medicare Nashville, Nashville Medicare transportation, Davidson County Medicare rides, WeGo Access Medicare, non-emergency medical transportation Tennessee',
  openGraph: {
    title: 'Medicare Advantage Transportation Benefits in Nashville | Free Rides to Doctor Appointments',
    description: 'Medicare Advantage plans in Nashville offer free transportation to medical appointments. Compare ride benefits and NEMT coverage.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/blog/medicare-advantage-transportation-benefits-nashville',
  },
}

export default function MedicareAdvantageTransportationBenefitsNashvillePage() {
  const structuredData = generateBlogPostSchema({
    pagePath: '/blog/medicare-advantage-transportation-benefits-nashville',
    pageTitle: blogPostData.title,
    pageDescription: blogPostData.description,
    datePublished: blogPostData.publishDate,
    dateModified: blogPostData.modifiedDate,
    author: blogPostData.author,
    category: blogPostData.category,
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Analytics Tracking */}
      <LandingPageAnalytics
        pageType="blog"
        pageTitle="Medicare Advantage Transportation Benefits Nashville"
        county="Davidson County"
        state="Tennessee"
        demographics={{
          maPenetrationRate: 49
        }}
        keyMetrics={{
          total_beneficiaries: 135000,
          available_ma_plans: 52,
          average_premium: 0,
          zero_premium_plans: 28,
          content_type: 'blog_post',
          page_category: 'medicare_advantage_transportation'
        }}
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Medicare Advantage Transportation Benefits Nashville</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              Medicare Advantage
            </span>
            <span className="ml-3 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              Transportation Benefits
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Medicare Advantage Transportation Benefits in Nashville 2025: Free Rides to Doctor Appointments
          </h1>

          <div className="flex items-center text-gray-600 text-sm mb-6">
            <time dateTime={blogPostData.publishDate}>January 15, 2025</time>
            <span className="mx-3">•</span>
            <span>14 min read</span>
            <span className="mx-3">•</span>
            <span>Davidson County, Tennessee</span>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            Getting to medical appointments can be challenging for Nashville seniors without reliable transportation. Many
            Medicare Advantage plans in Davidson County now offer free rides to doctor appointments, pharmacies, and
            health-related errands. This comprehensive guide explores transportation benefits, wheelchair-accessible options,
            and how to maximize your Medicare Advantage ride benefits in Nashville.
          </p>
        </header>

        {/* Why Transportation Benefits Matter in Nashville */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🚗 Why Transportation Benefits Matter for Nashville Seniors
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Nashville's Transportation Challenges for Medicare Beneficiaries
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-4">Transportation Barriers:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>🚌 <strong>Limited public transit coverage:</strong> WeGo bus routes don't reach many Nashville neighborhoods</li>
                  <li>🚕 <strong>Expensive rideshare costs:</strong> Uber/Lyft to medical appointments can cost $15-$40 each way</li>
                  <li>🚗 <strong>No longer driving:</strong> 30% of Nashville seniors age 75+ have stopped driving</li>
                  <li>♿ <strong>Mobility limitations:</strong> Need wheelchair-accessible vehicles for medical appointments</li>
                  <li>🏥 <strong>Sprawling medical centers:</strong> Vanderbilt, HCA, Ascension hospitals spread across metro area</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-4">Impact of Missed Appointments:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>❌ <strong>Worsening chronic conditions:</strong> Diabetes, hypertension, heart disease</li>
                  <li>💊 <strong>Medication non-adherence:</strong> Can't pick up prescriptions from pharmacy</li>
                  <li>🏥 <strong>Preventable ER visits:</strong> Skipped preventive care leads to emergencies</li>
                  <li>💰 <strong>Higher healthcare costs:</strong> Delayed treatment is more expensive</li>
                  <li>😞 <strong>Social isolation:</strong> Transportation barriers prevent community engagement</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
              <h4 className="font-semibold text-green-900 mb-3">💡 The Solution: Medicare Advantage Transportation Benefits</h4>
              <p className="text-gray-700 leading-relaxed">
                Many Medicare Advantage plans in Nashville now include <strong>free transportation to medical appointments</strong>
                as a supplemental benefit. These plans provide <strong>24-96 one-way trips per year</strong> to doctor appointments,
                pharmacies, dialysis centers, and even fitness centers. For Nashville seniors without reliable transportation, this
                benefit can be life-changing—ensuring they never miss important medical care due to lack of a ride.
              </p>
            </div>
          </div>
        </section>

        {/* Nashville Medicare Advantage Plans with Transportation Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🚕 Nashville Medicare Advantage Plans with the Best Transportation Benefits
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Humana Gold Plus H1036-164</h3>
                <p className="text-blue-100">Most Generous Transportation Benefit in Nashville</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Transportation Benefit:</h4>
                  <div className="bg-blue-50 rounded-lg p-6 mb-4">
                    <p className="text-2xl font-bold text-blue-900 mb-2">96 one-way trips per year</p>
                    <p className="text-gray-700">= 48 round trips to medical appointments</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Where you can go:</strong> Doctor appointments, pharmacies, hospitals, dialysis centers, dental/vision appointments, fitness centers</li>
                    <li>✓ <strong>Scheduling:</strong> Call Humana GoRide 3 business days in advance</li>
                    <li>✓ <strong>Wheelchair accessible:</strong> Yes, available upon request</li>
                    <li>✓ <strong>Service area:</strong> Within Davidson County + surrounding counties (Williamson, Rutherford, Sumner, Wilson)</li>
                    <li>✓ <strong>Companion rides:</strong> One companion can ride with you at no extra cost</li>
                    <li>✓ <strong>No copay:</strong> $0 per trip</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">How to Schedule Rides:</h4>
                  <ol className="space-y-3 text-gray-700">
                    <li><strong>1. Call Humana GoRide:</strong> 1-844-702-8512 (TTY: 711)</li>
                    <li><strong>2. Provide appointment details:</strong> Date, time, address of medical appointment</li>
                    <li><strong>3. Schedule pickup:</strong> Ride picks you up at your home 30-60 minutes before appointment</li>
                    <li><strong>4. Return ride:</strong> Driver waits or returns after appointment to bring you home</li>
                  </ol>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Nashville seniors who need frequent rides to medical appointments, dialysis patients,
                    those with multiple chronic conditions requiring regular doctor visits, seniors without family nearby.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">UnitedHealthcare Dual Complete (HMO D-SNP)</h3>
                <p className="text-green-100">Best for Dual-Eligible (Medicare + TennCare Medicaid)</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Transportation Benefit:</h4>
                  <div className="bg-green-50 rounded-lg p-6 mb-4">
                    <p className="text-2xl font-bold text-green-900 mb-2">48 one-way trips per year</p>
                    <p className="text-gray-700">= 24 round trips to medical appointments</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Where you can go:</strong> Doctor appointments, pharmacies, hospitals, TennCare offices, social services appointments</li>
                    <li>✓ <strong>Scheduling:</strong> Call UnitedHealthcare 48 hours in advance</li>
                    <li>✓ <strong>Wheelchair accessible:</strong> Yes, specify when scheduling</li>
                    <li>✓ <strong>Service area:</strong> Davidson County + surrounding Tennessee counties</li>
                    <li>✓ <strong>Additional benefit:</strong> $75/quarter over-the-counter (OTC) allowance (can use for transportation if needed)</li>
                    <li>✓ <strong>No copay:</strong> $0 per trip for dual-eligible members</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Who Qualifies for Dual Complete:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Must have both <strong>Medicare and TennCare Medicaid</strong></li>
                    <li>✓ Typically qualify if receiving SSI or Medicaid</li>
                    <li>✓ Check TennCare eligibility: 1-855-259-0701</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Low-income Nashville seniors who qualify for both Medicare and TennCare Medicaid,
                    dual-eligible beneficiaries needing rides to TennCare appointments and medical care.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Aetna Medicare Eagle (HMO)</h3>
                <p className="text-purple-100">Flexible Transportation + Fitness Rides</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Transportation Benefit:</h4>
                  <div className="bg-purple-50 rounded-lg p-6 mb-4">
                    <p className="text-2xl font-bold text-purple-900 mb-2">60 one-way trips per year</p>
                    <p className="text-gray-700">= 30 round trips to medical appointments + fitness centers</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Where you can go:</strong> Doctor appointments, pharmacies, hospitals, fitness centers (YMCA, Planet Fitness, SilverSneakers locations)</li>
                    <li>✓ <strong>Scheduling:</strong> Call ModivCare 3 days in advance</li>
                    <li>✓ <strong>Wheelchair accessible:</strong> Yes, request when booking</li>
                    <li>✓ <strong>Service area:</strong> Davidson County + 50-mile radius</li>
                    <li>✓ <strong>Fitness benefit:</strong> Use trips for SilverSneakers gym visits (encourages healthy lifestyle)</li>
                    <li>✓ <strong>No copay:</strong> $0 per trip</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Active Nashville seniors who want transportation to both medical appointments AND
                    fitness centers, those using SilverSneakers gym memberships, seniors prioritizing preventive health.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Cigna Preferred Medicare (HMO)</h3>
                <p className="text-orange-100">Nationwide Coverage for Snowbirds</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Transportation Benefit:</h4>
                  <div className="bg-orange-50 rounded-lg p-6 mb-4">
                    <p className="text-2xl font-bold text-orange-900 mb-2">40 one-way trips per year</p>
                    <p className="text-gray-700">= 20 round trips to medical appointments</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Where you can go:</strong> Doctor appointments, pharmacies, hospitals, urgent care</li>
                    <li>✓ <strong>Scheduling:</strong> Call 72 hours in advance</li>
                    <li>✓ <strong>Wheelchair accessible:</strong> Yes, specify need when scheduling</li>
                    <li>✓ <strong>Service area:</strong> Davidson County (but plan has nationwide emergency coverage)</li>
                    <li>✓ <strong>Snowbird benefit:</strong> If traveling, can use emergency coverage nationwide</li>
                    <li>✓ <strong>No copay:</strong> $0 per trip</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Nashville seniors who travel frequently or spend winters in Florida/Arizona,
                    snowbirds needing flexible coverage, those with family in other states.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">WellCare by Allwell (HMO)</h3>
                <p className="text-red-100">Grocery & Pharmacy Delivery Option</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Transportation Benefit:</h4>
                  <div className="bg-red-50 rounded-lg p-6 mb-4">
                    <p className="text-2xl font-bold text-red-900 mb-2">36 one-way trips per year</p>
                    <p className="text-gray-700">= 18 round trips to medical appointments</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Where you can go:</strong> Doctor appointments, pharmacies, hospitals, grocery stores (limited)</li>
                    <li>✓ <strong>Scheduling:</strong> Call 48 hours in advance</li>
                    <li>✓ <strong>Wheelchair accessible:</strong> Yes, available upon request</li>
                    <li>✓ <strong>Service area:</strong> Davidson County</li>
                    <li>✓ <strong>Unique benefit:</strong> Home delivery for prescriptions and groceries (reduces need for some trips)</li>
                    <li>✓ <strong>Meal delivery:</strong> 28 meals after hospital discharge (no transportation needed for food)</li>
                    <li>✓ <strong>No copay:</strong> $0 per trip</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Nashville seniors who prefer home delivery for prescriptions and groceries,
                    those recovering from hospitalization, homebound seniors needing meals delivered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Transportation Benefits Work */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🗓️ How Medicare Advantage Transportation Benefits Work in Nashville
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Step-by-Step: Scheduling Your Ride</h3>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Step 1: Verify Your Transportation Benefit</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>📞 <strong>Call your Medicare Advantage plan:</strong> Number on back of your member ID card</li>
                    <li>❓ <strong>Ask:</strong> "How many transportation trips do I have per year?"</li>
                    <li>📋 <strong>Confirm:</strong> Where you can use trips (medical appointments, pharmacy, fitness centers)</li>
                    <li>♿ <strong>Specify needs:</strong> Mention if you need wheelchair-accessible vehicle</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Step 2: Schedule Your Appointment</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>📅 <strong>Book doctor appointment first:</strong> Know exact date, time, and address</li>
                    <li>🏥 <strong>Get appointment confirmation:</strong> From Vanderbilt, HCA TriStar, Ascension, or your doctor's office</li>
                    <li>📝 <strong>Write down details:</strong> Appointment time, doctor name, address, phone number</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Step 3: Request Transportation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>📞 <strong>Call your plan's transportation line:</strong> 2-3 business days before appointment (some require 48-72 hours notice)</li>
                    <li>🗣️ <strong>Provide information:</strong>
                      <ul className="ml-6 mt-2 space-y-1">
                        <li>• Your member ID number</li>
                        <li>• Appointment date and time</li>
                        <li>• Pick-up address (your home)</li>
                        <li>• Destination address (doctor's office)</li>
                        <li>• Estimated appointment duration</li>
                        <li>• Any mobility needs (wheelchair, walker, cane)</li>
                      </ul>
                    </li>
                    <li>✅ <strong>Get confirmation number:</strong> Write it down for your records</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Step 4: Day of Your Ride</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>⏰ <strong>Be ready early:</strong> Driver will arrive within 30-minute pickup window</li>
                    <li>🆔 <strong>Bring your Medicare card:</strong> Driver may need to verify your membership</li>
                    <li>📱 <strong>Have driver's phone number:</strong> In case you need to coordinate pickup</li>
                    <li>🚗 <strong>Wait for driver:</strong> Most services call or text when they arrive</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Step 5: Return Ride Home</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🏥 <strong>After appointment:</strong> Driver will either wait or return at scheduled time</li>
                    <li>📞 <strong>If driver is waiting:</strong> Call/text driver when appointment ends</li>
                    <li>🕐 <strong>If scheduled return:</strong> Be ready at designated pickup time</li>
                    <li>🏠 <strong>Ride home:</strong> Driver takes you directly back to your pickup address</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h4 className="font-semibold text-yellow-900 mb-3">⚠️ Important Tips for Nashville Riders:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>🚫 <strong>Don't use Uber/Lyft and expect reimbursement:</strong> You must use the plan's transportation vendor (Humana GoRide, ModivCare, etc.)</li>
                <li>📅 <strong>Schedule in advance:</strong> Last-minute requests (same-day) usually cannot be accommodated</li>
                <li>⏱️ <strong>Allow extra time:</strong> Medical transport may pick up multiple passengers; factor in 30-60 minute cushion</li>
                <li>♿ <strong>Request accessibility early:</strong> Wheelchair-accessible vehicles have limited availability</li>
                <li>🌧️ <strong>Weather delays:</strong> Nashville winter ice/snow may delay pickups—call ahead if weather is bad</li>
                <li>📞 <strong>Keep confirmation numbers:</strong> In case there's a dispute about a ride or no-show</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Nashville Transportation Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🚌 Nashville Public & Community Transportation Resources for Seniors
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">
                Beyond Medicare: Additional Transportation Options in Nashville
              </h3>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 mb-3">1. WeGo Access (Paratransit)</h4>
                  <p className="text-gray-700 mb-3">
                    Nashville's ADA paratransit service for individuals with disabilities who cannot use fixed-route buses.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>💰 <strong>Cost:</strong> $4.50 per one-way trip (same as regular bus fare)</li>
                    <li>📞 <strong>Eligibility:</strong> Must apply and be certified as unable to use fixed-route buses due to disability</li>
                    <li>🗓️ <strong>Scheduling:</strong> Call 615-862-5950 to schedule rides 1-7 days in advance</li>
                    <li>🚐 <strong>Service area:</strong> ¾ mile from WeGo bus routes in Davidson County</li>
                    <li>♿ <strong>Wheelchair accessible:</strong> Yes, all vehicles</li>
                    <li>📋 <strong>How to apply:</strong> WeGo Access Application at WeGoPublicTransit.com</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 mb-3">2. Senior Citizen Services Centers Transportation</h4>
                  <p className="text-gray-700 mb-3">
                    Davidson County Senior Centers offer free or low-cost transportation for seniors age 60+.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>💰 <strong>Cost:</strong> Free or suggested donation ($1-$5)</li>
                    <li>🏢 <strong>Service:</strong> Rides to senior centers, grocery stores, medical appointments (limited availability)</li>
                    <li>📞 <strong>Contact:</strong> Your local senior center
                      <ul className="ml-6 mt-2 space-y-1">
                        <li>• <strong>East Park Senior Center:</strong> 615-862-8452</li>
                        <li>• <strong>Knowles Senior Center:</strong> 615-743-3400</li>
                        <li>• <strong>Madison Senior Center:</strong> 615-862-8467</li>
                        <li>• <strong>Napier Senior Center:</strong> 615-862-8466</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 mb-3">3. Volunteer-Based Rides</h4>
                  <p className="text-gray-700 mb-3">
                    Nashville nonprofits offering volunteer driver programs for seniors.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>🚗 <strong>Faith-Based Programs:</strong> Many Nashville churches offer volunteer rides to medical appointments</li>
                    <li>📞 <strong>United Way 211:</strong> Dial 211 to find volunteer transportation services in your area</li>
                    <li>🏥 <strong>Hospital Programs:</strong> Vanderbilt and HCA TriStar sometimes have volunteer driver programs—call your hospital social worker</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 mb-3">4. Family & Friends (Mileage Reimbursement)</h4>
                  <p className="text-gray-700 mb-3">
                    Some Nashville Medicare Advantage plans reimburse family/friends for driving you to appointments.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>📝 <strong>Check your plan:</strong> Ask if they offer mileage reimbursement for non-medical drivers</li>
                    <li>💵 <strong>Reimbursement rate:</strong> Typically $0.16-$0.25 per mile</li>
                    <li>📋 <strong>How it works:</strong> Family/friend drives you to appointment, you submit mileage form to plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wheelchair Accessible Transportation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ♿ Wheelchair-Accessible Transportation in Nashville Medicare Advantage Plans
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">
              What to Know About Wheelchair & Mobility-Accessible Rides
            </h3>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3">All Nashville Medicare Advantage Plans Offer Wheelchair-Accessible Vehicles</h4>
                <p className="text-gray-700 mb-4">
                  Federal ADA law requires Medicare Advantage transportation vendors to provide wheelchair-accessible vehicles
                  when needed. However, you <strong>must request this when scheduling your ride</strong>.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>♿ <strong>Wheelchair users:</strong> Specify "I use a wheelchair" when booking ride</li>
                  <li>🦽 <strong>Motorized scooters:</strong> Must specify scooter size/weight when booking</li>
                  <li>🚶 <strong>Walkers/canes:</strong> Regular vehicles can accommodate walkers and canes</li>
                  <li>⏰ <strong>Book early:</strong> Wheelchair-accessible vehicles have limited availability—book 3-5 days in advance</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3">Types of Accessible Vehicles in Nashville</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Wheelchair van with lift:</strong> Most common for manual wheelchairs
                    <br /><span className="text-sm ml-6">• Can accommodate wheelchairs up to 30" wide, 48" long, 600 lbs</span>
                  </li>
                  <li>
                    <strong>Wheelchair van with ramp:</strong> For motorized wheelchairs/scooters
                    <br /><span className="text-sm ml-6">• Can accommodate motorized scooters up to 800 lbs</span>
                  </li>
                  <li>
                    <strong>Sedan with walker storage:</strong> For ambulatory seniors with walkers
                    <br /><span className="text-sm ml-6">• Driver assists with folding walker into trunk</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                <h4 className="font-semibold text-purple-900 mb-3">💡 Pro Tip for Wheelchair Users in Nashville:</h4>
                <p className="text-gray-700">
                  If you need wheelchair-accessible transportation frequently, consider <strong>Humana Gold Plus (96 trips/year)</strong>
                  or <strong>UnitedHealthcare Dual Complete (48 trips/year)</strong>. Both have reliable wheelchair-accessible
                  vehicle fleets in Nashville and shorter wait times than plans with fewer trips.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ❓ Frequently Asked Questions: Medicare Advantage Transportation Benefits in Nashville
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I use my Medicare Advantage transportation benefit to go to the pharmacy to pick up prescriptions?
              </h3>
              <p className="text-gray-700">
                <strong>Yes!</strong> All Medicare Advantage plans with transportation benefits in Nashville cover rides to
                pharmacies to pick up prescriptions. This includes CVS, Walgreens, Kroger Pharmacy, and independent pharmacies.
                However, many plans also offer <strong>free home delivery for prescriptions</strong>, which can save your
                transportation trips for doctor appointments. Check with your plan to see if mail-order pharmacy is available.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What happens if I use all my transportation trips before the year ends?
              </h3>
              <p className="text-gray-700">
                Once you've used all your allocated trips (e.g., 48 one-way trips), you'll need to pay out-of-pocket for
                additional rides or use alternative transportation (WeGo Access, family/friends, Uber/Lyft). Some Nashville
                Medicare Advantage plans may approve additional trips on a case-by-case basis for urgent medical needs—call
                your plan's member services to request an exception. To avoid running out, prioritize essential medical
                appointments and use home delivery for prescriptions when possible.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can my spouse or caregiver ride with me to my medical appointment?
              </h3>
              <p className="text-gray-700">
                <strong>Yes, in most cases.</strong> Humana, UnitedHealthcare, Aetna, and Cigna Medicare Advantage plans in
                Nashville allow <strong>one companion to ride with you at no additional cost</strong>. This is helpful if you
                need assistance during your appointment or if your caregiver needs to speak with your doctor. However, the
                companion cannot use the ride for their own appointments—the ride must be for the Medicare member's medical care.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Does Medicare Advantage transportation cover rides to Vanderbilt, HCA TriStar, and Ascension hospitals in Nashville?
              </h3>
              <p className="text-gray-700">
                <strong>Yes!</strong> Medicare Advantage transportation benefits cover rides to all hospitals in Nashville and
                Davidson County, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
                <li>Vanderbilt University Medical Center</li>
                <li>HCA TriStar Centennial Medical Center</li>
                <li>HCA TriStar Summit Medical Center</li>
                <li>Ascension Saint Thomas West</li>
                <li>Ascension Saint Thomas Midtown</li>
                <li>Nashville General Hospital</li>
              </ul>
              <p className="text-gray-700 mt-3">
                You can also use transportation for specialist appointments, diagnostic imaging (MRI, CT scans), lab work,
                and outpatient procedures at these hospitals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I use Uber or Lyft and get reimbursed by my Medicare Advantage plan?
              </h3>
              <p className="text-gray-700">
                <strong>Generally, no.</strong> Most Nashville Medicare Advantage plans require you to use their <strong>contracted
                transportation vendor</strong> (Humana GoRide, ModivCare, etc.) to receive the benefit at no cost. If you use
                Uber or Lyft on your own, the plan will <strong>not reimburse you</strong>. However, a few plans offer
                "over-the-counter (OTC) allowances" or "flexible spending cards" that <em>might</em> allow Uber/Lyft as an
                approved expense—check your specific plan's OTC eligible items list. For planned medical appointments, always
                use the plan's transportation service to avoid out-of-pocket costs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I have to pay a copay for transportation rides to doctor appointments?
              </h3>
              <p className="text-gray-700">
                <strong>No copay required!</strong> All transportation benefits included in Nashville Medicare Advantage plans
                are provided at <strong>$0 cost</strong> to members. You don't pay anything for the ride itself. However, you
                still pay your normal copays for the medical appointment (e.g., $0-$40 for primary care visit, $0-$75 for
                specialist visit, depending on your plan).
              </p>
            </div>
          </div>
        </section>

        {/* How to Choose a Plan */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🔍 How to Choose the Right Medicare Advantage Plan with Transportation Benefits in Nashville
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Consider These Factors When Comparing Plans
            </h3>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-3">1. Number of Transportation Trips</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Ask yourself:</strong> How often do I need rides to medical appointments?
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>🏥 <strong>Frequent doctor visits (weekly):</strong> Choose 60-96 trips/year (Humana, Aetna)</li>
                  <li>💊 <strong>Monthly check-ups:</strong> 36-48 trips/year is sufficient (UnitedHealthcare, WellCare, Cigna)</li>
                  <li>🩺 <strong>Occasional appointments:</strong> 24-36 trips/year may be enough (check plan details)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-3">2. Scheduling Requirements</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Ask yourself:</strong> Can I plan appointments 2-3 days in advance, or do I need last-minute flexibility?
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>📅 <strong>Plan ahead (3-5 days):</strong> All Nashville MA plans work well</li>
                  <li>⚡ <strong>Need faster scheduling (48 hours):</strong> UnitedHealthcare, WellCare</li>
                  <li>🚨 <strong>Emergency/urgent care:</strong> Use 911 or Uber/Lyft (MA transportation is for scheduled appointments only)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-3">3. Wheelchair/Mobility Needs</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Ask yourself:</strong> Do I use a wheelchair, scooter, or walker?
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>♿ <strong>Wheelchair users:</strong> All plans offer accessible vehicles, but Humana and UnitedHealthcare have larger fleets</li>
                  <li>🦽 <strong>Motorized scooter:</strong> Verify weight/size limits when calling plan (typically 600-800 lbs)</li>
                  <li>🚶 <strong>Walker/cane:</strong> Any plan works (standard vehicles accommodate walkers)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-3">4. Service Area Coverage</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Ask yourself:</strong> Do my doctors and specialists work in Davidson County or surrounding counties?
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>🗺️ <strong>Davidson County only:</strong> WellCare, Cigna (limited to Davidson County)</li>
                  <li>🌆 <strong>Nashville metro (Davidson + surrounding counties):</strong> Humana, UnitedHealthcare, Aetna (cover Williamson, Rutherford, Sumner, Wilson)</li>
                  <li>🚗 <strong>50-mile radius:</strong> Aetna (good if you see specialists in Murfreesboro, Franklin, Clarksville)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-3">5. Dual-Eligible Status (Medicare + TennCare Medicaid)</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Ask yourself:</strong> Do I have both Medicare and TennCare Medicaid?
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ <strong>Yes, I have TennCare Medicaid:</strong> <strong>UnitedHealthcare Dual Complete</strong> is specifically designed for dual-eligible members with enhanced benefits</li>
                  <li>❌ <strong>No, I only have Medicare:</strong> Compare Humana, Aetna, Cigna, WellCare standard MA plans</li>
                  <li>❓ <strong>Not sure if I qualify for TennCare:</strong> Call TennCare at 1-855-259-0701 to check eligibility</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-3">6. Additional Benefits Beyond Transportation</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Consider:</strong> What other benefits matter to you?
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>🏋️ <strong>Fitness benefits:</strong> Aetna includes rides to SilverSneakers gyms</li>
                  <li>🍔 <strong>Meal delivery:</strong> WellCare provides 28 meals after hospitalization</li>
                  <li>📦 <strong>Prescription delivery:</strong> WellCare, Humana offer free Rx mail delivery (saves transportation trips)</li>
                  <li>💰 <strong>OTC allowance:</strong> UnitedHealthcare Dual Complete ($75/quarter for over-the-counter items)</li>
                  <li>🦷 <strong>Dental/vision/hearing:</strong> All plans include these—compare coverage limits</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
            <h4 className="font-semibold text-green-900 mb-3">💡 Our Recommendation for Nashville Seniors:</h4>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>If you need frequent rides (3+ appointments/month):</strong> Choose <strong>Humana Gold Plus</strong>
                (96 trips/year = 48 round trips). This gives you the most flexibility and ensures you won't run out of rides.
              </p>
              <p>
                <strong>If you have Medicare + TennCare Medicaid:</strong> Choose <strong>UnitedHealthcare Dual Complete</strong>
                (48 trips/year + $75/quarter OTC allowance). Specifically designed for dual-eligible members with extra benefits.
              </p>
              <p>
                <strong>If you want rides to the gym:</strong> Choose <strong>Aetna Medicare Eagle</strong> (60 trips/year
                includes fitness centers). Use SilverSneakers gym membership + transportation to stay active.
              </p>
              <p>
                <strong>If you travel or have family out of state:</strong> Choose <strong>Cigna Preferred Medicare</strong>
                (40 trips/year + nationwide emergency coverage). Good for snowbirds and frequent travelers.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing a Medicare Advantage Plan with Transportation Benefits?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Our Nashville Medicare specialists can help you compare plans, verify transportation benefits, and enroll
            in the right Medicare Advantage plan for your needs—at no cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center text-lg"
            >
              Compare Nashville Medicare Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-colors text-center text-lg"
            >
              Call Now: (331) 343-2584
            </a>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            📚 Related Medicare Resources for Nashville
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                📍 Nashville Medicare Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-blue-600 hover:underline">
                    Vanderbilt vs HCA Medicare Advantage
                  </Link>
                </li>
                <li>
                  <Link href="/medicare-advantage/davidson-county-tennessee" className="text-blue-600 hover:underline">
                    Davidson County Medicare Advantage Plans
                  </Link>
                </li>
                <li>
                  <Link href="/blog/medicare-advantage-fitness-benefits-nashville" className="text-blue-600 hover:underline">
                    Medicare Advantage Fitness Benefits Nashville
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">
                📘 Medicare Guides
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/medicare-advantage-vs-original" className="text-blue-600 hover:underline">
                    Medicare Advantage vs Original Medicare
                  </Link>
                </li>
                <li>
                  <Link href="/resources/enrollment-periods-explained" className="text-blue-600 hover:underline">
                    Medicare Enrollment Periods Explained
                  </Link>
                </li>
                <li>
                  <Link href="/resources/dual-eligible-special-needs-plans" className="text-blue-600 hover:underline">
                    Dual-Eligible Special Needs Plans (D-SNP)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                🏥 Tennessee Medicare
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/medicare-advantage/tennessee" className="text-blue-600 hover:underline">
                    Tennessee Medicare Advantage Plans
                  </Link>
                </li>
                <li>
                  <Link href="/resources/tennessee-tenncare-medicare" className="text-blue-600 hover:underline">
                    Tennessee TennCare + Medicare (Dual-Eligible)
                  </Link>
                </li>
                <li>
                  <Link href="/resources/medicare-extra-benefits" className="text-blue-600 hover:underline">
                    Medicare Advantage Extra Benefits Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
