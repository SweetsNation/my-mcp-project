import type { Metadata } from 'next';
import EnrollmentTimeline from '@/components/EnrollmentTimeline';
import ToolLinking from '@/components/ToolLinking';
import ResourceLinking from '@/components/ResourceLinking';

export const metadata: Metadata = {
  title: 'Medicare & Health Insurance Enrollment Timeline | Key Dates & Deadlines | El-Mag Insurance',
  description: 'Complete enrollment timeline for Medicare and health insurance programs. Track key dates, deadlines, and enrollment periods for Medicare Advantage, Medicare Supplement, Health Marketplace, and other coverage options.',
  keywords: 'enrollment timeline, Medicare enrollment periods, health insurance deadlines, enrollment dates, Medicare AEP, Open Enrollment, Special Enrollment Periods',
};

export default function EnrollmentTimelinePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">📅</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enrollment Timeline</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Never miss an important enrollment deadline. Track key dates and periods for Medicare and health insurance coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Main Enrollment Timeline */}
      <EnrollmentTimeline 
        userContext="general"
        showActiveOnly={false}
        maxPeriods={8}
        showCountdown={true}
        layout="timeline"
      />

      {/* Enrollment Period Types Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📋 Understanding Enrollment Periods</h2>
            <p className="text-lg text-gray-600">
              Different types of enrollment periods and when they apply
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🎂</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Enrollment Periods</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>When:</strong> First time eligible</div>
                <div><strong>Duration:</strong> 7 months</div>
                <div><strong>Examples:</strong> Turning 65, disability onset</div>
                <div><strong>Importance:</strong> Best rates, no penalties</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Annual Enrollment Periods</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>When:</strong> Same time each year</div>
                <div><strong>Duration:</strong> 2-3 months</div>
                <div><strong>Examples:</strong> Medicare AEP, Marketplace OEP</div>
                <div><strong>Purpose:</strong> Make changes to existing coverage</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Special Enrollment Periods</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>When:</strong> Qualifying life events</div>
                <div><strong>Duration:</strong> 60 days</div>
                <div><strong>Examples:</strong> Moving, losing coverage</div>
                <div><strong>Requirements:</strong> Must document event</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Open Enrollment</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>When:</strong> Annual period</div>
                <div><strong>Duration:</strong> 2-3 months</div>
                <div><strong>Examples:</strong> Health Marketplace, employer plans</div>
                <div><strong>Purpose:</strong> New enrollment and changes</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Enrollment</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>When:</strong> Year-round</div>
                <div><strong>Duration:</strong> Ongoing</div>
                <div><strong>Examples:</strong> Medicaid, Extra Help</div>
                <div><strong>Benefits:</strong> No waiting periods</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Guaranteed Issue</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>When:</strong> Specific circumstances</div>
                <div><strong>Duration:</strong> Limited time</div>
                <div><strong>Examples:</strong> Medigap OEP, losing coverage</div>
                <div><strong>Benefits:</strong> No medical underwriting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Deadlines Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">⏰ Critical Deadlines</h2>
            <p className="text-lg text-gray-600">
              Don't miss these important enrollment windows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Medicare Deadlines</h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-2">Medicare Annual Enrollment Period</h4>
                  <div className="text-red-700 text-sm">
                    <div><strong>Dates:</strong> October 15 - December 7</div>
                    <div><strong>Deadline:</strong> December 7</div>
                    <div><strong>Action:</strong> Make changes to Medicare Advantage and Part D</div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-2">Medigap Open Enrollment Period</h4>
                  <div className="text-blue-700 text-sm">
                    <div><strong>Timing:</strong> 6 months after Part B starts</div>
                    <div><strong>Action:</strong> Enroll in Medigap with guaranteed issue</div>
                    <div><strong>Note:</strong> Best rates guaranteed during this period</div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">Initial Enrollment Period</h4>
                  <div className="text-green-700 text-sm">
                    <div><strong>Timing:</strong> 7 months around 65th birthday</div>
                    <div><strong>Action:</strong> First Medicare enrollment</div>
                    <div><strong>Note:</strong> Avoid late enrollment penalties</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Health Insurance Deadlines</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <h4 className="font-semibold text-orange-800 mb-2">Marketplace Open Enrollment</h4>
                  <div className="text-orange-700 text-sm">
                    <div><strong>Dates:</strong> November 1 - January 15</div>
                    <div><strong>Deadline:</strong> January 15</div>
                    <div><strong>Action:</strong> Enroll in ACA plans with subsidies</div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 mb-2">Special Enrollment Periods</h4>
                  <div className="text-purple-700 text-sm">
                    <div><strong>Timing:</strong> 60 days from qualifying event</div>
                    <div><strong>Events:</strong> Moving, marriage, losing coverage</div>
                    <div><strong>Action:</strong> Enroll outside Open Enrollment</div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-2">Employer Plan Changes</h4>
                  <div className="text-yellow-700 text-sm">
                    <div><strong>Timing:</strong> Varies by employer</div>
                    <div><strong>Action:</strong> Review and change coverage</div>
                    <div><strong>Note:</strong> Check with HR for specific dates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Tips */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">💡 Enrollment Tips & Best Practices</h2>
            <p className="text-lg text-gray-600">
              Make the most of your enrollment opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prepare Early</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Gather required documents</li>
                <li>• Research available plans</li>
                <li>• Compare costs and benefits</li>
                <li>• Check provider networks</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compare Options</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Use comparison tools</li>
                <li>• Check star ratings</li>
                <li>• Review prescription coverage</li>
                <li>• Consider total costs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Act Quickly</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Don't wait until deadline</li>
                <li>• Allow processing time</li>
                <li>• Confirm enrollment</li>
                <li>• Keep documentation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Help</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Contact licensed agents</li>
                <li>• Use Medicare.gov tools</li>
                <li>• Call 1-800-MEDICARE</li>
                <li>• Seek local assistance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Review Annually</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Check for plan changes</li>
                <li>• Review prescription needs</li>
                <li>• Compare with new options</li>
                <li>• Update personal information</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⚠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Avoid Penalties</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Enroll during IEP</li>
                <li>• Maintain creditable coverage</li>
                <li>• Document life changes</li>
                <li>• Understand late fees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools for Enrollment Planning */}
      <ToolLinking 
        currentTool=""
        userContext="general"
        showRelatedTools={true}
        maxTools={6}
        showFeatures={true}
        layout="grid"
      />

      {/* Resources for Enrollment Understanding */}
      <ResourceLinking 
        currentResource=""
        currentCategory=""
        userContext="general"
        showTools={true}
        maxResources={6}
        maxTools={4}
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Enrollment?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our licensed agents can guide you through the enrollment process and help you find the best coverage options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors text-center inline-block"
            >
              Get Enrollment Help
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