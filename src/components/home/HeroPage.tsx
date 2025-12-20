"use client";
import { Button } from "../ui/button";
import { useCallback, useEffect, useRef, useState } from "react";

interface HeroPageProps {
  className?: string;
}

export default function HeroPage({ className }: HeroPageProps) {
  const [dWord, setDWord] = useState("amazing");
  const dWordRef = useRef<HTMLParagraphElement>(null);
  const dWords = [
    "amazing",
    "beautiful",
    "fun",
    "great",
    "awesome",
    "creative",
    "unique",
    "remarkable",
    "cool",
    "nice",
  ];
  const email = "txvicktor@gmail.com";
  const subject = "Web Development Inquiry";
  const body = `Hello,
    
  My name is Vicktor Teixeira and I am a web developer specializing in creating custom websites. I am available to develop the website you desire, meeting your specific needs.
    
    My skills include:
    - HTML, CSS, JavaScript
    - Frameworks like React and Next.js
    - Responsive design and SEO optimization
    
    I would like to discuss more details about your project and how I can help bring your vision to reality.
    
    I look forward to your response.
    
  Sincerely,
  Vicktor Teixeira.`;

  const getWords = useCallback(() => {
    return dWords;
  }, [dWords]);

  useEffect(() => {
    const interval = setInterval(() => {
      dWordRef.current?.classList.add("blur-md", "opacity-5");

      setTimeout(() => {
        const randomWord = Math.floor(Math.random() * getWords().length);
        setDWord(
          dWordRef.current?.innerText === dWords[randomWord]
            ? getWords()[randomWord]
            : getWords()[randomWord]
        );
        dWordRef.current?.classList.remove("blur-md", "opacity-5");
      }, 250);
    }, 5000);

    return () => clearInterval(interval);
  }, [getWords(), dWords]);

  return (
    <section
      className={`flex flex-col-reverse items-start justify-start w-full pt-[15vh] md:pt-[15vh] md:pb-[5vh] md:flex-row ${className}`}>
      <div className='flex flex-col align-center gap-12 -mt-16 md:p-0 items-start relative'>
        <article className='flex flex-col gap-6 items-start'>
          {/* <ProfilePic size={5} /> */}
          <div className='flex flex-col gap-3 text-start'>
            <p className='font-semibold text-2xl md:text-3xl'>
              Hi, my name is Vicktor
            </p>
            <p className='text-title text-left font-bold text-7xl sm:text-6xl lg:text-7xl 2xl:text-8xl text-wrap'>
              Let&apos;s create something <br />
              <span
                className='bg-gradient-to-r from-cyan-300 to-blue-500 pb-4 text-transparent bg-clip-text transition-all duration-500 drop-shadow-2xl drop-shadow-cyan-400/15 wrap-anywhere'
                ref={dWordRef}>
                {dWord}&nbsp;
              </span>
              together
            </p>
            {/* <h1 className="text-title text-bolder">
              Frontend engineer and computer science bachelor.
            </h1> */}
          </div>
        </article>
        <span className='flex flex-row justify-center items-center gap-6'>
          <Button
            className='hover:brightness-[1.2] hover:contrast-[0.8] text-base'
            title='Get in touch'
            onClick={() =>
              (window.location.href = `mailto:${email}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`)
            }
          />
          <Button
            href='/cv'
            className='hover:brightness-[1.2] hover:contrast-[0.8] text-base'
            title='View my CV'
            secondary
          />
        </span>
      </div>
      {/* <div className=""></div> */}
    </section>
  );
}
