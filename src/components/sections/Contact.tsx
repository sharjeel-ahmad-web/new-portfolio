"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
        )
        .then(
          () => {
            alert("✅ Message sent successfully!");
            form.current?.reset();
          },
          (error) => {
            console.error(error.text);
            alert("❌ Failed to send message. Try again later.");
          }
        );
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-dark"
    >
      {/* Title */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl text-cream" style={{ fontFamily: "'Alex Brush', cursive" }}>
          Ready to <span className="text-brand">Scale?</span>
        </h2>
        <div className="w-24 h-[2px] bg-brand mx-auto mt-4"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* === Left Info === */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col gap-6 text-cream"
        >
          <motion.h3 variants={fadeUp} className="text-3xl font-bold leading-tight" style={{ fontFamily: "'Alex Brush', cursive" }}>
            Let&apos;s build your next <br />
            <span className="text-brand">digital ecosystem</span>
          </motion.h3>

          <motion.p variants={fadeUp} className="text-gray-300 text-lg leading-relaxed border-l-2 border-brand pl-4" style={{ fontFamily: "'Times New Roman', serif" }}>
            Whether you need a lightning-fast e-commerce platform, enterprise API integrations, or intelligent workflow automation—I&apos;m ready to architect it.
          </motion.p>

          <motion.div variants={staggerContainer} className="space-y-5 mt-4">
            <motion.div variants={fadeUp} className="group flex items-center gap-4 p-4 bg-dark border border-cream/10 hover:border-brand/50 hover:bg-brand/5 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-brand/10 text-brand text-xl group-hover:scale-110 transition-transform">📧</div>
              <a href="mailto:sharjeel.graphics.web@gmail.com" className="text-gray-200 group-hover:text-brand transition-colors font-medium" style={{ fontFamily: "'Times New Roman', serif" }}>
                sharjeel.graphics.web@gmail.com
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="group flex items-center gap-4 p-4 bg-dark border border-cream/10 hover:border-brand/50 hover:bg-brand/5 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-brand/10 text-brand text-xl group-hover:scale-110 transition-transform">🌍</div>
              <span className="text-gray-200 font-medium" style={{ fontFamily: "'Times New Roman', serif" }}>Lahore, Pakistan (Remote)</span>
            </motion.div>

            <motion.div variants={fadeUp} className="group flex items-center gap-4 p-4 bg-dark border border-cream/10 hover:border-brand/50 hover:bg-brand/5 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-brand/10 text-brand text-xl group-hover:scale-110 transition-transform">💼</div>
              <span className="text-gray-200 font-medium" style={{ fontFamily: "'Times New Roman', serif" }}>Full-time | Contract | Freelance</span>
            </motion.div>
          </motion.div>

          <motion.p variants={fadeUp} className="text-gray-400 text-sm mt-2" style={{ fontFamily: "'Times New Roman', serif" }}>
            Don&apos;t like forms? Reach out directly at{" "}
            <a
              href="mailto:pykinsu@outlook.com"
              className="text-brand hover:text-cream font-semibold transition-all"
            >
              Email
            </a>
            .
          </motion.p>

          {/* Levitating Image */}
          <motion.div
            variants={fadeUp}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-8 mx-auto lg:mx-0"
          >
            <Image
              src="/talking.png"
              alt="Talking"
              width={280}
              height={280}
              className="select-none"
            />
          </motion.div>
        </motion.div>

        {/* === Right Form === */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="relative"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative flex flex-col gap-5 bg-dark border border-cream/10 p-8 md:p-10"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-4 text-cream placeholder-gray-500 bg-dark border border-cream/10 focus:border-brand focus:outline-none transition-all"
                  style={{ fontFamily: "'Times New Roman', serif" }}
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                  className="w-full px-5 py-4 text-cream placeholder-gray-500 bg-dark border border-cream/10 focus:border-brand focus:outline-none transition-all"
                  style={{ fontFamily: "'Times New Roman', serif" }}
                />
              </div>
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-5 py-4 text-cream placeholder-gray-500 bg-dark border border-cream/10 focus:border-brand focus:outline-none transition-all"
              style={{ fontFamily: "'Times New Roman', serif" }}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-5 py-4 text-cream placeholder-gray-500 bg-dark border border-cream/10 focus:border-brand focus:outline-none transition-all"
              style={{ fontFamily: "'Times New Roman', serif" }}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-5 py-4 text-cream placeholder-gray-500 bg-dark border border-cream/10 focus:border-brand focus:outline-none transition-all resize-none"
              style={{ fontFamily: "'Times New Roman', serif" }}
            ></textarea>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full mt-4 px-8 py-4 text-lg font-bold text-dark bg-brand overflow-hidden transition-all duration-300 hover:text-black"
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
