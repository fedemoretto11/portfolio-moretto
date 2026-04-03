import { useTranslation } from "react-i18next"
import Icon from "../ui/Icon"

function Works() {
  const { t } = useTranslation()
  const works = t("works.items", { returnObjects: true })

  return (
    <section id="works" className="section-shell scroll-mt-32">
      <div className="px-2 py-2 sm:px-0">
        <div className="flex flex-col gap-2">
          <span className="eyebrow self-start">{t("works.subtitle")}</span>
          <h2 className="section-title">{t("works.title")}</h2>
          <p className="section-copy">{t("works.description")}</p>
        </div>

        <div className="relative mt-10 flex flex-col gap-6 before:absolute before:bottom-0 before:left-[15px] before:top-2 before:hidden before:w-px before:bg-[linear-gradient(180deg,rgba(103,220,255,0.4),rgba(103,220,255,0))] md:before:block">
          {Array.isArray(works) &&
            works.map((work, index) => (
              <article
                key={`work-${index}-${work?.company}`}
                className="relative md:pl-12"
              >
                <span className="absolute left-0 top-8 hidden h-8 w-8 items-center justify-center rounded-full border border-[rgba(121,183,255,0.18)] bg-[rgba(9,15,31,0.94)] text-[color:var(--accent)] shadow-[0_0_0_6px_rgba(5,8,22,0.85)] md:inline-flex">
                  <Icon name="briefcase" className="h-4 w-4" />
                </span>

                <div className="flex flex-col gap-5 rounded-[1.75rem] border border-[rgba(129,149,191,0.12)] bg-[rgba(10,18,39,0.22)] p-6">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--accent)]">
                        {work?.company}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">{work?.role}</h3>
                    </div>

                    <span className="data-chip self-start">
                      <Icon name="calendar" className="h-4 w-4" />
                      {work?.period}
                    </span>
                  </div>

                  {work?.summary && (
                    <p className="max-w-3xl text-sm leading-7 text-[color:var(--muted-strong)]">
                      {work.summary}
                    </p>
                  )}

                  {Array.isArray(work?.achievements) && work.achievements.length > 0 && (
                    <div className="grid gap-3 lg:grid-cols-2">
                      {work.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={`work-${index}-achievement-${achievementIndex}`}
                          className="border-l border-[rgba(129,149,191,0.16)] pl-4 text-sm leading-7 text-[color:var(--muted-strong)]"
                        >
                          {achievement}
                        </div>
                      ))}
                    </div>
                  )}

                  {Array.isArray(work?.technologies) && work.technologies.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                      {work.technologies.map((tech, techIndex) => (
                        <li key={`work-${index}-tech-${techIndex}`} className="tag-chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Works
