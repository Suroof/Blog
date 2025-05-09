/**
 * 图片资源优化工具
 * 用于处理图像资源的懒加载、渐进式加载和优化
 */

// 图片懒加载观察器
let imageObserver = null;

/**
 * 初始化图片懒加载观察器
 */
export const initImageObserver = () => {
  if (!('IntersectionObserver' in window)) return;

  // 如果已经初始化，则不重复创建
  if (imageObserver) return;

  imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        const srcset = img.getAttribute('data-srcset');

        if (src) img.src = src;
        if (srcset) img.srcset = srcset;

        img.onload = () => {
          img.classList.add('loaded');
          img.removeAttribute('data-src');
          img.removeAttribute('data-srcset');
        };

        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '200px 0px', // 提前200px开始加载
    threshold: 0.01
  });
};

/**
 * 对图片应用懒加载
 * @param {HTMLImageElement} imgElement - 图片元素
 */
export const applyLazyLoading = (imgElement) => {
  if (!imageObserver) initImageObserver();
  if (!imageObserver || !imgElement) return;

  // 保存原始src到data属性
  if (imgElement.src && !imgElement.getAttribute('data-src')) {
    imgElement.setAttribute('data-src', imgElement.src);
    // 设置一个小的占位图或模糊的缩略图
    imgElement.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
    imgElement.classList.add('lazy-image');
  }

  // 观察图片元素
  imageObserver.observe(imgElement);
};

/**
 * 批量应用懒加载到页面上的图片
 */
export const applyLazyLoadingToImages = () => {
  if (!('IntersectionObserver' in window)) return;

  initImageObserver();

  // 选择所有没有lazy-loaded类的图片
  const images = document.querySelectorAll('img:not(.lazy-loaded)');
  images.forEach(img => applyLazyLoading(img));
};

/**
 * 预加载关键图片
 * @param {string[]} imagePaths - 图片路径数组
 * @returns {Promise} - 加载完成的Promise
 */
export const preloadCriticalImages = (imagePaths) => {
  return Promise.all(
    imagePaths.map(path => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(path);
        img.onerror = () => reject(new Error(`Failed to load image: ${path}`));
        img.src = path;
      });
    })
  );
};

/**
 * 获取适合当前设备的图像尺寸
 * @param {Object} sizes - 不同尺寸的图像对象 {small, medium, large}
 * @returns {string} - 适合当前设备的图像URL
 */
export const getResponsiveImageUrl = (sizes) => {
  const width = window.innerWidth;

  if (width <= 640) return sizes.small;
  if (width <= 1024) return sizes.medium;
  return sizes.large;
};

/**
 * 生成响应式图片srcset属性
 * @param {Object} urls - 不同尺寸的图像URL {small, medium, large}
 * @param {Object} widths - 对应的宽度 {small, medium, large}
 * @returns {string} - srcset属性值
 */
export const generateSrcSet = (urls, widths) => {
  return Object.entries(urls)
    .map(([size, url]) => `${url} ${widths[size]}w`)
    .join(', ');
};

/**
 * 应用渐进式图像加载
 * @param {HTMLImageElement} imgElement - 图片元素
 * @param {string} thumbnailSrc - 缩略图URL
 * @param {string} fullSrc - 完整图像URL
 */
export const applyProgressiveLoading = (imgElement, thumbnailSrc, fullSrc) => {
  // 先加载缩略图
  imgElement.src = thumbnailSrc;
  imgElement.classList.add('progressive-image');

  // 然后加载完整图像
  const fullImg = new Image();
  fullImg.onload = () => {
    imgElement.src = fullSrc;
    imgElement.classList.add('loaded');
  };
  fullImg.src = fullSrc;
};

/**
 * 清理图片观察器
 */
export const cleanupImageObserver = () => {
  if (imageObserver) {
    imageObserver.disconnect();
    imageObserver = null;
  }
};