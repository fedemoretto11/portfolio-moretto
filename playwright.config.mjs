import { defineConfig } from "@playwright/test"

const firebaseOff = Object.fromEntries(["API_KEY", "AUTH_DOMAIN", "PROJECT_ID", "MESSAGING_SENDER_ID", "APP_ID"].map((key) => [`VITE_FIREBASE_${key}`, ""]))

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"], ["json", { outputFile: "test-results/results.json" }]],
  use: {
    baseURL: "http://127.0.0.1:4173",
    browserName: "chromium",
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
    locale: "es-AR",
    reducedMotion: "reduce",
    trace: "retain-on-failure",
  },
  webServer: [
    { command: `"${process.execPath}" node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4173 --strictPort`, url: "http://127.0.0.1:4173", reuseExistingServer: false },
    {
      command: `"${process.execPath}" node_modules/vite/bin/vite.js --host 127.0.0.1 --port 4174 --strictPort`,
      url: "http://127.0.0.1:4174",
      reuseExistingServer: false,
      env: { ...firebaseOff, VITE_ENABLE_LEGACY_ADMIN: "true" },
    },
  ],
})
