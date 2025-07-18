import React, { useEffect, useRef } from 'react';
import { applyLazyLoading, applyProgressiveLoading } from '../utils/imageOptimizer';
/* eslint-disable react/prop-types */
/**
 * 优化的图片组件
 * 支持懒加载、渐进式加载和响应式图片
 *
 * @param {Object} props
 * @param {string} props.src - 图片URL
 * @param {string} [props.alt=''] - 图片替代文本
 * @param {string} [props.className=''] - 额外的CSS类
 * @param {string} [props.thumbnailSrc] - 缩略图URL（用于渐进式加载）
 * @param {Object} [props.responsive] - 响应式图片配置
 * @param {Object} [props.responsive.urls] - 不同尺寸的图像URL {small, medium, large}
 * @param {Object} [props.responsive.widths] - 对应的宽度 {small, medium, large}
 * @param {boolean} [props.lazy=true] - 是否启用懒加载
 * @param {boolean} [props.progressive=false] - 是否启用渐进式加载
 * @param {string} [props.loadingStrategy='lazy'] - 加载策略：'lazy'、'progressive'或'eager'
 * @param {Object} [props.imgProps] - 传递给img标签的其他属性
 */
const OptimizedImage = ({
  src,
  alt = '',
  className = '',
  thumbnailSrc,
  responsive,
  lazy = true,
  progressive = false,
  loadingStrategy = 'lazy',
  imgProps = {},
  ...rest
}) => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const img = imgRef.current;

    // 根据加载策略应用不同的优化
    if (loadingStrategy === 'progressive' && thumbnailSrc) {
      applyProgressiveLoading(img, thumbnailSrc, src);
    } else if (loadingStrategy === 'lazy' || lazy) {
      applyLazyLoading(img);
    }
    // 'eager'策略不做特殊处理，直接加载

  }, [src, thumbnailSrc, lazy, progressive, loadingStrategy]);

  // 构建srcset和sizes属性（如果提供了响应式配置）
  const srcsetAttr = responsive?.urls && responsive?.widths
    ? Object.entries(responsive.urls)
        .map(([size, url]) => `${url} ${responsive.widths[size]}w`)
        .join(', ')
    : undefined;

  const sizesAttr = responsive?.sizes || undefined;

  // 构建图片类名
  const imageClasses = [
    className,
    lazy || loadingStrategy === 'lazy' ? 'lazy-image' : '',
    progressive || loadingStrategy === 'progressive' ? 'progressive-image' : '',
  ].filter(Boolean).join(' ');

  return (
    <img
      ref={imgRef}
      src={loadingStrategy === 'lazy' || lazy ? 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E' : src}
      data-src={loadingStrategy === 'lazy' || lazy ? src : undefined}
      alt={alt}
      className={imageClasses}
      srcSet={srcsetAttr}
      sizes={sizesAttr}
      data-srcset={loadingStrategy === 'lazy' || lazy ? srcsetAttr : undefined}
      loading={lazy ? 'lazy' : undefined}
      {...imgProps}
      {...rest}
    />
  );
};

export default OptimizedImage;