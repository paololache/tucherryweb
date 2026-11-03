"use client";

import { ArrowDownRight, ArrowRight, Check } from "lucide-react";
import { useStudio } from "@/components/studio-provider";
import { SplitText } from "@/components/ui/split";
import { SERVICES } from "@/lib/site";
import { cn } from "@/lib/utils";
import { RandomLetterSwapForward } from "@/components/ui/random-letter-swap";

const d = (s: number) => ({ ["--d" as string]: `${s}s` });

/**
 * Hero editorial: titular gigante en tres líneas escalonadas, foto recortada
 * (mano con cerezas) montada sobre el texto y trazos a mano de fondo.
 * Inspirado en la referencia "Noiseless Agency", con la identidad de Tu Cherry.
 */
export function Hero() {
  const { picked, toggle, quote } = useStudio();

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate min-h-[100svh] overflow-hidden bg-porcelain px-4 pb-16 pt-24 sm:px-6 md:pt-28">
      <Scribbles />

      <div className="relative mx-auto max-w-[1320px]">
        {/* fila de etiquetas, como en la referencia */}
        <div className="rise flex items-center justify-between text-[13px] text-muted" style={d(1.6)}>
          <span className="inline-flex items-center gap-2"><span className="pulse size-2 rounded-full bg-cherry" aria-hidden /> [ estudio de marketing ]</span>
          <span className="hidden sm:inline">[ Lima, Perú ]</span>
          <span>[ desde Lima para tu marca ]</span>
        </div>

        <div className="hand-stage relative mt-6 md:mt-8">
          <h1 id="hero-title" className="wave display relative z-10 cursor-default leading-[0.84] text-[clamp(64px,12.6vw,198px)]" aria-label="Marketing con propósito">
            <span className="line-in block text-wine" style={d(0.15)}><SplitText text="Marketing" mode="chars" /></span>
            <span className="line-in block pl-[22%] text-wine sm:pl-[30%]" style={d(0.55)}><SplitText text="con" mode="chars" start={9} /></span>
            <span className="line-in line-accent hl block pl-[4%] text-cherry sm:pl-[9%]" style={d(0.95)}><SplitText text="propósito." mode="chars" start={12} /></span>
          </h1>

          {/* mano recortada: se monta sobre el titular */}
          <img
            src="hero/mano-cerezas.webp"
            alt=""
            width={567}
            height={1215}
            fetchPriority="high"
            decoding="async"
            className="hand pointer-events-none absolute z-20 select-none"
          />
        </div>

        {/* zona inferior: texto, brief y CTA */}
        <div className="relative z-30 mt-8 grid gap-6 md:mt-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="rise max-w-xl" style={d(1.7)}>
            <p className="text-lg text-muted">
              <span className="font-semibold text-cherry">[ Tu Cherry Studio ]</span> crea marcas, contenido y campañas que conectan con las personas
              y hacen crecer tu negocio, sin perder lo que lo hace tuyo.
            </p>
            <div role="group" aria-label="Servicios de interés" className="mt-5 flex flex-wrap gap-2">
              {SERVICES.map((s) => {
                const on = picked.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(s.id)}
                    className={cn(
                      "inline-flex h-9 items-center gap-1.5 rounded-full border px-3.5 text-sm transition-[background-color,border-color,color,transform] duration-200 active:scale-95",
                      on ? "border-cherry bg-cherry text-porcelain" : "border-cherry/35 bg-porcelain/70 backdrop-blur hover:-translate-y-0.5 hover:border-cherry",
                    )}
                  >
                    {on && <Check className="size-3.5" aria-hidden />}
                    {s.short}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rise flex flex-wrap items-center gap-3" style={d(1.85)}>
            <button
              type="button"
              onClick={() => quote(picked)}
              className="shine group inline-flex h-12 items-center gap-2 rounded-full bg-cherry px-6 font-semibold text-porcelain transition hover:bg-wine active:scale-[0.98]"
            >
              <RandomLetterSwapForward label={picked.length ? `Cotizar ${picked.length} ${picked.length === 1 ? "servicio" : "servicios"}` : "Cuéntanos tu idea"} />
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </button>
            <a href="#nosotros" className="group inline-flex h-12 items-center gap-2 rounded-full border border-cherry/40 px-5 font-semibold transition-colors hover:border-cherry hover:bg-cream">
              <RandomLetterSwapForward label="Ver más" reverse={false} /> <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Trazos a mano alzada en salvia y crema que se dibujan al cargar (SVG + CSS). */
function Scribbles() {
  return (
    <svg aria-hidden className="scribbles pointer-events-none absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
      <path d="M-40 620 C 120 420, 300 760, 470 560 S 760 260, 900 420 S 1150 760, 1300 520 S 1500 300, 1520 380" stroke="var(--sage)" strokeWidth="46" strokeLinecap="round" />
      <path d="M180 120 C 260 40, 420 60, 400 160 S 220 300, 320 360 S 620 300, 640 180 S 820 40, 880 140" stroke="var(--cream)" strokeWidth="38" strokeLinecap="round" />
      <path d="M980 80 C 1100 160, 1040 300, 1160 330 S 1400 220, 1380 120" stroke="var(--sage)" strokeWidth="30" strokeLinecap="round" opacity=".7" />
      <path d="M60 860 C 260 780, 380 900, 560 820 S 900 700, 1080 820" stroke="var(--cream)" strokeWidth="34" strokeLinecap="round" />
      <path d="M700 40 c -60 80, 40 140, 100 90 s 40 -120, -40 -100 s -120 160, 20 220 s 220 -60, 260 40" stroke="var(--sage)" strokeWidth="22" strokeLinecap="round" opacity=".6" />
      <path d="M40 300 c 80 -60, 160 20, 120 90 s -140 40, -100 -40 s 200 -80, 260 20 s -20 180, 120 200" stroke="var(--sage)" strokeWidth="20" strokeLinecap="round" opacity=".55" />
      <path d="M1180 600 c 60 -90, 180 -40, 150 50 s -170 60, -120 -30 s 160 -40, 230 60" stroke="var(--cream)" strokeWidth="26" strokeLinecap="round" />
    </svg>
  );
}
