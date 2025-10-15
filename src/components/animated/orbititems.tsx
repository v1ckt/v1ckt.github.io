import React, { ReactNode } from "react";
import { SquaredIcon } from "../ui/squaredicon";

interface OrbitItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  scale?: number;
}

interface OrbitProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  className?: string;
  speed?: number;
  children: ReactNode;
}

export function Orbit({
  size = 1,
  speed = 1,
  className,
  children,
}: OrbitProps) {
  return (
    <div
      className={`w-[80vmin] h-[80vmin] rounded-full animate-spin bg-transparent border border-gray-500/10 absolute top-[50%] left-[50%] translate-[-50%] ${className}`}
      style={{
        scale: size,
        animationDuration: `${speed * size}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function OrbitItems({
  speed = 1,
  scale = 1,
  style,
  className,
}: OrbitItemsProps) {
  const newSpeed = 100000 / speed;
  return (
    <div
      className={`w-[50vw] h-[50vh] scale-[${scale}] ${className}`}
      style={style}
    >
      <Orbit size={1} speed={newSpeed}>
        <div
          className="w-4 h-4 rounded-full bg-gray-500 absolute left-[50%] -top-2"
          style={{ transform: "translateX(-50%)" }}
        />
      </Orbit>
      <Orbit size={0.8} speed={newSpeed}>
        <div
          className="w-4 h-4 rounded-full bg-gray-500 absolute left-[50%] -top-2"
          style={{ transform: "translateX(-50%)" }}
        />
      </Orbit>
    </div>
  );
}
