# Portfolio Moretto

Portfolio personal de Federico Moretto desarrollado con React, Vite y Tailwind CSS.

El sitio tiene un enfoque de una sola página y presenta:

- Hero principal con propuesta de valor.
- Sección "Sobre mí" con perfil profesional.
- Experiencia laboral.
- Skills y stack técnico.
- Proyectos destacados.
- Contacto y acceso al CV.

## Stack actual

- React 18
- Vite
- Tailwind CSS
- i18next / react-i18next
- Firebase / Firestore
- Bootstrap Icons

## Objetivo del proyecto

Mostrar el perfil profesional de Federico de forma clara, moderna y confiable, priorizando:

- Buena primera impresión visual.
- Navegación simple.
- Contenido profesional útil para recruiters y clientes.
- Carga rápida y mantenimiento sencillo.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Estado actual

La UI ya tiene una base visual sólida y responsive, pero todavía hay deuda técnica relevante:

- La sección de proyectos depende de Firestore en runtime.
- Hay código de utilidades y migración de Firebase dentro de `src/`.
- El repo no pasa `lint` en limpio.
- La imagen principal del perfil pesa demasiado para un portfolio.
- Faltan mejoras de SEO, performance y persistencia de idioma.

## Documentación para IA

Este repo incluye documentación específica para asistentes de IA y editores:

- [AGENTS.md](./AGENTS.md)
- [CLAUDE.md](./CLAUDE.md)
- [GEMINI.md](./GEMINI.md)
- [.github/copilot-instructions.md](./.github/copilot-instructions.md)
- [docs/PROJECT_CONTEXT.md](./docs/PROJECT_CONTEXT.md)
- [docs/TECH_REVIEW.md](./docs/TECH_REVIEW.md)
- [docs/CONTENT_GUIDE.md](./docs/CONTENT_GUIDE.md)

## Dirección recomendada

Si se sigue iterando este portfolio, la prioridad sugerida es:

1. Dejar el repo sano y sin código roto.
2. Pasar proyectos a contenido estático o build-time.
3. Optimizar assets, sobre todo la foto principal.
4. Mejorar SEO y metadata social.
5. Hacer más fuerte la propuesta profesional y la conversión.
