import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import tailwindcssScrollbar from 'tailwindcss-scrollbar'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    tailwindcssScrollbar
  ],
  base: "/",
})