"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { soumissionSchema, type SoumissionValues } from "@/lib/validations";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-inter text-[11px] font-medium uppercase tracking-[0.8px] text-muted">
        {label}
      </label>
      {children}
      {error && <p className="font-inter text-[11px] text-red-500">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-btn px-4 py-3 font-inter text-[14px] text-text outline-none transition-all " +
  "bg-charcoal border border-steel focus:border-orange focus:ring-2 focus:ring-orange/20 " +
  "placeholder:text-[#555]";

export default function Soumission() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SoumissionValues>({ resolver: zodResolver(soumissionSchema) });

  const onSubmit = async (_data: SoumissionValues) => {
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
  };

  return (
    <section id="soumission" className="bg-night py-20">
      <div className="mx-auto max-w-[1280px] px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-inter text-[11px] text-orange tracking-[3px] uppercase mb-3.5">
            05 — Soumission gratuite
          </p>
          <h2
            className="font-oswald font-semibold uppercase text-text"
            style={{ fontSize: "clamp(20px,3.5vw,36px)", letterSpacing: "2px" }}
          >
            DEMANDEZ VOTRE SOUMISSION GRATUITE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Nom complet *" error={errors.nom?.message}>
                      <input {...register("nom")} className={inputClass} placeholder="Votre nom" />
                    </Field>
                    <Field label="Ville ou code postal *" error={errors.ville?.message}>
                      <input {...register("ville")} className={inputClass} placeholder="Trois-Rivières" />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Courriel *" error={errors.email?.message}>
                      <input {...register("email")} type="email" className={inputClass} placeholder="vous@exemple.com" />
                    </Field>
                    <Field label="Téléphone *" error={errors.telephone?.message}>
                      <input {...register("telephone")} type="tel" className={inputClass} placeholder="(819) 000-0000" />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Budget">
                      <select {...register("budget")} className={inputClass} style={{ appearance: "none" }}>
                        <option value="">À déterminer</option>
                        <option value="lt5k">Moins de 5 000 $</option>
                        <option value="5k-25k">5 000 $ à 25 000 $</option>
                        <option value="gt25k">25 000 $ et plus</option>
                      </select>
                    </Field>
                    <Field label="Moment souhaité">
                      <select {...register("moment")} className={inputClass} style={{ appearance: "none" }}>
                        <option value="urgent">Dès que possible</option>
                        <option value="1-3m">Dans 1 à 3 mois</option>
                        <option value="3-6m">Dans 3 à 6 mois</option>
                        <option value="gt6m">Dans plus de 6 mois</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Description du projet *" error={errors.description?.message}>
                    <textarea
                      {...register("description")}
                      rows={4}
                      className={inputClass}
                      placeholder="Décrivez votre projet en quelques lignes…"
                      style={{ resize: "vertical" }}
                    />
                  </Field>

                  <Field label="Pièce jointe (facultatif · max 10 MB)">
                    <input
                      type="file"
                      accept="image/*,.pdf,.doc,.docx"
                      className="font-inter text-[13px] text-muted cursor-pointer
                                 bg-charcoal border border-dashed border-steel rounded-btn px-3 py-2.5
                                 file:mr-3 file:py-1 file:px-3 file:rounded file:border-0
                                 file:bg-orange file:text-night file:font-inter file:font-medium file:text-[12px]"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center text-[15px] py-4 mt-2 disabled:opacity-60"
                  >
                    {isSubmitting ? "Envoi en cours…" : "ENVOYER MA DEMANDE →"}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-5 py-16 px-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 76, height: 76,
                      background: "rgba(34,197,94,.12)",
                      border: "2px solid #22c55e",
                    }}
                  >
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </motion.div>
                  <h3 className="font-oswald font-semibold uppercase tracking-[2px] text-text" style={{ fontSize: 28 }}>
                    Demande envoyée !
                  </h3>
                  <p className="font-inter text-muted" style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 380 }}>
                    Merci&nbsp;! Mathieu vous contactera sous 24&nbsp;heures.
                  </p>
                  <a href="#hero" className="btn-ghost mt-2">Retour à l'accueil</a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* CONTACT SIDEBAR */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-sec p-8" style={{ background: "#2B2B2B" }}>
              <p className="font-inter text-[11px] text-orange tracking-[3px] uppercase mb-5">
                Contact direct
              </p>
              <p className="font-oswald font-semibold text-text mb-1.5" style={{ fontSize: 22 }}>
                Mathieu Chatry
              </p>
              <p className="font-inter text-muted text-[13px] leading-relaxed mb-6">
                661 Rue des Mélèzes<br />
                Trois-Rivières, QC G8Y 2M1
              </p>
              <a href="tel:+18197018540" className="btn-primary flex justify-center w-full mb-3">
                APPELER — (819) 701-8540
              </a>
              <a href="mailto:constructionzmax@gmail.com" className="btn-ghost flex justify-center w-full text-[13px]">
                ENVOYER UN COURRIEL
              </a>
            </div>

            {/* Map */}
            <div className="rounded-card overflow-hidden" style={{ border: "1px solid #3E3E3E" }}>
              <iframe
                src="https://maps.google.com/maps?q=661+Rue+des+M%C3%A9l%C3%A8zes,+Trois-Rivi%C3%A8res,+QC+G8Y+2M1&output=embed&z=15"
                width="100%"
                height="200"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                title="661 Rue des Mélèzes, Trois-Rivières"
              />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-orange">MEMBRE APCHQ</span>
              <span className="badge badge-dark">RBQ 56366909</span>
              <span className="badge badge-orange">10+ ANS</span>
              <span className="badge badge-dark">TROIS-RIVIÈRES</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
