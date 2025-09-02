import { Metadata } from 'next';
import { MedicarePlanFinder } from '@/components/MedicarePlanFinder';

export const metadata: Metadata = {
  title: 'Medicare Plan Finder - Compare Plans Side by Side | El-Mag Insurance',
  description: 'Find and compare Medicare Advantage, Part D, and Medigap plans in your area. Use our interactive tool to find the perfect plan for your healthcare needs and budget.',
  keywords: 'Medicare plan finder, compare Medicare plans, Medicare Advantage comparison, Part D plans, Medigap plans, Medicare plan search',
};

export default function MedicarePlanFinderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MedicarePlanFinder />
    </div>
  );
}
