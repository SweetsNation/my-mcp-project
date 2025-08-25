import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ask AI Medicare Questions - Get Instant Expert Answers | Free Medicare AI Help',
  description: 'Ask any Medicare question and get instant AI-powered expert answers. Free Medicare help available 24/7. No appointments needed - just ask and get answers immediately.',
  keywords: 'ask AI Medicare questions, Medicare AI help, AI Medicare answers, free Medicare questions, AI health insurance help, automated Medicare guidance',
  openGraph: {
    title: 'Ask AI Medicare Questions - Instant Expert Answers 24/7',
    description: 'Get immediate answers to any Medicare question using AI technology. Free, fast, and available anytime.',
    type: 'article',
  },
}

const qnaStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'QAPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'I\'m 64 and retiring early. When can I get Medicare and what should I do about health insurance until then?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can enroll in Medicare starting 3 months before your 65th birthday. Until then, you have several options including COBRA from your employer (up to 18 months), ACA marketplace plans, short-term medical insurance, or spouse\'s employer plan if available. Missing Medicare deadlines results in a 10% penalty for life.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you explain the new $2,000 Medicare drug cap like I\'m 10 years old?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Starting in 2025, Medicare Part D works like a piggy bank with a $2,000 lid. Once you spend $2,000 on medicines in one year, Medicare pays for ALL the rest - 100%. Even if your medicines normally cost $10,000 per year, you only pay $2,000 maximum. You can also spread that $2,000 across 12 months.'
      }
    },
    {
      '@type': 'Question',
      name: 'I have employer insurance and I\'m turning 65. Do I need to sign up for Medicare right away or can I wait?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This depends on your employer size and work status. You can wait if you work for a company with 20+ employees, you\'re actively working (not retired), and your employer insurance is creditable coverage. You must sign up now if your company has fewer than 20 employees, you\'re retired, or your employer plan isn\'t creditable.'
      }
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between Medicare Advantage and regular Medicare? Which one saves me more money?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicare Advantage is like a buffet (everything in one plan for $0-$50/month) with network restrictions, while Original Medicare + Medigap is like ordering individual dishes ($150-$300/month total) with complete freedom. Medicare Advantage usually costs less monthly, but Original Medicare + Medigap often costs less when you need lots of medical care.'
      }
    }
  ]
}

const howToStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Ask AI Medicare Questions Effectively',
  description: 'Learn how to get the best answers from AI when asking Medicare questions',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Be Specific',
      text: 'Include specific details like medications you take, your age, and work status instead of general terms'
    },
    {
      '@type': 'HowToStep',
      name: 'Provide Context',
      text: 'Mention your situation such as "I\'m turning 65 next month" or "I\'m retiring" to get personalized guidance'
    },
    {
      '@type': 'HowToStep',
      name: 'Ask Follow-up Questions',
      text: 'Don\'t hesitate to ask clarifying questions like "What about if I travel a lot?" to get comprehensive answers'
    }
  ]
}

