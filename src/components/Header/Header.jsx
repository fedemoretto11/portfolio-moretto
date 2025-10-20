import logo from "../../assets/sith.png"
import { useState } from "react"
import { useTranslation } from "react-i18next"

function Header() {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { id: "home", label: t("header.home"), href: "#index" },
    { id: "about", label: t("header.about"), href: "#about" },
    { id: "tech", label: t("header.technology"), href: "#tech" },
    { id: "works", label: t("header.works"), href: "#works" },
    { id: "projects", label: t("header.projects"), href: "#projects" },
    { id: "contact", label: t("header.contact"), href: "#contact" },
  ]

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === "es" ? "en" : "es"
    i18n.changeLanguage(nextLanguage)
  }

  return (
    <header id="index" className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#index" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Federico Moretto logo"
            className="h-11 w-11 rounded-full border border-slate-800 bg-slate-900 object-cover"
          />
          <span className="hidden text-sm font-semibold uppercase tracking-[0.3em] text-slate-200 sm:inline">
            Federico Moretto
          </span>
        </a>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="hidden rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 hover:border-slate-500 hover:text-white sm:inline"
          >
            {t("changeLanguage")}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 hover:border-slate-500 sm:hidden"
            aria-label={isMenuOpen ? t("header.closeMenu") : t("header.openMenu")}
          >
            <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"} text-2xl`} aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        className={`mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 pb-6 transition-[max-height,opacity] duration-300 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pb-0 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 sm:max-h-full sm:opacity-100"
        }`}
      >
        <ul className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center rounded-full border border-transparent px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-900/60 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggleLanguage}
          className="inline rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-200 hover:border-slate-500 hover:text-white sm:hidden"
        >
          {t("changeLanguage")}
        </button>
      </nav>
    </header>
  )
}

export default Header
