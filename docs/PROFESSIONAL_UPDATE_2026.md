# Actualización profesional del portfolio — 22/10/2026

El cierre técnico posterior está documentado en [RELEASE.md](./RELEASE.md): administrador excluido de producción, herramientas/recursos/SEO/accesibilidad y pruebas finales. Este documento conserva el registro profesional y sus fechas pendientes de aprobación; sus estados Git previos son históricos.

Estado de la fase profesional original: implementado localmente, sin commits ni publicación. Este informe registra decisiones y una instantánea del copy; los diccionarios y los módulos de datos siguen siendo la fuente editable. Las correcciones técnicas posteriores adoptaron Git como fuente pública única: ver [registro de correcciones](./PREPUBLICATION_CORRECTIONS_2026.md) y el [cierre actual](./RELEASE.md). Las validaciones y el estado Git de las secciones 8–9 son la instantánea anterior a esas correcciones.

## 1. Perfil profesional

Software Developer | .NET · Backend · Integraciones. Asince ocupa el primer plano, con dos etapas distintas. La resolución técnica de incidencias pertenece a la experiencia previa y también forma parte del desarrollo, pero no define el puesto actual. Full stack y mobile aparecen como experiencia complementaria de proyectos personales. Se conserva React, Firebase, el panel y la identidad visual existente.

## 2. Cronología y aprobación de fechas

| Empresa / formación | Puesto o programa | Período utilizado | Nivel de confirmación |
|---|---|---|---|
| Asince | Software Developer – Integrations | Septiembre 2026 — actualidad | Provisional: transcripción de LinkedIn aportada por el usuario; aprobación pendiente antes de desplegar. |
| Asince | Technical Support Developer | Abril 2024 — septiembre 2026 | Provisional: misma fuente y condición. |
| MSL Corporate | Asistente de documentación de importación | Enero 2021 — diciembre 2022 | Aportado por el usuario; sin atribuir tareas de desarrollo. |
| Rodolfo Isidro Moretto SRL | Supervisor de Ventas | Abril 2019 — enero 2021 | Aportado por el usuario; sin atribuir tareas técnicas. |
| Proyectos independientes | Formación práctica | Diciembre 2022 — abril 2024 | No se publica como empleo freelance; decisión editorial pendiente. |
| UTN | Tecnicatura Universitaria en Programación | Marzo 2026 — actualidad | En curso, según el usuario. |
| UCES | Estudios en Licenciatura en Comercio Exterior | Marzo 2014 — marzo 2019 | Estudios cursados; título obtenido no confirmado. |

Discrepancia abierta: el usuario también mencionó abril de 2022 como ingreso y diciembre de 2022 como transición. La web anterior decía Asince desde 2022 y freelance 2019–2022. La implementación local adopta provisionalmente la cronología de la transcripción del PDF del 22/10/2026, sin dar la contradicción por resuelta. No se incluyó el PDF. Siglo 21 no figura como estudio actual.

## 3. Cambios implementados

- Diccionarios ES/EN: posicionamiento, metadata, Hero, experiencia, perfil, formación, skills, proyectos y contacto.
- Works: Asince agrupada con dos roles; MSL y ventas en un bloque secundario.
- About: transición profesional y formación integrada; UCES sin título atribuido.
- Skills: dos grupos de experiencia profesional y uno de proyectos personales.
- Catálogo: ClubConnect y Nido añadidos; Distribuidora Moretto actualizada; los siete proyectos anteriores restantes conservados en archivo.
- ProjectsView: estado de fuente observable por `data-project-source`, y presentación sin captura para imágenes no disponibles. No se inventaron ni copiaron capturas de repositorios privados.
- Semillas derivadas de los destacados locales para evitar duplicar copy. No escriben por importarse.
- `src/data/contact.js`: enlaces centralizados y CV deshabilitado. Contact/Footer consumen el mismo módulo.
- Contact: ajuste de tamaños mínimos de grid y texto para evitar recortes en móvil.
- `index.html`: metadata inicial coherente con español.
- Guías del repo alineadas con el contrato de fuentes y este registro.

