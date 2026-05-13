"use client";

import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <motion.a
      href="tel:+18197018540"
      aria-label="Appeler maintenant"
      className="fixed bottom-0 inset-x-0 z-[9999] md:hidden"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, delay: 0.9, ease: "easeOut" }}
    >
      <div
        className="flex items-center justify-center gap-3 py-4 px-6 active:opacity-90 transition-opacity"
        style={{ background: "#E87722" }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
        </svg>
        <span
          className="font-oswald font-bold uppercase"
          style={{ fontSize: 17, letterSpacing: "2px", color: "#1A1A1A" }}
        >
          (819) 701-8540
        </span>
      </div>
    </motion.a>
  );
}
