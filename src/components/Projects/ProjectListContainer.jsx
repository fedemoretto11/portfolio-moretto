import PropTypes from "prop-types"
import ProjectList from "./ProjectList"

function ProjectListContainer({ projects, type, excludeFeatured }) {
  const baseProjects = excludeFeatured ? projects.filter((project) => !project.featured) : projects
  const projectsList =
    type === "todos" ? baseProjects : baseProjects.filter((project) => project.type === type)

  return <ProjectList projects={projectsList} />
}

export default ProjectListContainer

ProjectListContainer.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired,
  excludeFeatured: PropTypes.bool,
}

ProjectListContainer.defaultProps = {
  projects: [],
  excludeFeatured: false,
}
