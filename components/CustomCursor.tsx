"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (!isMounted) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 pointer-events-none z-[9999] hidden md:block"
        variants={variants}
        animate="default"
        transition={{ type: "spring", mass: 0.2, stiffness: 100, damping: 10 }}
      />
      <div 
        className="fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[10000] hidden md:block shadow-[0_0_10px_#06b6d4]"
        style={{ left: mousePosition.x - 4, top: mousePosition.y - 4 }}
      />
    </>
  );
}
