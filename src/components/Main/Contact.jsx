import { useTranslation } from "react-i18next"

function Contact() {
  const { t } = useTranslation()
  const description = t("contact.description", { returnObjects: true })

  return (
    <section id="contact" className="scroll-mt-32 px-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/70 px-8 py-12 text-center shadow-xl shadow-slate-950/40 backdrop-blur">
        <span className="text-sm uppercase tracking-[0.3em] text-sky-300">{t("contact.subtitle")}</span>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t("contact.title")}</h2>

        <div className="flex flex-col gap-4 text-base leading-relaxed text-slate-200">
          {Array.isArray(description) &&
            description.map((paragraph, index) => (
              <p key={`contact-paragraph-${index}`}>{paragraph}</p>
            ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:fedemoretto94@gmail.com"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-500/70 bg-emerald-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200 transition hover:border-emerald-400 hover:bg-emerald-400/20 sm:w-auto"
          >
            <i className="bi bi-envelope-paper-heart" aria-hidden="true" />
            {t("contact.ctaEmail")}
          </a>
          <a
            href="https://drive.google.com/file/d/1rs2PRMyinNfGShFtPOX_aWm_Y8SeCkH-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/80 sm:w-auto"
          >
            <i className="bi bi-file-earmark-arrow-down" aria-hidden="true" />
            {t("contact.ctaResume")}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
