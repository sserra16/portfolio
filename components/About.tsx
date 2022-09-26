/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { BigHead } from "@bigheads/core";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-y-20 md:space-y-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Sobre
      </h3>

      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className="w-2/3 space-y-4 flex flex-col items-center">
        <div className="w-40 hidden md:flex">
          <BigHead
            accessory="shades"
            body="chest"
            circleColor="blue"
            clothing="shirt"
            clothingColor="black"
            eyebrows="raised"
            eyes="happy"
            faceMask={false}
            faceMaskColor="black"
            facialHair="none"
            graphic="react"
            hair="afro"
            hairColor="black"
            hat="none"
            hatColor="white"
            lashes={false}
            lipColor="purple"
            mask
            mouth="open"
            skinTone="dark"
          />
        </div>
        <h4 className="text-4xl font-semibold text-center">
          Um pouco sobre{" "}
          <span className="underline decoration-[#1DA4AD]">mim</span>
        </h4>
        <p className="text-md text-justify">
          Olá!👋 Tenho 17 anos e sou desenvolvedor desde os 15, tendo iniciado
          na área com um pequeno livro sobre Python, onde me apaixonei por todo
          esse universo em que hoje me encontro totalmente apaixonado ❤️. Desde
          então tenho focado muito na WEB onde tenho estudado JavaScript
          (TypeScript) e C#, que é a linguagem a qual tive maior contato no
          mercado de trabalho. Além de tudo sou músico desde os 4 anos, tocando
          violino e piano tendo apresentado em vários lugares pelo Brasil.
          Atualmente estudo no COTEMIG colégio técnico de Informática.
        </p>
      </motion.div>
    </div>
  );
}
