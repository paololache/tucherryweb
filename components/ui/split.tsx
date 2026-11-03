import { Fragment } from "react";
import { cn } from "@/lib/utils";

/**
 * Divide un texto en palabras y letras para animarlas con CSS (sin JS en el cliente).
 * - mode "chars": entrada letra por letra al cargar (hero) + ola al pasar el cursor.
 * - mode "words": cada palabra sube al entrar en pantalla con el scroll (títulos de sección).
 * El texto completo queda en aria-label para lectores de pantalla.
 */
export function SplitText({
  text,
  mode = "words",
  delay = 0,
  start = 0,
  className,
  wordClassName,
}: {
  text: string;
  mode?: "chars" | "words";
  /** retraso inicial en segundos (solo chars) */
  delay?: number;
  /** índice inicial para encadenar varias líneas (solo chars) */
  start?: number;
  className?: string;
  wordClassName?: (word: string, i: number) => string | undefined;
}) {
  const words = text.split(" ");
  let n = start;
  return (
    <span className={cn(mode === "chars" ? "split-chars" : "split-words", className)} aria-label={text} role="text">
      {words.map((w, wi) => (
        <Fragment key={wi}>
          <span aria-hidden className={cn("split-mask", wordClassName?.(w, wi))}>
            {mode === "chars" ? (
              [...w].map((ch) => {
                const i = n++;
                return (
                  <span key={i} className="char" style={{ ["--i" as string]: i, ["--d" as string]: `${delay}s` }}>
                    <span className="char-inner">{ch}</span>
                  </span>
                );
              })
            ) : (
              <span className="word" style={{ ["--w" as string]: wi }}>{w}</span>
            )}
          </span>
          {wi < words.length - 1 && " "}
        </Fragment>
      ))}
    </span>
  );
}
