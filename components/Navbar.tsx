"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Accueil",    href: "#hero" },
  { label: "Services",   href: "#services" },
  { label: "Avis",       href: "#avis" },
  { label: "Soumission", href: "#soumission" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-6 px-6 py-3.5 transition-all duration-300 ${
          scrolled ? "bg-night/94 backdrop-blur-md shadow-lg" : ""
        }`}
      >
        <Link href="#hero" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Construction Z. Max"
            width={160}
            height={46}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-inter text-[13px] text-text/85 hover:text-orange transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="tel:+18197018540"
          className="hidden md:inline-flex items-center gap-2 btn-primary text-xs px-4 py-2.5"
        >
          APPELER
        </Link>

        <button
          className="md:hidden p-1.5 text-text"
          onClick={openMenu}
          aria-label="Ouvrir le menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-9 bg-night/98"
          role="dialog"
          aria-modal
        >
          <button
            className="absolute top-5 right-6 text-text text-3xl leading-none"
            onClick={closeMenu}
            aria-label="Fermer le menu"
          >
            ✕
          </button>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="font-oswald text-[30px] font-semibold uppercase tracking-[3px] text-text hover:text-orange transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="tel:+18197018540"
            onClick={closeMenu}
            className="btn-primary mt-2 text-base px-8 py-4"
          >
            APPELER
          </Link>
        </div>
      )}
    </>
  );
}
