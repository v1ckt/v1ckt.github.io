"use client";
import Link from "next/link";
import ProfilePic from "../header/profilepic";
import { Button } from "../ui/button";
import { IoIosArrowForward, IoIosMail } from "react-icons/io";

interface HeroPageProps {
  className?: string;
}

export default function HeroPage({ className }: HeroPageProps) {
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
  return (
    <section
      style={{ height: "calc(100vh - 4rem)" }}
      className={
        `flex flex-col-reverse items-center justify-evenly
      md:justify-between w-full px-6 md:px-24 md:flex-row
      bg-gradient-to-t from-[transparent] to-80% to-main-bg
      md:bg-gradient-to-r ` + className
      }
    >
      <div className="flex flex-col align-start gap-9">
        <article className="flex flex-col gap-6 items-center md:items-start">
          <ProfilePic size={6} />
          <div className="flex flex-col gap-2 text-center md:text-start">
            <h1 className="text-title">Hello, I&apos;m Vicktor Teixeira</h1>
            <h3 className="lg:max-w-[50vmax]">
              Front-end web developer and computer science bachelor.
            </h3>
          </div>
        </article>
        <span className="flex flex-row  justify-center items-center gap-6 md:justify-start">
          <Button
            className="group overflow-hidden relative"
            fontSize="1.25rem"
            onClick={() =>
              (window.location.href = `mailto:${email}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`)
            }
          >
            <span className="inline-flex items-center justify-center absolute text-2xl -left-10 group-hover:translate-x-10 group-hover:w-full transition-all duration-200">
              <IoIosMail />
              <IoIosArrowForward className="text-base" />
            </span>
            <p className="text-[1.25rem] group-hover:translate-x-[130%] transition-all duration-200">
              Get in touch
            </p>
          </Button>
          <Link
            href="/cv"
            className="hover:brightness-[1.2] hover:contrast-[0.8]"
          >
            <p className="text-xl text-accent">View CV</p>
          </Link>
        </span>
      </div>
      {/* <div className=""></div> */}
      <div className="absolute top-[85vh] flex flex-col items-center gap-2 md:hidden">
        <p>Scroll down</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
