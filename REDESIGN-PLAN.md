# Plan de Rediseño — imlevan-portfolio

Rama: `redesign`

## Dirección
**Oscuro premium vino** — fondo negro cálido, acento vino #740b37 como escala tonal oklch,
tarjetas glass, textura de grano, tipografía Syne (display) + Inter (body).

## Stack nuevo
- Tailwind CSS 4 via `@tailwindcss/vite` (sin Bootstrap)
- lucide-astro (iconos SVG, sin Font Awesome)
- Fontsource local: Syne Variable + Inter Variable (sin Google Fonts CDN)
- GSAP + ScrollTrigger + Flip (animaciones)
- Lenis (smooth scroll)
- i18n nativo de Astro: `/` (es) y `/en/` (en)

## Estructura (8 → 6 secciones)
1. Hero — entrada GSAP + typewriter
2. Sobre mí — bio + servicios integrados
3. Experiencia — timeline unificada (trabajo + estudios)
4. Proyectos — bento grid + filtros con GSAP Flip
5. Skills — grid de badges
6. Contacto + Footer — form web3forms preservado

## Extras
- Lenis smooth scroll
- Toggle de tema claro/oscuro (localStorage)
- Cursor personalizado con botones magnéticos
- i18n ES/EN con switcher y hreflang

## Fases
- [x] Fase 0 — Seguridad: branch, plan, build baseline
- [x] Fase 1 — Cimientos: deps, astro.config, global.css con tokens, Layout nuevo
- [x] Fase 2 — i18n: rutas, diccionarios, migración de textos
- [x] Fase 3 — Componentes: Header, Hero, Sobre mí, Experiencia, Proyectos, Skills, Contacto, Footer
- [x] Fase 4 — Animación: Lenis + GSAP, reveals, timeline, cursor magnético
- [x] Fase 5 — Pulido: responsive, contraste (A11y 100), CLS 0 (Lighthouse), dimensiones de imágenes

## Resultado Lighthouse (dev)
- Accessibility: 100
- Best Practices: 100
- CLS: 0
- SEO: 92 (solo el link "Learn more" del toolbar de dev de Astro, no existe en producción)

## Bugs a arreglar
- ID duplicado `#portfolio`
- ~10 media queries apiladas en Proyecto.astro
- Inconsistencia de tema entre secciones
- 8 recursos externos → 0 CDNs
