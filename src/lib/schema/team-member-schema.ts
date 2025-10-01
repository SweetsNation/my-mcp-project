// Schema markup generator for Team Member profile pages

export interface TeamMemberSchema {
  name: string
  jobTitle: string
  slug: string
  description: string
  specialties: string[]
  experience?: string
  location?: string
  languages?: string[]
  email?: string
  phone?: string
}

export function generateTeamMemberSchema(member: TeamMemberSchema) {
  const baseUrl = 'https://elmaginsurance.com'
  const profileUrl = `${baseUrl}/team/${member.slug}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // WebPage Schema
      {
        '@type': 'WebPage',
        '@id': profileUrl,
        url: profileUrl,
        name: `${member.name} - ${member.jobTitle}`,
        description: member.description,
        inLanguage: 'en-US',
        breadcrumb: {
          '@id': `${profileUrl}#breadcrumb`
        }
      },

      // BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${profileUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Team',
            item: `${baseUrl}/team`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: member.name,
            item: profileUrl
          }
        ]
      },

      // Person Schema
      {
        '@type': 'Person',
        '@id': `${profileUrl}#person`,
        name: member.name,
        url: profileUrl,
        jobTitle: member.jobTitle,
        description: member.description,
        worksFor: {
          '@type': 'Organization',
          name: 'El-Mag Insurance',
          url: baseUrl
        },
        knowsAbout: member.specialties,
        ...(member.email && { email: member.email }),
        ...(member.phone && { telephone: member.phone }),
        ...(member.languages && member.languages.length > 0 && {
          knowsLanguage: member.languages.map(lang => ({
            '@type': 'Language',
            name: lang
          }))
        }),
        ...(member.location && {
          workLocation: {
            '@type': 'Place',
            name: member.location
          }
        })
      },

      // ProfilePage Schema
      {
        '@type': 'ProfilePage',
        '@id': `${profileUrl}#profilepage`,
        mainEntity: {
          '@id': `${profileUrl}#person`
        },
        about: {
          '@id': `${profileUrl}#person`
        }
      }
    ]
  }
}
