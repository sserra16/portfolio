import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  src: string;
  prc: string;
};

export default function Skill({ directionLeft, src, prc }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`rounded-full border border-gray-500 w-24 h-24 
        group-hover:grayscale transition duration-300 ease-in-out ${src} bg-cover`}>
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">{prc}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
