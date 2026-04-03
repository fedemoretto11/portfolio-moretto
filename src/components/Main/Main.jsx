import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import ProjectsView from "./ProjectsView"
import Skills from "./Skills"
import Works from "./Works"

function Main() {
  return (
    <main className="flex w-full flex-col gap-12 pb-24 pt-6 sm:gap-16 sm:pt-10">
      <Hero />
      <Works />
      <ProjectsView />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}

export default Main
