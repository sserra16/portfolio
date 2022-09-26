/* eslint-disable @next/next/no-img-element */
import React from "react";
import Project from "./Project";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1DA4AD]">
        <Project project={{ title: "Tip Calculator", srcImg: "tipcalc.png" }}>
          O Tip Calculator foi um aplicativo desenvolvido para calcular
          gorjetas, sem funcionalidades avançadas porém foi o projeto gatilho
          para poder me apaixonar por javascript. O site calcula a gorjeta de
          acordo com o a quantidade de pessas, valor total e a porcentagem da
          gorjeta
        </Project>
        <Project project={{ title: "LetmeAsk", srcImg: "letmeask.png" }}>
          LetmeAsk foi um site feito para criar salas nas quais temos professores e
          estudantes de programação, nos quais tiram dúvidas e aprendem cada vez
          mais sobre esse universo incrível.
        </Project>
        <Project project={{ title: "NLWEsports", srcImg: "nlwesports.png" }}>
          NLWEsports foi outro site feito em um evento de programação da RocketSeat
          onde foi feito um site para se encontrar &quot;Duos&quot; nos jogos em que você mais gosta!
        </Project>
        <Project project={{ title: "Gordao", srcImg: "gordao.png" }}>
          Este foi um site para um projeto escolar, no qual tínhamos que fazer um site para &quot;montar&quot; um computador completo, mostrando todas as peças e os respectivos preços
        </Project>
        <Project project={{ title: "DevFinances", srcImg: "devfinances.png" }}>
          DevFinances foi o meu primeiro site funcional utilizando o LocalStorage como banco de dados para uma pequena aplicação que conta seus gastos, lucros e sua conta final no mês. 
        </Project>
      </div>

      <div className="w-full absolute top-[30%] bg-[#1DA4AD]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}
