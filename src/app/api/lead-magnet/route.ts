import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      email,
      firstName,
      lastName,
      phone,
      guideTopic,
      guideTitle,
      state,
      county,
      demographic,
      timestamp,
      source
    } = body

    // Validate required fields
    if (!email || !firstName || !lastName || !guideTopic) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In a real implementation, you would:
    // 1. Save to your CRM (HubSpot, Salesforce, etc.)
    // 2. Add to email marketing service (Mailchimp, Constant Contact, etc.)
    // 3. Trigger automated follow-up sequences
    // 4. Log the conversion for analytics

    // Example CRM integration (replace with your actual service):
    /*
    const crmData = {
      email,
      firstName,
      lastName,
      phone,
      leadSource: source,
      downloadedGuide: guideTitle,
      state,
      county,
      demographic,
      timestamp,
      tags: ['medicare-lead', 'guide-download', guideTopic.toLowerCase()]
    }
    
    await fetch('https://api.your-crm.com/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CRM_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(crmData)
    })
    */

    // Example email marketing integration:
    /*
    const emailData = {
      email,
      firstName,
      lastName,
      tags: ['medicare-supplement', guideTopic],
      customFields: {
        state,
        county,
        demographic,
        downloadedGuide: guideTitle
      }
    }
    
    await fetch('https://api.mailchimp.com/3.0/lists/your-list-id/members', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    })
    */

    // For now, just log the lead (in production, remove console.log and implement actual integrations)
    console.log('Lead Magnet Conversion:', {
      email,
      firstName,
      lastName,
      phone,
      guideTopic,
      guideTitle,
      state,
      county,
      demographic,
      timestamp
    })

    return NextResponse.json({ success: true, message: 'Lead captured successfully' })

  } catch (error) {
    console.error('Error processing lead magnet submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}