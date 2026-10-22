# Revision Tecnica Y Funcional

Estado de cierre local posterior: Node 24, Vite 7.3, ESLint 10, React 18 conservado; SEO estatico completado, logo optimizado sin perdida visible, accesibilidad basica automatizada y CI preparado. El administrador solo existe mediante opt-in de desarrollo. Validaciones y limites actuales en [RELEASE.md](./RELEASE.md). Las propuestas de mas abajo son antecedentes, no una nueva lista de bloqueos.

## Fortalezas actuales

### 1. Arquitectura simple

El sitio sigue siendo chico, mantenible y facil de recorrer. La estructura por secciones es clara y no necesita capas extra de complejidad.

### 2. Contenido estable

La fuente publica unica es `src/data/projects.js` (Git). `publicProjects.js` normaliza, ordena y filtra visibilidad sin acceder a Firebase. La ruta administrativa se carga de forma diferida y usa `useAdminProjects`; sus registros remotos son independientes. La carga inicial esta deshabilitada hasta contar con inventario, respaldo y un procedimiento seguro. Ver [correcciones y validacion](./PREPUBLICATION_CORRECTIONS_2026.md).

### 3. Sistema visual mas coherente

Hay una direccion visual definida:

- paleta basada en `logo_fm`
- tipografia editorial
- iconografia SVG propia
- menos dependencias visuales externas

### 4. Bilinguismo real

`i18next` esta integrado con persistencia de idioma y metadata sincronizada segun el idioma activo.

## Mejoras tecnicas ya realizadas

- Se removio la dependencia visual a Bootstrap Icons.
- Se eliminaron estilos SCSS legados que no participaban del render.
- Se saco codigo muerto como la sidebar social antigua.
- Se simplifico el bundle visual usando iconos SVG internos.
- Se separo el catalogo publico de Firebase y se corrigio la navegacion entre movil y escritorio; el menu cerrado se desmonta y Escape devuelve el foco al boton.

## Riesgos o pendientes actuales

### 1. SEO aun mejorable

Aunque ya hay metadata mas cuidada, todavia se podria sumar:

- canonical
- schema markup
- mejor estrategia de sharing social

### 2. Dependencia externa de fuentes

La tipografia se carga desde Google Fonts. Funciona bien, pero sigue siendo una dependencia externa de presentacion.

### 3. CV externo

El enlace privado y desactualizado fue deshabilitado. `src/data/contact.js` mantiene `resumeUrl: null` hasta revisar un CV actualizado y su acceso anonimo. No se copio ningun PDF al sitio.

### 4. Contenido todavia perfectible

Hay proyectos fuertes y otros mas exploratorios. La curaduria puede seguir mejorando para elevar aun mas la percepcion de seniority.

## Prioridades tecnicas sugeridas

### Alta

1. Completar SEO tecnico.
2. Revisar si conviene servir el CV desde el propio sitio.
3. Seguir refinando accesibilidad y foco visible.

### Media

1. Curar mejor proyectos y evidencias de impacto.
2. Evaluar autohospedar tipografias si performance o privacidad lo justifican.

### Baja

1. Pequenos ajustes de microcopy.
2. Refinamientos visuales menores.

## Criterio de calidad esperado

El portfolio deberia tender a ser:

- rapido
- claro
- confiable
- sobrio
- facil de mantener
- visualmente distintivo sin exagerar
