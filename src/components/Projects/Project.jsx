import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import Icon from "../ui/Icon"

function Project({ project }) {
  const { t, i18n } = useTranslation()

  const isInProgress = project?.isFinished === false
  const description =
    i18n.language === "es"
      ? project?.descriptionSpanish ?? project?.description ?? ""
      : project?.descriptionEnglish ?? project?.description ?? project?.descriptionSpanish ?? ""
  const shortDescription =
    i18n.language === "es"
      ? project?.shortDescriptionSpanish ?? project?.descriptionSpanish ?? ""
      : project?.shortDescriptionEnglish ?? project?.descriptionEnglish ?? project?.shortDescriptionSpanish ?? ""

  const imageSrc = project?.imageUrl || project?.img || (project?.title ? `/${project.title}.webp` : "")
  const technologies = Array.isArray(project?.techs) ? project.techs : []

  const typeLabels = {
    sitioWeb: t("projects.typeLabels.website"),
    varios: t("projects.typeLabels.misc"),
  }

  const secondaryInfo = typeLabels[project?.type] || project?.type

  return (
    <article className="relative flex h-full flex-col gap-4 overflow-hidden rounded-[1.5rem] border border-[rgba(129,149,191,0.12)] bg-[rgba(10,18,39,0.18)] p-5">
      {isInProgress && (
        <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-[rgba(9,15,31,0.88)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
          <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
          {t("projects.inProgress")}
        </span>
      )}

      <figure className="overflow-hidden rounded-[1.1rem] border border-[rgba(129,149,191,0.12)] bg-[rgba(7,12,24,0.92)]">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={project?.title}
            loading="lazy"
            className="h-48 w-full object-cover transition duration-500 hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-48 w-full items-center justify-center text-[color:var(--muted)]">
            {t("projects.noImage")}
          </div>
        )}
      </figure>

      <div className="flex flex-col gap-2">
        <div>
          <h3 className="font-display text-xl font-semibold text-white">{project?.title}</h3>
          {secondaryInfo && <p className="mt-1 text-sm text-[color:var(--muted)]">{secondaryInfo}</p>}
        </div>

        {technologies.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li key={tech} className="tag-chip">
                {tech}
              </li>
            ))}
          </ul>
        )}

        {shortDescription && <p className="text-sm leading-7 text-[color:var(--muted-strong)]">{shortDescription}</p>}
        {description && description !== shortDescription && (
          <p className="text-sm leading-7 text-[color:var(--muted)]">{description}</p>
        )}
      </div>

      <div className="mt-auto flex flex-wrap gap-3">
        {project?.webLink && (
          <a
            href={project.webLink}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button px-4 py-2"
          >
            <Icon name="external" className="h-4 w-4" />
            <span>{t("projects.links.demo")}</span>
          </a>
        )}
        {project?.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button px-4 py-2"
          >
            <Icon name="github" className="h-4 w-4" />
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
    shortDescriptionEnglish: PropTypes.string,
    shortDescriptionSpanish: PropTypes.string,
    imageUrl: PropTypes.string,
    img: PropTypes.string,
    techs: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.string,
    isFinished: PropTypes.bool,
    type: PropTypes.string,
    webLink: PropTypes.string,
    githubLink: PropTypes.string,
  }).isRequired,
}
