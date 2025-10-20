import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import Project from "./Project"

function ProjectList({ projects, isLoading, error }) {
  const { t } = useTranslation()

  if (error) {
    return <p className="text-center text-red-500">{t(error)}</p>
  }

  if (isLoading) {
    return (
      <section className="projectsList grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:px-[240px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className="w-full animate-pulse rounded-xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <div className="mb-4 h-40 w-full rounded-lg bg-slate-800" />
            <div className="mb-2 h-4 w-2/3 rounded bg-slate-800" />
            <div className="mb-2 h-3 w-1/2 rounded bg-slate-800" />
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="h-6 w-16 rounded-full bg-slate-800" />
              <span className="h-6 w-14 rounded-full bg-slate-800" />
              <span className="h-6 w-20 rounded-full bg-slate-800" />
            </div>
            <div className="h-3 w-full rounded bg-slate-800" />
          </div>
        ))}
      </section>
    )
  }

  if (projects.length === 0) {
    return <p className="text-center text-slate-300">{t("projects.empty")}</p>
  }

  return (
    <section className="projectsList grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:px-[240px]">
      {projects.map((project) => {
        if (project.visible === false) return null
        return <Project key={project.id} project={project} />
      })}
    </section>
  )
}

export default ProjectList

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

ProjectList.defaultProps = {
  projects: [],
  error: null,
}

