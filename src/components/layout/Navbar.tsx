"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navlinks, socials } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-dark/90 border-b border-brand/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">

        {/* === Logo === */}
        <Link href="/" onClick={closeMenu} className="group relative z-50">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-cream font-luxurious text-2xl sm:text-3xl tracking-wide"
          >
            Sharjeel Ahmad
          </motion.span>
        </Link>

        {/* === Desktop Links === */}
        <div className="hidden md:flex items-center gap-8 bg-dark/80 border border-cream/10 px-8 py-3 transition-all duration-500">
          {navlinks.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="relative text-gray-300 font-medium tracking-wide group"
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              <span className="relative z-10 group-hover:text-brand transition-colors duration-300">
                {link.title}
              </span>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full"></span>
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
              className="relative group p-2 bg-dark border border-cream/10 hover:border-brand/50 hover:bg-brand/10 transition-all duration-300"
            >
              <Icon className="h-5 w-5 text-gray-300 group-hover:text-brand transition-all" />
            </Link>
          ))}
        </div>

        {/* === Mobile Toggle Button === */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center z-[60] bg-dark border border-cream/10"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-brand" />
            ) : (
              <Menu className="w-6 h-6 text-cream" />
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
              className="fixed inset-0 bg-dark/80"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-dark border-l border-cream/10 flex flex-col p-8 text-gray-100 z-50 overflow-hidden"
            >
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
                      className="group flex items-center w-full px-6 py-4 border border-transparent hover:border-brand/30 hover:bg-brand/10 hover:text-brand transition-all duration-300"
                      style={{ fontFamily: "'Times New Roman', serif" }}
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
                    className="p-3 bg-dark border border-cream/10 hover:border-brand/50 hover:bg-brand/10 transition-all duration-300"
                  >
                    <Icon className="h-6 w-6 text-gray-300 hover:text-brand transition-all" />
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
