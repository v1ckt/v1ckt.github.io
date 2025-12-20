import { CiGrid42 } from "react-icons/ci";
import {
  IoCode,
  IoCodeSlashOutline,
  IoGridOutline,
  IoPhonePortrait,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { MdDeveloperBoard } from "react-icons/md";

interface whatIDoProps {
  className?: string;
}

export default function WhatIDo({ className }: whatIDoProps) {
  const items = [
    {
      icon: <IoGridOutline size={32} />,
      title: "UI/UX Design",
      description: "Create unique design for user interfaces.",
    },
    {
      icon: <IoCodeSlashOutline size={32} />,
      title: "Development",
      description: "Build complete applications for multiple devices.",
    },
    {
      icon: <IoPhonePortraitOutline size={32} />,
      title: "Flexibility",
      description: "Build applications for different devices and environments.",
    },
  ];
  return (
    <section
      className={
        `flex flex-col items-start justify-start text-center w-full gap-8 bg-main-bg ` +
        className
      }>
      <h2 className='text-title'>What I Do</h2>
      <div className='flex flex-row items-stretch justify-between gap-6 overflow-auto w-full flex-wrap'>
        {items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col justify-between bg-header-bg rounded-[1.8rem] border-[1px] border-header-border-color gap-8 p-4 max-w-sm'>
            <div className='bg-header-bg rounded-[1rem] w-fit border-[1px] border-header-border-color p-4 gap-4'>
              {item.icon}
            </div>
            <div className='flex flex-col items-start justify-start text-start gap-2'>
              <h4 className='text-title font-semibold'>{item.title}</h4>
              <h5 className='font-semibold'>{item.description}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
