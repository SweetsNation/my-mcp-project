import { NextRequest, NextResponse } from 'next/server';
import { emailService, ContactFormData } from '@/lib/email-service';

// Force dynamic rendering to prevent build-time issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, subject, message } = body;
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, subject, message' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Prepare contact form data
    const contactData: ContactFormData = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: body.phone ? String(body.phone).trim() : undefined,
      zipCode: body.zipCode ? String(body.zipCode).trim() : undefined,
      subject: String(subject).trim(),
      message: String(message).trim(),
      source: 'Contact Form',
    };
    
    // Send emails
    const [contactSent, confirmationSent] = await Promise.all([
      emailService.sendContactForm(contactData),
      emailService.sendConfirmationEmail(contactData.email, contactData.name, 'contact')
    ]);
    
    if (!contactSent) {
      console.error('Failed to send contact form email');
      // Still return success if confirmation was sent
    }
    
    if (!confirmationSent) {
      console.error('Failed to send confirmation email');
      // Still return success if main email was sent
    }
    
    // Return success even if some emails failed (graceful degradation)
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully'
    });
    
  } catch (error) {
    console.error('Contact form API error:', error);
    
    // In production, don't expose internal errors
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'Failed to submit contact form. Please try again or call us directly.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}