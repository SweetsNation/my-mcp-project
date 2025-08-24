'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '🦷',
    title: 'Dental Coverage',
    description: 'Preventive, basic, and major dental services including cleanings, fillings, and crowns.',
    details: ['Preventive care at 100%', 'Basic services at 80%', 'Major services at 50%', 'Annual maximums up to $3,000'],
  },
  {
    icon: '👁️',
    title: 'Vision Benefits',
    description: 'Eye exams, glasses, and contact lenses to keep your vision clear.',
    details: ['Annual eye exams', 'Frames allowance up to $250', 'Contact lens allowance', 'Progressive lens upgrades'],
  },
  {
    icon: '🦻',
    title: 'Hearing Aids',
    description: 'Hearing exams and hearing aid coverage to help you stay connected.',
    details: ['Annual hearing exams', 'Hearing aid allowance up to $3,000', 'Fitting and adjustments', 'Battery coverage'],
  },
  {
    icon: '💪',
    title: 'Fitness Programs',
    description: 'Gym memberships and fitness programs to help you stay active and healthy.',
    details: ['SilverSneakers membership', '15,000+ participating locations', 'Home fitness kits', 'Online workout classes'],
  },
  {
    icon: '🚐',
    title: 'Transportation',
    description: 'Transportation to medical appointments when you need it most.',
    details: ['Rides to/from medical appointments', 'Up to 24 one-way trips per year', 'No copayments', 'Easy scheduling'],
  },
  {
    icon: '💊',
    title: 'Over-the-Counter Items',
    description: 'Monthly allowance for health and wellness products you use every day.',
    details: ['Monthly OTC allowance up to $120', 'Health and wellness products', 'Order online or by phone', 'Home delivery available'],
  },
];

export function BenefitsOverview() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Extra Benefits Beyond Original Medicare
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Medicare Advantage plans offer additional benefits that Original Medicare doesn't cover, 
          helping you save money and stay healthier.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            className="card hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
            </div>
            
            <p className="text-gray-600 mb-4">{benefit.description}</p>
            
            <ul className="space-y-2">
              {benefit.details.map((detail, i) => (
                <li key={i} className="flex items-start text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-primary-50 rounded-xl p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Medicare Advantage vs. Original Medicare
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-primary-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Coverage</th>
                  <th className="text-center py-3 px-4 font-semibold text-primary-600">Medicare Advantage</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-600">Original Medicare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-100">
                <tr>
                  <td className="py-3 px-4 font-medium">Medical Coverage (Parts A & B)</td>
                  <td className="text-center py-3 px-4 text-green-600">✓ Included</td>
                  <td className="text-center py-3 px-4 text-green-600">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Prescription Drug Coverage (Part D)</td>
                  <td className="text-center py-3 px-4 text-green-600">✓ Usually Included</td>
                  <td className="text-center py-3 px-4 text-yellow-600">Optional (Extra Cost)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Dental Coverage</td>
                  <td className="text-center py-3 px-4 text-green-600">✓ Often Included</td>
                  <td className="text-center py-3 px-4 text-red-600">✗ Not Covered</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Vision Coverage</td>
                  <td className="text-center py-3 px-4 text-green-600">✓ Often Included</td>
                  <td className="text-center py-3 px-4 text-red-600">✗ Not Covered</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Hearing Aids</td>
                  <td className="text-center py-3 px-4 text-green-600">✓ Often Included</td>
                  <td className="text-center py-3 px-4 text-red-600">✗ Not Covered</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Fitness Programs</td>
                  <td className="text-center py-3 px-4 text-green-600">✓ Many Plans</td>
                  <td className="text-center py-3 px-4 text-red-600">✗ Not Covered</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Transportation</td>
                  <td className="text-center py-3 px-4 text-green-600">✓ Many Plans</td>
                  <td className="text-center py-3 px-4 text-red-600">✗ Not Covered</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Annual Out-of-Pocket Maximum</td>
                  <td className="text-center py-3 px-4 text-green-600">✓ Yes (2024: $8,850)</td>
                  <td className="text-center py-3 px-4 text-red-600">✗ No Limit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}