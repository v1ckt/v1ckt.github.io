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
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <h2 className="text-title">My Stack</h2>
        <div className="flex flex-col items-center justify-center gap-12 w-full">
          <h4>These are the technologies I use to develop websites.</h4>
          <ul className="flex flex-row gap-6 md:gap-0 w-full justify-center md:justify-between items-center flex-wrap">
            {namedStack.map((ic, index) => (
              <li key={index}>
                <SquaredIcon size={7} color={ic.color} icon={ic.data.src}>
                  {/* {ic.children} */}
                </SquaredIcon>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Clink href="#" title="All my skills" arrow />
    </section>
  );
}
