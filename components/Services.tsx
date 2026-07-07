"use client";

import { useState } from "react";
import Reveal from "./ui/Reveal";

interface Service {
  name: string;
  desc: string;
  price?: string | string[];
  wa: string;
  img?: string;
  badge?: string;
}

const WA_BASE = "https://wa.me/541157502715?text=";
const wa = (msg: string) => `${WA_BASE}${encodeURIComponent(msg)}`;

const faciales: Service[] = [
  {
    name: "Limpieza Facial Básica",
    desc: "Higiene de piel, punta de diamante, hidratación con mascarilla y masaje con crío sticks.",
    price: "$25.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20la%20Limpieza%20Facial%20B%C3%A1sica%20%F0%9F%8C%BF`,
  },
  {
    name: "Limpieza Facial Profunda",
    desc: "Limpieza facial profunda con extracciones que oxigena, hidrata y recupera la frescura y luminosidad de la piel.",
    price: "$50.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20la%20Limpieza%20Facial%20Profunda%20%F0%9F%8C%BF`,
  },
  {
    name: "Limpieza Facial Premium",
    desc: "Limpieza facial profunda con extracciones, incluye dermaplaning y activos que nutren e hidratan la piel en profundidad, aplicados con aparatología.",
    price: "$65.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20la%20Limpieza%20Premium%20%F0%9F%8C%BF`,
  },
  {
    name: "Limpieza Profunda K Products",
    desc: "Limpieza facial profunda combinando dermaplaning, aparatología y cosméticos coreanos de alta tecnología, que promueve la vitalidad natural y la reparación cutánea.",
    price: "$80.000",
    badge: "Nuevo",
    wa: wa("Hola Caro! Me interesa la Limpieza Profunda K Products 🌿"),
  },
  {
    name: "Dermaplaning",
    desc: "Bisturí quirúrgico para afeitar suavemente la piel, eliminando vellitos y piel muerta. Piel de porcelana en una sesión, sin dolor ni recuperación.",
    price: "$44.000",
    img: "/images/tratamientos/dermaplaning.jpg",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20el%20Dermaplaning%20%F0%9F%8C%BF`,
  },
  {
    name: "Luz Pulsada",
    desc: "Pulsos de luz de alta intensidad para tratar manchas, rojeces y condiciones de la piel.",
    price: "$50.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Luz%20Pulsada%20%F0%9F%8C%BF`,
  },
  {
    name: "Frax Face",
    desc: "Alta tecnología para rejuvenecer la piel de manera natural y progresiva.",
    price: "$80.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20el%20Frax%20Face%20%F0%9F%8C%BF`,
  },
  {
    name: "Dermapen · Mesoterapia",
    desc: "Aplicación de principios activos acordes a la necesidad específica de tu piel.",
    price: "$44.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Dermapen%20Mesoterapia%20%F0%9F%8C%BF`,
  },
  {
    name: "Hydrapen",
    desc: "Microneedling con infusión automática de activos: mejora la absorción hasta 5 veces más que la aplicación manual. Reduce arrugas, cicatrices de acné, poros dilatados y estrías, con hidratación intensiva y luminosidad.",
    price: "Consultar",
    badge: "Nuevo",
    wa: wa("Hola Caro! Me interesa el tratamiento con Hydrapen 🌿"),
  },
  {
    name: "Radiofrecuencia",
    desc: "Técnica no invasiva que estimula la producción de colágeno con ondas electromagnéticas.",
    price: "$30.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20la%20Radiofrecuencia%20%F0%9F%8C%BF`,
  },
  {
    name: "Peeling · ¿Para qué sirve?",
    desc: "Mejora el acné, atenúa manchas, reduce líneas de expresión, unifica el tono de la piel y devuelve luminosidad. Tratamientos personalizados según tu tipo de piel — elegí el que más se ajusta a vos entre las opciones de abajo.",
    wa: wa("Hola Caro! Me interesan los Peelings, ¿cuál me recomendás para mi piel? 🌿"),
  },
  {
    name: "Peeling Enzimático",
    desc: "Exfoliación suave que no agrede la barrera cutánea. Ideal para pieles sensibles, primeros peelings y mantener la piel saludable, dejándola más suave y luminosa.",
    price: "$65.000",
    img: "/images/tratamientos/peeling-enzimatico.jpg",
    badge: "Nuevo",
    wa: wa("Hola Caro! Me interesa el Peeling Enzimático 🌿"),
  },
  {
    name: "Yellow Peel Retinol",
    desc: "Uno de los tratamientos más completos: renovación intensa que mejora manchas y reduce líneas finas, estimulando la regeneración de la piel.",
    price: "$70.000",
    img: "/images/tratamientos/yellow-peel-retinol.jpg",
    badge: "Nuevo",
    wa: wa("Hola Caro! Me interesa el Yellow Peel Retinol 🌿"),
  },
  {
    name: "Acno Reparador",
    desc: "Pensado para acné activo, marcas post acné y poros dilatados. Mejora la textura de la piel y acompaña el tratamiento de las imperfecciones.",
    price: "$65.000",
    img: "/images/tratamientos/acno-reparador.jpg",
    badge: "Nuevo",
    wa: wa("Hola Caro! Me interesa el tratamiento Acno Reparador 🌿"),
  },
  {
    name: "Miami Peel",
    desc: "Ideal para manchas, textura irregular y signos de fotoenvejecimiento. Promueve una renovación profunda para un rostro más uniforme.",
    price: "$67.000",
    img: "/images/tratamientos/miami-peel.jpg",
    badge: "Nuevo",
    wa: wa("Hola Caro! Me interesa el Miami Peel 🌿"),
  },
  {
    name: "Peeling Shine",
    desc: "Para más luminosidad, tono uniforme y piel apagada o cansada. Renueva la piel suavemente, devolviendo brillo desde las primeras sesiones.",
    price: "$67.000",
    img: "/images/tratamientos/peeling-shine.jpg",
    badge: "Nuevo",
    wa: wa("Hola Caro! Me interesa el Peeling Shine 🌿"),
  },
  {
    name: "Piel de Seda",
    desc: "Nutrición profunda con efecto glow inmediato y duradero.",
    price: "$65.000",
    badge: "Nuevo",
    wa: wa("Hola Caro! Me interesa el tratamiento Piel de Seda 🌿"),
  },
  {
    name: "BB Glow",
    desc: "Tratamiento estético que mejora la apariencia de la piel y trabaja en imperfecciones.",
    price: "$65.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20el%20BB%20Glow%20%F0%9F%8C%BF`,
  },
  {
    name: "Camuflaje de Manchas",
    desc: "Micropigmentación para unificar el tono en zonas con manchas faciales.",
    price: "$85.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Camuflaje%20de%20Manchas%20%F0%9F%8C%BF`,
  },
  {
    name: "Exosomas",
    desc: "Regenera, mejora la firmeza de la piel y atenúa manchas y cicatrices.",
    price: "$58.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Exosomas%20%F0%9F%8C%BF`,
  },
  {
    name: "Camuflaje de Ojeras",
    desc: "Método para aclarar el aspecto oscuro con pigmento similar al tono de la piel.",
    price: "$37.900",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Camuflaje%20de%20Ojeras%20%F0%9F%8C%BF`,
  },
];

const corporales: Service[] = [
  {
    name: "Camuflaje de Estrías",
    desc: "Micropigmentación correctiva para disimular y unificar el tono en zonas con estrías.",
    price: ["Zona pequeña $39.000", "Zona mediana $69.000"],
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Camuflaje%20de%20Estr%C3%ADas%20%F0%9F%8C%BF`,
  },
  {
    name: "Lipo Láser",
    desc: "Tratamiento no invasivo que reduce grasa localizada y ayuda a moldear la silueta.",
    price: "$15.000 por zona",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Lipo%20L%C3%A1ser%20%F0%9F%8C%BF`,
  },
  {
    name: "Frax Corporal",
    desc: "Tecnología fraccionada que estimula colágeno y elastina. Ideal para estrías, cicatrices y flacidez.",
    price: [
      "Muslos $39.000",
      "Glúteos $69.000",
      "Espalda $69.000",
      "Abdomen $39.000",
    ],
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Frax%20Corporal%20%F0%9F%8C%BF`,
  },
];

