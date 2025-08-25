import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicare Extra Help Qualification Quiz - Am I Eligible? | Free Assessment',
  description: 'Take our free Medicare Extra Help qualification quiz to see if you qualify for prescription drug cost assistance. Get instant results and learn about your benefits.',
  keywords: 'Medicare Extra Help qualification quiz, am I eligible for Extra Help, Medicare LIS quiz, do I qualify for Extra Help, Medicare prescription assistance eligibility',
  openGraph: {
    title: 'Medicare Extra Help Qualification Quiz - Check Your Eligibility',
    description: 'Free quiz to determine if you qualify for Medicare Extra Help prescription drug assistance. Get instant results and next steps.',
    type: 'article',
  },
}

const quizStructuredData = {
  '@context': 'https://schema.org',
  '@type': ['WebApplication', 'Quiz'],
  name: 'Medicare Extra Help Qualification Quiz',
  description: 'Interactive quiz to determine eligibility for Medicare Extra Help (Low Income Subsidy) prescription drug assistance',
  url: 'https://el-mag.com/medicare-extra-help-qualification-quiz',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Medicare beneficiaries'
  },
  about: {
    '@type': 'MedicalCondition',
    name: 'Medicare Extra Help Eligibility'
  },
  provider: {
    '@type': 'Organization',
    name: 'El-Mag Insurance'
  },
  potentialAction: {
    '@type': 'AssessAction',
    name: 'Take Extra Help Quiz',
    description: 'Complete qualification assessment for Medicare Extra Help'
  }
}

