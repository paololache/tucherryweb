"use client";

import { Children, useEffect, useRef, useState } from "react";

/**
 * Paneles apilados: cada hijo queda fijo (sticky) y el siguiente sube por encima,
 * como las tarjetas del video de referencia. Para paneles más altos que la pantalla,
 * el "top" se calcula para que se fijen por su borde inferior y se lean completos.
 */
export function Stack({ children }: { children: React.ReactNode }) {
  const items = Children.toArray(children);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [tops, setTops] = useState<number[]>(() => items.map(() => 0));

  useEffect(() => {
    const measure = () => {
      const vh = window.innerHeight;
      setTops(refs.current.map((el) => (el ? Math.min(0, vh - el.offsetHeight) : 0)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    refs.current.forEach((el) => el && ro.observe(el));
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="relative">
      {items.map((child, i) => (
        <div
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className="stack-item sticky"
          style={{ top: tops[i], zIndex: i + 1 }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
