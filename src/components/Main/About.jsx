import { useTranslation } from 'react-i18next'
import fede from '../../assets/Foto.jpeg'

function About() {

  const { t } = useTranslation()

  return (
    <section id="about" className="about flex justify-center items-start gap-6 sm:ml-[82px]">
        <div className="about__text sm:w-3/6">
          <h3 className='about__text__title w-64 text-2xl '>{t('about.title')}</h3>
          <p className='about__text__description pt-6' dangerouslySetInnerHTML={{ __html: t('about.description') }} />
        </div>
        <figure className="hidden sm:flex justify-center about__image w-2/6 lg:w-2/6">
          <img src={fede} alt="fede" className='about__image__img w-30 lg:w-64 h-30 lg:h-74'/>
        </figure>
    </section>
  )
}
export default About