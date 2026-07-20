"use client";

import Reveal from "./ui/Reveal";

const MAPS_URL = "https://maps.app.goo.gl/jWCmUY7T2b6cVShD7";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Crazy+Studio,+Av.+Santa+Mar%C3%ADa+2701,+Tigre,+Buenos+Aires&output=embed";

export default function Location() {
  return (
    <section
      id="ubicacion"
      className="py-20 md:py-28 px-6 md:px-16"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span
              className="inline-flex items-center gap-2 text-[.75rem] font-semibold tracking-[.08em] uppercase px-4 py-[.4rem]"
              style={{
                background: "var(--color-blush-lt)",
                color: "var(--color-blush-deep)",
                borderRadius: "999px",
              }}
            >
              <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: "var(--color-blush-deep)" }} />
              Ubicación
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--color-border-lt)" }} />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-center">

          {/* ── Text column ── */}
          <div>
            <Reveal delay={0.1}>
              <h2
                className="font-serif leading-[1.1] mb-5"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 700 }}
              >
                Te espero en{" "}
                <em className="italic" style={{ color: "var(--color-blush-deep)" }}>
                  Crazy Studio
                </em>
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <p
                className="text-[.98rem] leading-[1.9] mb-7 max-w-[340px]"
                style={{ color: "var(--color-mid)" }}
              >
                Av. Santa María 2701, Tigre, Provincia de Buenos Aires.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[.8rem] font-semibold tracking-[.08em] uppercase text-white px-9 py-[1.1rem] transition-all duration-300 hover:-translate-y-[3px]"
                style={{
                  background: "var(--color-deep)",
                  borderRadius: "999px",
                  boxShadow: "0 10px 28px -10px rgba(28,20,18,0.45)",
                }}
              >
                Cómo llegar →
              </a>
            </Reveal>
          </div>

          {/* ── Map column ── */}
          <Reveal delay={0.15}>
            <div className="relative">
              <div
                className="absolute -top-4 -right-4 left-4 bottom-4 pointer-events-none hidden md:block"
                style={{ border: "1px solid var(--color-blush-lt)" }}
              />
              {/*
                Google's embed adds its own "Abrir en Maps" bar at the very
                top — cropped out by oversizing the iframe and shifting it
                up. The required Google attribution strip at the bottom is
                left untouched.
              */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full overflow-hidden z-10"
                style={{ aspectRatio: "4/3" }}
                aria-label="Ver ubicación de Crazy Studio en Google Maps"
              >
                <iframe
                  src={MAPS_EMBED}
                  className="absolute left-0 w-full"
                  style={{
                    top: -42,
                    height: "calc(100% + 42px)",
                    border: 0,
                    pointerEvents: "none",
                  }}
                  loading="lazy"
                  title="Ubicación — Crazy Studio, Tigre"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
