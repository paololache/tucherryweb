"use client";

import { Fragment } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useStudio } from "@/components/studio-provider";
import { PosterArt } from "@/components/ui/poster-art";
import { HERO_SLIDES, SERVICES, type ServiceId } from "@/lib/site";
import { cn } from "@/lib/utils";
import { RandomLetterSwapForward } from "@/components/ui/random-letter-swap";

/* Texto con máscara: cada palabra sube desde detrás de su línea al entrar en pantalla */
function Masked({ text, className, mark, hlClass = "font-bold text-cherry", arrowClass = "text-cherry" }: { text: string; className?: string; mark?: Record<string, "hl" | "tag" | "arrow">; hlClass?: string; arrowClass?: string }) {
  const words = text.split(" ");
  return (
    <span className={cn("mask-words", className)} aria-label={text} role="text">
      {words.map((w, i) => {
        const kind = mark?.[w];
        return (
          <Fragment key={i}>
            <span aria-hidden className="split-mask">
              <span
                className={cn(
                  "mw",
                  kind === "hl" && hlClass,
                  kind === "tag" && "rounded-[6px] bg-cherry px-[0.3em] text-[0.5em] font-bold uppercase tracking-wider text-porcelain align-middle",
                  kind === "arrow" && arrowClass,
                )}
                style={{ ["--w" as string]: i }}
              >
                {w.replace(/_/g, " ")}
              </span>
            </span>
            {i < words.length - 1 && " "}
          </Fragment>
        );
      })}
    </span>
  );
}

/* ───────── Panel 2: quiénes somos (tarjeta clara que sube sobre el hero) ───────── */
export function About() {
  return (
    <section id="nosotros" aria-label="Quiénes somos" className="panel min-h-[85svh] bg-[#fffefc] px-4 pb-16 pt-6 sm:px-6 md:pb-24">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex items-center justify-between text-[13px] text-muted">
          <span>[ quiénes somos ]</span>
          <span>[ 01 ]</span>
        </div>
        <p className="display display-slim mt-10 max-w-[1180px] text-[clamp(28px,4vw,60px)] leading-[1.18] text-wine md:mt-16">
          <Masked
            text="[_Tu_Cherry_Studio_] es un estudio creativo construido sobre → propósito, intención y cercanía FOCO En un mundo lleno de ruido, ayudamos a las marcas a bajar el volumen, afinar su mensaje y decir exactamente lo que importa."
            mark={{ "[_Tu_Cherry_Studio_]": "hl", "→": "arrow", FOCO: "tag" }}
          />
        </p>
        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {[
            ["Cercanía", "Te hablamos claro y de tú a tú."],
            ["Propósito", "Cada pieza tiene un porqué medible."],
            ["Detalle", "Cuidamos lo que se ve y lo que no."],
          ].map(([t, x], i) => (
            <div key={t} className="reveal border-t border-cherry/20 pt-4" style={{ ["--d" as string]: `${i * 0.1}s` }}>
              <p className="text-[13px] text-muted">[ {String(i + 1).padStart(2, "0")} ]</p>
              <p className="display display-slim mt-1 text-[26px]">{t}</p>
              <p className="mt-1 text-muted">{x}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Panel 3: galería con revelado en franja y título partido ───────── */
const ORDER: ServiceId[] = ["estrategia", "branding", "redes", "ads", "web", "audiovisual"];
const SPANS = ["md:col-span-3", "md:col-span-3", "md:col-span-6", "md:col-span-6", "md:col-span-3", "md:col-span-3"];

export function Work() {
  const { showService } = useStudio();
  return (
    <section id="trabajo" aria-labelledby="trabajo-title" className="panel relative isolate overflow-hidden bg-porcelain px-4 pb-14 pt-6 sm:px-6 md:pb-20">
      <svg aria-hidden className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
        <path d="M-40 300 C 200 120, 380 520, 620 300 S 980 80, 1200 320 S 1500 520, 1520 300" stroke="var(--sage)" strokeWidth="40" strokeLinecap="round" opacity=".45" />
        <path d="M100 760 c 120 -120, 260 40, 200 120 s -220 0, -120 -120 s 360 -60, 520 60 s 300 40, 420 -80" stroke="var(--cream)" strokeWidth="34" strokeLinecap="round" />
      </svg>
      <div className="mx-auto max-w-[1320px]">
        <div className="flex items-start justify-between">
          <h2 id="trabajo-title" className="display display-slim text-[clamp(44px,7vw,112px)] leading-[0.9] text-cherry">
            <Masked text="Así trabajamos" />
          </h2>
          <span className="text-[13px] text-muted">[ 02 ]</span>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-2 md:mt-8 md:grid-cols-12 md:gap-3">
          {ORDER.map((id, i) => {
            const s = SERVICES.find((x) => x.id === id)!;
            const photo = HERO_SLIDES.find((x) => x.service === id)?.src;
            return (
              <li key={id} className={cn("strip", SPANS[i])} style={{ ["--d" as string]: `${(i % 3) * 0.08}s` }}>
                <button
                  type="button"
                  onClick={() => showService(id)}
                  className="group relative block h-44 w-full overflow-hidden rounded-[16px] bg-cream text-left sm:h-56 md:h-[clamp(180px,22vw,300px)]"
                >
                  {photo ? (
                    <img src={photo} alt={s.title} loading="lazy" decoding="async" width={880} height={1100} className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
                  ) : (
                    <PosterArt kind={id} className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-[1.06]" />
                  )}
                  <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-wine/80 to-transparent" aria-hidden />
                  <span className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 text-porcelain">
                    <span className="display display-slim text-[18px] sm:text-[22px]">{s.title}</span>
                    <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex items-end justify-between gap-6 md:mt-8">
          <span className="text-[13px] text-muted">[ toca un servicio ]</span>
          <p className="display display-slim text-right text-[clamp(44px,7vw,112px)] leading-[0.9] text-cherry">
            <Masked text="con tu marca" />
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────── Panel 4: manifiesto en cherry ───────── */
export function Manifesto() {
  return (
    <section aria-labelledby="manifiesto-title" className="panel on-cherry bg-cherry px-4 pb-14 pt-6 text-butter sm:px-6 md:pb-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex items-center justify-between text-[13px] text-sage">
          <span>[ nuestra mirada ]</span>
          <span>[ 03 ]</span>
        </div>
        <h2 id="manifiesto-title" className="display display-slim mt-10 text-[clamp(34px,6.2vw,100px)] leading-[1.06] md:mt-14">
          <Masked
            text="La mejor forma de entender el [_marketing_con_propósito_] es ver tu propia marca → a través de nuestra mirada."
            mark={{ "[_marketing_con_propósito_]": "hl", "→": "arrow" }}
            hlClass="text-porcelain"
            arrowClass="text-sage"
            className="manifesto"
          />
        </h2>
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-[1fr_minmax(0,420px)] md:items-end">
          <span className="reveal inline-flex h-9 w-fit items-center rounded-full bg-butter px-4 text-sm font-bold text-cherry">Cercanía · Propósito · Detalle</span>
          <div className="reveal">
            <p className="text-sage">Diseñamos, escribimos y medimos cada pieza para que tu marca diga lo que tiene que decir, a quien tiene que escucharla.</p>
            <a href="#servicios" className="group mt-4 inline-flex items-center gap-2 font-bold text-butter">
              <RandomLetterSwapForward label="Conoce cómo lo hacemos" /> <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
