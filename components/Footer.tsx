"use client";

const navLinks = [
  { href: "#quien", label: "Quién soy" },
  { href: "#servicios", label: "Servicios" },
  { href: "#ubicacion", label: "Ubicación" },
];

const contactLinks = [
  {
    href: "https://www.instagram.com/caroveira_dermocosmiatra",
    label: "Instagram",
    external: true,
  },
  {
    href: "https://wa.me/541157502715",
    label: "WhatsApp",
    external: true,
  },
  {
    href: "https://maps.app.goo.gl/jWCmUY7T2b6cVShD7",
    label: "Cómo llegar",
    external: true,
  },
];

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-block text-[.8rem] no-underline transition-colors duration-200"
      style={{ color: "rgba(255,255,255,.55)" }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "var(--color-blush)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.55)")
      }
    >
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-deep)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10 md:gap-12 mb-12 text-center md:text-left items-start">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#"
              className="font-serif text-[1.15rem] tracking-[.03em] no-underline mb-4"
              style={{ color: "#fff" }}
            >
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
              className="text-[.65rem] font-medium tracking-[.14em] uppercase mb-5"
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
              className="text-[.65rem] font-medium tracking-[.14em] uppercase mb-5"
              style={{ color: "rgba(255,255,255,.3)" }}
            >
              Contacto
            </p>
            <ul className="list-none space-y-3">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink {...l} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8 text-center md:text-left"
          style={{ borderTop: "1px solid rgba(232,184,168,0.12)" }}
        >
          <span
            className="text-[.72rem]"
            style={{ color: "rgba(255,255,255,.35)" }}
          >
            © {new Date().getFullYear()} Caro Veira · Dermocosmiatra
          </span>
          <span
            className="text-[.72rem] tracking-[.05em]"
            style={{ color: "rgba(255,255,255,.35)" }}
          >
            Tigre · Buenos Aires · Argentina
          </span>
        </div>
      </div>
    </footer>
  );
}
