import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';

const Design = () => {
  const projects = [
    {
      title: "现代化博客设计",
      type: "UI/UX Design",
      description: "一个融合了3D效果、动态交互和现代设计语言的个人博客项目。采用深色主题，强调内容的可读性和视觉层次。",
      tools: ["Figma", "Blender", "Photoshop"],
      image: "/design/blog.jpg",
      link: "#"
    },
    {
      title: "电商App界面设计",
      type: "Mobile UI",
      description: "专注于用户体验的电商应用设计，包含完整的购物流程、个性化推荐和社交功能。采用极简设计风格。",
      tools: ["Sketch", "Principle", "InVision"],
      image: "/design/ecommerce.jpg",
      link: "#"
    },
    {
      title: "数据可视化面板",
      type: "Dashboard Design",
      description: "为企业级应用设计的数据分析面板，通过图表和交互设计，让复杂的数据更容易理解和使用。",
      tools: ["Figma", "D3.js", "Adobe XD"],
      image: "/design/dashboard.jpg",
      link: "#"
    }
  ];

  return (
    <PageLayout title="Design Portfolio">
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <div className="md:grid md:grid-cols-2 gap-6">
              <div className="h-64 md:h-full">
                <div className="h-full w-full bg-gray-800 flex items-center justify-center text-gray-500">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300">
                    {project.type}
            </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                <span
                      key={toolIndex}
                      className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm"
                >
                  {tool}
                </span>
              ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors text-blue-300"
                >
                  查看项目
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
            </div>
          </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Design;
