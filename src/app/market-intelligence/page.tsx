import { Metadata } from 'next';
import MarketIntelligenceReportPage from '@/components/MarketIntelligenceReport';

export const metadata: Metadata = {
  title: 'Opus Enhanced Market Intelligence Report - El-Mag Insurance',
  description: 'Comprehensive analysis of underserved Medicare Advantage markets using real CMS enrollment data. Identify high-opportunity markets and develop targeted marketing strategies.',
  keywords: 'Medicare Advantage, market intelligence, CMS data, underserved markets, marketing strategy, Medicare enrollment',
};

export default function MarketIntelligencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Report Content */}
      <main className="py-8">
        <MarketIntelligenceReportPage />
      </main>

    </div>
  );
}