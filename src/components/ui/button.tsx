import Image from "next/image";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  image?: string;
  title: string;
  href?: string;
  secondary?: boolean;
  fontSize?: string;
  className?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
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
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`flex flex-row gap-3.5 px-7 py-3 ${
        secondary ? "bg-transparent" : "bg-accent"
      } rounded-full hover:brightness-[1.2] hover:contrast-[0.8] `+ className}
    >
      <a href={href}>
        {image && (
          <Image alt="Button Icon" src={image} width={32} height={32} />
        )}
        <p
          style={{
            fontSize: `${fontSize}`,
            color: `${secondary ? "var(--accent)" : "white"}`,
          }}
        >
          {leftIcon}
          {title}
          {rightIcon}
        </p>
      </a>
    </button>
  );
}
