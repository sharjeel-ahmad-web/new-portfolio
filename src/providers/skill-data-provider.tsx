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
      <div className="relative p-3 rounded-2xl bg-slate-800/60 border border-slate-700/40 backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/60 group-hover:bg-slate-800/90 group-hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)] cursor-default">
        <Image
          src={`/${folder}/${src}`}
          width={width}
          height={height}
          alt={name}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 border border-purple-500/40 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 shadow-lg">
          {name}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-900" />
        </div>
      </div>
    </motion.div>
  );
};
