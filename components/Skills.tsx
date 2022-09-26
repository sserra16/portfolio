/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-8 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Habilidades
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Tecnologias que estou trabalhando atualmente
      </h3>

      <div className='grid grid-cols-3 mt-20 md:mt-0 md:grid-cols-4  gap-5'>
        <Skill directionLeft src='bg-html' prc="100%" />
        <Skill directionLeft src="bg-css" prc="90%" />
        <Skill directionLeft src="bg-js" prc="80%" />
        <Skill directionLeft src="bg-ts" prc="80%" />
        <Skill src="bg-react" prc="80%" />
        <Skill src="bg-node" prc="90%" />
        <Skill src="bg-next" prc="70%" />
        <Skill src="bg-nest" prc="70%" />
        <Skill directionLeft src="bg-mysql" prc="70%" />
        <Skill directionLeft src="bg-tailwindcss" prc="100%" />
        <Skill directionLeft src="bg-c#" prc="80%" />
        <Skill directionLeft src="bg-docker" prc="50%" />
      </div>
    </motion.div>
  );
}
