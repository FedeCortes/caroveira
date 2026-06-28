"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.left = mx + "px";
        dot.current.style.top = my + "px";
      }
    };

    document.addEventListener("mousemove", move);

    const loop = () => {
      rx += (mx - rx) * 0.09;
      ry += (my - ry) * 0.09;
      if (ring.current) {
        ring.current.style.left = rx + "px";
        ring.current.style.top = ry + "px";
      }
      requestAnimationFrame(loop);
    };
    loop();

    const targets = document.querySelectorAll("a, button, .srv, .test-card");
    const onEnter = () => {
      if (dot.current) dot.current.style.transform = "translate(-50%,-50%) scale(2.5)";
      if (ring.current) { ring.current.style.opacity = "0.15"; ring.current.style.transform = "translate(-50%,-50%) scale(1.4)"; }
    };
    const onLeave = () => {
      if (dot.current) dot.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (ring.current) { ring.current.style.opacity = "0.38"; ring.current.style.transform = "translate(-50%,-50%) scale(1)"; }
    };

    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="fixed pointer-events-none z-[9999] rounded-full transition-transform duration-100"
        style={{
          width: 8,
          height: 8,
          background: "var(--color-gold)",
          transform: "translate(-50%,-50%)",
          top: 0,
          left: 0,
        }}
      />
      <div
        ref={ring}
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          width: 34,
          height: 34,
          border: "1px solid var(--color-gold)",
          opacity: 0.38,
          transform: "translate(-50%,-50%)",
          transition: "opacity .2s, transform .55s cubic-bezier(.17,.67,.4,1.2)",
          top: 0,
          left: 0,
        }}
      />
    </>
  );
}
