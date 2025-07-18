import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiCode, FiFilm, FiMapPin, FiPenTool, FiBookOpen } from 'react-icons/fi';

const About = () => {
  // 兴趣爱好数据
  const hobbies = [
    { name: '电影', icon: <FiFilm className="text-xl" />, color: 'bg-indigo-900/60 hover:bg-indigo-800/80' },
    { name: '旅行', icon: <FiMapPin className="text-xl" />, color: 'bg-emerald-900/60 hover:bg-emerald-800/80' },
    { name: '编程', icon: <FiCode className="text-xl" />, color: 'bg-blue-900/60 hover:bg-blue-800/80' },
    { name: '画画', icon: <FiPenTool className="text-xl" />, color: 'bg-amber-900/60 hover:bg-amber-800/80' },
    { name: '篮球', icon: <FiCalendar className="text-xl" />, color: 'bg-rose-900/60 hover:bg-rose-800/80' },
    { name: '魔方', icon: <FiBookOpen className="text-xl" />, color: 'bg-purple-900/60 hover:bg-purple-800/80' }
  ];

  // 技能数据
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 70 },
    { name: "Three.js", level: 65 }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 -translate-y-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>

          {/* 头部区域 */}
          <div className="relative z-10">
            <motion.h1
              className="text-6xl font-bold mb-4 text-white inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Me
            </motion.h1>

            <motion.div
              className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-10"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </div>

          {/* 主要内容区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 relative z-10 mb-16">
            {/* 左侧区域：简介 */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-2xl font-semibold text-white mb-5 flex items-center">
                  <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
                  个人简介
                </h2>
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    我喜欢阅读、写作、艺术和旅行，这些兴趣为我带来了创意灵感。我将不断追逐我的梦想，never give up!
                  </p>
                  <p className="text-lg leading-relaxed">
                    我希望能在互联网的世界不断学习，拓展技术栈，同时提高自我的认知，不断深掘人在旅途的意义，思考人的一生，在有限的一生中留下哪怕一丝足迹。
                  </p>
                  <p className="text-lg leading-relaxed">
                   联系我：2663159189@qq.com
                  </p>
                </div>
              </motion.div>

              {/* 技能部分 */}
              <motion.div
                className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h2 className="text-2xl font-semibold text-white mb-5 flex items-center">
                  <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
                  技能
                </h2>

                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.8 + (index * 0.1) }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 右侧区域：兴趣爱好与社交链接 */}
            <div className="space-y-8">
              {/* 兴趣爱好 */}
              <motion.div
                className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl font-semibold text-white mb-5 flex items-center">
                  <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                  Hobby
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg ${hobby.color} transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="p-2 bg-gray-800/50 rounded-full">
                        {hobby.icon}
                      </div>
                      <span className="text-gray-100">{hobby.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* 引用 */}
              <motion.div
                className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300">
                  `人生就像骑自行车，为了保持平衡，你必须保持运动。`
                  <footer className="text-right mt-2 text-gray-400">— 阿尔伯特·爱因斯坦</footer>
                </blockquote>
              </motion.div>
            </div>
          </div>

          {/* 底部装饰线 */}
          <div className="relative z-10 mt-16 w-full overflow-hidden">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
