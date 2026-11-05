"use client";

import { useStudio } from "@/components/studio-provider";

// Franja en movimiento reutilizada de la plantilla. Se desplaza de izquierda a derecha, sin pausa.
export function Marquee() {
  const WORDS = useStudio().content.marquee;
  return (
    <div className="relative overflow-hidden bg-butter py-4 text-cherry" aria-label="Lo que hacemos">
      <div className="flex gap-8 [--duration:30s] [--gap:2rem]">
        {[0, 1].map((k) => (
          <ul key={k} aria-hidden={k === 1} className="flex shrink-0 animate-marquee items-center gap-8 [animation-direction:reverse]">
            {WORDS.map((w) => (
              <li key={w} className="flex items-center gap-8">
                <span className="display display-slim whitespace-nowrap text-[30px]">{w}</span>
                <span className="size-2.5 rounded-full bg-cherry [animation:float_6s_ease-in-out_infinite_alternate]" aria-hidden />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