## 4. Textos completos implementados

### Español

#### Hero

**Software Developer | .NET · Backend · Integraciones**

**Backend e integraciones para sistemas empresariales**

Soy Software Developer con experiencia en sistemas productivos. Desarrollo y mantengo soluciones que conectan aplicaciones, servicios y datos.

En Asince trabajo en integraciones para procesos de administración, contabilidad y finanzas, con C#, .NET y Oracle.

- Integración de APIs, servicios y archivos de intercambio.
- Desarrollo y mantenimiento de procesos con SQL y PL/SQL.
- Debugging y mejoras sobre backend en producción.
- Proyectos personales full stack y aplicaciones móviles.

Stack: C# · .NET · APIs · Oracle · PL/SQL · Azure.

CTA: Charlemos / Ver proyectos.

**Actualmente — Software Developer – Integrations**

Equipo de integraciones de Administración, Contabilidad y Finanzas de Asince.

Asince · Argentina

**Experiencia — Sistemas productivos**

Trabajo con código existente, servicios y bases de datos, desde el análisis del problema hasta su resolución.

**Proyectos personales — Full stack y mobile**

ClubConnect y Nido complementan mi experiencia profesional con aplicaciones web y móviles.

#### Experiencia / Experience

**Experiencia — Desarrollo de software en Asince**

Dos etapas: intervención técnica en sistemas productivos y trabajo actual en integraciones empresariales.

**Asince**

**Software Developer – Integrations | Septiembre de 2026 — Actualidad**

Desarrollo y mantenimiento de integraciones para procesos de administración, contabilidad y finanzas.

- Integración de sistemas internos y plataformas externas mediante APIs, servicios, SFTP y archivos XML.
- Desarrollo con C#/.NET y procesos Oracle; análisis de requerimientos, pruebas y debugging.

Stack: C# · .NET · Oracle · SQL / PL/SQL · APIs · SFTP / XML · Azure.

**Technical Support Developer | Abril de 2024 — Septiembre de 2026**

Diagnóstico y resolución de incidencias productivas con intervención directa en código, backend y bases de datos.

- Debugging con C#/.NET, hotfixes y ajustes en APIs y servicios existentes.
- Análisis y optimización de consultas Oracle y SQL Server, rendimiento y monitoreo de entornos Azure.

Stack: C# · .NET · Oracle · SQL Server · SQL · Azure.

**Trayectoria profesional anterior**

**MSL Corporate — Asistente de documentación de importación | Enero de 2021 — Diciembre de 2022**

Gestión documental y soporte operativo en sistemas internos.

**Rodolfo Isidro Moretto SRL — Supervisor de Ventas | Abril de 2019 — Enero de 2021**

Supervisión de ventas, análisis de indicadores, reportes y planificación comercial.

#### Sobre mí / About

**Perfil — De la operación de negocio al desarrollo de software**

Mi trayectoria comenzó en ventas y documentación de importación. Esas experiencias me dieron contexto sobre procesos de negocio y trabajo con distintas áreas.

Después orienté mi formación y mis proyectos al desarrollo de software. En Asince trabajé en el diagnóstico técnico de sistemas productivos y hoy formo parte del equipo de integraciones.

Curso la Tecnicatura Universitaria en Programación en la UTN. En paralelo desarrollo ClubConnect y Nido para seguir construyendo soluciones full stack y móviles.

**Hoy — Desarrollo de integraciones**

C#, .NET y Oracle en procesos empresariales de administración, contabilidad y finanzas.

**Enfoque — Contexto y precisión técnica**

Conectar necesidades de negocio con soluciones que se puedan entender y mantener.

**Cómo trabajo**

