import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InfiniteMenu from "../blocks/components/InfiniteMenu/InfiniteMenu";
import CircularGallery from "../blocks/components/CircularGallery/CircularGallery";

const SecondHome = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 模拟或实际资源加载进度
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setLoadingProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        // 给一点额外时间确保渲染完成
        setTimeout(() => {
          setIsReady(true);
        }, 200);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      image: "/3D.png",
      link: "https://3dcool.netlify.app/",
      text: "3D交互页面",
      description: "Isn't it cool?",
    },
    {
      image: "/zn1.png",
      link: "https://github.com/Suroof/Sunroof",
      text: "智能点餐系统设计",
      description:
        "专注于用户体验的点餐系统设计，包含完整的购物流程、个性化推荐和社交功能。采用极简设计风格。",
    },
    {
      image: "/旅游页面.png",
      link: "https://github.com/Suroof/Travel",
      text: "旅游网站",
      description: "This is pretty cool, right?",
    },
    {
      image: "/tea.jpg",
      link: "https://tea4u.netlify.app/",
      text: "企业品牌网站",
      description: "This is pretty cool, right?",
    },
    {
      image: "/muti.jpg",
      link: "https://github.com/Suroof/MutiLife",
      text: "花样生活app",
      description: "This is pretty cool, right?",
    },
    {
      image: "/tea.jpg",
      link: "https://tea4u.netlify.app/",
      text: "企业品牌网站",
      description: "This is pretty cool, right?",
    },
    {
      image: "/购物网站.jpg",
      link: "https://shanghop.netlify.app/",
      text: "Shangri-la购物网站",
      description: "This is pretty cool, right?",
    },
  ];

  return (
    <>
      <AnimatePresence>
        {!isReady && (
          <motion.div
            className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="text-white mt-4">{loadingProgress}% 加载完成</p>
          </motion.div>
        )}
      </AnimatePresence>

      {isReady && (
        <div className="min-h-screen pt-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <CircularGallery
                  items={items}
                  bend={3}
                  textColor="#ffffff"
                  borderRadius={0.05}
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default SecondHome;
