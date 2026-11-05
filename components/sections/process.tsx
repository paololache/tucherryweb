import { Check } from "lucide-react";
import { STEPS } from "@/lib/site";
import { SplitText } from "@/components/ui/split";

/**
 * Proceso con scroll: el título queda fijo y cada paso se enciende al pasar por el centro.
 * Todo en CSS (scroll-driven animations). Sin JavaScript.
 */
export function Process() {
  return (
    <section id="proceso" aria-labelledby="proceso-title" className="on-cherry bg-cherry px-4 py-16 text-butter sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-sage">Cómo trabajamos</p>
          <h2 id="proceso-title" className="display mt-3 text-[clamp(42px,5.4vw,80px)]"><SplitText text="Un proceso simple, cercano y claro" /></h2>
          <p className="mt-8 max-w-md text-sage">Sin letra pequeña ni jerga. Cuatro pasos para pasar de una idea a una marca que se mueve.</p>
        </div>

        <div className="steps-track relative pl-10">
          <span aria-hidden className="absolute bottom-0 left-[11px] top-0 w-0.5 rounded-full bg-wine" />
          <span aria-hidden className="step-bar absolute bottom-0 left-[11px] top-0 w-0.5 rounded-full bg-butter" />
          <ol className="flex flex-col gap-6">
            {STEPS.map((s, i) => (
              <li key={s.id} className="step relative rounded-[24px] bg-wine p-6 sm:p-8">
                <span aria-hidden className="absolute -left-10 top-8 grid size-6 place-items-center rounded-full border-2 border-butter bg-cherry text-[11px] font-bold">
                  {i + 1}
                </span>
                <p className="eyebrow text-sage">Paso {i + 1} · {s.label}</p>
                <h3 className="display mt-2 text-[34px] sm:text-[44px]">{s.title}</h3>
                <p className="mt-3 max-w-xl text-sage">{s.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="inline-flex items-center gap-1.5 rounded-full bg-cherry px-3 py-1.5 text-sm">
                      <Check className="size-3.5" aria-hidden /> {d}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
