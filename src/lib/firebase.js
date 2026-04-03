const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const parseEnvList = (...keys) =>
  keys
    .flatMap((key) => (import.meta.env[key] || "").split(","))
    .map((item) => item.trim())
    .filter(Boolean)

export const firebaseSetupFields = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID",
]

export const adminSetupFields = [
  "VITE_FIREBASE_ADMIN_UIDS",
  "VITE_FIREBASE_ADMIN_EMAILS",
]

export const hasFirebaseConfig = firebaseSetupFields.every((field) => Boolean(import.meta.env[field]))
export const allowedAdminUids = parseEnvList("VITE_FIREBASE_ADMIN_UIDS", "VITE_FIREBASE_ADMIN_UID")
export const allowedAdminEmails = parseEnvList("VITE_FIREBASE_ADMIN_EMAILS", "VITE_FIREBASE_ADMIN_EMAIL")
export const hasAdminAccessControl = allowedAdminUids.length > 0 || allowedAdminEmails.length > 0

let firebaseServicesPromise = null

export async function getFirebaseServices() {
  if (!hasFirebaseConfig) {
    return null
  }

  if (!firebaseServicesPromise) {
    firebaseServicesPromise = Promise.all([
      import("firebase/app"),
      import("firebase/auth"),
      import("firebase/firestore"),
    ]).then(([appApi, authApi, firestoreApi]) => {
      const firebaseApp = appApi.initializeApp(firebaseConfig)
      const auth = authApi.getAuth(firebaseApp)
      const db = firestoreApi.getFirestore(firebaseApp)
      const googleProvider = new authApi.GoogleAuthProvider()
      googleProvider.setCustomParameters({ prompt: "select_account" })

      return {
        auth,
        authApi,
        db,
        firebaseApp,
        firestoreApi,
        googleProvider,
      }
    })
  }

  return firebaseServicesPromise
}

export function isAdminUser(user) {
  if (!user || !hasAdminAccessControl) {
    return false
  }

  const userEmail = user.email?.toLowerCase()

  return (
    allowedAdminUids.includes(user.uid) ||
    (Boolean(userEmail) && allowedAdminEmails.map((email) => email.toLowerCase()).includes(userEmail))
  )
}
