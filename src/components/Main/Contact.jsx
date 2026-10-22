import { useTranslation } from "react-i18next"
import Icon from "../ui/Icon"
import { contact, contactLinks } from "../../data/contact"

function Contact() {
  const { t } = useTranslation()
  const description = t("contact.description", { returnObjects: true })
  const channels = t("contact.channels", { returnObjects: true })

  return (
    <section id="contact" className="section-shell scroll-mt-32">
      <div className="rounded-[2rem] border border-[rgba(129,149,191,0.12)] bg-[rgba(10,18,39,0.26)] px-8 py-10 sm:px-10 sm:py-12">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr,0.95fr] lg:items-start">
          <div className="flex min-w-0 flex-col gap-5">
            <span className="eyebrow self-start">{t("contact.subtitle")}</span>
            <h2 className="section-title">{t("contact.title")}</h2>

            <div className="flex flex-col gap-4 text-base leading-8 text-[color:var(--muted-strong)]">
              {Array.isArray(description) &&
                description.map((paragraph, index) => (
                  <p key={`contact-paragraph-${index}`}>{paragraph}</p>
                ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href={`mailto:${contact.email}`} className="primary-button">
                <Icon name="mail" className="h-4 w-4" />
                {t("contact.ctaEmail")}
              </a>
              {contact.resumeUrl && (
                <a
                  href={contact.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  <Icon name="file" className="h-4 w-4" />
                  {t("contact.ctaResume")}
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="data-chip">
                <Icon name="pin" className="h-4 w-4" />
                {t("contact.meta.location")}
              </span>
              <span className="data-chip">
                <Icon name="clock" className="h-4 w-4" />
                {t("contact.meta.availability")}
              </span>
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4">
            {Array.isArray(channels) &&
              channels.map((channel) => {
                const link = contactLinks.find((item) => item.id === channel.id)
                if (!link) return null

                return (
                  <a
                    key={channel.id}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex min-w-0 items-start justify-between gap-4 rounded-[1.5rem] border border-[rgba(129,149,191,0.12)] bg-[rgba(10,18,39,0.16)] px-5 py-5"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                        {channel.label}
                      </p>
                      <p className="mt-3 break-words font-display text-xl font-semibold text-white">
                        {channel.id === "email" ? contact.email : channel.title}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--muted-strong)]">
                        {channel.description}
                      </p>
                    </div>

                    <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[rgba(129,149,191,0.14)] bg-[rgba(10,18,39,0.16)] text-[color:var(--accent)] transition group-hover:border-[rgba(129,149,191,0.24)] sm:inline-flex">
                      <Icon name={channel.icon} className="h-5 w-5" />
                    </span>
                  </a>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
