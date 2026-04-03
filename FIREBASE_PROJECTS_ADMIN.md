# Firebase Projects Admin

## Objetivo

Este panel permite administrar proyectos desde el propio sitio con:

- Google Auth para iniciar sesion
- Firestore como base de datos de proyectos
- `imageUrl` manual para las imagenes

El sitio publico usa Firestore como fuente de verdad de proyectos.

## Variables de entorno

Crear un archivo `.env.local` con:

```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_ADMIN_UIDS=
VITE_FIREBASE_ADMIN_EMAILS=
```

## Rutas del panel

- Compatible siempre: `/#/admin`
- Ruta limpia: `/admin`

Si tu hosting no tiene rewrite de SPA, usa `/#/admin`.

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
