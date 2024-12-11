import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-lg p-8"
      >
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          About Me
        </h1>
        <div className="space-y-6 text-gray-300">
          <p>
            我喜欢阅读、写 作、艺术和旅行，这些兴趣为我带来了创意灵感。我将不断追逐我的梦想，never give up！
          </p>
          <p>
            我希望能在互联网的世界不断学习，拓展技术栈，同时提高自我的认知，不断深掘人在旅途的意义，思考人的一生，在有限的一生中留下哪怕一丝足迹
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Hobby</h2>
            <div className="flex flex-wrap gap-2">
              {['电影', '旅行', '编程', '画画', '篮球', '魔方'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
