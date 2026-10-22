# CLAUDE.md

Resumen rapido para Claude y asistentes similares.

## Proyecto

Portfolio personal de Federico Moretto.

## Estado actual

- Single-page website
- React + Vite + Tailwind
- `i18next` para espanol e ingles
- Proyectos publicos exclusivamente desde `src/data/projects.js` (Git), preparados en `src/data/publicProjects.js`. Firebase solo para el administrador heredado con opt-in local de desarrollo; siempre excluido de builds/preview. Carga inicial deshabilitada y datos remotos sin inventariar ni respaldar. Node 24 y procedimiento en `docs/RELEASE.md`.
- `logo_fm` como base de identidad visual
- Metadata dinamica por idioma desde `src/App.jsx`
- Iconografia SVG propia en `src/components/ui/Icon.jsx`

## Direccion del sitio

El portfolio debe sentirse:

- profesional
- sobrio
- tecnico
- humano
- claro

Evitar cualquier cambio que lo empuje hacia una app compleja o una landing recargada.

## Prioridades

1. Claridad del mensaje profesional.
2. Conversion a contacto.
3. Performance y mantenibilidad.
4. Consistencia bilingue.
5. Accesibilidad basica real.

## Reglas utiles

- Preferi contenido estatico o build-time.
- No agregues dependencias pesadas sin una razon fuerte.
- No llenes la UI de tarjetas, efectos o decoracion innecesaria.
- Si mejoras copy, mantene tono cercano, concreto y profesional.

## Leer tambien

- [Actualizacion profesional y bloqueos de publicacion](./docs/PROFESSIONAL_UPDATE_2026.md)
- [AGENTS.md](./AGENTS.md)
- [docs/PROJECT_CONTEXT.md](./docs/PROJECT_CONTEXT.md)
- [docs/TECH_REVIEW.md](./docs/TECH_REVIEW.md)
- [docs/CONTENT_GUIDE.md](./docs/CONTENT_GUIDE.md)
