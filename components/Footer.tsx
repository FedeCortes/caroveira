"use client";

import { MapPin, ArrowUp } from "lucide-react";
import type { ComponentType } from "react";

function InstagramIcon({ size = 15 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ size = 15 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const navLinks = [
  { href: "#quien", label: "Quién soy" },
  { href: "#servicios", label: "Servicios" },
  { href: "#ubicacion", label: "Ubicación" },
];

const contactLinks = [
  {
    href: "https://www.instagram.com/caroveira_dermocosmiatra",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://wa.me/541157502715",
    label: "WhatsApp",
    icon: WhatsAppIcon,
  },
  {
    href: "https://maps.app.goo.gl/jWCmUY7T2b6cVShD7",
    label: "Cómo llegar",
    icon: MapPin,
  },
];

function FooterLink({
  href,
  label,
  external,
  icon: Icon,
}: {
  href: string;
  label: string;
  external?: boolean;
  icon?: ComponentType<{ size?: number; strokeWidth?: number }>;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center gap-2 text-[.8rem] no-underline transition-colors duration-200"
      style={{ color: "rgba(255,255,255,.55)" }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "var(--color-blush)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.55)")
      }
    >
      {Icon && <Icon size={15} strokeWidth={1.75} />}
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative" style={{ background: "var(--color-deep)" }}>
      {/* Brand accent strip */}
      <div
        style={{
          height: 3,
          background:
            "linear-gradient(90deg, var(--color-blush-deep), var(--color-blush), var(--color-blush-deep))",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-16 pt-12 pb-24 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-9 md:gap-12 mb-10 text-center md:text-left items-start">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#"
              className="font-serif text-[1.3rem] tracking-[.03em] no-underline mb-3 flex items-center gap-2"
              style={{ color: "#fff" }}
            >
              <span
                className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                style={{ background: "var(--color-blush)" }}
              />
              Caro <span style={{ color: "var(--color-blush)" }}>Veira</span>
            </a>
            <p
              className="text-[.82rem] leading-[1.85] max-w-[300px]"
              style={{ color: "rgba(255,255,255,.45)" }}
            >
              Dermocosmiatra especializada en piel acneica y glow skin.
              Protocolos personalizados en Crazy Studio, Tigre.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p
              className="text-[.65rem] font-medium tracking-[.14em] uppercase mb-4"
              style={{ color: "rgba(255,255,255,.3)" }}
            >
              Navegación
            </p>
            <ul className="list-none space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink {...l} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact links */}
          <div>
            <p
              className="text-[.65rem] font-medium tracking-[.14em] uppercase mb-4"
              style={{ color: "rgba(255,255,255,.3)" }}
            >
              Contacto
            </p>
            <ul className="list-none space-y-3">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink {...l} external />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-7 text-center md:text-left"
          style={{ borderTop: "1px solid rgba(232,184,168,0.12)" }}
        >
          <span
            className="text-[.72rem]"
            style={{ color: "rgba(255,255,255,.35)" }}
          >
            © {new Date().getFullYear()} Caro Veira · Dermocosmiatra · Tigre, Buenos Aires
          </span>

          <a
            href="#"
            aria-label="Volver arriba"
            className="flex items-center justify-center w-9 h-9 transition-colors duration-200"
            style={{
              border: "1px solid rgba(255,255,255,.18)",
              borderRadius: "999px",
              color: "rgba(255,255,255,.55)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--color-blush)";
              el.style.borderColor = "rgba(232,184,168,.4)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "rgba(255,255,255,.55)";
              el.style.borderColor = "rgba(255,255,255,.18)";
            }}
          >
            <ArrowUp size={15} strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  );
}
