import LogoMarquee from "@/components/LogoMarquee";
import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";
import Hero from "@/components/sections/Hero";
import { projects } from "@/constants/projects";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />

      <LogoMarquee />

      <div className="py-10 grid lg:grid-cols-2 gap-6 grid-cols-1">
        {projects.map(({ title, description, src, year }, index) => (
          <ProjectCard
            key={index}
            title={title}
            description={description}
            src={src}
            year={year}
          />
        ))}
      </div>

      <div className="min-h-dvh flex-center gap-4 bg-green-300">test</div>
      <div className="min-h-dvh flex-center gap-4 bg-red-300">page</div>
      <div className="min-h-dvh flex-center gap-4 bg-blue-300">scroll</div>
    </main>
  );
}
