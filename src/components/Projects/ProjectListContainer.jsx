import PropTypes from "prop-types"
import ProjectList from "./ProjectList"
import projects from "../../data/projects"

function ProjectListContainer({ type, excludeFeatured }) {
  const baseProjects = excludeFeatured ? projects.filter((project) => !project.featured) : projects
  const projectsList =
    type === "todos" ? baseProjects : baseProjects.filter((project) => project.type === type)

  return (
    <ProjectList
      isLoading={false}
      error={null}
      projects={projectsList}
    />
  )
}

export default ProjectListContainer

ProjectListContainer.propTypes = {
  type: PropTypes.string.isRequired,
  excludeFeatured: PropTypes.bool,
}

ProjectListContainer.defaultProps = {
  excludeFeatured: false,
}
