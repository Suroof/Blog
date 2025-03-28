import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card3D from '../components/Card3D';
import AceternityCard from '../components/AceternityCard';
import { PERSONAL_INFO_CARDS } from '../utils/constants';
import FeaturedSection from '../components/sections/FeaturedSection';
import SkillsSection from '../components/sections/SkillsSection';
import ContactSection from '../components/sections/ContactSection';


const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 mb-32"
      >
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Welcome to My Space
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16">
            灵感总在长夜迸发
          </p>

          {/* 新增的 Aceternity UI 卡片 */}
          <div className="mb-32">
            <AceternityCard />
          </div>
        </div>

        {/* 原有的卡片布局 */}
        <div className="flex flex-wrap justify-center gap-16">
          {PERSONAL_INFO_CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`transform ${
                index % 2 === 0 ? 'scale-110' : 'scale-90 mt-16'
              }`}
            >
              <Card3D {...card} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 新功能区域 */}
      <div className="bg-gradient-to-b from-black to-blue-900/30 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-16">发现更多精彩内容</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 相册卡片 */}
            <Link to="/gallery" className="block group">
              <div className="bg-gray-800 rounded-xl overflow-hidden h-80 relative hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
                  alt="相册预览"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    相册
                  </h3>
                  <p className="text-gray-300">
                    浏览精美照片，感受生活美好瞬间
                  </p>
                </div>
              </div>
            </Link>

            {/* 资源卡片 */}
            <Link to="/resources" className="block group">
              <div className="bg-gray-800 rounded-xl overflow-hidden h-80 relative hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                  alt="资源预览"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    资源
                  </h3>
                  <p className="text-gray-300">
                    发现实用工具和学习资源
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Home;
