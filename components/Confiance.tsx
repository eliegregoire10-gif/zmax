"use client";

import { motion } from "framer-motion";

const stagger = { visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp  = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const items = [
  { value: "5,0",   sub: "★★★★★", label: "Note Google" },
  { value: "10+",   sub: "ANS",    label: "d'expérience" },
  { value: "APCHQ", sub: "CERTIFIÉ", label: "Membre certifié" },
  { value: "RBQ",   sub: "LICENCE", label: "56366909" },
];

export default function Confiance() {
  return (
    <section style={{ background: "#F5F0E8", padding: "64px 0" }}>
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {items.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="bg-white rounded-card p-7 text-center"
              style={{ boxShadow: "0 2px 14px rgba(0,0,0,.06)" }}
            >
              <div className="font-oswald font-bold leading-none mb-1" style={{ fontSize: 32, color: "#E87722" }}>
                {item.value}
              </div>
              <div className="font-inter mb-1" style={{ fontSize: 11, color: "#E87722", letterSpacing: 2, textTransform: "uppercase" }}>
                {item.sub}
              </div>
              <div className="font-inter font-medium" style={{ fontSize: 13, color: "#2B2B2B" }}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
