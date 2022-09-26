/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="bg-[#191919] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1DA4AD]">
      <Head>
        <title>Samuel Serra | Portfolio</title>
        <link rel="shortcut icon" href="Logo.png" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href={"#hero"}>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <div className="h-12 w-14 bg-white/10 rounded-full flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer">
              <img
                className="h-14 w-14 rounded-full filter grayscale hover:grayscale-0"
                src="Logo.png"
                alt=""
              />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
