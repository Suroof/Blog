import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Background3D from "./components/Background3D/index";
import { SmoothCursor } from "./components/ui/smooth-cursor";
import ProgressLoader from "./components/ProgressLoader";
import {
  optimizeForDevice,
  monitorFrameRate,
  preloadImages,
} from "./utils/performance";
import { CRITICAL_IMAGES } from "./utils/constants";

// 预先加载主页组件
const Home = lazy(() => import("./pages/Home"));

// 使用懒加载导入其他页面组件
const About = lazy(() => import("./pages/About"));
const Articles = lazy(() => import("./pages/Articles"));
const Projects = lazy(() => import("./pages/Projects"));
const Work = lazy(() => import("./pages/articles/Work"));
const Music = lazy(() => import("./pages/articles/Music"));
const Life = lazy(() => import("./pages/articles/Life"));
const Tech = lazy(() => import("./pages/articles/Tech"));
const TravelStories = lazy(() => import("./pages/articles/TravelStories"));
const History = lazy(() => import("./pages/History"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Resources = lazy(() => import("./pages/Resources"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
// 路由变更处理组件 - 用于路由变化时优化
const RouteChangeHandler = ({ children }) => {
  const location = useLocation();
  const navigating = useRef(false);

  useEffect(() => {
    preloadImages(CRITICAL_IMAGES).then(() => {});
  }, []);

  useEffect(() => {
    if (navigating.current) {
      // 等待页面加载完成
      const timer = setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
    navigating.current = true;

    // 首次加载
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    return () => {
      navigating.current = false;
    };
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
  const [_isFirstLoad, setIsFirstLoad] = useState(true);
  const [showBackground, setShowBackground] = useState(false);
  const [_appConfig, setAppConfig] = useState(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  // 初始化应用配置和性能监控
  useEffect(() => {
    // 根据设备性能优化应用配置
    const config = optimizeForDevice();
    setAppConfig(config);

    // 只在高性能设备上启用帧率监控
    if (config.enableHeavyAnimations) {
      monitorFrameRate();
    }

    // 延迟加载3D背景（根据设备性能）
    const bgTimer = setTimeout(() => {
      if (config.enable3DBackground) {
        setShowBackground(true);
      }
    }, 1500); // 延长延迟时间

    // 标记初始加载完成
    const initialLoadTimer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 3000);

    return () => {
      clearTimeout(bgTimer);
      clearTimeout(initialLoadTimer);
    };
  }, []);

  return (
    <>
      {/* 全局光标，使用原生SmoothCursor组件 */}
      <GlobalCursor />

      <Router>
        <RouteChangeHandler>
          <div className="relative">
            {/* 按条件渲染Background3D以减少初始加载开销 */}
            {showBackground && (
              <Suspense fallback={null}>
                <Background3D onLoaded={() => setIsModelLoaded(true)} />
              </Suspense>
            )}

            <div className="relative z-10">
              <>
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
                    <Route
                      path="/category/:categoryName"
                      element={<Articles />}
                    />
                    <Route path="/history" element={<History />} />
                    {/* Article category routes */}
                    <Route path="/articles/work" element={<Work />} />
                    <Route path="/articles/music" element={<Music />} />
                    <Route path="/articles/life" element={<Life />} />
                    <Route path="/articles/tech" element={<Tech />} />
                    <Route path="/articles/projects" element={<Projects />} />
                    <Route
                      path="/articles/travel-stories"
                      element={<TravelStories />}
                    />
                  </Routes>
                </Suspense>
              </>
            </div>
          </div>
        </RouteChangeHandler>
      </Router>
    </>
  );
}

export default App;
