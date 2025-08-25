import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Medicare Assistant - Get Instant Answers to Medicare Questions | El-Mag Insurance',
  description: 'AI-powered Medicare guidance and instant answers. Ask any Medicare question and get expert-level responses about coverage, costs, enrollment, and plan comparisons.',
  keywords: 'AI Medicare assistant, Medicare AI help, AI Medicare questions, automated Medicare guidance, AI insurance help, Medicare chatbot, AI healthcare assistant',
  openGraph: {
    title: 'AI Medicare Assistant - Instant Expert Medicare Guidance',
    description: 'Get instant AI-powered answers to complex Medicare questions. Expert-level guidance available 24/7.',
    type: 'article',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AI Medicare Assistant',
  applicationCategory: 'HealthApplication',
  description: 'AI-powered Medicare guidance providing instant expert answers to Medicare questions',
  url: 'https://el-mag.com/ai-medicare-assistant',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  operatingSystem: 'Any',
  permissions: 'No special permissions required',
  featureList: [
    'Medicare eligibility guidance',
    'Cost analysis and comparison',
    'Plan recommendation assistance',
    'Prescription drug coverage help',
    'Enrollment deadline reminders',
    '24/7 availability'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '247'
  },
  provider: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://el-mag.com'
  }
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if I need Medicare Advantage or Original Medicare plus Medigap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you want predictable costs and don\'t mind network restrictions, choose Medicare Advantage. If you want maximum flexibility and don\'t mind higher upfront costs, choose Original Medicare + Medigap. Medicare Advantage is better for lower monthly premiums and extras like dental/vision, while Original Medicare + Medigap offers more doctor choice and travel coverage.'
      }
    },
    {
      '@type': 'Question',
      name: 'What\'s the easiest way to compare Medicare Part D plans for my specific medications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use Medicare.gov Plan Finder with your complete medication list. Enter every drug with exact dosages, and the tool will show total estimated costs for each plan. Focus on total annual costs, not just premiums, especially with 2025\'s new $2,000 drug cap.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can AI help me understand what Medicare changes mean for my specific situation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! AI can analyze Medicare changes against your specific situation instantly. Provide your current plan details, medications, and health needs, and AI can calculate exactly how changes affect you, including savings from the $2,000 drug cap and premium changes.'
      }
    }
  ]
}

