import logo from "../../assets/federico_completo_icon.png"
import { useTranslation } from "react-i18next"

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-[rgba(129,149,191,0.12)] bg-[rgba(6,10,22,0.84)] py-8">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Federico Moretto logo"
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
            <a href="mailto:fedemoretto94@gmail.com" className="hover:text-white">Email</a>
            <a
              href="https://www.linkedin.com/in/morettofede/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/fedemoretto11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} · {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
