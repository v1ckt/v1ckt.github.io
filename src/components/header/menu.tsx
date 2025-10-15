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
        `flex flex-row gap-2 px-5 items-start text-title justify-between select-none rounded-b-[2rem] backdrop-saturate-200 backdrop-contrast-75 backdrop-blur-xl bg-header-bg ease-in-out transition-all duration-500 overflow-hidden ${
          isOpen
            ? "border-[1px] border-t-0 border-header-border-color py-6 max-h-screen shadow-2xl/10"
            : "border-transparent max-h-[0px] -mt-7"
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
