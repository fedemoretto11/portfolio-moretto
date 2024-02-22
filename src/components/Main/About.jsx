import fede from '../../assets/Foto.jpeg'

function About() {

  return (
    <section id="about" className="about flex justify-center items-start gap-6 sm:ml-[82px]">
        <div className="about__text sm:w-3/6">
          <h3 className='about__text__title w-64 text-2xl '>Sobre mi</h3>
          <p className='about__text__description pt-6'>
          Soy Federico Moretto, un apasionado Desarrollador FrontEnd y estudiante de <span>Licenciatura en Informática</span>. Actualmente, me desempeño como desarrollador freelance y cuento con más de 3 años de experiencia en el comercio exterior, área en la que también obtuve una licenciatura.<br /><br />

          Con habilidades técnicas en <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, <span>TypeScript</span>y frameworks como <span>React.JS</span>, <span>Next.JS</span>, y <span>React Native</span>, me destaco como desarrollador web especializado en crear experiencias de usuario fluidas y atractivas. Además, poseo experiencia en el diseño responsivo y la optimización del rendimiento web.<br /><br />

          Mi enfoque en el desarrollo FrontEnd se complementa con conocimientos en <span>Java</span> y <span>Python</span> para desarrollo de backend, lo que me convierte en un candidato versátil capaz de trabajar en proyectos Full Stack.<br /><br />

          Soy una persona creativa y orientada a resultados, siempre buscando nuevas formas de resolver problemas y mejorar la eficiencia. Me destaco como jugador de equipo y disfruto colaborar con otros para alcanzar objetivos comunes.
          </p>
        </div>
        <figure className="hidden sm:flex justify-center about__image w-2/6 lg:w-2/6">
          <img src={fede} alt="fede" className='about__image__img w-30 lg:w-64 h-30 lg:h-74'/>
        </figure>
    </section>
  )
}
export default About