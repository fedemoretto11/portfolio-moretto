# Correcciones previas a publicación — 22/10/2026

Instantánea de la etapa anterior. El cierre técnico posterior, las validaciones finales y la preparación de commits se registran en [RELEASE.md](./RELEASE.md). Ahora el administrador se excluye de todo build/preview y requiere opt-in local; las restricciones anteriores de no hacer commits correspondían a esta etapa, no a la autorización de cierre posterior.

Estado: implementación local validada; sin commit, push, merge, despliegue ni operaciones sobre servicios remotos. Complementa [la actualización profesional](./PROFESSIONAL_UPDATE_2026.md), cuyo contenido y cronología provisional se preservan.

## Cambios y arquitectura efectiva

La fuente única editable de proyectos públicos es `src/data/projects.js`, versionada en Git. `src/data/publicProjects.js` utiliza el modelo existente para normalizar, ordenar y excluir entradas con `visible: false`. `ProjectsView` consume el resultado de manera síncrona: no usa un hook remoto, estados de carga Firebase ni fallback. Se conservan los diez proyectos, los filtros, sus estados y enlaces, las traducciones y las tarjetas. ClubConnect, Nido y Distribuidora Moretto siguen destacados.

El acceso remoto se renombró de `useProjects` a `useAdminProjects` y queda restringido al administrador. La ruta administrativa continúa diferida en `App.jsx`. Una visita pública no inicializa Firebase ni carga sus módulos SDK, aun cuando el artefacto contenga configuración para el panel. No se eliminaron dependencias, configuración, datos, recursos ni documentación de reglas.

| Escenario | Galería pública |
|---|---|
| Firebase no configurado | Catálogo Git: diez proyectos visibles, tres destacados y siete en el archivo. |
| Firebase configurado | El mismo catálogo, sin inicializar Firebase ni consultar Firestore. |
| Firestore vacío | El mismo catálogo; no se consulta la colección. |
| Firestore inaccesible | El mismo catálogo; no depende de su red ni permisos. |
| Firestore con proyectos diferentes | El mismo catálogo; no combina ni sustituye contenido con datos remotos. |

Los casos de Firestore describen la independencia arquitectónica comprobada; no afirman que esos estados se hayan provocado o verificado en una base real.

## Administrador heredado y protección de carga inicial

El panel conserva autenticación y CRUD remoto individual. Muestra un aviso, tanto configurado como sin configuración: sus cambios solo afectan Firestore y NO publican proyectos. Se corrigieron los textos que presentaban esos registros como contenido publicado.

Se retiraron el botón, la prop y el handler que ejecutaba la carga inicial mediante `writeBatch`. No queda un camino de inicialización que interprete una lectura fallida como colección vacía o sobrescriba las semillas. Esta es una deshabilitación temporal deliberada: sin inventario y respaldo verificados no se habilita un nuevo importador. Si se recupera esa función, debe garantizar ausencia al momento de escribir mediante un procedimiento condicional/atómico revisado; una lista vacía en el navegador no basta.

`src/data/projectSeeds.js` se conserva como referencia inactiva de tres IDs explícitos: `clubconnect`, `nido`, `moretto-srl`. Su contenido deriva del catálogo sin duplicar textos y su selección no depende de `featured`. No está importado en el panel y no equivale a inventario, respaldo ni migración. Se retiraron los mensajes de cantidad del botón antiguo.

El CRUD individual sigue siendo heredado y no se certificó contra servicios reales; la deshabilitación de la carga inicial no acredita seguridad integral de todas las escrituras del panel. La autorización del cliente no reemplaza reglas remotas. Ver [procedimiento Firebase](../FIREBASE_PROJECTS_ADMIN.md).

## Inventario remoto y respaldo

No hay un conector Firestore ni una sesión administrativa de solo lectura verificada disponible para esta tarea. No se utilizó la configuración de cliente para probar permisos ni se consultó la colección remota. Su contenido, diferencias respecto del catálogo Git y estado de las reglas desplegadas siguen desconocidos. No se produjo un supuesto reporte de diferencias ni se consideraron las semillas un respaldo.

Antes de retirar cualquier servicio: obtener inventario autorizado de documentos completos y recursos, comparar por ID, conservar campos adicionales/timestamps/ocultos y verificar un respaldo recuperable. No borrar Firebase ni datos no inventariados. Ese trabajo no es necesario para que la galería funcione localmente con Git, y sigue pendiente para decidir el destino del administrador.

