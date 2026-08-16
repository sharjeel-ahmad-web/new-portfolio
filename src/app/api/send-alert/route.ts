import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Email Alert API Route
 * Sends notification when a client interacts with the AI Agent
 * Uses Nodemailer with Gmail/custom SMTP
 */

// Configure your email service
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  // Alternatively, use custom SMTP:
  // host: process.env.SMTP_HOST,
  // port: parseInt(process.env.SMTP_PORT || "587"),
  // secure: process.env.SMTP_SECURE === "true",
  // auth: {
  //   user: process.env.SMTP_USER,
  //   pass: process.env.SMTP_PASS,
  // },
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
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ALERT_EMAIL || "chjiimy@gmail.com",
      subject: "🔔 New AI Agent Interaction - Your Portfolio",
      html: emailContent,
      priority: "high",
    });

    console.log(
      `✅ Alert sent for message: "${clientMessage.substring(0, 50)}..."`
    );

    return NextResponse.json(
      { success: true, message: "Alert sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Email alert error:", error);

    // Fallback: Log to database or queue service
    // TODO: Implement fallback storage (Redis queue, DB backup, etc.)

    return NextResponse.json(
      { error: "Failed to send alert", details: error.message },
      { status: 500 }
    );
  }
}

/**
 * ENVIRONMENT VARIABLES REQUIRED:
 * EMAIL_USER=your-email@gmail.com
 * EMAIL_PASSWORD=your-app-password (use Gmail App Passwords, not regular password)
 * ALERT_EMAIL=chjiimy@gmail.com
 *
 * OR for custom SMTP:
 * SMTP_HOST=smtp.example.com
 * SMTP_PORT=587
 * SMTP_SECURE=false
 * SMTP_USER=user@example.com
 * SMTP_PASS=password
 */
