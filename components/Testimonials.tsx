"use client";

import Reveal from "./ui/Reveal";

const reviews = [
  {
    quote:
      "Empecé con muchísimo acné y en pocas sesiones mi piel cambió completamente. Los resultados hablan solos.",
    name: "Valentina M.",
    tag: "Piel acneica",
  },
  {
    quote:
      "Tenía manchas de sol que no me iban con nada. Con el protocolo de Caro ya se notan muchísimo menos.",
    name: "Sofía R.",
    tag: "Manchas",
  },
  {
    quote:
      "El glass skin fue lo mejor que pude hacer por mi piel. Salí con una luminosidad que jamás tuve. Super recomendada.",
    name: "Lucía P.",
    tag: "Glass Skin",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-20 md:py-28 px-6 md:px-16"
      style={{ background: "#fff" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span
              className="inline-flex items-center gap-2 text-[.75rem] font-medium tracking-[.1em] uppercase px-4 py-[.4rem]"
              style={{
                background: "var(--color-blush-lt)",
                color: "var(--color-blush-deep)",
                borderRadius: "999px",
              }}
            >
              <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: "var(--color-blush-deep)" }} />
              Ellas lo comprobaron
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--color-border-lt)" }} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-serif leading-[1.1] mb-12"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 400 }}
          >
            Pieles{" "}
            <em className="italic" style={{ color: "var(--color-blush-deep)" }}>
              reales
            </em>
            , resultados reales
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={0.1 + i * 0.12}>
              <div
                className="p-7 transition-all duration-300 relative"
                style={{
                  background: "var(--color-cream)",
                  border: "1px solid var(--color-border-lt)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-blush)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-border-lt)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Decorative quote mark */}
                <div
                  className="font-serif leading-none mb-4 select-none"
                  style={{
                    fontSize: "3rem",
                    color: "var(--color-blush-lt)",
                    lineHeight: 1,
                  }}
                  aria-hidden
                >
                  &ldquo;
                </div>

                {/* Stars */}
                <p
                  className="text-[.68rem] tracking-[.1em] mb-4"
                  style={{ color: "var(--color-blush-deep)" }}
                >
                  ★★★★★
                </p>

                {/* Quote */}
                <blockquote
                  className="font-serif italic text-[.96rem] leading-[1.78] mb-5"
                  style={{ color: "var(--color-deep)" }}
                >
                  {r.quote}
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center justify-between">
                  <p
                    className="text-[.65rem] font-medium tracking-[.1em] uppercase"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {r.name}
                  </p>
                  <span
                    className="text-[.58rem] px-[.7rem] py-[.2rem]"
                    style={{
                      background: "var(--color-blush-pale)",
                      color: "var(--color-blush-deep)",
                      borderRadius: "999px",
                    }}
                  >
                    {r.tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
