"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";

interface Friend {
  name: string;
  role: string;
  img: string;
  description: string;
  link: string;
}

const friends: Friend[] = [
  {
    name: "Sara",
    role: "Dev, Editor, Gamer",
    img: "/friends/karan.svg",
    description:
      "🔥 I am Sara. Pro Gamer person, BCA Student from 🇮🇳. I like doing funny things & I am a Super Rider.",
    link: "#",
  },
  {
    name: "Salman",
    role: "Designer & Artist",
    img: "/friends/harshit.svg",
    description:
      "🎨 Creative mind with passion for design. Loves sketching and UI/UX.",
    link: "#",
  },
  {
    name: "Aithsham ul huq",
    role: "Tech Enthusiast",
    img: "/friends/arpit.svg",
    description:
      "💻 Always exploring new tech. Passionate about building apps & solving problems.",
    link: "#",
  },
];

export const Friends = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-5xl mx-auto text-center ">
      <h2 className="text-3xl md:text-4xl font-bold text-cream mb-12" style={{ fontFamily: "'Alex Brush', cursive" }}>
        Friends Crew
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".friends-pagination",
        }}
        className="pb-12"
      >
        {friends.map((friend, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-4 px-4"
            >
              {/* Avatar */}
              <Image
                src={friend.img}
                alt={friend.name}
                width={120}
                height={120}
                className="border-4 border-brand"
              />

              {/* Name & Role */}
              <h3 className="text-xl font-semibold text-cream mt-4" style={{ fontFamily: "'Times New Roman', serif" }}>
                {friend.name}
              </h3>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "'Times New Roman', serif" }}>{friend.role}</p>

              {/* Description */}
              <div className="relative mt-2 max-w-md w-full mx-auto">
                <p className="bg-dark text-cream px-6 py-4 text-sm md:text-base leading-relaxed border border-cream/10" style={{ fontFamily: "'Times New Roman', serif" }}>
                  {friend.description}{" "}
                  <a
                    href={friend.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-cream font-semibold transition-all"
                  >
                    Know More..
                  </a>
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination dots container */}
      <div className="friends-pagination flex justify-center mt-6"></div>

      {/* Custom styles for dots */}
      <style jsx global>{`
        .friends-pagination .swiper-pagination-bullet {
          background: #555 !important;
          opacity: 1 !important;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
        }
        .friends-pagination .swiper-pagination-bullet-active {
          background: #fc4c00 !important;
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
};
