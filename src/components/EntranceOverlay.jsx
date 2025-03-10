import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import GridDistortion from './GridDistortion';

const EntranceOverlay = ({ onEnter }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 鼠标移动事件处理函数
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleEnter = () => {
    // 添加按钮点击动画
    gsap.to('.entrance-button', {
      scale: 0.9,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        // 动画完成后设置为不可见并触发回调
        setIsVisible(false);
        if (onEnter) onEnter();
      }
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          onMouseMove={handleMouseMove}
        >
          {/* 使用GridDistortion组件替换原来的背景图片和Canvas粒子效果 */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <GridDistortion 
              imageSrc="/bike.jpg"
              grid={20}
              mouse={0.15}
              strength={0.2}
              relaxation={0.9}
              className="w-full h-full"
            />
          </div>
          
          {/* 背景渐变效果 */}
          <div className="absolute inset-0 z-0 pointer-events-auto bg-black/30">
            <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30"></div>
          </div>
          
          {/* 中央按钮 */}
          <motion.button
            className="entrance-button relative z-10 px-8 py-4 text-xl font-bold text-white bg-transparent border-2 border-white/30 rounded-full hover:bg-white/10 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnter}
          >
            点击进入
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EntranceOverlay;
