import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

// 创建鼠标进入状态的上下文
const MouseEnterContext = createContext(undefined);

// CardContainer 组件
const CardContainer = ({ children, className }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (containerRef.current) {
      containerRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <MouseEnterContext.Provider value={isMouseEntered}>
      <div className="flex items-center justify-center">
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className={`flex items-center justify-center relative transition-transform ease-out duration-200 ${className}`}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

// CardBody 组件
const CardBody = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full transition-colors duration-200 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

// CardItem 组件
const CardItem = ({
  as: Component = "div",
  children,
  className,
  translateZ = 0,
  ...rest
}) => {
  const isMouseEntered = useContext(MouseEnterContext);

  return (
    <Component
      className={`transition duration-200 ease-out ${className}`}
      style={{
        transform: isMouseEntered
          ? `translateZ(${translateZ}px)`
          : "translateZ(0px)",
        transformStyle: "preserve-3d",
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

// 优化的图像组件
const OptimizedImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  // 检测图像是否已经缓存
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  // LQIP (Low Quality Image Placeholder) 路径生成
  const getPlaceholderPath = (path) => {
    // 这里我们假设路径格式为 "/image.webp"
    const parts = path.split('.');
    return parts.length > 1
      ? `${parts[0]}-placeholder.${parts[1]}`
      : `${path}-placeholder`;
  };

  // 为不同设备生成不同大小的图像路径
  const generateSrcSet = (path) => {
    const parts = path.split('.');
    const basePath = parts[0];
    const ext = parts[1] || 'webp';

    return [
      `${basePath}-small.${ext} 400w`,
      `${basePath}-medium.${ext} 800w`,
      `${basePath}.${ext} 1200w`
    ].join(', ');
  };

  return (
    <div className={`${className} relative overflow-hidden`}>
      {/* 低质量图像占位符，在主图像加载时显示 */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <img
        ref={imgRef}
        src={src}
        srcSet={generateSrcSet(src)}
        sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
        alt={alt}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} w-full h-full object-cover`}
        loading="eager" // 确保LCP图像立即加载
        fetchpriority="high" // 高优先级获取
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};

// 主卡片组件
const AceternityCard = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50/35 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-800 dark:text-white"
        >
          Sroof
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-100 text-sm mt-2 dark:text-neutral-300"
        >
          Code with Passion
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <OptimizedImage
            src="/images/astronaut/astronaut.avif"
            alt="thumbnail"
            className="h-60 w-full rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        <CardItem
          translateZ={20}
          as="p"
          className="mt-4 text-sm text-neutral-100 dark:text-neutral-300 leading-relaxed"
        >
         "Learn | Build | Share"
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default AceternityCard;