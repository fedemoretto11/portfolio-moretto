# Copilot Instructions

This repository contains Federico Moretto's personal portfolio website.

## Project goals

- Keep the portfolio simple, fast and professional.
- Improve clarity of the professional message.
- Preserve the single-page experience.
- Favor maintainability over unnecessary complexity.

## Current stack

- React 18
- Vite
- Tailwind CSS
- i18next
- Firebase / Firestore

## Important context

- The projects section currently loads from Firestore at runtime.
- There is Firebase utility and migration code inside `src/` that should not remain as production-facing frontend code.
- The repository currently has lint issues.
- The main portrait image is too heavy for a portfolio website.

## Preferred implementation direction

- Prefer static or build-time project data over runtime Firestore for portfolio content.
- Avoid adding large dependencies.
- Keep bilingual support intact.
- Preserve the current visual language unless a change clearly improves the site.
- Optimize for readability, accessibility and first-load performance.

## When editing content

- Keep the tone professional, direct and human.
- Avoid inflated marketing language.
- Emphasize real-world software work, maintainability, support, debugging and product impact.

## Read before making major changes

- [../AGENTS.md](../AGENTS.md)
- [../docs/PROJECT_CONTEXT.md](../docs/PROJECT_CONTEXT.md)
- [../docs/TECH_REVIEW.md](../docs/TECH_REVIEW.md)
- [../docs/CONTENT_GUIDE.md](../docs/CONTENT_GUIDE.md)
