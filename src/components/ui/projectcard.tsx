import Image from "next/image";
import { Button } from "./button";

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
  width = "100%",
  ltr = false,
}: ProjectCardPRops) {
  return (
    <div
      className={`flex ${
        ltr === true ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
      } items-center justify-between gap-10 md:gap-16`}
    >
      <div className="flex flex-row items-center justify-center relative w-full h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: width, height: "auto" }}
            className="rounded-2xl drop-shadow-icon"
          />
        ))}
      </div>
      <div className="flex flex-col items-left justify-start gap-8 px-0">
        <div className="flex flex-col items-left gap-2">
          {/* text-title */}
          <div className="flex flex-col gap-3 max-w-screen-lg">
            <h3 className="text-title font-bold">{title}</h3>
            <h5 className="text-text">{description}</h5>
          </div>
          {/* markers */}
          <div className="flex flex-row gap-2 items-left justify-left items-center">
            {/* markers */}
            {technologies.map((t, index) => (
              <div
                className="bg-project-marker px-4 py-1 text-marker-text rounded-full"
                key={index}
              >
                <p className="font-semibold text-sm">{t}</p>
              </div>
            ))}
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-row-gap-4 items-center justify-left">
          <Button
            title="Github Repo"
            href={github}
            fontSize="1.125rem"
            className="px-[18px] py-[10px]"
          />
          {live && (
            <Button title="Live Site" href={live} fontSize="1.125rem" secondary />
          )}
        </div>
      </div>
    </div>
  );
}
