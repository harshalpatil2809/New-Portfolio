"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detect if device has a fine pointer (mouse/trackpad)
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

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
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
      <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
        
        {/* Arrow inside */}
        <div className="text-white text-xs rotate-45">
          
        </div>
      </div>
    </div>
  );
}