'use client'

import { useState, useEffect } from 'react'

interface PartnerOrganization {
  id: string
  name: string
  type: 'community_center' | 'church' | 'clinic' | 'library' | 'school' | 'nonprofit' | 'chamber'
  address: string
  phone: string
  website: string
  contactPerson: string
  email: string
  servicesOffered: string[]
  languagesSupported: string[]
  county: string
  partnershipLevel: 'bronze' | 'silver' | 'gold' | 'platinum'
  establishedDate: string
  description: string
}

interface LocalPartnershipSystemProps {
  county: string
  showContact?: boolean
}

const partnerOrganizations: PartnerOrganization[] = [
  {
    id: 'miami-dade-library-system',
    name: 'Miami-Dade Public Library System',
    type: 'library',
    address: '101 W Flagler St, Miami, FL 33130',
    phone: '(305) 375-2665',
    website: 'https://www.mdpls.org',
    contactPerson: 'Sarah Martinez',
    email: 'smartinez@mdpls.org',
    servicesOffered: ['Enrollment assistance', 'Computer access', 'Document printing', 'Educational workshops'],
    languagesSupported: ['English', 'Spanish', 'Haitian Creole'],
    county: 'Miami-Dade County',
    partnershipLevel: 'gold',
    establishedDate: '2023-01-15',
    description: 'Comprehensive health insurance enrollment support at 49 library locations throughout Miami-Dade County.'
  },
  {
    id: 'hialeah-community-health',
    name: 'Centro de Salud de Hialeah',
    type: 'clinic',
    address: '1040 W 49th St, Hialeah, FL 33012',
    phone: '(305) 693-1818',
    website: 'https://hialeahhealth.org',
    contactPerson: 'Dr. Carlos Mendez',
    email: 'cmendez@hialeahhealth.org',
    servicesOffered: ['Bilingual enrollment', 'Income verification', 'Plan counseling', 'Ongoing support'],
    languagesSupported: ['Spanish', 'English'],
    county: 'Miami-Dade County',
    partnershipLevel: 'platinum',
    establishedDate: '2022-11-01',
    description: 'Leading community health center providing comprehensive health insurance enrollment services to Hispanic families.'
  },
  {
    id: 'united-way-miami',
    name: 'United Way of Miami-Dade',
    type: 'nonprofit',
    address: '3250 SW 3rd Ave, Miami, FL 33129',
    phone: '(305) 646-7000',
    website: 'https://unitedwaymiami.org',
    contactPerson: 'Jennifer Thompson',
    email: 'jthompson@unitedwaymiami.org',
    servicesOffered: ['Navigator services', 'Financial assistance', 'Community outreach', 'Educational materials'],
    languagesSupported: ['English', 'Spanish', 'Haitian Creole'],
    county: 'Miami-Dade County',
    partnershipLevel: 'platinum',
    establishedDate: '2022-08-15',
    description: 'Premier nonprofit partner providing health insurance navigation and financial assistance programs.'
  },
  {
    id: 'greater-miami-chamber',
    name: 'Greater Miami Chamber of Commerce',
    type: 'chamber',
    address: '1601 Biscayne Blvd, Miami, FL 33132',
    phone: '(305) 350-7700',
    website: 'https://miamichamber.com',
    contactPerson: 'Maria Rodriguez',
    email: 'mrodriguez@miamichamber.com',
    servicesOffered: ['Small business group plans', 'Employee education', 'Employer resources', 'Networking events'],
    languagesSupported: ['English', 'Spanish'],
    county: 'Miami-Dade County',
    partnershipLevel: 'gold',
    establishedDate: '2023-03-01',
    description: 'Supporting Miami-Dade small businesses with employee health insurance solutions and educational resources.'
  },
  {
    id: 'baptist-health-community',
    name: 'Baptist Health Community Outreach',
    type: 'clinic',
    address: '6855 Red Rd, Coral Gables, FL 33143',
    phone: '(786) 596-1960',
    website: 'https://baptisthealth.net/community',
    contactPerson: 'Nurse Patricia Gonzalez',
    email: 'pgonzalez@baptisthealth.net',
    servicesOffered: ['Health screenings', 'Insurance counseling', 'Referral services', 'Preventive care education'],
    languagesSupported: ['English', 'Spanish'],
    county: 'Miami-Dade County',
    partnershipLevel: 'silver',
    establishedDate: '2023-05-15',
    description: 'Major hospital system providing community health insurance education and enrollment support.'
  },
  {
    id: 'doral-community-center',
    name: 'City of Doral Community Center',
    type: 'community_center',
    address: '5295 NW 112th Ave, Doral, FL 33178',
    phone: '(305) 593-6600',
    website: 'https://cityofdoral.com',
    contactPerson: 'Carlos Silva',
    email: 'csilva@cityofdoral.com',
    servicesOffered: ['Weekend enrollment events', 'Family workshops', 'Document assistance', 'Translation services'],
    languagesSupported: ['Spanish', 'English'],
    county: 'Miami-Dade County',
    partnershipLevel: 'silver',
    establishedDate: '2023-02-01',
    description: 'Community-focused enrollment assistance with special emphasis on working families and weekend accessibility.'
  }
]

