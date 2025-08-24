import Link from 'next/link';

export default function Footer() {
  const currentYear = 2025;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">El-Mag Insurance</h3>
            <p className="text-gray-300 mb-4">
              Licensed insurance agency specializing in Medicare Advantage plans. 
              We help you find comprehensive coverage with expert guidance from licensed agents.
            </p>
            <p className="text-gray-400 text-sm">
              Licensed in multiple states. License numbers available upon request.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/medicare-advantage" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Medicare Advantage
                </Link>
              </li>
              <li>
                <Link href="/market-intelligence" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Medicare Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Medicare Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/medicare-advantage/fairfax-county-virginia" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Fairfax County, VA
                </Link>
              </li>
              <li>
                <Link href="/medicare-advantage/wake-county-north-carolina" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Wake County, NC
                </Link>
              </li>
              <li>
                <Link href="/medicare-advantage/davidson-county-tennessee" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Davidson County, TN
                </Link>
              </li>
              <li>
                <Link href="/medicare-advantage/fulton-county-georgia" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Fulton County, GA
                </Link>
              </li>
              <li>
                <Link href="/medicare-advantage/jefferson-county-alabama" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Jefferson County, AL
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} El-Mag Insurance. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-blue-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>Important:</strong> We do not offer every plan available in your area. 
            Any information we provide is limited to those plans we do offer in your area. 
            Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.
          </p>
        </div>
      </div>
    </footer>
  );
}