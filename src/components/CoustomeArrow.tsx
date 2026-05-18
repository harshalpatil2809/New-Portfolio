"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleDown = () => setClicked(true);
    const handleUp = () => setClicked(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-9999"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    >
      {/* Outer ring */}
      <div
        className={`w-8 h-8 rounded-full border border-white flex items-center justify-center
        transition-all duration-150 ease-out
        ${clicked ? "scale-75 bg-white/20" : "scale-100"}
        backdrop-blur-sm`}
      >
        {/* Inner dot */}
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
    </div>
  );
}