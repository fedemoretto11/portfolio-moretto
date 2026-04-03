import { useTranslation } from "react-i18next"
import Icon from "../ui/Icon"

function Skills() {
  const { t } = useTranslation()
  const groups = t("skills.groups", { returnObjects: true })
  const highlights = t("skills.highlights", { returnObjects: true })
  const icons = ["layers", "database", "people"]

  return (
    <section id="tech" className="section-shell scroll-mt-32">
      <div className="px-2 py-2 sm:px-0">
        <div className="flex flex-col gap-2">
          <span className="eyebrow self-start">{t("skills.subtitle")}</span>
          <h2 className="section-title">{t("skills.title")}</h2>
          <p className="section-copy">{t("skills.description")}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {Array.isArray(groups) &&
            groups.map((group, index) => (
              <div
                key={`skills-group-${index}`}
                className="rounded-[1.5rem] border border-[rgba(129,149,191,0.12)] bg-[rgba(10,18,39,0.18)] p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(47,124,255,0.14)] text-[color:var(--accent)]">
                  <Icon name={icons[index] || "stars"} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">{group?.title}</h3>
                {group?.description && (
                  <p className="text-sm leading-7 text-[color:var(--muted-strong)]">{group.description}</p>
                )}
                <ul className="flex flex-wrap gap-2">
                  {Array.isArray(group?.items) &&
                    group.items.map((item, itemIndex) => (
                      <li key={`skills-${index}-${itemIndex}`} className="tag-chip">
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {Array.isArray(highlights) &&
            highlights.map((highlight, index) => (
              <div
                key={`skills-highlight-${index}`}
                className="border-l border-[rgba(129,149,191,0.16)] pl-4 text-sm leading-7 text-[color:var(--muted-strong)]"
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
