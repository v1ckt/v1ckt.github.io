import Footer from "@/components/pagemodels/Footer";
import HeroPage from "@/components/pagemodels/HeroPage";
import ProjectSection from "@/components/pagemodels/ProjectsSection";
import StackSection from "@/components/pagemodels/StackSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div
        className="absolute inset-0 transition-none mt-16"
        style={{
          backgroundImage: "url('/static/images/bg.svg')",
          backgroundSize: "59rem",
          backgroundPosition: "var(--bg-pos)",
          opacity: "0.1",
        }}
      />
      <div className="relative w-full flex flex-col items-center justify-between">
        <HeroPage className="mt-16" />
        <StackSection className="mt-8" />
        <ProjectSection className="pt-16" />
        <Footer />
      </div>
    </main>
  );
}
