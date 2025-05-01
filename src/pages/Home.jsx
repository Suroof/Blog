import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card3D from '../components/Card3D';
import AceternityCard from '../components/AceternityCard';
import { PERSONAL_INFO_CARDS } from '../utils/constants';



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

      {/* 重新设计的探索区域 */}
      <div className="relative py-32">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-4 text-center mb-16"
          >
            <motion.span
              className="inline-block text-sm uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore
            </motion.span>
            <motion.h2
              className="text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              探索更多精彩内容
            </motion.h2>
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.p
              className="text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              沉浸在视觉的盛宴中，发现更多有价值的资源和灵感
            </motion.p>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {/* 相册卡片 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to="/gallery" className="block">
                  <div className="relative h-[420px] rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-black border border-gray-800 shadow-xl group-hover:shadow-blue-500/20 transition-all duration-500 group-hover:border-blue-500/30">
                    {/* 顶部装饰条 */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-500"></div>

                    {/* 图片容器 */}
                    <div className="h-64 overflow-hidden">
                      <img
                        src="/camera.jpg"
                        alt="相册预览"
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* 内容区域 */}
                    <div className="p-8 relative">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20 mr-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          相册
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-6">
                        浏览精美照片，感受生活中的美好瞬间与独特视角
                      </p>
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="font-medium">浏览相册</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* 资源卡片 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to="/resources" className="block">
                  <div className="relative h-[420px] rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-black border border-gray-800 shadow-xl group-hover:shadow-purple-500/20 transition-all duration-500 group-hover:border-purple-500/30">
                    {/* 顶部装饰条 */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-400 transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-500"></div>

                    {/* 图片容器 */}
                    <div className="h-64 overflow-hidden">
                      <img
                        src="/sourse.jpg"
                        alt="资源预览"
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* 内容区域 */}
                    <div className="p-8 relative">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/20 mr-4 group-hover:bg-purple-500/30 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          资源
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-6">
                        发现实用工具和学习资源，提升效率与创造力
                      </p>
                      <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                        <span className="font-medium">查看资源</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
