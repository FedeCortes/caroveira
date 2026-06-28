"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "#quien", label: "Quién soy" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#testimonios", label: "Testimonios" },
];

const WA_URL =
  "https://wa.me/541157502715?text=Hola%20Caro!%20Vi%20tu%20web%20y%20quer%C3%ADa%20sacar%20un%20turno%20%F0%9F%8C%BF";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[800] flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? "bg-white/96 backdrop-blur-xl border-b py-4 px-8"
            : "py-5 px-6 md:px-14"
        }`}
        style={
          scrolled
            ? { borderColor: "var(--color-border-lt)" }
            : {}
        }
      >
        {/* Logo */}
        <Link
          href="#"
          className="font-serif text-[1.05rem] tracking-[0.06em] transition-colors duration-300 flex items-center gap-[7px]"
          style={{ color: "var(--color-deep)" }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full flex-shrink-0"
            style={{ background: "var(--color-blush-deep)" }}
          />
          Caro Veira
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[.67rem] tracking-[.12em] uppercase transition-colors duration-200"
              style={{ color: "var(--color-muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--color-blush-deep)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--color-muted)")
              }
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-[.67rem] tracking-[.1em] uppercase px-5 py-[.55rem] border transition-all duration-250"
            style={{
              color: "var(--color-deep)",
              borderColor: "var(--color-border)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--color-deep)";
              el.style.color = "#fff";
              el.style.borderColor = "var(--color-deep)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "";
              el.style.color = "var(--color-deep)";
              el.style.borderColor = "var(--color-border)";
            }}
          >
            Reservar turno
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] w-8 p-1 bg-transparent border-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
          >
            <span
              className={`block h-px transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`}
              style={{ width: "100%", background: "var(--color-deep)" }}
            />
            <span
              className={`block h-px transition-all duration-300 ${open ? "opacity-0" : ""}`}
              style={{ width: "100%", background: "var(--color-deep)" }}
            />
            <span
              className={`block h-px transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
              style={{ width: "65%", background: "var(--color-deep)" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[790] flex flex-col items-center justify-center gap-0"
            style={{ background: "var(--color-cream)" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.42, ease: [0.77, 0, 0.175, 1] }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="font-serif text-[clamp(2rem,9vw,3.5rem)] py-3 border-b w-4/5 text-center transition-colors duration-200"
                style={{
                  color: "var(--color-deep)",
                  borderColor: "var(--color-border-lt)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06 }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--color-blush-deep)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--color-deep)")
                }
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-9 text-white text-[.72rem] tracking-[.12em] uppercase px-8 py-4 transition-all"
              style={{ background: "var(--color-deep)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
            >
              Reservar turno
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
