import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainContainer from "./components/Main/MainContainer"

function App() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
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
  }, [i18n.language, t])

  return (
    <>
      <Header />
      <MainContainer />
      <Footer />
    </>
  )
}

export default App
