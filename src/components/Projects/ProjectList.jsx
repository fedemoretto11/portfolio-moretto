import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import Project from "./Project"

function ProjectList({ projects = [] }) {
  const { t } = useTranslation()

  if (projects.length === 0) {
    return <p className="surface-card px-4 py-4 text-center text-sm text-[color:var(--muted-strong)]">{t("projects.empty")}</p>
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => <Project key={project.id} project={project} />)}
    </section>
  )
}

ProjectList.propTypes = { projects: PropTypes.arrayOf(PropTypes.object) }

export default ProjectList
