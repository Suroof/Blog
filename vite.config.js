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
    // 添加代码分割插件
    splitVendorChunkPlugin(),
    // 添加资源压缩插件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, // 大于10kb的文件才会被压缩
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // 也可以添加 Brotli 压缩
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  css: {
    postcss: true,
    // 优化CSS处理
    preprocessorOptions: {
      // 如果使用SCSS或LESS，可以在这里配置
    },
    // 启用CSS代码分割
    modules: {
      scopeBehaviour: 'local',
    },
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
  build: {
    // 启用构建缓存
    cache: true,
    // 使用esbuild进行最小化，它对eval更宽容
    minify: 'esbuild',
    // esbuild选项
    esbuildOptions: {
      target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
      legalComments: 'none',
    },
    // 启用CSS代码分割
    cssCodeSplit: true,
    // 配置代码分割策略
    rollupOptions: {
      output: {
        // 手动指定chunk拆分
        manualChunks: {
          // React相关库打包在一起
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Three.js相关库打包在一起
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          // 动画相关库打包在一起
          'animation-vendor': ['framer-motion', '@react-spring/web'],
        },
        // 资源文件命名规则
        assetFileNames: (assetInfo) => {
          // 特殊处理3D模型文件（.glb）
          if (assetInfo.name.endsWith('.glb')) {
            return 'assets/model/[name]-[hash][extname]'; // 添加hash值
          }
          // 根据文件类型分类存放
          const extType = {
            'png': 'img',
            'jpg': 'img',
            'jpeg': 'img',
            'gif': 'img',
            'svg': 'img',
            'webp': 'img',
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
    // 启用源码映射（可根据需要调整）
    sourcemap: false,
    // 设置chunk大小警告的限制
    chunkSizeWarningLimit: 1000, // 单位kb
    // 启用资源优化
    assetsInlineLimit: 4096, // 4kb以下的资源内联为base64
    // 启用预加载
    modulePreload: {
      polyfill: true,
    },
    // 输出目录
    outDir: 'dist',
    // 清空输出目录
    emptyOutDir: true,
  },
  // 开发服务器配置
  server: {
    // 启用HMR
    hmr: true,
    // 启用压缩
    compress: true,
  },
  // 预构建优化
  optimizeDeps: {
    // 强制预构建这些依赖
    include: ['react', 'react-dom', 'react-router-dom', 'three'],
    // 排除预构建的依赖
    exclude: [],
  },
  // esbuild配置
  esbuild: {
    legalComments: 'none',
    drop: ['debugger', 'console'],
  },
})
