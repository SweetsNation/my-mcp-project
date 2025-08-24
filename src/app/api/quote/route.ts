import { NextRequest, NextResponse } from 'next/server';
import { emailService, QuoteRequestData } from '@/lib/email-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, zipCode, dateOfBirth, interests, preferredContactMethod } = body;
    if (!name || !email || !phone || !zipCode || !dateOfBirth || !interests || !preferredContactMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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
    
    // Validate phone format (basic validation)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = String(phone).replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }
    
    // Validate ZIP code format
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!zipRegex.test(String(zipCode))) {
      return NextResponse.json(
        { error: 'Invalid ZIP code format' },
        { status: 400 }
      );
    }
    
    // Validate date of birth
    const dobDate = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();
    if (isNaN(dobDate.getTime()) || age < 18 || age > 120) {
      return NextResponse.json(
        { error: 'Invalid date of birth' },
        { status: 400 }
      );
    }
    
    // Validate interests array
    if (!Array.isArray(interests) || interests.length === 0) {
      return NextResponse.json(
        { error: 'Please select at least one area of interest' },
        { status: 400 }
      );
    }
    
    // Prepare quote request data
    const quoteData: QuoteRequestData = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      zipCode: String(zipCode).trim(),
      dateOfBirth: String(dateOfBirth).trim(),
      currentCoverage: body.currentCoverage ? String(body.currentCoverage).trim() : undefined,
      interests: interests.map((interest: any) => String(interest).trim()),
      preferredContactTime: body.preferredContactTime ? String(body.preferredContactTime).trim() : undefined,
      preferredContactMethod: String(preferredContactMethod).trim() as 'email' | 'phone',
    };
    
    // Send emails
    const [quoteSent, confirmationSent] = await Promise.all([
      emailService.sendQuoteRequest(quoteData),
      emailService.sendConfirmationEmail(quoteData.email, quoteData.name, 'quote')
    ]);
    
    if (!quoteSent) {
      console.error('Failed to send quote request email');
      // Still continue - we don't want to fail the request
    }
    
    if (!confirmationSent) {
      console.error('Failed to send confirmation email');
      // Still continue - the main goal is achieved
    }
    
    // Log the quote request for tracking
    console.log('Quote request received:', {
      name: quoteData.name,
      email: quoteData.email,
      zipCode: quoteData.zipCode,
      interests: quoteData.interests,
      timestamp: new Date().toISOString(),
    });
    
    // Return success
    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully. A licensed agent will contact you within 24 hours.'
    });
    
  } catch (error) {
    console.error('Quote request API error:', error);
    
    // In production, don't expose internal errors
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'Failed to submit quote request. Please try again or call us directly at 331-343-2584.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}