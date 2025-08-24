import nodemailer from 'nodemailer';
import { render } from '@react-email/render';

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  zipCode?: string;
  subject: string;
  message: string;
  source?: string;
}

export interface QuoteRequestData {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  dateOfBirth: string;
  currentCoverage?: string;
  interests: string[];
  preferredContactTime?: string;
  preferredContactMethod: 'email' | 'phone';
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  
  private getConfig(): EmailConfig {
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error('Email configuration missing. Please check SMTP environment variables.');
    }
    
    return {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    };
  }
  
  private async getTransporter(): Promise<nodemailer.Transporter> {
    if (!this.transporter) {
      try {
        const config = this.getConfig();
        this.transporter = nodemailer.createTransport(config);
        
        // Verify connection configuration
        await this.transporter.verify();
        console.log('Email service connected successfully');
      } catch (error) {
        console.error('Failed to configure email service:', error);
        throw new Error('Email service configuration failed');
      }
    }
    
    return this.transporter;
  }
  
  async sendContactForm(data: ContactFormData): Promise<boolean> {
    try {
      const transporter = await this.getTransporter();
      
      const mailOptions = {
        from: `"El-Mag Insurance Contact Form" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        subject: `Contact Form: ${data.subject}`,
        html: this.generateContactFormEmail(data),
        replyTo: data.email,
      };
      
      await transporter.sendMail(mailOptions);
      console.log('Contact form email sent successfully');
      return true;
    } catch (error) {
      console.error('Failed to send contact form email:', error);
      return false;
    }
  }
  
  async sendQuoteRequest(data: QuoteRequestData): Promise<boolean> {
    try {
      const transporter = await this.getTransporter();
      
      const mailOptions = {
        from: `"El-Mag Insurance Quote Request" <${process.env.SMTP_USER}>`,
        to: process.env.QUOTE_EMAIL || process.env.SMTP_USER,
        subject: `Medicare Quote Request - ${data.name}`,
        html: this.generateQuoteRequestEmail(data),
        replyTo: data.email,
      };
      
      await transporter.sendMail(mailOptions);
      console.log('Quote request email sent successfully');
      return true;
    } catch (error) {
      console.error('Failed to send quote request email:', error);
      return false;
    }
  }
  
  async sendConfirmationEmail(email: string, name: string, type: 'contact' | 'quote'): Promise<boolean> {
    try {
      const transporter = await this.getTransporter();
      
      const subject = type === 'contact' 
        ? 'Thank you for contacting El-Mag Insurance'
        : 'Your Medicare quote request has been received';
      
      const mailOptions = {
        from: `"El-Mag Insurance" <${process.env.SMTP_USER}>`,
        to: email,
        subject,
        html: this.generateConfirmationEmail(name, type),
      };
      
      await transporter.sendMail(mailOptions);
      console.log(`Confirmation email sent to ${email}`);
      return true;
    } catch (error) {
      console.error('Failed to send confirmation email:', error);
      return false;
    }
  }
  
  private generateContactFormEmail(data: ContactFormData): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">New Contact Form Submission</h1>
          <p style="margin: 5px 0 0 0;">El-Mag Insurance Website</p>
        </div>
        
        <div style="padding: 20px; background-color: #f8fafc;">
          <h2 style="color: #1e40af; margin-top: 0;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            ` : ''}
            ${data.zipCode ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">ZIP Code:</td>
              <td style="padding: 8px 0;">${data.zipCode}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
              <td style="padding: 8px 0;">${data.subject}</td>
            </tr>
            ${data.source ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Source:</td>
              <td style="padding: 8px 0;">${data.source}</td>
            </tr>
            ` : ''}
          </table>
          
          <h2 style="color: #1e40af;">Message</h2>
          <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the El-Mag Insurance contact form at ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `;
  }
  
  private generateQuoteRequestEmail(data: QuoteRequestData): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #059669; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">New Medicare Quote Request</h1>
          <p style="margin: 5px 0 0 0;">El-Mag Insurance Website</p>
        </div>
        
        <div style="padding: 20px; background-color: #f0fdf4;">
          <h2 style="color: #047857; margin-top: 0;">Customer Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">ZIP Code:</td>
              <td style="padding: 8px 0;">${data.zipCode}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Date of Birth:</td>
              <td style="padding: 8px 0;">${data.dateOfBirth}</td>
            </tr>
            ${data.currentCoverage ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Current Coverage:</td>
              <td style="padding: 8px 0;">${data.currentCoverage}</td>
            </tr>
            ` : ''}
          </table>
          
          <h2 style="color: #047857;">Coverage Interests</h2>
          <ul style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #059669;">
            ${data.interests.map(interest => `<li>${interest}</li>`).join('')}
          </ul>
          
          <h2 style="color: #047857;">Contact Preferences</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Preferred Method:</td>
              <td style="padding: 8px 0; text-transform: capitalize;">${data.preferredContactMethod}</td>
            </tr>
            ${data.preferredContactTime ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Preferred Time:</td>
              <td style="padding: 8px 0;">${data.preferredContactTime}</td>
            </tr>
            ` : ''}
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 5px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; font-weight: bold; color: #92400e;">Action Required:</p>
            <p style="margin: 5px 0 0 0; color: #92400e;">Please follow up with this customer within 24 hours for best conversion rates.</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
            <p>This quote request was submitted at ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `;
  }
  
  private generateConfirmationEmail(name: string, type: 'contact' | 'quote'): string {
    const isQuote = type === 'quote';
    const title = isQuote ? 'Medicare Quote Request Received' : 'Message Received';
    const content = isQuote 
      ? 'Thank you for requesting a Medicare quote from El-Mag Insurance. One of our licensed Medicare specialists will review your information and contact you within 24 hours to discuss your options.'
      : 'Thank you for contacting El-Mag Insurance. We have received your message and will respond as soon as possible, typically within one business day.';
    
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">El-Mag Insurance</h1>
          <p style="margin: 5px 0 0 0;">Medicare Advantage Specialists</p>
        </div>
        
        <div style="padding: 30px 20px; background-color: #f8fafc;">
          <h2 style="color: #1e40af; margin-top: 0;">${title}</h2>
          <p style="font-size: 16px; line-height: 1.6;">Dear ${name},</p>
          <p style="font-size: 16px; line-height: 1.6;">${content}</p>
          
          ${isQuote ? `
          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <h3 style="color: #1e40af; margin-top: 0;">What happens next?</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Our licensed agent will review your information</li>
              <li>We'll research available Medicare plans in your area</li>
              <li>You'll receive personalized plan recommendations</li>
              <li>We'll help you enroll at no cost to you</li>
            </ul>
          </div>
          ` : ''}
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Need immediate assistance?</h3>
            <p style="margin: 10px 0;">You can reach us directly:</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:331-343-2584" style="color: #2563eb;">331-343-2584</a></p>
            <p style="margin: 10px 0;"><strong>Hours:</strong> Monday - Friday, 8 AM - 8 PM ET</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:submissions@elmaginsurance.com" style="color: #2563eb;">submissions@elmaginsurance.com</a></p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6;">Thank you for choosing El-Mag Insurance for your Medicare needs. We look forward to helping you find the perfect coverage!</p>
          
          <p style="font-size: 16px; line-height: 1.6;">Best regards,<br>
          <strong>The El-Mag Insurance Team</strong></p>
        </div>
        
        <div style="background-color: #374151; color: #d1d5db; padding: 20px; text-align: center; font-size: 12px;">
          <p style="margin: 0 0 10px 0;">El-Mag Insurance - Licensed Medicare Specialists</p>
          <p style="margin: 0;">This email was sent in response to your inquiry on our website.</p>
        </div>
      </div>
    `;
  }
}

export const emailService = new EmailService();