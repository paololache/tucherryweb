"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo, NAV } from "@/components/brand";
import { RandomLetterSwapForward, RandomLetterSwapPingPong } from "@/components/ui/random-letter-swap";

// Header fijo con menú móvil — base del template (adaptado de 21st "Agency Hero Section").
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      // se esconde al bajar y reaparece al subir
      setHidden(y > 400 && y > last + 4);
      if (y < last - 4 || y < 400) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-5", hidden && !open && "-translate-y-[120%]")}>
      <span aria-hidden className="scroll-progress scroll-progress-base fixed inset-x-0 top-0 h-[3px] origin-left bg-cherry" />
      <div
        className={cn(
          "mx-auto flex max-w-[1320px] items-center justify-between gap-4 rounded-full py-2 pl-5 pr-2 transition-all duration-300",
          scrolled ? "bg-porcelain/90 shadow-[0_8px_30px_-16px_rgba(128,3,30,0.35)] backdrop-blur-md" : "bg-transparent",
        )}
      >
        <a href="#inicio" className="shrink-0 rounded-md">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="rounded-full px-4 py-2 text-[15px] transition-colors hover:bg-cream">
              <RandomLetterSwapPingPong label={n.label} />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href="#contacto"
            className="hidden h-11 items-center gap-2 rounded-full bg-cherry px-5 text-[15px] font-semibold text-porcelain transition hover:bg-wine active:scale-[0.98] sm:inline-flex"
          >
            <RandomLetterSwapForward label="Hablemos" /> <ArrowUpRight className="size-4" aria-hidden />
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

          <nav
            aria-label="Móvil"
            aria-hidden={!open}
            inert={!open}
            className={`on-cherry absolute inset-x-3 transition-[opacity,transform,visibility] duration-200 sm:inset-x-5 ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"} mx-auto mt-2 flex max-w-[1320px] flex-col rounded-[24px] bg-cherry p-3 text-butter md:hidden`}
          >
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="display rounded-xl px-4 py-3 text-3xl hover:bg-wine">
                <RandomLetterSwapPingPong label={n.label} reverse={false} />
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-butter font-semibold text-cherry">
              Hablemos <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </nav>
    </header>
  );
}
