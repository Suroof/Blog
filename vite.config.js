import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: true,
  },
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@blocks': path.resolve(__dirname, 'src/blocks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
  publicDir: 'public',
  build: { // 构建配置
    assetsInlineLimit: 4096, // 资源内联阈值（4KB）
    // 小于该大小的文件会转成base64格式内联到代码中，减少HTTP请求
    rollupOptions: { // Rollup打包配置
      output: {
        assetFileNames: (assetInfo) => { // 资源文件命名规则
          // 特殊处理3D模型文件（.glb）
          if (assetInfo.name.endsWith('.glb')) {
            return 'assets/model/[name][extname]'; // 模型文件单独存放
          }
          // 其他资源按类型分类：图片放assets/img，字体放assets/fonts等
          return 'assets/[ext]/[name][extname]';
        }
      }
    }
  }
})
