import projects from "./projects.js"

// Legacy recovery reference only, not a remote backup or an active import.
// Initial loading is disabled in AdminApp until remote inventory and recovery are reviewed.
// Explicit IDs keep this reference independent of the public featured selection.
const seedProjectIds = new Set(["clubconnect", "nido", "moretto-srl"])
const projectSeeds = projects.filter((project) => seedProjectIds.has(project.id)).map((project) => ({ ...project }))

export default projectSeeds
