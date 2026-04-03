import { useEffect, useState } from "react"
import { getFirebaseServices, hasFirebaseConfig } from "../lib/firebase"
import { normalizeProject, sortProjects } from "../lib/projectModel"

function useProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [errorDetail, setErrorDetail] = useState("")
  const [source, setSource] = useState("firebase")

  useEffect(() => {
    if (!hasFirebaseConfig) {
      setProjects([])
      setLoading(false)
      setError("projects.error")
      setErrorDetail("Firebase is not configured.")
      setSource("firebase")
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
            setProjects([])
            setLoading(false)
            setError("projects.error")
            setErrorDetail(nextError.message)
            setSource("firebase")
          },
        )
      })
      .catch((nextError) => {
        if (cancelled) {
          return
        }

        setProjects([])
        setLoading(false)
        setError("projects.error")
        setErrorDetail(nextError.message)
        setSource("firebase")
      })

    return () => {
      cancelled = true
      unsubscribe()
    }
  }, [])

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
