"use client";

import Reveal from "./ui/Reveal";

const WA =
  "https://wa.me/541157502715?text=" +
  encodeURIComponent("Hola Caro! Quería saber más sobre Hydrapen 🌿");

const benefits = [
  "Mejora la textura de la piel",
  "Disminuye arrugas y líneas de expresión",
  "Reduce cicatrices de acné",
  "Disminuye poros dilatados",
  "Aporta hidratación intensiva",
  "Unifica el tono y aporta luminosidad",
];

export default function Hydrapen() {
  return (
    <section
      id="hydrapen"
      className="py-20 md:py-28 px-6 md:px-16"
      style={{ background: "#fff" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-12 md:gap-20 items-center">
          {/* ── Text column ── */}
          <div className="order-2 md:order-1">
            <Reveal>
              <span
                className="inline-flex items-center gap-2 text-[.75rem] font-medium tracking-[.1em] uppercase mb-6 px-4 py-[.4rem]"
                style={{
                  background: "var(--color-gold-pale)",
                  color: "var(--color-gold)",
                  borderRadius: "999px",
                }}
              >
                <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: "var(--color-gold)" }} />
                Nuevo en el gabinete
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="font-serif leading-[1.1] mb-6"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 400 }}
              >
                Conocé{" "}
                <em className="italic" style={{ color: "var(--color-blush-deep)" }}>
                  Hydrapen
                </em>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div
                className="text-[.9rem] leading-[1.95] space-y-3 mb-7"
                style={{ color: "var(--color-mid)" }}
              >
                <p>
                  Es un dispositivo avanzado de microneedling que automatiza la
                  aplicación de sueros, mejorando la absorción de principios
                  activos hasta 5 veces más que la aplicación manual.
                </p>
                <p>
                  Combina microagujas con un contenedor de suero, con
                  cobertura automática de 360°, facilitando tratamientos de
                  rejuvenecimiento, hidratación, reducción de poros y
                  cicatrices de acné — con resultados visibles desde las
                  primeras sesiones.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-9">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-[.82rem] leading-[1.5]"
                    style={{ color: "var(--color-deep)" }}
                  >
                    <span
                      className="mt-[.35rem] w-[5px] h-[5px] rounded-full flex-shrink-0"
                      style={{ background: "var(--color-gold)" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.4}>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[.73rem] tracking-[.12em] uppercase text-white px-7 py-4 transition-all duration-300 hover:-translate-y-[2px] hover:opacity-90"
                style={{ background: "var(--color-deep)" }}
              >
                Consultar por Hydrapen
              </a>
            </Reveal>
          </div>

          {/* ── Photo column ── */}
          <Reveal delay={0.15} className="order-1 md:order-2">
            <div className="relative">
              <div
                className="absolute -top-4 -right-4 left-4 bottom-4 pointer-events-none"
                style={{ border: "1px solid var(--color-gold-pale)" }}
              />
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/tratamientos/hydrapen-hero.jpg"
                  alt="Hydrapen — microneedling con infusión automática de activos"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "top" }}
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
