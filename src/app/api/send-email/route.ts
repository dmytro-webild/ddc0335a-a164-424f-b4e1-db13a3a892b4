import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure your email service here
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

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