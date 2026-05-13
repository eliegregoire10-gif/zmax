"use client";

import { motion } from "framer-motion";

const stagger = { visible: { transition: { staggerChildren: 0.2 } } };
const fadeUp  = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const reviews = [
  {
    name: "Josée Paradis",
    text: "Une équipe extraordinaire qui a changé ma vie en me faisant ma salle de bain adaptée.",
    initial: "J",
  },
  {
    name: "Anouck Trudel",
    text: "Super dans l'installation de nos fenêtres, ont travaillé très fort pour ouvrir une nouvelle ouverture!",
    initial: "A",
  },
  {
    name: "Jessie Petit-Surusca",
    text: "De très bons installateurs, fiables, professionnels et minutieux!",
    initial: "J",
  },
];

export default function Avis() {
  return (
    <section id="avis" style={{ background: "#F5F0E8" }} className="py-20">
      <div className="mx-auto max-w-[1280px] px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-inter text-[11px] text-orange tracking-[3px] uppercase mb-3.5">
            04 — Avis clients
          </p>
          <h2
            className="font-oswald font-semibold uppercase mb-2.5"
            style={{ fontSize: "clamp(22px,3.5vw,38px)", letterSpacing: "2px", color: "#2B2B2B" }}
          >
            CE QUE DISENT NOS CLIENTS
          </h2>
          <p className="font-inter text-muted text-[15px]">5,0 ★ sur Google · 5 avis vérifiés</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {reviews.map((r) => (
            <motion.div
              key={r.name}
              variants={fadeUp}
              className="flex flex-col gap-3.5 rounded-card p-7"
              style={{ background: "#fff", boxShadow: "0 2px 18px rgba(0,0,0,.07)" }}
            >
              <div className="text-orange text-[17px] tracking-wider">★★★★★</div>
              <p
                className="font-inter flex-1"
                style={{ fontSize: "15px", color: "#2B2B2B", lineHeight: "1.7", fontStyle: "italic" }}
              >
                "{r.text}"
              </p>
              <div
                className="flex items-center gap-3 pt-3.5"
                style={{ borderTop: "1px solid #F0F0F0" }}
              >
                <div
                  className="font-oswald font-bold flex items-center justify-center rounded-full flex-shrink-0"
                  style={{
                    width: 44, height: 44,
                    background: "#E87722",
                    color: "#1A1A1A",
                    fontSize: 18,
                  }}
                >
                  {r.initial}
                </div>
                <span className="font-inter font-medium text-[14px]" style={{ color: "#2B2B2B" }}>
                  {r.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