- Entiendo los requerimientos técnicos y de negocio antes de definir una solución.
- Trabajo sobre código y datos existentes con atención a sus dependencias.
- Uso pruebas y debugging para revisar el comportamiento de los cambios.

**Áreas de trabajo**

Backend con .NET · Integraciones de sistemas · Bases de datos · Aplicaciones personales

#### Formación

**Universidad Tecnológica Nacional (UTN)**

Tecnicatura Universitaria en Programación

Marzo de 2026 — Actualidad · En curso

**Universidad de Ciencias Empresariales y Sociales (UCES)**

Estudios en Licenciatura en Comercio Exterior

Marzo de 2014 — Marzo de 2019 · Estudios cursados

### English

#### Hero

**Software Developer | .NET · Backend · Integrations**

**Backend development and enterprise integrations**

I am a Software Developer with experience in production systems. I build and maintain solutions that connect applications, services and data.

At Asince, I work on integrations for administration, accounting and finance processes using C#, .NET and Oracle.

- Integration of APIs, services and data exchange files.
- Development and maintenance of SQL and PL/SQL processes.
- Debugging and improvements to backend systems in production.
- Personal full-stack projects and mobile applications.

Stack: C# · .NET · APIs · Oracle · PL/SQL · Azure.

CTA: Let's talk / View projects.

**Current role — Software Developer – Integrations**

Administration, Accounting and Finance integrations team at Asince.

Asince · Argentina

**Experience — Production systems**

I work with existing code, services and databases, from understanding an issue to resolving it.

**Personal projects — Full-stack and mobile**

ClubConnect and Nido complement my professional experience with web and mobile applications.

#### Experiencia / Experience

**Experience — Software development at Asince**

Two stages: hands-on technical work on production systems, followed by my current role in enterprise integrations.

**Asince**

**Software Developer – Integrations | September 2026 — Present**

Development and maintenance of integrations for administration, accounting and finance processes.

- Integration of internal systems and external platforms through APIs, services, SFTP and XML files.
- C#/.NET development and Oracle processes; requirements analysis, testing and debugging.

Stack: C# · .NET · Oracle · SQL / PL/SQL · APIs · SFTP / XML · Azure.

**Technical Support Developer | April 2024 — September 2026**

Diagnosis and resolution of production issues through direct work on code, backend services and databases.

- C#/.NET debugging, production hotfixes and changes to existing APIs and services.
- Oracle and SQL Server query analysis and optimization, performance analysis and Azure environment monitoring.

Stack: C# · .NET · Oracle · SQL Server · SQL · Azure.

**Earlier professional experience**

**MSL Corporate — Import Documentation Assistant | January 2021 — December 2022**

Document management and operational support using internal systems.

**Rodolfo Isidro Moretto SRL — Sales Supervisor | April 2019 — January 2021**

Sales supervision, performance indicator analysis, reporting and commercial planning.

#### Sobre mí / About

**Profile — From business operations to software development**

I started my career in sales and import documentation. Those roles gave me an understanding of business processes and collaboration across departments.

I then focused my studies and personal projects on software development. At Asince, I worked on technical diagnosis of production systems and now work in the integrations team.

I am studying for a university technical degree in Programming at UTN. Alongside my studies and professional work, I develop ClubConnect and Nido to keep building full-stack and mobile solutions.

**Today — Integration development**

C#, .NET and Oracle for enterprise administration, accounting and finance processes.

**Approach — Context and technical precision**

Connecting business needs with solutions that can be understood and maintained.

**How I work**

- I understand technical and business requirements before defining a solution.
- I work with existing code and data while paying attention to their dependencies.
- I use testing and debugging to review the behavior of changes.

**Areas of work**

.NET backend development · System integrations · Databases · Personal applications

#### Education

**Universidad Tecnológica Nacional (UTN)**

Tecnicatura Universitaria en Programación · University technical degree in Programming

March 2026 — Present · In progress

**Universidad de Ciencias Empresariales y Sociales (UCES)**

