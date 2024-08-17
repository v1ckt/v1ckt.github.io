import { SquaredIcon } from "../ui/squaredicon";
import { namedLinks } from "@images/links";

export default function Footer() {
  const links = [...namedLinks].filter((l, index) => index < 3);
  const options = [...namedLinks].filter((l, index) => index > 2);
  return (
    <footer className="flex flex-col pt-16 pb-8 px-6 md:px-24 w-full justify-center items-center gap-16 bg-gradient-to-b from-main-bg to-40% to-transparent">
      <h2 className="text-title">Thanks for coming!</h2>
      <div className="flex flex-col w-full items-center gap-4">
        <div className="flex flex-row w-full items-start gap-16 md:gap-32">
          <ul className="flex flex-col items-left gap-4">
            <li>
              <p className="text-title font-bold opacity-80">Contact/Social</p>
            </li>
            {links.map((l, index) => (
              <li key={index}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2">
                  <SquaredIcon icon={l.data.src} size={2} color={l.color} />
                  <p>{l.name}</p>
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-left gap-4">
            <li>
              <p className="text-title font-bold opacity-80">Options</p>
            </li>
            {options.map((l, index) => (
              <li key={index}>
                <a href={l.href} className="flex flex-row items-center gap-2">
                  <SquaredIcon icon={l.data.src} size={2} color={l.color} />
                  <p>{l.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <span className="inline-flex gap-2">
        <p className="">© 2024 Vicktor Teixeira | Made with Next Js</p>
        </span>
      </div>
    </footer>
  );
}
