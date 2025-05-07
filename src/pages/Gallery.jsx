import React, { useState } from 'react';
import { motion } from 'framer-motion';

// 示例图片数据
const GALLERY_IMAGES = [
  {
    id: 1,
    title: '城市天际线',
    src: '/skyline.webp',
    category: 'urban',
    date: '2023-04-15'
  },
  {
    id: 2,
    title: '山脉日落',
    src: '/mout.webp',
    category: 'nature',
    date: '2023-05-22'
  },
  {
    id: 3,
    title: '海滩风光',
    src: '/sunset.webp',
    category: 'travel',
    date: '2023-06-10'
  },
  {
    id: 4,
    title: '街头艺术',
    src: '/streetart.webp',
    category: 'urban',
    date: '2023-07-05'
  },
  {
    id: 5,
    title: '森林小径',
    src: '/forest.webp',
    category: 'nature',
    date: '2023-08-12'
  },
  {
    id: 6,
    title: '咖啡馆一角',
    src: '/cafeee.webp',
    category: 'lifestyle',
    date: '2023-09-01'
  },
  {
    id: 7,
    title: '建筑之美',
    src: '/church.webp',
    category: 'architecture',
    date: '2023-10-19'
  },
  {
    id: 8,
    title: '极光奇观',
    src: '/aurora.webp',
    category: 'nature',
    date: '2023-11-24'
  },
  {
    id: 9,
    title: '城市夜景',
    src: '/bridge.webp',
    category: 'urban',
    date: '2023-12-30'
  }
];

// 图片分类
const CATEGORIES = ['全部', 'urban', 'nature', 'travel', 'lifestyle', 'architecture'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [hoveredId, setHoveredId] = useState(null);

  // 根据选择的分类过滤图片
  const filteredImages = selectedCategory === '全部'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          我的相册
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 text-center">
          记录生活中的美好瞬间
        </p>

        {/* 分类筛选 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 照片瀑布流 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layoutId={`image-${image.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg"
              style={{ aspectRatio: '1/1' }}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                style={{
                  transform: hoveredId === image.id ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300"
                style={{
                  opacity: hoveredId === image.id ? 1 : 0.7
                }}
              >
                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                <p className="text-sm text-gray-300">{image.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;