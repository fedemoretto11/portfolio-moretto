import logo from "../../assets/federico_completo_icon.webp"
import { useTranslation } from "react-i18next"
import { contactLinks } from "../../data/contact"

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-[rgba(129,149,191,0.12)] bg-[rgba(6,10,22,0.84)] py-8">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt=""
            width="44"
            height="44"
            className="h-11 w-11 rounded-2xl border border-[rgba(129,149,191,0.14)] bg-[rgba(10,18,39,0.38)] p-2"
          />
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-white">
              Federico Moretto
            </p>
            <p className="text-sm text-[color:var(--muted)]">{t("footer.develop")}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm text-[color:var(--muted)] sm:items-end">
          <div className="flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="hover:text-white"
              >
                {t(`contact.linkLabels.${link.id}`)}
              </a>
            ))}
          </div>
          <p>&copy; {new Date().getFullYear()} · {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
