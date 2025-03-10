import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  publicDir: 'public',
  build: {
    rollupOptions: {
      // 确保正确处理GSAP模块
      output: {
        // 改进的代码分割配置
        manualChunks: {
          'gsap': ['gsap']
        },
        // 确保生成正确的资源路径
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  }
})
