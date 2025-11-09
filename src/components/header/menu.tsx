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
  const options = [
    "Home",
    "About me",
    "Blog",
    "Skills",
    "Projects",
    "Experience",
  ];

  useEffect(() => {
    setTitle(page!);
  }, [page]);

  return (
    <div
      className={
        `flex flex-row gap-2 px-5 items-start text-title justify-between select-none ease-in-out transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen py-5" : "max-h-[0px]"
        }
        ` + className
      }>
      <nav
        className={`flex flex-row items-start justify-between w-full h-full transition-all duration-500 ${
          isOpen ? "" : "opacity-0"
        }`}>
        <ul
          className={`flex flex-col gap-5 self-start md:self-center cursor-pointer pt-10 md:pt-0`}>
          {options.map((option, index) => (
            <li key={index}>
              {option === title ? (
                <h1>{title}</h1>
              ) : (
                <a href=''>
                  <h1 className='text-text hover:brightness-75'>{option}</h1>
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
