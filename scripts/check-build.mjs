import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"

const dist = path.resolve(process.argv[2] || "dist")
const html = fs.readFileSync(path.join(dist, "index.html"), "utf8")
const assets = fs.readdirSync(path.join(dist, "assets"))
const scripts = assets.filter((file) => file.endsWith(".js"))
const code = scripts.map((file) => fs.readFileSync(path.join(dist, "assets", file), "utf8")).join("\n")

assert.match(html, /rel="canonical" href="https:\/\/federicomoretto\.com\.ar\/"/)
assert.match(html, /property="og:image" content="https:\/\/federicomoretto\.com\.ar\/social-preview\.png"/)
assert.match(fs.readFileSync(path.join(dist, "robots.txt"), "utf8"), /Sitemap: https:\/\/federicomoretto\.com\.ar\/sitemap.xml/)
assert.match(fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8"), /<loc>https:\/\/federicomoretto\.com\.ar\/<\/loc>/)
assert.ok(!assets.some((file) => /AdminApp|firebase/i.test(file)), "Production contains an admin/Firebase chunk")
assert.doesNotMatch(code, /VITE_FIREBASE_|GoogleAuthProvider|signInWithPopup|firestore\.googleapis\.com|Falta configurar Firebase/)
for (const title of ["ClubConnect", "Nido", "Distribuidora Moretto"]) assert.ok(code.includes(title), title)
for (const match of html.matchAll(/(?:src|href)="(\/[^"?#]+)"/g)) {
  assert.ok(fs.existsSync(path.join(dist, decodeURI(match[1]))), `Missing HTML resource: ${match[1]}`)
}
assert.ok(fs.statSync(path.join(dist, "federico_moretto_icon.png")).size < 20000)
assert.ok(fs.statSync(path.join(dist, "social-preview.png")).size < 100000)
const logo = assets.find((file) => file.startsWith("federico_completo_icon-") && file.endsWith(".webp"))
assert.ok(logo, "Optimized logo missing")
assert.ok(fs.statSync(path.join(dist, "assets", logo)).size < 100000)
console.log(`Production artifact OK: ${scripts.length} JS chunk(s), SEO/resources present, admin and Firebase excluded.`)
