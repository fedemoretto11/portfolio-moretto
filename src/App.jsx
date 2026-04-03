import { Suspense, lazy, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainContainer from "./components/Main/MainContainer"

const AdminApp = lazy(() => import("./components/Admin/AdminApp"))

function matchesAdminRoute() {
  const { hash, pathname } = window.location

  return pathname === "/admin" || pathname.startsWith("/admin/") || hash === "#/admin" || hash.startsWith("#/admin/")
}

function App() {
  const { t, i18n } = useTranslation()
  const [isAdminRoute, setIsAdminRoute] = useState(() => matchesAdminRoute())

  useEffect(() => {
    const syncRoute = () => {
      setIsAdminRoute(matchesAdminRoute())
    }

    window.addEventListener("popstate", syncRoute)
    window.addEventListener("hashchange", syncRoute)

    return () => {
      window.removeEventListener("popstate", syncRoute)
      window.removeEventListener("hashchange", syncRoute)
    }
  }, [])

  useEffect(() => {
    if (isAdminRoute) {
      document.title = "Admin proyectos | Federico Moretto"
      document.documentElement.lang = "es"
      return
    }

    document.title = t("meta.title")

    const metaDescription = document.querySelector('meta[name="description"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')

    if (metaDescription) metaDescription.setAttribute("content", t("meta.description"))
    if (ogTitle) ogTitle.setAttribute("content", t("meta.ogTitle"))
    if (ogDescription) ogDescription.setAttribute("content", t("meta.ogDescription"))
    if (twitterTitle) twitterTitle.setAttribute("content", t("meta.ogTitle"))
    if (twitterDescription) twitterDescription.setAttribute("content", t("meta.ogDescription"))

    document.documentElement.lang = i18n.language
  }, [i18n.language, isAdminRoute, t])

  if (isAdminRoute) {
    return (
      <Suspense fallback={<main className="section-shell py-10 text-sm text-[color:var(--muted-strong)]">Cargando panel...</main>}>
        <AdminApp />
      </Suspense>
    )
  }

  return (
    <>
      <Header />
      <MainContainer />
      <Footer />
    </>
  )
}

export default App
