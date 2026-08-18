"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const Resume = () => {
  const [isViewOpen, setIsViewOpen] = useState(false);

  const handleDownload = () => {
    const printContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sharjeel Ahmad Khan - Resume</title>
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Times+New+Roman&display=swap" rel="stylesheet">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Times New Roman', serif;
            padding: 40px;
            background: #fff;
            color: #000;
          }
          .resume-container {
            max-width: 850px;
            margin: 0 auto;
            padding: 30px 40px;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 12px;
          }
          .header-text { flex: 1; }
          h1 {
            font-family: 'Times New Roman', serif;
            color: #fc4c00;
            font-size: 32px;
            margin: 0 0 4px 0;
          }
          h2 {
            font-size: 16px;
            margin: 0 0 4px 0;
            text-transform: uppercase;
            color: #333;
          }
          .contact-info {
            font-size: 13px;
            margin: 0;
            color: #333;
          }
          .contact-info a {
            color: #fc4c00;
            text-decoration: none;
          }
          .profile-img {
            width: 100px;
            height: auto;
            border: 2px solid #fc4c00;
            object-fit: cover;
            margin-left: 20px;
          }
          .intro-text {
            font-size: 13px;
            line-height: 1.4;
            margin-bottom: 12px;
            color: #333;
          }
          .section-header {
            border-top: 2px solid #fc4c00;
            border-bottom: 2px solid #fc4c00;
            padding: 4px 0;
            margin: 12px 0 8px 0;
          }
          .section-header h3 {
            color: #fc4c00;
            font-size: 15px;
            margin: 0;
            text-transform: uppercase;
            font-family: 'Times New Roman', serif;
          }
          .summary-text {
            font-size: 13px;
            line-height: 1.4;
            margin: 0 0 10px 0;
            color: #333;
          }
          .expertise-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 4px;
            font-size: 13px;
            margin-bottom: 10px;
          }
          .expertise-item {
            display: flex;
            align-items: flex-start;
          }
          .expertise-item::before {
            content: "•";
            margin-right: 5px;
            color: #fc4c00;
          }
          .accomplishments-list, .experience-list {
            margin: 0 0 10px 0;
            padding-left: 20px;
            font-size: 13px;
            line-height: 1.4;
          }
          .accomplishments-list li, .experience-list li {
            margin-bottom: 4px;
            color: #333;
          }
          .experience-header {
            display: flex;
            justify-content: space-between;
            font-size: 13.5px;
            font-weight: bold;
            margin-bottom: 2px;
            margin-top: 8px;
            color: #000;
          }
          .experience-location {
            font-size: 13px;
            margin-bottom: 4px;
            font-style: italic;
            color: #333;
          }
          .languages-text {
            font-size: 13px;
            margin: 0;
            color: #333;
          }
          @media print {
            body { padding: 0; }
            .resume-container { padding: 0; }
          }
        </style>
      </head>
      <body>
        <div class="resume-container">
          <div class="header">
            <div class="header-text">
              <h1>Sharjeel Ahmad Khan</h1>
              <h2>Full-Stack Web Developer & AI Integration Specialist</h2>
              <p class="contact-info">
                Lahore, Punjab 53701, Pakistan | sharjeel.graphics.web@gmail.com | +92 343 6435979 | <a href="https://www.linkedin.com/in/sharjeel-ahmad-remote-web-developer-2646361b7/">LinkedIn</a>
              </p>
            </div>
            <img src="/resumeimage.png" alt="Profile Picture" class="profile-img">
          </div>

          <p class="intro-text">
            I specialize in building custom, high-converting web applications and eliminating operational data silos through advanced workflow automations. With hands-on experience architecting secure systems for platforms like Barie.ai and integrating over 250+ enterprise APIs using OAuth 2.0 and PKCE flows, I don&apos;t just write code—I build secure, scalable tech infrastructures that drive revenue. From RESTful and GraphQL API Design to complex n8n workflows, my focus is on delivering performance-driven results.
          </p>

          <div class="section-header">
            <h3>Professional Summary</h3>
          </div>
          <p class="summary-text">
            Full-Stack Web Developer & AI Integration Specialist | Lahore, Pakistan • Led backend architecture for Barie.ai (conversational AI platform); engineered integrations for 256+ enterprise APIs (Salesforce, Stripe, Google Workspace, Chargebee, Slack) • Implemented enterprise-grade security (OAuth 2.0, PKCE flows) and webhook event listeners; built Laravel MVC services for enterprise scalability • Built full-stack applications with React, Node.js, Express, MongoDB; implemented Context API, React Router, and Next.js server-side rendering • Delivered production-grade REST APIs, responsive UI components, and database optimization for high-performance applications • Architected enterprise-scale systems handling 256+ API integrations with zero data silos | Passion for building lightning-fast digital ecosystems and automating complex workflows.
          </p>

          <div class="section-header">
            <h3>Areas of Expertise</h3>
          </div>
          <div class="expertise-grid">
            <div class="expertise-col">
              <div class="expertise-item">RESTful & GraphQL APIs</div>
              <div class="expertise-item">API Integrations (256+)</div>
              <div class="expertise-item">Tailwind CSS</div>
              <div class="expertise-item">Shopify</div>
              <div class="expertise-item">Laravel (MVC)</div>
              <div class="expertise-item">Mongoose</div>
              <div class="expertise-item">Stripe API</div>
            </div>
            <div class="expertise-col">
              <div class="expertise-item">OAuth 2.0 & PKCE</div>
              <div class="expertise-item">Database Design</div>
              <div class="expertise-item">JavaScript (ES6+)</div>
              <div class="expertise-item">WordPress</div>
              <div class="expertise-item">Python</div>
              <div class="expertise-item">Git & GitHub</div>
              <div class="expertise-item">Salesforce</div>
            </div>
            <div class="expertise-col">
              <div class="expertise-item">System Architecture</div>
              <div class="expertise-item">React</div>
              <div class="expertise-item">HTML5</div>
              <div class="expertise-item">Node.js</div>
              <div class="expertise-item">MongoDB</div>
              <div class="expertise-item">Docker</div>
              <div class="expertise-item">Google Workspace</div>
            </div>
            <div class="expertise-col">
              <div class="expertise-item">n8n Automation</div>
              <div class="expertise-item">Next.js 14</div>
              <div class="expertise-item">CSS3</div>
              <div class="expertise-item">Express.js</div>
              <div class="expertise-item">MySQL</div>
              <div class="expertise-item">Postman</div>
              <div class="expertise-item">Firebase</div>
            </div>
          </div>

          <div class="section-header">
            <h3>Accomplishments</h3>
          </div>
          <ul class="accomplishments-list">
            <li>Architected the backend for Barie.ai and integrated 256+ enterprise APIs (Salesforce, Stripe, Google Workspace, Chargebee, Slack) to eliminate data silos and enable unified conversational workflows.</li>
            <li>Designed and implemented OAuth 2.0 (PKCE) authentication flows and webhook event listeners, delivering enterprise-grade security for third-party integrations.</li>
            <li>Built scalable Laravel MVC microservices and production-grade REST APIs; optimized MongoDB and MySQL schemas and queries for high-throughput environments.</li>
            <li>Developed full-stack applications using React, Next.js (SSR), Context API and Tailwind—shipping responsive UI components and improving front-end performance and developer velocity.</li>
            <li>Automated complex workflows with n8n and custom integrations, accelerating API onboarding and reducing manual operational overhead.</li>
          </ul>

          <div class="section-header">
            <h3>Professional Experience</h3>
          </div>
          
          <div class="experience-header">
            <span>Full-Stack & AI Integration Developer, Programmers Force</span>
            <span>Jan 2026 to Jun 2026</span>
          </div>
          <div class="experience-location">Lahore, Pakistan</div>
          <ul class="experience-list">
            <li>Led backend architecture for Barie.ai (conversational AI platform); engineered integrations for 256+ enterprise APIs (Salesforce, Stripe, Google Workspace, Chargebee, Slack)</li>
            <li>Implemented enterprise-grade security (OAuth 2.0, PKCE flows) and webhook event listeners; built Laravel MVC services for enterprise scalability</li>
          </ul>

          <div class="experience-header">
            <span>MERN Stack Developer, Soft Enterprise & Logictech</span>
            <span>2025 to 2026</span>
          </div>
          <div class="experience-location">Lahore, Pakistan</div>
          <ul class="experience-list">
            <li>Built full-stack applications with React, Node.js, Express, MongoDB; implemented Context API, React Router, and Next.js server-side rendering</li>
            <li>Delivered production-grade REST APIs, responsive UI components, and database optimization for high-performance applications</li>
          </ul>

          <div class="section-header">
            <h3>Languages</h3>
          </div>
          <p class="languages-text">
            English | Urdu | Punjabi
          </p>
        </div>
      </body>
      </html>
    `;

    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  return (
    <section
      id="resume"
      className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden "
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl text-cream mb-4" style={{ fontFamily: "'Alex Brush', cursive" }}>
          My <span className="text-brand">Resume</span>
        </h2>
        <div className="w-24 h-[2px] bg-brand mx-auto mt-4"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6" style={{ fontFamily: "'Times New Roman', serif" }}>
          View my resume online or download it as a PDF to learn more about my experience, skills, and accomplishments.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsViewOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-cream bg-transparent border-2 border-brand overflow-hidden transition-all duration-300 hover:text-dark hover:bg-brand"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            <span className="relative z-10">View Resume</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-dark bg-brand overflow-hidden transition-all duration-300 hover:text-black"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <span className="relative z-10">Download Resume (PDF)</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {isViewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
            onClick={() => setIsViewOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-cream border border-brand/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsViewOpen(false)}
                className="sticky top-4 float-right mr-4 z-10 w-10 h-10 flex items-center justify-center bg-dark text-cream border border-cream/10 hover:border-brand hover:text-brand transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              {/* Resume Content */}
              <div className="p-6 md:p-10">
                {/* Resume Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-6">
                  <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl text-brand mb-2" style={{ fontFamily: "'Alex Brush', cursive" }}>
                      Sharjeel Ahmad Khan
                    </h1>
                    <h2 className="text-base md:text-lg text-charcoal mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>
                      Full-Stack Web Developer & AI Integration Specialist
                    </h2>
                    <p className="text-sm text-charcoal" style={{ fontFamily: "'Times New Roman', serif" }}>
                      Lahore, Punjab 53701, Pakistan |{" "}
                      <a href="mailto:sharjeel.graphics.web@gmail.com" className="text-brand hover:underline">
                        sharjeel.graphics.web@gmail.com
                      </a>{" "}
                      | +92 343 6435979 |{" "}
                      <a href="https://www.linkedin.com/in/sharjeel-ahmad-remote-web-developer-2646361b7/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                        LinkedIn
                      </a>
                    </p>
                  </div>
                  <Image
                    src="/resumeimage.png"
                    alt="Sharjeel Ahmad Khan"
                    width={100}
                    height={120}
                    className="w-24 h-28 object-cover border-2 border-brand"
                  />
                </div>

                {/* Intro */}
                <p className="text-sm text-charcoal leading-relaxed mb-6" style={{ fontFamily: "'Times New Roman', serif" }}>
                  I specialize in building custom, high-converting web applications and eliminating operational data silos through advanced workflow automations. With hands-on experience architecting secure systems for platforms like Barie.ai and integrating over 250+ enterprise APIs using OAuth 2.0 and PKCE flows, I don&apos;t just write code—I build secure, scalable tech infrastructures that drive revenue. From RESTful and GraphQL API Design to complex n8n workflows, my focus is on delivering performance-driven results.
                </p>

                {/* Professional Summary */}
                <div className="border-t-2 border-b-2 border-brand py-2 my-4">
                  <h3 className="text-brand text-base" style={{ fontFamily: "'Times New Roman', serif" }}>
                    Professional Summary
                  </h3>
                </div>
                <p className="text-sm text-charcoal leading-relaxed mb-4" style={{ fontFamily: "'Times New Roman', serif" }}>
                  Full-Stack Web Developer & AI Integration Specialist | Lahore, Pakistan • Led backend architecture for Barie.ai (conversational AI platform); engineered integrations for 256+ enterprise APIs (Salesforce, Stripe, Google Workspace, Chargebee, Slack) • Implemented enterprise-grade security (OAuth 2.0, PKCE flows) and webhook event listeners; built Laravel MVC services for enterprise scalability • Built full-stack applications with React, Node.js, Express, MongoDB; implemented Context API, React Router, and Next.js server-side rendering • Delivered production-grade REST APIs, responsive UI components, and database optimization for high-performance applications • Architected enterprise-scale systems handling 256+ API integrations with zero data silos | Passion for building lightning-fast digital ecosystems and automating complex workflows.
                </p>

                {/* Areas of Expertise */}
                <div className="border-t-2 border-b-2 border-brand py-2 my-4">
                  <h3 className="text-brand text-base" style={{ fontFamily: "'Times New Roman', serif" }}>
                    Areas of Expertise
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-charcoal mb-4" style={{ fontFamily: "'Times New Roman', serif" }}>
                  <div className="expertise-item">• RESTful & GraphQL APIs</div>
                  <div className="expertise-item">• API Integrations (256+)</div>
                  <div className="expertise-item">• Tailwind CSS</div>
                  <div className="expertise-item">• Shopify</div>
                  <div className="expertise-item">• Laravel (MVC)</div>
                  <div className="expertise-item">• Mongoose</div>
                  <div className="expertise-item">• Stripe API</div>
                  <div className="expertise-item">• OAuth 2.0 & PKCE</div>
                  <div className="expertise-item">• Database Design</div>
                  <div className="expertise-item">• JavaScript (ES6+)</div>
                  <div className="expertise-item">• WordPress</div>
                  <div className="expertise-item">• Python</div>
                  <div className="expertise-item">• Git & GitHub</div>
                  <div className="expertise-item">• Salesforce</div>
                  <div className="expertise-item">• System Architecture</div>
                  <div className="expertise-item">• React</div>
                  <div className="expertise-item">• HTML5</div>
                  <div className="expertise-item">• Node.js</div>
                  <div className="expertise-item">• MongoDB</div>
                  <div className="expertise-item">• Docker</div>
                  <div className="expertise-item">• Google Workspace</div>
                  <div className="expertise-item">• n8n Automation</div>
                  <div className="expertise-item">• Next.js 14</div>
                  <div className="expertise-item">• CSS3</div>
                  <div className="expertise-item">• Express.js</div>
                  <div className="expertise-item">• MySQL</div>
                  <div className="expertise-item">• Postman</div>
                  <div className="expertise-item">• Firebase</div>
                </div>

                {/* Accomplishments */}
                <div className="border-t-2 border-b-2 border-brand py-2 my-4">
                  <h3 className="text-brand text-base" style={{ fontFamily: "'Times New Roman', serif" }}>
                    Accomplishments
                  </h3>
                </div>
                <ul className="text-sm text-charcoal list-disc pl-5 mb-4 space-y-1" style={{ fontFamily: "'Times New Roman', serif" }}>
                  <li>Architected the backend for Barie.ai and integrated 256+ enterprise APIs (Salesforce, Stripe, Google Workspace, Chargebee, Slack) to eliminate data silos and enable unified conversational workflows.</li>
                  <li>Designed and implemented OAuth 2.0 (PKCE) authentication flows and webhook event listeners, delivering enterprise-grade security for third-party integrations.</li>
                  <li>Built scalable Laravel MVC microservices and production-grade REST APIs; optimized MongoDB and MySQL schemas and queries for high-throughput environments.</li>
                  <li>Developed full-stack applications using React, Next.js (SSR), Context API and Tailwind—shipping responsive UI components and improving front-end performance and developer velocity.</li>
                  <li>Automated complex workflows with n8n and custom integrations, accelerating API onboarding and reducing manual operational overhead.</li>
                </ul>

                {/* Professional Experience */}
                <div className="border-t-2 border-b-2 border-brand py-2 my-4">
                  <h3 className="text-brand text-base" style={{ fontFamily: "'Times New Roman', serif" }}>
                    Professional Experience
                  </h3>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row justify-between text-sm font-bold text-charcoal mb-1" style={{ fontFamily: "'Times New Roman', serif" }}>
                    <span>Full-Stack & AI Integration Developer, Programmers Force</span>
                    <span>Jan 2026 to Jun 2026</span>
                  </div>
                  <div className="text-sm italic text-charcoal mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>Lahore, Pakistan</div>
                  <ul className="text-sm text-charcoal list-disc pl-5 space-y-1" style={{ fontFamily: "'Times New Roman', serif" }}>
                    <li>Led backend architecture for Barie.ai (conversational AI platform); engineered integrations for 256+ enterprise APIs (Salesforce, Stripe, Google Workspace, Chargebee, Slack)</li>
                    <li>Implemented enterprise-grade security (OAuth 2.0, PKCE flows) and webhook event listeners; built Laravel MVC services for enterprise scalability</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row justify-between text-sm font-bold text-charcoal mb-1" style={{ fontFamily: "'Times New Roman', serif" }}>
                    <span>MERN Stack Developer, Soft Enterprise & Logictech</span>
                    <span>2025 to 2026</span>
                  </div>
                  <div className="text-sm italic text-charcoal mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>Lahore, Pakistan</div>
                  <ul className="text-sm text-charcoal list-disc pl-5 space-y-1" style={{ fontFamily: "'Times New Roman', serif" }}>
                    <li>Built full-stack applications with React, Node.js, Express, MongoDB; implemented Context API, React Router, and Next.js server-side rendering</li>
                    <li>Delivered production-grade REST APIs, responsive UI components, and database optimization for high-performance applications</li>
                  </ul>
                </div>

                {/* Languages */}
                <div className="border-t-2 border-b-2 border-brand py-2 my-4">
                  <h3 className="text-brand text-base" style={{ fontFamily: "'Times New Roman', serif" }}>
                    Languages
                  </h3>
                </div>
                <p className="text-sm text-charcoal" style={{ fontFamily: "'Times New Roman', serif" }}>
                  English | Urdu | Punjabi
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
