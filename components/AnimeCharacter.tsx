"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimeCharacter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Background glow rings */}
      <div className="absolute w-80 h-80 rounded-full bg-purple-600/15 blur-3xl pointer-events-none" />
      <div className="absolute w-56 h-56 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

      {/* Outer ring decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-purple-500/20 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-cyan-500/10 pointer-events-none"
      />

      {/* Floating character image */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        {/* Glow shadow under character */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-purple-600/30 blur-2xl rounded-full" />

        <Image
          src="/anime-character.png"
          alt="Anurag - Anime Character"
          width={320}
          height={420}
          className="relative z-10 drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]"
          priority
        />
      </motion.div>

      {/* Floating badges around character */}
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        className="absolute top-8 right-4 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 text-xs font-mono"
      >
        &lt;Python /&gt;
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-20 left-2 px-3 py-1 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-400 text-xs font-mono"
      >
        AI_Dev
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-24 right-2 px-3 py-1 rounded-full border border-pink-500/40 bg-pink-500/10 text-pink-400 text-xs font-mono"
      >
        LangChain
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-32 left-0 px-3 py-1 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-xs font-mono"
      >
        OpenCV
      </motion.div>

      {/* Status tag */}
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="mt-4 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono tracking-widest z-10"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
        AI_DEVELOPER.exe — ONLINE
      </motion.div>
    </div>
  );
}
