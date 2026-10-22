# Portfolio Moretto

Portfolio personal de Federico Moretto construido como una single-page landing profesional.

## Objetivo

Mostrar con claridad que Federico trabaja sobre software real:

- C# y .NET, backend e integraciones empresariales
- APIs, servicios, Oracle, SQL Server y PL/SQL
- experiencia tecnica en sistemas productivos
- proyectos personales full stack y mobile

El sitio prioriza credibilidad, claridad narrativa y una experiencia sobria para recruiters, clientes y equipos tecnicos.

## Stack

- React 18
- Vite 7.3 (herramientas actualizadas; sin migracion de React)
- Tailwind CSS 3
- i18next / react-i18next
- Node.js 24 (`.nvmrc` y `engines`)

## Decisiones actuales

- Proyectos publicos exclusivamente desde `src/data/projects.js` (Git); sin lecturas ni inicializacion de Firebase durante visitas publicas, con o sin variables Firebase.
- Administrador Firebase heredado conservado solo para desarrollo con opt-in explicito. Siempre excluido de builds/preview, aunque existan variables o se intente habilitar la opcion. Sus ediciones no modifican el catalogo publico. Carga inicial deshabilitada; datos remotos pendientes de inventario y respaldo.
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
npm ci
npm run dev
npm run lint
npm test
npm run build
npm run check:build
npm run preview
npx playwright install chromium
npm run test:e2e
```

Usar Node 24 antes de instalar o ejecutar estos comandos. Las pruebas de navegador arrancan preview y un servidor de desarrollo aislado sin Firebase; bloquean servicios externos salvo tipografias. En Windows con Edge instalado se puede usar `PLAYWRIGHT_CHANNEL=msedge` como variable de entorno para evitar descargar Chromium. CI instala Chromium y repite lint, pruebas, build y comprobacion del artefacto, sin credenciales ni despliegue.

## Agregar o editar proyectos

Editar solo `src/data/projects.js`: ID unico y estable, titulo, descripciones ES/EN, tecnologias, orden, `featured`, `visible`, `isFinished` y enlaces verificados. Guardar capturas aprobadas en `public` y usar su ruta; no inventar demos ni imagenes. `src/data/publicProjects.js` normaliza y ordena sin duplicar contenido. Los filtros se aplican al archivo, no a los destacados.

Revisar pruebas, lint, build y el preview del artefacto en ambos idiomas antes de una publicacion autorizada. Ocultar una tarjeta no vuelve privados los datos incluidos en el bundle/Git.

## Entorno y administrador heredado

La web publica no necesita `.env.local` ni servicios Firebase. Con variables presentes muestra el mismo catalogo. `.env.example` documenta las variables exclusivas del panel; son valores de cliente y no deben contener secretos de servidor. No subir `.env.local`.

Para mantenimiento local autorizado, definir `VITE_ENABLE_LEGACY_ADMIN=true` solo en el proceso o en un archivo local ignorado y ejecutar `npm run dev` en loopback. Entonces se puede abrir `/#/admin`. Requiere configuracion Firebase, Google Auth, dominios autorizados, administrador permitido y reglas remotas correctas. Ningun build habilita el panel. Ver [procedimiento y limites](./FIREBASE_PROJECTS_ADMIN.md).

## Publicacion

`vercel.json` prepara Node/build estatico, salida `dist`, rutas SPA y headers basicos. Canonical, metadatos sociales, robots y sitemap apuntan a `https://federicomoretto.com.ar/`. El logo WebP conserva sus pixeles visibles y pesa un 92.9% menos; el PNG original se conserva como fuente fuera de `public` y no se incluye en el artefacto.

Las fechas de Asince siguen provisionales: no desplegar sin aprobacion editorial. [Preparacion y rollback](./docs/RELEASE.md) separa los checks locales de los ajustes pendientes del dashboard. No se consulto ni modifico el dashboard ni se desplego esta version.

## Criterio de evolucion

Si se sigue iterando este portfolio, conviene sostener estas reglas:

1. Mantenerlo como landing simple y muy clara.
2. Evitar efectos visuales que compitan con el contenido.
3. Priorizar experiencia, proyectos y contacto antes que listas de tecnologia.
4. Mejorar el contenido solo si aumenta claridad o conversion.
5. No reintroducir dependencias innecesarias para datos o iconos.

## Documentacion

- [Actualizacion profesional 2026](./docs/PROFESSIONAL_UPDATE_2026.md): contenido, evidencia, comparacion Firebase/Git y pendientes antes de publicar.
- [Correcciones previas a publicacion](./docs/PREPUBLICATION_CORRECTIONS_2026.md): arquitectura efectiva y validaciones.
- [Cierre local y publicacion segura](./docs/RELEASE.md): configuracion, limites, validacion final y rollback.
- [AGENTS.md](./AGENTS.md)
- [CLAUDE.md](./CLAUDE.md)
- [GEMINI.md](./GEMINI.md)
- [.github/copilot-instructions.md](./.github/copilot-instructions.md)
- [docs/PROJECT_CONTEXT.md](./docs/PROJECT_CONTEXT.md)
- [docs/TECH_REVIEW.md](./docs/TECH_REVIEW.md)
- [docs/CONTENT_GUIDE.md](./docs/CONTENT_GUIDE.md)
- [FIREBASE_PROJECTS_ADMIN.md](./FIREBASE_PROJECTS_ADMIN.md)
