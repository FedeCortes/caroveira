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
      "El glass skin fue lo mejor que pude hacer por mi piel. Salí con una luminosidad que jamás tuve. Súper recomendada.",
    name: "Lucía P.",
    tag: "Glass Skin",
  },
  {
    quote:
      "La verdad muchísimo mejor, me salen muy pocos granitos y ya no duelen. Lo único que tengo son las manchitas de los brotes anteriores.",
    name: "Camila P.",
    tag: "Piel acneica",
  },
  {
    quote:
      "En mi vida me había levantado con la cara tan linda. Y los labios también. ¡Gracias!",
    name: "Sofía G.",
    tag: "Glow skin",
  },
  {
    quote:
      "Hoy tengo la cara increíble. Lo de la frente bajó un montonazo, ya casi no tengo nada.",
    name: "Yael C.",
    tag: "Rejuvenecimiento",
  },
];

const rowA = reviews.slice(0, 3);
const rowB = reviews.slice(3, 6);

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div
      className="shrink-0 w-[300px] sm:w-[360px] mx-[10px] p-7 transition-all duration-300 relative"
      style={{
        background: "var(--color-cream)",
        border: "1px solid var(--color-border-lt)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--color-blush)";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 16px 36px -18px rgba(28,20,18,0.25)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--color-border-lt)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Decorative quote mark */}
      <div
        className="leading-none mb-4 select-none"
        style={{ fontSize: "3rem", color: "var(--color-blush-lt)", lineHeight: 1 }}
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
        className="italic text-[.96rem] leading-[1.78] mb-6"
        style={{ color: "var(--color-deep)" }}
      >
        {r.quote}
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center justify-between">
        <p
          className="text-[.65rem] font-semibold tracking-[.08em] uppercase"
          style={{ color: "var(--color-muted)" }}
        >
          {r.name}
        </p>
        <span
          className="text-[.58rem] font-medium px-[.7rem] py-[.2rem]"
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
  );
}

function MarqueeRow({
  items,
  reverse,
  duration,
}: {
  items: typeof reviews;
  reverse?: boolean;
  duration: number;
}) {
  return (
    <div className="testimonial-row overflow-hidden">
      <div
        className={`flex w-max ${
          reverse ? "testimonial-track-reverse" : "testimonial-track"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...items, ...items].map((r, i) => (
          <ReviewCard key={i} r={r} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-16">

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
              Ellas lo comprobaron
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--color-border-lt)" }} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-serif leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700 }}
          >
            Pieles{" "}
            <em className="italic" style={{ color: "var(--color-blush-deep)" }}>
              reales
            </em>
            , resultados reales
          </h2>
        </Reveal>

        {/* Trust bar */}
        <Reveal delay={0.18}>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-12">
            <div className="flex items-center gap-2">
              <span style={{ color: "var(--color-blush-deep)", fontSize: "1.1rem", letterSpacing: "2px" }}>
                ★★★★★
              </span>
              <span className="text-[.95rem] font-semibold" style={{ color: "var(--color-deep)" }}>
                4.9/5
              </span>
            </div>
            <div className="h-4 w-px hidden sm:block" style={{ background: "var(--color-border)" }} />
            <span className="text-[.8rem] font-medium" style={{ color: "var(--color-muted)" }}>
              +100 clientas atendidas
            </span>
            <div className="h-4 w-px hidden sm:block" style={{ background: "var(--color-border)" }} />
            <span className="text-[.8rem] font-medium" style={{ color: "var(--color-muted)" }}>
              Reseñas reales de WhatsApp
            </span>
          </div>
        </Reveal>
      </div>

      {/* Scrolling rows — full-bleed, fades at the edges */}
      <div
        className="space-y-5"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <MarqueeRow items={rowA} duration={38} />
        <MarqueeRow items={rowB} reverse duration={34} />
      </div>
    </section>
  );
}
