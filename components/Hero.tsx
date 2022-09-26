/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Olá! Meu nome é Samuel Serra",
      "<DesenvolvedorWeb />",
      "Desenvolvedor.cs",
    ],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="relative rounded-full h-32 w-32 mx-autp object-cover"
        src={"https://github.com/sserra16.png"}
        alt="me"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#1DA4AD" />
        </h1>

        <div className="pt-5">
          <Link href={"#about"}>
            <button className="heroButton">Sobre</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experiência</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Habilidades</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">Projetos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
