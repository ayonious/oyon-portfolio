"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  as?: "div" | "li";
  className?: string;
  delay?: number;
};

export default function ScrollReveal({ children, as: Element = "div", className = "", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.IntersectionObserver || !window.matchMedia) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;

    // Content already in view stays visible, as does content without JavaScript.
    setPending(element.getBoundingClientRect().top >= window.innerHeight);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPending(false);
        observer.disconnect();
      }
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    observer.observe(element);
    const reveal = () => {
      if (preference.matches) {
        setPending(false);
        observer.disconnect();
      }
    };
    preference.addEventListener("change", reveal);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", reveal);
    };
  }, []);

  return (
    <Element ref={ref} onFocusCapture={() => setPending(false)} className={`scroll-reveal ${className}`} data-pending={pending} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </Element>
  );
}