Studies toward a Licenciatura in International Trade

March 2014 — March 2019 · Coursework undertaken

## 5. Proyectos y evidencia

| Proyecto | Tratamiento | Evidencia y límites |
|---|---|---|
| ClubConnect | Destacado; en desarrollo | README/documentación local y archivos de backend/frontend: gestión de socios, categorías, cuotas y pagos; .NET 8, PostgreSQL, Vue, Quasar, TypeScript. No se ejecutó el sistema ni se certificó despliegue comercial. Repo privado sin CTA público. |
| Nido | Destacado; en desarrollo | Inspección focalizada de mapa, modelos de listas/facturas, package.json y registros del MVP. Compras, facturas, historial y recordatorios locales. Sin métricas, arquitectura privada ni afirmación de publicación en tiendas. |
| Distribuidora Moretto | Destacado; enlace público y repo | `PF-Federico-Moretto`: HTML, CSS/Sass, JavaScript y Bootstrap; sitio público reconocible y accesible. Correspondencia funcional, no identidad de commit desplegado acreditada. No se envió formulario. Captura antigua conservada en disco, no presentada como captura de la versión actual. |
| Corporación Capital | Archivo | Se conserva repo y estado en desarrollo. CTA a demo retirado tras 404 DEPLOYMENT_NOT_FOUND. |
| Kilómetros App / Super Music Changuito / Alexpama | Archivo | Se conserva contenido anterior. Falta confirmar versiones/repos y estados; no se añadieron asociaciones por similitud de nombre. |
| To Do List / DrumKit / Calculadora | Archivo formativo | Se conserva código y catálogo. To Do List mantiene demo accesible; no se enviaron tareas. |

Fuentes de proyectos: `D:/Proyectos/ClubConnect/README.md`, `docs/ai-context/01-proyecto-general.md`, `docs/ai-context/05-operacion-calidad-y-riesgos.md`, `ClubConnect.Api/ClubConnect.Api.csproj`, `clubconnect-vue/package.json`; `D:/Proyectos/Nido/docs/mapa-repositorio.md`, `docs/ESTADO_IMPLEMENTACION_MVP.md`, `src/features/lista-compras/models/ListaCompras.modelo.ts`, `src/features/facturas/models/Factura.modelo.ts`, `package.json`; `D:/Proyectos/PF-Federico-Moretto/README.md`, `package.json`, `index.html`, `pages/contacto.html`. Estos repositorios solo se leyeron.

## 6. Firebase: fuente efectiva y administrador heredado

Decisión autorizada en las correcciones previas a publicación: el catálogo público se obtiene exclusivamente de `src/data/projects.js` (Git), normalizado por `publicProjects.js`. No inicializa Firebase ni consulta Firestore. `useAdminProjects` queda separado para el administrador heredado; sus cambios no modifican el sitio. No se eliminaron Firebase, datos remotos, configuración ni recursos.

Antecedente de auditoría: la publicación consultada el 22/10/2026 mostraba ocho proyectos y el panel `/#/admin` informaba configuración Firebase faltante. La primera prueba visual desactivó Firebase solo en su proceso. Antes de estas correcciones, una respuesta Firestore reemplazaba el catálogo y una colección vacía lo dejaba vacío. Ese contrato ya no se utiliza en la web pública; no hubo publicación de los cambios locales.

| Criterio | A. Firebase + panel | B. Catálogo en Git |
|---|---|---|
| Utilidad | Edición sin cambiar código; útil si se usa regularmente. | Adecuado para una selección pequeña con cambios ocasionales. |
| Complejidad | Auth, reglas, permisos, entorno, runtime y contenido remoto. | Datos locales, PR/diff y build. |
| Mantenimiento | Administrar contenido, permisos y respaldo remoto. | Una fuente de contenido versionada. |
| Seguridad | Reglas remotas y autorización reales deben verificarse; ocultar tarjetas no vuelve privados los documentos. | No requiere escrituras remotas para editar proyectos. |
| Riesgos | Fallos de lectura, datos divergentes y cambios fuera de Git. | Cada actualización necesita revisión y publicación del sitio. |
| Trazabilidad | Requiere un procedimiento adicional para conservar historia de contenido. | Historial junto al código. |

