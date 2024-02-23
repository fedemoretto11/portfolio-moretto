import { useTranslation } from "react-i18next"

function Hero() {

  const { t } = useTranslation()

  return (
    <section className="hero flex flex-col justify-center items-center sm:ml-[82px]">
      <h3 className="hero__subtitle text-xl sm:text-2xl lg:text-3xl">Hello There!</h3>
      <h1 className="hero__title text-2xl sm:text-4xl lg:text-6xl">Federico Moretto</h1>
      <p className="hero__description sm:text-xl lg:text-xl sm:w-[461px] text-center">{t('hero.description')}</p>
    </section>
  )
}
export default Hero