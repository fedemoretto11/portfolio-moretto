import localProjects from "./projects.js"
import { normalizeProject, sortProjects } from "../lib/projectModel.js"

// Public content is bundled from Git, independently of Firebase.
export function preparePublicProjects(projects) {
  return sortProjects(projects.map((project, index) => normalizeProject(project, index)))
    .filter((project) => project.visible !== false)
}

export default preparePublicProjects(localProjects)
