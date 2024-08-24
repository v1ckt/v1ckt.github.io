"use client";
import { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

type CursorStyle = "default" | "auto" | "pointer" | "none";

export function CursorTracker() {
  const [cursor, setCursor] = useState<CursorPosition>({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState<CursorStyle>("default");

  const cursorStyles: Record<CursorStyle, string> = {
    pointer:
      "w-6 h-6 rounded-full bg-[transparent] border-[2px] border-title animate-cursorPointer",
    auto: "w-36 h-36 blur-3xl rounded-full bg-main-bg invert mix-blend-overlay",
    default:
      "w-16 h-16 blur-3xl rounded-full bg-main-bg invert mix-blend-overlay",
    none: "",
  };

  useEffect(() => {
    const handleCursorStyle = (e: MouseEvent) => {
      setTimeout(() => {
        setCursor({ x: e.clientX, y: e.clientY });
      }, 150);

      if (e.target instanceof HTMLElement) {
        const computedStyle = window.getComputedStyle(e.target);
        const style = computedStyle.cursor;
        setCursorStyle(style as CursorStyle);
      }
    };

    window.addEventListener("mousemove", handleCursorStyle);
    return () => {
      window.removeEventListener("mousemove", handleCursorStyle);
    };
  }, []);

  return (
    <div
      className={`fixed newcursor pointer-events-none -translate-x-[50%] -translate-y-[50%] ${cursorStyles[cursorStyle]}`}
      style={{
        top: cursor.y,
        left: cursor.x,
        transition: `
          width 150ms ease-in,
          height 150ms ease-in,
          filter 200ms ease-out,
          opacity 150ms ease-out,
          border 150ms ease-out,
          invert 0ms,
          mix-blend-mode 0ms,
          `,
      }}
    />
  );
}
