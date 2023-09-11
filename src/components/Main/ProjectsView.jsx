import { useState } from "react"
import ProjectListContainer from "../Projects/ProjectListContainer"




function ProjectsView() {
  const [type, setType] = useState("todos")

  const onSetType = (ProjectType) => {
    setType(ProjectType)
  }


  return (
    <section id="projects" className="projectView about flex flex-col justify-center items-start gap-6 sm:ml-[82px] md:mb-20 md:mt-20">
      <div className="projectView__text flex justify-center lg:justify-start">
        <h3 className="projectView__text__title lg:w-64 text-2xl">Proyectos</h3>
      </div>
      <div className="projectView__filter flex gap-8 self-center">
        <button className={`projectView__filter__btn${type == "todos" ? "--active" : ""}`} onClick={() => {onSetType("todos")}}>Todos</button>
        <button className={`projectView__filter__btn${type == "varios" ? "--active" : ""}`} onClick={() => {onSetType("varios")}}>Varios</button>
        <button className={`projectView__filter__btn${type == "sitioWeb" ? "--active" : ""}`} onClick={() => {onSetType("sitioWeb")}}>Sitios Web</button>
      </div>
      <ProjectListContainer 
        type={type}
      />
    </section>
  )
}
export default ProjectsView