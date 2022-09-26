import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center space-y-28">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiência
      </h3>

      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#1DA4AD] scrollbar-thin">
        <ExperienceCard title="Desenvolvedor .NET" subtitle="INFODESIGN" icons={["bg-c#", "bg-html", "bg-js", "bg-css"]} topics={["Montar API's em ASP.NET", "Fazer Apps windows forms consumindo API's esternas", "Construir páginas em Razor Pages", "Montar Webhook para clientes"]} />
        <ExperienceCard title="Freelancer" subtitle="Front-End" icons={["bg-react", "bg-html", "bg-js", "bg-ts", "bg-tailwindcss"]} topics={["Fazer landing pages para pequenas empresas", "Construir projetos para utilização no dia a dia como finanças pessoais"]} />
      </motion.div>
    </div>
  );
}

export default Experience;
