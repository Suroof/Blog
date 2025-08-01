// 博客文章数据
export const BLOG_POSTS = [
  {
    id: 1,
    title: "学习Vue",
    slug: "learning-vue",
    date: "2024-01-20",
    author: "Sroof",
    authorAvatar: "/author.webp",
    categories: ["前端", "Vue", "JavaScript"],
    description: "布局，对接，依赖，响应式",
    content: [
      "作为现代前端开发框架，Vue.js以其简洁的API和灵活的生态系统而受到广泛欢迎。本文将分享我在学习Vue的过程中的一些心得与体会。",
      {
        type: "heading",
        content: "Vue的核心概念",
      },
      "Vue的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进DOM的系统。它的响应式系统使得状态管理变得简单而直观。",
      "使用Vue构建用户界面的关键步骤包括：",
      "1. 创建Vue实例\n2. 定义组件\n3. 使用指令操作DOM\n4. 管理组件状态",
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
        alt: "代码编辑器中的Vue代码",
        caption: "Vue组件结构示例",
      },
      {
        type: "heading",
        content: "响应式系统",
      },
      "Vue的响应式系统是其最强大的特性之一。当应用的状态发生变化时，视图会自动更新，这使得开发者可以专注于应用逻辑，而不必手动操作DOM。",
      "在Vue 3中，通过Composition API可以更好地组织和复用代码逻辑，这是对Vue 2中Options API的一个重要补充。",
      {
        type: "quote",
        content:
          "得益于渐进式的特性，Vue可以根据需求逐步集成到项目中，这使它成为初学者和专业开发者的理想选择。",
        author: "尤雨溪",
      },
      {
        type: "heading",
        content: "组件化开发",
      },
      "组件是Vue应用的基本构建块。通过将界面拆分为可复用的组件，可以大大提高开发效率和代码可维护性。",
      "Vue组件通常包含三个部分：模板(template)、脚本(script)和样式(style)。这种单文件组件的方式使得代码组织更加清晰。",
      "学习Vue的过程中，我发现最有效的方法是通过实战项目来巩固知识点。从简单的TODO应用开始，逐步过渡到更复杂的单页应用是一个不错的学习路径。",
    ],
    prevPost: {
      title: "学习React",
      slug: "learning-react",
    },
  },
  {
    id: 2,
    title: "Three.js",
    slug: "threejs-exploration",
    date: "2024-08-15",
    author: "Sroof",
    authorAvatar: "/author.webp",
    categories: ["前端", "3D", "WebGL"],
    description: "canvas,leva，建模",
    content: [
      "Three.js是一个强大的JavaScript 3D库，它使得在浏览器中创建复杂的3D场景变得简单。无论是游戏、数据可视化还是艺术创作，Three.js都提供了丰富的工具和API。",
      {
        type: "heading",
        content: "Three.js基础",
      },
      "使用Three.js创建3D场景通常需要几个基本元素：场景(Scene)、相机(Camera)、渲染器(Renderer)以及各种3D对象和光源。",
      "场景是所有3D对象的容器，相机决定了观察视角，而渲染器则负责将3D场景绘制到HTML Canvas元素上。",
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "3D渲染场景",
        caption: "使用Three.js创建的3D场景示例",
      },
      {
        type: "heading",
        content: "几何体与材质",
      },
      "Three.js提供了各种预定义的几何体（如立方体、球体、圆柱体等）和材质（如基础材质、Lambert材质、Phong材质等）。通过组合不同的几何体和材质，可以创建丰富多样的3D对象。",
      "除了使用预定义的几何体外，Three.js还支持导入外部3D模型，常见的格式包括GLTF、OBJ和FBX等。",
      {
        type: "quote",
        content:
          "网页3D图形正在成为主流，它不仅用于游戏，还广泛应用于产品展示、数据可视化和交互式体验。",
        author: "Ricardo Cabello (Mr.doob)",
      },
      {
        type: "heading",
        content: "动画与交互",
      },
      "在Three.js中创建动画通常是通过在渲染循环中更新对象的属性来实现的。使用requestAnimationFrame API可以确保动画流畅运行。",
      "对于复杂的动画，Three.js提供了动画系统和骨骼动画支持，可以导入和播放在3D建模软件中创建的动画。",
      "交互方面，可以使用鼠标事件和Raycaster来实现对3D对象的选择和交互。通过OrbitControls等控制器，可以轻松实现场景的平移、旋转和缩放。",
      "学习Three.js的过程充满挑战，但也非常有趣。从简单的几何体开始，逐步探索更复杂的功能，可以不断提升对3D图形编程的理解和技能。",
    ],
    prevPost: {
      title: "Vue2与Vue3对比学习",
      slug: "vue2-vs-vue3",
    },
    nextPost: {
      title: "学习Node.js",
      slug: "learning-nodejs",
    },
  },
  {
    id: 3,
    title: "斯多葛主义：改变你能改变的事物",
    slug: "stoicism-philosophy",
    date: "2024-06-20",
    author: "Sroof",
    authorAvatar: "/author.webp",
    categories: ["哲学", "随想"],
    description: "探讨斯多葛主义哲学及其在现代生活中的应用",
    content: [
      "如果你对自我提升和哲学（或者古罗马、希腊文化）稍有兴趣，你很可能听说过斯多葛主义。这一哲学主张通过改变我们能够改变的事物，同时不为那些超出我们控制的事情而烦恼，从而达到内心的平静。",
      {
        type: "quote",
        content:
          "上帝，请赐予我平静，去接受我无法改变的事物，\n赐予我勇气，去改变我能改变的事物，\n赐予我智慧，去分辨两者的区别。",
        author: "莱因霍尔德·尼布尔",
      },
      "(尼布尔并不真正以斯多葛主义者而闻名，但这句话很好地总结了这一思想。感谢我最喜欢的人告诉我这句名言)",
      {
        type: "image",
        src: "/leaves.webp",
        alt: "平静的自然风光",
        caption: "平静的自然景观，象征斯多葛主义的内心平和",
      },
      {
        type: "heading",
        content: "好的，明白了",
      },
      "但这个图表并不总是这样呈现。有时，有些事情我们确实有某种程度的控制权，但介入意味着侵入他人的权力范围。通常，这些是不属于你的工作，但你仍然会受到它们的影响。这可能是你的室友在厨房里到处留下面包屑。或者是开车跟在你后面的人没有保持安全距离。又或者是在你的超市队伍中有人没有戴口罩。不是你的工作，几乎不关你的事，但仍然令人烦恼或压力山大。",
      "所有这些都在重叠区域内：",
      {
        type: "heading",
        content: "那么，我应该怎么做？",
      },
      "有三种可能性：",
      "1. 介入，改变事情，面对后果\n2. 随它去，面对不作为的后果\n3. 惊慌，为此烦恼，半心半意地介入而不真正改变任何事情，也要面对后果",
      "显然，你想避免选项3。这一选项绝对不是斯多葛式的，对平静心灵毫无帮助。将决定限制在只有两个选项上，这使它成为一个全有或全无的决定。但这两个选项仍有一个共同点：",
      {
        type: "heading",
        content: "后果",
      },
      "列出一个（现实的！）清单，列出你（确实）能改变的事情以及你可以以何种方式影响结果。不要忘记社会后果，因为你很可能侵入了别人的控制范围。将这个清单与你不参与的预期结果进行比较。",
      {
        type: "heading",
        content: "但我仍然不确定...",
      },
      "好吧，既然列表也没帮助你，你不妨选择选项3。想想看，就连制作清单也让你的心绪参与其中，你不妨跟随这个思路，惊慌起来。或者真正参与进去，尽力实现你想要的结果。如果你还没有结束列表制作，想要一个硬性的是/否答案，你可以权衡后果，选择你认为更好的选项。",
      {
        type: "heading",
        content: "所以，反正就是惊慌？",
      },
      "如果你愿意，你总是可以选择惊慌。有太多可以惊慌的事情。但这一特定情况不必成为你需要惊慌的事情之一。所以，再回去想想后果。这次，关注它们会影响你多久以及多强烈。很可能，你不需要因为大学小组项目中一个你没有纠正的错别字而去另一个大陆办理假身份证。更不用说因为周围人的正常人类行为而惊慌了。生命短暂。你最好找到你的平静。并且保持它。",
    ],
    prevPost: {
      title: "学习Node.js",
      slug: "learning-nodejs",
    },
    nextPost: {
      slug: "learning-react",
      title: "学习React",
    },
  },
  {
    id: 4,
    title: "学习React",
    slug: "learning-react",
    date: "2024-6-15",
    author: "Sroof",
    authorAvatar: "/author.webp",
    categories: ["前端", "React", "JavaScript"],
    description: "组件化，响应式",
    content: [
      "React通过组件化构建UI的理念彻底改变了前端开发模式。通过将界面拆分为独立、可复用的组件，实现了代码的高内聚低耦合。实践中发现，合理的组件拆分（如容器组件/展示组件）能显著提升项目的可维护性。",
      {
        type: "heading",
        content: "React的核心概念",
      },
      "在深入学习React的过程中，最深刻的体会是它重新定义了构建用户界面的思维方式。组件化开发让复杂的UI像搭积木一样清晰可控，每个组件独立管理状态和逻辑的设计，既提升了复用性，又通过单向数据流规避了混乱的数据依赖。使用Vue构建用户界面的关键步骤包括：",
      {
        type: "image",
        src: "/react.webp",
        alt: "代码编辑器中的React代码",
        caption: "React不仅是一个UI库",
      },
      {
        type: "heading",
        content: "Hooks",
      },
      "从最初的类组件到如今主推的函数式组件，Hooks的引入堪称革命性突破",
      "用useState和useEffect处理状态与副作用，配合useMemo优化性能，不仅代码更简洁，还促使开发者更关注逻辑的纯粹性。",
      {
        type: "quote",
        content: "Life is 10% what happens to you and 90% how you react to it.",
        author: "~查尔斯·斯温多尔",
      },
      {
        type: "heading",
        content: "状态管理",
      },
      "如今面对复杂业务时，会优先考虑用Context+Reducer构建轻量级状态管理，搭配TypeScript强化类型约束",
      "而像虚拟列表渲染、动态代码分割这些性能优化手段，也成了项目中的常规操作。随着对Fiber架构和调度机制的理解加深，愈发感受到React在保持API简洁的同时，底层设计的前瞻性。",
      "未来计划深入探索服务端组件和编译器优化等新方向，毕竟在这个前端技术快速迭代的时代，唯有持续理解框架的设计哲学，才能让技术真正服务于业务价值。",
    ],
    nextPost: {
      title: "学习Vue",
      slug: "learning-vue",
    },
  },
  {
    id: 5,
    title: "学习Tailwind",
    slug: "learning-tailwind",
    date: "2024-12-03",
    author: "Sroof",
    authorAvatar: "/author.webp",
    categories: ["CSS", "Tailwind"],
    description: "原子化CSS，响应式设计，主题定制",
    content: [
      "Tailwind CSS 是一个革命性的实用优先（utility-first）CSS框架，它通过提供大量预定义的原子类来简化样式开发。这种方法不仅提高了开发效率，还确保了样式的一致性和可维护性。",
      {
        type: "heading",
        content: "原子化CSS的优势",
      },
      "Tailwind的原子化设计理念彻底改变了传统CSS开发方式。每个类都代表一个特定的样式属性，这使得我们可以直接在HTML中组合样式，而无需编写自定义CSS。这种方法的优势包括：\n1. 减少了CSS文件的大小\n2. 提高了样式的复用性\n3. 降低了命名的心智负担\n4. 加快了开发速度",
      {
        type: "image",
        src: "https://pic1.imgdb.cn/item/6817321058cb8da5c8db5e37.jpg",
        alt: "Tailwind CSS示例代码",
        caption: "使用Tailwind CSS构建现代化界面",
      },
      {
        type: "heading",
        content: "响应式设计",
      },
      "Tailwind提供了直观的响应式设计方案，通过简单的前缀（如sm:、md:、lg:）就能实现不同屏幕尺寸下的样式适配。这种方式使得构建响应式界面变得异常简单和灵活。",
      '响应式设计示例：\nclass="text-sm md:text-base lg:text-lg"\n这行代码实现了文本在不同屏幕尺寸下的大小自动调整。',
      {
        type: "quote",
        content:
          "不要让CSS成为你开发的瓶颈，让Tailwind帮你构建快速、灵活、可维护的用户界面。",
        author: "Adam Wathan - Tailwind CSS创始人",
      },
      {
        type: "heading",
        content: "主题定制与深色模式",
      },
      "Tailwind的配置系统非常强大，通过tailwind.config.js文件，我们可以自定义颜色、间距、断点等各种设计标准。这种集中式的配置确保了整个项目的设计一致性。",
      '深色模式支持也是Tailwind的一大特色，通过dark:前缀，我们可以轻松实现暗色主题的样式切换：\nclass="bg-white dark:bg-gray-800 text-black dark:text-white"',
      "在实际项目中，Tailwind的JIT（即时编译）模式大大提升了开发体验，按需生成的CSS确保了最终打包文件的最小化。结合现代化的构建工具，Tailwind已经成为前端开发不可或缺的工具之一。",
    ],
    prevPost: {
      title: "Vite优化策略",
      slug: "vite-optimization",
    },
    nextPost: {
      slug: "vue2-vs-vue3",
      title: "Vue2与Vue3对比学习",
    },
  },
  {
    id: 6,
    title: "学习Node.js",
    slug: "learning-nodejs",
    date: "2024-8-11",
    author: "Sroof",
    authorAvatar: "/author.webp",
    categories: ["后端", "Node.js", "JavaScript"],
    description: "异步编程，事件驱动，服务端开发",
    content: [
      "Node.js是一个基于Chrome V8引擎的JavaScript运行时环境，它让JavaScript突破了浏览器的限制，能够在服务器端运行。它的非阻塞I/O和事件驱动特性使其成为构建高性能、可扩展应用的理想选择。",
      {
        type: "heading",
        content: "异步编程模型",
      },
      "Node.js的异步编程模型是其最显著的特性之一。通过回调函数、Promise和async/await，我们可以高效处理并发操作：\n1. 避免阻塞主线程\n2. 提高I/O操作效率\n3. 更好地处理并发请求\n4. 优化资源利用",
      {
        type: "image",
        src: "https://pic1.imgdb.cn/item/6817324158cb8da5c8db5f2d.jpg",
        alt: "Node.js",
        caption: "Node.js",
      },
      {
        type: "heading",
        content: "事件驱动架构",
      },
      "Node.js采用事件驱动架构，通过EventEmitter类实现事件的发布订阅模式。这种模式使得代码更加模块化，并能更好地处理复杂的异步流程。",
      "事件驱动示例：\nconst eventEmitter = new EventEmitter();\neventEmitter.on('data', (data) => {\n  console.log('收到数据:', data);\n});\neventEmitter.emit('data', '这是一些数据');",
      {
        type: "quote",
        content:
          "Node.js改变了我们构建服务器应用的方式，它让JavaScript成为了一个全栈解决方案。",
        author: "Ryan Dahl - Node.js创始人",
      },
      {
        type: "heading",
        content: "模块化与包管理",
      },
      "Node.js的模块系统采用CommonJS规范，通过require和module.exports实现模块的导入导出。而npm（Node Package Manager）则提供了强大的包管理功能，使得代码复用和依赖管理变得简单高效。",
      "模块化编程示例：\nconst express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Hello, Node.js!');\n});",
      "在实践中，Node.js生态系统的丰富性使其成为了全栈开发的理想选择。从Web服务器（Express/Koa）到实时应用（Socket.IO），从API开发到微服务架构，Node.js都能胜任。结合现代化的开发工具和框架，它已经成为后端开发不可或缺的技术栈之一。",
    ],
    prevPost: {
      title: "Three.js",
      slug: "threejs-exploration",
    },
    nextPost: {
      title: "斯多葛主义：改变你能改变的事物",
      slug: "stoicism-philosophy",
    },
  },
  {
    id: 7,
    title: "Vue2与Vue3对比学习",
    slug: "vue2-vs-vue3",
    date: "2024-11-25",
    author: "Sroof",
    authorAvatar: "/author.webp",
    categories: ["前端", "Vue", "JavaScript"],
    description: "选项式API vs 组合式API，性能优化，新特性解析",
    content: [
      "Vue3作为Vue框架的重大升级版本，在保持Vue2优秀特性的同时，引入了许多革命性的改进。本文将对比两个版本的主要区别，帮助开发者更好地理解和选择适合的版本。",
      {
        type: "heading",
        content: "核心架构的演进",
      },
      "Vue3相比Vue2有以下重大改进：\n1. 重写响应式系统，使用Proxy替代Object.defineProperty\n2. 优化虚拟DOM，提供更好的性能\n3. 改进TypeScript支持\n4. 新的组合式API，提供更灵活的逻辑组织方式",
      {
        type: "image",
        src: "https://pic1.imgdb.cn/item/6817304b58cb8da5c8db5208.jpg",
        alt: "html代码",
        caption: "html代码",
      },
      {
        type: "heading",
        content: "API风格的转变",
      },
      "Vue2主要使用选项式API（Options API），通过data、methods、computed等选项组织代码。而Vue3引入的组合式API（Composition API）则提供了更灵活的逻辑复用方式。",
      "代码对比示例：\n// Vue2 选项式API\nexport default {\n  data() {\n    return { count: 0 }\n  },\n  methods: {\n    increment() {\n      this.count++\n    }\n  }\n}\n\n// Vue3 组合式API\nimport { ref } from 'vue'\nexport default {\n  setup() {\n    const count = ref(0)\n    const increment = () => count.value++\n    return { count, increment }\n  }\n}",
      {
        type: "quote",
        content:
          "组合式API让我们可以基于逻辑关注点组织代码，这在大型项目中特别有用。",
        author: "尤雨溪 - Vue.js创始人",
      },
      {
        type: "heading",
        content: "性能与开发体验",
      },
      "Vue3在性能方面带来了显著提升：更小的打包体积、更快的渲染速度、更好的树摇优化。同时，新的开发工具如vite提供了极速的开发体验。",
      "迁移策略示例：\n// 渐进式迁移\n// 1. 在Vue2项目中使用组合式API\nimport { defineComponent } from '@vue/composition-api'\nexport default defineComponent({\n  setup() {\n    // 组合式API代码\n  }\n})",
      "选择合适的版本需要考虑项目规模、团队熟悉度、性能需求等因素。对于新项目，Vue3是更好的选择；而对于现有Vue2项目，可以采用渐进式迁移策略，逐步引入Vue3的新特性。Vue3的生态系统日趋完善，主流库都提供了对应的支持版本。",
    ],
    prevPost: {
      title: "学习Tailwind",
      slug: "learning-tailwind",
    },
    nextPost: {
      title: "Three.js",
      slug: "threejs-exploration",
    },
  },
  {
    id: 8,
    title: "Webpack优化策略",
    slug: "webpack-optimization",
    date: "2025-03-18",
    author: "Sroof",
    authorAvatar: "/author.webp",
    categories: ["前端", "Webpack", "性能优化"],
    description: "Webpack构建优化，资源压缩，代码分割，缓存策略",
    content: [
      "Webpack作为现代前端工程化的核心工具，性能优化是提升项目质量和开发体验的关键。本文将全面讲解Webpack的优化策略，从构建效率到产物质量，助你打造高性能的前端应用。",
      {
        type: "heading",
        content: "构建效率优化：加速打包进程",
      },
      "精准加载范围\n\n- 缩小Loader作用域：通过include/exclude精准匹配文件，避免无意义遍历。\n```javascript\nmodule: {\n  rules: [{\n    test: /\\.js$/,\n    exclude: /node_modules/,\n    use: ['babel-loader']\n  }]\n}\n```\n\n- 缓存为王：利用`cache-loader`或Webpack5内置缓存机制，避免重复编译。\n```javascript\nmodule.exports = {\n  cache: {\n    type: 'filesystem', // Webpack5+ 持久化缓存\n  },\n};\n```",
      {
        type: "heading",
        content: "构建时间优化",
      },
      "将缓存和多进程打包都放在费时间的loader前面，比如babel-loader：\n```javascript\nnpm i thread-loader -D\nnpm i cache-loader -D\n```\n\n```javascript\n// webpack.base.js\n{\n  test: /\\.js$/,\n  use: [\n    'cache-loader',\n    'thread-loader',\n    'babel-loader'\n  ],\n}\n```",
      {
        type: "heading",
        content: "产物质量优化：精简输出体积",
      },
      "代码分离（Code Splitting）\n\n-动态导入：使用ES6语法按需加载模块\n```javascript\n// React示例\nconst LazyComponent = React.lazy(() => import('./LazyComponent'));\n// Vue示例\nconst AsyncComp = defineAsyncComponent(() => import('./AsyncComp.vue'));\n```\n\n- SplitChunks智能分包：配置拆包策略，提取公共模块与第三方库。\n```javascript\noptimization: {\n  splitChunks: {\n    chunks: 'all',\n    cacheGroups: {\n      vendors: {\n        test: /[\\\\/]node_modules[\\\\/]/,\n        name: 'vendors',\n        chunks: 'all',\n      },\n    },\n  },\n}\n```",
      {
        type: "image",
        src: "https://pic1.imgdb.cn/item/68200b8858cb8da5c8eb9b2f.png",
        alt: "Webpack示意图",
        caption: "Webpack",
      },
      {
        type: "heading",
        content: "资源压缩",
      },
      "-JS压缩：TerserPlugin默认集成，可定制压缩策略。\n```javascript\noptimization: {\n  minimize: true,\n  minimizer: [\n    new TerserPlugin({\n      parallel: true, // 多进程压缩\n      terserOptions: {\n        compress: { drop_console: true }, // 移除console\n      },\n    }),\n  ],\n}\n```\n\n- CSS压缩：`css-minimizer-webpack-plugin`搭配cssnano优化。\n```javascript\nconst CssMinimizerPlugin = require('css-minimizer-webpack-plugin');\n\noptimization: {\n  minimizer: [new CssMinimizerPlugin()],\n}\n```",
      {
        type: "heading",
        content: "高级优化技巧",
      },
      "Tree Shaking深度清理\n\n-JS Tree Shaking：确保ES Module语法，配置`sideEffects`标记副作用。\n  * usedExports：通过标记某些函数是否被使用，之后通过Terser来进行优化\n  * sideEffects：跳过整个模块/文件，直接查看该文件是否有副作用\n\n- CSS Tree Shaking：PurgeCSS移除未使用样式，适用于组件库项目。",
      {
        type: "heading",
        content: "缓存策略优化",
      },
      "哈希指纹：根据内容使用contenthash命名，最大化利用浏览器缓存。\n```javascript\noutput: {\n   filename: 'js/[name].[contenthash:8].js',    // 主入口文件\n   chunkFilename: 'js/[name].[chunkhash:8].js'  // 异步块\n},\n```\n\n分离第三方依赖（Vendor Bundle）：通过 `SplitChunksPlugin` 将 `node_modules` 代码独立打包，避免业务代码更新导致公共库缓存失效。",
      {
        type: "quote",
        content:
          "每一次构建优化，都是用户体验的提升。不要等到项目变慢了才考虑优化，优化应该成为开发流程中的一部分。",
        author: "FoolBuddy",
      },
      {
        type: "heading",
        content: "Webpack文件压缩：优化性能",
      },
      "GZIP压缩：基于DEFLATE算法（LZ77 + 哈夫曼编码），能将文本文件压缩至原大小的40%。全平台支持，配置简单：\n```javascript\nconst CompressionPlugin = require('compression-webpack-plugin');\n\nmodule.exports = {\n  plugins: [\n    new CompressionPlugin()\n  ]\n};\n```\n\nBrotli压缩：由Google开发，比GZIP高10-25%的压缩率，需HTTPS支持：\n```javascript\nconst CompressionPlugin = require('compression-webpack-plugin');\n\nmodule.exports = {\n  plugins: [\n    new CompressionPlugin({\n      filename: '[path][base].br',\n      algorithm: 'brotliCompress',\n      test: /\\.(js|css|html|svg)$/,\n      threshold: 10240,\n      minRatio: 0.8\n    })\n  ]\n};\n```",
      "Webpack优化是一个系统工程，需根据项目特性灵活组合策略。记住两个核心原则：构建阶段减少计算量并善用缓存与并行；产物阶段实现按需加载、极致压缩及合理缓存。掌握这些优化技巧，将显著提升项目性能和开发体验。",
    ],
    prevPost: {
      title: "Vue2与Vue3对比学习",
      slug: "vue2-vs-vue3",
    },
    nextPost: {
      title: "Vite优化策略",
      slug: "vite-optimization",
    },
  },
  {
    id: 9,
    title: "Vite优化策略",
    slug: "vite-optimization",
    date: "2025-02-10",
    author: "Sroof",
    authorAvatar: "/author.webp",
    categories: ["前端", "Vite", "性能优化"],
    description: "Vite构建优化，按需加载，预编译，路由懒加载",
    content: [
      "Vite作为新一代的前端构建工具，以其极速的开发体验和优化的生产构建而闻名。本文将深入探讨Vite的各种优化策略，帮助你在享受极速开发体验的同时，构建出高性能的现代化前端应用。",
      {
        type: "heading",
        content: "Vite的核心优势",
      },
      "Vite基于ESM（ES模块）实现了开发环境的无打包（No-Bundle）策略，这带来了以下核心优势：\n\n1. 快速的冷启动：不需要先打包整个应用\n2. 即时的模块热更新（HMR）：只需精确地重新编译修改的文件\n3. 按需编译：只编译浏览器当前请求的模块",
      {
        type: "image",
        src: "https://pic1.imgdb.cn/item/68200bd758cb8da5c8eb9b48.png",
        alt: "Vite",
        caption: "Vite",
      },
      {
        type: "heading",
        content: "开发环境优化",
      },
      "依赖预构建优化\n\nVite使用esbuild预构建依赖，可通过以下配置优化：\n\n```javascript\n// vite.config.js\nexport default {\n  optimizeDeps: {\n    // 强制预构建的依赖\n    include: ['lodash-es', 'vue'],\n    // 不进行预构建的依赖\n    exclude: ['large-module-not-used-immediately']\n  }\n}\n```\n\n缓存优化\n\nVite的缓存机制可以进一步优化：\n\n```javascript\nexport default {\n  cacheDir: '.vite-cache', // 自定义缓存目录\n  server: {\n    fs: {\n      // 限制哪些文件可以通过服务器访问\n      strict: true,\n      allow: ['.']\n    }\n  }\n}\n```",
      {
        type: "quote",
        content:
          "Vite不仅仅是一个构建工具，它重新定义了前端开发的体验和流程，让开发者能够更专注于创造而非等待。",
        author: "Evan You - Vue.js和Vite创始人",
      },
      {
        type: "heading",
        content: "生产环境优化",
      },
      "构建优化\n\nVite使用Rollup进行生产构建，可通过以下配置优化：\n\n```javascript\nexport default {\n  build: {\n    // 最小化输出包体积\n    minify: 'terser',\n    terserOptions: {\n      compress: {\n        drop_console: true, // 移除console\n        drop_debugger: true // 移除debugger\n      }\n    },\n    // 启用gzip压缩\n    brotliSize: true,\n    // CSS代码分割\n    cssCodeSplit: true,\n    // 自定义分块策略\n    rollupOptions: {\n      output: {\n        manualChunks: {\n          'vendor': ['vue', 'vue-router'],\n          'ui-lib': ['element-plus']\n        }\n      }\n    },\n    // 设置最大块大小警告\n    chunkSizeWarningLimit: 500 // 单位kb\n  }\n};\n```",
      {
        type: "heading",
        content: "路由懒加载优化",
      },
      "在Vue或React应用中，可以结合Vite的动态导入功能实现路由懒加载：\n\n```javascript\n// Vue Router示例\nconst routes = [\n  {\n    path: '/',\n    component: () => import('./views/Home.vue') // 懒加载路由组件\n  },\n  {\n    path: '/about',\n    // 使用注释指定预加载和预获取行为\n    component: () => import(/* webpackChunkName: \"about\", webpackPrefetch: true */ './views/About.vue')\n  }\n];\n```",
      {
        type: "heading",
        content: "资源优化",
      },
      "静态资源处理\n\nVite提供了丰富的静态资源处理能力：\n\n```javascript\nexport default {\n  build: {\n    // 小于此阈值的资源将被内联为base64\n    assetsInlineLimit: 4096,\n    // 指定生成静态资源的目录\n    assetsDir: 'assets'\n  },\n  // 自定义资源处理\n  assetsInclude: ['**/*.gltf']\n};\n```\n\n图片优化\n\n通过插件优化图片资源：\n\n```javascript\nimport viteImagemin from 'vite-plugin-imagemin';\n\nexport default {\n  plugins: [\n    viteImagemin({\n      gifsicle: { optimizationLevel: 7 },\n      mozjpeg: { quality: 65 },\n      pngquant: { quality: [0.65, 0.9], speed: 4 },\n      webp: { quality: 75 }\n    })\n  ]\n};\n```",
      {
        type: "heading",
        content: "高级优化技巧",
      },
      "多页面应用优化\n\nVite原生支持多页面应用（MPA）：\n\n```javascript\nexport default {\n  build: {\n    rollupOptions: {\n      input: {\n        main: resolve(__dirname, 'index.html'),\n        nested: resolve(__dirname, 'nested/index.html')\n      }\n    }\n  }\n};\n```\n\n预渲染与SSR\n\n结合`vite-plugin-ssr`或`@vitejs/plugin-vue-jsx`实现预渲染或服务端渲染，进一步优化首屏加载性能和SEO。",
      "通过实施这些优化策略，Vite不仅能提供极速的开发体验，还能生成高度优化的生产代码。在现代前端开发中，Vite已成为众多开发者的首选工具，尤其在构建Vue、React或Svelte等现代化框架应用时，其优势更为明显。掌握这些优化技巧，将帮助你构建更快、更高效的Web应用。",
    ],
    prevPost: {
      title: "Webpack优化策略",
      slug: "webpack-optimization",
    },
    nextPost: {
      title: "学习Tailwind",
      slug: "learning-tailwind",
    },
  },
  {
    id: 10,
    title: "理解闭包",
    slug: "Clousure",
    date: "2025-05-17",
    author: "Sroof",
    authorAvatar: "/author.webp",
    categories: ["前端", "JavaScript"],
    description:
      "闭包是指​​能够访问另一个函数作用域中变量的函数​​，即使外部函数已经执行完毕。用更专业的术语来说，闭包是一个函数和其词法环境(Lexical Environment)的组合，这个组合使得函数可以访问其被创建时的作用域链 ",

    content: [
      "闭包作为JavaScript中最重要且最具特色的概念之一，深刻影响着代码的执行机制和内存管理。本文将深入探讨闭包的原理、应用场景和最佳实践，帮助你掌握这一核心概念，写出更优雅、更高效的JavaScript代码。",
      {
        type: "heading",
        content: "闭包的核心特性",
      },
      "闭包是指函数能够访问其词法作用域中的变量，即使在其定义的作用域之外执行也是如此。这带来了以下核心特性：\n\n1. 数据私有化：创建私有变量和方法\n2. 状态保持：函数执行后仍能保持内部状态\n3. 延迟执行：将函数的执行推迟到合适的时机",
      {
        type: "image",
        src: "https://pic1.imgdb.cn/item/686fc81a58cb8da5c89aafd3.png",
        alt: "JavaScript闭包",
        caption: "防抖函数的闭包",
      },
      {
        type: "heading",
        content: "闭包的基本形式",
      },
      "基础闭包示例\n\n最简单的闭包形式，展示了内部函数访问外部函数变量的能力：\n\n```javascript\nfunction outerFunction(x) {\n  // 外部函数的变量\n  let outerVariable = x;\n  \n  // 内部函数（闭包）\n  function innerFunction(y) {\n    console.log(outerVariable + y); // 访问外部变量\n  }\n  \n  return innerFunction;\n}\n\nconst closure = outerFunction(10);\nclosure(5); // 输出: 15\n```\n\n立即执行函数表达式（IIFE）闭包\n\nIIFE创建的闭包可以避免全局命名空间污染：\n\n```javascript\nconst module = (function() {\n  let privateVariable = 0;\n  \n  return {\n    increment: function() {\n      privateVariable++;\n      return privateVariable;\n    },\n    decrement: function() {\n      privateVariable--;\n      return privateVariable;\n    },\n    getValue: function() {\n      return privateVariable;\n    }\n  };\n})();\n\nconsole.log(module.increment()); // 1\nconsole.log(module.getValue());  // 1\n```",
      {
        type: "quote",
        content:
          "闭包不是你学习的东西，而是你认识到你已经在使用的东西。理解闭包就是理解JavaScript的精髓。",
        author: "Kyle Simpson - You Don't Know JS系列作者",
      },
      {
        type: "heading",
        content: "实际应用场景",
      },
      "模块模式\n\n闭包是实现模块模式的核心机制，提供数据封装和接口暴露：\n\n```javascript\nconst Calculator = (function() {\n  let result = 0;\n  let history = [];\n  \n  function logOperation(operation, value) {\n    history.push(`${operation}: ${value} = ${result}`);\n  }\n  \n  return {\n    add: function(value) {\n      result += value;\n      logOperation('ADD', value);\n      return this;\n    },\n    subtract: function(value) {\n      result -= value;\n      logOperation('SUBTRACT', value);\n      return this;\n    },\n    multiply: function(value) {\n      result *= value;\n      logOperation('MULTIPLY', value);\n      return this;\n    },\n    getResult: function() {\n      return result;\n    },\n    getHistory: function() {\n      return [...history]; // 返回历史记录副本\n    },\n    clear: function() {\n      result = 0;\n      history = [];\n      return this;\n    }\n  };\n})();\n\n// 链式调用\nconst finalResult = Calculator\n  .add(10)\n  .multiply(2)\n  .subtract(5)\n  .getResult(); // 15\n```",
      {
        type: "heading",
        content: "事件处理和回调",
      },
      "在事件处理中，闭包能够保持状态并提供更灵活的事件处理机制：\n\n```javascript\n// 创建带状态的事件处理器\nfunction createCounter(element, initialValue = 0) {\n  let count = initialValue;\n  \n  return function(event) {\n    count++;\n    element.textContent = `点击次数: ${count}`;\n    \n    // 可以访问闭包中的所有变量\n    if (count % 5 === 0) {\n      console.log(`达到5的倍数: ${count}`);\n    }\n  };\n}\n\n// 使用\nconst button = document.getElementById('myButton');\nconst counterHandler = createCounter(button, 0);\nbutton.addEventListener('click', counterHandler);\n```\n\n防抖和节流函数\n\n闭包在实现防抖和节流功能时发挥重要作用：\n\n```javascript\n// 防抖函数\nfunction debounce(func, delay) {\n  let timeoutId;\n  \n  return function(...args) {\n    const context = this;\n    \n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(function() {\n      func.apply(context, args);\n    }, delay);\n  };\n}\n\n// 节流函数\nfunction throttle(func, limit) {\n  let inThrottle;\n  \n  return function(...args) {\n    const context = this;\n    \n    if (!inThrottle) {\n      func.apply(context, args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}\n```",
      {
        type: "heading",
        content: "高级闭包模式",
      },
      "柯里化（Currying）\n\n闭包使得函数柯里化成为可能，提高函数的复用性：\n\n```javascript\nfunction curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    } else {\n      return function(...args2) {\n        return curried.apply(this, args.concat(args2));\n      };\n    }\n  };\n}\n\n// 使用示例\nfunction add(a, b, c) {\n  return a + b + c;\n}\n\nconst curriedAdd = curry(add);\nconsole.log(curriedAdd(1)(2)(3)); // 6\nconsole.log(curriedAdd(1, 2)(3)); // 6\nconsole.log(curriedAdd(1)(2, 3)); // 6\n```\n\n记忆化（Memoization）\n\n利用闭包实现函数结果缓存，优化重复计算：\n\n```javascript\nfunction memoize(fn) {\n  const cache = new Map();\n  \n  return function(...args) {\n    const key = JSON.stringify(args);\n    \n    if (cache.has(key)) {\n      console.log('从缓存获取结果');\n      return cache.get(key);\n    }\n    \n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    console.log('计算并缓存结果');\n    return result;\n  };\n}\n\n// 斐波那契数列示例\nconst fibonacci = memoize(function(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n});\n\nconsole.log(fibonacci(10)); // 计算并缓存\nconsole.log(fibonacci(10)); // 从缓存获取\n```",
      {
        type: "heading",
        content: "性能和内存管理",
      },
      "内存泄漏预防\n\n正确管理闭包以避免内存泄漏：\n\n```javascript\n// 潜在的内存泄漏\nfunction problematicClosure() {\n  const largeData = new Array(1000000).fill('data');\n  \n  return function(index) {\n    return largeData[index]; // 整个数组被保持在内存中\n  };\n}\n\n// 优化版本\nfunction optimizedClosure() {\n  const largeData = new Array(1000000).fill('data');\n  \n  return function(index) {\n    const result = largeData[index];\n    // 如果不再需要，可以显式清理\n    if (someCondition) {\n      largeData = null;\n    }\n    return result;\n  };\n}\n```",
      "掌握闭包是成为JavaScript高手的必经之路。通过理解闭包的工作原理和应用场景，你不仅能写出更优雅的代码，还能更好地理解JavaScript的执行机制。闭包虽然概念抽象，但一旦掌握，它将成为你编程工具箱中最强大的工具之一，帮助你解决复杂的编程问题，创建更加模块化和可维护的代码结构。",
    ],
    nextPost: {
      title: "Webpack优化策略",
      slug: "webpack-optimization",
    },
  },
];

// 博客分类
export const BLOG_CATEGORIES = [
  { name: "前端", count: 6 },
  { name: "Vue", count: 1 },
  { name: "JavaScript", count: 1 },
  { name: "3D", count: 1 },
  { name: "WebGL", count: 1 },
  { name: "哲学", count: 1 },
  { name: "随想", count: 1 },
  { name: "性能优化", count: 2 },
];
