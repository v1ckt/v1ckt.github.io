"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SquaredIconProps {
  icon: string;
  className?: string;
  size?: number;
  color?: string;
}

export function SquaredIcon({
  icon: src,
  className,
  size,
  color,
}: SquaredIconProps) {
  size = size || 4;
  const paddingSize = size / 6;
  const newSize = size - paddingSize;
  const newSizepx =
    newSize *
    parseInt(getComputedStyle(document.body).getPropertyValue("font-size"));

  return (
    <div
      className={`flex relative items-center justify-center rounded-[22.5%] shadow-icon
        ${className ? className : ""}`}
      style={{
        padding: `${paddingSize}rem`,
        width: `${size}rem`,
        aspectRatio: "1/1",
        background: color,
      }}
    >
      <Image src={src} width={newSizepx} height={newSizepx} alt="icon" />
      <div
        className="absolute inset-0 rounded-[22.5%]"
        style={{
          background: `linear-gradient(180deg, #FFFFFF40 0%, #00000000 100%)`,
        }}
      />
    </div>
  );
}
