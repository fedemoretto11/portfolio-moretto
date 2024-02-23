import { useTranslation } from "react-i18next"

function Contact() {

  const { t } = useTranslation()

  return (
    <section id="contact" className="contact flex flex-col justify-center items-center gap-10 sm:ml-[82px]">
      <h2 className="contact__title text-4xl md:w-96 text-center">{t('contact.title')}</h2>
      <p className="contact__description w-3/6 text-center">
      {t('contact.firstDescription')}
<br /><br />  {t('contact.secondDescription')}
      </p>
      <div className="flex gap-12">
        <a className="contact__btn py-2 md:px-6 md:py-4 text-center text-xl w-24 md:w-36" href="mailto:fedemoretto94@gmail.com">E-MAIL</a>
        <a className="contact__btn py-2 md:px-6 md:py-4 text-center text-xl w-24 md:w-36" href="https://drive.google.com/file/d/1rs2PRMyinNfGShFtPOX_aWm_Y8SeCkH-/view?usp=sharing" target="_blank" download>CV</a>
      </div>
    </section>
  )
}
export default Contact