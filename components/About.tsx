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
              className="inline-flex items-center gap-2 text-[.75rem] font-semibold tracking-[.08em] uppercase px-4 py-[.4rem]"
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

        <div className="max-w-[640px]">
          <Reveal delay={0.1}>
            <h2
              className="font-serif leading-[1.1] mb-6"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 700,
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

          <Reveal delay={0.2}>
            <div
              className="text-[.98rem] leading-[1.95] space-y-3 mb-7"
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

          <Reveal delay={0.3}>
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

          <Reveal delay={0.4}>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[.8rem] font-semibold tracking-[.08em] uppercase text-white px-9 py-[1.1rem] transition-all duration-300 hover:-translate-y-[3px]"
              style={{
                background: "var(--color-deep)",
                borderRadius: "999px",
                boxShadow: "0 10px 28px -10px rgba(28,20,18,0.45)",
              }}
            >
              Agendá tu turno
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
