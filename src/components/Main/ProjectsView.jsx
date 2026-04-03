import { useState } from "react"
import { useTranslation } from "react-i18next"
import ProjectListContainer from "../Projects/ProjectListContainer"
import projects from "../../data/projects"
import Icon from "../ui/Icon"

function ProjectsView() {
  const { t } = useTranslation()
  const [type, setType] = useState("todos")
  const featuredProjects = projects.filter((project) => project.featured && project.visible !== false)

  const filters = [
    { id: "todos", label: t("projects.all") },
    { id: "sitioWeb", label: t("projects.webSites") },
    { id: "varios", label: t("projects.others") },
  ]

  return (
    <section id="projects" className="section-shell scroll-mt-32">
      <div className="px-2 py-2 sm:px-0">
        <div className="flex flex-col gap-2">
          <span className="eyebrow self-start">{t("projects.subtitle")}</span>
          <h2 className="section-title">{t("projects.title")}</h2>
          <p className="section-copy">{t("projects.description")}</p>
        </div>

        <div className="mt-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold text-white">{t("projects.featuredTitle")}</h3>
            <span className="data-chip">
              <Icon name="stars" className="h-4 w-4" />
              {featuredProjects.length} {t("projects.featuredCount")}
            </span>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={`featured-${project.id}`}
                className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[rgba(129,149,191,0.12)] bg-[rgba(10,18,39,0.22)]"
              >
                <figure className="relative border-b border-[rgba(129,149,191,0.12)] bg-[rgba(7,12,24,0.92)]">
                  {project.isFinished === false && (
                    <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-[rgba(9,15,31,0.88)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                      <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                      {t("projects.inProgress")}
                    </span>
                  )}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="h-60 w-full object-cover"
                  />
                </figure>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                        {project.context}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>

                    {project.year && (
                      <span className="data-chip">
                        <Icon name="calendar" className="h-4 w-4" />
                        {project.year}
                      </span>
                    )}
                  </div>

                  {project.role && (
                    <p className="text-sm font-medium text-[color:var(--muted-strong)]">{project.role}</p>
                  )}

                  {project.impact && (
                    <p className="text-sm leading-7 text-[color:var(--muted-strong)]">{project.impact}</p>
                  )}

                  <ul className="flex flex-wrap gap-2">
                    {project.techs?.map((tech) => (
                      <li key={`${project.id}-${tech}`} className="tag-chip">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    {project.webLink && (
                      <a
                        href={project.webLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button"
                      >
                        <Icon name="external" className="h-4 w-4" />
                        {t("projects.links.demo")}
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button"
                      >
                        <Icon name="github" className="h-4 w-4" />
                        {t("projects.links.repository")}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">{t("projects.archiveTitle")}</h3>
              <p className="mt-2 text-sm leading-7 text-[color:var(--muted-strong)]">
                {t("projects.archiveDescription")}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => {
              const isActive = type === filter.id
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setType(filter.id)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] transition ${
                    isActive
                      ? "border-[rgba(121,183,255,0.28)] bg-[rgba(121,183,255,0.08)] text-[color:var(--accent)]"
                      : "border-[rgba(129,149,191,0.12)] bg-[rgba(10,18,39,0.22)] text-[color:var(--muted-strong)] hover:border-[rgba(129,149,191,0.22)] hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>

          <ProjectListContainer type={type} excludeFeatured />
        </div>
      </div>
    </section>
  )
}

export default ProjectsView
