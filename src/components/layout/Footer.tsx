import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-dark text-gray-300 border-t border-cream/10 px-4 sm:px-6 py-8 sm:py-10 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Links row */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium" style={{ fontFamily: "'Times New Roman', serif" }}>
          <Link
            href="#about"
            className="hover:text-brand transition duration-300"
          >
            About
          </Link>
          <span className="text-gray-500">|</span>
          <Link
            href="#contact"
            className="hover:text-brand transition duration-300"
          >
            Contact
          </Link>
          <span className="text-gray-500">|</span>
          <Link
            href="#projects"
            className="hover:text-brand transition duration-300"
          >
            Projects
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-cream/10 my-6 sm:my-8"></div>

        {/* Social icons row */}
        <div className="flex items-center justify-center space-x-6 sm:space-x-8 mb-6">
          <Link
            href="https://github.com/pykinsu"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-brand transition duration-300"
          >
            <FaGithub size={22} />
          </Link>
          <Link
            href="https://linkedin.com/in/pykinsu"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-brand transition duration-300"
          >
            <FaLinkedin size={22} />
          </Link>
          <Link
            href="https://twitter.com/pykinsu"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-brand transition duration-300"
          >
            <FaTwitter size={22} />
          </Link>
        </div>

        {/* Footer bottom */}
        <div className="text-xs sm:text-sm text-center text-gray-400" style={{ fontFamily: "'Times New Roman', serif" }}>
          &copy; {new Date().getFullYear()} Sharjeel Ahmad — All rights reserved.
        </div>
      </div>
    </footer>
  );
};
