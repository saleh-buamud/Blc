import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: "/blc/", // <-- هذا هو المفتاح المهم لإعداد GitHub Pages
  plugins: [vue()],
})
