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
    <header
      className={`absolute mt-4 mx-6 lg:mx-32 2xl:mx-[16vw] ${className}`}
      style={{ width: "-webkit-fill-available" }}>
      <div
        className={`flex flex-col items-center justify-center rounded-[2rem] border-header-border-color bg-header-bg select-none border-[1px] ${
          menuOpen ? "shadow-2xl/10" : ""
        }`}>
        <div
          className={`px-4 flex flex-row py-4 items-center justify-between w-full ease-out transition-all duration-[250ms] border-b-[1px] ${
            menuOpen ? "border-header-border-color" : "border-transparent"
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
            <WorkStatus className='hidden sm:flex' />
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
          className={`w-full`}
        />
      </div>
    </header>
  );
}
