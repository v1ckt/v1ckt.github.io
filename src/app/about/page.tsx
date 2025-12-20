import About from "@/components/about/About";

export default function Home() {
  return (
    <main className='overflow-visible'>
      <div className='relative w-full flex flex-col items-center justify-between gap-52 mt-16'>
        <About />
      </div>
    </main>
  );
}
