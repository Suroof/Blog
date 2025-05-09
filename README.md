# 🚀 3D个人博客网站

[![项目预览](https://github.com/user-attachments/assets/93dafe6f-cb7d-43ec-bb97-e2358e648c92)](https://sroof.netlify.app/)  
**技术标签**: React | Three.js | Vite | TailwindCSS  

## ✨ 项目概述
现代化的个人博客网站，融合Web技术和3D交互效果，提供沉浸式用户体验。展示个人作品、文章和资源的理想平台，具有以下特点：
- 美观的设计语言
- 独特的交互体验
- 优秀的性能优化

## 🎮 主要特性
| 特性                | 实现文件       | 描述                                                                 |
|---------------------|----------------|----------------------------------------------------------------------|
| 三维交互背景        | `index.jsx`    | Three.js实现的动态3D背景，随用户滚动变化                            |
| 现代化UI设计        | `Home.jsx`     | TailwindCSS + Framer Motion实现的响应式界面和流畅动画                |
| 内容分类系统        | `constants.js` | 包含工作/旅行/音乐/生活/技术/设计等多维度分类                        |
| 响应式布局          | `Home.jsx`     | 全设备适配的布局方案                                                 |
| 图片画廊            | `Home.jsx`     | 精美照片展示系统                                                     |
| 资源分享            | `Home.jsx`     | 工具和学习资源聚合中心                                               |

## 🛠️ 技术栈

- 前端框架: React 18
- 3D渲染: Three.js + React Three Fiber + React Three Drei
- 动画效果: Framer Motion 
- 样式方案: TailwindCSS
- 构建工具: Vite
- 路由管理: React Router

📦 快速开始
- 环境要求
 Node.js ≥14.0
 npm

🔍 项目结构
Blog/
├── src/                  # 源代码
│   ├── components/       # 复用组件
│   │   └── Background3D/ # 3D背景组件
│   ├── pages/            # 页面组件
│   │   ├── Home.jsx      # 首页
│   │   ├── About.jsx     # 关于页
│   │   └── Articles.jsx  # 文章列表
│   ├── utils/            # 工具函数
│   └── main.jsx          # 入口文件
├── public/               # 静态资源
└── config/               # 构建配置
➡️ 访问在线演示

安装步骤
```plaintext
# 克隆仓库
git clone https://github.com/Suroof/Blog.git
cd Blog

# 安装依赖
npm install

# 启动开发
npm run dev

# 生产构建
npm run build
