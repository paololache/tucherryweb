import { StudioProvider } from "@/components/studio-provider";
import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { About, Work, Manifesto } from "@/components/sections/intro";
import { Stack } from "@/components/ui/stack";
import { Marquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Studio } from "@/components/sections/studio";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import type { PageContent } from "@/lib/site";

/** Estructura completa de la web; cada ruta (portada, /salud) solo cambia el contenido. */
export function Landing({ content }: { content: PageContent }) {
  return (
    <StudioProvider content={content}>
      <a href="#contacto" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-cherry focus:px-4 focus:py-2 focus:text-porcelain">
        Ir a contacto
      </a>
      <Header />
      <main>
        <Stack>
          <Hero />
          <About />
          <Work />
          <Manifesto />
        </Stack>
        <Marquee />
        <Services />
        <Process />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </StudioProvider>
  );
}
