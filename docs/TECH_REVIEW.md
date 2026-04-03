# Revision Tecnica Y Funcional

## Fortalezas actuales

### 1. Arquitectura simple

El sitio sigue siendo chico, mantenible y facil de recorrer. La estructura por secciones es clara y no necesita capas extra de complejidad.

### 2. Contenido estable

La fuente de verdad de proyectos vive en `src/data/projects.js`, lo que elimina riesgo innecesario en runtime para una zona clave del portfolio.

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

## Riesgos o pendientes actuales

### 1. SEO aun mejorable

Aunque ya hay metadata mas cuidada, todavia se podria sumar:

- canonical
- schema markup
- mejor estrategia de sharing social

### 2. Dependencia externa de fuentes

La tipografia se carga desde Google Fonts. Funciona bien, pero sigue siendo una dependencia externa de presentacion.

### 3. CV externo

El CV sigue enlazado a Google Drive. Es funcional, pero no es la experiencia mas controlada posible.

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
