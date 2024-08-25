import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface ClinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string;
  title: string;
  className?: string;
  arrow?: boolean;
  fontSize?: string;
}

export default function Clink({ href, title, className, arrow, fontSize = "text-lg" }: ClinkProps) {
  return (
    <Link
      href={href}
      className={
        `text-accent font-semibold hover:brightness-[1.2]
        hover:contrast-[0.8] flex flex-row gap-0.5 items-center ${
          arrow ? "" : "*:opacity-0 *:hover:opacity-100"
        } *:hover:translate-x-2 *:transition-all ${className} ${fontSize}`
      }
    >
      {title}
      <IoIosArrowForward className="text-accent" />
    </Link>
  );
}
