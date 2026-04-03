import { useEffect, useState } from "react"
import AdminProjectForm from "./AdminProjectForm"
import AdminProjectsList from "./AdminProjectsList"
import projectSeeds from "../../data/projectSeeds"
import useProjects from "../../hooks/useProjects"
import {
  adminSetupFields,
  firebaseSetupFields,
  getFirebaseServices,
  hasAdminAccessControl,
  hasFirebaseConfig,
  isAdminUser,
} from "../../lib/firebase"
import { normalizeProject, parseTechsInput, slugifyProjectId, techsToInput } from "../../lib/projectModel"

function getNextOrder(projects) {
  return projects.length === 0 ? 10 : Math.max(...projects.map((project) => Number(project.order) || 0)) + 10
}

function createFormValues(project = {}, fallbackOrder = 10) {
  const normalized = normalizeProject({ ...project, order: project.order ?? fallbackOrder }, 0)

  return {
    id: normalized.id,
    title: normalized.title,
    type: normalized.type,
    featured: normalized.featured,
    visible: normalized.visible,
    order: String(normalized.order),
    imageUrl: normalized.imageUrl,
    shortDescriptionSpanish: normalized.shortDescriptionSpanish,
    shortDescriptionEnglish: normalized.shortDescriptionEnglish,
    descriptionSpanish: normalized.descriptionSpanish,
    descriptionEnglish: normalized.descriptionEnglish,
    techsInput: techsToInput(normalized.techs),
    githubLink: normalized.githubLink,
    webLink: normalized.webLink,
    isFinished: normalized.isFinished,
    year: normalized.year,
  }
}

function formatAuthError(error) {
  const code = error?.code || ""

  if (code === "auth/unauthorized-domain") {
    return {
      type: "error",
      message:
        'Firebase rechazo el dominio actual. Si estas en local, agrega "localhost" y/o "127.0.0.1" en Authentication > Settings > Authorized domains.',
    }
  }

  if (code === "auth/operation-not-allowed") {
    return {
      type: "error",
      message: 'Google Sign-In no esta habilitado en Firebase. Activalo en Authentication > Sign-in method > Google.',
    }
  }

  if (code === "auth/popup-blocked") {
    return {
      type: "error",
      message: "El navegador bloqueo el popup. Permite popups para este sitio e intenta de nuevo.",
    }
  }

  if (code === "auth/popup-closed-by-user") {
    return {
      type: "error",
      message: "El popup se cerro antes de completar el login.",
    }
  }

  return {
    type: "error",
    message: `No se pudo iniciar sesion${code ? ` (${code})` : ""}: ${error?.message || "error desconocido"}`,
  }
}

function isValidOptionalUrl(value) {
  const trimmed = value.trim()

  if (!trimmed) {
    return true
  }

  if (trimmed.startsWith("/")) {
    return true
  }

  try {
    const parsed = new URL(trimmed)
    return parsed.protocol === "http:" || parsed.protocol === "https:"
  } catch {
    return false
  }
}

function validateProjectForm(formValues, activeProjectId, projects) {
  const errors = {}
  const nextId = activeProjectId || slugifyProjectId(formValues.id || formValues.title)

  if (!formValues.title.trim()) {
    errors.title = "El titulo es obligatorio."
  }

  if (!formValues.shortDescriptionSpanish.trim()) {
    errors.shortDescriptionSpanish = "Escribe un resumen corto en espanol."
  }

  if (!activeProjectId && !nextId) {
    errors.id = "Escribe un titulo o un slug valido."
  }

  if (!activeProjectId && nextId && projects.some((project) => project.id === nextId)) {
    errors.id = "Ya existe un proyecto con ese slug."
  }

  if (formValues.order && Number.isNaN(Number(formValues.order))) {
    errors.order = "El orden debe ser numerico."
  }

  if (!isValidOptionalUrl(formValues.imageUrl)) {
    errors.imageUrl = "Usa una URL valida o una ruta local que empiece con '/'."
  }

  if (!isValidOptionalUrl(formValues.webLink)) {
    errors.webLink = "El link demo debe ser una URL valida."
  }

  if (!isValidOptionalUrl(formValues.githubLink)) {
    errors.githubLink = "El repositorio debe ser una URL valida."
  }

  return errors
}

