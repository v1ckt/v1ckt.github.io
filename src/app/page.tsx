import Header from "@/components/header/header";
import Footer from "@/components/pagemodels/Footer";
import HeroPage from "@/components/pagemodels/HeroPage";
import ProjectSection from "@/components/pagemodels/ProjectsSection";
import StackSection from "@/components/pagemodels/StackSection";
import WhatIDo from "@/components/pagemodels/WhatIDo";

export default function Home() {
  return (
    <main className='overflow-visible'>
      <div className='relative w-full flex flex-col items-center justify-between gap-16'>
        <div
          className='absolute -z-10 left-[50%] translate-x-[-50%] inset-0 w-screen transition-none mt-16 opacity-[.05] to-main-bg pointer-events-none'
          style={{
            backgroundImage: "url('/static/images/bg.svg')",
            backgroundSize: "59rem",
            backgroundPosition: "var(--bg-pos)",
          }}
        />
        <div></div>
        <HeroPage />
        <WhatIDo />
        <ProjectSection />
        <StackSection />
        <Footer />
      </div>
    </main>
  );
}
