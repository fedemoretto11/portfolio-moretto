import { useState } from "react"
import { useTranslation } from "react-i18next"
import ProjectListContainer from "../Projects/ProjectListContainer"

function ProjectsView() {
  const { t } = useTranslation()
  const [type, setType] = useState("todos")

  const filters = [
    { id: "todos", label: t("projects.all") },
    { id: "sitioWeb", label: t("projects.webSites") },
    { id: "varios", label: t("projects.others") },
  ]

  return (
    <section id="projects" className="px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-slate-800 bg-slate-900/50 px-8 py-12 shadow-xl shadow-slate-950/40 backdrop-blur">
        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase tracking-[0.3em] text-sky-300">{t("projects.subtitle")}</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t("projects.title")}</h2>
          <p className="max-w-3xl text-base text-slate-300">{t("projects.description")}</p>
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
                    ? "border-emerald-400 bg-emerald-500/10 text-emerald-200"
                    : "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-slate-500 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <ProjectListContainer type={type} />
      </div>
    </section>
  )
}

export default ProjectsView
