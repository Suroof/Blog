import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Card3D = ({ title, description, icon, link, backgroundImage }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * 10;
    const rotateYValue = ((centerX - x) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleClick = () => {
    // Immediately reset all animations and effects
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
    
    // Navigate immediately without animation
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      navigate(link, { replace: true });
    }
  };

  return (
    <motion.div
      className="relative h-96 w-72 rounded-xl cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      initial={false}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.2s ease',
        willChange: 'transform',
      }}
    >
      <div
        className="absolute inset-0 rounded-xl transition-all duration-500"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: isHovered ? 'blur(0px)' : 'blur(5px)',
        }}
      />

      <div
        className="absolute inset-0 rounded-xl bg-black/30 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.2 : 0.4,
        }}
      />

      <div className="relative h-full rounded-xl p-8 border border-white/10">
        <div className="h-full flex flex-col">
          <div className="text-5xl mb-4">{icon}</div>
          <div className="mt-auto">
            <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-sm text-white/80">{description}</p>
          </div>
          <div className="mt-4 text-sm text-blue-300 hover:text-blue-200">
            Learn more →
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card3D;
