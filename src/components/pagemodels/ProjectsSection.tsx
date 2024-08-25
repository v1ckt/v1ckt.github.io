import Clink from "../ui/clink";
import ProjectCard from "../ui/projectcard";
import { ToDoList, BoateAzul, PhotoShot } from "@images/projects";

interface ProjectSectionProps {
  className?: string;
}

export default function ProjectSection({ className }: ProjectSectionProps) {
  const projects = [
    {
      title: "To Do List",
      description:
        "A To Do list made using React. This project includes the possibility to create, delete and search for tasks wich allows the user to manage tasks. All the tasks are saved to the user's local machine.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/v1ckt/todo",
      live: "https://v1ckt.github.io/todo",
      images: [ToDoList.src],
    },
    {
      title: "Boate Azul",
      description:
        "This is an Event Management System, a comprehensive solution designed for a nightclub. Its primary focus is on enabling event organizers to seamlessly add, update, list, and delete upcoming events.",
      technologies: ["HTML", "CSS", "PHP", "Laravel", "MySQL"],
      github: "https://github.com/v1ckt/BoateAzul",
      live: "https://v1ckt.github.io/BoateAzulFirstLook/",
      images: [BoateAzul.src],
    },
    {
      title: "PhotoShot",
      description:
        "With PhotoShot, photographers can effortlessly share their photos and showcase the various edits and enhancements they've applied. Encouraging collaboration, inspiration, and community engagement among photography enthusiasts.",
      technologies: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/v1ckt/PhotoShot_Mobile",
      live: null,
      images: [PhotoShot.src],
    },
  ];
  return (
    <section
      className={
        `flex flex-col items-center justify-start px-6 md:px-24 bg-main-bg ` +
        className
      }
    >
      <div className="flex flex-col gap-0 items-end">
        <article className="flex flex-col gap-4">
          <h2 className="text-title">Featured Projects</h2>
          <h3>
            For my personal projects, I like to always keep a clean and
            minimalist user interface. That helps the user to find what they
            need in a straight way, with no unnecessary distractions. Sometimes
            less means more.
          </h3>
        </article>
            <Clink href="#" title="View more projects" arrow />
      </div>
      <ul className="flex flex-col gap-16 md:gap-32 pt-8 md:pt-160">
        {projects.map((p, index) => (
          <li key={index} className="">
            <ProjectCard
              title={p.title}
              description={p.description}
              technologies={p.technologies}
              github={p.github}
              live={p.live}
              images={p.images}
              width={p.technologies.includes("Flutter") ? "75%" : "50rem"}
              ltr={index % 2 === 0}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
