import React from 'react';
import { motion } from 'framer-motion';
import Card3D from '../components/Card3D';
import AceternityCard from '../components/AceternityCard';
import { PERSONAL_INFO_CARDS } from '../utils/constants';
import FeaturedSection from '../components/sections/FeaturedSection';
import SkillsSection from '../components/sections/SkillsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 mb-32"
      >
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Welcome to My Space
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16">
            灵感总在长夜迸发
          </p>

          {/* 新增的 Aceternity UI 卡片 */}
          <div className="mb-32">
            <AceternityCard />
          </div>
        </div>

        {/* 原有的卡片布局 */}
        <div className="flex flex-wrap justify-center gap-16">
          {PERSONAL_INFO_CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`transform ${
                index % 2 === 0 ? 'scale-110' : 'scale-90 mt-16'
              }`}
            >
              <Card3D {...card} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <FeaturedSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
