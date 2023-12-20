import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../db/data"
import ProjectList from "./ProjectList";



function ProjectListContainer({ type }) {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const projectCollection = collection(db, "projects")
    let queryFilter;
    if(type == "todos") {
      queryFilter = projectCollection
    } else {
      queryFilter = query(
        projectCollection,
        where("type", "==", type))
    } 
    const listProjects = getDocs(queryFilter)
    listProjects
      .then((res) => {
        const projectsMapped = res.docs.map((project) => {
          return {id: project.id, ...project.data()}
        })
        setProjectsList(projectsMapped)
      })
  },[type])




  return (
    <>
      <ProjectList 
        projects={projectsList}
      />
    </>
  )
}
export default ProjectListContainer