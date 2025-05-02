/**
 * 性能优化工具
 * 用于改善应用程序的加载性能和运行时性能
 */

// 图片懒加载函数 - 使用Intersection Observer API
export function setupImageLazyLoading() {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          // 设置真实源
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          // 移除观察器
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// 组件预加载 - 路由跳转前预加载相关页面
export function preloadComponents(componentPaths) {
  return Promise.all(
    componentPaths.map(path => import(/* @vite-ignore */ path).catch(err => console.warn(`Failed to preload: ${path}`, err)))
  );
}

// 延迟加载非关键CSS
export function loadDeferredStyles(stylesheetUrl) {
  const styleSheet = document.createElement('link');
  styleSheet.rel = 'stylesheet';
  styleSheet.href = stylesheetUrl;
  styleSheet.type = 'text/css';
  document.head.appendChild(styleSheet);
}

// 测量组件渲染性能
export function measureRenderTime(componentName, callback) {
  return (...args) => {
    const start = performance.now();
    const result = callback(...args);
    const end = performance.now();
    console.log(`[Performance] ${componentName} render time: ${(end - start).toFixed(2)}ms`);
    return result;
  };
}

// 检查动画帧率
export function monitorFrameRate() {
  let lastTime = performance.now();
  let frames = 0;
  let fps = 0;

  function loop() {
    const now = performance.now();
    frames++;

    if (now >= lastTime + 1000) {
      fps = frames;
      frames = 0;
      lastTime = now;

      // 如果帧率低于30fps，可能需要降级渲染
      if (fps < 30) {
        document.body.classList.add('reduce-animations');
      } else {
        document.body.classList.remove('reduce-animations');
      }
    }

    requestAnimationFrame(loop);
  }

  // 开始监控
  requestAnimationFrame(loop);

  return () => fps; // 返回获取当前fps的函数
}

// 检测用户设备性能
export function detectDevicePerformance() {
  const performance = {
    isLowEnd: false,
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    cpuCores: navigator.hardwareConcurrency || 1
  };

  // CPU核心数较少可能表示低端设备
  if (performance.cpuCores <= 2) {
    performance.isLowEnd = true;
  }

  // 检测内存（如果可用）
  if (navigator.deviceMemory) {
    performance.memory = navigator.deviceMemory;
    if (navigator.deviceMemory <= 2) {
      performance.isLowEnd = true;
    }
  }

  return performance;
}

// 根据设备性能调整应用配置
export function optimizeForDevice() {
  const device = detectDevicePerformance();

  // 全局配置对象
  window.APP_CONFIG = {
    enableHeavyAnimations: !device.isLowEnd && !device.isReducedMotion,
    enableParticles: !device.isLowEnd && !device.isMobile,
    enable3DBackground: !device.isLowEnd,
    imageQuality: device.isLowEnd ? 'low' : 'high',
    maxParticles: device.isLowEnd ? 20 : device.isMobile ? 50 : 100
  };

  // 应用CSS类以便通过CSS选择器降级体验
  if (device.isLowEnd) {
    document.body.classList.add('low-end-device');
  }

  if (device.isMobile) {
    document.body.classList.add('mobile-device');
  }

  if (device.isReducedMotion) {
    document.body.classList.add('reduced-motion');
  }

  return window.APP_CONFIG;
}
