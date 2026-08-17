"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Calendar, Mail, Bot } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ServiceData {
  type: "portfolio" | "skills" | "projects" | "services" | "contact";
  content: string;
}

export const AIAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Portfolio knowledge base (fallback when Gemini is unavailable)
  const portfolioData: ServiceData[] = [
    {
      type: "portfolio",
      content:
        "I'm Sharjeel Ahmad, a Remote Web Developer & AI Integration Specialist from Lahore, Pakistan. I help e-commerce brands scale with custom Next.js/MERN applications and n8n workflow automations.",
    },
    {
      type: "skills",
      content:
        "Core Skills: RESTful & GraphQL API Design, Error Handling, System Logging, n8n Workflows. Frontend: React, Next.js 14, Tailwind, Shopify, WordPress. Backend: Node.js, Express, MongoDB (MERN), Laravel, Python.",
    },
    {
      type: "services",
      content:
        "Services: Custom web application development, Enterprise API integrations (Stripe, Salesforce), n8n workflow automation, System architecture & design, Database optimization, Real-time inventory management.",
    },
    {
      type: "projects",
      content:
        "Recent Projects: E-commerce Platform with Real-time Inventory, AI-Powered CRM with n8n Automation, Stripe Payment Integration & Billing Dashboard.",
    },
    {
      type: "contact",
      content:
        "You can reach me at chjiimy@gmail.com or book a consultation call. I'm available for freelance, contract, and full-time remote positions.",
    },
  ];

  const searchKnowledgeBase = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (
      lowerQuery.includes("skill") ||
      lowerQuery.includes("technology") ||
      lowerQuery.includes("stack")
    ) {
      return (
        portfolioData.find((d) => d.type === "skills")?.content ||
        "I work with React, Node.js, Next.js, MongoDB, and more!"
      );
    }

    if (
      lowerQuery.includes("project") ||
      lowerQuery.includes("work") ||
      lowerQuery.includes("portfolio")
    ) {
      return (
        portfolioData.find((d) => d.type === "projects")?.content ||
        "Check out my recent projects on GitHub!"
      );
    }

    if (
      lowerQuery.includes("service") ||
      lowerQuery.includes("build") ||
      lowerQuery.includes("develop") ||
      lowerQuery.includes("api")
    ) {
      return (
        portfolioData.find((d) => d.type === "services")?.content ||
        "I specialize in custom web development and API integrations!"
      );
    }

    if (
      lowerQuery.includes("contact") ||
      lowerQuery.includes("email") ||
      lowerQuery.includes("call") ||
      lowerQuery.includes("meeting")
    ) {
      return (
        portfolioData.find((d) => d.type === "contact")?.content ||
        "You can email me at chjiimy@gmail.com or book a call!"
      );
    }

    if (
      lowerQuery.includes("who") ||
      lowerQuery.includes("about") ||
      lowerQuery.includes("introduce")
    ) {
      return (
        portfolioData.find((d) => d.type === "portfolio")?.content ||
        "I'm a full-stack developer specialized in MERN and Next.js!"
      );
    }

    return "I can help with questions about my skills, projects, services, or how to get in touch. What would you like to know?";
  };

  // Initialize greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        id: "greeting",
        role: "assistant",
        content:
          "👋 Hi! I'm Sharjeel's AI Assistant. Ask me anything about his skills, projects, services, or how to get in touch!",
        timestamp: new Date(),
      };
      setMessages([greeting]);
    }
  }, [isOpen, messages.length]);

  // Handle sending message
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message || data.error || "I'm sorry, I couldn't process your request. Please try again.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Send email alert to Sharjeel
      await sendClientAlert(inputValue);
    } catch (error) {
      const fallbackResponse = searchKnowledgeBase(inputValue);

      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `⚠️ Gemini is temporarily unavailable. Here's what I can tell you:\n\n${fallbackResponse}`,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Send email alert when client interacts
  const sendClientAlert = async (clientMessage: string) => {
    try {
      await fetch("/api/send-alert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientMessage,
          senderEmail: "chjiimy@gmail.com",
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.log("Email alert queued locally");
    }
  };

  // Schedule meeting handler
  const handleScheduleMeeting = () => {
    window.open("https://calendly.com/sharjeel", "_blank");
  };

  return (
    <>
      {/* Floating Button with Tooltip */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Tooltip / Label */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-16 right-0 mb-2 whitespace-nowrap"
            >
              <div className="relative">
                <div className="bg-slate-900/95 backdrop-blur-md text-white text-sm px-4 py-2 rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                  <span className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-cyan-400" />
                    <span className="font-medium">Ask AI Assistant</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-cyan-400">Online</span>
                  </span>
                </div>
                <div className="absolute -bottom-1 right-6 w-2 h-2 bg-slate-900/95 border-r border-b border-purple-500/30 rotate-45" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing Ring Animation */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 1.4, 1.4, 1],
              opacity: [0.5, 0, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-50" />
          </motion.div>
        )}

        {/* Main Button */}
        <motion.button
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          onMouseEnter={() => !isOpen && setShowTooltip(true)}
          className="relative p-4 rounded-full shadow-2xl
            bg-gradient-to-r from-purple-600 to-cyan-500 
            hover:shadow-purple-500/50
            text-white transition-all duration-300
            border-2 border-white/20"
        >
          {/* Notification Dot */}
          {!isOpen && (
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full border-2 border-slate-900"
            >
              <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75" />
            </motion.div>
          )}

          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-24px)] 
              bg-slate-900 border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-purple-600 to-cyan-500 p-4 text-white overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-700" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{`Sharjeel's AI Assistant`}</h3>
                    <p className="text-xs opacity-90 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      Online • 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div
              className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-950
              scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-slate-900"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-br-none"
                        : "bg-slate-800 text-gray-200 border border-purple-500/30 rounded-bl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-purple-500/30 px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex gap-2">
                      <div
                        className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Action Buttons */}
            <div
              className="bg-slate-900 border-t border-purple-500/30 p-3 space-y-2"
            >
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleScheduleMeeting}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5
                    bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg
                    border border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20
                    transition-all group"
                >
                  <Calendar className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Schedule Call</span>
                    <span className="text-[10px] text-gray-400 group-hover:text-cyan-300">Book a consultation</span>
                  </div>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    (window.location.href = "mailto:chjiimy@gmail.com")
                  }
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5
                    bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg
                    border border-purple-500/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20
                    transition-all group"
                >
                  <Mail className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Email Me</span>
                    <span className="text-[10px] text-gray-400 group-hover:text-purple-300">chjiimy@gmail.com</span>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Input Area */}
            <div className="bg-slate-900 border-t border-purple-500/30 p-3 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg
                  border border-purple-500/30 focus:border-cyan-500 focus:shadow-lg focus:shadow-cyan-500/20
                  outline-none placeholder-gray-500 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="p-2 bg-gradient-to-r from-purple-600 to-cyan-500
                  text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Send className="w-4 h-4 relative z-10" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