## Navegación responsive y teclado

El menú compacto y su botón utilizan el mismo límite `lg` que la navegación de escritorio: quedan disponibles hasta 1023 px. Idioma y contacto se ofrecen dentro del menú en esos anchos para evitar comprimir el header de tablet; desde 1024 px se mantienen los controles de escritorio.

El menú cerrado se desmonta, por lo que sus enlaces no permanecen en el orden de tabulación. Enter permite abrirlo, Tab recorre sus enlaces, Escape lo cierra y devuelve el foco al botón. Elegir una sección cierra el menú y enfoca el destino sin añadirlo al recorrido normal de Tab. Cambiar a escritorio cierra el menú para que no reaparezca abierto al volver a tablet. El scroll del header respeta movimiento reducido; no se amplió esta corrección a todas las animaciones del sitio.

Se añadió solamente `header.navigation` en ES/EN para el nombre accesible de la navegación; el resto del copy profesional quedó idéntico al inicio de esta etapa.

## Agregar proyectos y entorno

Editar únicamente `src/data/projects.js`: ID estable y único, orden, tipo, estado, visibilidad, destacados, textos ES/EN, tecnologías y enlaces comprobados. Guardar imágenes aprobadas en `public`; no publicar datos privados ni asumir que `visible: false` oculta el contenido del bundle o del repositorio. El archivo secundario se filtra sin alterar los destacados. Cambiar `featured` no modifica la selección explícita de referencia del administrador.

La web pública no requiere variables Firebase. Solo el panel utiliza las documentadas en `.env.example`. `.env.local` se preservó sin cambios y continúa ignorado. Las variables `VITE_*` son de cliente y pueden aparecer en el artefacto; no colocar secretos de servidor. No se actualizaron dependencias ni se modificaron `package.json`, lockfile o `src/lib/firebase.js`.

## Validaciones ejecutadas

| Comprobación | Resultado y alcance |
|---|---|
| `npm run lint` | Exit 0, sin advertencias ESLint. |
| `npm run build` | Exit 0. Aviso existente de Browserslist/caniuse-lite; no se actualizaron dependencias. |
| `node --test tests/public-projects.test.mjs` | 6/6: IDs/orden/estados, destacados/filtros, exclusión de ocultos sin mutar datos, textos/recursos/enlaces HTTPS, selección explícita de semillas y paridad bilingüe. |
| Build configurado | Se comprobó que `dist` contiene los cinco valores Firebase requeridos, sin imprimirlos. Se sirvió mediante Vite preview y se comprobó fuente local y diez proyectos. |
| Build sin configuración | Segundo artefacto construido fuera del repo con los campos Firebase vacíos solo en el proceso de validación; mismo resultado público. `.env.local` intacto. |
| Galería en ambos artefactos | Tres destacados; archivo: Todos 7, Web 3, Apps y ejercicios 4. Estados de desarrollo, enlaces renderizados y ausencia del CV privado conservados. |
| Responsive | Edge headless, builds reales, 360/640/800/1024/1440 px, ES/EN. Sin desbordamiento del documento ni texto fuera del viewport en header/main, con menú abierto/cerrado donde corresponde. |
| Interacción | Apertura por Enter y botón, Tab, cierre por Escape/botón/enlace, foco devuelto o transferido al destino, scroll, cierre al pasar a escritorio, cambio ES/EN y persistencia tras recarga. |
| Aislamiento público | Cero solicitudes Firebase/Firestore; no se cargaron chunks AdminApp ni SDK Firebase durante visitas públicas. Solicitudes externas, salvo tipografías, interceptadas y bloqueadas; cero intentos registrados. |
| Recursos/JS | Imágenes cargadas y sin roturas; cero errores JavaScript y cero respuestas locales HTTP >=400. |
| Panel sin configuración | Pantalla correspondiente y aviso de administrador heredado comprobados en el build sin configuración. |
| Panel con Firebase simulado | Cinco escenarios: sin configuración, carga pendiente, error de lectura, colección vacía y documento remoto diferente. Carga inicial indisponible en todos; error no se anuncia como colección vacía; cero escrituras simuladas. Se usaron componentes y hook reales con el servicio sustituido por mocks. |
| Preservación | Hashes de 13 archivos coinciden con la instantánea inicial, incluidos catálogo, contacto, contenido profesional, entorno, dependencias e inicialización Firebase. Ambos diccionarios solo añaden la clave de navegación; no se alteró el perfil ni fechas. |
| Revisión visual | Capturas del menú a 360 y 800 px inspeccionadas: estilo conservado, controles legibles y sin recorte. |
| Documentación/privacidad | 50 enlaces relativos sin destinos faltantes; `git diff --check` correcto. Barrido acotado de patrones de claves privadas/tokens en cambios y archivos nuevos: cero coincidencias; no equivale a auditoría exhaustiva de secretos. |

