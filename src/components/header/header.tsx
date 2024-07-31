"use client";

import { useState } from "react";
import Menu from "./menu";
import Profile from "./profile";
import ThemeSwitcher from "./themeswitcher";
import WorkStatus from "./workstatus";

export default function Header({
  className,
}: Readonly<{ className?: string }>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={
        `flex items-center justify-between fixed h-16 w-full px-6 md:px-24 select-none
        border-b-[1px] border-header-border-color backdrop-blur-xl bg-header-bg transition-[height]
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
