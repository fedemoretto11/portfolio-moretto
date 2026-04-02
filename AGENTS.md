# AGENTS.md

## Propósito

Este repositorio contiene el portfolio personal de Federico Moretto. Si sos una IA trabajando en este proyecto, tu objetivo es mejorar el sitio sin romper su identidad: una experiencia simple, moderna, profesional y orientada a mostrar credenciales reales.

## Qué es este proyecto

- Es un website de portfolio de una sola página.
- Está construido con React + Vite + Tailwind.
- Tiene soporte bilingüe con `i18next`.
- Hoy la sección de proyectos se alimenta desde Firestore.

## Qué priorizar

1. Claridad del mensaje profesional.
2. Performance de carga.
3. Mantenibilidad del código.
4. Accesibilidad básica real.
5. SEO técnico y metadata social.
6. Consistencia entre español e inglés.

## Qué no hacer

- No convertir el portfolio en una app compleja sin necesidad.
- No agregar librerías pesadas si el problema se resuelve con React y CSS.
- No introducir animaciones invasivas o ruido visual.
- No romper la navegación por secciones.
- No duplicar fuentes de verdad para el contenido.

## Problemas conocidos del repo

- `src/components/db/data.js` contiene helpers rotos y deuda técnica.
- `src/components/db/migrations.js` es código operativo mezclado con frontend.
- `npm run lint` falla en el estado actual.
- La imagen principal del perfil pesa demasiado.
- La sección de proyectos depende de Firestore en runtime y eso agrega riesgo innecesario para un portfolio.
- El idioma no se persiste entre sesiones.
- El SEO actual es básico.

## Forma recomendada de trabajar

- Mantener el sitio como una landing clara de una sola página.
- Preferir contenido estático o build-time para proyectos.
- Mejorar primero lo estructural antes que sumar features nuevas.
- Mantener una estética profesional y limpia.
- Si se toca copy, respetar el tono actual: cercano, profesional y concreto.

## Zonas principales del sitio

- `src/components/Header/Header.jsx`: navegación y cambio de idioma.
- `src/components/Main/Hero.jsx`: propuesta de valor principal.
- `src/components/Main/About.jsx`: perfil profesional.
- `src/components/Main/Works.jsx`: experiencia laboral.
- `src/components/Main/Skills.jsx`: stack y fortalezas.
- `src/components/Main/ProjectsView.jsx`: contenedor visual de proyectos.
- `src/components/Projects/*`: render y data flow de proyectos.
- `src/components/Main/Contact.jsx`: CTA de contacto y CV.
- `src/i18n.js`: configuración de idiomas.

## Criterio para cambios de contenido

Todo cambio debe responder al menos una de estas preguntas:

- ¿Hace más claro qué tipo de desarrollador es Federico?
- ¿Hace más confiable o profesional la experiencia?
- ¿Mejora la conversión a contacto, entrevista o revisión de CV?
- ¿Reduce deuda técnica o riesgo operativo?

## Antes de cerrar una tarea

- Verificar que el sitio siga renderizando correctamente.
- Si hubo cambios técnicos, correr `npm run lint` y `npm run build` cuando sea posible.
- Documentar decisiones relevantes si cambian arquitectura, contenido o flujo de datos.

## Contexto adicional

Leer también:

- [docs/PROJECT_CONTEXT.md](./docs/PROJECT_CONTEXT.md)
- [docs/TECH_REVIEW.md](./docs/TECH_REVIEW.md)
- [docs/CONTENT_GUIDE.md](./docs/CONTENT_GUIDE.md)
