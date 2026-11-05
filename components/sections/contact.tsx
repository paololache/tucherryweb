"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Mail, MessageCircle } from "lucide-react";
import { useStudio } from "@/components/studio-provider";
import { site, type ServiceId } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SplitText } from "@/components/ui/split";
import { RandomLetterSwapForward } from "@/components/ui/random-letter-swap";

/**
 * Contacto + planes en un solo paso. Elegir un plan pre-marca sus servicios;
 * el resumen de abajo se actualiza en vivo. Envía por WhatsApp (sin backend).
 */
export function Contact() {
  const { picked, toggle, setPicked, content } = useStudio();
  const { services: SERVICES, plans: PLANS } = content;
  const serviceById = (id: ServiceId) => SERVICES.find((s) => s.id === id)!;
  const [form, setForm] = useState({ nombre: "", negocio: "", mensaje: "" });
  const up = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const same = (a: string[], b: string[]) => a.length === b.length && a.every((x) => b.includes(x));
  const plan = PLANS.find((p) => same(p.services, picked));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const servicios = picked.length ? picked.map((id) => serviceById(id).title).join(", ") : "Aún no lo sé, quiero conversar";
    const msg = `${content.contact.source ? `${content.contact.source}\n` : ""}Hola, soy ${form.nombre}${form.negocio ? ` de ${form.negocio}` : ""}.\n${plan ? `Plan: ${plan.name}.\n` : ""}Me interesa: ${servicios}.\n${form.mensaje}`.trim();
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  const field = "w-full rounded-[12px] border border-butter/40 bg-wine px-4 py-3 text-butter placeholder:text-sage/70 outline-none transition focus:border-butter";

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="on-cherry bg-cherry px-4 py-16 text-butter sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div className="reveal">
          <p className="eyebrow text-sage">Contacto</p>
          <h2 id="contacto-title" className="display display-slim mt-3 text-[clamp(38px,5.4vw,80px)] leading-[1.05]"><SplitText text={content.contact.title} /></h2>
          <p className="mt-5 max-w-md text-lg text-sage">{content.contact.text}</p>
          <div className="mt-8 flex flex-col gap-3">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 self-start text-lg hover:underline">
              <Mail className="size-5" aria-hidden /> {site.email}
            </a>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 self-start text-lg hover:underline">
              <MessageCircle className="size-5" aria-hidden /> Escríbenos por WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-[24px] bg-wine/60 p-6 ring-1 ring-butter/15 sm:p-8">
          <fieldset>
            <legend className="font-bold">¿Por dónde empezamos?</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {PLANS.map((p) => {
                const on = plan?.id === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setPicked(on ? [] : p.services)}
                    className={cn(
                      "rounded-[16px] border p-4 text-left transition-[background-color,border-color,transform] duration-200 active:scale-[0.98]",
                      on ? "border-butter bg-butter text-cherry" : "border-sage/40 hover:-translate-y-0.5 hover:border-butter",
                    )}
                  >
                    <span className="flex items-center justify-between text-xs opacity-80">
                      Plan <span>{p.duration}</span>
                    </span>
                    <span className="display mt-1 block text-[24px]">{p.name}</span>
                    <span className="mt-0.5 block text-sm opacity-80">{p.subtitle}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="font-bold">o elige servicios</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {SERVICES.map((s) => {
                const on = picked.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(s.id)}
                    className={cn(
                      "inline-flex h-10 items-center gap-1.5 rounded-full border px-4 text-[15px] transition-colors active:scale-95",
                      on ? "border-butter bg-butter text-cherry" : "border-sage/60 text-sage hover:border-butter hover:text-butter",
                    )}
                  >
                    {on && <Check className="size-4" aria-hidden />}
                    {s.short}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* resumen en vivo */}
          <p aria-live="polite" className="mt-5 rounded-[12px] bg-cherry/60 px-4 py-3 text-[15px]">
            {picked.length === 0 ? (
              <span className="text-sage">Aún sin elegir: conversamos y te ayudamos a decidir.</span>
            ) : (
              <>
                {plan && <span className="font-bold">Plan {plan.name} · </span>}
                {picked.map((id) => serviceById(id).short).join(" + ")}
                <span className="text-sage"> · te respondemos con una propuesta</span>
              </>
            )}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-sm text-sage">Tu nombre</span>
              <input required value={form.nombre} onChange={up("nombre")} className={field} placeholder="Cómo te llamas" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-sage">Tu negocio</span>
              <input value={form.negocio} onChange={up("negocio")} className={field} placeholder="Nombre de tu marca" />
            </label>
          </div>
          <label className="mt-4 grid gap-1">
            <span className="text-sm text-sage">Cuéntanos un poco más</span>
            <textarea rows={3} value={form.mensaje} onChange={up("mensaje")} className={`${field} resize-none`} placeholder="¿Qué te gustaría lograr?" />
          </label>
          <button type="submit" className="shine group mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-butter font-bold text-cherry transition hover:bg-cream active:scale-[0.99]">
            <RandomLetterSwapForward label="Enviar por WhatsApp" /> <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </button>
        </form>
      </div>
    </section>
  );
}