export default function AIMedicareAssistantPage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData)
        }}
      />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
            <span className="font-bold">🤖 AI-Powered Medicare Guidance</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Medicare Assistant: Instant Expert Answers
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get immediate, expert-level answers to your Medicare questions using AI-powered guidance. 
            Available 24/7 to help you understand Medicare coverage, costs, enrollment, and plan options.
          </p>
        </div>

        {/* AI Features Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🧠 What Our AI Medicare Assistant Can Help With</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Medicare Eligibility Questions</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• "Am I eligible for Medicare?"</li>
                <li>• "When can I enroll in Medicare?"</li>
                <li>• "What are Medicare enrollment periods?"</li>
                <li>• "Do I need Medicare if I have employer insurance?"</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">Medicare Costs Analysis</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• "How much does Medicare cost?"</li>
                <li>• "What are Medicare Part D costs for 2025?"</li>
                <li>• "How do I calculate total Medicare expenses?"</li>
                <li>• "What is the Medicare Part D out-of-pocket maximum?"</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Plan Comparison Guidance</h3>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• "What's the difference between Medicare Advantage and Original Medicare?"</li>
                <li>• "How do I compare Medicare Part D plans?"</li>
                <li>• "Which Medicare plan is best for me?"</li>
                <li>• "Should I choose Medicare Advantage or Medigap?"</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">💊</span>
              </div>
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Prescription Drug Coverage</h3>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• "Is my medication covered by Medicare?"</li>
                <li>• "How do Medicare drug formularies work?"</li>
                <li>• "What is Medicare Extra Help?"</li>
                <li>• "How does the new $2,000 drug cap work?"</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">⏰</span>
              </div>
              <h3 className="text-lg font-semibold text-red-800 mb-3">Enrollment Deadlines</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• "When is Medicare Open Enrollment?"</li>
                <li>• "What happens if I miss enrollment deadlines?"</li>
                <li>• "Can I change Medicare plans anytime?"</li>
                <li>• "What are Special Enrollment Periods?"</li>
              </ul>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Coverage Details</h3>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• "What does Medicare Part A cover?"</li>
                <li>• "What is Medicare Part B?"</li>
                <li>• "Do I need Medicare Part C?"</li>
                <li>• "What's covered under Medicare?"</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI-Powered Q&A Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🤖 AI-Powered Medicare Q&A</h2>
          <p className="text-gray-600 mb-8">
            Our AI assistant provides instant, accurate answers to the most common Medicare questions. 
            Get expert-level guidance in seconds, not hours.
          </p>

          <div className="space-y-6">
            {/* Popular AI Questions */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Most Asked AI Questions</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    "Explain Medicare to me like I'm 5 years old"
                  </h4>
                  <p className="text-gray-700 text-sm">
                    <strong>AI Answer:</strong> Medicare is health insurance for people 65+ (or younger with disabilities). 
                    Think of it like a puzzle with 4 pieces: Part A (hospital), Part B (doctor visits), 
                    Part C (combines A+B+often D), and Part D (prescription drugs). You pick which pieces 
                    you need to complete your healthcare coverage puzzle.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    "What's the smartest way to choose Medicare plans?"
                  </h4>
                  <p className="text-gray-700 text-sm">
                    <strong>AI Answer:</strong> Follow the 3-2-1 rule: (3) List your medications, doctors, and budget priorities. 
                    (2) Compare total annual costs, not just premiums. (1) Pick the plan with lowest total cost 
                    that covers YOUR specific needs. Don't choose based on what worked for your neighbor.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    "How much money will Medicare save me compared to private insurance?"
                  </h4>
                  <p className="text-gray-700 text-sm">
                    <strong>AI Answer:</strong> Average Medicare beneficiary pays $6,000-$8,000 annually vs. $15,000-$20,000 
                    for comparable private insurance. With the new 2025 Part D changes ($2,000 drug cap), 
                    savings could be even higher if you take expensive medications. Medicare + Medigap 
                    typically costs 40-60% less than private insurance with similar coverage.
                  </p>
                </div>

                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    "What's the biggest Medicare mistake people make?"
                  </h4>
                  <p className="text-gray-700 text-sm">
                    <strong>AI Answer:</strong> Choosing plans based ONLY on premium cost. A $15/month plan with 
                    high deductibles and copays often costs MORE annually than a $85/month plan with 
                    better coverage. Always calculate: (Premium × 12) + Deductible + Expected medical costs 
                    = True annual cost.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Search Patterns */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">🔍 How People Search for Medicare Help with AI</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-3">Conversational Searches:</h4>
                  <ul className="text-purple-600 text-sm space-y-2">
                    <li>• "Can you help me understand Medicare options?"</li>
                    <li>• "What should I know about Medicare at 65?"</li>
                    <li>• "Walk me through Medicare enrollment step by step"</li>
                    <li>• "Compare Medicare Advantage vs traditional Medicare"</li>
                    <li>• "Explain Medicare costs in simple terms"</li>
                    <li>• "What Medicare plan is right for my situation?"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-3">Problem-Solving Searches:</h4>
                  <ul className="text-purple-600 text-sm space-y-2">
                    <li>• "I'm confused about Medicare, where do I start?"</li>
                    <li>• "How do I avoid Medicare mistakes?"</li>
                    <li>• "What happens if I choose the wrong Medicare plan?"</li>
                    <li>• "Help me calculate Medicare costs for my budget"</li>
                    <li>• "I need Medicare help but don't know who to trust"</li>
                    <li>• "What's the easiest way to compare Medicare plans?"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI vs Human Expertise */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🤖 vs 👨‍💼 AI Guidance + Human Expertise</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Best of Both Worlds</h3>
              <p className="text-gray-600">
                Combine AI-powered instant answers with personalized human expertise for optimal Medicare decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🤖</span>
                  </div>
                  <h4 className="text-xl font-semibold text-purple-800">AI Advantages</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Instant 24/7 availability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Processes complex Medicare rules instantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Consistent, unbiased information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Handles multiple scenarios simultaneously</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Never gets tired or impatient</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Always up-to-date with latest changes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">👨‍💼</span>
                  </div>
                  <h4 className="text-xl font-semibold text-green-800">Human Expert Advantages</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Understands your unique situation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Provides personalized recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Handles complex family situations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Empathy and emotional support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Can advocate for you with insurance companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Ongoing relationship and support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-purple-600 to-green-600 text-white p-4 rounded-lg">
                <h4 className="text-lg font-bold mb-2">🎯 The Perfect Combination</h4>
                <p className="text-sm">
                  Use AI for instant answers and initial research, then connect with our licensed experts 
                  for personalized guidance and enrollment assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Search Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔍 Smart Medicare Search Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Natural Language Processing</h3>
              <p className="text-gray-700 mb-4">
                Ask questions in plain English, just like you'd ask a friend or family member.
              </p>
              
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-800 text-sm font-semibold">Example: "I'm turning 65 next month, what do I need to do?"</p>
                  <p className="text-blue-700 text-xs mt-1">
                    AI understands context and provides step-by-step enrollment guidance.
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-800 text-sm font-semibold">Example: "My diabetes medication costs $400/month, which plan helps?"</p>
                  <p className="text-green-700 text-xs mt-1">
                    AI identifies medication-specific plan recommendations and cost analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Contextual Understanding</h3>
              <p className="text-gray-700 mb-4">
                AI remembers your previous questions and builds comprehensive answers.
              </p>
              
              <div className="space-y-3">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-purple-800 text-sm font-semibold">Follow-up Questions Work:</p>
                  <p className="text-purple-700 text-xs mt-1">
                    "What about dental coverage?" - AI knows you're still discussing Medicare Advantage.
                  </p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-orange-800 text-sm font-semibold">Situation Awareness:</p>
                  <p className="text-orange-700 text-xs mt-1">
                    AI adapts answers based on your age, location, and specific circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Optimized FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🤖 AI-Optimized Medicare FAQ</h2>
          <p className="text-gray-600 mb-8">
            These questions are optimized for AI search patterns and natural language queries.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How do I know if I need Medicare Advantage or Original Medicare plus Medigap?
                  </h3>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700">
                  <p className="mb-3">
                    <strong>Quick Answer:</strong> If you want predictable costs and don't mind network restrictions, 
                    choose Medicare Advantage. If you want maximum flexibility and don't mind higher upfront costs, 
                    choose Original Medicare + Medigap.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 p-3 rounded">
                      <h4 className="font-semibold text-blue-800">Choose Medicare Advantage if:</h4>
                      <ul className="text-blue-700 space-y-1 mt-1">
                        <li>• You want lower monthly premiums</li>
                        <li>• You're okay with network restrictions</li>
                        <li>• You want extras like dental/vision</li>
                        <li>• You rarely travel outside your area</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <h4 className="font-semibold text-green-800">Choose Original Medicare + Medigap if:</h4>
                      <ul className="text-green-700 space-y-1 mt-1">
                        <li>• You want to see any Medicare doctor</li>
                        <li>• You travel frequently</li>
                        <li>• You want predictable out-of-pocket costs</li>
                        <li>• You have complex health conditions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What's the easiest way to compare Medicare Part D plans for my specific medications?
                  </h3>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700">
                  <p className="mb-3">
                    <strong>Easiest Method:</strong> Use Medicare.gov Plan Finder with your complete medication list. 
                    Enter every drug with exact dosages, and the tool will show total estimated costs for each plan.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <h4 className="font-semibold text-yellow-800">Pro Tip from AI Analysis:</h4>
                    <p className="text-yellow-700 text-sm">
                      Don't just pick the lowest premium. With 2025's new $2,000 cap, focus on which plan 
                      gets you to that maximum fastest if you take expensive medications, or has the lowest 
                      total cost if you take few medications.
                    </p>
                  </div>
                </div>
              </details>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Can AI help me understand what Medicare changes mean for my specific situation?
                  </h3>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700">
                  <p className="mb-3">
                    <strong>Yes!</strong> AI can analyze Medicare changes against your specific situation instantly. 
                    Provide your current plan details, medications, and health needs, and AI can calculate 
                    exactly how changes affect you.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-green-50 p-3 rounded">
                      <h4 className="font-semibold text-green-800">For High Drug Costs:</h4>
                      <p className="text-green-700">AI calculates exact savings from the $2,000 cap</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <h4 className="font-semibold text-blue-800">For Premium Changes:</h4>
                      <p className="text-blue-700">AI shows total impact on your annual budget</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <h4 className="font-semibold text-purple-800">For Plan Switches:</h4>
                      <p className="text-purple-700">AI compares your options with 2025 changes included</p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* AI + Human CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🚀 Get AI-Powered Medicare Guidance + Expert Support</h2>
            <p className="text-purple-100 mb-6 max-w-3xl mx-auto">
              Start with instant AI answers to your Medicare questions, then connect with our licensed experts 
              for personalized guidance and enrollment assistance. Best of both worlds - technology and human expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                🤖 Start with AI Guidance
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-purple-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                👨‍💼 Connect with Expert
              </a>
            </div>
            <p className="text-purple-200 text-sm mt-4">
              AI-powered insights • Licensed Medicare specialists • Personalized recommendations
            </p>
          </div>
        </section>

        {/* Related AI-Optimized Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔗 AI-Enhanced Medicare Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/medicare-plan-comparison-tool" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">
                <span className="text-sm">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Smart Plan Comparison</h3>
              <p className="text-gray-600 text-sm">
                AI-enhanced plan comparison with intelligent recommendations
              </p>
            </Link>
            <Link href="/medicare-2025-changes" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mb-3">
                <span className="text-sm">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">AI Change Analysis</h3>
              <p className="text-gray-600 text-sm">
                Understand how 2025 Medicare changes affect your specific situation
              </p>
            </Link>
            <Link href="/medicare-extra-help-qualification-quiz" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mb-3">
                <span className="text-sm">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Smart Eligibility Quiz</h3>
              <p className="text-gray-600 text-sm">
                AI-powered assessment for Medicare Extra Help qualification
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}