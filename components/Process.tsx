import Reveal from "./ui/Reveal";

const WA =
  "https://wa.me/541157502715?text=Hola%20Caro!%20Quer%C3%ADa%20sacar%20un%20turno%20%F0%9F%8C%BF";

const steps = [
  {
    num: "1",
    title: "Escribime por WhatsApp",
    desc: "Contame qué te preocupa de tu piel o qué resultado buscás. Te respondo rápido.",
  },
  {
    num: "2",
    title: "Evaluación personalizada",
    desc: "Analizamos tu piel en detalle y definimos juntas el protocolo ideal para vos.",
  },
  {
    num: "3",
    title: "Tu piel se transforma",
    desc: "Comenzamos el tratamiento y hacemos seguimiento en cada sesión. La diferencia se siente.",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="py-20 md:py-28 px-6 md:px-16 relative overflow-hidden"
      style={{ background: "var(--color-deep)" }}
    >
      {/* Decorative background blob */}
      <div
        className="blob absolute right-[-8%] top-[10%] w-[40%] h-[80%] pointer-events-none"
        style={{ background: "rgba(232,184,168,0.04)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span
              className="inline-flex items-center gap-2 text-[.75rem] font-medium tracking-[.1em] uppercase px-4 py-[.4rem]"
              style={{
                background: "rgba(232,184,168,0.12)",
                color: "var(--color-blush)",
                borderRadius: "999px",
              }}
            >
              <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: "var(--color-blush)" }} />
              Cómo funciona
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(232,184,168,0.08)" }} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-serif text-white leading-[1.1] mb-14"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 400 }}
          >
            Sacar turno es{" "}
            <em className="italic" style={{ color: "var(--color-blush)" }}>
              muy fácil
            </em>
          </h2>
        </Reveal>

        {/* Steps */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
          style={{ borderTop: "1px solid rgba(232,184,168,0.1)" }}
        >
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={0.2 + i * 0.12} className="flex-1">
              <div
                className="py-8 md:pr-10"
                style={{
                  borderBottom:
                    i < steps.length - 1
                      ? "1px solid rgba(232,184,168,0.07)"
                      : "none",
                  borderRight: "none",
                }}
              >
                <div className="flex md:flex-col gap-5 md:gap-4">
                  {/* Number */}
                  <span
                    className="font-serif italic leading-none flex-shrink-0"
                    style={{
                      fontSize: "clamp(3rem, 7vw, 4.5rem)",
                      color: "rgba(232,184,168,0.12)",
                      minWidth: "2.5rem",
                    }}
                  >
                    {s.num}
                  </span>

                  <div className="pt-1 md:pt-0">
                    <p
                      className="text-[.85rem] font-medium mb-2"
                      style={{ color: "#fff" }}
                    >
                      {s.title}
                    </p>
                    <p
                      className="text-[.76rem] leading-[1.85]"
                      style={{ color: "rgba(255,255,255,.28)" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.58}>
          <div className="mt-12">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[.73rem] tracking-[.12em] uppercase px-8 py-4 transition-all duration-300 hover:-translate-y-[2px]"
              style={{
                background: "var(--color-blush-deep)",
                color: "#fff",
              }}
            >
              Escribime ahora
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
