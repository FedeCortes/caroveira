const WA_EVAL =
  "https://wa.me/541157502715?text=Hola%20Caro!%20Vi%20tu%20web%20y%20quer%C3%ADa%20sacar%20un%20turno%20para%20una%20evaluaci%C3%B3n%20de%20piel%20%F0%9F%8C%BF";


export default function Hero() {
  return (
    <section
      className="relative min-h-svh flex flex-col overflow-hidden"
      style={{ background: "var(--color-cream)" }}
    >
      {/* Watermark */}
      <div
        className="absolute bottom-[-0.05em] right-[-0.02em] font-serif italic pointer-events-none select-none z-0"
        aria-hidden
        style={{
          fontSize: "clamp(110px, 36vw, 360px)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(232,184,168,0.22)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        glow
      </div>

      {/* Blob (desktop right panel background) */}
      <div
        className="absolute right-0 top-0 bottom-0 hidden md:block pointer-events-none overflow-hidden"
        style={{ width: "42%" }}
      >
        <div
          className="blob absolute top-1/2 right-[-12%] -translate-y-1/2"
          style={{
            width: "112%",
            height: "70%",
            background:
              "linear-gradient(150deg, var(--color-blush-lt), var(--color-blush-pale))",
          }}
        />
      </div>

      {/* Layout */}
      <div className="flex flex-col flex-1 pt-[72px]">
        <div className="flex flex-col md:flex-row flex-1">

          {/* ── Left: content ── */}
          <div className="flex-1 flex flex-col justify-center px-6 py-14 md:pl-[7rem] md:pr-12 relative z-10">

            {/* Badge */}
            <span
              className="inline-flex items-center gap-[6px] text-[.78rem] font-medium tracking-[.08em] uppercase mb-8 px-4 py-[.45rem]"
              style={{
                background: "var(--color-blush-lt)",
                color: "var(--color-blush-deep)",
                borderRadius: "999px",
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "var(--color-blush-deep)" }}
              />
              Dermocosmiatra · Tigre, Bs As
            </span>

            {/* Headline */}
            <h1
              className="font-serif leading-[1.02] mb-7"
              style={{
                fontSize: "clamp(3.4rem, 11vw, 7.5rem)",
                fontWeight: 400,
                color: "var(--color-deep)",
              }}
            >
              Tu piel,
              <br />
              en su mejor
              <br />
              <em
                className="italic"
                style={{ color: "var(--color-blush-deep)" }}
              >
                versión.
              </em>
            </h1>

            {/* Accent divider */}
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-10 h-px"
                style={{ background: "var(--color-border)" }}
              />
              <div
                className="w-[5px] h-[5px] rotate-45 flex-shrink-0"
                style={{ background: "var(--color-blush)" }}
              />
            </div>

            {/* Description */}
            <p
              className="text-[.9rem] leading-[1.95] max-w-[370px] mb-9"
              style={{ color: "var(--color-muted)" }}
            >
              Especialista en piel acneica y glow skin. Tecnología de vanguardia
              y cosmética coreana para resultados que se ven.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA_EVAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-[.73rem] tracking-[.12em] uppercase px-8 py-[1.05rem] transition-all duration-300 hover:-translate-y-[2px] hover:opacity-90"
                style={{ background: "var(--color-deep)", color: "#fff" }}
              >
                Agendá tu evaluación
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center text-[.73rem] tracking-[.12em] uppercase px-8 py-[1.05rem] border transition-all duration-300 hover:border-[var(--color-blush-deep)] hover:text-[var(--color-blush-deep)]"
                style={{
                  color: "var(--color-mid)",
                  borderColor: "var(--color-border)",
                }}
              >
                Ver servicios
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 mt-12 pt-7"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              {[
                { val: "K-beauty", lbl: "Cosmética coreana" },
                { val: "Tigre", lbl: "Buenos Aires" },
                { val: "100%", lbl: "Personalizado" },
              ].map((s, i) => (
                <div
                  key={s.val}
                  className="text-center py-2"
                  style={{
                    borderRight:
                      i < 2 ? "1px solid var(--color-border)" : "none",
                  }}
                >
                  <span
                    className="block font-serif text-[1rem] mb-[.3rem]"
                    style={{ color: "var(--color-deep)" }}
                  >
                    {s.val}
                  </span>
                  <span
                    className="block text-[.52rem] tracking-[.13em] uppercase"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {s.lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: photo + floating cards ── */}
          <div className="hidden md:flex items-center justify-center flex-[0_0_42%] relative z-10 py-20 pl-4 pr-20">
            <div className="relative">

              {/* Offset decorative frame */}
              <div
                className="absolute pointer-events-none z-0"
                style={{
                  inset: 0,
                  transform: "translate(14px, 14px)",
                  border: "1px solid var(--color-blush)",
                }}
              />

              {/* Photo portrait */}
              <div
                className="relative overflow-hidden z-10"
                style={{
                  width: 290,
                  aspectRatio: "3/4",
                  background:
                    "linear-gradient(160deg, var(--color-blush-lt) 0%, var(--color-blush-pale) 55%, var(--color-cream) 100%)",
                }}
              >
                {/* Placeholder silhouette */}
                <div className="absolute inset-0 flex items-end justify-center pb-16 opacity-[0.12]">
                  <svg
                    width="110"
                    height="130"
                    viewBox="0 0 24 28"
                    fill="currentColor"
                    style={{ color: "var(--color-blush-deep)" }}
                  >
                    <ellipse cx="12" cy="7" rx="5" ry="6" />
                    <path d="M2 28c0-6 4.5-10.5 10-10.5S22 22 22 28Z" />
                  </svg>
                </div>

                {/* Bottom caption */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-5"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(28,20,18,.72) 0%, transparent 100%)",
                  }}
                >
                  <p className="font-serif text-white text-[1rem] mb-[3px]">
                    Caro Veira
                  </p>
                  <p
                    className="text-[.52rem] tracking-[.18em] uppercase"
                    style={{ color: "var(--color-blush)" }}
                  >
                    Dermocosmiatra · Tigre, Bs As
                  </p>
                </div>
              </div>

              {/* Floating card: social proof — top-left */}
              <div
                className="absolute z-20 flex items-center gap-3 px-4 py-[.75rem]"
                style={{
                  top: 28,
                  left: -56,
                  background: "#fff",
                  boxShadow: "0 8px 32px rgba(28,20,18,0.09)",
                }}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "var(--color-blush-pale)",
                    borderRadius: "50%",
                  }}
                >
                  <span style={{ fontSize: ".9rem", lineHeight: 1, color: "var(--color-blush-deep)" }}>
                    ★
                  </span>
                </div>
                <div>
                  <p
                    className="text-[.8rem] font-semibold leading-none mb-[5px]"
                    style={{ color: "var(--color-deep)" }}
                  >
                    +100 clientas
                  </p>
                  <p
                    className="text-[.56rem] tracking-[.1em] uppercase"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Valoraciones 5★
                  </p>
                </div>
              </div>

              {/* Floating pill: location — bottom-right */}
              <div
                className="absolute z-20 flex items-center gap-[7px] px-4 py-[.5rem]"
                style={{
                  bottom: 44,
                  right: -22,
                  background: "var(--color-deep)",
                  borderRadius: "999px",
                }}
              >
                <span
                  className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                  style={{ background: "var(--color-blush)" }}
                />
                <span
                  className="text-[.63rem] font-medium tracking-[.08em] uppercase"
                  style={{ color: "#fff" }}
                >
                  Crazy Studio · Tigre
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
