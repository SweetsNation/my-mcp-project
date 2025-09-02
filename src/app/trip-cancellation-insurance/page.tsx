import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Calculator, Users, Shield, Clock, CheckCircle, Heart, DollarSign, FileText, Award, MapPin, Plane, Car, Ship } from 'lucide-react'
import BreadcrumbNavigation, { TRIP_CANCELLATION_BREADCRUMBS } from '@/components/BreadcrumbNavigation'

export const metadata: Metadata = {
  title: 'Trip Cancellation Insurance | Travel Cancellation Coverage | Vacation Insurance Protection',
  description: 'Get comprehensive trip cancellation insurance to protect your travel investment. Coverage for flight cancellations, hotel bookings, and vacation expenses. Affordable travel protection starting at $15/trip. Get free quotes today.',
  keywords: 'trip cancellation insurance, travel cancellation insurance, vacation cancellation insurance, trip insurance, travel insurance, vacation insurance, trip cancellation coverage, travel protection, trip cancellation policy, travel insurance quotes',
  openGraph: {
    title: 'Trip Cancellation Insurance - Protect Your Travel Investment | From $15/Trip',
    description: 'Don\'t lose thousands on cancelled trips. Get comprehensive trip cancellation insurance covering flights, hotels, and vacation expenses. Free quotes in 5 minutes.',
    type: 'website',
    siteName: 'Elmag Insurance',
    images: [
      {
        url: '/images/trip-cancellation-insurance-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trip Cancellation Insurance Coverage'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trip Cancellation Insurance | Travel Protection | Vacation Coverage',
    description: 'Protect your travel investment with comprehensive trip cancellation insurance starting at $15/trip.',
    images: ['/images/trip-cancellation-insurance-twitter.jpg']
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/trip-cancellation-insurance'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


export default function TripCancellationInsurancePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <BreadcrumbNavigation 
            customBreadcrumbs={TRIP_CANCELLATION_BREADCRUMBS}
            className="mb-8"
          />
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Trip Cancellation Insurance | Travel Cancellation Coverage
              <span className="block text-blue-600">Vacation Insurance Protection</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Protect your travel investment with comprehensive trip cancellation insurance. 
              Coverage for flights, hotels, cruises, and vacation expenses when you need to cancel for covered reasons. 
              Don't let unexpected events cost you thousands. Complement your <Link href="/health-insurance-marketplace" className="text-blue-600 hover:underline font-semibold">health insurance coverage</Link> with travel protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                data-trip-cancellation="quote-request"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Get Free Quote
              </Link>
              <Link
                href="tel:331-343-2584"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 331-E-HEALTH
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Comprehensive Trip Protection</h3>
                <p className="text-gray-600">Coverage for trip cancellation, interruption, and travel delays</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Affordable Travel Insurance</h3>
                <p className="text-gray-600">Trip cancellation insurance starting as low as $15 per trip</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Travel Peace of Mind</h3>
                <p className="text-gray-600">Travel confidently knowing your investment is protected</p>
              </div>
            </div>
          </div>

          {/* What is Trip Cancellation Insurance Section */}
          <section className="mb-16" id="what-is-trip-cancellation">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                What is Trip Cancellation Insurance? Travel Protection Explained
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-6">
                    Trip cancellation insurance, also known as travel cancellation insurance or vacation insurance, 
                    provides financial protection when you need to cancel your trip for covered reasons. Unlike basic 
                    <Link href="/travel-insurance" className="text-blue-600 hover:underline"> travel insurance</Link>, trip cancellation policies specifically 
                    focus on reimbursing your non-refundable trip expenses when covered events force you to cancel:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Sudden illness or injury</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Death of family member</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Job loss or work obligations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Natural disasters at destination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Airline or travel supplier bankruptcy</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Average Trip Costs That Need Protection</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between" data-travel-type="domestic">
                      <span>Domestic vacation (7 days)</span>
                      <span className="font-semibold">$2,500</span>
                    </div>
                    <div className="flex justify-between" data-travel-type="international">
                      <span>International trip (10 days)</span>
                      <span className="font-semibold">$5,000</span>
                    </div>
                    <div className="flex justify-between" data-travel-type="cruise">
                      <span>Cruise vacation (7 days)</span>
                      <span className="font-semibold">$3,500</span>
                    </div>
                    <div className="flex justify-between" data-travel-type="honeymoon">
                      <span>Honeymoon package</span>
                      <span className="font-semibold">$8,000</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Trip Cancellation Insurance Cost</span>
                      <span className="text-blue-600">4-8% of trip cost</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trip Cancellation Coverage Options Section */}
          <section className="mb-16" id="coverage-options">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Trip Cancellation Insurance Coverage Options
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg" data-coverage-amount="basic">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold mb-2">Basic Trip Cancellation</h3>
                    <div className="text-3xl font-bold text-blue-600">Up to $2,500</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Trip cancellation coverage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Basic medical emergency</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Travel delay coverage</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-3">Starting at</p>
                    <p className="text-2xl font-bold">$15/trip</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-600 relative" data-coverage-amount="standard">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold mb-2">Standard Travel Protection</h3>
                    <div className="text-3xl font-bold text-blue-600">Up to $10,000</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Complete trip cancellation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Trip interruption coverage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Emergency medical coverage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Baggage protection</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-3">Starting at</p>
                    <p className="text-2xl font-bold">$85/trip</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg" data-coverage-amount="comprehensive">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Travel Insurance</h3>
                    <div className="text-3xl font-bold text-blue-600">Up to $100,000</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Maximum trip protection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Cancel for Any Reason</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Emergency evacuation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">24/7 travel assistance</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-3">Starting at</p>
                    <p className="text-2xl font-bold">$350/trip</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Travel Types Coverage Section */}
          <section className="mb-16 bg-white rounded-lg p-8" id="travel-types">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Trip Cancellation Insurance for Every Travel Type
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're planning a cruise, international adventure, or domestic getaway, 
                our trip cancellation insurance adapts to your specific travel needs. Perfect for travelers who also need 
                <Link href="/medicare-advantage" className="text-blue-600 hover:underline"> Medicare Advantage coordination</Link> for medical coverage abroad.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4 flex items-center" data-destination-type="cruise">
                    <Ship className="h-6 w-6 text-blue-600 mr-2" />
                    Cruise Trip Cancellation Insurance
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Protect your cruise vacation investment with specialized coverage for cruise-specific risks 
                    including cabin changes, itinerary modifications, and cruise line policies.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 flex items-center" data-destination-type="international">
                    <Plane className="h-6 w-6 text-blue-600 mr-2" />
                    International Travel Insurance
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive protection for overseas trips including emergency medical coverage, 
                    embassy assistance, and coverage for international travel restrictions.
                  </p>
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4 flex items-center" data-destination-type="domestic">
                    <Car className="h-6 w-6 text-blue-600 mr-2" />
                    Domestic Vacation Protection
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Coverage for domestic trips including rental car protection, hotel cancellations, 
                    and weather-related travel disruptions within the United States.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 flex items-center" data-destination-type="business">
                    <Award className="h-6 w-6 text-blue-600 mr-2" />
                    Business Travel Insurance
                  </h3>
                  <p className="text-gray-600">
                    Specialized coverage for business travelers including work-related cancellations, 
                    equipment protection, and coverage for business meeting disruptions.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                  data-trip-cancellation="specialized-quote"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Specialized Coverage Quote
                </Link>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16" id="benefits">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Benefits of Trip Cancellation Insurance Coverage
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start" data-policy-feature="financial-protection">
                    <Shield className="h-8 w-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Financial Protection for Travel Investments</h3>
                      <p className="text-gray-700">
                        Protect thousands of dollars in non-refundable travel expenses when unexpected events 
                        force trip cancellation. Works alongside your existing <Link href="/health-insurance-marketplace" className="text-blue-600 hover:underline">health insurance coverage</Link> for complete protection.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start" data-policy-feature="flexibility">
                    <FileText className="h-8 w-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Flexible Trip Cancellation Policies</h3>
                      <p className="text-gray-700">
                        Choose from standard covered reasons or upgrade to "Cancel for Any Reason" coverage 
                        for maximum flexibility. Our <Link href="/specialists" className="text-blue-600 hover:underline">travel insurance specialists</Link> help you find the perfect policy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start" data-policy-feature="affordability">
                    <DollarSign className="h-8 w-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Affordable Trip Insurance Premiums</h3>
                      <p className="text-gray-700">
                        Trip cancellation insurance typically costs 4-8% of your total trip cost, 
                        providing excellent value for comprehensive travel protection.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start" data-policy-feature="coverage-scope">
                    <Users className="h-8 w-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Comprehensive Travel Coverage Options</h3>
                      <p className="text-gray-700">
                        Beyond trip cancellation, many policies include trip interruption, 
                        medical emergencies, baggage protection, and travel delay coverage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start" data-policy-feature="assistance">
                    <Clock className="h-8 w-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">24/7 Travel Assistance Services</h3>
                      <p className="text-gray-700">
                        Access to emergency travel assistance, rebooking services, and 
                        support when you need it most, anywhere in the world.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start" data-policy-feature="peace-of-mind">
                    <Heart className="h-8 w-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Travel with Complete Peace of Mind</h3>
                      <p className="text-gray-700">
                        Book your dream vacation knowing that your investment is protected 
                        against unforeseen circumstances that could derail your plans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem-Solution Section */}
          <section className="mb-16" id="problems-solutions">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Travel Problems & Trip Cancellation Solutions
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Problem: Lost Travel Investment from Cancellations</h3>
                  <p className="text-red-700 mb-4">
                    Unexpected illness, family emergencies, or work obligations can force you to cancel trips, 
                    losing thousands in non-refundable travel expenses including flights, hotels, and tours.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">Solution: Trip Cancellation Insurance Coverage</h4>
                    <p className="text-green-700">
                      Trip cancellation insurance reimburses your non-refundable travel expenses when you 
                      need to cancel for covered reasons, protecting your vacation investment.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Problem: Medical Emergencies During Travel</h3>
                  <p className="text-red-700 mb-4">
                    Travel medical emergencies can result in expensive hospital bills and emergency evacuation costs, 
                    especially when traveling internationally where your regular health insurance may not apply.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">Solution: Emergency Medical Travel Coverage</h4>
                    <p className="text-green-700">
                      Travel insurance includes emergency medical coverage and evacuation benefits, 
                      providing essential healthcare protection when you're away from home.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Problem: Travel Supplier Bankruptcy or Changes</h3>
                  <p className="text-red-700 mb-4">
                    Airlines, cruise lines, and tour operators can go out of business or make significant 
                    itinerary changes, leaving travelers stranded or forced to pay extra costs.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">Solution: Travel Supplier Default Protection</h4>
                    <p className="text-green-700">
                      Comprehensive travel insurance includes coverage for travel supplier bankruptcy 
                      and significant itinerary changes, protecting you from financial loss.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Problem: Weather and Natural Disaster Disruptions</h3>
                  <p className="text-red-700 mb-4">
                    Severe weather, natural disasters, or political unrest at your destination can make travel 
                    impossible or dangerous, requiring trip cancellation or significant changes.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">Solution: Weather and Disaster Coverage</h4>
                    <p className="text-green-700">
                      Trip cancellation insurance covers cancellations due to severe weather, natural disasters, 
                      and other unforeseen circumstances that make travel inadvisable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 bg-gray-50 rounded-lg p-8" id="faq">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Trip Cancellation Insurance FAQ - Common Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Trip Cancellation vs Trip Interruption - What's the Difference?</h3>
                  <p className="text-gray-700">
                    Trip cancellation insurance covers expenses when you cancel your trip before departure, 
                    while trip interruption covers additional costs when you need to cut your trip short and return home early. 
                    Many policies include both coverages. Learn more about our complete <Link href="/travel-insurance" className="text-blue-600 hover:underline">travel insurance options</Link>.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">How Much Does Trip Cancellation Insurance Cost?</h3>
                  <p className="text-gray-700">
                    Trip cancellation insurance typically costs 4-8% of your total trip cost. For example, 
                    a $5,000 vacation would cost $200-$400 to insure. The exact cost depends on your age, 
                    trip cost, destination, and coverage level. Use our <Link href="/tools" className="text-blue-600 hover:underline">insurance calculator</Link> to estimate your cost.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">What Reasons Are Covered for Trip Cancellation?</h3>
                  <p className="text-gray-700">
                    Standard trip cancellation policies cover specific reasons like illness, injury, death of family member, 
                    job loss, jury duty, natural disasters, and travel supplier bankruptcy. "Cancel for Any Reason" 
                    policies provide more flexibility but typically reimburse 75% of expenses. Consider pairing with 
                    <Link href="/medicare-supplement" className="text-blue-600 hover:underline"> Medicare Supplement insurance</Link> for comprehensive health coverage.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">When Should I Buy Trip Cancellation Insurance?</h3>
                  <p className="text-gray-700">
                    Purchase trip cancellation insurance within 10-21 days of making your initial trip deposit 
                    to access all available benefits and pre-existing condition waivers. Some coverage options 
                    are only available when purchased early. Also consider <Link href="/supplemental-insurance" className="text-blue-600 hover:underline">supplemental insurance</Link> for additional protection.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Does Trip Cancellation Insurance Cover COVID-19?</h3>
                  <p className="text-gray-700">
                    Many modern trip cancellation policies include COVID-19 coverage for illness, quarantine, 
                    and travel restrictions. Coverage varies by policy, so it's important to review specific 
                    terms and conditions. Consider this alongside your regular health coverage and 
                    <Link href="/social-security-analysis" className="text-blue-600 hover:underline">Social Security benefits</Link> planning.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Can I Get Trip Cancellation Insurance for International Travel?</h3>
                  <p className="text-gray-700">
                    Yes, trip cancellation insurance is especially important for international travel due to higher 
                    trip costs and additional risks. International policies often include emergency medical coverage, 
                    evacuation benefits, and coverage for embassy-advised travel restrictions. Explore additional 
                    <Link href="/under-65-health-insurance" className="text-blue-600 hover:underline">international health insurance</Link> options for extended coverage.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Services Section */}
          <section className="mb-16 bg-gray-100 rounded-lg p-8" id="related-services">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Related Travel Protection - Complete Coverage Solutions
              </h2>
              <p className="text-lg text-gray-700 text-center mb-8">
                Trip cancellation insurance is part of comprehensive travel protection. Explore our other insurance solutions for complete peace of mind:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href="/travel-insurance" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <Plane className="h-10 w-10 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Travel Insurance</h3>
                    <p className="text-gray-600 text-sm">Comprehensive travel protection including medical, baggage, and delay coverage</p>
                  </div>
                </Link>
                
                <Link href="/health-insurance-marketplace" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <Shield className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Health Insurance</h3>
                    <p className="text-gray-600 text-sm">Essential health coverage for domestic and international travel medical needs</p>
                  </div>
                </Link>
                
                <Link href="/supplemental-insurance" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <Users className="h-10 w-10 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Supplemental Insurance</h3>
                    <p className="text-gray-600 text-sm">Additional coverage for accidents, illness, and emergency situations while traveling</p>
                  </div>
                </Link>
                
                <Link href="/final-expense" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <Heart className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Final Expense Insurance</h3>
                    <p className="text-gray-600 text-sm">Protect your family from end-of-life costs even while traveling</p>
                  </div>
                </Link>
              </div>

              <div className="mt-8 text-center">
                <Link href="/tools" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                  <Calculator className="mr-2 h-5 w-5" />
                  Use Our Travel Insurance Calculator to Compare Options
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Trip Cancellation Insurance Quote - Free & Fast
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't risk losing thousands on your next vacation. Get a free, no-obligation quote 
              for trip cancellation insurance and travel with confidence. Our <Link href="/specialists" className="text-white hover:text-blue-200 underline font-semibold">travel insurance specialists</Link> are ready to help protect your travel investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                data-trip-cancellation="final-quote"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Get Free Quote Now
              </Link>
              <Link
                href="tel:331-343-2584"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 331-E-HEALTH
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}