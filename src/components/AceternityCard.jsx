import React, { createContext, useContext, useRef, useState } from 'react';

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
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          Live and Learn
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="/astronaut.jpg"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ={20}
          as="p"
          className="mt-4 text-sm text-neutral-500 dark:text-neutral-300 leading-relaxed"
        >
          自学前端，热爱永不停止！
          
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default AceternityCard;