function AdminApp() {
  const { projects, loading, error, errorDetail } = useProjects()
  const [sessionReady, setSessionReady] = useState(!hasFirebaseConfig)
  const [user, setUser] = useState(null)
  const [firebaseServices, setFirebaseServices] = useState(null)
  const [activeProjectId, setActiveProjectId] = useState(null)
  const [formValues, setFormValues] = useState(() => createFormValues())
  const [fieldErrors, setFieldErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const authorized = isAdminUser(user)

  useEffect(() => {
    if (!hasFirebaseConfig) {
      setSessionReady(true)
      return undefined
    }

    let unsubscribe = () => undefined
    let cancelled = false

    getFirebaseServices()
      .then((services) => {
        if (!services || cancelled) {
          return
        }

        setFirebaseServices(services)
        unsubscribe = services.authApi.onAuthStateChanged(services.auth, (nextUser) => {
          setUser(nextUser)
          setSessionReady(true)
        })
      })
      .catch((nextError) => {
        if (cancelled) {
          return
        }

        setStatus({ type: "error", message: `No se pudo inicializar Firebase: ${nextError.message}` })
        setSessionReady(true)
      })

    return () => {
      cancelled = true
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    const errorFieldNames = Object.keys(fieldErrors)

    if (errorFieldNames.length === 0) {
      return
    }

    const firstField = document.querySelector(`[name="${errorFieldNames[0]}"]`)

    if (firstField instanceof HTMLElement) {
      firstField.focus()
      firstField.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [fieldErrors])

  const resetForm = () => {
    setActiveProjectId(null)
    setFormValues(createFormValues({}, getNextOrder(projects)))
    setFieldErrors({})
    setStatus(null)
  }

  const handleInputChange = (event) => {
    const { checked, name, type, value } = event.target
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: type === "checkbox" ? checked : value,
    }))
    setFieldErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })
  }

  const handleLogin = async () => {
    if (!firebaseServices) {
      return
    }

    try {
      setStatus(null)
      await firebaseServices.authApi.signInWithPopup(firebaseServices.auth, firebaseServices.googleProvider)
    } catch (nextError) {
      setStatus(formatAuthError(nextError))
    }
  }

  const handleLogout = async () => {
    if (!firebaseServices) {
      return
    }

    await firebaseServices.authApi.signOut(firebaseServices.auth)
    resetForm()
  }

  const handleEditProject = (project) => {
    setActiveProjectId(project.id)
    setFormValues(createFormValues(project, getNextOrder(projects)))
    setFieldErrors({})
    setStatus(null)
  }

  const handleSaveProject = async (event) => {
    event.preventDefault()

    if (!firebaseServices || !user || !authorized) {
      return
    }

    const nextId = activeProjectId || slugifyProjectId(formValues.id || formValues.title)
    const nextErrors = validateProjectForm(formValues, activeProjectId, projects)

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors)
      setStatus({ type: "error", message: "Revisa los campos marcados antes de guardar." })
      return
    }

    if (!nextId) {
      setStatus({ type: "error", message: "Defini un titulo o un slug antes de guardar el proyecto." })
      return
    }

    if (!activeProjectId && projects.some((project) => project.id === nextId)) {
      setStatus({ type: "error", message: "Ya existe un proyecto con ese slug. Elegi otro identificador." })
      return
    }

    setIsSubmitting(true)
    setStatus(null)

    try {
      const payload = {
        id: nextId,
        title: formValues.title.trim(),
        type: formValues.type,
        featured: formValues.featured,
        visible: formValues.visible,
        order: Number(formValues.order) || 0,
        imageUrl: formValues.imageUrl.trim(),
        shortDescriptionSpanish: formValues.shortDescriptionSpanish.trim(),
        shortDescriptionEnglish: formValues.shortDescriptionEnglish.trim(),
        descriptionSpanish: formValues.descriptionSpanish.trim(),
        descriptionEnglish: formValues.descriptionEnglish.trim(),
        techs: parseTechsInput(formValues.techsInput),
        githubLink: formValues.githubLink.trim(),
        webLink: formValues.webLink.trim(),
        isFinished: formValues.isFinished,
        year: formValues.year.trim(),
        updatedAt: firebaseServices.firestoreApi.serverTimestamp(),
      }

      if (!activeProjectId) {
        payload.createdAt = firebaseServices.firestoreApi.serverTimestamp()
      }

      await firebaseServices.firestoreApi.setDoc(
        firebaseServices.firestoreApi.doc(firebaseServices.db, "projects", nextId),
        payload,
        { merge: Boolean(activeProjectId) },
      )
      setActiveProjectId(nextId)
      setFormValues(createFormValues(payload, getNextOrder(projects)))
      setFieldErrors({})
      setStatus({ type: "success", message: "Proyecto guardado correctamente." })
    } catch (nextError) {
      setStatus({ type: "error", message: `No se pudo guardar el proyecto: ${nextError.message}` })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteProject = async (project) => {
    if (!firebaseServices || !user || !authorized) {
      return
    }

    if (!window.confirm(`Vas a eliminar "${project.title}". Esta accion no se puede deshacer.`)) {
      return
    }

    setIsSubmitting(true)
    setStatus(null)

    try {
      await firebaseServices.firestoreApi.deleteDoc(
        firebaseServices.firestoreApi.doc(firebaseServices.db, "projects", project.id),
      )

      if (activeProjectId === project.id) {
        resetForm()
      }

      setStatus({ type: "success", message: "Proyecto eliminado." })
    } catch (nextError) {
      setStatus({ type: "error", message: `No se pudo eliminar el proyecto: ${nextError.message}` })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBootstrapProjects = async () => {
    if (!firebaseServices || !user || !authorized || projects.length > 0) {
      return
    }

    setIsSubmitting(true)
    setStatus(null)

    try {
      const batch = firebaseServices.firestoreApi.writeBatch(firebaseServices.db)

      projectSeeds.forEach((project) => {
        batch.set(firebaseServices.firestoreApi.doc(firebaseServices.db, "projects", project.id), {
          ...project,
          createdAt: firebaseServices.firestoreApi.serverTimestamp(),
          updatedAt: firebaseServices.firestoreApi.serverTimestamp(),
        })
      })

      await batch.commit()
      setStatus({ type: "success", message: "Se cargaron 3 proyectos iniciales en Firestore." })
    } catch (nextError) {
      setStatus({ type: "error", message: `No se pudieron cargar los proyectos iniciales: ${nextError.message}` })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!hasFirebaseConfig) {
    return (
      <main className="px-4 py-6 md:px-8 xl:px-10 xl:py-8">
        <section className="surface-panel min-h-[calc(100vh-4rem)] p-6 sm:p-8">
          <span className="eyebrow">Panel de proyectos</span>
          <h1 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Falta configurar Firebase
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted-strong)]">
            El panel ya esta integrado, pero necesita tus variables de entorno para autenticacion y Firestore.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="surface-card p-5">
              <h2 className="font-display text-xl text-white">Variables publicas necesarias</h2>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted-strong)]">
                {firebaseSetupFields.map((field) => (
                  <li key={field} className="rounded-2xl border border-[rgba(129,149,191,0.1)] px-4 py-3">
                    <code>{field}</code>
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-5">
              <h2 className="font-display text-xl text-white">Control de acceso</h2>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted-strong)]">
                {adminSetupFields.map((field) => (
                  <li key={field} className="rounded-2xl border border-[rgba(129,149,191,0.1)] px-4 py-3">
                    <code>{field}</code>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="px-4 py-6 md:px-8 xl:px-10 xl:py-8">
      <section className="surface-panel min-h-[calc(100vh-4rem)] p-6 sm:p-8">
        <div className="flex flex-col gap-5 border-b border-[rgba(129,149,191,0.12)] pb-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <span className="eyebrow">Administracion</span>
            <h1 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
              Gestiona proyectos sin tocar Firestore a mano
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--muted-strong)]">
              El panel esta pensado como una mesa de trabajo: eliges un proyecto, editas lo importante y validas
              rapido como se va a mostrar en el sitio.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="data-chip">Fuente publica: Firestore</span>
            {authorized && user?.email && <span className="data-chip">{user.email}</span>}
            <a href="/" className="secondary-button">Ver portfolio</a>
            {authorized && (
              <button type="button" onClick={handleLogout} className="secondary-button">
                Cerrar sesion
              </button>
            )}
          </div>
        </div>

        {status && (
          <div
            role="alert"
            aria-live="assertive"
            className={`mt-8 rounded-[1.35rem] border px-4 py-4 text-sm ${
              status.type === "success"
                ? "border-[rgba(159,247,213,0.18)] bg-[rgba(159,247,213,0.08)] text-[color:var(--success)]"
                : "border-[rgba(244,114,182,0.18)] bg-[rgba(244,114,182,0.08)] text-rose-200"
            }`}
          >
            {status.message}
          </div>
        )}

        {!sessionReady && <div className="mt-8 surface-card p-5 text-sm text-[color:var(--muted-strong)]">Verificando sesion...</div>}

        {sessionReady && !user && (
          <div className="mt-8 surface-card p-6">
            <h2 className="font-display text-2xl font-semibold text-white">Acceso privado</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted-strong)]">
              Inicia sesion con Google y despues el panel validara si tu cuenta coincide con el email o UID autorizado.
            </p>
            <div className="mt-6">
              <button type="button" onClick={handleLogin} className="primary-button">Iniciar sesion con Google</button>
            </div>
          </div>
        )}

        {sessionReady && user && !hasAdminAccessControl && (
          <div className="mt-8 surface-card p-6">
            <h2 className="font-display text-2xl font-semibold text-white">Falta habilitar tu cuenta</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted-strong)]">
              Define <code>VITE_FIREBASE_ADMIN_UIDS</code> o <code>VITE_FIREBASE_ADMIN_EMAILS</code> y usa estos datos:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="surface-card-soft p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)]">Email</p>
                <p className="mt-2 break-all text-sm text-white">{user.email || "No disponible"}</p>
              </div>
              <div className="surface-card-soft p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)]">UID</p>
                <p className="mt-2 break-all text-sm text-white">{user.uid}</p>
              </div>
            </div>
            <div className="mt-6">
              <button type="button" onClick={handleLogout} className="secondary-button">
                Cerrar sesion
              </button>
            </div>
          </div>
        )}

        {sessionReady && user && hasAdminAccessControl && !authorized && (
          <div className="mt-8 surface-card p-6">
            <h2 className="font-display text-2xl font-semibold text-white">Cuenta no autorizada</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted-strong)]">
              La sesion actual no coincide con los administradores permitidos.
            </p>
            <div className="mt-6">
              <button type="button" onClick={handleLogout} className="secondary-button">
                Cambiar de cuenta
              </button>
            </div>
          </div>
        )}

        {sessionReady && user && authorized && (
          <div className="mt-8 grid gap-8 2xl:grid-cols-[minmax(380px,0.82fr)_minmax(0,1.4fr)]">
            <AdminProjectsList
              activeProjectId={activeProjectId}
              error={error}
              errorDetail={errorDetail}
              isSubmitting={isSubmitting}
              loading={loading}
              onBootstrap={handleBootstrapProjects}
              onDelete={handleDeleteProject}
              onEdit={handleEditProject}
              onReset={resetForm}
              projects={projects}
            />
            <AdminProjectForm
              activeProjectId={activeProjectId}
              fieldErrors={fieldErrors}
              formValues={formValues}
              isSubmitting={isSubmitting}
              onChange={handleInputChange}
              onReset={resetForm}
              onSubmit={handleSaveProject}
            />
          </div>
        )}
      </section>
    </main>
  )
}

export default AdminApp
