import assert from "node:assert/strict"
import fs from "node:fs"
import test from "node:test"
import localProjects from "../src/data/projects.js"
import publicProjects, { preparePublicProjects } from "../src/data/publicProjects.js"
import projectSeeds from "../src/data/projectSeeds.js"

const expectedIds = [
  "clubconnect", "nido", "moretto-srl", "corporacion-capital", "kilometros-app",
  "super-music-changuito", "alexpama", "to-do-list", "drum-kit", "calculadora",
]

test("the public catalogue preserves all ten approved projects in order", () => {
  assert.equal(new Set(localProjects.map((project) => project.id)).size, 10)
  assert.deepEqual(publicProjects.map((project) => project.id), expectedIds)
  for (const project of publicProjects) {
    const original = localProjects.find((item) => item.id === project.id)
    for (const field of ["featured", "visible", "order", "imageUrl"]) {
      assert.equal(project[field], original[field], `${project.id}: ${field}`)
    }
    assert.equal(project.isFinished, original.isFinished !== false)
  }
})

test("featured projects and archive filters retain their intended selection", () => {
  assert.deepEqual(publicProjects.filter((project) => project.featured).map((project) => project.id), expectedIds.slice(0, 3))
  const archive = publicProjects.filter((project) => !project.featured)
  assert.equal(archive.length, 7)
  assert.equal(archive.filter((project) => project.type === "sitioWeb").length, 3)
  assert.equal(archive.filter((project) => project.type === "varios").length, 4)
  assert.equal(publicProjects.find((project) => project.id === "clubconnect").isFinished, false)
  assert.equal(publicProjects.find((project) => project.id === "nido").isFinished, false)
})

test("public preparation excludes hidden entries, sorts and preserves input data", () => {
  const input = [
    { id: "later", order: 30, featured: true, isFinished: false },
    { id: "hidden", order: 0, visible: false, featured: true },
    { id: "first", order: 10 },
  ]
  const before = structuredClone(input)
  const result = preparePublicProjects(input)
  assert.deepEqual(result.map((project) => project.id), ["first", "later"])
  assert.equal(result[1].featured, true)
  assert.equal(result[1].isFinished, false)
  assert.deepEqual(input, before)
  assert.deepEqual(preparePublicProjects([]), [])
})

test("project content has both languages and valid local resources or public URLs", () => {
  for (const project of publicProjects) {
    for (const field of ["shortDescriptionSpanish", "shortDescriptionEnglish", "descriptionSpanish", "descriptionEnglish"]) {
      assert.ok(project[field].trim(), `${project.id}: ${field}`)
    }
    if (project.imageUrl.startsWith("/")) {
      assert.ok(fs.existsSync(new URL(`../public${project.imageUrl}`, import.meta.url)), project.id)
    }
    for (const field of ["githubLink", "webLink"]) {
      if (project[field]) assert.equal(new URL(project[field]).protocol, "https:")
    }
  }
  assert.equal(publicProjects.find((project) => project.id === "corporacion-capital").webLink, "")
})

test("legacy recovery selection has explicit IDs rather than all public featured entries", () => {
  assert.deepEqual(projectSeeds.map((project) => project.id), ["clubconnect", "nido", "moretto-srl"])
  assert.notEqual(projectSeeds[0], localProjects[0])
})

function shape(value) {
  if (Array.isArray(value)) return value.map(shape)
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, shape(value[key])]))
  }
  return typeof value
}

test("Spanish and English expose the same translation structure", () => {
  const read = (language) => JSON.parse(fs.readFileSync(new URL(`../src/components/dictionaries/${language}.json`, import.meta.url)))
  const es = read("es")
  const en = read("en")
  assert.deepEqual(shape(es), shape(en))
  assert.ok(es["header.navigation"])
  assert.ok(en["header.navigation"])
})
