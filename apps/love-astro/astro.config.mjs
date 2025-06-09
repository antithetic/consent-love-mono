// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import compressor from 'astro-compressor'
import showTailwindcssBreakpoint from 'astro-show-tailwindcss-breakpoint'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  compressHTML: false,

  integrations: [
    compressor({
      brotli: true,
      gzip: false,
    }),
    showTailwindcssBreakpoint(),
  ],
})
