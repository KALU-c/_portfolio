import LogoMarquee from "@/components/LogoMarquee";
import NavBar from "@/components/NavBar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="pt-[120px]">
        <Hero />

        <LogoMarquee />
      </div>

      <div className="min-h-dvh flex-center gap-4">test</div>
      <div className="min-h-dvh flex-center gap-4">page</div>
      <div className="min-h-dvh flex-center gap-4">scroll</div>
    </main>
  );
}
