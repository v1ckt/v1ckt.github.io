"use client";

import { useEffect, useState } from "react";
import Menu from "./menu";
import Profile from "./profile";
import ThemeSwitcher from "./themeswitcher";
import WorkStatus from "./workstatus";
import {
  RiCloseFill,
  RiCloseLargeFill,
  RiMenuLine,
  RiArrowDownSLine,
} from "react-icons/ri";

interface headerProps {
  className?: string;
}

export default function Header({ className }: headerProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`px-6 lg:px-32 2xl:px-[16vw] z-10 w-full ${className}`}>
      <div className='absolute right-0 top-0 w-full -mt-4 h-40 -z-50 backdrop-blur-lg mask-b-from-20% bg-gradient-to-b from-main-bg to-transparent pointer-events-none' />
      <div
        className={`px-4 flex flex-row items-center justify-between h-16 w-full relative z-10
          select-none border-[1px] rounded-t-[2rem] border-header-border-color backdrop-blur-xl backdrop-saturate-200 backdrop-contrast-75 bg-header-bg ease-out transition-all duration-[250ms] ${
            menuOpen ? "" : "rounded-b-[2rem]"
          }`}>
        <div className='flex items-center gap-4 text-title transition-all duration-[250ms]'>
          <Profile />
          <ThemeSwitcher />
          <div className='text-text bg-[gray]/10 px-2.5 py-1 md:cursor-help rounded-full group'>
            <p className='text-xs md:group-hover:hidden'>Beta</p>
            <p className='text-xs hidden md:group-hover:flex'>
              This website is under development
            </p>
          </div>
        </div>
        <div className='flex items-center flex-row gap-2'>
          <WorkStatus />
          <div
            className={`text-3xl mt-1 cursor-pointer transition-all duration-200 transform ${
              menuOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RiArrowDownSLine /> : <RiArrowDownSLine />}
          </div>
        </div>
      </div>
      <Menu
        state='Home'
        fn={() => setMenuOpen(!menuOpen)}
        isOpen={menuOpen}
        className={`-z-10`}
      />
    </header>
  );
}
