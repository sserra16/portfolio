import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';

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

      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#1DA4AD" />
      </h1>
    </div>
  );
}
