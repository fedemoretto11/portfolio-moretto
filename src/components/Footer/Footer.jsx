import { useTranslation } from "react-i18next"

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-xs text-slate-400 sm:flex-row sm:justify-between sm:text-sm">
        <p>
          {t("footer.develop")}
        </p>
        <p>
          © {new Date().getFullYear()} · {t("footer.rights")}
        </p>
      </div>
    </footer>
  )
}

export default Footer
