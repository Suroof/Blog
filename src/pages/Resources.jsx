import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBook, FiCode, FiCamera, FiMusic, FiPenTool, FiTool, FiFilm, FiMonitor, FiPackage, FiCoffee, FiHeadphones, FiSmartphone } from 'react-icons/fi';

// 资源数据 - 扩展更多资源
const RESOURCES = [
  {
    id: 1,
    title: 'VS Code',
    description: '最受欢迎的代码编辑器之一，拥有丰富的插件生态系统',
    url: 'https://code.visualstudio.com/',
    category: '开发工具',
    featured: true,
    icon: <FiCode className="text-2xl text-blue-500" />
  },
  {
    id: 2,
    title: 'Figma',
    description: '强大的在线设计和原型制作工具',
    url: 'https://www.figma.com/',
    category: '设计工具',
    featured: true,
    icon: <FiPenTool className="text-2xl text-purple-500" />
  },
  {
    id: 3,
    title: 'Unsplash',
    description: '高质量免费图片资源网站',
    url: 'https://unsplash.com/',
    category: '图片资源',
    featured: false,
    icon: <FiCamera className="text-2xl text-green-500" />
  },
  {
    id: 4,
    title: 'MDN Web Docs',
    description: 'Web 技术权威文档',
    url: 'https://developer.mozilla.org/',
    category: '学习资源',
    featured: true,
    icon: <FiBook className="text-2xl text-yellow-500" />
  },
  {
    id: 5,
    title: 'React 官方文档',
    description: 'React 框架的官方文档和教程',
    url: 'https://reactjs.org/',
    category: '学习资源',
    featured: false,
    icon: <FiBook className="text-2xl text-yellow-500" />
  },
  {
    id: 6,
    title: 'Tailwind CSS',
    description: '实用优先的 CSS 框架',
    url: 'https://tailwindcss.com/',
    category: '开发工具',
    featured: true,
    icon: <FiCode className="text-2xl text-blue-500" />
  },
  {
    id: 7,
    title: 'SoundCloud',
    description: '音乐分享和发现平台',
    url: 'https://soundcloud.com/',
    category: '音乐资源',
    featured: false,
    icon: <FiMusic className="text-2xl text-red-500" />
  },
  {
    id: 8,
    title: 'GitHub',
    description: '代码托管和协作平台',
    url: 'https://github.com/',
    category: '开发工具',
    featured: true,
    icon: <FiCode className="text-2xl text-blue-500" />
  },
  {
    id: 9,
    title: 'Framer Motion',
    description: 'React 的动画库',
    url: 'https://www.framer.com/motion/',
    category: '开发工具',
    featured: false,
    icon: <FiTool className="text-2xl text-blue-500" />
  },
  // 新增资源
  {
    id: 10,
    title: 'Netflix',
    description: '流媒体视频服务平台，提供多种类型的影视作品',
    url: 'https://www.netflix.com/',
    category: '娱乐平台',
    featured: true,
    icon: <FiFilm className="text-2xl text-red-500" />
  },
  {
    id: 11,
    title: 'Dribbble',
    description: '设计师社区，分享和发现创意作品',
    url: 'https://dribbble.com/',
    category: '设计工具',
    featured: false,
    icon: <FiPenTool className="text-2xl text-pink-500" />
  },
  {
    id: 12,
    title: 'YouTube',
    description: '全球最大的视频分享平台',
    url: 'https://www.youtube.com/',
    category: '娱乐平台',
    featured: true,
    icon: <FiMonitor className="text-2xl text-red-500" />
  },
  {
    id: 13,
    title: 'Notion',
    description: '多功能笔记和项目管理工具',
    url: 'https://www.notion.so/',
    category: '生产工具',
    featured: true,
    icon: <FiPackage className="text-2xl text-gray-500" />
  },
  {
    id: 14,
    title: 'Spotify',
    description: '数字音乐流媒体服务',
    url: 'https://www.spotify.com/',
    category: '音乐资源',
    featured: true,
    icon: <FiHeadphones className="text-2xl text-green-500" />
  },
  {
    id: 15,
    title: 'Medium',
    description: '在线发布平台，分享文章和见解',
    url: 'https://medium.com/',
    category: '学习资源',
    featured: false,
    icon: <FiBook className="text-2xl text-gray-500" />
  },
  {
    id: 16,
    title: 'Trello',
    description: '可视化项目管理工具',
    url: 'https://trello.com/',
    category: '生产工具',
    featured: false,
    icon: <FiPackage className="text-2xl text-blue-500" />
  },
  {
    id: 17,
    title: 'Discord',
    description: '社区聊天和语音平台',
    url: 'https://discord.com/',
    category: '社交工具',
    featured: false,
    icon: <FiSmartphone className="text-2xl text-indigo-500" />
  },
  {
    id: 18,
    title: 'Evernote',
    description: '笔记和任务管理应用',
    url: 'https://evernote.com/',
    category: '生产工具',
    featured: false,
    icon: <FiCoffee className="text-2xl text-green-500" />
  }
];

