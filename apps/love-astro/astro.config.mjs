// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import compressor from 'astro-compressor'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    compressor({
      brotli: true,
      gzip: false,
    }),
  ],
})
