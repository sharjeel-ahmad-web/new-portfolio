"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaTelegram,
  FaCodepen,
  FaLinkedin,
} from "react-icons/fa6";
import { ArrowRight } from "lucide-react";

// ✅ Helper animations
const slideInFromLeft = (delay: number = 0) => ({
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const popInItem = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  },
};

export const Profilecard = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="relative w-full overflow-hidden">
      
      {/* === Animated Background Glow Effects === */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none -translate-y-1/2 translate-x-1/2 delay-1000" />

      {/* === Content === */}
      <div
        ref={ref}
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto px-6 md:px-12 py-16"
      >
        {/* === Left Side (Profile + Socials) === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center w-full md:w-1/2 space-y-6"
        >
          {/* Floating Profile Image with Glow */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-40 animate-pulse"></div>
            <Image
              src="/pykinsu.jpg"
              alt="Sharjeel Ahmad"
              width={160}
              height={160}
              className="relative rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] object-cover"
            />
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-white tracking-wide">Sharjeel Ahmad</h1>
            <p className="text-xl text-cyan-100 font-medium">Remote Web Developer & AI Integration Specialist</p>
            <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
              <span className="animate-bounce">📍</span> Lahore, Pakistan | Bachelor of Software Engineering - University of Lahore
            </p>
          </div>

          {/* Social Icons (Staggered) */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex gap-6 mt-6 flex-wrap justify-center"
          >
            {[
              { icon: FaLinkedin, link: "https://linkedin.com/in/sharjeelahmad/" },
              { icon: FaGithub, link: "https://github.com/sharjeelahmad" },
              { icon: FaTwitter, link: "https://twitter.com/sharjeel_dev" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                variants={popInItem}
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="relative group p-3 bg-white/5 rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/30 transition-colors duration-300"
              >
                <social.icon className="text-cyan-400 text-2xl group-hover:text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              </motion.a>
            ))}
          </motion.div>

          {/* Experience Badges (Staggered) */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-wrap gap-3 justify-center mt-6 text-sm font-medium"
          >
            <motion.span variants={popInItem} className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/50 rounded-full text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] backdrop-blur-sm">
              Programmers Force
            </motion.span>
            <motion.span variants={popInItem} className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/50 rounded-full text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] backdrop-blur-sm">
              Soft Enterprise
            </motion.span>
            <motion.span variants={popInItem} className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/50 rounded-full text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] backdrop-blur-sm">
              Devcotk Ltd
            </motion.span>
          </motion.div>
        </motion.div>

        {/* === Right Side (Hero Text + Button) === */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideInFromLeft(0.4)}
          className="w-full md:w-1/2 text-white mx-auto space-y-8"
        >
          {/* Hero Heading with subtle background clip animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white max-w-[600px] leading-[1.15]">
            Scale Your E-commerce with{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              Next.js
            </span>{" "}
            &{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite_reverse]">
              Automation
            </span>
          </h1>

          {/* Description */}
          <motion.p 
            variants={slideInFromLeft(0.6)}
            className="text-gray-300 text-lg leading-relaxed border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-cyan-500/10 to-transparent py-2"
          >
            I architect lightning-fast digital ecosystems with secure APIs, intelligent automations, and enterprise-grade systems. From Stripe integrations to Salesforce workflows—let&apos;s build something extraordinary.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={slideInFromLeft(0.8)}>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] transition-shadow overflow-hidden"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>
              
              <span className="relative z-10">Know About Me</span>
              <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Global styles for custom tailwind animations */}
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
    </div>
  );
};