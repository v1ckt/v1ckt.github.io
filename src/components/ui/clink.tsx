import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface ClinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string;
  title: string;
}

export default function Clink({ href, title }: ClinkProps) {
  return (
    <Link href={href} className="text-accent flex flex-row gap-1 items-center">
      {title}
      <IoIosArrowForward className="text-accent" size={"1rem"} />
    </Link>
  );
}
