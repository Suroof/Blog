import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'gsap': path.resolve(__dirname, 'node_modules/gsap/index.js')
    },
  },
  publicDir: 'public',
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          'gsap': ['gsap']
        }
      }
    }
  }
})
