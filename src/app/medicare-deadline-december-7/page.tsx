import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicare Deadline December 7, 2025 - URGENT: Don\'t Miss Open Enrollment!',
  description: 'URGENT: Medicare Open Enrollment ends December 7, 2025. This is your LAST CHANCE to change Medicare coverage for 2025. Get help before it\'s too late!',
  keywords: 'Medicare deadline December 7, Medicare enrollment deadline, Open Enrollment deadline, Medicare changes deadline, last chance Medicare',
  openGraph: {
    title: 'Medicare Deadline December 7, 2025 - URGENT ACTION REQUIRED',
    description: 'Final warning: Medicare Open Enrollment deadline is December 7, 2025. Don\'t get locked into bad coverage for 2025!',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-deadline-december-7',
  },
}

export default function MedicareDeadlineDecember7Page() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Urgent Alert Header */}
        <section className="bg-red-600 text-white p-6 rounded-lg mb-8 text-center">
          <div className="animate-pulse mb-4">
            <span className="text-4xl">🚨</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            URGENT DEADLINE ALERT
          </h1>
          <div className="text-3xl font-bold mb-4">
            Medicare Open Enrollment Ends
          </div>
          <div className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg text-4xl font-bold mb-4">
            December 7, 2025
          </div>
          <p className="text-xl text-red-100 mb-6">
            This is your FINAL CHANCE to change your Medicare coverage for 2025. 
            After December 7th, you're LOCKED IN until next year!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:331-343-2584"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-50 transition-colors"
            >
              📞 EMERGENCY HELP: 331-E-HEALTH
            </a>
            <Link
              href="/contact"
              className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
            >
              🆘 GET URGENT ASSISTANCE
            </Link>
          </div>
        </section>

        {/* Time Remaining Counter */}
        <section className="mb-12">
          <div className="bg-black text-red-500 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">⏰ TIME REMAINING UNTIL DEADLINE</h2>
            <div className="text-6xl font-bold mb-4 animate-pulse">
              FINAL DAYS
            </div>
            <p className="text-red-300 text-lg">
              Once December 7th passes, you CANNOT make changes until next Open Enrollment!
            </p>
          </div>
        </section>

        {/* What Happens After Deadline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">⚠️ What Happens After December 7, 2025?</h2>
          <div className="bg-red-50 border-2 border-red-500 p-8 rounded-lg">
            <div className="text-center mb-6">
              <div className="text-6xl text-red-600 mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-red-800 mb-4">YOU'RE LOCKED IN FOR ALL OF 2025!</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-red-800 mb-3">If You Miss the Deadline:</h4>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span>You're stuck with your current plan for ALL of 2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span>Cannot switch if your plan performs poorly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span>Cannot escape high premiums or copays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span>Cannot add coverage if your needs change</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✗</span>
                    <span>Must wait until October 2025 for next opportunity</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-red-800 mb-3">The Only Exceptions:</h4>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>You move to a different coverage area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>You lose other health coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>You qualify for Extra Help</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>You're in a Special Enrollment Period</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Still Do */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">✅ What You Can Still Do Before December 7th</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">Switch Medicare Advantage Plans</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Change to a plan with lower premiums</li>
                <li>• Switch to a plan with better drug coverage</li>
                <li>• Find a plan with your preferred doctors</li>
                <li>• Choose a plan with additional benefits</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Switch to Original Medicare</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Drop your Medicare Advantage plan</li>
                <li>• Add a Medicare Supplement (Medigap)</li>
                <li>• Enroll in a standalone Part D plan</li>
                <li>• Get more flexibility in choosing providers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">🚨 DON'T WAIT - GET HELP NOW!</h2>
            <p className="text-xl mb-6">
              Our Medicare experts are standing by to help you make the right choice before the deadline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-50 transition-colors"
              >
                📞 CALL NOW: 331-E-HEALTH
              </a>
              <Link
                href="/contact"
                className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📝 GET FREE CONSULTATION
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What happens if I miss the December 7th deadline?</h3>
              <p className="text-gray-700">
                You'll be locked into your current Medicare coverage for all of 2025. You won't be able to make changes unless you qualify for a Special Enrollment Period.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I change my mind after December 7th?</h3>
              <p className="text-gray-700">
                No, the December 7th deadline is final for most people. The next opportunity to make changes will be during the 2025 Open Enrollment Period (October 15 - December 7, 2025).
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What if I'm not happy with my current plan?</h3>
              <p className="text-gray-700">
                December 7th is your last chance to switch to a different plan for 2025. After this date, you'll need to wait until next year's Open Enrollment Period.
              </p>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="text-center">
          <div className="bg-red-600 text-white p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">⏰ TIME IS RUNNING OUT!</h2>
            <p className="text-xl mb-6">
              Don't let this deadline pass you by. Get the Medicare coverage you deserve for 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-50 transition-colors"
              >
                📞 CALL 331-E-HEALTH NOW
              </a>
              <Link
                href="/contact"
                className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                🆘 URGENT ASSISTANCE
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}