const partnershipLevels = {
  bronze: { color: 'text-orange-600', bg: 'bg-orange-100', label: 'Bronze Partner' },
  silver: { color: 'text-gray-600', bg: 'bg-gray-100', label: 'Silver Partner' },
  gold: { color: 'text-yellow-600', bg: 'bg-yellow-100', label: 'Gold Partner' },
  platinum: { color: 'text-purple-600', bg: 'bg-purple-100', label: 'Platinum Partner' }
}

const organizationTypes = {
  community_center: { icon: '🏢', label: 'Community Centers' },
  church: { icon: '⛪', label: 'Faith Communities' },
  clinic: { icon: '🏥', label: 'Health Centers' },
  library: { icon: '📚', label: 'Libraries' },
  school: { icon: '🎓', label: 'Schools' },
  nonprofit: { icon: '🤝', label: 'Nonprofits' },
  chamber: { icon: '💼', label: 'Business Organizations' }
}

export default function LocalPartnershipSystem({ county, showContact = true }: LocalPartnershipSystemProps) {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [filteredPartners, setFilteredPartners] = useState<PartnerOrganization[]>([])
  const [selectedPartner, setSelectedPartner] = useState<PartnerOrganization | null>(null)

  useEffect(() => {
    let filtered = partnerOrganizations.filter(org => org.county === county)
    
    if (selectedType !== 'all') {
      filtered = filtered.filter(org => org.type === selectedType)
    }
    
    setFilteredPartners(filtered)
  }, [county, selectedType])

  const handlePartnerContact = (partner: PartnerOrganization, contactType: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'partner_contact', {
        event_category: 'Partnership',
        event_label: partner.name,
        custom_parameter_1: contactType,
        custom_parameter_2: county
      })
    }
  }

  const handlePartnershipInquiry = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'partnership_inquiry', {
        event_category: 'Business Development',
        event_label: county,
        custom_parameter_1: 'new_partnership_request'
      })
    }
  }

  return (
    <section className="py-12 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Community Partners in {county}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We've partnered with trusted local organizations to provide health insurance enrollment assistance right in your community.
          </p>
          
          {/* Partnership Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-blue-600">{filteredPartners.length}</div>
              <div className="text-sm text-gray-600">Local Partners</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-green-600">
                {filteredPartners.filter(p => p.languagesSupported.includes('Spanish')).length}
              </div>
              <div className="text-sm text-gray-600">Bilingual Services</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-purple-600">
                {filteredPartners.filter(p => p.partnershipLevel === 'platinum' || p.partnershipLevel === 'gold').length}
              </div>
              <div className="text-sm text-gray-600">Premium Partners</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-orange-600">5,000+</div>
              <div className="text-sm text-gray-600">Families Helped</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedType === 'all'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              🌟 All Partners ({filteredPartners.length})
            </button>
            {Object.entries(organizationTypes).map(([type, config]) => {
              const count = partnerOrganizations.filter(p => p.type === type && p.county === county).length
              if (count === 0) return null
              
              return (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedType === type
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {config.icon} {config.label} ({count})
                </button>
              )
            })}
          </div>
        </div>

        {/* Partner Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {filteredPartners.map((partner) => (
            <div key={partner.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Partner Header */}
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">
                    {organizationTypes[partner.type]?.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-white ${partnershipLevels[partner.partnershipLevel].color}`}>
                    {partnershipLevels[partner.partnershipLevel].label}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-blue-100 text-sm">
                  {organizationTypes[partner.type]?.label}
                </p>
              </div>

              {/* Partner Details */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {partner.description}
                </p>

                {/* Services */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Services Offered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {partner.servicesOffered.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-blue-100 text-blue-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Languages:</h4>
                  <div className="flex space-x-2">
                    {partner.languagesSupported.map((language) => (
                      <span
                        key={language}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-green-100 text-green-700"
                      >
                        {language === 'Spanish' ? '🇪🇸' : language === 'Haitian Creole' ? '🇭🇹' : '🇺🇸'} {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-4">
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>{partner.address}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📞</span>
                      <a 
                        href={`tel:${partner.phone}`}
                        onClick={() => handlePartnerContact(partner, 'phone')}
                        className="text-blue-600 hover:underline"
                      >
                        {partner.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">👤</span>
                      <span>{partner.contactPerson}</span>
                    </div>
                  </div>

                  {showContact && (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handlePartnerContact(partner, 'website')}
                        className="bg-blue-50 text-blue-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors text-center"
                      >
                        🌐 Website
                      </a>
                      <a
                        href={`mailto:${partner.email}`}
                        onClick={() => handlePartnerContact(partner, 'email')}
                        className="bg-green-50 text-green-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors text-center"
                      >
                        📧 Email
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why We Partner with Local Organizations
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Trusted Local Presence</h4>
              <p className="text-gray-600 text-sm">
                Our partners are established, trusted organizations in your community that you already know and rely on.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Cultural Understanding</h4>
              <p className="text-gray-600 text-sm">
                Bilingual staff and cultural competency ensure you get help that understands your specific needs and circumstances.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Convenient Locations</h4>
              <p className="text-gray-600 text-sm">
                Get help at locations throughout {county} - libraries, community centers, health clinics, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Interested in Becoming a Community Partner?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join our network of trusted organizations helping {county} residents access affordable health insurance. 
            We provide training, materials, and ongoing support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePartnershipInquiry}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              📋 Partnership Application
            </button>
            <a
              href="tel:331-343-2584"
              className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              📞 Call (331) 343-2584
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}