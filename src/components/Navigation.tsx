'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

interface SubmenuItem {
  title: string;
  href: string;
  description?: string;
}

interface MenuItem {
  title: string;
  submenu: SubmenuItem[];
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      title: 'Over 65',
      submenu: [
        { title: 'Medicare Advantage', href: '/medicare-advantage', description: 'Comprehensive health plans with additional benefits' },
        { title: 'Medicare Supplement', href: '/medicare-supplement', description: 'Fill gaps in Original Medicare coverage' },
        { title: 'Medicare Part D', href: '/medicare-part-d', description: 'Prescription drug coverage plans' },
        { title: 'Social Security Analysis', href: '/social-security-analysis', description: 'Maximize your Social Security benefits' },
      ]
    },
    {
      title: 'Under 65',
      submenu: [
        { title: 'Marketplace Insurance', href: '/health-insurance-marketplace', description: 'ACA-compliant health insurance plans' },
        { title: 'Supplemental Insurance', href: '/supplemental-insurance', description: 'Additional coverage for specific needs' },
      ]
    },
    {
      title: 'Finance',
      submenu: [
        { title: 'Term Life Insurance', href: '/term-life-insurance', description: 'Affordable life insurance protection for your family' },
        { title: 'Final Expense', href: '/final-expense', description: 'Coverage for end-of-life expenses and funeral costs' },
      ]
    },
    {
      title: 'Travel',
      submenu: [
        { title: 'Emergency Evacuation Insurance', href: '/emergency-evacuation-insurance', description: 'Medical evacuation and emergency travel protection' },
        { title: 'Trip Cancellation Insurance', href: '/trip-cancellation-insurance', description: 'Protection against trip cancellations and interruptions' },
      ]
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);



  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              El-Mag Insurance
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Dropdown Menus */}
              {menuItems.map((item) => (
                <div key={item.title} className="relative">
                  <button
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  >
                    {item.title}
                    <svg 
                      className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Desktop Dropdown */}
                  {activeDropdown === item.title && (
                    <div 
                      className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[100]"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                          onClick={closeDropdown}
                        >
                          <div className="font-medium text-gray-900">{subItem.title}</div>
                          {subItem.description && (
                            <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <Link 
                href="/resources" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Resources
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {/* Mobile Dropdown Menus */}
              {menuItems.map((item) => (
                <div key={item.title} className="space-y-1">
                                      <button
                      onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                      className="w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-between"
                    >
                    {item.title}
                    <svg 
                      className={`h-4 w-4 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile Submenu */}
                  {activeDropdown === item.title && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                          onClick={closeMenu}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                href="/resources"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMenu}
              >
                Resources
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}