import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://elmaginsurance.com/health-insurance-cost-calculator',
  },
}

export default function HealthInsuranceCostCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}