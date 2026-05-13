"use client";

import { motion } from "framer-motion";

const stagger = { visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp  = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const items = [
  { icon: "★",    value: "5,0",   label: "Note Google",     valueClass: "text-orange" },
  { icon: "🏗️",  value: "10+",   label: "Ans d'expérience", valueClass: "text-orange" },
  { icon: "✓",    value: "APCHQ", label: "Membre certifié",  valueClass: "text-orange text-[22px]" },
  { icon: "🔖",   value: "RBQ",   label: "Licence 56366909", valueClass: "text-orange text-[20px]" },
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
              className="bg-white rounded-card p-7 text-center shadow-sm"
              style={{ boxShadow: "0 2px 14px rgba(0,0,0,.06)" }}
            >
              <div className="text-[28px] mb-1.5">{item.icon}</div>
              <div className={`font-oswald font-bold text-[34px] leading-none ${item.valueClass}`}>
                {item.value}
              </div>
              <div className="font-inter text-[13px] font-medium mt-1.5" style={{ color: "#2B2B2B" }}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
