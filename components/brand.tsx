import { cn } from "@/lib/utils";

export const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Estudio", href: "#estudio" },
  { label: "Contacto", href: "#contacto" },
];

/**
 * Logotipo tipográfico ("Tu Cherry" + línea STUDIO) mientras no se carguen
 * los PNG oficiales. No redibuja el isologo.
 */
export function Logo({ onCherry = false, className }: { onCherry?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex flex-col items-center leading-none", onCherry ? "text-butter" : "text-cherry", className)} aria-label="Tu Cherry Studio">
      <span className="display text-[22px] tracking-tight">Tu Cherry</span>
      <span className="eyebrow mt-1 pl-[0.55em] !text-[9px] !tracking-[0.55em]">Studio</span>
    </span>
  );
}
