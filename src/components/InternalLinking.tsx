import Link from 'next/link';

interface RelatedProduct {
  title: string;
  href: string;
  description: string;
}

interface CrossReference {
  text: string;
  href: string;
}

interface InternalLinkingProps {
  relatedProducts: RelatedProduct[];
  crossReferences: CrossReference[];
  title?: string;
  className?: string;
}

export default function InternalLinking({ 
  relatedProducts, 
  crossReferences, 
  title = "Related Travel Protection - Complete Coverage Solutions",
  className = ""
}: InternalLinkingProps) {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          {title}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Related Products */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Insurance Products</h3>
            <div className="space-y-6">
              {relatedProducts.map((product, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    <Link href={product.href} className="hover:text-blue-800 transition-colors">
                      {product.title}
                    </Link>
                  </h4>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <Link 
                    href={product.href} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Cross References */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">You May Also Be Interested In</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                {crossReferences.map((reference, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <Link 
                      href={reference.href} 
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      {reference.text}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Need Help Choosing?</h4>
                <p className="text-gray-600 mb-4">
                  Our insurance specialists can help you compare options and find the right coverage for your needs.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Get Expert Help
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Navigation */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/travel-insurance" className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium transition-colors">
              All Travel Insurance
            </Link>
            <Link href="/health-insurance" className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium transition-colors">
              Health Insurance
            </Link>
            <Link href="/supplemental-insurance" className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium transition-colors">
              Supplemental Insurance
            </Link>
            <Link href="/final-expense" className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium transition-colors">
              Final Expense Insurance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}