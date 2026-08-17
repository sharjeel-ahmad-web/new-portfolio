"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";

const experiences = [
  {
    company: "Programmers Force",
    title: "Full-Stack & AI Integration Developer",
    dates: "Jan 2026 - Jun 2026",
    duration: "6 mos",
    location: "Lahore, Punjab, Pakistan",
    type: "Full-time · On-site",
    description:
      "Led core backend architecture and system integrations for Barie.ai—an advanced conversational and agentic AI platform. Engineered integrations for 256+ enterprise APIs including Salesforce, Stripe, Google Workspace, Chargebee, and Slack. Implemented enterprise-grade security protocols (OAuth 2.0, PKCE flows) and custom webhook event listeners to eliminate operational data silos.",
    tech: ["Laravel", "MVC", "OAuth 2.0", "API Integrations"],
  },
  {
    company: "Soft Enterprise",
    title: "MERN Stack Developer",
    dates: "May 2025 - Aug 2025",
    duration: "4 mos",
    location: "Bahria Town, Lahore",
    type: "Full-time · On-site",
    description:
      "Engineered scalable full-stack web and mobile (Android) applications using the complete MERN stack. Collaborated with cross-functional teams to design, build, and deploy user-centric digital solutions with focus on backend performance optimization and robust API integrations.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    company: "Logictech",
    title: "MERN Stack Developer",
    dates: "Mar 2022 - May 2022",
    duration: "3 mos",
    location: "Lahore, Punjab, Pakistan",
    type: "Full-time · On-site",
    description:
      "Developed and maintained dynamic, high-performance web applications using the MERN Stack. Engineered secure backend infrastructures with user authentication, role-based access control (RBAC), and custom APIs for digital marketing workflows.",
    tech: ["MERN Stack", "RBAC", "API Development", "Security"],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-10 overflow-hidden bg-dark"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-cream mb-4" style={{ fontFamily: "'Alex Brush', cursive" }}>
            Work{" "}
            <span className="text-brand">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Times New Roman', serif" }}>
            Building enterprise-grade solutions across AI integrations, full-stack development, and scalable architectures.
          </p>
        </motion.div>

        {/* Timeline Cards */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-dark border border-cream/10 p-6 sm:p-8 hover:border-brand/50 transition-all duration-300 cursor-default"
            >
              {/* Gradient Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left: Company Icon & Info */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-brand/10 border border-brand/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-7 h-7 text-brand" />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-cream group-hover:text-brand transition-colors" style={{ fontFamily: "'Times New Roman', serif" }}>
                        {exp.company}
                      </h3>
                      <p className="text-brand font-medium mt-1" style={{ fontFamily: "'Times New Roman', serif" }}>
                        {exp.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 bg-dark border border-cream/10 px-3 py-1.5 w-fit">
                      <Calendar className="w-4 h-4 text-brand" />
                      <span>{exp.dates}</span>
                      <span className="text-gray-500">·</span>
                      <span className="text-brand">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400" style={{ fontFamily: "'Times New Roman', serif" }}>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="hidden sm:inline text-gray-600">|</span>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-gray-500" />
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-5" style={{ fontFamily: "'Times New Roman', serif" }}>
                    {exp.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-brand bg-brand/10 border border-brand/20 group-hover:border-brand/40 group-hover:bg-brand/15 transition-all"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