La alternativa B fue elegida e implementada para la galería pública. El panel remoto se conserva como funcionalidad heredada pendiente de decisión. Su carga inicial está deshabilitada: no hay botón ni handler de importación. Las semillas quedan como referencia inactiva con IDs explícitos, independiente de los destacados; no representan un respaldo remoto.

Antes de publicar: comprobar `data-project-source="local"`, los diez proyectos y ausencia de consultas Firebase en el artefacto final con y sin variables. El inventario y respaldo remotos siguen pendientes; no se conoce el contenido actual de Firestore. No borrar servicios ni datos para publicar el catálogo Git. Procedimiento y límites en [Firebase Projects Admin](../FIREBASE_PROJECTS_ADMIN.md).

## 7. CV, formación complementaria y enlaces

`resumeUrl` queda en null: no se ofrece el PDF privado ni se subió el PDF de LinkedIn. No se añadió teléfono ni dirección. Email, LinkedIn y GitHub se centralizan en `src/data/contact.js`. Se conserva la posibilidad técnica de habilitar un CV solo después de aprobar versión y acceso anónimo.

Credenciales: la referencia pública indexada de LinkedIn menciona Foundational C# with Microsoft (freeCodeCamp, marzo 2024), CS50 (octubre 2023) y Programación Web Full Stack (Egg Cooperation, octubre 2023). Esto no valida el certificado. No se recuperó una verificación directa suficiente de emisor/enlace; el acceso directo a LinkedIn quedó limitado. Frontend React y JavaScript Algorithms and Data Structures también quedan pendientes. Selección propuesta para una próxima revisión: Foundational C# y CS50 por su relación con el foco backend y los fundamentos de programación. Ninguna credencial se publicó como certificación validada. Fuente orientativa: https://ar.linkedin.com/in/morettofede .

Pendientes: nuevo CV ES/EN; enlaces auténticos de credenciales; capturas aprobadas de ClubConnect/Nido y una captura actual de Distribuidora. La captura anterior permanece en public sin eliminarse.

## 8. Validaciones de la actualización profesional (instantánea anterior)

| Comprobación ejecutada | Resultado |
|---|---|
| npm run lint | Exit 0. |
| npm run build | Exit 0; 100 módulos transformados. Aviso no bloqueante de Browserslist/caniuse-lite desactualizado; no se actualizó ninguna dependencia. |
| Imports | Compilación Vite correcta; el import nuevo de semillas también se comprobó directamente con Node. |
| Traducciones | 88 claves equivalentes y estructuras anidadas coincidentes; copy completo de Hero, experiencia, perfil y formación presente en este informe en ambos idiomas. |
| Catálogo / semillas | 10 IDs únicos, tres destacados, siete secundarios; semillas derivadas de los destacados; rutas de imágenes configuradas existentes. |
| Filtros en navegador | Archivo: Todos 7, Web 3, Apps y ejercicios 4. Los tres destacados permanecen visibles. Comprobado también en inglés. |
| Render responsive | Edge headless aislado: 360, 800, 1024 y 1440 px, ES/EN. Sin texto fuera del viewport en main. |
| Idioma / metadata | Cambio ES/EN, lang, title y persistencia tras recarga correctos. |
| Contacto y CV | Enlaces de contacto renderizados; sin enlace al CV privado, sin CTA a la demo 404 y sin enlaces tel. |
| Admin / fuente | Ruta hash conserva pantalla de configuración; fuente pública local comprobada por data-project-source. Firebase deshabilitado solo en el proceso de revisión. |
| Errores / red local | Cero pageerror, cero respuestas locales HTTP >=400 y cero solicitudes Firebase/Firestore en la revisión aislada. |
| Documentación | 43 enlaces relativos comprobados y git diff --check correcto. |
| Privacidad | Barrido acotado de patrones de tokens/claves privadas y teléfono en fuentes/documentación, sin coincidencias. No se incorporaron PDFs ni datos privados. No equivale a una auditoría exhaustiva de secretos. |
| Alcance de archivos | package.json, lockfile, inicialización Firebase, hook y componentes Admin sin cambios frente a la base. |

