import { SquaredIcon } from "../ui/squaredicon";
import { namedStack } from "@images/stack/index";
import Clink from "../ui/clink";

interface StackSectionProps {
  className?: string;
}

export default function StackSection({ className }: StackSectionProps) {
  return (
    <section
      className={
        `flex flex-col items-end justify-center px-6 md:px-24 text-center w-full gap-8
    bg-gradient-to-b from-[transparent] to-50% to-main-bg ` + className
      }
    >
      <article className="flex flex-col items-center justify-center w-full gap-4">
        <h2 className="text-title">My Stack</h2>
        <div className="flex flex-col items-center justify-center gap-12 w-full">
          <h4>These are the technologies I use to develop websites.</h4>
          <ul className="flex flex-row gap-6 w-full justify-center md:justify-around items-center flex-wrap">
            {namedStack.map((ic, index) => (
              <li key={index} className="flex-col items-center justify-center transition-all">
                <SquaredIcon size={7} color={ic.color} icon={ic.data.src} className="scale-[.9] md:scale-100">
                </SquaredIcon>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <Clink href="#" title="All my skills" arrow />
    </section>
  );
}
