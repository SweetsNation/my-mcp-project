'use client';

import Link from 'next/link';

interface CrossServiceRecommendationsProps {
  currentService: 'medicare-supplement' | 'health-marketplace' | 'medicare-advantage';
  userAge?: number;
  location?: string;
  showAgeBased?: boolean;
}

export default function CrossServiceRecommendations({
  currentService,
  userAge,
  location,
  showAgeBased = true
}: CrossServiceRecommendationsProps) {
  const isMedicareEligible = userAge && userAge >= 65;
  const isApproaching65 = userAge && userAge >= 60 && userAge < 65;
  const isUnder65 = userAge && userAge < 65;

  const getRecommendations = () => {
    switch (currentService) {
      case 'medicare-supplement':
        return {
          title: "Complete Family Coverage Solutions",
          description: "Ensure your entire family has quality coverage with our comprehensive insurance solutions.",
          recommendations: [
            {
              title: "For Family Members Under 65",
              description: "Help spouses and dependents find affordable Health Insurance Marketplace plans with subsidies.",
              icon: "👨‍👩‍👧‍👦",
              href: "/health-insurance-marketplace",
              color: "blue",
              priority: isUnder65 ? "high" : "medium"
            },
            {
              title: "Medicare Advantage Alternative",
              description: "Compare Medicare Supplement with Medicare Advantage plans to find the best fit.",
              icon: "⚖️",
              href: "/medicare-advantage",
              color: "green",
              priority: "high"
            },
            {
              title: "Prescription Drug Coverage",
              description: "Add Medicare Part D for comprehensive prescription drug coverage.",
              icon: "💊",
              href: "/medicare-part-d",
              color: "purple",
              priority: "medium"
            }
          ]
        };

      case 'health-marketplace':
        return {
          title: "Life Stage Insurance Planning",
          description: "Plan for your future insurance needs as your life circumstances change.",
          recommendations: [
            {
              title: "Approaching 65?",
              description: "Start planning your Medicare transition with comprehensive Medicare Supplement coverage.",
              icon: "🎯",
              href: "/medicare-supplement-plan-g",
              color: "purple",
              priority: isApproaching65 ? "high" : "medium"
            },
            {
              title: "Family Medicare Planning",
              description: "Help family members 65+ find the right Medicare coverage options.",
              icon: "👴👵",
              href: "/medicare-supplement-plan-g",
              color: "blue",
              priority: "medium"
            },
            {
              title: "Medicare Enrollment Guide",
              description: "Learn about Medicare enrollment periods and important deadlines.",
              icon: "📅",
              href: "/medicare-open-enrollment-2025",
              color: "orange",
              priority: isApproaching65 ? "high" : "low"
            }
          ]
        };

      case 'medicare-advantage':
        return {
          title: "Alternative Medicare Solutions",
          description: "Explore other Medicare coverage options that might better suit your needs.",
          recommendations: [
            {
              title: "Medicare Supplement Plans",
              description: "Get comprehensive coverage with no network restrictions and predictable costs.",
              icon: "🛡️",
              href: "/medicare-supplement-plan-g",
              color: "blue",
              priority: "high"
            },
            {
              title: "Prescription Drug Coverage",
              description: "Add standalone Part D coverage for comprehensive prescription benefits.",
              icon: "💊",
              href: "/medicare-part-d",
              color: "purple",
              priority: "medium"
            },
            {
              title: "Family Health Insurance",
              description: "Coverage for spouses and dependents under 65 through the Marketplace.",
              icon: "👨‍👩‍👧‍👦",
              href: "/health-insurance-marketplace",
              color: "green",
              priority: "medium"
            }
          ]
        };

      default:
        return {
          title: "Related Insurance Services",
          description: "Explore additional insurance options that may complement your coverage.",
          recommendations: []
        };
    }
  };

  const config = getRecommendations();
  const sortedRecommendations = config.recommendations.sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  if (sortedRecommendations.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{config.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{config.description}</p>
        </div>

        {showAgeBased && userAge && (
          <div className="mb-8">
            <div className={`p-4 rounded-lg border-l-4 ${
              isMedicareEligible 
                ? 'bg-blue-50 border-blue-400' 
                : isApproaching65 
                ? 'bg-yellow-50 border-yellow-400'
                : 'bg-green-50 border-green-400'
            }`}>
              <h3 className="font-semibold text-gray-900 mb-2">
                {isMedicareEligible 
                  ? "🎉 You're Medicare Eligible!" 
                  : isApproaching65 
                  ? "🎯 Planning for Medicare?" 
                  : "💡 Consider Your Options"
                }
              </h3>
              <p className="text-gray-700 text-sm">
                {isMedicareEligible 
                  ? "You qualify for Medicare Supplement plans. Consider comprehensive coverage with no network restrictions."
                  : isApproaching65 
                  ? "Start planning your Medicare transition now. Medicare Supplement plans provide comprehensive coverage."
                  : "Health Insurance Marketplace plans offer subsidies and comprehensive coverage for your age group."
                }
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedRecommendations.map((rec, index) => (
            <Link
              key={index}
              href={rec.href}
              className={`group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-${rec.color}-300 p-6`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 bg-${rec.color}-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-${rec.color}-200 transition-colors`}>
                    {rec.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {rec.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {rec.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-800">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="bg-white rounded-xl border-2 border-blue-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right Coverage?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our licensed insurance experts can help you compare all options and find the perfect coverage for your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/team"
                className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 transition-colors"
              >
                Meet Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
