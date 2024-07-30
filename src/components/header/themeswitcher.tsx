"use client";

import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme")
  );
  const isDark = theme === "dark";

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    localStorage.setItem("theme", initialTheme);
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label
      htmlFor="switch"
      className="w-[2rem] h-[1.125rem] bg-accent-muted p-[1px] rounded-full flex row justify-start
                 duration-200 cursor-pointer"
    >
      <input
        type="checkbox"
        name="switch"
        id="switch"
        className="hidden"
        onChange={toggleTheme}
        checked={isDark}
      />
      <div
        className={`h-full aspect-square rounded-full bg-bg-switch-pill transition ${
          isDark ? "transform translate-x-3.5" : ""
        }`}
      />
    </label>
  );
}
