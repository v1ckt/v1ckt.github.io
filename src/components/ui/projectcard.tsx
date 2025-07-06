"use client";
import Image from "next/image";
import { Button } from "./button";
import Clink from "./clink";
import { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { FaExpand } from "react-icons/fa";
import { MdSettingsBackupRestore } from "react-icons/md";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

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
  ltr = false,
}: ProjectCardPRops) {
  const [isLiveOpen, setIsLiveOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [carouselItem, setCarouselItem] = useState(0);

  const prevItem = () => {
    const isFirstItem = carouselItem === 0;
    const newIndex = isFirstItem ? images.length - 1 : carouselItem - 1;
    setCarouselItem(newIndex);
  };
  const nextItem = () => {
    const isLastItem = carouselItem === images.length - 1;
    const newIndex = isLastItem ? 0 : carouselItem + 1;
    setCarouselItem(newIndex);
  };
  const goToItem = (index: number) => {
    setCarouselItem(index);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLiveOpen) {
      setAnimationClass("animate-windowOpen");
      timer = setTimeout(() => setShowIframe(true), 1000);
    } else {
      setShowIframe(false);
      setIsLoading(true);
    }

    if (isExpanded) {
      setAnimationClass("animate-windowOpen");
    } else {
      setCarouselItem(0);
    }

    return () => clearTimeout(timer);
  }, [isLiveOpen, isExpanded]);

  return (
    <div
      className={`flex ${
        ltr === true ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
      } items-center justify-evenly gap-10 md:gap-16`}
      style={{ maxWidth: "85vw" }}
    >
      <figure
        className="flex flex-row items-center justify-center relative w-full h-full group rounded-2xl shadow-window overflow-hidden"
        style={{
          width: "auto",
          maxWidth: "100%",
          height: "auto",
        }}
      >
        {images[0] && (
          <div
            style={{ width: "auto", height: "auto" }}
            className="flex justify-center"
          >
            <Image
              className="rounded-2xl"
              src={images[0]}
              alt={title}
              width={0}
              height={0}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "79vh",
              }}
            />
            <p
              onClick={() => setIsExpanded(!isLiveOpen)}
              className="absolute hidden md:flex w-max -top-10 group-hover:top-[8px] right-[8px] cursor-pointer bg-project-marker text-project-marker-text p-2 rounded-full text-sm transition-all shadow-icon"
            >
              <FaExpand />
            </p>
            {live && (
              <p
                onClick={() => setIsLiveOpen(!isLiveOpen)}
                className="absolute hidden md:flex w-max -bottom-10 group-hover:bottom-[5%] left-[50%] translate-x-[-50%] cursor-pointer bg-project-marker text-project-marker-text px-4 py-2 rounded-full text-sm transition-all shadow-icon"
              >
                Click here to preview
              </p>
            )}
          </div>
        )}
        {isLiveOpen && live! && (
          <div
            className="w-full h-full fixed top-0 left-0 z-50 backdrop-blur-lg
          bg-header-bg flex items-center justify-center"
          >
            <div
              className="fixed w-[90%] h-[70%] md:w-[70%] md:h-[95%] transition-all
            flex items-center justify-center flex-col gap-4"
            >
              <h4 className="font-bold">{title}</h4>
              {/* open iframe when animations conclude */}
              <div
                className={`relative border-[1px] w-full h-full border-header-border-color shadow-window bg-main-bg rounded-2xl ${animationClass}`}
              >
                {isLoading && (
                  <h2
                    className={`absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%]`}
                  >
                    Loading...
                  </h2>
                )}
                {showIframe && (
                  <iframe
                    src={live}
                    title={title + ` Live Preview`}
                    sandbox="allow-scripts allow-same-origin"
                    className="rounded-2xl"
                    width={"100%"}
                    height={"100%"}
                    loading="lazy"
                    onLoad={() => {
                      setAnimationClass("animate-windowClose");
                      setIsLoading(false);
                    }}
                  ></iframe>
                )}
              </div>
              <span
                className="flex items-center justify-center gap-0.5 px-2 py-1 cursor-pointer rounded-full hover:bg-[#8b8b8b30] transition-all pr-3.5"
                onClick={() => setIsLiveOpen(!isLiveOpen)}
              >
                <RiCloseFill
                  className="size-[22px] cursor-pointer"
                  color="var(--text-title)"
                />
                <p className="text-text">Close</p>
              </span>
            </div>
          </div>
        )}
      </figure>
      {isExpanded && (
        <div
          className="w-full h-full fixed top-0 left-0 z-50 backdrop-blur-lg
          bg-header-bg flex items-center justify-center"
        >
          <div
            className="fixed max-w-[90%] max-h-[70%] md:max-w-[70%] md:max-h-[95%] w-full h-full transition-all
            flex items-center justify-center flex-col gap-4 overflow-hidden"
          >
            <h4 className="font-bold">{title}</h4>
            {/* open iframe when animations conclude */}
            {/* <div
              className={`relative border-[1px] w-full h-full border-header-border-color shadow-window bg-main-bg rounded-2xl ${animationClass}`}
            > */}
            <div
              className={`${animationClass} flex flex-col items-center justify-start gap-2 relative rounded-2xl`}
            >
              <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{
                  maxHeight: "75vh",
                  maxWidth: "80vw",
                  transform: `translateX(-${carouselItem * 100}%)`,
                }}
              >
                {images.map((image, index) => (
                  <div
                    className="flex w-full h-full flex-shrink-0 items-center justify-center"
                    key={index}
                  >
                    <Image
                      className={`rounded-2xl transition-all duration-350 ease-in-out ${
                        carouselItem === index
                          ? "scale-100"
                          : "scale-75 brightness-50 blur-sm"
                      } w-auto h-auto`}
                      src={image}
                      alt={`${title} - Image ${carouselItem + 1}`}
                      width={0}
                      height={0}
                      style={{
                        width: "auto",
                        height: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="w-auto h-auto flex flex-row gap-2">
                {images.length > 1 && (
                  <div className="flex flex-row items-center justify-center gap-2">
                    <SlArrowLeft
                      onClick={prevItem}
                      size={28}
                      className="px-2 text-zinc-400 cursor-pointer"
                    />
                    {images.map((_, index) => (
                      <span
                        className={`h-3 rounded-full transition-all duration-300 ${
                          carouselItem === index
                            ? "bg-zinc-400 w-5"
                            : "bg-zinc-400/45 w-3"
                        } cursor-pointer`}
                        key={index}
                        onClick={() => goToItem(index)}
                      />
                    ))}
                    <SlArrowRight
                      onClick={nextItem}
                      size={28}
                      className="px-2 text-zinc-400 cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </div>
            {/* </div> */}
            <span
              className="flex items-center justify-center gap-0.5 px-2 py-1 cursor-pointer rounded-full hover:bg-[#8b8b8b30] transition-all pr-3.5"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <RiCloseFill
                className="size-[22px] cursor-pointer"
                color="var(--text-title)"
              />
              <p className="text-text">Close</p>
            </span>
          </div>
        </div>
      )}
      <div
        className="flex flex-col items-left justify-start gap-6 px-0 max-w-xl"
        // style={{ maxWidth: "50vw" }}
      >
        <span className="flex flex-col items-left gap-4">
          {/* text-title */}
          <article className="flex flex-col gap-3 max-w-screen-lg">
            <h4 className="text-title font-bold">{title}</h4>
            <h5 className="text-text">{description}</h5>
          </article>
          {/* markers */}
          <span className="flex flex-row gap-2.5 items-left justify-left items-center">
            {/* markers */}
            {technologies.map((t, index) => (
              <div
                className="bg-project-marker px-4 py-1 text-marker-text rounded-full"
                key={index}
              >
                <p className="font-semibold text-base md:text-sm">{t}</p>
              </div>
            ))}
          </span>
        </span>
        {/* buttons */}
        {github && (
          <div className="flex flex-row-gap-4 items-center justify-left gap-4">
            <Button title="Github Repo" href={github} />
            {live && (
              <Clink
                href={live}
                title="Live Site"
                className="text-lg hover:brightness-[1.2] hover:contrast-[0.8]"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
