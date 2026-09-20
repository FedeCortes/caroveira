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

      {/* Layout */}
      <div className="flex flex-col flex-1 pt-[72px]">
        <div className="flex flex-1 items-center max-w-[1600px] w-full mx-auto">

          {/* ── Content ── */}
          <div className="flex-1 min-w-0 flex flex-col justify-center px-6 pt-6 pb-14 md:py-14 md:pl-[7rem] md:pr-10 relative z-10">

            {/* Badge */}
            <span
              className="inline-flex items-center gap-[6px] text-[.78rem] font-semibold tracking-[.08em] uppercase mb-8 px-4 py-[.45rem]"
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
                fontWeight: 700,
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

            {/* Photo banner (mobile only) */}
            <div
              className="md:hidden relative mb-7 overflow-hidden rounded-[28px]"
              style={{
                aspectRatio: "1/1",
                boxShadow: "0 20px 44px -18px rgba(28,20,18,0.35)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/caro-veira.jpg"
                alt="Caro Veira, dermocosmiatra"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center bottom" }}
                loading="eager"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(28,20,18,0) 55%, rgba(28,20,18,0.45) 100%)",
                }}
              />
              <span className="absolute left-5 bottom-4 text-[.78rem] font-semibold tracking-[.08em] uppercase text-white">
                Caro Veira
              </span>
            </div>

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
              className="text-[.98rem] leading-[1.95] max-w-[370px] mb-9"
              style={{ color: "var(--color-mid)" }}
            >
              Especialista en{" "}
              <strong className="font-semibold" style={{ color: "var(--color-deep)" }}>
                piel acneica y glow skin
              </strong>
              . Tecnología de vanguardia y cosmética coreana para{" "}
              <strong className="font-semibold" style={{ color: "var(--color-deep)" }}>
                resultados que se ven
              </strong>
              .
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA_EVAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-[.8rem] font-semibold tracking-[.08em] uppercase px-9 py-[1.15rem] transition-all duration-300 hover:-translate-y-[3px]"
                style={{
                  background: "var(--color-deep)",
                  color: "#fff",
                  borderRadius: "999px",
                  boxShadow: "0 10px 28px -10px rgba(28,20,18,0.45)",
                }}
              >
                Agendá tu evaluación
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center text-[.8rem] font-semibold tracking-[.08em] uppercase px-9 py-[1.15rem] border-2 transition-all duration-300 hover:-translate-y-[3px] hover:border-[var(--color-blush-deep)] hover:text-[var(--color-blush-deep)]"
                style={{
                  color: "var(--color-mid)",
                  borderColor: "var(--color-border)",
                  borderRadius: "999px",
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

          {/* ── Photo (desktop) ── */}
          <div
            className="hidden md:flex relative flex-shrink-0 items-center justify-center mr-10 lg:mr-16 z-10"
            style={{ width: "min(26vw, 360px)" }}
          >
            <div
              className="blob absolute"
              style={{
                width: "150%",
                height: "82%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background:
                  "linear-gradient(150deg, var(--color-blush-lt), var(--color-blush-pale))",
              }}
            />
            <div
              className="blob relative w-full overflow-hidden"
              style={{
                aspectRatio: "4/5",
                boxShadow: "0 34px 70px -22px rgba(28,20,18,0.32)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/caro-veira.jpg"
                alt="Caro Veira, dermocosmiatra"
                className="w-full h-full object-cover"
                style={{ objectPosition: "top center" }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
