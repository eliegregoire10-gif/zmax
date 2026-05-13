import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Construction Z. Max | Entrepreneur Général Trois-Rivières",
  description:
    "Entrepreneur général à Trois-Rivières. Rénovation, salles de bain adaptées, fenêtres. Membre APCHQ, Licence RBQ 56366909. 5 étoiles Google. Demandez votre soumission gratuite.",
  openGraph: {
    title: "Construction Z. Max",
    description: "Entrepreneur général à Trois-Rivières — Membre APCHQ · RBQ 56366909",
    images: [{ url: "/logo.png" }],
  },
  alternates: {
    canonical: "https://www.constructionzmax.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
