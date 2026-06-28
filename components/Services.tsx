"use client";

import { useState } from "react";
import Reveal from "./ui/Reveal";

interface Service {
  num: string;
  name: string;
  desc: string;
  price: string | string[];
  wa: string;
}

const WA_BASE = "https://wa.me/541157502715?text=";

const faciales: Service[] = [
  {
    num: "01",
    name: "Limpieza Facial Básica",
    desc: "Higiene de piel, punta de diamante, hidratación con mascarilla y masaje con crío sticks.",
    price: "$25.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20la%20Limpieza%20Facial%20B%C3%A1sica%20%F0%9F%8C%BF`,
  },
  {
    num: "02",
    name: "Limpieza Facial Profunda",
    desc: "Higiene facial, extracción de comedones y milliums, hidratación profunda, descongestión.",
    price: "$40.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20la%20Limpieza%20Facial%20Profunda%20%F0%9F%8C%BF`,
  },
  {
    num: "03",
    name: "Limpieza Facial Premium",
    desc: "Limpieza profunda + aparatología con radiofrecuencia y electroporación.",
    price: "$55.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20la%20Limpieza%20Premium%20%F0%9F%8C%BF`,
  },
  {
    num: "04",
    name: "Dermaplaning",
    desc: "Bisturí quirúrgico para afeitar suavemente la piel, eliminando vellitos y piel muerta.",
    price: "$44.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20el%20Dermaplaning%20%F0%9F%8C%BF`,
  },
  {
    num: "05",
    name: "Luz Pulsada",
    desc: "Pulsos de luz de alta intensidad para tratar manchas, rojeces y condiciones de la piel.",
    price: "$50.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Luz%20Pulsada%20%F0%9F%8C%BF`,
  },
  {
    num: "06",
    name: "Frax Face",
    desc: "Alta tecnología para rejuvenecer la piel de manera natural y progresiva.",
    price: "$80.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20el%20Frax%20Face%20%F0%9F%8C%BF`,
  },
  {
    num: "07",
    name: "Dermapen · Mesoterapia",
    desc: "Aplicación de principios activos acordes a la necesidad específica de tu piel.",
    price: "$44.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Dermapen%20Mesoterapia%20%F0%9F%8C%BF`,
  },
  {
    num: "08",
    name: "Radiofrecuencia",
    desc: "Técnica no invasiva que estimula la producción de colágeno con ondas electromagnéticas.",
    price: "$30.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20la%20Radiofrecuencia%20%F0%9F%8C%BF`,
  },
  {
    num: "09",
    name: "Peeling Químico",
    desc: "Descamación suave y poco visible para una piel más luminosa y renovada.",
    price: "$46.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20el%20Peeling%20Qu%C3%ADmico%20%F0%9F%8C%BF`,
  },
  {
    num: "10",
    name: "BB Glow",
    desc: "Tratamiento estético que mejora la apariencia de la piel y trabaja en imperfecciones.",
    price: "$65.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20el%20BB%20Glow%20%F0%9F%8C%BF`,
  },
  {
    num: "11",
    name: "Camuflaje de Manchas",
    desc: "Micropigmentación para unificar el tono en zonas con manchas faciales.",
    price: "$85.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Camuflaje%20de%20Manchas%20%F0%9F%8C%BF`,
  },
  {
    num: "12",
    name: "Exosomas",
    desc: "Regenera, mejora la firmeza de la piel y atenúa manchas y cicatrices.",
    price: "$58.000",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Exosomas%20%F0%9F%8C%BF`,
  },
  {
    num: "13",
    name: "Camuflaje de Ojeras",
    desc: "Método para aclarar el aspecto oscuro con pigmento similar al tono de la piel.",
    price: "$37.900",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Camuflaje%20de%20Ojeras%20%F0%9F%8C%BF`,
  },
];

const corporales: Service[] = [
  {
    num: "01",
    name: "Camuflaje de Estrías",
    desc: "Micropigmentación correctiva para disimular y unificar el tono en zonas con estrías.",
    price: ["Zona pequeña $39.000", "Zona mediana $69.000"],
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Camuflaje%20de%20Estr%C3%ADas%20%F0%9F%8C%BF`,
  },
  {
    num: "02",
    name: "Lipo Láser",
    desc: "Tratamiento no invasivo que reduce grasa localizada y ayuda a moldear la silueta.",
    price: "$15.000 por zona",
    wa: `${WA_BASE}Hola%20Caro!%20Me%20interesa%20Lipo%20L%C3%A1ser%20%F0%9F%8C%BF`,
  },
  {
    num: "03",
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
      className="group bg-white p-7 flex flex-col h-full transition-all duration-250"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background =
          "var(--color-blush-pale)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#fff";
      }}
    >
      <p
        className="font-serif italic text-[1.25rem] mb-3"
        style={{ color: "rgba(201,125,102,0.38)" }}
      >
        {s.num}
      </p>
      <p
        className="text-[1rem] font-semibold mb-3 leading-snug"
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
      ) : (
        <span
          className="inline-block text-[.73rem] font-medium px-3 py-[.3rem]"
          style={{
            background: "var(--color-blush-lt)",
            color: "var(--color-blush-deep)",
            borderRadius: "999px",
          }}
        >
          {s.price}
        </span>
      )}

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
            className="font-serif leading-[1.1] mb-8"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 400 }}
          >
            Tratamientos para{" "}
            <em className="italic" style={{ color: "var(--color-blush-deep)" }}>
              cada tipo de piel
            </em>
          </h2>
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
            <Reveal key={s.num} delay={i * 0.04} className="h-full">
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
