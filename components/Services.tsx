"use client";

import { useState } from "react";
import Reveal from "./ui/Reveal";

interface Service {
  name: string;
  desc?: string;
  price?: string | string[];
  wa?: string;
  badge?: string;
}

interface Category {
  key: string;
  label: string;
  note?: string;
  services: Service[];
}

const WA_BASE = "https://wa.me/541157502715?text=";
const wa = (msg: string) => `${WA_BASE}${encodeURIComponent(msg)}`;

const categories: Category[] = [
  {
    key: "limpieza-facial",
    label: "Limpieza Facial",
    services: [
      {
        name: "Limpieza Facial Profunda",
        desc: "Limpieza facial profunda con extracciones que oxigena, hidrata y recupera la frescura y luminosidad de la piel.",
        price: "$50.000",
        wa: wa("Hola Caro! Me interesa la Limpieza Facial Profunda 🌿"),
      },
      {
        name: "Limpieza Facial Premium",
        desc: "Limpieza facial profunda con extracciones, incluye dermaplaning y activos que nutren e hidratan la piel en profundidad, aplicados con aparatología.",
        price: "$65.000",
        wa: wa("Hola Caro! Me interesa la Limpieza Facial Premium 🌿"),
      },
      {
        name: "Limpieza Profunda K Products",
        desc: "Limpieza facial profunda combinando dermaplaning, aparatología y cosméticos coreanos de alta tecnología, que promueve la vitalidad natural y la reparación cutánea.",
        price: "$80.000",
        badge: "Nuevo",
        wa: wa("Hola Caro! Me interesa la Limpieza Profunda K Products 🌿"),
      },
    ],
  },
  {
    key: "renovacion-peeling",
    label: "Renovación Peeling",
    services: [
      {
        name: "Peeling Enzimático",
        desc: "Exfoliación suave que no agrede la barrera cutánea. Ideal para pieles sensibles, primeros peelings y mantener la piel saludable, dejándola más suave y luminosa.",
        price: "$65.000",
        badge: "Nuevo",
        wa: wa("Hola Caro! Me interesa el Peeling Enzimático 🌿"),
      },
      {
        name: "Yellow Peel Retinol",
        desc: "Uno de los tratamientos más completos: renovación intensa que mejora manchas y reduce líneas finas, estimulando la regeneración de la piel.",
        price: "$70.000",
        badge: "Nuevo",
        wa: wa("Hola Caro! Me interesa el Yellow Peel Retinol 🌿"),
      },
      {
        name: "Acno Reparador",
        desc: "Pensado para acné activo, marcas post acné y poros dilatados. Mejora la textura de la piel y acompaña el tratamiento de las imperfecciones.",
        price: "$65.000",
        badge: "Nuevo",
        wa: wa("Hola Caro! Me interesa el tratamiento Acno Reparador 🌿"),
      },
      {
        name: "Miami Peel",
        desc: "Ideal para manchas, textura irregular y signos de fotoenvejecimiento. Promueve una renovación profunda para un rostro más uniforme.",
        price: "$65.000",
        badge: "Nuevo",
        wa: wa("Hola Caro! Me interesa el Miami Peel 🌿"),
      },
      {
        name: "Peeling Shine",
        desc: "Para más luminosidad, tono uniforme y piel apagada o cansada. Renueva la piel suavemente, devolviendo brillo desde las primeras sesiones.",
        price: "$65.000",
        badge: "Nuevo",
        wa: wa("Hola Caro! Me interesa el Peeling Shine 🌿"),
      },
    ],
  },
  {
    key: "pieles-reactivas",
    label: "Pieles Reactivas",
    note: "Específica para pieles con acné o rosácea.",
    services: [
      {
        name: "HIFU",
        desc: "Muy pronto vas a encontrar acá toda la información sobre este tratamiento.",
        badge: "Próximamente",
        wa: wa("Hola Caro! Quiero más información sobre HIFU 🌿"),
      },
      {
        name: "Skin Glass",
        desc: "Muy pronto vas a encontrar acá toda la información sobre este tratamiento.",
        badge: "Próximamente",
        wa: wa("Hola Caro! Quiero más información sobre Skin Glass 🌿"),
      },
    ],
  },
  {
    key: "tecnologia-facial",
    label: "Tecnología Facial",
    services: [
      {
        name: "Frax Face",
        desc: "Alta tecnología para rejuvenecer la piel de manera natural y progresiva. Elimina marcas producidas por acné y melasma.",
        price: "$65.000",
        wa: wa("Hola Caro! Me interesa el Frax Face 🌿"),
      },
      {
        name: "Radiofrecuencia",
        desc: "Técnica no invasiva que estimula la producción de colágeno con ondas electromagnéticas.",
        price: "$50.000",
        wa: wa("Hola Caro! Me interesa la Radiofrecuencia 🌿"),
      },
      {
        name: "Dermapen · Exosomas",
        desc: "Aplicación por medio de microagujas de principios activos acordes a la necesidad específica de tu piel.",
        price: "$65.000",
        wa: wa("Hola Caro! Me interesa Dermapen Exosomas 🌿"),
      },
      {
        name: "Hydrapen",
        desc: "Microneedling con infusión automática de activos: a través de electroporación, mejora la absorción hasta 5 veces más que la aplicación manual.",
        price: "$80.000",
        badge: "Nuevo",
        wa: wa("Hola Caro! Me interesa el tratamiento con Hydrapen 🌿"),
      },
      {
        name: "Exosomas",
        desc: "Regenera, mejora la firmeza de la piel y atenúa manchas y cicatrices.",
        price: "$58.000",
        wa: wa("Hola Caro! Me interesa Exosomas 🌿"),
      },
    ],
  },
];

