import PropTypes from "prop-types"
import ProjectList from "./ProjectList"

function ProjectListContainer({ projects, type, excludeFeatured, isLoading, error }) {
  const baseProjects = excludeFeatured ? projects.filter((project) => !project.featured) : projects
  const projectsList =
    type === "todos" ? baseProjects : baseProjects.filter((project) => project.type === type)

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
  projects: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired,
  excludeFeatured: PropTypes.bool,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
}

ProjectListContainer.defaultProps = {
  projects: [],
  excludeFeatured: false,
  isLoading: false,
  error: null,
}
