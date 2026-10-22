# GEMINI.md

Contexto de trabajo para Gemini y otros asistentes.

## Que es este repo

Es el portfolio web personal de Federico Moretto.

## Objetivo

Presentar a Federico como Software Developer con foco en .NET, backend e integraciones empresariales. Distinguir su experiencia profesional de los proyectos personales full stack y mobile; las fechas de Asince siguen sujetas a aprobacion editorial.

## Stack actual

- React 18
- Vite
- Tailwind CSS
- i18next / react-i18next

## Sistema actual

- Navegacion por secciones
- Copy bilingue en JSON
- La fuente unica de proyectos publicos es `src/data/projects.js` (Git), normalizada por `src/data/publicProjects.js`, sin conexiones Firebase.
- El administrador Firebase es heredado y esta separado (`useAdminProjects`); solo desarrollo con opt-in explicito, nunca builds/preview. Sus cambios no modifican el catalogo publico. Carga inicial deshabilitada; no borrar datos remotos sin inventario y respaldo. Usar Node 24; ver `docs/RELEASE.md`.
- Paleta alineada al `logo_fm`
- Tipografia editorial y sobria
- Iconos SVG propios

## Prioridades sugeridas

1. Claridad profesional.
2. Conversion a contacto.
3. Performance.
4. Mantenibilidad.
5. Consistencia entre idiomas.

## Restricciones

- No agregar complejidad innecesaria.
- No depender de servicios externos para contenido critico.
- No volver a una estetica recargada o muy "SaaS".
- No romper la lectura simple de la landing.

## Fuentes de contexto

- [Actualizacion profesional y bloqueos de publicacion](./docs/PROFESSIONAL_UPDATE_2026.md)
- [AGENTS.md](./AGENTS.md)
- [docs/PROJECT_CONTEXT.md](./docs/PROJECT_CONTEXT.md)
- [docs/TECH_REVIEW.md](./docs/TECH_REVIEW.md)
- [docs/CONTENT_GUIDE.md](./docs/CONTENT_GUIDE.md)
