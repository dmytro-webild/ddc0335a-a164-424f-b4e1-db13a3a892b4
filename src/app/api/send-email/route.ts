import { NextRequest, NextResponse } from 'next/server';

// Email service configuration disabled - nodemailer not installed
// To enable email functionality, install nodemailer: npm install nodemailer
const transporter = null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, subject, data } = body;

    // Format the form data into a readable email body
    const emailBody = `
      New Contact Form Submission:
      
      Name: ${data.name || 'N/A'}
      Email: ${data.email || 'N/A'}
      Phone: ${data.phone || 'N/A'}
      Message: ${data.message || 'N/A'}
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: emailBody,
    };

    if (!transporter) {
      throw new Error('Email service not configured');
    }
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}