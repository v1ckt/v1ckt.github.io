import Image from "next/image";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  image?: string;
  title?: string;
  href?: string;
  secondary?: boolean;
  fontSize?: string;
  className?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button({
  secondary,
  href,
  title,
  image,
  fontSize = "text-base",
  className,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={
        `flex flex-row px-7 py-3 ${
          secondary ? "bg-transparent" : "bg-accent"
        } rounded-full hover:brightness-[1.2] hover:contrast-[0.8] ` + className
      }
    >
      <a
        href={href}
        className="flex flex-row gap-3 items-center"
        style={{
          fontSize: `${fontSize}`,
          color: `${secondary ? "var(--accent)" : "white"}`,
        }}
      >
        {image && (
          <Image alt="Button Icon" src={image} width={32} height={32} />
        )}
        {leftIcon}
        {children}
        {title}
        {rightIcon}
      </a>
    </button>
  );
}
