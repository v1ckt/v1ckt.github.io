import { CursorTracker } from "@/components/ui/cursortracker";
import Link from "next/link";
import { BiExclude } from "react-icons/bi";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 absolute w-full h-full z-[9999] text-center px-6 md:px-24 pt-8 md:pt-24 bg-main-bg">
      <div
        className="w-full h-full fixed top-0 left-0 z-[-1] flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to top, transparent 1%, var(--main-bg), var(--main-bg), transparent 99%), url('/static/images/bg.svg')",
          backgroundSize: "61rem",
          backgroundPosition: "var(--bg-pos)",
          opacity: 0.1,
        }}
      >
        <h1
          className="text-[50vmin] mb-[25vmin] mr-[1rem] text-extrabold"
          style={{
            backgroundImage: "linear-gradient(to top, var(--main-bg), var(--title))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            opacity: 0.8,
          }}
        >
          404
        </h1>
      </div>
      <h1 className="text-title">Oops!</h1>
      <h4 className="text-text">
        It seems that the page you&apos;re looking for can&apos;t be found.
        <br className="hidden md:flex" /> Please, consider going back to{" "}
        <Link href="/" className="text-[1.8rem] md:text-[32px] text-accent">
          home page
        </Link>
        .
      </h4>
      <CursorTracker />
    </div>
  );
}
