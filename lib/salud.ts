// Contenido de la vertical de salud (/salud): hospitales, clínicas, médicos independientes y odontología.
// Mismos servicios (ids) que la portada para reutilizar imágenes e ilustraciones, con textos del sector.
// TODO: validar con el equipo los planes y los textos antes de lanzar campañas a esta página.

import { SECTIONS_NAV, type PageContent } from "@/lib/site";

export const SALUD: PageContent = {
  nav: [...SECTIONS_NAV.slice(0, 3), { label: "Inicio", href: "/" }, SECTIONS_NAV[3]],
  description:
    "Marketing para hospitales, clínicas, consultorios dentales y médicos independientes en Lima: estrategia, marca, contenido, captación de pacientes y web.",
  services: [
    {
      id: "estrategia",
      title: "Estrategia para tu práctica",
      short: "Estrategia",
      tagline: "Tu especialidad, bien explicada",
      description: "Definimos cómo se diferencia tu clínica o consulta, a qué pacientes quieres llegar y qué mensajes generan confianza.",
      includes: ["Diagnóstico de tu práctica y competencia", "Perfil de tus pacientes ideales", "Propuesta de valor por especialidad", "Plan de captación de citas"],
      idealFor: "Profesionales que inician consulta propia o clínicas que abren una nueva especialidad o sede.",
    },
    {
      id: "branding",
      title: "Marca médica",
      short: "Branding",
      tagline: "Una imagen que da confianza",
      description: "Identidad visual seria y cercana para que tu consulta se reconozca y transmita profesionalismo en cada punto de contacto.",
      includes: ["Logotipo y variantes", "Paleta y tipografías", "Señalética, recetas y papelería", "Manual de marca"],
      idealFor: "Consultorios, centros odontológicos y clínicas que se renuevan o se expanden.",
    },
    {
      id: "redes",
      title: "Contenido de salud",
      short: "Redes",
      tagline: "Educar también es atraer",
      description: "Contenido útil para tus pacientes en Instagram, TikTok, Facebook y LinkedIn, siempre revisado por ti antes de publicarse.",
      includes: ["Calendario mensual por especialidad", "Posts, carruseles y reels educativos", "Guiones para videos con el especialista", "Gestión de comentarios y mensajes"],
      idealFor: "Médicos y equipos que quieren ser referentes de su especialidad.",
    },
    {
      id: "ads",
      title: "Captación de pacientes",
      short: "Captación",
      tagline: "Más citas, menos huecos en la agenda",
      description: "Campañas en Google y Meta para aparecer cuando buscan tu especialidad cerca, siguiendo las políticas de salud de cada plataforma.",
      includes: ["Campañas de búsqueda local", "Anuncios en Meta por especialidad", "Seguimiento de llamadas, WhatsApp y reservas", "Reporte mensual de costo por cita"],
      idealFor: "Clínicas y consultorios que quieren más pacientes nuevos cada mes.",
    },
    {
      id: "web",
      title: "Web y reservas",
      short: "Web",
      tagline: "Reservar debe ser fácil",
      description: "Webs rápidas con tus especialidades, tu equipo y un camino corto para pedir cita. Incluye tu ficha de Google para aparecer en el mapa.",
      includes: ["Páginas por especialidad y profesional", "Botón de cita y WhatsApp", "Perfil de Google Business y SEO local", "Gestión de reseñas"],
      idealFor: "Clínicas y profesionales que dependen de llamadas o mensajes para agendar.",
    },
    {
      id: "audiovisual",
      title: "Foto y video clínico",
      short: "Audiovisual",
      tagline: "Que te conozcan antes de la consulta",
      description: "Retratos del equipo, instalaciones y videos explicativos. Nunca mostramos pacientes sin su consentimiento por escrito.",
      includes: ["Retratos profesionales del equipo", "Fotos de instalaciones y equipos", "Videos explicativos de procedimientos", "Banco de contenido para el mes"],
      idealFor: "Centros que quieren mostrar su equipo y sus espacios con calidez.",
    },
  ],
  plans: [
    { id: "consultorio", name: "Consultorio", subtitle: "Tu práctica propia", services: ["estrategia", "branding", "web"], duration: "6 semanas", tone: "cherry" },
    { id: "agenda", name: "Agenda llena", subtitle: "Pacientes cada mes", services: ["ads", "web", "redes"], duration: "Mensual", tone: "butter" },
    { id: "clinica", name: "Clínica", subtitle: "Tu equipo de marketing", services: ["redes", "ads", "audiovisual"], duration: "Mensual", tone: "sage" },
  ],
  steps: [
    {
      id: "diagnostico",
      label: "Diagnóstico",
      title: "Primero, el diagnóstico",
      text: "Conocemos tu práctica, tus especialidades y a tus pacientes. Revisamos cómo te encuentran hoy y dónde se pierden citas.",
      deliverables: ["Reunión de diagnóstico", "Revisión de web, redes y Google", "Objetivos de citas medibles"],
    },
    {
      id: "plan",
      label: "Plan",
      title: "Un plan a tu medida",
      text: "Prioridades, mensajes y canales según tu especialidad, cuidando siempre la ética médica y la privacidad.",
      deliverables: ["Propuesta y cronograma", "Mensajes por especialidad", "Indicadores de éxito"],
    },
    {
      id: "tratamiento",
      label: "Tratamiento",
      title: "Manos a la obra",
      text: "Marca, contenido, campañas y web con la misma voz. Tú validas todo lo que habla de salud antes de publicarlo.",
      deliverables: ["Piezas y contenidos", "Campañas activas", "Revisiones contigo"],
    },
    {
      id: "control",
      label: "Control",
      title: "Controles mensuales",
      text: "Medimos llamadas, mensajes y citas, y ajustamos lo necesario para que tu agenda siga creciendo.",
      deliverables: ["Reporte mensual de citas", "Aprendizajes y ajustes", "Siguiente plan de acción"],
    },
  ],
  sectors: ["Hospitales", "Clínicas", "Médicos independientes", "Odontología", "Dermatología", "Ginecología", "Pediatría", "Oftalmología", "Nutrición", "Psicología", "Fisioterapia", "Laboratorios"],
  marquee: ["Marketing médico", "Captación de pacientes", "Clínicas y hospitales", "Odontología", "Médicos independientes", "Reputación online", "Web y reservas", "Marketing para la salud"],
  hero: {
    tags: ["[ marketing para salud ]", "[ Lima, Perú ]", "[ clínicas · médicos · dental ]"],
    title: ["Marketing", "para la", "salud."],
    intro: "ayuda a hospitales, clínicas, consultorios dentales y médicos independientes a atraer más pacientes con una comunicación clara, cercana y ética.",
  },
  about: {
    text: "[_Tu_Cherry_Studio_] acompaña a profesionales de la salud que quieren crecer → sin perder la confianza de sus pacientes FOCO Traducimos tu experiencia en mensajes claros, contenido útil y campañas responsables que llenan tu agenda.",
    mark: { "[_Tu_Cherry_Studio_]": "hl", "→": "arrow", FOCO: "tag" },
    points: [
      ["Confianza", "Comunicación seria, cercana y verificable."],
      ["Ética", "Sin promesas de resultados ni exageraciones."],
      ["Pacientes", "Más citas y una mejor experiencia desde el primer clic."],
    ],
  },
  work: { title: "Así trabajamos", tail: "con tu consulta" },
  manifesto: {
    text: "Los pacientes eligen a quien [_entienden_y_les_da_confianza_] y esa confianza se construye → mucho antes de la primera cita.",
    mark: { "[_entienden_y_les_da_confianza_]": "hl", "→": "arrow" },
    pill: "Confianza · Ética · Cercanía",
    body: "Hacemos que tu especialidad se entienda, que tu equipo se vea y que pedir una cita sea fácil.",
  },
  servicesHead: { title: "Marketing hecho para el sector salud", aside: "Para hospitales, clínicas, consultorios y profesionales independientes. Por proyecto o mensual." },
  process: { title: "Un proceso claro, como una buena consulta", text: "Diagnóstico, plan, tratamiento y control. Así cuidamos la salud de tu marca." },
  studio: {
    title: "Lo que nos guía",
    values: [
      { title: "Confianza", text: "Mostramos a tu equipo y tu trabajo tal como son, sin exagerar." },
      { title: "Ética", text: "Respetamos la privacidad del paciente y no prometemos resultados clínicos." },
      { title: "Detalle", text: "Cuidamos cada mensaje para que sea claro, correcto y humano." },
    ],
  },
  contact: {
    title: "¿Llenamos tu agenda?",
    text: "Cuéntanos sobre tu clínica o consultorio. Te respondemos con una propuesta pensada para tu especialidad.",
    source: "Vengo de la página de marketing para salud.",
  },
};
