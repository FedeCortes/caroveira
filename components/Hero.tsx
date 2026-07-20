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
        <div className="flex flex-1">

          {/* ── Content ── */}
          <div className="flex-1 flex flex-col justify-center px-6 py-14 md:pl-[7rem] md:pr-12 max-w-5xl relative z-10">

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
              className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 mt-12 pt-7"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              {[
                { val: "K-beauty", lbl: "Cosmética coreana" },
                { val: "Tigre", lbl: "Buenos Aires" },
                { val: "100%", lbl: "Personalizado" },
                { val: "+100", lbl: "Clientas 5★" },
              ].map((s, i) => (
                <div
                  key={s.val}
                  className={`text-center py-2 ${
                    i === 3 ? "" : i === 1 ? "sm:border-r" : "border-r"
                  }`}
                  style={{ borderColor: "var(--color-border)" }}
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
        </div>
      </div>
    </section>
  );
}
