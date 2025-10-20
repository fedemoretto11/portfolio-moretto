import { useTranslation } from "react-i18next"
import fede from "../../assets/Foto.jpeg"

function About() {
  const { t } = useTranslation()
  const description = t("about.description", { returnObjects: true })
  const highlights = t("about.highlights", { returnObjects: true })
  const focusAreas = t("about.focusAreas", { returnObjects: true })

  return (
    <section id="about" className="px-6">
      <div className="mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 px-8 py-12 shadow-xl shadow-slate-950/40 backdrop-blur lg:grid-cols-[3fr,2fr]">
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-sky-300">{t("about.subtitle")}</span>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{t("about.title")}</h2>
          </div>

          <div className="flex flex-col gap-4 text-base leading-relaxed text-slate-200">
            {Array.isArray(description) &&
              description.map((paragraph, index) => (
                <p key={`about-paragraph-${index}`}>{paragraph}</p>
              ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              {t("about.highlightsTitle")}
            </h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {Array.isArray(highlights) &&
                highlights.map((item, index) => (
                  <li
                    key={`about-highlight-${index}`}
                    className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm leading-relaxed text-slate-200"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                      <i className="bi bi-check2" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              {t("about.focusTitle")}
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {Array.isArray(focusAreas) &&
                focusAreas.map((area, index) => (
                  <div
                    key={`about-focus-${index}`}
                    className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80 px-4 py-4 text-sm text-slate-200 shadow-inner shadow-slate-950/40"
                  >
                    {area}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <figure className="relative flex items-center justify-center">
          <div className="absolute -top-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-12 right-0 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />
          <img
            src={fede}
            alt="Federico Moretto portrait"
            className="relative z-10 h-full max-h-96 w-full max-w-sm rounded-3xl border border-slate-700 object-cover shadow-xl shadow-slate-950/50"
          />
        </figure>
      </div>
    </section>
  )
}

export default About
