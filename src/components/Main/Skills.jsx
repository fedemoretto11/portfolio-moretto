import { useTranslation } from "react-i18next"

function Skills() {
  const { t } = useTranslation()
  const groups = t("skills.groups", { returnObjects: true })
  const highlights = t("skills.highlights", { returnObjects: true })

  return (
    <section id="tech" className="px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-slate-800 bg-slate-900/50 px-8 py-12 shadow-xl shadow-slate-950/40 backdrop-blur">
        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase tracking-[0.3em] text-sky-300">{t("skills.subtitle")}</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t("skills.title")}</h2>
          <p className="max-w-3xl text-base text-slate-300">{t("skills.description")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {Array.isArray(groups) &&
            groups.map((group, index) => (
              <div
                key={`skills-group-${index}`}
                className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-inner shadow-slate-950/40"
              >
                <h3 className="text-lg font-semibold text-white">{group?.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {Array.isArray(group?.items) &&
                    group.items.map((item, itemIndex) => (
                      <li
                        key={`skills-${index}-${itemIndex}`}
                        className="rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-sky-200"
                      >
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {Array.isArray(highlights) &&
            highlights.map((highlight, index) => (
              <div
                key={`skills-highlight-${index}`}
                className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80 px-5 py-4 text-sm text-slate-200 shadow-inner shadow-slate-950/40"
              >
                {highlight}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
