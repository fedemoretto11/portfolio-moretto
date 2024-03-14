import { Chip } from "@nextui-org/react"
import { useTranslation } from "react-i18next"
import { CHIPS } from "../const/chipData"



function Project({ project }) {

  const {i18n} = useTranslation()

  return (
    <article className={`project w-full flex flex-col justify-between items-center gap-2 p-3`}>
      {
        project.isFinished ? '' : 
        <h3
          className="en_proceso blur-none absolute text-5xl text-red-600 -rotate-45 translate-y-36 z-20"
        >
          {i18n.language == 'es' ? "En Proceso" : "In Progress"}
        </h3>
      
      }


      <h3 className={`project__title text-xl self-start ${project.isFinished ? '' : 'blur-sm'}`}>{project.title}</h3>
      <img src={`/${project.title}.webp`} alt={project.title} className={`w-6/6 h-30 ${project.isFinished ? '' : 'blur-sm'}`} />
      <p className={`project__description text-sm ${project.isFinished ? '' : 'blur-sm'}`}>{i18n.language == 'es' ? project.descriptionSpanish : project.descriptionEnglish}</p>
      <div className={`project__techs`}>
        {
          project.techs && 
          project.techs.map((tech, index) =>{
            const techStyles = CHIPS[tech];
            if (!techStyles) {
              console.error(`Estilos no encontrados para la tecnología ${tech}`);
              return null; 
            }

            return (
              <Chip
                key={index}
                variant="shadow"
                size="sm"
                classNames={{
                  base: `${techStyles.base} cursor-default`,
                  content: techStyles.content,
                }}
              >
                {tech}
              </Chip>
            )
          })
        }
      </div>
      <div className="project__links flex gap-8">
        {
          project.webLink && 
          <a href={project.webLink} aria-label="Go to Project WebSite" target="_blank">
            <i className="project__links__icons bi bi-laptop text-3xl"></i>
          </a>
        }
        {
          project.githubLink && 
          <a href={project.githubLink} aria-label="Go to Project Github Repo" target="_blank">
            <i className="project__links__icons bi bi-github text-3xl"></i>
          </a>
        }
      </div>


    </article>
  )
}
export default Project