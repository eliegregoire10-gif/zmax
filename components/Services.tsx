"use client";

import { motion } from "framer-motion";

const stagger = { visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp  = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const services = [
  {
    title: "SALLE DE BAIN & ADAPTATIONS",
    desc:  "Rénovation complète et aménagements adaptés pour personnes à mobilité réduite.",
  },
  {
    title: "INSTALLATION DE FENÊTRES",
    desc:  "Installation professionnelle et création de nouvelles ouvertures dans vos murs.",
  },
  {
    title: "RÉNOVATION INTÉRIEURE",
    desc:  "Transformation complète de vos espaces selon vos besoins et votre budget.",
  },
  {
    title: "CONSTRUCTION GÉNÉRALE",
    desc:  "Construction neuve et agrandissements résidentiels sur mesure.",
  },
  {
    title: "ACCESSIBILITÉ UNIVERSELLE",
    desc:  "Aménagements spécialisés pour l'autonomie et le confort des personnes handicapées.",
  },
  {
    title: "TRAVAUX EXTÉRIEURS",
    desc:  "Terrasses, clôtures, aménagement paysager et travaux extérieurs résidentiels.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-night py-20">
      <div className="mx-auto max-w-[1280px] px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-inter text-[11px] text-orange tracking-[3px] uppercase mb-3.5">
            03 — Services
          </p>
          <h2
            className="font-oswald font-semibold uppercase text-text"
            style={{ fontSize: "clamp(26px,4vw,40px)", letterSpacing: "2px" }}
          >
            NOS SERVICES
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.02, borderColor: "#E87722", boxShadow: "0 10px 36px rgba(232,119,34,.12)" }}
              className="rounded-card p-7 transition-colors"
              style={{ background: "#2B2B2B", border: "1px solid #3E3E3E" }}
            >
              {/* Number accent */}
              <div
                className="font-oswald font-bold mb-4 leading-none"
                style={{ fontSize: "11px", color: "#E87722", letterSpacing: "3px" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="font-oswald font-semibold text-text mb-3"
                style={{ fontSize: "17px", letterSpacing: "1px" }}
              >
                {s.title}
              </h3>
              <p className="font-inter text-muted" style={{ fontSize: "14px", lineHeight: "1.65" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
