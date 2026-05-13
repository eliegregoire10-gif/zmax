
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: "linear-gradient(135deg,#111 0%,#1E1E1E 60%,#1A1A1A 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 75% 50%, rgba(232,119,34,.07) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-0 bottom-0 right-0 hidden md:block"
        style={{
          width: "38%",
          background: "linear-gradient(180deg,rgba(232,119,34,.06) 0%,rgba(232,119,34,.02) 100%)",
          clipPath: "polygon(25% 0,100% 0,100% 100%,0% 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-14 pt-36 md:pt-40">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-9"
        >
          <Image src="/logo.png" alt="Construction Z. Max" width={220} height={72} className="h-16 w-auto" priority />
        </motion.div>

        <motion.h1
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-oswald font-bold uppercase text-text leading-[1.08] mb-5 max-w-2xl"
          style={{ fontSize: "clamp(34px,5.5vw,58px)", letterSpacing: "2px" }}
        >
          VOTRE ENTREPRENEUR{" "}
          <span className="text-orange">GÉNÉRAL</span>
          <br />DE CONFIANCE
        </motion.h1>

        <motion.p
          custom={0.35}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-inter text-muted mb-10 max-w-lg"
          style={{ fontSize: "16px", lineHeight: "1.7" }}
        >
          Membre APCHQ · Licence RBQ&nbsp;: 56366909 · Trois-Rivières, QC
        </motion.p>

        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3.5 mb-11"
        >
          <Link href="tel:+18197018540" className="btn-primary text-[15px] px-8 py-4">
            APPELER MAINTENANT
          </Link>
          <Link href="#soumission" className="btn-secondary text-[15px] px-8 py-4">
            DEMANDER UNE SOUMISSION
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center flex-wrap gap-3"
        >
          <span className="text-orange text-xl tracking-wider">★★★★★</span>
          <span className="font-oswald font-bold text-[24px] text-text">5,0</span>
          <span className="font-inter text-muted text-sm">· 5 avis Google vérifiés</span>
        </motion.div>
      </div>

      <div className="stripe relative z-10" />
    </section>
  );
}
