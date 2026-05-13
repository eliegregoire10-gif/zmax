import Image from "next/image";
import Link from "next/link";

const services = [
  "Salle de bain",
  "Installation fenêtres",
  "Rénovation intérieure",
  "Construction générale",
  "Accessibilité",
  "Travaux extérieurs",
];

export default function Footer() {
  return (
    <footer style={{ background: "#0F0F0F" }}>
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr] gap-12">

          {/* Col 1 — About */}
          <div>
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="Construction Z. Max"
                width={180}
                height={52}
                className="h-12 w-auto"
              />
            </div>
            <p className="font-inter text-[14px] leading-relaxed mb-5 max-w-xs" style={{ color: "#555" }}>
              Entrepreneur général à Trois-Rivières depuis plus de 10&nbsp;ans.
              Qualité, fiabilité et expertise à votre service.
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="badge badge-orange" style={{ fontSize: 10, padding: "4px 10px" }}>APCHQ</span>
              <span className="badge badge-dark"   style={{ fontSize: 10, padding: "4px 10px" }}>RBQ 56366909</span>
              <span className="text-orange text-[14px]">★★★★★</span>
              <span className="font-inter text-[12px]" style={{ color: "#555" }}>5,0 · 5 avis</span>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p className="font-oswald font-semibold uppercase tracking-[2px] text-text mb-5" style={{ fontSize: 14 }}>
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    className="font-inter text-[14px] transition-colors"
                    style={{ color: "#555" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#E87722")}
                    onMouseOut={(e)  => (e.currentTarget.style.color = "#555")}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="font-oswald font-semibold uppercase tracking-[2px] text-text mb-5" style={{ fontSize: 14 }}>
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-inter text-[10px] text-orange tracking-[2px] uppercase mb-1">Adresse</p>
                <p className="font-inter text-[14px] leading-relaxed" style={{ color: "#555" }}>
                  661 Rue des Mélèzes<br />
                  Trois-Rivières, QC G8Y 2M1
                </p>
              </div>
              <div>
                <p className="font-inter text-[10px] text-orange tracking-[2px] uppercase mb-1">Téléphone</p>
                <a href="tel:+18197018540" className="font-inter text-[14px] text-text">(819) 701-8540</a>
              </div>
              <div>
                <p className="font-inter text-[10px] text-orange tracking-[2px] uppercase mb-1">Courriel</p>
                <a
                  href="mailto:constructionzmax@gmail.com"
                  className="font-inter text-[14px] transition-colors"
                  style={{ color: "#555" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#E87722")}
                  onMouseOut={(e)  => (e.currentTarget.style.color = "#555")}
                >
                  constructionzmax@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Signature stripe */}
      <div className="stripe" style={{ height: 5 }} />

      {/* Bottom bar */}
      <div style={{ background: "#0A0A0A", padding: "14px 24px" }}>
        <div className="mx-auto max-w-[1280px] flex flex-wrap justify-between items-center gap-2">
          <span className="font-inter text-[12px]" style={{ color: "#333" }}>
            © 2025 Construction Z. Max Inc. · Tous droits réservés · RBQ 56366909
          </span>
          <span className="font-inter text-[12px]" style={{ color: "#333" }}>
            constructionzmax.com
          </span>
        </div>
      </div>
    </footer>
  );
}
