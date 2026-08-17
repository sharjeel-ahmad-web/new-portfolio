"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Plus, Minus, X, Divide } from "lucide-react";

export const AboutMe = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-6xl mx-auto relative bg-dark">
      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* === Left Side: Image === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/standing.png"
            alt="Sharjeel Ahmad"
            width={320}
            height={400}
            className="object-contain border-4 border-brand"
            priority
          />
        </motion.div>

        {/* === Right Side: Info === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6 relative"
        >
          {/* Floating Math Icons */}
          <Plus className="absolute top-0 left-10 w-10 h-10 text-brand/20 animate-float" />
          <Minus className="absolute top-12 right-10 w-12 h-12 text-brand/20 animate-float animation-delay-2000" />
          <X className="absolute bottom-10 left-1/4 w-10 h-10 text-brand/20 animate-float animation-delay-4000" />
          <Divide className="absolute bottom-0 right-1/3 w-12 h-12 text-brand/20 animate-float animation-delay-6000" />

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-cream max-w-[600px] leading-tight relative z-10" style={{ fontFamily: "'Alex Brush', cursive" }}>
            About{" "}
            <span className="text-brand">Me</span>
          </h1>

          {/* About Text */}
          <p className="text-gray-300 text-lg relative z-10" style={{ fontFamily: "'Times New Roman', serif" }}>
            I&apos;m <span className="text-brand font-semibold">Sharjeel Ahmad</span>, a <span className="text-cream font-medium">Remote Web Developer & AI Integration Specialist</span> based in Lahore, Pakistan. I hold a <span className="text-brand font-medium">BSSE in Artificial Intelligence from The University of Lahore</span>.
          </p>

          <p className="text-gray-300 text-lg relative z-10" style={{ fontFamily: "'Times New Roman', serif" }}>
            I architect <span className="text-brand font-medium">secure, scalable digital ecosystems</span> using <span className="text-cream font-medium">MERN Stack, Next.js 14, and n8n</span>. My expertise spans enterprise API integrations (Stripe, Salesforce), real-time systems, and intelligent workflow automations that transform business processes.
          </p>

          <p className="text-gray-300 text-lg relative z-10" style={{ fontFamily: "'Times New Roman', serif" }}>
            <span className="text-brand font-semibold">Professional Experience:</span> I&apos;ve worked at <span className="text-cream">Programmers Force</span> (Full-Stack & AI), <span className="text-cream">Soft Enterprise</span> (MERN), <span className="text-cream">Devcotk Ltd</span>, and others—delivering high-ticket custom solutions for e-commerce brands and startups.
          </p>

          {/* Reach Me Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold bg-brand overflow-hidden transition-all duration-300 hover:text-black"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 flex items-center gap-2">
              Let&apos;s Build Something
              <ArrowRight size={20} />
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Floating Icons Animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
      `}</style>
    </section>
  );
};
