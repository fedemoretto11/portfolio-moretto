import Project from "./Project"






function ProjectList({ projects }) {
  return (
    projects.length === 0
    ? <h2>Cargando datos...</h2>
    : 
    <section className="projectsList grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:px-[240px]">
      {projects.map((project) => {
        if (project.visible === false) return null;
        return (
          <Project 
            key={project.id}
            project={project}
          />
        )
      })}
    </section>
    ) 
}
export default ProjectList