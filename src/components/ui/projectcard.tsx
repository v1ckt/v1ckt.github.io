"use client";
import Image from "next/image";
import { Button } from "./button";
import Clink from "./clink";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

interface ProjectCardPRops {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github: string;
  live?: string | null;
  width?: string;
  ltr?: boolean;
}

export default function ProjectCard({
  title,
  description,
  images,
  technologies,
  github,
  live,
  width,
  ltr = false,
}: ProjectCardPRops) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`flex ${
        ltr === true ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
      } items-center justify-between gap-10 md:gap-16`}
    >
      <figure className="flex flex-row items-center justify-center relative w-full h-full">
        {images.map((image, index) => (
          <Image
            onClick={live ? () => setIsExpanded(!isExpanded) : undefined}
            key={index}
            src={image}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: width, height: "auto" }}
            className={`rounded-2xl drop-shadow-icon ${
              isExpanded
                ? "fixed top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] scale-[0.8] z-[10] transform"
                : ""
            } ${live ? "cursor-pointer" : ""}`}
          />
        ))}
        {isExpanded && live! && (
          <div
            className="w-full h-full fixed top-0 left-0 z-[999] backdrop-blur-lg
          bg-header-bg flex items-center justify-center transition-all"
          >
            <div
              className="fixed w-[70%] h-[90%] transition-alloverflow-hidden
            flex items-center justify-center flex-col gap-4"
            >
              <p className="text-title text-xl">{title}</p>
              <iframe
                src={live}
                className="w-full h-full rounded-2xl border-[1px] border-header-border-color drop-shadow-icon bg-main-bg"
              ></iframe>
              <span
                className="flex items-center justify-center gap-0.5 px-2 py-1 cursor-pointer rounded-full hover:bg-[#8b8b8b50]"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <RiCloseFill
                  className="size-[22px] cursor-pointer"
                  color="var(--text-title)"
                />
                <p className="text-title">Close</p>
              </span>
            </div>
          </div>
        )}
      </figure>
      <div className="flex flex-col items-left justify-start gap-8 px-0">
        <span className="flex flex-col items-left gap-2">
          {/* text-title */}
          <article className="flex flex-col gap-3 max-w-screen-lg">
            <h3 className="text-title font-bold">{title}</h3>
            <h5 className="text-text">{description}</h5>
          </article>
          {/* markers */}
          <span className="flex flex-row gap-2 items-left justify-left items-center">
            {/* markers */}
            {technologies.map((t, index) => (
              <div
                className="bg-project-marker px-4 py-1 text-marker-text rounded-full"
                key={index}
              >
                <p className="font-semibold text-sm">{t}</p>
              </div>
            ))}
          </span>
        </span>
        {/* buttons */}
        <div className="flex flex-row-gap-4 items-center justify-left gap-4">
          <Button
            title="Github Repo"
            href={github}
            fontSize="1.125rem"
            className="px-[18px] py-[10px]"
          />
          {live && (
            <Clink
              href={live}
              title="Live Site"
              className="text-lg hover:brightness-[1.2] hover:contrast-[0.8]"
            />
          )}
        </div>
      </div>
    </div>
  );
}
