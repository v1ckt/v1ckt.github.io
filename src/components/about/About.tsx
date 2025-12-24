"use client";
import { aboutMeImages } from "@images/aboutme";
import Image from "next/image";
import { useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Footer from "../home/Footer";

interface aboutProps {
  className?: string;
}

export default function About({ className }: aboutProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const calculateAge = (birthday: Date) => {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const age = calculateAge(new Date(2002, 11, 31));
  const images = aboutMeImages;

  const scroll = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: offset,
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={
        `flex flex-col items-start justify-start text-center w-full gap-6 bg-main-bg pb-24 ` +
        className
      }>
      <h2 className='text-title'>About me</h2>
      <div className='flex flex-col items-stretch justify-between gap-6 overflow-auto w-full'>
        <div className='flex flex-col lg:flex-row-reverse items-start lg:items-start justify-center gap-12 lg:gap-20'>
          <div className='p-4 bg-header-bg rounded-[1.8rem] border-[1px] border-header-border-color flex flex-col items-start gap-5 lg:h-[70dvh] lg:w-[100vw]'>
            <div className='flex flex-row items-center justify-between w-full'>
              <h5 className='font-semibold'>Gallery</h5>
              <div className='flex flex-row items-center justify-end'>
                <SlArrowLeft
                  size={36}
                  className='px-2 text-zinc-400 cursor-pointer rotate-0 lg:rotate-90'
                  onClick={() => scroll(-200)}
                />
                <SlArrowRight
                  size={36}
                  className='px-2 text-zinc-400 cursor-pointer rotate-0 lg:rotate-90'
                  onClick={() => scroll(200)}
                />
              </div>
            </div>
            <div
              className='flex flex-row lg:flex-col items-stretch justify-start gap-4 overflow-auto scroll-1 snap-mandatory snap-x lg:snap-y'
              ref={carouselRef}
              style={{ scrollbarWidth: "none" }}>
              {images.map((item, index) => (
                <Image
                  key={index}
                  src={item.src}
                  width={0}
                  height={0}
                  alt=''
                  className='snap-center w-auto h-50 lg:-w-50 lg:h-auto object-contain rounded-2xl'
                />
              ))}
            </div>
          </div>
          <article className='prose text-justify indent-10 flex flex-col gap-3'>
            <h3 className='text-title indent-0 mt-4'>Who am I</h3>
            <h5 className=''>
              Hello! My name is Vicktor Teixeira. I&apos;m {age} years old and
              I&apos;m from a town in the state of Maranhão, Brazil.
            </h5>
            <h5>
              I have a cat named Freddy — he&apos;s{" "}
              {calculateAge(new Date(2016, 10, 23))} years old. I love taking
              photos of him almost every day. I am also a big fan of &quot;tiny
              nature&quot;. I enjoy photographing jumping spiders (because they
              are colorful and cute), butterflies, dragonflies, and almost any
              little insect I find wherever I go.
            </h5>
            <h5>
              I&apos;m also a big fan of coffee (which officially makes me a
              proper programmer, lol). There is almost always a coffee mug on my
              desk whether I&apos;m gaming, studying, or programming.
            </h5>

            <h3 className='text-title indent-0 mt-4'>Professional Path</h3>
            <h5>
              My passion for technology began when I was a child. I remember
              going to my aunt&apos;s house almost every single day to play{" "}
              <b>Plants vs. Zombies</b>. A few years later, I got my first
              computer and dove into the amazing world of technology.
            </h5>
            <h5>
              When it came time for the first big step of my life—choosing a
              university—the path was clear. I wanted a career where I could
              work with computers. After researching my options, I discovered
              Computer Science and enrolled at the Instituto Federal de
              Educação, Ciência e Tecnologia do Maranhão (IFMA). I had to choose
              between staying in my hometown or leaving my whole life behind to
              live on my own in a new city; the choice was clear. That was the
              true first step in building my career in the technology field.
            </h5>
            <h5>
              At university, I learned a great deal about mathematics, logic,
              hardware, software, and programming. Now that I have finally
              graduated, I can build websites, mobile applications, systems, and
              much more.
            </h5>
          </article>
        </div>
      </div>
    </section>
  );
}
