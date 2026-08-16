import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StarsCanvas } from "@/components/ui/Stars-Background";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// ⚡ Lazy-load AI Agent to improve initial page load
const AIAgent = dynamic(() => import("@/components/AIAgent").then(mod => ({ default: mod.AIAgent })), {
  loading: () => null,
  ssr: false,
});

// ✅ Global viewport theme color
export const viewport: Viewport = {
  themeColor: "#030014",
};

// ✅ Global site metadata (SEO)
export const metadata: Metadata = {
  title: "Sharjeel Ahmad | Remote Web Developer & AI Integration Specialist",
  description: "Lightning-fast Next.js/MERN apps, enterprise API integrations, and n8n workflow automations for e-commerce brands. BSSE in AI from University of Lahore.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/kinsu.svg", type: "image/svg+xml" },
    ],
  },
  authors: [
    {
      name: "Sharjeel Ahmad",
      url: "https://github.com/sharjeelahmad",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://sharjeel.dev",
    title: "Sharjeel Ahmad | Remote Web Developer & AI Integration Specialist",
    description: "Lightning-fast Next.js/MERN apps, enterprise API integrations, and n8n automations for e-commerce brands.",
    images: [
      {
        url: "/kinsu.svg",
        width: 1200,
        height: 630,
        alt: "Sharjeel Ahmad",
      },
    ],
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        <AIAgent />
      </body>
    </html>
  );
}