export default function AskAIMedicareQuestionsPage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(qnaStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData)
        }}
      />
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
            <span className="font-bold">💬 Ask AI Anything About Medicare</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ask AI Medicare Questions - Get Instant Answers
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have a Medicare question? Ask our AI assistant and get expert-level answers instantly. 
            Available 24/7, completely free, and designed to help you make informed Medicare decisions.
          </p>
        </div>

        {/* Quick Start Section */}
        <section className="bg-blue-50 border border-blue-200 p-8 rounded-lg mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">🚀 Start Asking Questions Now</h2>
            <p className="text-blue-700">Type your Medicare question just like you'd ask a friend. Our AI understands natural language!</p>
          </div>
          
          <div className="bg-white border-2 border-blue-300 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
                <span className="text-sm">💬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Ask Your Question Here:</h3>
            </div>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4">
              <p className="text-gray-500 italic">Example: "I'm turning 65 next month and I'm confused about Medicare. What do I need to do?"</p>
            </div>
            <div className="text-center">
              <button 
                type="button"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => alert('This is a demonstration. In a live implementation, this would connect to an AI chat system.')}
              >
                🤖 Get AI Answer Now
              </button>
              <p className="text-gray-600 text-sm mt-2">Or call 331-E-HEALTH to speak with a human expert</p>
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔥 Most Popular AI Questions</h2>
          <p className="text-gray-600 mb-8">See how other people are asking Medicare questions and getting instant AI answers.</p>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-sm">❓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  "I'm 64 and retiring early. When can I get Medicare and what should I do about health insurance until then?"
                </h3>
              </div>
              <div className="ml-11">
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-green-600 font-semibold text-sm">🤖 AI ANSWER:</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    You can enroll in Medicare starting 3 months before your 65th birthday. Until then, you have several options:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Bridge Insurance Options:</h4>
                      <ul className="text-green-700 space-y-1">
                        <li>• COBRA from your employer (up to 18 months)</li>
                        <li>• ACA marketplace plans</li>
                        <li>• Short-term medical insurance</li>
                        <li>• Spouse's employer plan (if available)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Medicare Timeline:</h4>
                      <ul className="text-green-700 space-y-1">
                        <li>• 3 months before 65th birthday: Can apply</li>
                        <li>• Birth month: Coverage can start</li>
                        <li>• 3 months after: Late enrollment penalties begin</li>
                        <li>• Missing deadline = 10% penalty for life</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-sm">❓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  "Can you explain the new $2,000 Medicare drug cap like I'm 10 years old?"
                </h3>
              </div>
              <div className="ml-11">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-blue-600 font-semibold text-sm">🤖 AI ANSWER:</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Imagine Medicare Part D like a piggy bank for your medicine money. Starting in 2025:
                  </p>
                  <div className="bg-white border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">🏦 The $2,000 Piggy Bank Rule:</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• <strong>Before 2025:</strong> Your piggy bank had a hole in the bottom - you could spend way more than $2,000 per year on medicines</li>
                      <li>• <strong>Starting 2025:</strong> Medicare puts a lid on your piggy bank at exactly $2,000</li>
                      <li>• <strong>What this means:</strong> Once you spend $2,000 on medicines in one year, Medicare pays for ALL the rest - 100%</li>
                      <li>• <strong>The magic:</strong> Even if your medicines normally cost $10,000 per year, you only pay $2,000 maximum</li>
                      <li>• <strong>Extra bonus:</strong> You can spread that $2,000 across 12 months instead of paying big chunks at once</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-sm">❓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  "I have employer insurance and I'm turning 65. Do I need to sign up for Medicare right away or can I wait?"
                </h3>
              </div>
              <div className="ml-11">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-purple-600 font-semibold text-sm">🤖 AI ANSWER:</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    This depends on your employer size and whether you're still actively working:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-green-100 p-3 rounded">
                      <h4 className="font-semibold text-green-800 mb-2">✅ You Can Wait If:</h4>
                      <ul className="text-green-700 space-y-1">
                        <li>• You work for company with 20+ employees</li>
                        <li>• You're actively working (not retired)</li>
                        <li>• Your employer insurance is "creditable coverage"</li>
                        <li>• You're happy with your current coverage</li>
                      </ul>
                      <p className="text-green-800 font-semibold mt-2">No penalties when you eventually enroll!</p>
                    </div>
                    <div className="bg-red-100 p-3 rounded">
                      <h4 className="font-semibold text-red-800 mb-2">⚠️ Sign Up Now If:</h4>
                      <ul className="text-red-700 space-y-1">
                        <li>• Company has fewer than 20 employees</li>
                        <li>• You're retired/not actively working</li>
                        <li>• Your employer plan isn't creditable</li>
                        <li>• You want Medicare as primary insurance</li>
                      </ul>
                      <p className="text-red-800 font-semibold mt-2">Missing deadlines = lifetime penalties!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-sm">❓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  "What's the difference between Medicare Advantage and regular Medicare? Which one saves me more money?"
                </h3>
              </div>
              <div className="ml-11">
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-orange-600 font-semibold text-sm">🤖 AI ANSWER:</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Think of it like choosing between a buffet (Medicare Advantage) vs. ordering individual dishes (Original Medicare + supplements):
                  </p>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-blue-100 p-3 rounded">
                        <h4 className="font-semibold text-blue-800 mb-2">🍽️ Medicare Advantage (The Buffet)</h4>
                        <ul className="text-blue-700 space-y-1">
                          <li>• <strong>Cost:</strong> Usually $0-$50/month</li>
                          <li>• <strong>Includes:</strong> Everything in one plan</li>
                          <li>• <strong>Extras:</strong> Often dental, vision, hearing</li>
                          <li>• <strong>Catch:</strong> Must use their network of doctors</li>
                          <li>• <strong>Best for:</strong> Predictable costs, don't travel much</li>
                        </ul>
                      </div>
                      <div className="bg-green-100 p-3 rounded">
                        <h4 className="font-semibold text-green-800 mb-2">🍽️ Original Medicare + Medigap (Individual Dishes)</h4>
                        <ul className="text-green-700 space-y-1">
                          <li>• <strong>Cost:</strong> Usually $150-$300/month total</li>
                          <li>• <strong>Freedom:</strong> See any Medicare doctor</li>
                          <li>• <strong>Travel:</strong> Coverage anywhere in US</li>
                          <li>• <strong>Predictable:</strong> Fixed copays, no surprises</li>
                          <li>• <strong>Best for:</strong> Want flexibility, travel often</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white border border-orange-300 p-3 rounded">
                      <h4 className="font-semibold text-orange-800 mb-1">💰 Money-Saving Truth:</h4>
                      <p className="text-orange-700 text-sm">
                        Medicare Advantage usually costs less monthly, but Original Medicare + Medigap often costs less 
                        when you actually need lots of medical care. It depends on how much healthcare you use!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Question Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Ask AI About These Medicare Topics</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">💡 Getting Started Questions</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• "When do I need to sign up for Medicare?"</li>
                <li>• "What happens if I miss Medicare deadlines?"</li>
                <li>• "Do I need Medicare if I have other insurance?"</li>
                <li>• "What are the different parts of Medicare?"</li>
                <li>• "How much does Medicare cost?"</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-600 mb-3">🔍 Plan Comparison Questions</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• "How do I choose the right Medicare plan?"</li>
                <li>• "What's better: Medicare Advantage or Medigap?"</li>
                <li>• "How do I compare Medicare Part D plans?"</li>
                <li>• "Which plan covers my medications?"</li>
                <li>• "What's the cheapest Medicare option?"</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-600 mb-3">💊 Prescription Questions</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• "How does Medicare cover my prescriptions?"</li>
                <li>• "What is the Medicare donut hole?"</li>
                <li>• "How does the new $2,000 cap work?"</li>
                <li>• "Can I get help paying for medications?"</li>
                <li>• "What if my drug isn't covered?"</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">💰 Cost Questions</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• "What will Medicare cost me per year?"</li>
                <li>• "How can I reduce Medicare costs?"</li>
                <li>• "What are Medicare premiums for 2025?"</li>
                <li>• "Do I qualify for Medicare financial help?"</li>
                <li>• "What's IRMAA and do I pay it?"</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-600 mb-3">📅 Timing Questions</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• "When is Medicare Open Enrollment?"</li>
                <li>• "Can I change Medicare plans anytime?"</li>
                <li>• "What are Special Enrollment Periods?"</li>
                <li>• "I missed a deadline, what now?"</li>
                <li>• "When does my Medicare coverage start?"</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">🏥 Coverage Questions</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• "What does Medicare cover?"</li>
                <li>• "Does Medicare cover dental and vision?"</li>
                <li>• "What about long-term care?"</li>
                <li>• "Does Medicare work when I travel?"</li>
                <li>• "What's not covered by Medicare?"</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Tips for Getting Great AI Answers</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Do This for Better Answers</h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <span><strong>Be specific:</strong> "I take Metformin and Lipitor" vs. "I take medications"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <span><strong>Include your age:</strong> "I'm turning 65 next month" gives context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <span><strong>Mention your situation:</strong> "I'm retiring" or "I still work"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <span><strong>Ask follow-up questions:</strong> "What about if I travel a lot?"</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">🔍 Example Question Formats</h3>
              <div className="space-y-3 text-blue-700 text-sm">
                <div className="bg-white border border-blue-200 p-3 rounded">
                  <p className="font-semibold">Instead of: "What's Medicare?"</p>
                  <p className="text-blue-600">Try: "I'm 64 and retiring next year. Can you explain Medicare basics and what I need to do?"</p>
                </div>
                <div className="bg-white border border-blue-200 p-3 rounded">
                  <p className="font-semibold">Instead of: "Which plan is best?"</p>
                  <p className="text-blue-600">Try: "I take diabetes medication, see 3 specialists, and want to keep my current doctors. Which type of Medicare plan fits?"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When AI Can't Help */}
        <section className="mb-12">
          <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">🤔 When You Need Human Help Instead of AI</h2>
            <p className="text-yellow-700 mb-4">
              AI is great for information and general guidance, but some situations need human experts:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">🏥 Complex Medical Situations:</h3>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Multiple chronic conditions</li>
                  <li>• Rare diseases or medications</li>
                  <li>• Disability or special needs considerations</li>
                  <li>• Complex family coordination</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">📋 Enrollment & Legal Issues:</h3>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Actually enrolling in plans</li>
                  <li>• Appeals and disputes</li>
                  <li>• Medicaid coordination</li>
                  <li>• State-specific regulations</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="tel:331-343-2584"
                className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                📞 Talk to Human Expert: 331-E-HEALTH
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🚀 Ready to Get Your Medicare Questions Answered?</h2>
            <p className="text-green-100 mb-6 max-w-3xl mx-auto">
              Start with our AI assistant for instant answers, then connect with licensed Medicare experts 
              when you're ready for personalized guidance and enrollment help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                type="button"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                onClick={() => alert('This would connect to the AI chat system in a live implementation.')}
              >
                🤖 Start Asking AI Questions
              </button>
              <Link
                href="/contact"
                className="bg-yellow-400 text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                👨‍💼 Connect with Human Expert
              </Link>
            </div>
            <p className="text-green-200 text-sm mt-4">
              AI answers available 24/7 • Human experts available during business hours • Always free
            </p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔗 More AI-Enhanced Medicare Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/ai-medicare-assistant" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🤖 AI Medicare Assistant</h3>
              <p className="text-gray-600 text-sm">
                Complete AI-powered Medicare guidance and expert answers
              </p>
            </Link>
            <Link href="/medicare-extra-help-qualification-quiz" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-green-600 mb-2">🎯 AI Qualification Quiz</h3>
              <p className="text-gray-600 text-sm">
                Instant AI assessment for Medicare Extra Help eligibility
              </p>
            </Link>
            <Link href="/medicare-plan-comparison-tool" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">🔍 Smart Plan Comparison</h3>
              <p className="text-gray-600 text-sm">
                AI-enhanced Medicare plan comparison and recommendations
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}