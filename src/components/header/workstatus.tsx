import { IoIosArrowForward } from "react-icons/io";

interface WorkStatusProps {
  status?: string;
  className?: string;
}

export default function WorkStatus({
  status = "Open to work",
  className,
}: WorkStatusProps) {
  return (
    <span
      className={
        `bg-otw-bg w-28 h-7 rounded-full cursor-pointer py-1 flex flex-col justify-between items-center overflow-hidden group ` +
        className
      }>
      <p className='text-sm text-otw-text font-medium group-hover:-mt-8 transition-all duration-300 ease-in'>
        {status}
      </p>
      {status === "Open to work" && (
        <p className='text-sm text-otw-text font-medium inline-flex items-center gap-.5 ml-1'>
          Hire me&nbsp;
          <IoIosArrowForward />
        </p>
      )}
      {status === "Working" && (
        <p className='text-sm text-otw-text font-medium inline-flex items-center gap-.5 ml-1'>
          Contact me&nbsp;
          <IoIosArrowForward />
        </p>
      )}
    </span>
  );
}
