"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navlinks, socials } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Detect scroll to change navbar styling dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#030014]/80 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_4px_30px_rgba(112,66,248,0.15)] py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* === Logo === */}
        <Link href="/" onClick={closeMenu} className="group relative z-50">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] font-extrabold tracking-wide text-xl sm:text-2xl drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]"
          >
            Sharjeel Ahmad
          </motion.span>
        </Link>

        {/* === Desktop Links === */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 shadow-[0_0_15px_rgba(112,66,248,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] hover:border-cyan-500/30 transition-all duration-500">
          {navlinks.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="relative text-gray-300 font-medium tracking-wide group"
            >
              <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300">
                {link.title}
              </span>
              {/* Hover Underline Animation */}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-cyan-400 rounded-full transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
            </Link>
          ))}
        </div>

        {/* === Desktop Socials === */}
        <div className="hidden md:flex items-center gap-5">
          {socials.map(({ link, name, icon: Icon }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-2 bg-white/5 rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/30 transition-all duration-300"
            >
              <Icon className="h-5 w-5 text-gray-300 group-hover:text-cyan-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all" />
            </Link>
          ))}
        </div>

        {/* === Mobile Toggle Button === */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center z-[60] bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.div>
        </button>
      </div>

      {/* === Mobile Menu Drawer === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#030014]/60 backdrop-blur-sm z-40"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-[#0a0a0a]/95 backdrop-blur-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.5)] border-l border-white/10 flex flex-col p-8 text-gray-100 z-50 overflow-hidden"
            >
              {/* Ambient Glow Inside Drawer */}
              <div className="absolute top-20 right-[-50px] w-48 h-48 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-20 left-[-50px] w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none" />

              {/* Mobile Links */}
              <div className="flex flex-col mt-24 space-y-4 text-xl font-semibold relative z-10">
                {navlinks.map((link, i) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.1, duration: 0.3, ease: "easeOut" }}
                  >
                    <Link
                      href={link.link}
                      onClick={closeMenu}
                      className="group flex items-center w-full px-6 py-4 rounded-xl bg-white/5 border border-transparent hover:border-cyan-500/30 hover:bg-cyan-950/20 hover:text-cyan-400 transition-all duration-300"
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link.title}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Socials */}
              <motion.div
                className="flex items-center justify-center gap-6 mt-auto mb-8 relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                {socials.map(({ link, name, icon: Icon }) => (
                  <Link
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-full hover:border-cyan-400/50 hover:bg-cyan-950/30 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    <Icon className="h-6 w-6 text-gray-300 hover:text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global Style for Gradient Text Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </nav>
  );
};