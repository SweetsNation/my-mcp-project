import Link from 'next/link';
import { pageLinkingStrategies, InternalLinkConfig } from '@/lib/internal-linking-strategy';

interface InternalLinksSectionProps {
  currentPageKey: string;
  sectionTitle?: string;
  showDescriptions?: boolean;
  maxLinks?: number;
  linkType?: 'primary' | 'contextual' | 'related' | 'crossSells' | 'all';
  className?: string;
  variant?: 'cards' | 'list' | 'compact';
}

export default function InternalLinksSection({
  currentPageKey,
  sectionTitle,
  showDescriptions = true,
  maxLinks = 6,
  linkType = 'all',
  className = '',
  variant = 'cards'
}: InternalLinksSectionProps) {
  const strategy = pageLinkingStrategies[currentPageKey];

  if (!strategy) {
    return null;
  }

  // Collect links based on type
  let links: InternalLinkConfig[] = [];

  switch (linkType) {
    case 'primary':
      links = strategy.primaryLinks;
      break;
    case 'contextual':
      links = strategy.contextualLinks;
      break;
    case 'related':
      links = strategy.relatedTopics;
      break;
    case 'crossSells':
      links = strategy.crossSells;
      break;
    case 'all':
    default:
      links = [
        ...strategy.primaryLinks,
        ...strategy.contextualLinks,
        ...strategy.relatedTopics,
        ...strategy.crossSells
      ];
      break;
  }

  // Remove duplicates and limit
  const uniqueLinks = links
    .filter((link, index, self) =>
      index === self.findIndex(l => l.url === link.url)
    )
    .slice(0, maxLinks);

  if (uniqueLinks.length === 0) {
    return null;
  }

  const defaultTitle = linkType === 'primary' ? 'Related Medicare Resources' :
                     linkType === 'contextual' ? 'You May Also Be Interested In' :
                     linkType === 'related' ? 'Related Topics' :
                     linkType === 'crossSells' ? 'Additional Coverage Options' :
                     'Explore More Medicare Options';

  // Track internal link clicks
  const handleLinkClick = (linkUrl: string, linkTitle: string) => {
    if (typeof window !== 'undefined' && (window as any).trackLandingPageNavigation) {
      (window as any).trackLandingPageNavigation('internal_link', linkUrl);
    }

    // Track with additional context
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'internal_link_click', {
        event_category: 'Navigation',
        event_label: `${currentPageKey}_to_${linkUrl.replace(/[^a-zA-Z0-9]/g, '_')}`,
        link_title: linkTitle,
        link_type: linkType,
        source_page: currentPageKey,
        destination: linkUrl
      });
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`bg-gray-50 p-4 rounded-lg ${className}`}>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          {sectionTitle || defaultTitle}
        </h3>
        <div className="flex flex-wrap gap-2">
          {uniqueLinks.map((link, index) => (
            <Link
              key={`${link.url}-${index}`}
              href={link.url}
              className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full hover:bg-blue-200 transition-colors"
              onClick={() => handleLinkClick(link.url, link.title)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className={`${className}`}>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {sectionTitle || defaultTitle}
        </h3>
        <ul className="space-y-3">
          {uniqueLinks.map((link, index) => (
            <li key={`${link.url}-${index}`} className="border-l-4 border-blue-500 pl-4">
              <Link
                href={link.url}
                className="block group"
                onClick={() => handleLinkClick(link.url, link.title)}
              >
                <h4 className="font-medium text-blue-600 group-hover:text-blue-800 transition-colors">
                  {link.title}
                </h4>
                {showDescriptions && (
                  <p className="text-gray-600 text-sm mt-1">{link.description}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Default cards variant
  return (
    <div className={`${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        {sectionTitle || defaultTitle}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {uniqueLinks.map((link, index) => (
          <Link
            key={`${link.url}-${index}`}
            href={link.url}
            className="group block"
            onClick={() => handleLinkClick(link.url, link.title)}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {link.title}
                </h4>
                <div className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                  link.category === 'location' ? 'bg-green-100 text-green-800' :
                  link.category === 'product' ? 'bg-blue-100 text-blue-800' :
                  link.category === 'guide' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {link.category}
                </div>
              </div>
              {showDescriptions && (
                <p className="text-gray-600 text-sm">{link.description}</p>
              )}
              <div className="mt-3 flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Specialized components for different contexts
export function PrimaryLinksSection({ currentPageKey, className = '' }: { currentPageKey: string; className?: string }) {
  return (
    <InternalLinksSection
      currentPageKey={currentPageKey}
      sectionTitle="Essential Medicare Resources"
      linkType="primary"
      variant="cards"
      maxLinks={3}
      className={className}
    />
  );
}

export function RelatedTopicsSection({ currentPageKey, className = '' }: { currentPageKey: string; className?: string }) {
  return (
    <InternalLinksSection
      currentPageKey={currentPageKey}
      sectionTitle="Related Topics"
      linkType="related"
      variant="list"
      showDescriptions={true}
      className={className}
    />
  );
}

export function ContextualLinksSection({ currentPageKey, className = '' }: { currentPageKey: string; className?: string }) {
  return (
    <InternalLinksSection
      currentPageKey={currentPageKey}
      sectionTitle="You May Also Be Interested In"
      linkType="contextual"
      variant="compact"
      showDescriptions={false}
      className={className}
    />
  );
}

export function CrossSellSection({ currentPageKey, className = '' }: { currentPageKey: string; className?: string }) {
  return (
    <InternalLinksSection
      currentPageKey={currentPageKey}
      sectionTitle="Additional Coverage Options"
      linkType="crossSells"
      variant="cards"
      maxLinks={2}
      className={className}
    />
  );
}