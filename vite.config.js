import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/fm_base_apparel_coming_soon/",
  plugins: [svelte()],
})