function ServiceCard({
  s,
  open,
  onToggle,
}: {
  s: Service;
  open: boolean;
  onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const active = open || hovered;
  const isComingSoon = s.badge === "Próximamente";

  return (
    <div
      className="relative bg-white select-none"
      style={{
        minHeight: "98px",
        border: `1px solid ${active ? "var(--color-blush)" : "var(--color-border-lt)"}`,
        transform: active ? "translateY(-3px)" : "translateY(0)",
        transition: "border-color 300ms ease, transform 300ms ease",
      }}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setHovered(false);
      }}
    >
      {/* Collapsed: name + expand indicator — tapping this opens the card */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left pl-6 pr-5 py-6 flex items-center justify-between gap-4 h-full cursor-pointer"
      >
        <p
          className="text-[.95rem] font-semibold leading-snug"
          style={{ color: "var(--color-deep)" }}
        >
          {s.name}
        </p>
        <span
          className="flex items-center justify-center w-7 h-7 shrink-0 text-[.85rem] leading-none"
          style={{
            border: `1px solid ${active ? "var(--color-blush-deep)" : "var(--color-border-lt)"}`,
            borderRadius: "999px",
            background: active ? "var(--color-blush-deep)" : "transparent",
            color: active ? "#fff" : "var(--color-blush-deep)",
            transform: active ? "rotate(45deg)" : "rotate(0deg)",
            transition: "all 300ms ease",
          }}
          aria-hidden
        >
          +
        </span>
      </button>

      {/*
        Mobile (<sm): accordion — grows inline and pushes the next card
        down, so nothing ever gets covered. The collapsed header above
        stays visible and its rotated "+" doubles as the close control.
        Desktop (sm+): floating overlay above the row below, with its
        own header (name, badge, explicit × close button).
      */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out border-t sm:border-t-0 sm:overflow-visible sm:absolute sm:left-0 sm:right-0 sm:top-0 sm:z-30 sm:bg-white ${
          active
            ? "max-h-[640px] opacity-100 sm:max-h-none sm:visible sm:translate-y-0 sm:pointer-events-auto"
            : "max-h-0 opacity-0 sm:invisible sm:-translate-y-1.5 sm:pointer-events-none"
        }`}
        style={{ borderTopColor: "var(--color-border-lt)" }}
      >
        <div
          className="p-7 sm:border sm:shadow-[0_20px_44px_-16px_rgba(28,20,18,0.24)]"
          style={{ borderColor: "var(--color-blush)" }}
        >
          {/* Mobile-only badge (name + close live in the header above) */}
          {s.badge && (
            <span
              className="sm:hidden inline-block mb-3 text-[.62rem] font-semibold tracking-[.08em] uppercase px-[.6rem] py-[.25rem]"
              style={{
                background: isComingSoon ? "var(--color-sage)" : "var(--color-gold)",
                color: "#fff",
                borderRadius: "999px",
              }}
            >
              {s.badge}
            </span>
          )}

          {/* Desktop-only header: name repeat + badge + explicit close */}
          <div className="hidden sm:flex items-start justify-between gap-3 mb-2">
            <p
              className="text-[1rem] font-semibold leading-snug"
              style={{ color: "var(--color-deep)" }}
            >
              {s.name}
            </p>
            <div className="flex items-center gap-2 shrink-0">
              {s.badge && (
                <span
                  className="text-[.62rem] font-semibold tracking-[.08em] uppercase px-[.6rem] py-[.25rem]"
                  style={{
                    background: isComingSoon
                      ? "var(--color-sage)"
                      : "var(--color-gold)",
                    color: "#fff",
                    borderRadius: "999px",
                  }}
                >
                  {s.badge}
                </span>
              )}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                aria-label="Cerrar detalle"
                className="flex items-center justify-center w-7 h-7 shrink-0 text-[.85rem] leading-none cursor-pointer"
                style={{
                  border: "1px solid var(--color-border-lt)",
                  borderRadius: "999px",
                  color: "var(--color-muted)",
                }}
              >
                ×
              </button>
            </div>
          </div>
          <div
            className="hidden sm:block h-px w-8 mb-3"
            style={{ background: "var(--color-blush)" }}
          />
          {s.desc && (
            <p
              className="text-[.85rem] leading-[1.75] mb-4"
              style={{ color: "var(--color-muted)" }}
            >
              {s.desc}
            </p>
          )}

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

          {s.wa && (
            <a
              href={s.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta flex items-center gap-1 mt-4 text-[.7rem] tracking-[.1em] uppercase font-medium w-fit"
              style={{ color: "var(--color-blush-deep)" }}
            >
              Consultar
              <span className="inline-block transition-transform duration-200 group-hover/cta:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Owns its own z-index so the expanded overlay can escape above the
// card row below it — grid siblings otherwise paint in DOM order and
// bury the overlay under the next row regardless of its own z-index.
function ServiceCardSlot({
  s,
  delay,
  open,
  onToggle,
}: {
  s: Service;
  delay: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`relative ${open ? "z-40" : "z-0"} hover:z-40`}>
      <Reveal delay={delay}>
        <ServiceCard s={s} open={open} onToggle={onToggle} />
      </Reveal>
    </div>
  );
}

export default function Services() {
  const [cat, setCat] = useState<string>(categories[0].key);
  // Only one card open at a time — opening a new one closes whichever
  // was open, so nothing overlaps or gets stuck on mobile.
  const [openKey, setOpenKey] = useState<string | null>(null);
  const active = categories.find((c) => c.key === cat)!;

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
              className="inline-flex items-center gap-2 text-[.75rem] font-semibold tracking-[.08em] uppercase px-4 py-[.4rem]"
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
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700 }}
          >
            Tratamientos para{" "}
            <em className="italic" style={{ color: "var(--color-blush-deep)" }}>
              cada tipo de piel
            </em>
          </h2>
        </Reveal>

        <Reveal delay={0.13}>
          <p
            className="text-[.82rem] italic leading-[1.7] mb-6 max-w-[520px]"
            style={{ color: "var(--color-muted)" }}
          >
            Todos los tratamientos están sujetos a un protocolo personalizado según la necesidad de tu piel.
          </p>
        </Reveal>

        {/* Recommendation banner */}
        <Reveal delay={0.14}>
          <div
            className="mb-8 px-6 py-5 max-w-[720px]"
            style={{
              background: "var(--color-gold-xp)",
              borderLeft: "3px solid var(--color-gold)",
            }}
          >
            <p
              className="text-[.85rem] leading-[1.7]"
              style={{ color: "var(--color-deep)" }}
            >
              <strong className="font-semibold">Recomendación:</strong> si es
              tu primera vez, sacá turno para Limpieza Facial Profunda. Está
              incluida la consulta y el asesoramiento sobre rutinas de
              skincare.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => {
              const isActive = cat === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => {
                    setCat(c.key);
                    setOpenKey(null);
                  }}
                  className="px-5 py-[.6rem] text-[.7rem] font-semibold tracking-[.08em] uppercase transition-all duration-300"
                  style={{
                    background: isActive
                      ? "var(--color-deep)"
                      : "var(--color-blush-pale)",
                    color: isActive ? "#fff" : "var(--color-mid)",
                    border: `1px solid ${
                      isActive ? "var(--color-deep)" : "var(--color-border-lt)"
                    }`,
                    borderRadius: "999px",
                  }}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {active.note && (
          <Reveal delay={0.17}>
            <p
              className="flex items-center gap-2 text-[.8rem] italic leading-[1.6] mb-6"
              style={{ color: "var(--color-blush-deep)" }}
            >
              <span
                className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                style={{ background: "var(--color-blush-deep)" }}
              />
              {active.note}
            </p>
          </Reveal>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {active.services.map((s, i) => {
            const key = `${cat}-${s.name}`;
            return (
              <ServiceCardSlot
                key={key}
                s={s}
                delay={i * 0.04}
                open={openKey === key}
                onToggle={() =>
                  setOpenKey((k) => (k === key ? null : key))
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
