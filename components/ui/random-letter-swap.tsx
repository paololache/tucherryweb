"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Random letter swap (21st.dev) — misma API que el original, pero sin
 * framer-motion ni lodash: usa la Web Animations API nativa para que la web
 * siga ligera. Cada letra sale por arriba/abajo y entra su copia, en orden
 * aleatorio y escalonado.
 *
 * - Se activa al pasar el mouse o al enfocar con teclado el enlace/botón que lo
 *   contiene (no solo el texto).
 * - Respeta prefers-reduced-motion.
 */

type Transition = {
  /** "spring" aproxima un resorte con una curva con rebote suave */
  type?: "spring" | "tween";
  /** segundos */
  duration?: number;
  ease?: string;
};

interface TextProps {
  label: string;
  reverse?: boolean;
  transition?: Transition;
  staggerDuration?: number;
  className?: string;
  onClick?: () => void;
}

const SPRING = "cubic-bezier(0.34, 1.32, 0.64, 1)";
const TWEEN = "cubic-bezier(0.22, 1, 0.36, 1)";

function easingOf(t: Transition) {
  return t.ease ?? (t.type === "tween" ? TWEEN : SPRING);
}

function shuffle(n: number) {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useLetters(label: string) {
  const scope = useRef<HTMLSpanElement>(null);
  // orden aleatorio estable por etiqueta (el original lo regeneraba en cada render)
  const order = useMemo(() => shuffle(label.length), [label]);
  const pairs = () => {
    const root = scope.current;
    if (!root) return [];
    const a = root.querySelectorAll<HTMLElement>("[data-l]");
    const b = root.querySelectorAll<HTMLElement>("[data-l2]");
    return order.map((i) => [a[i], b[i]] as const).filter(([x, y]) => x && y);
  };
  return { scope, pairs };
}

/** Vincula el efecto al enlace/botón contenedor (o al propio texto si no hay). */
function useTrigger(scope: React.RefObject<HTMLSpanElement | null>, enter: () => void, leave?: () => void) {
  useEffect(() => {
    const el = scope.current;
    if (!el) return;
    const host = (el.closest("a,button,[role=button]") as HTMLElement | null) ?? el;
    const onFocus = () => host.matches(":focus-visible") && enter();
    host.addEventListener("pointerenter", enter);
    host.addEventListener("focus", onFocus);
    if (leave) {
      host.addEventListener("pointerleave", leave);
      host.addEventListener("blur", leave);
    }
    return () => {
      host.removeEventListener("pointerenter", enter);
      host.removeEventListener("focus", onFocus);
      if (leave) {
        host.removeEventListener("pointerleave", leave);
        host.removeEventListener("blur", leave);
      }
    };
  }, [scope, enter, leave]);
}

function Letters({ label, reverse }: { label: string; reverse: boolean }) {
  return (
    <>
      <span className="sr-only">{label}</span>
      {label.split("").map((letter, i) => (
        <span aria-hidden className="relative flex select-none whitespace-pre" key={i}>
          <span data-l className="relative block will-change-transform">
            {letter}
          </span>
          <span data-l2 className="absolute inset-x-0 top-0 block will-change-transform" style={{ transform: `translateY(${reverse ? "-100%" : "100%"})` }}>
            {letter}
          </span>
        </span>
      ))}
    </>
  );
}

const wrap = "relative inline-flex items-center [clip-path:inset(0_-0.15em)]";

/** Las letras salen y entran una vez; al terminar se reinician solas. */
export function RandomLetterSwapForward({
  label,
  reverse = true,
  transition = { type: "spring", duration: 0.8 },
  staggerDuration = 0.02,
  className,
  onClick,
}: TextProps) {
  const { scope, pairs } = useLetters(label);
  const busy = useRef(false);

  const enter = useCallback(() => {
    if (busy.current || reduced()) return;
    busy.current = true;
    const out = reverse ? "100%" : "-100%";
    const from = reverse ? "-100%" : "100%";
    const ms = (transition.duration ?? 0.8) * 1000;
    const easing = easingOf(transition);
    const list = pairs();
    const runs = list.flatMap(([a, b], i) => {
      const opts = { duration: ms, delay: i * staggerDuration * 1000, easing };
      return [
        a.animate([{ transform: "translateY(0)" }, { transform: `translateY(${out})` }], opts),
        b.animate([{ transform: `translateY(${from})` }, { transform: "translateY(0)" }], opts),
      ];
    });
    // sin fill: al terminar vuelven a su estado base, igual que el reset del original
    Promise.all(runs.map((r) => r.finished)).finally(() => (busy.current = false));
  }, [pairs, reverse, staggerDuration, transition]);

  useTrigger(scope, enter);

  return (
    <span ref={scope} className={cn(wrap, className)} onClick={onClick}>
      <Letters label={label} reverse={reverse} />
    </span>
  );
}

/** Las letras cambian al entrar y regresan al salir. */
export function RandomLetterSwapPingPong({
  label,
  reverse = true,
  transition = { type: "spring", duration: 0.8 },
  staggerDuration = 0.02,
  className,
  onClick,
}: TextProps) {
  const { scope, pairs } = useLetters(label);

  const run = useCallback(
    (on: boolean) => {
      if (reduced()) return;
      const out = reverse ? "100%" : "-100%";
      const hide = reverse ? "-100%" : "100%";
      const ms = (transition.duration ?? 0.8) * 1000;
      const easing = easingOf(transition);
      pairs().forEach(([a, b], i) => {
        const opts: KeyframeAnimationOptions = { duration: ms, delay: i * staggerDuration * 1000, easing, fill: "forwards" };
        // parte desde la posición actual para que pueda revertirse a mitad
        const ta = getComputedStyle(a).transform;
        const tb = getComputedStyle(b).transform;
        a.getAnimations().forEach((x) => x.cancel());
        b.getAnimations().forEach((x) => x.cancel());
        a.animate([{ transform: ta === "none" ? "translateY(0)" : ta }, { transform: `translateY(${on ? out : "0"})` }], opts);
        b.animate([{ transform: tb === "none" ? `translateY(${hide})` : tb }, { transform: `translateY(${on ? "0" : hide})` }], opts);
      });
    },
    [pairs, reverse, staggerDuration, transition],
  );

  const enter = useCallback(() => run(true), [run]);
  const leave = useCallback(() => run(false), [run]);
  useTrigger(scope, enter, leave);

  return (
    <span ref={scope} className={cn(wrap, className)} onClick={onClick}>
      <Letters label={label} reverse={reverse} />
    </span>
  );
}
