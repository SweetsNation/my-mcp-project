import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContactForm from '@/components/ContactForm'
import SocialProofSection from '@/components/SocialProofSection'
import SubsidyCalculator from '@/components/SubsidyCalculator'
import MobileContactBar from '@/components/MobileContactBar'

export const metadata: Metadata = {
  title: 'Miami-Dade County Health Insurance Guide 2025 | Comprehensive ACA Marketplace Coverage',
  description: 'Complete Miami-Dade health insurance guide covering Marketplace plans, subsidies, bilingual support, and coverage for 450,000+ uninsured residents. Get quotes today.',
  keywords: 'Miami-Dade health insurance, Florida Marketplace plans, subsidios de seguro medico, Miami health coverage, Hialeah insurance, Doral health plans',
  openGraph: {
    title: 'Miami-Dade County Health Insurance Guide 2025',
    description: 'Comprehensive guide to health insurance in Miami-Dade County with bilingual support and local expertise.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    modifiedTime: '2025-01-15T00:00:00.000Z',
    authors: ['El-Mag Insurance Team'],
    section: 'Health Insurance Guides',
    tags: ['Health Insurance', 'Miami-Dade County', 'ACA Marketplace', 'Florida'],
  },
  alternates: {
    canonical: 'https://el-mag.com/blog/miami-dade-health-insurance-guide'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Complete Guide to Health Insurance in Miami-Dade County, Florida 2025',
  description: 'Comprehensive Miami-Dade health insurance guide covering Marketplace plans, subsidies, bilingual support, and local healthcare access.',
  author: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://el-mag.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    logo: {
      '@type': 'ImageObject',
      url: 'https://el-mag.com/logo.png'
    }
  },
  datePublished: '2025-01-15T00:00:00.000Z',
  dateModified: '2025-01-15T00:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://el-mag.com/blog/miami-dade-health-insurance-guide'
  }
}

export default function MiamiDadeHealthInsuranceGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <MobileContactBar county="Miami-Dade County" />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Guide to Health Insurance in Miami-Dade County, Florida 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Navigate Miami-Dade's health insurance landscape with expert guidance. Serving 450,000+ uninsured residents with bilingual support and local expertise.
          </p>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-blue-600">17%</div>
              <div className="text-sm text-gray-600">Uninsured Rate</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-green-600">$705</div>
              <div className="text-sm text-gray-600">Avg Annual Savings</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-purple-600">70%</div>
              <div className="text-sm text-gray-600">Hispanic Population</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-orange-600">15+</div>
              <div className="text-sm text-gray-600">Major Hospitals</div>
            </div>
          </div>
          
          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-8 text-left">
            <p className="text-blue-800">
              <strong>¿Habla Español?</strong> Esta guía está disponible con explicaciones en español. Nuestros agentes bilingües están listos para ayudarle.
            </p>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li><a href="#miami-landscape" className="text-blue-600 hover:underline">Miami-Dade Health Insurance Landscape</a></li>
              <li><a href="#marketplace-plans" className="text-blue-600 hover:underline">ACA Marketplace Plans in Florida</a></li>
              <li><a href="#subsidies" className="text-blue-600 hover:underline">Premium Subsidies & Cost Assistance</a></li>
              <li><a href="#hispanic-community" className="text-blue-600 hover:underline">Recursos para la Comunidad Hispana</a></li>
              <li><a href="#healthcare-access" className="text-blue-600 hover:underline">Healthcare Access in Miami-Dade</a></li>
              <li><a href="#enrollment" className="text-blue-600 hover:underline">Enrollment Process & Deadlines</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#special-circumstances" className="text-blue-600 hover:underline">Special Enrollment Circumstances</a></li>
              <li><a href="#employer-coverage" className="text-blue-600 hover:underline">Employer Coverage Alternatives</a></li>
              <li><a href="#medicaid-expansion" className="text-blue-600 hover:underline">Florida Medicaid & Coverage Gap</a></li>
              <li><a href="#success-stories" className="text-blue-600 hover:underline">Local Success Stories</a></li>
              <li><a href="#resources" className="text-blue-600 hover:underline">Local Resources & Support</a></li>
              <li><a href="#next-steps" className="text-blue-600 hover:underline">Next Steps & Getting Started</a></li>
            </ul>
          </div>
        </nav>

        {/* Subsidy Calculator Widget */}
        <div className="mb-12">
          <SubsidyCalculator county="Miami-Dade County" state="Florida" />
        </div>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          
          <section id="miami-landscape" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Miami-Dade County Health Insurance Landscape</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Demographics & Health Statistics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Population:</strong> 2.7+ million residents</li>
                    <li><strong>Uninsured Rate:</strong> 17% (450,000+ people)</li>
                    <li><strong>Median Income:</strong> $57,000</li>
                    <li><strong>Hispanic Population:</strong> 70% of county</li>
                    <li><strong>Languages:</strong> 60% Spanish-speaking households</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Major Industries:</strong> Tourism, International Trade, Healthcare</li>
                    <li><strong>Seasonal Workers:</strong> High concentration in hospitality</li>
                    <li><strong>Self-Employed:</strong> 12% of workforce</li>
                    <li><strong>Gig Economy:</strong> Uber, delivery, services</li>
                    <li><strong>Small Business:</strong> 98% of Miami-Dade businesses</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Miami-Dade Residents Need Health Insurance</h3>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Healthcare Cost Reality in South Florida</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">$15,000+</div>
                  <div className="text-sm text-gray-600">Emergency Room Visit</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">$50,000+</div>
                  <div className="text-sm text-gray-600">Hospital Stay</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">$200,000+</div>
                  <div className="text-sm text-gray-600">Major Surgery</div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              Miami-Dade County faces unique healthcare challenges. With one of the highest uninsured rates in Florida and a large population working in hospitality, construction, and service industries, many families are one medical emergency away from financial crisis.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Common Miami-Dade Health Scenarios</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold text-gray-800">Restaurant Worker in South Beach</h5>
                  <p className="text-gray-600">Maria works two part-time jobs - one at a hotel restaurant, another at a catering company. Neither offers health benefits. When she got food poisoning, the ER bill was $3,200.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-gray-800">Construction Contractor in Homestead</h5>
                  <p className="text-gray-600">Roberto does residential construction. After Hurricane season injury, he faced $28,000 in medical bills. ACA plan would have covered 80% after his deductible.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-gray-800">Small Business Owner in Coral Gables</h5>
                  <p className="text-gray-600">Carmen owns a beauty salon. Individual market plan costs $450/month, but with subsidies, she qualified for a Silver plan at $89/month.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="marketplace-plans" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">ACA Marketplace Plans Available in Miami-Dade</h2>
            
            <p className="text-gray-700 mb-6">
              Florida uses the federal marketplace (Healthcare.gov), offering multiple insurance carriers and plan options specifically designed for Miami-Dade residents.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Available Insurance Carriers</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <strong>Florida Blue</strong> - Largest network in state
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <strong>Ambetter (Sunshine Health)</strong> - Competitive pricing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <strong>Molina Healthcare</strong> - Medicaid-focused network
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    <strong>AvMed</strong> - South Florida specialist
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-4">2025 Plan Categories</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Bronze Plans</span>
                      <span className="text-sm bg-bronze-100 text-bronze-800 px-2 py-1 rounded">60% coverage</span>
                    </div>
                    <p className="text-sm text-gray-600">$280-320/month before subsidies</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Silver Plans</span>
                      <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">70% coverage</span>
                    </div>
                    <p className="text-sm text-gray-600">$380-420/month before subsidies</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Gold Plans</span>
                      <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">80% coverage</span>
                    </div>
                    <p className="text-sm text-gray-600">$480-520/month before subsidies</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Miami-Dade Hospital Networks</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">Major Hospital Systems</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🏥 <strong>Jackson Health System</strong> - Public hospital network</li>
                    <li>🏥 <strong>Baptist Health South Florida</strong> - 11 hospitals</li>
                    <li>🏥 <strong>Mount Sinai Medical Center</strong> - Miami Beach</li>
                    <li>🏥 <strong>Aventura Hospital</strong> - North Miami-Dade</li>
                    <li>🏥 <strong>Kendall Regional Medical Center</strong> - South Miami</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">Specialty Care Centers</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🩺 <strong>University of Miami Health</strong> - Research hospital</li>
                    <li>🩺 <strong>Nicklaus Children's Hospital</strong> - Pediatric care</li>
                    <li>🩺 <strong>Bascom Palmer Eye Institute</strong> - Eye care</li>
                    <li>🩺 <strong>Miami Cancer Institute</strong> - Oncology</li>
                    <li>🩺 <strong>Baptist Cardiac & Vascular</strong> - Heart care</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="subsidies" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Subsidies & Financial Assistance</h2>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">🎉 Good News for Miami-Dade Families</h3>
              <p className="text-green-700 mb-4">
                Based on Miami-Dade's median income levels, <strong>over 80% of uninsured residents qualify for significant premium subsidies</strong>, with many eligible for plans under $50/month.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">$3,200</div>
                  <div className="text-sm text-gray-600">Average Annual Subsidy</div>
                </div>
                <div className="text-center bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-600">Qualify for Help</div>
                </div>
                <div className="text-center bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">$25</div>
                  <div className="text-sm text-gray-600">Lowest Monthly Premium</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Miami-Dade Income-Based Subsidy Examples</h3>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Household Size</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Annual Income</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Monthly Premium Before</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Monthly Premium After</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Annual Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Individual</td>
                    <td className="px-4 py-3 text-sm text-gray-900">$35,000</td>
                    <td className="px-4 py-3 text-sm text-red-600 font-semibold">$350</td>
                    <td className="px-4 py-3 text-sm text-green-600 font-semibold">$85</td>
                    <td className="px-4 py-3 text-sm text-blue-600 font-semibold">$3,180</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">Couple</td>
                    <td className="px-4 py-3 text-sm text-gray-900">$55,000</td>
                    <td className="px-4 py-3 text-sm text-red-600 font-semibold">$720</td>
                    <td className="px-4 py-3 text-sm text-green-600 font-semibold">$215</td>
                    <td className="px-4 py-3 text-sm text-blue-600 font-semibold">$6,060</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">Family of 4</td>
                    <td className="px-4 py-3 text-sm text-gray-900">$75,000</td>
                    <td className="px-4 py-3 text-sm text-red-600 font-semibold">$1,200</td>
                    <td className="px-4 py-3 text-sm text-green-600 font-semibold">$390</td>
                    <td className="px-4 py-3 text-sm text-blue-600 font-semibold">$9,720</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cost-Sharing Reductions (CSRs)</h3>
              <p className="text-gray-700 mb-4">
                If your household income is between 100-250% of Federal Poverty Level, you qualify for additional savings on Silver plans that reduce your deductible, copays, and out-of-pocket maximums.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-3">Standard Silver Plan</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Deductible:</strong> $3,000</li>
                    <li>• <strong>Primary Care:</strong> $30 copay</li>
                    <li>• <strong>Specialist:</strong> $65 copay</li>
                    <li>• <strong>Out-of-Pocket Max:</strong> $8,500</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">Silver Plan with CSR</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Deductible:</strong> $500</li>
                    <li>• <strong>Primary Care:</strong> $10 copay</li>
                    <li>• <strong>Specialist:</strong> $25 copay</li>
                    <li>• <strong>Out-of-Pocket Max:</strong> $2,500</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="hispanic-community" className="mb-12">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recursos para la Comunidad Hispana</h2>
              
              <div className="mb-6">
                <p className="text-gray-800 text-lg mb-4">
                  <strong>¡Atención Miami-Dade!</strong> Con más del 70% de nuestra población siendo hispana, entendemos las necesidades únicas de nuestra comunidad.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">🗣️ Servicios en Español</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Agentes bilingües certificados</li>
                    <li>• Documentos completamente traducidos</li>
                    <li>• Soporte telefónico 24/7 en español</li>
                    <li>• Citas en persona en toda Miami-Dade</li>
                    <li>• Ayuda con formularios de inmigración</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">📋 Documentación Necesaria</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Número de Seguro Social o ITIN</li>
                    <li>• Comprobante de ingresos (recibos de pago)</li>
                    <li>• Identificación con foto válida</li>
                    <li>• Documentos de residencia legal</li>
                    <li>• Información de empleador (si aplica)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Mitos y Realidades sobre el Seguro de Salud</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-red-600 font-semibold">❌ MITO: "Necesito ser ciudadano para tener seguro"</p>
                    <p className="text-green-600">✅ REALIDAD: Residentes legales pueden aplicar inmediatamente</p>
                  </div>
                  <div>
                    <p className="text-red-600 font-semibold">❌ MITO: "Es muy caro para mi familia"</p>
                    <p className="text-green-600">✅ REALIDAD: 85% de las familias califican para ayuda financiera</p>
                  </div>
                  <div>
                    <p className="text-red-600 font-semibold">❌ MITO: "Afectará mi estatus migratorio"</p>
                    <p className="text-green-600">✅ REALIDAD: Tener seguro médico no afecta procesos de inmigración</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">Centros de Inscripción Comunitaria</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Centro de Salud de Hialeah</h4>
                    <p className="text-sm text-gray-600">1040 W 49th St, Hialeah, FL 33012</p>
                    <p className="text-sm text-blue-600">Lunes a Viernes: 8AM-6PM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Biblioteca de Doral</h4>
                    <p className="text-sm text-gray-600">5295 NW 112th Ave, Doral, FL 33178</p>
                    <p className="text-sm text-blue-600">Sábados: 10AM-2PM (cita previa)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Centro Comunitario Kendall</h4>
                    <p className="text-sm text-gray-600">6840 SW 92nd St, Miami, FL 33156</p>
                    <p className="text-sm text-blue-600">Martes y Jueves: 9AM-5PM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Homestead City Hall</h4>
                    <p className="text-sm text-gray-600">790 N Homestead Blvd, Homestead, FL 33030</p>
                    <p className="text-sm text-blue-600">Miércoles: 10AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="enrollment" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Enrollment Process & Important Dates</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-red-800 mb-3">⏰ Critical 2025 Enrollment Dates</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <div className="font-bold text-red-600">November 1, 2024</div>
                  <div className="text-sm text-gray-700">Open Enrollment Starts</div>
                </div>
                <div>
                  <div className="font-bold text-red-600">January 15, 2025</div>
                  <div className="text-sm text-gray-700">Open Enrollment Ends</div>
                </div>
                <div>
                  <div className="font-bold text-green-600">Year-Round</div>
                  <div className="text-sm text-gray-700">Special Enrollment Events</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Step-by-Step Enrollment</h3>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                    <div>
                      <div className="font-semibold text-gray-800">Gather Documents</div>
                      <p className="text-sm text-gray-600">Income statements, ID, SSN/ITIN</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                    <div>
                      <div className="font-semibold text-gray-800">Create Healthcare.gov Account</div>
                      <p className="text-sm text-gray-600">Or call our agents for assistance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                    <div>
                      <div className="font-semibold text-gray-800">Complete Application</div>
                      <p className="text-sm text-gray-600">Income verification and eligibility check</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                    <div>
                      <div className="font-semibold text-gray-800">Compare Plans</div>
                      <p className="text-sm text-gray-600">Review costs, networks, and benefits</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">5</span>
                    <div>
                      <div className="font-semibold text-gray-800">Enroll & Pay</div>
                      <p className="text-sm text-gray-600">Select plan and make first payment</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Special Enrollment Triggers</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Lost job-based coverage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Moving to Miami-Dade</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Getting married or divorced</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Having a baby or adopting</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Changes in income</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Gaining citizenship or legal status</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </article>

        {/* Contact Form */}
        <div id="contact-form" className="mb-12">
          <ContactForm 
            title="Get Your Miami-Dade Health Insurance Quote Today"
            subtitle="Our bilingual agents are ready to help you find coverage that fits your budget and needs"
          />
        </div>

        {/* Social Proof */}
        <div id="social-proof">
          <SocialProofSection 
            county="Miami-Dade County" 
            state="Florida"
            demographic="hispanic"
          />
        </div>

      </main>
    </div>
  )
}