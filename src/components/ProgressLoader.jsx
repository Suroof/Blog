import React, { useState, useEffect } from 'react';
import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";
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
        // 确保进度能增加到100%
        if (prev < 100) {
          return Math.min(prev + 1, 100);
        }
        return prev;
      });
    }, 100);
  
    const hideTimer = setTimeout(() => {
      if (progress >= 100) {
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
      {/* 圆形进度条动画 */}
      <AnimatedCircularProgressBar
        value={progress}
        max={100}
        min={0}
        gaugePrimaryColor="#3b82f6"
        gaugeSecondaryColor="#3b82f633"
        className="mb-8"
      />

      {/* 加载提示 */}

    </div>
  );
};

export default ProgressLoader;