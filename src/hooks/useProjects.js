import { useEffect, useState } from "react"
import localProjects from "../data/projects"
import { getFirebaseServices, hasFirebaseConfig } from "../lib/firebase"
import { normalizeProject, sortProjects } from "../lib/projectModel"

const fallbackProjects = sortProjects(localProjects.map((project, index) => normalizeProject(project, index)))

function useProjects({ localFallback = true } = {}) {
  const [projects, setProjects] = useState(localFallback ? fallbackProjects : [])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [errorDetail, setErrorDetail] = useState("")
  const [source, setSource] = useState(localFallback ? "local" : "firebase")

  useEffect(() => {
    if (!hasFirebaseConfig) {
      setProjects(localFallback ? fallbackProjects : [])
      setLoading(false)
      setError(localFallback ? null : "projects.error")
      setErrorDetail("Firebase is not configured.")
      setSource(localFallback ? "local" : "firebase")
      return undefined
    }

    setLoading(true)
    let unsubscribe = () => undefined
    let cancelled = false

    getFirebaseServices()
      .then((services) => {
        if (!services || cancelled) {
          return
        }

        unsubscribe = services.firestoreApi.onSnapshot(
          services.firestoreApi.collection(services.db, "projects"),
          (snapshot) => {
            const nextProjects = sortProjects(
              snapshot.docs.map((documentSnapshot, index) =>
                normalizeProject({ id: documentSnapshot.id, ...documentSnapshot.data() }, index),
              ),
            )

            setProjects(nextProjects)
            setLoading(false)
            setError(null)
            setErrorDetail("")
            setSource("firebase")
          },
          (nextError) => {
            setProjects(localFallback ? fallbackProjects : [])
            setLoading(false)
            setError(localFallback ? null : "projects.error")
            setErrorDetail(nextError.message)
            setSource(localFallback ? "local" : "firebase")
          },
        )
      })
      .catch((nextError) => {
        if (cancelled) {
          return
        }

        setProjects(localFallback ? fallbackProjects : [])
        setLoading(false)
        setError(localFallback ? null : "projects.error")
        setErrorDetail(nextError.message)
        setSource(localFallback ? "local" : "firebase")
      })

    return () => {
      cancelled = true
      unsubscribe()
    }
  }, [localFallback])

  return {
    projects,
    loading,
    error,
    errorDetail,
    source,
    usingFirebase: hasFirebaseConfig,
  }
}

export default useProjects
