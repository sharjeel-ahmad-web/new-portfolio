import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Email Alert API Route
 * Sends notification when a client interacts with the AI Agent
 * Uses Nodemailer with Gmail/custom SMTP
 */

// Configure your email service
const useCustomSMTP = process.env.SMTP_HOST;

const transporter = useCustomSMTP
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { clientMessage, senderEmail, timestamp } = body;

    if (!clientMessage) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Validate email configuration
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || process.env.EMAIL_USER;
    const alertEmail = process.env.ALERT_EMAIL || "chjiimy@gmail.com";

    if (!fromEmail) {
      console.error("❌ Email configuration error: FROM_EMAIL, SMTP_USER, or EMAIL_USER must be set");
      return NextResponse.json(
        { error: "Email configuration error: FROM_EMAIL is not set" },
        { status: 500 }
      );
    }

    console.log("📧 Email config:", {
      from: fromEmail,
      to: alertEmail,
      replyTo: senderEmail || fromEmail,
      useCustomSMTP: !!process.env.SMTP_HOST,
    });

    // Email content
    const emailContent = `
      <h2>🤖 New AI Agent Interaction</h2>
      <p><strong>Message from Client:</strong></p>
      <blockquote style="border-left: 4px solid #8b5cf6; padding-left: 16px; margin: 16px 0;">
        ${clientMessage}
      </blockquote>
      <hr />
      <p><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
      <p><strong>Sender Email:</strong> ${senderEmail || "Not provided"}</p>
      <p style="margin-top: 24px;">
        <a href="https://your-portfolio-domain.com/dashboard" 
           style="background: #8b5cf6; color: white; padding: 10px 20px; 
                  text-decoration: none; border-radius: 6px;">
          View More Details
        </a>
      </p>
    `;

    // Send email to Sharjeel
    const mailOptions = {
      from: fromEmail,
      to: alertEmail,
      replyTo: senderEmail || fromEmail,
      subject: "🔔 New AI Agent Interaction - Your Portfolio",
      html: emailContent,
      priority: "high",
    };

    console.log("📧 Sending email with options:", {
      from: mailOptions.from,
      to: mailOptions.to,
      replyTo: mailOptions.replyTo,
      subject: mailOptions.subject,
    });

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully:", info.messageId);
    console.log("📬 SMTP Response:", info.response);

    return NextResponse.json(
      { 
        success: true, 
        message: "Alert sent successfully",
        messageId: info.messageId,
        response: info.response,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Email alert error:", error);

    return NextResponse.json(
      { 
        error: "Failed to send alert", 
        details: error.message,
        code: error.code,
      },
      { status: 500 }
    );
  }
}

/**
 * ENVIRONMENT VARIABLES REQUIRED:
 * EMAIL_USER=your-email@gmail.com
 * EMAIL_PASSWORD=your-app-password (use Gmail App Passwords, not regular password)
 * ALERT_EMAIL=chjiimy@gmail.com
 * FROM_EMAIL=verified-sender@yourdomain.com
 *
 * OR for custom SMTP:
 * SMTP_HOST=smtp.example.com
 * SMTP_PORT=587
 * SMTP_SECURE=false
 * SMTP_USER=user@example.com
 * SMTP_PASS=password
 * FROM_EMAIL=verified-sender@yourdomain.com
 */
