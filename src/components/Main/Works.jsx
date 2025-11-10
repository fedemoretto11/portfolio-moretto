import { useTranslation } from "react-i18next"

function Works() {
  const { t } = useTranslation()
  const works = t("works.items", { returnObjects: true })

  return (
    <section id="works" className="scroll-mt-32 px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-slate-800 bg-slate-900/50 px-8 py-12 shadow-xl shadow-slate-950/40 backdrop-blur">
        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase tracking-[0.3em] text-sky-300">{t("works.subtitle")}</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t("works.title")}</h2>
          <p className="max-w-3xl text-base text-slate-300">{t("works.description")}</p>
        </div>

        <div className="flex flex-col gap-6">
          {Array.isArray(works) &&
            works.map((work, index) => (
              <article
                key={`work-${index}-${work?.company}`}
                className="relative flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{work?.role}</h3>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{work?.company}</p>
                  </div>
                  <span className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                    {work?.period}
                  </span>
                </div>

                {work?.summary && <p className="text-sm leading-relaxed text-slate-200">{work.summary}</p>}

                {Array.isArray(work?.achievements) && work.achievements.length > 0 && (
                  <ul className="space-y-3 text-sm text-slate-200">
                    {work.achievements.map((achievement, achievementIndex) => (
                      <li key={`work-${index}-achievement-${achievementIndex}`} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                          <i className="bi bi-arrow-right" aria-hidden="true" />
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {Array.isArray(work?.technologies) && work.technologies.length > 0 && (
                  <ul className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, techIndex) => (
                      <li
                        key={`work-${index}-tech-${techIndex}`}
                        className="rounded-full border border-violet-500/60 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-violet-200"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Works
