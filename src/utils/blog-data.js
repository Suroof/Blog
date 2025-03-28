// 博客文章数据
export const BLOG_POSTS = [
  {
    id: 1,
    title: "学习Vue",
    slug: "learning-vue",
    date: "2024-01-20",
    author: "博主",
    authorAvatar: "/author.jpeg",
    categories: ["前端", "Vue", "JavaScript"],
    description: "布局，对接，依赖，响应式",
    content: [
      "作为现代前端开发框架，Vue.js以其简洁的API和灵活的生态系统而受到广泛欢迎。本文将分享我在学习Vue的过程中的一些心得与体会。",
      {
        type: "heading",
        content: "Vue的核心概念"
      },
      "Vue的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进DOM的系统。它的响应式系统使得状态管理变得简单而直观。",
      "使用Vue构建用户界面的关键步骤包括：",
      "1. 创建Vue实例\n2. 定义组件\n3. 使用指令操作DOM\n4. 管理组件状态",
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
        alt: "代码编辑器中的Vue代码",
        caption: "Vue组件结构示例"
      },
      {
        type: "heading",
        content: "响应式系统"
      },
      "Vue的响应式系统是其最强大的特性之一。当应用的状态发生变化时，视图会自动更新，这使得开发者可以专注于应用逻辑，而不必手动操作DOM。",
      "在Vue 3中，通过Composition API可以更好地组织和复用代码逻辑，这是对Vue 2中Options API的一个重要补充。",
      {
        type: "quote",
        content: "得益于渐进式的特性，Vue可以根据需求逐步集成到项目中，这使它成为初学者和专业开发者的理想选择。",
        author: "尤雨溪"
      },
      {
        type: "heading",
        content: "组件化开发"
      },
      "组件是Vue应用的基本构建块。通过将界面拆分为可复用的组件，可以大大提高开发效率和代码可维护性。",
      "Vue组件通常包含三个部分：模板(template)、脚本(script)和样式(style)。这种单文件组件的方式使得代码组织更加清晰。",
      "学习Vue的过程中，我发现最有效的方法是通过实战项目来巩固知识点。从简单的TODO应用开始，逐步过渡到更复杂的单页应用是一个不错的学习路径。"
    ],
    nextPost: {
      slug: "threejs-exploration",
      title: "Three.js探索"
    }
  },
  {
    id: 2,
    title: "Three.js",
    slug: "threejs-exploration",
    date: "2024-08-15",
    author: "博主",
    authorAvatar: "/author.jpeg",
    categories: ["前端", "3D", "WebGL"],
    description: "canvas,leva，建模",
    content: [
      "Three.js是一个强大的JavaScript 3D库，它使得在浏览器中创建复杂的3D场景变得简单。无论是游戏、数据可视化还是艺术创作，Three.js都提供了丰富的工具和API。",
      {
        type: "heading",
        content: "Three.js基础"
      },
      "使用Three.js创建3D场景通常需要几个基本元素：场景(Scene)、相机(Camera)、渲染器(Renderer)以及各种3D对象和光源。",
      "场景是所有3D对象的容器，相机决定了观察视角，而渲染器则负责将3D场景绘制到HTML Canvas元素上。",
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "3D渲染场景",
        caption: "使用Three.js创建的3D场景示例"
      },
      {
        type: "heading",
        content: "几何体与材质"
      },
      "Three.js提供了各种预定义的几何体（如立方体、球体、圆柱体等）和材质（如基础材质、Lambert材质、Phong材质等）。通过组合不同的几何体和材质，可以创建丰富多样的3D对象。",
      "除了使用预定义的几何体外，Three.js还支持导入外部3D模型，常见的格式包括GLTF、OBJ和FBX等。",
      {
        type: "quote",
        content: "网页3D图形正在成为主流，它不仅用于游戏，还广泛应用于产品展示、数据可视化和交互式体验。",
        author: "Ricardo Cabello (Mr.doob)"
      },
      {
        type: "heading",
        content: "动画与交互"
      },
      "在Three.js中创建动画通常是通过在渲染循环中更新对象的属性来实现的。使用requestAnimationFrame API可以确保动画流畅运行。",
      "对于复杂的动画，Three.js提供了动画系统和骨骼动画支持，可以导入和播放在3D建模软件中创建的动画。",
      "交互方面，可以使用鼠标事件和Raycaster来实现对3D对象的选择和交互。通过OrbitControls等控制器，可以轻松实现场景的平移、旋转和缩放。",
      "学习Three.js的过程充满挑战，但也非常有趣。从简单的几何体开始，逐步探索更复杂的功能，可以不断提升对3D图形编程的理解和技能。"
    ],
    prevPost: {
      slug: "learning-vue",
      title: "学习Vue"
    },
    nextPost: {
      slug: "stoicism-philosophy",
      title: "斯多葛主义：改变你能改变的事物"
    }
  },
  {
    id: 3,
    title: "斯多葛主义：改变你能改变的事物",
    slug: "stoicism-philosophy",
    date: "2024-06-20",
    author: "博主",
    authorAvatar: "/author.jpeg",
    categories: ["哲学", "随想"],
    description: "探讨斯多葛主义哲学及其在现代生活中的应用",
    content: [
      "如果你对自我提升和哲学（或者古罗马、希腊文化）稍有兴趣，你很可能听说过斯多葛主义。这一哲学主张通过改变我们能够改变的事物，同时不为那些超出我们控制的事情而烦恼，从而达到内心的平静。",
      {
        type: "quote",
        content: "上帝，请赐予我平静，去接受我无法改变的事物，\n赐予我勇气，去改变我能改变的事物，\n赐予我智慧，去分辨两者的区别。",
        author: "莱因霍尔德·尼布尔"
      },
      "(尼布尔并不真正以斯多葛主义者而闻名，但这句话很好地总结了这一思想。感谢我最喜欢的人告诉我这句名言)",
      {
        type: "image",
        src: "/leaves.jpg",
        alt: "平静的自然风光",
        caption: "平静的自然景观，象征斯多葛主义的内心平和"
      },
      {
        type: "heading",
        content: "好的，明白了"
      },
      "但这个图表并不总是这样呈现。有时，有些事情我们确实有某种程度的控制权，但介入意味着侵入他人的权力范围。通常，这些是不属于你的工作，但你仍然会受到它们的影响。这可能是你的室友在厨房里到处留下面包屑。或者是开车跟在你后面的人没有保持安全距离。又或者是在你的超市队伍中有人没有戴口罩。不是你的工作，几乎不关你的事，但仍然令人烦恼或压力山大。",
      "所有这些都在重叠区域内：",
      {
        type: "heading",
        content: "那么，我应该怎么做？"
      },
      "有三种可能性：",
      "1. 介入，改变事情，面对后果\n2. 随它去，面对不作为的后果\n3. 惊慌，为此烦恼，半心半意地介入而不真正改变任何事情，也要面对后果",
      "显然，你想避免选项3。这一选项绝对不是斯多葛式的，对平静心灵毫无帮助。将决定限制在只有两个选项上，这使它成为一个全有或全无的决定。但这两个选项仍有一个共同点：",
      {
        type: "heading",
        content: "后果"
      },
      "列出一个（现实的！）清单，列出你（确实）能改变的事情以及你可以以何种方式影响结果。不要忘记社会后果，因为你很可能侵入了别人的控制范围。将这个清单与你不参与的预期结果进行比较。",
      {
        type: "heading",
        content: "但我仍然不确定..."
      },
      "好吧，既然列表也没帮助你，你不妨选择选项3。想想看，就连制作清单也让你的心绪参与其中，你不妨跟随这个思路，惊慌起来。或者真正参与进去，尽力实现你想要的结果。如果你还没有结束列表制作，想要一个硬性的是/否答案，你可以权衡后果，选择你认为更好的选项。",
      {
        type: "heading",
        content: "所以，反正就是惊慌？"
      },
      "如果你愿意，你总是可以选择惊慌。有太多可以惊慌的事情。但这一特定情况不必成为你需要惊慌的事情之一。所以，再回去想想后果。这次，关注它们会影响你多久以及多强烈。很可能，你不需要因为大学小组项目中一个你没有纠正的错别字而去另一个大陆办理假身份证。更不用说因为周围人的正常人类行为而惊慌了。生命短暂。你最好找到你的平静。并且保持它。"
    ],
    prevPost: {
      slug: "threejs-exploration",
      title: "Three.js探索"
    }
  }
];

// 博客分类
export const BLOG_CATEGORIES = [
  { name: "前端", count: 2 },
  { name: "Vue", count: 1 },
  { name: "JavaScript", count: 1 },
  { name: "3D", count: 1 },
  { name: "WebGL", count: 1 },
  { name: "哲学", count: 1 },
  { name: "随想", count: 1 }
];