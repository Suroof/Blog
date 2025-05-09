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
    // 添加 Brotli 压缩
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  css: {
    // 使用项目根目录下的postcss.config.js
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
    // CSS最小化配置
    cssMinify: 'lightningcss', // 使用更现代的CSS压缩器，速度更快、压缩率更高
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
          // CSS和样式相关库单独打包
          'style-vendor': ['tailwindcss', 'autoprefixer', 'postcss'],
        },
        // 将CSS文件分离到独立文件夹
        assetFileNames: (assetInfo) => {
          // 特殊处理3D模型文件（.glb）
          if (assetInfo.name.endsWith('.glb')) {
            return 'assets/model/[name]-[hash][extname]'; // 添加hash值
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
    // 启用源码映射（可根据需要调整）
    sourcemap: false,
    // 设置chunk大小警告的限制
    chunkSizeWarningLimit: 1000, // 单位kb
    // 启用资源优化
    assetsInlineLimit: 4096, // 4kb以下的资源内联为base64
    // 启用预加载
    modulePreload: {
      polyfill: true,
      resolveDependencies: (filename, deps, { hostId, hostType }) => {
        // 为关键图像添加预加载
        const criticalAssets = ['/images/astronaut/astronaut.avif'];

        // 将关键资源添加到依赖列表中以确保预加载
        return [...deps, ...criticalAssets.filter(asset => !deps.includes(asset))];
      }
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
    // 启用HTTP/2
    http2: true,
    // 添加响应头来优化图像加载
    headers: {
      'Cache-Control': 'public, max-age=31536000', // 一年缓存
      'X-Content-Type-Options': 'nosniff',
      'Accept-CH': 'DPR, Width, Viewport-Width',
      'Accept-CH-Lifetime': '86400', // 24小时
    }
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
