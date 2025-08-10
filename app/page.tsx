"use client"

import LogoMarquee from "@/components/motion/LogoMarquee";
import NavBar from "@/components/NavBar";
import AboutMe from "@/components/sections/AboutMe";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <div className="md:px-[50px] xl:px-[180px] px-3">
        <NavBar />
        <Hero />
        <LogoMarquee />
        <Projects />
        <AboutMe />
        <Services />
        <Process />
      </div>
      <Footer />
    </main>
  );
}
