



function Project({ project }) {
  return (
    <article className="project w-full flex flex-col justify-between items-center gap-2 p-3">

      <h3 className="project__title text-xl self-start">{project.title}</h3>
      <img src={`/${project.title}.webp`} alt={project.title} className="w-6/6 h-30" />
      <p className="project__description text-sm">{project.description}</p>
      <div className="project__links flex gap-8">
        <a href={project.webLink} target="_blank">
          <i className="project__links__icons bi bi-laptop text-3xl"></i>
        </a>
        <a href={project.githubLink} target="_blank">
          <i className="project__links__icons bi bi-github text-3xl"></i>
        </a>
      </div>


    </article>
  )
}
export default Project