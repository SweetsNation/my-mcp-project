import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        {/* Home Link */}
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>

        {/* Breadcrumb Items */}
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                aria-hidden="true"
              />
              {item.current ? (
                <span
                  className="ml-2 text-sm font-medium text-gray-500 truncate"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href || '#'}
                  className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700 truncate"
                >
                  {item.label}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Utility function to generate breadcrumbs for Medicare Advantage pages
export function generateMedicareBreadcrumbs(
  currentPage: 'index' | 'county',
  countyName?: string,
  countySlug?: string
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [];

  if (currentPage === 'index') {
    breadcrumbs.push({
      label: 'Medicare Advantage Plans',
      current: true,
    });
  } else if (currentPage === 'county' && countyName) {
    breadcrumbs.push({
      label: 'Medicare Advantage Plans',
      href: '/medicare-advantage',
    });
    breadcrumbs.push({
      label: countyName,
      current: true,
    });
  }

  return breadcrumbs;
}

// JSON-LD structured data for breadcrumbs
export function generateBreadcrumbStructuredData(items: BreadcrumbItem[], baseUrl: string = 'https://elmag-insurance.com') {
  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
  ];

  items.forEach((item, index) => {
    if (item.href || item.current) {
      const listItem: any = {
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
      };
      
      if (!item.current && item.href) {
        listItem.item = `${baseUrl}${item.href}`;
      }
      
      itemListElement.push(listItem);
    }
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
}