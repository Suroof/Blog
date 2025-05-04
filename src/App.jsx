import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
// 按需导入非关键组件
const Background3D = lazy(() => import('./components/Background3D/index'));
// 导入smooth-cursor组件
import { SmoothCursor } from './components/ui/smooth-cursor';

// 导入进度加载器组件和性能工具
import ProgressLoader from './components/ProgressLoader';
import { optimizeForDevice, monitorFrameRate } from './utils/performance';

// 预先加载主页组件
// eslint-disable-next-line
const Home = lazy(() => import('./pages/Home').then(module => {
  // 主页加载后预加载其他常用页面
  import('./pages/About');
  import('./pages/Gallery');
  return module;
}));

// 使用懒加载导入其他页面组件
const About = lazy(() => import('./pages/About'));
const Articles = lazy(() => import('./pages/Articles'));
const Projects = lazy(() => import('./pages/Projects'));
const Work = lazy(() => import('./pages/articles/Work'));
const Music = lazy(() => import('./pages/articles/Music'));
const Life = lazy(() => import('./pages/articles/Life'));
const Tech = lazy(() => import('./pages/articles/Tech'));
const TravelStories = lazy(() => import('./pages/articles/TravelStories'));
const History = lazy(() => import('./pages/History'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Resources = lazy(() => import('./pages/Resources'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// 路由变更处理组件 - 用于路由变化时优化
const RouteChangeHandler = ({ children }) => {
  const location = useLocation();
  const prevLocation = useRef(location.pathname);

  useEffect(() => {
    // 路由发生变化
    if (location.pathname !== prevLocation.current) {
      // 滚动到页面顶部
      window.scrollTo(0, 0);

      // 预加载可能的相关页面
      if (location.pathname === '/articles') {
        // 在文章主页预加载常用文章类别
        import('./pages/articles/Tech');
        import('./pages/articles/Life');
      }

      prevLocation.current = location.pathname;
    }
  }, [location]);

  return <>{children}</>;
};

// 全局光标组件，不受路由变化影响
const GlobalCursor = () => {
  // 根据设备性能优化弹簧配置
  const [appConfig, setAppConfig] = useState(null);

  useEffect(() => {
    const config = optimizeForDevice();
    setAppConfig(config);
  }, []);

  // 根据设备性能调整弹簧参数
  const springConfig = appConfig?.enableHeavyAnimations
    ? {
        damping: 45,
        stiffness: 400,
        mass: 1,
        restDelta: 0.001,
      }
    : {
        damping: 60,
        stiffness: 300,
        mass: 0.8,
        restDelta: 0.001,
      };

  return <SmoothCursor springConfig={springConfig} />;
};

function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [showBackground, setShowBackground] = useState(false);
  const [appConfig, setAppConfig] = useState(null);

  useEffect(() => {
    // 初始化应用配置和性能监控
    const config = optimizeForDevice();
    setAppConfig(config);
  
    // 只在高性能设备上启用帧率监控
    if (config.enableHeavyAnimations) {
      monitorFrameRate();
    }
  
    // 延迟加载非关键视觉元素以提高初始加载速度
    useEffect(() => {
      const timer = setTimeout(() => {
        if (loaded) {
          setShowLoader(false);
        }
      }, 800); // 至少显示 800ms，防止闪烁
  
      if (loaded && progress >= 100) {
        clearTimeout(timer);
        setShowLoader(false);
      }
  
      return () => clearTimeout(timer); 
    }, [loaded, progress]); // ✅ 内层 useEffect 依赖数组正确
  
  }, []); // ✅ 外层 useEffect 添加空依赖数组

  return (
    <>
      {/* 全局光标，使用原生SmoothCursor组件 */}
      <GlobalCursor />

      <Router>
        <RouteChangeHandler>
          <div className="relative">
            {/* 按条件渲染Background3D以减少初始加载开销 */}
            {showBackground ? (
              <Suspense fallback={null}>
                <Background3D />
              </Suspense>
            ) : (
              <div className="fixed inset-0 -z-10 bg-black"></div>
            )}

            <div className="relative z-10">
              <Navbar />

              {/* 使用更高级的加载指示器提升用户体验 */}
              <Suspense fallback={<ProgressLoader minDuration={800} />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/articles" element={<Articles />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/category/:categoryName" element={<Articles />} />
                  <Route path="/history" element={<History />} />
                  {/* Article category routes */}
                  <Route path="/articles/work" element={<Work />} />
                  <Route path="/articles/music" element={<Music />} />
                  <Route path="/articles/life" element={<Life />} />
                  <Route path="/articles/tech" element={<Tech />} />
                  <Route path="/articles/projects" element={<Projects />} />
                  <Route path="/articles/travel-stories" element={<TravelStories />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </RouteChangeHandler>
      </Router>
    </>
  );
}

export default App;
