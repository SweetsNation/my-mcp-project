import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicare LIS Program: Low Income Subsidy for Prescription Drugs | El-Mag Insurance',
  description: 'Learn about the Medicare LIS (Low Income Subsidy) program, also known as Extra Help. Get qualification requirements, benefits, and application assistance.',
  keywords: 'Medicare LIS program, Low Income Subsidy Medicare, Medicare prescription drug assistance, Extra Help program, Medicare LIS benefits',
  openGraph: {
    title: 'Medicare LIS Program: Low Income Subsidy for Prescription Drugs',
    description: 'Complete guide to Medicare LIS program benefits, qualification requirements, and application process.',
    type: 'article',
  ,
      images: [
        {
          url: 'https://www.elmaginsurance.com/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'El-Mag Insurance - Medicare and Health Insurance Solutions',
        },
      ],
    },
}

export default function MedicareLISPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medicare LIS Program: Low Income Subsidy for Prescription Drugs
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The Medicare LIS (Low Income Subsidy) program, also known as Extra Help, provides financial assistance 
            with Medicare Part D prescription drug costs for qualifying beneficiaries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Average Savings</h3>
            <p className="text-3xl font-bold text-blue-600">$5,000+</p>
            <p className="text-sm text-gray-600">per year on prescription costs</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Eligible Beneficiaries</h3>
            <p className="text-3xl font-bold text-green-600">12M+</p>
            <p className="text-sm text-gray-600">Medicare beneficiaries qualify</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Maximum Copays</h3>
            <p className="text-3xl font-bold text-purple-600">$4.50</p>
            <p className="text-sm text-gray-600">for generic medications</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Medicare LIS Program?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              The Medicare Low Income Subsidy (LIS) program is a federal assistance program that helps pay for 
              Medicare Part D prescription drug plan costs. This program is administered by the Social Security 
              Administration and provides both premium and cost-sharing assistance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The LIS program is designed to make prescription medications affordable for Medicare beneficiaries 
              with limited income and resources, ensuring that financial constraints don&apos;t prevent access to 
              necessary medications.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Medicare LIS Program Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Full LIS Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  No monthly Part D premium
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
                  No coverage gap
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Partial LIS Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Reduced monthly premium
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Lower annual deductible
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Reduced copays in coverage gap
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  25% discount on brand drugs
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Protection from high costs
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2025 Medicare LIS Qualification Requirements</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Income and Resource Limits</h3>
            <p className="text-yellow-700">
              Qualification is based on both your income and countable resources. These limits are updated annually.
            </p>
          </div>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Benefit Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Individual Income
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Married Income
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Resource Limit
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Full LIS
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $21,870
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $29,580
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $16,660 / $33,240
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Partial LIS
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $24,330
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $32,940
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $16,660 / $33,240
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Automatic Qualification for Medicare LIS</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Some Medicare beneficiaries automatically qualify for the LIS program without needing to apply:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Medicaid Beneficiaries</h3>
              <p className="text-green-700 text-sm">
                If you have Medicaid, you automatically qualify for full LIS benefits.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">SSI Recipients</h3>
              <p className="text-green-700 text-sm">
                Supplemental Security Income recipients automatically qualify for full LIS.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">QMB Beneficiaries</h3>
              <p className="text-green-700 text-sm">
                Qualified Medicare Beneficiary program participants get automatic full LIS.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">MSP Participants</h3>
              <p className="text-green-700 text-sm">
                Medicare Savings Program participants qualify for full LIS benefits.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Apply for Medicare LIS</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Online Application</h3>
              <p className="text-blue-700 mb-3">
                Apply online at www.socialsecurity.gov using the LIS application form.
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Available 24/7</li>
                <li>• Fastest processing time</li>
                <li>• Immediate confirmation</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Phone Application</h3>
              <p className="text-blue-700 mb-3">
                Call Social Security at 1-800-772-1213 (TTY: 1-800-325-0778).
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Monday-Friday, 8 AM to 7 PM</li>
                <li>• Assistance available in multiple languages</li>
                <li>• Help with completing application</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">In-Person Application</h3>
              <p className="text-blue-700 mb-3">
                Visit your local Social Security office with required documentation.
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Appointment recommended</li>
                <li>• Bring all required documents</li>
                <li>• Get help with application completion</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documentation for LIS Application</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Income Documentation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Pay stubs or earnings statements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Social Security benefit statements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Pension or retirement statements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Unemployment benefits statements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Interest and dividend statements
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Resource Documentation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Bank account statements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Investment account statements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Certificate of deposit statements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Stock and bond certificates
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Life insurance policy information
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Medicare LIS vs Extra Help: What&apos;s the Difference?</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Medicare LIS and Extra Help are the same program.</strong> The official name is &quot;Low Income 
              Subsidy&quot; (LIS), but it&apos;s commonly referred to as &quot;Extra Help&quot; in Medicare communications 
              and marketing materials.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Official Name: LIS</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Used in Social Security documentation</li>
                  <li>• Referenced in Medicare regulations</li>
                  <li>• Professional and technical discussions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Common Name: Extra Help</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Used in Medicare marketing materials</li>
                  <li>• Consumer-friendly terminology</li>
                  <li>• Educational resources and guides</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I apply for LIS if I already have a Part D plan?
              </h3>
              <p className="text-gray-700">
                Yes, you can apply for LIS at any time. If approved, your benefits will begin the month after 
                Social Security processes your application, and you may be able to switch to a different Part D plan.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does the LIS application process take?
              </h3>
              <p className="text-gray-700">
                Most LIS applications are processed within 30-45 days. You&apos;ll receive a decision letter from 
                Social Security explaining whether you qualify and what level of benefits you&apos;ll receive.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do I need to reapply for LIS every year?
              </h3>
              <p className="text-gray-700">
                No, LIS benefits continue automatically as long as you remain eligible. However, Social Security 
                may periodically review your eligibility and ask you to provide updated income and resource information.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Get Help with Your Medicare LIS Application</h2>
          <p className="text-blue-100 mb-6">
            Our licensed insurance agents can help you understand Medicare LIS benefits, determine if you qualify, 
            and assist with your application process at no cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/medicare-extra-help"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Learn About Extra Help
            </Link>
          </div>
        </section>

        <nav className="text-sm text-gray-600">
          <Link href="/medicare-part-d" className="hover:text-blue-600">
            ← Back to Medicare Part D
          </Link>
        </nav>
      </div>
    </main>
  )
}