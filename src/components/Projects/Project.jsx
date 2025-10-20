import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

function Project({ project }) {
  const { t, i18n } = useTranslation()

  const isInProgress = project?.isFinished === false
  const description =
    i18n.language === "es"
      ? project?.descriptionSpanish ?? project?.description ?? ""
      : project?.descriptionEnglish ?? project?.description ?? ""

  const imageSrc = project?.imageUrl || project?.img || (project?.title ? `/${project.title}.webp` : "")
  const technologies = Array.isArray(project?.techs) ? project.techs : []

  const typeLabels = {
    sitioWeb: t("projects.typeLabels.website"),
    varios: t("projects.typeLabels.misc"),
  }

  const secondaryInfo = project?.role || typeLabels[project?.type] || project?.type

  return (
    <article className="project relative flex h-full flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-xl backdrop-blur">
      {isInProgress && (
        <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-red-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          <span className="h-2 w-2 rounded-full bg-white" />
          {t("projects.inProgress")}
        </span>
      )}

      <figure className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={project?.title}
            loading="lazy"
            className="h-48 w-full object-cover"
          />
        ) : (
          <div className="flex h-48 w-full items-center justify-center text-slate-500">
            {t("projects.noImage")}
          </div>
        )}
      </figure>

      <div className="flex flex-col gap-2">
        <div>
          <h3 className="text-xl font-semibold text-white">{project?.title}</h3>
          {secondaryInfo && <p className="text-sm text-slate-400">{secondaryInfo}</p>}
        </div>

        {technologies.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {description && <p className="text-sm leading-relaxed text-slate-200">{description}</p>}
      </div>

      <div className="mt-auto flex flex-wrap gap-3">
        {project?.webLink && (
          <a
            href={project.webLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/60 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-500/10"
          >
            <i className="bi bi-laptop text-lg" aria-hidden="true" />
            <span>{t("projects.links.demo")}</span>
          </a>
        )}
        {project?.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-500/80 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-500/10"
          >
            <i className="bi bi-github text-lg" aria-hidden="true" />
            <span>{t("projects.links.repository")}</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default Project

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionEnglish: PropTypes.string,
    descriptionSpanish: PropTypes.string,
    imageUrl: PropTypes.string,
    img: PropTypes.string,
    techs: PropTypes.arrayOf(PropTypes.string),
    isFinished: PropTypes.bool,
    role: PropTypes.string,
    type: PropTypes.string,
    webLink: PropTypes.string,
    githubLink: PropTypes.string,
  }).isRequired,
}

