import { Logo, NAV } from "@/components/brand";
import { site } from "@/lib/site";
import { RandomLetterSwapPingPong } from "@/components/ui/random-letter-swap";

export function Footer() {
  return (
    <footer className="bg-cream px-4 pb-8 pt-16 sm:px-6">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="items-start" />
            <p className="mt-4 max-w-xs text-sm text-muted">{site.description}</p>
          </div>
          <nav aria-label="Pie de página">
            <p className="eyebrow text-muted">Explora</p>
            <ul className="mt-4 space-y-2">
              {NAV.map((n) => <li key={n.href}><a href={n.href} className="inline-flex"><RandomLetterSwapPingPong label={n.label} /></a></li>)}
            </ul>
          </nav>
          <div>
            <p className="eyebrow text-muted">Síguenos</p>
            <ul className="mt-4 space-y-2">
              <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex"><RandomLetterSwapPingPong label="Instagram" /></a></li>
              <li><a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex"><RandomLetterSwapPingPong label="TikTok" /></a></li>
              <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex"><RandomLetterSwapPingPong label="LinkedIn" /></a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-muted">Escríbenos</p>
            <ul className="mt-4 space-y-2">
              <li><a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a></li>
              <li><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex"><RandomLetterSwapPingPong label="WhatsApp" /></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-cherry/15 pt-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p>{site.name} · {site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
