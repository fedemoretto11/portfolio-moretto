import '../../styles/style.scss'
import logo from '../../assets/sith.png'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'


function Header() {

  const { t, i18n } = useTranslation()

  const [isVisible, setIsVisible] = useState(false)
  const [active, setActive] = useState("inicio")
  
  
  const onSetActive = (linkName) => {
    setActive(linkName)
  }
  
  const [lang, setLang] = useState('en')

  const onChangeLanguage = () => {
    i18n.changeLanguage(lang)
    lang === 'es' ? setLang("en") : setLang("es")
  }


  // Revisar cuando el link pasa a active que no queda linea roja debajo sino que se reenderiza todo nuevamente a inicio

  return (
    <header id="index" className={`header h-[80px] px-[24px] flex flex-col sm:flex-row items-center justify-between`}>
      <div className='header__container w-full flex items-center justify-between'>
        <figure className="header__logo__container h-[80px] w-[40px] flex items-center">
          <a href=""><img src={logo} alt="Logo" /></a>
        </figure>
        <i onClick={() => {setIsVisible(!isVisible)}}  className="header__burguerMenu__icon flex sm:hidden bi bi-list text-4xl"></i>
      </div>
      <nav className={`header__nav ${isVisible ? "flex opacity-100" : "hidden opacity-0"} sm:opacity-100 sm:flex flex-col sm:flex-row gap-4 sm:gap-8`}>

        <a 
          href="#index" 
          onClick={() => {
            onSetActive("inicio")
          }} 
          className={`${active === "inicio" ? "header__nav__link--active" : "header__nav__link"} 
          w-fit`}
        >
          {t('header.home')}
        </a>

        <a 
          href="#about" 
          onClick={() => {
            onSetActive("sobreMi")
          }} 
          className={`${active === "sobreMi" ? "header__nav__link--active" : "header__nav__link"} 
          w-20 
          hover-underline-animation`}
        >
          {t('header.about')}
        </a>

        <a 
          href="#tech" 
          onClick={() => {
            onSetActive("tech")
          }} 
          className={`${active ==="tech" ? "header__nav__link--active" : "header__nav__link"} 
          w-fit 
          hover-underline-animation`}
        >
          {t('header.technology')}
        </a>

        <a 
          href="#projects" 
          onClick={() => {
            onSetActive("proyectos")
          }} 
          className={`${active === "proyectos" ? "header__nav__link--active" : "header__nav__link"} 
          w-fit 
          hover-underline-animation`}
        >
          {t('header.projects')}
        </a>

        <a 
          href="#contact" 
          onClick={() => {
            onSetActive("contacto")
          }} 
          className={`${active === "contacto" ? "header__nav__link--active" : "header__nav__link"} 
          w-fit 
          hover-underline-animation`}
        >
          {t('header.contact')}
        </a>

        <button 
          onClick={onChangeLanguage}
          className='hover-underline-animation'
        >
        {t('changeLanguage')}
        </button>
      </nav>
    </header>
  )
}
export default Header
