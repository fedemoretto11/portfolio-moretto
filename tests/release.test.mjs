import assert from "node:assert/strict"
import fs from "node:fs"
import test from "node:test"
import viteConfig from "../vite.config.js"

test("legacy administration requires explicit development opt-in and cannot enter builds or preview", () => {
  const previous = process.env.VITE_ENABLE_LEGACY_ADMIN
  try {
    process.env.VITE_ENABLE_LEGACY_ADMIN = "true"
    const enabled = (command, isPreview = false) => JSON.parse(viteConfig({ command, mode: "production", isPreview }).define.__LEGACY_ADMIN_ENABLED__)
    assert.equal(enabled("build"), false)
    assert.equal(enabled("serve", true), false)
    assert.equal(enabled("serve"), true)
    process.env.VITE_ENABLE_LEGACY_ADMIN = "false"
    assert.equal(enabled("serve"), false)
  } finally {
    if (previous === undefined) delete process.env.VITE_ENABLE_LEGACY_ADMIN
    else process.env.VITE_ENABLE_LEGACY_ADMIN = previous
  }
})

test("SPA delivery and crawler assets use the intended public domain", () => {
  const config = JSON.parse(fs.readFileSync(new URL("../vercel.json", import.meta.url)))
  assert.equal(config.framework, "vite")
  assert.equal(config.outputDirectory, "dist")
  assert.equal(config.installCommand, "npm ci")
  assert.deepEqual(config.rewrites, [{ source: "/(.*)", destination: "/index.html" }])
  const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8")
  assert.equal([...html.matchAll(/rel="canonical"/g)].length, 1)
  assert.match(html, /https:\/\/federicomoretto\.com\.ar\/social-preview\.png/)
  assert.match(fs.readFileSync(new URL("../public/robots.txt", import.meta.url), "utf8"), /Disallow: \/admin/)
})
