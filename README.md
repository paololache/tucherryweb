# Tu Cherry Studio · Web de agencia

Web de marketing de **Tu Cherry Studio** ("Marketing con propósito"), derivada de la plantilla de Agenda Lima Norte y adaptada al design system de la marca.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4. Las animaciones son CSS (scroll-driven animations), sin librerías de animación.

## Ejecutar
```bash
npm install
npm run dev                     # http://localhost:3000
STATIC_EXPORT=1 npm run build   # export estático en /out
```

## Desplegar en Vercel
Importa el repositorio en Vercel: detecta Next.js y no necesita `vercel.json` ni variables de entorno. Cada push a `main` despliega a producción. No definas `STATIC_EXPORT` en Vercel.

## Editar contenido
Todo está en `lib/site.ts`: servicios (qué incluye, ideal para), planes del hero, sectores, pasos del proceso y datos de contacto (marcados con TODO).

## Qué hace
- Mini brief en el hero: eliges servicios y "Cotizar" te lleva al formulario con esos servicios marcados.
- Tickets de planes (21st "Admit One Ticket"): al tocarlos pre-marcan los servicios del plan.
- Bento de servicios con detalle en modal (enlace directo `#servicio=id`) y botón "Cotizar este servicio".
- Proceso en pestañas animadas (21st "Animated Chip Tabs").
- Formulario de contacto que envía el brief por WhatsApp.
# tucherryweb
