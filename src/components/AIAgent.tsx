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

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize greeting
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
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl
          bg-gradient-to-r from-purple-600 to-cyan-500 hover:shadow-purple-500/50
          text-white transition-all duration-300"
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
              bg-slate-900 border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-4 text-white">
              <h3 className="font-bold text-lg">{`🤖 Sharjeel's AI Assistant`}</h3>
              <p className="text-xs opacity-90">
                Powered by Gemini AI - Full portfolio knowledge
              </p>
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
                        ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
                        : "bg-slate-800 text-gray-200 border border-purple-500/30"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-purple-500/30 px-4 py-2 rounded-lg">
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
                <button
                  onClick={handleScheduleMeeting}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2
                    bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg
                    border border-cyan-500/30 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Call
                </button>
                <button
                  onClick={() =>
                    (window.location.href = "mailto:chjiimy@gmail.com")
                  }
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2
                    bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg
                    border border-purple-500/30 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </button>
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
                  border border-purple-500/30 focus:border-cyan-500 outline-none
                  placeholder-gray-500 transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="p-2 bg-gradient-to-r from-purple-600 to-cyan-500
                  text-white rounded-lg hover:shadow-lg disabled:opacity-50
                  transition-all"
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
