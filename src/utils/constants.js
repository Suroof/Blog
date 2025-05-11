//六张3D卡片
export const NAVIGATION_LINKS = [
  { path: '/', label: 'Home' ,icon:'/icon/home.png'},
  { path: '/about', label: 'About' ,icon:'/icon/about.png' },
  { path: '/articles', label: 'Articles'  ,icon:'/icon/article.png'},
  { path: '/projects', label: 'Projects' ,icon:'/icon/project.png' },
  { path: '/gallery', label: 'Photo' ,icon:'/icon/gallery.png' },
  { path: '/resources', label: 'Resourse' ,icon:'/icon/resource.png' },
  { path: '/history', label: 'history' ,icon:'/icon/history.png' },
];

export const PERSONAL_INFO_CARDS = [
  {
    title: "Work Experience",
    description: "查看我的工作经历和项目案例",
    icon: "👨‍💻",
    link: "/articles/work",
    backgroundImage: "/air.webp"
  },
  {
    title: "Travel Stories",
    description: "分享旅行见闻与风景",
    icon: "✈️",
    link: "/articles/travel-stories",
    backgroundImage: "/dog.webp"
  },
  {
    title: "Music Collection",
    description: "我的音乐收藏和推荐歌单",
    icon: "🎸",
    link: "/articles/music",
    backgroundImage: "/fly.webp"
  },
  {
    title: "Life Stories",
    description: "记录生活，分享故事",
    icon: "🌆",
    link: "/articles/life",
    backgroundImage: "/street.webp"
  },
  {
    title: "Design Portfolio",
    description: "我的设计作品集与UI/UX案例",
    icon: "🎨",
    link: "/projects",
    backgroundImage: "/water.webp"
  },
  {
    title: "Tech Explorer",
    description: "技术探索与学习笔记",
    icon: "🚀",
    link: "/articles/tech",
    backgroundImage: "/luv.webp"
  }
];

export const CRITICAL_IMAGES = [
  "/3D.webp",
  "/zn1.webp",
  "/tea.webp",
  "/muti.webp",
  "/旅游页面.webp",
  "/购物网站.webp",
];

export const HISTORY_IMAGES = [
  { src: "https://pic1.imgdb.cn/item/68175b7458cb8da5c8dc53d1.png", alt: "startup template" },
  { src: "https://pic1.imgdb.cn/item/68175b9658cb8da5c8dc53e6.png", alt: "startup template" },
  { src: "https://pic1.imgdb.cn/item/68175bee58cb8da5c8dc5400.png", alt: "startup template" },
  { src: "https://pic1.imgdb.cn/item/68175c2d58cb8da5c8dc5404.png", alt: "startup template" },
  { src: "https://pic1.imgdb.cn/item/68175c6e58cb8da5c8dc5419.png", alt: "hero template" },
  { src: "https://pic1.imgdb.cn/item/68175ca958cb8da5c8dc5427.png", alt: "feature template" },
  { src: "https://pic1.imgdb.cn/item/68175d1058cb8da5c8dc543d.png", alt: "bento template" },
  { src: "https://pic1.imgdb.cn/item/68175d8458cb8da5c8dc5457.png", alt: "cards template" },
  { src: "https://pic1.imgdb.cn/item/68175e3e58cb8da5c8dc5494.jpg", alt: "hero template" },
]

// 预加载函数 - 在应用启动时就开始预加载，而不是等到组件加载
export const preloadHistoryImages = () => {
  if (typeof window !== 'undefined') { // 确保在浏览器环境中执行
    HISTORY_IMAGES.forEach(image => {
      const img = new Image();
      img.src = image.src;
    });
  }
};

// 自动执行预加载
if (typeof window !== 'undefined') {
  // 使用requestIdleCallback（如果可用）在浏览器空闲时预加载
  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => preloadHistoryImages());
  } else {
    // 回退到setTimeout
    setTimeout(preloadHistoryImages, 1000);
  }
}