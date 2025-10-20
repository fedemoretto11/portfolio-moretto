import { useTranslation } from "react-i18next"

function Hero() {
  const { t } = useTranslation()
  const highlights = t("hero.highlights", { returnObjects: true })

  return (
    <section id="hero" className="px-6">
      <div className="mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 px-8 py-12 shadow-xl shadow-slate-950/40 backdrop-blur lg:grid-cols-[2fr,1fr]">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {t("hero.tagline")}
          </span>

          <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-200">
            {t("hero.description")}
          </p>

          <p className="max-w-2xl text-base text-slate-400">
            {t("hero.secondary")}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/70 bg-emerald-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200 transition hover:border-emerald-400 hover:bg-emerald-400/20"
            >
              <i className="bi bi-send-fill text-base" aria-hidden="true" />
              {t("hero.ctaContact")}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/80"
            >
              <i className="bi bi-grid-fill text-base" aria-hidden="true" />
              {t("hero.ctaProjects")}
            </a>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {Array.isArray(highlights) &&
            highlights.map((item, index) => (
              <li
                key={`hero-highlight-${index}`}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-5 shadow-inner shadow-slate-950/40"
              >
                <p className="text-3xl font-semibold text-white">{item?.value}</p>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item?.label}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
