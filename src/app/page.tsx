import Footer from "@/components/pagemodels/Footer";
import HeroPage from "@/components/pagemodels/HeroPage";
import ProjectSection from "@/components/pagemodels/ProjectsSection";
import StackSection from "@/components/pagemodels/StackSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0 transition-all"
        style={{
          backgroundImage: "url('/static/images/bg.svg')",
          backgroundSize: "61rem",
          backgroundPosition: "var(--bg-pos)",
          opacity: "0.1",
        }}
      />
      <div className="relative z-1 w-full flex flex-col items-center justify-between">
        <HeroPage className="mt-16" />
        <StackSection />
        <ProjectSection className="pt-8" />
        <Footer />
      </div>
    </main>
  );
}
