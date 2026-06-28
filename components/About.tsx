"use client";

import Reveal from "./ui/Reveal";

const WA =
  "https://wa.me/541157502715?text=Hola%20Caro!%20Quer%C3%ADa%20sacar%20un%20turno%20%F0%9F%8C%BF";

const chips = [
  "Piel acneica",
  "Glow skin",
  "Manchas",
  "K-Beauty",
  "Aparatología",
  "Micropigmentación",
];

export default function About() {
  return (
    <section
      id="quien"
      className="py-20 md:py-28 px-6 md:px-16"
      style={{ background: "#fff" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <span
              className="inline-flex items-center gap-2 text-[.75rem] font-medium tracking-[.1em] uppercase px-4 py-[.4rem]"
              style={{
                background: "var(--color-blush-lt)",
                color: "var(--color-blush-deep)",
                borderRadius: "999px",
              }}
            >
              <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: "var(--color-blush-deep)" }} />
              Quién soy
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--color-border-lt)" }} />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.15fr] gap-12 md:gap-20 items-center">

          {/* ── Photo column ── */}
          <Reveal delay={0.1}>
            <div className="relative">
              {/* Offset decorative frame */}
              <div
                className="absolute -top-4 -left-4 right-4 bottom-4 pointer-events-none"
                style={{ border: "1px solid var(--color-blush-lt)" }}
              />

              {/* Photo area */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: "4/5",
                  background:
                    "linear-gradient(145deg, var(--color-blush-pale), var(--color-blush-lt))",
                }}
              >
                {/* Placeholder illustration */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-25">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    style={{ color: "var(--color-blush-deep)" }}
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                  <span
                    className="text-[.58rem] tracking-[.15em] uppercase"
                    style={{ color: "var(--color-blush-deep)" }}
                  >
                    Foto profesional
                  </span>
                </div>

                {/* Caption bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-5"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(28,20,18,.65), transparent)",
                  }}
                >
                  <p className="font-serif text-[1rem] text-white">
                    Caro Veira
                  </p>
                  <p
                    className="text-[.55rem] tracking-[.16em] uppercase mt-1"
                    style={{ color: "var(--color-blush)" }}
                  >
                    Cosmiatra &amp; Esteticista · Tigre
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Text column ── */}
          <div>
            <Reveal delay={0.2}>
              <h2
                className="font-serif leading-[1.1] mb-6"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  fontWeight: 400,
                }}
              >
                Amor, ciencia y
                <br />
                cuidado para tu{" "}
                <em
                  className="italic"
                  style={{ color: "var(--color-blush-deep)" }}
                >
                  piel
                </em>
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <div
                className="text-[.9rem] leading-[1.95] space-y-3 mb-7"
                style={{ color: "var(--color-mid)" }}
              >
                <p>
                  Soy Caro, dermocosmiatra especializada en piel acneica y glow
                  skin. Me apasiona trabajar con cada piel como si fuera única —
                  porque lo es.
                </p>
                <p>
                  Combino tecnología de última generación con los activos más
                  poderosos de la cosmética coreana para diseñar protocolos
                  reales, personalizados y con resultados que duran.
                </p>
                <p>
                  Atiendo en Crazy Studio, Tigre. Cada turno empieza con una
                  evaluación profunda: sin suposiciones, sin protocolos
                  genéricos.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-[7px] mb-8">
                {chips.map((c) => (
                  <span
                    key={c}
                    className="text-[.66rem] px-[.9rem] py-[.35rem] transition-all duration-200"
                    style={{
                      border: "1px solid var(--color-border)",
                      color: "var(--color-muted)",
                      borderRadius: "999px",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--color-blush-deep)";
                      el.style.color = "var(--color-blush-deep)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--color-border)";
                      el.style.color = "var(--color-muted)";
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[.73rem] tracking-[.12em] uppercase text-white px-7 py-4 transition-all duration-300 hover:-translate-y-[2px] hover:opacity-90"
                style={{ background: "var(--color-deep)" }}
              >
                Agendá tu turno
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
