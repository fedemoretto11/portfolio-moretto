# AGENTS.md

## Proposito

Este repositorio contiene el portfolio personal de Federico Moretto. Si sos una IA trabajando aca, tu objetivo es mejorar el sitio sin romper su identidad: una experiencia editorial, sobria, profesional y enfocada en mostrar credenciales reales.

## Que es este proyecto

- Es un website de portfolio de una sola pagina.
- Esta construido con React + Vite + Tailwind.
- Tiene soporte bilingue con `i18next`.
- La seccion de proyectos sale de data local del repo.
- Usa `logo_fm` como identidad visual.

## Que priorizar

1. Claridad del mensaje profesional.
2. Conversion a contacto o entrevista.
3. Performance de carga.
4. Mantenibilidad del codigo.
5. Accesibilidad basica real.
6. Consistencia entre espanol e ingles.

## Que no hacer

- No convertir el portfolio en una app compleja.
- No agregar librerias pesadas para resolver problemas simples.
- No reintroducir dependencias runtime para el contenido.
- No llenar la UI de efectos, glassmorphism o ruido visual.
- No duplicar fuentes de verdad para copy o proyectos.

## Direccion visual actual

- Estetica editorial premium, sobria y tecnica.
- Paleta basada en azules profundos, superficies oscuras y acentos frios del `logo_fm`.
- Tipografia display con `Fraunces`.
- Tipografia base con `Manrope`.
- Iconografia SVG propia en `src/components/ui/Icon.jsx`.

## Zonas principales del sitio

- `src/components/Header/Header.jsx`: navegacion y cambio de idioma.
- `src/components/Main/Hero.jsx`: propuesta de valor principal.
- `src/components/Main/Works.jsx`: experiencia profesional.
- `src/components/Main/ProjectsView.jsx`: destacados y archivo de proyectos.
- `src/components/Main/About.jsx`: perfil y forma de trabajo.
- `src/components/Main/Skills.jsx`: capacidades agrupadas.
- `src/components/Main/Contact.jsx`: conversion y enlaces de contacto.
- `src/data/projects.js`: fuente de verdad de proyectos.
- `src/components/dictionaries/*.json`: copy bilingue.
- `src/App.jsx`: metadata dinamica por idioma.

## Criterio para cambios

Todo cambio deberia responder al menos una de estas preguntas:

- Hace mas claro que tipo de desarrollador es Federico?
- Hace mas confiable la experiencia?
- Mejora la conversion a contacto o revision de CV?
- Reduce deuda tecnica o riesgo de mantenimiento?

## Antes de cerrar una tarea

- Verificar que el sitio siga renderizando correctamente.
- Correr `npm run lint`.
- Correr `npm run build`.
- Documentar decisiones si cambia estructura, contenido o direccion visual.

## Lecturas recomendadas

- [docs/PROJECT_CONTEXT.md](./docs/PROJECT_CONTEXT.md)
- [docs/TECH_REVIEW.md](./docs/TECH_REVIEW.md)
- [docs/CONTENT_GUIDE.md](./docs/CONTENT_GUIDE.md)
