import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import viteCompression from 'vite-plugin-compression'
import { splitVendorChunkPlugin } from 'vite'

// 修复 __dirname 在 ESM 中的问题
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, 
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  css: {
    // 搭配postcss.config.js
    postcss: true,
    // 启用CSS代码分割和模块化
    modules: {
      scopeBehaviour: 'local',
    },
    // 开发环境启用CSS源码映射
    devSourcemap: true,
  },
  assetsInclude: ['**/*.glb', '**/*.webp'],
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
  build: {
    cache: true,
    minify: 'esbuild',
    esbuildOptions: {
      target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
      legalComments: 'none',
    },
    cssCodeSplit: true,
    cssMinify: 'lightningcss', 
    rollupOptions: {
      output: {
        manualChunks: {
          // React
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Three.js
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          // 动画相关库
          'animation-vendor': ['framer-motion', '@react-spring/web'],
          // CSS
          'style-vendor': ['tailwindcss', 'autoprefixer', 'postcss'],
        },
        assetFileNames: (assetInfo) => {
          // 特殊处理3D模型文件（.glb）
          if (assetInfo.name.endsWith('.glb')) {
            return 'assets/model/[name]-[hash][extname]'; 
          }
          // CSS文件放入css文件夹
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          // 图像文件的特殊处理
          if (/\.(png|jpe?g|webp|gif|svg|avif)$/.test(assetInfo.name)) {
            return 'assets/img/[name]-[hash][extname]';
          }
          // 根据文件类型分类存放
          const extType = {
            'woff': 'fonts',
            'woff2': 'fonts',
            'ttf': 'fonts',
            'eot': 'fonts',
            'mp3': 'media',
            'mp4': 'media',
          }[assetInfo.name.split('.').pop()] || 'other';

          return `assets/${extType}/[name]-[hash][extname]`;
        },
        // 入口chunk和动态导入模块的文件名
        chunkFileNames: 'assets/js/[name]-[hash].js',
        // 入口文件名
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    sourcemap: false,
    chunkSizeWarningLimit: 1000, // 单位kb
    assetsInlineLimit: 4096, // 4kb以下的资源内联为base64
    modulePreload: {
      polyfill: true,
      resolveDependencies: (filename, deps, { hostId, hostType }) => {
        const criticalAssets = ['/images/astronaut/astronaut.avif'];
        return [...deps, ...criticalAssets.filter(asset => !deps.includes(asset))];
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    hmr: true,
    compress: true,
    http2: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000', // 一年缓存
      'X-Content-Type-Options': 'nosniff',
      'Accept-CH': 'DPR, Width, Viewport-Width',
      'Accept-CH-Lifetime': '86400', // 24小时
    }
  },
  // 预构建优化
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'three'],
    exclude: [],
  },
  esbuild: {
    legalComments: 'none',
    drop: ['debugger', 'console'],
  },
})
