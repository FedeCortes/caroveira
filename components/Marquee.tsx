const items = [
  "Glass Skin",
  "Piel Acneica",
  "Manchas",
  "K-Beauty",
  "Glow Skin",
  "Aparatología",
  "Dermaplaning",
  "Peeling",
  "Crazy Studio · Tigre",
];

export default function Marquee() {
  return (
    <div
      className="overflow-hidden py-[11px]"
      style={{ background: "var(--color-deep)" }}
    >
      <div className="marquee-track flex w-max">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 px-5 text-[.57rem] tracking-[.2em] uppercase whitespace-nowrap"
            style={{ color: "rgba(232,184,168,0.45)" }}
          >
            {item}
            <span style={{ color: "rgba(232,184,168,0.18)" }}>◇</span>
          </span>
        ))}
      </div>
    </div>
  );
}
