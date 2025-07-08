"use client";

import { useEffect, useState } from "react";
import Menu from "./menu";
import Profile from "./profile";
import ThemeSwitcher from "./themeswitcher";
import WorkStatus from "./workstatus";

interface headerProps {
  className?: string;
}

export default function Header({ className }: headerProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={
        `flex items-center justify-between fixed w-full h-16 px-6 md:px-24 select-none overflow-hidden
        border-b-[1px] border-header-border-color backdrop-blur-xl bg-header-bg ease-out transition-[height] duration-[250ms]
        ${menuOpen ? "h-full" : ""} ` + className
      }
    >
      {menuOpen ? (
        <div className={`w-full h-full py-5 flex`}>
          <Menu
            fn={openMenu}
            state="Home"
            isOpen={menuOpen}
            className="flex items-center justify-between w-full h-full"
          />
        </div>
      ) : (
        <>
          <div className="flex items-center gap-4 text-title">
            <Profile />
            <ThemeSwitcher />
            <div className="text-text bg-[gray]/10 px-2.5 py-1 md:cursor-help rounded-full group">
              <p className="text-xs md:group-hover:hidden">Beta</p>
              <p className="text-xs hidden md:group-hover:flex">
                This website is under development
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <WorkStatus />
            <Menu state="Home" fn={openMenu} isOpen={menuOpen} />
          </nav>
        </>
      )}
    </header>
  );
}