function ServiceCard({ s }: { s: Service }) {
  return (
    <div
      className="group bg-white flex flex-col h-full transition-all duration-250"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background =
          "var(--color-blush-pale)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#fff";
      }}
    >
      {s.img && (
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.img}
            alt={s.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-7 flex flex-col flex-1 relative">
        {s.badge && (
          <span
            className="absolute top-4 right-4 text-[.62rem] font-medium tracking-[.08em] uppercase px-[.6rem] py-[.25rem]"
            style={{
              background: "var(--color-gold)",
              color: "#fff",
              borderRadius: "999px",
            }}
          >
            {s.badge}
          </span>
        )}

        <p
          className="text-[1rem] font-semibold mb-3 leading-snug pr-10"
          style={{ color: "var(--color-deep)" }}
        >
          {s.name}
        </p>
        <p
          className="text-[.85rem] leading-[1.75] mb-4 flex-1"
          style={{ color: "var(--color-muted)" }}
        >
          {s.desc}
        </p>

        {Array.isArray(s.price) ? (
          <div className="flex flex-wrap gap-[6px] mb-2">
            {s.price.map((p) => (
              <span
                key={p}
                className="inline-block text-[.72rem] font-medium px-3 py-[.3rem]"
                style={{
                  background: "var(--color-blush-lt)",
                  color: "var(--color-blush-deep)",
                  borderRadius: "999px",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        ) : s.price ? (
          <span
            className="inline-block text-[.73rem] font-medium px-3 py-[.3rem] w-fit"
            style={{
              background: "var(--color-blush-lt)",
              color: "var(--color-blush-deep)",
              borderRadius: "999px",
            }}
          >
            {s.price}
          </span>
        ) : null}

        <a
          href={s.wa}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden group-hover:flex items-center gap-1 mt-4 text-[.7rem] tracking-[.1em] uppercase font-medium"
          style={{ color: "var(--color-blush-deep)" }}
        >
          Consultar →
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const [tab, setTab] = useState<"facial" | "corporal">("facial");
  const list = tab === "facial" ? faciales : corporales;

  return (
    <section
      id="servicios"
      className="py-20 md:py-28 px-6 md:px-16"
      style={{ background: "var(--color-cream)" }}
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
              Mis tratamientos
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--color-border-lt)" }} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-serif leading-[1.1] mb-4"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 400 }}
          >
            Tratamientos para{" "}
            <em className="italic" style={{ color: "var(--color-blush-deep)" }}>
              cada tipo de piel
            </em>
          </h2>
        </Reveal>

        <Reveal delay={0.13}>
          <p
            className="text-[.82rem] italic leading-[1.7] mb-8 max-w-[520px]"
            style={{ color: "var(--color-muted)" }}
          >
            Todos los tratamientos están sujetos a un protocolo personalizado según la necesidad de tu piel.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.15}>
          <div
            className="flex gap-1 mb-8 p-1 w-fit"
            style={{
              background: "var(--color-blush-pale)",
              border: "1px solid var(--color-border-lt)",
            }}
          >
            {(["facial", "corporal"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-5 py-2 text-[.67rem] tracking-[.1em] uppercase transition-all duration-200"
                style={{
                  background:
                    tab === t ? "var(--color-deep)" : "transparent",
                  color: tab === t ? "#fff" : "var(--color-muted)",
                }}
              >
                {t === "facial" ? "Faciales" : "Corporales"}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div
          className="grid gap-px"
          style={{
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 270px), 1fr))",
            gridAutoRows: "1fr",
            background: "var(--color-border-lt)",
          }}
        >
          {list.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04} className="h-full">
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
