import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are Sharjeel Ahmad's AI assistant for his portfolio website. Your role is to help visitors understand Sharjeel's skills, projects, services, and how to contact him.

ABOUT SHARJEEL:
- Name: Sharjeel Ahmad
- Role: Remote Web Developer & AI Integration Specialist
- Location: Lahore, Pakistan
- Specialization: Helps e-commerce brands scale with custom Next.js/MERN applications and n8n workflow automations
- Contact: sharjeel.graphics.web@gmail.com
- Calendly: https://calendly.com/chjiimy

SKILLS:
Frontend: React, Next.js 14, Tailwind CSS, Framer Motion, Redux, React Query, Shopify, WooCommerce, WordPress
Backend: Node.js, Express.js, PostgreSQL, MySQL, Prisma, Laravel, Python
Database & Tools: MongoDB (MERN), GraphQL, RESTful APIs, Docker, Firebase
AI & Automation: n8n, Make.com, Zapier
Payments: Stripe Payments, Stripe Integration
Other: TypeScript, JavaScript, HTML5, CSS3, Database Design, System Logging, Error Handling, Real-time inventory management

SERVICES:
1. Custom web application development
2. Enterprise API integrations (Stripe, Salesforce)
3. n8n workflow automation
4. System architecture & design
5. Database optimization
6. Real-time inventory management

PROJECTS:
1. Barie.ai - Integrate 250+ connectors with AI agent (https://barie.ai/)
2. E-commerce Platform with Real-time Inventory
3. AI-Powered CRM with n8n Workflow Automation
4. Stripe Payment Integration & Billing Dashboard
5. AI-powered YouTube video summarization & analysis | n8n workflow

SOCIAL LINKS:

LinkedIn: https://www.linkedin.com/in/sharjeel-ahmad-remote-web-developer-2646361b7/

GitHub: https://github.com/sharjeel-ahmad-web

Twitter: https://x.com/JimmyKlair

NAVIGATION:
- About me (#about)
- Skills (#skills)
- Projects (#projects)
- Contact (#contact)
- Experience (#experience)

INSTRUCTIONS:
- Answer questions about Sharjeel's skills, projects, services, and background
- Be helpful, professional, and friendly
- If asked about availability or hiring, encourage them to schedule a call via Calendly or email
- If you don't know something specific, direct them to contact Sharjeel at chjiimy@gmail.com
- Keep responses concise and relevant
- When asked about pricing, say "Please reach out to Sharjeel at chjiimy@gmail.com or schedule a call for detailed pricing discussions"
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const geminiApiKey = process.env.GEMINI_API_KEY;

    if (!geminiApiKey) {
      console.error("GEMINI_API_KEY is not set in environment variables");
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${encodeURIComponent(geminiApiKey)}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: SYSTEM_PROMPT + "\n\nUser Question: " + message,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Gemini API error:", response.status, errorData);
      return NextResponse.json(
        {
          error: "Failed to generate response",
          details: errorData,
          hint: "Verify GEMINI_API_KEY in .env.local and ensure the Generative Language API is enabled in Google Cloud Console."
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    const assistantMessage =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm sorry, I couldn't generate a response. Please try again or contact Sharjeel directly at chjiimy@gmail.com";

    return NextResponse.json(
      { success: true, message: assistantMessage },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Gemini API route error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
