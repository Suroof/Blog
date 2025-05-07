import React, { useState, useEffect } from 'react';
/**
 * 高级进度加载器组件
 * 用于在页面或组件加载时提供视觉反馈，提升用户体验
 */
const ProgressLoader = ({ minDuration = 500, initialProgress = 0 }) => {
  const [progress, setProgress] = useState(initialProgress);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        // 快速增加到 95%
        if (prev < 95) {
          return Math.min(prev + 1, 95); // 每次加1，直到95%
        }
        // 最后阶段极慢增加，模拟等待实际加载完成
        return Math.min(prev + 0.1, 99); // 接近99时缓慢推进
      });
    }, 10);
  
    const hideTimer = setTimeout(() => {
      if (progress >= 99) {
        setProgress(100);
        setTimeout(() => setVisible(false), 600);
      }
    }, minDuration);
  
    return () => {
      clearInterval(interval);
      clearTimeout(hideTimer);
    };
  }, [minDuration, progress]);
  // 当达到100%时触发淡出动画
  useEffect(() => {
    if (progress >= 100) {
      const fadeTimer = setTimeout(() => {
        setVisible(false);
      }, 300);
      return () => clearTimeout(fadeTimer);
    }
  }, [progress]);

  // 当不可见时不渲染
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-90 transition-opacity duration-500"
         style={{ opacity: progress === 100 ? 0 : 1 }}>
      {/* 加载动画 */}
      <div className="mb-8 relative">
        <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium text-blue-500">{Math.floor(progress)}%</span>
        </div>
      </div>

      {/* 进度条 */}
      <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 加载提示 */}
      <div className="text-center">
        <p className="text-white text-sm font-medium mb-1">Just a second...</p>
        <p className="text-gray-400 text-xs">
          {progress < 40 ? 'Waiting' :
           progress < 70 ? 'Loading' :
           progress < 90 ? 'Almost here' :'Let\'s go!'}
        </p>
      </div>
    </div>
  );
};

export default ProgressLoader;