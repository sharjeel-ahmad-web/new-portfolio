"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Calendar, Mail } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export const AIAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        id: "greeting",
        role: "assistant",
        content:
          "👋 Hi! I'm Sharjeel's AI Assistant powered by Gemini. I have full knowledge of his portfolio - skills, projects, services, and background. What would you like to know?",
        timestamp: new Date(),
      };
      setMessages([greeting]);
    }
  }, [isOpen, messages.length]);

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

      await sendClientAlert(inputValue);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm having trouble connecting right now. Please try again or contact Sharjeel directly at chjiimy@gmail.com",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

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

  const handleScheduleMeeting = () => {
    window.open("https://calendly.com/chjiimy", "_blank");
  };

  return (
    <>
      {/* Chat Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
            }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ 
              duration: 0.4, 
              ease: "easeOut",
            }}
            className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-48px)] hidden md:block"
          >
            <motion.div
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut",
              }}
              className="bg-dark border border-cream/10 p-5 shadow-2xl"
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              <div className="flex items-center gap-2 mb-3 border-b border-cream/10 pb-2">
                <div className="w-2 h-2 bg-brand animate-pulse"></div>
                <span className="text-sm font-bold text-cream" style={{ fontFamily: "'Alex Brush', cursive" }}>
                  Storefront AI Assistant
                </span>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Hi! I can analyze your current store&apos;s speed or show you the latest Next.js case studies. What are you looking for?
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsOpen(true)}
                  className="text-xs font-semibold bg-brand text-dark px-3 py-1.5 hover:bg-cream transition-all"
                >
                  Check Portfolio
                </button>
                <button 
                  onClick={() => setIsOpen(true)}
                  className="text-xs font-semibold bg-dark border border-cream/10 text-cream px-3 py-1.5 hover:border-brand hover:text-brand transition-all"
                >
                  View Projects
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-brand text-dark transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-24px)]
              bg-dark border border-cream/10 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand p-4 text-dark">
              <h3 className="font-bold text-lg" style={{ fontFamily: "'Alex Brush', cursive" }}>{`🤖 Sharjeel's AI Assistant`}</h3>
              <p className="text-xs opacity-90" style={{ fontFamily: "'Times New Roman', serif" }}>
                Powered by Gemini AI - Full portfolio knowledge
              </p>
            </div>

            {/* Messages Container */}
            <div
              className="h-80 overflow-y-auto p-4 space-y-4 bg-dark"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-brand text-dark"
                        : "bg-dark border border-cream/10 text-gray-200"
                    }`}
                    style={{ fontFamily: "'Times New Roman', serif" }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-dark border border-cream/10 px-4 py-2">
                    <div className="flex gap-2">
                      <div
                        className="w-2 h-2 bg-brand animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-brand animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-brand animate-bounce"
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
              className="bg-dark border-t border-cream/10 p-3 space-y-2"
            >
              <div className="flex gap-2">
                <button
                  onClick={handleScheduleMeeting}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2
                    bg-dark border border-cream/10 text-xs text-cream hover:border-brand hover:bg-brand/10 transition-all"
                  style={{ fontFamily: "'Times New Roman', serif" }}
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Call
                </button>
                <button
                  onClick={() =>
                    (window.location.href = "mailto:chjiimy@gmail.com")
                  }
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2
                    bg-dark border border-cream/10 text-xs text-cream hover:border-brand hover:bg-brand/10 transition-all"
                  style={{ fontFamily: "'Times New Roman', serif" }}
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </button>
              </div>
            </div>

            {/* Input Area */}
            <div className="bg-dark border-t border-cream/10 p-3 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 bg-dark text-cream text-sm border border-cream/10 focus:border-brand outline-none placeholder-gray-500 transition-all"
                style={{ fontFamily: "'Times New Roman', serif" }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="p-2 bg-brand text-dark hover:bg-cream transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
