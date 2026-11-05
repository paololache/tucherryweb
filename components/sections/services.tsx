"use client";

import { ArrowUpRight, Check, Plus } from "lucide-react";
import { useStudio } from "@/components/studio-provider";
import { PosterArt } from "@/components/ui/poster-art";
import { HERO_SLIDES, type ServiceId } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SplitText } from "@/components/ui/split";

/**
 * Servicios como lista grande. Al pasar el cursor (o tocar) una fila, se abre con lo que incluye
 * y la imagen de la columna derecha cambia. Reemplaza al bento + modal: menos JS, más foco.
 */
const photoOf = (id: ServiceId) => HERO_SLIDES.find((s) => s.service === id)?.src;

export function Services() {
  const { openRow, setOpenRow, quote, content } = useStudio();
  const SERVICES = content.services;
  const active = openRow ?? SERVICES[0].id;

  return (
    <section id="servicios" aria-labelledby="servicios-title" className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-muted">Servicios</p>
            <h2 id="servicios-title" className="display display-slim mt-3 max-w-3xl h-section"><SplitText text={content.servicesHead.title} /></h2>
          </div>
          <p className="max-w-sm text-muted">{content.servicesHead.aside}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
          <ul className="border-t border-cherry/15">
            {SERVICES.map((s, i) => {
              const open = active === s.id;
              return (
                <li
                  key={s.id}
                  id={`servicio-${s.id}`}
                  data-open={open}
                  onMouseEnter={() => setOpenRow(s.id)}
                  className="reveal border-b border-cherry/15"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`panel-${s.id}`}
                      onClick={() => setOpenRow(s.id)}
                      onFocus={() => setOpenRow(s.id)}
                      className="group flex w-full items-center gap-4 py-5 text-left sm:gap-6"
                    >
                      <span className="w-6 shrink-0 text-sm text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <span className={cn("display display-slim flex-1 h-item transition-[transform,color] duration-300", open ? "translate-x-2" : "text-cherry/55 group-hover:text-cherry")}>
                        {s.title}
                      </span>
                      <span className={cn("grid size-10 shrink-0 place-items-center rounded-full border border-cherry/30 transition-transform duration-300", open && "rotate-45 border-cherry bg-cherry text-porcelain")} aria-hidden>
                        <Plus className="size-4" />
                      </span>
                    </button>
                  </h3>
                  <div id={`panel-${s.id}`} role="region" aria-label={s.title} className="acc">
                    <div>
                      <div className="grid gap-5 pb-6 pl-10 sm:grid-cols-[1.2fr_1fr] sm:pl-12">
                        <div>
                          <p className="text-[17px]">{s.description}</p>
                          <p className="mt-3 text-sm text-muted"><span className="font-bold text-cherry">Ideal para:</span> {s.idealFor}</p>
                          <button
                            type="button"
                            onClick={() => quote([s.id])}
                            className="group mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-cherry px-5 text-[15px] font-bold text-porcelain transition hover:bg-wine active:scale-[0.98]"
                          >
                            Cotizar {s.short.toLowerCase()} <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                          </button>
                        </div>
                        <ul className="space-y-2 text-[15px]">
                          {s.includes.map((it) => (
                            <li key={it} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0" aria-hidden /> {it}</li>
                          ))}
                        </ul>
                      </div>
                      {/* en móvil, la imagen va dentro de la fila */}
                      <div className="relative mb-6 ml-10 aspect-[16/10] overflow-hidden rounded-[20px] sm:ml-12 lg:hidden">
                        {open && <ServiceVisual id={s.id} />}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* imagen que acompaña (escritorio) */}
          <div className="hidden lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[28px] bg-cream">
              <div key={active} className="absolute inset-0 animate-[rise_0.6s_cubic-bezier(0.22,1,0.36,1)_both] overflow-hidden"><div className="parallax-img absolute inset-0">
                <ServiceVisual id={active} />
              </div></div>
              <span className="absolute left-4 top-4 rounded-full bg-porcelain px-3 py-1 text-xs font-bold">
                {SERVICES.find((s) => s.id === active)!.tagline}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceVisual({ id }: { id: ServiceId }) {
  const src = photoOf(id);
  return src ? (
    <img src={src} alt="" loading="lazy" decoding="async" width={880} height={1100} className="absolute inset-0 size-full object-cover" />
  ) : (
    <PosterArt kind={id} className="absolute inset-0 size-full" />
  );
}
