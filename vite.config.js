import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  server: {
    headers: {
      'Cache-Control': 'no-store',
    },
  },
})