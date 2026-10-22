import { test, expect } from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"

test.beforeEach(async ({ context }) => {
  await context.addInitScript(() => {
    try {
      if (!localStorage.getItem("portfolio-language")) localStorage.setItem("portfolio-language", "es")
    } catch { /* Deliberately blocked in the storage regression test. */ }
  })
  // No test may reach Firebase or other remote application services.
  await context.route("**/*", (route) => {
    const host = new URL(route.request().url()).hostname
    return ["127.0.0.1", "fonts.googleapis.com", "fonts.gstatic.com"].includes(host) ? route.continue() : route.abort()
  })
})

test("production catalogue, filters, metadata and all administrative URLs remain public-only", async ({ page }) => {
  const forbidden = []
  const errors = []
  page.on("request", (request) => {
    if (/firebase|firestore|identitytoolkit|securetoken|AdminApp/.test(request.url())) forbidden.push(request.url())
  })
  page.on("pageerror", (error) => errors.push(error.message))
  for (const url of ["/", "/admin", "/admin/projects", "/#/admin", "/#/admin/projects"]) {
    await page.goto(url)
    await expect(page.locator("#projects")).toHaveAttribute("data-project-source", "local")
    await expect(page.locator("#projects article")).toHaveCount(10)
    await expect(page.getByRole("heading", { name: "ClubConnect", exact: true })).toBeVisible()
    await expect(page.getByText("Falta configurar Firebase", { exact: true })).toHaveCount(0)
  }
  const projects = page.locator("#projects")
  await projects.getByRole("button", { name: "Web", exact: true }).click()
  await expect(projects.locator("article")).toHaveCount(6)
  await projects.getByRole("button", { name: "Apps y ejercicios", exact: true }).click()
  await expect(projects.locator("article")).toHaveCount(7)
  await projects.getByRole("button", { name: "Todos", exact: true }).click()
  await expect(projects.locator("article")).toHaveCount(10)
  for (const title of ["ClubConnect", "Nido", "Distribuidora Moretto"]) {
    await expect(projects.locator(".xl\\:grid-cols-3").first().getByRole("heading", { name: title, exact: true })).toBeVisible()
  }
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://federicomoretto.com.ar/")
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", "https://federicomoretto.com.ar/social-preview.png")
  await expect(page.locator('a[href*="drive.google.com"],a[href^="tel:"]')).toHaveCount(0)
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.getByRole("button", { name: "EN / ES", exact: true }).filter({ visible: true }).click()
  await expect(page.locator("html")).toHaveAttribute("lang", "en")
  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute("content", "en_US")
  await expect(page).toHaveTitle(/Integrations/)
  await page.reload()
  await expect(page.locator("html")).toHaveAttribute("lang", "en")
  for (const image of await page.locator("img").all()) await image.scrollIntoViewIfNeeded()
  await expect.poll(() => page.locator("img").evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0))).toBe(true)
  expect(errors).toEqual([])
  expect(forbidden).toEqual([])
})

for (const width of [360, 640, 800, 1024, 1440]) {
  test(`keyboard, responsive and automated accessibility at ${width}px in ES/EN`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 })
    await page.goto("/")
    await page.keyboard.press("Tab")
    await expect(page.locator(".skip-link")).toBeFocused()
    await page.keyboard.press("Enter")
    await expect(page.locator("#main-content")).toBeFocused()
    for (const language of ["es", "en"]) {
      if (width < 1024) {
        const open = language === "es" ? "Abrir menú" : "Open menu"
        const menu = page.getByRole("button", { name: open, exact: true })
        await expect(menu).toBeVisible()
        await expect(page.locator("#main-navigation")).toHaveCount(0)
        await menu.focus()
        await page.keyboard.press("Enter")
        await page.keyboard.press("Tab")
        await expect(page.locator('#main-navigation a[href="#works"]')).toBeFocused()
        await page.keyboard.press("Escape")
        await expect(menu).toBeFocused()
        await expect(page.locator("#main-navigation")).toHaveCount(0)
        await menu.click()
        await page.locator('#main-navigation a[href="#projects"]').click()
        await expect(page.locator("#projects")).toBeFocused()
        await expect(page.locator("#main-navigation")).toHaveCount(0)
      } else {
        await expect(page.locator('header nav a[href="#works"]')).toBeVisible()
        await page.locator('header nav a[href="#works"]').focus()
        await page.keyboard.press("Enter")
        await expect(page.locator("#works")).toBeFocused()
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true)
      const audit = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze()
      expect(audit.violations).toEqual([])
      if (language === "es") {
        if (width < 1024) await page.getByRole("button", { name: "Abrir menú", exact: true }).click()
        await page.getByRole("button", { name: "EN / ES", exact: true }).filter({ visible: true }).click()
        if (width < 1024) await page.keyboard.press("Escape")
      }
    }
  })
}

test("legacy administration is available only through explicit local development opt-in", async ({ page }) => {
  await page.goto("http://127.0.0.1:4174/#/admin")
  await expect(page.getByRole("heading", { name: "Falta configurar Firebase", exact: true })).toBeVisible()
  await expect(page.locator('[role="note"]')).toContainText("NO modifican el catalogo publico")
  await expect(page.getByRole("button", { name: /Cargar.*inicial/ })).toHaveCount(0)
})

test("language selection works with browser storage disabled", async ({ page, context }) => {
  await context.addInitScript(() => Object.defineProperty(window, "localStorage", { get() { throw new DOMException("Blocked", "SecurityError") } }))
  await page.goto("/")
  await expect(page.locator("#projects article")).toHaveCount(10)
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.getByRole("button", { name: "EN / ES", exact: true }).filter({ visible: true }).click()
  await expect(page.locator("html")).toHaveAttribute("lang", "en")
})
