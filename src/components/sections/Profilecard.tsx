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
    <div className="relative w-full overflow-hidden bg-dark">
      {/* Animated Background Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand/10 pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand/10 pointer-events-none -translate-y-1/2 translate-x-1/2" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto px-6 md:px-12 py-16"
      >
        {/* Left Side (Profile + Socials) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center w-full md:w-1/2 space-y-6"
        >
          {/* Profile Image */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand/20"></div>
            <Image
              src="/pykinsu.jpg"
              alt="Sharjeel Ahmad"
              width={160}
              height={160}
              className="relative border-4 border-brand object-cover"
              priority
            />
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-cream tracking-wide" style={{ fontFamily: "'Alex Brush', cursive" }}>
              Sharjeel Ahmad Khan
            </h1>
            <p className="text-xl text-brand font-medium" style={{ fontFamily: "'Times New Roman', serif" }}>
              Remote Web Developer & AI Integration Specialist
            </p>
            <p className="text-sm text-gray-400 flex items-center justify-center gap-2" style={{ fontFamily: "'Times New Roman', serif" }}>
              <span className="animate-bounce">📍</span> Lahore, Pakistan | Bachelor of Software Engineering - University of Lahore
            </p>
          </div>

          {/* Social Icons */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex gap-6 mt-6 flex-wrap justify-center"
          >
            {[
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/sharjeel-ahmad-remote-web-developer-2646361b7/" },
              { icon: FaGithub, link: "https://github.com/sharjeel-ahmad-web" },
              { icon: FaTwitter, link: "https://x.com/JimmyKlair" }
            ].map((social, index) => (
              <motion.a
                key={index}
                variants={popInItem}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="relative group p-3 bg-dark border border-cream/10 hover:border-brand/50 hover:bg-brand/10 transition-colors duration-300"
              >
                <social.icon className="text-brand text-2xl group-hover:text-cream transition-all" />
              </motion.a>
            ))}
          </motion.div>

          {/* Experience Badges */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-wrap gap-3 justify-center mt-6 text-sm font-medium"
          >
            <motion.span variants={popInItem} className="px-4 py-1.5 bg-brand/10 border border-brand/50 text-brand">
              Programmers Force
            </motion.span>
            <motion.span variants={popInItem} className="px-4 py-1.5 bg-brand/10 border border-brand/50 text-brand">
              Soft Enterprise
            </motion.span>
            <motion.span variants={popInItem} className="px-4 py-1.5 bg-brand/10 border border-brand/50 text-brand">
              Devcotk Ltd
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Right Side (Hero Text + Button) */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideInFromLeft(0.4)}
          className="w-full md:w-1/2 text-cream mx-auto space-y-8"
        >
          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15]" style={{ fontFamily: "'Alex Brush', cursive" }}>
            Scale Your E-commerce with{" "}
            <span className="text-brand">Next.js</span>{" "}
            &{" "}
            <span className="text-brand">Automation</span>
          </h1>

          {/* Description */}
          <motion.p
            variants={slideInFromLeft(0.6)}
            className="text-gray-300 text-lg leading-relaxed border-l-4 border-brand pl-4 bg-brand/5 py-2"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            I architect lightning-fast digital ecosystems with secure APIs, intelligent automations, and enterprise-grade systems. From Stripe integrations to Salesforce workflows—let&apos;s build something extraordinary.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={slideInFromLeft(0.8)}>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-dark bg-brand overflow-hidden transition-all duration-300 hover:text-black"
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center gap-2">
                Know About Me
                <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
