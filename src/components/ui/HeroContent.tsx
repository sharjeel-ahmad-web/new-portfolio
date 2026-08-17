"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const HeroContent = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20] min-h-screen">
      {/* Subtle zoom background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/[0.04] animate-heroZoom" />
      </div>

      {/* Left Content */}
      <div className="w-full flex flex-col gap-6 justify-center m-auto text-center md:text-start relative z-10">
        {/* Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-brand/40 bg-brand/10 px-4 py-2 max-w-full md:max-w-fit mx-auto md:mx-0"
        >
          <p
            className="text-xs md:text-sm text-brand font-medium tracking-widest uppercase"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            Remote Web Developer & AI Integration Specialist
          </p>
        </motion.div>

        {/* Hero Heading - Name in Luxurious Script */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl leading-tight"
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          <span className="text-cream">Sharjeel</span>{" "}
          <span className="text-brand">Ahmad</span>
        </motion.h1>

        {/* Subheadings - Times New Roman slide up with stagger */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-[550px] mx-auto md:mx-0 leading-relaxed"
          style={{ fontFamily: "'Times New Roman', serif" }}
        >
          Architecting secure, scalable digital ecosystems for e-commerce brands. Custom Next.js/MERN applications, enterprise API integrations, and intelligent workflow automations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="text-sm text-gray-400 max-w-[500px] mx-auto md:mx-0"
          style={{ fontFamily: "'Times New Roman', serif" }}
        >
          Lahore, Pakistan | BSSE in Artificial Intelligence
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-bold text-white bg-brand overflow-hidden transition-all duration-300 hover:text-black max-w-[200px] sm:max-w-[240px] mx-auto md:mx-0"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Right Image with Bulb Behind */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="relative w-full flex justify-center items-center mt-12 md:mt-0 min-h-[300px] md:min-h-[500px]"
      >
        <div className="absolute z-0 flex items-center justify-center">
          <Image
            src="/bulb.png"
            alt="Bulb"
            width={500}
            height={500}
            draggable={false}
            className="select-none object-contain opacity-60 mix-blend-screen w-36 h-36 sm:w-44 sm:h-44 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
          />
        </div>

        {/* Foreground Hero Icon */}
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
            className="select-none w-36 h-36 sm:w-44 sm:h-44 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
