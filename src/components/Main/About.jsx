import fede from '../../assets/Foto.jpeg'

function About() {

  return (
    <section id="about" className="about flex justify-center items-start gap-6 sm:ml-[82px]">
        <div className="about__text sm:w-3/6">
          <h3 className='about__text__title w-64 text-2xl '>Sobre mi</h3>
          <p className='about__text__description pt-6'>
            Soy un Licenciado en Comercio Exterior con experiencia en el sector del comercio internacional, pero actualmente estoy enfocado en mi nueva pasión: la programación. Comencé a estudiar programación como hobby y, en poco tiempo, me he convertido en un estudiante apasionado y dedicado en el aprendizaje de tecnologías de programación como <span>React JS</span>, <span>Next.JS</span>, <span>Tailwind CSS</span>, <span>Java</span>, entre otras. <br /><br />Actualmente estoy estudiando <span>Desarrollo Full Stack</span> en Egg que es parte del Argentina Programa 4.0 y además, estoy cursando el programa de <span>Desarrollo de Apps</span> en Coderhouse.<br /><br />Estoy <span>emocionado</span> por las oportunidades que se presentan en el campo de la programación y estoy <span>comprometido</span> a seguir aprendiendo y mejorando mis habilidades.
          </p>
        </div>
        <figure className="hidden sm:flex justify-center about__image w-2/6 lg:w-2/6">
          <img src={fede} alt="fede" className='about__image__img w-30 lg:w-64 h-30 lg:h-74'/>
        </figure>
    </section>
  )
}
export default About