El primer comando con comodín `tests/*.test.mjs` falló por resolución de rutas en Windows; se corrigió a la ruta explícita y pasó. Edge no inició dentro del sandbox; la ejecución local autorizada fuera del sandbox pasó manteniendo el bloqueo de solicitudes a servicios reales. Una aserción del runner necesitó esperar la carga diferida del panel; se corrigió la espera, sin modificar la aplicación por ese motivo.

La automatización y evidencias están fuera del repo, en `C:/Users/Usuario/.codex/visualizations/2026/10/22/01a16346-deca-76d0-b023-363706e320ed/portfolio-corrections/`: `validate-build.mjs`, `validation.json`, capturas y fixtures. Los servidores y navegador se cierran al finalizar. No se ejecutaron login real, escrituras remotas, envío de formularios ni despliegues. La comprobación local de URLs valida formato y render; no repite una auditoría funcional completa de las aplicaciones enlazadas. Los enlaces públicos conservan las comprobaciones de la revisión anterior.

## Archivos de esta etapa

- Galería: `src/components/Main/ProjectsView.jsx`; nuevo `src/data/publicProjects.js`.
- Administrador: `src/components/Admin/AdminApp.jsx`, `AdminProjectsList.jsx`, `AdminProjectForm.jsx`; hook `src/hooks/useProjects.js` renombrado/especializado como `useAdminProjects.js`; referencia `src/data/projectSeeds.js`.
- Navegación: `src/components/Header/Header.jsx` y clave accesible nueva en ambos diccionarios.
- Pruebas: nuevo `tests/public-projects.test.mjs`.
- Documentación: `README.md`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`, `FIREBASE_PROJECTS_ADMIN.md`, `docs/PROJECT_CONTEXT.md`, `docs/TECH_REVIEW.md`, `docs/PROFESSIONAL_UPDATE_2026.md` y este informe.

`src/data/contact.js` está presente y debe incluirse en una futura entrega, junto con los demás archivos nuevos. Los cambios de la actualización profesional anterior se conservaron.

## Git y siguiente etapa

Rama `codex/portfolio-professional-update-2026`; HEAD/base `32b230adc9a2f515eeef6f1756245f990d01b8f9`. No se movieron main, ramas históricas ni stash; no se hizo stage, commit, push, merge, reset, rebase ni despliegue. Los cambios siguen locales. El antiguo hook figura eliminado y el nuevo sin seguimiento hasta preparar una futura entrega; es una sustitución de responsabilidades, no eliminación del administrador.

Estado acumulado respecto de la base, incluyendo la actualización profesional previa: 24 archivos seguidos modificados, un hook eliminado por renombre y seis archivos nuevos sin seguimiento. El diff de archivos seguidos informa 786 inserciones y 649 eliminaciones; no incluye el contenido de los nuevos. Stage vacío y cero commits nuevos desde la base. Los seis nuevos son este informe, `PROFESSIONAL_UPDATE_2026.md`, `src/data/contact.js`, `src/data/publicProjects.js`, `src/hooks/useAdminProjects.js` y `tests/public-projects.test.mjs`.

Antes de publicar: aprobar las fechas provisionales de Asince; revisar configuración real del hosting, versión de Node, rama/commit de entrega, variables, rutas administrativas y rollback; revisar el diff completo e incluir todos los nuevos archivos. Publicación y verificación del dominio requieren autorización posterior. El inventario/respaldo remoto queda separado y pendiente. CV, capturas y credenciales omitidos no bloquean por sí solos; continúan las mejoras de SEO, peso de imágenes, revisión de dependencias y accesibilidad general sin rediseño.
