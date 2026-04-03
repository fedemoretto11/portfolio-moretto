import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import Project from "./Project"

function ProjectList({ projects, isLoading, error }) {
  const { t } = useTranslation()

  if (error) {
    return <p className="surface-card px-4 py-4 text-center text-sm text-red-200">{t(error)}</p>
  }

  if (isLoading) {
    return (
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className="surface-card w-full animate-pulse p-6"
          >
            <div className="mb-4 h-44 w-full rounded-xl bg-[rgba(18,32,64,0.9)]" />
            <div className="mb-2 h-4 w-2/3 rounded bg-[rgba(18,32,64,0.9)]" />
            <div className="mb-2 h-3 w-1/2 rounded bg-[rgba(18,32,64,0.9)]" />
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="h-6 w-16 rounded-full bg-[rgba(18,32,64,0.9)]" />
              <span className="h-6 w-14 rounded-full bg-[rgba(18,32,64,0.9)]" />
              <span className="h-6 w-20 rounded-full bg-[rgba(18,32,64,0.9)]" />
            </div>
            <div className="h-3 w-full rounded bg-[rgba(18,32,64,0.9)]" />
          </div>
        ))}
      </section>
    )
  }

  if (projects.length === 0) {
    return (
      <p className="surface-card px-4 py-4 text-center text-sm text-[color:var(--muted-strong)]">
        {t("projects.empty")}
      </p>
    )
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
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

