import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D/index';

// 使用懒加载导入页面组件
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Articles = lazy(() => import('./pages/Articles'));
const Projects = lazy(() => import('./pages/articles/Design'));
const Work = lazy(() => import('./pages/articles/Work'));
const Music = lazy(() => import('./pages/articles/Music'));
const Life = lazy(() => import('./pages/articles/Life'));
const Tech = lazy(() => import('./pages/articles/Tech'));
const Design = lazy(() => import('./pages/articles/Design'));
const TravelStories = lazy(() => import('./pages/articles/TravelStories'));

// 新增页面
const Gallery = lazy(() => import('./pages/Gallery'));
const Resources = lazy(() => import('./pages/Resources'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// 加载中的占位组件
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="relative">
        <Background3D />
        <div className="relative z-10">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/projects" element={<Projects />} />

              {/* 新增路由 */}
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/category/:categoryName" element={<Articles />} />

              {/* Article category routes */}
              <Route path="/articles/work" element={<Work />} />
              <Route path="/articles/music" element={<Music />} />
              <Route path="/articles/life" element={<Life />} />
              <Route path="/articles/tech" element={<Tech />} />
              <Route path="/articles/design" element={<Design />} />
              <Route path="/articles/travel-stories" element={<TravelStories />} />

              {/* Project routes */}

            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
