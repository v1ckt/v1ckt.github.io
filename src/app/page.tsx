import Header from "@/components/header/header";
import Footer from "@/components/home/Footer";
import HeroPage from "@/components/home/HeroPage";
import ProjectSection from "@/components/home/ProjectsSection";
import StackSection from "@/components/home/StackSection";
import WhatIDo from "@/components/home/WhatIDo";

export default function Home() {
  return (
    <main className='overflow-visible'>
      <div className='relative w-full flex flex-col items-center justify-between gap-52'>
        <HeroPage />
        <WhatIDo />
        <ProjectSection />
        <StackSection />
        <Footer />
      </div>
    </main>
  );
}
