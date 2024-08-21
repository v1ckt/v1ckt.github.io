import Image from "next/image";
import { useEffect, useState } from "react";

interface SquaredIconProps {
  icon?: string;
  className?: string;
  size?: number;
  color?: string;
  children?: React.ReactNode;
}

export function SquaredIcon({
  icon,
  className,
  size,
  color,
  children,
}: SquaredIconProps) {
  size = size || 4;
  const paddingSize = size / 6;
  const newSize = size - paddingSize;
  const newSizepx = newSize * 16;

  return (
    <figure
      className={`flex relative items-center justify-center
        rounded-[22.5%] shadow-icon ${className ? className : ""}`}
      style={{
        padding: `${paddingSize}rem`,
        width: `${size}rem`,
        aspectRatio: "1/1",
        background: color,
      }}
    >
      {icon && (
        <Image src={icon} width={newSizepx} height={newSizepx} alt="icon" />
      )}
      {children}
      <div
        className="absolute inset-0 rounded-[22.5%]"
        style={{
          background: `linear-gradient(180deg, #FFFFFF80 0%, #00000020 100%)`,
          mixBlendMode: "overlay",
        }}
      />
    </figure>
  );
}
