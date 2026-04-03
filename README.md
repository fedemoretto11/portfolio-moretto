# Portfolio Moretto

Portfolio personal de Federico Moretto construido como una single-page landing profesional.

## Objetivo

Mostrar con claridad que Federico trabaja sobre software real:

- desarrollo full-stack
- soporte tecnico
- hotfixes y mantenimiento
- nuevas funcionalidades para sistemas en produccion

El sitio prioriza credibilidad, claridad narrativa y una experiencia sobria para recruiters, clientes y equipos tecnicos.

## Stack

- React 18
- Vite
- Tailwind CSS
- i18next / react-i18next

## Decisiones actuales

- Proyectos administrados desde Firestore con panel privado en Firebase
- Bilingue con persistencia de idioma en `localStorage`
- Metadata dinamica por idioma
- Tipografia editorial con `Fraunces` para display y `Manrope` para texto
- Paleta basada en `logo_fm`
- Iconografia SVG propia dentro del repo

## Estructura principal

- [src/components/Header/Header.jsx](./src/components/Header/Header.jsx)
- [src/components/Main/Hero.jsx](./src/components/Main/Hero.jsx)
- [src/components/Main/Works.jsx](./src/components/Main/Works.jsx)
- [src/components/Main/ProjectsView.jsx](./src/components/Main/ProjectsView.jsx)
- [src/components/Main/About.jsx](./src/components/Main/About.jsx)
- [src/components/Main/Skills.jsx](./src/components/Main/Skills.jsx)
- [src/components/Main/Contact.jsx](./src/components/Main/Contact.jsx)
- [src/components/ui/Icon.jsx](./src/components/ui/Icon.jsx)
- [src/data/projects.js](./src/data/projects.js)
- [src/components/dictionaries/es.json](./src/components/dictionaries/es.json)
- [src/components/dictionaries/en.json](./src/components/dictionaries/en.json)

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

## Criterio de evolucion

Si se sigue iterando este portfolio, conviene sostener estas reglas:

1. Mantenerlo como landing simple y muy clara.
2. Evitar efectos visuales que compitan con el contenido.
3. Priorizar experiencia, proyectos y contacto antes que listas de tecnologia.
4. Mejorar el contenido solo si aumenta claridad o conversion.
5. No reintroducir dependencias innecesarias para datos o iconos.

## Documentacion

- [AGENTS.md](./AGENTS.md)
- [CLAUDE.md](./CLAUDE.md)
- [GEMINI.md](./GEMINI.md)
- [.github/copilot-instructions.md](./.github/copilot-instructions.md)
- [docs/PROJECT_CONTEXT.md](./docs/PROJECT_CONTEXT.md)
- [docs/TECH_REVIEW.md](./docs/TECH_REVIEW.md)
- [docs/CONTENT_GUIDE.md](./docs/CONTENT_GUIDE.md)
- [FIREBASE_PROJECTS_ADMIN.md](./FIREBASE_PROJECTS_ADMIN.md)
