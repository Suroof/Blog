import { lazy } from 'react';

// 创建带预加载功能的懒加载组件
const createLazyComponent = (factory, preloadAfter = 0) => {
  const Component = lazy(factory);

  // 添加预加载方法
  Component.preload = () => {
    // 延迟预加载，避免阻塞主线程
    if (preloadAfter) {
      setTimeout(() => factory(), preloadAfter);
    } else {
      factory();
    }
  };

  return Component;
};

// 主要页面 - 优先级高
export const Home = createLazyComponent(() => import('../pages/Home'));
export const About = createLazyComponent(() => import('../pages/About'));
export const Articles = createLazyComponent(() => import('../pages/Articles'));
export const Projects = createLazyComponent(() => import('../pages/Projects'));

// 次要页面 - 可以延迟加载
export const Gallery = createLazyComponent(() => import('../pages/Gallery'), 1000);
export const Resources = createLazyComponent(() => import('../pages/Resources'), 1500);
export const History = createLazyComponent(() => import('../pages/History'), 1500);
export const BlogPost = createLazyComponent(() => import('../pages/BlogPost'), 500);
export const Guestbook = createLazyComponent(() => import('../pages/Guestbook'), 2000);

// 文章分类页面 - 可以更晚加载
export const Work = createLazyComponent(() => import('../pages/articles/Work'), 2000);
export const Music = createLazyComponent(() => import('../pages/articles/Music'), 2000);
export const Life = createLazyComponent(() => import('../pages/articles/Life'), 2000);
export const Tech = createLazyComponent(() => import('../pages/articles/Tech'), 2000);
export const TravelStories = createLazyComponent(() => import('../pages/articles/TravelStories'), 2000);

// 预加载常用页面
export const preloadCommonRoutes = () => {
  // 在空闲时间预加载主要页面
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      Home.preload();
      About.preload();
      Articles.preload();
    }, { timeout: 2000 });
  }
};

// 预加载特定路由的相关页面
export const preloadRelatedRoutes = (currentRoute) => {
  if (typeof window === 'undefined') return;

  const preloadMap = {
    '/': () => {
      About.preload();
      Articles.preload();
    },
    '/articles': () => {
      Work.preload();
      Tech.preload();
      BlogPost.preload();
    },
    '/about': () => {
      History.preload();
      Projects.preload();
    },
    '/projects': () => {
      Gallery.preload();
      Tech.preload();
    }
  };

  if (preloadMap[currentRoute] && 'requestIdleCallback' in window) {
    window.requestIdleCallback(() => preloadMap[currentRoute](), { timeout: 1000 });
  }
};