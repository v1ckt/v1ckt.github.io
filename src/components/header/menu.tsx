"use client";

import { useEffect, useState, useTransition } from "react";

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
  const [windowHref, setWindowHref] = useState("");
  const options = [
    { title: "Home", url: "/" },
    { title: "About me", url: "/about" },
    { title: "Blog", url: "/blog" },
    { title: "Skills", url: "/skills" },
    { title: "Projects", url: "/projects" },
    { title: "Experience", url: "/experience" },
  ];

  useEffect(() => {
    setWindowHref(window.location.href);
  });

  return (
    <div
      className={
        `flex flex-row gap-2 px-5 items-start text-title justify-between select-none ease-in-out transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen py-5" : "max-h-[0px]"
        }
        ` + className
      }>
      <nav
        className={`flex flex-row items-start justify-between w-full h-content transition-all duration-500 ${
          isOpen ? "" : "opacity-0"
        }`}>
        <ul
          className={`flex flex-col gap-5 self-start md:self-center cursor-pointer md:pt-0`}>
          {options.map((option, index) => (
            <li key={index}>
              {windowHref.endsWith(option.url) ? (
                <h1>{option.title}</h1>
              ) : (
                <a href={option.url}>
                  <h1 className='text-text hover:brightness-75'>
                    {option.title}
                  </h1>
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
