export const projectTypes = ["sitioWeb", "varios"]

export const defaultProjectValues = {
  id: "",
  title: "",
  type: "sitioWeb",
  featured: false,
  visible: true,
  order: 0,
  imageUrl: "",
  shortDescriptionSpanish: "",
  shortDescriptionEnglish: "",
  descriptionSpanish: "",
  descriptionEnglish: "",
  techs: [],
  githubLink: "",
  webLink: "",
  isFinished: true,
  year: "",
}

const normalizeText = (value) => (typeof value === "string" ? value.trim() : "")

function clampCopy(value, maxLength = 180) {
  const normalized = normalizeText(value)

  if (!normalized || normalized.length <= maxLength) {
    return normalized
  }

  return `${normalized.slice(0, maxLength).trimEnd()}...`
}

export function slugifyProjectId(value) {
  return normalizeText(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function parseTechsInput(value) {
  if (Array.isArray(value)) {
    return value.map((item) => normalizeText(item)).filter(Boolean)
  }

  if (typeof value !== "string") {
    return []
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

export function techsToInput(techs) {
  return parseTechsInput(techs).join(", ")
}

export function normalizeProject(project = {}, index = 0) {
  const normalizedOrder = Number(project.order)
  const fallbackId = slugifyProjectId(project.id || project.title || `project-${index + 1}`)
  const descriptionSpanish = normalizeText(project.descriptionSpanish || project.description)
  const descriptionEnglish = normalizeText(project.descriptionEnglish || project.description || descriptionSpanish)
  const shortDescriptionSpanish = clampCopy(
    project.shortDescriptionSpanish ||
      project.summarySpanish ||
      project.shortDescription ||
      project.impact ||
      project.role ||
      descriptionSpanish,
  )
  const shortDescriptionEnglish = clampCopy(
    project.shortDescriptionEnglish ||
      project.summaryEnglish ||
      project.shortDescription ||
      descriptionEnglish ||
      shortDescriptionSpanish,
  )

  return {
    ...defaultProjectValues,
    ...project,
    id: fallbackId,
    title: normalizeText(project.title),
    type: projectTypes.includes(project.type) ? project.type : defaultProjectValues.type,
    featured: Boolean(project.featured),
    visible: project.visible !== false,
    order: Number.isFinite(normalizedOrder) ? normalizedOrder : index * 10,
    imageUrl: normalizeText(project.imageUrl || project.img),
    shortDescriptionSpanish,
    shortDescriptionEnglish,
    descriptionSpanish,
    descriptionEnglish,
    techs: parseTechsInput(project.techs),
    githubLink: normalizeText(project.githubLink),
    webLink: normalizeText(project.webLink),
    isFinished: project.isFinished !== false,
    year: normalizeText(project.year),
  }
}

export function sortProjects(projects = []) {
  return [...projects].sort((left, right) => {
    if (left.order !== right.order) {
      return left.order - right.order
    }

    if (left.featured !== right.featured) {
      return Number(right.featured) - Number(left.featured)
    }

    return left.title.localeCompare(right.title)
  })
}
