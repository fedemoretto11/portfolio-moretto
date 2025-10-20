import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import ProjectsView from "./ProjectsView"
import Skills from "./Skills"
import Works from "./Works"
import 'bootstrap-icons/font/bootstrap-icons.css'

function Main() {
  return (
    <main className="flex w-full flex-col gap-16 pb-24 pt-10 sm:pt-16">
      <Hero />
      <About />
      <Works />
      <Skills />
      <ProjectsView />
      <Contact />
    </main>
  )
}

export default Main