export default function ExtraHelpQuizPage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(quizStructuredData)
        }}
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medicare Extra Help Qualification Quiz
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Answer a few simple questions to find out if you qualify for Medicare Extra Help (Low Income Subsidy) 
            and could save thousands on prescription drug costs.
          </p>
        </div>

        {/* Benefits Overview */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">What You Could Save with Extra Help</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">$0</div>
              <div className="text-blue-700 text-sm">Monthly Premium</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">$4.50</div>
              <div className="text-blue-700 text-sm">Generic Copay</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">$5,000+</div>
              <div className="text-blue-700 text-sm">Average Annual Savings</div>
            </div>
          </div>
        </div>

        {/* Quiz Section */}
        <section className="mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Do You Qualify for Medicare Extra Help?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Complete this quick assessment to determine your eligibility for prescription drug cost assistance.
            </p>

            <div className="space-y-8">
              {/* Question 1: Medicare Status */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  1. Do you have Medicare Part A and/or Part B?
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="medicare" value="yes" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Yes, I have Medicare</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="medicare" value="no" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">No, I don&apos;t have Medicare yet</span>
                  </label>
                </div>
              </div>

              {/* Question 2: Household Status */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  2. What is your current marital/household status?
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="marital" value="single" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Single (living alone)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="marital" value="married-together" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Married and living together</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="marital" value="married-apart" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Married but living apart</span>
                  </label>
                </div>
              </div>

              {/* Question 3: Income */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  3. What is your total monthly income from all sources?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Include Social Security, pensions, wages, interest, dividends, and any other income.
                </p>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="income" value="very-low" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Under $1,500/month ($1,990 if married)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="income" value="low" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">$1,500-$1,823/month ($1,990-$2,465 if married)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="income" value="moderate" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">$1,824-$2,027/month ($2,466-$2,745 if married)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="income" value="high" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Over $2,027/month ($2,745 if married)</span>
                  </label>
                </div>
              </div>

              {/* Question 4: Resources */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  4. What are your countable resources (savings and investments)?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Include bank accounts, stocks, bonds, mutual funds. Do NOT include your home, car, or burial funds up to $1,500.
                </p>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="resources" value="very-low" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Under $9,230 ($18,410 if married)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="resources" value="low" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">$9,230-$16,660 ($18,410-$33,240 if married)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="resources" value="high" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Over $16,660 ($33,240 if married)</span>
                  </label>
                </div>
              </div>

              {/* Question 5: Automatic Qualification */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  5. Do any of these apply to you?
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" name="auto-qualify" value="medicaid" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">I have Medicaid</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="auto-qualify" value="ssi" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">I receive Supplemental Security Income (SSI)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="auto-qualify" value="qmb" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">I have Qualified Medicare Beneficiary (QMB) benefits</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="auto-qualify" value="slmb" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">I have Specified Low-Income Medicare Beneficiary (SLMB) benefits</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="auto-qualify" value="qi" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">I have Qualifying Individual (QI) benefits</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="auto-qualify" value="none" className="mr-3 h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">None of these apply to me</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button 
                  type="button"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => alert('This is a demonstration. In a live site, this would calculate your eligibility results.')}
                >
                  Check My Eligibility
                </button>
                <p className="text-sm text-gray-600 mt-3">
                  Your information is not stored or shared. This is for assessment purposes only.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Potential Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Full Extra Help Benefits</h3>
              <p className="text-green-700 mb-4">
                If you qualify for full benefits, you could receive maximum savings on prescription costs.
              </p>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  $0 monthly Part D premium
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  $0 annual deductible
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  $4.50 generic drug copay
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  $11.20 brand name copay
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  No coverage gap (donut hole)
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Partial Extra Help Benefits</h3>
              <p className="text-blue-700 mb-4">
                Even partial benefits provide significant savings on prescription drug costs.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Reduced monthly premiums
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Lower annual deductible
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Reduced copays and coinsurance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Coverage gap protection
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  25% savings on brand drugs
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Qualification Guidelines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2025 Qualification Guidelines</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Benefit Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Individual Income
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Married Couple Income
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Resource Limits
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-green-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-800">
                    Full Extra Help
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $21,870/year or less
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $29,580/year or less
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $16,660 / $33,240
                  </td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-800">
                    Partial Extra Help
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $24,330/year or less
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $32,940/year or less
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $16,660 / $33,240
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            *Income and resource limits are updated annually. These are 2025 amounts.
          </p>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Next Steps After the Quiz</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Review Your Results</h3>
                  <p className="text-gray-700">
                    Based on your answers, you&apos;ll get an indication of whether you might qualify for Extra Help 
                    and what level of benefits you could receive.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Apply for Extra Help</h3>
                  <p className="text-gray-700 mb-3">
                    If the quiz indicates you might qualify, the next step is to submit an official application.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Online at socialsecurity.gov</p>
                    <p>• Call Social Security at 1-800-772-1213</p>
                    <p>• Visit your local Social Security office</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose a Part D Plan</h3>
                  <p className="text-gray-700">
                    Once approved for Extra Help, you can select a Medicare Part D plan or be auto-enrolled 
                    in a plan if you don&apos;t choose one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How accurate is this qualification quiz?
              </h3>
              <p className="text-gray-700">
                This quiz provides a preliminary assessment based on current eligibility guidelines. Only 
                Social Security can make an official determination. We recommend applying if the quiz indicates 
                you might qualify.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if my income changes during the year?
              </h3>
              <p className="text-gray-700">
                You can apply for Extra Help at any time during the year if your circumstances change. 
                Benefits will start the month after Social Security approves your application.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do I need to reapply every year?
              </h3>
              <p className="text-gray-700">
                No, Extra Help benefits continue automatically as long as you remain eligible. Social Security 
                may periodically review your eligibility and ask for updated information.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Need Help with Your Extra Help Application?</h2>
          <p className="text-blue-100 mb-6">
            Our Medicare experts can help you understand your quiz results, gather required documentation, 
            and guide you through the Extra Help application process at no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Get Free Help
            </Link>
            <Link
              href="/medicare-extra-help"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Learn More About Extra Help
            </Link>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/medicare-extra-help" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Extra Help Program Guide</h3>
              <p className="text-gray-600 text-sm">
                Complete guide to Medicare Extra Help benefits and application process
              </p>
            </Link>
            <Link href="/medicare-lis-program" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Medicare LIS Program</h3>
              <p className="text-gray-600 text-sm">
                Understanding the Low Income Subsidy program and qualification requirements
              </p>
            </Link>
            <Link href="/medicare-part-d" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Part D Plans</h3>
              <p className="text-gray-600 text-sm">
                Learn about Medicare Part D prescription drug plans and coverage options
              </p>
            </Link>
          </div>
        </section>

        <nav className="text-sm text-gray-600">
          <Link href="/medicare-extra-help" className="hover:text-blue-600">
            ← Back to Medicare Extra Help
          </Link>
        </nav>
      </div>
    </main>
  )
}