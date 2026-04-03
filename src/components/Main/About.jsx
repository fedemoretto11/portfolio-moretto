import { useTranslation } from "react-i18next"
import fede from "../../assets/Foto-optimized.jpg"

function About() {
  const { t } = useTranslation()
  const description = t("about.description", { returnObjects: true })
  const highlights = t("about.highlights", { returnObjects: true })
  const focusAreas = t("about.focusAreas", { returnObjects: true })

  return (
    <section id="about" className="section-shell scroll-mt-32">
      <div className="px-2 py-2 sm:px-0">
        <div className="grid gap-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
          <div className="flex flex-col gap-4">
            <figure className="overflow-hidden rounded-[1.75rem] border border-[rgba(129,149,191,0.12)] bg-[rgba(10,18,39,0.3)] p-4">
              <img
                src={fede}
                alt="Federico Moretto portrait"
                width="720"
                height="1080"
                className="relative z-10 h-auto w-full rounded-[1.25rem] border border-[rgba(119,154,255,0.16)] object-cover"
              />
            </figure>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.4rem] border border-[rgba(129,149,191,0.12)] bg-[rgba(10,18,39,0.24)] px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                  {t("about.sideCards.currentRoleLabel")}
                </p>
                <p className="mt-3 font-display text-xl font-semibold text-white">
                  {t("about.sideCards.currentRoleTitle")}
                </p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted-strong)]">
                  {t("about.sideCards.currentRoleDescription")}
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-[rgba(129,149,191,0.12)] bg-[rgba(10,18,39,0.24)] px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                  {t("about.sideCards.approachLabel")}
                </p>
                <p className="mt-3 font-display text-xl font-semibold text-white">
                  {t("about.sideCards.approachTitle")}
                </p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted-strong)]">
                  {t("about.sideCards.approachDescription")}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="eyebrow self-start">{t("about.subtitle")}</span>
              <h2 className="section-title">{t("about.title")}</h2>
            </div>

            <div className="flex flex-col gap-4 text-base leading-8 text-[color:var(--muted-strong)]">
              {Array.isArray(description) &&
                description.map((paragraph, index) => (
                  <p key={`about-paragraph-${index}`}>{paragraph}</p>
                ))}
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
                {t("about.highlightsTitle")}
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {Array.isArray(highlights) &&
                  highlights.map((item, index) => (
                    <li
                      key={`about-highlight-${index}`}
                      className="border-l border-[rgba(129,149,191,0.16)] pl-4 text-sm leading-7 text-[color:var(--muted-strong)]"
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
                {t("about.focusTitle")}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {Array.isArray(focusAreas) &&
                  focusAreas.map((area, index) => (
                    <span key={`about-focus-${index}`} className="tag-chip">
                      {area}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
