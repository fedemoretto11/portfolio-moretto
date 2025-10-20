import PropTypes from "prop-types"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../db/data"
import ProjectList from "./ProjectList"

function ProjectListContainer({ type }) {
  const [projectsList, setProjectsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const projectCollection = collection(db, "projects")
    let queryFilter

    if (type === "todos") {
      queryFilter = projectCollection
    } else {
      queryFilter = query(projectCollection, where("type", "==", type))
    }

    setIsLoading(true)
    setError(null)

    getDocs(queryFilter)
      .then((res) => {
        const projectsMapped = res.docs.map((project) => ({
          id: project.id,
          ...project.data(),
        }))
        setProjectsList(projectsMapped)
        setIsLoading(false)
      })
      .catch(() => {
        setError("projects.error")
        setIsLoading(false)
      })
  }, [type])

  return (
    <ProjectList
      isLoading={isLoading}
      error={error}
      projects={projectsList}
    />
  )
}

export default ProjectListContainer

ProjectListContainer.propTypes = {
  type: PropTypes.string.isRequired,
}
