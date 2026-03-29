"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
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