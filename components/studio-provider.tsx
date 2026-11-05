"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { PageContent, ServiceId } from "@/lib/site";

type Ctx = {
  /** textos y datos de la página actual (portada o vertical) */
  content: PageContent;
  /** servicios marcados para el brief (hero y contacto comparten esta lista) */
  picked: ServiceId[];
  toggle: (id: ServiceId) => void;
  setPicked: (ids: ServiceId[]) => void;
  /** último servicio elegido en el hero: el carrusel salta a su imagen */
  focus: ServiceId | null;
  /** pre-marca servicios y lleva al contacto */
  quote: (ids: ServiceId[]) => void;
  /** fila abierta en la lista de servicios */
  openRow: ServiceId | null;
  setOpenRow: (id: ServiceId | null) => void;
  /** abre un servicio en la lista y hace scroll hasta él */
  showService: (id: ServiceId) => void;
};

const StudioCtx = createContext<Ctx | null>(null);

export function StudioProvider({ content, children }: { content: PageContent; children: React.ReactNode }) {
  const SERVICES = content.services;
  const [picked, setPicked] = useState<ServiceId[]>([]);
  const [focus, setFocus] = useState<ServiceId | null>(null);
  const [openRow, setOpenRowState] = useState<ServiceId | null>(SERVICES[0].id);

  const setOpenRow = useCallback((id: ServiceId | null) => setOpenRowState(id), []);

  const showService = useCallback((id: ServiceId) => {
    setOpenRowState(id);
    history.replaceState(null, "", `#servicio=${id}`);
    requestAnimationFrame(() => document.getElementById(`servicio-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
  }, []);

  useEffect(() => {
    const m = window.location.hash.match(/^#servicio=(.+)$/);
    if (m && SERVICES.some((s) => s.id === m[1])) showService(m[1] as ServiceId);
  }, [showService, SERVICES]);

  const toggle = useCallback((id: ServiceId) => {
    setPicked((p) => {
      const on = p.includes(id);
      if (!on) setFocus(id);
      return on ? p.filter((x) => x !== id) : [...p, id];
    });
  }, []);

  const quote = useCallback((ids: ServiceId[]) => {
    setPicked(ids);
    requestAnimationFrame(() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);

  const value = useMemo(
    () => ({ content, picked, toggle, setPicked, focus, quote, openRow, setOpenRow, showService }),
    [content, picked, toggle, focus, quote, openRow, setOpenRow, showService],
  );

  return <StudioCtx.Provider value={value}>{children}</StudioCtx.Provider>;
}

export function useStudio() {
  const c = useContext(StudioCtx);
  if (!c) throw new Error("useStudio must be used inside StudioProvider");
  return c;
}
