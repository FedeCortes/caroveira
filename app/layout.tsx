import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="es" className={poppins.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
