import Reveal from "./ui/Reveal";

const features = [
  {
    num: "01",
    title: "K-Beauty",
    desc: "Activos coreanos de última generación para resultados visibles.",
  },
  {
    num: "02",
    title: "Tecnología",
    desc: "Radiofrecuencia, Frax, Dermapen, Hydrapen y más.",
  },
  {
    num: "03",
    title: "Personalizado",
    desc: "Protocolo diseñado exclusivamente para tu piel.",
  },
  {
    num: "04",
    title: "Resultados",
    desc: "Cambios visibles y duraderos desde la primera sesión.",
  },
];

export default function FeatureStrip() {
  return (
    <div
      style={{
        background: "var(--color-blush-pale)",
        borderTop: "1px solid var(--color-border-lt)",
        borderBottom: "1px solid var(--color-border-lt)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 px-6 md:px-16">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08}>
            <div
              className="py-8 px-4 md:px-7"
              style={{
                borderRight:
                  i < features.length - 1
                    ? "1px solid var(--color-border-lt)"
                    : "none",
              }}
            >
              <span
                className="font-serif italic text-[.78rem] block mb-3"
                style={{ color: "rgba(201,125,102,0.55)" }}
              >
                {f.num}
              </span>
              <span
                className="text-[.85rem] font-medium block mb-[6px]"
                style={{ color: "var(--color-deep)" }}
              >
                {f.title}
              </span>
              <span
                className="text-[.74rem] leading-[1.65] block"
                style={{ color: "var(--color-muted)" }}
              >
                {f.desc}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
