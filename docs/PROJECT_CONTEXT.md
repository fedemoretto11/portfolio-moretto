# Contexto Del Proyecto

## Resumen

Este proyecto es el portfolio personal de Federico Moretto. Su función principal es presentar el perfil profesional de Federico a recruiters, clientes potenciales y equipos técnicos.

No debe comportarse como una aplicación compleja. Debe sentirse como una landing profesional de alto nivel, enfocada en credibilidad, claridad y conversión.

## Perfil que el sitio debe comunicar

Federico se presenta como un desarrollador con experiencia práctica en:

- desarrollo full-stack
- mantenimiento de sistemas en producción
- soporte técnico con criterio de producto
- implementación de nuevas funcionalidades
- trabajo con plataformas empresariales, cloud y bases de datos

El portfolio debe reforzar una narrativa clara:

> Desarrollador orientado a resolver problemas reales, mantener sistemas estables y construir software útil.

## Estructura actual del sitio

### Header

Incluye:

- navegación por anclas
- cambio de idioma
- branding simple con logo/foto

### Hero

Es la primera impresión del portfolio. Debe comunicar:

- qué hace Federico
- qué tipo de valor aporta
- por qué vale la pena contactarlo

### About

Cuenta la transición profesional y el enfoque de trabajo actual.

### Works

Resume experiencia profesional y responsabilidades.

### Skills

Lista herramientas, tecnologías y fortalezas.

### Projects

Muestra proyectos destacados y links externos.

### Contact

Es la parte de conversión. Tiene que facilitar:

- envío de email
- descarga o visualización del CV

## Stack técnico actual

- React 18
- Vite
- Tailwind CSS
- Bootstrap Icons
- i18next / react-i18next
- Firebase / Firestore

## Estado funcional actual

### Lo que ya está bien

- El sitio tiene una jerarquía visual clara.
- La UI se percibe moderna.
- La navegación por secciones es entendible.
- Hay soporte bilingüe.
- El portfolio ya transmite mejor el perfil profesional que una plantilla genérica.

### Lo que hoy genera fricción

- La sección de proyectos depende de Firestore en runtime.
- Hay archivos de Firebase que mezclan frontend productivo con tareas manuales de carga o migración.
- El repo no pasa lint.
- La imagen principal es muy pesada para un sitio de presentación.
- El SEO técnico es todavía muy básico.
- El idioma no se persiste entre sesiones.

## Dirección de producto recomendada

Este portfolio debería evolucionar hacia:

- contenido más estable y menos dependiente de servicios externos
- mejor performance inicial
- SEO y sharing social más sólidos
- una propuesta de valor todavía más concreta arriba del fold
- una experiencia más confiable para recruiters y clientes

## Qué cambios suelen sumar valor

- Convertir proyectos a data estática local.
- Optimizar imágenes.
- Mejorar metadata, titles, descriptions y Open Graph.
- Hacer persistente el idioma elegido.
- Reforzar el CTA principal.
- Incluir más evidencia de impacto profesional real.

## Qué cambios suelen restar valor

- Sobrecargar el portfolio con animaciones.
- Agregar demasiadas tecnologías sin necesidad.
- Convertir el portfolio en una app administrativa.
- Mostrar demasiada información irrelevante.
- Priorizar efectos antes que claridad.
