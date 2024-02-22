function Skills() {
  return (
    <section id="tech" className="skills flex flex-col justify-center items-start gap-20 sm:ml-[82px]">
      <div className="skills__title flex justify-end w-full">
        <h3 className="skills__title__title text-2xl md:text-end w-64">Skills</h3>
      </div>


      <div className="skills__list flex flex-col md:flex-row gap-8 md:justify-between md:items-start w-full lg:px-[240px]">
        <div className="skills__list__techList frontend">
          <h4 className="text-xl">FrontEnd</h4>
          <p><span>=></span> HTML</p>
          <p><span>=></span> CSS</p>
          <p><span>=></span> JavaScript</p>
          <p><span>=></span> TypeScript</p>
          <p><span>=></span> Tailwind CSS</p>
          <p><span>=></span> React.JS</p>
          <p><span>=></span> Next.JS</p>
          <p><span>=></span> React Native</p>
        </div>
        <div className="skills__list__techList backend">
          <h4 className="text-xl">BackEnd</h4>
          <p><span>=></span> Java</p>
          <p><span>=></span> SpringBoot</p>
          <p><span>=></span> Python</p>
        </div>
        <div className="skills__list__techList other">
          <h4 className="text-xl">Other</h4>
          <p><span>=></span> MySQL</p>
          <p><span>=></span> FireStore</p>
          <p><span>=></span> Git</p>
          <p><span>=></span> GitHub</p>
        </div>
      </div>



    </section>
  )
}
export default Skills