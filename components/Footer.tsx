"use client";

const links = [
  { href: "#quien", label: "Quién soy" },
  { href: "#servicios", label: "Servicios" },
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
];

export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-16 py-9 text-center md:text-left"
      style={{
        background: "var(--color-deep)",
        borderTop: "1px solid rgba(232,184,168,0.07)",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-serif text-[1.05rem] tracking-[.04em] no-underline"
        style={{ color: "#fff" }}
      >
        Caro{" "}
        <span style={{ color: "var(--color-blush)" }}>Veira</span>
      </a>

      {/* Links */}
      <ul className="flex gap-6 list-none flex-wrap justify-center">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-[.62rem] tracking-[.1em] uppercase no-underline transition-colors duration-200"
              style={{ color: "rgba(255,255,255,.2)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--color-blush)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,.2)")
              }
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Location */}
      <span
        className="text-[.57rem] tracking-[.08em]"
        style={{ color: "rgba(255,255,255,.1)" }}
      >
        Tigre · Buenos Aires · Argentina
      </span>
    </footer>
  );
}
