import logo from "../../assets/federico_completo_icon.png"
import { useTranslation } from "react-i18next"
import Icon from "../ui/Icon"

function Hero() {
  const { t } = useTranslation()
  const proofPoints = t("hero.proofPoints", { returnObjects: true })
  const signalCards = t("hero.signalCards", { returnObjects: true })
  const stack = t("hero.stack", { returnObjects: true })

  return (
    <section id="hero" className="section-shell scroll-mt-32 pt-2 sm:pt-4">
      <div className="surface-panel px-8 py-10 sm:px-10 sm:py-12 lg:px-12">
        <div className="relative grid gap-10 lg:grid-cols-[1.35fr,0.8fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <span className="eyebrow self-start">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              {t("hero.tagline")}
            </span>

            <div className="flex flex-col gap-4">
              <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {t("hero.title")}
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted-strong)]">
                {t("hero.description")}
              </p>

              <p className="max-w-3xl text-base leading-7 text-[color:var(--muted)]">
                {t("hero.secondary")}
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {Array.isArray(proofPoints) &&
                proofPoints.map((item, index) => (
                  <li
                    key={`hero-proof-${index}`}
                    className="border-l border-[rgba(129,149,191,0.18)] pl-4 text-sm leading-7 text-[color:var(--muted-strong)]"
                  >
                    {item}
                  </li>
                ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href="#contact" className="primary-button">
                <Icon name="send" className="h-4 w-4" />
                {t("hero.ctaContact")}
              </a>

              <a href="#projects" className="secondary-button">
                <Icon name="grid" className="h-4 w-4" />
                {t("hero.ctaProjects")}
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {Array.isArray(stack) &&
                stack.map((item, index) => (
                  <span key={`hero-stack-${index}`} className="tag-chip">
                    {item}
                  </span>
                ))}
            </div>
          </div>

          <div className="border-t border-[rgba(129,149,191,0.12)] pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="flex items-start justify-between gap-5">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                  {t("hero.brandCard.eyebrow")}
                </p>
                <h2 className="font-display mt-3 text-2xl font-semibold text-white">
                  {t("hero.brandCard.title")}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-strong)]">
                  {t("hero.brandCard.description")}
                </p>
              </div>

              <img
                src={logo}
                alt="FM logo"
                className="h-16 w-16 rounded-2xl border border-[rgba(129,149,191,0.14)] bg-[rgba(10,18,39,0.38)] p-3"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="data-chip">
                <Icon name="building" className="h-4 w-4" />
                {t("hero.brandCard.badgeOne")}
              </span>
              <span className="data-chip">
                <Icon name="pin" className="h-4 w-4" />
                {t("hero.brandCard.badgeTwo")}
              </span>
            </div>

            <div className="mt-8 grid gap-5">
              {Array.isArray(signalCards) &&
                signalCards.map((card, index) => (
                  <article
                    key={`hero-signal-${index}`}
                    className="border-t border-[rgba(129,149,191,0.12)] pt-5 first:border-t-0 first:pt-0"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                      {card?.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold text-white">
                      {card?.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--muted-strong)]">
                      {card?.description}
                    </p>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
