"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

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
      className="w-full py-16 px-6 md:px-12 max-w-6xl mx-auto"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Ready to Scale?
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Info */}
        <div className="flex flex-col gap-6 text-white relative">
          <h3 className="text-2xl font-semibold">{`Let's build your next digital ecosystem`}</h3>
          <p className="text-gray-400">
            Whether you need a lightning-fast e-commerce platform, enterprise API integrations, or intelligent workflow automation—I&apos;m ready to architect it.</p>
          
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-300">
              <span className="text-cyan-400 font-bold">📧</span>
              <a href="mailto:chjiimy@gmail.com" className="hover:text-cyan-400 transition">
                chjiimy@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <span className="text-purple-400 font-bold">🌍</span>
              Lahore, Pakistan (Remote)
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <span className="text-cyan-400 font-bold">💼</span>
              Full-time | Contract | Freelance
            </p>
          </div>
          
          <p className="text-gray-400 text-sm">
            {`Don't like forms? Reach out directly at `}
            <a
              href="mailto:pykinsu@outlook.com"
              className="underline underline-offset-2 decoration-yellow-400 hover:text-yellow-400 transition-colors"
            >
              Email
            </a>
            .
          </p>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              📧 <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:pykinsu@outlook.com"
                className="underline underline-offset-2 decoration-yellow-400 hover:text-yellow-400 transition-colors"
              >
                pykinsu@outlook.com
              </a>
            </li>
            <li>📍 <span className="font-medium">Location:</span> India</li>
          </ul>

          <Image
            src="/talking.png"
            alt="Talking"
            width={280}
            height={280}
            className="mt-6 mx-auto md:mx-0 select-none"
          />
        </div>

        {/* Right Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 text-white placeholder-gray-400 bg-transparent border-b border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 text-white placeholder-gray-400 bg-transparent border-b border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-3 text-white placeholder-gray-400 bg-transparent border-b border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-3 text-white placeholder-gray-400 bg-transparent border-b border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-3 text-white placeholder-gray-400 bg-transparent border-b border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 text-lg font-semibold text-yellow-400 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
