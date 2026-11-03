import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} · ${site.tagline}`,
  description: site.description,
  keywords: ["agencia de marketing Lima", "branding Lima", "redes sociales", "publicidad digital", "diseño web", "marketing con propósito"],
  openGraph: { title: `${site.name} · ${site.tagline}`, description: site.description, locale: "es_PE", type: "website", siteName: site.name },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

export const viewport: Viewport = { themeColor: "#80031e" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE">
      <body>{children}</body>
    </html>
  );
}
