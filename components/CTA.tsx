"use client";

import Reveal from "./ui/Reveal";

const WA =
  "https://wa.me/541157502715?text=Hola%20Caro!%20Vi%20tu%20web%20y%20quer%C3%ADa%20sacar%20un%20turno%20para%20una%20evaluaci%C3%B3n%20de%20piel%20%F0%9F%8C%BF";
const IG = "https://www.instagram.com/caroveira_dermocosmiatra";

export default function CTA() {
  return (
    <section
      id="contacto"
      className="relative py-24 md:py-36 px-6 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-blush-lt), var(--color-blush-pale))",
      }}
    >
      {/* Decorative blob */}
      <div
        className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "70%",
          height: "120%",
          background:
            "radial-gradient(ellipse at center, rgba(232,184,168,0.35) 0%, transparent 70%)",
        }}
      />

      {/* Decorative rings */}
      {[560, 340].map((s, i) => (
        <div
          key={s}
          className="absolute rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: s,
            height: s,
            border: `1px solid rgba(201,125,102,${i === 0 ? ".1" : ".16"})`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-xl mx-auto">
        <Reveal>
          <span
            className="inline-flex items-center gap-2 text-[.75rem] font-medium tracking-[.08em] uppercase mb-7 px-4 py-[.4rem]"
            style={{
              background: "rgba(201,125,102,0.14)",
              color: "var(--color-blush-deep)",
              borderRadius: "999px",
            }}
          >
            <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: "var(--color-blush-deep)" }} />
            Primera consulta con evaluación de piel
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-serif leading-[1.06] mb-5"
            style={{
              fontSize: "clamp(2.4rem, 6.5vw, 4.2rem)",
              fontWeight: 400,
              color: "var(--color-deep)",
            }}
          >
            ¿Empezamos a
            <br />
            cuidar tu piel{" "}
            <em className="italic" style={{ color: "var(--color-blush-deep)" }}>
              hoy?
            </em>
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p
            className="text-[.9rem] leading-[1.88] max-w-[340px] mx-auto mb-10"
            style={{ color: "var(--color-mid)" }}
          >
            Sin protocolos genéricos. Solo resultados reales,
            <br />
            diseñados para tu piel. Crazy Studio, Tigre.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-[.73rem] tracking-[.12em] uppercase px-8 py-4 transition-all duration-300 hover:-translate-y-[2px] hover:opacity-90"
              style={{ background: "var(--color-deep)", color: "#fff" }}
            >
              Escribime por WhatsApp
            </a>
            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-[.73rem] tracking-[.12em] uppercase px-8 py-4 border transition-all duration-300"
              style={{
                color: "var(--color-mid)",
                borderColor: "var(--color-border)",
                background: "rgba(255,255,255,0.5)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-blush-deep)";
                el.style.color = "var(--color-blush-deep)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-border)";
                el.style.color = "var(--color-mid)";
              }}
            >
              Ver Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
