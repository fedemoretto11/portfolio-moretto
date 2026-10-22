# Firebase Projects Admin

## Estado actual: administrador heredado

El cierre local posterior excluye el panel y todos los modulos Firebase de los builds de produccion y preview. Solo se compila en desarrollo con `VITE_ENABLE_LEGACY_ADMIN=true`; el flag no puede habilitar un build. Consultar [release y rollback](./docs/RELEASE.md).

Este panel conserva la administracion de registros remotos con:

- Google Auth para iniciar sesion
- Firestore como base de datos de proyectos
- `imageUrl` manual para las imagenes

**Las ediciones del panel NO modifican el catalogo publico.** El sitio usa exclusivamente `src/data/projects.js` versionado en Git, preparado por `src/data/publicProjects.js`. No inicializa Firebase ni consulta Firestore durante visitas publicas, aunque esten configurados. Para publicar un proyecto, editar el catalogo y seguir el procedimiento de revision/build/publicacion del [README](./README.md).

`src/hooks/useAdminProjects.js` es exclusivo de esta ruta: mantiene separados carga, error y datos remotos; nunca utiliza el catalogo publico como respaldo. Se conservan Auth, Firestore, configuracion, dependencias, reglas documentadas y recursos. No se ejecuto ninguna escritura ni migracion remota.

## Carga inicial deshabilitada

Se retiraron el boton y el handler de carga inicial: ni una respuesta vacia ni un error habilitan importaciones. Sin inventario remoto y sin un procedimiento de creacion condicional/atomico revisado, una lista vacia en el cliente no garantiza ausencia de documentos al escribir. No se conserva una ruta alternativa con `writeBatch` que pueda sobrescribirlos.

`src/data/projectSeeds.js` queda como referencia inactiva de recuperacion, con IDs explicitos (`clubconnect`, `nido`, `moretto-srl`) y contenido derivado del catalogo, independiente de `featured`. No se importa desde el panel, no ejecuta escrituras y NO es un respaldo de Firestore ni contiene los diez proyectos. No usarla como migracion.

El CRUD individual remoto sigue siendo heredado; requiere permisos reales y no sustituye un respaldo. No se verificaron login ni escrituras reales en esta etapa.

## Inventario, respaldo y seguridad pendientes

No hay un conector Firestore ni una sesion administrativa de solo lectura verificada disponible en esta tarea. No se consulto la coleccion remota; sus documentos y diferencias respecto de Git son desconocidos. La presencia de variables de cliente no demuestra permisos. No se genero un reporte ficticio de diferencias ni un respaldo supuesto.

Antes de retirar servicios o recuperar/importar contenido, obtener un inventario autorizado de documentos completos (incluidos ocultos, IDs reales, campos adicionales y timestamps), comparar por ID con Git y verificar un respaldo recuperable. Conservar los archivos de imagen reales, las reglas y la configuracion necesaria. Revisar otros usos del proyecto Firebase antes de eliminar cualquier servicio. No publicar el inventario ni datos privados.

La allowlist del cliente solo controla la UI: la autorizacion debe existir en reglas remotas. El ejemplo siguiente NO acredita reglas desplegadas. La lectura del panel no filtra campos privados; `visible: false` no garantiza confidencialidad. Las variables `VITE_*` son publicas en el bundle; nunca incluir credenciales de servidor. No habilitar planes o recursos adicionales para esta tarea.

## Variables de entorno

Solo para utilizar el administrador, crear un archivo `.env.local` ignorado con:

```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_ADMIN_UIDS=
VITE_FIREBASE_ADMIN_EMAILS=
```

La galeria publica no necesita estas variables y no cambia con ellas. Los valores se incorporan al build; revisar el entorno de preview/produccion antes de publicar. No se modifico `.env.local`.

## Rutas del panel

- Compatible siempre: `/#/admin`
- Ruta limpia: `/admin`

Estas rutas administrativas solo funcionan en el servidor de desarrollo habilitado expresamente. En produccion se sirve el portfolio publico y no existe codigo administrativo que pueda activarse mediante URL, variables o localStorage. Usar loopback para mantenimiento autorizado y deshabilitar la opcion al finalizar.

## Reglas sugeridas

### Firestore

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{projectId} {
      allow read: if true;
      allow write: if request.auth != null
        && (
          request.auth.token.email in ['tu-email@dominio.com']
          || request.auth.uid in ['TU_UID']
        );
    }
  }
}
```

## Imagenes

Las imagenes ya no se suben a Firebase Storage. En cada proyecto debes cargar una URL manual en `imageUrl`.

Ejemplos:

- una imagen dentro de `public`: `/mi-proyecto.webp`
- una URL externa estable: `https://...`
