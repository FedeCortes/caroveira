import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Caro Veira · Dermocosmiatra",
  description:
    "Dermocosmiatra especializada en piel acneica y glow skin. Tecnología de vanguardia y cosmética coreana. Atiendo en Crazy Studio, Tigre, Buenos Aires.",
  keywords: [
    "dermocosmiatra",
    "piel acneica",
    "glow skin",
    "limpieza facial",
    "tigre",
    "k-beauty",
    "esteticista",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