Se revisaron capturas de Hero, experiencia, perfil/formación, skills, proyectos y contacto; la revisión encontró y corrigió un recorte móvil de Contacto. Las capturas y el resultado JSON están fuera del repositorio, en la carpeta de visualizaciones de esta conversación. Servidores y navegador de revisión cerrados al finalizar.

Enlaces externos: Distribuidora Moretto y sus recursos/estructura contrastados con el repo; To Do List accesible en la inspección de esta conversación; Corporación Capital había devuelto 404 y su CTA fue retirado. GitHub público de Distribuidora consultado mediante el conector. LinkedIn directo presenta restricciones de lectura, por lo que no se certifica su disponibilidad anónima universal. No se enviaron formularios, emails ni tareas de prueba.

Ninguna operación remota de escritura fue ejecutada por esta tarea. No se probaron reglas de Firestore, login del panel, escrituras remotas, envío de formularios ni despliegue. Las verificaciones funcionales usan el catálogo local; no acreditan el catálogo remoto.

## 9. Git (instantánea anterior a las correcciones técnicas)

- Rama: `codex/portfolio-professional-update-2026`.
- Base: `32b230adc9a2f515eeef6f1756245f990d01b8f9`. Fetch dirigido a main para evitar la colisión Develop/develop; main remoto no avanzó.
- Working tree: 20 archivos seguidos modificados y dos nuevos sin seguimiento, sin stage ni commit. Nuevos: `src/data/contact.js` y este informe. Modificados: `.github/copilot-instructions.md`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `README.md`, `FIREBASE_PROJECTS_ADMIN.md`, `docs/CONTENT_GUIDE.md`, `docs/PROJECT_CONTEXT.md`, `docs/TECH_REVIEW.md`, `index.html`, `src/components/Footer/Footer.jsx`, `src/components/Main/About.jsx`, `Contact.jsx`, `ProjectsView.jsx`, `Skills.jsx`, `Works.jsx`, ambos diccionarios y `src/data/projects.js` / `projectSeeds.js`.
- Main local no fue movido; ramas históricas y stash preservados. Sin push, merge, rebase, reset, eliminación de ramas ni despliegue.

## 10. Próxima etapa y bloqueos de publicación

- [ ] Aprobar las fechas provisionales de ambas etapas en Asince.
- [x] Adoptar Git como fuente única de la galería pública; administrador heredado separado. Validaciones actuales en el informe de correcciones.
- [ ] Aprobar CV actualizado y acceso sin sesión; no reutilizar el enlace privado.
- [ ] Confirmar estados/repos de los proyectos históricos y aportar capturas actuales.
- [ ] Validar credenciales seleccionadas con sus emisores.
- [ ] Revisar configuración real de Vercel: rama, Node, comando, variables y rollback.
- [ ] Autorizar publicación por separado.

Las correcciones técnicas posteriores resolvieron la navegación entre 640–1023 px, el foco del menú cerrado y el scroll del header con movimiento reducido. Siguen pendientes reducir el PNG de identidad, revisar dependencias con validación aislada, completar SEO y medir rendimiento. El movimiento reducido del resto del sitio no se auditó integralmente. CV, capturas y credenciales son mejoras pendientes; CV y certificaciones no bloquean por sí solos si permanecen omitidos. Las fechas de Asince y la autorización/configuración de publicación siguen pendientes.
