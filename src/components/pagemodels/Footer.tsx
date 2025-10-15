import { SquaredIcon } from "../ui/squaredicon";
import { namedLinks } from "@images/links";

interface footerProps {
  className?: string;
}

export default function Footer({ className }: footerProps) {
  const links = [...namedLinks].filter((l, index) => index < 3);
  const options = [...namedLinks].filter((l, index) => index > 2);
  return (
    <footer className={'flex flex-col pb-8 w-full justify-center items-center gap-16 bg-main-bg ' + className}>
      <h2 className='text-title'>Thanks for coming!</h2>
      <div className='flex flex-col w-full items-center gap-4'>
        <div className='flex flex-row w-full items-start gap-16 md:gap-32'>
          <ul className='flex flex-col items-left gap-4'>
            <li>
              <p className='text-title/80 font-bold'>Contact/Social</p>
            </li>
            {links.map((l, index) => (
              <li key={index} className='group'>
                <a
                  href={l.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-row items-center gap-2 transition-all group-hover:text-title'>
                  <SquaredIcon icon={l.data.src} size={2} color={l.color} />
                  <p>{l.name}</p>
                </a>
              </li>
            ))}
          </ul>
          <ul className='flex flex-col items-left gap-4'>
            <li>
              <p className='text-title/80 font-bold'>Options</p>
            </li>
            {options.map((l, index) => (
              <li key={index} className='group'>
                <a
                  href={l.href}
                  className='flex flex-row items-center gap-2 transition-all group-hover:text-title'>
                  <SquaredIcon icon={l.data.src} size={2} color={l.color} />
                  <p>{l.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <span className='inline-flex gap-2'>
          <p className=''>© 2024 Vicktor Teixeira | Made with Next Js</p>
        </span>
      </div>
    </footer>
  );
}
