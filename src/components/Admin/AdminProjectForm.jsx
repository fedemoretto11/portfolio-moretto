import PropTypes from "prop-types"

function AdminProjectForm({ activeProjectId, fieldErrors, formValues, isSubmitting, onChange, onReset, onSubmit }) {
  const getFieldClassName = (fieldName) =>
    fieldErrors[fieldName] ? "field-input field-input-error" : "field-input"

  const getTextareaClassName = (fieldName) =>
    fieldErrors[fieldName] ? "field-textarea field-input-error" : "field-textarea"

  const previewSummary =
    formValues.shortDescriptionSpanish.trim() || formValues.descriptionSpanish.trim() || "Todavia no agregaste un resumen."
  const previewTechs = formValues.techsInput
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 4)

  return (
    <aside className="surface-card flex min-h-0 flex-col overflow-hidden">
      <div className="border-b border-[rgba(129,149,191,0.1)] px-6 py-5">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-display text-2xl font-semibold text-white">
            {activeProjectId ? "Edicion del proyecto" : "Alta de proyecto"}
          </h2>
          <span className="data-chip">{activeProjectId ? activeProjectId : "Nuevo"}</span>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-[color:var(--muted-strong)]">
          Primero define como se presenta el proyecto, despues completa los enlaces y el detalle largo.
        </p>
      </div>

      <form className="flex min-h-0 flex-1 flex-col" onSubmit={onSubmit} noValidate>
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          <div className="grid gap-8 2xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <div className="flex flex-col gap-8">
              <section className="admin-form-section">
                <div>
                  <p className="field-label">Base del proyecto</p>
                  <p className="admin-section-copy">
                    Lo minimo para identificarlo bien y poder ubicarlo rapido en la lista.
                  </p>
                </div>

                <div className="grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(240px,0.65fr)]">
                  <label className="field-group">
                    <span className="field-label">Nombre visible</span>
                    <input
                      type="text"
                      name="title"
                      value={formValues.title}
                      onChange={onChange}
                      className={getFieldClassName("title")}
                      placeholder="Kilometros App"
                      aria-invalid={Boolean(fieldErrors.title)}
                      aria-describedby={fieldErrors.title ? "title-error" : undefined}
                    />
                    {fieldErrors.title && (
                      <span id="title-error" className="field-error">
                        {fieldErrors.title}
                      </span>
                    )}
                  </label>

                  <label className="field-group">
                    <span className="field-label">Identificador</span>
                    <input
                      type="text"
                      name="id"
                      value={formValues.id}
                      onChange={onChange}
                      className={getFieldClassName("id")}
                      placeholder="kilometros-app"
                      readOnly={Boolean(activeProjectId)}
                      aria-invalid={Boolean(fieldErrors.id)}
                      aria-describedby={fieldErrors.id ? "id-error" : undefined}
                    />
                    {fieldErrors.id && (
                      <span id="id-error" className="field-error">
                        {fieldErrors.id}
                      </span>
                    )}
                  </label>
                </div>

                <div className="grid gap-4">
                  <label className="field-group">
                    <span className="field-label">Resumen corto en espanol</span>
                    <textarea
                      name="shortDescriptionSpanish"
                      value={formValues.shortDescriptionSpanish}
                      onChange={onChange}
                      className={getTextareaClassName("shortDescriptionSpanish")}
                      rows="3"
                      placeholder="Una idea corta y clara para presentar el proyecto."
                      aria-invalid={Boolean(fieldErrors.shortDescriptionSpanish)}
                      aria-describedby={fieldErrors.shortDescriptionSpanish ? "shortDescriptionSpanish-error" : undefined}
                    />
                    {fieldErrors.shortDescriptionSpanish && (
                      <span id="shortDescriptionSpanish-error" className="field-error">
                        {fieldErrors.shortDescriptionSpanish}
                      </span>
                    )}
                  </label>

                  <label className="field-group">
                    <span className="field-label">Resumen corto en ingles</span>
                    <textarea
                      name="shortDescriptionEnglish"
                      value={formValues.shortDescriptionEnglish}
                      onChange={onChange}
                      className={getTextareaClassName("shortDescriptionEnglish")}
                      rows="3"
                      placeholder="Optional short summary for the English version."
                      aria-invalid={Boolean(fieldErrors.shortDescriptionEnglish)}
                      aria-describedby={fieldErrors.shortDescriptionEnglish ? "shortDescriptionEnglish-error" : undefined}
                    />
                    {fieldErrors.shortDescriptionEnglish && (
                      <span id="shortDescriptionEnglish-error" className="field-error">
                        {fieldErrors.shortDescriptionEnglish}
                      </span>
                    )}
                  </label>
                </div>
              </section>

              <section className="admin-form-section">
                <div>
                  <p className="field-label">Detalle del contenido</p>
                  <p className="admin-section-copy">
                    Este texto alimenta la ficha extendida y te deja contar mejor el enfoque del proyecto.
                  </p>
                </div>

                <div className="grid gap-4 xl:grid-cols-2">
                  <label className="field-group">
                    <span className="field-label">Detalle en espanol</span>
                    <textarea
                      name="descriptionSpanish"
                      value={formValues.descriptionSpanish}
                      onChange={onChange}
                      className={getTextareaClassName("descriptionSpanish")}
                      rows="6"
                      placeholder="Explica que resuelve, como esta pensado y que valor aporta."
                      aria-invalid={Boolean(fieldErrors.descriptionSpanish)}
                      aria-describedby={fieldErrors.descriptionSpanish ? "descriptionSpanish-error" : undefined}
                    />
                    {fieldErrors.descriptionSpanish && (
                      <span id="descriptionSpanish-error" className="field-error">
                        {fieldErrors.descriptionSpanish}
                      </span>
                    )}
                  </label>

                  <label className="field-group">
                    <span className="field-label">Detalle en ingles</span>
                    <textarea
                      name="descriptionEnglish"
                      value={formValues.descriptionEnglish}
                      onChange={onChange}
                      className={getTextareaClassName("descriptionEnglish")}
                      rows="6"
                      placeholder="Optional long description for the English version."
                      aria-invalid={Boolean(fieldErrors.descriptionEnglish)}
                      aria-describedby={fieldErrors.descriptionEnglish ? "descriptionEnglish-error" : undefined}
                    />
                    {fieldErrors.descriptionEnglish && (
                      <span id="descriptionEnglish-error" className="field-error">
                        {fieldErrors.descriptionEnglish}
                      </span>
                    )}
                  </label>
                </div>
              </section>

              <section className="admin-form-section">
                <div>
                  <p className="field-label">Organizacion del sitio</p>
                  <p className="admin-section-copy">
                    Decide como se ordena y si aparece como parte del archivo o del bloque destacado.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <label className="field-group">
                    <span className="field-label">Categoria</span>
                    <select name="type" value={formValues.type} onChange={onChange} className="field-input">
                      <option value="sitioWeb">Sitio web</option>
                      <option value="varios">Varios</option>
                    </select>
                  </label>

                  <label className="field-group">
                    <span className="field-label">Posicion</span>
                    <input
                      type="number"
                      name="order"
                      value={formValues.order}
                      onChange={onChange}
                      className={getFieldClassName("order")}
                      min="0"
                      step="10"
                      aria-invalid={Boolean(fieldErrors.order)}
                      aria-describedby={fieldErrors.order ? "order-error" : undefined}
                    />
                    {fieldErrors.order && (
                      <span id="order-error" className="field-error">
                        {fieldErrors.order}
                      </span>
                    )}
                  </label>

                  <label className="field-group">
                    <span className="field-label">Anio visible</span>
                    <input
                      type="text"
                      name="year"
                      value={formValues.year}
                      onChange={onChange}
                      className="field-input"
                      placeholder="2026"
                    />
                  </label>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    ["visible", "Mostrar en el sitio"],
                    ["featured", "Marcar como destacado"],
                    ["isFinished", "Proyecto finalizado"],
                  ].map(([name, label]) => (
                    <label key={name} className="field-toggle">
                      <input type="checkbox" name={name} checked={formValues[name]} onChange={onChange} />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </section>

              <section className="admin-form-section">
                <div>
                  <p className="field-label">Portada y enlaces</p>
                  <p className="admin-section-copy">
                    Aqui defines la imagen principal y los accesos externos que se muestran en la tarjeta.
                  </p>
                </div>

                <div className="grid gap-4">
                  <label className="field-group">
                    <span className="field-label">Imagen de portada</span>
                    <input
                      type="url"
                      name="imageUrl"
                      value={formValues.imageUrl}
                      onChange={onChange}
                      className={getFieldClassName("imageUrl")}
                      placeholder="https://... o /archivo.webp"
                      aria-invalid={Boolean(fieldErrors.imageUrl)}
                      aria-describedby={fieldErrors.imageUrl ? "imageUrl-error" : undefined}
                    />
                    {fieldErrors.imageUrl && (
                      <span id="imageUrl-error" className="field-error">
                        {fieldErrors.imageUrl}
                      </span>
                    )}
                  </label>

                  <div className="grid gap-4 xl:grid-cols-2">
                    <label className="field-group">
                      <span className="field-label">Link a demo</span>
                      <input
                        type="url"
                        name="webLink"
                        value={formValues.webLink}
                        onChange={onChange}
                        className={getFieldClassName("webLink")}
                        placeholder="https://..."
                        aria-invalid={Boolean(fieldErrors.webLink)}
                        aria-describedby={fieldErrors.webLink ? "webLink-error" : undefined}
                      />
                      {fieldErrors.webLink && (
                        <span id="webLink-error" className="field-error">
                          {fieldErrors.webLink}
                        </span>
                      )}
                    </label>

                    <label className="field-group">
                      <span className="field-label">Repositorio</span>
                      <input
                        type="url"
                        name="githubLink"
                        value={formValues.githubLink}
                        onChange={onChange}
                        className={getFieldClassName("githubLink")}
                        placeholder="https://github.com/..."
                        aria-invalid={Boolean(fieldErrors.githubLink)}
                        aria-describedby={fieldErrors.githubLink ? "githubLink-error" : undefined}
                      />
                      {fieldErrors.githubLink && (
                        <span id="githubLink-error" className="field-error">
                          {fieldErrors.githubLink}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
              </section>

              <section className="admin-form-section">
                <div>
                  <p className="field-label">Stack y herramientas</p>
                  <p className="admin-section-copy">
                    Escribelas separadas por coma para mostrar los chips automaticamente.
                  </p>
                </div>

                <label className="field-group">
                  <span className="field-label">Tecnologias</span>
                  <input
                    type="text"
                    name="techsInput"
                    value={formValues.techsInput}
                    onChange={onChange}
                    className={getFieldClassName("techsInput")}
                    placeholder="React, Tailwind CSS, Firebase"
                    aria-invalid={Boolean(fieldErrors.techsInput)}
                    aria-describedby={fieldErrors.techsInput ? "techsInput-error" : undefined}
                  />
                  {fieldErrors.techsInput && (
                    <span id="techsInput-error" className="field-error">
                      {fieldErrors.techsInput}
                    </span>
                  )}
                </label>
              </section>
            </div>

            <div className="flex flex-col gap-6">
              <section className="admin-form-section">
                <div>
                  <p className="field-label">Vista previa</p>
                  <p className="admin-section-copy">
                    Una referencia rapida para validar tono, jerarquia y presencia visual antes de guardar.
                  </p>
                </div>

                <article className="admin-preview-card">
                  <div className="overflow-hidden rounded-[1.2rem] border border-[rgba(129,149,191,0.12)] bg-[rgba(7,12,24,0.92)]">
                    {formValues.imageUrl ? (
                      <img
                        src={formValues.imageUrl}
                        alt={formValues.title || "Vista previa del proyecto"}
                        className="h-48 w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-48 items-center justify-center text-sm text-[color:var(--muted)]">
                        La portada aparece aca
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="data-chip">{formValues.type === "sitioWeb" ? "Sitio web" : "Varios"}</span>
                    {formValues.year && <span className="data-chip">{formValues.year}</span>}
                    {!formValues.visible && <span className="data-chip">Oculto</span>}
                    {formValues.featured && <span className="data-chip">Destacado</span>}
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {formValues.title.trim() || "Nombre del proyecto"}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--muted-strong)]">{previewSummary}</p>
                  </div>

                  {previewTechs.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                      {previewTechs.map((tech) => (
                        <li key={tech} className="tag-chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </section>

              <section className="rounded-[1.25rem] border border-[rgba(129,149,191,0.12)] bg-[rgba(10,18,39,0.26)] p-4">
                <p className="field-label">Notas utiles</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--muted-strong)]">
                  <li>El resumen corto es lo primero que va a ayudarte a decidir si el proyecto esta bien presentado.</li>
                  <li>Usa posiciones como 10, 20 y 30 para poder insertar proyectos intermedios mas adelante.</li>
                  <li>Si la imagen vive en `public`, puedes usar rutas como `/mi-proyecto.webp`.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(129,149,191,0.1)] px-6 py-4">
          <div className="flex flex-wrap gap-3">
            <button type="submit" disabled={isSubmitting} className="primary-button disabled:opacity-60">
              {isSubmitting ? "Guardando..." : activeProjectId ? "Guardar cambios" : "Crear proyecto"}
            </button>
            <button type="button" onClick={onReset} className="secondary-button">
              Limpiar formulario
            </button>
          </div>
        </div>
      </form>
    </aside>
  )
}

AdminProjectForm.propTypes = {
  activeProjectId: PropTypes.string,
  fieldErrors: PropTypes.objectOf(PropTypes.string),
  formValues: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    featured: PropTypes.bool,
    visible: PropTypes.bool,
    order: PropTypes.string,
    shortDescriptionSpanish: PropTypes.string,
    shortDescriptionEnglish: PropTypes.string,
    descriptionSpanish: PropTypes.string,
    descriptionEnglish: PropTypes.string,
    techsInput: PropTypes.string,
    githubLink: PropTypes.string,
    webLink: PropTypes.string,
    imageUrl: PropTypes.string,
    isFinished: PropTypes.bool,
    year: PropTypes.string,
  }).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

AdminProjectForm.defaultProps = {
  activeProjectId: null,
  fieldErrors: {},
}

export default AdminProjectForm
