import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { SALUD } from "@/lib/salud";
import { site } from "@/lib/site";

const title = `Marketing para salud · ${site.name}`;

export const metadata: Metadata = {
  title,
  description: SALUD.description,
  keywords: ["marketing médico Lima", "marketing para clínicas", "marketing dental", "marketing para médicos", "captación de pacientes", "marketing para hospitales"],
  alternates: { canonical: "/salud" },
  openGraph: { title, description: SALUD.description, locale: "es_PE", type: "website", siteName: site.name, url: "/salud" },
  twitter: { card: "summary_large_image", title, description: SALUD.description },
};

export default function Salud() {
  return <Landing content={SALUD} />;
}
