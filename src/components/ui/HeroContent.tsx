"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20]"
    >
      {/* === Background Ambient Glow === */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700" />

      {/* === Left Content === */}
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start relative z-10">
        
        {/* Role Badge */}
        <motion.div
          variants={slideInFromTop}
          whileHover={{ scale: 1.05 }}
          className="group flex items-center justify-center md:justify-start gap-2 py-[8px] px-[12px] border border-[#7042f88b] bg-[#0300145e] backdrop-blur-md opacity-[0.9] rounded-full max-w-full md:max-w-fit mx-auto md:mx-0 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-pointer"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5 group-hover:animate-spin" />
          <h1 className="text-[12px] md:text-[13px] text-gray-200 font-medium tracking-wide">
            🚀 Remote Web Developer & AI Integration Specialist
          </h1>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white max-w-[600px] leading-[1.15]"
        >
          Build{" "}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
            Lightning-Fast
          </span>{" "}
          Digital{" "}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite_reverse]">
            Ecosystems
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-300 my-3 sm:my-5 max-w-[550px] mx-auto md:mx-0 leading-relaxed border-l-2 border-transparent md:border-purple-500/50 md:pl-4 transition-all duration-300 hover:border-cyan-400"
        >
          I architect secure, scalable systems for e-commerce brands. Custom Next.js/MERN apps, enterprise API integrations (Stripe, Salesforce), and intelligent n8n automations that transform manual workflows into automated powerhouses.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={slideInFromLeft(1)}>
          <a
            href="#contact"
            className="group relative flex items-center justify-center gap-2 py-3 px-8 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm sm:text-base font-bold rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300 max-w-[180px] sm:max-w-[240px] mx-auto md:mx-0 overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"></div>
            
            <span className="relative z-10">Start Your Project</span>
            <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform group-hover:translate-x-1.5" />
          </a>
        </motion.div>
      </div>

      {/* === Right Image with Bulb Behind === */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="relative w-full flex justify-center items-center mt-12 md:mt-0 min-h-[400px] md:min-h-[500px]"
      >
        {/* Bulb (Background) - Added glowing and pulsing animation */}
        <motion.div
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-0 flex items-center justify-center"
        >
          <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <Image
            src="/bulb.png"
            alt="Bulb"
            width={500}
            height={500}
            draggable={false}
            className="select-none object-contain opacity-80 mix-blend-screen w-36 h-36 sm:w-44 sm:h-44 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
          />
        </motion.div>

        {/* Foreground Hero Icon (SVG) - Added levitating animation */}
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <Image
            src="/hero-bg.svg"
            alt="work icons"
            height={500}
            width={500}
            draggable={false}
            className="select-none drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]"
          />
        </motion.div>
      </motion.div>

      {/* Tailwind Custom Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </motion.div>
  );
};