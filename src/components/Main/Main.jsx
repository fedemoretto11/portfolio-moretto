import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import ProjectsView from "./ProjectsView"
import Skills from "./Skills"

function Main() {


  return (
    <main className="mainContainer flex flex-col w-screen">
      <Hero />
      <About />
      <Skills />
      <ProjectsView />
      <Contact />
    </main>
  )
}
export default Main