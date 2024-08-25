import { useEffect, useState } from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";

interface MenuProps {
  state?: "Home" | "About" | "Blog" | "Skills" | "Projects";
  className?: string;
  fn?: () => void;
  isOpen: boolean;
}

export default function Menu({
  state: page,
  className,
  fn,
  isOpen,
}: MenuProps) {
  const [title, setTitle] = useState(page);
  const options = ["Home", "About", "Blog", "Skills", "Projects"];

  useEffect(() => {
    setTitle(page!);
  }, [page]);

  useEffect(() => {
    document.querySelector("body")!.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div
      className={
        `flex row items-center gap-2 text-title justify-between ` + className
      }
    >
      {!isOpen ? (
        <>
          <p onClick={fn} className="font-normal hidden md:flex cursor-pointer">
            {title}
          </p>
          <RiMenuFill
            className="size-[18px] cursor-pointer"
            style={{ color: "var(--text-title)" }}
            onClick={fn}
          />
        </>
      ) : (
        <nav className="flex flex-row items-start justify-between w-full h-full pr-2">
          <ul
            className={
              "flex flex-col gap-2 self-start md:self-center cursor-pointer pt-10 md:pt-0"
            }
          >
            {options.map((option, index) => (
              <li key={index}>
                {option === title ? (
                  <h1>{title}</h1>
                ) : (
                  <a href="">
                    <h1 className="text-text hover:brightness-75">{option}</h1>
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-row items-center gap-2" onClick={fn}>
            <p className="hidden md:flex cursor-pointer">Close</p>
            <RiCloseFill
              className="size-[22px] cursor-pointer"
              style={{ color: "var(--text-title)" }}
            />
          </div>
        </nav>
      )}
    </div>
  );
}
