"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
  folder?: string;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
  folder = "skills",
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.08;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.4 }}
      whileHover={{ scale: 1.15, y: -6 }}
      className="relative group"
    >
      <div className="relative p-3 bg-cream border border-brand/20 transition-all duration-300 group-hover:border-brand group-hover:bg-cream/90 cursor-default">
        <Image
          src={`/${folder}/${src}`}
          width={width}
          height={height}
          alt={name}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-dark border border-brand/40 text-xs text-cream whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
          {name}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-dark" />
        </div>
      </div>
    </motion.div>
  );
};
