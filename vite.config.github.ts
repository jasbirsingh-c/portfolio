import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/jasbirsingh-portfolio/', // Replace with your actual GitHub repository name
  build: {
    outDir: 'docs', // GitHub Pages can serve from docs folder
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@assets': path.resolve(__dirname, './client/src/assets'),
    },
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
  },
})