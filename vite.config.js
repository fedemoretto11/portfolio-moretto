import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isPreview }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_")
  return {
    plugins: [react()],
    define: {
      __LEGACY_ADMIN_ENABLED__: JSON.stringify(command === "serve" && !isPreview && env.VITE_ENABLE_LEGACY_ADMIN === "true"),
    },
    server: { host: "127.0.0.1" },
    preview: { host: "127.0.0.1" },
  }
})
