# Preparación local de publicación — 22/10/2026

La versión local conserva el contenido profesional, los diez proyectos y los tres destacados. La fuente pública única sigue siendo Git. Las fechas de ambas etapas de Asince son provisionales y requieren aprobación editorial antes de publicar. CV privado deshabilitado; capturas reales de ClubConnect/Nido pendientes, sin material inventado.

## Configuración efectiva

- Node 24, React/React DOM 18.2.0 conservados, Vite 7.3.7, plugin React 5.2, Tailwind 3.4.19 y ESLint 10 con configuración plana. No se migró el framework ni se forzó compatibilidad de peers.
- Firebase 12 se conserva para mantenimiento. `__LEGACY_ADMIN_ENABLED__` se calcula en `vite.config.js`: solo desarrollo, no preview, y `VITE_ENABLE_LEGACY_ADMIN=true`. Un build siempre lo sustituye por `false` y elimina el administrador y el SDK. `/admin`, sus subrutas y `/#/admin` muestran únicamente el portfolio en producción.
- El panel local conserva autenticación/CRUD heredado y el aviso de que no publica proyectos. Carga inicial deshabilitada. No se inventarió ni respaldó Firestore y no se ejecutaron operaciones reales de Auth/Firestore/Storage.
- Mantenimiento autorizado: usar `npm run dev` en loopback con el flag explícito y la configuración propia del panel; retirar el flag al finalizar. Las credenciales de servidor nunca deben ser variables `VITE_*`. No cambiar `.env.local` ni copiar sus valores a entregas.
- Canonical, Open Graph/Twitter con URL absoluta, imagen social 1200×630, robots y sitemap preparados para `https://federicomoretto.com.ar/`. El HTML inicial contiene metadata española y el cliente actualiza ES/EN; no se añaden rutas ni equivalencias de idioma ficticias.
- Logo: 1.344.730 → 95.732 bytes (92,9% menos), WebP sin pérdida a 1024×1024. Comparación de píxeles visibles sobre el fondo del sitio: idéntica. Fuente PNG original conservada fuera de `public`, sin incluirse en el build. Favicon reducido a 12.816 bytes y social a 31.339 bytes.
- Accesibilidad: enlace para saltar a main, foco visible, menú desmontado al cerrar, teclado y Escape, foco en destino, nombres accesibles, dimensiones de imágenes, movimiento reducido global y selección de idioma aunque el navegador bloquee almacenamiento.
- Eliminados los estados asíncronos/remotos obsoletos de la lista pública; no se eliminó contenido de proyectos ni Firebase.

## Dependencias y avisos

Se resolvieron las versiones desde npm y se verificó instalación reproducible con `npm ci` usando Node 24. React permanece fijado en 18.2.0 y Tailwind en la línea 3; i18next y Firebase solo avanzaron dentro de sus versiones mayores. `prop-types` se declaró como dependencia directa porque se importa en runtime. Playwright/axe, ESLint y sus utilidades son exclusivamente herramientas de desarrollo.

Dos overrides acotados corrigen avisos sin migrar SDK/diseño: `@firebase/firestore` usa `@grpc/grpc-js@1.14.6` y los parsers CSS usan `postcss-selector-parser@7.1.7`. El CSS generado antes y después de esos overrides fue idéntico byte a byte. Revisar su necesidad cuando las dependencias proveedoras incorporen los parches.

Auditoría final: **0 avisos en dependencias de producción** (`npm audit --omit=dev`). La auditoría completa pasó de 29 a **5 high**, todos derivados de `braces@3.0.3` y sus consumidores de desarrollo Tailwind/chokidar/micromatch/fast-glob. No hay parche publicado para [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). Es procesamiento de patrones durante desarrollo/build, no código servido al visitante; usar configuración/contenido de build confiables. No se ocultó el aviso ni se utilizó `audit fix --force`. La eliminación de ese árbol exigiría una migración de herramientas de CSS que no se justificó para esta entrega. Persiste también la deprecación transitoria de `glob@10` en ese árbol; no afecta el artefacto estático. Browserslist/caniuse-lite quedó actualizado y su aviso dejó de aparecer.

