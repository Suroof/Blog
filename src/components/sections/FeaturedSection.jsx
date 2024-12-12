import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FeaturedSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "作者Github主页",
      description: "查看开源项目",
      link: "https://github.com/Suroof",
      
    },
    {
      id: 2,
      title: "AI工具合集",
      description: "提高开发效率",
      link: "https://ai-bot.cn/#term-2",
    }
  ];

  const handleProjectClick = (link) => {
    // 如果是外部链接
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      // 如果是内部路由
      navigate(link);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-gray-400">经历和教训，都是财富</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg overflow-hidden backdrop-blur-sm border border-white/10">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <button
                    onClick={() => handleProjectClick(project.link)}
                    className="self-start px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
