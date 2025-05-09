  🚀 [3D个人博客网站](https://sroof.netlify.app/)
![image](https://github.com/user-attachments/assets/93dafe6f-cb7d-43ec-bb97-e2358e648c92)
React
Three.js
Vite
TailwindCSS

✨ 项目概述
一个现代化的个人博客网站，融合了最新的Web技术和3D交互效果，打造沉浸式用户体验。展示个人作品、文章和资源的理想平台。网站设计美观、交互独特，同时保持良好的性能和用户体验。 index.jsx

🎮 主要特性
三维交互背景：使用Three.js实现的动态3D背景，随着用户滚动而变化 index.jsx
现代化UI设计：采用TailwindCSS和Framer Motion实现的流畅动画和响应式界面 Home.jsx
内容分类系统：包含工作、旅行、音乐、生活、技术和设计等多种内容分类 constants.js
响应式布局：在各种设备上都能提供最佳的浏览体验 Home.jsx
图片画廊：展示精美照片收藏 Home.jsx
资源分享：分享有价值的工具和学习资源 Home.jsx

🛠️ 技术栈
前端框架：React 18 package.json
3D渲染：Three.js、React Three Fiber、React Three Drei package.json
动画效果：Framer Motion package.json
样式解决方案：TailwindCSS package.json
构建工具：Vite package.json
路由管理：React Router package.json

📦 快速开始
环境要求
Node.js 14.0+
npm 或 yarn
安装步骤
克隆项目仓库
git clone https://github.com/Suroof/Blog.git  
cd Blog
安装依赖
npm install  
启动开发服务器
npm run dev  
构建生产版本
npm run build  

🔍 项目结构
Blog/  
├── src/                  # 源代码目录  
│   ├── components/       # 可复用组件  
│   │   ├── Background3D/ # 3D背景组件  
│   │   └── ...  
│   ├── pages/            # 页面组件  
│   │   ├── Home.jsx      # 首页  
│   │   ├── About.jsx     # 关于页面  
│   │   ├── Articles.jsx  # 文章列表页面  
│   │   └── ...  
│   ├── utils/            # 工具函数和常量  
│   ├── App.jsx           # 应用主组件  
│   ├── index.css         # 全局样式  
│   └── main.jsx          # 应用入口点  
├── public/               # 静态资源  
├── index.html            # HTML模板  
├── package.json          # 项目依赖和脚本  
├── tailwind.config.js    # Tailwind配置  
├── postcss.config.js     # PostCSS配置  
└── vite.config.js        # Vite配置  



