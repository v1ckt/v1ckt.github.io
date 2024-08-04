interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={
        `p-6 gap-4 flex flex-col items-left justify-start bg-card-bg rounded-2xl ` +
        className
      }
    >
      {children}
    </div>
  );
}
