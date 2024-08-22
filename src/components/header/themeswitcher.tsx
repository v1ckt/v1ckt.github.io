import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";

  const setDocumentTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    setDocumentTheme(initialTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setDocumentTheme(newTheme);
  }, [isDark]);

  return (
    <label
      htmlFor="switch"
      className="w-[2rem] h-[1.125rem] bg-accent-muted p-[1px] rounded-full flex row justify-start
                 duration-200 cursor-pointer overflow-hidden group"
    >
      <input
        type="checkbox"
        name="switch"
        id="switch"
        className="hidden"
        onChange={toggleTheme}
        checked={isDark}
      />
      <figure
        className={`h-full flex items-center justify-center aspect-square shadow-md rounded-full bg-bg-switch-pill transition ${
          isDark ? "transform translate-x-3.5" : ""
        }`}
      >
        <Image
          src={
            isDark
              ? "/static/images/switchIcons/moon.svg"
              : "/static/images/switchIcons/sun.svg"
          }
          width={10}
          height={10}
          alt="switch mode icon"
          className={`group-hover:rotate-[35deg]
            ${isDark ? "rotate-0" : "rotate-180"}
            brightness-50 duration-[250ms]`}
        />
      </figure>
    </label>
  );
}
