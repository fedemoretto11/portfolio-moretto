import PropTypes from "prop-types"
import { useMemo, useState } from "react"

const filters = [
  { id: "todos", label: "Todos" },
  { id: "visibles", label: "Publicados" },
  { id: "destacados", label: "Destacados" },
  { id: "ocultos", label: "Ocultos" },
]

function normalizeSearchValue(value) {
  return typeof value === "string" ? value.toLowerCase().trim() : ""
}

function AdminProjectsList({
  activeProjectId,
  error,
  errorDetail,
  isSubmitting,
  loading,
  onBootstrap,
  onDelete,
  onEdit,
  onReset,
  projects,
}) {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("todos")

  const counters = useMemo(
    () => ({
      total: projects.length,
      visible: projects.filter((project) => project.visible !== false).length,
      featured: projects.filter((project) => project.visible !== false && project.featured).length,
    }),
    [projects],
  )

  const filteredProjects = useMemo(() => {
    const normalizedQuery = normalizeSearchValue(query)

    return projects.filter((project) => {
      if (filter === "visibles" && project.visible === false) {
        return false
      }

      if (filter === "destacados" && (!project.featured || project.visible === false)) {
        return false
      }

      if (filter === "ocultos" && project.visible !== false) {
        return false
      }

      if (!normalizedQuery) {
        return true
      }

      const searchableText = [
        project.title,
        project.id,
        project.shortDescriptionSpanish,
        project.shortDescriptionEnglish,
        ...(project.techs || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()

      return searchableText.includes(normalizedQuery)
    })
  }, [filter, projects, query])

  return (
    <section className="flex min-h-0 flex-col gap-5">
      {error && (
        <div className="rounded-[1.35rem] border border-[rgba(244,114,182,0.18)] bg-[rgba(244,114,182,0.08)] px-4 py-4 text-sm text-rose-200">
          <p>No se pudieron leer los proyectos de Firestore.</p>
          {errorDetail && <p className="mt-2 break-words text-xs text-rose-100/90">{errorDetail}</p>}
        </div>
      )}

      <div className="surface-card flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="border-b border-[rgba(129,149,191,0.1)] px-5 py-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-2xl font-semibold text-white">Biblioteca de proyectos</h2>
                  <span className="data-chip">{projects.length} en base</span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[color:var(--muted-strong)]">
                  Busca, filtra y abre un proyecto para editarlo. La lista esta pensada para ubicarte rapido antes de
                  entrar al detalle.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {projects.length === 0 && !loading && (
                  <button
                    type="button"
                    onClick={onBootstrap}
                    disabled={isSubmitting}
                    className="secondary-button disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Cargar 3 iniciales
                  </button>
                )}
                <button type="button" onClick={onReset} className="primary-button">
                  Nuevo proyecto
                </button>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              <div className="admin-stat-card">
                <span className="admin-stat-label">Total</span>
                <strong className="admin-stat-value">{counters.total}</strong>
              </div>
              <div className="admin-stat-card">
                <span className="admin-stat-label">Publicados</span>
                <strong className="admin-stat-value">{counters.visible}</strong>
              </div>
              <div className="admin-stat-card">
                <span className="admin-stat-label">Destacados</span>
                <strong className="admin-stat-value">{counters.featured}</strong>
              </div>
            </div>

            <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
              <label className="field-group xl:min-w-[280px] xl:flex-1">
                <span className="field-label">Buscar proyecto</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="field-input"
                  placeholder="Nombre, slug o tecnologia"
                />
              </label>

              <div className="flex flex-wrap gap-2">
                {filters.map((option) => {
                  const isActive = filter === option.id

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setFilter(option.id)}
                      aria-pressed={isActive}
                      className={isActive ? "admin-filter-pill admin-filter-pill-active" : "admin-filter-pill"}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-5">
          {loading && (
            <div className="rounded-[1.35rem] border border-[rgba(129,149,191,0.1)] px-4 py-5 text-sm text-[color:var(--muted-strong)]">
              Cargando proyectos...
            </div>
          )}

          {!loading && projects.length === 0 && !error && (
            <div className="rounded-[1.35rem] border border-[rgba(129,149,191,0.1)] px-4 py-5 text-sm text-[color:var(--muted-strong)]">
              Firestore todavia no tiene proyectos. Puedes crear el primero desde este panel.
            </div>
          )}

          {!loading && projects.length > 0 && filteredProjects.length === 0 && (
            <div className="rounded-[1.35rem] border border-[rgba(129,149,191,0.1)] px-4 py-5 text-sm text-[color:var(--muted-strong)]">
              No hubo coincidencias con ese filtro. Ajusta la busqueda o vuelve a <span className="text-white">Todos</span>.
            </div>
          )}

          {!loading && filteredProjects.length > 0 && (
            <div className="grid gap-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className={
                    activeProjectId === project.id
                      ? "admin-project-row admin-project-row-active"
                      : "admin-project-row"
                  }
                >
                  <button
                    type="button"
                    onClick={() => onEdit(project)}
                    className="flex min-w-0 flex-1 items-start gap-4 rounded-[1rem] text-left"
                  >
                    <div className="h-20 w-24 flex-shrink-0 overflow-hidden rounded-[1rem] border border-[rgba(129,149,191,0.1)] bg-[rgba(7,12,24,0.92)]">
                      {project.imageUrl ? (
                        <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full items-center justify-center px-2 text-center text-xs text-[color:var(--muted)]">
                          Sin imagen
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap gap-2">
                        <span className="data-chip">Posicion {project.order}</span>
                        <span className="data-chip">{project.type === "sitioWeb" ? "Sitio web" : "Varios"}</span>
                        {project.featured && <span className="data-chip">Destacado</span>}
                        {project.visible === false && <span className="data-chip">Oculto</span>}
                        {project.isFinished === false && <span className="data-chip">En desarrollo</span>}
                      </div>

                      <h3 className="mt-3 truncate font-display text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-1 text-sm text-[color:var(--muted)]">{project.id}</p>
                      {(project.shortDescriptionSpanish || project.descriptionSpanish) && (
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[color:var(--muted-strong)]">
                          {project.shortDescriptionSpanish || project.descriptionSpanish}
                        </p>
                      )}
                    </div>
                  </button>

                  <div className="flex flex-wrap gap-3 xl:justify-end">
                    <button type="button" onClick={() => onEdit(project)} className="secondary-button">
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(project)}
                      disabled={isSubmitting}
                      className="danger-button disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Eliminar
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

AdminProjectsList.propTypes = {
  activeProjectId: PropTypes.string,
  error: PropTypes.string,
  errorDetail: PropTypes.string,
  isSubmitting: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onBootstrap: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

AdminProjectsList.defaultProps = {
  activeProjectId: null,
  error: null,
  errorDetail: "",
}

export default AdminProjectsList
