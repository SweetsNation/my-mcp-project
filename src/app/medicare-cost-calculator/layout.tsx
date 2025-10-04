import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-cost-calculator',
  },
}

export default function MedicareCostCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}