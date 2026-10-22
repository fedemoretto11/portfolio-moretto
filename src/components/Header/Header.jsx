import logo from "../../assets/federico_completo_icon.webp"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import Icon from "../ui/Icon"

function Header() {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)")
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMenuOpen(false)
    }
    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false)
      menuButtonRef.current?.focus()
    }
  }

  const handleNavClick = (event, hash) => {
    event.preventDefault()

    const targetElement = document.querySelector(hash)

    if (targetElement) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      targetElement.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth", block: "start" })
      targetElement.setAttribute("tabindex", "-1")
      targetElement.focus({ preventScroll: true })
      window.history.replaceState(null, "", hash)
    }

    setIsMenuOpen(false)
  }

  const navLinks = [
    { id: "works", label: t("header.works"), href: "#works" },
    { id: "projects", label: t("header.projects"), href: "#projects" },
    { id: "about", label: t("header.about"), href: "#about" },
    { id: "contact", label: t("header.contact"), href: "#contact" },
  ]

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === "es" ? "en" : "es"
    i18n.changeLanguage(nextLanguage)
  }

  return (
    <header
      id="index"
      onKeyDown={handleKeyDown}
      className="sticky top-0 z-50 border-b border-[rgba(129,149,191,0.12)] bg-[rgba(6,10,22,0.84)] backdrop-blur-xl"
    >
      <div className="section-shell flex items-center justify-between py-4">
        <a
          href="#hero"
          aria-label={t("header.home")}
          onClick={(event) => handleNavClick(event, "#hero")}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt=""
            width="48"
            height="48"
            className="h-12 w-12 rounded-2xl border border-[rgba(129,149,191,0.14)] bg-[rgba(10,18,39,0.56)] p-2"
          />
          <div className="hidden sm:block">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Federico Moretto
            </p>
            <p className="text-xs text-[color:var(--muted)]">{t("header.role")}</p>
          </div>
        </a>

        <nav aria-label={t("header.navigation")} className="hidden lg:flex lg:items-center lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="inline-flex items-center rounded-full border border-transparent px-4 py-2 text-sm font-medium text-[color:var(--muted-strong)] hover:border-[rgba(129,149,191,0.12)] hover:bg-[rgba(12,22,48,0.46)] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="hidden rounded-full border border-[rgba(129,149,191,0.14)] bg-[rgba(10,18,39,0.4)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-strong)] hover:border-[rgba(129,149,191,0.24)] hover:text-white lg:inline-flex"
          >
            {t("changeLanguage")}
          </button>

          <a
            href="#contact"
            onClick={(event) => handleNavClick(event, "#contact")}
            className="primary-button hidden lg:inline-flex"
          >
            <Icon name="send" className="h-4 w-4" />
            {t("header.cta")}
          </a>

          <button
            type="button"
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(129,149,191,0.16)] bg-[rgba(10,18,39,0.52)] text-[color:var(--muted-strong)] hover:border-[rgba(129,149,191,0.24)] lg:hidden"
            aria-label={isMenuOpen ? t("header.closeMenu") : t("header.openMenu")}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            <Icon name={isMenuOpen ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && <nav
        id="main-navigation"
        aria-label={t("header.navigation")}
        className="section-shell flex flex-col gap-4 pb-6 lg:hidden"
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="inline-flex items-center rounded-full border border-[rgba(129,149,191,0.1)] bg-[rgba(10,18,39,0.4)] px-4 py-3 text-sm font-medium text-[color:var(--muted-strong)] hover:border-[rgba(129,149,191,0.2)] hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center justify-center rounded-full border border-[rgba(129,149,191,0.14)] bg-[rgba(10,18,39,0.4)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-strong)] hover:border-[rgba(129,149,191,0.24)] hover:text-white"
          >
            {t("changeLanguage")}
          </button>
          <a
            href="#contact"
            onClick={(event) => handleNavClick(event, "#contact")}
            className="primary-button"
          >
            <Icon name="send" className="h-4 w-4" />
            {t("header.cta")}
          </a>
        </div>
      </nav>}
    </header>
  )
}

export default Header
