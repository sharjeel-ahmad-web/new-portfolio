"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✅ Helper animations
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

type FormStatus = "idle" | "submitting" | "success" | "error";

export const Contact = () => {
  const form = useState<HTMLFormElement | null>(null);
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-alert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientMessage: `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone || "Not provided"}\nSubject: ${formState.subject || "No subject"}\n\nMessage:\n${formState.message}`,
          senderEmail: formState.email,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again later.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* === Background Ambient Glow === */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700" />

      {/* Title */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
            Ready to Scale?
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* === Left Info === */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col gap-6 text-white"
        >
          <motion.h3 variants={fadeUp} className="text-3xl font-bold leading-tight">
            Let&apos;s build your next <br />
            <span className="text-cyan-400">digital ecosystem</span>
          </motion.h3>
          
          <motion.p variants={fadeUp} className="text-gray-300 text-lg leading-relaxed border-l-2 border-purple-500 pl-4">
            Whether you need a lightning-fast e-commerce platform, enterprise API integrations, or intelligent workflow automation—I&apos;m ready to architect it.
          </motion.p>
          
          <motion.div variants={staggerContainer} className="space-y-5 mt-4">
            <motion.div variants={fadeUp} className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xl group-hover:scale-110 transition-transform">📧</div>
              <a href="mailto:sharjeel.graphics.web@gmail.com" className="text-gray-200 group-hover:text-cyan-400 transition-colors font-medium">
                sharjeel.graphics.web@gmail.com
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 text-xl group-hover:scale-110 transition-transform">🌍</div>
              <span className="text-gray-200 font-medium">Lahore, Pakistan (Remote)</span>
            </motion.div>

            <motion.div variants={fadeUp} className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400 text-xl group-hover:scale-110 transition-transform">💼</div>
              <span className="text-gray-200 font-medium">Full-time | Contract | Freelance</span>
            </motion.div>
          </motion.div>
          
          <motion.p variants={fadeUp} className="text-gray-400 text-sm mt-2">
            Don&apos;t like forms? Reach out directly at{" "}
            <a
              href="mailto:pykinsu@outlook.com"
              className="text-yellow-400 hover:text-yellow-300 font-semibold underline underline-offset-4 decoration-yellow-400/50 hover:decoration-yellow-400 transition-all"
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
              className="select-none drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]"
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
          {/* Form Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl blur-xl" />
          
          <form
            onSubmit={sendEmail}
            className="relative flex flex-col gap-5 bg-[#0a0a0a]/80 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  className="w-full px-5 py-4 text-white placeholder-gray-500 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:bg-cyan-950/20 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all disabled:opacity-50"
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  className="w-full px-5 py-4 text-white placeholder-gray-500 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:bg-cyan-950/20 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all disabled:opacity-50"
                />
              </div>
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formState.phone}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="w-full px-5 py-4 text-white placeholder-gray-500 bg-white/5 border border-white/10 rounded-xl focus:border-purple-400 focus:bg-purple-950/20 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-all disabled:opacity-50"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formState.subject}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="w-full px-5 py-4 text-white placeholder-gray-500 bg-white/5 border border-white/10 rounded-xl focus:border-purple-400 focus:bg-purple-950/20 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-all disabled:opacity-50"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              value={formState.message}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="w-full px-5 py-4 text-white placeholder-gray-500 bg-white/5 border border-white/10 rounded-xl focus:border-yellow-400 focus:bg-yellow-950/20 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all resize-none disabled:opacity-50"
            ></textarea>

            {/* Status Messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm text-center"
              >
                ✅ Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center"
              >
                ❌ {errorMessage}
              </motion.div>
            )}

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "submitting"}
              className="group relative w-full mt-4 px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Shimmer effect */}
              {status !== "submitting" && (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
              )}
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === "submitting" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </>
                )}
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
      
      {/* Tailwind Custom Animations */}
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
    </section>
  );
};
