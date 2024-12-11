import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';

const Tech = () => {
  const articles = [
    {
      title: "React 18新特性探索",
      date: "2023-11-20",
      category: "Frontend",
      content: "React 18带来了许多激动人心的新特性，包括自动批处理、Transitions API、Suspense改进等。本文将深入探讨这些特性的实际应用...",
      readingTime: "15 min",
      tags: ["React", "JavaScript", "Web Development"]
    },
    {
      title: "Three.js与React的完美结合",
      date: "2023-10-15",
      category: "3D Graphics",
      content: "在React应用中集成Three.js可以创造出令人惊叹的3D效果。本文将介绍如何使用React Three Fiber，以声明式的方式编写3D图形代码...",
      readingTime: "12 min",
      tags: ["Three.js", "React", "WebGL"]
    },
    {
      title: "现代CSS技巧与最佳实践",
      date: "2023-09-28",
      category: "CSS",
      content: "CSS在近年来有了翻天覆地的变化，从Grid布局到CSS变量，再到新的选择器语法。让我们一起探索这些强大的新特性...",
      readingTime: "10 min",
      tags: ["CSS", "Web Design", "Frontend"]
    }
  ];

  return (
    <PageLayout title="Tech Explorer">
      <div className="space-y-8">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300">
                {article.category}
              </span>
              <span className="text-gray-400 text-sm">
                {article.readingTime} read
              </span>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-2">{article.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{article.date}</p>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              {article.content}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <button className="text-blue-400 hover:text-blue-300 transition-colors">
              阅读全文 →
            </button>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Tech;
