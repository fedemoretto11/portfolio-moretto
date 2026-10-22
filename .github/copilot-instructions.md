# Copilot Instructions

This repository contains Federico Moretto's personal portfolio website.

## Project goals

- Keep the portfolio simple, fast, and professional.
- Prioritize a clear professional message.
- Preserve the single-page experience.
- Favor maintainability over unnecessary complexity.
- Keep the visual tone editorial, sober, and human.

## Current stack

- React 18
- Vite
- Tailwind CSS
- i18next / react-i18next

## Important context

- Public projects come exclusively from Git (`src/data/projects.js`, prepared by `src/data/publicProjects.js`). Never initialize Firebase on public visits. The preserved legacy admin requires explicit development opt-in and is excluded from every production/preview build. Initial loading is disabled; remote data must remain untouched until inventoried and backed up. Use Node 24 and `docs/RELEASE.md` for checks and delivery.
- The site supports English and Spanish with persisted language selection.
- Metadata is updated dynamically based on the active language.
- `logo_fm` defines the visual identity.
- Icons are local SVG components, not an external icon font.

## Preferred implementation direction

- Prefer static content or build-time data.
- Avoid large dependencies.
- Keep bilingual support intact.
- Preserve the current visual direction unless a change clearly improves clarity.
- Optimize for readability, accessibility, and first-load performance.

## When editing content

- Keep the tone professional, direct, and human.
- Avoid inflated marketing language.
- Emphasize real-world software work, maintainability, support, debugging, and product impact.

## Read before major changes

- [../docs/PROFESSIONAL_UPDATE_2026.md](../docs/PROFESSIONAL_UPDATE_2026.md)
- [../AGENTS.md](../AGENTS.md)
- [../docs/PROJECT_CONTEXT.md](../docs/PROJECT_CONTEXT.md)
- [../docs/TECH_REVIEW.md](../docs/TECH_REVIEW.md)
- [../docs/CONTENT_GUIDE.md](../docs/CONTENT_GUIDE.md)