Vite 7.3 recibe backports de correcciones según la [política oficial](https://vite.dev/releases); se evitó introducir el cambio de bundler de Vite 8. ESLint 10 reemplaza las líneas fuera de soporte y la configuración React utiliza hooks/refresh compatibles, sin forzar el peer antiguo de eslint-plugin-react.

## Validación reproducible

Con Node 24:

```sh
npm ci
npm run lint
npm test
npm run build
npm run check:build
npx playwright install chromium
npm run test:e2e
```

En Windows puede utilizarse Edge instalado con `PLAYWRIGHT_CHANNEL=msedge`. `playwright.config.mjs` inicia el preview de `dist` y un servidor de desarrollo con opt-in y cinco campos Firebase vacíos solo para las pruebas. Los servicios externos se bloquean salvo tipografías; no usar credenciales reales para tests del panel. Los resultados de Playwright quedan ignorados en `test-results`.

Resultados locales comprobados: lint correcto; 8/8 pruebas unitarias; build de producción correcto; verificación del artefacto correcta; 8/8 pruebas Playwright. ES/EN, catálogo/filtros, bloqueo de todas las URLs administrativas en producción, mantenimiento local sin Firebase, almacenamiento bloqueado y teclado comprobados. Axe no detectó infracciones WCAG A/AA en los cinco anchos 360/640/800/1024/1440; esto no sustituye una auditoría manual exhaustiva. El build público contiene un único JS (~263 KB, ~79 KB gzip) y ningún chunk o configuración Firebase/admin. Sin errores JavaScript ni solicitudes Firebase durante las pruebas públicas.

Un segundo artefacto sin variables Firebase pasó la comprobación y el recorrido público: su JavaScript fue idéntico byte a byte al build con configuración presente y opt-in forzado. Se inspeccionaron visualmente el menú final a 800 px y la imagen social. Se preservaron hashes del catálogo, contactos, `.env.local` e inicialización Firebase; los diccionarios solo añadieron la clave accesible de salto a main, sin alterar ningún texto profesional de la etapa anterior.

Enlaces reconsultados mediante GET: Distribuidora Moretto, To Do List y perfil GitHub respondieron 200; los tres repositorios enlazados existen y son públicos. LinkedIn respondió 999: acceso no certificable desde la herramienta, sin reemplazar el enlace por una inferencia. No se enviaron formularios, tareas ni mensajes. Recursos locales cargados, 57 enlaces documentales relativos válidos y barrido acotado de secretos sin coincidencias; no se afirma auditoría exhaustiva de seguridad.

`.github/workflows/ci.yml` reproduce instalación, lint, tests, build, comprobación del artefacto y Playwright con Node 24, sin secretos ni despliegues. Intenta habilitar el administrador durante el build para comprobar que se elimina igualmente. Las acciones oficiales se verificaron en sus releases actuales. La configuración CI está preparada; su ejecución en GitHub no se afirma, ya que no hubo push.

## Vercel y rollback

Preparado en `vercel.json`: preset Vite, `npm ci`, `npm run build`, salida `dist`, rewrite SPA oficial a `index.html`, headers `nosniff`, política de referrer, protección de frame y `noindex` para `/admin`. Node `24.x` se declara en `package.json` y `.nvmrc`. Las URLs de assets, robots y sitemap deben conservar su entrega estática. Referencias: [Vite en Vercel](https://vercel.com/docs/frameworks/frontend/vite), [Node 24 en Vercel](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

No se accedió al dashboard ni se modificó configuración remota. Antes de publicar verificar allí exactamente:

1. Proyecto/repositorio asociado y Root Directory de este checkout.
2. Production Branch, despliegues automáticos y rama/commit que se promoverá; no asumir que un push solo crea preview.
3. Node 24, preset Vite y ausencia de overrides de install/build/output que contradigan este repo.
4. Variables por entorno: la web no necesita Firebase. No copiar secretos; el flag administrativo no funciona en builds.
5. Dominio `federicomoretto.com.ar`, DNS/HTTPS y redirecciones entre variantes del dominio coherentes con canonical.
6. Protección/noindex de previews para no indexar duplicados.
7. Deployment actualmente estable que se conservará como rollback y permisos para promoverlo.

Después de autorización editorial y de publicación: crear/verificar un preview del commit final, comprobar ES/EN, recursos, robots/sitemap, metadata, rutas y ausencia de SDK Firebase, y promover ese mismo deployment. Verificar luego el dominio real; los tests locales no acreditan reglas del edge, headers ni DNS de producción.

Rollback: conservar el deployment anterior y su identificador; usar la opción de rollback/promoción del dashboard para restaurarlo, verificar el dominio y documentar el resultado. No modificar Firestore ni recuperar el stash para revertir una publicación. Si se necesita revertir código, preparar un commit `revert` sobre la historia entregada, sin reset ni force push. No se ejecutó ninguna de estas operaciones remotas.

## Cierre y pendientes

No hay bloqueos funcionales locales comprobados. La aprobación de fechas y la decisión/autorización de publicación siguen pendientes del usuario; la configuración real del dashboard requiere verificación. Inventario/respaldo Firebase, CV nuevo, credenciales y capturas omitidos no bloquean esta web estática por sí solos. La deuda de `braces` afecta las herramientas de build y queda explícita; monitorizar el parche sin cambiar el diseño a ciegas.

La entrega se agrupa en un único commit local coherente de la actualización completa después de revisar código, lockfile, documentación, recursos y todos los archivos nuevos. `main`, ramas históricas y stash deben permanecer intactos. No hacer push, merge ni despliegue en este cierre. El hash y el estado Git final se informan en la entrega; no se guardan artefactos de prueba, inventarios privados ni archivos locales de entorno en Git.