// 资源分类 - 扩展更多类别
const CATEGORIES = ['全部', '开发工具', '设计工具', '学习资源', '图片资源', '音乐资源', '娱乐平台', '生产工具', '社交工具'];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [sortOrder, setSortOrder] = useState('default'); // default, a-z, z-a

  // 过滤资源
  const filteredResources = RESOURCES.filter(resource => {
    const matchesCategory = selectedCategory === '全部' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFeatured = showFeaturedOnly ? resource.featured : true;
    return matchesCategory && matchesSearch && matchesFeatured;
  });

  // 排序资源
  const sortedResources = [...filteredResources].sort((a, b) => {
    if (sortOrder === 'a-z') {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === 'z-a') {
      return b.title.localeCompare(a.title);
    }
    return 0; // 默认排序 (按ID)
  });

  // 每个类别的资源数量
  const categoryCount = {};
  CATEGORIES.forEach(category => {
    if (category === '全部') {
      categoryCount[category] = RESOURCES.length;
    } else {
      categoryCount[category] = RESOURCES.filter(resource => resource.category === category).length;
    }
  });

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* 背景装饰 */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl font-bold mb-4 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          实用资源
        </motion.h1>

        <motion.div
          className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 text-center">
          分享我日常使用的工具和资源，提高工作效率和生活质量
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-800/50 sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-2"></span>
                筛选
              </h3>

              {/* 搜索框 */}
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">搜索资源</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="输入关键词..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full py-2.5 px-4 rounded-lg bg-gray-800/80 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                  />
                  <svg
                    className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* 类别筛选 */}
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">资源类别</label>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all flex justify-between ${
                        selectedCategory === category
                          ? 'bg-blue-500/20 text-blue-300 border-l-4 border-blue-500'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      <span>{category}</span>
                      <span className="text-sm opacity-70">{categoryCount[category]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 其他筛选选项 */}
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">显示选项</label>
                <div className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={showFeaturedOnly}
                    onChange={() => setShowFeaturedOnly(!showFeaturedOnly)}
                    className="w-4 h-4 rounded bg-gray-800 border-gray-600 focus:ring-blue-500"
                  />
                  <label htmlFor="featured" className="ml-2 text-gray-300">
                    只显示精选资源
                  </label>
                </div>
              </div>

              {/* 排序选项 */}
              <div>
                <label className="block text-gray-400 text-sm mb-2">排序方式</label>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-lg bg-gray-800/80 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                >
                  <option value="default">默认排序</option>
                  <option value="a-z">名称 (A-Z)</option>
                  <option value="z-a">名称 (Z-A)</option>
                </select>
              </div>

              {/* 重置按钮 */}
              <button
                onClick={() => {
                  setSelectedCategory('全部');
                  setSearchTerm('');
                  setShowFeaturedOnly(false);
                  setSortOrder('default');
                }}
                className="w-full mt-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg transition-colors"
              >
                重置筛选
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            {/* 结果统计 */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-300">
                找到 <span className="text-blue-400 font-semibold">{sortedResources.length}</span> 个资源
                {selectedCategory !== '全部' && (
                  <span> 在 <span className="text-blue-400 font-semibold">{selectedCategory}</span> 类别中</span>
                )}
              </div>
            </div>

            {/* 资源卡片网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence>
                {sortedResources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -8, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1)' }}
                    className={`bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border ${resource.featured ? 'border-blue-500/30' : 'border-gray-800/50'}`}
                  >
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-2 bg-gray-800/70 rounded-lg">
                            {resource.icon}
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-400 bg-gray-800/70 px-2.5 py-1 rounded-full">
                              {resource.category}
                            </span>
                            {resource.featured && (
                              <span className="ml-2 bg-blue-500/20 text-blue-300 text-xs px-2.5 py-1 rounded-full">
                                精选
                              </span>
                            )}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                        <p className="text-gray-300 mb-6 flex-grow">{resource.description}</p>
                        <div className="flex justify-end mt-auto pt-4 border-t border-gray-800/50">
                          <span className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center group">
                            访问网站
                            <svg
                              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* 如果没有结果 */}
            {sortedResources.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-gray-900/20 rounded-xl border border-gray-800/50"
              >
                <svg
                  className="w-16 h-16 mx-auto text-gray-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-400 text-lg mb-2">暂无匹配的资源</p>
                <p className="text-gray-500 text-sm">
                  尝试使用不同的搜索词或重置筛选条件
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resources;