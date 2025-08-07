import LogoMarquee from "@/components/LogoMarquee";
import NavBar from "@/components/NavBar";
import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <LogoMarquee />
      <Projects />
      <AboutMe />
      <div className="min-h-dvh flex-center gap-4 bg-green-300">test</div>
      <div className="min-h-dvh flex-center gap-4 bg-red-300">page</div>
      <div className="min-h-dvh flex-center gap-4 bg-blue-300">scroll</div>
    </main>
  );
}
