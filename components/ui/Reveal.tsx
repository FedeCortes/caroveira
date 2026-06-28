"use client";

import { useRef, useEffect } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Only animate elements that start fully below the fold
    // Use 300ms delay so anchor-link scrolls + layout settle first
    const timer = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.98) return; // already in view — skip

      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            obs.disconnect();
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, 300);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
