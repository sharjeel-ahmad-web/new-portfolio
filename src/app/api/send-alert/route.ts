import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPassword) {
      console.error("Missing email credentials. Check EMAIL_USER and EMAIL_PASSWORD in .env.local");
      return NextResponse.json(
        {
          error: "Email credentials not configured",
          details: "Missing credentials for PLAIN",
          hint: "Set EMAIL_USER and EMAIL_PASSWORD in .env.local. If using Gmail, use an App Password, not your regular password."
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    const emailContent = `
      <h2>🤖 New AI Agent Interaction</h2>
      <p><strong>Message from Client:</strong></p>
      <blockquote style="border-left: 4px solid #fc4c00; padding-left: 16px; margin: 16px 0;">
        ${clientMessage}
      </blockquote>
      <hr style="border-color: #ffe8c1;" />
      <p><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
      <p><strong>Sender Email:</strong> ${senderEmail || "Not provided"}</p>
      <p style="margin-top: 24px;">
        <a href="mailto:${emailUser}" 
           style="background: #fc4c00; color: white; padding: 10px 20px; 
                  text-decoration: none; border: none;">
          Reply to Client
        </a>
      </p>
    `;

    await transporter.sendMail({
      from: emailUser,
      to: process.env.ALERT_EMAIL || emailUser,
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
    return NextResponse.json(
      {
        error: "Failed to send alert",
        details: error.message,
        hint: "Verify EMAIL_USER and EMAIL_PASSWORD in .env.local. If using Gmail, enable 2FA and create an App Password."
      },
      { status: 500 }
    );
  }
}
