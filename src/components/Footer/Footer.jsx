import { useTranslation } from "react-i18next"

function Footer() {

  const { t } = useTranslation()

  return (
    <div className="footer w-full flex flex-col justify-center items-center p-4">
      <p className="text-xs md:text-base text-center">{t('footer.develop')}</p>
      <p className="text-xs md:text-base text-center">Copyright &#169; - {new Date().getFullYear()} - {t('footer.rights')}</p>
    </div>
  )
}
export default Footer