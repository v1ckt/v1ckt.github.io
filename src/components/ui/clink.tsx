import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface ClinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string;
  title: string;
  className?: string;
  arrow?: boolean;
}

export default function Clink({ href, title, className, arrow }: ClinkProps) {
  return (
    <Link
      href={href}
      className={
        `text-accent flex flex-row gap-0.5 items-center ${arrow ? '' : '*:opacity-0 *:hover:opacity-100'} *:hover:translate-x-2 *:transition-all ` +
        className
      }
    >
      {title}
      <IoIosArrowForward className="text-accent" size={"1rem"} />
    </Link>
  );
}
