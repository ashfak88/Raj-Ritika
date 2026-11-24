import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sangeet: resolve(__dirname, 'sangeet/index.html'),
        sangeeth: resolve(__dirname, 'sangeeth/index.html'),
      },
    },
  },
})
