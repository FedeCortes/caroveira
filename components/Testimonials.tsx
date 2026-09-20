"use client";

import Reveal from "./ui/Reveal";

const reviews = [
  {
    quote:
      "Empecé con muchísimo acné y en pocas sesiones ya se notaba un montón el cambio. La verdad no lo podía creer.",
    name: "Valentina M.",
    tag: "Piel acneica",
    when: "2 sem",
  },
  {
    quote:
      "Tenía manchas de sol que no se me iban con nada. Después de unas sesiones con Caro ya se notan muchísimo menos.",
    name: "Sofía R.",
    tag: "Manchas",
    when: "1 mes",
  },
  {
    quote:
      "Me hice el glass skin y salí con una luminosidad que nunca había tenido. La piel quedó como cristal, en serio.",
    name: "Lucía P.",
    tag: "Glass Skin",
    when: "5 días",
  },
  {
    quote:
      "La verdad muchísimo mejor, me salen muy pocos granitos y ya no duelen. Lo único que tengo son las manchitas de los brotes anteriores.",
    name: "Camila P.",
    tag: "Piel acneica",
    when: "3 sem",
  },
  {
    quote:
      "En mi vida me había levantado con la cara tan linda. Y los labios también. Gracias 🤍",
    name: "Sofía G.",
    tag: "Glow skin",
    when: "1 sem",
  },
  {
    quote:
      "Hoy tengo la cara increíble. Lo de la frente bajó un montonazo, ya casi no tengo nada.",
    name: "Yael C.",
    tag: "Rejuvenecimiento",
    when: "2 meses",
  },
];

const avatarColors = [
  { bg: "var(--color-blush-lt)", fg: "var(--color-blush-deep)" },
  { bg: "var(--color-gold-pale)", fg: "var(--color-gold)" },
  { bg: "var(--color-sage-lt)", fg: "#4A6152" },
];

const rowA = reviews.slice(0, 3);
const rowB = reviews.slice(3, 6);

function VerifiedIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 2l2.4 1.9 3-.6 1 2.9 2.9 1-.6 3L22.6 12l-1.9 2.4.6 3-2.9 1-1 2.9-3-.6L12 22.6l-2.4-1.9-3 .6-1-2.9-2.9-1 .6-3L1.4 12l1.9-2.4-.6-3 2.9-1 1-2.9 3 .6L12 2z"
        fill="#4AA3E0"
      />
      <path
        d="M8.3 12.3l2.4 2.4 5-5"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReviewCard({ r, i }: { r: (typeof reviews)[number]; i: number }) {
  const avatar = avatarColors[i % avatarColors.length];
  return (
    <div
      className="shrink-0 w-[300px] sm:w-[340px] mx-[10px] p-6 transition-all duration-300 relative"
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
      {/* Header: avatar, name + verified, stars */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-[.85rem]"
          style={{ background: avatar.bg, color: avatar.fg }}
        >
          {r.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-[5px]">
            <span
              className="text-[.85rem] font-semibold truncate"
              style={{ color: "var(--color-deep)" }}
            >
              {r.name}
            </span>
            <VerifiedIcon />
          </div>
          <p
            className="text-[.68rem] truncate"
            style={{ color: "var(--color-muted)" }}
          >
            {r.tag} · {r.when}
          </p>
        </div>
        <span
          className="flex-shrink-0"
          style={{ color: "var(--color-blush-deep)", fontSize: ".72rem", letterSpacing: "1px" }}
        >
          ★★★★★
        </span>
      </div>

      {/* Quote */}
      <p
        className="text-[.92rem] leading-[1.7]"
        style={{ color: "var(--color-deep)" }}
      >
        {r.quote}
      </p>
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
          <ReviewCard key={i} r={r} i={i} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-14 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-16">

        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-8 md:mb-10">
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
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-8 md:mb-12">
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
