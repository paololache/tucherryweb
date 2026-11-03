import { Heart, Sparkles, Target } from "lucide-react";
import { SECTORS } from "@/lib/site";

const VALUES = [
  { icon: Heart, title: "Cercanía", text: "Te hablamos claro y de tú a tú. Somos parte de tu equipo." },
  { icon: Target, title: "Propósito", text: "Cada pieza tiene un porqué y un objetivo medible." },
  { icon: Sparkles, title: "Detalle", text: "Cuidamos lo que se ve y lo que no se ve, de principio a fin." },
];

// Manifiesto que se ilumina con el scroll, ahora en CSS puro (antes: ~30 motion values).
export function Studio() {
  return (
    <section id="estudio" aria-labelledby="estudio-title" className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[1320px]">
        <h2 id="estudio-title" className="eyebrow text-muted">El estudio</h2>
        <p className="display mt-4 max-w-3xl text-[clamp(32px,4vw,56px)]">Lo que nos mueve</p>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="reveal h-full"><div className="group h-full rounded-[20px] bg-cream p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-24px_rgba(128,3,30,0.45)]">
              <div className="grid size-11 place-items-center rounded-[12px] bg-butter transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                <v.icon className="size-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="display mt-5 text-[26px]">{v.title}</h3>
              <p className="mt-2 text-muted">{v.text}</p>
            </div></div>
          ))}
        </div>

        <div className="reveal mt-14 flex flex-col gap-4 md:flex-row md:items-center">
          <p className="eyebrow shrink-0 text-muted">Trabajamos con</p>
          <ul className="flex flex-wrap gap-2">
            {SECTORS.map((s) => (
              <li key={s} className="rounded-full border border-cherry/40 px-4 py-2 text-[15px] transition-colors duration-200 hover:border-cherry hover:bg-cherry hover:text-porcelain">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
