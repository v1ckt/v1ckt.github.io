interface whatIDoProps {
  className?: string;
}

export default function WhatIDo({ className }: whatIDoProps) {
  return (
    <section
      className={
        `flex flex-col items-start justify-start text-center w-full gap-8 bg-main-bg ` +
        className
      }>
      <h2 className='text-title'>What I Do</h2>
    </section>
  );
}
