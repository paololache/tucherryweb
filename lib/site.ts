// Contenido editable de la web de Tu Cherry Studio.
// TODO: confirmar con el equipo los textos de servicios/planes y los datos de contacto.

export const site = {
  name: "Tu Cherry Studio",
  tagline: "Marketing con propósito",
  description:
    "Estudio de marketing en Lima. Estrategia, branding, redes sociales, publicidad digital, web y contenido audiovisual para marcas que quieren crecer con sentido.",
  city: "Lima, Perú",
  email: "hola@tucherry.studio", // TODO: correo real
  whatsapp: "51900000000", // TODO: número real, con código de país
  instagram: "https://instagram.com/", // TODO
  tiktok: "https://tiktok.com/", // TODO
  linkedin: "https://linkedin.com/", // TODO
};

export type ServiceId = "estrategia" | "branding" | "redes" | "ads" | "web" | "audiovisual";

export type Service = {
  id: ServiceId;
  title: string;
  short: string;
  tagline: string;
  description: string;
  includes: string[];
  idealFor: string;
};

export const SERVICES: Service[] = [
  {
    id: "estrategia",
    title: "Estrategia de marca",
    short: "Estrategia",
    tagline: "El punto de partida",
    description: "Definimos qué te hace distinto, a quién le hablas y cómo lo dices. Es la base de todo lo que hacemos juntos.",
    includes: ["Diagnóstico de marca y competencia", "Propósito y propuesta de valor", "Perfil de tu cliente ideal", "Mensajes clave y tono de voz"],
    idealFor: "Marcas que empiezan o que sienten que ya no las representa lo que comunican.",
  },
  {
    id: "branding",
    title: "Branding e identidad",
    short: "Branding",
    tagline: "Una marca que se recuerda",
    description: "Logotipo, paleta, tipografía y un sistema visual que se reconoce en cualquier lugar.",
    includes: ["Logotipo y variantes", "Paleta y tipografías", "Aplicaciones (redes, papelería, empaque)", "Manual de marca"],
    idealFor: "Negocios nuevos o marcas que necesitan renovarse.",
  },
  {
    id: "redes",
    title: "Redes sociales",
    short: "Redes",
    tagline: "Contenido que conversa",
    description: "Planificación, diseño y gestión de contenido para Instagram, TikTok, Facebook y LinkedIn.",
    includes: ["Estrategia y calendario mensual", "Diseño de posts, carruseles e historias", "Guiones para reels", "Community management y reporte"],
    idealFor: "Marcas que quieren constancia y una voz propia en redes.",
  },
  {
    id: "ads",
    title: "Publicidad digital",
    short: "Publicidad",
    tagline: "Anuncios con intención",
    description: "Campañas en Meta, Google y TikTok con objetivos claros, presupuesto cuidado y reportes que se entienden.",
    includes: ["Estrategia de campaña y públicos", "Creatividades para anuncios", "Configuración y optimización", "Reporte mensual con aprendizajes"],
    idealFor: "Negocios que quieren más ventas, reservas o mensajes.",
  },
  {
    id: "web",
    title: "Web y landing pages",
    short: "Web",
    tagline: "Visitas que se vuelven clientes",
    description: "Sitios rápidos y bonitos, pensados para convertir visitas en clientes.",
    includes: ["Arquitectura y textos", "Diseño responsive", "Desarrollo y SEO básico", "Integración con WhatsApp y analítica"],
    idealFor: "Marcas que necesitan una casa digital propia o una página para una campaña.",
  },
  {
    id: "audiovisual",
    title: "Producción audiovisual",
    short: "Audiovisual",
    tagline: "Tu historia, en imagen",
    description: "Fotografía de producto, reels y piezas en video que cuentan tu historia con calidez.",
    includes: ["Guion y planificación", "Sesión de foto o video", "Edición para cada red", "Banco de contenido para el mes"],
    idealFor: "Marcas que quieren contenido propio, no de banco de imágenes.",
  },
];

export const serviceById = (id: ServiceId) => SERVICES.find((s) => s.id === id)!;

/** Paquetes de ejemplo que se muestran como tickets en el hero. Ajustar con el equipo. */
export type Plan = { id: string; name: string; subtitle: string; services: ServiceId[]; duration: string; tone: "cherry" | "butter" | "sage" };
export const PLANS: Plan[] = [
  { id: "lanzamiento", name: "Lanzamiento", subtitle: "De cero a marca", services: ["estrategia", "branding", "redes"], duration: "6 semanas", tone: "cherry" },
  { id: "crecimiento", name: "Crecimiento", subtitle: "Tu equipo mensual", services: ["redes", "ads", "audiovisual"], duration: "Mensual", tone: "butter" },
  { id: "presencia", name: "Presencia", subtitle: "Tu casa digital", services: ["web", "estrategia"], duration: "4 semanas", tone: "sage" },
];

export const SECTORS = ["Gastronomía", "Moda", "Salud", "Educación", "Belleza", "Retail", "Inmobiliario", "Emprendimientos"];

export const STEPS = [
  {
    id: "escuchamos",
    label: "Escuchamos",
    title: "Primero, te escuchamos",
    text: "Conocemos tu negocio, tu cliente y tus metas. Una conversación honesta antes de proponer nada.",
    deliverables: ["Reunión de diagnóstico", "Revisión de tu marca y redes", "Objetivos claros y medibles"],
  },
  {
    id: "estrategia",
    label: "Estrategia",
    title: "Definimos el propósito",
    text: "Aterrizamos estrategia, mensajes y prioridades. Sabrás qué haremos, por qué y cómo lo mediremos.",
    deliverables: ["Propuesta y cronograma", "Mensajes clave", "Indicadores de éxito"],
  },
  {
    id: "creamos",
    label: "Creamos",
    title: "Manos a la obra",
    text: "Diseño, contenido, campañas y web. Todo con la misma voz y el mismo cuidado por el detalle.",
    deliverables: ["Piezas y contenidos", "Campañas activas", "Revisiones contigo"],
  },
  {
    id: "medimos",
    label: "Medimos",
    title: "Medimos y mejoramos",
    text: "Revisamos resultados contigo cada mes y ajustamos lo que haga falta para seguir creciendo.",
    deliverables: ["Reporte mensual", "Aprendizajes y ajustes", "Siguiente plan de acción"],
  },
];

/** Imágenes del carrusel del hero (public/hero). Reemplázalas por fotos reales del equipo cuando las tengas. */
export const HERO_SLIDES: { src: string; alt: string; label: string; caption: string; service: ServiceId }[] = [
  { src: "hero/branding.webp", alt: "Equipo revisando bocetos de logotipo, paletas de color y empaques sobre una mesa", label: "Branding", caption: "Identidades que se recuerdan", service: "branding" },
  { src: "hero/redes.webp", alt: "Dos creadoras grabando un reel de producto con un aro de luz mientras un compañero revisa el feed", label: "Redes sociales", caption: "Contenido que conversa", service: "redes" },
  { src: "hero/publicidad.webp", alt: "Especialista analizando métricas de una campaña digital en un monitor junto a un compañero", label: "Publicidad digital", caption: "Campañas con intención", service: "ads" },
  { src: "hero/estrategia.webp", alt: "Equipo planificando una estrategia de marketing con notas adhesivas en la pared", label: "Estrategia", caption: "Todo empieza con un propósito", service: "estrategia" },
];
