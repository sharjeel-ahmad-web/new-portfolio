"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="border border-brand/40 bg-brand/10 px-4 py-2 opacity-[0.9]"
      >
        <SparklesIcon className="text-brand mr-[10px] h-5 w-5" />
        <h1 className="text-brand text-[13px]" style={{ fontFamily: "'Times New Roman', serif" }}>
          I Loves To Code
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-cream font-medium mt-[10px] text-center mb-[15px]"
        style={{ fontFamily: "'Alex Brush', cursive" }}
      >
       Making My Skills Better Everyday.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[20px] text-gray-300 mb-10 mt-[10px] text-center"
        style={{ fontFamily: "'Times New Roman', serif" }}
      >
        Never miss a task, deadline or idea.
      </motion.div>
    </div>
  );
};
